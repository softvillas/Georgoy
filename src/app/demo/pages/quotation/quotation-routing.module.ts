import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'quotation-list',
        loadChildren: () => import('./quotationsH+/create-quotation/create-quotation.module').then(module => module.CreateQuotationModule)
      },
      {
        path: 'update-quotation',
        loadChildren: () => import('./quotationsH+/update-quotation/update-quotation.module').then(module => module.UpdateQuotationModule)
      },
      {
        path: 'view-quotation',
        loadChildren: () => import('./quotationsH+/view-quotation/view-quotation.module').then(module => module.ViewQuotationModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotationRoutingModule { }
