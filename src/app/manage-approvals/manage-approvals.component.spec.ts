import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageApprovalsComponent } from './manage-approvals.component';

describe('ManageApprovalsComponent', () => {
  let component: ManageApprovalsComponent;
  let fixture: ComponentFixture<ManageApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
