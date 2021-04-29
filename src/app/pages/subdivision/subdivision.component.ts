import { Subdivision } from './../../_models/subdivision';
import { SubdivisionService } from './../../_services/subdivision.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subdivision',
  templateUrl: './subdivision.component.html',
  styleUrls: ['./subdivision.component.css']
})
export class SubdivisionComponent implements OnInit {

  subdivisionList: Subdivision[];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private toastr: ToastrService,
    private subdivisionService: SubdivisionService
    ) {

      this.subdivisionService.list().subscribe((subdivision: Subdivision[]) => {
        this.subdivisionList = subdivision;
        this.dtTrigger.next();
      });
     }

  ngOnInit(): void {
  }

  removeSubdivision(id) {
    this.subdivisionService.remove(id).subscribe((removedId: Number) => {
      this.subdivisionList = this.subdivisionList.filter(item => item.id !== id);
      this.toastr.error( 'Subdivision with id ' + removedId + " has been removed.",'Subdivision Master');
    });
  }


}
