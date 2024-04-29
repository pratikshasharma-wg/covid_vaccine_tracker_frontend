import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { checkFirstTimeLogin } from './first-time-login.guard';
import { checkLoggedInUser } from './auth.guard';

const routes: Routes = [
  {path: "login", canActivate: [ checkLoggedInUser ], component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
