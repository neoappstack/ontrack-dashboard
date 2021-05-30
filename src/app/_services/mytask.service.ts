import { Task } from './../_models/task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MyTaskService {

  constructor(private http: HttpClient) {
  }


  update(task: Task) {
    return this.http.put<Task>(`${environment.apiUrl}/api/my-task/update`, task)
      .pipe(map(taskResponse => {
        return taskResponse;
    }));
  }

  list(): Observable<Task[]> {
    return this.http.get(`${environment.apiUrl}/api/my-task/findAll`)
      .pipe(map((data: Task[]) => {
        return data;
    }));
  }

  get(id: string): Observable<Task> {
    return this.http.get(`${environment.apiUrl}/api/my-task/findById?id=` + id)
      .pipe(map((task: Task) => {
        task.states = [task.state]
        task.assignedTos = [task.assignedTo];
        task.thanas = [task.thana]
        task.subdivisions = [task.subdivision];
        task.districts = [task.district];
        return task;
    }));
  }
}
