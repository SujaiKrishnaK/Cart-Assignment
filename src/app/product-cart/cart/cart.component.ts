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
   }

  ngOnInit(): void {
    this.selectedProducts = this.cS.getProducts();
    console.log(this.selectedProducts,'cartcomp');
    
  }

  deleteItem(item){
    this.selectedProducts = this.selectedProducts.filter(product => 
      product.name != item.name
    )
    this.cS.totalSelectedProducts.next(this.selectedProducts.length);
    
  }

}
