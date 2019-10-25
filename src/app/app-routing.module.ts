import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddfundrequestComponent } from './core/addfundrequest/addfundrequest.component';
import { ListfundrequestComponent } from './core/listfundrequest/listfundrequest.component';
import { LoginComponent } from './core/login/login.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
