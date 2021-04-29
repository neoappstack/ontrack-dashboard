import { Authority } from './../../../_models/authority';
import { RoleService } from './../../../_services/role.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Role } from 'src/app/_models/role';
import { AuthorityService } from 'src/app/_services/authority.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-create-edit-role',
  templateUrl: './create-edit-role.component.html',
  styleUrls: ['./create-edit-role.component.css']
})
export class CreateEditRoleComponent implements OnInit {

  id: string
  pageName: string
  authorities = [];
  authorityList = [];
  dropdownSettings: IDropdownSettings = {};
  form:FormGroup;

  constructor(
    private route: ActivatedRoute,
    private authorityService: AuthorityService,
    private router: Router,
    private roleService: RoleService,
    private spinner: NgxSpinnerService) {
      this.spinner.show();
  }

  ngOnInit(): void {
    this.authorityService.list().subscribe((authorityList: Authority[]) => {
        this.authorityList = authorityList;
    });
    this.id = this.route.snapshot.paramMap.get('id');
    this.pageName = (this.id == null) ? "Create New Role" : "Edit Role";
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    if(this.id != null){
      this.roleService.get(this.id).subscribe((role: any) => {
        this.form.patchValue(role);
        this.authorities = role.authorities;
        this.spinner.hide();
      })
    }else{
      this.spinner.hide();
    }
    this.form = new FormGroup({
      "id": new FormControl(""),
      "code": new FormControl("", Validators.required),
      "name": new FormControl("", Validators.required),
      "authorities": new FormControl("", Validators.required),
      "description": new FormControl("", Validators.required),
      "createdBy": new FormControl({value: '', disabled: true}),
      "createdDate": new FormControl({value: '', disabled: true}),
      "lastModifiedBy": new FormControl({value: '', disabled: true}),
      "lastModifiedDate": new FormControl({value: '', disabled: true}),
    });
  }

  onSubmit(): void{
    if(this.id != null){
      this.roleService.update(this.form.value).subscribe((res: any) => {
          this.router.navigate(['/role']);
      })
    }else{
      this.roleService.create(this.form.value).subscribe((res: any) => {
          this.router.navigate(['/role']);
      })
    }
  }
}
