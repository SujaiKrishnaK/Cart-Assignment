import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  selectedProducts = [];
  quantity = [];
  constructor(private cS:CommonService) {
    for(let i=1;i<=10;i++){
      this.quantity.push(i);
    }
    this.cS.selectedProduct.subscribe((prod) => {
      this.selectedProducts.push(prod);
      this.selectedProducts = [... new Set(this.selectedProducts)];
      this.cS.totalSelectedProducts.next(this.selectedProducts.length);
    })
   }

  ngOnInit(): void {
  }
  deleteItem(item){
    this.selectedProducts = this.selectedProducts.filter(product => 
      product.name != item.name
    )
    console.log(this.selectedProducts);
    
  }

}
