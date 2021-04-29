import { StateService } from './../../../_services/state.service';
import { RoleService } from './../../../_services/role.service';
import { User } from './../../../_models/user';
import { UserService } from './../../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgxSpinnerService } from "ngx-spinner";
import { DistrictService } from 'src/app/_services/district.service';
import { SubdivisionService } from 'src/app/_services/subdivision.service';
import { ThanaService } from 'src/app/_services/thana.service';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.css']
})
export class CreateEditUserComponent implements OnInit {

  id: string
  pageName: string
  form:FormGroup;
  roleList = [];
  roles = [];
  states=[];
  stateList=[];
  districts = [];
  districtList = [];
  subdivisions = [];
  subdivisionList = [];
  thanas = [];
  thanaList = [];
  dropdownSettings: IDropdownSettings = {};
  dropdownSettingsSingle: IDropdownSettings = {};

  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private stateService: StateService,
    private districtService: DistrictService,
    private subdivisionService: SubdivisionService,
    private thanaService: ThanaService,
    private router: Router,
    private roleService: RoleService,
    private spinner: NgxSpinnerService) {
      this.spinner.show();
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pageName = (this.id == null) ? "Create New User" : "Edit User";
    this.roleService.list().subscribe((roleList: any) => {
      this.roleList = roleList;
    });
    this.stateService.list().subscribe((stateList: any) => {
      this.stateList = stateList;
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true
    };
    this.dropdownSettingsSingle = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true
    };
    this.form = new FormGroup({
      "id": new FormControl(""),
      "username": new FormControl("", Validators.required),
      "firstName": new FormControl("", Validators.required),
      "lastName": new FormControl("", Validators.required),
      "email": new FormControl("", Validators.required),
      "designation": new FormControl("", Validators.required),
      "phoneNumber": new FormControl("", Validators.required),
      "dateOfBirth": new FormControl("", Validators.required),
      "dateOfJoining": new FormControl("", Validators.required),
      "workAddress": new FormControl("", Validators.required),
      "thanas": new FormControl("", Validators.required),
      "subdivisions": new FormControl("", Validators.required),
      "districts": new FormControl("", Validators.required),
      "states": new FormControl("", Validators.required),
      "homeAddress": new FormControl("", Validators.required),
      "pinCode": new FormControl("", Validators.required),
      "roles": new FormControl(this.roles, Validators.required),
    });

    if(this.id != null){
      this.userService.get(this.id).subscribe((user: User) => {
        if(user.state != null){
          this.states = [user.state];
          this.districtService.findAllDistrictForState(user.state.id).subscribe((districtList: any) => {
            this.districtList = districtList;
          });
        }
        if(user.district != null){
          this.districts = [user.district];
          this.subdivisionService.findAllSubdivisionUnderDistrict(user.district.id).subscribe((subDivisionList: any) => {
            this.subdivisionList = subDivisionList;
          });
        }
        if(user.subdivision != null){
          this.subdivisions = [user.subdivision];
          this.thanaService.findAllThanaUnderSubdivision(user.subdivision.id).subscribe((thanaList: any) => {
            this.thanaList = thanaList;
          });
        }
        if(user.thana != null){
          this.thanas = [user.thana];
        }
        this.form.patchValue(user);
        this.roles = user.roles;
        this.spinner.hide();
      })
    }
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onSubmit(): void{
    if(this.id != null){
      this.userService.update(this.form.value).subscribe((res: any) => {
          this.router.navigate(['/users']);
      })
    }else{
      this.userService.create(this.form.value).subscribe((res: any) => {
          this.router.navigate(['/users']);
      })
    }
  }

  onStateSelect(item: any) {
    this.districtService.findAllDistrictForState(item.id).subscribe((districtList: any) => {
      this.districtList = districtList;
      this.form.patchValue({"districts" : []});
      this.form.patchValue({"subdivisions" : []});
      this.form.patchValue({"thanas" : []});
    });
  }
  onDistrictSelect(item: any) {
    var selectedDistrict = this.districtList.find(subdivision => subdivision.id == item.id);
    this.subdivisionService.findAllSubdivisionUnderDistrict(item.id).subscribe((subDivisionList: any) => {
      this.subdivisionList = subDivisionList;
      this.form.patchValue({"subdivisions" : []});
      this.form.patchValue({"thanas" : []});
    });
  }
  onSubdivisionSelect(item: any) {
    var selectedSubdivision = this.subdivisionList.find(subdivision => subdivision.id == item.id);
    this.thanaService.findAllThanaUnderSubdivision(item.id).subscribe((thanaList: any) => {
      this.thanaList = thanaList;
      this.form.patchValue({"thana" : []});
    });
  }


}
