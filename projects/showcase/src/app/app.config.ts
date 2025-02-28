import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideGuaneUI } from 'guane-ui';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideGuaneUI() // Proveedor personalizado de Guane UI
  ]
};
