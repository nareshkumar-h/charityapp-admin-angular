import { TestBed } from '@angular/core/testing';

import { ListdonorService } from './listdonor.service';

describe('ListdonorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListdonorService = TestBed.get(ListdonorService);
    expect(service).toBeTruthy();
  });
});
