import { TestBed, inject } from '@angular/core/testing';
import { KartsService } from './karts.service';

describe('Service: Karts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KartsService]
    });
  });

  it('should ...', inject([KartsService], (service: KartsService) => {
    expect(service).toBeTruthy();
  }));
});
