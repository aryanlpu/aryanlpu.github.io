(self["webpackChunkJupita"] = self["webpackChunkJupita"] || []).push([["src_app_pricing_pricing_module_ts"],{

/***/ 8757:
/*!***************************************************!*\
  !*** ./src/app/pricing/pricing-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PricingRoutingModule": () => (/* binding */ PricingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pricing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pricing.component */ 6607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [{ path: '', component: _pricing_component__WEBPACK_IMPORTED_MODULE_0__.PricingComponent, data: { title: 'J U P I T A | Pricing For Any Size Enterprise', metaTitle: 'Pricing For Any Size Enterprise', metaDescription: 'Only pay for what you use - no contracts or subscriptions, ever. Pay-as-you-go gives you the freedom to scale up or down anytime.' } }];
class PricingRoutingModule {
}
PricingRoutingModule.ɵfac = function PricingRoutingModule_Factory(t) { return new (t || PricingRoutingModule)(); };
PricingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PricingRoutingModule });
PricingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PricingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6607:
/*!**********************************************!*\
  !*** ./src/app/pricing/pricing.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PricingComponent": () => (/* binding */ PricingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class PricingComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    redirectToSignUP() {
        this.router.navigate(['/sign-up']);
    }
}
PricingComponent.ɵfac = function PricingComponent_Factory(t) { return new (t || PricingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
PricingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PricingComponent, selectors: [["app-pricing"]], decls: 83, vars: 0, consts: [[1, "custom-size", "overflow-hidden"], [1, "row"], [1, "main-container"], [1, "banner-section", "mb-6", "pt-10", "d-flex", "text-center", "w-100"], [1, "col-md-12"], [1, "mb-6", "font-weight300", "font-poppinsL"], [1, "mb-7", "w-50", "small-size", "content-width"], [1, "pricing-section"], [1, "pricing-background"], [1, "panel-second", "mb-9", "mt-4", "px-4"], [1, "panel-header", "d-flex", "justify-content-center", "text-center"], [1, "col-md-8", "col-lg-7"], [1, "article-section", "clearfix"], [1, "col-md-4", "text-center", "ar-col"], [1, "article-img", "d-flex", "justify-content-center", "mb-1", "mb-md-4", "mdb-lg-4", "mb-xl-4"], ["src", "assets/icons/pricing_icon/scale.svg", "width", "175", "height", "175", "alt", "Scale", 1, "img-responsive"], [1, "article-content"], ["src", "assets/icons/pricing_icon/free.svg", "width", "175", "height", "175", "alt", "Free", 1, "img-responsive"], ["src", "assets/icons/pricing_icon/cc.svg", "width", "175", "height", "175", "alt", "Credit Card", 1, "img-responsive"], [1, "main-container", "mb-5", "mb-md-0"], [1, "panel-fourth", "mb-9", "mt-9", "w-100"], [1, "panel-header", "text-center", "col-md-7", "m-auto", "pb-5"], [1, "mb-4"], [1, "table-panel", "col-md-10", "m-auto"], [1, "table-responsive"], [1, "table", "table-bordered", "custom-table"], [1, "text-center", "pt-4", "mobile-view"], [1, "caption-break"], ["href", "mailto:support@jupita.io?subject=Hello", 1, "no-text-decoration"], [1, "text-center", "pt-4", "non-mobile-view"], ["width", "25%", "scope", "row"], ["width", "25%"]], template: function PricingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Jupita Pricing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Only pay for what you use - no contracts or subscriptions, ever. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Pricing For Any Size Enterprise ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Pay-as-you-go gives you the freedom to scale up or down anytime. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "5,000 free API requests - every month. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Start building today with full API access - no credit card required. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Jupita Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "caption", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Pricing in USD per ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "dump");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " API request. Based on monthly use.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " For monthly API requests above 500k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " contact sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "caption", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Pricing in USD per ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "dump");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " API request.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Based on monthly use. For monthly API requests above 500k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " contact sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "0-5k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "5k-50k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "50k-250k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "250k-500k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "$0.015");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "$0.009");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "$0.007");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-container[_ngcontent-%COMP%] {\n  font-family: Poppins-Light;\n}\n\n.banner-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n  font-size: 3.5rem;\n}\n\n.banner-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: auto;\n  font-size: 2rem;\n}\n\n@media (max-width: 767px) {\n  .banner-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.1rem !important;\n    padding-top: 1.5rem;\n  }\n}\n\n.panel-fourth[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.table-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 5px;\n  background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.table-panel[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  border-top: none;\n}\n\n.table-panel[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-panel[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 28px;\n  padding-bottom: 28px;\n  text-align: center;\n  font-size: 1.5rem;\n  color: #FFF;\n}\n\n@media screen and (max-width: 767px) {\n  .banner-section[_ngcontent-%COMP%] {\n    padding-top: 0 !important;\n    margin-bottom: 30px !important;\n  }\n\n  .article-section[_ngcontent-%COMP%]   .ar-col[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n    text-align: center;\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  }\n\n  .table-panel[_ngcontent-%COMP%] {\n    padding-top: 15px;\n  }\n\n  .table-panel[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-panel[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n\n.pricing-section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.pricing-background[_ngcontent-%COMP%] {\n  background: url('pricing_background.png');\n  background-repeat: no-repeat;\n  background-size: 160% 71%;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  pointer-events: none;\n  background-position: center;\n  transition: height 0.3s ease-in;\n  margin-right: -20px;\n  left: 0;\n  right: 0;\n}\n\n.non-mobile-view[_ngcontent-%COMP%] {\n  display: table-caption;\n}\n\n.mobile-view[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (min-width: 768px) {\n  .pricing-background[_ngcontent-%COMP%] {\n    height: 110%;\n    margin-top: -30%;\n    background-size: 110% 55%;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .pricing-background[_ngcontent-%COMP%] {\n    height: 120%;\n    background-size: 105% 73%;\n  }\n}\n\n@media screen and (min-width: 1800px) {\n  .pricing-background[_ngcontent-%COMP%] {\n    height: 140%;\n    margin-top: -24%;\n    background-size: 105% 73%;\n  }\n}\n\n.mb-9[_ngcontent-%COMP%] {\n  margin-bottom: 9rem !important;\n}\n\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 6rem !important;\n}\n\nbr[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 360px) {\n  .banner-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem !important;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 1.1rem !important;\n    line-height: 1.5 !important;\n  }\n\n  .custom-table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n    font-size: 0.5rem !important;\n  }\n\n  .table-panel[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-panel[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 0.6rem !important;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .mb-9[_ngcontent-%COMP%] {\n    margin-bottom: 1rem !important;\n  }\n\n  .mb-6[_ngcontent-%COMP%] {\n    margin-bottom: 3rem !important;\n  }\n\n  .mb-7[_ngcontent-%COMP%] {\n    margin-bottom: 3rem !important;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem !important;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    line-height: 1.5 !important;\n  }\n\n  .content-width[_ngcontent-%COMP%] {\n    max-width: 340px;\n    width: 100% !important;\n  }\n\n  .custom-table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n\n  .custom-table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]   .caption-break[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .table-panel[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-panel[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 0.67rem;\n  }\n}\n\n@media screen and (min-width: 768px) and (max-width: 1024px) {\n  .caption-break[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .banner-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.7rem !important;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 1.7rem !important;\n  }\n}\n\n@media screen and (width: 768px) {\n  .content-width[_ngcontent-%COMP%] {\n    width: 60% !important;\n  }\n\n  .mt-9[_ngcontent-%COMP%] {\n    margin-top: 2rem !important;\n  }\n\n  .custom-table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n\n  .w-200[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n\n  td[_ngcontent-%COMP%] {\n    font-size: 1.3rem !important;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .custom-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 1.7rem 0.25rem !important;\n  }\n\n  .non-mobile-view[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-view[_ngcontent-%COMP%] {\n    display: table-caption;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .panel-fourth[_ngcontent-%COMP%] {\n    margin-top: 2rem !important;\n  }\n}\n\ncode[_ngcontent-%COMP%] {\n  color: #181818;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaWNpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwwQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJO0lBQ0ksNEJBQUE7SUFDQSxtQkFBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSSxlQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBOztFQUVJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlBO0VBQ0k7SUFDSSx5QkFBQTtJQUNBLDhCQUFBO0VBRE47O0VBR0U7SUFDSSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsMEJBQUE7SUFDQSwyQkFBQTtFQUFOOztFQUVFO0lBQ0ksaUJBQUE7RUFDTjs7RUFDRTs7SUFFSSxpQkFBQTtFQUVOO0FBQ0Y7O0FBQ0E7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFDQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7RUFFTjtBQUNGOztBQUFBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EseUJBQUE7RUFFTjtBQUNGOztBQUFBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtFQUVOO0FBQ0Y7O0FBQ0E7RUFDSSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksNEJBQUE7RUFDTjs7RUFDRTtJQUNJLDRCQUFBO0lBQ0EsMkJBQUE7RUFFTjs7RUFBRTtJQUNJLDRCQUFBO0VBR047O0VBREU7O0lBRUksNEJBQUE7RUFJTjtBQUNGOztBQURBO0VBQ0k7SUFDSSw4QkFBQTtFQUdOOztFQURFO0lBQ0ksOEJBQUE7RUFJTjs7RUFGRTtJQUNJLDhCQUFBO0VBS047O0VBSEU7SUFDSSw0QkFBQTtFQU1OOztFQUpFO0lBQ0ksMkJBQUE7RUFPTjs7RUFMRTtJQUNJLGdCQUFBO0lBQ0Esc0JBQUE7RUFRTjs7RUFORTtJQUNJLGlCQUFBO0VBU047O0VBUEU7SUFDSSxlQUFBO0VBVU47O0VBUkU7O0lBRUksa0JBQUE7RUFXTjtBQUNGOztBQVJBO0VBQ0k7SUFDSSxjQUFBO0VBVU47O0VBUkU7SUFDSSw0QkFBQTtFQVdOOztFQVRFO0lBQ0ksNEJBQUE7RUFZTjtBQUNGOztBQVRBO0VBQ0k7SUFDSSxxQkFBQTtFQVdOOztFQVRFO0lBQ0ksMkJBQUE7RUFZTjs7RUFWRTtJQUNJLGtCQUFBO0VBYU47O0VBWEU7SUFDSSxZQUFBO0VBY047O0VBWkU7SUFDSSw0QkFBQTtFQWVOO0FBQ0Y7O0FBWkE7RUFDSTtJQUNJLGtDQUFBO0VBY047O0VBWkU7SUFDSSxhQUFBO0VBZU47O0VBYkU7SUFDSSxzQkFBQTtFQWdCTjtBQUNGOztBQWRBO0VBQ0k7SUFDSSwyQkFBQTtFQWdCTjtBQUNGOztBQWJBO0VBQ0UsY0FBQTtBQWVGIiwiZmlsZSI6InByaWNpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3N0eWxlc2hlZXRzL3ZhcmlhYmxlLnNjc3NcIjtcclxuLm1haW4tY29udGFpbmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLUxpZ2h0O1xyXG59XHJcblxyXG4uYmFubmVyLXNlY3Rpb24gaDEge1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG59XHJcblxyXG4uYmFubmVyLXNlY3Rpb24gaDQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5iYW5uZXItc2VjdGlvbiBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGFuZWwtZm91cnRoIC5wYW5lbC1oZWFkZXIgaDMge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4udGFibGUtcGFuZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC41KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUtcGFuZWwgLnRhYmxlLXJlc3BvbnNpdmUgLnRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG59XHJcblxyXG4udGFibGUtcGFuZWwgLnRhYmxlLXJlc3BvbnNpdmUgLnRhYmxlIHRkLFxyXG4udGFibGUtcGFuZWwgLnRhYmxlLXJlc3BvbnNpdmUgLnRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmctdG9wOiAyOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmJhbm5lci1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5hcnRpY2xlLXNlY3Rpb24gLmFyLWNvbCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLXBhbmVsIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC50YWJsZS1wYW5lbCAudGFibGUtcmVzcG9uc2l2ZSAudGFibGUgdGQsXHJcbiAgICAudGFibGUtcGFuZWwgLnRhYmxlLXJlc3BvbnNpdmUgLnRhYmxlIHRoIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLnByaWNpbmctc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByaWNpbmctYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9wcmljaW5nX2JhY2tncm91bmQucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2MCUgNzElO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAuM3MgZWFzZS1pbjtcclxuICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcblxyXG59XHJcbi5ub24tbW9iaWxlLXZpZXd7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jYXB0aW9uO1xyXG59XHJcbi5tb2JpbGUtdmlld3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAucHJpY2luZy1iYWNrZ3JvdW5kIHtcclxuICAgICAgICBoZWlnaHQ6IDExMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTMwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDExMCUgNTUlO1xyXG59XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAucHJpY2luZy1iYWNrZ3JvdW5kIHtcclxuICAgICAgICBoZWlnaHQ6IDEyMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDUlIDczJTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxODAwcHgpIHtcclxuICAgIC5wcmljaW5nLWJhY2tncm91bmQge1xyXG4gICAgICAgIGhlaWdodDogMTQwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjQlO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTA1JSA3MyU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYi05IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDlyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1iLTYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5iciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgLmJhbm5lci1zZWN0aW9uIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmN1c3RvbS10YWJsZSBjYXB0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLXBhbmVsIC50YWJsZS1yZXNwb25zaXZlIC50YWJsZSB0ZCxcclxuICAgIC50YWJsZS1wYW5lbCAudGFibGUtcmVzcG9uc2l2ZSAudGFibGUgdGgge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC42cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAubWItOSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm1iLTYge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5tYi03IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY29udGVudC13aWR0aCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzNDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmN1c3RvbS10YWJsZSBjYXB0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgIH1cclxuICAgIC5jdXN0b20tdGFibGUgY2FwdGlvbiAuY2FwdGlvbi1icmVhayB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLXBhbmVsIC50YWJsZS1yZXNwb25zaXZlIC50YWJsZSB0ZCxcclxuICAgIC50YWJsZS1wYW5lbCAudGFibGUtcmVzcG9uc2l2ZSAudGFibGUgdGgge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC42N3JlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5jYXB0aW9uLWJyZWFrIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5iYW5uZXItc2VjdGlvbiBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjdyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDEuN3JlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAod2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY29udGVudC13aWR0aCB7XHJcbiAgICAgICAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm10LTkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jdXN0b20tdGFibGUgY2FwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgfVxyXG4gICAgLnctMjAwIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICB0ZHtcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmN1c3RvbS10YWJsZSB0Ym9keSB0ciB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMS43cmVtIDAuMjVyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5ub24tbW9iaWxlLXZpZXd7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5tb2JpbGUtdmlld3tcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jYXB0aW9uO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgLnBhbmVsLWZvdXJ0aCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvZGUge1xyXG4gIGNvbG9yOiAjMTgxODE4O1xyXG59Il19 */"] });


/***/ }),

/***/ 7719:
/*!*******************************************!*\
  !*** ./src/app/pricing/pricing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PricingModule": () => (/* binding */ PricingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _pricing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pricing-routing.module */ 8757);
/* harmony import */ var _pricing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pricing.component */ 6607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




class PricingModule {
}
PricingModule.ɵfac = function PricingModule_Factory(t) { return new (t || PricingModule)(); };
PricingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PricingModule });
PricingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _pricing_routing_module__WEBPACK_IMPORTED_MODULE_0__.PricingRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PricingModule, { declarations: [_pricing_component__WEBPACK_IMPORTED_MODULE_1__.PricingComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _pricing_routing_module__WEBPACK_IMPORTED_MODULE_0__.PricingRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pricing_pricing_module_ts.js.map