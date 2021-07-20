import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login-applicant',
  templateUrl: './login-applicant.component.html',
  styleUrls: ['./login-applicant.component.css']
})
export class LoginApplicantComponent implements OnInit {

  constructor(private loginService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  isLoggedIn = false

  onSubmit(form:NgForm){
    //send to server using https client
    this.loginService.onLoginApplicant(form).subscribe(data=>{
      localStorage.setItem('currentUser', JSON.stringify({accessToken:data.token, user:data.user}))
      this.router.navigate(['/applicant/home'])
    })
  }

}
