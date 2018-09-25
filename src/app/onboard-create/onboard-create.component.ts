import { Component, OnInit } from '@angular/core';
import { IMyDate, IMyDpOptions } from 'mydatepicker';
import { NgForm,  FormsModule } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import {Create} from '../data_modelEmployee';

@Component({
  selector: 'app-onboard-create',
  templateUrl: './onboard-create.component.html',
  styleUrls: ['./onboard-create.component.css'],
  providers: [ ApiserviceService ]
})
export class OnboardCreateComponent implements OnInit {
  private today = new Date();
  public employeeDetails: Create;
  
  public myDatePickerOptions = {
   disableSince: {year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: this.today.getDate() + 1}
};

  constructor(private _apiservice: ApiserviceService) {
    this.employeeDetails = new Create();
   }

  ngOnInit() {
  }
  
  getEmployees()
  {
     this._apiservice.getEmployees()
    .subscribe((data:any) => {
     this.employeeDetails = data;
      console.log(this.employeeDetails);
      console.log(data);
      
    },error => console.log(error));
  }

}
