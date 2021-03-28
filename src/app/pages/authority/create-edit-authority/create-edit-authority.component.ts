import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-create-edit-authority',
  templateUrl: './create-edit-authority.component.html',
  styleUrls: ['./create-edit-authority.component.css']
})
export class CreateEditAuthorityComponent implements OnInit {

  id: string
  pageName: string
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pageName = (this.id == null) ? "Create New Authority" : "Edit Authority";
  }


}
