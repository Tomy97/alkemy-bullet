import { Routes } from '@angular/router'
import { RouteConstants } from './shared/constants/route-constants'

/**
 * App router
 */
export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: `/${RouteConstants.Home}`,
    pathMatch: 'full',
  },
  {
    path: RouteConstants.Home,
    loadChildren: () =>
      import('./pages/test/test.module').then((m) => m.TestModule),
  },
  {
    path: RouteConstants.Ingresos,
    loadChildren: () =>
      import('./pages/ingresos/ingresos.module').then((m) => m.IngresosModule),
  },
  {
    path: RouteConstants.Egresos,
    loadChildren: () =>
      import('./pages/gastos/gastos.module').then((m) => m.GastosModule),
  },
  {
    path: RouteConstants.Usuarios,
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: RouteConstants.Login,
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: RouteConstants.Register,
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: '**',
    redirectTo: `/${RouteConstants.Home}`,
    pathMatch: 'full',
  },
]
