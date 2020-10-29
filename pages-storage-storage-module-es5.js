(function () {
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
    "+1b/":
    /*!*********************************************************!*\
      !*** ./src/app/pages/storage/storage-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: StoragePageRoutingModule */

    /***/
    function b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoragePageRoutingModule", function () {
        return StoragePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _storage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./storage.page */
      "HcNl");

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
    "0c4A":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/storage/storage.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function c4A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header [headerTitle]=\"capture\" (next)=\"next()\" (back)=\"back()\"></app-header>\n\n<ion-content>\n  <ion-slides #slides [options]=\"slideOpts\" autoplay=\"false\" (ionSlidesDidLoad)=\"ionSlideLoad(slides)\"\n    (ionSlideDidChange)=\"ionSlideChange(slides)\" pager>\n    <ion-slide style=\"background:white\">\n      <ion-grid>\n        <ion-col class=\"img-set\" *ngFor=\"let proofWithSet of proofsWithRawByDate$ | async\">\n          <div class=\"setTitle\"><strong>{{proofWithSet[0].date}}</strong></div>\n          <ion-row>\n            <ion-card size=\"4\" class=\"img-card\" *ngFor=\"let proofWithRaw of proofWithSet\"\n              [routerLink]=\"['/proof', {hash: proofWithRaw.proof.hash}]\">\n              <ion-thumbnail class=\"img-thumbnail\">\n                <ion-img [src]=\"'data:image/*;base64,' + proofWithRaw.rawBase64\"></ion-img>\n              </ion-thumbnail>\n            </ion-card>\n          </ion-row>\n        </ion-col>\n      </ion-grid>\n    </ion-slide>\n    <ion-slide style=\"background:white\">\n      <ion-grid>\n        <ion-col *ngFor=\"let proofWithRaw of proofsWithRaw$ | async\"\n          [routerLink]=\"['/proof', {hash: proofWithRaw.proof.hash}]\" size=\"3\" class=\"ion-no-padding\">\n          <div class=\"date-card-title\"> <strong>{{proofWithRaw.date}}</strong> </div>\n          <ion-card class=\"select-card\">\n            <ion-thumbnail class=\"select-thumbnail\">\n              <ion-img [src]=\"'data:image/*;base64,' + proofWithRaw.rawBase64\"></ion-img>\n            </ion-thumbnail>\n          </ion-card>\n        </ion-col>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button (click)=\"capture()\">\n      <ion-icon name=\"camera\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    "2MiI":
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function MiI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header.component.html */
      "yxfS");
      /* harmony import */


      var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header.component.scss */
      "oHuE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);

          this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.propDecorators = {
        headerTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        next: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        back: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HeaderComponent);
      /***/
    },

    /***/
    "HcNl":
    /*!***********************************************!*\
      !*** ./src/app/pages/storage/storage.page.ts ***!
      \***********************************************/

    /*! exports provided: StoragePage */

    /***/
    function HcNl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoragePage", function () {
        return StoragePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_storage_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./storage.page.html */
      "0c4A");
      /* harmony import */


      var _storage_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./storage.page.scss */
      "P+38");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_camera_camera_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/camera/camera.service */
      "2MVJ");
      /* harmony import */


      var src_app_services_collector_collector_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/collector/collector.service */
      "bWLf");
      /* harmony import */


      var src_app_services_data_proof_proof_repository_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/data/proof/proof-repository.service */
      "z1Mc");
      /* harmony import */


      var src_app_utils_mime_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/utils/mime-type */
      "AumY");
      /* harmony import */


      var src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/utils/rx-operators */
      "KJy6");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");

      var StoragePage = /*#__PURE__*/function () {
        function StoragePage(proofRepository, cameraService, collectorService) {
          var _this = this;

          _classCallCheck(this, StoragePage);

          this.proofRepository = proofRepository;
          this.cameraService = cameraService;
          this.collectorService = collectorService;
          this.proofs$ = this.proofRepository.getAll$();
          this.proofsWithRaw$ = this.proofs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (proofs) {
            return Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_11__["forkJoinWithDefault"])(proofs.map(function (proof) {
              return _this.proofRepository.getThumbnail$(proof);
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (base64Strings) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["zip"])(_this.proofs$, Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(base64Strings));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                proofs = _ref2[0],
                base64Strings = _ref2[1];

            return proofs.map(function (proof, index) {
              return {
                proof: proof,
                rawBase64: base64Strings[index],
                date: _this.getDate(proof.timestamp)
              };
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (proofsWithRaw) {
            return proofsWithRaw.sort(function (proofWithRawBase64A, proofWithRawBase64B) {
              return proofWithRawBase64B.proof.timestamp - proofWithRawBase64A.proof.timestamp;
            });
          }));
          this.index = 0;
          this.buttonName = 'Next';
          this.slideOpts = {
            loop: false,
            autoplay: false
          };
          this.proofsWithRawByDate$ = this.proofsWithRaw$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (proofsWithRawBase64) {
            return proofsWithRawBase64.reduce(function (groupedProofsWithRawBase64, proofWithRawBase64) {
              var index = groupedProofsWithRawBase64.findIndex(function (processingproofsWithRawBase64) {
                return processingproofsWithRawBase64[0].date === proofWithRawBase64.date;
              });

              if (index === -1) {
                groupedProofsWithRawBase64.push([proofWithRawBase64]);
              } else {
                groupedProofsWithRawBase64[index].push(proofWithRawBase64);
              }

              return groupedProofsWithRawBase64;
            }, []);
          }));
        }

        _createClass(StoragePage, [{
          key: "getDate",
          value: function getDate(timestamp) {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(timestamp, 'mediumDate', 'en-US');
          }
        }, {
          key: "capture",
          value: function capture() {
            var _this2 = this;

            this.cameraService.capture$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (cameraPhoto) {
              return _this2.collectorService.storeAndCollect(cameraPhoto.base64String, Object(src_app_utils_mime_type__WEBPACK_IMPORTED_MODULE_10__["fromExtension"])(cameraPhoto.format));
            }), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__["untilDestroyed"])(this)).subscribe();
          }
        }, {
          key: "ionSlideLoad",
          value: function ionSlideLoad(slide) {
            this.selectedSlide = slide;
          }
        }, {
          key: "ionSlideChange",
          value: function ionSlideChange(slide) {
            this.selectedSlide = slide;
          }
        }, {
          key: "next",
          value: function next() {
            this.selectedSlide.slideNext();
          }
        }, {
          key: "back",
          value: function back() {
            this.selectedSlide.slidePrev();
          }
        }]);

        return StoragePage;
      }();

      StoragePage.ctorParameters = function () {
        return [{
          type: src_app_services_data_proof_proof_repository_service__WEBPACK_IMPORTED_MODULE_9__["ProofRepository"]
        }, {
          type: src_app_services_camera_camera_service__WEBPACK_IMPORTED_MODULE_7__["CameraService"]
        }, {
          type: src_app_services_collector_collector_service__WEBPACK_IMPORTED_MODULE_8__["CollectorService"]
        }];
      };

      StoragePage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChildren"],
          args: ['slides']
        }]
      };
      StoragePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__["UntilDestroy"])({
        checkProperties: true
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-storage',
        template: _raw_loader_storage_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_storage_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], StoragePage);
      /***/
    },

    /***/
    "P+38":
    /*!*************************************************!*\
      !*** ./src/app/pages/storage/storage.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function P38(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".img-card {\n  margin: calc(var(--ion-padding, 9px) / 3);\n  width: 30vw;\n}\n\n.Title {\n  color: #000;\n}\n\n.setTitle {\n  display: flex;\n  flex-direction: row;\n  justify-self: start;\n  padding-bottom: 10px;\n  color: #000;\n  margin: calc(var(--ion-padding, 9px) / 3);\n}\n\n.img-thumbnail {\n  --size: calc(90vw / 3);\n}\n\n.select-thumbnail {\n  --size: 90vw;\n  height: 60vw;\n}\n\n.date-card-title {\n  text-align: start;\n  color: #000;\n  margin-left: 5vw;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n\n.select-card {\n  width: 90vw;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RvcmFnZS9zdG9yYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlDQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0b3JhZ2Uvc3RvcmFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pbWctY2FyZCB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1pb24tcGFkZGluZywgOXB4KSAvIDMpO1xuICB3aWR0aDogMzB2dztcbn1cblxuLlRpdGxlIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5zZXRUaXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLWlvbi1wYWRkaW5nLCA5cHgpIC8gMyk7XG59XG5cbi5pbWctdGh1bWJuYWlsIHtcbiAgLS1zaXplOiBjYWxjKDkwdncgLyAzKTtcbn1cblxuLnNlbGVjdC10aHVtYm5haWwge1xuICAtLXNpemU6IDkwdnc7XG4gIGhlaWdodDogNjB2dztcbn1cblxuLmRhdGUtY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uc2VsZWN0LWNhcmQge1xuICB3aWR0aDogOTB2dztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "WinS":
    /*!****************************************************!*\
      !*** ./src/app/components/header/header.module.ts ***!
      \****************************************************/

    /*! exports provided: HeaderModule */

    /***/
    function WinS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderModule", function () {
        return HeaderModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngneat/transloco */
      "QPBi");
      /* harmony import */


      var src_app_pages_settings_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/pages/settings/settings-routing.module */
      "HATU");
      /* harmony import */


      var _header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./header.component */
      "2MiI");

      var HeaderModule = function HeaderModule() {
        _classCallCheck(this, HeaderModule);
      };

      HeaderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TranslocoModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_pages_settings_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]],
        declarations: [_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]],
        exports: [_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]]
      })], HeaderModule);
      /***/
    },

    /***/
    "oHuE":
    /*!*********************************************************!*\
      !*** ./src/app/components/header/header.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function oHuE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "rZjt":
    /*!*************************************************!*\
      !*** ./src/app/pages/storage/storage.module.ts ***!
      \*************************************************/

    /*! exports provided: StoragePageModule */

    /***/
    function rZjt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoragePageModule", function () {
        return StoragePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngneat/transloco */
      "QPBi");
      /* harmony import */


      var src_app_components_header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/components/header/header.module */
      "WinS");
      /* harmony import */


      var _storage_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./storage-routing.module */
      "+1b/");
      /* harmony import */


      var _storage_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./storage.page */
      "HcNl");

      var StoragePageModule = function StoragePageModule() {
        _classCallCheck(this, StoragePageModule);
      };

      StoragePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _storage_routing_module__WEBPACK_IMPORTED_MODULE_7__["StoragePageRoutingModule"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__["TranslocoModule"], src_app_components_header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"]],
        declarations: [_storage_page__WEBPACK_IMPORTED_MODULE_8__["StoragePage"]]
      })], StoragePageModule);
      /***/
    },

    /***/
    "yxfS":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function yxfS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header *transloco=\"let t\" id=\"menu\">\n  <ion-toolbar style=\"background-color:white !important\">\n    <ion-buttons>\n      <ion-grid>\n        <ion-row>\n          <ion-col style=\"text-align: left;\">\n            <ion-button>\n              <ion-menu-button></ion-menu-button>\n            </ion-button>\n          </ion-col>\n          <ion-col style=\"text-align: center;\" (click)=\"back.emit()\">\n            <ion-button style=\"color: black;\" class=\"Top-Bar\" expand=\"full\" color=\"Blue\" size=\"large\">\n              {{ t('all') }}\n            </ion-button>\n          </ion-col>\n          <ion-col style=\"text-align: center;\" (click)=\"next.emit()\">\n            <ion-button style=\"color: black;\" class=\"Top-Bar\" expand=\"full\" color=\"Blue\" size=\"large\">\n              {{ t('tags') }}\n            </ion-button>\n          </ion-col>\n          <ion-col style=\"text-align: right;\">\n            <ion-button routerLink=\"/settings\">\n              <img slot=\"icon-only\" src=\"../../../assets/appicon/Search.svg\" />\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-menu *transloco=\"let t\" side=\"start\" menuId=\"first\" contentId=\"menu\">\n  <ion-header>\n    <ion-toolbar color=\"translucent\">\n      <ion-title>{{ t('settings') }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-menu-toggle>\n        <ion-item routerLink=\"/general\">\n          <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          <ion-label>{{ t('general') }}</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-menu-toggle>\n        <ion-item routerLink=\"/defaultinformationprovider\">\n          <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          <ion-label>{{ t('defaultInformationProvider') }}</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-menu-toggle>\n        <ion-item routerLink=\"/defaultsignature\">\n          <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          <ion-label>{{ t('defaultSignature') }}</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-menu-toggle>\n        <ion-item>\n          <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          <ion-label>{{ t('informationProvider') }}</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-menu-toggle>\n        <ion-item routerLink=\"/about\">\n          <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          <ion-label>{{ t('about') }}</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n    </ion-list>\n  </ion-content>\n</ion-menu>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-storage-storage-module-es5.js.map