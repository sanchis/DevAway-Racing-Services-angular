import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { repeatWhen, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'devaway-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject();
  public progress = 1;
  public currentComponent = 0;
  public scrollIsRunning = true;

  private readonly $pause = new Subject<void>();
  private readonly $start = new Subject<void>();
  private readonly MAX_TIME_SECONDS = 30;


  constructor(@Inject(DOCUMENT) private doc: Document, private window: Window) { }

  ngOnInit(): void {
    this.unsubscribe = new Subject();
    this.scrollToTop();
    interval(1000).pipe(takeUntil(this.unsubscribe),
      takeUntil(this.$pause),
      repeatWhen(() => this.$start)
    ).subscribe(() => this.componentSlider());
  }

  toogleStatusScroll(): void {
    if (this.scrollIsRunning) {
      this.$pause.next();
    } else {
      this.$start.next();
    }
    this.scrollIsRunning = !this.scrollIsRunning;
  }



  private componentSlider(): void {
    this.autoScroll();
    this.progress += (100 / this.MAX_TIME_SECONDS);
    if (this.progress >= 100) {
      this.progress = 1;
      this.currentComponent = this.currentComponent === 2 ? 0 : this.currentComponent + 1;
      this.scrollToTop();
    }
  }

  private scrollToTop(): void {
    this.window.scrollTo({
      behavior: 'smooth',
      top: 0
    });
  }


  private autoScroll(): void {
    if (this.progress > 5) {
      this.window.scrollTo({
        behavior: 'smooth',
        top: (this.window.scrollY + (document.body.scrollHeight
          / this.MAX_TIME_SECONDS))
      });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
