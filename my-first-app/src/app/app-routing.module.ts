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

const appRoutes: Routes = [
    {
        path: '',
        component: RoutingHomeComponent
    },
    {
        path: 'users',
        component: RoutingUsersComponent,
        children: [
            {
                path: ':id/:name',
                component: RoutingUserComponent
            }
        ]
    },
    {
        path: 'servers',
        component: RoutingServersComponent,
        // canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: ':id',
                component: RoutingServerComponent,
                resolve: {server: RoutingServerResolver}
            },
            {
                path: ':id/edit',
                component: EditServerComponent,
                canDeactivate: [CanDeactivateGuard]
            }
        ]
    },
    // { path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {


}