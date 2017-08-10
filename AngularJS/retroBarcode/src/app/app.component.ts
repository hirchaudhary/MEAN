import { Component } from '@angular/core';

let rand = function(){
  return Math.floor(Math.random()*255);
}

let randSize = function(){
  return Math.floor(Math.random()*15);
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {
    title = 'Retro Barcode Generator';
  
    colors = [
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
        {color:rand()+","+rand()+","+rand(), size:randSize()+"px"},
    ]
}
