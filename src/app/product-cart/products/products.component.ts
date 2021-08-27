import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
filterUpdate = new Subject<string>();
filteredProducts:any;
products:any[] =[
  {
    "imgUrl": "https://image.shutterstock.com/z/stock-photo-pair-of-white-sneakers-isolated-on-white-background-sport-shoes-712448377.jpg",
    "name": "Sport Shoes",
    "price": 110
  },
  {
    "imgUrl": "https://image.shutterstock.com/z/stock-photo-vintage-red-shoes-on-white-background-92008067.jpg",
    "name": "Red SNEAKER",
    "price": 91
  },
  {
    "imgUrl": "https://image.shutterstock.com/z/stock-photo-pink-and-black-sport-woman-shoes-isolated-on-white-background-709418083.jpg",
    "name": "Sport Shoes Women",
    "price": 94
  },
  {
    "imgUrl": "https://image.shutterstock.com/z/stock-photo-children-s-autumn-or-winter-fashion-boots-isolated-on-white-background-708900334.jpg",
    "name": "Winter boots children",
    "price": 143
  },
  {
    "imgUrl": "https://image.shutterstock.com/z/stock-photo-bangkok-thailand-january-onitsuka-tiger-asics-gel-lyte-iii-on-january-in-bangkok-292088969.jpg",
    "name": "Sports shoes Red-White",
    "price": 150
  },
  {
    "imgUrl": "https://image.shutterstock.com/z/stock-photo-leather-shoes-isolated-on-white-background-including-clipping-path-216565609.jpg",
    "name": "Black leather shoes",
    "price": 250
  },
  {
    "imgUrl": "https://image.shutterstock.com/z/stock-photo-casual-shoes-on-white-background-included-clipping-path-667459072.jpg",
    "name": "Shoes Canvas",
    "price": 50
  },
  {
    "imgUrl": "https://image.shutterstock.com/z/stock-photo-white-sneakers-on-white-background-including-clipping-path-1100736923.jpg",
    "name": "Shoes White",
    "price": 85
  },
  {
    "imgUrl": "https://image.shutterstock.com/z/stock-photo-yellow-sneakers-15066415.jpg",
    "name": "Sneakers Yellow",
    "price": 125
  }
];
searchVal:any;
  constructor(private cS:CommonService) {
    this.filterUpdate.pipe(
      debounceTime(1500),
      distinctUntilChanged())
      .subscribe(value => {
        this.applySearch(value);
      });
   }

  ngOnInit(): void {
    this.filteredProducts = this.products;
  }

  addToCart(item:any){
    this.cS.selectedProduct.next(item)
  }
  applySearch(value){
    if(value && value.length > 0){
      this.filteredProducts = this.products.filter(val => val.name.toLowerCase().indexOf(value) > -1)
    }else{
      this.filteredProducts = this.products;
    }
  }
}
