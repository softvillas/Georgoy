import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PartnerViewComponent} from './partner-view.component';
const routes: Routes = [
  {
    path: '',
    component: PartnerViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerViewRoutingModule { }
