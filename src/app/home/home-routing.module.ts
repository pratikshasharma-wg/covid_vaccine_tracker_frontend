import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { checkLoggedInUser } from '../auth/auth.guard';
import { HomeGuard } from './home.guard';


const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [HomeGuard], children: [
    { path: "", component: DashboardComponent },
    { path: "", loadChildren: () => import('../users/users.module').then((mod) => mod.UsersModule) },
    { path: "", loadChildren: () => import('../dose/dose.module').then((mod) => mod.DoseModule) },
    { path: "", loadChildren: () => import('../vaccines/vaccines.module').then((mod) => mod.VaccinesModule) },
    { path: "", loadChildren: () => import('../user/user.module').then((mod) => mod.UserModule) },
    { path: "change-password", loadComponent: () => import('../auth/change-password/change-password.component').then((mod) => mod.ChangePasswordComponent)}
  ]},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
