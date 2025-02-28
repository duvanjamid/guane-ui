import { Component } from '@angular/core';
import { GuaneButtonComponent } from 'guane-ui';

@Component({
  selector: 'app-button-showcase',
  standalone: true,
  imports: [GuaneButtonComponent],
  template: `
    <div class="button-showcase">
      <h2>Button Variants</h2>

      <div class="button-grid">
        <guane-button >Primary Button</guane-button>
        <guane-button variant="primary">Primary Button</guane-button>
        <guane-button variant="secondary">Secondary Button</guane-button>
        <guane-button variant="success">Success Button</guane-button>
        <guane-button variant="warning">Warning Button</guane-button>
        <guane-button variant="error">Error Button</guane-button>
        <guane-button variant="info">Info Button</guane-button>
      </div>

      <h2>Button Sizes</h2>
      <div class="button-grid">
        <guane-button size="small" variant="primary">Small Button</guane-button>
        <guane-button size="medium" variant="primary">Medium Button</guane-button>
        <guane-button size="large" variant="primary">Large Button</guane-button>
      </div>
    </div>
  `,
  styles: [`
    .button-grid {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }
  `]
})
export class ButtonShowcaseComponent {}
