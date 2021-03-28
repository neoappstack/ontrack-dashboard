import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  removeRole(id) {
    this.toastr.error( 'Thana with id ' + id + " has been removed.",'Thana Master');
  }

}
