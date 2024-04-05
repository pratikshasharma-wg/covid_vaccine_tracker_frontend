import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { MessageService } from '../../shared/message/message.service';
import { LoginResponse } from './login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('loginForm') form: NgForm;
  
  constructor(private router: Router, private authService: AuthService, private messageService: MessageService) {
    
  }

  login() {
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.authService.login({email: email, password: password}).subscribe(
      (resData: LoginResponse) => {
        this.authService.isLoggedIn = true;
        this.authService.currentUserToken = resData.access_token;
        sessionStorage.setItem('token',this.authService.currentUserToken);
        this.router.navigate(['']);
      },
      (error) => {
        this.messageService.showMessage(error.error.message);
      }
    )
  }
}
