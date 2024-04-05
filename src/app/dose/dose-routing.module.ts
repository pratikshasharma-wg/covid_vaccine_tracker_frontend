import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoseDetailComponent } from './dose-detail/dose-detail.component';
import { VerifyDoseDetailComponent } from './verify-dose-detail/verify-dose-detail.component';

const routes: Routes = [
  {path: "dose", component: DoseDetailComponent},
  {path: "unapproved", component: VerifyDoseDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoseRoutingModule { }
