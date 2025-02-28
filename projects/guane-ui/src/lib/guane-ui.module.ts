import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuaneThemeService } from './core/theme/theme.service';

@NgModule({
  imports: [
    CommonModule,
    // Importar otros módulos de componentes
  ],
  exports: [
    // Exportar otros módulos de componentes
  ],
  providers: [
    GuaneThemeService
  ]
})
export class GuaneUIModule { }
