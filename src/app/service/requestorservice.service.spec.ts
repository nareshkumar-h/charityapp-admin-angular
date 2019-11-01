import { TestBed } from '@angular/core/testing';

import { RequestorserviceService } from './requestorservice.service';

describe('RequestorserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestorserviceService = TestBed.get(RequestorserviceService);
    expect(service).toBeTruthy();
  });
});
