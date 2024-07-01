import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent {
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  addEmployeePage() {
    this.router.navigate(['add-user'], {relativeTo: this.route});
  }

  viewEmployeesPage() {
    this.router.navigate(['users-list'], {relativeTo: this.route});
  }

  approveDosePage() {
    this.router.navigate(['dose', 'unapproved']);
  }
}
