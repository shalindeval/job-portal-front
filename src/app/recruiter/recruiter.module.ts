import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CreateJobComponent } from "./create-job/create-job.component";
import { RecJoblistComponent } from "./joblist/joblist.component";
import { LoginRecruiterComponent } from "./login-recruiter/login-recruiter.component";
import { RecProfileComponent } from "./profile/recprofile.component";
import { RecruiterRoutingModule } from "./recruiter-routing.module";
import { RecruiterComponent } from "./recruiter.component";
import { RegisterRecruiterComponent } from "./register-recruiter/register-recruiter.component";

@NgModule({
    declarations:[
        LoginRecruiterComponent,
        RegisterRecruiterComponent,
        RecJoblistComponent,
        RecProfileComponent,
        CreateJobComponent,
        RecruiterComponent,
    ],
    imports:[
        FormsModule,
        CommonModule,
        RecruiterRoutingModule
    ],
})
export class RecruiterModule{

}