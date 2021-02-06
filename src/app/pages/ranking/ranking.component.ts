import { Component } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { KartsService } from 'src/app/services/karts.service';

@Component({
  selector: 'devaway-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class RankingComponent {

  constructor(public kartsService: KartsService) { }
}
