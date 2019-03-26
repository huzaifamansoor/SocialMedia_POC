import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmxSearchComponent } from './smx-search.component';

describe('SmxSearchComponent', () => {
  let component: SmxSearchComponent;
  let fixture: ComponentFixture<SmxSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmxSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmxSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
