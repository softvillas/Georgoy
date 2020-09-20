import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth/signin',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then(module => module.AuthenticationModule)
      },
      {
        path: 'maintenance',
        loadChildren: () => import('./demo/pages/maintenance/maintenance.module').then(module => module.MaintenanceModule)
      }
    ]
  },
  {
    path: '',
    component: AdminComponent,
    children: [      
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      {
        path: 'admin-setup',
        loadChildren: () => import('./demo/pages/admin-setup/admin-setup.module').then(module => module.AdminSetupModule)
      },
      {
        path: 'quotation',
        loadChildren: () => import('./demo/pages/quotation/quotation.module').then(module => module.QuotationModule)
      },
      {
        path: 'policies',
        loadChildren: () => import('./demo/pages/Policies/policies.module').then(module => module.PoliciesModule)
      }
      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
