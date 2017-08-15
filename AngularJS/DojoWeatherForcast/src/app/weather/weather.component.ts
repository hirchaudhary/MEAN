import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather = null;
  constructor(private _route: ActivatedRoute, private _weatherService: WeatherService) {
    this._route.paramMap
      .switchMap(params => {
        return this._weatherService.getWeather(params.get('location'));
    })
    .subscribe(weather => this.weather = weather);
  }
  ngOnInit() {
  }
}
