import { Component, Input, HostBinding } from '@angular/core';

export type GuaneButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
export type GuaneButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'guane-button',
  template: `
    <ng-content></ng-content>
  `,
  standalone: true,
  styleUrls: ['./guane-button.component.scss']
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
      this.disabled ? 'guane-button-disabled' : ''
    ].join(' ');
  }
}
