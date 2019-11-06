import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AddfundrequestComponent } from './core/addfundrequest/addfundrequest.component';
import { ListfundrequestComponent } from './core/listfundrequest/listfundrequest.component';

import { HttpClientModule } from '@angular/common/http';
import { AdminserviceService } from './service/adminservice.service';
import { FormsModule }  from '@angular/forms';
import { LoginComponent } from './core/login/login.component';
import { FundserviceService } from './service/fundservice.service';
import { LoginserviceService } from './service/loginservice.service';
import { NewCategoryComponent } from './new-category/new-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { AddCategoryService } from './add-category.service';
import { AdminregisterComponent } from './core/adminregister/adminregister.component';
import { AdminregisterService } from './service/adminregister.service';
import { ListadminComponent } from './core/listadmin/listadmin.component';
import { ListadminService } from './service/listadmin.service';
import { ListdonorComponent } from './core/listdonor/listdonor.component';
import { ListdonorService } from './service/listdonor.service';
import { AddVideoComponent } from './add-video/add-video.component';
import { ListvideoComponent } from './listvideo/listvideo.component';
import { AuthService } from './service/auth.service';
import { ForgotpasswordComponent } from './core/forgotpassword/forgotpassword.component';
import { AssignvideoComponent } from './core/assignvideo/assignvideo.component';
import { AvatarModule } from 'ngx-avatar';
import { HomeComponent } from './core/home/home.component';
import { MatSnackBarModule ,MatButtonModule} from '@angular/material';


import { UserService } from './service/user.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddfundrequestComponent,
    ListfundrequestComponent,
    LoginComponent,
    AdminregisterComponent,
    AddVideoComponent,
    ListvideoComponent,
    NewCategoryComponent,
    ListCategoryComponent,
    AdminregisterComponent,
    ListadminComponent,
    ListdonorComponent,
    ForgotpasswordComponent,
    AssignvideoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AvatarModule,
    BrowserAnimationsModule,
    MatSnackBarModule,MatButtonModule
  ],
  providers: [
    AdminserviceService,
    FundserviceService,
    LoginserviceService,
    AddCategoryService,
    AdminregisterService,
    ListadminService,
    ListdonorService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
