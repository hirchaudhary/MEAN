import { Component, OnInit } from '@angular/core';
import { BicycleService} from '../bicycle.service';
import { Router} from "@angular/router";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  bicycle = {}
  bicycles = [];
  errors;
  updateBicycle = {};
  constructor(private bicycleService:BicycleService, private router: Router) { }

  ngOnInit() {
    this.bicycleService.getUserBicycles()
    .then(bicycles => {
      this.bicycles = bicycles;
    })
    .catch(err => console.log("in error",err))   
  }

  addBicycle(){
    this.bicycleService.addBicycle(this.bicycle)
    .then((bicycle)=>{
        this.router.navigate(['relist']);
    })
    .catch(err => {
        this.errors = JSON.parse(err._body) 
    })
  }

  logout(){
    this.bicycleService.logout();
    this.router.navigate(['']);
  }

  onDelete(id){
    this.bicycleService.onDelete(id)
    .then((bicycle)=>{
      this.router.navigate(['relist']);
    })
    .catch(err => {
        console.log(err);
    })
  }
}