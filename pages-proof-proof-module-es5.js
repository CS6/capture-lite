function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-proof-proof-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/proof/proof.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/proof/proof.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProofProofPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button routerLink=\"..\" routerDirection=\"back\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ 'proofDetails' | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"publish()\">\n        <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"remove()\">\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-img [src]=\"'data:image/*;base64,' + (rawBase64$ | async)\"></ion-img>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"reader\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>{{ 'caption' | translate }}</h2>\n        <p>{{ (caption$ | async) === '' ? '(' + ( 'nothingHere' | translate ) + ')' : (caption$ | async) }}</p>\n      </ion-label>\n      <ion-button (click)=\"editCaption()\" slot=\"end\" fill=\"clear\" shape=\"round\">\n        <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n      </ion-button>\n    </ion-item>\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"information\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>{{ 'hash' | translate }}</h2>\n        <p>{{ hash$ | async }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"image\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>{{ 'mimeType' | translate }}</h2>\n        <p>{{ mimeType$ | async }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"time\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>{{ 'timestamp' | translate }}</h2>\n        <p>{{ timestamp$ | async }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-list-header>\n      <ion-label>\n        <h2>{{ 'information' | translate }}</h2>\n      </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-slides pager>\n        <ion-slide *ngFor=\"let providerWithInformationList of (providersWithInformationList$ | async)\">\n          <ion-card class=\"slide-card\">\n            <ion-card-header>\n              <ion-card-title>{{ providerWithInformationList.provider }}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                <ion-item *ngFor=\"let information of providerWithInformationList.informationList\">\n                  <ion-label class=\"ion-text-wrap\">\n                    <h3>{{ information.name }}</h3>\n                    <p>{{ information.value }}</p>\n                  </ion-label>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </ion-item>\n    <ion-list-header>\n      <ion-label>\n        <h2>{{ 'signatures' | translate }}</h2>\n      </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-slides pager>\n        <ion-slide *ngFor=\"let signature of (signatures$ | async)\">\n          <ion-card class=\"slide-card\">\n            <ion-card-header>\n              <ion-card-title>{{ signature.provider }}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                <ion-item>\n                  <ion-label class=\"ion-text-wrap\">\n                    <h3>{{ 'signature' | translate }}</h3>\n                    <p>{{ signature.signature }}</p>\n                  </ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-label class=\"ion-text-wrap\">\n                    <h3>{{ 'publicKey' | translate }}</h3>\n                    <p class=\"multiline\">{{ signature.publicKey }}</p>\n                  </ion-label>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </ion-item>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/proof/proof-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/proof/proof-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProofPageRoutingModule */

  /***/
  function srcAppPagesProofProofRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProofPageRoutingModule", function () {
      return ProofPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _proof_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./proof.page */
    "./src/app/pages/proof/proof.page.ts");

    var routes = [{
      path: '',
      component: _proof_page__WEBPACK_IMPORTED_MODULE_3__["ProofPage"]
    }];

    var ProofPageRoutingModule = function ProofPageRoutingModule() {
      _classCallCheck(this, ProofPageRoutingModule);
    };

    ProofPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProofPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/proof/proof.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/proof/proof.module.ts ***!
    \*********************************************/

  /*! exports provided: ProofPageModule */

  /***/
  function srcAppPagesProofProofModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProofPageModule", function () {
      return ProofPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _proof_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./proof-routing.module */
    "./src/app/pages/proof/proof-routing.module.ts");
    /* harmony import */


    var _proof_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./proof.page */
    "./src/app/pages/proof/proof.page.ts");

    var ProofPageModule = function ProofPageModule() {
      _classCallCheck(this, ProofPageModule);
    };

    ProofPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _proof_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProofPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]],
      declarations: [_proof_page__WEBPACK_IMPORTED_MODULE_7__["ProofPage"]]
    })], ProofPageModule);
    /***/
  },

  /***/
  "./src/app/pages/proof/proof.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/proof/proof.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProofProofPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slides {\n  width: 100%;\n}\n\n.slide-card {\n  width: 100%;\n  margin-bottom: 35px;\n}\n\n.multiline {\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2NhcHR1cmUtbGl0ZS9jYXB0dXJlLWxpdGUvc3JjL2FwcC9wYWdlcy9wcm9vZi9wcm9vZi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb29mL3Byb29mLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb29mL3Byb29mLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNsaWRlLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cblxuLm11bHRpbGluZSB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbiIsImlvbi1zbGlkZXMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNsaWRlLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cblxuLm11bHRpbGluZSB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/proof/proof.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/proof/proof.page.ts ***!
    \*******************************************/

  /*! exports provided: ProofPage */

  /***/
  function srcAppPagesProofProofPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProofPage", function () {
      return ProofPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngneat/until-destroy */
    "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_confirm_alert_confirm_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/confirm-alert/confirm-alert.service */
    "./src/app/services/confirm-alert/confirm-alert.service.ts");
    /* harmony import */


    var src_app_services_data_caption_caption_repository_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/data/caption/caption-repository.service */
    "./src/app/services/data/caption/caption-repository.service.ts");
    /* harmony import */


    var src_app_services_data_information_information_repository_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/data/information/information-repository.service */
    "./src/app/services/data/information/information-repository.service.ts");
    /* harmony import */


    var src_app_services_data_proof_proof_repository_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/data/proof/proof-repository.service */
    "./src/app/services/data/proof/proof-repository.service.ts");
    /* harmony import */


    var src_app_services_data_signature_signature_repository_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/services/data/signature/signature-repository.service */
    "./src/app/services/data/signature/signature-repository.service.ts");
    /* harmony import */


    var src_app_services_publisher_publishers_alert_publishers_alert_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/services/publisher/publishers-alert/publishers-alert.service */
    "./src/app/services/publisher/publishers-alert/publishers-alert.service.ts");

    var ProofPage = /*#__PURE__*/function () {
      function ProofPage(router, route, translateService, alertController, confirmAlert, publishersAlert, proofRepository, captionRepository, informationRepository, signatureRepository) {
        var _this = this;

        _classCallCheck(this, ProofPage);

        this.router = router;
        this.route = route;
        this.translateService = translateService;
        this.alertController = alertController;
        this.confirmAlert = confirmAlert;
        this.publishersAlert = publishersAlert;
        this.proofRepository = proofRepository;
        this.captionRepository = captionRepository;
        this.informationRepository = informationRepository;
        this.signatureRepository = signatureRepository;
        this.proof$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (params) {
          return params.get('hash');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (hash) {
          return !!hash;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (hash) {
          return _this.proofRepository.getByHash$(hash);
        }));
        this.rawBase64$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (proof) {
          return _this.proofRepository.getRawFile$(proof);
        }));
        this.hash$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (proof) {
          return proof.hash;
        }));
        this.mimeType$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (proof) {
          return proof.mimeType.type;
        }));
        this.timestamp$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (proof) {
          return new Date(proof.timestamp);
        }));
        this.caption$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (proof) {
          return _this.captionRepository.getByProof$(proof);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (captions) {
          if (captions.length === 0 || captions[0].text.length === 0) {
            return '';
          }

          return captions[0].text;
        }));
        this.providersWithInformationList$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (proof) {
          return _this.informationRepository.getByProof$(proof);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (informationList) {
          var providers = new Set(informationList.map(function (information) {
            return information.provider;
          }));
          return _toConsumableArray(providers).map(function (provider) {
            return {
              provider: provider,
              informationList: informationList.filter(function (information) {
                return information.provider === provider;
              })
            };
          });
        }));
        this.signatures$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (proof) {
          return _this.signatureRepository.getByProof$(proof);
        }));
      }

      _createClass(ProofPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.proofRepository.refresh$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMapTo"])(this.captionRepository.refresh$()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMapTo"])(this.informationRepository.refresh$()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMapTo"])(this.signatureRepository.refresh$()), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe();
        }
      }, {
        key: "remove",
        value: function remove() {
          var _this2 = this;

          var onConfirm = function onConfirm() {
            return _this2.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (proof) {
              return _this2.proofRepository.remove$(proof);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMapTo"])(_this2.router.navigate(['..'])), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(_this2)).subscribe();
          };

          return this.confirmAlert.present$(onConfirm).pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe();
        }
      }, {
        key: "publish",
        value: function publish() {
          var _this3 = this;

          this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (proof) {
            return _this3.publishersAlert.present$(proof);
          }), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe();
        }
      }, {
        key: "editCaption",
        value: function editCaption() {
          var _this4 = this;

          var captionInputName = 'captionInputName';
          this.caption$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (caption) {
            return _this4.alertController.create({
              header: _this4.translateService.instant('editCaption'),
              inputs: [{
                name: captionInputName,
                type: 'text',
                value: caption,
                placeholder: _this4.translateService.instant('nothingHere')
              }],
              buttons: [{
                text: _this4.translateService.instant('cancel'),
                role: 'cancel'
              }, {
                text: _this4.translateService.instant('ok'),
                handler: function handler(inputs) {
                  return _this4.saveCaption(inputs[captionInputName]);
                }
              }]
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (alertElement) {
            return alertElement.present();
          }), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe();
        }
      }, {
        key: "saveCaption",
        value: function saveCaption(text) {
          var _this5 = this;

          this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (proof) {
            return _this5.captionRepository.addOrEdit$({
              proofHash: proof.hash,
              text: text
            });
          }), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe();
        }
      }]);

      return ProofPage;
    }();

    ProofPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: src_app_services_confirm_alert_confirm_alert_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmAlert"]
      }, {
        type: src_app_services_publisher_publishers_alert_publishers_alert_service__WEBPACK_IMPORTED_MODULE_12__["PublishersAlert"]
      }, {
        type: src_app_services_data_proof_proof_repository_service__WEBPACK_IMPORTED_MODULE_10__["ProofRepository"]
      }, {
        type: src_app_services_data_caption_caption_repository_service__WEBPACK_IMPORTED_MODULE_8__["CaptionRepository"]
      }, {
        type: src_app_services_data_information_information_repository_service__WEBPACK_IMPORTED_MODULE_9__["InformationRepository"]
      }, {
        type: src_app_services_data_signature_signature_repository_service__WEBPACK_IMPORTED_MODULE_11__["SignatureRepository"]
      }];
    };

    ProofPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["UntilDestroy"])({
      checkProperties: true
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-proof',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./proof.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/proof/proof.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./proof.page.scss */
      "./src/app/pages/proof/proof.page.scss"))["default"]]
    })], ProofPage);
    /***/
  },

  /***/
  "./src/app/services/confirm-alert/confirm-alert.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/services/confirm-alert/confirm-alert.service.ts ***!
    \*****************************************************************/

  /*! exports provided: ConfirmAlert */

  /***/
  function srcAppServicesConfirmAlertConfirmAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmAlert", function () {
      return ConfirmAlert;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ConfirmAlert = /*#__PURE__*/function () {
      function ConfirmAlert(alertController, translateService) {
        _classCallCheck(this, ConfirmAlert);

        this.alertController = alertController;
        this.translateService = translateService;
      }

      _createClass(ConfirmAlert, [{
        key: "present$",
        value: function present$(onConfirm) {
          var _this6 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(function () {
            return _this6.alertController.create({
              header: _this6.translateService.instant('areYouSure'),
              message: _this6.translateService.instant('message.areYouSure'),
              buttons: [{
                text: _this6.translateService.instant('cancel'),
                role: 'cancel'
              }, {
                text: _this6.translateService.instant('ok'),
                handler: onConfirm
              }]
            });
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (alertElement) {
            return alertElement.present();
          }));
        }
      }]);

      return ConfirmAlert;
    }();

    ConfirmAlert.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }];
    };

    ConfirmAlert = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ConfirmAlert);
    /***/
  }
}]);
//# sourceMappingURL=pages-proof-proof-module-es5.js.map