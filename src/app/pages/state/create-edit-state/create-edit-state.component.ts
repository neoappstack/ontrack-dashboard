import { StateService } from './../../../_services/state.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { State } from 'src/app/_models/state';

@Component({
  selector: 'app-create-edit-state',
  templateUrl: './create-edit-state.component.html',
  styleUrls: ['./create-edit-state.component.css']
})
export class CreateEditStateComponent implements OnInit {

  id: string;
  pageName: string;
  state: Observable<State>;
  form = new FormGroup({
    "id": new FormControl(""),
    "code": new FormControl("", Validators.required),
    "name": new FormControl("", Validators.required),
    "description": new FormControl("", Validators.required),
    "createdBy": new FormControl({value: '', disabled: true}),
    "createdDate": new FormControl({value: '', disabled: true}),
    "lastModifiedBy": new FormControl({value: '', disabled: true}),
    "lastModifiedDate": new FormControl({value: '', disabled: true}),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stateService: StateService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pageName = (this.id == null) ? "Create New State" : "Edit State";
    if(this.id != null){
      this.stateService.get(this.id).subscribe((state: any) => {
        this.form.patchValue(state)
      })
    }
  }

  onSubmit(): void{
    if(this.id != null){
      this.stateService.update(this.form.value).subscribe((res: any) => {
          this.router.navigate(['/state']);
      })
    }else{
      this.stateService.create(this.form.value).subscribe((res: any) => {
          this.router.navigate(['/state']);
      })
    }
  }

}
