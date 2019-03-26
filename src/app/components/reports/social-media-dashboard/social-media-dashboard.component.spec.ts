import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaDashboardComponent } from './social-media-dashboard.component';

describe('SocialMediaDashboardComponent', () => {
  let component: SocialMediaDashboardComponent;
  let fixture: ComponentFixture<SocialMediaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
