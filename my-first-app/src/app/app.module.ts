import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessComponent } from './alerts/success/success.component';
import { WarningComponent } from './alerts/warning/warning.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DeepdiveComponent } from './deepdive/deepdive.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { GameWapperComponent } from './game-wapper/game-wapper.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { OddEvenComponent } from './odd-even/odd-even.component';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { MainAccountComponent } from './main-account/main-account.component';
import { AccountStatusComponent } from './account-status/account-status.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ShoppingListService } from './services/shopping-list.service';
import { RoutingSectionComponent } from './routing-section/routing-section.component';
import { RoutingUsersComponent } from './routing-users/routing-users.component';
import { RoutingHomeComponent } from './routing-home/routing-home.component';
import { RoutingServersComponent } from './routing-servers/routing-servers.component';
import { RoutingUserComponent } from './routing-users/routing-user/routing-user.component';
import { EditServerComponent } from './routing-servers/edit-server/edit-server.component';
import { RoutingServerComponent } from './routing-servers/routing-server/routing-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './routing-servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RoutingServerResolver } from './routing-servers/routing-server/routing-server-resolver.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ObservableUserComponent } from './observable-user/observable-user.component';
import { ObservableHomeComponent } from './observable-home/observable-home.component';
import { ObservableUserService } from './observable-user/observable-user.service';
import { SimpleFormComponent } from './forms/simple-form/simple-form.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessComponent,
    WarningComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DeepdiveComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    GameWapperComponent,
    BasicHighlightDirective,
    OddEvenComponent,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    MainAccountComponent,
    AccountStatusComponent,
    NewAccountComponent,
    RoutingSectionComponent,
    RoutingUsersComponent,
    RoutingHomeComponent,
    RoutingServersComponent,
    RoutingUserComponent,
    EditServerComponent,
    RoutingServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    ObservableUserComponent,
    ObservableHomeComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, AuthGuard, AuthService, CanDeactivateGuard, RoutingServerResolver, ObservableUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
