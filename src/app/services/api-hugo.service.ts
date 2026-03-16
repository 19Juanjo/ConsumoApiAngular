import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiHugo } from '../interface/api-hugo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://api.tvmaze.com/shows/41/episodes';

  constructor(private http: HttpClient) {}

  getSerie(): Observable<ApiHugo[]>{
    return this.http.get<ApiHugo[]>(this.url);
  }

}