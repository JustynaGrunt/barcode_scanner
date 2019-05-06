import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
// import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { SearchType, ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  //products: any = [];
  products: Product[];
  errorMessage: string;

  public isSearchOpened = false;

  descending: boolean = false;
  order: number;
  column: string = 'name';

 // products: Product [];
  constructor(private productsService: ProductService,public router: Router) { }

  ngOnInit() {
      this.getProducts();
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  getAllProducts(){
    this.productsService.getAllProducts()
    .subscribe(products => this.products = products,
      error => this.errorMessage = <any>error);
  }
  onSearch(event){
    console.log(event.target.value);
  }

  getProducts(){
      this.productsService.getProducts()
      .subscribe(result => {
        this.products = result;
        console.log(this.products);
      }, error => {
          this.errorMessage = <any>error;
          console.log(error);
    });
  }

  AddProduct():void{
    this.router.navigate(['/add-product']);
  }

}
