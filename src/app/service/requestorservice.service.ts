import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestorserviceService {

  constructor(
    private http:HttpClient
  ) { }
  apiUrl='https://charityapp-content-ms.herokuapp.com/'
  //apiUrl='https://peaceful-scrubland-89780.herokuapp.com/contentapp/';
   //apiUrl = 'http://localhost:9007/';
  Requestorvideo(formData:any):any
  {
    console.log(formData);
    return this.http.post(this.apiUrl+'RequestorVideo',formData);
  }
  viewRequestorViedoList():any
  {
    return this.http.get(this.apiUrl+'RequestorVideo');
  }
}
