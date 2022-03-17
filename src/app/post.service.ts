import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPost } from './inferfaces';

const API_URL = environment.apiUrl;

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  loadAllPost(limit?: number): Observable<IPost[]>{
    return this.http.get<IPost[]>(
      `${API_URL}/posts${limit ? `?limit=${limit}` : ''}`);
  }
}
