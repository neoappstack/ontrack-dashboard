﻿import { User } from './../_models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class UserService {
    findAllUserUnderThana(id: any) {
      return this.http.get(`${environment.apiUrl}/api/user/findByThanaId?thanaId=`+ id)
        .pipe(map((data: User[]) => {
          return data;
      }));
    }
    create(user: User) {
      user.thana = user.thanas[0];
      user.subdivision = user.subdivisions[0];
      user.district = user.districts[0];
      user.state = user.states[0];
      return this.http.post<User>(`${environment.apiUrl}/api/user/create`, user)
        .pipe(map(user => {
          return user;
      }));
    }

    update(user: User) {
      user.thana = user.thanas[0];
      user.subdivision = user.subdivisions[0];
      user.district = user.districts[0];
      user.state = user.states[0];
      return this.http.put<User>(`${environment.apiUrl}/api/user/update`, user)
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
