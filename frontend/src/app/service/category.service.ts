import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<Category> {
  constructor(
    http: HttpClient,
  ) {
    super(http, 'category');
  }
}
