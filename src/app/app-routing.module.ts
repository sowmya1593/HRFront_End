import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardCreateComponent } from './onboard-create/onboard-create.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ManageApprovalsComponent } from './manage-approvals/manage-approvals.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { ModifyComponent } from './modify/modify.component';
import { OnboardTempComponent } from './onboard-temp/onboard-temp.component';
import { ModifyGroupComponent } from './modify-group/modify-group.component';
import { EmployeeTypeComponent } from './employee-type/employee-type.component';
import { SelectModifyComponent } from './select-modify/select-modify.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'onBoardClassifiedAndWage', component: OnboardCreateComponent},
  {path: 'manageApprovals', component: ManageApprovalsComponent},
  {path: 'manageUserRoles', component: ManageRolesComponent},
  {path: 'manageRoles', component: RolesComponent},
  {path: 'modifyIndividual', component: ModifyComponent},
  {path: 'modifyGroup', component: ModifyGroupComponent},
  {path: 'onBoardVolunteersAndContractors', component: OnboardTempComponent},
  {path: 'selectEmployeeType', component: EmployeeTypeComponent},
  {path: 'selectModifyType', component: SelectModifyComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
