import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onApplicantLogin(){
    //check if user is authorized using https request. If not, redirect to applicant login.
    const allowed = false
    if(!allowed){
      this.router.navigate(['/applicant/login'])
    }
  }

  onApplicantRegister(){
    //check if user is authorized using https request. If not, redirect to applicant register.
    const allowed = false
    if(!allowed){
      this.router.navigate(['/applicant/register'])
    }
  }

  onRecruiterLogin(){
    //check if user is authorized using https request. If not, redirect to recruiter login.

    const allowed = false
    if(!allowed){
      this.router.navigate(['/recruiter/login'])
    }

  }

  onRecruiterRegister(){
    //check if user is authorized using https request. If not, redirect to recruiter login.

    const allowed = false
    if(!allowed){
      this.router.navigate(['/recruiter/register'])
    }

  }

}

