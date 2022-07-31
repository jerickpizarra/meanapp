import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs';
import { ApiService } from './api.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private apiService: ApiService, private router: Router) {
    const token = localStorage.getItem('token');
    this._isLoggedIn$.next(!!token);
  }


  canActivate(): boolean{
    if(localStorage.getItem('token') === null){
      this.router.navigate(['login'])
      return false
    }
    return true
  }

  login(form: any) {
    return this.apiService.login(form).pipe(
      tap((res: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('token', res.token);
      })
    );
  }

  logout(): void{
    localStorage.removeItem('token');
    this._isLoggedIn$.next(false);
    this.router.navigate(['login'])
  }
}
