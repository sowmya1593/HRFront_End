import { APP_CONFIG } from '../app.config';
import { HttpService } from './core/http.service';
import { Injectable } from '@angular/core';
import { Http,HttpModule, Headers,RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiserviceService {
  public subject = new BehaviorSubject<any>(false);
  constructor(private _httpService : HttpService, private http : Http) { }
  
   getEmployees()
  {
    let url = APP_CONFIG.getEmployees;
    return this._httpService.get(url)
    .map(res =><Response>res.json());
  } 
  }