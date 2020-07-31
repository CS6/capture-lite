(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-storage-storage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/storage/storage.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/storage/storage.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *transloco=\"let t\">\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"/settings\">\n        <ion-icon slot=\"icon-only\" name=\"settings\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ t('capture') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor=\"let proofWithRaw of proofsWithRaw$ | async\"\n        [routerLink]=\"['/proof', {hash: proofWithRaw.proof.hash}]\" size=\"3\" class=\"ion-no-padding\">\n        <ion-card>\n          <ion-thumbnail>\n            <ion-img [src]=\"'data:image/*;base64,' + proofWithRaw.rawBase64\"></ion-img>\n          </ion-thumbnail>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button (click)=\"capture()\">\n      <ion-icon name=\"camera\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/storage/storage-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/storage/storage-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: StoragePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoragePageRoutingModule", function() { return StoragePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _storage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.page */ "./src/app/pages/storage/storage.page.ts");




const routes = [{
        path: '',
        component: _storage_page__WEBPACK_IMPORTED_MODULE_3__["StoragePage"],
    }];
let StoragePageRoutingModule = class StoragePageRoutingModule {
};
StoragePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StoragePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/storage/storage.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/storage/storage.module.ts ***!
  \*************************************************/
/*! exports provided: StoragePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoragePageModule", function() { return StoragePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm2015/ngneat-transloco.js");
/* harmony import */ var _storage_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage-routing.module */ "./src/app/pages/storage/storage-routing.module.ts");
/* harmony import */ var _storage_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage.page */ "./src/app/pages/storage/storage.page.ts");








let StoragePageModule = class StoragePageModule {
};
StoragePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _storage_routing_module__WEBPACK_IMPORTED_MODULE_6__["StoragePageRoutingModule"],
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__["TranslocoModule"]
        ],
        declarations: [_storage_page__WEBPACK_IMPORTED_MODULE_7__["StoragePage"]]
    })
], StoragePageModule);



/***/ }),

/***/ "./src/app/pages/storage/storage.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/storage/storage.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-thumbnail {\n  --size: 25vw;\n}\n\nion-card {\n  margin: calc(var(--ion-padding, 16px) / 4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RvcmFnZS9zdG9yYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLDBDQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdG9yYWdlL3N0b3JhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRodW1ibmFpbCB7XG4gIC0tc2l6ZTogMjV2dztcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IGNhbGModmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpIC8gNCk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/storage/storage.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/storage/storage.page.ts ***!
  \***********************************************/
/*! exports provided: StoragePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoragePage", function() { return StoragePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_camera_camera_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/camera/camera.service */ "./src/app/services/camera/camera.service.ts");
/* harmony import */ var src_app_services_collector_collector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/collector/collector.service */ "./src/app/services/collector/collector.service.ts");
/* harmony import */ var src_app_services_data_proof_proof_repository_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data/proof/proof-repository.service */ "./src/app/services/data/proof/proof-repository.service.ts");
/* harmony import */ var src_app_utils_mime_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/mime-type */ "./src/app/utils/mime-type.ts");









let StoragePage = class StoragePage {
    constructor(proofRepository, cameraService, collectorService) {
        this.proofRepository = proofRepository;
        this.cameraService = cameraService;
        this.collectorService = collectorService;
        this.proofs$ = this.proofRepository.getAll$();
        this.proofsWithRaw$ = this.proofs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(proofs => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(proofs.map(proof => this.proofRepository.getRawFile$(proof))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["defaultIfEmpty"])([]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(base64Strings => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"])(this.proofs$, Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(base64Strings))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([proofs, base64Strings]) => proofs.map((proof, index) => ({
            proof,
            rawBase64: base64Strings[index]
        }))));
    }
    ionViewWillEnter() {
        this.proofRepository.refresh$().pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).subscribe();
    }
    refresh(event) {
        this.proofRepository.refresh$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(event.target.complete()), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).subscribe();
    }
    capture() {
        this.cameraService.capture$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(cameraPhoto => this.collectorService.storeAndCollect(cameraPhoto.base64String, Object(src_app_utils_mime_type__WEBPACK_IMPORTED_MODULE_8__["fromExtension"])(cameraPhoto.format))), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).subscribe();
    }
};
StoragePage.ctorParameters = () => [
    { type: src_app_services_data_proof_proof_repository_service__WEBPACK_IMPORTED_MODULE_7__["ProofRepository"] },
    { type: src_app_services_camera_camera_service__WEBPACK_IMPORTED_MODULE_5__["CameraService"] },
    { type: src_app_services_collector_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"] }
];
StoragePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])({ checkProperties: true }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-storage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./storage.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/storage/storage.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./storage.page.scss */ "./src/app/pages/storage/storage.page.scss")).default]
    })
], StoragePage);



/***/ }),

/***/ "./src/app/services/camera/camera.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/camera/camera.service.ts ***!
  \***************************************************/
/*! exports provided: CameraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraService", function() { return CameraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let CameraService = class CameraService {
    capture$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(() => Camera.getPhoto({
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64,
            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
            quality: 100,
            allowEditing: false
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(cameraPhoto => ({
            format: cameraPhoto.format,
            // tslint:disable-next-line: no-non-null-assertion
            base64String: cameraPhoto.base64String
        })));
    }
};
CameraService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CameraService);



/***/ }),

/***/ "./src/app/utils/mime-type.ts":
/*!************************************!*\
  !*** ./src/app/utils/mime-type.ts ***!
  \************************************/
/*! exports provided: fromExtension, JPEG, PNG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromExtension", function() { return fromExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JPEG", function() { return JPEG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PNG", function() { return PNG; });
function fromExtension(extension) {
    switch (extension) {
        case 'jpeg':
        case 'jpg':
            return JPEG;
        case 'png':
            return PNG;
        default:
            throw new Error('Unknown extension.');
    }
}
const JPEG = {
    type: 'image/jpeg',
    extension: 'jpg'
};
const PNG = {
    type: 'image/png',
    extension: 'png'
};


/***/ })

}]);
//# sourceMappingURL=pages-storage-storage-module-es2015.js.map