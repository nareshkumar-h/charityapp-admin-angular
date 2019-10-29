import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddfundrequestComponent } from './core/addfundrequest/addfundrequest.component';
import { ListfundrequestComponent } from './core/listfundrequest/listfundrequest.component';
import { LoginComponent } from './core/login/login.component';
import { AdminregisterComponent } from './core/adminregister/adminregister.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { ListvideoComponent } from './listvideo/listvideo.component';


const routes: Routes = [
  {
    path:'addfund',
    component:AddfundrequestComponent
  },
  {
    path:'viewfund',
    component:ListfundrequestComponent
  },
  {
    path:'adminlogin',
    component:LoginComponent
  },
  {
    path:'adminregister',
    component:AdminregisterComponent
  },
  {
    path:'addvideo',
    component:AddVideoComponent
  },
  {
    path:'viewvideo',
    component:ListvideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
