(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-information-information-module"], {
    /***/
    "A59R":
    /*!*******************************************************!*\
      !*** ./src/app/pages/information/information.page.ts ***!
      \*******************************************************/

    /*! exports provided: InformationPage */

    /***/
    function A59R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InformationPage", function () {
        return InformationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_information_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./information.page.html */
      "Fkes");
      /* harmony import */


      var _information_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./information.page.scss */
      "Np3m");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_data_information_information_repository_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/data/information/information-repository.service */
      "7IEa");
      /* harmony import */


      var src_app_services_data_proof_proof_repository_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/data/proof/proof-repository.service */
      "z1Mc");
      /* harmony import */


      var src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/utils/rx-operators */
      "KJy6");

      var InformationPage = function InformationPage(route, proofRepository, informationRepository) {
        var _this = this;

        _classCallCheck(this, InformationPage);

        this.route = route;
        this.proofRepository = proofRepository;
        this.informationRepository = informationRepository;
        this.proof$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (params) {
          return params.get('hash');
        }), Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_9__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (hash) {
          return _this.proofRepository.getByHash$(hash);
        }), Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_9__["isNonNullable"])());
        this.hash$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('hash'));
        this.locationInformation$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (proof) {
          return _this.informationRepository.getByProof$(proof);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (informationList) {
          return informationList.filter(function (information) {
            return information.type === "location";
          }
          /* Location */
          );
        }));
        this.otherInformation$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (proof) {
          return _this.informationRepository.getByProof$(proof);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (informationList) {
          return informationList.filter(function (information) {
            return information.type === "other";
          }
          /* Other */
          );
        }));
        this.deviceInformation$ = this.proof$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (proof) {
          return _this.informationRepository.getByProof$(proof);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (informationList) {
          return informationList.filter(function (information) {
            return information.type === "device";
          }
          /* Device */
          );
        }));
      };

      InformationPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_data_proof_proof_repository_service__WEBPACK_IMPORTED_MODULE_8__["ProofRepository"]
        }, {
          type: src_app_services_data_information_information_repository_service__WEBPACK_IMPORTED_MODULE_7__["InformationRepository"]
        }];
      };

      InformationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["UntilDestroy"])({
        checkProperties: true
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-information',
        template: _raw_loader_information_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_information_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InformationPage);
      /***/
    },

    /***/
    "Fkes":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/information/information.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Fkes(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header *transloco=\"let t\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"['/proof', {hash: (hash$ | async)}]\" routerDirection=\"back\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ t('informationDetails') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content *transloco=\"let t\">\n  <ion-item>\n    <ion-slide>\n      <ion-card class=\"slide-card\">\n        <ion-card-header>\n          <ion-card-title>{{ t('location') }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list lines=\"none\" *ngFor=\"let information of (locationInformation$ | async)\">\n            <ion-item>\n              <ion-label class=\"ion-text-wrap\">\n                <h3>{{ information.name }}</h3>\n                <p>{{ information.value }}</p>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n  </ion-item>\n  <ion-item>\n    <ion-slide>\n      <ion-card class=\"slide-card\">\n        <ion-card-header>\n          <ion-card-title>{{ t('other') }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list lines=\"none\" *ngFor=\"let information of (otherInformation$ | async)\">\n            <ion-item>\n              <ion-label class=\"ion-text-wrap\">\n                <h3>{{ information.name }}</h3>\n                <p>{{ information.value }}</p>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n  </ion-item>\n  <ion-item>\n    <ion-slide>\n      <ion-card class=\"slide-card\">\n        <ion-card-header>\n          <ion-card-title>{{ t('device') }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list lines=\"none\" *ngFor=\"let information of (deviceInformation$ | async)\">\n            <ion-item>\n              <ion-label class=\"ion-text-wrap\">\n                <h3>{{ information.name }}</h3>\n                <p>{{ information.value }}</p>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n  </ion-item>\n</ion-content>";
      /***/
    },

    /***/
    "KDNC":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/information/information-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: InformationPageRoutingModule */

    /***/
    function KDNC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InformationPageRoutingModule", function () {
        return InformationPageRoutingModule;
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


      var _information_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./information.page */
      "A59R");

      var routes = [{
        path: '',
        component: _information_page__WEBPACK_IMPORTED_MODULE_3__["InformationPage"]
      }];

      var InformationPageRoutingModule = function InformationPageRoutingModule() {
        _classCallCheck(this, InformationPageRoutingModule);
      };

      InformationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InformationPageRoutingModule);
      /***/
    },

    /***/
    "Np3m":
    /*!*********************************************************!*\
      !*** ./src/app/pages/information/information.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function Np3m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".slide-card {\n  width: 100%;\n}\n\n.multiline {\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZm9ybWF0aW9uL2luZm9ybWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZS1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tdWx0aWxpbmUge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "gSC0":
    /*!*********************************************************!*\
      !*** ./src/app/pages/information/information.module.ts ***!
      \*********************************************************/

    /*! exports provided: InformationPageModule */

    /***/
    function gSC0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InformationPageModule", function () {
        return InformationPageModule;
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


      var _information_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./information-routing.module */
      "KDNC");
      /* harmony import */


      var _information_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./information.page */
      "A59R");

      var InformationPageModule = function InformationPageModule() {
        _classCallCheck(this, InformationPageModule);
      };

      InformationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _information_routing_module__WEBPACK_IMPORTED_MODULE_6__["InformationPageRoutingModule"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__["TranslocoModule"]],
        declarations: [_information_page__WEBPACK_IMPORTED_MODULE_7__["InformationPage"]]
      })], InformationPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-information-information-module-es5.js.map