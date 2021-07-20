import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/applicant/api-calls.service';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class RecJoblistComponent implements OnInit, OnDestroy {

  jobs = [{id:"dummy",title:"dummy", description:"dummy"}]
  isLoading = false

  constructor(private apiCallService:ApiCallService) { }

  ngOnInit(): void {
    this.getAllJobs()
  }

  getAllJobs(){
    this.isLoading = true
    this.apiCallService.getAllJobs().subscribe((data:any)=>{
      this.jobs = data
      this.isLoading = false
    })
  }

  onDelete($event:MouseEvent, jobId:string){
    this.apiCallService.deleteJob(jobId).subscribe((data:any)=>{
      //other stuff
      ($event.target as HTMLButtonElement).disabled = true;
      ($event.target as HTMLButtonElement).innerHTML = "Deleted"
      this.getAllJobs()
    })
  }

  ngOnDestroy(){
    
  }

}
