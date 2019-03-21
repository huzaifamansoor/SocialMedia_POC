import { TestBed } from '@angular/core/testing';

import { ReviewsTrendService } from './reviews-trend.service';

describe('ReviewsTrendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewsTrendService = TestBed.get(ReviewsTrendService);
    expect(service).toBeTruthy();
  });
});
