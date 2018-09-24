import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm,  FormsModule } from '@angular/forms';
import { IMyDate, IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-employee-type',
  templateUrl: './employee-type.component.html',
  styleUrls: ['./employee-type.component.css']
})
export class EmployeeTypeComponent implements OnInit {
  public url: string;
  public showSearch: boolean;
  public showResults: boolean;
  private today = new Date();
  
  public myDatePickerOptions = {
   disableSince: {year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: this.today.getDate() + 1}
};

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  displaySearch(employeeType){
    if (employeeType === "classified"){
      this.url = '/onBoardClassifiedAndWage';
    }
    else if(employeeType === "volunteers"){
      this.url = '/onBoardVolunteersAndContractors';
    }
    this.showSearch = true;
  }
  
  showSearchResults(){
    
  }
  
  navigate(){
    this.router.navigate([this.url]); 
  }

}
