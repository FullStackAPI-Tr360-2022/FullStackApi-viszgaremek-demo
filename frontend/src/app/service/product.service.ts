import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list: Product[] = [
    {
      _id: '12234dklfsjs',
      name: 'Vasaló',
      description: 'jó vasaló ha vasal a ló',
      price: 22000,
      active: true,
    },
    {
      _id: '3434jlkjlkj43l4',
      name: 'Vasaló',
      description: 'jó vasaló ha vasal a ló',
      price: 22000,
      active: true,
    },
    {
      _id: '434325423542354lkjljlk',
      name: 'Vasaló',
      description: 'jó vasaló ha vasal a ló',
      price: 22000,
      active: true,
    },
    {
      _id: 'jfdslfkjsdlkjf325432423',
      name: 'Vasaló',
      description: 'jó vasaló ha vasal a ló',
      price: 22000,
      active: true,
    },
  ];

  constructor() { }

  getAll(): Observable<Product[]> {
    const list = [];
    for (let i = 0; i < 10; i++) {
      const item = [...this.list];
      for (let j = 0; j < item.length; j++) {
        item[j]._id = `id-${ Math.round( Math.random() * 10000 ) }`;
        list.push(item[j]);
      }
    }
    return of(list);
  }

}
