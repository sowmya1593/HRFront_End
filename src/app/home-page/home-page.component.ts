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
  
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  
  open(content) {
   this.modalService.open(content);
   //this.plus=false;
  }
  
}
