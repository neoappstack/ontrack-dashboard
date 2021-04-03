import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Role } from '../_models/role';

@Injectable({ providedIn: 'root' })
export class RoleService {

  constructor(private http: HttpClient) {
  }

  create(role: any) {
    return this.http.post<Role>(`${environment.apiUrl}/api/role/create`, role)
      .pipe(map(roleResponse => {
        return roleResponse;
    }));
  }

  update(role: any) {
    return this.http.put<Role>(`${environment.apiUrl}/api/role/update`, role)
      .pipe(map(roleResponse => {
        return roleResponse;
    }));
  }
  list(): Observable<Role[]> {
    return this.http.get(`${environment.apiUrl}/api/role/findAll`)
      .pipe(map((data: Role[]) => {
        return data;
    }));
  }

  get(id: string): Observable<Role> {
    return this.http.get(`${environment.apiUrl}/api/role/findById?id=` + id)
      .pipe(map((role: Role) => {
        return role;
    }));
  }

  remove(id: Number): Observable<Number> {
    return this.http.delete(`${environment.apiUrl}/api/role/removeById?id=` + id)
      .pipe(map((removedId : Number) => {
        return removedId;
    }));
  }
}
