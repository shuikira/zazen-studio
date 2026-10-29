import { Routes } from '@angular/router';

import { Acerca } from './pages/acerca/acerca';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home, title: 'Zazen Studio' },
  { path: 'acerca', component: Acerca, title: 'Acerca de · Zazen Studio' },
  { path: '**', redirectTo: '' },
];
