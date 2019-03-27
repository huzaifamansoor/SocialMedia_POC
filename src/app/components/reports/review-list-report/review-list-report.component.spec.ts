import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewListReportComponent } from './review-list-report.component';

describe('ReviewListComponent', () => {
  let component: ReviewListReportComponent;
  let fixture: ComponentFixture<ReviewListReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewListReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewListReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
