import { Component, Input, OnInit } from '@angular/core';
import { Driver } from 'src/app/models/driver.model';
import { RankingRace } from 'src/app/models/ranking-race.model';

@Component({
  selector: 'devaway-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.scss']
})
export class PilotComponent {

  @Input() rankingPosition: number | null = null;
  @Input() driver: Driver | RankingRace | undefined;
  constructor() { }

}
