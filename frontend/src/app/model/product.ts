import { Category } from "./category";

export class Product {
  [x: string]: any;
  _id?: string = '';
  name: string = '';
  description: string = '';
  price: number = 0;
  image?: string = '';
  active?: boolean = true;
  category?: string | Category = '';
}
