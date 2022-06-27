import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import { ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  columns = this.config.productTableColumns;

  columnsWithProjector = this.columns.filter( c => c.projector );

  list$ = this.productService.getAll()
  // .pipe(
  //   map( (list: Product[]) => {
  //     return list.map( product => {
  //       this.columnsWithProjector.forEach( col => {
  //         if (col.projector) {
  //           product[col.key] = col.projector(product);
  //         }
  //       });
  //       return product;
  //     });
  //   }),
  // ); // => | async

  categories$ = this.categoryService.getAll();

  constructor(
    private config: ConfigService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  startEdit(product: Product): void {
    this.router.navigate(['/', 'product', 'edit', product._id]);
  }

  createCategories(): void {
    combineLatest([
      this.categoryService.create({name: 'Háztartás', description: 'konyhai cuccok'}),
      this.categoryService.create({name: 'Barkács', description: ' barkács cuccok'}),
      this.categoryService.create({name: 'Egészség', description: 'mama cuccok'}),
    ]).subscribe(
      () => console.log('Categories have been created.'),
    );
  }
}
