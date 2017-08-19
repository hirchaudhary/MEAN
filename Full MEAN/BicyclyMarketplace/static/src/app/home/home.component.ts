import { Component, OnInit } from '@angular/core';
import { BicycleService} from '../bicycle.service';
import { Router} from "@angular/router"; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bicycles = [];
  user = {};
  search = {};
  searchBicycles = [];
  constructor(private bicycleService:BicycleService, private router: Router) { }

  ngOnInit() {
    this.user = this.bicycleService.user;
    this.bicycleService.getBicycles()
    .then(bicycles => {
      this.bicycles = bicycles;
    })
    .catch(err => console.log("in error",err))   
  }

  logout(){
    this.bicycleService.logout();
    this.router.navigate(['']);
  }

  onDelete(id){
    this.bicycleService.onDelete(id)
    .then((bicycle)=>{
      this.router.navigate(['gohome']);
    })
    .catch(err => {
        console.log(err);
    })
  }

  getSearch(){
    this.bicycleService.getSearch(this.search)
    .then(bicycles => {
      this.searchBicycles = bicycles;
    })
    .catch(err => console.log("in error",err))   
  }
}
