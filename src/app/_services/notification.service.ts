import { Subdivision } from 'src/app/_models/subdivision';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Notification } from '../_models/notification';

@Injectable({ providedIn: 'root' })
export class NotificationService {

  constructor(private http: HttpClient) {
  }

  create(notification: any) {

    return this.http.post<Notification>(`${environment.apiUrl}/api/notification/create`, notification)
      .pipe(map(notificationResponse => {
        return notificationResponse;
    }));
  }

  update(notification: Notification) {
    return this.http.put<Subdivision>(`${environment.apiUrl}/api/notification/update`, notification)
      .pipe(map(notificationResponse => {
        return notificationResponse;
    }));
  }

  list(): Observable<Notification[]> {
    return this.http.get(`${environment.apiUrl}/api/notification/findAll`)
      .pipe(map((notification: Notification[]) => {
        return notification;
    }));
  }

  get(id: string): Observable<Notification> {
    return this.http.get(`${environment.apiUrl}/api/notification/findById?id=` + id)
      .pipe(map((notification: Notification) => {
        return notification;
    }));
  }

  remove(id: Number): Observable<Number> {
    return this.http.delete(`${environment.apiUrl}/api/notification/removeById?id=` + id)
      .pipe(map((removedId : Number) => {
        return removedId;
    }));
  }
}
