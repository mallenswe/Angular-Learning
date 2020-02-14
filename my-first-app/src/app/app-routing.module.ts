import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ObservableUserComponent } from './observable-user/observable-user.component';
import { ObservableHomeComponent } from './observable-home/observable-home.component';
import { SimpleFormComponent } from './forms/simple-form/simple-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { ServerStatusComponent } from './pipe/server-status/server-status.component';
import { HttpRecipePostComponent } from './http/http-recipe-post/http-recipe-post.component';
import { RecipesResolverService } from './recipes/recipes.resolver.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
        {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]},
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },
    {path: 'ObservableHome', component: ObservableHomeComponent, children: [
        {path: 'ObservableUser/:id', component: ObservableUserComponent}
    ]},
    {path: 'simple-form', component: SimpleFormComponent},
    {path: 'reactive-form', component: ReactiveFormComponent},
    {path: 'server-status', component: ServerStatusComponent},
    {path: 'http-recipe-post', component: HttpRecipePostComponent}
];
// Routing Section Routes
// [
//     {
//         path: '',
//         component: RoutingHomeComponent
//     },
//     {
//         path: 'users',
//         component: RoutingUsersComponent,
//         children: [
//             {
//                 path: ':id/:name',
//                 component: RoutingUserComponent
//             }
//         ]
//     },
//     {
//         path: 'servers',
//         component: RoutingServersComponent,
//         // canActivate: [AuthGuard],
//         canActivateChild: [AuthGuard],
//         children: [
//             {
//                 path: ':id',
//                 component: RoutingServerComponent,
//                 resolve: {server: RoutingServerResolver}
//             },
//             {
//                 path: ':id/edit',
//                 component: EditServerComponent,
//                 canDeactivate: [CanDeactivateGuard]
//             }
//         ]
//     },
//     // { path: 'not-found', component: PageNotFoundComponent },
//     { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
//     { path: '**', redirectTo: '/not-found' }
// ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule {


}