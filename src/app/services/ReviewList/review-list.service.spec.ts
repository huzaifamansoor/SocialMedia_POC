import { TestBed } from '@angular/core/testing';

import { ReviewListService } from './review-list.service';

describe('ReviewListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewListService = TestBed.get(ReviewListService);
    expect(service).toBeTruthy();
  });
});
