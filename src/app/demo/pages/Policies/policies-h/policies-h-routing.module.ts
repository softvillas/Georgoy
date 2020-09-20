import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PoliciesHComponent} from './policies-h.component';
const routes: Routes = [
  {
    path: '',
    component: PoliciesHComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliciesHRoutingModule { }
