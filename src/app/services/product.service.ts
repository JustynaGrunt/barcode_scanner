import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Product } from '../products/product.model';


export enum SearchType {
  all = '',
  title = 'title',
  brand = 'brand',
  type = 'type'
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = 'http://192.168.0.6:3000'; // use this for desktop browser --> 'http://localhost:3000';
 
  urlProducts: string = 'http://192.168.0.6:3000/api/products';
  public products: Product[];

  // apiKEY = '2656666';

  constructor(private http: HttpClient) { }


  getAllProducts(): Observable<any>
  {
    return this.http.get(this.urlProducts).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  
  getProductById(id: string){
    console.log(id);
    return this.http.get<Product>(this.baseUrl + '/api/products' + '/' + id);
  }

  getProducts(): Observable<any>
  {
    return this.http.get<Product>(this.baseUrl + '/api/products');
  }

  addProduct(product: Product){
    console.log(product);
    return this.http.post(this.baseUrl + '/api/products', product);
  }

  updateProduct(product: Product){
    return this.http.put(this.baseUrl + '/api/products' + '/' + product._id, product);
  }

  deleteProduct(id: string){
    console.log(this.baseUrl + '/api/products' + '/' + id);
    return this.http.delete(this.baseUrl + '/api/products' + '/' + id);
  }
}
