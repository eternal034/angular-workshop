import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITheme } from './inferfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) { }

  loadAllThemes(): Observable<ITheme[]>{
    return this.http.get<ITheme[]>(`${API_URL}/themes`)
  }
}
