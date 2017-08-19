import { Component, OnInit } from '@angular/core';
import { BicycleService} from '../bicycle.service';
import { Router} from "@angular/router";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    user = {};
    errors;
    loginErr = "";
    loginUser = {};
    constructor(private bicycleService:BicycleService, private router: Router) { }

    ngOnInit() {
    }

    addUser(){
        this.bicycleService.addUser(this.user)
        .then((user)=>{
                this.router.navigate(['gohome']);
            })
        .catch(err => {
            this.errors = JSON.parse(err._body) 
        })
    }

    login(){
        this.bicycleService.login(this.loginUser)
        .then(response => {
            this.router.navigate(['gohome']);
        })
        .catch(err => {
            this.loginErr = 'Invalid credential';
        })
    }
}
