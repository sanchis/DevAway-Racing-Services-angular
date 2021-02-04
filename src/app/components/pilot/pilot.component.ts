import { Component, Input, OnInit } from '@angular/core';
import { Driver } from 'src/app/models/driver.model';

@Component({
  selector: 'devaway-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.scss']
})
export class PilotComponent {

  @Input() driver: Driver | null = null;
  constructor() { }

}
