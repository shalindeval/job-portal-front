import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {environment} from '../../environments/environment'

const baseUrl = environment.server_url

@Injectable()
export class ApiCallService {

  currentUser = localStorage.getItem('currentUser')
  userId = this.currentUser?JSON.parse(this.currentUser).user.id:""

  constructor(private httpClient: HttpClient, ) { }

  getAllJobs(){
    return this.httpClient.get(`${baseUrl}/jobs`)
    .pipe(map((data)=>{
      return data
    }), catchError(e=>{ return throwError(e)}))
  }

  getMyApplications(){
    return this.httpClient.get(`${baseUrl}/users/${this.userId}`)
    .pipe(map((data)=>{
      return data
    }), catchError(e=>{ return throwError(e)}))
  }

  applyToJob(jobId:string){
    const body_obj = {jobId}
    return this.httpClient.post(`${baseUrl}/users/apply/`,body_obj)
    .pipe(map((data)=>{
      return data
    }), catchError(e=>{ return throwError(e)}))
  }

  createJob(form: NgForm){
    const body = form.value
    return this.httpClient.post(`${baseUrl}/jobs/create`,body)
    .pipe(map((data)=>{
      return data
    }), catchError(e=>{ return throwError(e)}))
  }

  deleteJob(jobId:string){
    const body_obj = {jobId}
    return this.httpClient.delete(`${baseUrl}/jobs/${jobId}`)
    .pipe(map((data)=>{
      return data
    }), catchError(e=>{ return throwError(e)}))
  }

  getRecruiterProfile(){
    return this.httpClient.get(`${baseUrl}/recruiter/${this.userId}`)
    .pipe(map((data)=>{
      return data
    }), catchError(e=>{ return throwError(e)}))
  }

  updateRecruiterProfile(form:NgForm){
    const body = form.value
    return this.httpClient.post(`${baseUrl}/recruiter/${this.userId}`,body)
    .pipe(map((data)=>{
      return data
    }), catchError(e=>{ return throwError(e)}))
  }

  getApplicantProfile(){

    return this.httpClient.get(`${baseUrl}/users/${this.userId}`)
    .pipe(map((data)=>{
      return data
    }), catchError(e=>{ return throwError(e)}))
  }

  updateApplicantProfile(form:NgForm){
    const body = form.value
    return this.httpClient.post(`${baseUrl}/users/${this.userId}`,body)
    .pipe(map((data)=>{
      return data
    }), catchError(e=>{ return throwError(e)}))
  }

  updateResume(form:NgForm, formData:FormData){
    let headers = new HttpHeaders()
    headers.set('Accept', "multipart/form-data");
    for(let key in form.value){
      formData.append(key,form.value[key])
    }
    return this.httpClient.post(`${baseUrl}/users/resume/${this.userId}`,formData)
    .pipe(map((data)=>{
      return data
    }), catchError(e=>{ return throwError(e)}))
  }

}
