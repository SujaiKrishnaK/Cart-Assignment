import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  selectedProduct: Subject<object> = new Subject<object>();
  totalSelectedProducts:Subject<number> = new Subject<number>();
  constructor() { }
}
