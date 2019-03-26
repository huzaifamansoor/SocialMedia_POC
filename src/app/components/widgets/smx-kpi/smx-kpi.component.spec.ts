import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmxKpiComponent } from './smx-kpi.component';

describe('SmxKpiComponent', () => {
  let component: SmxKpiComponent;
  let fixture: ComponentFixture<SmxKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmxKpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmxKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
