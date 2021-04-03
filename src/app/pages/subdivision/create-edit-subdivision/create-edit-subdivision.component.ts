import { SubdivisionService } from './../../../_services/subdivision.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';
import { Subdivision } from 'src/app/_models/subdivision';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DistrictService } from 'src/app/_services/district.service';

@Component({
  selector: 'app-create-edit-subdivision',
  templateUrl: './create-edit-subdivision.component.html',
  styleUrls: ['./create-edit-subdivision.component.css']
})
export class CreateEditSubdivisionComponent implements OnInit {

  id: string;
  pageName: string;
  district = [];
  districtList = [];
  dropdownSettings: IDropdownSettings = {};
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private subdivisionService: SubdivisionService,
    private districtService: DistrictService
    ) {

    }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.pageName = (this.id == null) ? "Create New Subdivision" : "Edit Subdivision";
      this.districtService.list().subscribe((districtList: any) => {
        this.districtList = districtList;
      })
      this.dropdownSettings = {
        singleSelection: true,
        idField: 'id',
        textField: 'name',
        allowSearchFilter: true
      };
      if(this.id != null){
        this.subdivisionService.get(this.id).subscribe((subdivision: any) => {
          this.form.patchValue(subdivision);
          this.district =subdivision.district;
        })
      };
      this.form = new FormGroup({
        "id": new FormControl(""),
        "code": new FormControl("", Validators.required),
        "name": new FormControl("", Validators.required),
        "description": new FormControl(""),
        "district": new FormControl(""),
        "address": new FormControl("", Validators.required),
        "city": new FormControl("", Validators.required),
        "postalCode": new FormControl("", Validators.required),
        "phoneNumber": new FormControl("", Validators.required),
        "state": new FormControl("", Validators.required),
        "createdBy": new FormControl({value: '', disabled: true}),
        "createdDate": new FormControl({value: '', disabled: true}),
        "lastModifiedBy": new FormControl({value: '', disabled: true}),
        "lastModifiedDate": new FormControl({value: '', disabled: true}),
      });
  }

   onSubmit(): void{
    if(this.id != null){
      this.subdivisionService.update(this.form.value).subscribe((res: any) => {
          console.log(res);
      })
    }else{
      this.subdivisionService.create(this.form.value).subscribe((res: any) => {
          console.log(res);
      })
    }
  }

  onDistrictItemSelect(item: any) {
    var selectedDistrict = this.districtList.find(district => district.id == item.id);
    this.form.patchValue({"state" : selectedDistrict.state});
  }

}
