import { Component, OnInit } from '@angular/core';
import { KartsService } from 'src/app/services/karts.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent {

  constructor(public kartsService: KartsService) { }
}
