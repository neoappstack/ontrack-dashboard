(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"],{

/***/ "/fh3":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger py-7 py-lg-8\">\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container mt--8 pb-5\">\n  <!-- Table -->\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-6 col-md-8\">\n      <div class=\"card bg-secondary shadow border-0\">\n        <div class=\"card-header bg-transparent pb-5\">\n          <div class=\"text-muted text-center mt-2 mb-4\"><small>Sign up with</small></div>\n          <div class=\"text-center\">\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon mr-4\">\n              <span class=\"btn-inner--icon\"><img src=\"assets/img/icons/common/github.svg\"></span>\n              <span class=\"btn-inner--text\">Github</span>\n            </a>\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n              <span class=\"btn-inner--icon\"><img src=\"assets/img/icons/common/google.svg\"></span>\n              <span class=\"btn-inner--text\">Google</span>\n            </a>\n          </div>\n        </div>\n        <div class=\"card-body px-lg-5 py-lg-5\">\n          <div class=\"text-center text-muted mb-4\">\n            <small>Or sign up with credentials</small>\n          </div>\n          <form role=\"form\">\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Name\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Email\" type=\"email\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Password\" type=\"password\">\n              </div>\n            </div>\n            <div class=\"text-muted font-italic\"><small>password strength: <span class=\"text-success font-weight-700\">strong</span></small></div>\n            <div class=\"row my-4\">\n              <div class=\"col-12\">\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                  <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\">\n                  <label class=\"custom-control-label\" for=\"customCheckRegister\">\n                    <span class=\"text-muted\">I agree with the <a href=\"#!\">Privacy Policy</a></span>\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"text-center\">\n              <button type=\"button\" class=\"btn btn-primary mt-4\">Create account</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "ywSW");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss */ "KEbp");
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



var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngOnDestroy = function () {
    };
    LoginComponent.ctorParameters = function () { return []; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "Eq68":
/*!************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.routing.ts ***!
  \************************************************************/
/*! exports provided: AuthLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutRoutes", function() { return AuthLayoutRoutes; });
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/register/register.component */ "fNfI");


var AuthLayoutRoutes = [
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"] }
];


/***/ }),

/***/ "HdeD":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "KEbp":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "PTPi":
/*!***********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.module.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutModule", function() { return AuthLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _auth_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-layout.routing */ "Eq68");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/register/register.component */ "fNfI");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthLayoutModule = /** @class */ (function () {
    function AuthLayoutModule() {
    }
    AuthLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_auth_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                // NgbModule
            ],
            declarations: [
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
            ]
        })
    ], AuthLayoutModule);
    return AuthLayoutModule;
}());



/***/ }),

/***/ "fNfI":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./register.component.html */ "/fh3");
/* harmony import */ var _register_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.scss */ "HdeD");
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



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.ctorParameters = function () { return []; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-register',
            template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "ywSW":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger py-7 py-lg-8\">\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container mt--8 pb-5\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-5 col-md-7\">\n      <div class=\"card bg-secondary shadow border-0\">\n        <div class=\"card-header bg-transparent pb-5\">\n          <div class=\"text-muted text-center mt-2 mb-3\"><small>Sign in with</small></div>\n          <div class=\"btn-wrapper text-center\">\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n              <span class=\"btn-inner--icon\"><img src=\"../assets/img/icons/common/github.svg\"></span>\n              <span class=\"btn-inner--text\">Github</span>\n            </a>\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n              <span class=\"btn-inner--icon\"><img src=\"../assets/img/icons/common/google.svg\"></span>\n              <span class=\"btn-inner--text\">Google</span>\n            </a>\n          </div>\n        </div>\n        <div class=\"card-body px-lg-5 py-lg-5\">\n          <div class=\"text-center text-muted mb-4\">\n            <small>Or sign in with credentials</small>\n          </div>\n          <form role=\"form\">\n            <div class=\"form-group mb-3\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Email\" type=\"email\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Password\" type=\"password\">\n              </div>\n            </div>\n            <div class=\"custom-control custom-control-alternative custom-checkbox\">\n              <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\n              <label class=\"custom-control-label\" for=\" customCheckLogin\">\n                <span class=\"text-muted\">Remember me</span>\n              </label>\n            </div>\n            <div class=\"text-center\">\n              <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n        <div class=\"col-6\">\n          <a href=\"javascript:void(0)\" class=\"text-light\"><small>Forgot password?</small></a>\n        </div>\n        <div class=\"col-6 text-right\">\n          <a routerLink=\"/register\" class=\"text-light\"><small>Create new account</small></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=layouts-auth-layout-auth-layout-module.js.map