import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  loadedProduct: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
    ) { }

  ngOnInit() {
    // map all parameter it receives
    this.activatedRoute.paramMap.subscribe(paramMap => {

      // check if parameter does not have productId
      if (!paramMap.has('productId')) {

        // redirect user
      }
      // extract productId
      const productId = paramMap.get('productId');

      //use service to load product by id
      this.loadedProduct = this.productsService.getProduct(productId);
    });
  }

}
