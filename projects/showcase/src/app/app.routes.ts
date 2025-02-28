import { Routes } from '@angular/router';
import { ButtonShowcaseComponent } from './button-showcase.component';

export const routes: Routes = [
  { path: '', component: ButtonShowcaseComponent },
  {
    path: 'components',
    component: ButtonShowcaseComponent,
    children: [
      { path: 'buttons', component: ButtonShowcaseComponent }
    ]
  }
];
