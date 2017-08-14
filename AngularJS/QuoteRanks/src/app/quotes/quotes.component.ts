import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() quote:Quote    = new Quote();
  @Input() index:number;
  @Output() emitter  = new EventEmitter();

  onVoteUp(){
      this.quote.votes++;
  }
  onVoteDown(){
      this.quote.votes--;
  }
  onDelete(){
      this.emitter.emit(this.index);
  }
  constructor() { }

  ngOnInit() {
  }

}
