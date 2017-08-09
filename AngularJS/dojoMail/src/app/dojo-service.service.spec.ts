import { TestBed, inject } from '@angular/core/testing';

import { DojoServiceService } from './dojo-service.service';

describe('DojoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DojoServiceService]
    });
  });

  it('should be created', inject([DojoServiceService], (service: DojoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
