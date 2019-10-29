import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from '../video-service.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  videoId:any;
  videoName:any;
  url:any;
  constructor(
    private video:VideoServiceService
  ) { }

  ngOnInit() {
  }
  addvideo()
  {
   let user:any= JSON.parse(localStorage.getItem('LOGGED_IN_USER'));
    let formData :any= {
      
      'title':this.videoName,
      'url':this.url,
    };
    console.log(formData);
    this.video. videoContent(formData).subscribe( (res) => {
      console.log(JSON.stringify(res));
      alert('Video Added successfully');
    }, (err) =>{
      console.log('error=>'+JSON.stringify(err));
      alert(err.error.message);
    });
  }



}
