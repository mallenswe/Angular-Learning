import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { timeout } from 'rxjs/operators';

@Directive({
  selector: '[appNavbarCollapse]'
})
export class NavbarCollapseDirective {
  private isCollapsed = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleCollapse() {
    const navbarToggler = this.elementRef.nativeElement;
    const navbarMenu = this.elementRef.nativeElement.nextElementSibling;
    this.isCollapsed = !this.isCollapsed;
    console.log('navbarCollapse: ', navbarMenu);

    if (!this.isCollapsed) {
      this.renderer.removeClass(navbarToggler, 'collapsed');
      this.renderer.setAttribute(navbarToggler, 'aria-expanded', 'true');
      // this.renderer.addClass(navbarMenu, 'slideIn');
      this.renderer.addClass(navbarMenu, 'show');

    } else {
      this.renderer.addClass(navbarToggler, 'collapsed');
      this.renderer.setAttribute(navbarToggler, 'aria-expanded', 'false');
      // this.renderer.removeClass(navbarMenu, 'slideIn');
      this.renderer.removeClass(navbarMenu, 'show');
    }
  }

}
