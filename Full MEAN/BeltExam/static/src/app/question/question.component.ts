import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BeltService} from '../belt.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question = {_id:""};
  options= [];
  constructor(private _route: ActivatedRoute, private beltService:BeltService, private router: Router) { 
    this._route.paramMap
    .switchMap(params => {
      return this.beltService.getQuestionWithAnswers(params.get('id'));
  })
  .subscribe(belt => {
    this.options = belt.options;
    this.question = belt.question;
  });
  }

  ngOnInit() {
    
  }
  increaseVotes(id, vote){
    this.beltService.increaseVotes({id:id, vote:vote})
    .then((id)=>{

    })
    .catch(err => {
      console.log(err);
    })
}
  logout(){
    this.beltService.logout()
    .then(logout => this.router.navigate(['']))
    .catch(err => console.log(err))
  }
}
