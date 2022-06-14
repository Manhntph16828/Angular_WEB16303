import { Injectable } from '@angular/core';
import mockData from 'src/data';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IPost } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API_URL: string = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getPost(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.API_URL}/${id}`)
  }
  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.API_URL}`)
  }
  removePost(id: number): Observable<IPost> {
    return this.http.delete<IPost>(`${this.API_URL}/${id}`)
  }
  addPost(post: any): Observable<IPost> {
    return this.http.post<IPost>(`${this.API_URL}`, post)
  }
  updatePost(post: IPost) {
    return this.http.put<IPost>(`${this.API_URL}/${post.id}`, post);
  }
}
/**
 * 1. Import module "HttpClientModule" vào file app.module.ts
 * 2. Import service "HttpClient" vào product.service.ts
 * 3. Inject service http vào product service
 */