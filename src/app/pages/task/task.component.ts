import { TaskService } from './../../_services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskList=[]

  constructor(
    private taskService:TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.list().subscribe((taskList) => {
     this.taskList = taskList;
    });
  }

}
