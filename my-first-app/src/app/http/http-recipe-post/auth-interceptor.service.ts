import { HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const modifyRequest = request.clone({headers: request.headers.append('Auth', 'xyz')});

        return next.handle(modifyRequest);
    }
}