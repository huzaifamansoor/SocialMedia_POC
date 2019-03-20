import { TestBed } from '@angular/core/testing';

import { TopBottomPerformerService } from './top-bottom-performer.service';

describe('TopBottomPerformerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopBottomPerformerService = TestBed.get(TopBottomPerformerService);
    expect(service).toBeTruthy();
  });
});
