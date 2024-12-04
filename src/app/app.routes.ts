import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./shared/layout/auth-layout/auth-layout.component'),
    children:[
      {
        path: '',
        loadChildren: () => import('./auth/features/auth.routes').then(m => m.routes)
      }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '/admin' },

  {
    path: 'admin',
    canActivate:[privateGuard],
    loadComponent: () => import('./shared/layout/admin-layout/admin-layout.component'),
    children:[
      {
        path: 'categorias',
        loadChildren: ()=> import('./categories/features/categories.routes').then(m => m.routes)
      }

    ]
  }
];
