import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/authGuards.service";
import { CreateJobComponent } from "./create-job/create-job.component";
import { RecJoblistComponent } from "./joblist/joblist.component";
import { LoginRecruiterComponent } from "./login-recruiter/login-recruiter.component";
import { RecProfileComponent } from "./profile/recprofile.component";
import { RecruiterComponent } from "./recruiter.component";
import { RegisterRecruiterComponent } from "./register-recruiter/register-recruiter.component";

const routes = [
    {path:'register', component:RegisterRecruiterComponent},
    {path:'login', component:LoginRecruiterComponent},
    {path:'', component:RecruiterComponent,canActivateChild:[AuthGuard],children:[
      {path:'home', component:RecJoblistComponent},
      {path:'createjob', component:CreateJobComponent},
      {path:'profile', component:RecProfileComponent},
    ]},
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class RecruiterRoutingModule{}