import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-create-edit-thana',
  templateUrl: './create-edit-thana.component.html',
  styleUrls: ['./create-edit-thana.component.css']
})
export class CreateEditThanaComponent implements OnInit {

  id: string
  pageName: string
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pageName = (this.id == null) ? "Create New Thana" : "Edit Thana";
  }

}
