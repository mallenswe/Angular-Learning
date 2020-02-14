import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class LoggingInterceptorService implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        // console.log('Outgoing request: ', request.url);
        // console.log('request headers: ', request.headers);
        return next.handle(request).pipe(tap(event => {
            if (event.type === HttpEventType.Response) {
                // console.log('incoming response: ', event.body);
            }
        }));
    }
}