import { Component, OnInit } from '@angular/core';
import { IMyDate, IMyDpOptions } from 'mydatepicker';
import { NgForm,  FormsModule } from '@angular/forms';

@Component({
  selector: 'app-onboard-create',
  templateUrl: './onboard-create.component.html',
  styleUrls: ['./onboard-create.component.css']
})
export class OnboardCreateComponent implements OnInit {
  private today = new Date();
  
  public myDatePickerOptions = {
   disableSince: {year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: this.today.getDate() + 1}
};

  constructor() { }

  ngOnInit() {
  }

}
