(self["webpackChunkJupita"] = self["webpackChunkJupita"] || []).push([["src_app_sign-up_sign-up_module_ts"],{

/***/ 9204:
/*!***************************************************!*\
  !*** ./src/app/sign-up/sign-up-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpRoutingModule": () => (/* binding */ SignUpRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _sign_up_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up.component */ 8422);
/* harmony import */ var _invite_sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invite-sign-up.component */ 5448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





const routes = [
    {
        path: '', component: _sign_up_component__WEBPACK_IMPORTED_MODULE_0__.SignUpComponent, data: {
            title: 'J U P I T A | Create Your Free Account',
            metaTitle: 'Getting Started Is Fast Easy & Free',
            metaDescription: 'Create your free account and get started with developer friendly APIs.'
        }
    },
    {
        path: ':email', component: _invite_sign_up_component__WEBPACK_IMPORTED_MODULE_1__.InviteSignUpComponent, data: {
            title: 'J U P I T A | Join Your Team'
        }
    }
];
class SignUpRoutingModule {
}
SignUpRoutingModule.ɵfac = function SignUpRoutingModule_Factory(t) { return new (t || SignUpRoutingModule)(); };
SignUpRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SignUpRoutingModule });
SignUpRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SignUpRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 8422:
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 892);
/* harmony import */ var _service_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/alert.service */ 3833);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _service_script_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/script-loader.service */ 5679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);









function SignUpComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_23_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please enter a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SignUpComponent_div_23_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SignUpComponent_div_23_div_2_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.email || ctx_r0.f.email.errors.pattern);
} }
function SignUpComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Full name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SignUpComponent_div_31_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.f.fullName.errors.required);
} }
function SignUpComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_40_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Your password must contain both uppercase and lowercase letters, a number, a symbol, and min of 8 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SignUpComponent_div_40_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SignUpComponent_div_40_div_2_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.pg.controls.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.pg.controls.password.errors.pattern);
} }
function SignUpComponent_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SignUpComponent_div_48_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.pg.errors);
} }
function SignUpComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.existEmailError);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class SignUpComponent {
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
        this.existEmailError = '';
        this.form = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(this.authService.EMAIL_REGEXP)])],
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            passwordGroup: this.formBuilder.group({
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
                confirmPassword: ['']
            }, { validator: this.checkPasswords })
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
        this.authService.register(this.form.value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)())
            .subscribe({
            next: () => {
                // this.alertService.success('Registration successful, please verify your email address to login.', { keepAfterRouteChange: true, autoClose: true });
                this.router.navigate(['/resend-verification-email/' + this.form.value.email]);
            },
            error: error => {
                // this.alertService.error(this.alertService.AlertMessages.EmailAlreadyExists, {autoDismiss: false});
                // this.loading = false;
                this.existEmailError = this.alertService.AlertMessages.EmailAlreadyExists;
            }
        });
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_script_loader_service__WEBPACK_IMPORTED_MODULE_2__.ScriptLoaderService)); };
SignUpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 54, vars: 18, consts: [[1, "partical-bg-wrap"], ["id", "particles-js"], [1, "container"], [1, "align", "mt-9"], ["href", "/", 1, "navbar-brand", "mr-0"], ["alt", "J U P I T A", "width", "108", "height", "60", "src", "./../../../assets/images/Jupita.png", 1, "img-fluid"], [1, "row", "justify-content-center", "form-panel"], [1, "col-md-7", "col-md-offset-5", "col-lg-4", "col-lg-offset-4", "col-xl-4", "col-xl-offset-8", "col-sm-8", "col-sm-offset-2"], [1, "add-label"], [1, "d-block"], ["href", "/sign-in", 1, "link-text"], ["method", "post", "action", "#", 1, "form-horizontal", "mt-5", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-sm-12"], ["for", "email", 1, "control-label"], [1, "input-group"], ["formControlName", "email", "type", "text", "autocomplete", "email", "name", "email", "id", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "username", 1, "control-label"], ["formControlName", "fullName", "type", "text", "name", "fullName", "id", "fullName", 1, "form-control", 3, "ngClass"], ["formGroupName", "passwordGroup"], ["for", "password", 1, "control-label"], ["formControlName", "password", "type", "password", "name", "password", "autocomplete", "new-password", "id", "new-password", 1, "form-control", 3, "ngClass"], ["for", "confirm", 1, "control-label"], ["formControlName", "confirmPassword", "type", "password", "name", "confirm", "id", "confirm", 1, "form-control", 3, "ngClass"], [1, "form-group", "pt-3"], [1, "custom-btn", "btn-light", "btn-lg", "btn-block", "login-button", "create-button"], ["class", "server-error", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], ["class", "error-feedack", 4, "ngIf"], [1, "error-feedack"], [1, "server-error"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Create your free account and get started with developer friendly APIs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Already a user? Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_15_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, SignUpComponent_div_23_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Full name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, SignUpComponent_div_31_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, SignUpComponent_div_40_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, SignUpComponent_div_48_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, SignUpComponent_div_53_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c0, ctx.submitted && ctx.f.fullName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.fullName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c0, ctx.submitted && ctx.pg.controls.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.pg.controls.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c0, ctx.submitted && ctx.pg.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.existEmailError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName], styles: [".form-panel[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.form-panel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Montserrat-Regular\";\n  font-weight: 600;\n  line-height: 2;\n}\n.align[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 25px;\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px #C6C6C6 inset !important;\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n}\n.container[_ngcontent-%COMP%] {\n  opacity: 0;\n  text-align: center;\n  animation: fadein 1s;\n  animation-delay: 0.5s;\n  animation-fill-mode: forwards;\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  \n  to {\n    opacity: 1;\n  }\n}\n.add-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n#particles-js[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.error-feedack[_ngcontent-%COMP%] {\n  color: #C6C6C6;\n  font-size: 11px;\n}\n.create-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n@media screen and (max-width: 767px) {\n  .hide-phone[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.show-phone[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 767px) {\n  .show-phone[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media screen and (max-width: 767px) {\n  .mt-9[_ngcontent-%COMP%] {\n    margin-top: 4rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXGFzc2V0c1xcc3R5bGVzaGVldHNcXHZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtBQUFKO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkNRUTtFRFBSLGNBQUE7QUFDUjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7Ozs7RUFJSSx1REFBQTtFQUNBLHlEQUFBO0VBQUEsaURBQUE7QUFDSjtBQUVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUlBLDZCQUFBO0FBQ0o7QUFDQTtFQUNJO0lBQU8sVUFBQTtFQUdUO0VBSHVCLDhHQUFBO0VBQ3JCO0lBQUssVUFBQTtFQU1QO0FBQ0Y7QUFKQTtFQUNJLGVBQUE7QUFNSjtBQUhBO0VBQ0ksWUFBQTtBQU1KO0FBSEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQU1KO0FBSEE7RUFDSSxnQkFBQTtBQU1KO0FBRkk7RUFESjtJQUVRLHdCQUFBO0VBTU47QUFDRjtBQUhBO0VBQ0ksYUFBQTtBQU1KO0FBTEk7RUFGSjtJQUdRLGNBQUE7RUFRTjtBQUNGO0FBTEE7RUFDSTtJQUNJLDJCQUFBO0VBUU47QUFDRiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0cy92YXJpYWJsZS5zY3NzXCI7XHJcbi5mb3JtLXBhbmVse1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHNwYW57XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYnJhbmQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICAkZm9udC1zZW1pYm9sZDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIH1cclxufVxyXG4uYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlciwgXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsIFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmFjdGl2ZSAge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAzMHB4ICNDNkM2QzYgaW5zZXQgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwMHMgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBvcGFjaXR5OiAwOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBhbmltYXRpb246IGZhZGVpbiAxczsgXHJcbiAgICBhbmltYXRpb24tZGVsYXk6MC41czsgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyBcclxuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7IFxyXG4gICAgLW1zLWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyBcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG59XHJcbkBrZXlmcmFtZXMgZmFkZWluIHsgXHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfSAvKlVwZGF0ZSBiZWNhdXNlIHlvdSBhc2tlZCBmb3IgdGhpcyBudW1iZXJzIEJVVCBpIHByb3Bvc2UgZnJvbSAwIG90aGVyd2lzZSB5b3UgYXJlIGluc3RhbnRseSBzZWVpbmcgdGhlIGRpdi4gKi9cclxuICAgIHRvIHsgb3BhY2l0eTogMTt9IFxyXG59XHJcblxyXG4uYWRkLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4jcGFydGljbGVzLWpzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmVycm9yLWZlZWRhY2sge1xyXG4gICAgY29sb3I6ICNDNkM2QzY7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5jcmVhdGUtYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5oaWRlLXBob25lIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6JHBob25lKXtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zaG93LXBob25lIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6JHBob25lKXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDokcGhvbmUpe1xyXG4gICAgLm10LTl7XHJcbiAgICAgICAgbWFyZ2luLXRvcDo0cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIkbW9udHNlcnJhdC1yZWd1bGFydHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLnR0ZlwiO1xyXG4kbW9udHNlcnJhdC1zZW1pYm9sZHR0Zi1mb250LXBhdGg6IFwiYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQtU2VtaUJvbGQudHRmXCI7XHJcbiRtb250c2VycmF0LWxpZ2h0LXR0Zi1mb250LXBhdGg6IFwiYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQtTGlnaHQudHRmXCI7XHJcbiRwb3BwaW5zLWxpZ2h0LXR0Zi1mb250LXBhdGg6IFwiYXNzZXRzL2ZvbnRzL1BvcHBpbnMtTGlnaHQudHRmXCI7XHJcbiRwb3BwaW5zLXJlZ3VsYXItdHRmLWZvbnQtcGF0aDogXCJhc3NldHMvZm9udHMvUG9wcGlucy1yZWd1bGFyLnR0ZlwiO1xyXG4kZm9udC1mYW1pbHktYnJhbmQ6ICdNb250c2VycmF0LVJlZ3VsYXInO1xyXG4kZm9udC1mYW1pbHktc2VtaWJvbGQ6ICdNb250c2VycmF0LVNlbWlCb2xkJztcclxuJGZvbnQtZmFtaWx5LWxpZ2h0OiAnTW9udHNlcnJhdC1MaWdodCc7XHJcbiRmb250LWZhbWlseS1wb3BwaW5zOidQb3BwaW5zLUxpZ2h0JztcclxuJGZvbnQtZmFtaWx5LXBvcHBpbnMtcmVndWxhcjonUG9wcGlucy1SZWd1bGFyJztcclxuJHByaW1hcnktY29sb3I6I0M2QzZDNjtcclxuJGxpbmstdGV4dC1wcmltYXJ5OiNDNkM2QzY7XHJcbiRwcmltYXJ5LWZvbnQtY29sb3I6IzE4MTgxODtcclxuLy8gICRmb250LXJlZ3VsYXI6J01vbnRzZXJyYXQtUmVndWxhcic7XHJcbiRmb250LXNlbWlib2xkOiA2MDA7XHJcbiRmb250LWxpZ2h0OjMwMDtcclxuLy8gUmVzcG9uc2l2ZSBzY3JlZW4gZGVjbGFyYXRpb25cclxuJHNtYWxsLXBob25lczogMzYwcHg7XHJcbiRwaG9uZTogNzY3cHg7XHJcbiR0YWJsZXQtbWluOjc2OHB4O1xyXG4kdGFibGV0LW1heDoxMDI0cHg7XHJcbiR0b3RhbDogMzUwOyAvLyB0b3RhbCBwYXJ0aWNsZXNcclxuJG9yYi1zaXplOiAxMDBweDtcclxuJHBhcnRpY2xlLXNpemU6IDJweDtcclxuJHRpbWU6IDMwcztcclxuJGJhc2UtaHVlOiAwOyAvLyBjaGFuZ2UgZm9yIGRpZmYgY29sb3JzICgxODAgaXMgbmljZSlcclxuXHJcbi8vIE5vdGU6IHRoZXNlIGJyZWFraW5nIHBvaW50cyBkb2VzIHNlZW0gbWlzbGVhZGluZyBhbmQgbm90IGFsaW5nZWQgd2l0aCBib290c3RyYXAgYnJlYWtpbmcgcG9pbnRzIFxyXG4vLyBCcmVha3BvaW50c1xyXG4kYnAtc21hbGw6IDQ4ZW07IC8vIDc2OHB4XHJcbiRicC1tZWRpdW06IDE0NDBweDsgLy8gMTAyNHB4IFxyXG4kYnAtbGFyZ2U6IDE5MjBweDsgLy8gODUuMzc1ZW0gMTM2NnB4XHJcbiRicC14bGFyZ2U6IDIwNDhweDsgLy8gMTIwZW0gMTkyMHB4XHJcbiRicC14eGxhcmdlOiAzODQwcHg7IC8vIDE2MGVtIDI1NjBweFxyXG4vLyBNZWRpYSBRdWVyaWVzXHJcbiRtcS1zbWFsbDogXCIobWluLXdpZHRoOiAjeyRicC1zbWFsbH0pXCI7XHJcbiRtcS1tZWRpdW06IFwiKG1pbi13aWR0aDogI3skYnAtbWVkaXVtfSlcIjtcclxuJG1xLWxhcmdlOiBcIihtaW4td2lkdGg6ICN7JGJwLWxhcmdlfSlcIjtcclxuJG1xLXhsYXJnZTogXCIobWluLXdpZHRoOiAjeyRicC14bGFyZ2V9KVwiO1xyXG4kbXEteHhsYXJnZTogXCIobWluLXdpZHRoOiAjeyRicC14eGxhcmdlfSlcIjtcclxuJG1xLXJldGluYTogXCIoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpXCI7Il19 */"] });


/***/ }),

/***/ 3982:
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpModule": () => (/* binding */ SignUpModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-routing.module */ 9204);
/* harmony import */ var _sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.component */ 8422);
/* harmony import */ var _invite_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invite-sign-up.component */ 5448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);






class SignUpModule {
}
SignUpModule.ɵfac = function SignUpModule_Factory(t) { return new (t || SignUpModule)(); };
SignUpModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SignUpModule });
SignUpModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SignUpModule, { declarations: [_sign_up_component__WEBPACK_IMPORTED_MODULE_1__.SignUpComponent, _invite_sign_up_component__WEBPACK_IMPORTED_MODULE_2__.InviteSignUpComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sign-up_sign-up_module_ts.js.map