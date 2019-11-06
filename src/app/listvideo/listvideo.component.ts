import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from '../video-service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-listvideo',
  templateUrl: './listvideo.component.html',
  styleUrls: ['./listvideo.component.css']
})
export class ListvideoComponent implements OnInit {
  videoList:any;
  videostatus:boolean=true;
  constructor(
    private video:VideoServiceService,private _snackBar:MatSnackBar
  ) { }

  ngOnInit() {
   this. viewViedoList();
  }
  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 2000,
    
    });
  }
  viewViedoList(){
    this.video.viewViedoList().subscribe( (res) => {
      console.log(JSON.stringify(res));
      this.videoList = res;
    }, (err) => {
      console.log(JSON.stringify(err));
      let message:string = err.error.message;
      let action:string  = 'close';
      this.openSnackBar(message,action);
    });
  }
  
  }
