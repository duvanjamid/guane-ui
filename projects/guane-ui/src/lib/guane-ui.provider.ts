import { Provider } from '@angular/core';
import { GuaneThemeService } from './core/theme/theme.service';

export function provideGuaneUI(): Provider[] {
  return [
    GuaneThemeService
  ];
}

export * from './guane-ui.module';
export * from './components/button/guane-button.component';
// Exportar otros componentes y servicios
