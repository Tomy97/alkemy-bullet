import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { InterceptorAuthService } from './services/interceptor-auth.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [ 
    {provide:HTTP_INTERCEPTORS, useClass:InterceptorAuthService, multi: true},
    {provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
