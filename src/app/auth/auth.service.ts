import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { NgForm } from "@angular/forms"
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from "@angular/router";
import {environment} from '../../environments/environment'

@Injectable()
export class AuthService{

  constructor(private http: HttpClient, privaterouter:Router){}


  SERVER_URL = environment.server_url

  isAuthenticated():boolean{
    return localStorage.getItem('currentUser')!==null
  }

  getToken(){
    const currentUser = localStorage.getItem('currentUser')
    return currentUser?JSON.parse(currentUser).accessToken:null
  }

  onLoginApplicant(form: NgForm){
    const body = form.value
    return this.http.post(`${this.SERVER_URL}/users/login`,body).pipe(map((data:any)=>data), catchError(e=>{
      return throwError("somethings wrong")
    }))
  }

  onLoginRecruiter(form: NgForm){
    const body = form.value
    return this.http.post(`${this.SERVER_URL}/recruiter/login`,body).pipe(map((data:any)=>data), catchError(e=>{
      return throwError(e)
    }))
  }

  onRegisterApplicant(form: NgForm, formData:FormData){

    let headers = new HttpHeaders()
    headers.set('Accept', "multipart/form-data");
    for(let key in form.value){
      formData.append(key,form.value[key])
    }

    return this.http.post(`${this.SERVER_URL}/users/register`,formData).pipe(map((data:any)=>data), 
      catchError(e=>{
        return throwError(e.message)
      }))
  }

  onRegisterRecruiter(form: NgForm){
    const body = form.value
    return this.http.post(`${this.SERVER_URL}/recruiter/register`,body).pipe(map((data:any)=>data),
    catchError(e=>{
      return throwError(e.message)
    }))
  }

}
