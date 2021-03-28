import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  removeDisctict(id) {
    this.toastr.error( 'Disctrict with id ' + id + " has been removed.",'District Master');
  }

}
