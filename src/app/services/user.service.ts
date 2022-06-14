import { Injectable } from '@angular/core';
import mockData from 'src/data';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProduct } from '../models/Product';
import { IUser } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL: string = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.API_URL}/${id}`)
  }
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.API_URL}`)
  }
  removeUser(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${this.API_URL}/${id}`)
  }
  addUser(user: any): Observable<IUser> {
    return this.http.post<IUser>(`${this.API_URL}`, user)
  }
  updateUser(user: IUser) {
    return this.http.put<IUser>(`${this.API_URL}/${user.id}`, user);
  }
}
/**
 * 1. Import module "HttpClientModule" vào file app.module.ts
 * 2. Import service "HttpClient" vào product.service.ts
 * 3. Inject service http vào product service
 */