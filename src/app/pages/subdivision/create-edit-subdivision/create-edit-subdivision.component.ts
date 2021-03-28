import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-create-edit-subdivision',
  templateUrl: './create-edit-subdivision.component.html',
  styleUrls: ['./create-edit-subdivision.component.css']
})
export class CreateEditSubdivisionComponent implements OnInit {

  id: string
  pageName: string
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pageName = (this.id == null) ? "Create New Subdivision" : "Edit Subdivision";
  }

}
