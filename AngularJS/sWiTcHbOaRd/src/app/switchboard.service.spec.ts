import { TestBed, inject } from '@angular/core/testing';

import { SwitchboardService } from './switchboard.service';

describe('SwitchboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwitchboardService]
    });
  });

  it('should be created', inject([SwitchboardService], (service: SwitchboardService) => {
    expect(service).toBeTruthy();
  }));
});
