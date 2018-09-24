import { Component, OnInit } from '@angular/core';
import { IMyDate, IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-onboard-temp',
  templateUrl: './onboard-temp.component.html',
  styleUrls: ['./onboard-temp.component.css']
})
export class OnboardTempComponent implements OnInit {
  private today = new Date();
  
  public myDatePickerOptions = {
   disableSince: {year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: this.today.getDate() + 1}
};

  constructor() { }

  ngOnInit() {
  }

}
