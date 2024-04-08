import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './shared/message/message.component';
import { checkLoggedInUser } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationService } from 'primeng/api';


const appRoutes: Routes = [
  {path: "login",canActivate: [checkLoggedInUser], loadChildren: () => import('./auth/auth.module').then((mod) => mod.AuthModule)}
]

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HomeModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    PasswordModule,
    NgbTooltipModule,
    ToastModule,
    ConfirmDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
