import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessComponent } from './alerts/success/success.component';
import { WarningComponent } from './alerts/warning/warning.component';
import { HeaderComponent } from './header/header.component';
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
import { MainAccountComponent } from './main-account/main-account.component';
import { AccountStatusComponent } from './account-status/account-status.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { RoutingSectionComponent } from './routing-section/routing-section.component';
import { RoutingUsersComponent } from './routing-users/routing-users.component';
import { RoutingHomeComponent } from './routing-home/routing-home.component';
import { RoutingServersComponent } from './routing-servers/routing-servers.component';
import { RoutingUserComponent } from './routing-users/routing-user/routing-user.component';
import { EditServerComponent } from './routing-servers/edit-server/edit-server.component';
import { RoutingServerComponent } from './routing-servers/routing-server/routing-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';

import { ErrorPageComponent } from './error-page/error-page.component';
import { ObservableUserComponent } from './observable-user/observable-user.component';
import { ObservableHomeComponent } from './observable-home/observable-home.component';
import { SimpleFormComponent } from './forms/simple-form/simple-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { ServerStatusComponent } from './pipe/server-status/server-status.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpRecipePostComponent } from './http/http-recipe-post/http-recipe-post.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
// import { LoggingService } from './logging.service';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessComponent,
    WarningComponent,
    HeaderComponent,
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
    ObservableUserComponent,
    ObservableHomeComponent,
    SimpleFormComponent,
    ReactiveFormComponent,
    ServerStatusComponent,
    ShortenPipe,
    FilterPipe,
    HttpRecipePostComponent,
  ],
  imports: [
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects]),
    CoreModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  // providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
