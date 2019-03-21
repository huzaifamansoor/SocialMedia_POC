import { TestBed } from '@angular/core/testing';

import { TopReviewsService } from './top-reviews.service';

describe('TopReviewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopReviewsService = TestBed.get(TopReviewsService);
    expect(service).toBeTruthy();
  });
});
