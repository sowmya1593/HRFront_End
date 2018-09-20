import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MyDatePickerModule } from 'mydatepicker';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OnboardCreateComponent } from './onboard-create/onboard-create.component';
import { AppRoutingModule } from './/app-routing.module';
import { CoreModule } from './core/core.module';
import { StickyBarComponent } from './sticky-bar/sticky-bar.component';
import { ManageApprovalsComponent } from './manage-approvals/manage-approvals.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';
import { RolesComponent } from './roles/roles.component';
import { ModifyComponent } from './modify/modify.component';
import { OnboardTempComponent } from './onboard-temp/onboard-temp.component';
import { HttpModule } from '@angular/http';
import { ModifyGroupComponent } from './modify-group/modify-group.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomePageComponent,
    OnboardCreateComponent,
    StickyBarComponent,
    ManageApprovalsComponent,
    ManageRolesComponent,
    RolesComponent,
    ModifyComponent,
    OnboardTempComponent,
    ModifyGroupComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    MyDatePickerModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
