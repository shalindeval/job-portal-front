import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/authGuards.service";
import { ApplicantRegisterComponent } from "./applicant-register/applicant-register.component";
import { ApplicantComponent } from "./applicant.component";
import { ApplicationsComponent } from "./applications/applications.component";
import { JoblistComponent } from "./joblist/joblist.component";
import { LoginApplicantComponent } from "./login-applicant/login-applicant.component";
import { ProfileComponent } from "./profile/profile.component";

const routes = [
    {path:'login', component:LoginApplicantComponent},
    {path:'register', component:ApplicantRegisterComponent},
    {path:'', component:ApplicantComponent,canActivateChild:[AuthGuard],children:[
        {path:'home', component:JoblistComponent},
        {path:'applications', component:ApplicationsComponent},
        {path:'profile', component:ProfileComponent},
      ]},
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ApplicantRoutingModule{
}