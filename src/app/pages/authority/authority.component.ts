import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-authority',
  templateUrl: './authority.component.html',
  styleUrls: ['./authority.component.css']
})
export class AuthorityComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  removeAuthority(id) {
    this.toastr.error( 'Thana with id ' + id + " has been removed.",'Thana Master');
  }

}
