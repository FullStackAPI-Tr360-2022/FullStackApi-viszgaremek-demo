import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDataTableComponent } from './ngx-data-table/ngx-data-table.component';



@NgModule({
  declarations: [
    NgxDataTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxDataTableComponent,
  ],
})
export class DataTableModule { }
