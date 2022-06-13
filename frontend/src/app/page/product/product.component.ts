import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  columns = this.config.productTableColumns;

  list$ = this.productService.getAll();

  constructor(
    private config: ConfigService,
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  startEdit(product: Product): void {
    this.router.navigate(['/', 'product', 'edit', product._id]);
  }
}
