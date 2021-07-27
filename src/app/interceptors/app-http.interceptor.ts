import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor{
    constructor(private authService: AuthService){}
    intercept(req:HttpRequest<any>, next:HttpHandler){
        req = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + this.authService.getToken())})
        return next.handle(req)
    }
}