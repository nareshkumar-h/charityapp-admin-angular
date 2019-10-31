import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FundserviceService {

  constructor(
    private http:HttpClient
  ) { }
  //apiUrl:string = 'http://localhost:9003/';
 // apiUrl='https://charity-requestor.herokuapp.com/';
 apiUrl:string='https://peaceful-scrubland-89780.herokuapp.com/requestapp/';


  viewFundRequest():any
  {
    return this.http.get(this.apiUrl+'fundrequest/listCurrentRequest');
  }
}
