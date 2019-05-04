import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
 // @Input() productItem: Product;
  
  
  //Uncommment this line below to api usage
  @Input() productItem : Product;

  constructor() { }

  ngOnInit() {}

}

