import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class UserService {
    create(user: any) {
      return this.http.post<User>(`${environment.apiUrl}/api/user/create`, user)
        .pipe(map(user => {
          return user;
      }));
    }

    update(authority: any) {
      return this.http.put<User>(`${environment.apiUrl}/api/user/update`, authority)
        .pipe(map(authorityResponse => {
          return authorityResponse;
      }));
    }

    get(id: string) {
      return this.http.get(`${environment.apiUrl}/api/user/findById?id=` + id)
        .pipe(map((user: User) => {
          return user;
      }));
    }
    constructor(private http: HttpClient) { }

    getAll() : Observable<User[]>{
        return this.http.get<User[]>(`${environment.apiUrl}/api/user/findAll`)
        .pipe(map((data: User[]) => {
        return data;
    }));
    }
}
