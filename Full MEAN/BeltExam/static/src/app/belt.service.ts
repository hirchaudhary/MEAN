import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs";

@Injectable()
export class BeltService {

  constructor(private http:Http) { }
  isLogin = false;
  
    isLoggedIn(){
      this.log()
      return this.isLogin;
    }

    log(){
      return this.http.get('/getBool')
      .map( data => this.isLogin = data.json())
      .toPromise();
    }

    addUser(user) {
      return this.http.post(`/createUser`, user)
      .map( data => {
        this.isLogin = true;
        data.json()
      } )
      .toPromise();
    }
  
    logout(){
      return this.http.get(`/logout`)
      .map( data => {
        this.isLogin = false;
        data.json()
      } )
      .toPromise();
    }
  
    getUser(){
      return this.http.get('/getUser')
      .map( data => data.json())
      .toPromise();
    }

    newQuestion(question) {
      return this.http.post(`/addPoll`, question)
      .map( data => {
        data.json()
      } )
      .toPromise();
    }

    getQuestions(){
      return this.http.get('/getQuestions')
      .map( data => data.json())
      .toPromise();
    }

    getQuestionWithAnswers(id){
      return this.http.get(`/question/${id}`)
          .map(data => data.json())
          .toPromise();
    }

    increaseVotes(id) {
      return this.http.put(`/increaseVotes`, id)
      .map( data => {
        data.json()
      } )
      .toPromise();
    }
  
    destroy(id){
      return this.http.put(`/delete`, {id:id})
      .map( data => {
        data.json()
      } )
      .toPromise();
    }
}
