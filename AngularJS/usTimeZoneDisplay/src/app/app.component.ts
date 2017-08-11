import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  bool = true;
  zone = 0;
  time = function timeZone(){
    var date = new Date();
    date.setHours(date.getHours()-this.zone);
    return date
  }
}

