import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { baseAPI } from 'src/environments/environment';
import { Employee } from '../interfaces/employee';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token = localStorage.getItem('token')
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })
  

  constructor(private http: HttpClient) {}

  login(form: any): Observable<any> {  
    return this.http.post('api/user/login',  form);
  }

  createEmployee(form: any): Observable<any> {  
    return this.http.post('api/employee',  form, { headers: this.headers });
  }
  
  updateEmployee(form: any): Observable<any> {  
    return this.http.put<Employee[]>('api/employee/'+ form._id,  form, { headers: this.headers });
  }

  getEmployee(id: any): Observable<Employee>{
    return this.http.get<Employee>('/api/employee/'+ id, { headers: this.headers })
  }

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>('/api/employee', { headers: this.headers })
  }

  deleteEmployee(id: any): Observable<any>{
    return this.http.delete('/api/employee/'+ id , { headers: this.headers })
  }
}
