import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      
      {
        path: 'user-list',
        loadChildren: () => import('./Role/user/user.module').then(module => module.UserModule)
      },
      {
        path: 'partner-view',
        loadChildren: () => import('./Role/partner-view/partner-view.module').then(module => module.PartnerViewModule)
      },
      {
        path: 'partner-create',
        loadChildren: () => import('./Role/partner-create/partner-create.module').then(module => module.PartnerCreateModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSetupRoutingModule { }
