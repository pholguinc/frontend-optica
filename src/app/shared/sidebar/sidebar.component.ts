import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faDashboard,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { MenuService, MenuItem } from '../../core/services/menu.service';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  RouterModule,
} from '@angular/router';
import { filter } from 'rxjs';
import AdminLayoutComponent from '../layout/admin-layout/admin-layout.component';

@Component({
  selector: 'app-sidebar',
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  private adminLayoutComponent = inject(AdminLayoutComponent);
  private menuService = inject(MenuService);
  private router = inject(Router);
  isDropdownOpen = false;

  open = faChevronUp;
  close = faChevronDown;

  dashboard = faDashboard;
  right = faArrowRight;

  menus: MenuItem[] = [];

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateSubmenuState();
      });
  }

  ngOnInit(): void {
    this.menus = this.menuService.getMenus();
    this.updateSubmenuState();
  }

  updateSubmenuState(): void {
    const currentRoute = this.router.url;
    this.menus.forEach((menu) => {
      if (menu.isSubmenu) {
        // Check if any submenu item is active, then open the parent
        menu.isOpen = menu.children?.some(
          (child) => currentRoute === child.link || this.isChildActive(child)
        );
      }
    });
  }

  isChildActive(child: MenuItem): boolean {
    // This function checks if the child is active
    return this.router.url.startsWith(child.link || '');
  }

  toggleDropdown(menu: MenuItem): void {
    this.menuService.toggleDropdown(menu);
  }

  get isSidebarOpen() {
    return this.adminLayoutComponent.isSidebarOpen();
  }

  toggleSidebar() {
    this.adminLayoutComponent.isSidebarOpen.update((current) => !current);
    console.log(this.adminLayoutComponent.isSidebarOpen());
  }

  isMenuActive(menu: MenuItem): boolean {
    // This function checks if the menu or any of its children is active
    if (menu.isSubmenu) {
      return (
        !!menu.isOpen || menu.children?.some((child) => this.isChildActive(child)) || false
      );
    }
    return this.isChildActive(menu); // If it's not a submenu, just check if the menu itself is active
  }
}
