import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerCreateRoutingModule } from './partner-create-routing.module';
import { PartnerCreateComponent } from './partner-create.component';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PartnerCreateComponent],
  imports: [
    CommonModule,
    PartnerCreateRoutingModule,
    SharedModule,
    NgbDropdownModule
  ]
})
export class PartnerCreateModule { }
