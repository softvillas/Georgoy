import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateQuotationComponent} from './create-quotation.component';
const routes: Routes = [
  {
    path: '',
    component: CreateQuotationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateQuotationRoutingModule { }
