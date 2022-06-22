import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, Observer, of, Subject, switchMap } from 'rxjs';
import { IFileUploadResponse } from 'src/app/common/file-uploader/file-uploader.component';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { environment } from 'src/environments/environment';
import { isBs3 } from 'ngx-bootstrap/utils';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent implements OnInit {

  isBs3 = isBs3();

  search?: string;

  selectedCategory: Category | null = null;

  product$: Observable<Product> = this.activatedRoute.params.pipe(
    switchMap(params => this.productService.getOne(params['id'])),
  );

  uploadedFilePath: string = '';

  categories$ = this.categoryService.getAll();

  suggestions$: Observable<Category[]> = of([]);

  constructor(
    private router: Router,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.suggestions$ = new Observable((observer: Observer<string>) => {
      observer.next(this.search || '');
    }).pipe(
      switchMap((query: string) => {
        if (query) {
          return this.categoryService.search(`name=${query}`).pipe(
            map((data: Category[]) => Array.isArray(data) ? data : []),
          );
        }

        return of([]);
      }),
    );


    // this.categoryService.search('name=bar').subscribe(
    //   res => console.log(res),
    // );
  }

  changeName(ev: Event): void {
    this.search = ev as unknown as string;
  }

  selectCategory(ev: {item: Category}): void {
    this.selectedCategory = ev.item;
  }

  update(product: Product): void {
    if (this.uploadedFilePath) {
      product.image = this.uploadedFilePath;
    }

    if (this.selectedCategory) {
      product.category = this.selectedCategory?._id;
    } else if (typeof product.category !== 'string') {
      product.category = product.category?._id;
    }

    this.productService.update(product).subscribe({
      next: updatedProduct => this.location.back(),
      error: err => console.error(err),
    });
  }

  uploadSuccess(event: IFileUploadResponse): void {
    this.uploadedFilePath = event.path;
  }

  getImageSrc(product: Product): string {
    return `${environment.apiUrl}${product.image}`;
  }

}
