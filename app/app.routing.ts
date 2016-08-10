import { Routes, RouterModule } from '@angular/router';

import { DjComponent } from './dj/dj.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dj',
    pathMatch: 'full'
  },
  {
    path: 'dj',
    component: DjComponent
  }
];

export const routing = [
  RouterModule.forRoot(appRoutes)
];


