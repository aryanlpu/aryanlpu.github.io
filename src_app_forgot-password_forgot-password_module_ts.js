(self["webpackChunkJupita"] = self["webpackChunkJupita"] || []).push([["src_app_forgot-password_forgot-password_module_ts"],{

/***/ 3673:
/*!*******************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordRoutingModule": () => (/* binding */ ForgotPasswordRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.component */ 1700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [{ path: '', component: _forgot_password_component__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordComponent, data: { title: 'J U P I T A | Reset Your Password' } }];
class ForgotPasswordRoutingModule {
}
ForgotPasswordRoutingModule.ɵfac = function ForgotPasswordRoutingModule_Factory(t) { return new (t || ForgotPasswordRoutingModule)(); };
ForgotPasswordRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ForgotPasswordRoutingModule });
ForgotPasswordRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ForgotPasswordRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1700:
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 892);
/* harmony import */ var _service_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/alert.service */ 3833);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _service_script_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/script-loader.service */ 5679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);









function ForgotPasswordComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_div_25_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please enter a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ForgotPasswordComponent_div_25_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ForgotPasswordComponent_div_25_div_2_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.email || ctx_r0.f.email.errors.pattern);
} }
function ForgotPasswordComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "User not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.mailSentMessage);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ForgotPasswordComponent {
    constructor(formBuilder, authService, alertService, router, scriptLoader) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.alertService = alertService;
        this.router = router;
        this.scriptLoader = scriptLoader;
        this.loading = false;
        this.submitted = false;
        this.serverError = false;
        const particlesJSScript = { name: 'particles.js', type: 'text/javascript', src: 'assets/js/particles.min.js' };
        this.scriptLoader.load(particlesJSScript).subscribe(() => {
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
        });
    }
    ngOnInit() {
        this.mailSentMessage = '';
        this.form = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(this.authService.EMAIL_REGEXP)])]
        });
    }
    get f() { return this.form.controls; }
    onSubmit() {
        this.submitted = true;
        this.alertService.clear();
        if (this.form.invalid) {
            return;
        }
        this.authService.sendForgotPasswordLink(this.form.value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)())
            .subscribe({
            next: () => {
                this.mailSentMessage = 'Thank you. Please check your email.';
                this.serverError = false;
                //this.alertService.success('Thank you. Please check your email.', { keepAfterRouteChange: true, autoClose: true });
            },
            error: error => {
                this.serverError = true;
                this.loading = false;
            }
        });
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_script_loader_service__WEBPACK_IMPORTED_MODULE_2__.ScriptLoaderService)); };
ForgotPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 32, vars: 7, consts: [[1, "partical-bg-wrap"], ["id", "particles-js"], [1, "container"], [1, "align", "mt-9"], ["href", "/", 1, "navbar-brand", "mr-0"], ["alt", "J U P I T A", "width", "108", "height", "60", "src", "./../../../assets/images/Jupita.png", 1, "img-fluid"], [1, "row", "justify-content-center", "form-panel"], [1, "col-md-7", "col-md-offset-5", "col-lg-5", "col-lg-offset-7", "col-xl-4", "col-xl-offset-8", "col-sm-8", "col-sm-offset-2"], [1, "add-label", "px-5"], [1, "line-break-1"], [1, "d-block"], ["href", "/sign-up", 1, "link-text"], ["method", "post", "action", "#", 1, "form-horizontal", "mt-5", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-sm-12"], ["for", "email", 1, "control-label"], [1, "input-group"], ["formControlName", "email", "type", "text", "name", "email", "id", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "pt-3"], [1, "custom-btn", "btn-light", "btn-lg", "btn-block", "login-button"], ["class", "server-error", 4, "ngIf"], ["class", "success-message", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], [1, "server-error"], [1, "success-message"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Enter the email associated with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Don't have an account? Sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_17_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ForgotPasswordComponent_div_25_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ForgotPasswordComponent_div_30_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ForgotPasswordComponent_div_31_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.serverError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mailSentMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], styles: [".form-panel[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.form-panel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Montserrat-Regular\";\n  font-weight: 600;\n  line-height: 2;\n}\n.align[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 25px;\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px #C6C6C6 inset !important;\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n}\n.container[_ngcontent-%COMP%] {\n  opacity: 0;\n  text-align: center;\n  animation: fadein 1s;\n  animation-delay: 0.5s;\n  animation-fill-mode: forwards;\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  \n  to {\n    opacity: 1;\n  }\n}\n#particles-js[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.add-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.server-error[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n}\nbr[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (width: 768px) {\n  .line-break-1[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcYXNzZXRzXFxzdHlsZXNoZWV0c1xcdmFyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0FBQUo7QUFDSTtFQUNJLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQ1FRO0VEUFIsY0FBQTtBQUNSO0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFQTs7OztFQUlJLHVEQUFBO0VBQ0EseURBQUE7RUFBQSxpREFBQTtBQUNKO0FBRUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBSUEsNkJBQUE7QUFDSjtBQUNBO0VBQ0k7SUFBTyxVQUFBO0VBR1Q7RUFIdUIsOEdBQUE7RUFDckI7SUFBSyxVQUFBO0VBTVA7QUFDRjtBQUpBO0VBQ0ksWUFBQTtBQU1KO0FBSEE7RUFDSSxlQUFBO0FBTUo7QUFIQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBTUo7QUFIQTtFQUNJLGFBQUE7QUFNSjtBQUhBO0VBQ0k7SUFDSSxlQUFBO0VBTU47QUFDRiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3N0eWxlc2hlZXRzL3ZhcmlhYmxlLnNjc3NcIjtcclxuLmZvcm0tcGFuZWx7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgc3BhbntcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1icmFuZDtcclxuICAgICAgICBmb250LXdlaWdodDogICRmb250LXNlbWlib2xkOyAgICAgICAgXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICB9XHJcbn1cclxuLmFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsIFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLCBcclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUgIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMzBweCAjQzZDNkM2IGluc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgb3BhY2l0eTogMDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMXM7IFxyXG4gICAgYW5pbWF0aW9uLWRlbGF5OjAuNXM7IFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgXHJcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyBcclxuICAgIC1tcy1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgXHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7IFxyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH0gLypVcGRhdGUgYmVjYXVzZSB5b3UgYXNrZWQgZm9yIHRoaXMgbnVtYmVycyBCVVQgaSBwcm9wb3NlIGZyb20gMCBvdGhlcndpc2UgeW91IGFyZSBpbnN0YW50bHkgc2VlaW5nIHRoZSBkaXYuICovXHJcbiAgICB0byB7IG9wYWNpdHk6IDE7fSBcclxufVxyXG5cclxuI3BhcnRpY2xlcy1qcyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hZGQtbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5zZXJ2ZXItZXJyb3J7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG59XHJcblxyXG5icntcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuIH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aDogJHRhYmxldC1taW4pe1xyXG4gICAgLmxpbmUtYnJlYWstMXtcclxuICAgICAgICBkaXNwbGF5OmlubGluZTtcclxuICAgIH1cclxufSIsIiRtb250c2VycmF0LXJlZ3VsYXJ0dGYtZm9udC1wYXRoOiBcImFzc2V0cy9mb250cy9Nb250c2VycmF0LVJlZ3VsYXIudHRmXCI7XHJcbiRtb250c2VycmF0LXNlbWlib2xkdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvTW9udHNlcnJhdC1TZW1pQm9sZC50dGZcIjtcclxuJG1vbnRzZXJyYXQtbGlnaHQtdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvTW9udHNlcnJhdC1MaWdodC50dGZcIjtcclxuJHBvcHBpbnMtbGlnaHQtdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvUG9wcGlucy1MaWdodC50dGZcIjtcclxuJHBvcHBpbnMtcmVndWxhci10dGYtZm9udC1wYXRoOiBcImFzc2V0cy9mb250cy9Qb3BwaW5zLXJlZ3VsYXIudHRmXCI7XHJcbiRmb250LWZhbWlseS1icmFuZDogJ01vbnRzZXJyYXQtUmVndWxhcic7XHJcbiRmb250LWZhbWlseS1zZW1pYm9sZDogJ01vbnRzZXJyYXQtU2VtaUJvbGQnO1xyXG4kZm9udC1mYW1pbHktbGlnaHQ6ICdNb250c2VycmF0LUxpZ2h0JztcclxuJGZvbnQtZmFtaWx5LXBvcHBpbnM6J1BvcHBpbnMtTGlnaHQnO1xyXG4kZm9udC1mYW1pbHktcG9wcGlucy1yZWd1bGFyOidQb3BwaW5zLVJlZ3VsYXInO1xyXG4kcHJpbWFyeS1jb2xvcjojQzZDNkM2O1xyXG4kbGluay10ZXh0LXByaW1hcnk6I0M2QzZDNjtcclxuJHByaW1hcnktZm9udC1jb2xvcjojMTgxODE4O1xyXG4vLyAgJGZvbnQtcmVndWxhcjonTW9udHNlcnJhdC1SZWd1bGFyJztcclxuJGZvbnQtc2VtaWJvbGQ6IDYwMDtcclxuJGZvbnQtbGlnaHQ6MzAwO1xyXG4vLyBSZXNwb25zaXZlIHNjcmVlbiBkZWNsYXJhdGlvblxyXG4kc21hbGwtcGhvbmVzOiAzNjBweDtcclxuJHBob25lOiA3NjdweDtcclxuJHRhYmxldC1taW46NzY4cHg7XHJcbiR0YWJsZXQtbWF4OjEwMjRweDtcclxuJHRvdGFsOiAzNTA7IC8vIHRvdGFsIHBhcnRpY2xlc1xyXG4kb3JiLXNpemU6IDEwMHB4O1xyXG4kcGFydGljbGUtc2l6ZTogMnB4O1xyXG4kdGltZTogMzBzO1xyXG4kYmFzZS1odWU6IDA7IC8vIGNoYW5nZSBmb3IgZGlmZiBjb2xvcnMgKDE4MCBpcyBuaWNlKVxyXG5cclxuLy8gTm90ZTogdGhlc2UgYnJlYWtpbmcgcG9pbnRzIGRvZXMgc2VlbSBtaXNsZWFkaW5nIGFuZCBub3QgYWxpbmdlZCB3aXRoIGJvb3RzdHJhcCBicmVha2luZyBwb2ludHMgXHJcbi8vIEJyZWFrcG9pbnRzXHJcbiRicC1zbWFsbDogNDhlbTsgLy8gNzY4cHhcclxuJGJwLW1lZGl1bTogMTQ0MHB4OyAvLyAxMDI0cHggXHJcbiRicC1sYXJnZTogMTkyMHB4OyAvLyA4NS4zNzVlbSAxMzY2cHhcclxuJGJwLXhsYXJnZTogMjA0OHB4OyAvLyAxMjBlbSAxOTIwcHhcclxuJGJwLXh4bGFyZ2U6IDM4NDBweDsgLy8gMTYwZW0gMjU2MHB4XHJcbi8vIE1lZGlhIFF1ZXJpZXNcclxuJG1xLXNtYWxsOiBcIihtaW4td2lkdGg6ICN7JGJwLXNtYWxsfSlcIjtcclxuJG1xLW1lZGl1bTogXCIobWluLXdpZHRoOiAjeyRicC1tZWRpdW19KVwiO1xyXG4kbXEtbGFyZ2U6IFwiKG1pbi13aWR0aDogI3skYnAtbGFyZ2V9KVwiO1xyXG4kbXEteGxhcmdlOiBcIihtaW4td2lkdGg6ICN7JGJwLXhsYXJnZX0pXCI7XHJcbiRtcS14eGxhcmdlOiBcIihtaW4td2lkdGg6ICN7JGJwLXh4bGFyZ2V9KVwiO1xyXG4kbXEtcmV0aW5hOiBcIigtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSlcIjsiXX0= */"] });


/***/ }),

/***/ 7157:
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordModule": () => (/* binding */ ForgotPasswordModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-routing.module */ 3673);
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.component */ 1700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





class ForgotPasswordModule {
}
ForgotPasswordModule.ɵfac = function ForgotPasswordModule_Factory(t) { return new (t || ForgotPasswordModule)(); };
ForgotPasswordModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ForgotPasswordModule });
ForgotPasswordModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ForgotPasswordModule, { declarations: [_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_forgot-password_forgot-password_module_ts.js.map