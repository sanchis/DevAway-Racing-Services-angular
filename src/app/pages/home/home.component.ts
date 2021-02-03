import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';

@Component({
  selector: 'devaway-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public progress = 1;
  public currentComponent = 0;
  private readonly MAX_TIME_SECONDS = 30;


  constructor() { }

  ngOnInit() {
    interval(1000).subscribe(() => this.componentSlider());
  }

  private componentSlider() {
    this.progress += (100 / this.MAX_TIME_SECONDS);
    console.log(this.progress);
    if (this.progress >= 100) {
      this.progress = 1;
      this.currentComponent = this.currentComponent === 2 ? 0 : this.currentComponent + 1;
    }
  }

}
