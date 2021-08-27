import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ProductsComponent, CartComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    ProductsComponent,
    CartComponent
  ]
})
export class ProductCartModule { }
