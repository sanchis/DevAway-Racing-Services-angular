import { Driver } from './driver.model';
import { RankingRace } from './ranking-race.model';

export interface RankingPilot {
  pilot: Driver;
  races: RankingPilotRace[];
}

export interface RankingPilotRace {
  position: number;
  time: string | undefined;
  raceName: string;
}
