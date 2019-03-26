import { TestBed } from '@angular/core/testing';

import { SmxSearchService } from './smx-search.service';

describe('SmxSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmxSearchService = TestBed.get(SmxSearchService);
    expect(service).toBeTruthy();
  });
});
