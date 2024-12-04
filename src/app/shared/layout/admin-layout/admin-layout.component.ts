import { Component, signal } from '@angular/core';
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [SidebarComponent, NavbarComponent, RouterModule],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
})
export default class AdminLayoutComponent {
  isSidebarOpen = signal(false);

  toggleSidebar() {
    this.isSidebarOpen.update((current) => !current);
  }
}
