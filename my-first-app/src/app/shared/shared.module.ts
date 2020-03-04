import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceHolderDirective } from './placeholder/placeholder.directive';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';
import { NavbarCollapseDirective } from './navbar-collapse.directive';
import { DropdownMenuDirective } from './dropdown-menu.directive';

@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceHolderDirective,
        DropdownDirective,
        DropdownMenuDirective,
        NavbarCollapseDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceHolderDirective,
        DropdownDirective,
        DropdownMenuDirective,
        NavbarCollapseDirective,
        CommonModule
    ],
    entryComponents: [AlertComponent]
})
export class SharedModule { }
