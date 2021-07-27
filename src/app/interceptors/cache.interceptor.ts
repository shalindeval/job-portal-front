import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { tap } from "rxjs/operators";
import { CacheService } from "./cache-service";

@Injectable()
export class CacheInterceptor implements HttpInterceptor{
    
    constructor(private cacheService:CacheService){}

    intercept(req:HttpRequest<any>, next:HttpHandler){

        if(req.method != 'GET'){
            console.log("invalidating the cache")
            this.cacheService.invalidateCache()
            return next.handle(req)
        }

        const cachedResponse: HttpResponse<any> = this.cacheService.get(req.url)

        if(cachedResponse){
            console.log("Returning cached response for: ", cachedResponse.url)
            return of(cachedResponse)
        }

        return next.handle(req).pipe(
            tap(event=>{
                if(event instanceof HttpResponse){
                    console.log("Adding item to cache for: ", req.url)
                    this.cacheService.put(req.url, event)
                }
            })
        )
    }
}