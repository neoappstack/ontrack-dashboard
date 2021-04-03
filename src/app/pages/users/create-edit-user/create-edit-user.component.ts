import { RoleService } from './../../../_services/role.service';
import { User } from './../../../_models/user';
import { UserService } from './../../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgxSpinnerService } from "ngx-spinner";

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
  dropdownSettings: IDropdownSettings = {};

  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private roleService: RoleService,
    private spinner: NgxSpinnerService) {
      this.spinner.show();
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pageName = (this.id == null) ? "Create New User" : "Edit User";
    this.roleService.list().subscribe((roleList: any) => {
      this.roleList = roleList;
    })
    this.dropdownSettings = {
      singleSelection: false,
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
      "thana": new FormControl(""),
      "district": new FormControl(""),
      "homeAddress": new FormControl("", Validators.required),
      "pinCode": new FormControl("", Validators.required),
      "roles": new FormControl(this.roles, Validators.required),
    });

    if(this.id != null){
      this.userService.get(this.id).subscribe((user: User) => {
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
          console.log(res);
      })
    }else{
      this.userService.create(this.form.value).subscribe((res: any) => {
          console.log(res);
      })
    }
  }

}
