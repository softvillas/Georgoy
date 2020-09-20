import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliciesHRoutingModule } from './policies-h-routing.module';
import { PoliciesHComponent } from './policies-h.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../../../../theme/shared/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [PoliciesHComponent],
  imports: [
    CommonModule,
    PoliciesHRoutingModule,
    NgbDropdownModule,
    SharedModule,
    Ng2SearchPipeModule
  ]
})
export class PoliciesHModule { }
