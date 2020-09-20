import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../theme/shared/shared.module';
import { PoliciesRoutingModule } from './policies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PoliciesRoutingModule,
    SharedModule,
    Ng2SearchPipeModule
  ]
})
export class PoliciesModule { }
