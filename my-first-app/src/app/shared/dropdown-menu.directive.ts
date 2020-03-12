import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownMenu]'
})
export class DropdownMenuDirective {
  // private isOpen = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleOpen() {
    this.elementRef.nativeElement.offsetParent.firstChild.click();

  }

}
