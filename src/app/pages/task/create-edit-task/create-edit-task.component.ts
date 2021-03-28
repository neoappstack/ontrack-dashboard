import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-create-edit-task',
  templateUrl: './create-edit-task.component.html',
  styleUrls: ['./create-edit-task.component.css']
})
export class CreateEditTaskComponent implements OnInit {

  id: string
  pageName: string
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pageName = (this.id == null) ? "Create New Task" : "Edit Task";
  }

}
