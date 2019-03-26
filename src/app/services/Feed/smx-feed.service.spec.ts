import { TestBed } from '@angular/core/testing';

import { SmxFeedService } from './smx-feed.service';

describe('SmxFeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmxFeedService = TestBed.get(SmxFeedService);
    expect(service).toBeTruthy();
  });
});
