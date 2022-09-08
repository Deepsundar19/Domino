import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationModule } from './registration/registration.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { RegistrationService } from './service/registration.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistrationModule,
    UserModule,
    AdminModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
