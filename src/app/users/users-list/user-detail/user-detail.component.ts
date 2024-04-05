import { Component, Input } from '@angular/core';
import { UserDetail } from '../users.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  @Input() index: number;
  @Input() user: UserDetail;
  
  constructor() {
    console.log("gkjdng");
  }
}
