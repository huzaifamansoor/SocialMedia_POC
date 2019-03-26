import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmxSearchReportComponent } from './smx-search-report.component';

describe('SmxSearchReportComponent', () => {
  let component: SmxSearchReportComponent;
  let fixture: ComponentFixture<SmxSearchReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmxSearchReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmxSearchReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
