import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IFileUploadResponse } from 'src/app/common/file-uploader/file-uploader.component';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent implements OnInit {

  product$: Observable<Product> = this.activatedRoute.params.pipe(
    switchMap(params => this.productService.getOne(params['id'])),
  );

  uploadedFilePath: string = '';

  constructor(
    private router: Router,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  update(product: Product): void {
    if (this.uploadedFilePath) {
      product.image = this.uploadedFilePath;
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
