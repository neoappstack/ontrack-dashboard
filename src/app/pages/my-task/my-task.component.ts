import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MyTaskService } from 'src/app/_services/mytask.service';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css']
})
export class MyTaskComponent implements OnInit {

  taskList=[]
  dtOptions: DataTables.Settings = {};
   // We use this trigger because fetching the list of task can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private myTaskService:MyTaskService
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.myTaskService.list().subscribe((taskList) => {
     this.taskList = taskList;
     this.dtTrigger.next();
    });
  }
}
