import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        transform: 'translateX(0) scale(1)'
      })),
      state('shifted', style({
        transform: 'translateX(1rem) scale(0.98)'
      })),
      transition('normal => shifted', [
        animate(300,
          style({
            transform: 'translateX(1rem) scale(0.98)'
          })
        )
      ]),
      transition('shifted => normal', [
        animate(300,
          style({
            transform: 'translateX(0) scale(1)'
          })
        )
      ])
    ]),
    trigger('listOne', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void <=> *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(500)
      ]),
    ])
  ]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  state = 'normal';
  wildState = 'normal';
  constructor(
  ) { }

  ngOnInit() {
  }

  onAnimate() {
    console.log('selected');
    this.state === 'normal' ? this.state = 'shifted' : this.state = 'normal';
  }

  animationStarted() {
    console.log('divState animation started');
  }

  animationDone() {
    console.log('divState animation ended');
  }


}
