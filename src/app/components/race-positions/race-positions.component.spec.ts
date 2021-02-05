import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RacePositionsComponent } from './race-positions.component';

describe('RacePositionsComponent', () => {
  let component: RacePositionsComponent;
  let fixture: ComponentFixture<RacePositionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RacePositionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacePositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
