import { Injectable } from '@angular/core';
import { INgxTableColumn } from '../data-table/ngx-data-table/ngx-data-table.component';

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

  productTableColumns: INgxTableColumn[] = [
    {key: '_id', title: '#'},
    {key: 'name', title: 'Name'},
    {key: 'description', title: 'Desc.'},
    {key: 'price', title: 'Price'},
    {key: 'active', title: 'Active'},
  ];

  constructor() { }
}
