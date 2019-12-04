import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() oddNumberEmit = new EventEmitter<number>();
  @Output() evenNumberEmit = new EventEmitter<number>();
  @Output() clearNumbers = new EventEmitter<boolean>();
  public ref;
  private intervalRunning = false;
  constructor() { }

  ngOnInit() {
  }

  public startGame() {
    if (this.intervalRunning) {
      return;
    }
    let countNumber = 0;
    this.ref = setInterval(() => {
      this.intervalRunning = true;
      countNumber++;
      if (countNumber % 2  === 0) {
        console.log('even: ', countNumber);
        this.evenNumberEmit.emit(countNumber);
      } else {
        console.log('odd: ', countNumber);
        this.oddNumberEmit.emit(countNumber);
      }
    }, 1000);
  }

  public stopGame() {
    clearInterval(this.ref);
    this.intervalRunning = false;
    this.clearNumbers.emit(true);
  }

}
