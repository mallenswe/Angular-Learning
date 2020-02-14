import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../services/recipe.service';
import { environment } from '../../environments/environment';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient, private recipeService: RecipeService) {
    }

    private url = environment.firebase;
    private recipesURL = `${this.url}/recipes.json`;

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.httpClient.put(this.recipesURL, recipes).subscribe(response => {
            console.log('storeRecipes response: ', response);
        });
    }

    fetchRecipes() {
        return this.httpClient.get<Recipe[]>(this.recipesURL).pipe(map(recipes => {
            return recipes.map(recipe => {
                // console.log('map recipe: ', JSON.parse(JSON.stringify(recipe)));
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
            });
        }), tap(recipes => {
            this.recipeService.setRecipes(recipes);
        }));
    }
}