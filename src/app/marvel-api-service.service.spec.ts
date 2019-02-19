import { TestBed } from '@angular/core/testing';

import { MarvelApiServiceService } from './marvel-api-service.service';

describe('MarvelApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarvelApiServiceService = TestBed.get(MarvelApiServiceService);
    expect(service).toBeTruthy();
  });
});
