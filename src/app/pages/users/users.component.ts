import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  userList: User[]

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((userList: User[]) => {
     this.userList = userList;
    });
  }

}
