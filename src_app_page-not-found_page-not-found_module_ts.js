(self["webpackChunkJupita"] = self["webpackChunkJupita"] || []).push([["src_app_page-not-found_page-not-found_module_ts"],{

/***/ 7236:
/*!*****************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundRoutingModule": () => (/* binding */ PageNotFoundRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found.component */ 439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [{ path: '', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent, data: { title: 'J U P I T A | Sorry Dave I cannot do that.' } }];
class PageNotFoundRoutingModule {
}
PageNotFoundRoutingModule.ɵfac = function PageNotFoundRoutingModule_Factory(t) { return new (t || PageNotFoundRoutingModule)(); };
PageNotFoundRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PageNotFoundRoutingModule });
PageNotFoundRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageNotFoundRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 439:
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 23, vars: 0, consts: [[1, "header", "mb-4", "mt-4", "pt-4"], [1, "main-container"], [1, "navbar", "navbar-expand-lg", "navbar-light"], ["href", "/", 1, "navbar-brand"], ["alt", "J U P I T A", "width", "108", "height", "19", "src", "./../../../assets/images/Jupita.png", 1, "img-fluid"], [1, "not-found"], [1, "container"], [1, "row"], ["href", "/", 1, ""]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Page not found!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Click ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " to return home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["a[_ngcontent-%COMP%] {\n  color: #C6C6C6;\n  padding-right: 0;\n}\n\n@media screen and (max-width: 767px) {\n  .not-found[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxhc3NldHNcXHN0eWxlc2hlZXRzXFx2YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0NRVztFRFBYLGdCQUFBO0FBQUo7O0FBSUk7RUFESjtJQUVRLGtCQUFBO0lBQ0EsbUJBQUE7RUFBTjtBQUNGIiwiZmlsZSI6InBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0cy92YXJpYWJsZS5zY3NzXCI7XHJcbmEge1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuLm5vdC1mb3VuZCB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkcGhvbmUpIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgIH1cclxufSIsIiRtb250c2VycmF0LXJlZ3VsYXJ0dGYtZm9udC1wYXRoOiBcImFzc2V0cy9mb250cy9Nb250c2VycmF0LVJlZ3VsYXIudHRmXCI7XHJcbiRtb250c2VycmF0LXNlbWlib2xkdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvTW9udHNlcnJhdC1TZW1pQm9sZC50dGZcIjtcclxuJG1vbnRzZXJyYXQtbGlnaHQtdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvTW9udHNlcnJhdC1MaWdodC50dGZcIjtcclxuJHBvcHBpbnMtbGlnaHQtdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvUG9wcGlucy1MaWdodC50dGZcIjtcclxuJHBvcHBpbnMtcmVndWxhci10dGYtZm9udC1wYXRoOiBcImFzc2V0cy9mb250cy9Qb3BwaW5zLXJlZ3VsYXIudHRmXCI7XHJcbiRmb250LWZhbWlseS1icmFuZDogJ01vbnRzZXJyYXQtUmVndWxhcic7XHJcbiRmb250LWZhbWlseS1zZW1pYm9sZDogJ01vbnRzZXJyYXQtU2VtaUJvbGQnO1xyXG4kZm9udC1mYW1pbHktbGlnaHQ6ICdNb250c2VycmF0LUxpZ2h0JztcclxuJGZvbnQtZmFtaWx5LXBvcHBpbnM6J1BvcHBpbnMtTGlnaHQnO1xyXG4kZm9udC1mYW1pbHktcG9wcGlucy1yZWd1bGFyOidQb3BwaW5zLVJlZ3VsYXInO1xyXG4kcHJpbWFyeS1jb2xvcjojQzZDNkM2O1xyXG4kbGluay10ZXh0LXByaW1hcnk6I0M2QzZDNjtcclxuJHByaW1hcnktZm9udC1jb2xvcjojMTgxODE4O1xyXG4vLyAgJGZvbnQtcmVndWxhcjonTW9udHNlcnJhdC1SZWd1bGFyJztcclxuJGZvbnQtc2VtaWJvbGQ6IDYwMDtcclxuJGZvbnQtbGlnaHQ6MzAwO1xyXG4vLyBSZXNwb25zaXZlIHNjcmVlbiBkZWNsYXJhdGlvblxyXG4kc21hbGwtcGhvbmVzOiAzNjBweDtcclxuJHBob25lOiA3NjdweDtcclxuJHRhYmxldC1taW46NzY4cHg7XHJcbiR0YWJsZXQtbWF4OjEwMjRweDtcclxuJHRvdGFsOiAzNTA7IC8vIHRvdGFsIHBhcnRpY2xlc1xyXG4kb3JiLXNpemU6IDEwMHB4O1xyXG4kcGFydGljbGUtc2l6ZTogMnB4O1xyXG4kdGltZTogMzBzO1xyXG4kYmFzZS1odWU6IDA7IC8vIGNoYW5nZSBmb3IgZGlmZiBjb2xvcnMgKDE4MCBpcyBuaWNlKVxyXG5cclxuLy8gTm90ZTogdGhlc2UgYnJlYWtpbmcgcG9pbnRzIGRvZXMgc2VlbSBtaXNsZWFkaW5nIGFuZCBub3QgYWxpbmdlZCB3aXRoIGJvb3RzdHJhcCBicmVha2luZyBwb2ludHMgXHJcbi8vIEJyZWFrcG9pbnRzXHJcbiRicC1zbWFsbDogNDhlbTsgLy8gNzY4cHhcclxuJGJwLW1lZGl1bTogMTQ0MHB4OyAvLyAxMDI0cHggXHJcbiRicC1sYXJnZTogMTkyMHB4OyAvLyA4NS4zNzVlbSAxMzY2cHhcclxuJGJwLXhsYXJnZTogMjA0OHB4OyAvLyAxMjBlbSAxOTIwcHhcclxuJGJwLXh4bGFyZ2U6IDM4NDBweDsgLy8gMTYwZW0gMjU2MHB4XHJcbi8vIE1lZGlhIFF1ZXJpZXNcclxuJG1xLXNtYWxsOiBcIihtaW4td2lkdGg6ICN7JGJwLXNtYWxsfSlcIjtcclxuJG1xLW1lZGl1bTogXCIobWluLXdpZHRoOiAjeyRicC1tZWRpdW19KVwiO1xyXG4kbXEtbGFyZ2U6IFwiKG1pbi13aWR0aDogI3skYnAtbGFyZ2V9KVwiO1xyXG4kbXEteGxhcmdlOiBcIihtaW4td2lkdGg6ICN7JGJwLXhsYXJnZX0pXCI7XHJcbiRtcS14eGxhcmdlOiBcIihtaW4td2lkdGg6ICN7JGJwLXh4bGFyZ2V9KVwiO1xyXG4kbXEtcmV0aW5hOiBcIigtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSlcIjsiXX0= */"] });


/***/ }),

/***/ 6815:
/*!*********************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundModule": () => (/* binding */ PageNotFoundModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found-routing.module */ 7236);
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found.component */ 439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




class PageNotFoundModule {
}
PageNotFoundModule.ɵfac = function PageNotFoundModule_Factory(t) { return new (t || PageNotFoundModule)(); };
PageNotFoundModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PageNotFoundModule });
PageNotFoundModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PageNotFoundModule, { declarations: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_page-not-found_page-not-found_module_ts.js.map