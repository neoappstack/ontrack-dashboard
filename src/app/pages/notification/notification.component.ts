import { Notification } from './../../_models/notification';
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { NotificationService } from "src/app/_services/notification.service";


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private toastr: ToastrService,
    private notificationService: NotificationService
    ) {
    this.notificationService.list().subscribe((notifications: Notification[]) => {
      this.notifications = notifications;
      this.dtTrigger.next();
    });
    }

  ngOnInit(): void {
  }

  removeNotification(id) {
    this.notificationService.remove(id).subscribe((removedId: Number) => {
      this.notifications = this.notifications.filter(item => item.id !== id);
      this.toastr.error( 'Notification with id ' + removedId + " has been removed.",'Notification Master');
    });
  }

}
