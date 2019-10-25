import { TestBed } from '@angular/core/testing';

import { FundserviceService } from './fundservice.service';

describe('FundserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FundserviceService = TestBed.get(FundserviceService);
    expect(service).toBeTruthy();
  });
});
