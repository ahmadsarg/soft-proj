import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.httpClient.post(`${environment.apiURL}Authentication/Login`,
    {
      username: username,
      password: password,
    });
  }

  saveToken(token: any) {
    localStorage.setItem('token', token.token);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/products']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }
}
