import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectModifyComponent } from './select-modify.component';

describe('SelectModifyComponent', () => {
  let component: SelectModifyComponent;
  let fixture: ComponentFixture<SelectModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
