import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}product`);
  }

}
