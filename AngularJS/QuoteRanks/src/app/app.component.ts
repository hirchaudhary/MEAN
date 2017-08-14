import { Component, Input } from '@angular/core';
import { Quote } from "./quote";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   quote:Quote = new Quote();
   quotes:Array<Quote> = [];
  @Input() index:number;

  submit(){
      this.quotes.push(this.quote);
      this.quote = new Quote();
  }

  onDelete(index){
      this.quotes.splice(index,1);
  }
}
