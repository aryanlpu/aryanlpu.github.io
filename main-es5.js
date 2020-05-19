(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-light bg-primary d-flex justify-content-between\">\n  <div class=\"navbar-brand mb-0 h1 text-white\">HP Bill Invoice</div>\n</nav>\n<div class=\"container-fluid\">\n  <form #resumeForm=\"ngForm\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"shadow-sm card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title d-flex align-items-center\">\n              <i class=\"material-icons\">\n                account_circle\n              </i>\n              Personal Details</h4>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"resume.name\" name=\"name\" placeholder=\"Name\"\n                    #Name=\"ngModel\" required\n                    [ngClass]=\"{'is-invalid': Name.invalid && (Name.touched || resumeForm.submitted) }\">\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"form-group\">\n                    <textarea class=\"form-control\" [(ngModel)]=\"resume.address\" name=\"address\" rows=\"3\"\n                      placeholder=\"Address\" #Address=\"ngModel\" required\n                      [ngClass]=\"{'is-invalid': Address.invalid && (Address.touched || resumeForm.submitted) }\"></textarea>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"resume.contactNo\" name=\"contactNo\"\n                    placeholder=\"Contact No.\" #ContactNo=\"ngModel\" required\n                    [ngClass]=\"{'is-invalid': ContactNo.invalid && (ContactNo.touched || resumeForm.submitted) }\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"resume.email\" name=\"emailId\"\n                    placeholder=\"Email ID\" #Email=\"ngModel\" required\n                    [ngClass]=\"{'is-invalid': Email.invalid && (Email.touched || resumeForm.submitted) }\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"resume.socialProfile\" name=\"socialProfile\"\n                    placeholder=\"Social Profile \">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Skills -->\n        <div class=\"shadow-sm card\">\n          <div class=\"card-body\">\n            <div class=\"d-flex justify-content-between card-title\">\n              <h4 class=\"d-flex align-items-center\">\n                <i class=\"material-icons\">\n                  timeline\n                </i>\n                Skills</h4>\n              <button class=\"btn btn-primary\" (click)=\"addSkill()\">+</button>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4\" *ngFor=\"let s of resume.skills; let i=index\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" name=\"skill{{i}}\" [(ngModel)]=\"s.value\"\n                    placeholder=\"e.g. Java / Angular / .Net \" #Skill=\"ngModel\" required\n                    [ngClass]=\"{'is-invalid': Skill.invalid && (Skill.touched || resumeForm.submitted) }\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <!-- Experience -->\n        <div class=\"shadow-sm card\">\n          <div class=\"card-body\">\n            <div class=\"d-flex justify-content-between card-title\">\n              <h4 class=\"d-flex align-items-center\">\n                <i class=\"material-icons\">\n                  timeline\n                </i>\n                Experience</h4>\n              <button class=\"btn btn-primary\" (click)=\"addExperience()\">+</button>\n            </div>\n            <div class=\"row\" *ngFor=\"let ex of resume.experiences; let i=index\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" name=\"employer{{i}}\" [(ngModel)]=\"ex.employer\"\n                    placeholder=\"Employer\" #Employer=\"ngModel\" required\n                    [ngClass]=\"{'is-invalid': Employer.invalid && (Employer.touched || resumeForm.submitted) }\">\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"form-group\">\n                    <textarea class=\"form-control\" name=\"jobDescription{{i}}\" [(ngModel)]=\"ex.jobDescription\" rows=\"3\"\n                      placeholder=\"Job Description\"></textarea>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" name=\"jobTitle{{i}}\" [(ngModel)]=\"ex.jobTitle\"\n                    placeholder=\"Job Title\" #JobTitle=\"ngModel\" required\n                    [ngClass]=\"{'is-invalid': JobTitle.invalid && (JobTitle.touched || resumeForm.submitted) }\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"number\" class=\"form-control\" name=\"exInMonths{{i}}\" [(ngModel)]=\"ex.experience\"\n                    placeholder=\"Experience in months\" #Experience=\"ngModel\" required\n                    [ngClass]=\"{'is-invalid': Experience.invalid && (Experience.touched || resumeForm.submitted) }\">\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <!-- Education -->\n        <div class=\"shadow-sm card\">\n          <div class=\"card-body\">\n            <div class=\"d-flex justify-content-between card-title\">\n              <h4 class=\"d-flex align-items-center\">\n                <i class=\"material-icons\">\n                  school\n                </i>\n                Education</h4>\n              <button class=\"btn btn-primary\" (click)=\"addEducation()\">+</button>\n            </div>\n            <div class=\"row\" *ngFor=\"let ed of resume.educations; let i=index\">\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <select class=\"form-control\" placeholder=\"Degree\" name=\"degree{{i}}\" [(ngModel)]=\"ed.degree\"\n                    #Degree=\"ngModel\" required\n                    [ngClass]=\"{'is-invalid': Degree.invalid && (Degree.touched || resumeForm.submitted) }\">\n                    <option [value]=\"d\" *ngFor=\"let d of degrees\">{{d}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" name=\"college{{i}}\" [(ngModel)]=\"ed.college\"\n                    placeholder=\"School/College\" #College=\"ngModel\" required\n                    [ngClass]=\"{'is-invalid': College.invalid && (College.touched || resumeForm.submitted) }\">\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <input type=\"number\" class=\"form-control\" name=\"passingYear{{i}}\" [(ngModel)]=\"ed.passingYear\"\n                    placeholder=\"Passing Year\" #PassingYear=\"ngModel\" required\n                    [ngClass]=\"{'is-invalid': PassingYear.invalid && (PassingYear.touched || resumeForm.submitted) }\">\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <input type=\"number\" class=\"form-control\" name=\"result{{i}}\" [(ngModel)]=\"ed.percentage\"\n                    placeholder=\"Percentage\" #Percentage=\"ngModel\" required\n                    [ngClass]=\"{'is-invalid': Percentage.invalid && (Percentage.touched || resumeForm.submitted) }\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Other Details -->\n\n        <div class=\"shadow-sm card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title d-flex align-items-center\">\n              <i class=\"material-icons\"> list </i>Other Details</h4>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"resume.otherDetails\" name=\"otherDetails\"\n                    rows=\"4\"></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-4\">\n        <div class=\"shadow-sm card action-buttons\">\n          <button (click)=\"resumeForm.valid ? generatePdf('open') : ''\"\n            class=\"btn btn-primary d-flex align-items-center justify-content-center\">\n            <i class=\"material-icons\">\n              picture_as_pdf\n            </i> <span>Open PDF</span></button>\n          <button (click)=\"resumeForm.valid ? generatePdf('download') : ''\"\n            class=\"btn btn-primary d-flex align-items-center justify-content-center\">\n            <i class=\"material-icons\">\n              cloud_download\n            </i><span>Download PDF</span></button>\n          <button (click)=\"resumeForm.valid ? generatePdf('print') : ''\"\n            class=\"btn btn-primary d-flex align-items-center justify-content-center\">\n            <i class=\"material-icons\">\n              print\n            </i><span>Print PDF</span></button>\n\n          <button type='reset' (click)=\"resetForm()\"\n            class=\"btn btn-primary d-flex align-items-center justify-content-center\">\n            <i class=\"material-icons\">\n              clear\n            </i><span>Reset</span></button>\n        </div>\n\n        <div class=\"card p-4\">\n          <div class=\"form-group\">\n            <label class=\"h4 mb-3\" for=\"\">Show your picture in Resume</label>\n            <input type=\"file\" class=\"form-control-file\" (change)=\"fileChanged($event)\" aria-describedby=\"fileHelpId\">\n          </div>\n          <img *ngIf=\"resume.profilePic\" [src]=\"resume.profilePic\" class=\"img-thumbnail\">\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\n    padding: 10px;\n}\n\n.card{\n    margin: 10px;\n}\n\n.material-icons{\n    font-size: 30px;\n}\n\nbutton span{\n    font-size: 22px;\n}\n\n.action-buttons button{\n    margin : 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5tYXRlcmlhbC1pY29uc3tcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbmJ1dHRvbiBzcGFue1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmFjdGlvbi1idXR0b25zIGJ1dHRvbntcbiAgICBtYXJnaW4gOiA1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resume__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume */ "./src/app/resume.ts");
/* harmony import */ var _script_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script.service */ "./src/app/script.service.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__);






pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5___default.a.pdfMake.vfs;
var AppComponent = /** @class */ (function () {
    function AppComponent(scriptService) {
        this.scriptService = scriptService;
        this.resume = new _resume__WEBPACK_IMPORTED_MODULE_2__["Resume"]();
        this.degrees = ['B.E.', 'M.E.', 'B.Com', 'M.Com'];
        this.resume = JSON.parse(sessionStorage.getItem('resume')) || new _resume__WEBPACK_IMPORTED_MODULE_2__["Resume"]();
        if (!this.resume.experiences || this.resume.experiences.length === 0) {
            this.resume.experiences = [];
            this.resume.experiences.push(new _resume__WEBPACK_IMPORTED_MODULE_2__["Experience"]());
        }
        if (!this.resume.educations || this.resume.educations.length === 0) {
            this.resume.educations = [];
            this.resume.educations.push(new _resume__WEBPACK_IMPORTED_MODULE_2__["Education"]());
        }
        if (!this.resume.skills || this.resume.skills.length === 0) {
            this.resume.skills = [];
            this.resume.skills.push(new _resume__WEBPACK_IMPORTED_MODULE_2__["Skill"]());
        }
        console.log('Loading External Scripts');
        this.scriptService.load('pdfMake', 'vfsFonts');
    }
    AppComponent.prototype.addExperience = function () {
        this.resume.experiences.push(new _resume__WEBPACK_IMPORTED_MODULE_2__["Experience"]());
    };
    AppComponent.prototype.addEducation = function () {
        this.resume.educations.push(new _resume__WEBPACK_IMPORTED_MODULE_2__["Education"]());
    };
    AppComponent.prototype.generatePdf = function (action) {
        if (action === void 0) { action = 'open'; }
        console.log(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a);
        var documentDefinition = this.getDocumentDefinition();
        switch (action) {
            case 'open':
                pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(documentDefinition).open();
                break;
            case 'print':
                pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(documentDefinition).print();
                break;
            case 'download':
                pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(documentDefinition).download();
                break;
            default:
                pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(documentDefinition).open();
                break;
        }
    };
    AppComponent.prototype.resetForm = function () {
        this.resume = new _resume__WEBPACK_IMPORTED_MODULE_2__["Resume"]();
    };
    AppComponent.prototype.getDocumentDefinition = function () {
        sessionStorage.setItem('resume', JSON.stringify(this.resume));
        return {
            content: [
                {
                    text: 'RESUME',
                    bold: true,
                    fontSize: 20,
                    alignment: 'center',
                    margin: [0, 0, 0, 20]
                },
                {
                    columns: [
                        [{
                                text: this.resume.name,
                                style: 'name'
                            },
                            {
                                text: this.resume.address
                            },
                            {
                                text: 'Email : ' + this.resume.email,
                            },
                            {
                                text: 'Contant No : ' + this.resume.contactNo,
                            },
                            {
                                text: 'GitHub: ' + this.resume.socialProfile,
                                link: this.resume.socialProfile,
                                color: 'blue',
                            }
                        ],
                        [
                            this.getProfilePicObject()
                        ]
                    ]
                },
                {
                    text: 'Skills',
                    style: 'header'
                },
                {
                    columns: [
                        {
                            ul: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.resume.skills.filter(function (value, index) { return index % 3 === 0; }).map(function (s) { return s.value; }))
                        },
                        {
                            ul: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.resume.skills.filter(function (value, index) { return index % 3 === 1; }).map(function (s) { return s.value; }))
                        },
                        {
                            ul: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.resume.skills.filter(function (value, index) { return index % 3 === 2; }).map(function (s) { return s.value; }))
                        }
                    ]
                },
                {
                    text: 'Experience',
                    style: 'header'
                },
                this.getExperienceObject(this.resume.experiences),
                {
                    text: 'Education',
                    style: 'header'
                },
                this.getEducationObject(this.resume.educations),
                {
                    text: 'Other Details',
                    style: 'header'
                },
                {
                    text: this.resume.otherDetails
                },
                {
                    text: 'Signature',
                    style: 'sign'
                },
                {
                    columns: [
                        { qr: this.resume.name + ', Contact No : ' + this.resume.contactNo, fit: 100 },
                        {
                            text: "(" + this.resume.name + ")",
                            alignment: 'right',
                        }
                    ]
                }
            ],
            info: {
                title: this.resume.name + '_RESUME',
                author: this.resume.name,
                subject: 'RESUME',
                keywords: 'RESUME, ONLINE RESUME',
            },
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 20, 0, 10],
                    decoration: 'underline'
                },
                name: {
                    fontSize: 16,
                    bold: true
                },
                jobTitle: {
                    fontSize: 14,
                    bold: true,
                    italics: true
                },
                sign: {
                    margin: [0, 50, 0, 10],
                    alignment: 'right',
                    italics: true
                },
                tableHeader: {
                    bold: true,
                }
            }
        };
    };
    AppComponent.prototype.getExperienceObject = function (experiences) {
        var exs = [];
        experiences.forEach(function (experience) {
            exs.push([{
                    columns: [
                        [{
                                text: experience.jobTitle,
                                style: 'jobTitle'
                            },
                            {
                                text: experience.employer,
                            },
                            {
                                text: experience.jobDescription,
                            }],
                        {
                            text: 'Experience : ' + experience.experience + ' Months',
                            alignment: 'right'
                        }
                    ]
                }]);
        });
        return {
            table: {
                widths: ['*'],
                body: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](exs)
            }
        };
    };
    AppComponent.prototype.getEducationObject = function (educations) {
        return {
            table: {
                widths: ['*', '*', '*', '*'],
                body: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([
                    [{
                            text: 'Degree',
                            style: 'tableHeader'
                        },
                        {
                            text: 'College',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Passing Year',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Result',
                            style: 'tableHeader'
                        },
                    ]
                ], educations.map(function (ed) {
                    return [ed.degree, ed.college, ed.passingYear, ed.percentage];
                }))
            }
        };
    };
    AppComponent.prototype.getProfilePicObject = function () {
        if (this.resume.profilePic) {
            return {
                image: this.resume.profilePic,
                width: 75,
                alignment: 'right'
            };
        }
        return null;
    };
    AppComponent.prototype.fileChanged = function (e) {
        var file = e.target.files[0];
        this.getBase64(file);
    };
    AppComponent.prototype.getBase64 = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log(reader.result);
            _this.resume.profilePic = reader.result;
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };
    AppComponent.prototype.addSkill = function () {
        this.resume.skills.push(new _resume__WEBPACK_IMPORTED_MODULE_2__["Skill"]());
    };
    AppComponent.ctorParameters = function () { return [
        { type: _script_service__WEBPACK_IMPORTED_MODULE_3__["ScriptService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/resume.ts":
/*!***************************!*\
  !*** ./src/app/resume.ts ***!
  \***************************/
/*! exports provided: Resume, Experience, Education, Skill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume", function() { return Resume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experience", function() { return Experience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Education", function() { return Education; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
var Resume = /** @class */ (function () {
    function Resume() {
        this.experiences = [];
        this.educations = [];
        this.skills = [];
        this.experiences.push(new Experience());
        this.educations.push(new Education());
        this.skills.push(new Skill());
    }
    return Resume;
}());

var Experience = /** @class */ (function () {
    function Experience() {
    }
    return Experience;
}());

var Education = /** @class */ (function () {
    function Education() {
    }
    return Education;
}());

var Skill = /** @class */ (function () {
    function Skill() {
    }
    return Skill;
}());



/***/ }),

/***/ "./src/app/script.service.ts":
/*!***********************************!*\
  !*** ./src/app/script.service.ts ***!
  \***********************************/
/*! exports provided: ScriptStore, ScriptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptStore", function() { return ScriptStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptService", function() { return ScriptService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScriptStore = [
    { name: 'pdfMake', src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.59/pdfmake.min.js' },
    { name: 'vfsFonts', src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.59/vfs_fonts.js' }
];
var ScriptService = /** @class */ (function () {
    function ScriptService() {
        var _this = this;
        this.scripts = {};
        ScriptStore.forEach(function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    ScriptService.prototype.load = function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    ScriptService.prototype.loadScript = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // resolve if already loaded
            if (_this.scripts[name].loaded) {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
            else {
                // load script
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = _this.scripts[name].src;
                script.onload = function () {
                    _this.scripts[name].loaded = true;
                    console.log(name + " Loaded.");
                    resolve({ script: name, loaded: true, status: 'Loaded' });
                };
                script.onerror = function (error) { return resolve({ script: name, loaded: false, status: 'Loaded' }); };
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        });
    };
    ScriptService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ScriptService);
    return ScriptService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\devri\Documents\projects\bill-invoice\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map