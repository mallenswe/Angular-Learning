import { NgModule } from '@angular/core';
import { RoutingHomeComponent } from './routing-home/routing-home.component';
import { RoutingUsersComponent } from './routing-users/routing-users.component';
import { RoutingUserComponent } from './routing-users/routing-user/routing-user.component';
import { RoutingServersComponent } from './routing-servers/routing-servers.component';
import { RoutingServerComponent } from './routing-servers/routing-server/routing-server.component';
import { EditServerComponent } from './routing-servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './routing-servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RoutingServerResolver } from './routing-servers/routing-server/routing-server-resolver.service';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ObservableUserComponent } from './observable-user/observable-user.component';
import { ObservableHomeComponent } from './observable-home/observable-home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent},
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },
    {path: 'ObservableHome', component: ObservableHomeComponent, children: [
        {path: 'ObservableUser/:id', component: ObservableUserComponent}
    ]},
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