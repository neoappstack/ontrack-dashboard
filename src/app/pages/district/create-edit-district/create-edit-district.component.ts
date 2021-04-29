import { StateService } from './../../../_services/state.service';
import { DistrictService } from './../../../_services/district.service';
import { District } from '../../../_models/district';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-create-edit-district',
  templateUrl: './create-edit-district.component.html',
  styleUrls: ['./create-edit-district.component.css']
})
export class CreateEditDistrictComponent implements OnInit {

  id: string;
  pageName: string;
  district: Observable<District>;
  dropdownSettings: IDropdownSettings = {};
  form:FormGroup;
  stateList =[];
  state =[];

  constructor(
    private route: ActivatedRoute,
    private stateService: StateService,
    private router: Router,
    private districtService: DistrictService,
    private spinner: NgxSpinnerService) {
      this.spinner.show();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pageName = (this.id == null) ? "Create New District" : "Edit District";
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      allowSearchFilter: true
    };
    this.stateService.list().subscribe((stateList: any) => {
      this.stateList = stateList;
    });
    this.form = new FormGroup({
      "id": new FormControl(""),
      "code": new FormControl("", Validators.required),
      "name": new FormControl("", Validators.required),
      "description": new FormControl(""),
      "states": new FormControl("", Validators.required),
      "createdBy": new FormControl({value: '', disabled: true}),
      "createdDate": new FormControl({value: '', disabled: true}),
      "lastModifiedBy": new FormControl({value: '', disabled: true}),
      "lastModifiedDate": new FormControl({value: '', disabled: true}),
    });
    if(this.id != null){
      this.districtService.get(this.id).subscribe((district: any) => {
        this.state =[district.state];
        this.form.patchValue(district);
        this.spinner.hide();
      })
    }else{
      this.spinner.hide();
    }
  }

  onSubmit(): void{
    if(this.id != null){
      this.districtService.update(this.form.value).subscribe((res: any) => {
          this.router.navigate(['/district']);
      })
    }else{
      this.districtService.create(this.form.value).subscribe((res: any) => {
          this.router.navigate(['/district']);
      })
    }
  }
}
