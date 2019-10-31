import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {

  constructor(
    private http:HttpClient
  ) { }
 //apiUrl='https://charityapp-content-ms.herokuapp.com/';
apiUrl:string = "https://peaceful-scrubland-89780.herokuapp.com/contentapp/";
  //apiUrl = 'http://localhost:9007/';
  videoContent(formData:any):any
  {
    console.log(formData);
    return this.http.post(this.apiUrl+'videos',formData);
  }
  viewViedoList():any
  {
    return this.http.get(this.apiUrl+'videos');
  }
  
}
