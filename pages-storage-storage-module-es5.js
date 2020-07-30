function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-storage-storage-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/storage/storage.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/storage/storage.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStorageStoragePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header *transloco=\"let t\">\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"/settings\">\n        <ion-icon slot=\"icon-only\" name=\"settings\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ t('capture') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor=\"let proofWithRaw of proofsWithRaw$ | async\"\n        [routerLink]=\"['/proof', {hash: proofWithRaw.proof.hash}]\" size=\"3\" class=\"ion-no-padding\">\n        <ion-card>\n          <ion-thumbnail>\n            <ion-img [src]=\"'data:image/*;base64,' + proofWithRaw.rawBase64\"></ion-img>\n          </ion-thumbnail>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button (click)=\"capture()\">\n      <ion-icon name=\"camera\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/storage/storage-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/storage/storage-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: StoragePageRoutingModule */

  /***/
  function srcAppPagesStorageStorageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoragePageRoutingModule", function () {
      return StoragePageRoutingModule;
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


    var _storage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./storage.page */
    "./src/app/pages/storage/storage.page.ts");

    var routes = [{
      path: '',
      component: _storage_page__WEBPACK_IMPORTED_MODULE_3__["StoragePage"]
    }];

    var StoragePageRoutingModule = function StoragePageRoutingModule() {
      _classCallCheck(this, StoragePageRoutingModule);
    };

    StoragePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StoragePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/storage/storage.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/storage/storage.module.ts ***!
    \*************************************************/

  /*! exports provided: StoragePageModule */

  /***/
  function srcAppPagesStorageStorageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoragePageModule", function () {
      return StoragePageModule;
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


    var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngneat/transloco */
    "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm2015/ngneat-transloco.js");
    /* harmony import */


    var _storage_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./storage-routing.module */
    "./src/app/pages/storage/storage-routing.module.ts");
    /* harmony import */


    var _storage_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./storage.page */
    "./src/app/pages/storage/storage.page.ts");

    var StoragePageModule = function StoragePageModule() {
      _classCallCheck(this, StoragePageModule);
    };

    StoragePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _storage_routing_module__WEBPACK_IMPORTED_MODULE_6__["StoragePageRoutingModule"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__["TranslocoModule"]],
      declarations: [_storage_page__WEBPACK_IMPORTED_MODULE_7__["StoragePage"]]
    })], StoragePageModule);
    /***/
  },

  /***/
  "./src/app/pages/storage/storage.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/storage/storage.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStorageStoragePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-thumbnail {\n  --size: 25vw;\n}\n\nion-card {\n  margin: calc(var(--ion-padding, 16px) / 4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2NhcHR1cmUtbGl0ZS9jYXB0dXJlLWxpdGUvc3JjL2FwcC9wYWdlcy9zdG9yYWdlL3N0b3JhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdG9yYWdlL3N0b3JhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsMENBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0b3JhZ2Uvc3RvcmFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGh1bWJuYWlsIHtcbiAgLS1zaXplOiAyNXZ3O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1pb24tcGFkZGluZywgMTZweCkgLyA0KTtcbn1cbiIsImlvbi10aHVtYm5haWwge1xuICAtLXNpemU6IDI1dnc7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KSAvIDQpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/storage/storage.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/storage/storage.page.ts ***!
    \***********************************************/

  /*! exports provided: StoragePage */

  /***/
  function srcAppPagesStorageStoragePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoragePage", function () {
      return StoragePage;
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


    var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngneat/until-destroy */
    "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_camera_camera_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/camera/camera.service */
    "./src/app/services/camera/camera.service.ts");
    /* harmony import */


    var src_app_services_collector_collector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/collector/collector.service */
    "./src/app/services/collector/collector.service.ts");
    /* harmony import */


    var src_app_services_data_proof_proof_repository_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/data/proof/proof-repository.service */
    "./src/app/services/data/proof/proof-repository.service.ts");
    /* harmony import */


    var src_app_utils_mime_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/utils/mime-type */
    "./src/app/utils/mime-type.ts");

    var StoragePage = /*#__PURE__*/function () {
      function StoragePage(proofRepository, cameraService, collectorService) {
        var _this = this;

        _classCallCheck(this, StoragePage);

        this.proofRepository = proofRepository;
        this.cameraService = cameraService;
        this.collectorService = collectorService;
        this.proofs$ = this.proofRepository.getAll$();
        this.proofsWithRaw$ = this.proofs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (proofs) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(proofs.map(function (proof) {
            return _this.proofRepository.getRawFile$(proof);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["defaultIfEmpty"])([]));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (base64Strings) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"])(_this.proofs$, Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(base64Strings));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              proofs = _ref2[0],
              base64Strings = _ref2[1];

          return proofs.map(function (proof, index) {
            return {
              proof: proof,
              rawBase64: base64Strings[index]
            };
          });
        }));
      }

      _createClass(StoragePage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.proofRepository.refresh$().pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).subscribe();
        }
      }, {
        key: "refresh",
        value: function refresh(event) {
          this.proofRepository.refresh$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(event.target.complete()), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).subscribe();
        }
      }, {
        key: "capture",
        value: function capture() {
          var _this2 = this;

          this.cameraService.capture$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (cameraPhoto) {
            return _this2.collectorService.storeAndCollect(cameraPhoto.base64String, Object(src_app_utils_mime_type__WEBPACK_IMPORTED_MODULE_8__["fromExtension"])(cameraPhoto.format));
          }), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).subscribe();
        }
      }]);

      return StoragePage;
    }();

    StoragePage.ctorParameters = function () {
      return [{
        type: src_app_services_data_proof_proof_repository_service__WEBPACK_IMPORTED_MODULE_7__["ProofRepository"]
      }, {
        type: src_app_services_camera_camera_service__WEBPACK_IMPORTED_MODULE_5__["CameraService"]
      }, {
        type: src_app_services_collector_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"]
      }];
    };

    StoragePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])({
      checkProperties: true
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-storage',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./storage.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/storage/storage.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./storage.page.scss */
      "./src/app/pages/storage/storage.page.scss"))["default"]]
    })], StoragePage);
    /***/
  },

  /***/
  "./src/app/services/camera/camera.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/camera/camera.service.ts ***!
    \***************************************************/

  /*! exports provided: CameraService */

  /***/
  function srcAppServicesCameraCameraServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraService", function () {
      return CameraService;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Camera;

    var CameraService = /*#__PURE__*/function () {
      function CameraService() {
        _classCallCheck(this, CameraService);
      }

      _createClass(CameraService, [{
        key: "capture$",
        value: function capture$() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(function () {
            return Camera.getPhoto({
              resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64,
              source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
              quality: 100,
              allowEditing: false
            });
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (cameraPhoto) {
            return {
              format: cameraPhoto.format,
              // tslint:disable-next-line: no-non-null-assertion
              base64String: cameraPhoto.base64String
            };
          }));
        }
      }]);

      return CameraService;
    }();

    CameraService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CameraService);
    /***/
  },

  /***/
  "./src/app/utils/mime-type.ts":
  /*!************************************!*\
    !*** ./src/app/utils/mime-type.ts ***!
    \************************************/

  /*! exports provided: fromExtension, JPEG, PNG */

  /***/
  function srcAppUtilsMimeTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fromExtension", function () {
      return fromExtension;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JPEG", function () {
      return JPEG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PNG", function () {
      return PNG;
    });

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

    var JPEG = {
      type: 'image/jpeg',
      extension: 'jpg'
    };
    var PNG = {
      type: 'image/png',
      extension: 'png'
    };
    /***/
  }
}]);
//# sourceMappingURL=pages-storage-storage-module-es5.js.map