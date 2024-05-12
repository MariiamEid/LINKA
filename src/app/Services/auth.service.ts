import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginForm } from '../Interfaces/login-form';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userToken: any;
  constructor(private _HttpClient: HttpClient, private _Router: Router) {}
  authToken: any;



// baseUrl:string='https://localhost:44322'
  // Register Api
  // register(registerForm): Observable<any> {
  //   return this._HttpClient.post(
  //     'https://localhost:44322/api/Auth/Register',
  //     registerForm
  //   );
  // }

  // Login Api
  login(loginform:LoginForm): Observable<any> {
    return this._HttpClient.post<any>('https://localhost:7020/api/Auth/Login',loginform);
  }

  // login (userName: string, password: string): Observable<any> {
  //     return this._HttpClient.post(this.baseUrl+'/api/Auth/Login',userName&&password)


  //   }

  // Logout Api
  logOut() {
    localStorage.removeItem('token');
    this.userToken = '';
    this._Router.navigate(['/Welcome']);
  }
}
