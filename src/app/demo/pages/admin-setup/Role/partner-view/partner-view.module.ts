import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerViewRoutingModule } from './partner-view-routing.module';
import { PartnerViewComponent } from './partner-view.component';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [PartnerViewComponent],
  imports: [
    CommonModule,
    NgbDropdownModule,
    SharedModule,
    PartnerViewRoutingModule,
    Ng2SearchPipeModule
  ]
})
export class PartnerViewModule { }
