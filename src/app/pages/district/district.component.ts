import { DistrictService } from './../../_services/district.service';
import { District } from '../../_models/district';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  districts: District[];


  constructor(
    private toastr: ToastrService,
    private districtService: DistrictService
    ) {
    this.districtService.list().subscribe((districts: District[]) => {
      this.districts = districts;
    });
    }

  ngOnInit(): void {
  }

  removeDistrict(id) {
    this.districtService.remove(id).subscribe((removedId: Number) => {
      this.districts = this.districts.filter(item => item.id !== id);
      this.toastr.error( 'Authority with id ' + removedId + " has been removed.",'Authority Master');
    });
  }

}
