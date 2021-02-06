import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { KartsService } from 'src/app/services/karts.service';

@Component({
  selector: 'devaway-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class RacesComponent {
  constructor(public readonly kartsService: KartsService) { }
}
