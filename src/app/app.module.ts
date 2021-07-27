import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from'@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/authGuards.service';
import { ApiCallService } from './applicant/api-calls.service';
import { AppHttpInterceptor } from './interceptors/app-http.interceptor';
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { CacheService } from './interceptors/cache-service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [AuthService, AuthGuard, ApiCallService, CacheService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi:true
    },
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
