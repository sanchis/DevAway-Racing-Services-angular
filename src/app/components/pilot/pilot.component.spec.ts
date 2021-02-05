import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PilotComponent } from './pilot.component';

describe('PilotComponent', () => {
  let component: PilotComponent;
  let fixture: ComponentFixture<PilotComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PilotComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
