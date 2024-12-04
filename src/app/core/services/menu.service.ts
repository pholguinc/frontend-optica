import { Injectable } from '@angular/core';
import { faDashboard, faGripVertical, IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface MenuItem {
  title: string;
  icon?: IconDefinition;
  link?: string;
  open?: boolean;
  isSubmenu?: boolean;
  isOpen?: boolean;
  children?: MenuItem[];
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  dashboard: IconDefinition = faDashboard;
  admin: IconDefinition = faGripVertical;

  private menus: MenuItem[] = [
    {
      title: 'Dashboard',
      link: '/admin',
      icon: this.dashboard,
      open: false,
      isSubmenu: false,
    },

    {
      title: 'Administración',
      icon: this.admin,
      isOpen: false,
      isSubmenu: true,
      children: [
        {
          title: 'usuarios',
          link: '/admin/usuarios',
          icon: this.dashboard,
          isSubmenu: true,
        },
        {
          title: 'Roles',
          link: '/admin/roles',
          icon: this.dashboard,
          isSubmenu: true,
        },
        {
          title: 'Permisos',
          link: '/admin/permisos',
          icon: this.dashboard,
          isSubmenu: true,
        },
      ],
    },

    {
      title: 'Inventario',
      icon: this.dashboard,
      isOpen: false,
      isSubmenu: true,
      children: [
        {
          title: 'Categorias',
          link: '/admin/categorias',
          icon: this.dashboard,
          isSubmenu: true,
        },
        {
          title: 'Marcas',
          link: '/admin/inventario/marcas',
          icon: this.dashboard,
          isSubmenu: true,
        },
        {
          title: 'Proveedores',
          link: '/admin/inventario/proveedores',
          icon: this.dashboard,
          isSubmenu: true,
        },
        {
          title: 'Productos',
          link: '/admin/inventario/productos',
          icon: this.dashboard,
          isSubmenu: true,
        },
      ],
    },

    {
      title: 'Ventas',
      icon: this.dashboard,
      isOpen: false,
      isSubmenu: true,
      children: [
        {
          title: 'Historial de Ventas',
          link: '/admin/inventario/categorias',
          icon: this.dashboard,
          isSubmenu: true,
        },
        {
          title: 'Nueva Venta',
          link: '/admin/inventario/categorias',
          icon: this.dashboard,
          isSubmenu: true,
        },
      ],
    },
  ];

  getMenus(): MenuItem[] {
    return this.menus;
  }

  toggleDropdown(menu: MenuItem): void {
    if (menu.isSubmenu) {
      menu.isOpen = !menu.isOpen;
    }
  }
}
