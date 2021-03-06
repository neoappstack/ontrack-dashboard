import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { UsersComponent } from './pages/users/users.component';
import { ThanaComponent } from './pages/thana/thana.component';
import { DistrictComponent } from './pages/district/district.component';
import { TaskComponent } from './pages/task/task.component';
import { SubdivisionComponent } from './pages/subdivision/subdivision.component';
import { CreateEditDistrictComponent } from './pages/district/create-edit-district/create-edit-district.component';
import { CreateEditSubdivisionComponent } from './pages/subdivision/create-edit-subdivision/create-edit-subdivision.component';
import { CreateEditThanaComponent } from './pages/thana/create-edit-thana/create-edit-thana.component';
import { CreateEditUserComponent } from './pages/users/create-edit-user/create-edit-user.component';
import { AuthorityComponent } from './pages/authority/authority.component';
import { RoleComponent } from './pages/role/role.component';
import { TaskTreeComponent } from './pages/task-tree/task-tree.component';
import { CreateEditRoleComponent } from './pages/role/create-edit-role/create-edit-role.component';
import { CreateEditAuthorityComponent } from './pages/authority/create-edit-authority/create-edit-authority.component';
import { CreateEditTaskComponent } from './pages/task/create-edit-task/create-edit-task.component';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CreateEditStateComponent } from './pages/state/create-edit-state/create-edit-state.component';
import { StateComponent } from './pages/state/state.component';
import { MyTaskComponent } from './pages/my-task/my-task.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { CreateEditNotificationComponent } from './pages/notification/create-edit-notification/create-edit-notification.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    ComponentsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UsersComponent,
    ThanaComponent,
    DistrictComponent,
    TaskComponent,
    SubdivisionComponent,
    CreateEditDistrictComponent,
    CreateEditSubdivisionComponent,
    CreateEditThanaComponent,
    CreateEditUserComponent,
    AuthorityComponent,
    RoleComponent,
    TaskTreeComponent,
    CreateEditRoleComponent,
    CreateEditAuthorityComponent,
    CreateEditTaskComponent,
    StateComponent,
    CreateEditStateComponent,
    MyTaskComponent,
    NotificationComponent,
    CreateEditNotificationComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
