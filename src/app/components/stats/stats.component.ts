import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  showStates: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  callme(): void{
    this.showStates = !this.showStates;
  }

}
