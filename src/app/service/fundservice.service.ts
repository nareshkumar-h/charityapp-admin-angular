import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FundserviceService {

  constructor(
    private http:HttpClient
  ) { }
  apiUrl:string = 'http://localhost:9003/';

  viewFundRequest():any
  {
    return this.http.get(this.apiUrl+'fundrequest/listCurrentRequest');
  }
}
