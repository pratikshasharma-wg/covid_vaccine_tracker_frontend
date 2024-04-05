import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent {
  constructor(private router: Router) {

  }

  addEmployeePage() {
    this.router.navigate(['/add-user']);
  }

  viewEmployeesPage() {
    this.router.navigate(['/users-list']);
  }

  approveDosePage() {
    this.router.navigate(['/unapproved']);
  }
}
