import { Component } from '@angular/core';
import { bounceInLeftOnEnterAnimation, rubberBandOnEnterAnimation } from 'angular-animations';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'devaway-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    rubberBandOnEnterAnimation(),
    bounceInLeftOnEnterAnimation({
      anchor: 'bounceOne',
      delay: 0
    }),
    bounceInLeftOnEnterAnimation({
      anchor: 'bounceTwo',
      delay: 1000
    }),
    bounceInLeftOnEnterAnimation({
      anchor: 'bounceThree',
      delay: 2000
    })
  ]
})
export class NavbarComponent {

  constructor() { }
}
