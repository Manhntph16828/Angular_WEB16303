import { Injectable } from '@angular/core';
import mockData from 'src/data';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { IProject } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  API_URL: string = 'http://localhost:3000/project';

  constructor(private http: HttpClient) { }

  getProject(id: number): Observable<IProject> {
    return this.http.get<IProject>(`${this.API_URL}/${id}`)
  }
  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(`${this.API_URL}`)
  }
  removeProject(id: number): Observable<IProject> {
    return this.http.delete<IProject>(`${this.API_URL}/${id}`)
  }
  addProject(project: any): Observable<IProject> {
    return this.http.post<IProject>(`${this.API_URL}`, project)
  }
  updateProject(project: IProject) {
    return this.http.put<IProject>(`${this.API_URL}/${project.id}`, project);
  }
}
/**
 * 1. Import module "HttpClientModule" vào file app.module.ts
 * 2. Import service "HttpClient" vào product.service.ts
 * 3. Inject service http vào product service
 */