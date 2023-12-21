import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
   return  this.http.get<Product[]>(this.apiUrl);
  }
   
}
