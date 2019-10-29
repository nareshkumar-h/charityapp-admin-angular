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
    path:'list-category',
    component:ListCategoryComponent

  },
  {
    path:'adminlogin',
    component:LoginComponent
  },
  {
    path:'addcategory',
    component:NewCategoryComponent
  },
  
  {
    path:'new-category',
    component:NewCategoryComponent,
  },
  {
    path:'adminregister',
    component:AdminregisterComponent
  },
  {
    path:"admin/list",
    component:ListadminComponent
  },
  {
    path:"donor/list",
    component:ListdonorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
