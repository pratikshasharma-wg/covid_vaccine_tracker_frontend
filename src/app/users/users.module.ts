import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './users-list/user-detail/user-detail.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersListComponent,
    UserDetailComponent,
    AddUserComponent,
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TableModule,
    FormsModule
  ]
})
export class UsersModule { }
