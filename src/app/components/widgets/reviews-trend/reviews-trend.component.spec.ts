import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsTrendComponent } from './reviews-trend.component';

describe('LineAreaChartComponent', () => {
  let component: ReviewsTrendComponent;
  let fixture: ComponentFixture<ReviewsTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
