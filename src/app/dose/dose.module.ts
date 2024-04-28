import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { DoseRoutingModule } from './dose-routing.module';
import { DoseDetailComponent } from './dose-detail/dose-detail.component';
import { VerifyDoseDetailComponent } from './verify-dose-detail/verify-dose-detail.component';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AllDoseComponent } from './all-dose-details/all-dose.component';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    AllDoseComponent,
    DoseDetailComponent,
    VerifyDoseDetailComponent
  ],
  imports: [
    CommonModule,
    DoseRoutingModule,
    FormsModule,
    ProgressSpinnerModule,
    TableModule,
    DialogModule
  ]
})
export class DoseModule { }
