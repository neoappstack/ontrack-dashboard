import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-thana',
  templateUrl: './thana.component.html',
  styleUrls: ['./thana.component.css']
})
export class ThanaComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  removeThana(id) {
    this.toastr.error( 'Thana with id ' + id + " has been removed.",'Thana Master');
  }
}
