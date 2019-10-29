import { TestBed } from '@angular/core/testing';

import { ListadminService } from './listadmin.service';

describe('ListadminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListadminService = TestBed.get(ListadminService);
    expect(service).toBeTruthy();
  });
});
