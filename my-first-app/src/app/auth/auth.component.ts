import { Component, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceHolderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent implements OnDestroy {
    @ViewChild(PlaceHolderDirective, { static: false }) alertHost: PlaceHolderDirective;
    isLoginMode = true;
    isLoading = false;
    error: string = null;

    private closeSubscription: Subscription;

    constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) { }

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
            // console.log('authObservable response: ', response);
            this.isLoading = false;
            this.router.navigate(['/recipes']);
        },
            errorMessage => {
                console.log('authObservable error: ', errorMessage);
                this.error = errorMessage;
                // this.showErrorAlert(errorMessage);
                this.isLoading = false;
            });

        // console.log(authForm.value);
        authForm.reset();
    }

    onHandleError() {
        this.error = null;
    }

    private showErrorAlert(message: string) {
        const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();

        const alertComponentRef = hostViewContainerRef.createComponent(alertComponentFactory);

        alertComponentRef.instance.message = message;
        this.closeSubscription = alertComponentRef.instance.closeAlert.subscribe(() => {
            this.closeSubscription.unsubscribe();
            hostViewContainerRef.clear();
        });
    }

    ngOnDestroy() {
        if (this.closeSubscription) {
            this.closeSubscription.unsubscribe();
        }
    }
}