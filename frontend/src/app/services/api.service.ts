import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseAPI } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  login(form: any): Observable<any> {  
    return this.http.post(baseAPI + '/api/user/login',  form);
  }

  create(form: any): Observable<any> {  
    return this.http.post(baseAPI + '/api/employee/login',  form);
  }


  // getProducts(): Observable<Products[]>{
  //   return this.http
  //     .get<Products[]>('https://fakestoreapi.com/products', {});
    
  // }

  // getProduct(id:number): Observable<Products>{
  //   return this.http
  //     .get<Products>('https://fakestoreapi.com/products/'+id, {})
  // }
}
