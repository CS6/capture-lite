function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSettingsSettingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header *transloco=\"let t\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button routerLink=\"..\" routerDirection=\"back\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ t('settings') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *transloco=\"let t\">\n  <ion-list>\n    <ion-list-header>{{ t('general') }}</ion-list-header>\n    <ion-item>\n      <ion-icon name=\"language\" slot=\"start\"></ion-icon>\n      <ion-label>{{ t('languages') }}</ion-label>\n      <ion-select [ngModel]=\"currentLanguageKey$ | async\" (ngModelChange)=\"setCurrentLanguage($event)\">\n        <ion-select-option *ngFor=\"let language of langauges | keyvalue\" [value]=\"language.key\">{{ language.value }}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-list-header>{{ t('defaultSignature') }}</ion-list-header>\n    <ion-item>\n      <ion-icon name=\"key\" slot=\"start\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>{{ t('publicKey') }}</h2>\n        <p>{{ publicKey$ | async }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"key\" slot=\"start\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>{{ t('privateKey') }}</h2>\n        <p>{{ privateKey$ | async }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-list-header>{{ t('about') }}</ion-list-header>\n    <ion-item>\n      <ion-icon name=\"information\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>{{ t('version') }}</h2>\n        <p>{{ version$ | async }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/settings/settings-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/settings/settings-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: SettingsPageRoutingModule */

  /***/
  function srcAppPagesSettingsSettingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function () {
      return SettingsPageRoutingModule;
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


    var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./settings.page */
    "./src/app/pages/settings/settings.page.ts");

    var routes = [{
      path: '',
      component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }];

    var SettingsPageRoutingModule = function SettingsPageRoutingModule() {
      _classCallCheck(this, SettingsPageRoutingModule);
    };

    SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SettingsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/settings/settings.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/settings/settings.module.ts ***!
    \***************************************************/

  /*! exports provided: SettingsPageModule */

  /***/
  function srcAppPagesSettingsSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
      return SettingsPageModule;
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


    var _settings_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./settings-routing.module */
    "./src/app/pages/settings/settings-routing.module.ts");
    /* harmony import */


    var _settings_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./settings.page */
    "./src/app/pages/settings/settings.page.ts");

    var SettingsPageModule = function SettingsPageModule() {
      _classCallCheck(this, SettingsPageModule);
    };

    SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_6__["SettingsPageRoutingModule"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__["TranslocoModule"]],
      declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_7__["SettingsPage"]]
    })], SettingsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/settings/settings.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/settings/settings.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSettingsSettingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/settings/settings.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/settings/settings.page.ts ***!
    \*************************************************/

  /*! exports provided: SettingsPage */

  /***/
  function srcAppPagesSettingsSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
      return SettingsPage;
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


    var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngneat/until-destroy */
    "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_collector_signature_default_provider_default_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/collector/signature/default-provider/default-provider */
    "./src/app/services/collector/signature/default-provider/default-provider.ts");
    /* harmony import */


    var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/language/language.service */
    "./src/app/services/language/language.service.ts");

    var Device = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Device;

    var SettingsPage = /*#__PURE__*/function () {
      function SettingsPage(languageService) {
        _classCallCheck(this, SettingsPage);

        this.languageService = languageService;
        this.langauges = this.languageService.languages;
        this.currentLanguageKey$ = this.languageService.currentLanguageKey$;
        this.publicKey$ = src_app_services_collector_signature_default_provider_default_provider__WEBPACK_IMPORTED_MODULE_6__["DefaultSignatureProvider"].getPublicKey$();
        this.privateKey$ = src_app_services_collector_signature_default_provider_default_provider__WEBPACK_IMPORTED_MODULE_6__["DefaultSignatureProvider"].getPrivateKey$();
        this.version$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(function () {
          return Device.getInfo();
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (deviceInfo) {
          return deviceInfo.appVersion;
        }));
      }

      _createClass(SettingsPage, [{
        key: "setCurrentLanguage",
        value: function setCurrentLanguage(languageKey) {
          this.languageService.setCurrentLanguage$(languageKey).pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this)).subscribe();
        }
      }]);

      return SettingsPage;
    }();

    SettingsPage.ctorParameters = function () {
      return [{
        type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"]
      }];
    };

    SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])({
      checkProperties: true
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-settings',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./settings.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./settings.page.scss */
      "./src/app/pages/settings/settings.page.scss"))["default"]]
    })], SettingsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-settings-settings-module-es5.js.map