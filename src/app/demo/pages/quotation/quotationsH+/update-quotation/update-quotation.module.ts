import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateQuotationRoutingModule } from './update-quotation-routing.module';
import {UpdateQuotationComponent} from './update-quotation.component';

@NgModule({
  declarations: [UpdateQuotationComponent],
  imports: [
    CommonModule,
    UpdateQuotationRoutingModule
  ]
})
export class UpdateQuotationModule { }
