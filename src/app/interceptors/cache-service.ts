import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CacheService{
    private requests: any = {}

    put(url:string, response:HttpResponse<any>){
        this.requests[url] = response
    }

    get(url: string){
        return this.requests[url]
    }

    invalidateCache(){
        this.requests = {}
    }
}