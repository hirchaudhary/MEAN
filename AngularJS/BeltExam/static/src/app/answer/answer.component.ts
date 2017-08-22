import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BeltService} from '../belt.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  question ={};
  addAnswer = {};
  constructor(private _route: ActivatedRoute, private beltService:BeltService, private router: Router) {
    this._route.paramMap
    .switchMap(params => {
      return this.beltService.getQuestion(params.get('id'));
  })
  .subscribe(bicycle => this.question = bicycle);
   }


  ngOnInit() { 
    
  }

  newAnswer(id){
    console.log(id);
    this.beltService.newAnswer({id:id, answer:this.addAnswer})
    .then((answer)=>{
            this.router.navigate(['gohome']);
        })
    .catch(err => {
        JSON.parse(err._body) 
    })
}
logout(){
  this.beltService.logout()
  .then(logout => this.router.navigate(['']))
  .catch(err => console.log(err))
}
}
