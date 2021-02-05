import { Component, Input } from '@angular/core';
import { RankingPilotRace } from 'src/app/models/ranking-pilot.model';

@Component({
  selector: 'devaway-race-positions',
  templateUrl: './race-positions.component.html',
  styleUrls: ['./race-positions.component.scss']
})
export class RacePositionsComponent {

  columns = ['name', 'position', 'time'];
  @Input() races: RankingPilotRace[] | undefined = []
  constructor() { }


}
