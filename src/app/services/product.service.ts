import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  name = 'productName',
  brand = 'brand',
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:8200';
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

  getProductDetails(productId){
    return this.http.get(`${this.url}?id=${productId}`);
  }
}
