import { Component } from '@angular/core';
import { UsersService } from '../users.service';

import { UserDetail } from './users.model';
import { MessageService } from '../../shared/message/message.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  date: string;
  vaccine: string;
  doseNum: string;
  users: UserDetail[] = null;

  constructor(private usersService: UsersService, private messageService: MessageService) {

  }

  ngOnInit() {
    this.usersService.getUsers().subscribe((users: {users: UserDetail[]}) => {
      this.users = users.users;
    }, (error) => {
      this.messageService.showMessage(error)
    });
  }

  fetchEmployees() {
    
    let formattedDate;
    if(this.date){
      const dateString = this.date;
      const parts = dateString.split('-');
      formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    }

    this.usersService.getUsers(formattedDate, this.vaccine, this.doseNum).subscribe((users: {users: UserDetail[]}) => {  
      this.users = users.users;
    }, (error) => {
      this.messageService.showMessage(error.error.message);
    });
  }
  
}
