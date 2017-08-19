import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs";

@Injectable()
export class BicycleService {

  constructor(private http:Http) { }

  user = {}

  addUser(user) {
    return this.http.post(`/createUser`, user)
    .map( (data: Response) => {
      this.user = data.json()
      data.json()
      console.log(this.user);
      
    } )
    .toPromise();
  }

  login(user) {
    return this.http.post(`/login`, user)
    .map( data => {
      this.user = data.json()
      data.json()
    })
    .toPromise();
  }

  addBicycle(bicycle) {
    return this.http.put(`/addBicycle`, bicycle)
    .map( (data: Response) => data.json() )
    .toPromise();
  }

  getUserBicycles() {
    return this.http.get(`/getMyBicycles`)
    .map( data => data.json() )
    .toPromise();
  }

  logout(){
    this.user = {}
    return this.http.get(`/logout`)
    .map( data => data.json() )
    .toPromise();
  }

  onDelete(id){
    return this.http.put(`/delete`,{id:id})
    .map(data=>data.json())
    .toPromise();
  }

  getBicycle(id){
    return this.http.get(`/editPage/${id}`)
        .map(data => data.json())
        .toPromise();
  }

  editBicycle(bicycle) {
    return this.http.put(`/editBicycle`, bicycle)
    .map( (data: Response) => data.json() )
    .toPromise();
  }

  getBicycles(){
    return this.http.get(`/getBicycles`)
        .map(data => data.json())
        .toPromise();
  }

  getSearch(search){
    return this.http.post(`/getSearch`, search)
        .map(data => data.json())
        .toPromise();
  }
}
