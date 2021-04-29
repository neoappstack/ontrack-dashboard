import { StateService } from './../../../_services/state.service';
import { SubdivisionService } from './../../../_services/subdivision.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs';
import { Subdivision } from 'src/app/_models/subdivision';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DistrictService } from 'src/app/_services/district.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-create-edit-subdivision',
  templateUrl: './create-edit-subdivision.component.html',
  styleUrls: ['./create-edit-subdivision.component.css']
})
export class CreateEditSubdivisionComponent implements OnInit {

  id: string;
  pageName: string;
  districts = [];
  districtList = [];
  states = [];
  stateList = [];
  dropdownSettings: IDropdownSettings = {};
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private subdivisionService: SubdivisionService,
    private router: Router,
    private stateService: StateService,
    private districtService: DistrictService,
    private spinner: NgxSpinnerService) {
      this.spinner.show();
    }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.pageName = (this.id == null) ? "Create New Subdivision" : "Edit Subdivision";
      this.dropdownSettings = {
        singleSelection: true,
        idField: 'id',
        textField: 'name',
        allowSearchFilter: true
      };
      this.stateService.list().subscribe((stateList: any) => {
        this.stateList = stateList;
      })
      if(this.id != null){
        this.subdivisionService.get(this.id).subscribe((subdivision: Subdivision) => {
          this.form.patchValue(subdivision);
          this.districts = [subdivision.district];
          this.states = [subdivision.district.state];
          this.districtService.findAllDistrictForState(subdivision.district.state.id).subscribe((districtList: any) => {
            this.districtList = districtList;
            this.spinner.hide();
          });
        })
      }else{
        this.spinner.hide();
      }
      this.form = new FormGroup({
        "id": new FormControl(""),
        "code": new FormControl("", Validators.required),
        "name": new FormControl("", Validators.required),
        "description": new FormControl("",Validators.required),
        "districts": new FormControl("",Validators.required),
        "states": new FormControl("", Validators.required),
        "address": new FormControl("", Validators.required),
        "city": new FormControl("", Validators.required),
        "postalCode": new FormControl("", Validators.required),
        "phoneNumber": new FormControl("", Validators.required),
        "createdBy": new FormControl({value: '', disabled: true}),
        "createdDate": new FormControl({value: '', disabled: true}),
        "lastModifiedBy": new FormControl({value: '', disabled: true}),
        "lastModifiedDate": new FormControl({value: '', disabled: true}),
      });
  }

   onSubmit(): void{
    if(this.id != null){
      this.subdivisionService.update(this.form.value).subscribe((res: any) => {
          this.router.navigate(['/subdivision']);
      })
    }else{
      this.subdivisionService.create(this.form.value).subscribe((res: any) => {
          this.router.navigate(['/subdivision']);
      })
    }
  }

  onStateItemSelect(item: any) {
    this.districtService.findAllDistrictForState(item.id).subscribe((districtList: any) => {
      this.districtList = districtList;
      this.form.patchValue({"district" : []});
    });
  }

}
