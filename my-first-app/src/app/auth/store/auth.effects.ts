import { Actions, ofType, Effect } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { AuthService } from '../auth.service';

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

const handleAuthentication = (responseData: AuthResponseData) => {
    const expirationDate = new Date(new Date().getTime() + (+responseData.expiresIn * 1000));
    const user = new User(responseData.email, responseData.localId, responseData.idToken, expirationDate);
    localStorage.setItem('userData', JSON.stringify(user));
    return new AuthActions.AuthenticateSuccess({
        email: user.email,
        userId: user.id,
        token: user.token,
        expirationDate,
        redirect: true
    });
};

const handleError = (errorResponse: any) => {
    let errorMessage = 'An unknown error occurred';
    if (!errorResponse.error || !errorResponse.error.error) {
        return of(new AuthActions.AuthenticateFail(errorMessage));
    }
    switch (errorResponse.error.error.message) {
        case 'EMAIL_EXISTS':
            errorMessage = 'This email exists already';
            break;
        case 'EMAIL_NOT_FOUND':
            errorMessage = 'This email was not found';
            break;
        case 'INVALID_PASSWORD':
            errorMessage = 'Invalid Password';
            break;
    }
    return of(new AuthActions.AuthenticateFail(errorMessage));
};


@Injectable()
export class AuthEffects {
    private authSignupURL = `${environment.signupURL}${environment.firebaseKey}`;

    private authSigninURL = `${environment.signinURL}${environment.firebaseKey}`;


    @Effect()
    authSignUp = this.actions$.pipe(
        ofType(AuthActions.SIGNUP_START),
        switchMap((signupAction: AuthActions.SignupStart) => {
            return this.http.post<AuthResponseData>(this.authSignupURL, {
                email: signupAction.payload.email,
                password: signupAction.payload.password,
                returnSecureToken: true
            }).pipe(
                tap(responseData => {
                    this.authService.setLogoutTimer(+responseData.expiresIn * 1000);
                }),
                map(responseData => {
                    return handleAuthentication(responseData);
                }),
                catchError(
                    errorResponse => {
                        return handleError(errorResponse);
                    }
                ),

            );
        })
    );

    @Effect()
    authLogin = this.actions$.pipe(
        ofType(AuthActions.LOGIN_START),
        switchMap((authData: AuthActions.LoginStart) => {
            return this.http.post<AuthResponseData>(this.authSigninURL, {
                email: authData.payload.email,
                password: authData.payload.password,
                returnSecureToken: true
            }).pipe(
                tap(responseData => {
                    this.authService.setLogoutTimer(+responseData.expiresIn * 1000);
                }),
                map(
                    responseData => {
                        return handleAuthentication(responseData);
                    }
                ),
                catchError(
                    errorResponse => {
                        return handleError(errorResponse);
                    }
                ),

            );
        }),
    );

    @Effect({ dispatch: false })
    authRedirect = this.actions$.pipe(
        ofType(AuthActions.AUTHENTICATE_SUCCESS),
        tap((authSuccessAction: AuthActions.AuthenticateSuccess) => {
            if (authSuccessAction.payload.redirect) {
                this.router.navigate(['/']);
            }
        })
    );

    @Effect()
    autoLogin = this.actions$.pipe(
        ofType(AuthActions.AUTO_LOGIN),
        map(() => {
            const userData: {
                email: string;
                id: string;
                _token: string;
                _tokenExpirationDate: string;
            } = JSON.parse(localStorage.getItem('userData'));
            if (!userData) {
                return { type: 'DUMMY' };
            }

            const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

            if (loadedUser.token) {
                // this.user.next(loadedUser);
                const expirationDuration = (new Date(userData._tokenExpirationDate).getTime() - new Date().getTime());

                this.authService.setLogoutTimer(expirationDuration);

                return new AuthActions.AuthenticateSuccess({
                    email: loadedUser.email,
                    userId: loadedUser.id,
                    token: loadedUser.token,
                    expirationDate: new Date(userData._tokenExpirationDate),
                    redirect: false
                });
            }
            return { type: 'DUMMY' };
        })
    )

    @Effect({ dispatch: false })
    authLogout = this.actions$.pipe(
        ofType(AuthActions.LOGOUT),
        tap(() => {
            this.authService.clearLogoutTimer();
            localStorage.removeItem('userData');
            this.router.navigate(['/auth']);
        })
    );

    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private router: Router,
        private authService: AuthService
    ) { }
}