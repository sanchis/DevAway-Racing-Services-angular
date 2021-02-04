import { Component, OnInit } from '@angular/core';
import { KartsService } from 'src/app/services/karts.service';

@Component({
  selector: 'devaway-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent {
  constructor(public readonly kartsService: KartsService) { }
}
