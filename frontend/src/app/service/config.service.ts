import { Injectable } from '@angular/core';

export interface IMenuItem {
  link: string;
  title: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  sidebarMenu: IMenuItem[] = [
    {link: '/', title: 'Dashboard', icon: 'home'},
    {link: '/product', title: 'Products', icon: 'archive'},
    {link: '/order', title: 'Orders', icon: 'edit2'},
  ];

  constructor() { }
}
