import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PilotsComponent } from './pilots.component';

describe('PilotsComponent', () => {
  let component: PilotsComponent;
  let fixture: ComponentFixture<PilotsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PilotsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
