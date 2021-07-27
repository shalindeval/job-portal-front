import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/applicant/api-calls.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  constructor(private apiCallService:ApiCallService, private router:Router) { }

  ngOnInit(): void {
  }

  onPostJob(jobForm:NgForm){
    this.apiCallService.createJob(jobForm).subscribe((data)=>{
      this.router.navigate(['/recruiter/home'])
    })
  }

}
