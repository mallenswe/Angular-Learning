import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeItemComponent,
        RecipeListComponent,
        RecipeStartComponent
    ],
    imports: [
        SharedModule,
        RouterModule,
        RecipesRoutingModule,
        ReactiveFormsModule
    ]
    // exports: [
    //     RecipesComponent,
    //     RecipeDetailComponent,
    //     RecipeEditComponent,
    //     RecipeItemComponent,
    //     RecipeListComponent,
    //     RecipeStartComponent
    // ]
})
export class RecipesModule { }
