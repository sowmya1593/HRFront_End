import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IMyDate } from 'mydatepicker';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  //@ViewChild('createOnBoard')closePopUp: ElementRef;;
  @ViewChild('modifyIndividual')individualPopUp: ElementRef;
  @ViewChild('modifyGroup')groupPopUp: ElementRef;
  public url: string;
  public showIndividual: boolean;
  public showGroup: boolean;
  public manager: boolean;
  public localityCode: boolean;
  public costCenter: boolean;
  
  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
  }
  
  route(employeeType){
    console.log(employeeType);
    if(employeeType === "classified" || employeeType === "wage"){
      console.log("inside if");
      this.url = '/onBoardClassifiedAndWage';
    }
    else if(employeeType === "volunteers" || employeeType === "contractors"){
      console.log("inside else if");
      this.url = '/onBoardVolunteersAndContractors';
    }
    //this.router.navigate([this.url]);
  }
  
  navigate(screen: string){
    if(screen === "searchUser"){
     this.router.navigate([this.url]); 
    }
    else if(screen === "modifyIndividual"){
      this.router.navigate(['/modifyIndividual']);
    }
    else if(screen === "modifyGroup"){
      this.router.navigate(['/modifyGroup'])
    }
  }
  
  navigateModify(value){
    if(value === "individual"){
      //this.open(this.individualPopUp);
      this.showIndividual = true;
      this.showGroup = false;     
    }
    else if(value === "group"){
      //this.open(this.groupPopUp);
      this.showGroup = true;
      this.showIndividual = false;
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
  
  open(content) {
   this.modalService.open(content);
   //this.plus=false;
  }
  
}
