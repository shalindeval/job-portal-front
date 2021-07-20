import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-calls.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  appliedJobs = [{title:"dummy", description:"dummy"}]
  isLoading = false

  constructor(private apiCallService:ApiCallService) {}

  ngOnInit(): void {
    this.getApplicantions()
  }

  getApplicantions(){
    this.isLoading = true
    this.apiCallService.getMyApplications().subscribe((data:any)=>{
      this.appliedJobs = data.jobs
      this.isLoading = false
    })
  }

}
