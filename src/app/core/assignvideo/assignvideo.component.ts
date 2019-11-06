import { Component, OnInit } from '@angular/core';
import { RequestorserviceService } from 'src/app/service/requestorservice.service';

import { Router, ActivatedRoute } from '@angular/router';
import { VideoServiceService } from 'src/app/video-service.service';

@Component({
  selector: 'app-assignvideo',
  templateUrl: './assignvideo.component.html',
  styleUrls: ['./assignvideo.component.css']
})
export class AssignvideoComponent implements OnInit {
  videoId:number;
  requestedId:number;
  constructor(
    private requestorvideo:RequestorserviceService,private router: Router,private video:VideoServiceService, private route:ActivatedRoute) 
    { this.route.params.subscribe ( params => {
      console.log(params['requestId']);
      this.requestedId = +params['requestId'];
    });
   }

  ngOnInit() {
    this.loadVideos();
  }
 /* data:any;
  requestId()
  {
    console.log(this.videoId);
   this.requestorvideo.Requestorvideo(this.videoId).subscribe ( (res) =>{
     console.log(res);
     this.data = res;
   });
  }*/
  addvideo()
  {
   let user:any= JSON.parse(localStorage.getItem('LOGGED_IN_USER'));
    let formData :any= {
      'videoId':this.videoId,
      'createdBy':user.id,
      'requestedId': this.requestedId
    
    };
    console.log(formData);
    this.requestorvideo.Requestorvideo(formData).subscribe( (res) => {
      console.log(JSON.stringify(res));
     // this.router.navigate(['viewvideo']);
      alert('video Added successfully');
    }, (err) =>{
      console.log('error=>'+JSON.stringify(err));
      alert(err.error.message);
    });
  }

  videos = [];


  loadVideos(){
    this.video.viewViedoList().subscribe( (res)=>{
      this.videos = res;
    });
  }


}
