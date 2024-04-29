import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  role: string;
  isExpanded: boolean = true;

  constructor(private authService: AuthService) {
    this.role = authService.role;
  }

  logout() {
    this.authService.logout();
  }

  toggleSidebar(){
    this.isExpanded = !this.isExpanded;
  }

}
