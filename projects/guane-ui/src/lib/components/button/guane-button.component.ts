// projects/guane-ui/src/lib/components/button/guane-button.component.ts
import { Component, Input, HostBinding, ViewEncapsulation } from '@angular/core';

export type GuaneButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
export type GuaneButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'guane-button',
  templateUrl: './guane-button.component.html',
  standalone: true,
  styleUrls: ['./guane-button.component.scss'],
  encapsulation: ViewEncapsulation.None // Importante para que los estilos sean globales
})
export class GuaneButtonComponent {
  @Input() variant: GuaneButtonVariant = 'primary';
  @Input() size: GuaneButtonSize = 'medium';
  @Input() disabled = false;

  @HostBinding('class') get classes() {
    return [
      'guane-button',
      `guane-button-${this.variant}`,
      `guane-button-${this.size}`,
      this.disabled ? 'disabled' : ''
    ].join(' ');
  }
}
