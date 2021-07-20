import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register-recruiter',
  templateUrl: './register-recruiter.component.html',
  styleUrls: ['./register-recruiter.component.css']
})
export class RegisterRecruiterComponent implements OnInit {

  constructor(private registerService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  isResumeValid = false

  onRegister(form:NgForm){
    this.registerService.onRegisterRecruiter(form).subscribe(data=>{
      this.router.navigate(['/recruiter/login'])
    })
  }

}