import { Thana } from './../../_models/thana';
import { ThanaService } from './../../_services/thana.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-thana',
  templateUrl: './thana.component.html',
  styleUrls: ['./thana.component.css']
})
export class ThanaComponent implements OnInit {

  thanaList: Thana[];

  constructor(
    private toastr: ToastrService,
    private thanaService: ThanaService
    ) {

     }

  ngOnInit(): void {
      this.thanaService.list().subscribe((thanaList: Thana[]) => {
        this.thanaList = thanaList;
      });
  }

  removeThana(id) {
    this.thanaService.remove(id).subscribe((removedId: Number) => {
      this.thanaList = this.thanaList.filter(item => item.id !== id);
      this.toastr.error( 'Thana with id ' + removedId + " has been removed.",'Thana Master');
    });
  }
}
