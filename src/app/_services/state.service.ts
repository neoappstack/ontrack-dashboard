import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { State } from "../_models/state";

@Injectable({ providedIn: 'root' })
export class StateService {
  findallState(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {
  }

  create(state: any) {
    return this.http.post<State>(`${environment.apiUrl}/api/state/create`, state)
      .pipe(map((stateResponse: any) => {
        return stateResponse;
    }));
  }

  update(state: any) {
    return this.http.put<State>(`${environment.apiUrl}/api/state/update`, state)
      .pipe(map(stateResponse => {
        return stateResponse;
    }));
  }
  list(): Observable<State[]> {
    return this.http.get(`${environment.apiUrl}/api/state/findAll`)
      .pipe(map((data: State[]) => {
        return data;
    }));
  }

  get(id: string): Observable<State> {
    return this.http.get(`${environment.apiUrl}/api/state/findById?id=` + id)
      .pipe(map((state: State) => {
        return state;
    }));
  }

  remove(id: Number): Observable<Number> {
    return this.http.delete(`${environment.apiUrl}/api/state/removeById?id=` + id)
      .pipe(map((removedId : Number) => {
        return removedId;
    }));
  }
}
