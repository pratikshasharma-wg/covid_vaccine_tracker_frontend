import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersPageComponent } from './users-page/users-page.component';

const routes: Routes = [
  {path: "users", component: UsersPageComponent},
  {path: "add-user", component: AddUserComponent},
  {path: "users-list", component: UsersListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
