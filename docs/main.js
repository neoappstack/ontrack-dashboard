(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/4EI":
/*!***************************************************************************!*\
  !*** ./src/app/pages/role/create-edit-role/create-edit-role.component.ts ***!
  \***************************************************************************/
/*! exports provided: CreateEditRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditRoleComponent", function() { return CreateEditRoleComponent; });
/* harmony import */ var _raw_loader_create_edit_role_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./create-edit-role.component.html */ "wY1L");
/* harmony import */ var _create_edit_role_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-edit-role.component.css */ "6XPY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateEditRoleComponent = /** @class */ (function () {
    function CreateEditRoleComponent(route) {
        this.route = route;
    }
    CreateEditRoleComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.pageName = (this.id == null) ? "Create New Role" : "Edit Role";
    };
    CreateEditRoleComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    CreateEditRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-edit-role',
            template: _raw_loader_create_edit_role_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_create_edit_role_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CreateEditRoleComponent);
    return CreateEditRoleComponent;
}());



/***/ }),

/***/ "/S+i":
/*!***************************************************************************!*\
  !*** ./src/app/pages/task/create-edit-task/create-edit-task.component.ts ***!
  \***************************************************************************/
/*! exports provided: CreateEditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditTaskComponent", function() { return CreateEditTaskComponent; });
/* harmony import */ var _raw_loader_create_edit_task_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./create-edit-task.component.html */ "xuPB");
/* harmony import */ var _create_edit_task_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-edit-task.component.css */ "dbua");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateEditTaskComponent = /** @class */ (function () {
    function CreateEditTaskComponent(route) {
        this.route = route;
    }
    CreateEditTaskComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.pageName = (this.id == null) ? "Create New Task" : "Edit Task";
    };
    CreateEditTaskComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    CreateEditTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-edit-task',
            template: _raw_loader_create_edit_task_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_create_edit_task_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CreateEditTaskComponent);
    return CreateEditTaskComponent;
}());



/***/ }),

/***/ "/VFF":
/*!*************************************************!*\
  !*** ./src/app/pages/users/users.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "/r0d":
/*!********************************************************!*\
  !*** ./src/app/pages/task-tree/task-tree.component.ts ***!
  \********************************************************/
/*! exports provided: TaskTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskTreeComponent", function() { return TaskTreeComponent; });
/* harmony import */ var _raw_loader_task_tree_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./task-tree.component.html */ "v8hj");
/* harmony import */ var _task_tree_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-tree.component.css */ "QD0A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskTreeComponent = /** @class */ (function () {
    function TaskTreeComponent() {
    }
    TaskTreeComponent.prototype.ngOnInit = function () {
    };
    TaskTreeComponent.ctorParameters = function () { return []; };
    TaskTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-task-tree',
            template: _raw_loader_task_tree_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_task_tree_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TaskTreeComponent);
    return TaskTreeComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Saurabh\Documents\GitHub\OnTrack\ontrack-dashboard\src\main.ts */"zUnb");


/***/ }),

/***/ "1cB1":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/district/create-edit-district/create-edit-district.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CreateEditDistrictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditDistrictComponent", function() { return CreateEditDistrictComponent; });
/* harmony import */ var _raw_loader_create_edit_district_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./create-edit-district.component.html */ "Yvbx");
/* harmony import */ var _create_edit_district_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-edit-district.component.css */ "CsZm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateEditDistrictComponent = /** @class */ (function () {
    function CreateEditDistrictComponent(route) {
        this.route = route;
    }
    CreateEditDistrictComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.pageName = (this.id == null) ? "Create New District" : "Edit District";
    };
    CreateEditDistrictComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    CreateEditDistrictComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-edit-district',
            template: _raw_loader_create_edit_district_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_create_edit_district_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CreateEditDistrictComponent);
    return CreateEditDistrictComponent;
}());



/***/ }),

/***/ "2wOS":
/*!*******************************************************!*\
  !*** ./src/app/pages/district/district.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rpc3RyaWN0L2Rpc3RyaWN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "3TnI":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "WSaj");
/* harmony import */ var _auth_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-layout.component.scss */ "FkQd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router) {
        this.router = router;
        this.test = new Date();
        this.isCollapsed = true;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var html = document.getElementsByTagName("html")[0];
        html.classList.add("auth-layout");
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("bg-default");
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
        });
    };
    AuthLayoutComponent.prototype.ngOnDestroy = function () {
        var html = document.getElementsByTagName("html")[0];
        html.classList.remove("auth-layout");
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("bg-default");
    };
    AuthLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-auth-layout',
            template: _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_auth_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "5I7R":
/*!**********************************************!*\
  !*** ./src/app/pages/role/role.component.ts ***!
  \**********************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var _raw_loader_role_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./role.component.html */ "TTYh");
/* harmony import */ var _role_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role.component.css */ "d5qH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoleComponent = /** @class */ (function () {
    function RoleComponent(toastr) {
        this.toastr = toastr;
    }
    RoleComponent.prototype.ngOnInit = function () {
    };
    RoleComponent.prototype.removeRole = function (id) {
        this.toastr.error('Thana with id ' + id + " has been removed.", 'Thana Master');
    };
    RoleComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
    ]; };
    RoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-role',
            template: _raw_loader_role_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_role_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], RoleComponent);
    return RoleComponent;
}());



/***/ }),

/***/ "6XPY":
/*!****************************************************************************!*\
  !*** ./src/app/pages/role/create-edit-role/create-edit-role.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvbGUvY3JlYXRlLWVkaXQtcm9sZS9jcmVhdGUtZWRpdC1yb2xlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "7Er9":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/authority/create-edit-authority/create-edit-authority.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhvcml0eS9jcmVhdGUtZWRpdC1hdXRob3JpdHkvY3JlYXRlLWVkaXQtYXV0aG9yaXR5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "9GBq":
/*!********************************************************!*\
  !*** ./src/app/pages/authority/authority.component.ts ***!
  \********************************************************/
/*! exports provided: AuthorityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorityComponent", function() { return AuthorityComponent; });
/* harmony import */ var _raw_loader_authority_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./authority.component.html */ "u1Wr");
/* harmony import */ var _authority_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authority.component.css */ "q6aK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthorityComponent = /** @class */ (function () {
    function AuthorityComponent(toastr) {
        this.toastr = toastr;
    }
    AuthorityComponent.prototype.ngOnInit = function () {
    };
    AuthorityComponent.prototype.removeAuthority = function (id) {
        this.toastr.error('Thana with id ' + id + " has been removed.", 'Thana Master');
    };
    AuthorityComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
    ]; };
    AuthorityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-authority',
            template: _raw_loader_authority_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_authority_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AuthorityComponent);
    return AuthorityComponent;
}());



/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Sidenav -->\n<app-sidebar></app-sidebar>\n<div class=\"main-content\">\n  <!-- Top navbar -->\n  <app-navbar></app-navbar>\n  <!-- Pages -->\n  <app-stats></app-stats>\n  <router-outlet></router-outlet>\n  <div class=\"container-fluid\">\n    <app-footer></app-footer>\n  </div>\n</div>\n");

/***/ }),

/***/ "Ag98":
/*!************************************************!*\
  !*** ./src/app/pages/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./users.component.html */ "plWm");
/* harmony import */ var _users_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.component.css */ "/VFF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent.ctorParameters = function () { return []; };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-users',
            template: _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_users_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "Ajp+":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/subdivision/create-edit-subdivision/create-edit-subdivision.component.css ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1YmRpdmlzaW9uL2NyZWF0ZS1lZGl0LXN1YmRpdmlzaW9uL2NyZWF0ZS1lZGl0LXN1YmRpdmlzaW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CioV":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/subdivision/create-edit-subdivision/create-edit-subdivision.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n  <div class=\"row\">\n    <div class=\"col-xl-12 order-xl-1\">\n      <div class=\"card bg-secondary shadow\">\n        <div class=\"card-header bg-white border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-8\">\n              <h3 class=\"mb-0\">{{pageName}}</h3>\n            </div>\n            <div class=\"col-4 text-right\">\n              <a [routerLink]=\"['/subdivision']\" class=\"btn btn-primary\">Back to Subdivision List</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <form>\n            <h6 class=\"heading-small text-muted mb-4\">Subdivision information</h6>\n            <div class=\"pl-lg-4\">\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-username\">Subdivision Code</label>\n                    <input type=\"text\" id=\"input-username\" class=\"form-control form-control-alternative\" placeholder=\"Thana Code\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-email\">Subdivision Name</label>\n                    <input type=\"text\" id=\"input-email\" class=\"form-control form-control-alternative\" placeholder=\"Thana Name\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">District</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select State\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">State</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select State\" value=\"\" disabled=\"disabled\">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Office Address -->\n            <h6 class=\"heading-small text-muted mb-4\">Office information</h6>\n            <div class=\"pl-lg-4\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-address\">Address</label>\n                    <input id=\"input-address\" class=\"form-control form-control-alternative\" placeholder=\"Home Address\" value=\"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09\" type=\"text\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-4\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-city\">City</label>\n                    <input type=\"text\" id=\"input-city\" class=\"form-control form-control-alternative\" placeholder=\"City Name\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-country\">Postal code</label>\n                    <input type=\"number\" id=\"input-postal-code\" class=\"form-control form-control-alternative\" placeholder=\"Postal code\">\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-country\">Contact Number</label>\n                    <input type=\"text\" id=\"input-country\" class=\"form-control form-control-alternative\" placeholder=\"Phone Number\" value=\"\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <hr class=\"my-4\" />\n            <!-- Description -->\n            <h6 class=\"heading-small text-muted mb-4\">Description</h6>\n            <div class=\"pl-lg-4\">\n              <div class=\"form-group\">\n                <label>Other Info</label>\n                <textarea rows=\"4\" class=\"form-control form-control-alternative\" placeholder=\"A few words ...\" name=\"text-description\"></textarea>\n              </div>\n            </div>\n            <hr class=\"my-4\" />\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <a [routerLink]=\"['/district']\" class=\"btn btn-primary btn-block\">Clear Data</a>\n              </div>\n              <div class=\"col-lg-6\">\n                <a [routerLink]=\"['/district']\" class=\"btn btn-primary btn-block\">{{pageName}}</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "CrXD":
/*!******************************************************!*\
  !*** ./src/app/pages/district/district.component.ts ***!
  \******************************************************/
/*! exports provided: DistrictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictComponent", function() { return DistrictComponent; });
/* harmony import */ var _raw_loader_district_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./district.component.html */ "jjuR");
/* harmony import */ var _district_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./district.component.css */ "2wOS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DistrictComponent = /** @class */ (function () {
    function DistrictComponent(toastr) {
        this.toastr = toastr;
    }
    DistrictComponent.prototype.ngOnInit = function () {
    };
    DistrictComponent.prototype.removeDisctict = function (id) {
        this.toastr.error('Disctrict with id ' + id + " has been removed.", 'District Master');
    };
    DistrictComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
    ]; };
    DistrictComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-district',
            template: _raw_loader_district_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_district_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], DistrictComponent);
    return DistrictComponent;
}());



/***/ }),

/***/ "CsZm":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/district/create-edit-district/create-edit-district.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rpc3RyaWN0L2NyZWF0ZS1lZGl0LWRpc3RyaWN0L2NyZWF0ZS1lZGl0LWRpc3RyaWN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "FkQd":
/*!****************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Frhf":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/subdivision/create-edit-subdivision/create-edit-subdivision.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CreateEditSubdivisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditSubdivisionComponent", function() { return CreateEditSubdivisionComponent; });
/* harmony import */ var _raw_loader_create_edit_subdivision_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./create-edit-subdivision.component.html */ "CioV");
/* harmony import */ var _create_edit_subdivision_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-edit-subdivision.component.css */ "Ajp+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateEditSubdivisionComponent = /** @class */ (function () {
    function CreateEditSubdivisionComponent(route) {
        this.route = route;
    }
    CreateEditSubdivisionComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.pageName = (this.id == null) ? "Create New Subdivision" : "Edit Subdivision";
    };
    CreateEditSubdivisionComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    CreateEditSubdivisionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-edit-subdivision',
            template: _raw_loader_create_edit_subdivision_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_create_edit_subdivision_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CreateEditSubdivisionComponent);
    return CreateEditSubdivisionComponent;
}());



/***/ }),

/***/ "ImBh":
/*!****************************************************************************!*\
  !*** ./src/app/pages/users/create-edit-user/create-edit-user.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreateEditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditUserComponent", function() { return CreateEditUserComponent; });
/* harmony import */ var _raw_loader_create_edit_user_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./create-edit-user.component.html */ "JLmV");
/* harmony import */ var _create_edit_user_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-edit-user.component.css */ "pJIJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateEditUserComponent = /** @class */ (function () {
    function CreateEditUserComponent(route) {
        this.route = route;
    }
    CreateEditUserComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.pageName = (this.id == null) ? "Create New User" : "Edit User";
    };
    CreateEditUserComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    CreateEditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-edit-user',
            template: _raw_loader_create_edit_user_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_create_edit_user_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CreateEditUserComponent);
    return CreateEditUserComponent;
}());



/***/ }),

/***/ "JLmV":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/create-edit-user/create-edit-user.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n  <div class=\"row\">\n    <div class=\"col-xl-12 order-xl-1\">\n      <div class=\"card bg-secondary shadow\">\n        <div class=\"card-header bg-white border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-8\">\n              <h3 class=\"mb-0\">{{pageName}}</h3>\n            </div>\n            <div class=\"col-4 text-right\">\n              <a [routerLink]=\"['/users']\" class=\"btn btn-primary\">Back to User List</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <form>\n            <h6 class=\"heading-small text-muted mb-4\">User information</h6>\n            <div class=\"pl-lg-4\">\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-username\">Username</label>\n                    <input type=\"text\" id=\"input-username\" class=\"form-control form-control-alternative\" placeholder=\"Username\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-email\">Email address</label>\n                    <input type=\"email\" id=\"input-email\" class=\"form-control form-control-alternative\" placeholder=\"jesse@example.com\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">First name</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"First name\" value=\"Lucky\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-last-name\">Last name</label>\n                    <input type=\"text\" id=\"input-last-name\" class=\"form-control form-control-alternative\" placeholder=\"Last name\" value=\"Jesse\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">Designation</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Designation\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-last-name\">Phone Number</label>\n                    <input type=\"text\" id=\"input-last-name\" class=\"form-control form-control-alternative\" placeholder=\"Phone Number\" value=\"\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">DOB</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Designation\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-last-name\">Date of Joining</label>\n                    <input type=\"text\" id=\"input-last-name\" class=\"form-control form-control-alternative\" placeholder=\"Phone Number\" value=\"\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <hr class=\"my-4\" />\n            <!-- Address -->\n            <h6 class=\"heading-small text-muted mb-4\">Contact information</h6>\n            <div class=\"pl-lg-4\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-address\">Work Address</label>\n                    <input id=\"input-address\" class=\"form-control form-control-alternative\" placeholder=\"Work Address\" value=\"\" type=\"text\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-4\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-city\">Thana</label>\n                    <input type=\"text\" id=\"input-city\" class=\"form-control form-control-alternative\" placeholder=\"City\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-country\">District</label>\n                    <input type=\"text\" id=\"input-country\" class=\"form-control form-control-alternative\" placeholder=\"Country\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-country\">Postal code</label>\n                    <input type=\"number\" id=\"input-postal-code\" class=\"form-control form-control-alternative\" placeholder=\"\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-address\">Home Address</label>\n                    <input id=\"input-address\" class=\"form-control form-control-alternative\" placeholder=\"Home Address\" value=\"\" type=\"text\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <hr class=\"my-4\" />\n            <!-- Description -->\n            <h6 class=\"heading-small text-muted mb-4\">User Authority</h6>\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                  <label class=\"form-control-label\" for=\"input-last-name\">Roles</label>\n                  <input type=\"text\" id=\"input-last-name\" class=\"form-control form-control-alternative\" placeholder=\"Phone Number\" value=\"\">\n                </div>\n              </div>\n              <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                  <label class=\"form-control-label\" for=\"input-last-name\">User Type</label>\n                  <input type=\"text\" id=\"input-last-name\" class=\"form-control form-control-alternative\" placeholder=\"Phone Number\" value=\"\">\n                </div>\n              </div>\n\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-vertical navbar-expand-md navbar-light bg-white\" id=\"sidenav-main\">\n  <div class=\"container-fluid\">\n    <!-- Toggler -->\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed=!isCollapsed\" aria-controls=\"sidenav-collapse-main\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <!-- Brand -->\n    <a class=\"navbar-brand pt-0\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n      <img src=\"./assets/img/brand/red.png\" class=\"navbar-brand-img\" alt=\"...\">\n    </a>\n    <!-- User -->\n    <ul class=\"nav align-items-center d-md-none\">\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n        <a class=\"nav-link nav-link-icon\" role=\"button\" ngbDropdownToggle>\n          <i class=\"ni ni-bell-55\"></i>\n        </a>\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n        <a class=\"nav-link\" role=\"button\" ngbDropdownToggle>\n          <div class=\"media align-items-center\">\n            <span class=\"avatar avatar-sm rounded-circle\">\n              <img alt=\"Image placeholder\" src=\"./assets/img/theme/team-1-800x800.jpg\">\n            </span>\n          </div>\n        </a>\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n          <div class=\" dropdown-header noti-title\">\n            <h6 class=\"text-overflow m-0\">Welcome!</h6>\n          </div>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-single-02\"></i>\n            <span>My profile</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-settings-gear-65\"></i>\n            <span>Settings</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-calendar-grid-58\"></i>\n            <span>Activity</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-support-16\"></i>\n            <span>Support</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"#!\" class=\"dropdown-item\">\n            <i class=\"ni ni-user-run\"></i>\n            <span>Logout</span>\n          </a>\n        </div>\n      </li>\n    </ul>\n    <!-- Collapse -->\n    <div class=\"collapse navbar-collapse\" [ngbCollapse]=\"isCollapsed\" id=\"sidenav-collapse-main\">\n      <!-- Collapse header -->\n      <div class=\"navbar-collapse-header d-md-none\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n              <img src=\"./assets/img/brand/blue.png\">\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed=!isCollapsed\">\n              <span></span>\n              <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <!-- Form -->\n      <form class=\"mt-4 mb-3 d-md-none\">\n        <div class=\"input-group input-group-rounded input-group-merge\">\n          <input type=\"search\" class=\"form-control form-control-rounded form-control-prepended\" placeholder=\"Search\" aria-label=\"Search\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">\n              <span class=\"fa fa-search\"></span>\n            </div>\n          </div>\n        </div>\n      </form>\n      <!-- Navigation -->\n      <ul class=\"navbar-nav\">\n        <li *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n          <a routerLinkActive=\"active\" [routerLink]=\"[menuItem.path]\" class=\"nav-link\">\n            <i class=\"ni {{menuItem.icon}}\"></i>\n            {{menuItem.title}}\n          </a>\n        </li>\n      </ul>\n      <!--\n      <hr class=\"my-3\">\n\n      <h6 class=\"navbar-heading text-muted\">Documentation</h6>\n\n      <ul class=\"navbar-nav mb-md-3\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://demos.creative-tim.com/argon-dashboard-angular/documentation/tutorial\">\n            <i class=\"ni ni-spaceship\"></i> Getting started\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://demos.creative-tim.com/argon-dashboard-angular/documentation/colors\">\n            <i class=\"ni ni-palette\"></i> Foundation\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://demos.creative-tim.com/argon-dashboard-angular/documentation/alerts\">\n            <i class=\"ni ni-ui-04\"></i> Components\n          </a>\n        </li>\n      </ul> -->\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ "yZN6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "Ls9r":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
    };
    AdminLayoutComponent.ctorParameters = function () { return []; };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-layout',
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "QD0A":
/*!*********************************************************!*\
  !*** ./src/app/pages/task-tree/task-tree.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhc2stdHJlZS90YXNrLXRyZWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "R7ea":
/*!*************************************************************!*\
  !*** ./src/app/pages/subdivision/subdivision.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1YmRpdmlzaW9uL3N1YmRpdmlzaW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-top navbar-expand-md navbar-dark\" id=\"navbar-main\">\n  <div class=\"container-fluid\">\n    <!-- Brand -->\n    <a class=\"h4 mb-0 text-white text-uppercase d-none d-lg-inline-block\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">{{getTitle()}}</a>\n    <!-- Form -->\n    <form class=\"navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n      <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n        <div class=\"input-group input-group-alternative\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fas fa-search\"></i></span>\n          </div>\n          <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus = true\" (blur)=\"focus = false\">\n        </div>\n      </div>\n    </form>\n    <!-- User -->\n    <ul class=\"navbar-nav align-items-center d-none d-md-flex\">\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n        <a class=\"nav-link pr-0\" role=\"button\" ngbDropdownToggle>\n          <div class=\"media align-items-center\">\n            <span class=\"avatar avatar-sm rounded-circle\">\n              <img alt=\"Image placeholder\" src=\"assets/img/theme/team-4-800x800.jpg\">\n            </span>\n            <div class=\"media-body ml-2 d-none d-lg-block\">\n              <span class=\"mb-0 text-sm  font-weight-bold\">Kancha Kandpal</span>\n            </div>\n          </div>\n        </a>\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n          <div class=\" dropdown-header noti-title\">\n            <h6 class=\"text-overflow m-0\">Welcome!</h6>\n          </div>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-single-02\"></i>\n            <span>My profile</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-settings-gear-65\"></i>\n            <span>Settings</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-calendar-grid-58\"></i>\n            <span>Activity</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-support-16\"></i>\n            <span>Support</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" [routerLink]=\"['/login']\">\n            <i class=\"ni ni-user-run\"></i>\n            <span>Logout</span>\n          </a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n");

/***/ }),

/***/ "S9cW":
/*!***********************************************!*\
  !*** ./src/app/pages/task/task.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhc2svdGFzay5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'argon-dashboard-angular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "TTYh":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role/role.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n  <!-- Table -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-8\">\n              <h3 class=\"mb-0\">Role List</h3>\n            </div>\n            <div class=\"col-4 text-right\">\n              <a [routerLink]=\"['/role/create']\" class=\"btn btn-primary\">Add New Role</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table datatable class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">Role Code</th>\n                  <th scope=\"col\">Role Name</th>\n                  <th scope=\"col\">Description</th>\n                  <th scope=\"col\">Option</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <th scope=\"row\">\n                    /argon/\n                  </th>\n                  <td>\n                    4,569\n                  </td>\n                  <td>\n                    340\n                  </td>\n                  <td>\n                    <a [routerLink]=\"['/role/edit/1']\" class=\"btn btn-sm btn-primary\">Edit</a>\n                    <a (click)=\"removeRole(1)\" class=\"btn btn-sm btn-primary\">Remove</a>\n                  </td>\n                </tr>\n              </tbody>\n\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "WSaj":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <nav class=\"navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark\">\n    <div class=\"container px-4\">\n      <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n        <img src=\"assets/img/brand/ontrack-white.png\" />\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed=!isCollapsed\" aria-controls=\"sidenav-collapse-main\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" [ngbCollapse]=\"isCollapsed\" id=\"sidenav-collapse-main\">\n        <!-- Collapse header -->\n        <div class=\"navbar-collapse-header d-md-none\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n                <img src=\"assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed=!isCollapsed\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <!-- Navbar items -->\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/register']\">\n              <i class=\"ni ni-circle-08\"></i>\n              <span class=\"nav-link-inner--text\">Register</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/login']\">\n              <i class=\"ni ni-key-25\"></i>\n              <span class=\"nav-link-inner--text\">Login</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n<footer class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row align-items-center justify-content-xl-between\">\n      <div class=\"col-xl-6\">\n        <div class=\"copyright text-center text-xl-left text-muted\">\n          &copy; {{ test | date: \"yyyy\" }} <a href=\"https://police.nagaland.gov.in/\" class=\"font-weight-bold ml-1\" target=\"_blank\">Nagaland Police</a>\n        </div>\n      </div>\n      <!--\n      <div class=\"col-xl-6\">\n        <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\n          <li class=\"nav-item\">\n            <a href=\"https://www.creative-tim.com?ref=ada-footer-auth-layout\" class=\"nav-link\" target=\"_blank\">Creative Tim</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"https://www.creative-tim.com/presentation?ref=ada-footer-auth-layout\" class=\"nav-link\" target=\"_blank\">About Us</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"http://blog.creative-tim.com?ref=ada-footer-auth-layout\" class=\"nav-link\" target=\"_blank\">Blog</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"https://github.com/creativetimofficial/argon-dashboard-angular/blob/master/LICENSE.md\" class=\"nav-link\" target=\"_blank\">MIT License</a>\n          </li>\n        </ul>\n      </div>-->\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n  <div class=\"row align-items-center justify-content-xl-between\">\n    <div class=\"col-xl-6\">\n      <div class=\"copyright text-center text-xl-left text-muted\">\n        &copy; {{ test | date: \"yyyy\" }} <a href=\"https://police.nagaland.gov.in/\" class=\"font-weight-bold ml-1\" target=\"_blank\">Nagaland Police</a>\n      </div>\n    </div>\n    <!--\n    <div class=\"col-xl-6\">\n      <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\n        <li class=\"nav-item\">\n          <a href=\"https://www.creative-tim.com?ref=ada-footer-admin-layout\" class=\"nav-link\" target=\"_blank\">Creative Tim</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"https://www.creative-tim.com/presentation?ref=ada-footer-admin-layout\" class=\"nav-link\" target=\"_blank\">About Us</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"http://blog.creative-tim.com?ref=ada-footer-admin-layout\" class=\"nav-link\" target=\"_blank\">Blog</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"https://github.com/creativetimofficial/argon-dashboard-angular/blob/master/LICENSE.md\" class=\"nav-link\" target=\"_blank\">MIT License</a>\n        </li>\n      </ul>\n    </div>-->\n  </div>\n</footer>\n");

/***/ }),

/***/ "Yteh":
/*!******************************************************************************!*\
  !*** ./src/app/pages/thana/create-edit-thana/create-edit-thana.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateEditThanaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditThanaComponent", function() { return CreateEditThanaComponent; });
/* harmony import */ var _raw_loader_create_edit_thana_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./create-edit-thana.component.html */ "jPXu");
/* harmony import */ var _create_edit_thana_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-edit-thana.component.css */ "m5zQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateEditThanaComponent = /** @class */ (function () {
    function CreateEditThanaComponent(route) {
        this.route = route;
    }
    CreateEditThanaComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.pageName = (this.id == null) ? "Create New Thana" : "Edit Thana";
    };
    CreateEditThanaComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    CreateEditThanaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-edit-thana',
            template: _raw_loader_create_edit_thana_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_create_edit_thana_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CreateEditThanaComponent);
    return CreateEditThanaComponent;
}());



/***/ }),

/***/ "Yvbx":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/district/create-edit-district/create-edit-district.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n  <div class=\"row\">\n    <div class=\"col-xl-12 order-xl-1\">\n      <div class=\"card bg-secondary shadow\">\n        <div class=\"card-header bg-white border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-8\">\n              <h3 class=\"mb-0\">{{pageName}}</h3>\n            </div>\n            <div class=\"col-4 text-right\">\n              <a [routerLink]=\"['/district']\" class=\"btn btn-primary\">Back to District List</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <form>\n            <h6 class=\"heading-small text-muted mb-4\">District information</h6>\n            <div class=\"pl-lg-4\">\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-username\">District Code</label>\n                    <input type=\"text\" id=\"input-username\" class=\"form-control form-control-alternative\" placeholder=\"Thana Code\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-email\">District Name</label>\n                    <input type=\"text\" id=\"input-email\" class=\"form-control form-control-alternative\" placeholder=\"Thana Name\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">State</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select State\" value=\"\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <hr class=\"my-4\" />\n            <!-- Description -->\n            <h6 class=\"heading-small text-muted mb-4\">Description</h6>\n            <div class=\"pl-lg-4\">\n              <div class=\"form-group\">\n                <label>Other Info</label>\n                <textarea rows=\"4\" class=\"form-control form-control-alternative\" placeholder=\"A few words ...\" name=\"text-description\"></textarea>\n              </div>\n            </div>\n            <hr class=\"my-4\" />\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <a [routerLink]=\"['/district']\" class=\"btn btn-primary btn-block\">Clear Data</a>\n              </div>\n              <div class=\"col-lg-6\">\n                <a [routerLink]=\"['/district']\" class=\"btn btn-primary btn-block\">{{pageName}}</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "3TnI");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/users/users.component */ "Ag98");
/* harmony import */ var _pages_thana_thana_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/thana/thana.component */ "aA6l");
/* harmony import */ var _pages_district_district_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/district/district.component */ "CrXD");
/* harmony import */ var _pages_task_task_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/task/task.component */ "tYRu");
/* harmony import */ var _pages_subdivision_subdivision_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/subdivision/subdivision.component */ "eWNx");
/* harmony import */ var _pages_district_create_edit_district_create_edit_district_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/district/create-edit-district/create-edit-district.component */ "1cB1");
/* harmony import */ var _pages_subdivision_create_edit_subdivision_create_edit_subdivision_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/subdivision/create-edit-subdivision/create-edit-subdivision.component */ "Frhf");
/* harmony import */ var _pages_thana_create_edit_thana_create_edit_thana_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/thana/create-edit-thana/create-edit-thana.component */ "Yteh");
/* harmony import */ var _pages_users_create_edit_user_create_edit_user_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/users/create-edit-user/create-edit-user.component */ "ImBh");
/* harmony import */ var _pages_authority_authority_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/authority/authority.component */ "9GBq");
/* harmony import */ var _pages_role_role_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/role/role.component */ "5I7R");
/* harmony import */ var _pages_task_tree_task_tree_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/task-tree/task-tree.component */ "/r0d");
/* harmony import */ var _pages_role_create_edit_role_create_edit_role_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/role/create-edit-role/create-edit-role.component */ "/4EI");
/* harmony import */ var _pages_authority_create_edit_authority_create_edit_authority_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/authority/create-edit-authority/create-edit-authority.component */ "umbp");
/* harmony import */ var _pages_task_create_edit_task_create_edit_task_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/task/create-edit-task/create-edit-task.component */ "/S+i");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_7__["AdminLayoutComponent"],
                _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__["AuthLayoutComponent"],
                _pages_users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"],
                _pages_thana_thana_component__WEBPACK_IMPORTED_MODULE_14__["ThanaComponent"],
                _pages_district_district_component__WEBPACK_IMPORTED_MODULE_15__["DistrictComponent"],
                _pages_task_task_component__WEBPACK_IMPORTED_MODULE_16__["TaskComponent"],
                _pages_subdivision_subdivision_component__WEBPACK_IMPORTED_MODULE_17__["SubdivisionComponent"],
                _pages_district_create_edit_district_create_edit_district_component__WEBPACK_IMPORTED_MODULE_18__["CreateEditDistrictComponent"],
                _pages_subdivision_create_edit_subdivision_create_edit_subdivision_component__WEBPACK_IMPORTED_MODULE_19__["CreateEditSubdivisionComponent"],
                _pages_thana_create_edit_thana_create_edit_thana_component__WEBPACK_IMPORTED_MODULE_20__["CreateEditThanaComponent"],
                _pages_users_create_edit_user_create_edit_user_component__WEBPACK_IMPORTED_MODULE_21__["CreateEditUserComponent"],
                _pages_authority_authority_component__WEBPACK_IMPORTED_MODULE_22__["AuthorityComponent"],
                _pages_role_role_component__WEBPACK_IMPORTED_MODULE_23__["RoleComponent"],
                _pages_task_tree_task_tree_component__WEBPACK_IMPORTED_MODULE_24__["TaskTreeComponent"],
                _pages_role_create_edit_role_create_edit_role_component__WEBPACK_IMPORTED_MODULE_25__["CreateEditRoleComponent"],
                _pages_authority_create_edit_authority_create_edit_authority_component__WEBPACK_IMPORTED_MODULE_26__["CreateEditAuthorityComponent"],
                _pages_task_create_edit_task_create_edit_task_component__WEBPACK_IMPORTED_MODULE_27__["CreateEditTaskComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "aA6l":
/*!************************************************!*\
  !*** ./src/app/pages/thana/thana.component.ts ***!
  \************************************************/
/*! exports provided: ThanaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanaComponent", function() { return ThanaComponent; });
/* harmony import */ var _raw_loader_thana_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./thana.component.html */ "pxXz");
/* harmony import */ var _thana_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thana.component.css */ "wIPc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThanaComponent = /** @class */ (function () {
    function ThanaComponent(toastr) {
        this.toastr = toastr;
    }
    ThanaComponent.prototype.ngOnInit = function () {
    };
    ThanaComponent.prototype.removeThana = function (id) {
        this.toastr.error('Thana with id ' + id + " has been removed.", 'Thana Master');
    };
    ThanaComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
    ]; };
    ThanaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-thana',
            template: _raw_loader_thana_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_thana_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ThanaComponent);
    return ThanaComponent;
}());



/***/ }),

/***/ "b9TJ":
/*!******************************************************!*\
  !*** ./src/app/components/stats/stats.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhdHMvc3RhdHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "3TnI");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ]
    }, {
        path: '',
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
            }
        ]
    }, {
        path: '**',
        redirectTo: 'dashboard'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: false
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"IqXj",
		"layouts-admin-layout-admin-layout-module"
	],
	"./layouts/auth-layout/auth-layout.module": [
		"PTPi",
		"layouts-auth-layout-auth-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "d5qH":
/*!***********************************************!*\
  !*** ./src/app/pages/role/role.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvbGUvcm9sZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "dbua":
/*!****************************************************************************!*\
  !*** ./src/app/pages/task/create-edit-task/create-edit-task.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhc2svY3JlYXRlLWVkaXQtdGFzay9jcmVhdGUtZWRpdC10YXNrLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "eWNx":
/*!************************************************************!*\
  !*** ./src/app/pages/subdivision/subdivision.component.ts ***!
  \************************************************************/
/*! exports provided: SubdivisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubdivisionComponent", function() { return SubdivisionComponent; });
/* harmony import */ var _raw_loader_subdivision_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./subdivision.component.html */ "zbz3");
/* harmony import */ var _subdivision_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subdivision.component.css */ "R7ea");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubdivisionComponent = /** @class */ (function () {
    function SubdivisionComponent(toastr) {
        this.toastr = toastr;
    }
    SubdivisionComponent.prototype.ngOnInit = function () {
    };
    SubdivisionComponent.prototype.removeSubdivision = function (id) {
        this.toastr.error('Subdivision with id ' + id + " has been removed.", 'Subdivision Master');
    };
    SubdivisionComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
    ]; };
    SubdivisionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-subdivision',
            template: _raw_loader_subdivision_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_subdivision_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], SubdivisionComponent);
    return SubdivisionComponent;
}());



/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss */ "Ls9r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router) {
        this.element = element;
        this.router = router;
        this.location = location;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (listTitle) { return listTitle; });
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "iFfQ":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authority/create-edit-authority/create-edit-authority.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n  <div class=\"row\">\n    <div class=\"col-xl-12 order-xl-1\">\n      <div class=\"card bg-secondary shadow\">\n        <div class=\"card-header bg-white border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-8\">\n              <h3 class=\"mb-0\">{{pageName}}</h3>\n            </div>\n            <div class=\"col-4 text-right\">\n              <a [routerLink]=\"['/authority']\" class=\"btn btn-primary\">Back to Authority List</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <form>\n            <h6 class=\"heading-small text-muted mb-4\">Authority information</h6>\n            <div class=\"pl-lg-4\">\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-username\">Authority Code</label>\n                    <input type=\"text\" id=\"input-username\" class=\"form-control form-control-alternative\" placeholder=\"Thana Code\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-email\">Authority Name</label>\n                    <input type=\"text\" id=\"input-email\" class=\"form-control form-control-alternative\" placeholder=\"Thana Name\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">Authority Description</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select State\" value=\"\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">Created By</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select State\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">Creation TimeStamp</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select State\" value=\"\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">Modified By</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select State\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">Modifaication TimeStamp</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select State\" value=\"\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <hr class=\"my-4\" />\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <a [routerLink]=\"['/district']\" class=\"btn btn-primary btn-block\">Clear Data</a>\n              </div>\n              <div class=\"col-lg-6\">\n                <a [routerLink]=\"['/district']\" class=\"btn btn-primary btn-block\">Save District</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "hrlM");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stats/stats.component */ "jyt5");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"],
                _stats_stats_component__WEBPACK_IMPORTED_MODULE_7__["StatsComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"],
                _stats_stats_component__WEBPACK_IMPORTED_MODULE_7__["StatsComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "jPXu":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/thana/create-edit-thana/create-edit-thana.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n  <div class=\"row\">\n    <div class=\"col-xl-12 order-xl-1\">\n      <div class=\"card bg-secondary shadow\">\n        <div class=\"card-header bg-white border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-8\">\n              <h3 class=\"mb-0\">{{pageName}}</h3>\n            </div>\n            <div class=\"col-4 text-right\">\n              <a [routerLink]=\"['/thana']\" class=\"btn btn-primary\">Back to Thana List</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <form>\n            <h6 class=\"heading-small text-muted mb-4\">Thana information</h6>\n            <div class=\"pl-lg-4\">\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-username\">Thana Code</label>\n                    <input type=\"text\" id=\"input-username\" class=\"form-control form-control-alternative\" placeholder=\"Thana Code\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-email\">Thana Name</label>\n                    <input type=\"text\" id=\"input-email\" class=\"form-control form-control-alternative\" placeholder=\"Thana Name\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">Subdivision</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select Subdivision\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">District</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select District\" value=\"\" disabled=\"disabled\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">State</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select State\" value=\"\" disabled=\"disabled\">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Office Address -->\n            <h6 class=\"heading-small text-muted mb-4\">Thana information</h6>\n            <div class=\"pl-lg-4\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-address\">Address</label>\n                    <input id=\"input-address\" class=\"form-control form-control-alternative\" placeholder=\"Home Address\" value=\"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09\" type=\"text\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-4\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-city\">City</label>\n                    <input type=\"text\" id=\"input-city\" class=\"form-control form-control-alternative\" placeholder=\"City Name\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-country\">Postal code</label>\n                    <input type=\"number\" id=\"input-postal-code\" class=\"form-control form-control-alternative\" placeholder=\"Postal code\">\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-country\">Contact Number</label>\n                    <input type=\"text\" id=\"input-country\" class=\"form-control form-control-alternative\" placeholder=\"Phone Number\" value=\"\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <hr class=\"my-4\" />\n            <!-- Description -->\n            <h6 class=\"heading-small text-muted mb-4\">Description</h6>\n            <div class=\"pl-lg-4\">\n              <div class=\"form-group\">\n                <label>Other Info</label>\n                <textarea rows=\"4\" class=\"form-control form-control-alternative\" placeholder=\"A few words ...\" name=\"text-description\"></textarea>\n              </div>\n            </div>\n            <hr class=\"my-4\" />\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <a [routerLink]=\"['/district']\" class=\"btn btn-primary btn-block\">Clear Data</a>\n              </div>\n              <div class=\"col-lg-6\">\n                <a [routerLink]=\"['/district']\" class=\"btn btn-primary btn-block\">{{pageName}}</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "jcT0":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "jjuR":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/district/district.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n  <!-- Table -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-8\">\n              <h3 class=\"mb-0\">District List</h3>\n            </div>\n            <div class=\"col-4 text-right\">\n              <a [routerLink]=\"['/district/create']\" class=\"btn btn-primary\">Add New District</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table datatable class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">District ID</th>\n                  <th scope=\"col\">District Name</th>\n                  <th scope=\"col\">State Name</th>\n                  <th scope=\"col\">Option</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <th scope=\"row\">\n                    Test Thana ID\n                  </th>\n                  <td>\n                    Test Thana Name\n                  </td>\n                  <td>\n                    Test District\n                  </td>\n                  <td class=\"text-center\">\n                    <a [routerLink]=\"['/district/edit/1']\" class=\"btn btn-sm btn-primary\">Edit</a>\n                    <a (click)=\"removeDisctict(1)\" class=\"btn btn-sm btn-primary\">Remove</a>\n                  </td>\n                </tr>\n              </tbody>\n\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "jyt5":
/*!*****************************************************!*\
  !*** ./src/app/components/stats/stats.component.ts ***!
  \*****************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var _raw_loader_stats_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./stats.component.html */ "kshW");
/* harmony import */ var _stats_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stats.component.css */ "b9TJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatsComponent = /** @class */ (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.ngOnInit = function () {
    };
    StatsComponent.ctorParameters = function () { return []; };
    StatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-stats',
            template: _raw_loader_stats_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_stats_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "kshW":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/stats/stats.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <!-- Card stats -->\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Total Tasks</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">350,897</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-danger text-white rounded-circle shadow\">\n                    <i class=\"fas fa-chart-bar\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-success mr-2\"><i class=\"fa fa-arrow-up\"></i> 3.48%</span>\n                <span class=\"text-nowrap\">Since last month</span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Closed Tasks</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">2,356</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-warning text-white rounded-circle shadow\">\n                    <i class=\"fas fa-chart-pie\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-danger mr-2\"><i class=\"fas fa-arrow-down\"></i> 3.48%</span>\n                <span class=\"text-nowrap\">Since last week</span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Unassigned Tasks</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">924</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-yellow text-white rounded-circle shadow\">\n                    <i class=\"fas fa-users\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-warning mr-2\"><i class=\"fas fa-arrow-down\"></i> 1.10%</span>\n                <span class=\"text-nowrap\">Since yesterday</span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Pending Tasks</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">49,65%</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-info text-white rounded-circle shadow\">\n                    <i class=\"fas fa-percent\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-success mr-2\"><i class=\"fas fa-arrow-up\"></i> 12%</span>\n                <span class=\"text-nowrap\">Since last month</span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "m5zQ":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/thana/create-edit-thana/create-edit-thana.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RoYW5hL2NyZWF0ZS1lZGl0LXRoYW5hL2NyZWF0ZS1lZGl0LXRoYW5hLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "ok//":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task/task.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n  <!-- Table -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-8\">\n              <h3 class=\"mb-0\">Task List</h3>\n            </div>\n            <div class=\"col-4 text-right\">\n              <a [routerLink]=\"['/task/create']\" class=\"btn btn-primary\">Create New Task</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table datatable class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">Task ID</th>\n                  <th scope=\"col\">Task Description</th>\n                  <th scope=\"col\">Create By</th>\n                  <th scope=\"col\">Assigned To</th>\n                  <th scope=\"col\">Status</th>\n                  <th scope=\"col\">Creation Date</th>\n                  <th scope=\"col\">Option</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <th scope=\"row\">\n                    Task 1234\n                  </th>\n                  <td>\n                    fasf asdas asdas\n                  </td>\n                  <td>\n                    Raja Babu\n                  </td>\n                  <td>\n                    Mohan Chana\n                  </td>\n                  <td>\n                    Open\n                  </td>\n                  <td>\n                    12/12/2021 12:15:AM\n                  </td>\n                  <td>\n                    <a [routerLink]=\"['/task/edit/1']\" class=\"btn btn-sm btn-primary\">Edit</a>\n                    <a href=\"#!\" class=\"btn btn-sm btn-primary\">Assign</a>\n                    <a href=\"#!\" class=\"btn btn-sm btn-primary\">Mark Complete</a>\n                  </td>\n                </tr>\n              </tbody>\n\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "pJIJ":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/users/create-edit-user/create-edit-user.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL2NyZWF0ZS1lZGl0LXVzZXIvY3JlYXRlLWVkaXQtdXNlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "plWm":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n  <!-- Table -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-8\">\n              <h3 class=\"mb-0\">User List</h3>\n            </div>\n            <div class=\"col-4 text-right\">\n              <a [routerLink]=\"['/users/create']\" class=\"btn btn-primary\">Add New User</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table datatable class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">User ID</th>\n                  <th scope=\"col\">User Name</th>\n                  <th scope=\"col\">Designation</th>\n                  <th scope=\"col\">Option</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <th scope=\"row\">\n                    /argon/\n                  </th>\n                  <td>\n                    4,569\n                  </td>\n                  <td>\n                    340\n                  </td>\n                  <td class=\"text-center\">\n                    <a [routerLink]=\"['/users/edit/1']\" class=\"btn btn-sm btn-primary\">Edit</a>\n                    <a href=\"#!\" class=\"btn btn-sm btn-primary\">Remore</a>\n                  </td>\n                </tr>\n              </tbody>\n\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "pxXz":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/thana/thana.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n  <!-- Table -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-8\">\n              <h3 class=\"mb-0\">Thana List</h3>\n            </div>\n            <div class=\"col-4 text-right\">\n              <a [routerLink]=\"['/thana/create']\" class=\"btn btn-primary\">Add New Thana</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table datatable class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">Thana ID</th>\n                  <th scope=\"col\">Thana Name</th>\n                  <th scope=\"col\">District</th>\n                  <th scope=\"col\">Option</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <th scope=\"row\">\n                    Test Thana ID\n                  </th>\n                  <td>\n                    Test Thana Name\n                  </td>\n                  <td>\n                    Test District\n                  </td>\n                  <td>\n                    <a [routerLink]=\"['/thana/edit/1']\" class=\"btn btn-sm btn-primary\">Edit</a>\n                    <a (click)=\"removeThana(1)\" class=\"btn btn-sm btn-primary\">Remove</a>\n                  </td>\n                </tr>\n              </tbody>\n\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "q6aK":
/*!*********************************************************!*\
  !*** ./src/app/pages/authority/authority.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhvcml0eS9hdXRob3JpdHkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "tYRu":
/*!**********************************************!*\
  !*** ./src/app/pages/task/task.component.ts ***!
  \**********************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _raw_loader_task_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./task.component.html */ "ok//");
/* harmony import */ var _task_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.component.css */ "S9cW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskComponent = /** @class */ (function () {
    function TaskComponent() {
    }
    TaskComponent.prototype.ngOnInit = function () {
    };
    TaskComponent.ctorParameters = function () { return []; };
    TaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-task',
            template: _raw_loader_task_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_task_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "u1Wr":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authority/authority.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n  <!-- Table -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-8\">\n              <h3 class=\"mb-0\">Authority List</h3>\n            </div>\n            <div class=\"col-4 text-right\">\n              <a [routerLink]=\"['/authority/create']\" class=\"btn btn-primary\">Add New Authority</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table datatable class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">Authority Code</th>\n                  <th scope=\"col\">Authority Name</th>\n                  <th scope=\"col\">Description</th>\n                  <th scope=\"col\">Option</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <th scope=\"row\">\n                    /argon/\n                  </th>\n                  <td>\n                    4,569\n                  </td>\n                  <td>\n                    340\n                  </td>\n                  <td>\n                    <a [routerLink]=\"['/authority/edit/1']\" class=\"btn btn-sm btn-primary\">Edit</a>\n                    <a (click)=\"removeAuthority(1)\" class=\"btn btn-sm btn-primary\">Remove</a>\n                  </td>\n                </tr>\n              </tbody>\n\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "umbp":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/authority/create-edit-authority/create-edit-authority.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CreateEditAuthorityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditAuthorityComponent", function() { return CreateEditAuthorityComponent; });
/* harmony import */ var _raw_loader_create_edit_authority_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./create-edit-authority.component.html */ "iFfQ");
/* harmony import */ var _create_edit_authority_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-edit-authority.component.css */ "7Er9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateEditAuthorityComponent = /** @class */ (function () {
    function CreateEditAuthorityComponent(route) {
        this.route = route;
    }
    CreateEditAuthorityComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.pageName = (this.id == null) ? "Create New Authority" : "Edit Authority";
    };
    CreateEditAuthorityComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    CreateEditAuthorityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-edit-authority',
            template: _raw_loader_create_edit_authority_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_create_edit_authority_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CreateEditAuthorityComponent);
    return CreateEditAuthorityComponent;
}());



/***/ }),

/***/ "v8hj":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-tree/task-tree.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n  <!-- Table -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-8\">\n              <h3 class=\"mb-0\">Task Tree</h3>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          WIP\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "wIPc":
/*!*************************************************!*\
  !*** ./src/app/pages/thana/thana.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RoYW5hL3RoYW5hLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "wY1L":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role/create-edit-role/create-edit-role.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n  <div class=\"row\">\n    <div class=\"col-xl-12 order-xl-1\">\n      <div class=\"card bg-secondary shadow\">\n        <div class=\"card-header bg-white border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-8\">\n              <h3 class=\"mb-0\">{{pageName}}</h3>\n            </div>\n            <div class=\"col-4 text-right\">\n              <a [routerLink]=\"['/authority']\" class=\"btn btn-primary\">Back to Role List</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <form>\n            <h6 class=\"heading-small text-muted mb-4\">Role information</h6>\n            <div class=\"pl-lg-4\">\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-username\">Role Code</label>\n                    <input type=\"text\" id=\"input-username\" class=\"form-control form-control-alternative\" placeholder=\"Thana Code\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-email\">Role Name</label>\n                    <input type=\"text\" id=\"input-email\" class=\"form-control form-control-alternative\" placeholder=\"Thana Name\">\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">Role Description</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select State\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">Authorities</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select State\" value=\"\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">Created By</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select State\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">Creation TimeStamp</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select State\" value=\"\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">Modified By</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select State\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">Modifaication TimeStamp</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select State\" value=\"\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <hr class=\"my-4\" />\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <a [routerLink]=\"['/district']\" class=\"btn btn-primary btn-block\">Clear Data</a>\n              </div>\n              <div class=\"col-lg-6\">\n                <a [routerLink]=\"['/district']\" class=\"btn btn-primary btn-block\">{{pageName}}</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "xuPB":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task/create-edit-task/create-edit-task.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n  <div class=\"row\">\n    <div class=\"col-xl-12 order-xl-1\">\n      <div class=\"card bg-secondary shadow\">\n        <div class=\"card-header bg-white border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-8\">\n              <h3 class=\"mb-0\">{{pageName}}</h3>\n            </div>\n            <div class=\"col-4 text-right\">\n              <a [routerLink]=\"['/task']\" class=\"btn btn-primary\">Back to Task List</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <form>\n            <h6 class=\"heading-small text-muted mb-4\">Task information</h6>\n            <div class=\"pl-lg-4\">\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-username\">Task Code</label>\n                    <input type=\"text\" id=\"input-username\" class=\"form-control form-control-alternative\" placeholder=\"Thana Code\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-email\">Task Name</label>\n                    <input type=\"text\" id=\"input-email\" class=\"form-control form-control-alternative\" placeholder=\"Thana Name\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">Task Description</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select State\" value=\"\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">Created By</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select State\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">Creation TimeStamp</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select State\" value=\"\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">Modified By</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select State\" value=\"\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">Modifaication TimeStamp</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"Select State\" value=\"\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <hr class=\"my-4\" />\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <a [routerLink]=\"['/district']\" class=\"btn btn-primary btn-block\">Clear Data</a>\n              </div>\n              <div class=\"col-lg-6\">\n                <a [routerLink]=\"['/district']\" class=\"btn btn-primary btn-block\">{{pageName}}</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "yZN6":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _sidebar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.scss */ "jcT0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/task', title: 'Task List', icon: 'ni-bullet-list-67 text-red', class: '' },
    { path: '/task-tree', title: 'Task Tree', icon: 'ni ni-align-left-2 text-orange', class: '' },
    { path: '/district', title: 'District List', icon: 'ni-pin-3 text-pink', class: '' },
    { path: '/subdivision', title: 'Subdivision List', icon: 'ni-pin-3 text-blue', class: '' },
    { path: '/thana', title: 'Thana List', icon: 'ni-pin-3 text-orange', class: '' },
    { path: '/authority', title: 'Authority List', icon: 'ni ni-briefcase-24 text-pin', class: '' },
    { path: '/role', title: 'Role List', icon: 'ni ni-badge text-red', class: '' },
    { path: '/users', title: 'Users List', icon: 'ni-single-02 text-yellow', class: '' }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        this.router = router;
        this.isCollapsed = true;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
        });
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sidebar',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sidebar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*!

=========================================================
* Argon Dashboard Angular - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zbz3":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/subdivision/subdivision.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n  <!-- Table -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-8\">\n              <h3 class=\"mb-0\">Subdivision List</h3>\n            </div>\n            <div class=\"col-4 text-right\">\n              <a [routerLink]=\"['/subdivision/create']\" class=\"btn btn-primary\">Add New Subdivision</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table datatable class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">User ID</th>\n                  <th scope=\"col\">User Name</th>\n                  <th scope=\"col\">Designation</th>\n                  <th scope=\"col\">Option</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <th scope=\"row\">\n                    /argon/\n                  </th>\n                  <td>\n                    4,569\n                  </td>\n                  <td>\n                    340\n                  </td>\n                  <td>\n                    <a [routerLink]=\"['/subdivision/edit/1']\" class=\"btn btn-sm btn-primary\">Edit</a>\n                    <a (click)=\"removeSubdivision(1)\" class=\"btn btn-sm btn-primary\">Remove</a>\n                  </td>\n                </tr>\n              </tbody>\n\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map