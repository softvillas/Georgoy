import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateQuotationRoutingModule } from './create-quotation-routing.module';
import {CreateQuotationComponent} from './create-quotation.component';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [CreateQuotationComponent],
  imports: [
    CommonModule,
    CreateQuotationRoutingModule,
    SharedModule,
    NgbDropdownModule,
    Ng2SearchPipeModule
  ]
})
export class CreateQuotationModule { }
