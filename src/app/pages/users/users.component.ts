import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  userList: User[];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((userList: User[]) => {
     this.userList = userList;
     this.dtTrigger.next();
    });
  }

}
