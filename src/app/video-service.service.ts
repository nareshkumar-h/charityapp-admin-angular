import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {

  constructor(
    private http:HttpClient
  ) { }
  apiUrl='https://charityapp-content-ms.herokuapp.com/';
  //apiUrl = 'http://localhost:9007/';
  videoContent(formData:any):any
  {
    console.log(formData);
    return this.http.post(this.apiUrl+'videocontent',formData);
  }
  viewViedoList():any
  {
    return this.http.get(this.apiUrl+'videocontent/contentlist');
  }
  
}