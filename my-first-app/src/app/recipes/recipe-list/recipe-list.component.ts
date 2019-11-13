import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'This is a test', 'https://live.staticflickr.com/4607/39683662521_0b5d5d383e_k.jpg'),
    new Recipe('Test', 'This is a test', 'https://live.staticflickr.com/4607/39683662521_0b5d5d383e_k.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
