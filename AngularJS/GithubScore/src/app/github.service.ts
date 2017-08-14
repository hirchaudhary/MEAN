import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs";

@Injectable()
export class GithubService{
    private api = "https://api.github.com/users/";

    constructor(private http:Http){}

    getUser(username:string){
        return this.http.get(this.api+username)
        .map(data => data.json())
        .toPromise();
    }
}