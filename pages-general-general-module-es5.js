(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-general-general-module"], {
    /***/
    "+brZ":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/general/general.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function brZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header *transloco=\"let t\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button routerLink=\"..\" routerDirection=\"back\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ t('general') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *transloco=\"let t\">\n  <ion-list>\n    <ion-item lines=\"none\">\n      <ion-icon name=\"language\" slot=\"start\"></ion-icon>\n      <ion-label>{{ t('languages') }}</ion-label>\n      <ion-select [ngModel]=\"currentLanguageKey$ | async\" (ngModelChange)=\"setCurrentLanguage($event)\">\n        <ion-select-option *ngFor=\"let language of langauges | keyvalue\" [value]=\"language.key\">{{ language.value }}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "0ybo":
    /*!***********************************************!*\
      !*** ./src/app/pages/general/general.page.ts ***!
      \***********************************************/

    /*! exports provided: GeneralPage */

    /***/
    function ybo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralPage", function () {
        return GeneralPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_general_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./general.page.html */
      "+brZ");
      /* harmony import */


      var _general_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./general.page.scss */
      "6+kE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");
      /* harmony import */


      var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/language/language.service */
      "5RWN");

      var GeneralPage = /*#__PURE__*/function () {
        function GeneralPage(languageService) {
          _classCallCheck(this, GeneralPage);

          this.languageService = languageService;
          this.langauges = this.languageService.languages;
          this.currentLanguageKey$ = this.languageService.currentLanguageKey$;
        }

        _createClass(GeneralPage, [{
          key: "setCurrentLanguage",
          value: function setCurrentLanguage(languageKey) {
            this.languageService.setCurrentLanguage$(languageKey).pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe();
          }
        }]);

        return GeneralPage;
      }();

      GeneralPage.ctorParameters = function () {
        return [{
          type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"]
        }];
      };

      GeneralPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["UntilDestroy"])({
        checkProperties: true
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-general',
        template: _raw_loader_general_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_general_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GeneralPage);
      /***/
    },

    /***/
    "6+kE":
    /*!*************************************************!*\
      !*** ./src/app/pages/general/general.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function kE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlbmVyYWwvZ2VuZXJhbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "R7qX":
    /*!*********************************************************!*\
      !*** ./src/app/pages/general/general-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: GeneralPageRoutingModule */

    /***/
    function R7qX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralPageRoutingModule", function () {
        return GeneralPageRoutingModule;
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


      var _general_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./general.page */
      "0ybo");

      var routes = [{
        path: '',
        component: _general_page__WEBPACK_IMPORTED_MODULE_3__["GeneralPage"]
      }];

      var GeneralPageRoutingModule = function GeneralPageRoutingModule() {
        _classCallCheck(this, GeneralPageRoutingModule);
      };

      GeneralPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GeneralPageRoutingModule);
      /***/
    },

    /***/
    "yebe":
    /*!*************************************************!*\
      !*** ./src/app/pages/general/general.module.ts ***!
      \*************************************************/

    /*! exports provided: GeneralPageModule */

    /***/
    function yebe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralPageModule", function () {
        return GeneralPageModule;
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


      var _general_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./general-routing.module */
      "R7qX");
      /* harmony import */


      var _general_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./general.page */
      "0ybo");

      var GeneralPageModule = function GeneralPageModule() {
        _classCallCheck(this, GeneralPageModule);
      };

      GeneralPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _general_routing_module__WEBPACK_IMPORTED_MODULE_6__["GeneralPageRoutingModule"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__["TranslocoModule"]],
        declarations: [_general_page__WEBPACK_IMPORTED_MODULE_7__["GeneralPage"]]
      })], GeneralPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-general-general-module-es5.js.map