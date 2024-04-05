import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { DoseRoutingModule } from './dose-routing.module';
import { DoseDetailComponent } from './dose-detail/dose-detail.component';
import { VerifyDoseDetailComponent } from './verify-dose-detail/verify-dose-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DoseDetailComponent,
    VerifyDoseDetailComponent
  ],
  imports: [
    CommonModule,
    DoseRoutingModule,
    FormsModule,
    TableModule
  ]
})
export class DoseModule { }
