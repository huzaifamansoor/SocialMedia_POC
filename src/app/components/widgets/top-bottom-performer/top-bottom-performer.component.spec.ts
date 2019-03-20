import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBottomPerformerComponent } from './top-bottom-performer.component';

describe('TopBottomPerformerComponent', () => {
  let component: TopBottomPerformerComponent;
  let fixture: ComponentFixture<TopBottomPerformerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBottomPerformerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBottomPerformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
