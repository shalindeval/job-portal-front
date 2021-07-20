import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegisterRecruiterComponent } from './recruiter/register-recruiter/register-recruiter.component';
import { LoginRecruiterComponent } from './recruiter/login-recruiter/login-recruiter.component';
import { LoginApplicantComponent } from './applicant/login-applicant/login-applicant.component';
import { RegisterApplicantComponent } from './applicant/register-applicant/register-applicant.component';
import { AuthService } from './auth.service';
import { JoblistComponent } from './applicant/joblist/joblist.component';
import { ProfileComponent } from './applicant/profile/profile.component';
import { ApplicationsComponent } from './applicant/applications/applications.component';
import { AuthGuard } from './authGuards.service';
import { ApiCallService } from './applicant/api-calls.service';
import { RecJoblistComponent } from './recruiter/joblist/joblist.component';
import { RecProfileComponent } from './recruiter/profile/recprofile.component';
import { CreateJobComponent } from './recruiter/create-job/create-job.component';
import { ApplicantRegisterComponent } from './applicant/applicant-register/applicant-register.component';

const appRoutes = []

@NgModule({
  declarations: [
    AppComponent,
    RecruiterComponent,
    ApplicantComponent,
    HomeComponent,
    LoginRecruiterComponent,
    LoginApplicantComponent,
    RegisterApplicantComponent,
    RegisterRecruiterComponent,
    JoblistComponent,
    ProfileComponent,
    ApplicationsComponent,
    RecJoblistComponent,
    RecProfileComponent,
    CreateJobComponent,
    ApplicantRegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, AuthGuard, ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
