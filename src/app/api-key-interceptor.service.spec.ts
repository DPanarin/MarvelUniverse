import { TestBed } from '@angular/core/testing';

import { ApiKeyInterceptorService } from './api-key-interceptor.service';

describe('ApiKeyInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiKeyInterceptorService = TestBed.get(ApiKeyInterceptorService);
    expect(service).toBeTruthy();
  });
});
