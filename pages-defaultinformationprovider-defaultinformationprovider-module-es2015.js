(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-defaultinformationprovider-defaultinformationprovider-module"],{

/***/ "1CTu":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/defaultinformationprovider/defaultinformationprovider.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *transloco=\"let t\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button routerLink=\"..\" routerDirection=\"back\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ t('defaultInformationProvider') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *transloco=\"let t\">\n  <ion-list>\n    <ion-item lines=\"none\">\n      <ion-icon name=\"phone-portrait\" slot=\"start\"></ion-icon>\n      <ion-label>{{ t('collectDeviceInfo') }}</ion-label>\n      <ion-toggle [checked]=\"isDeviceInfoCollectionEnabled$ | async\"\n        (ionChange)=\"setDeviceInfoCollection($event.detail.checked)\" slot=\"end\"></ion-toggle>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-icon name=\"locate\" slot=\"start\"></ion-icon>\n      <ion-label>{{ t('collectLocationInfo') }}</ion-label>\n      <ion-toggle [checked]=\"isLocationInfoCollectionEnabled$ | async\"\n        (ionChange)=\"setLocationInfoCollection($event.detail.checked)\" slot=\"end\"></ion-toggle>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "RoSL":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/defaultinformationprovider/defaultinformationprovider.module.ts ***!
  \***************************************************************************************/
/*! exports provided: DefaultInformationProviderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultInformationProviderPageModule", function() { return DefaultInformationProviderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var _defaultinformationprovider_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaultinformationprovider-routing.module */ "kT/P");
/* harmony import */ var _defaultinformationprovider_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./defaultinformationprovider.page */ "vuFg");








let DefaultInformationProviderPageModule = class DefaultInformationProviderPageModule {
};
DefaultInformationProviderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _defaultinformationprovider_routing_module__WEBPACK_IMPORTED_MODULE_6__["DefaultInformationProviderPageRoutingModule"],
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__["TranslocoModule"]
        ],
        declarations: [_defaultinformationprovider_page__WEBPACK_IMPORTED_MODULE_7__["DefaultInformationProviderPage"]]
    })
], DefaultInformationProviderPageModule);



/***/ }),

/***/ "eU4x":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/defaultinformationprovider/defaultinformationprovider.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlZmF1bHRpbmZvcm1hdGlvbnByb3ZpZGVyL2RlZmF1bHRpbmZvcm1hdGlvbnByb3ZpZGVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "kT/P":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/defaultinformationprovider/defaultinformationprovider-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: DefaultInformationProviderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultInformationProviderPageRoutingModule", function() { return DefaultInformationProviderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _defaultinformationprovider_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultinformationprovider.page */ "vuFg");




const routes = [
    {
        path: '',
        component: _defaultinformationprovider_page__WEBPACK_IMPORTED_MODULE_3__["DefaultInformationProviderPage"]
    }
];
let DefaultInformationProviderPageRoutingModule = class DefaultInformationProviderPageRoutingModule {
};
DefaultInformationProviderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DefaultInformationProviderPageRoutingModule);



/***/ }),

/***/ "vuFg":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/defaultinformationprovider/defaultinformationprovider.page.ts ***!
  \*************************************************************************************/
/*! exports provided: DefaultInformationProviderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultInformationProviderPage", function() { return DefaultInformationProviderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_defaultinformationprovider_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./defaultinformationprovider.page.html */ "1CTu");
/* harmony import */ var _defaultinformationprovider_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultinformationprovider.page.scss */ "eU4x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var src_app_services_collector_information_capacitor_provider_capacitor_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/collector/information/capacitor-provider/capacitor-provider */ "TtCf");






let DefaultInformationProviderPage = class DefaultInformationProviderPage {
    constructor() {
        this.isDeviceInfoCollectionEnabled$ = src_app_services_collector_information_capacitor_provider_capacitor_provider__WEBPACK_IMPORTED_MODULE_5__["CapacitorProvider"].isDeviceInfoCollectionEnabled$();
        this.isLocationInfoCollectionEnabled$ = src_app_services_collector_information_capacitor_provider_capacitor_provider__WEBPACK_IMPORTED_MODULE_5__["CapacitorProvider"].isLocationInfoCollectionEnabled$();
    }
    setDeviceInfoCollection(enable) {
        src_app_services_collector_information_capacitor_provider_capacitor_provider__WEBPACK_IMPORTED_MODULE_5__["CapacitorProvider"].setDeviceInfoCollection$(enable).pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe();
    }
    setLocationInfoCollection(enable) {
        src_app_services_collector_information_capacitor_provider_capacitor_provider__WEBPACK_IMPORTED_MODULE_5__["CapacitorProvider"].setLocationInfoCollection$(enable).pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe();
    }
};
DefaultInformationProviderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["UntilDestroy"])({ checkProperties: true }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-defaultinformationprovider',
        template: _raw_loader_defaultinformationprovider_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_defaultinformationprovider_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DefaultInformationProviderPage);



/***/ })

}]);
//# sourceMappingURL=pages-defaultinformationprovider-defaultinformationprovider-module-es2015.js.map