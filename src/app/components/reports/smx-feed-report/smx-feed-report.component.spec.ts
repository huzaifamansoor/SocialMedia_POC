import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmxFeedReportComponent } from './smx-feed-report.component';

describe('SmxFeedComponent', () => {
  let component: SmxFeedReportComponent;
  let fixture: ComponentFixture<SmxFeedReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmxFeedReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmxFeedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
