import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-calls.service';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {

  jobs = [{id:"dummy",title:"dummy", description:"dummy", status:"notApplied"}]
  appliedJobs = [{id:"dummy",title:"dummy", description:"dummy", status:"notApplied"}]
  isLoading = false
  
  constructor(private apiCallService:ApiCallService) { 
  }

  ngOnInit(): void {
    this.getAllJobs()
  }

  getAllJobs(){
    this.isLoading = true
    this.apiCallService.getAllJobs().subscribe((data:any)=>{
      this.jobs = data
      this.getMyApplications()
    })
  }

  getMyApplications(){
    this.apiCallService.getMyApplications().subscribe((data:any)=>{
      this.appliedJobs = data.jobs
      this.identifyAppliedJobs(this.jobs, this.appliedJobs)
    })
  }

  identifyAppliedJobs(jobs:any[],appliedJobs:any[]){
    jobs.forEach((job,index)=>{
      appliedJobs.forEach(appl=>{
        if(appl.id === job.id){
          job.status = "applied"
        }
      })
    })
    this.isLoading = false
  }

  onApply($event:MouseEvent, jobId:string){
    this.apiCallService.applyToJob(jobId).subscribe((data:any)=>{
      //other stuff
      ($event.target as HTMLButtonElement).disabled = true;
      ($event.target as HTMLButtonElement).innerHTML = "Applied"
    })
  }

}
