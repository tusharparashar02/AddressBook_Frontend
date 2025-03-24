import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'https://localhost:7008/api/Auth'; // Update based on backend API

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/login`, user);
  }

  register(userData: any): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/register`, userData);
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
