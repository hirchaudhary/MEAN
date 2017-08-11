import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  switches = looping()
  changeOccured(place){
    this.switches[place].power =  this.switches[place].power == "ON" ? "OFF" : "ON";
    this.switches[place].bool = this.switches[place].bool == true ? false : true;
  }
}

let looping = function(){
  let switches = [];
  for(let i = 0; i <10; i++){
    switches.push({power:'OFF', bool:false});
  }
  return switches;
}