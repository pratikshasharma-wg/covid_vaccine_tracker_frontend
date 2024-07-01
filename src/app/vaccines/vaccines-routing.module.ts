import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccineListComponent } from './vaccine-list/vaccine-list.component';

const routes: Routes = [
  {path: "", component: VaccineListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaccinesRoutingModule { }
