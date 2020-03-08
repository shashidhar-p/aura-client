import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'web-auth',
      loadChildren: () => import('./web-auth/web-auth.module')
        .then(m => m.WebAuthModule),
    },
    {
      path: 'web-dashboard',
      loadChildren: () => import('./web-dashboard/web-dashboard.module')
        .then(m => m.WebDashboardModule),
    },
    {
      path: 'web-pages',
      loadChildren: () => import('./web-pages/web-pages.module')
        .then(m => m.WebPagesModule),
    },
    {
      path: '',
      redirectTo: 'web-dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
