import { Subdivision } from 'src/app/_models/subdivision';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { District } from '../_models/district';

@Injectable({ providedIn: 'root' })
export class SubdivisionService {
  findAllSubdivisionUnderDistrict(id: any) {
    return this.http.get(`${environment.apiUrl}/api/subdivision/findAllSubdivisionUnderDistrict?districtId=`+ id)
      .pipe(map((data: Subdivision[]) => {
        return data;
    }));
  }

  constructor(private http: HttpClient) {
  }

  create(subdivision: any) {
    subdivision.state = subdivision.states[0];
    subdivision.district = subdivision.districts[0];
    return this.http.post<Subdivision>(`${environment.apiUrl}/api/subdivision/create`, subdivision)
      .pipe(map(subdivisionResponse => {
        return subdivisionResponse;
    }));
  }

  update(subdivision: Subdivision) {
    subdivision.state = subdivision.states[0];
    subdivision.district = subdivision.districts[0];
    return this.http.put<Subdivision>(`${environment.apiUrl}/api/subdivision/update`, subdivision)
      .pipe(map(subdivisionResponse => {
        return subdivisionResponse;
    }));
  }
  list(): Observable<Subdivision[]> {
    return this.http.get(`${environment.apiUrl}/api/subdivision/findAll`)
      .pipe(map((data: Subdivision[]) => {
        return data;
    }));
  }

  get(id: string): Observable<Subdivision> {
    return this.http.get(`${environment.apiUrl}/api/subdivision/findById?id=` + id)
      .pipe(map((subdivision: Subdivision) => {
        return subdivision;
    }));
  }

  remove(id: Number): Observable<Number> {
    return this.http.delete(`${environment.apiUrl}/api/subdivision/removeById?id=` + id)
      .pipe(map((removedId : Number) => {
        return removedId;
    }));
  }
}
