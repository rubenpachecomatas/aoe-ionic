import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(private http: HttpClient) { }

  getUrl(): Observable<any> {
    const url = 'http://localhost:3030/civs';
    return this.http.get(url);
  }

  addUrl(civilization): Observable<any> {
    const url = 'http://localhost:3030/createciv';
    return this.http.post(url, civilization);
  }

  delUrl(data): Observable<any> {
    const url = 'http://localhost:3030/deleteciv';
    return this.http.post(url, data);
  }

  modUrl(data, civilization): Observable<any> {
    const url = 'http://localhost:3030/updateciv';
    return this.http.post(url, { data, civilization });
  }

}
