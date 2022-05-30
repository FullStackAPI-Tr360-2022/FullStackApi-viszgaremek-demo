import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HomeComponent } from './page/home/home.component';
import { ProductComponent } from './page/product/product.component';
import { OrderComponent } from './page/order/order.component';
import { IconModule } from './icon/icon.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ProductComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
