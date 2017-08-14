import { Component } from '@angular/core';
import { User } from "./user";
import { GithubService } from "./github.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public user:User = new User();

    constructor(private githubService:GithubService){}

    getUser(){
        this.githubService.getUser(this.user.username)
        .then(
            (data)=>{
                this.user.data = data;
                this.user.score = data.followers+data.public_repos;
            }
        )
        .catch(err => console.log(err))
    }
}