import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewQuotationComponent} from './view-quotation.component';
const routes: Routes = [
  {
    path: '',
    component: ViewQuotationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewQuotationRoutingModule { }
