import { Component } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { KartsService } from 'src/app/services/karts.service';

@Component({
  selector: 'devaway-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class PilotsComponent {

  constructor(public readonly kartsService: KartsService) { }
}
