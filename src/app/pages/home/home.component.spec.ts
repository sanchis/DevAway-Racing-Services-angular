import { ComponentFixture, fakeAsync, flush, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { MAX_TIME_SECONDS } from 'src/app/app.constants';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: Window, useValue: window }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('start observer', () => {
    // tslint:disable-next-line: no-string-literal
    component['$start'].next();
    expect(component).toBeTruthy();
  });

  it('pause observer', () => {
    // tslint:disable-next-line: no-string-literal
    component['$pause'].next();
    expect(component).toBeTruthy();
  });

  it('toggle status', () => {
    const beforeChangeStatus = component.scrollIsRunning;
    component.toggleStatusScroll();
    expect(component.scrollIsRunning).toBe(!beforeChangeStatus);
    component.toggleStatusScroll();
    expect(component.scrollIsRunning).toBe(beforeChangeStatus);
  });

  it('component change', () => {
    const beforeChangeStatus = component.progress;
    // tslint:disable-next-line: no-string-literal
    component['componentSlider']();
    expect(component.progress).toBeGreaterThan(beforeChangeStatus);
    for (let ticks = 0; ticks < MAX_TIME_SECONDS; ticks++) {
      // tslint:disable-next-line: no-string-literal
      component['componentSlider']();
    }
    expect(component.currentComponent).toBe(1);
    expect(component.progress).toBeGreaterThan(2);
  });

  it('interval tick and progress change', fakeAsync(() => {
    component.ngOnInit();
    tick(1000);
    expect(component.progress).toBeGreaterThan(1);
    component.ngOnDestroy();
  }));

  it('interval move last component', fakeAsync(() => {
    component.currentComponent = 2;
    component.ngOnInit();
    tick(MAX_TIME_SECONDS * 1000);
    expect(component.currentComponent).toBe(0);
    component.ngOnDestroy();
  }));
});
