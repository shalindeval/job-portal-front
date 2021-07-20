import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantComponent } from './applicant/applicant.component';
import { ApplicationsComponent } from './applicant/applications/applications.component';
import { AuthGuard } from './authGuards.service';
import { JoblistComponent } from './applicant/joblist/joblist.component';
import { LoginApplicantComponent } from './applicant/login-applicant/login-applicant.component';
import { ProfileComponent } from './applicant/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LoginRecruiterComponent } from './recruiter/login-recruiter/login-recruiter.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { RecJoblistComponent } from './recruiter/joblist/joblist.component';
import { RecProfileComponent } from './recruiter/profile/recprofile.component';
import { CreateJobComponent } from './recruiter/create-job/create-job.component';
import { ApplicantRegisterComponent } from './applicant/applicant-register/applicant-register.component';
import { RegisterRecruiterComponent } from './recruiter/register-recruiter/register-recruiter.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'applicant/login', component:LoginApplicantComponent},
  {path:'applicant/register', component:ApplicantRegisterComponent},
  {path:'recruiter/register', component:RegisterRecruiterComponent},
  {path:'recruiter/login', component:LoginRecruiterComponent},
  {path:'applicant', component:ApplicantComponent, canActivateChild:[AuthGuard],children:[
    {path:'home', component:JoblistComponent},
    {path:'applications', component:ApplicationsComponent},
    {path:'profile', component:ProfileComponent},
  ]},
  {path:'recruiter', component:RecruiterComponent, children:[
    {path:'home', component:RecJoblistComponent},
    {path:'createjob', component:CreateJobComponent},
    {path:'profile', component:RecProfileComponent},
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
