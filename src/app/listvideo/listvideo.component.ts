import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from '../video-service.service';

@Component({
  selector: 'app-listvideo',
  templateUrl: './listvideo.component.html',
  styleUrls: ['./listvideo.component.css']
})
export class ListvideoComponent implements OnInit {
  videoList:any;
  videostatus:boolean=true;
  constructor(
    private video:VideoServiceService
  ) { }

  ngOnInit() {
   this. viewViedoList();
  }
  viewViedoList(){
    this.video.viewViedoList().subscribe( (res) => {
      console.log(JSON.stringify(res));
      this.videoList = res;
    }, (err) => {
      console.log(JSON.stringify(err));
    });
  }
  
  }
