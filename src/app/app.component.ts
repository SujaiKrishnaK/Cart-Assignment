import { Component } from '@angular/core';
import { CommonService } from './common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened = false;
  title = 'cart';
  cartVisibility:boolean = true;

  constructor(public cS: CommonService){

  }

  showCart(){
    this.cartVisibility = !this.cartVisibility;
  }
}
