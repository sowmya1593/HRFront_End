import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm,  FormsModule } from '@angular/forms';
import { IMyDate, IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-select-modify',
  templateUrl: './select-modify.component.html',
  styleUrls: ['./select-modify.component.css']
})
export class SelectModifyComponent implements OnInit {
  public showIndividual: boolean;
  public showGroup: boolean;
  public vecNo: boolean;
  public personalDetails: boolean;
  public employeeId: boolean;
  public manager: boolean;
  public localityCode: boolean;
  public costCenter: boolean;
  private today = new Date();
  
  public myDatePickerOptions = {
   disableSince: {year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: this.today.getDate() + 1}
};

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  navigateModify(modifyType){
    if(modifyType === "individual"){
      //this.open(this.individualPopUp);
      this.showIndividual = true;
      this.showGroup = false;     
    }
    else if(modifyType === "group"){
      //this.open(this.groupPopUp);
      this.showGroup = true;
      this.showIndividual = false;
    }
  }
  
  navigate(screen: string){
    if(screen === "modifyIndividual"){
      this.router.navigate(['/modifyIndividual']);
    }
    else if(screen === "modifyGroup"){
      this.router.navigate(['/modifyGroup'])
    }
  }
  
  select(value){
    if(value === "vecNo"){
      this.vecNo = true;
      this.personalDetails = false;
      this.employeeId = false;
    }
    else if(value === "employeeId"){
      this.vecNo = false;
      this.personalDetails = false;
      this.employeeId = true;
  }
    else if(value === "personalDetails"){
      this.vecNo = false;
      this.personalDetails = true;
      this.employeeId = false;
    }
  }
  
  selectToModify(value){
    if(value === "manager"){
      this.manager = true;
      this.localityCode = false;
      this.costCenter = false;
    }
    else if(value === "localityCode"){
      this.manager = false;
      this.localityCode = true;
      this.costCenter = false;
    }
    if(value === "costCenter"){
      this.manager = false;
      this.localityCode = false;
      this.costCenter = true;
    }
  }

}
