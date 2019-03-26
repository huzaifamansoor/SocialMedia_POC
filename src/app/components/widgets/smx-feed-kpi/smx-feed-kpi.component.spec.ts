import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmxFeedKpiComponent } from './smx-feed-kpi.component';

describe('SmxFeedKpiComponent', () => {
  let component: SmxFeedKpiComponent;
  let fixture: ComponentFixture<SmxFeedKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmxFeedKpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmxFeedKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
