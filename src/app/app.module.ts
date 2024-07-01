import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserModule } from '@angular/platform-browser';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { AppComponent } from './app.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './shared/message/message.component';
import { checkLoggedInUser } from './auth/auth.guard';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationService } from 'primeng/api';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [],
      { preloadingStrategy: PreloadAllModules }
    ),
    AuthModule,
    HomeModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PasswordModule,
    NgbTooltipModule,
    ToastModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    SharedModule
  ],
  providers: [
    ConfirmationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
