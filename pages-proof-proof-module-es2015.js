(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-proof-proof-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/proof/proof.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/proof/proof.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *transloco=\"let t\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"['/storage']\" routerDirection=\"back\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ t('proofDetails') }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"publish()\">\n        <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"remove()\">\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *transloco=\"let t\">\n  <ion-img [src]=\"'data:image/*;base64,' + (rawBase64$ | async)\"></ion-img>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"reader\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>{{ t('caption') }}</h2>\n        <p>{{ (caption$ | async) === '' ? '(' + ( t('nothingHere') ) + ')' : (caption$ | async) }}</p>\n      </ion-label>\n      <ion-button (click)=\"editCaption()\" slot=\"end\" fill=\"clear\" shape=\"round\">\n        <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n      </ion-button>\n    </ion-item>\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"information\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>{{ t('hash') }}</h2>\n        <p>{{ hash$ | async }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"image\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>{{ t('mimeType') }}</h2>\n        <p>{{ mimeType$ | async }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"time\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>{{ t('timestamp') }}</h2>\n        <p>{{ timestamp$ | async }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-list-header>\n      <ion-label>\n        <h2>{{ t('information') }}</h2>\n      </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-slides pager>\n        <ion-slide>\n          <ion-card class=\"slide-card\"\n            *ngFor=\"let providerWithInformationList of (providersWithImportantInformation$ | async)\">\n            <ion-card-header>\n              <ion-card-title>{{ providerWithInformationList.provider }}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list *ngFor=\"let information of providerWithInformationList.informationList\">\n                <ion-item>\n                  <ion-label class=\"ion-text-wrap\">\n                    <h3>{{ information.name }}</h3>\n                    <p>{{ information.value }}</p>\n                  </ion-label>\n                </ion-item>\n              </ion-list>\n              <section>\n                <ion-button expand=\"block\" [routerLink]=\"['/information', {hash: (hash$ | async)}]\">View All\n                </ion-button>\n              </section>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </ion-item>\n    <ion-list-header>\n      <ion-label>\n        <h2>{{ t('signatures') }}</h2>\n      </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-slides pager>\n        <ion-slide *ngFor=\"let signature of (signatures$ | async)\">\n          <ion-card class=\"slide-card\">\n            <ion-card-header>\n              <ion-card-title>{{ signature.provider }}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                <ion-item>\n                  <ion-label class=\"ion-text-wrap\">\n                    <h3>{{ t('signature') }}</h3>\n                    <p>{{ signature.signature }}</p>\n                  </ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-label class=\"ion-text-wrap\">\n                    <h3>{{ t('publicKey') }}</h3>\n                    <p class=\"multiline\">{{ signature.publicKey }}</p>\n                  </ion-label>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/proof/proof-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/proof/proof-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProofPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProofPageRoutingModule", function() { return ProofPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _proof_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proof.page */ "./src/app/pages/proof/proof.page.ts");




const routes = [{
        path: '',
        component: _proof_page__WEBPACK_IMPORTED_MODULE_3__["ProofPage"]
    }];
let ProofPageRoutingModule = class ProofPageRoutingModule {
};
ProofPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProofPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/proof/proof.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/proof/proof.module.ts ***!
  \*********************************************/
/*! exports provided: ProofPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProofPageModule", function() { return ProofPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm2015/ngneat-transloco.js");
/* harmony import */ var _proof_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proof-routing.module */ "./src/app/pages/proof/proof-routing.module.ts");
/* harmony import */ var _proof_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./proof.page */ "./src/app/pages/proof/proof.page.ts");








let ProofPageModule = class ProofPageModule {
};
ProofPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _proof_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProofPageRoutingModule"],
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__["TranslocoModule"]
        ],
        declarations: [_proof_page__WEBPACK_IMPORTED_MODULE_7__["ProofPage"]]
    })
], ProofPageModule);



/***/ }),

/***/ "./src/app/pages/proof/proof.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/proof/proof.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  width: 100%;\n}\n\n.slide-card {\n  width: 100%;\n  margin-bottom: 35px;\n}\n\n.multiline {\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvb2YvcHJvb2YucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvb2YvcHJvb2YucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2xpZGUtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuXG4ubXVsdGlsaW5lIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/proof/proof.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/proof/proof.page.ts ***!
  \*******************************************/
/*! exports provided: ProofPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProofPage", function() { return ProofPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm2015/ngneat-transloco.js");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_blocking_action_blocking_action_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/blocking-action/blocking-action.service */ "./src/app/services/blocking-action/blocking-action.service.ts");
/* harmony import */ var src_app_services_confirm_alert_confirm_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/confirm-alert/confirm-alert.service */ "./src/app/services/confirm-alert/confirm-alert.service.ts");
/* harmony import */ var src_app_services_data_caption_caption_repository_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/data/caption/caption-repository.service */ "./src/app/services/data/caption/caption-repository.service.ts");
/* harmony import */ var src_app_services_data_information_information_repository_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/data/information/information-repository.service */ "./src/app/services/data/information/information-repository.service.ts");
/* harmony import */ var src_app_services_data_proof_proof_repository_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/data/proof/proof-repository.service */ "./src/app/services/data/proof/proof-repository.service.ts");
/* harmony import */ var src_app_services_data_signature_signature_repository_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/data/signature/signature-repository.service */ "./src/app/services/data/signature/signature-repository.service.ts");
/* harmony import */ var src_app_services_publisher_publishers_alert_publishers_alert_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/publisher/publishers-alert/publishers-alert.service */ "./src/app/services/publisher/publishers-alert/publishers-alert.service.ts");
/* harmony import */ var src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/utils/rx-operators */ "./src/app/utils/rx-operators.ts");
















let ProofPage = class ProofPage {
    constructor(router, route, translocoService, alertController, confirmAlert, publishersAlert, proofRepository, captionRepository, informationRepository, signatureRepository, blockingActionService) {
        this.router = router;
        this.route = route;
        this.translocoService = translocoService;
        this.alertController = alertController;
        this.confirmAlert = confirmAlert;
        this.publishersAlert = publishersAlert;
        this.proofRepository = proofRepository;
        this.captionRepository = captionRepository;
        this.informationRepository = informationRepository;
        this.signatureRepository = signatureRepository;
        this.blockingActionService = blockingActionService;
        this.proof$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(params => params.get('hash')), Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_15__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(hash => this.proofRepository.getByHash$(hash)), Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_15__["isNonNullable"])());
        this.rawBase64$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(proof => this.proofRepository.getRawFile$(proof)));
        this.hash$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pluck"])('hash'));
        this.mimeType$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pluck"])('mimeType'));
        this.timestamp$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(proof => new Date(proof.timestamp)));
        this.caption$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(proof => this.captionRepository.getByProof$(proof)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(caption => {
            if (caption && caption.text.length > 0) {
                return caption.text;
            }
            return '';
        }));
        this.providersWithImportantInformation$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(proof => this.informationRepository.getByProof$(proof)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(informationList => {
            const providers = new Set(informationList.map(information => information.provider));
            return [...providers].map(provider => ({
                provider,
                informationList: informationList.filter(information => information.provider === provider && information.importance === "high" /* High */)
            }));
        }));
        this.signatures$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(proof => this.signatureRepository.getByProof$(proof)));
    }
    ionViewWillEnter() {
        this.proofRepository.refresh$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMapTo"])(this.captionRepository.refresh$()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMapTo"])(this.informationRepository.refresh$()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMapTo"])(this.signatureRepository.refresh$()), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this)).subscribe();
    }
    publish() {
        this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(proof => this.publishersAlert.present$(proof)), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this)).subscribe();
    }
    remove() {
        const onConfirm = () => this.blockingActionService.run$(this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(proof => this.proofRepository.remove$(proof)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMapTo"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["defer"])(() => this.router.navigate(['..'])))), { message: this.translocoService.translate('processing') }).pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this)).subscribe();
        return this.confirmAlert.present$(onConfirm).pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this)).subscribe();
    }
    editCaption() {
        const captionInputName = 'captionInputName';
        this.caption$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(caption => this.alertController.create({
            header: this.translocoService.translate('editCaption'),
            inputs: [{
                    name: captionInputName,
                    type: 'text',
                    value: caption,
                    placeholder: this.translocoService.translate('nothingHere')
                }],
            buttons: [{
                    text: this.translocoService.translate('cancel'),
                    role: 'cancel'
                }, {
                    text: this.translocoService.translate('ok'),
                    handler: (inputs) => this.saveCaption(inputs[captionInputName])
                }]
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(alertElement => alertElement.present()), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this)).subscribe();
    }
    saveCaption(text) {
        this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(proof => this.captionRepository.addOrEdit$({
            proofHash: proof.hash,
            text
        })), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this)).subscribe();
    }
};
ProofPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TranslocoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_confirm_alert_confirm_alert_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmAlert"] },
    { type: src_app_services_publisher_publishers_alert_publishers_alert_service__WEBPACK_IMPORTED_MODULE_14__["PublishersAlert"] },
    { type: src_app_services_data_proof_proof_repository_service__WEBPACK_IMPORTED_MODULE_12__["ProofRepository"] },
    { type: src_app_services_data_caption_caption_repository_service__WEBPACK_IMPORTED_MODULE_10__["CaptionRepository"] },
    { type: src_app_services_data_information_information_repository_service__WEBPACK_IMPORTED_MODULE_11__["InformationRepository"] },
    { type: src_app_services_data_signature_signature_repository_service__WEBPACK_IMPORTED_MODULE_13__["SignatureRepository"] },
    { type: src_app_services_blocking_action_blocking_action_service__WEBPACK_IMPORTED_MODULE_8__["BlockingActionService"] }
];
ProofPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["UntilDestroy"])({ checkProperties: true }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-proof',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./proof.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/proof/proof.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./proof.page.scss */ "./src/app/pages/proof/proof.page.scss")).default]
    })
], ProofPage);



/***/ }),

/***/ "./src/app/services/blocking-action/blocking-action.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/blocking-action/blocking-action.service.ts ***!
  \*********************************************************************/
/*! exports provided: BlockingActionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockingActionService", function() { return BlockingActionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let BlockingActionService = class BlockingActionService {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    run$(action$, opts) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(() => this.loadingController.create(opts)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(loading => this._run$(action$, loading)));
    }
    _run$(action$, loading) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(() => loading.present()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMapTo"])(action$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            loading.dismiss();
            throw err;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(result => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(() => loading.dismiss()), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([_, result]) => result));
    }
};
BlockingActionService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
BlockingActionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BlockingActionService);



/***/ }),

/***/ "./src/app/services/confirm-alert/confirm-alert.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/confirm-alert/confirm-alert.service.ts ***!
  \*****************************************************************/
/*! exports provided: ConfirmAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmAlert", function() { return ConfirmAlert; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm2015/ngneat-transloco.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ConfirmAlert = class ConfirmAlert {
    constructor(alertController, translocoService) {
        this.alertController = alertController;
        this.translocoService = translocoService;
    }
    present$(onConfirm) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(() => this.alertController.create({
            header: this.translocoService.translate('areYouSure'),
            message: this.translocoService.translate('message.areYouSure'),
            buttons: [{
                    text: this.translocoService.translate('cancel'),
                    role: 'cancel'
                }, {
                    text: this.translocoService.translate('ok'),
                    handler: onConfirm
                }]
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(alertElement => alertElement.present()));
    }
};
ConfirmAlert.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoService"] }
];
ConfirmAlert = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConfirmAlert);



/***/ })

}]);
//# sourceMappingURL=pages-proof-proof-module-es2015.js.map