import { Component, Input } from '@angular/core';
import { RankingRace } from 'src/app/models/ranking-race.model';

@Component({
  selector: 'devaway-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent {

  columns = ['position', 'name', 'team', 'age', 'time'];
  @Input() race: RankingRace[] | null = null;
  @Input() raceName = '';
  constructor() { }
}
