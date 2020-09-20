import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesHComponent } from './policies-h.component';

describe('PoliciesHComponent', () => {
  let component: PoliciesHComponent;
  let fixture: ComponentFixture<PoliciesHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
