import { Injectable } from '@angular/core';
//import { Product } from './product.model';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  result: any;
  
  // private products: Product[] = [
  //   {
  //     id: '3574661156392',
  //     title: 'Aveeno Moisturising Cream',
  //     brand: 'Aveeno',
  //     imageUrl: 'https://www.aveeno.ca/sites/www_aveeno_ca/files/images/products/PhaseIIProducts/Daily-Moisturizing-Lotion-SPF15_3.png',
  //     ingredients: ['A', 'B', 'C']
  //   },
  //   {
  //   id: '2',
  //   title: 'The Ordinary',
  //   brand: 'Aveeno',
  //   imageUrl: 'https://cdn.shopify.com/s/files/1/2062/6979/products/rdn-natural-moisturizing-factors-ha-100ml_1024x1024.png?v=1524526213',
  //   ingredients: ['A', 'B', 'C']
  //   },
    // {
    //   id: '3',
    //   title: 'Clinique',
    //   brand: 'Aveeno',
    //   imageUrl: 'https://hips.hearstapps.com/ell.h-cdn.co/assets/16/30/elle-editors-moisturizers-clinique-moisture-surge-intense-gesichtscreme-30ml_1.jpg',
    //   ingredients: ['A', 'B', 'C']
    // },
    // {
    //     id: '4',
    //     title: 'Re vive',
    //     brand: 'Aveeno',
    //     imageUrl: 'https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwc808b947/products/RE_VIVE/UK200021179_RE_VIVE.jpg',
    //     ingredients: ['A', 'B', 'C']
    // },
    // {
    //   id: '5',
    //   title: 'Bare Minerals',
    //   brand: 'Aveeno',
    //   imageUrl: 'https://s7d3.scene7.com/is/image/BareEscentuals/78852?$sharpen1$&wid=345&hei=345',
    //   ingredients: ['A', 'B', 'C']
    // },
    // {
    //     id: '6',
    //     title: 'VICHY',
    //     brand: 'Aveeno',
    //     imageUrl: 'https://www.vichy.co.uk/media/catalog/product/cache/small_image/320x320/beff4985b56e3afdbeabfc89641a4582/i/m/image_2_5.png',
    //     ingredients: ['A', 'B', 'C']
    // },
    // {
    //   id: '7',
    //   title: 'Origins Men',
    //   brand: 'Aveeno',
    //   imageUrl: 'https://cdn.idealo.com/folder/Product/930/8/930853/s3_produktbild_gross/origins-for-men-save-the-males-facial-cream-75-ml.jpg',
    //   ingredients: ['A', 'B', 'C']
    // },
    // {
    //     id: '8',
    //     title: 'Paulas Choice',
    //     brand: 'Aveeno',
    //     imageUrl: 'https://hips.hearstapps.com/cosmouk.cdnds.net/16/50/480x776/gallery-1481634192-best-moisturiser-for-combination-oily-skin.jpg?resize=480:*',
    //     ingredients: ['A', 'B', 'C']
    // }
  //]; 

  constructor(private _http: HttpClient) {
  }
  baseUrl = 'localhost:8200';

  getAllProducts(){
    return this._http.get(this.baseUrl + '/api/products');
    


    //return [...this.products];
  }

  getProduct(productId: string){
    // return {...this.products.find(product => {
    //     return product.id === productId;
    //   })
    // };
  }

  deleteProduct(productId: string){
    // this.products = this.products.filter(product =>{
    //   return product.id !== productId;
    // });
  }
}
