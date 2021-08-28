import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ProductCartModule } from './product-cart/product-cart.module';
import { AngularSplitModule } from 'angular-split';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './product-cart/products/products.component';
import { CartComponent } from './product-cart/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,FormsModule,
    ProductCartModule,
    AngularSplitModule,FormsModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductsComponent},
      {path: 'cart', component: CartComponent},
      {path: '', component: ProductsComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
