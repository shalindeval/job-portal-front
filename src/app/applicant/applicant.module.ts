import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ApplicantRegisterComponent } from "./applicant-register/applicant-register.component";
import { ApplicantRoutingModule } from "./applicant-routing.module";
import { ApplicantComponent } from "./applicant.component";
import { ApplicationsComponent } from "./applications/applications.component";
import { JoblistComponent } from "./joblist/joblist.component";
import { LoginApplicantComponent } from "./login-applicant/login-applicant.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterApplicantComponent } from "./register-applicant/register-applicant.component";

@NgModule({
    declarations:[
        LoginApplicantComponent,
        ApplicantRegisterComponent,
        RegisterApplicantComponent,
        JoblistComponent,
        ProfileComponent,
        ApplicationsComponent,
        ApplicantComponent,
    ],
    imports:[
        FormsModule,
        CommonModule,
        ApplicantRoutingModule
    ],
})
export class ApplicantModule{

}