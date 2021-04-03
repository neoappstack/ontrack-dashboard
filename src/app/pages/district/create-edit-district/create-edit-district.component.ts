import { DistrictService } from './../../../_services/district.service';
import { District } from '../../../_models/district';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-edit-district',
  templateUrl: './create-edit-district.component.html',
  styleUrls: ['./create-edit-district.component.css']
})
export class CreateEditDistrictComponent implements OnInit {

  id: string;
  pageName: string;
  district: Observable<District>;
  stateList = ['Nagaland'];
  form = new FormGroup({
    "id": new FormControl(""),
    "code": new FormControl("", Validators.required),
    "name": new FormControl("", Validators.required),
    "description": new FormControl(""),
    "state": new FormControl("", Validators.required),
    "createdBy": new FormControl({value: '', disabled: true}),
    "createdDate": new FormControl({value: '', disabled: true}),
    "lastModifiedBy": new FormControl({value: '', disabled: true}),
    "lastModifiedDate": new FormControl({value: '', disabled: true}),
  });

  constructor(
    private route: ActivatedRoute,
    private districtService: DistrictService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pageName = (this.id == null) ? "Create New District" : "Edit District";
    if(this.id != null){
      this.districtService.get(this.id).subscribe((district: any) => {
        this.form.patchValue(district)
      })
    }
  }

  onSubmit(): void{
    if(this.id != null){
      this.districtService.update(this.form.value).subscribe((res: any) => {
          console.log(res);
      })
    }else{
      this.districtService.create(this.form.value).subscribe((res: any) => {
          console.log(res);
      })
    }
  }
}
