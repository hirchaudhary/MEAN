import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs";

@Injectable()
export class BicycleService {
  
  constructor(private http:Http) { }

  addUser(user) {
    return this.http.post(`/createUser`, user)
    .map( data => {
      data.json()
    } )
    .toPromise();
  }

  login(user) {
    return this.http.post(`/login`, user)
    .map( data => {
      data.json()
    })
    .toPromise();
  }

  addBicycle(bicycle) {
    return this.http.post(`/addBicycle`, bicycle)
    .map( data => data.json() )
    .toPromise();
  }

  getUserBicycles() {
    return this.http.get(`/getMyBicycles`)
    .map( data => data.json() )
    .toPromise();
  }

  logout(){
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

  getUser(){
    return this.http.get('/getUser')
    .map( data => data.json())
    .toPromise();
  }
}
