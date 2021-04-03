import { SubdivisionService } from './../../../_services/subdivision.service';
import { ThanaService } from './../../../_services/thana.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Thana } from 'src/app/_models/thana';

@Component({
  selector: 'app-create-edit-thana',
  templateUrl: './create-edit-thana.component.html',
  styleUrls: ['./create-edit-thana.component.css']
})
export class CreateEditThanaComponent implements OnInit {

  id: string;
  pageName: string;
  subdivision = [];
  subdivisionList = [];
  dropdownSettings: IDropdownSettings = {};
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private thanaService: ThanaService,
    private subdivisionService: SubdivisionService) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pageName = (this.id == null) ? "Create New Thana" : "Edit Thana";

      this.subdivisionService.list().subscribe((subdivisionList: any) => {
        this.subdivisionList = subdivisionList;
      })
      this.dropdownSettings = {
        singleSelection: true,
        idField: 'id',
        textField: 'name',
        allowSearchFilter: true
      };
      if(this.id != null){
        this.thanaService.get(this.id).subscribe((thana: Thana) => {
          this.form.patchValue(thana);
          this.subdivision =thana.subdivision;
        })
      };
      this.form = new FormGroup({
        "id": new FormControl(""),
        "code": new FormControl("", Validators.required),
        "name": new FormControl("", Validators.required),
        "description": new FormControl("",Validators.required),
        "subdivision": new FormControl("",Validators.required),
        "district": new FormControl({value: '', disabled: true}),
        "state": new FormControl({value: '', disabled: true}),
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
      this.thanaService.update(this.form.value).subscribe((res: any) => {
          console.log(res);
      })
    }else{
      this.thanaService.create(this.form.value).subscribe((res: any) => {
          console.log(res);
      })
    }
  }

  onSubdivisionSelect(item: any) {
    var selectedSubdivision = this.subdivisionList.find(subdivision => subdivision.id == item.id);
    this.form.patchValue({"state" : selectedSubdivision.state});
    this.form.patchValue({"district" : selectedSubdivision.districtByOne.name});
  }

}
