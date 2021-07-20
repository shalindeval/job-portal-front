import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiCallService } from 'src/app/applicant/api-calls.service';

@Component({
  selector: 'app-recprofile',
  templateUrl: './recprofile.component.html',
  styleUrls: ['./recprofile.component.css']
})
export class RecProfileComponent implements OnInit {

  constructor(private apiService: ApiCallService) { }
  isLoading = false
  formValues = {name:"", organization:"", email:""}

  ngOnInit(): void {
    this.getProfile()
  }

  getProfile(){
    this.isLoading = true
    this.apiService.getRecruiterProfile().subscribe((data:any)=>{
      console.log(data)
      this.formValues = data
      this.isLoading = false
    })
  }

  onUpdateProfile(form:NgForm){
    this.isLoading = true
    this.apiService.updateRecruiterProfile(form).subscribe((data:any)=>{
      console.log(data)
      this.formValues = data
      this.isLoading = false
    })
  }

}
