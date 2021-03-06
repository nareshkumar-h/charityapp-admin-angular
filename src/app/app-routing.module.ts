import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddfundrequestComponent } from './core/addfundrequest/addfundrequest.component';
import { ListfundrequestComponent } from './core/listfundrequest/listfundrequest.component';
import { LoginComponent } from './core/login/login.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { AdminregisterComponent } from './core/adminregister/adminregister.component';
import { ListadminComponent } from './core/listadmin/listadmin.component';
import { ListdonorComponent } from './core/listdonor/listdonor.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { ListvideoComponent } from './listvideo/listvideo.component';
import { ForgotpasswordComponent } from './core/forgotpassword/forgotpassword.component';
import { AuthGuard } from './auth.guard';
import { AssignvideoComponent } from './core/assignvideo/assignvideo.component';
import { HomeComponent } from './core/home/home.component';


const routes: Routes = [
  {
    path:'addfund',
    component:AddfundrequestComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'viewfund',
    component:ListfundrequestComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'list-category',
    component:ListCategoryComponent,
    canActivate: [AuthGuard] 

  },
  {
    path:'adminlogin',
    component:LoginComponent
  },
  {
    path:'addcategory',
    component:NewCategoryComponent,
    canActivate: [AuthGuard] 
  },
  
  {
    path:'new-category',
    component:NewCategoryComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'adminregister',
    component:AdminregisterComponent 
  },
  {
    path:"admin/list",
    component:ListadminComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:"donor/list",
    component:ListdonorComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'addvideo',
    component:AddVideoComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'viewvideo',
    component:ListvideoComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'forgotpassword',
    component:ForgotpasswordComponent
  },
  {
    path:'assignvideo/:requestId',
    component:AssignvideoComponent,
    canActivate: [AuthGuard] 
    
  
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'',
    redirectTo:'adminlogin',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
