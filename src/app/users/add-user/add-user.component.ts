import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from '../../shared/message/message.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  @ViewChild('newEmployeeForm') form: NgForm;

  constructor(private usersService: UsersService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {

  }

  confirmAddUser() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to add this user?',
      accept: () => {
        this.newEmployee();
      },
      reject: () => { }
    });
  }

  newEmployee() {
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.usersService.addUser({ email: email, password: password }).subscribe((resData: any) => {
      this.messageService.showMessage(resData.message);
      this.form.reset();
    }, (error) => {
      this.messageService.showMessage(error.error.message);
    })
  }
}
