import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { AdminregisterComponent } from './core/adminregister/adminregister.component';
import { AdminregisterService } from './service/adminregister.service';
import { AddVideoComponent } from './add-video/add-video.component';
import { ListvideoComponent } from './listvideo/listvideo.component';
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
    ListvideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AdminserviceService,
    FundserviceService,
    LoginserviceService,
    AdminregisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
