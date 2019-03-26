import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmxFeedComponent } from './smx-feed.component';

describe('SmxFeedComponent', () => {
  let component: SmxFeedComponent;
  let fixture: ComponentFixture<SmxFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmxFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmxFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
