import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardCreateComponent } from './onboard-create.component';

describe('OnboardCreateComponent', () => {
  let component: OnboardCreateComponent;
  let fixture: ComponentFixture<OnboardCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
