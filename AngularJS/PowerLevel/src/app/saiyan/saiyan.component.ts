import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit {
  @Input() powerLevel;
  
  calPowerLevel(){
    this.powerLevel *= 10;
  }
  constructor() { }

  ngOnInit() {
  }

}
