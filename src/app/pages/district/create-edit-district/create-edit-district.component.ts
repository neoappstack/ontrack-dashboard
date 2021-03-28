import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-create-edit-district',
  templateUrl: './create-edit-district.component.html',
  styleUrls: ['./create-edit-district.component.css']
})
export class CreateEditDistrictComponent implements OnInit {

  id: string
  pageName: string
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pageName = (this.id == null) ? "Create New District" : "Edit District";
  }

}
