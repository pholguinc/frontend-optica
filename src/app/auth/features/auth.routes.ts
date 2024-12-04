import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component'),

  },

  {
    path: 'registro',
    loadComponent: () => import('./signup/signup.component'),

  }
];
