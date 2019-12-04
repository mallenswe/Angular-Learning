import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-wapper',
  templateUrl: './game-wapper.component.html',
  styleUrls: ['./game-wapper.component.css']
})
export class GameWapperComponent implements OnInit {
  evenArray: number[] = [];
  oddArray: number[] = [];
  constructor() { }

  ngOnInit() {
  }

  pushEvenNumber(even) {
    this.evenArray.push(even);
  }
  pushOddNumber(odd) {
    this.oddArray.push(odd);
  }
  clearNumbers(event) {
    this.evenArray = [];
    this.oddArray = [];
  }

}
