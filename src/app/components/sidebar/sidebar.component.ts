import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/task', title: 'Task List',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/task-tree', title: 'Task Tree',  icon:'ni ni-align-left-2 text-orange', class: '' },
    { path: '/state', title: 'State List',  icon:'ni-pin-3 text-pink', class: '' },
    { path: '/district', title: 'District List',  icon:'ni-pin-3 text-pink', class: '' },
    { path: '/subdivision', title: 'Subdivision List',  icon:'ni-pin-3 text-blue', class: '' },
    { path: '/thana', title: 'Thana List',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/authority', title: 'Authority List',  icon:'ni ni-briefcase-24 text-pin', class: '' },
    { path: '/role', title: 'Role List',  icon:'ni ni-badge text-red', class: '' },
    { path: '/users', title: 'Users List',  icon:'ni-single-02 text-yellow', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
