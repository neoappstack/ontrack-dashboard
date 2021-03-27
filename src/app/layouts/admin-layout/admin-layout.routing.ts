import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UsersComponent } from 'src/app/pages/users/users.component';
import { ThanaComponent } from 'src/app/pages/thana/thana.component';
import { DistrictComponent } from 'src/app/pages/district/district.component';
import { TaskComponent } from 'src/app/pages/task/task.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'district',       component: DistrictComponent },
    { path: 'task',           component: TaskComponent },
    { path: 'thana',          component: ThanaComponent },
    { path: 'users',          component: UsersComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }
];
