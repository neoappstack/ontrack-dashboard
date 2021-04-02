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
  dropdownList = [];
  myselect = [];
  dropdownSettings: IDropdownSettings = {};

  constructor(private route: ActivatedRoute,private userService: UserService,
    private spinner: NgxSpinnerService) {
      this.spinner.show();
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pageName = (this.id == null) ? "Create New User" : "Edit User";

    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.myselect = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
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
    "thana": new FormControl("", Validators.required),
    "district": new FormControl("", Validators.required),
    "homeAddress": new FormControl("", Validators.required),
    "pinCode": new FormControl("", Validators.required),
     "city": new FormControl(this.myselect, Validators.required),
  });

    if(this.id != null){
      this.userService.get(this.id).subscribe((user: User) => {
        this.form.patchValue(user)
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
    debugger;
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
