import { TestBed } from '@angular/core/testing';

import { KPIService } from './kpi.service';

describe('KPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KPIService = TestBed.get(KPIService);
    expect(service).toBeTruthy();
  });
});
