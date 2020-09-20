import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../../theme/shared/shared.module';
import { AdminSetupRoutingModule } from './admin-setup-routing.module';



@NgModule({
  
  imports: [
    CommonModule,
    SharedModule,
    AdminSetupRoutingModule
  ],
  
  declarations: []
})
export class AdminSetupModule { }
