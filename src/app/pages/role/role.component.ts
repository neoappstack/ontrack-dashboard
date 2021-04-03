import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Role } from 'src/app/_models/role';
import { RoleService } from 'src/app/_services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roles: Role[];

  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private roleService: RoleService
    ) { }

  ngOnInit(): void {
    this.roleService.list().subscribe((roles: Role[]) => {
      this.roles = roles;
    });
  }

  removeRole(id) {
    this.roleService.remove(id).subscribe((removedId: Number) => {
      this.roles = this.roles.filter(item => item.id !== id);
      this.toastr.error( 'Role with id ' + removedId + " has been removed.",'Role Master');
    });
  }

}
