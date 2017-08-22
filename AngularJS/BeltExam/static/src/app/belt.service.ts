import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs";

@Injectable()
export class BeltService {
  question;
  constructor(private http:Http) { }
  user = "";
  isLogin = false;

  isLoggedIn(){
    return this.isLogin;
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

  getSearch(search){
    return this.http.get(`/getSearch`, search)
        .map(data => data.json())
        .toPromise();
  }

  newQuestion(question) {
    return this.http.post(`/addQuestion`, question)
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

  getQuestion(id){
    return this.http.get(`/answer/${id}`)
        .map(data => data.json())
        .toPromise();
  }

  newAnswer(answer) {
      return this.http.post(`/addAnswer`, answer)
      .map( data => {
        data.json()
      } )
      .toPromise();
    }

  getQuestionWithAnswers(id){
      return this.http.get(`/question/${id}`)
          .map(data => data.json())
          .toPromise();
    }

    increaseLikes(id) {
      return this.http.put(`/increaseLikes`, {id: id})
      .map( data => {
        data.json()
      } )
      .toPromise();
    }
}
