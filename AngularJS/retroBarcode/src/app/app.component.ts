import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Retro Barcode Generator';
    colors = looping();
}

let looping = function(){
  var colors = [];
  for(let i = 0; i <50; i++){
    var rand = {color:'#' + Math.floor(Math.random() * 16777215).toString(16), size:Math.floor(Math.random()*15)+"px"}
    colors.push(rand);
  }
  return colors;
}
