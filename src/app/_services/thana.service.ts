import { Subdivision } from './../_models/subdivision';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Thana } from '../_models/thana';
@Injectable({ providedIn: 'root' })

export class ThanaService {
  findAllThanaUnderSubdivision(id: any) {
    return this.http.get(`${environment.apiUrl}/api/thana/findAllThanaUnderSubdivision?subdivisionId=`+ id)
      .pipe(map((data: Subdivision[]) => {
        return data;
    }));
  }

  constructor(private http: HttpClient) {
  }

  create(thana: Thana) {
    thana.state = thana.states[0];
    thana.district = thana.districts[0];
    thana.subdivision = thana.subdivisions[0];
    return this.http.post<Thana>(`${environment.apiUrl}/api/thana/create`, thana)
      .pipe(map(thanaResponse => {
        return thanaResponse;
    }));
  }

  update(thana: any) {
    thana.state = thana.states[0];
    thana.district = thana.districts[0];
    thana.subdivision = thana.subdivisions[0];
    return this.http.put<Thana>(`${environment.apiUrl}/api/thana/update`, thana)
      .pipe(map(thanaResponse => {
        return thanaResponse;
    }));
  }
  list(): Observable<Thana[]> {
    return this.http.get(`${environment.apiUrl}/api/thana/findAll`)
      .pipe(map((data: Thana[]) => {
        return data;
    }));
  }

  get(id: string): Observable<Thana> {
    return this.http.get(`${environment.apiUrl}/api/thana/findById?id=` + id)
      .pipe(map((thana: Thana) => {
        return thana;
    }));
  }

  remove(id: Number): Observable<Number> {
    return this.http.delete(`${environment.apiUrl}/api/thana/removeById?id=` + id)
      .pipe(map((removedId : Number) => {
        return removedId;
    }));
  }
}
