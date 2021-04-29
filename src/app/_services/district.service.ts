import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { District } from '../_models/district';
@Injectable({ providedIn: 'root' })

export class DistrictService {

  constructor(private http: HttpClient) {
  }

  findAllDistrictForState(id: any) {
    return this.http.get<District>(`${environment.apiUrl}/api/district/findAllDistrictForState?stateId=` + id)
      .pipe(map((districtList: any) => {
        return districtList;
    }));
  }

  create(district: any) {
    district.state = district.states[0];
    return this.http.post<District>(`${environment.apiUrl}/api/district/create`, district)
      .pipe(map(districtResponse => {
        return districtResponse;
    }));
  }

  update(district: any) {
    district.state = district.states[0];
    return this.http.put<District>(`${environment.apiUrl}/api/district/update`, district)
      .pipe(map(districtResponse => {
        return districtResponse;
    }));
  }
  list(): Observable<District[]> {
    return this.http.get(`${environment.apiUrl}/api/district/findAll`)
      .pipe(map((data: District[]) => {
        return data;
    }));
  }

  get(id: string): Observable<District> {
    return this.http.get(`${environment.apiUrl}/api/district/findById?id=` + id)
      .pipe(map((district: District) => {
        return district;
    }));
  }

  remove(id: Number): Observable<Number> {
    return this.http.delete(`${environment.apiUrl}/api/district/removeById?id=` + id)
      .pipe(map((removedId : Number) => {
        return removedId;
    }));
  }
}
