import { TestBed } from '@angular/core/testing';

import { ItemsListResolverService } from './items-list-resolver.service';

describe('ItemsListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemsListResolverService = TestBed.get(ItemsListResolverService);
    expect(service).toBeTruthy();
  });
});
