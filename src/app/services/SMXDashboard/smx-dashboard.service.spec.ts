import { TestBed } from '@angular/core/testing';

import { SmxDashboardService } from './smx-dashboard.service';

describe('SmxDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmxDashboardService = TestBed.get(SmxDashboardService);
    expect(service).toBeTruthy();
  });
});
