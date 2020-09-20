import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PartnerCreateComponent} from './partner-create.component';
const routes: Routes = [
  {
    path: '',
    component: PartnerCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerCreateRoutingModule { }
