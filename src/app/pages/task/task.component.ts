import { TaskService } from './../../_services/task.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskList=[]
  dtOptions: DataTables.Settings = {};
   // We use this trigger because fetching the list of task can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private taskService:TaskService,
        private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.taskService.list().subscribe((taskList) => {
     this.taskList = taskList;
     this.dtTrigger.next();
    });
  }

  removeTask(id):void{
    this.taskService.remove(id).subscribe((removedId: Number) => {
      this.taskList = this.taskList.filter(item => item.id !== id);
      this.toastr.error( 'Task with id ' + removedId + " has been removed.",'Thana Master');
    });
  }

}
