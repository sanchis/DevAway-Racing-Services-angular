import { Component } from '@angular/core';
import { KartsService } from 'src/app/services/karts.service';

@Component({
  selector: 'devaway-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.scss']
})
export class PilotsComponent {

  constructor(public readonly kartsService: KartsService) { }
}
