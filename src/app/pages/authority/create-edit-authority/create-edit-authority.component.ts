import { Authority } from './../../../_models/authority';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { AuthorityService } from 'src/app/_services/authority.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-create-edit-authority',
  templateUrl: './create-edit-authority.component.html',
  styleUrls: ['./create-edit-authority.component.css']
})
export class CreateEditAuthorityComponent implements OnInit {

  id: string
  pageName: string
  authority: Observable<Authority>;

  constructor(private route: ActivatedRoute,private authorityService: AuthorityService) {}

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

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pageName = (this.id == null) ? "Create New Authority" : "Edit Authority";

    if(this.id != null){
      this.authorityService.get(this.id).subscribe((authority: any) => {
        this.form.patchValue(authority)
      })
    }
  }

  onSubmit(): void{
    if(this.id != null){
      this.authorityService.update(this.form.value).subscribe((res: any) => {
          console.log(res);
      })
    }else{
      this.authorityService.create(this.form.value).subscribe((res: any) => {
          console.log(res);
      })
    }
  }


}
