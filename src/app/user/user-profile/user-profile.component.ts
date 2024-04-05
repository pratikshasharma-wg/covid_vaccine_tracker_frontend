import { Component, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { NgFor } from '@angular/common';
import { FormControl, NgForm } from '@angular/forms';
import { MessageService } from '../../shared/message/message.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  @ViewChild('profileForm') form: NgForm;
  
  constructor(private userService: UserService, private messageService: MessageService) {

  }

  update() {
    console.log(this.form);
    const name = this.form.value.name;
    const gender = this.form.value.gender;
    this.userService.updateProfile({name: name, gender: gender}).subscribe((resData: any) => {
      this.messageService.showMessage(resData.message);
    }, 
    (error) => {
      this.messageService.showMessage(error.error.message);
    })
  }

  getControls(){
    return this.form.controls;
  }
}
