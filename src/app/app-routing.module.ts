import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'applicant', loadChildren:()=> import('./applicant/applicant.module').then(m=>m.ApplicantModule)},
  {path:'recruiter', loadChildren:()=>import('./recruiter/recruiter.module').then(m=>m.RecruiterModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
