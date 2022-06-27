import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDataTableComponent } from './ngx-data-table/ngx-data-table.component';
import { ProjectorPipe } from './pipe/projector.pipe';



@NgModule({
  declarations: [
    NgxDataTableComponent,
    ProjectorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxDataTableComponent,
  ],
})
export class DataTableModule { }
