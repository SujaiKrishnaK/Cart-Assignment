import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  productList = [];
  selectedProduct: Subject<object> = new Subject<object>();
  totalSelectedProducts:Subject<number> = new Subject<number>();
  constructor() { 
    this.selectedProduct.subscribe(obj => {
      this.productList.push(obj);
      this.productList =  [... new Set(this.productList)];
      this.totalSelectedProducts.next(this.productList.length);
    })
  }
  getProducts(){
    return this.productList;
  }

}
