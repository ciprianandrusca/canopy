import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import type { HeadingLevel } from '../../heading';

@Component({
  selector: 'lg-card-navigation-title',
  templateUrl: './card-navigation-title.component.html',
  styleUrls: [ './card-navigation-title.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgCardNavigationTitleComponent {
  @HostBinding('class.lg-card-navigation-title') class = true;

  @Input() headingLevel: HeadingLevel;
  @Input() title = '';
  @Input() link = '';
}
