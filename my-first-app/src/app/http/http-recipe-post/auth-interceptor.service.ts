import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private authService: AuthService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        // const modifyRequest = request.clone({headers: request.headers.append('Auth', 'xyz')});
        return this.authService.user.pipe(take(1), exhaustMap(user => {
            if (!user) {
                return next.handle(request);
            }
            const modifiedRequest = request.clone({params: new HttpParams().set('auth', user.token)});
            return next.handle(modifiedRequest);
        }));
    }
}