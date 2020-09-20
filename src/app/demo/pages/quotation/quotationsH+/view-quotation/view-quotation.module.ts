import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewQuotationRoutingModule } from './view-quotation-routing.module';
import {ViewQuotationComponent} from './view-quotation.component';

@NgModule({
  declarations: [ViewQuotationComponent],
  imports: [
    CommonModule,
    ViewQuotationRoutingModule
  ]
})
export class ViewQuotationModule { }
