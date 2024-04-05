import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';
import { MessageService } from '../../shared/message/message.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  @ViewChild('newEmployeeForm') form: NgForm;

  constructor(private usersService: UsersService, private messageService: MessageService) {

  }
  
  newEmployee(){
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.usersService.addUser({email: email, password: password}).subscribe((resData: any)=>{
      this.messageService.showMessage(resData.message);
      this.form.reset();
    }, (error) => {
      this.messageService.showMessage(error.error.message);
    })
  }
}
