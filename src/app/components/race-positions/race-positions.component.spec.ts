/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RacePositionsComponent } from './race-positions.component';

describe('RacePositionsComponent', () => {
  let component: RacePositionsComponent;
  let fixture: ComponentFixture<RacePositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacePositionsComponent ]
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
