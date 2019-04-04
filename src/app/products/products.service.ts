import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      id: '1',
      title: 'Aveeno',
      imageUrl: 'https://www.aveeno.ca/sites/www_aveeno_ca/files/images/products/PhaseIIProducts/Daily-Moisturizing-Lotion-SPF15_3.png',
      ingredients: ['A', 'B', 'C']
    },
    {
    id: '2',
    title: 'The Ordinary',
    imageUrl: 'https://cdn.shopify.com/s/files/1/2062/6979/products/rdn-natural-moisturizing-factors-ha-100ml_1024x1024.png?v=1524526213',
    ingredients: ['A', 'B', 'C']
    }
  ];
  constructor() { }

  getAllProducts(){
    //will return a new array of products
    return [...this.products];
  }

  getProduct(productId: string){
    return {...this.products.find(product => {
        return product.id === productId;
      })
    };
  }

  
}
