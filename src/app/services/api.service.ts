import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseAPI, environment } from 'src/environments/environment';
import { Employee } from '../interfaces/employee';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getHeader(token: any){
    return  new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
  }
  
  developmentMode(): string{
    return !environment.production ? baseAPI : ""
  }

  login(form: any): Observable<any> {  
    return this.http.post(this.developmentMode() +'api/user/login',  form);
  }

  createEmployee(form: any, token:any): Observable<any> {  
    return this.http.post(this.developmentMode() +'api/employee',  form, { headers: this.getHeader(token) });
  }
  
  updateEmployee(form: any, token:any): Observable<any> {  
    return this.http.put<Employee[]>(this.developmentMode() +'api/employee/'+ form._id,  form, { headers: this.getHeader(token) });
  }

  getEmployee(id: any, token:any): Observable<Employee>{
    return this.http.get<Employee>(this.developmentMode() +'api/employee/'+ id, { headers: this.getHeader(token) })
  }

  getEmployees(token: any): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.developmentMode() +'api/employee', { headers: this.getHeader(token) })
  }

  deleteEmployee(id: any, token:any): Observable<any>{
    return this.http.delete(this.developmentMode() +'api/employee/'+ id , { headers: this.getHeader(token) })
  }
}
