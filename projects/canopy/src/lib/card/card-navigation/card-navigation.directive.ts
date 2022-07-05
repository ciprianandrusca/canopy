import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[lgCardNavigation]',
})
export class LgCardNavigationDirective {
  @HostBinding('class.lg-card--navigation') class = true;
}
