import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Authority } from '../_models/authority';

@Injectable({ providedIn: 'root' })
export class AuthorityService {

  constructor(private http: HttpClient) {
  }

  create(authority: any) {
    return this.http.post<Authority>(`${environment.apiUrl}/api/authority/create`, authority)
      .pipe(map(authorityResponse => {
        return authorityResponse;
    }));
  }

  update(authority: any) {
    return this.http.put<Authority>(`${environment.apiUrl}/api/authority/update`, authority)
      .pipe(map(authorityResponse => {
        return authorityResponse;
    }));
  }
  list(): Observable<Authority[]> {
    return this.http.get(`${environment.apiUrl}/api/authority/findAll`)
      .pipe(map((data: Authority[]) => {
        return data;
    }));
  }

  get(id: string): Observable<Authority> {
    return this.http.get(`${environment.apiUrl}/api/authority/findById?id=` + id)
      .pipe(map((authority: Authority) => {
        return authority;
    }));
  }

  remove(id: Number): Observable<Number> {
    return this.http.delete(`${environment.apiUrl}/api/authority/removeById?id=` + id)
      .pipe(map((removedId : Number) => {
        return removedId;
    }));
  }
}
