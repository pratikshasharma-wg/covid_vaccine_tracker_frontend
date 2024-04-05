import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../shared/message/message.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ChangePasswordComponent {
  @ViewChild('changePasswordForm') form: NgForm;

  constructor(private authService: AuthService, private messageService: MessageService) {

  }

  changePassword(): void {
    if (this.form.valid) {
      this.authService.changePassword(this.form.value.newPassword).subscribe( (resData: any) => {
        this.messageService.showMessage(resData.message);
        this.authService.logout();
      }, (error) => {
        this.messageService.showMessage(error.error.message);
      })
    }
  }
}
