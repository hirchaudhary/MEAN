import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BicycleService} from '../bicycle.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-editbicycle',
  templateUrl: './editbicycle.component.html',
  styleUrls: ['./editbicycle.component.css']
})
export class EditbicycleComponent implements OnInit {
  bicycle = {};
  errors;

  constructor(private _route: ActivatedRoute, private bicycleService:BicycleService, private router: Router) { 
    this._route.paramMap
    .switchMap(params => {
      return this.bicycleService.getBicycle(params.get('id'));
  })
  .subscribe(bicycle => this.bicycle = bicycle);
  }
  

  ngOnInit() {
  }

  editBicycle(){
    this.bicycleService.editBicycle(this.bicycle)
    .then((bicycle)=>{
        this.bicycle = null;
        this.router.navigate(['relist']);
    })
    .catch(err => {
        this.errors = JSON.parse(err._body) 
    })
  }
}
