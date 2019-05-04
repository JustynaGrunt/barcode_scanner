import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
// import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { SearchType, ProductService } from '../services/product.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: any ;
  searchTerm = '';
  type: SearchType = SearchType.all;

 // products: Product [];
  constructor(private productsService: ProductService) { }

  ngOnInit() {
    //this.products = this.productsService.getAllProducts();
      this.getProducts();

  }

  searchChanged(){
    //call searchData service
    //this.products = this.productsService.searchData(this.searchTerm, this.type);
  }

    getProducts(){
      this.productsService.getProducts()
      .subscribe(result => {
        this.products = result;
      }, error => {
          console.log(error);
      });
  }
}
