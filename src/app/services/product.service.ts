import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //API
  apiURL = "https://www.itgenius.co.th/sandbox_api/ministockapi/public/api/";

  constructor(private http: HttpClient) { }

  //headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'applicationjson'
    })
  }

  // อ่านข้อมูล Product
  getProducts(): Observable<ProductModel> {
    return this.http.get<ProductModel>(this.apiURL + 'products')
  }
}
