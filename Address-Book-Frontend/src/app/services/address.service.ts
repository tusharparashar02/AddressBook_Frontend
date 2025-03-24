import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private apiUrl = 'https://localhost:7008/api/AddressBook';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders() {
    const token = this.authService.getToken();
    return token ? { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`) } : {};
  }

  getAllAddresses(): Observable<{ success: boolean; message: string; data: any[] }> {
  return this.http.get<{ success: boolean; message: string; data: any[] }>(this.apiUrl, this.getHeaders());
  }
  
  getAddressById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, this.getHeaders());
  }

  addAddress(address: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, address, this.getHeaders());
  }

  updateAddress(id: number, address: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, address, this.getHeaders());
  }

  deleteAddress(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, this.getHeaders());
  }
}
