import { NgModule } from '@angular/core';

import { PostsService } from './http/http-recipe-post/posts.service';
import { AuthInterceptorService } from './http/http-recipe-post/auth-interceptor.service';
import { LoggingInterceptorService } from './http/http-recipe-post/logging-interceptor.service';
import { DataStorageService } from './shared/data-storage.service';
import { RecipeService } from './services/recipe.service';
import { ObservableUserService } from './observable-user/observable-user.service';
import { RoutingServerResolver } from './routing-servers/routing-server/routing-server-resolver.service';
import { AuthGuard } from './auth/auth.guard';
import { LocalAuthService } from './local-auth.service';
import { AuthService } from './auth/auth.service';
import { CanDeactivateGuard } from './routing-servers/edit-server/can-deactivate-guard.service';
import { ShoppingListService } from './services/shopping-list.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingService } from './logging.service';


@NgModule({
    providers: [
        ShoppingListService,
        AuthGuard,
        LocalAuthService,
        AuthService,
        CanDeactivateGuard,
        RoutingServerResolver,
        ObservableUserService,
        RecipeService,
        PostsService,
        DataStorageService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true }
    ]
})
export class CoreModule { }