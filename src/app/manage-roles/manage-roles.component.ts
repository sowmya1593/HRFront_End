import { Component, OnInit } from '@angular/core';
import { NgForm,  FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-roles',
  templateUrl: './manage-roles.component.html',
  styleUrls: ['./manage-roles.component.css']
})
export class ManageRolesComponent implements OnInit {
  public changeToInfo: boolean;
  public addRoles: boolean
  
  constructor() { }

  ngOnInit() {
  }
  
  showUserInfo(){
    this.changeToInfo = true;
  }
  
  addRoleColumn(){
    this.addRoles = true;
  }

}
