import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../products/product.model';


export enum SearchType {
  all = '',
  name = 'productName',
  brand = 'brand',
  type = 'type'
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = 'http://192.168.0.6:3000'; // use this for desktop browser --> 'http://localhost:3000';
 
  // apiKEY = '2656666';

  constructor(private http: HttpClient) { }

  searchData(title: string, type: SearchType): Observable<any> {
    // return this.http.get(`${this.url}?s=${encodeURI(title)&type=${type}&apikey=${this.apiKEY}`).pipe(
    //   map(results => results['Search'])
    // );
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}`)
    .pipe(
      //map results to whatever user search
      map(results =>{
        console.log('RAW ', results);
        return results['Search'];
      })
    );
  }

  getProductById(id: string){
    console.log(id);
    return this.http.get<Product>(this.url + '/api/products' + '/' + id);
  }

  getProducts()
  {
    console.log("test service" );
    return this.http.get(this.url + '/api/products');
    }
}
