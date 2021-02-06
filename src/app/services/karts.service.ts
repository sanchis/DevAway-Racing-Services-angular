import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { RACES_COUNT } from '../app.constants';
import { Driver } from '../models/driver.model';
import { Race } from '../models/race.model';
import { RankingPilot } from '../models/ranking-pilot.model';
import { RankingRace } from '../models/ranking-race.model';
import { default as drivers } from './data.json';



@Injectable()
export class KartsService {

  private readonly drivers = drivers;
  public readonly globalRanking = this.getGlobalRanking();
  public readonly getRankinPilotRaces = this.drivers.map(drv => this.getRankingByPilot(drv._id));
  public readonly races = this.getRaces();

  constructor() { }

  /**
   * Get data form pilot name
   */
  private getPilot(id: string): Driver | undefined {
    return this.drivers.find(driver => driver._id === id);
  }

  /**
   * Get Ranking by race name
   */
  private getRankingByRace(raceName: string): RankingRace[] {
    return this.drivers.map(drv => {
      const { races, ...pilot } = drv;
      const time = this.getPilotRace(drv, raceName)?.time;
      return { time, ...pilot };
    }).sort((driver1, driver2) =>
      this.sortTime(driver1?.time || '', driver2?.time || '')
    );
  }

  /**
   * Get pilot and position for every race
   */
  private getRankingByPilot(id: string): RankingPilot | null {
    const pilot = this.getPilot(id);
    if (pilot) {
      const races = pilot.races.map(race => {
        const rankingByRace = this.getRankingByRace(race.name);
        const pilotInRace = rankingByRace.find(racePilot => racePilot._id === id);
        const position = rankingByRace.findIndex(racePilot => racePilot._id === id);
        return { position: position + 1, time: pilotInRace?.time, raceName: race.name };
      });
      return { pilot, races };
    }
    return null;
  }

  /**
   * Get specific race from pilot
   */
  private getPilotRace(pilot: Driver, raceName: string): Race | undefined {
    return pilot.races.find(race => race.name === raceName);
  }

  /**
   *  Get global ranking from championship
   */
  private getGlobalRanking(): RankingRace[] {
    const ranking = new Map<string, { pilot: RankingRace, position: number }>();
    this.getRaces().forEach((races) => {
      /** For every race set the pilot and position */
      races.forEach((pilot, position) => {
        const valuePilot = ranking.get(pilot._id)?.position || 0;
        ranking.set(pilot._id, { pilot, position: (valuePilot + position) });
      });
    });

    /** Sort all the positions for all the races */
    return Array.from(ranking, ([, pilot]) => (pilot))
      .sort((driver1, driver2) => driver1.position - driver2.position)
      .map(rankingMap => rankingMap.pilot);
  }

  /**
   * Get all races championship
   */
  private getRaces(): RankingRace[][] {
    /** Create empty array with number of races */
    return [...Array(RACES_COUNT).keys()].map(raceNumber =>
      this.getRankingByRace(`Race ${raceNumber}`)
    );
  }

  /**
   * Sort timing
   */
  private sortTime(time1: string, time2: string): number {
    return moment(time1, 'h:mm:ss:SSS').diff(moment(time2, 'h:mm:ss:SSS'));
  }

}
