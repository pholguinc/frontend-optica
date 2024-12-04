import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, inject, Output, output } from '@angular/core';
import AdminLayoutComponent from '../layout/admin-layout/admin-layout.component';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  adminLayoutComponent = inject(AdminLayoutComponent);

  isSidebarOpen = false;
  isDropdownUserOpen = false;

  onToggleSidebar() {
    this.adminLayoutComponent.toggleSidebar();
  }

  toggleUserDropdown() {
    this.isDropdownUserOpen = !this.isDropdownUserOpen;
  }

  @HostListener('document:click', ['$event'])
  closeDropdownOnOutsideClick(event: MouseEvent) {
    const dropdown = document.getElementById('user-dropdown');
    const button = document.getElementById('user-dropdown-btn');
    const target = event.target as HTMLElement;

    if (
      dropdown &&
      button &&
      !dropdown.contains(target) &&
      !button.contains(target)
    ) {
      this.isDropdownUserOpen = false;
    }
  }
}
