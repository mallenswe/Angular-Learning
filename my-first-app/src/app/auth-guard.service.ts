import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LocalAuthService } from './local-auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private localAuthService: LocalAuthService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.localAuthService.isAuthenticated().then((authenticated: boolean) => {
            if (authenticated) {
                return true;
            } else {
                this.router.navigate(['/']);
            }
        });
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(route, state);
    }
}