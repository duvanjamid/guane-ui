import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GuaneThemeService } from 'guane-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/components/buttons">Buttons</a>
      <button (click)="toggleTheme()">Toggle Theme</button>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      display: flex;
      gap: 20px;
      padding: 20px;
      align-items: center;
    }
  `]
})
export class AppComponent {
  constructor(private themeService: GuaneThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
