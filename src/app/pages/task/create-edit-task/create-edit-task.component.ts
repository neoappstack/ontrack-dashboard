import { UserService } from './../../../_services/user.service';
import { ThanaService } from './../../../_services/thana.service';
import { DistrictService } from './../../../_services/district.service';
import { SubdivisionService } from './../../../_services/subdivision.service';
import { TaskService } from './../../../_services/task.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgxSpinnerService } from 'ngx-spinner';
import { Task } from 'src/app/_models/task';

@Component({
  selector: 'app-create-edit-task',
  templateUrl: './create-edit-task.component.html',
  styleUrls: ['./create-edit-task.component.css']
})
export class CreateEditTaskComponent implements OnInit {

  id: string
  pageName: string
  form:FormGroup;
  roleList = [];
  roles = [];
  dropdownSettings: IDropdownSettings = {};
  districts = [];
  districtList = [];
  subdivisions = [];
  subdivisionList = [];
  thanas = [];
  thanaList = [];
  assignedTos = [];
  assignedToList = [];
  selectedDistrict;

  constructor(private route: ActivatedRoute,
    private districtService: DistrictService,
    private subdivisionService: SubdivisionService,
    private thanaService: ThanaService,
    private userService: UserService,
    private taskService: TaskService,
    private router: Router,
    private spinner: NgxSpinnerService) {
      this.spinner.show();
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pageName = (this.id == null) ? "Create New Task" : "Edit Task";
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      allowSearchFilter: true
    };
    this.districtService.list().subscribe((districtList: any) => {
      this.districtList = districtList;
    });
    if(this.id != null){
      this.taskService.get(this.id).subscribe((task: Task) => {
        this.form.patchValue(task);
        this.districts = task.districts;
        this.subdivisionService.findAllSubdivisionUnderDistrict(task.district).subscribe((subdivisionList: any) => {
          this.subdivisionList = subdivisionList;
          this.subdivisions =  task.subdivisions;
        });
        this.thanaService.findAllThanaUnderSubdivision(task.subdivision).subscribe((thanaList: any) => {
          this.thanaList = thanaList;
          this.thanas =  task.thanas;
        });
        this.userService.findAllUserUnderThana(task.thana).subscribe((userList: any) => {
          this.assignedToList = userList;
          this.assignedTos = task.assignedTos;
        });
      })
    };
    this.form = new FormGroup({
      "id": new FormControl(""),
      "code": new FormControl("", Validators.required),
      "name": new FormControl("", Validators.required),
      "description": new FormControl("", Validators.required),
      "thanas": new FormControl(""),
      "subdivisions": new FormControl(""),
      "districts": new FormControl(""),
      "assignedTos": new FormControl(""),
      "createdBy": new FormControl({value: '', disabled: true}),
      "createdDate": new FormControl({value: '', disabled: true}),
      "lastModifiedBy": new FormControl({value: '', disabled: true}),
      "lastModifiedDate": new FormControl({value: '', disabled: true}),
    });
    this.spinner.hide();
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
      this.form.patchValue({"thanas" : []});
    });
  }
  onThanaSelect(item: any) {
    this.userService.findAllUserUnderThana(item.id).subscribe((userList: any) => {
      this.assignedToList = userList;
      this.form.patchValue({"assignedTos" : []});
    });
  }

  onSubmit(): void{
    if(this.id != null){
      this.taskService.update(this.form.value).subscribe((res: any) => {
          this.router.navigate(['/task']);
      })
    }else{
      this.taskService.create(this.form.value).subscribe((res: any) => {
          this.router.navigate(['/task']);
      })
    }
  }

}
