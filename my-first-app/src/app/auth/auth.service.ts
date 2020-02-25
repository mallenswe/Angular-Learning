import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable()
export class AuthService {
    user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer: any;

    constructor(private http: HttpClient, private router: Router) { }

    private firebaseKey = `AIzaSyBTP7m2aS_VRanQlCjkpcU8Cyr6EK30_GQ`;
    private authSignUp = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.firebaseKey}`;
    private authSignIn = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.firebaseKey}`;

    signup(email: string, password: string) {
        console.log('this.authSignUp: ', this.authSignUp);
        return this.http.post<AuthResponseData>(this.authSignUp, {
            email,
            password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError), tap(responseData => {
            this.handleAuthentication(responseData);
        }));
    }

    signin(email: string, password: string) {
        console.log('this.authSignIn: ', this.authSignIn);
        return this.http.post<AuthResponseData>(this.authSignIn, {
            email,
            password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError), tap(responseData => {
            this.handleAuthentication(responseData);
        }));
    }

    autoLogin() {
        const userData: {
            email: string;
            id: string;
            _token: string;
            _tokenExpirationDate: string;
        } = JSON.parse(localStorage.getItem('userData'));
        console.log('autoLogin userData: ', userData);
        if (!userData) {
            return;
        }

        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        console.log('autoLogin loadedUser: ', loadedUser);

        if (loadedUser.token) {
            this.user.next(loadedUser);
            const expirationDuration = (new Date(userData._tokenExpirationDate).getTime() - new Date().getTime());
            this.autoLogout(expirationDuration);
        }
    }

    logout() {
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }

    autoLogout(expirationDuration: number) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }

    private handleAuthentication(authData: AuthResponseData) {
        const expirationDate = new Date(new Date().getTime() + (+authData.expiresIn * 1000));
        const user = new User(authData.email, authData.localId, authData.idToken, expirationDate);
        this.autoLogout(+authData.expiresIn * 1000);
        this.user.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
    }

    private handleError(errorResponse: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred';
        if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage);
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
        return throwError(errorMessage);
    }
}