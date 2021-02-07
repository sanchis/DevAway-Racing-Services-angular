import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RaceComponent } from './race.component';

describe('RaceComponent', () => {
  let component: RaceComponent;
  let fixture: ComponentFixture<RaceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RaceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('input race', () => {
    const data = [{
      _id: '1',
      name: '2',
      age: 22,
      picture: '',
      team: 'Devaway'
    }];
    component.race = data;
    expect(component.dataSource.data).toEqual(data);
  });
});
