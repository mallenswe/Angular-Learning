import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { format } from 'url';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error: string = null;

    constructor(private authService: AuthService, private router: Router) { }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(authForm: NgForm) {
        if (!authForm.valid) {
            return;
        }
        const email = authForm.value.email;
        const password = authForm.value.password;
        this.isLoading = true;
        let authObservable: Observable<AuthResponseData>;

        if (this.isLoginMode) {
            authObservable = this.authService.signin(email, password);
        } else {
            authObservable = this.authService.signup(email, password);
        }

        authObservable.subscribe(response => {
            console.log('authObservable response: ', response);
            this.isLoading = false;
            this.router.navigate(['/recipes']);
        },
        errorMessage => {
            console.log('authObservable error: ', errorMessage);
            this.error = errorMessage;
            this.isLoading = false;
        });

        console.log(authForm.value);
        authForm.reset();
    }
}