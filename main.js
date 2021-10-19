(self["webpackChunkJupita"] = self["webpackChunkJupita"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 2827:
/*!****************************************************!*\
  !*** ./src/app/animation/globe/globe.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobeComponent": () => (/* binding */ GlobeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 8583);



class GlobeComponent {
    constructor(platformId) {
        this.isBrowsers = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(platformId);
    }
    ngOnInit() {
        let scriptElement = document.createElement('script');
        scriptElement.src = 'assets/js/globenew.js';
        scriptElement.defer = true;
        scriptElement.onload = () => { };
        document.getElementsByTagName('body')[0].appendChild(scriptElement);
    }
}
GlobeComponent.ɵfac = function GlobeComponent_Factory(t) { return new (t || GlobeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID)); };
GlobeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GlobeComponent, selectors: [["app-globe"]], decls: 1, vars: 0, consts: [["id", "globe", 1, "js-globe"]], template: function GlobeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } }, styles: ["#globe[_ngcontent-%COMP%] {\n  position: absolute;\n  background: transparent !important;\n  pointer-events: none;\n  top: 50px;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Msa0JBQUE7RUFDRyxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUFESiIsImZpbGUiOiJnbG9iZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuI2dsb2JlIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG59Il19 */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _confirmemail_confirmemail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmemail/confirmemail.component */ 5217);
/* harmony import */ var _resend_verification_email_resend_verification_email_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resend-verification-email/resend-verification-email.component */ 7347);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 2054);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _tnc_tnc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tnc/tnc.component */ 7487);
/* harmony import */ var _sign_in_user_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in/user-sign-in.component */ 3922);
/* harmony import */ var _sign_up_invite_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up/invite-sign-up.component */ 5448);
/* harmony import */ var _sign_in_admin_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-in/admin-sign-in.component */ 6513);
/* harmony import */ var _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/default-layout/default-layout.component */ 5163);
/* harmony import */ var _layouts_navigation_layout_navigation_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/navigation-layout/navigation-layout.component */ 3962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);













const routes = [
    {
        path: '',
        component: _layouts_navigation_layout_navigation_layout_component__WEBPACK_IMPORTED_MODULE_9__.NavigationLayoutComponent,
        children: [
            {
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
                data: {
                    title: 'J U P I T A | The Communications Analytics Tool For Any Size Enterprise'
                }
            },
            {
                path: 'docs',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_document_document_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./document/document.module */ 7209)).then(m => m.DocumentModule)
            },
            {
                path: 'pricing',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pricing_pricing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pricing/pricing.module */ 7719)).then(m => m.PricingModule)
            },
            // {
            //   path: 'products',
            //   loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
            // },
            {
                path: 'termsandconditions/:id',
                component: _tnc_tnc_component__WEBPACK_IMPORTED_MODULE_4__.TncComponent,
                data: {
                    title: 'J U P I T A | Terms & Conditions',
                    metaTitle: 'Terms & Conditions',
                    metaDescription: 'Your privacy is important to us. It is Jupita’s policy to respect your privacy regarding any information we may collect while using this application. Accordingly, we have developed this privacy policy in order for you to understand how we collect, use, communicate, disclose and otherwise make use of personal information.'
                }
            },
        ]
    },
    {
        path: '',
        component: _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutComponent,
        children: [
            // {
            //   path: 'user',
            //   loadChildren: () => import('./user/user.module').then(m => m.UserModule),
            //   canActivate: [AuthGuard]
            // },
            {
                path: 'admin',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 7095)).then(m => m.AdminModule),
            },
            {
                path: 'sign-up',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sign-up_sign-up_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sign-up/sign-up.module */ 3982)).then(m => m.SignUpModule)
            },
            {
                path: 'sign-in',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sign-in_sign-in_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sign-in/sign-in.module */ 2831)).then(m => m.SignInModule)
            },
            {
                path: 'admin-login',
                component: _sign_in_admin_sign_in_component__WEBPACK_IMPORTED_MODULE_7__.AdminSignInComponent,
                data: {
                    title: 'J U P I T A | Hello Alex'
                }
            },
            {
                path: 'forgot-password',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_forgot-password_forgot-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forgot-password/forgot-password.module */ 7157)).then(m => m.ForgotPasswordModule)
            },
            {
                path: 'confirmation/:id',
                component: _confirmemail_confirmemail_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmemailComponent,
                data: {
                    title: 'J U P I T A | Confirm Email Address'
                }
            },
            {
                path: 'invite-signup/:email',
                component: _sign_up_invite_sign_up_component__WEBPACK_IMPORTED_MODULE_6__.InviteSignUpComponent,
                data: {
                    title: 'J U P I T A | Welcome'
                }
            },
            {
                path: 'resend-verification-email/:id',
                component: _resend_verification_email_resend_verification_email_component__WEBPACK_IMPORTED_MODULE_1__.ResendVerificationEmailComponent,
                data: {
                    title: 'J U P I T A | Confirm Email Address'
                }
            },
            {
                path: 'reset/:id',
                component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordComponent,
                data: {
                    title: 'J U P I T A | Reset Password'
                }
            },
            {
                path: 'reset-success',
                component: _sign_in_user_sign_in_component__WEBPACK_IMPORTED_MODULE_5__.UserSignInComponent,
                data: {
                    title: 'J U P I T A | Reset Success'
                }
            },
            {
                path: 'email-verified/:email',
                component: _sign_in_user_sign_in_component__WEBPACK_IMPORTED_MODULE_5__.UserSignInComponent,
                data: {
                    title: 'J U P I T A | Welcome'
                }
            },
            {
                path: 'page-not-found',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page-not-found_page-not-found_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page-not-found/page-not-found.module */ 6815)).then(m => m.PageNotFoundModule)
            },
            {
                path: '**',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page-not-found_page-not-found_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page-not-found/page-not-found.module */ 6815)).then(m => m.PageNotFoundModule)
            },
            {
                path: '404',
                redirectTo: '**',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes, {
                // preloadingStrategy: PreloadAllModules,
                initialNavigation: 'enabledBlocking',
                relativeLinkResolution: 'legacy'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _service_seo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/seo.service */ 9110);






class AppComponent {
    constructor(router, activatedRoute, titleService, seoService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.seoService = seoService;
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => {
            let child = this.activatedRoute.firstChild;
            while (child) {
                if (child.firstChild) {
                    child = child.firstChild;
                }
                else if (child.snapshot.data && child.snapshot.data['title']) {
                    return child.snapshot.data['title'];
                }
                else {
                    return null;
                }
            }
            return null;
        })).subscribe((data) => {
            if (data) {
                this.titleService.setTitle(data);
                if (data.metaTitle) {
                    this.seoService.updateTitle(data.metaTitle);
                    this.seoService.updateDescription(data.metaDescription);
                }
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_seo_service__WEBPACK_IMPORTED_MODULE_0__.SeoService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _confirmemail_confirmemail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirmemail/confirmemail.component */ 5217);
/* harmony import */ var _resend_verification_email_resend_verification_email_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resend-verification-email/resend-verification-email.component */ 7347);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 2054);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/service-worker */ 2249);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _animation_globe_globe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animation/globe/globe.component */ 2827);
/* harmony import */ var _tnc_tnc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tnc/tnc.component */ 7487);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _interceptors_header_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interceptors/header.interceptor */ 1150);
/* harmony import */ var _sign_in_user_sign_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sign-in/user-sign-in.component */ 3922);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getting-started/getting-started.component */ 2088);
/* harmony import */ var _layouts_navigation_layout_navigation_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/navigation-layout/navigation-layout.component */ 3962);
/* harmony import */ var _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/default-layout/default-layout.component */ 5163);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 7716);



























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
            useClass: _interceptors_header_interceptor__WEBPACK_IMPORTED_MODULE_10__.AuthHeaderInterceptor,
            multi: true,
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.production }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_22__.ToastrModule.forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
        _confirmemail_confirmemail_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmemailComponent,
        _resend_verification_email_resend_verification_email_component__WEBPACK_IMPORTED_MODULE_5__.ResendVerificationEmailComponent,
        _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__.ResetPasswordComponent,
        _animation_globe_globe_component__WEBPACK_IMPORTED_MODULE_8__.GlobeComponent,
        _tnc_tnc_component__WEBPACK_IMPORTED_MODULE_9__.TncComponent,
        _sign_in_user_sign_in_component__WEBPACK_IMPORTED_MODULE_11__.UserSignInComponent,
        _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_12__.GettingStartedComponent,
        _layouts_navigation_layout_navigation_layout_component__WEBPACK_IMPORTED_MODULE_13__.NavigationLayoutComponent,
        _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_15__.HomeComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__.ServiceWorkerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_22__.ToastrModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule] }); })();


/***/ }),

/***/ 5217:
/*!********************************************************!*\
  !*** ./src/app/confirmemail/confirmemail.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmemailComponent": () => (/* binding */ ConfirmemailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8049);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 892);






class ConfirmemailComponent {
    constructor(router, authService, route, platformId) {
        this.router = router;
        this.authService = authService;
        this.route = route;
        this.platformId = platformId;
        this.token = this.router.snapshot.params.id;
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            this.subscription = this.authService
                .verifyEmail({ id: this.token })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)())
                .subscribe({
                next: (response) => {
                    if (this.subscription) {
                        this.subscription.unsubscribe();
                    }
                    this.route.navigate(['/email-verified/' + response.data.email]);
                },
                error: (error) => {
                    this.route.navigate(['/404']);
                },
            });
        }
    }
}
ConfirmemailComponent.ɵfac = function ConfirmemailComponent_Factory(t) { return new (t || ConfirmemailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID)); };
ConfirmemailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ConfirmemailComponent, selectors: [["app-confirmemail"]], decls: 0, vars: 0, template: function ConfirmemailComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtZW1haWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getting-started/getting-started.component */ 2088);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);



class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 37, vars: 0, consts: [[1, "footer", "mt-4"], [1, "main-container", "text-center", "text-md-left", "text-sm-center"], [1, "d-flex"], [1, "col-md-8", "col-lg-6", "col-sm-12"], [1, "navbar", "mb-1", "pt-4", "pl-sm-auto", "pl-md-0", "pl-lg-0", "pl-xl-0"], ["href", "#", 1, "navbar-brand", "link-text"], ["width", "108", "height", "60", "src", "./../../../assets/images/Jupita.png", "alt", "J U P I T A", 1, "img-fluid"], [1, "w-80p", "p-break"], [1, "navbar-nav", "flex-row", "d-sm-inline-flex"], ["href", "/termsandconditions/privacy", 1, "nav-item", "link-text-col"], ["href", "/termsandconditions/terms", 1, "nav-item", "link-text-col"], ["href", "/termsandconditions/gdpr", 1, "nav-item", "link-text-col"], ["href", "/termsandconditions/ccpa", 1, "nav-item", "link-text-col"], ["href", "mailto:support@jupita.io?subject=Hello", 1, "nav-item", "link-text-col"], [1, "navbar-nav", "social-links", "flex-row", "d-sm-inline-flex", "icon-list"], ["href", "https://twitter.com/Jupita_AI", "target", "_blank", 1, "nav-item", "link-text-col"], ["src", "assets/icons/twitter.svg"], ["href", "https://www.linkedin.com/company/jupita/", "target", "_blank", 1, "nav-item", "link-text-col"], ["src", "assets/icons/Linked_in.svg"], [1, "clearfix", "w-100", "d-md-none", "pb-3"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-getting-started");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Jupita provides holistic touchpoint ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "analysis using deep neural networks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "GDPR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "CCPA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "hr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_0__.GettingStartedComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavbar], styles: [".footer[_ngcontent-%COMP%] {\n  font-family: \"Montserrat-Light\";\n  padding: 20px 0;\n}\n.footer[_ngcontent-%COMP%]   .link-text-col[_ngcontent-%COMP%] {\n  color: #C6C6C6;\n  cursor: pointer;\n}\n.footer[_ngcontent-%COMP%]   .link-text-col[_ngcontent-%COMP%]:hover, .footer[_ngcontent-%COMP%]   .link-text-col[_ngcontent-%COMP%]:active, .footer[_ngcontent-%COMP%]   .link-text-col[_ngcontent-%COMP%]:focus {\n  color: #C6C6C6;\n}\n.footer[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  justify-content: center !important;\n  flex-wrap: wrap !important;\n}\n.footer[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 10px !important;\n  font-size: 17px;\n  padding: 10px 0;\n}\n@media screen and (min-width: 767px) {\n  .footer[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    margin-left: 0 !important;\n  }\n}\n.footer[_ngcontent-%COMP%]   .list-unstyled[_ngcontent-%COMP%] {\n  float: right;\n  padding-top: 12px;\n}\n.footer[_ngcontent-%COMP%]   .list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  font-size: 1.1rem;\n  letter-spacing: 1px;\n  line-height: 1.4;\n}\n.footer[_ngcontent-%COMP%]   .list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #C6C6C6;\n}\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.icon-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 5px 0px !important;\n}\n@media screen and (max-width: 767px) {\n  .w-80p[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n\n  .footer[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n  .footer[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 0 !important;\n  }\n  .footer[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .list-unstyled[_ngcontent-%COMP%] {\n    float: none;\n  }\n\n  .footer[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n}\n@media screen and (max-width: 360px) {\n  .footer[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .footer[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n}\nbr[_ngcontent-%COMP%] {\n  display: none;\n}\n.w-80p[_ngcontent-%COMP%] {\n  width: 80%;\n}\n@media screen and (min-width: 480px) {\n  .p-break[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n    content: \"\\a\";\n    white-space: pre;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcYXNzZXRzXFxzdHlsZXNoZWV0c1xcdmFyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLCtCQ0tnQjtFREtoQixlQUFBO0FBVEo7QUFBSTtFQUNJLGNDT1c7RUROWCxlQUFBO0FBRVI7QUFEUTtFQUdJLGNDRU87QUREbkI7QUFHSTtFQUNJLGtDQUFBO0VBQ0EsMEJBQUE7QUFEUjtBQUVRO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUFaO0FBR1k7RUFESjtJQUVRLHlCQUFBO0VBQWQ7QUFDRjtBQUdJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBRFI7QUFFUTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQVo7QUFDWTtFQUNJLGNDMUJEO0FEMkJmO0FBSUE7RUFDSSxXQUFBO0FBREo7QUFJSTtFQUNJLDJCQUFBO0FBRFI7QUFLQTtFQUNJO0lBQ0ksc0JBQUE7RUFGTjs7RUFRTTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUFMVjtFQU1VO0lBQ0ksc0JBQUE7SUFDQSxxQkFBQTtFQUpkO0VBT1U7SUFDSSxXQUFBO0VBTGQ7O0VBV1U7SUFDSSxlQUFBO0VBUmQ7QUFDRjtBQWFBO0VBR1k7SUFDSSxlQUFBO0VBYmQ7QUFDRjtBQW1CQTtFQUVRO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFQWxCVjtBQUNGO0FBc0JBO0VBQ0ksYUFBQTtBQXBCSjtBQXdCQTtFQUNJLFVBQUE7QUFyQko7QUF3QkE7RUFFUTtJQUNJLGFBQUE7SUFDQSxnQkFBQTtFQXRCVjtBQUNGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzaGVldHMvdmFyaWFibGUuc2Nzc1wiO1xyXG4uZm9vdGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktbGlnaHQ7XHJcbiAgICAubGluay10ZXh0LWNvbCB7XHJcbiAgICAgICAgY29sb3I6ICRsaW5rLXRleHQtcHJpbWFyeTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgY29sb3I6ICRsaW5rLXRleHQtcHJpbWFyeTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwYWRkaW5nOjIwcHggMDtcclxuICAgIC5uYXZiYXItbmF2IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgbWFyZ2luOjAgMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaTpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDokcGhvbmUpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjAhaW1wb3J0YW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubGlzdC11bnN0eWxlZCB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmxpIGEgaW1ne1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuLmljb24tbGlzdHtcclxuICAgIGxpe1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHBob25lKSB7XHJcbiAgICAudy04MHAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLXNlY3Rpb24tYnJlYWt7XHJcbiAgICAgICAgLy8gZGlzcGxheTogaW5saW5lO1xyXG4gICAgfVxyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgICAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAuZC1mbGV4IHtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saXN0LXVuc3R5bGVkIHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvb3RlcntcclxuICAgICAgICAubWFpbi1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsLXBob25lcyl7XHJcbiAgICAuZm9vdGVye1xyXG4gICAgICAgIC5tYWluLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5icntcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuXHJcbi53LTgwcCB7XHJcbiAgICB3aWR0aDogODAlIDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogIDQ4MHB4KSB7XHJcbiAgICAucC1icmVhayB7XHJcbiAgICAgICAgc3Bhbjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcXEFcIjtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgICAgICB9IFxyXG59XHJcbn0iLCIkbW9udHNlcnJhdC1yZWd1bGFydHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLnR0ZlwiO1xyXG4kbW9udHNlcnJhdC1zZW1pYm9sZHR0Zi1mb250LXBhdGg6IFwiYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQtU2VtaUJvbGQudHRmXCI7XHJcbiRtb250c2VycmF0LWxpZ2h0LXR0Zi1mb250LXBhdGg6IFwiYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQtTGlnaHQudHRmXCI7XHJcbiRwb3BwaW5zLWxpZ2h0LXR0Zi1mb250LXBhdGg6IFwiYXNzZXRzL2ZvbnRzL1BvcHBpbnMtTGlnaHQudHRmXCI7XHJcbiRwb3BwaW5zLXJlZ3VsYXItdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvUG9wcGlucy1yZWd1bGFyLnR0ZlwiO1xyXG4kZm9udC1mYW1pbHktYnJhbmQ6ICdNb250c2VycmF0LVJlZ3VsYXInO1xyXG4kZm9udC1mYW1pbHktc2VtaWJvbGQ6ICdNb250c2VycmF0LVNlbWlCb2xkJztcclxuJGZvbnQtZmFtaWx5LWxpZ2h0OiAnTW9udHNlcnJhdC1MaWdodCc7XHJcbiRmb250LWZhbWlseS1wb3BwaW5zOidQb3BwaW5zLUxpZ2h0JztcclxuJGZvbnQtZmFtaWx5LXBvcHBpbnMtcmVndWxhcjonUG9wcGlucy1SZWd1bGFyJztcclxuJHByaW1hcnktY29sb3I6I0M2QzZDNjtcclxuJGxpbmstdGV4dC1wcmltYXJ5OiNDNkM2QzY7XHJcbiRwcmltYXJ5LWZvbnQtY29sb3I6IzE4MTgxODtcclxuLy8gICRmb250LXJlZ3VsYXI6J01vbnRzZXJyYXQtUmVndWxhcic7XHJcbiRmb250LXNlbWlib2xkOiA2MDA7XHJcbiRmb250LWxpZ2h0OjMwMDtcclxuLy8gUmVzcG9uc2l2ZSBzY3JlZW4gZGVjbGFyYXRpb25cclxuJHNtYWxsLXBob25lczogMzYwcHg7XHJcbiRwaG9uZTogNzY3cHg7XHJcbiR0YWJsZXQtbWluOjc2OHB4O1xyXG4kdGFibGV0LW1heDoxMDI0cHg7XHJcbiR0b3RhbDogMzUwOyAvLyB0b3RhbCBwYXJ0aWNsZXNcclxuJG9yYi1zaXplOiAxMDBweDtcclxuJHBhcnRpY2xlLXNpemU6IDJweDtcclxuJHRpbWU6IDMwcztcclxuJGJhc2UtaHVlOiAwOyAvLyBjaGFuZ2UgZm9yIGRpZmYgY29sb3JzICgxODAgaXMgbmljZSlcclxuXHJcbi8vIE5vdGU6IHRoZXNlIGJyZWFraW5nIHBvaW50cyBkb2VzIHNlZW0gbWlzbGVhZGluZyBhbmQgbm90IGFsaW5nZWQgd2l0aCBib290c3RyYXAgYnJlYWtpbmcgcG9pbnRzIFxyXG4vLyBCcmVha3BvaW50c1xyXG4kYnAtc21hbGw6IDQ4ZW07IC8vIDc2OHB4XHJcbiRicC1tZWRpdW06IDE0NDBweDsgLy8gMTAyNHB4IFxyXG4kYnAtbGFyZ2U6IDE5MjBweDsgLy8gODUuMzc1ZW0gMTM2NnB4XHJcbiRicC14bGFyZ2U6IDIwNDhweDsgLy8gMTIwZW0gMTkyMHB4XHJcbiRicC14eGxhcmdlOiAzODQwcHg7IC8vIDE2MGVtIDI1NjBweFxyXG4vLyBNZWRpYSBRdWVyaWVzXHJcbiRtcS1zbWFsbDogXCIobWluLXdpZHRoOiAjeyRicC1zbWFsbH0pXCI7XHJcbiRtcS1tZWRpdW06IFwiKG1pbi13aWR0aDogI3skYnAtbWVkaXVtfSlcIjtcclxuJG1xLWxhcmdlOiBcIihtaW4td2lkdGg6ICN7JGJwLWxhcmdlfSlcIjtcclxuJG1xLXhsYXJnZTogXCIobWluLXdpZHRoOiAjeyRicC14bGFyZ2V9KVwiO1xyXG4kbXEteHhsYXJnZTogXCIobWluLXdpZHRoOiAjeyRicC14eGxhcmdlfSlcIjtcclxuJG1xLXJldGluYTogXCIoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpXCI7Il19 */"] });


/***/ }),

/***/ 2088:
/*!**************************************************************!*\
  !*** ./src/app/getting-started/getting-started.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GettingStartedComponent": () => (/* binding */ GettingStartedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class GettingStartedComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    redirectToSignUP() {
        this.router.navigate(['/sign-up']);
    }
}
GettingStartedComponent.ɵfac = function GettingStartedComponent_Factory(t) { return new (t || GettingStartedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
GettingStartedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GettingStartedComponent, selectors: [["app-getting-started"]], decls: 9, vars: 0, consts: [[1, "main-container"], [1, "getting-started"], [1, "d-flex", "flex-wrap", "justify-content-md-between", "justify-content-center", "align-items-center"], [1, "text-center", "text-md-left"], [1, "d-none", "d-md-block"], ["routerlink", "/sign-up", 1, "custom-btn", "signup-btn", "rounded-pill", 3, "click"]], template: function GettingStartedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Getting started is fast easy &");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " free - no credit card required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GettingStartedComponent_Template_button_click_7_listener() { return ctx.redirectToSignUP(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media (min-width: 1440px) {\n  .getting-started[_ngcontent-%COMP%] {\n    margin-left: 10vw;\n    margin-right: 10vw;\n  }\n}\n@media (min-width: 768px) {\n  .getting-started[_ngcontent-%COMP%] {\n    margin-left: 8vw;\n    margin-right: 8vw;\n    padding-top: 5rem;\n    padding-bottom: 4rem;\n  }\n}\n@media (max-width: 767px) {\n  .getting-started[_ngcontent-%COMP%] {\n    max-width: 258px;\n    margin-left: auto;\n    margin-right: auto;\n    padding-top: 35px;\n    padding-bottom: 40px;\n  }\n}\n.getting-started[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-family: \"Poppins-Light\";\n  line-height: 1.4;\n}\n@media (min-width: 1024px) {\n  .getting-started[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n}\n.getting-started[_ngcontent-%COMP%]   .signup-btn[_ngcontent-%COMP%] {\n  height: 56px;\n  width: 200px;\n}\n@media (max-width: 767px) {\n  .getting-started[_ngcontent-%COMP%]   .signup-btn[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 150px;\n    height: 40px;\n    margin-top: 50px;\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldHRpbmctc3RhcnRlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQURGO0lBRUksaUJBQUE7SUFDQSxrQkFBQTtFQUNGO0FBQ0Y7QUFBRTtFQUxGO0lBTUksZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUFHRjtBQUNGO0FBRkU7RUFYRjtJQVlJLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUFLRjtBQUNGO0FBSkU7RUFDRSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFNSjtBQUxJO0VBSkY7SUFLSSxpQkFBQTtFQVFKO0FBQ0Y7QUFMRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBT0o7QUFOSTtFQUhGO0lBSUksZUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0VBU0o7QUFDRiIsImZpbGUiOiJnZXR0aW5nLXN0YXJ0ZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2V0dGluZy1zdGFydGVkIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xuICAgIG1hcmdpbi1yaWdodDogMTB2dztcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogOHZ3O1xuICAgIG1hcmdpbi1yaWdodDogOHZ3O1xuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA0cmVtO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIG1heC13aWR0aDogMjU4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAzNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICB9XG4gIGgzIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLUxpZ2h0XCI7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICB9XG4gIH1cblxuICAuc2lnbnVwLWJ0biB7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 892);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);






const _c0 = ["header"];
function HeaderComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Get Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Get Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
        this.logout = false;
        this.navHide = false;
        this.isCollapsed = true;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const user = yield this.authService.userValue;
                if (user && (user._id || user.data._id)) {
                    this.logout = true;
                }
                else {
                    this.logout = false;
                }
            }
            catch (error) {
            }
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            var nativeEl = this.header.nativeElement;
            nativeEl.classList.remove('showWhenLoaded');
            nativeEl.style.display = '';
        }, 0);
    }
    logoutUser() {
        this.authService.logout();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.header = _t.first);
    } }, decls: 30, vars: 4, consts: [[1, "header", "mb-4", "mt-0", "mt-sm-4", "pt-4", "showWhenLoaded", 2, "display", "none"], ["header", ""], [1, "main-container"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "static-top"], ["routerLink", "/", 1, "navbar-brand"], ["alt", "J U P I T A", "width", "108", "height", "19", "src", "./../../../assets/images/Jupita.png", 1, "img-fluid"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "custom-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto", "hide-phone"], [1, "nav-item"], ["routerLink", "/docs", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/pricing", "routerLinkActive", "active", 1, "nav-link"], ["class", "nav-item", 4, "ngIf"], [1, "navbar-nav", "ml-auto", "show-phone"], ["data-toggle", "collapse", "data-target", "#navbarText", "routerLink", "/pricing", "routerLinkActive", "active", 1, "nav-link"], ["data-toggle", "collapse", "data-target", "#navbarText", "routerLink", "/docs", "routerLinkActive", "active", 1, "nav-link"], [1, "navbar", "d-flex", "justify-content-center", "mb-2", "mt-5", "pt-4", 2, "display", "none !important"], ["href", "#", 1, "navbar-brand"], ["routerLinkActive", "active", "routerLink", "/user", 1, "nav-link"], ["routerLink", "/sign-up", "routerLinkActive", "active", 1, "nav-link"], ["data-toggle", "collapse", "data-target", "#navbarText", "routerLinkActive", "active", "routerLink", "/user", 1, "nav-link"], ["data-toggle", "collapse", "data-target", "#navbarText", "h", "", "f", "#", "routerLink", "/sign-up", "routerLinkActive", "active", 1, "nav-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HeaderComponent_li_16_Template, 3, 0, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HeaderComponent_li_17_Template, 3, 0, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, HeaderComponent_li_25_Template, 3, 0, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HeaderComponent_li_26_Template, 3, 0, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "nav", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.logout);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.logout);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.logout);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.logout);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: [".header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  font-family: \"Montserrat-Regular\";\n}\n.header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: #C6C6C6;\n}\n.header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .custom-toggler[_ngcontent-%COMP%] {\n  border-color: transparent !important;\n}\n.header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\n  color: #C6C6C6;\n  fill: currentColor;\n}\n.header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 45px;\n  font-size: 17px;\n  margin-left: 15px;\n  line-height: 1.8;\n  letter-spacing: 1px;\n  font-family: \"Montserrat-Light\";\n}\n.header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #C6C6C6;\n  padding-right: 0;\n}\n.header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  font-family: \"Montserrat-SemiBold\";\n  font-weight: 600;\n  margin-right: 0;\n}\n@media screen and (max-width: 1024px) {\n  .header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n    padding-left: 15px !important;\n  }\n}\n@media screen and (max-width: 767px) {\n  .navbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n    outline: none !important;\n  }\n\n  .d-xs-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .dropdown-content[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n  .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.menu-dropdown[_ngcontent-%COMP%] {\n  float: left;\n  overflow: hidden;\n}\n.menu-dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n  background-color: inherit;\n  font-family: inherit;\n  cursor: pointer;\n}\n.dropdown-content[_ngcontent-%COMP%] {\n  border: 1px solid #cccccc30;\n  border-radius: 5%;\n  display: none;\n  position: absolute;\n  background-color: #181818;\n  z-index: 100;\n  margin-left: -200px;\n  padding: 10px;\n}\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: none;\n  color: black;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n  font-weight: 500 !important;\n}\n.navbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n.menu-dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n  transition: all 0.5s linear !important;\n}\n@media screen and (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n    outline: none !important;\n  }\n\n  .menu-dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%], .menu-dropdown[_ngcontent-%COMP%]:active   .dropdown-content[_ngcontent-%COMP%] {\n    display: block;\n    transition: all 0.5s linear !important;\n  }\n\n  .dropdown-content[_ngcontent-%COMP%] {\n    padding: 0;\n    margin-left: 2rem;\n    position: relative;\n    border: none;\n    text-align: right !important;\n  }\n  .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-align: right;\n    margin-right: 2rem;\n  }\n\n  .navbar-nav[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n}\n.navbar[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n.navbar-toggle[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n@media screen and (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    position: absolute !important;\n    width: 100%;\n    top: 8vh;\n    z-index: 5;\n    background-color: #181818;\n    text-align: right;\n  }\n\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    font-family: \"Montserrat-SemiBold\";\n    font-weight: 600;\n    margin-right: 45px !important;\n  }\n}\n@media screen and (width: 1024px) {\n  .dropdown-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .hide-phone[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.show-phone[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 1024px) {\n  .show-phone[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.submenu-alignment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-right: 1rem;\n}\n.show-phone[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  background-color: #181818;\n  border: 0;\n  text-align: right;\n}\n.showWhenLoaded[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcYXNzZXRzXFxzdHlsZXNoZWV0c1xcdmFyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLHdDQUFBO0VBQ0EsaUNDQ2dCO0FERnBCO0FBRUk7RUFDRSxjQ0lTO0FESmY7QUFFSTtFQUNFLG9DQUFBO0FBQU47QUFFSTtFQUNFLGNDRlM7RURHVCxrQkFBQTtBQUFOO0FBSU07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkNoQlk7QURjcEI7QUFHUTtFQUNFLGNDZks7RURnQkwsZ0JBQUE7QUFEVjtBQUVVO0VBQ0UsYUFBQTtBQUFaO0FBR1E7RUFDRSxrQ0MxQmE7RUQyQmIsZ0JDbkJNO0VEb0JOLGVBQUE7QUFEVjtBQVFBO0VBRUk7SUFDRSw2QkFBQTtFQU5KO0FBQ0Y7QUFVQTtFQUVJO0lBQ0Usd0JBQUE7RUFUSjs7RUFZQTtJQUNFLHdCQUFBO0VBVEY7O0VBWUE7SUFDRSx5QkFBQTtFQVRGO0VBVUU7SUFDRSxlQUFBO0VBUko7QUFDRjtBQVlBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBVkY7QUFhQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBVkY7QUFrQkE7RUFFRSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBaEJGO0FBbUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWhCRjtBQW1CQTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtBQWhCRjtBQW1CRTtFQUNFLHdCQUFBO0FBaEJKO0FBb0JBO0VBQ0UsY0FBQTtFQUNBLHNDQUFBO0FBakJGO0FBb0JBO0VBRUk7SUFDRSx3QkFBQTtFQWxCSjs7RUFxQkE7O0lBRUUsY0FBQTtJQUNBLHNDQUFBO0VBbEJGOztFQW9CQTtJQUNFLFVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLDRCQUFBO0VBakJGO0VBbUJFO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQWpCSjs7RUFvQkE7SUFDRSxpQkFBQTtFQWpCRjtBQUNGO0FBb0JBO0VBQ0Usa0JBQUE7QUFsQkY7QUFvQkE7RUFDRSxnQkFBQTtBQWpCRjtBQW9CQTtFQUNFO0lBQ0UsNkJBQUE7SUFDQSxXQUFBO0lBQ0EsUUFBQTtJQUNBLFVBQUE7SUFDQSx5QkFBQTtJQUNBLGlCQUFBO0VBakJGOztFQXFCSTtJQUNFLGtDQy9KZTtJRGdLZixnQkN4SlE7SUR5SlIsNkJBQUE7RUFsQk47QUFDRjtBQXVCQTtFQUNFO0lBQ0UsY0FBQTtFQXJCRjtBQUNGO0FBeUJFO0VBREY7SUFFSSx3QkFBQTtFQXRCRjtBQUNGO0FBeUJBO0VBQ0UsYUFBQTtBQXRCRjtBQXVCRTtFQUZGO0lBR0ksYUFBQTtFQXBCRjtBQUNGO0FBd0JFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBckJKO0FBeUJFO0VBQ0UseUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUF0Qko7QUEwQkE7RUFDRSxhQUFBO0FBdkJGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzaGVldHMvdmFyaWFibGUuc2Nzc1wiO1xyXG4uaGVhZGVyIHtcclxuICAubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJyYW5kO1xyXG4gICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIH1cclxuICAgIC5jdXN0b20tdG9nZ2xlciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbiAgICAgIC8vIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1saWdodDtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktc2VtaWJvbGQ7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogJGZvbnQtc2VtaWJvbGQ7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAuaGVhZGVyIHtcclxuICAgIC5uYXZiYXIge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRwaG9uZSkge1xyXG4gIC5uYXZiYXIge1xyXG4gICAgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZC14cy1ub25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBhIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1lbnUtZHJvcGRvd24ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tZW51LWRyb3Bkb3duIC5kcm9wYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy8gLm5hdmJhciBhOmhvdmVyLFxyXG4vLyAubWVudS1kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XHJcbi8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuLy8gfVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIC8vIGJhY2tncm91bmQ6IHVybCgnLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21lbnVfYnViYmxlLnN2ZycpIG5vLXJlcGVhdDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjMzA7XHJcbiAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICBmbG9hdDogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdmJhciB7XHJcbiAgYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5tZW51LWRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHRhYmxldC1taW4pIHtcclxuICAubmF2YmFyIHtcclxuICAgIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLm1lbnUtZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQsXHJcbiAgLm1lbnUtZHJvcGRvd246YWN0aXZlIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyB0cmFuc2l0aW9uOiBhbGwgMnMgbGluZWFyICFpbXBvcnRhbnQ7XHJcbiAgICBhIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgLm5hdmJhci1uYXYge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuLm5hdmJhci10b2dnbGUge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDh2aDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIHVsIHtcclxuICAgIGxpIHtcclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXNlbWlib2xkO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC1zZW1pYm9sZDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQ1cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKHdpZHRoOiAkdGFibGV0LW1heCkge1xyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmhpZGUtcGhvbmUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQtbWF4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc2hvdy1waG9uZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkdGFibGV0LW1heCkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbn1cclxuXHJcbi5zdWJtZW51LWFsaWdubWVudCB7XHJcbiAgYSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG59XHJcbi5zaG93LXBob25lIHtcclxuICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc2hvd1doZW5Mb2FkZWR7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufSIsIiRtb250c2VycmF0LXJlZ3VsYXJ0dGYtZm9udC1wYXRoOiBcImFzc2V0cy9mb250cy9Nb250c2VycmF0LVJlZ3VsYXIudHRmXCI7XHJcbiRtb250c2VycmF0LXNlbWlib2xkdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvTW9udHNlcnJhdC1TZW1pQm9sZC50dGZcIjtcclxuJG1vbnRzZXJyYXQtbGlnaHQtdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvTW9udHNlcnJhdC1MaWdodC50dGZcIjtcclxuJHBvcHBpbnMtbGlnaHQtdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvUG9wcGlucy1MaWdodC50dGZcIjtcclxuJHBvcHBpbnMtcmVndWxhci10dGYtZm9udC1wYXRoOiBcImFzc2V0cy9mb250cy9Qb3BwaW5zLXJlZ3VsYXIudHRmXCI7XHJcbiRmb250LWZhbWlseS1icmFuZDogJ01vbnRzZXJyYXQtUmVndWxhcic7XHJcbiRmb250LWZhbWlseS1zZW1pYm9sZDogJ01vbnRzZXJyYXQtU2VtaUJvbGQnO1xyXG4kZm9udC1mYW1pbHktbGlnaHQ6ICdNb250c2VycmF0LUxpZ2h0JztcclxuJGZvbnQtZmFtaWx5LXBvcHBpbnM6J1BvcHBpbnMtTGlnaHQnO1xyXG4kZm9udC1mYW1pbHktcG9wcGlucy1yZWd1bGFyOidQb3BwaW5zLVJlZ3VsYXInO1xyXG4kcHJpbWFyeS1jb2xvcjojQzZDNkM2O1xyXG4kbGluay10ZXh0LXByaW1hcnk6I0M2QzZDNjtcclxuJHByaW1hcnktZm9udC1jb2xvcjojMTgxODE4O1xyXG4vLyAgJGZvbnQtcmVndWxhcjonTW9udHNlcnJhdC1SZWd1bGFyJztcclxuJGZvbnQtc2VtaWJvbGQ6IDYwMDtcclxuJGZvbnQtbGlnaHQ6MzAwO1xyXG4vLyBSZXNwb25zaXZlIHNjcmVlbiBkZWNsYXJhdGlvblxyXG4kc21hbGwtcGhvbmVzOiAzNjBweDtcclxuJHBob25lOiA3NjdweDtcclxuJHRhYmxldC1taW46NzY4cHg7XHJcbiR0YWJsZXQtbWF4OjEwMjRweDtcclxuJHRvdGFsOiAzNTA7IC8vIHRvdGFsIHBhcnRpY2xlc1xyXG4kb3JiLXNpemU6IDEwMHB4O1xyXG4kcGFydGljbGUtc2l6ZTogMnB4O1xyXG4kdGltZTogMzBzO1xyXG4kYmFzZS1odWU6IDA7IC8vIGNoYW5nZSBmb3IgZGlmZiBjb2xvcnMgKDE4MCBpcyBuaWNlKVxyXG5cclxuLy8gTm90ZTogdGhlc2UgYnJlYWtpbmcgcG9pbnRzIGRvZXMgc2VlbSBtaXNsZWFkaW5nIGFuZCBub3QgYWxpbmdlZCB3aXRoIGJvb3RzdHJhcCBicmVha2luZyBwb2ludHMgXHJcbi8vIEJyZWFrcG9pbnRzXHJcbiRicC1zbWFsbDogNDhlbTsgLy8gNzY4cHhcclxuJGJwLW1lZGl1bTogMTQ0MHB4OyAvLyAxMDI0cHggXHJcbiRicC1sYXJnZTogMTkyMHB4OyAvLyA4NS4zNzVlbSAxMzY2cHhcclxuJGJwLXhsYXJnZTogMjA0OHB4OyAvLyAxMjBlbSAxOTIwcHhcclxuJGJwLXh4bGFyZ2U6IDM4NDBweDsgLy8gMTYwZW0gMjU2MHB4XHJcbi8vIE1lZGlhIFF1ZXJpZXNcclxuJG1xLXNtYWxsOiBcIihtaW4td2lkdGg6ICN7JGJwLXNtYWxsfSlcIjtcclxuJG1xLW1lZGl1bTogXCIobWluLXdpZHRoOiAjeyRicC1tZWRpdW19KVwiO1xyXG4kbXEtbGFyZ2U6IFwiKG1pbi13aWR0aDogI3skYnAtbGFyZ2V9KVwiO1xyXG4kbXEteGxhcmdlOiBcIihtaW4td2lkdGg6ICN7JGJwLXhsYXJnZX0pXCI7XHJcbiRtcS14eGxhcmdlOiBcIihtaW4td2lkdGg6ICN7JGJwLXh4bGFyZ2V9KVwiO1xyXG4kbXEtcmV0aW5hOiBcIigtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSlcIjsiXX0= */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _animation_globe_globe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation/globe/globe.component */ 2827);




const _c0 = ["parent"];
class HomeComponent {
    constructor(router) {
        this.router = router;
        this.loading = false;
        this.globeInitial = 0;
        const body = document.body;
        const script = document.createElement('script');
        script.innerHTML = '';
        script.src = '../assets/js/sphere.js';
        script.async = false;
        script.defer = true;
        body.appendChild(script);
    }
    redirectToSignUP() {
        this.router.navigate(['/sign-up']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.target = _t.first);
    } }, decls: 152, vars: 0, consts: [[1, "main-container", "pt-md-5", "pr-0", "pr-md-3"], [1, "banner-section", "vh-80", "d-flex", "align-items-center", "w-100", "overflow-x-hidden"], [1, "col-sm-8", "col-md-9", "col-lg-8", "mobile-push"], [1, "mb-5", "font-weight300", "font-poppinsL"], [1, "banner-section-break1"], [1, "header-break", "banner-section-break1"], [1, "mb-2", "pt-3", "mr-lg-5"], ["type", "button", "routerLink", "/sign-up", 1, "custom-btn", "btn-light", "btn-md", "btn-block", "primary-button", "mt-5", "w-200", "h-56", "rounded-pill", 3, "click"], [1, "sphere-container", "sphere-up-alignment"], [1, "sphere-wrapper"], [1, "particle-sphere", "custom-particle-sphere"], [1, "section-dep"], [1, "article-background"], [1, "main-container"], [1, "row", "flex-column", "no-gutters"], [1, "col-md-6", "ml-md-auto", "mb-7", "px-4"], [1, "panel-header"], [1, "panel-content-details"], [1, "col-md-6", "mb-7", "px-4"], [1, "panel-header", "mt-6"], [1, "row"], [1, "panel-second", "mb-9", "mt-5", "pt-md-6", "pl-3", "pr-3"], [1, "col-lg-12"], [1, "mb-2", "text-center", "text-break-panel"], [1, "col-md-4"], [1, "text-center", "mb-1", "mb-md-4", "mdb-lg-4", "mb-xl-4"], ["src", "assets/icons/home/key.svg", "width", "175", "height", "175", "alt", "Keys", 1, "img-fluid"], [1, "text-center"], ["src", "assets/icons/home/docs.svg", "width", "175", "height", "175", "alt", "Docs", 1, "img-fluid"], ["src", "assets/icons/home/analytics.svg", "width", "175", "height", "175", "alt", "Analytics", 1, "img-fluid"], [1, "section-dep-background"], [1, "panel-second-break"], [1, "col-md-12", "social-icons", "text-center"], ["src", "../../assets/icons/product_icon/jupita.svg", "alt", ""], [1, "icon-container"], [1, "section-icon-background"], [1, "mb-2", "text-center"], [1, "panel-second-break1"], ["src", "../../assets/images/social.svg", "width", "175", "height", "175", "alt", "Keys", 1, "img-fluid"], ["src", "../../assets/images/power.svg", "width", "175", "height", "175", "alt", "Docs", 1, "img-fluid"], ["src", "../../assets/images/boost.svg", "width", "175", "height", "175", "alt", "Analytics", 1, "img-fluid"], [1, "globe-section", "overflow-hidden", "position-relative"], [1, "row", "no-gutters"], [1, "col-md-4", "offset-md-1", "content", "px-4"], [1, "mb-7"], [1, "nowrap"], [1, "globe-area", "globe-wrap"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Discover ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Touchpoint Analytics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Convert any touchpoint into a qualitative analytics data source in minutes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_10_listener() { return ctx.redirectToSignUP(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Get Started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "On Tap Data 24/7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Jupita deploys sentiment intelligence across any communications channel using next generation deep learning AI. Realise the potential and unlock the value of your communications touchpoints. Evolve your decision making & drive growth through data empowerment all in real time. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Interaction Analytics At A Glance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Communications are the vital component of any organisations data-driven mindset. Jupita ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "creates");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " data from any touchpoint giving your organisation the information it needs to make decisions that really matter at scale. Uncover and start visualising touchpoint analytics in minutes with multi-channel threaded analysis providing endless streams of qualitative data with clear insights. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Go From Reactive To Proactive With ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Real-Time Touchpoint Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Get started for free and access your API key instantly, no credit card required. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Integrate Jupita into any application in minutes with our single API SDK. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Start harnessing the power of Jupita straight away with 5,000 free API requests every month. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Analytics With Every Utterance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Capture vital data at all levels with every utterance from any communications channel that speaks plainly. Discover one-click attribution and make customer feedback surveys obsolete - all with a single API . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Intelligence Beyond Sentiment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "When you need more than just sentiment analysis Jupita is fluent in natural language, context, reputation & more. Introduce sentiment intelligence into your organisation in minutes with Jupita. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Move Forward With Turnkey Products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Jupita blends seamlessly with your organisations communications channels to be everywhere you can't at all times. Add your organisations touchpoints to your existing data mindset & become truly data-driven. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Jupita Deploys Wherever ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "br", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, " You Communicate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "h3", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Discover Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "br", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, " You Never Knew ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Jupita integrates wherever & however you communicate. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Lightening fast API latency for real-time analytics, even with voice calls. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Get started & deploy Jupita in minutes, no sales demo required! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "20k+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "API requests per day");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "10m+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Words processed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "99.99%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "SLA uptime");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "app-globe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _animation_globe_globe_component__WEBPACK_IMPORTED_MODULE_0__.GlobeComponent], styles: [".main-container[_ngcontent-%COMP%] {\n  font-family: \"Poppins-Light\";\n}\n\n.vh-80[_ngcontent-%COMP%] {\n  min-height: 80vh;\n}\n\n.banner-section[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.banner-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 4.5rem;\n}\n\n.banner-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  line-height: 1.3;\n}\n\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.subscribe-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  line-height: 1.4;\n}\n\n.Globe[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n\n.Globe[_ngcontent-%COMP%], .Globe[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  right: 0px;\n  top: 0;\n}\n\n.custom-particle-sphere[_ngcontent-%COMP%] {\n  top: 45%;\n  left: 68%;\n}\n\n.article-background[_ngcontent-%COMP%] {\n  margin: 66px 0;\n  background: url('home_background.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  pointer-events: none;\n  background-position: center;\n  background-position-y: -30%;\n}\n\n@media screen and (min-width: 1024px) {\n  .article-background[_ngcontent-%COMP%] {\n    background-position-y: -15%;\n  }\n}\n\n@media screen and (min-width: 1281px) {\n  .article-background[_ngcontent-%COMP%] {\n    background-position-y: 5%;\n  }\n}\n\n.section-icon-background[_ngcontent-%COMP%] {\n  margin: -190px 0;\n  background: url('Products_background_bottom.png');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  background-position: cover;\n  background-position-x: 100%;\n  background-position-y: 100%;\n  height: 85%;\n  width: 100%;\n  position: absolute;\n  pointer-events: none;\n  background-position: center;\n  background-position-y: -30%;\n}\n\n@media screen and (min-width: 768px) and (max-width: 1024px) {\n  .section-icon-background[_ngcontent-%COMP%] {\n    margin: -110px 0;\n    background: url('Products_background_bottom.png');\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    background-position: cover;\n    background-position-x: 100%;\n    background-position-y: 100%;\n    height: 45%;\n    width: 100%;\n    position: absolute;\n    pointer-events: none;\n    background-position: center;\n    background-position-y: -30%;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .section-icon-background[_ngcontent-%COMP%] {\n    margin: 0px 0;\n    background: url('Products_background_bottom.png');\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    background-position: cover;\n    background-position-x: 100%;\n    background-position-y: 100%;\n    height: 164%;\n    width: 100%;\n    position: absolute;\n    pointer-events: none;\n    background-position: center;\n    background-position-y: -30%;\n  }\n}\n\n.section-dep-background[_ngcontent-%COMP%] {\n  margin: 66px 0;\n  background: url('Products_background_top.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  pointer-events: none;\n  background-position: center;\n  background-position-y: -30%;\n}\n\n@media screen and (min-width: 1024px) {\n  .section-dep-background[_ngcontent-%COMP%] {\n    background-position-y: -15%;\n  }\n}\n\n@media screen and (min-width: 1281px) {\n  .section-dep-background[_ngcontent-%COMP%] {\n    background-position-y: 5%;\n  }\n}\n\n.nowrap[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  white-space: nowrap;\n}\n\nbr[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.header-break[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.subscribe-section-break1[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n@media screen and (max-width: 767px) {\n  .vh-80[_ngcontent-%COMP%] {\n    min-height: 50vh;\n  }\n\n  .overflow-x-hidden[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n  }\n\n  .banner-section-break1[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .subscribe-section-break[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .subscribe-section-break1[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .subscribe-section-break2[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .banner-section[_ngcontent-%COMP%] {\n    padding-top: 0 !important;\n  }\n  .banner-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .banner-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.1rem !important;\n    line-height: 1.5 !important;\n  }\n\n  .panel-first[_ngcontent-%COMP%], .panel-second[_ngcontent-%COMP%], .panel-third[_ngcontent-%COMP%], .panel-fifth[_ngcontent-%COMP%] {\n    margin-top: 35px !important;\n    margin-bottom: 40px !important;\n    padding-top: 0 !important;\n  }\n\n  .panel-first[_ngcontent-%COMP%]   .article-box[_ngcontent-%COMP%]   .article-col[_ngcontent-%COMP%], .panel-third[_ngcontent-%COMP%]   .article-box[_ngcontent-%COMP%]   .article-col[_ngcontent-%COMP%] {\n    padding-right: 0px !important;\n    padding-left: 0px !important;\n    margin-bottom: 20px;\n  }\n\n  .panel-third[_ngcontent-%COMP%] {\n    margin-top: 0 !important;\n  }\n\n  .panel-first[_ngcontent-%COMP%], .panel-third[_ngcontent-%COMP%] {\n    padding-top: 2% !important;\n  }\n  .panel-first[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%], .panel-third[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n    padding-bottom: 25px;\n  }\n\n  .panel-second[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n@media screen and (max-width: 767px) and (max-width: 767px) {\n  .panel-second[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n    padding-bottom: 0;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .panel-second[_ngcontent-%COMP%]   .article-section[_ngcontent-%COMP%]   .ar-col[_ngcontent-%COMP%] {\n    padding-right: 0px !important;\n    padding-left: 0px !important;\n    text-align: center;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .responsive-margin-top[_ngcontent-%COMP%] {\n    margin-top: 14rem;\n    z-index: 1111;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .mt-6[_ngcontent-%COMP%] {\n    margin-top: 1rem !important;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .custom-btn[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 150px !important;\n    height: 40px !important;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .panel-second-break[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .panel-second-break1[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .sphere-container[_ngcontent-%COMP%]   .sphere-wrapper[_ngcontent-%COMP%], app-sphere[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 100%;\n    bottom: 65px;\n    right: -79px;\n  }\n}\n\n@media screen and (min-width: 3840px) {\n  .article-background[_ngcontent-%COMP%] {\n    -webkit-background-position-y: 0;\n    -moz-background-position-y: 0;\n    -o-background-position-y: 0;\n    background-position-y: 0;\n  }\n}\n\n@media screen and (width: 768px) {\n  .custom-particle-sphere[_ngcontent-%COMP%] {\n    top: 35%;\n    left: 65%;\n  }\n\n  .mt-6[_ngcontent-%COMP%] {\n    margin-top: 0 !important;\n  }\n\n  .responsive-margin-top[_ngcontent-%COMP%] {\n    margin-top: 17rem !important;\n  }\n\n  .panel-second-break[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n\n@media screen and (width: 1024px) {\n  .mb-9[_ngcontent-%COMP%] {\n    margin-bottom: 5rem !important;\n  }\n\n  .mt-6[_ngcontent-%COMP%] {\n    margin-top: 0 !important;\n  }\n\n  .responsive-margin-top[_ngcontent-%COMP%] {\n    margin-top: 17rem !important;\n  }\n\n  .article-background[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important;\n  }\n}\n\n@media screen and (max-width: 360px) {\n  .banner-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.9em !important;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 1.1rem !important;\n  }\n}\n\n@media screen and (min-width: 768px) and (max-width: 1024px) {\n  .banner-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 4rem !important;\n  }\n\n  .vh-80[_ngcontent-%COMP%] {\n    min-height: 50vh !important;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 1.7rem !important;\n  }\n}\n\n.sphere-up-alignment[_ngcontent-%COMP%] {\n  top: -27px;\n}\n\n@media screen and (min-width: 768px) and (max-width: 1024px) {\n  .sphere-up-alignment[_ngcontent-%COMP%] {\n    top: -76px;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .mobile-push[_ngcontent-%COMP%] {\n    margin-top: 1rem !important;\n  }\n\n  .custom-particle-sphere[_ngcontent-%COMP%] {\n    top: 52%;\n    left: 84%;\n  }\n\n  .sphere-container[_ngcontent-%COMP%]   .sphere-wrapper[_ngcontent-%COMP%] {\n    width: 228%;\n  }\n}\n\n.globe-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n\n.globe-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n\n.globe-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  line-height: 1.5;\n}\n\n@media screen and (max-width: 767px) {\n  .globe-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .globe-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    line-height: 1.3;\n  }\n}\n\n@media screen and (min-width: 1075px) {\n  .globe-section[_ngcontent-%COMP%] {\n    margin-top: 3.5rem !important;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .globe-section[_ngcontent-%COMP%] {\n    margin-top: 3.5rem !important;\n  }\n}\n\n@media screen and (min-width: 768px) and (max-width: 1074px) {\n  .globe-section[_ngcontent-%COMP%] {\n    margin-top: -2rem !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .globe-section[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n    height: 884px;\n  }\n  .globe-section[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    height: 100%;\n    align-items: center;\n  }\n}\n\n@media (max-width: 767px) {\n  .globe-section[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n    padding-top: 130px;\n    padding-bottom: 100px;\n  }\n}\n\n.globe-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n@media (max-width: 767px) {\n  .globe-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n\n.section-dep[_ngcontent-%COMP%] {\n  margin: 65px 0;\n}\n\n.section-dep[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  padding-bottom: 25px;\n}\n\n@media (max-width: 767px) {\n  .section-dep[_ngcontent-%COMP%] {\n    margin: 0;\n    padding-top: 90px;\n  }\n}\n\n.globe-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100% !important;\n  height: 120% !important;\n  left: 5%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-self: center;\n  align-content: center;\n}\n\n@media screen and (min-width: 768px) and (max-width: 1024px) {\n  .globe-wrap[_ngcontent-%COMP%] {\n    left: 9% !important;\n  }\n\n  .social-icons[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 100% !important;\n    height: 25vh;\n    text-align: center;\n  }\n  .social-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 65% !important;\n    height: 100% !important;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .globe-wrap[_ngcontent-%COMP%] {\n    height: 190% !important;\n  }\n\n  .mobile-push[_ngcontent-%COMP%] {\n    padding-left: 7px;\n  }\n\n  .social-icons[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 100% !important;\n    height: 20vh;\n    text-align: center;\n  }\n  .social-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100% !important;\n    height: 25vh !important;\n  }\n\n  .text-break-panel[_ngcontent-%COMP%] {\n    display: inline !important;\n    text-align: justify;\n  }\n}\n\n.social-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXGFzc2V0c1xcc3R5bGVzaGVldHNcXHZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw0QkNNbUI7QUROckI7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFDRTtFQUNFLGlCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFJRTtFQUNFLGVBQUE7QUFESjs7QUFNRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFPQTtFQUNFLGtDQUFBO0FBSkY7O0FBT0E7O0VBRUUsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0FBSkY7O0FBT0E7RUFDRSxRQUFBO0VBQ0EsU0FBQTtBQUpGOztBQU9BO0VBQ0UsY0FBQTtFQUNBLHNDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QUFKRjs7QUFLRTtFQVhGO0lBWUksMkJBQUE7RUFGRjtBQUNGOztBQUdFO0VBZEY7SUFlSSx5QkFBQTtFQUFGO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGlEQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFBRTtFQWRGO0lBZUksZ0JBQUE7SUFDQSxpREFBQTtJQUNBLDRCQUFBO0lBQ0EsMEJBQUE7SUFDQSwwQkFBQTtJQUNBLDJCQUFBO0lBQ0EsMkJBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7SUFDQSwyQkFBQTtJQUNBLDJCQUFBO0VBR0Y7QUFD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QUNFLHNCQUFBO0lBQ0EsdUJBQUE7RUFvREo7O0VBakRBO0lBQ0UsMEJBQUE7SUFDQSxtQkFBQTtFQW9ERjtBQUNGOztBQTdDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBK0NKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3N0eWxlc2hlZXRzL3ZhcmlhYmxlLnNjc3NcIjtcclxuLm1haW4tY29udGFpbmVyIHtcclxuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXBvcHBpbnM7XHJcbn1cclxuXHJcbi52aC04MCB7XHJcbiAgbWluLWhlaWdodDogODB2aDtcclxufVxyXG5cclxuLmJhbm5lci1zZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA0LjVyZW07XHJcbiAgfVxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFuZWwtaGVhZGVyIHtcclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uc3Vic2NyaWJlLXNlY3Rpb24ge1xyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICB9XHJcbn1cclxuXHJcbi5HbG9iZSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLkdsb2JlLFxyXG4uR2xvYmUgY2FudmFzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4uY3VzdG9tLXBhcnRpY2xlLXNwaGVyZSB7XHJcbiAgdG9wOiA0NSU7XHJcbiAgbGVmdDogNjglO1xyXG59XHJcblxyXG4uYXJ0aWNsZS1iYWNrZ3JvdW5kIHtcclxuICBtYXJnaW46IDY2cHggMDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWVfYmFja2dyb3VuZC5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTMwJTtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogLTE1JTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MXB4KSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUlO1xyXG4gIH1cclxufVxyXG4uc2VjdGlvbi1pY29uLWJhY2tncm91bmQge1xyXG4gIG1hcmdpbjogLTE5MHB4IDA7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9Qcm9kdWN0c19iYWNrZ3JvdW5kX2JvdHRvbS5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMDAlO1xyXG4gIGhlaWdodDogODUlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMzAlO1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBtYXJnaW46IC0xMTBweCAwO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9Qcm9kdWN0c19iYWNrZ3JvdW5kX2JvdHRvbS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMTAwJTtcclxuICAgIGhlaWdodDogNDUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogLTMwJTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIG1hcmdpbjogMHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL1Byb2R1Y3RzX2JhY2tncm91bmRfYm90dG9tLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNjQlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogLTMwJTtcclxuICB9XHJcbn1cclxuLnNlY3Rpb24tZGVwLWJhY2tncm91bmQge1xyXG4gIG1hcmdpbjogNjZweCAwO1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvUHJvZHVjdHNfYmFja2dyb3VuZF90b3AucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0zMCU7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0xNSU7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODFweCkge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1JTtcclxuICB9XHJcbn1cclxuLm5vd3JhcCB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuYnIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmhlYWRlci1icmVhayB7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1YnNjcmliZS1zZWN0aW9uLWJyZWFrMSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkcGhvbmUpIHtcclxuICAudmgtODAge1xyXG4gICAgbWluLWhlaWdodDogNTB2aDtcclxuICB9XHJcbiAgLm92ZXJmbG93LXgtaGlkZGVuIHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB9XHJcbiAgLmJhbm5lci1zZWN0aW9uLWJyZWFrMSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgfVxyXG4gIC5zdWJzY3JpYmUtc2VjdGlvbi1icmVhayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgfVxyXG4gIC5zdWJzY3JpYmUtc2VjdGlvbi1icmVhazEge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnN1YnNjcmliZS1zZWN0aW9uLWJyZWFrMiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgfVxyXG4gIC5iYW5uZXItc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgLy8gZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICB9XHJcbiAgICBoNCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLnBhbmVsLWZpcnN0LFxyXG4gIC5wYW5lbC1zZWNvbmQsXHJcbiAgLnBhbmVsLXRoaXJkLFxyXG4gIC5wYW5lbC1maWZ0aCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucGFuZWwtZmlyc3QsXHJcbiAgLnBhbmVsLXRoaXJkIHtcclxuICAgIC5hcnRpY2xlLWJveCB7XHJcbiAgICAgIC5hcnRpY2xlLWNvbCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wYW5lbC10aGlyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wYW5lbC1maXJzdCxcclxuICAucGFuZWwtdGhpcmQge1xyXG4gICAgcGFkZGluZy10b3A6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICAucGFuZWwtaGVhZGVyIHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wYW5lbC1zZWNvbmQge1xyXG4gICAgLnBhbmVsLWhlYWRlciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5hcnRpY2xlLXNlY3Rpb24ge1xyXG4gICAgICAuYXItY29sIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucmVzcG9uc2l2ZS1tYXJnaW4tdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDE0cmVtO1xyXG4gICAgei1pbmRleDogMTExMTtcclxuICB9XHJcbiAgLm10LTYge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY3VzdG9tLWJ0biB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucGFuZWwtaGVhZGVyIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gIH1cclxuICAucGFuZWwtc2Vjb25kLWJyZWFrIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICB9XHJcbiAgLnBhbmVsLXNlY29uZC1icmVhazEge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuICAuc3BoZXJlLWNvbnRhaW5lciAuc3BoZXJlLXdyYXBwZXIsXHJcbiAgYXBwLXNwaGVyZSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm90dG9tOiA2NXB4O1xyXG4gICAgcmlnaHQ6IC03OXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgI3skbXEteHhsYXJnZX0ge1xyXG4gIC5hcnRpY2xlLWJhY2tncm91bmQge1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDA7XHJcbiAgICAtbW96LWJhY2tncm91bmQtcG9zaXRpb24teTogMDtcclxuICAgIC1vLWJhY2tncm91bmQtcG9zaXRpb24teTogMDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aDogJHRhYmxldC1taW4pIHtcclxuICAuY3VzdG9tLXBhcnRpY2xlLXNwaGVyZSB7XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIGxlZnQ6IDY1JTtcclxuICB9XHJcbiAgLm10LTYge1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucmVzcG9uc2l2ZS1tYXJnaW4tdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDE3cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wYW5lbC1zZWNvbmQtYnJlYWsge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKHdpZHRoOiAkdGFibGV0LW1heCkge1xyXG4gIC5tYi05IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm10LTYge1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucmVzcG9uc2l2ZS1tYXJnaW4tdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDE3cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hcnRpY2xlLWJhY2tncm91bmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsLXBob25lcykge1xyXG4gIC5iYW5uZXItc2VjdGlvbiBoMSB7XHJcbiAgICBmb250LXNpemU6IDEuOWVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkdGFibGV0LW1pbikgYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQtbWF4KSB7XHJcbiAgLmJhbm5lci1zZWN0aW9uIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNHJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudmgtODAge1xyXG4gICAgbWluLWhlaWdodDogNTB2aCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDEuN3JlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gc2FnYXIgICgwNS0wNi0yMDIxKVxyXG4uc3BoZXJlLXVwLWFsaWdubWVudCB7XHJcbiAgdG9wOiAtMjdweDtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkdGFibGV0LW1pbikgYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQtbWF4KSB7XHJcbiAgICB0b3A6IC03NnB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tb2JpbGUtcHVzaCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jdXN0b20tcGFydGljbGUtc3BoZXJlIHtcclxuICAgIHRvcDogNTIlO1xyXG4gICAgbGVmdDogODQlO1xyXG4gIH1cclxuICAuc3BoZXJlLWNvbnRhaW5lciB7XHJcbiAgICAuc3BoZXJlLXdyYXBwZXIge1xyXG4gICAgICB3aWR0aDogMjI4JTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5nbG9iZS1zZWN0aW9uIHtcclxuICAuY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgaDUge1xyXG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRwaG9uZSkge1xyXG4gICAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA3NXB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzLjVyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDMuNXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwNzRweCkge1xyXG4gICAgbWFyZ2luLXRvcDogLTJyZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgaGVpZ2h0OiA4ODRweDtcclxuICAgICAgLnJvdyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTMwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnJvdyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uLWRlcCB7XHJcbiAgbWFyZ2luOiA2NXB4IDA7XHJcbiAgLnBhbmVsLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogOTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5nbG9iZS13cmFwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEyMCUgIWltcG9ydGFudDtcclxuICBsZWZ0OiA1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5nbG9iZS13cmFwIHtcclxuICAgIGxlZnQ6IDklICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zb2NpYWwtaWNvbnMge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMjV2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA2NSUgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmdsb2JlLXdyYXAge1xyXG4gICAgaGVpZ2h0OiAxOTAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tb2JpbGUtcHVzaCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICB9XHJcbiAgLnNvY2lhbC1pY29ucyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAyNXZoICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50ZXh0LWJyZWFrLXBhbmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB9XHJcbiAgLy8gLnNlY3Rpb24tZGVwIHtcclxuICAvLyAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAvLyB9XHJcbn1cclxuLnNvY2lhbC1pY29ucyB7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gIH1cclxufSIsIiRtb250c2VycmF0LXJlZ3VsYXJ0dGYtZm9udC1wYXRoOiBcImFzc2V0cy9mb250cy9Nb250c2VycmF0LVJlZ3VsYXIudHRmXCI7XHJcbiRtb250c2VycmF0LXNlbWlib2xkdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvTW9udHNlcnJhdC1TZW1pQm9sZC50dGZcIjtcclxuJG1vbnRzZXJyYXQtbGlnaHQtdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvTW9udHNlcnJhdC1MaWdodC50dGZcIjtcclxuJHBvcHBpbnMtbGlnaHQtdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvUG9wcGlucy1MaWdodC50dGZcIjtcclxuJHBvcHBpbnMtcmVndWxhci10dGYtZm9udC1wYXRoOiBcImFzc2V0cy9mb250cy9Qb3BwaW5zLXJlZ3VsYXIudHRmXCI7XHJcbiRmb250LWZhbWlseS1icmFuZDogJ01vbnRzZXJyYXQtUmVndWxhcic7XHJcbiRmb250LWZhbWlseS1zZW1pYm9sZDogJ01vbnRzZXJyYXQtU2VtaUJvbGQnO1xyXG4kZm9udC1mYW1pbHktbGlnaHQ6ICdNb250c2VycmF0LUxpZ2h0JztcclxuJGZvbnQtZmFtaWx5LXBvcHBpbnM6J1BvcHBpbnMtTGlnaHQnO1xyXG4kZm9udC1mYW1pbHktcG9wcGlucy1yZWd1bGFyOidQb3BwaW5zLVJlZ3VsYXInO1xyXG4kcHJpbWFyeS1jb2xvcjojQzZDNkM2O1xyXG4kbGluay10ZXh0LXByaW1hcnk6I0M2QzZDNjtcclxuJHByaW1hcnktZm9udC1jb2xvcjojMTgxODE4O1xyXG4vLyAgJGZvbnQtcmVndWxhcjonTW9udHNlcnJhdC1SZWd1bGFyJztcclxuJGZvbnQtc2VtaWJvbGQ6IDYwMDtcclxuJGZvbnQtbGlnaHQ6MzAwO1xyXG4vLyBSZXNwb25zaXZlIHNjcmVlbiBkZWNsYXJhdGlvblxyXG4kc21hbGwtcGhvbmVzOiAzNjBweDtcclxuJHBob25lOiA3NjdweDtcclxuJHRhYmxldC1taW46NzY4cHg7XHJcbiR0YWJsZXQtbWF4OjEwMjRweDtcclxuJHRvdGFsOiAzNTA7IC8vIHRvdGFsIHBhcnRpY2xlc1xyXG4kb3JiLXNpemU6IDEwMHB4O1xyXG4kcGFydGljbGUtc2l6ZTogMnB4O1xyXG4kdGltZTogMzBzO1xyXG4kYmFzZS1odWU6IDA7IC8vIGNoYW5nZSBmb3IgZGlmZiBjb2xvcnMgKDE4MCBpcyBuaWNlKVxyXG5cclxuLy8gTm90ZTogdGhlc2UgYnJlYWtpbmcgcG9pbnRzIGRvZXMgc2VlbSBtaXNsZWFkaW5nIGFuZCBub3QgYWxpbmdlZCB3aXRoIGJvb3RzdHJhcCBicmVha2luZyBwb2ludHMgXHJcbi8vIEJyZWFrcG9pbnRzXHJcbiRicC1zbWFsbDogNDhlbTsgLy8gNzY4cHhcclxuJGJwLW1lZGl1bTogMTQ0MHB4OyAvLyAxMDI0cHggXHJcbiRicC1sYXJnZTogMTkyMHB4OyAvLyA4NS4zNzVlbSAxMzY2cHhcclxuJGJwLXhsYXJnZTogMjA0OHB4OyAvLyAxMjBlbSAxOTIwcHhcclxuJGJwLXh4bGFyZ2U6IDM4NDBweDsgLy8gMTYwZW0gMjU2MHB4XHJcbi8vIE1lZGlhIFF1ZXJpZXNcclxuJG1xLXNtYWxsOiBcIihtaW4td2lkdGg6ICN7JGJwLXNtYWxsfSlcIjtcclxuJG1xLW1lZGl1bTogXCIobWluLXdpZHRoOiAjeyRicC1tZWRpdW19KVwiO1xyXG4kbXEtbGFyZ2U6IFwiKG1pbi13aWR0aDogI3skYnAtbGFyZ2V9KVwiO1xyXG4kbXEteGxhcmdlOiBcIihtaW4td2lkdGg6ICN7JGJwLXhsYXJnZX0pXCI7XHJcbiRtcS14eGxhcmdlOiBcIihtaW4td2lkdGg6ICN7JGJwLXh4bGFyZ2V9KVwiO1xyXG4kbXEtcmV0aW5hOiBcIigtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSlcIjsiXX0= */"] });


/***/ }),

/***/ 1150:
/*!****************************************************!*\
  !*** ./src/app/interceptors/header.interceptor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthHeaderInterceptor": () => (/* binding */ AuthHeaderInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 4945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ 892);





class AuthHeaderInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const user = JSON.parse(localStorage.getItem("user"));
        //this.authService.userValue;
        const isPublicPage = req.url.indexOf('dontkick');
        if (!user || req.url.indexOf('auth/login') > -1 || req.url.indexOf('auth/registerUser') > -1) {
            return next.handle(req);
        }
        else {
            const clonedRequest = req.clone({
                headers: req
                    .headers
                    .set('Authorization', user.access_token ? `Bearer ${user.access_token}` : '')
            });
            return next.handle(clonedRequest)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                let errorMessage = '';
                if (error.error instanceof ErrorEvent) {
                    // input-side error
                    errorMessage = `Error: ${error.error.message}`;
                }
                else {
                    // server-side error
                    //errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                    if (error.status == 401) {
                        localStorage.removeItem("user");
                        if (isPublicPage < 0 && !user.user_type) {
                            window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "/sign-in";
                        }
                        else if (isPublicPage < 0 && user.user_type == "admin") {
                            window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "/admin-login";
                        }
                        //this.router.navigate(['/sign-in'])
                    }
                }
                //window.alert(errorMessage);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
                //return ;
            }));
        }
    }
}
AuthHeaderInterceptor.ɵfac = function AuthHeaderInterceptor_Factory(t) { return new (t || AuthHeaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
AuthHeaderInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthHeaderInterceptor, factory: AuthHeaderInterceptor.ɵfac });


/***/ }),

/***/ 5163:
/*!********************************************************************!*\
  !*** ./src/app/layouts/default-layout/default-layout.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultLayoutComponent": () => (/* binding */ DefaultLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class DefaultLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
DefaultLayoutComponent.ɵfac = function DefaultLayoutComponent_Factory(t) { return new (t || DefaultLayoutComponent)(); };
DefaultLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultLayoutComponent, selectors: [["app-default-layout"]], decls: 1, vars: 0, template: function DefaultLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWZhdWx0LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3962:
/*!**************************************************************************!*\
  !*** ./src/app/layouts/navigation-layout/navigation-layout.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationLayoutComponent": () => (/* binding */ NavigationLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../header/header.component */ 3482);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../footer/footer.component */ 970);




class NavigationLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavigationLayoutComponent.ɵfac = function NavigationLayoutComponent_Factory(t) { return new (t || NavigationLayoutComponent)(); };
NavigationLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavigationLayoutComponent, selectors: [["app-navigation-layout"]], decls: 4, vars: 0, consts: [[1, "wrapper"]], template: function NavigationLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7347:
/*!**********************************************************************************!*\
  !*** ./src/app/resend-verification-email/resend-verification-email.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResendVerificationEmailComponent": () => (/* binding */ ResendVerificationEmailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 892);
/* harmony import */ var _service_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/alert.service */ 3833);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _service_script_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/script-loader.service */ 5679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);









function ResendVerificationEmailComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ResendVerificationEmailComponent_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please enter a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ResendVerificationEmailComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ResendVerificationEmailComponent_div_18_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ResendVerificationEmailComponent_div_18_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.email);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ResendVerificationEmailComponent {
    constructor(formBuilder, authService, alertService, router, scriptLoader) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.alertService = alertService;
        this.router = router;
        this.scriptLoader = scriptLoader;
        this.loading = false;
        this.submitted = false;
        const particlesJSScript = { name: 'particles.js', type: 'text/javascript', src: 'assets/js/particles.min.js' };
        this.scriptLoader.load(particlesJSScript).subscribe(() => {
            const body = document.body;
            const script = document.createElement('script');
            script.innerHTML = '';
            script.src = "../assets/js/particle-background.js";
            script.async = false;
            script.defer = true;
            body.appendChild(script);
        });
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email])]
        });
    }
    get f() { return this.form.controls; }
    onSubmit() {
        this.submitted = true;
        this.alertService.clear();
        if (this.form.invalid) {
            return;
        }
        const emailData = {
            newEmail: this.form.value.email,
            actualEmail: this.router.url.split('/')[2]
        };
        this.authService.resendEmailVerification(emailData)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)())
            .subscribe({
            next: () => {
                //this.alertService.success('Email verification link send successfully, please verify your email address to login.', { keepAfterRouteChange: true, autoClose: true });
                this.router.navigate(['/resend-verification-email/' + emailData.newEmail]);
                //this.form.controls.email.value='';
                this.submitted = false;
                this.form.patchValue({ email: '' });
            },
            error: error => {
                this.alertService.error(error.error.message, { autoClose: true });
                this.loading = false;
            }
        });
    }
}
ResendVerificationEmailComponent.ɵfac = function ResendVerificationEmailComponent_Factory(t) { return new (t || ResendVerificationEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_script_loader_service__WEBPACK_IMPORTED_MODULE_2__.ScriptLoaderService)); };
ResendVerificationEmailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ResendVerificationEmailComponent, selectors: [["app-resend-verification-email"]], decls: 23, vars: 5, consts: [[1, "partical-bg-wrap"], ["id", "particles-js"], [1, "container"], [1, "align", "mt-9"], ["href", "/", 1, "navbar-brand", "mr-0"], ["alt", "J U P I T A", "width", "108", "height", "60", "src", "./../../../assets/images/Jupita.png", 1, "img-fluid"], [1, "row", "justify-content-center", "form-panel"], [1, "col-md-7", "col-md-offset-5", "col-lg-4", "col-lg-offset-4", "col-sm-8", "col-sm-offset-2"], [1, "add-label"], ["method", "post", "action", "#", 1, "form-horizontal", "mt-5", "hide-phone", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-sm-12"], ["for", "email", 1, "control-label"], [1, "input-group"], ["formControlName", "email", "type", "text", "name", "email", "id", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "pt-3"], [1, "custom-btn", "btn-light", "btn-lg", "btn-block", "login-button"], [1, "invalid-feedback"], [4, "ngIf"]], template: function ResendVerificationEmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Thank you. Please follow the verification link sent to the email address provided ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ResendVerificationEmailComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Resend verification email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ResendVerificationEmailComponent_div_18_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Resend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], styles: [".form-panel[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.form-panel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Montserrat-Regular\";\n  font-weight: 600;\n  line-height: 2;\n}\n.align[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 25px;\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active {\n  box-shadow: 0 0 0 30px #C6C6C6 inset !important;\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n}\n#particles-js[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.add-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.error-feedack[_ngcontent-%COMP%] {\n  color: #C6C6C6;\n  font-size: 11px;\n}\n.container[_ngcontent-%COMP%] {\n  opacity: 0;\n  text-align: center;\n  animation: fadein 1s;\n  animation-delay: 0.5s;\n  animation-fill-mode: forwards;\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  \n  to {\n    opacity: 1;\n  }\n}\n@media screen and (max-width: 767px) {\n  .hide-phone[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2VuZC12ZXJpZmljYXRpb24tZW1haWwuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXGFzc2V0c1xcc3R5bGVzaGVldHNcXHZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtBQUFKO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkNRUTtFRFBSLGNBQUE7QUFDUjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7Ozs7RUFLSSwrQ0FBQTtFQUNBLHlEQUFBO0VBQUEsaURBQUE7QUFDSjtBQUVBO0VBQ0ksWUFBQTtBQUNKO0FBRUE7RUFDSSxlQUFBO0FBQ0o7QUFFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQ0o7QUFFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFJQSw2QkFBQTtBQUNKO0FBQ0E7RUFDSTtJQUFPLFVBQUE7RUFHVDtFQUh1Qiw4R0FBQTtFQUNyQjtJQUFLLFVBQUE7RUFNUDtBQUNGO0FBSEk7RUFESjtJQUVRLGFBQUE7RUFNTjtBQUNGIiwiZmlsZSI6InJlc2VuZC12ZXJpZmljYXRpb24tZW1haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3N0eWxlc2hlZXRzL3ZhcmlhYmxlLnNjc3NcIjtcclxuLmZvcm0tcGFuZWx7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgc3BhbntcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1icmFuZDtcclxuICAgICAgICBmb250LXdlaWdodDogICRmb250LXNlbWlib2xkO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgfVxyXG59XHJcbi5hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsLFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLCBcclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cywgXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlICB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDMwcHggI0M2QzZDNiBpbnNldCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMzBweCAjQzZDNkM2IGluc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcblxyXG4jcGFydGljbGVzLWpzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmFkZC1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmVycm9yLWZlZWRhY2sge1xyXG4gICAgY29sb3I6ICNDNkM2QzY7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBvcGFjaXR5OiAwOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBhbmltYXRpb246IGZhZGVpbiAxczsgXHJcbiAgICBhbmltYXRpb24tZGVsYXk6MC41czsgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyBcclxuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7IFxyXG4gICAgLW1zLWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyBcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG59XHJcbkBrZXlmcmFtZXMgZmFkZWluIHsgXHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfSAvKlVwZGF0ZSBiZWNhdXNlIHlvdSBhc2tlZCBmb3IgdGhpcyBudW1iZXJzIEJVVCBpIHByb3Bvc2UgZnJvbSAwIG90aGVyd2lzZSB5b3UgYXJlIGluc3RhbnRseSBzZWVpbmcgdGhlIGRpdi4gKi9cclxuICAgIHRvIHsgb3BhY2l0eTogMTt9IFxyXG59XHJcblxyXG4uaGlkZS1waG9uZSB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiRwaG9uZSl7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufSIsIiRtb250c2VycmF0LXJlZ3VsYXJ0dGYtZm9udC1wYXRoOiBcImFzc2V0cy9mb250cy9Nb250c2VycmF0LVJlZ3VsYXIudHRmXCI7XHJcbiRtb250c2VycmF0LXNlbWlib2xkdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvTW9udHNlcnJhdC1TZW1pQm9sZC50dGZcIjtcclxuJG1vbnRzZXJyYXQtbGlnaHQtdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvTW9udHNlcnJhdC1MaWdodC50dGZcIjtcclxuJHBvcHBpbnMtbGlnaHQtdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvUG9wcGlucy1MaWdodC50dGZcIjtcclxuJHBvcHBpbnMtcmVndWxhci10dGYtZm9udC1wYXRoOiBcImFzc2V0cy9mb250cy9Qb3BwaW5zLXJlZ3VsYXIudHRmXCI7XHJcbiRmb250LWZhbWlseS1icmFuZDogJ01vbnRzZXJyYXQtUmVndWxhcic7XHJcbiRmb250LWZhbWlseS1zZW1pYm9sZDogJ01vbnRzZXJyYXQtU2VtaUJvbGQnO1xyXG4kZm9udC1mYW1pbHktbGlnaHQ6ICdNb250c2VycmF0LUxpZ2h0JztcclxuJGZvbnQtZmFtaWx5LXBvcHBpbnM6J1BvcHBpbnMtTGlnaHQnO1xyXG4kZm9udC1mYW1pbHktcG9wcGlucy1yZWd1bGFyOidQb3BwaW5zLVJlZ3VsYXInO1xyXG4kcHJpbWFyeS1jb2xvcjojQzZDNkM2O1xyXG4kbGluay10ZXh0LXByaW1hcnk6I0M2QzZDNjtcclxuJHByaW1hcnktZm9udC1jb2xvcjojMTgxODE4O1xyXG4vLyAgJGZvbnQtcmVndWxhcjonTW9udHNlcnJhdC1SZWd1bGFyJztcclxuJGZvbnQtc2VtaWJvbGQ6IDYwMDtcclxuJGZvbnQtbGlnaHQ6MzAwO1xyXG4vLyBSZXNwb25zaXZlIHNjcmVlbiBkZWNsYXJhdGlvblxyXG4kc21hbGwtcGhvbmVzOiAzNjBweDtcclxuJHBob25lOiA3NjdweDtcclxuJHRhYmxldC1taW46NzY4cHg7XHJcbiR0YWJsZXQtbWF4OjEwMjRweDtcclxuJHRvdGFsOiAzNTA7IC8vIHRvdGFsIHBhcnRpY2xlc1xyXG4kb3JiLXNpemU6IDEwMHB4O1xyXG4kcGFydGljbGUtc2l6ZTogMnB4O1xyXG4kdGltZTogMzBzO1xyXG4kYmFzZS1odWU6IDA7IC8vIGNoYW5nZSBmb3IgZGlmZiBjb2xvcnMgKDE4MCBpcyBuaWNlKVxyXG5cclxuLy8gTm90ZTogdGhlc2UgYnJlYWtpbmcgcG9pbnRzIGRvZXMgc2VlbSBtaXNsZWFkaW5nIGFuZCBub3QgYWxpbmdlZCB3aXRoIGJvb3RzdHJhcCBicmVha2luZyBwb2ludHMgXHJcbi8vIEJyZWFrcG9pbnRzXHJcbiRicC1zbWFsbDogNDhlbTsgLy8gNzY4cHhcclxuJGJwLW1lZGl1bTogMTQ0MHB4OyAvLyAxMDI0cHggXHJcbiRicC1sYXJnZTogMTkyMHB4OyAvLyA4NS4zNzVlbSAxMzY2cHhcclxuJGJwLXhsYXJnZTogMjA0OHB4OyAvLyAxMjBlbSAxOTIwcHhcclxuJGJwLXh4bGFyZ2U6IDM4NDBweDsgLy8gMTYwZW0gMjU2MHB4XHJcbi8vIE1lZGlhIFF1ZXJpZXNcclxuJG1xLXNtYWxsOiBcIihtaW4td2lkdGg6ICN7JGJwLXNtYWxsfSlcIjtcclxuJG1xLW1lZGl1bTogXCIobWluLXdpZHRoOiAjeyRicC1tZWRpdW19KVwiO1xyXG4kbXEtbGFyZ2U6IFwiKG1pbi13aWR0aDogI3skYnAtbGFyZ2V9KVwiO1xyXG4kbXEteGxhcmdlOiBcIihtaW4td2lkdGg6ICN7JGJwLXhsYXJnZX0pXCI7XHJcbiRtcS14eGxhcmdlOiBcIihtaW4td2lkdGg6ICN7JGJwLXh4bGFyZ2V9KVwiO1xyXG4kbXEtcmV0aW5hOiBcIigtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSlcIjsiXX0= */"] });


/***/ }),

/***/ 2054:
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 892);
/* harmony import */ var _service_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/alert.service */ 3833);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _service_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/shared.service */ 7083);
/* harmony import */ var _service_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/script-loader.service */ 5679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);











function ResetPasswordComponent_div_2_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_2_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ResetPasswordComponent_div_2_div_19_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.pg.controls.password.errors.required);
} }
function ResetPasswordComponent_div_2_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Your password must contain both uppercase and lowercase letters, a number, a symbol, and min of 8 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_2_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_2_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ResetPasswordComponent_div_2_div_28_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.pg.errors);
} }
function ResetPasswordComponent_div_2_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.responseMessage);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function ResetPasswordComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Please visit this link from a desktop or tablet device.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Enter a new password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_div_2_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ResetPasswordComponent_div_2_div_19_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ResetPasswordComponent_div_2_div_20_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Confirm password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ResetPasswordComponent_div_2_div_28_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Reset Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, ResetPasswordComponent_div_2_div_33_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, ctx_r0.submitted && ctx_r0.pg.controls.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.pg.controls.password.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.pg.controls.password.errors && ctx_r0.pg.controls.password.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, ctx_r0.submitted && ctx_r0.pg.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.responseMessage);
} }
class ResetPasswordComponent {
    constructor(formBuilder, authService, alertService, router, sharedService, route, scriptLoader) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.alertService = alertService;
        this.router = router;
        this.sharedService = sharedService;
        this.route = route;
        this.scriptLoader = scriptLoader;
        this.loading = false;
        this.submitted = false;
        this.isTokenChecked = false;
        const particlesJSScript = { name: 'particles.js', type: 'text/javascript', src: 'assets/js/particles.min.js' };
        this.scriptLoader.load(particlesJSScript).subscribe(() => {
            const body = document.body;
            const script = document.createElement('script');
            script.innerHTML = '';
            script.src = "../assets/js/particle-background.js";
            script.async = false;
            script.defer = true;
            body.appendChild(script);
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.checkIfResetPasswordToken();
            this.responseMessage = '';
            this.form = this.formBuilder.group({
                passwordGroup: this.formBuilder.group({
                    password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
                    confirmPassword: ['']
                }, { validator: this.checkPasswords })
            });
        });
    }
    checkPasswords(group) {
        let pass = group.get('password').value;
        let confirmPass = group.get('confirmPassword').value;
        return pass === confirmPass ? null : { notSame: true };
    }
    get pg() { return this.form.controls.passwordGroup; ; }
    onSubmit() {
        this.submitted = true;
        this.alertService.clear();
        if (this.form.invalid) {
            return;
        }
        const resetData = {
            password: this.form.value.passwordGroup.password,
            token: this.router.url.split('/')[2]
        };
        this.authService.resetPassword(resetData)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.first)())
            .subscribe({
            next: () => {
                this.responseMessage = 'Password reset successfully.';
                //this.alertService.success('Password reset successfully.', { keepAfterRouteChange: true, autoClose: true });
                this.router.navigate(['/reset-success']);
            },
            error: error => {
                this.responseMessage = error.error.message;
                //this.alertService.error(error.error.message, {autoClose: true});
                this.loading = false;
            }
        });
    }
    checkIfResetPasswordToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let token = this.route.snapshot.params.id;
            const response = yield this.sharedService.postDataPromise('auth/checkResetPasswordToken', { token: token });
            if (!response.data) {
                this.router.navigate(['/404']);
            }
            else {
                this.isTokenChecked = true;
            }
        });
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_script_loader_service__WEBPACK_IMPORTED_MODULE_3__.ScriptLoaderService)); };
ResetPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 3, vars: 1, consts: [[1, "partical-bg-wrap"], ["id", "particles-js"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "align", "mt-9"], ["href", "/", 1, "navbar-brand", "mr-0"], ["alt", "J U P I T A", "width", "108", "height", "60", "src", "./../../../assets/images/Jupita.png", 1, "img-fluid"], [1, "row", "justify-content-center", "form-panel"], [1, "col-md-7", "col-md-offset-5", "col-lg-4", "col-lg-offset-4", "col-sm-8", "col-sm-offset-2"], [1, "add-label", "show-phone"], [1, "d-block", "hide-phone"], ["method", "post", "action", "#", 1, "form-horizontal", "mt-5", "hide-phone", 3, "formGroup", "ngSubmit"], ["formGroupName", "passwordGroup"], [1, "form-group"], [1, "col-sm-12"], ["for", "password", 1, "control-label"], [1, "input-group"], ["formControlName", "password", "type", "password", "name", "password", "id", "password", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "success-message", 4, "ngIf"], ["for", "confirm", 1, "control-label"], ["formControlName", "confirmPassword", "type", "password", "name", "confirm", "id", "confirm", 1, "form-control", 3, "ngClass"], [1, "form-group", "pt-3"], [1, "custom-btn", "btn-light", "btn-lg", "btn-block", "login-button"], ["class", "server-error", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], [1, "success-message"], [1, "server-error"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ResetPasswordComponent_div_2_Template, 34, 11, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isTokenChecked);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass], styles: [".form-panel[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.form-panel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Montserrat-Regular\";\n  font-weight: 600;\n  line-height: 2;\n}\n.align[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 25px;\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px #C6C6C6 inset !important;\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n}\n.container[_ngcontent-%COMP%] {\n  opacity: 0;\n  text-align: center;\n  animation: fadein 1s;\n  animation-delay: 0.5s;\n  animation-fill-mode: forwards;\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  \n  to {\n    opacity: 1;\n  }\n}\n#particles-js[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.add-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.error-feedack[_ngcontent-%COMP%] {\n  color: #C6C6C6;\n  font-size: 11px;\n}\n@media screen and (max-width: 767px) {\n  .hide-phone[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.show-phone[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 767px) {\n  .show-phone[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxhc3NldHNcXHN0eWxlc2hlZXRzXFx2YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7QUFBSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JDUVE7RURQUixjQUFBO0FBQ1I7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVBOzs7O0VBSUksdURBQUE7RUFDQSx5REFBQTtFQUFBLGlEQUFBO0FBQ0o7QUFFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFJQSw2QkFBQTtBQUNKO0FBQ0E7RUFDSTtJQUFPLFVBQUE7RUFHVDtFQUh1Qiw4R0FBQTtFQUNyQjtJQUFLLFVBQUE7RUFNUDtBQUNGO0FBSkE7RUFDSSxZQUFBO0FBTUo7QUFIQTtFQUNJLGVBQUE7QUFNSjtBQUhBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFNSjtBQURJO0VBREo7SUFFUSx3QkFBQTtFQUtOO0FBQ0Y7QUFGQTtFQUNJLGFBQUE7QUFLSjtBQUpJO0VBRko7SUFHUSxjQUFBO0VBT047QUFDRiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzaGVldHMvdmFyaWFibGUuc2Nzc1wiO1xyXG4uZm9ybS1wYW5lbHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJyYW5kO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAgJGZvbnQtc2VtaWJvbGQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICB9XHJcbn1cclxuLmFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsIFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLCBcclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUgIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMzBweCAjQzZDNkM2IGluc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgb3BhY2l0eTogMDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMXM7IFxyXG4gICAgYW5pbWF0aW9uLWRlbGF5OjAuNXM7IFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgXHJcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyBcclxuICAgIC1tcy1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgXHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7IFxyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH0gLypVcGRhdGUgYmVjYXVzZSB5b3UgYXNrZWQgZm9yIHRoaXMgbnVtYmVycyBCVVQgaSBwcm9wb3NlIGZyb20gMCBvdGhlcndpc2UgeW91IGFyZSBpbnN0YW50bHkgc2VlaW5nIHRoZSBkaXYuICovXHJcbiAgICB0byB7IG9wYWNpdHk6IDE7fSBcclxufVxyXG5cclxuI3BhcnRpY2xlcy1qcyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hZGQtbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5lcnJvci1mZWVkYWNrIHtcclxuICAgIGNvbG9yOiAjQzZDNkM2O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG5cclxuLmhpZGUtcGhvbmUge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDokcGhvbmUpe1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnNob3ctcGhvbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6JHBob25lKXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufSIsIiRtb250c2VycmF0LXJlZ3VsYXJ0dGYtZm9udC1wYXRoOiBcImFzc2V0cy9mb250cy9Nb250c2VycmF0LVJlZ3VsYXIudHRmXCI7XHJcbiRtb250c2VycmF0LXNlbWlib2xkdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvTW9udHNlcnJhdC1TZW1pQm9sZC50dGZcIjtcclxuJG1vbnRzZXJyYXQtbGlnaHQtdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvTW9udHNlcnJhdC1MaWdodC50dGZcIjtcclxuJHBvcHBpbnMtbGlnaHQtdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvUG9wcGlucy1MaWdodC50dGZcIjtcclxuJHBvcHBpbnMtcmVndWxhci10dGYtZm9udC1wYXRoOiBcImFzc2V0cy9mb250cy9Qb3BwaW5zLXJlZ3VsYXIudHRmXCI7XHJcbiRmb250LWZhbWlseS1icmFuZDogJ01vbnRzZXJyYXQtUmVndWxhcic7XHJcbiRmb250LWZhbWlseS1zZW1pYm9sZDogJ01vbnRzZXJyYXQtU2VtaUJvbGQnO1xyXG4kZm9udC1mYW1pbHktbGlnaHQ6ICdNb250c2VycmF0LUxpZ2h0JztcclxuJGZvbnQtZmFtaWx5LXBvcHBpbnM6J1BvcHBpbnMtTGlnaHQnO1xyXG4kZm9udC1mYW1pbHktcG9wcGlucy1yZWd1bGFyOidQb3BwaW5zLVJlZ3VsYXInO1xyXG4kcHJpbWFyeS1jb2xvcjojQzZDNkM2O1xyXG4kbGluay10ZXh0LXByaW1hcnk6I0M2QzZDNjtcclxuJHByaW1hcnktZm9udC1jb2xvcjojMTgxODE4O1xyXG4vLyAgJGZvbnQtcmVndWxhcjonTW9udHNlcnJhdC1SZWd1bGFyJztcclxuJGZvbnQtc2VtaWJvbGQ6IDYwMDtcclxuJGZvbnQtbGlnaHQ6MzAwO1xyXG4vLyBSZXNwb25zaXZlIHNjcmVlbiBkZWNsYXJhdGlvblxyXG4kc21hbGwtcGhvbmVzOiAzNjBweDtcclxuJHBob25lOiA3NjdweDtcclxuJHRhYmxldC1taW46NzY4cHg7XHJcbiR0YWJsZXQtbWF4OjEwMjRweDtcclxuJHRvdGFsOiAzNTA7IC8vIHRvdGFsIHBhcnRpY2xlc1xyXG4kb3JiLXNpemU6IDEwMHB4O1xyXG4kcGFydGljbGUtc2l6ZTogMnB4O1xyXG4kdGltZTogMzBzO1xyXG4kYmFzZS1odWU6IDA7IC8vIGNoYW5nZSBmb3IgZGlmZiBjb2xvcnMgKDE4MCBpcyBuaWNlKVxyXG5cclxuLy8gTm90ZTogdGhlc2UgYnJlYWtpbmcgcG9pbnRzIGRvZXMgc2VlbSBtaXNsZWFkaW5nIGFuZCBub3QgYWxpbmdlZCB3aXRoIGJvb3RzdHJhcCBicmVha2luZyBwb2ludHMgXHJcbi8vIEJyZWFrcG9pbnRzXHJcbiRicC1zbWFsbDogNDhlbTsgLy8gNzY4cHhcclxuJGJwLW1lZGl1bTogMTQ0MHB4OyAvLyAxMDI0cHggXHJcbiRicC1sYXJnZTogMTkyMHB4OyAvLyA4NS4zNzVlbSAxMzY2cHhcclxuJGJwLXhsYXJnZTogMjA0OHB4OyAvLyAxMjBlbSAxOTIwcHhcclxuJGJwLXh4bGFyZ2U6IDM4NDBweDsgLy8gMTYwZW0gMjU2MHB4XHJcbi8vIE1lZGlhIFF1ZXJpZXNcclxuJG1xLXNtYWxsOiBcIihtaW4td2lkdGg6ICN7JGJwLXNtYWxsfSlcIjtcclxuJG1xLW1lZGl1bTogXCIobWluLXdpZHRoOiAjeyRicC1tZWRpdW19KVwiO1xyXG4kbXEtbGFyZ2U6IFwiKG1pbi13aWR0aDogI3skYnAtbGFyZ2V9KVwiO1xyXG4kbXEteGxhcmdlOiBcIihtaW4td2lkdGg6ICN7JGJwLXhsYXJnZX0pXCI7XHJcbiRtcS14eGxhcmdlOiBcIihtaW4td2lkdGg6ICN7JGJwLXh4bGFyZ2V9KVwiO1xyXG4kbXEtcmV0aW5hOiBcIigtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSlcIjsiXX0= */"] });


/***/ }),

/***/ 3833:
/*!******************************************!*\
  !*** ./src/app/service/alert.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 9344);




class AlertService {
    constructor(toastr) {
        this.toastr = toastr;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.defaultId = 'default-alert';
        //Belwo AlertMessages will be use as constants messages
        this.AlertMessages = {
            EmailAlreadyExists: 'This email belongs to a registered account. Please proceed to sign in.'
        };
    }
    // enable subscribing to alerts observable
    onAlert(id = this.defaultId) {
        return this.subject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(x => x && x.id === id));
    }
    // convenience methods
    success(message, options) {
        //this.alert(new Alert({ ...options, type: AlertType.Success, message }));
        this.toastr.success(message, 'Success', options);
    }
    error(message, options) {
        //this.alert(new Alert({ ...options, type: AlertType.Error, message }));
        this.toastr.error(message, 'Error', options);
    }
    info(message, options) {
        //this.alert(new Alert({ ...options, type: AlertType.Info, message }));
        this.toastr.info(message, 'Info', options);
    }
    warn(message, options) {
        //this.alert(new Alert({ ...options, type: AlertType.Warning, message }));
        this.toastr.warning(message, 'Warning', options);
    }
    // main alert method
    alert(alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    }
    // clear alerts
    clear(id = this.defaultId) {
        //this.subject.next(new Alert({ id }));
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService)); };
AlertService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 892:
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);







class AuthService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.EMAIL_REGEXP = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({ email: '', fullName: '', _id: '' });
        this.user = this.userSubject.asObservable();
    }
    get userValue() {
        if (this.userSubject.value && this.userSubject.value._id) {
            return this.userSubject.value;
        }
        else {
            return this.me('dontkick').catch(err => { });
        }
    }
    setUserValue(data) {
        this.userSubject.next(data);
    }
    me(param = null) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/auth/me?${param}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => {
            this.userSubject.next(data.data);
            return data;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(e);
        })).toPromise();
    }
    login(email, password) {
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        let body = new URLSearchParams();
        body.set('password', password);
        body.set('username', email);
        body.set('grant_type', "password");
        body.set('client_id', null);
        body.set('client_secret', null);
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/auth/login`, body.toString(), options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            this.userSubject.next(user);
            //store in local session
            const dateNow = new Date();
            dateNow.setHours(dateNow.getHours() + 24);
            localStorage.setItem("user", JSON.stringify(user));
            return user;
        }));
    }
    adminLogin(email, password) {
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        let body = new URLSearchParams();
        body.set('password', password);
        body.set('username', email);
        body.set('grant_type', "password");
        body.set('client_id', null);
        body.set('client_secret', null);
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/admin/login`, body.toString(), options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(user => {
            //user.userType="admin";
            const userData = Object.assign(Object.assign({}, user), { user_type: 'admin' });
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            this.userSubject.next(user);
            //store in local session
            const dateNow = new Date();
            dateNow.setHours(dateNow.getHours() + 24);
            localStorage.setItem("user", JSON.stringify(userData));
            return user;
        }));
    }
    logout() {
        this.userSubject.next(null);
        this.redirectTo('/sign-in');
        // this.router.navigateByUrl('/sign-in');
        // window.location.reload();
    }
    register(user) {
        let userData = {
            email: user.email,
            password: user.passwordGroup.password,
            username: user.username,
            fullName: user.fullName,
            isInvited: undefined
        };
        if (user.isInvited) {
            userData.isInvited = user.isInvited;
        }
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/auth/registerUser`, userData);
    }
    resendEmailVerification(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/auth/resendEmailVerification`, user);
    }
    sendForgotPasswordLink(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/auth/sendForgotPasswordLink`, user);
    }
    resetPassword(passwordData) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/auth/resetPassword`, passwordData);
    }
    redirectTo(uri) {
        this.router.navigateByUrl('/').then(() => this.router.navigate([uri]));
    }
    verifyEmail(params) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/auth/verifyEmail`, params);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5679:
/*!**************************************************!*\
  !*** ./src/app/service/script-loader.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptLoaderService": () => (/* binding */ ScriptLoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class ScriptLoaderService {
    constructor() {
        this.scripts = [];
    }
    load(script) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((observer) => {
            var existingScript = this.scripts.find(s => s.name == script.name);
            // Complete if already loaded
            if (existingScript && existingScript.loaded) {
                observer.next(existingScript);
                observer.complete();
            }
            else {
                // Add the script
                this.scripts = [...this.scripts, script];
                // Load the script
                let scriptElement = document.createElement("script");
                scriptElement.type = script.type;
                scriptElement.src = script.src;
                // async: (asynchronous), browser will continue to load the HTML page and render it 
                // while the browser load and execute the script at the same time.
                // defer: browser will run your script when the page finished parsing. (not necessary 
                // finishing downloading all image files. This is good.)
                scriptElement.defer = true;
                scriptElement.onload = () => {
                    script.loaded = true;
                    observer.next(script);
                    observer.complete();
                };
                scriptElement.onerror = (error) => {
                    observer.error("Couldn't load script " + script.src);
                };
                document.getElementsByTagName('body')[0].appendChild(scriptElement);
            }
        });
    }
}
ScriptLoaderService.ɵfac = function ScriptLoaderService_Factory(t) { return new (t || ScriptLoaderService)(); };
ScriptLoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ScriptLoaderService, factory: ScriptLoaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9110:
/*!****************************************!*\
  !*** ./src/app/service/seo.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeoService": () => (/* binding */ SeoService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 9075);


class SeoService {
    constructor(meta) {
        this.meta = meta;
    }
    updateTitle(title) {
        this.meta.updateTag({ name: 'title', content: title });
    }
    updateDescription(desc) {
        this.meta.updateTag({ name: 'description', content: desc });
    }
}
SeoService.ɵfac = function SeoService_Factory(t) { return new (t || SeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Meta)); };
SeoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SeoService, factory: SeoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7083:
/*!*******************************************!*\
  !*** ./src/app/service/shared.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedService": () => (/* binding */ SharedService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ 9605);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _shared_utils_import_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/import-utils */ 5529);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 1841);










// import pdfMake from "pdfmake/build/pdfmake";  
// import pdfFonts from "pdfmake/build/vfs_fonts";  
// pdfMake.vfs = pdfFonts.pdfMake.vfs;  
class SharedService {
    constructor(http, platformId) {
        this.http = http;
        this.platformId = platformId;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        // Observable string sources
        this.emitChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        // Observable string streams
        this.changeEmitted$ = this.emitChangeSource.asObservable();
        this.analyticsData = {
            touchpointId: null,
            inputId: null,
            tableData: [],
            startDate: '',
            endDate: '',
            rating: 0.00,
            feed: {
                "best day": null,
                "day difference": null,
                "month difference": null,
                "week difference": null,
                "worst day": null
            }
        };
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            //this.socket = io(this.serverUrl); //dev
            this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__.io)(this.serverUrl, {
                path: '/socket.io',
                //autoConnect: false,
                //transports: ['websocket'],				
                'reconnectionDelay': 1000,
                'reconnectionAttempts': 4
            });
        }
        //this.socket = io(this.serverUrl);
        this.apiData = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject({ apis: [], data: {} });
    }
    // Service message commands
    emitChange(change) {
        this.emitChangeSource.next(change);
    }
    getData(url) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/${url}`);
    }
    postData(url, data) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            return rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable.create(observer => {
                this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/${url}`, data)
                    //s.pipe(map(response => response.json()))
                    .subscribe(data => {
                    observer.next(data);
                    observer.complete();
                }, error => {
                    console.log(error); // Error getting the data
                    observer.next(error);
                    observer.complete();
                });
                ;
            });
        }
    }
    deleteData(url) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/${url}`);
    }
    postDataPromise(url, data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
                return yield this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/${url}`, data).toPromise();
            }
        });
    }
    /**Socket event**/
    listenToMessage(userId) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable(observer => {
            this.socket.on(`message-${userId}`, data => {
                observer.next(data);
            });
        });
    }
    setApiCalled(apiName, data) {
        if (this.apiData.value.apis.indexOf(apiName) < 0) {
            this.apiData.value.apis.push(apiName);
        }
        this.apiData.value.data[apiName] = data;
    }
    checkIfApiNotCalled(apiName) {
        //not called
        if (this.apiData.value.apis.indexOf(apiName) < 0) {
            return true;
        }
        else {
            return false;
        }
        ;
    }
    getApiData(apiName) {
        return this.apiData.value.data[apiName];
    }
    downloadAsPdf(transaction, userd) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            var imgData = 'data:image/jpeg;base64,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';
            const last4Digit = transaction.payment_method_details.card.last4;
            const transactionId = transaction.id;
            const user = userd;
            const totalAmount = (transaction.amount / 100).toFixed(2);
            const invoiceDate = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(new Date(transaction.created * 1000), 'MMMM dd y', 'en-US');
            let docDefinition = {
                content: [
                    {
                        columns: [
                            [
                                {
                                    image: imgData,
                                    width: 113,
                                    height: 20
                                }
                            ],
                            [
                                {
                                    text: `Invoice #${transactionId}`,
                                    alignment: 'right'
                                },
                                {
                                    text: `${invoiceDate}`,
                                    alignment: 'right'
                                }
                            ]
                        ],
                        style: "lineSpacing"
                    },
                    // Previous configuration  
                    {
                        columns: [
                            [
                                {
                                    text: 'Jupita AI',
                                },
                                { text: "ABN: 39 449 517 357" },
                                { text: "16A Gadigal Ave Waterloo" },
                                { text: "NSW, Australia 2017" },
                                { text: "support@jupita.io" }
                            ],
                            [
                                {
                                    text: `${user.fullName}`,
                                    alignment: 'right'
                                },
                                {
                                    text: `${user.email}`,
                                    alignment: 'right'
                                }
                            ]
                        ],
                        style: "lineSpacing"
                    },
                    {
                        table: {
                            headerRows: 1,
                            widths: ['*', 'auto'],
                            body: [
                                [{ text: 'Item', bold: true, style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                [{ text: "API usage", style: 'cellPadding' }, { text: `$${totalAmount}`, style: 'cellPadding' }],
                                [{ text: `Total amount charged to card ending in ${last4Digit}:`, bold: true, alignment: 'right', style: 'cellPadding' }, { text: `$${totalAmount}`, bold: true, style: 'cellPadding' }]
                            ]
                        },
                        layout: 'noBorders'
                        // {
                        // 	fillColor: function (rowIndex, node, columnIndex) {
                        // 		return (rowIndex=== 0) ? '#eee' : null;
                        // 	},
                        // },
                    }
                ],
                // Common Styles  
                styles: {
                    'lineSpacing': {
                        margin: [0, 0, 0, 40] //change number 6 to increase nspace
                    },
                    tableHeader: {
                        background: '#eee',
                        fillColor: '#eee',
                        margin: [5, 5, 5, 5]
                    },
                    cellPadding: {
                        margin: [5, 5, 5, 5],
                        border: [true, 0, true, 0],
                    }
                }
            };
            const importPdfMake = (0,_shared_utils_import_utils__WEBPACK_IMPORTED_MODULE_2__.normalizeCommonJSImport)(__webpack_require__.e(/*! import() | pdfmake */ "pdfmake").then(__webpack_require__.t.bind(__webpack_require__, /*! pdfmake/build/pdfmake.min */ 3795, 23)));
            const importPdfFonts = (0,_shared_utils_import_utils__WEBPACK_IMPORTED_MODULE_2__.normalizeCommonJSImport)(__webpack_require__.e(/*! import() | vfs_fonts */ "vfs_fonts").then(__webpack_require__.t.bind(__webpack_require__, /*! pdfmake/build/vfs_fonts */ 1777, 19)));
            //pdfMake.createPdf(docDefinition).open();  
            const pdfFonts = yield importPdfFonts;
            const pdfMake = yield importPdfMake;
            pdfMake.vfs = pdfFonts.pdfMake.vfs;
            pdfMake.createPdf(docDefinition).download(`Jupita-invoice-${invoiceDate}.pdf`);
        });
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.PLATFORM_ID)); };
SharedService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 5529:
/*!**********************************************!*\
  !*** ./src/app/shared/utils/import-utils.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeCommonJSImport": () => (/* binding */ normalizeCommonJSImport)
/* harmony export */ });
function normalizeCommonJSImport(importPromise) {
    // CommonJS's `module.exports` is wrapped as `default` in ESModule.
    return importPromise.then((m) => (m.default || m));
}


/***/ }),

/***/ 6513:
/*!****************************************************!*\
  !*** ./src/app/sign-in/admin-sign-in.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminSignInComponent": () => (/* binding */ AdminSignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8049);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 892);
/* harmony import */ var _service_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/alert.service */ 3833);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _service_script_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/script-loader.service */ 5679);











function AdminSignInComponent_div_2_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Thank you. Please proceed to sign in via ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "desktop or tablet device ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AdminSignInComponent_div_2_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AdminSignInComponent_div_2_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please enter a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AdminSignInComponent_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AdminSignInComponent_div_2_div_15_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AdminSignInComponent_div_2_div_15_div_2_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.email.errors.email || ctx_r2.f.email.errors.pattern);
} }
function AdminSignInComponent_div_2_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AdminSignInComponent_div_2_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AdminSignInComponent_div_2_div_25_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.f.password.errors.required);
} }
function AdminSignInComponent_div_2_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Invalid credentials");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function AdminSignInComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AdminSignInComponent_div_2_label_6_Template, 4, 0, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AdminSignInComponent_div_2_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AdminSignInComponent_div_2_div_15_Template, 3, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Forgot password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, AdminSignInComponent_div_2_div_25_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AdminSignInComponent_div_2_div_30_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.hideMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, ctx_r0.submitted && ctx_r0.f.email.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.email.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, ctx_r0.submitted && ctx_r0.f.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.password.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.serverError);
} }
class AdminSignInComponent {
    constructor(formBuilder, authService, alertService, route, router, platformId, scriptLoader) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.alertService = alertService;
        this.route = route;
        this.router = router;
        this.platformId = platformId;
        this.scriptLoader = scriptLoader;
        this.loading = false;
        this.submitted = false;
        this.serverError = false;
        this.hideMobile = false;
        this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId);
        const particlesJSScript = { name: 'particles.js', type: 'text/javascript', src: 'assets/js/particles.min.js' };
        this.scriptLoader.load(particlesJSScript).subscribe(() => {
            const body = document.body;
            const script = document.createElement('script');
            script.innerHTML = '';
            script.src = "../assets/js/particle-background.js";
            script.async = false;
            script.defer = true;
            body.appendChild(script);
        });
    }
    ngOnInit() {
        if (document.referrer.split("/")[3] == "confirmation") {
            this.hideMobile = true;
        }
        this.form = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.authService.EMAIL_REGEXP)])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    get f() { return this.form.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        //if (isPlatformBrowser(this.platformId)) {
        this.loading = true;
        this.authService.adminLogin(this.f.email.value, this.f.password.value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)())
            .subscribe({
            next: () => {
                // get return url from query parameters or default to home page
                this.router.navigate(['/admin']);
            },
            error: error => {
                this.serverError = true;
                this.loading = false;
            }
        });
        //}    
    }
}
AdminSignInComponent.ɵfac = function AdminSignInComponent_Factory(t) { return new (t || AdminSignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_script_loader_service__WEBPACK_IMPORTED_MODULE_2__.ScriptLoaderService)); };
AdminSignInComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AdminSignInComponent, selectors: [["admin-sign-in"]], decls: 3, vars: 1, consts: [[1, "partical-bg-wrap"], ["id", "particles-js"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "align", "mt-9"], ["href", "/", 1, "navbar-brand"], ["alt", "J U P I T A", "width", "108", "height", "60", "src", "./../../../assets/images/Jupita.png", 1, "img-fluid"], [1, "row", "justify-content-center", "form-panel"], [1, "col-md-4"], ["class", "add-label show-phone", 4, "ngIf"], ["method", "post", "action", "#", 1, "form-horizontal", "mt-5", "pr-3", "hide-phone", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-sm-12"], ["for", "email", 1, "control-label"], [1, "input-group"], ["formControlName", "email", "type", "text", "name", "email", "id", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-sm-12", "clearfix"], ["for", "password", 1, "control-label", "float-left"], ["href", "/forgot-password", 1, "float-right", "link-text"], ["formControlName", "password", "type", "password", "name", "password", "id", "password", 1, "form-control", 3, "ngClass"], [1, "form-group", "pt-3"], [1, "custom-btn", "btn-light", "btn-lg", "btn-block", "login-button", "mt-2"], ["class", "server-error", 4, "ngIf"], [1, "add-label", "show-phone"], [1, "invalid-feedback"], [4, "ngIf"], [1, "server-error"]], template: function AdminSignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AdminSignInComponent_div_2_Template, 31, 11, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isBrowser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass], styles: [".form-panel[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.form-panel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Montserrat-Regular\";\n  font-weight: 600;\n  line-height: 2;\n}\n.align[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 25px;\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px #C6C6C6 inset !important;\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n}\n.container[_ngcontent-%COMP%] {\n  opacity: 0;\n  text-align: center;\n  animation: fadein 1s;\n  animation-delay: 0.5s;\n  animation-fill-mode: forwards;\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  \n  to {\n    opacity: 1;\n  }\n}\n#particles-js[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.add-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n@media screen and (max-width: 767px) {\n  .hide-phone[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.show-phone[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 767px) {\n  .show-phone[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXGFzc2V0c1xcc3R5bGVzaGVldHNcXHZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtBQUFKO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkNRUTtFRFBSLGNBQUE7QUFDUjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7Ozs7RUFJSSx1REFBQTtFQUNBLHlEQUFBO0VBQUEsaURBQUE7QUFDSjtBQUVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUlBLDZCQUFBO0FBQ0o7QUFDQTtFQUNJO0lBQU8sVUFBQTtFQUdUO0VBSHVCLDhHQUFBO0VBQ3JCO0lBQUssVUFBQTtFQU1QO0FBQ0Y7QUFKQTtFQUNJLFlBQUE7QUFNSjtBQUhBO0VBQ0ksZUFBQTtBQU1KO0FBQUk7RUFESjtJQUVRLHdCQUFBO0VBSU47QUFDRjtBQURBO0VBQ0ksYUFBQTtBQUlKO0FBSEk7RUFGSjtJQUdRLGNBQUE7RUFNTjtBQUNGIiwiZmlsZSI6InNpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3N0eWxlc2hlZXRzL3ZhcmlhYmxlLnNjc3NcIjtcclxuLmZvcm0tcGFuZWx7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgc3BhbntcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1icmFuZDtcclxuICAgICAgICBmb250LXdlaWdodDogICRmb250LXNlbWlib2xkOyAgICAgICAgXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICB9XHJcbn1cclxuLmFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsIFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLCBcclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUgIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMzBweCAjQzZDNkM2IGluc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgb3BhY2l0eTogMDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMXM7IFxyXG4gICAgYW5pbWF0aW9uLWRlbGF5OjAuNXM7IFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgXHJcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyBcclxuICAgIC1tcy1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgXHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7IFxyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH0gLypVcGRhdGUgYmVjYXVzZSB5b3UgYXNrZWQgZm9yIHRoaXMgbnVtYmVycyBCVVQgaSBwcm9wb3NlIGZyb20gMCBvdGhlcndpc2UgeW91IGFyZSBpbnN0YW50bHkgc2VlaW5nIHRoZSBkaXYuICovXHJcbiAgICB0byB7IG9wYWNpdHk6IDE7fSBcclxufVxyXG5cclxuI3BhcnRpY2xlcy1qcyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hZGQtbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmhpZGUtcGhvbmUge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDokcGhvbmUpe1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnNob3ctcGhvbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6JHBob25lKXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufSIsIiRtb250c2VycmF0LXJlZ3VsYXJ0dGYtZm9udC1wYXRoOiBcImFzc2V0cy9mb250cy9Nb250c2VycmF0LVJlZ3VsYXIudHRmXCI7XHJcbiRtb250c2VycmF0LXNlbWlib2xkdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvTW9udHNlcnJhdC1TZW1pQm9sZC50dGZcIjtcclxuJG1vbnRzZXJyYXQtbGlnaHQtdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvTW9udHNlcnJhdC1MaWdodC50dGZcIjtcclxuJHBvcHBpbnMtbGlnaHQtdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvUG9wcGlucy1MaWdodC50dGZcIjtcclxuJHBvcHBpbnMtcmVndWxhci10dGYtZm9udC1wYXRoOiBcImFzc2V0cy9mb250cy9Qb3BwaW5zLXJlZ3VsYXIudHRmXCI7XHJcbiRmb250LWZhbWlseS1icmFuZDogJ01vbnRzZXJyYXQtUmVndWxhcic7XHJcbiRmb250LWZhbWlseS1zZW1pYm9sZDogJ01vbnRzZXJyYXQtU2VtaUJvbGQnO1xyXG4kZm9udC1mYW1pbHktbGlnaHQ6ICdNb250c2VycmF0LUxpZ2h0JztcclxuJGZvbnQtZmFtaWx5LXBvcHBpbnM6J1BvcHBpbnMtTGlnaHQnO1xyXG4kZm9udC1mYW1pbHktcG9wcGlucy1yZWd1bGFyOidQb3BwaW5zLVJlZ3VsYXInO1xyXG4kcHJpbWFyeS1jb2xvcjojQzZDNkM2O1xyXG4kbGluay10ZXh0LXByaW1hcnk6I0M2QzZDNjtcclxuJHByaW1hcnktZm9udC1jb2xvcjojMTgxODE4O1xyXG4vLyAgJGZvbnQtcmVndWxhcjonTW9udHNlcnJhdC1SZWd1bGFyJztcclxuJGZvbnQtc2VtaWJvbGQ6IDYwMDtcclxuJGZvbnQtbGlnaHQ6MzAwO1xyXG4vLyBSZXNwb25zaXZlIHNjcmVlbiBkZWNsYXJhdGlvblxyXG4kc21hbGwtcGhvbmVzOiAzNjBweDtcclxuJHBob25lOiA3NjdweDtcclxuJHRhYmxldC1taW46NzY4cHg7XHJcbiR0YWJsZXQtbWF4OjEwMjRweDtcclxuJHRvdGFsOiAzNTA7IC8vIHRvdGFsIHBhcnRpY2xlc1xyXG4kb3JiLXNpemU6IDEwMHB4O1xyXG4kcGFydGljbGUtc2l6ZTogMnB4O1xyXG4kdGltZTogMzBzO1xyXG4kYmFzZS1odWU6IDA7IC8vIGNoYW5nZSBmb3IgZGlmZiBjb2xvcnMgKDE4MCBpcyBuaWNlKVxyXG5cclxuLy8gTm90ZTogdGhlc2UgYnJlYWtpbmcgcG9pbnRzIGRvZXMgc2VlbSBtaXNsZWFkaW5nIGFuZCBub3QgYWxpbmdlZCB3aXRoIGJvb3RzdHJhcCBicmVha2luZyBwb2ludHMgXHJcbi8vIEJyZWFrcG9pbnRzXHJcbiRicC1zbWFsbDogNDhlbTsgLy8gNzY4cHhcclxuJGJwLW1lZGl1bTogMTQ0MHB4OyAvLyAxMDI0cHggXHJcbiRicC1sYXJnZTogMTkyMHB4OyAvLyA4NS4zNzVlbSAxMzY2cHhcclxuJGJwLXhsYXJnZTogMjA0OHB4OyAvLyAxMjBlbSAxOTIwcHhcclxuJGJwLXh4bGFyZ2U6IDM4NDBweDsgLy8gMTYwZW0gMjU2MHB4XHJcbi8vIE1lZGlhIFF1ZXJpZXNcclxuJG1xLXNtYWxsOiBcIihtaW4td2lkdGg6ICN7JGJwLXNtYWxsfSlcIjtcclxuJG1xLW1lZGl1bTogXCIobWluLXdpZHRoOiAjeyRicC1tZWRpdW19KVwiO1xyXG4kbXEtbGFyZ2U6IFwiKG1pbi13aWR0aDogI3skYnAtbGFyZ2V9KVwiO1xyXG4kbXEteGxhcmdlOiBcIihtaW4td2lkdGg6ICN7JGJwLXhsYXJnZX0pXCI7XHJcbiRtcS14eGxhcmdlOiBcIihtaW4td2lkdGg6ICN7JGJwLXh4bGFyZ2V9KVwiO1xyXG4kbXEtcmV0aW5hOiBcIigtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSlcIjsiXX0= */"] });


/***/ }),

/***/ 3922:
/*!***************************************************!*\
  !*** ./src/app/sign-in/user-sign-in.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSignInComponent": () => (/* binding */ UserSignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8049);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 892);
/* harmony import */ var _service_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/alert.service */ 3833);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _service_script_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/script-loader.service */ 5679);











function UserSignInComponent_div_2_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserSignInComponent_div_2_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please enter a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserSignInComponent_div_2_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserSignInComponent_div_2_div_18_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UserSignInComponent_div_2_div_18_div_2_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.email || ctx_r1.f.email.errors.pattern);
} }
function UserSignInComponent_div_2_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserSignInComponent_div_2_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserSignInComponent_div_2_div_28_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.password.errors.required);
} }
function UserSignInComponent_div_2_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Invalid credentials");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function UserSignInComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Thank you for confirming your email. Please proceed to sign in via desktop or tablet device ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function UserSignInComponent_div_2_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, UserSignInComponent_div_2_div_18_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Forgot password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, UserSignInComponent_div_2_div_28_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, UserSignInComponent_div_2_div_33_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.pageHeading, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, ctx_r0.submitted && ctx_r0.f.email.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.email.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, ctx_r0.submitted && ctx_r0.f.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.password.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.serverError);
} }
class UserSignInComponent {
    constructor(formBuilder, authService, alertService, route, router, platformId, scriptLoader) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.alertService = alertService;
        this.route = route;
        this.router = router;
        this.platformId = platformId;
        this.scriptLoader = scriptLoader;
        this.pageHeading = '';
        this.loading = false;
        this.submitted = false;
        this.serverError = false;
        this.hideMobile = false;
        this.userEmail = '';
        this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId);
        const particlesJSScript = { name: 'particles.js', type: 'text/javascript', src: 'assets/js/particles.min.js' };
        this.scriptLoader.load(particlesJSScript).subscribe(() => {
            const body = document.body;
            const script = document.createElement('script');
            script.innerHTML = '';
            script.src = "../assets/js/particle-background.js";
            script.async = false;
            script.defer = true;
            body.appendChild(script);
        });
        this.userEmail = route.snapshot.params.email;
    }
    ngOnInit() {
        if (document.referrer.split("/")[3] == "confirmation") {
            this.hideMobile = true;
        }
        //check if user comes from email confirmation
        if (this.userEmail) {
            this.pageHeading = 'Thank you for confirming your email. Please sign in';
        }
        else {
            this.pageHeading = 'Your password has been reset. Please sign in';
            this.userEmail = '';
        }
        this.form = this.formBuilder.group({
            email: [this.userEmail, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.authService.EMAIL_REGEXP)])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    get f() { return this.form.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        //if (isPlatformBrowser(this.platformId)) {
        this.loading = true;
        this.authService.login(this.f.email.value, this.f.password.value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)())
            .subscribe({
            next: () => {
                // get return url from query parameters or default to home page
                this.router.navigate(['/user']);
            },
            error: error => {
                this.serverError = true;
                this.loading = false;
            }
        });
        //}    
    }
}
UserSignInComponent.ɵfac = function UserSignInComponent_Factory(t) { return new (t || UserSignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_script_loader_service__WEBPACK_IMPORTED_MODULE_2__.ScriptLoaderService)); };
UserSignInComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserSignInComponent, selectors: [["app-user-sign-in"]], decls: 3, vars: 1, consts: [[1, "partical-bg-wrap"], ["id", "particles-js"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "align", "mt-9"], ["href", "/", 1, "navbar-brand", "mr-0"], ["alt", "J U P I T A", "width", "108", "height", "60", "src", "./../../../assets/images/Jupita.png", 1, "img-fluid"], [1, "row", "justify-content-center", "form-panel"], [1, "col-md-7", "col-md-offset-5", "col-lg-4", "col-lg-offset-4", "col-sm-8", "col-sm-offset-2"], [1, "add-label", "show-phone"], [1, "d-block", "hide-phone"], ["method", "post", "action", "#", 1, "form-horizontal", "mt-5", "hide-phone", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-sm-12"], ["for", "email", 1, "control-label"], [1, "input-group"], ["formControlName", "email", "type", "text", "name", "email", "id", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-sm-12", "clearfix"], ["for", "password", 1, "control-label", "float-left"], ["href", "/forgot-password", 1, "float-right", "link-text"], ["formControlName", "password", "type", "password", "name", "password", "id", "password", 1, "form-control", 3, "ngClass"], [1, "form-group", "pt-3"], [1, "custom-btn", "btn-light", "btn-lg", "btn-block", "login-button", "mt-2"], ["class", "server-error", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], [1, "server-error"]], template: function UserSignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UserSignInComponent_div_2_Template, 34, 11, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isBrowser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass], styles: [".form-panel[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.form-panel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Montserrat-Regular\";\n  font-weight: 600;\n  line-height: 2;\n}\n.align[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 25px;\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px #C6C6C6 inset !important;\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n}\n.container[_ngcontent-%COMP%] {\n  opacity: 0;\n  text-align: center;\n  animation: fadein 1s;\n  animation-delay: 0.5s;\n  animation-fill-mode: forwards;\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  \n  to {\n    opacity: 1;\n  }\n}\n#particles-js[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.add-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n@media screen and (max-width: 767px) {\n  .hide-phone[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.show-phone[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 767px) {\n  .show-phone[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXGFzc2V0c1xcc3R5bGVzaGVldHNcXHZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtBQUFKO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkNRUTtFRFBSLGNBQUE7QUFDUjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7Ozs7RUFJSSx1REFBQTtFQUNBLHlEQUFBO0VBQUEsaURBQUE7QUFDSjtBQUVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUlBLDZCQUFBO0FBQ0o7QUFDQTtFQUNJO0lBQU8sVUFBQTtFQUdUO0VBSHVCLDhHQUFBO0VBQ3JCO0lBQUssVUFBQTtFQU1QO0FBQ0Y7QUFKQTtFQUNJLFlBQUE7QUFNSjtBQUhBO0VBQ0ksZUFBQTtBQU1KO0FBQUk7RUFESjtJQUVRLHdCQUFBO0VBSU47QUFDRjtBQURBO0VBQ0ksYUFBQTtBQUlKO0FBSEk7RUFGSjtJQUdRLGNBQUE7RUFNTjtBQUNGIiwiZmlsZSI6InNpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3N0eWxlc2hlZXRzL3ZhcmlhYmxlLnNjc3NcIjtcclxuLmZvcm0tcGFuZWx7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgc3BhbntcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1icmFuZDtcclxuICAgICAgICBmb250LXdlaWdodDogICRmb250LXNlbWlib2xkOyAgICAgICAgXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICB9XHJcbn1cclxuLmFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsIFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLCBcclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUgIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMzBweCAjQzZDNkM2IGluc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgb3BhY2l0eTogMDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMXM7IFxyXG4gICAgYW5pbWF0aW9uLWRlbGF5OjAuNXM7IFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgXHJcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyBcclxuICAgIC1tcy1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgXHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7IFxyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH0gLypVcGRhdGUgYmVjYXVzZSB5b3UgYXNrZWQgZm9yIHRoaXMgbnVtYmVycyBCVVQgaSBwcm9wb3NlIGZyb20gMCBvdGhlcndpc2UgeW91IGFyZSBpbnN0YW50bHkgc2VlaW5nIHRoZSBkaXYuICovXHJcbiAgICB0byB7IG9wYWNpdHk6IDE7fSBcclxufVxyXG5cclxuI3BhcnRpY2xlcy1qcyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hZGQtbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmhpZGUtcGhvbmUge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDokcGhvbmUpe1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnNob3ctcGhvbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6JHBob25lKXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufSIsIiRtb250c2VycmF0LXJlZ3VsYXJ0dGYtZm9udC1wYXRoOiBcImFzc2V0cy9mb250cy9Nb250c2VycmF0LVJlZ3VsYXIudHRmXCI7XHJcbiRtb250c2VycmF0LXNlbWlib2xkdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvTW9udHNlcnJhdC1TZW1pQm9sZC50dGZcIjtcclxuJG1vbnRzZXJyYXQtbGlnaHQtdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvTW9udHNlcnJhdC1MaWdodC50dGZcIjtcclxuJHBvcHBpbnMtbGlnaHQtdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvUG9wcGlucy1MaWdodC50dGZcIjtcclxuJHBvcHBpbnMtcmVndWxhci10dGYtZm9udC1wYXRoOiBcImFzc2V0cy9mb250cy9Qb3BwaW5zLXJlZ3VsYXIudHRmXCI7XHJcbiRmb250LWZhbWlseS1icmFuZDogJ01vbnRzZXJyYXQtUmVndWxhcic7XHJcbiRmb250LWZhbWlseS1zZW1pYm9sZDogJ01vbnRzZXJyYXQtU2VtaUJvbGQnO1xyXG4kZm9udC1mYW1pbHktbGlnaHQ6ICdNb250c2VycmF0LUxpZ2h0JztcclxuJGZvbnQtZmFtaWx5LXBvcHBpbnM6J1BvcHBpbnMtTGlnaHQnO1xyXG4kZm9udC1mYW1pbHktcG9wcGlucy1yZWd1bGFyOidQb3BwaW5zLVJlZ3VsYXInO1xyXG4kcHJpbWFyeS1jb2xvcjojQzZDNkM2O1xyXG4kbGluay10ZXh0LXByaW1hcnk6I0M2QzZDNjtcclxuJHByaW1hcnktZm9udC1jb2xvcjojMTgxODE4O1xyXG4vLyAgJGZvbnQtcmVndWxhcjonTW9udHNlcnJhdC1SZWd1bGFyJztcclxuJGZvbnQtc2VtaWJvbGQ6IDYwMDtcclxuJGZvbnQtbGlnaHQ6MzAwO1xyXG4vLyBSZXNwb25zaXZlIHNjcmVlbiBkZWNsYXJhdGlvblxyXG4kc21hbGwtcGhvbmVzOiAzNjBweDtcclxuJHBob25lOiA3NjdweDtcclxuJHRhYmxldC1taW46NzY4cHg7XHJcbiR0YWJsZXQtbWF4OjEwMjRweDtcclxuJHRvdGFsOiAzNTA7IC8vIHRvdGFsIHBhcnRpY2xlc1xyXG4kb3JiLXNpemU6IDEwMHB4O1xyXG4kcGFydGljbGUtc2l6ZTogMnB4O1xyXG4kdGltZTogMzBzO1xyXG4kYmFzZS1odWU6IDA7IC8vIGNoYW5nZSBmb3IgZGlmZiBjb2xvcnMgKDE4MCBpcyBuaWNlKVxyXG5cclxuLy8gTm90ZTogdGhlc2UgYnJlYWtpbmcgcG9pbnRzIGRvZXMgc2VlbSBtaXNsZWFkaW5nIGFuZCBub3QgYWxpbmdlZCB3aXRoIGJvb3RzdHJhcCBicmVha2luZyBwb2ludHMgXHJcbi8vIEJyZWFrcG9pbnRzXHJcbiRicC1zbWFsbDogNDhlbTsgLy8gNzY4cHhcclxuJGJwLW1lZGl1bTogMTQ0MHB4OyAvLyAxMDI0cHggXHJcbiRicC1sYXJnZTogMTkyMHB4OyAvLyA4NS4zNzVlbSAxMzY2cHhcclxuJGJwLXhsYXJnZTogMjA0OHB4OyAvLyAxMjBlbSAxOTIwcHhcclxuJGJwLXh4bGFyZ2U6IDM4NDBweDsgLy8gMTYwZW0gMjU2MHB4XHJcbi8vIE1lZGlhIFF1ZXJpZXNcclxuJG1xLXNtYWxsOiBcIihtaW4td2lkdGg6ICN7JGJwLXNtYWxsfSlcIjtcclxuJG1xLW1lZGl1bTogXCIobWluLXdpZHRoOiAjeyRicC1tZWRpdW19KVwiO1xyXG4kbXEtbGFyZ2U6IFwiKG1pbi13aWR0aDogI3skYnAtbGFyZ2V9KVwiO1xyXG4kbXEteGxhcmdlOiBcIihtaW4td2lkdGg6ICN7JGJwLXhsYXJnZX0pXCI7XHJcbiRtcS14eGxhcmdlOiBcIihtaW4td2lkdGg6ICN7JGJwLXh4bGFyZ2V9KVwiO1xyXG4kbXEtcmV0aW5hOiBcIigtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSlcIjsiXX0= */"] });


/***/ }),

/***/ 5448:
/*!*****************************************************!*\
  !*** ./src/app/sign-up/invite-sign-up.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InviteSignUpComponent": () => (/* binding */ InviteSignUpComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 892);
/* harmony import */ var _service_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/alert.service */ 3833);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _service_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/shared.service */ 7083);
/* harmony import */ var _service_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/script-loader.service */ 5679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);











function InviteSignUpComponent_div_2_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Full name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InviteSignUpComponent_div_2_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InviteSignUpComponent_div_2_div_20_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.f.fullName.errors.required);
} }
function InviteSignUpComponent_div_2_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InviteSignUpComponent_div_2_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Your password must contain both uppercase and lowercase letters, a number, a symbol, and min of 8 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InviteSignUpComponent_div_2_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InviteSignUpComponent_div_2_div_29_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InviteSignUpComponent_div_2_div_29_div_2_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.pg.controls.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.pg.controls.password.errors.pattern);
} }
function InviteSignUpComponent_div_2_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InviteSignUpComponent_div_2_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InviteSignUpComponent_div_2_div_37_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.pg.errors);
} }
function InviteSignUpComponent_div_2_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.existEmailError);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function InviteSignUpComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Please visit this link from a desktop or tablet device.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Create your account below to join your team on Jupita");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function InviteSignUpComponent_div_2_Template_form_ngSubmit_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Full name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, InviteSignUpComponent_div_2_div_20_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, InviteSignUpComponent_div_2_div_29_Template, 3, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Confirm password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, InviteSignUpComponent_div_2_div_37_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Create Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, InviteSignUpComponent_div_2_div_42_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, ctx_r0.submitted && ctx_r0.f.fullName.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.fullName.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c0, ctx_r0.submitted && ctx_r0.pg.controls.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.pg.controls.password.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c0, ctx_r0.submitted && ctx_r0.pg.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.existEmailError);
} }
class InviteSignUpComponent {
    constructor(formBuilder, authService, alertService, router, actRoute, sharedService, scriptLoader) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.alertService = alertService;
        this.router = router;
        this.actRoute = actRoute;
        this.sharedService = sharedService;
        this.scriptLoader = scriptLoader;
        this.loading = false;
        this.submitted = false;
        this.isTokenChecked = false;
        const particlesJSScript = { name: 'particles.js', type: 'text/javascript', src: 'assets/js/particles.min.js' };
        this.scriptLoader.load(particlesJSScript).subscribe(() => {
            const body = document.body;
            const script = document.createElement('script');
            script.innerHTML = '';
            script.src = "../assets/js/particle-background.js";
            script.async = false;
            script.defer = true;
            body.appendChild(script);
        });
        this.invitedEmail = this.actRoute.snapshot.params.email;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.checkInviteEmailStatus();
            this.existEmailError = '';
            this.form = this.formBuilder.group({
                email: [this.invitedEmail, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
                fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
                passwordGroup: this.formBuilder.group({
                    password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
                    confirmPassword: ['']
                }, { validator: this.checkPasswords })
            });
        });
    }
    checkPasswords(group) {
        let pass = group.get('password').value;
        let confirmPass = group.get('confirmPassword').value;
        return pass === confirmPass ? null : { notSame: true };
    }
    get f() { return this.form.controls; }
    get pg() { return this.form.controls.passwordGroup; ; }
    onSubmit() {
        this.submitted = true;
        this.alertService.clear();
        if (this.form.invalid) {
            return;
        }
        this.form.value.isInvited = true;
        this.authService.register(this.form.value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.first)())
            .subscribe({
            next: (response) => {
                if (response.is_success) {
                    this.router.navigate(['/user']);
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                else {
                    this.router.navigate(['/404']);
                }
                // this.alertService.success('Registration successful, please verify your email address to login.', { keepAfterRouteChange: true, autoClose: true });
            },
            error: error => {
                // this.alertService.error(this.alertService.AlertMessages.EmailAlreadyExists, {autoDismiss: false});
                // this.loading = false;
                this.existEmailError = this.alertService.AlertMessages.EmailAlreadyExists;
            }
        });
    }
    checkInviteEmailStatus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let token = this.invitedEmail;
            const response = yield this.sharedService.postDataPromise('auth/checkInviteEmail', { email: token });
            if (!response.data) {
                this.router.navigate(['/404']);
            }
            else {
                this.isTokenChecked = true;
            }
        });
    }
}
InviteSignUpComponent.ɵfac = function InviteSignUpComponent_Factory(t) { return new (t || InviteSignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_script_loader_service__WEBPACK_IMPORTED_MODULE_3__.ScriptLoaderService)); };
InviteSignUpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: InviteSignUpComponent, selectors: [["app-invite-sign-up"]], decls: 3, vars: 1, consts: [[1, "partical-bg-wrap"], ["id", "particles-js"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "align", "mt-9"], ["href", "/", 1, "navbar-brand", "mr-0"], ["alt", "J U P I T A", "width", "108", "height", "60", "src", "./../../../assets/images/Jupita.png", 1, "img-fluid"], [1, "row", "justify-content-center", "form-panel"], [1, "col-md-7", "col-md-offset-5", "col-lg-4", "col-lg-offset-4", "col-sm-8", "col-sm-offset-2"], [1, "col-sm-12"], [1, "add-label", "show-phone"], [1, "add-label", "hide-phone"], ["method", "post", "action", "#", 1, "form-horizontal", "mt-5", "hide-phone", 3, "formGroup", "ngSubmit"], ["formControlName", "email", "id", "email", "type", "hidden"], [1, "form-group"], ["for", "fullName", 1, "control-label"], [1, "input-group"], ["formControlName", "fullName", "type", "text", "name", "fullName", "id", "fullName", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["formGroupName", "passwordGroup"], ["for", "password", 1, "control-label"], ["formControlName", "password", "type", "password", "name", "password", "id", "password", 1, "form-control", 3, "ngClass"], ["for", "confirm", 1, "control-label"], ["formControlName", "confirmPassword", "type", "password", "name", "confirm", "id", "confirm", 1, "form-control", 3, "ngClass"], [1, "form-group", "pt-3"], [1, "custom-btn", "btn-light", "btn-lg", "btn-block", "login-button", "create-button"], ["class", "server-error", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], ["class", "error-feedack", 4, "ngIf"], [1, "error-feedack"], [1, "server-error"]], template: function InviteSignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InviteSignUpComponent_div_2_Template, 43, 14, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isTokenChecked);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName], styles: [".form-panel[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.form-panel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Montserrat-Regular\";\n  font-weight: 600;\n  line-height: 2;\n}\n.align[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 25px;\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px #C6C6C6 inset !important;\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n}\n.container[_ngcontent-%COMP%] {\n  opacity: 0;\n  text-align: center;\n  animation: fadein 1s;\n  animation-delay: 0.5s;\n  animation-fill-mode: forwards;\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  \n  to {\n    opacity: 1;\n  }\n}\n.add-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n#particles-js[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.error-feedack[_ngcontent-%COMP%] {\n  color: #C6C6C6;\n  font-size: 11px;\n}\n.create-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n@media screen and (max-width: 767px) {\n  .hide-phone[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.show-phone[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 767px) {\n  .show-phone[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media screen and (max-width: 767px) {\n  .mt-9[_ngcontent-%COMP%] {\n    margin-top: 4rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXGFzc2V0c1xcc3R5bGVzaGVldHNcXHZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtBQUFKO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkNRUTtFRFBSLGNBQUE7QUFDUjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7Ozs7RUFJSSx1REFBQTtFQUNBLHlEQUFBO0VBQUEsaURBQUE7QUFDSjtBQUVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUlBLDZCQUFBO0FBQ0o7QUFDQTtFQUNJO0lBQU8sVUFBQTtFQUdUO0VBSHVCLDhHQUFBO0VBQ3JCO0lBQUssVUFBQTtFQU1QO0FBQ0Y7QUFKQTtFQUNJLGVBQUE7QUFNSjtBQUhBO0VBQ0ksWUFBQTtBQU1KO0FBSEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQU1KO0FBSEE7RUFDSSxnQkFBQTtBQU1KO0FBRkk7RUFESjtJQUVRLHdCQUFBO0VBTU47QUFDRjtBQUhBO0VBQ0ksYUFBQTtBQU1KO0FBTEk7RUFGSjtJQUdRLGNBQUE7RUFRTjtBQUNGO0FBTEE7RUFDSTtJQUNJLDJCQUFBO0VBUU47QUFDRiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0cy92YXJpYWJsZS5zY3NzXCI7XHJcbi5mb3JtLXBhbmVse1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHNwYW57XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYnJhbmQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICAkZm9udC1zZW1pYm9sZDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIH1cclxufVxyXG4uYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlciwgXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsIFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmFjdGl2ZSAge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAzMHB4ICNDNkM2QzYgaW5zZXQgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwMHMgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBvcGFjaXR5OiAwOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBhbmltYXRpb246IGZhZGVpbiAxczsgXHJcbiAgICBhbmltYXRpb24tZGVsYXk6MC41czsgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyBcclxuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7IFxyXG4gICAgLW1zLWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyBcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG59XHJcbkBrZXlmcmFtZXMgZmFkZWluIHsgXHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfSAvKlVwZGF0ZSBiZWNhdXNlIHlvdSBhc2tlZCBmb3IgdGhpcyBudW1iZXJzIEJVVCBpIHByb3Bvc2UgZnJvbSAwIG90aGVyd2lzZSB5b3UgYXJlIGluc3RhbnRseSBzZWVpbmcgdGhlIGRpdi4gKi9cclxuICAgIHRvIHsgb3BhY2l0eTogMTt9IFxyXG59XHJcblxyXG4uYWRkLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4jcGFydGljbGVzLWpzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmVycm9yLWZlZWRhY2sge1xyXG4gICAgY29sb3I6ICNDNkM2QzY7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5jcmVhdGUtYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5oaWRlLXBob25lIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6JHBob25lKXtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zaG93LXBob25lIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6JHBob25lKXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDokcGhvbmUpe1xyXG4gICAgLm10LTl7XHJcbiAgICAgICAgbWFyZ2luLXRvcDo0cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIkbW9udHNlcnJhdC1yZWd1bGFydHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLnR0ZlwiO1xyXG4kbW9udHNlcnJhdC1zZW1pYm9sZHR0Zi1mb250LXBhdGg6IFwiYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQtU2VtaUJvbGQudHRmXCI7XHJcbiRtb250c2VycmF0LWxpZ2h0LXR0Zi1mb250LXBhdGg6IFwiYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQtTGlnaHQudHRmXCI7XHJcbiRwb3BwaW5zLWxpZ2h0LXR0Zi1mb250LXBhdGg6IFwiYXNzZXRzL2ZvbnRzL1BvcHBpbnMtTGlnaHQudHRmXCI7XHJcbiRwb3BwaW5zLXJlZ3VsYXItdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvUG9wcGlucy1yZWd1bGFyLnR0ZlwiO1xyXG4kZm9udC1mYW1pbHktYnJhbmQ6ICdNb250c2VycmF0LVJlZ3VsYXInO1xyXG4kZm9udC1mYW1pbHktc2VtaWJvbGQ6ICdNb250c2VycmF0LVNlbWlCb2xkJztcclxuJGZvbnQtZmFtaWx5LWxpZ2h0OiAnTW9udHNlcnJhdC1MaWdodCc7XHJcbiRmb250LWZhbWlseS1wb3BwaW5zOidQb3BwaW5zLUxpZ2h0JztcclxuJGZvbnQtZmFtaWx5LXBvcHBpbnMtcmVndWxhcjonUG9wcGlucy1SZWd1bGFyJztcclxuJHByaW1hcnktY29sb3I6I0M2QzZDNjtcclxuJGxpbmstdGV4dC1wcmltYXJ5OiNDNkM2QzY7XHJcbiRwcmltYXJ5LWZvbnQtY29sb3I6IzE4MTgxODtcclxuLy8gICRmb250LXJlZ3VsYXI6J01vbnRzZXJyYXQtUmVndWxhcic7XHJcbiRmb250LXNlbWlib2xkOiA2MDA7XHJcbiRmb250LWxpZ2h0OjMwMDtcclxuLy8gUmVzcG9uc2l2ZSBzY3JlZW4gZGVjbGFyYXRpb25cclxuJHNtYWxsLXBob25lczogMzYwcHg7XHJcbiRwaG9uZTogNzY3cHg7XHJcbiR0YWJsZXQtbWluOjc2OHB4O1xyXG4kdGFibGV0LW1heDoxMDI0cHg7XHJcbiR0b3RhbDogMzUwOyAvLyB0b3RhbCBwYXJ0aWNsZXNcclxuJG9yYi1zaXplOiAxMDBweDtcclxuJHBhcnRpY2xlLXNpemU6IDJweDtcclxuJHRpbWU6IDMwcztcclxuJGJhc2UtaHVlOiAwOyAvLyBjaGFuZ2UgZm9yIGRpZmYgY29sb3JzICgxODAgaXMgbmljZSlcclxuXHJcbi8vIE5vdGU6IHRoZXNlIGJyZWFraW5nIHBvaW50cyBkb2VzIHNlZW0gbWlzbGVhZGluZyBhbmQgbm90IGFsaW5nZWQgd2l0aCBib290c3RyYXAgYnJlYWtpbmcgcG9pbnRzIFxyXG4vLyBCcmVha3BvaW50c1xyXG4kYnAtc21hbGw6IDQ4ZW07IC8vIDc2OHB4XHJcbiRicC1tZWRpdW06IDE0NDBweDsgLy8gMTAyNHB4IFxyXG4kYnAtbGFyZ2U6IDE5MjBweDsgLy8gODUuMzc1ZW0gMTM2NnB4XHJcbiRicC14bGFyZ2U6IDIwNDhweDsgLy8gMTIwZW0gMTkyMHB4XHJcbiRicC14eGxhcmdlOiAzODQwcHg7IC8vIDE2MGVtIDI1NjBweFxyXG4vLyBNZWRpYSBRdWVyaWVzXHJcbiRtcS1zbWFsbDogXCIobWluLXdpZHRoOiAjeyRicC1zbWFsbH0pXCI7XHJcbiRtcS1tZWRpdW06IFwiKG1pbi13aWR0aDogI3skYnAtbWVkaXVtfSlcIjtcclxuJG1xLWxhcmdlOiBcIihtaW4td2lkdGg6ICN7JGJwLWxhcmdlfSlcIjtcclxuJG1xLXhsYXJnZTogXCIobWluLXdpZHRoOiAjeyRicC14bGFyZ2V9KVwiO1xyXG4kbXEteHhsYXJnZTogXCIobWluLXdpZHRoOiAjeyRicC14eGxhcmdlfSlcIjtcclxuJG1xLXJldGluYTogXCIoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpXCI7Il19 */"] });


/***/ }),

/***/ 7487:
/*!**************************************!*\
  !*** ./src/app/tnc/tnc.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TncComponent": () => (/* binding */ TncComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);




function TncComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "By accessing this application, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this application. The materials contained in this application are protected by applicable copyright and trademark law. All rights are reserved. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Any attempt to decompile or reverse engineer any software contained in this application, remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or \"mirror\" the materials on any other entity is prohibited by copyright law. This license shall automatically terminate if you violate any of these restrictions and may be terminated by Jupita at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The materials in this application are provided on an 'as is' basis. Jupita makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Jupita does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free. We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable. You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "In no event shall Jupita or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials in this application, even if Jupita or a Jupita authorised representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "The materials appearing in this application could include technical, typographical, or photographic errors. Jupita does not warrant that any of the materials on its website are accurate, complete or current. Jupita may make changes to the materials contained on its website at any time without notice. However, Jupita does not make any commitment to update the materials. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Jupita may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "These terms and conditions are governed by and construed in accordance with the laws of Australia. You irrevocably submit to the exclusive jurisdiction of the courts in that State or location. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TncComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your privacy is important to us. It is Jupita\u2019s policy to respect your privacy regarding any information we may collect while using this application. Accordingly, we have developed this privacy policy in order for you to understand how we collect, use, communicate, disclose and otherwise make use of personal information. We have outlined our privacy policy below. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We will collect personal information by lawful and fair means and only with the knowledge or consent of the individual concerned. We will collect and use personal information solely for fulfilling those purposes specified by us and for other ancillary purposes, unless we obtain the consent of the individual concerned or as required by law. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You may contact Jupita by emailing support@jupita.io to; request a copy of your data, request your data be deleted (opt-out of data collection), or for any other matters relating to our Privacy Policy. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TncComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "We will protect personal information by using reasonable security safeguards against loss or theft, as well as unauthorised access, disclosure, copying, use or modification. Any breach of data security where a users personal information is confirmed to have been accessed by that breach will be disclosed to that user via the available contact information on record as soon as reasonably possible. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We will collect personal information by lawful and fair means and only with the knowledge or consent of the individual concerned. We will collect and use personal information solely for fulfilling those purposes specified by us and for other ancillary purposes, unless we obtain the consent of the individual concerned or as required by law. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "We will make readily available to customers information about our policies and practices relating to the management of personal information. We will not sell or otherwise make users personal information available to any 3rd party without the knowledge or consent of the individual concerned. We will only retain personal information for as long as necessary for the fulfilment of those purposes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "P");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "We are committed to protecting users data. This includes the storage, transfer and recovery of such data. All data services are provided and maintained by Amazon Web Services. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "P");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained. Jupita may change this privacy policy from time to time at Jupita\u2019s discretion. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "You may contact Jupita by emailing support@jupita.io to; request a copy of your data, request your data be deleted (opt-out of data collection), or for any other matters relating to our GDPR policy. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TncComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "We will protect personal information by using reasonable security safeguards against loss or theft, as well as unauthorised access, disclosure, copying, use or modification. Any breach of data security where a users personal information is confirmed to have been accessed by that breach will be disclosed to that user via the available contact information on record as soon as reasonably possible. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We will collect personal information by lawful and fair means and only with the knowledge or consent of the individual concerned. We will collect and use personal information solely for fulfilling those purposes specified by us and for other ancillary purposes, unless we obtain the consent of the individual concerned or as required by law. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "We will make readily available to customers information about our policies and practices relating to the management of personal information. We will not sell or otherwise make users personal information available to any 3rd party without the knowledge or consent of the individual concerned. We will only retain personal information for as long as necessary for the fulfilment of those purposes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "P");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained. Jupita may change this privacy policy from time to time at Jupita\u2019s discretion. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "You may contact Jupita by emailing support@jupita.io to; request a copy of your data, request your data be deleted (opt-out of data collection), or for any other matters relating to our CCPA policy. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TncComponent {
    constructor(router, location) {
        this.router = router;
        this.location = location;
        this.urlPath = '';
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
                this.urlPath = event.url.split('/')[2];
            }
        });
    }
    ngOnInit() {
    }
    termsConditions(parameter) {
        this.urlPath = parameter;
        this.location.replaceState("/termsandconditions/" + parameter);
    }
    redirectToSignUP() {
        this.router.navigate(['/sign-up']);
    }
}
TncComponent.ɵfac = function TncComponent_Factory(t) { return new (t || TncComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location)); };
TncComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TncComponent, selectors: [["app-tnc"]], decls: 24, vars: 8, consts: [[1, "main-container", "mb-md-0"], [1, "row"], [1, "col-md-12"], [1, "panel-header", "mt-9", "pt-4", "d-flex", "justify-content-center"], [1, "page-navigation"], [1, "d-flex", "justify-content-center", "align-items-center", "list-unstyled"], [1, "nav-item"], [1, "nav-link", 3, "ngClass", "click"], ["class", "content-area col-md-12 col-lg-10 ml-auto mr-auto mt-6 mb-9", 4, "ngIf"], [1, "content-area", "col-md-12", "col-lg-10", "ml-auto", "mr-auto", "mt-6", "mb-9"]], template: function TncComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Terms & Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TncComponent_Template_label_click_9_listener() { return ctx.termsConditions("terms"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TncComponent_Template_label_click_12_listener() { return ctx.termsConditions("privacy"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TncComponent_Template_label_click_15_listener() { return ctx.termsConditions("gdpr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "GDPR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TncComponent_Template_label_click_18_listener() { return ctx.termsConditions("ccpa"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "CCPA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TncComponent_div_20_Template, 19, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TncComponent_div_21_Template, 9, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TncComponent_div_22_Template, 15, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TncComponent_div_23_Template, 13, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.urlPath == "terms" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.urlPath == "privacy" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.urlPath == "gdpr" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.urlPath == "ccpa" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.urlPath == "terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.urlPath == "privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.urlPath == "gdpr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.urlPath == "ccpa");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["h2[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n.page-navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: Montserrat-Regular;\n  font-weight: 600;\n  font-size: 20px;\n  margin: 0 20px;\n}\n\n.page-navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #c6c6c6;\n  padding-left: 0;\n  padding-right: 0;\n  cursor: pointer;\n}\n\n.active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #c6c6c6;\n}\n\n@media screen and (max-width: 767px) {\n  .content-area[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  .panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n\n  .page-navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0 10px;\n    font-size: 16px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .mt-9[_ngcontent-%COMP%] {\n    margin-top: 2em !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRuYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7QUFERjs7QUFJQTtFQUNFLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGdDQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUFERjs7RUFHQTtJQUNFLGVBQUE7RUFBRjs7RUFFQTtJQUNFLGNBQUE7SUFDQSxlQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMEJBQUE7RUFBRjtBQUNGIiwiZmlsZSI6InRuYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzaGVldHMvdmFyaWFibGUuc2Nzc1wiO1xyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxufVxyXG5cclxuLnBhZ2UtbmF2aWdhdGlvbiB1bCBsaSB7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW46IDAgMjBweDtcclxufVxyXG5cclxuLnBhZ2UtbmF2aWdhdGlvbiB1bCBsaSBsYWJlbCB7XHJcbiAgY29sb3I6ICNjNmM2YzY7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2M2YzZjNjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY29udGVudC1hcmVhIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG4gIC5wYW5lbC1oZWFkZXIgaDIge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuICAucGFnZS1uYXZpZ2F0aW9uIHVsIGxpIHtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAubXQtOSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: "http://localhost:3000",
    baseUrl: "http://localhost:4200",
    sdkApiUrl: "https://api.jupita.io/v1",
    //apiUrl: "http://18.188.104.122:3000",
    stripePublishableKey: "pk_test_51IHPg5AMJ83QVraNMAMd0ocHXVOHbqoYFvrsvz0zUdJwYL9cSgccxpMTRj25lwnOb4EXJy8uJNsBrqR5cbVcB6A700RbfDblfr",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
// document.addEventListener('DOMContentLoaded', () => {
//   platformBrowserDynamic().bootstrapModule(AppModule)
//     .catch(err => console.error(err));
// });
window.onload = function () { _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule); };


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map