import { NotificationService } from './../../../_services/notification.service';
import { Notification } from './../../../_models/notification';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { StateService } from 'src/app/_services/state.service';

@Component({
  selector: 'app-create-edit-notification',
  templateUrl: './create-edit-notification.component.html',
  styleUrls: ['./create-edit-notification.component.css']
})
export class CreateEditNotificationComponent implements OnInit {

  id: string;
  pageName: string;
  notification: Observable<Notification>;
  form = new FormGroup({
    "id": new FormControl(""),
    "code": new FormControl("", Validators.required),
    "name": new FormControl("", Validators.required),
    "config": new FormControl("", Validators.required),
    "description": new FormControl("", Validators.required),
    "createdBy": new FormControl({value: '', disabled: true}),
    "createdDate": new FormControl({value: '', disabled: true}),
    "lastModifiedBy": new FormControl({value: '', disabled: true}),
    "lastModifiedDate": new FormControl({value: '', disabled: true}),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private spinner: NgxSpinnerService) {
      this.spinner.show();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pageName = (this.id == null) ? "Create New Notification" : "Edit Notification";
    if(this.id != null){
      this.notificationService.get(this.id).subscribe((state: any) => {
        this.form.patchValue(state);
        this.spinner.hide();
      })
    }else{
      this.spinner.hide();
    }
  }

  onSubmit(): void{
    if(this.id != null){
      this.notificationService.update(this.form.value).subscribe((res: any) => {
          this.router.navigate(['/notification']);
      })
    }else{
      this.notificationService.create(this.form.value).subscribe((res: any) => {
          this.router.navigate(['/notification']);
      })
    }
  }

}
