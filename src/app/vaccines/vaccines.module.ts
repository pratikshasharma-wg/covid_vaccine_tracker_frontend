import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VaccinesRoutingModule } from './vaccines-routing.module';
import { VaccineListComponent } from './vaccine-list/vaccine-list.component';
import { VaccineDetailComponent } from './vaccine-detail/vaccine-detail.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VaccineListComponent,
    VaccineDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    ConfirmDialogModule,
    VaccinesRoutingModule,
  ],
  providers:[
  ]
})
export class VaccinesModule { }
