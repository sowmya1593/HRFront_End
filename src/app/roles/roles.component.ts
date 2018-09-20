import { Component, OnInit } from '@angular/core';
import { NgForm,  FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  public showFields: boolean;
  public firstDropDown: boolean;
  public secondDropDown: boolean

  constructor() { }

  ngOnInit() {
  }
  
  showOtherFields(event){
   if(event){
      this.showFields = true;
   }
    else{
      this.showFields = false;
   }
  }
  
  first(event){
    this.firstDropDown = true;
  }
  
  second(event){
    this.secondDropDown = true;
  }

}
