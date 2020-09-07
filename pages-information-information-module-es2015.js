(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-information-information-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/information/information.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/information/information.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *transloco=\"let t\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"['/proof', {hash: (hash$ | async)}]\" routerDirection=\"back\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ t('informationDetails') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content *transloco=\"let t\">\n  <ion-item>\n    <ion-slide>\n      <ion-card class=\"slide-card\">\n        <ion-card-header>\n          <ion-card-title>{{ t('location') }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list lines=\"none\" *ngFor=\"let information of (locationInformation$ | async)\">\n            <ion-item>\n              <ion-label class=\"ion-text-wrap\">\n                <h3>{{ information.name }}</h3>\n                <p>{{ information.value }}</p>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n  </ion-item>\n  <ion-item>\n    <ion-slide>\n      <ion-card class=\"slide-card\">\n        <ion-card-header>\n          <ion-card-title>{{ t('other') }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list lines=\"none\" *ngFor=\"let information of (otherInformation$ | async)\">\n            <ion-item>\n              <ion-label class=\"ion-text-wrap\">\n                <h3>{{ information.name }}</h3>\n                <p>{{ information.value }}</p>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n  </ion-item>\n  <ion-item>\n    <ion-slide>\n      <ion-card class=\"slide-card\">\n        <ion-card-header>\n          <ion-card-title>{{ t('device') }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list lines=\"none\" *ngFor=\"let information of (deviceInformation$ | async)\">\n            <ion-item>\n              <ion-label class=\"ion-text-wrap\">\n                <h3>{{ information.name }}</h3>\n                <p>{{ information.value }}</p>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n  </ion-item>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/information/information-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/information/information-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: InformationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPageRoutingModule", function() { return InformationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _information_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./information.page */ "./src/app/pages/information/information.page.ts");




const routes = [{
        path: '',
        component: _information_page__WEBPACK_IMPORTED_MODULE_3__["InformationPage"]
    }];
let InformationPageRoutingModule = class InformationPageRoutingModule {
};
InformationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InformationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/information/information.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/information/information.module.ts ***!
  \*********************************************************/
/*! exports provided: InformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPageModule", function() { return InformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm2015/ngneat-transloco.js");
/* harmony import */ var _information_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./information-routing.module */ "./src/app/pages/information/information-routing.module.ts");
/* harmony import */ var _information_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./information.page */ "./src/app/pages/information/information.page.ts");








let InformationPageModule = class InformationPageModule {
};
InformationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _information_routing_module__WEBPACK_IMPORTED_MODULE_6__["InformationPageRoutingModule"],
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__["TranslocoModule"]
        ],
        declarations: [_information_page__WEBPACK_IMPORTED_MODULE_7__["InformationPage"]]
    })
], InformationPageModule);



/***/ }),

/***/ "./src/app/pages/information/information.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/information/information.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slide-card {\n  width: 100%;\n}\n\n.multiline {\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZm9ybWF0aW9uL2luZm9ybWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZS1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tdWx0aWxpbmUge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/information/information.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/information/information.page.ts ***!
  \*******************************************************/
/*! exports provided: InformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPage", function() { return InformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_data_information_information_repository_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data/information/information-repository.service */ "./src/app/services/data/information/information-repository.service.ts");
/* harmony import */ var src_app_services_data_proof_proof_repository_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data/proof/proof-repository.service */ "./src/app/services/data/proof/proof-repository.service.ts");
/* harmony import */ var src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/rx-operators */ "./src/app/utils/rx-operators.ts");








let InformationPage = class InformationPage {
    constructor(route, proofRepository, informationRepository) {
        this.route = route;
        this.proofRepository = proofRepository;
        this.informationRepository = informationRepository;
        this.proof$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(params => params.get('hash')), Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_7__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(hash => this.proofRepository.getByHash$(hash)), Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_7__["isNonNullable"])());
        this.hash$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('hash'));
        this.locationInformation$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(proof => this.informationRepository.getByProof$(proof)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(informationList => informationList.filter(information => information.type === "location" /* Location */)));
        this.otherInformation$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(proof => this.informationRepository.getByProof$(proof)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(informationList => informationList.filter(information => information.type === "other" /* Other */)));
        this.deviceInformation$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(proof => this.informationRepository.getByProof$(proof)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(informationList => informationList.filter(information => information.type === "device" /* Device */)));
    }
    ionViewWillEnter() {
        this.proofRepository.refresh$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMapTo"])(this.informationRepository.refresh$()), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this)).subscribe();
    }
};
InformationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_data_proof_proof_repository_service__WEBPACK_IMPORTED_MODULE_6__["ProofRepository"] },
    { type: src_app_services_data_information_information_repository_service__WEBPACK_IMPORTED_MODULE_5__["InformationRepository"] }
];
InformationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])({ checkProperties: true }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-information',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./information.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/information/information.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./information.page.scss */ "./src/app/pages/information/information.page.scss")).default]
    })
], InformationPage);



/***/ })

}]);
//# sourceMappingURL=pages-information-information-module-es2015.js.map