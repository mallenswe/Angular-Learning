import { Actions, Effect, ofType } from '@ngrx/effects';
import * as RecipesActions from './recipe.actions';
import { Recipe } from '../recipe.model';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class RecipeEffects {

    private url = environment.firebase;
    private recipesURL = `${this.url}/recipes.json`;

    @Effect()
    fetchRecipes = this.actions$.pipe(
        ofType(RecipesActions.FETCH_RECIPES),
        switchMap(() => {
            return this.httpClient.get<Recipe[]>(this.recipesURL);
        }),
        map(recipes => {
            return recipes.map(recipe => {
                // console.log('map recipe: ', JSON.parse(JSON.stringify(recipe)));
                return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
            });
        }),
        map(recipes => {
            return new RecipesActions.SetRecipes(recipes);
        })
    );

    @Effect({dispatch: false})
    storeRecipes = this.actions$.pipe(
        ofType(RecipesActions.STORE_RECIPES),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([actionData, recipesState]) => {
            return this.httpClient.put(this.recipesURL, recipesState.recipes);
        })
    )

    constructor(
        private actions$: Actions,
        private httpClient: HttpClient,
        private store: Store<fromApp.AppState>
    ) {

    }
}