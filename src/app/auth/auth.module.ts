import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { UserModule } from '../user/user.module';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // UserModule, //bug fixing -> when first time login and profile needs to be updated
    // HomeModule, //bug fixing
    HttpClientModule,
    AuthRoutingModule,
    ProgressSpinnerModule
  ]
})
export class AuthModule { }
