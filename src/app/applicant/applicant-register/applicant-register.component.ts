import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-applicant-register',
  templateUrl: './applicant-register.component.html',
  styleUrls: ['./applicant-register.component.css']
})
export class ApplicantRegisterComponent implements OnInit {

  constructor(private registerService:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  isResumeValid = false
  private resumeFile!:File;

  onFileSelect(event:Event){
    const element = event.target as HTMLInputElement
    let files:FileList | null = element.files
    if(files && files[0].name.split(".").pop()==="pdf"){
      this.resumeFile = files[0]
      this.isResumeValid = true
    }else{
      this.isResumeValid = false
    }

  }

  onRegister(form:NgForm){
    let formData = new FormData()
    formData.append('resume',this.resumeFile)
    this.registerService.onRegisterApplicant(form, formData).subscribe(data=>{
      this.router.navigate(['/applicant/login'])
    })
  }

}
