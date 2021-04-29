import { Task } from './../_models/task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class TaskService {

  constructor(private http: HttpClient) {
  }

  create(task: Task) {
    task.assignedTo = task.assignedTos[0];
    task.thana = task.thanas[0];
    task.subdivision = task.subdivisions[0];
    task.district = task.districts[0];
    return this.http.post<Task>(`${environment.apiUrl}/api/task/create`, task)
      .pipe(map(taskResponse => {
        return taskResponse;
    }));
  }

  update(task: Task) {
    task.assignedTo = task.assignedTos[0];
    task.thana = task.thanas[0];
    task.subdivision = task.subdivisions[0];
    task.district = task.districts[0];
    return this.http.put<Task>(`${environment.apiUrl}/api/task/update`, task)
      .pipe(map(taskResponse => {
        return taskResponse;
    }));
  }
  list(): Observable<Task[]> {
    return this.http.get(`${environment.apiUrl}/api/task/findAll`)
      .pipe(map((data: Task[]) => {
        return data;
    }));
  }

  get(id: string): Observable<Task> {
    return this.http.get(`${environment.apiUrl}/api/task/findById?id=` + id)
      .pipe(map((task: Task) => {
        task.assignedTos = [task.assignedTo];
        task.thanas = [task.thana]
        task.subdivisions = [task.subdivision];
        task.districts = [task.district];
        return task;
    }));
  }

  remove(id: Number): Observable<Number> {
    return this.http.delete(`${environment.apiUrl}/api/task/removeById?id=` + id)
      .pipe(map((removedId : Number) => {
        return removedId;
    }));
  }
}
