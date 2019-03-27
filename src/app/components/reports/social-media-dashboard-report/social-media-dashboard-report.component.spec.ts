import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaDashboardReportComponent } from './social-media-dashboard-report.component';

describe('SocialMediaDashboardComponent', () => {
  let component: SocialMediaDashboardReportComponent;
  let fixture: ComponentFixture<SocialMediaDashboardReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaDashboardReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaDashboardReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
