import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


let apiKey = 'c1e17f10e325e5cb5d64c63d3102b3cd';

@Injectable()
export class WeatherService {
  
  constructor(private _http:Http) { }

    getWeather(location:string){
      
      // this one works for weekly weather data i think! but messy!
      return this._http.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&mode=json&units=imperial&cnt=7&appid=${apiKey}`)

      .map(data => data.json())
      .toPromise();
    }
}