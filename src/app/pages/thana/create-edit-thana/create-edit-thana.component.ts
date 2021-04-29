import { DistrictService } from 'src/app/_services/district.service';
import { StateService } from './../../../_services/state.service';
import { SubdivisionService } from './../../../_services/subdivision.service';
import { ThanaService } from './../../../_services/thana.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Thana } from 'src/app/_models/thana';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-create-edit-thana',
  templateUrl: './create-edit-thana.component.html',
  styleUrls: ['./create-edit-thana.component.css']
})
export class CreateEditThanaComponent implements OnInit {

  id: string;
  pageName: string;
  states=[];
  stateList=[]
  districts=[]
  districtList=[];
  subdivisions = [];
  subdivisionList = [];
  dropdownSettings: IDropdownSettings = {};
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private thanaService: ThanaService,
    private stateService: StateService,
    private router: Router,
    private districtService: DistrictService,
    private subdivisionService: SubdivisionService,
    private spinner: NgxSpinnerService) {
      this.spinner.show();
    }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.pageName = (this.id == null) ? "Create New Thana" : "Edit Thana";
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
        this.thanaService.get(this.id).subscribe((thana: Thana) => {
          this.subdivisions = [thana.subdivision];
          this.districts = [thana.subdivision.district];
          this.states = [thana.subdivision.district.state];
          this.form.patchValue(thana);
          this.districtService.findAllDistrictForState(thana.subdivision.district.state.id).subscribe((districtList: any) => {
            this.districtList = districtList;
          });
          this.subdivisionService.findAllSubdivisionUnderDistrict(thana.subdivision.district.id).subscribe((subdivisionList: any) => {
            this.subdivisionList = subdivisionList;
          });
          this.spinner.hide();
        });
      }else{
        this.spinner.hide();
      }
      this.form = new FormGroup({
        "id": new FormControl(""),
        "code": new FormControl("", Validators.required),
        "name": new FormControl("", Validators.required),
        "description": new FormControl("",Validators.required),
        "subdivisions": new FormControl("",Validators.required),
        "districts": new FormControl("",Validators.required),
        "states": new FormControl("",Validators.required),
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
         this.router.navigate(['/thana']);
      })
    }else{
      this.thanaService.create(this.form.value).subscribe((res: any) => {
          this.router.navigate(['/thana']);
      })
    }
  }

  onStateSelect(item: any) {
    this.districtService.findAllDistrictForState(item.id).subscribe((districtList: any) => {
      this.districtList = districtList;
      this.form.patchValue({"district" : []});
      this.form.patchValue({"subdivisions" : []});
    });
  }

  onDistrictSelect(item: any) {
    this.subdivisionService.findAllSubdivisionUnderDistrict(item.id).subscribe((subdivisionList: any) => {
      this.subdivisionList = subdivisionList;
      this.form.patchValue({"subdivisions" : []});
    });
  }

  onSubdivisionSelect(item: any) {
  }

}
