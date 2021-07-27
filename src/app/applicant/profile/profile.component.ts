import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiCallService } from '../api-calls.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isLoading = false
  formValues = {name:"", organization:"", email:""}
  private resumeFile!:File;
  isResumeValid = false;
  currentResume!:Blob;
  resumeUrl!:SafeUrl;

  constructor(private apiService:ApiCallService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getProfile()
  }

  getProfile(){
    this.isLoading = true
    this.apiService.getApplicantProfile().subscribe((data:any)=>{
      console.log(data)
      this.formValues = data
      this.currentResume = new Blob([data.resume.data],{ type: 'application/pdf' })
      let resUrl = URL.createObjectURL(this.currentResume)
      this.resumeUrl = this.sanitizer.bypassSecurityTrustUrl(resUrl)
      this.isLoading = false
    })
  }

  onUpdateProfile(form:NgForm){
    this.isLoading = true
    this.apiService.updateApplicantProfile(form).subscribe((data:any)=>{
      console.log(data)
      this.formValues = data
      this.isLoading = false
    })
  }

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

  onUpdateResume(form:NgForm){
    this.isLoading = true
    let formData = new FormData()
    formData.append('resume',this.resumeFile)
    this.apiService.updateResume(form, formData).subscribe((data:any)=>{
      console.log(data)
      this.formValues = data
      this.isLoading = false
    })
  }

}
