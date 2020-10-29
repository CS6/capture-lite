(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-defaultsignature-defaultsignature-module"],{

/***/ "/w+9":
/*!*******************************************************************!*\
  !*** ./src/app/pages/defaultsignature/defaultsignature.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlZmF1bHRzaWduYXR1cmUvZGVmYXVsdHNpZ25hdHVyZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "2e8A":
/*!***************************************************************************!*\
  !*** ./src/app/pages/defaultsignature/defaultsignature-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: DefaultSignaturePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSignaturePageRoutingModule", function() { return DefaultSignaturePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _defaultsignature_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultsignature.page */ "IdyX");




const routes = [
    {
        path: '',
        component: _defaultsignature_page__WEBPACK_IMPORTED_MODULE_3__["DefaultSignaturePage"]
    }
];
let DefaultSignaturePageRoutingModule = class DefaultSignaturePageRoutingModule {
};
DefaultSignaturePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DefaultSignaturePageRoutingModule);



/***/ }),

/***/ "HaGY":
/*!*******************************************************************!*\
  !*** ./src/app/pages/defaultsignature/defaultsignature.module.ts ***!
  \*******************************************************************/
/*! exports provided: DefaultSignaturePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSignaturePageModule", function() { return DefaultSignaturePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var _defaultsignature_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaultsignature-routing.module */ "2e8A");
/* harmony import */ var _defaultsignature_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./defaultsignature.page */ "IdyX");








let DefaultSignaturePageModule = class DefaultSignaturePageModule {
};
DefaultSignaturePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _defaultsignature_routing_module__WEBPACK_IMPORTED_MODULE_6__["DefaultSignaturePageRoutingModule"],
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__["TranslocoModule"]
        ],
        declarations: [_defaultsignature_page__WEBPACK_IMPORTED_MODULE_7__["DefaultSignaturePage"]]
    })
], DefaultSignaturePageModule);



/***/ }),

/***/ "IdyX":
/*!*****************************************************************!*\
  !*** ./src/app/pages/defaultsignature/defaultsignature.page.ts ***!
  \*****************************************************************/
/*! exports provided: DefaultSignaturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSignaturePage", function() { return DefaultSignaturePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_defaultsignature_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./defaultsignature.page.html */ "ocl8");
/* harmony import */ var _defaultsignature_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultsignature.page.scss */ "/w+9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var src_app_services_collector_signature_default_provider_default_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/collector/signature/default-provider/default-provider */ "6g5+");






let DefaultSignaturePage = class DefaultSignaturePage {
    constructor() {
        this.publicKey$ = src_app_services_collector_signature_default_provider_default_provider__WEBPACK_IMPORTED_MODULE_5__["DefaultSignatureProvider"].getPublicKey$();
        this.privateKey$ = src_app_services_collector_signature_default_provider_default_provider__WEBPACK_IMPORTED_MODULE_5__["DefaultSignatureProvider"].getPrivateKey$();
    }
};
DefaultSignaturePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["UntilDestroy"])({ checkProperties: true }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-defaultsignature',
        template: _raw_loader_defaultsignature_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_defaultsignature_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DefaultSignaturePage);



/***/ }),

/***/ "ocl8":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/defaultsignature/defaultsignature.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *transloco=\"let t\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button routerLink=\"..\" routerDirection=\"back\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ t('defaultSignature') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *transloco=\"let t\">\n  <ion-list>\n    <ion-item lines=\"none\">\n      <ion-icon name=\"key\" slot=\"start\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>{{ t('publicKey') }}</h2>\n        <p>{{ publicKey$ | async }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-icon name=\"key\" slot=\"start\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>{{ t('privateKey') }}</h2>\n        <p>{{ privateKey$ | async }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-defaultsignature-defaultsignature-module-es2015.js.map