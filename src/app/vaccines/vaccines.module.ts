import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    VaccinesRoutingModule
  ]
})
export class VaccinesModule { }
