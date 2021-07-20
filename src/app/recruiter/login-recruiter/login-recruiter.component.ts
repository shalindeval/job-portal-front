import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login-recruiter',
  templateUrl: './login-recruiter.component.html',
  styleUrls: ['./login-recruiter.component.css']
})
export class LoginRecruiterComponent implements OnInit {

  constructor(private loginService:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  isLoggedIn = false

  onSubmit(form:NgForm){
    this.loginService.onLoginRecruiter(form).subscribe(data=>{
      localStorage.setItem('currentUser', JSON.stringify({accessToken:data.token, user:data.user}))
      this.router.navigate(['/recruiter/home'])
    })
    
  }

  registerRecruiter(){
   this.router.navigate(['/recruiter/register'])   
  }

}
