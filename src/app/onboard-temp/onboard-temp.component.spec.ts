import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardTempComponent } from './onboard-temp.component';

describe('OnboardTempComponent', () => {
  let component: OnboardTempComponent;
  let fixture: ComponentFixture<OnboardTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
