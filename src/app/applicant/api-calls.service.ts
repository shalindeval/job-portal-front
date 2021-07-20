import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const baseUrl = "http://127.0.0.1:3000"

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  currentUser = localStorage.getItem('currentUser')
  token_obj = this.currentUser?JSON.parse(this.currentUser):{}
  userId = this.currentUser?JSON.parse(this.currentUser).user.id:""
  
  header_obj = {headers: new HttpHeaders().set('Authorization', `Bearer ${this.token_obj.accessToken}`)}

  constructor(private httpClient: HttpClient, ) { }

  getAllJobs(){
    return this.httpClient.get(`${baseUrl}/jobs`, this.header_obj)
    .pipe(map((data)=>{
      return data
    }), catchError(e=>{ return throwError(e)}))
  }

  getMyApplications(){
    return this.httpClient.get(`${baseUrl}/users/${this.userId}`, this.header_obj)
    .pipe(map((data)=>{
      return data
    }), catchError(e=>{ return throwError(e)}))
  }

  applyToJob(jobId:string){
    const body_obj = {jobId}
    return this.httpClient.post(`${baseUrl}/users/apply/`,body_obj, this.header_obj)
    .pipe(map((data)=>{
      return data
    }), catchError(e=>{ return throwError(e)}))
  }

  createJob(form: NgForm){
    const body = form.value
    return this.httpClient.post(`${baseUrl}/jobs/create`,body, this.header_obj)
    .pipe(map((data)=>{
      return data
    }), catchError(e=>{ return throwError(e)}))
  }

  deleteJob(jobId:string){
    const body_obj = {jobId}
    return this.httpClient.delete(`${baseUrl}/jobs/${jobId}`, this.header_obj)
    .pipe(map((data)=>{
      return data
    }), catchError(e=>{ return throwError(e)}))
  }

  getRecruiterProfile(){
    return this.httpClient.get(`${baseUrl}/recruiter/${this.userId}`, this.header_obj)
    .pipe(map((data)=>{
      return data
    }), catchError(e=>{ return throwError(e)}))
  }

  updateRecruiterProfile(form:NgForm){
    const body = form.value
    return this.httpClient.post(`${baseUrl}/recruiter/${this.userId}`,body, this.header_obj)
    .pipe(map((data)=>{
      return data
    }), catchError(e=>{ return throwError(e)}))
  }

  getApplicantProfile(){

    return this.httpClient.get(`${baseUrl}/users/${this.userId}`, this.header_obj)
    .pipe(map((data)=>{
      return data
    }), catchError(e=>{ return throwError(e)}))
  }

  updateApplicantProfile(form:NgForm){
    const body = form.value
    return this.httpClient.post(`${baseUrl}/users/${this.userId}`,body, this.header_obj)
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
    return this.httpClient.post(`${baseUrl}/users/resume/${this.userId}`,formData, this.header_obj)
    .pipe(map((data)=>{
      return data
    }), catchError(e=>{ return throwError(e)}))
  }

}
