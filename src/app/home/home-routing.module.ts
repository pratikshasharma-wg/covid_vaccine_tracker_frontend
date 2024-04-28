import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeGuard } from './home.guard';
import { checkFirstTimeLogin } from '../auth/first-time-login.guard';


const routes: Routes = [
  {
    path: "", 
    component: HomeComponent,
    canActivate: [HomeGuard],
    children: [
      {
        path: "",
        canActivate: [checkFirstTimeLogin],
        component: DashboardComponent
      },
      {
        path: "",
        canActivate: [checkFirstTimeLogin],
        loadChildren: () => import('../users/users.module').then((mod) => mod.UsersModule)
      },
      {
        path: "",
        canActivate: [checkFirstTimeLogin],
        loadChildren: () => import('../dose/dose.module').then((mod) => mod.DoseModule)
      },
      {
        path: "",
        canActivate: [checkFirstTimeLogin],
        loadChildren: () => import('../vaccines/vaccines.module').then((mod) => mod.VaccinesModule)
      },
      {
        path: "",
        loadChildren: () => import('../user/user.module').then((mod) => mod.UserModule)
      },
      {
        path: "change-password",
        loadComponent: () => import('../auth/change-password/change-password.component').then((mod) => mod.ChangePasswordComponent)
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
