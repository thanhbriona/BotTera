import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/reports/report-statistic', pathMatch: 'full' },
  {
    path: 'basic-ui',
    loadChildren: () =>
      import('./basic-ui/basic-ui.module').then((m) => m.BasicUiModule),
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./charts/charts.module').then((m) => m.ChartsDemoModule),
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/form.module').then((m) => m.FormModule),
  },
  {
    path: 'tables',
    loadChildren: () =>
      import('./tables/tables.module').then((m) => m.TablesModule),
  },
  {
    path: 'icons',
    loadChildren: () =>
      import('./icons/icons.module').then((m) => m.IconsModule),
  },
  {
    path: 'apps',
    loadChildren: () => import('./apps/apps.module').then((m) => m.AppsModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./user-pages/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./reports/reports.module').then((m) => m.ReportsModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'error-pages',
    loadChildren: () =>
      import('./error-pages/error-pages.module').then(
        (m) => m.ErrorPagesModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
