import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subdivision',
  templateUrl: './subdivision.component.html',
  styleUrls: ['./subdivision.component.css']
})
export class SubdivisionComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  removeSubdivision(id) {
    this.toastr.error( 'Subdivision with id ' + id + " has been removed.",'Subdivision Master');
  }


}
