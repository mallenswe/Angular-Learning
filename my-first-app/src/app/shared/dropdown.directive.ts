import { Directive, HostListener, HostBinding, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  private isOpen = false;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  @HostListener('click') toggleOpen() {
    console.log('DropdownDirective: ', this.elementRef);
    const dropdownMenu = this.elementRef.nativeElement.nextElementSibling;
    this.isOpen = !this.isOpen;

    // console.log('this.isOpen: ', this.isOpen, this.elementRef);

    if (this.isOpen) {
      this.renderer.addClass(dropdownMenu, 'show');
    } else {
      this.renderer.removeClass(dropdownMenu, 'show');
    }

  }

}
