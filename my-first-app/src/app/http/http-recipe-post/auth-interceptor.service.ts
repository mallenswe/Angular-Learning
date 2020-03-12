import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { take, exhaustMap, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private authService: AuthService, private store: Store<fromApp.AppState>) { }
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        // const modifyRequest = request.clone({headers: request.headers.append('Auth', 'xyz')});
        return this.store.select('auth').pipe(
            take(1),
            map(authState => {
                return authState.user;
            }),
            exhaustMap(user => {
            if (!user) {
                return next.handle(request);
            }
            const modifiedRequest = request.clone({params: new HttpParams().set('auth', user.token)});
            return next.handle(modifiedRequest);
        }));
    }
}