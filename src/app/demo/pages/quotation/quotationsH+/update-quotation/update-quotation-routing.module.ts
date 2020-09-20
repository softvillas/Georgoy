import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateQuotationComponent} from './update-quotation.component';
const routes: Routes = [
  {
    path: '',
    component: UpdateQuotationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateQuotationRoutingModule { }
