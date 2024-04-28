import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyDoseDetailComponent } from './verify-dose-detail/verify-dose-detail.component';
import { AllDoseComponent } from './all-dose-details/all-dose.component';

const routes: Routes = [
  {path: "dose", component: AllDoseComponent},
  {path: "unapproved", component: VerifyDoseDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoseRoutingModule { 
}
