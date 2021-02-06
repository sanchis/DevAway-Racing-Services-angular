import { TestBed, inject } from '@angular/core/testing';
import { KartsService } from './karts.service';
import { default as drivers } from './data-testing.json';

describe('Service: Karts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KartsService]
    });
  });

  beforeEach(inject([KartsService], (service: any) => {
    Object.defineProperty(service, 'drivers', { value: drivers });
    Object.defineProperty(service, 'RACES_COUNT', { value: 2 });
    Object.defineProperty(service, 'races', { value: service.getRaces() });
    Object.defineProperty(service, 'getRankinPilotRaces', { value: drivers.map(drv => service.getRankingByPilot(drv._id)) });
    Object.defineProperty(service, 'globalRanking', { value: service.getGlobalRanking() });
  }));

  it('should ...', inject([KartsService], (service: KartsService) => {
    expect(service).toBeTruthy();
  }));

  it('data as data-testing', inject([KartsService], (service: any) => {
    console.log('d', drivers);
    expect(service.drivers).toEqual(drivers);
  }));

  it('races property', inject([KartsService], (service: KartsService) => {
    console.log(service.races);
    expect(service.races).toHaveSize(10);
    expect(service.races[0]).toHaveSize(4);
    expect(service.races[0][0]._id).toEqual('5f3a3c5fc4c1a2c2dd9df702');
    expect(service.races[3][3]._id).toEqual('5f3a3c5f355a5be1fb74076a');
  }));

  it('ranking on null', inject([KartsService], (service: any) => {
    expect(service.getRankingByPilot('5f3a3c5f355a5be1fb740761')).toBeNull();
  }));
});
