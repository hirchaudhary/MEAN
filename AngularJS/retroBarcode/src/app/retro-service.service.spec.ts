import { TestBed, inject } from '@angular/core/testing';

import { RetroServiceService } from './retro-service.service';

describe('RetroServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetroServiceService]
    });
  });

  it('should be created', inject([RetroServiceService], (service: RetroServiceService) => {
    expect(service).toBeTruthy();
  }));
});
