(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/@ionic/pwa-elements/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*************************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicPwaElementsDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./pwa-action-sheet.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-action-sheet.entry.js", 43],
        "./pwa-camera-modal-instance.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal-instance.entry.js", 44],
        "./pwa-camera-modal.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal.entry.js", 45],
        "./pwa-camera.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera.entry.js", 46],
        "./pwa-toast.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-toast.entry.js", 47]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/pwa-elements/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        redirectTo: 'storage',
        pathMatch: 'full'
      }, {
        path: 'storage',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-storage-storage-module */
          "pages-storage-storage-module").then(__webpack_require__.bind(null,
          /*! ./pages/storage/storage.module */
          "./src/app/pages/storage/storage.module.ts")).then(function (m) {
            return m.StoragePageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-settings-settings-module */
          "pages-settings-settings-module").then(__webpack_require__.bind(null,
          /*! ./pages/settings/settings.module */
          "./src/app/pages/settings/settings.module.ts")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'proof',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-proof-proof-module */
          "pages-proof-proof-module").then(__webpack_require__.bind(null,
          /*! ./pages/proof/proof.module */
          "./src/app/pages/proof/proof.module.ts")).then(function (m) {
            return m.ProofPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngneat/transloco */
      "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm2015/ngneat-transloco.js");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
      /* harmony import */


      var _services_collector_collector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/collector/collector.service */
      "./src/app/services/collector/collector.service.ts");
      /* harmony import */


      var _services_collector_information_capacitor_provider_capacitor_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/collector/information/capacitor-provider/capacitor-provider */
      "./src/app/services/collector/information/capacitor-provider/capacitor-provider.ts");
      /* harmony import */


      var _services_collector_signature_default_provider_default_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/collector/signature/default-provider/default-provider */
      "./src/app/services/collector/signature/default-provider/default-provider.ts");
      /* harmony import */


      var _services_data_information_information_repository_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/data/information/information-repository.service */
      "./src/app/services/data/information/information-repository.service.ts");
      /* harmony import */


      var _services_data_signature_signature_repository_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/data/signature/signature-repository.service */
      "./src/app/services/data/signature/signature-repository.service.ts");
      /* harmony import */


      var _services_language_language_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./services/language/language.service */
      "./src/app/services/language/language.service.ts");
      /* harmony import */


      var _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/notification/notification.service */
      "./src/app/services/notification/notification.service.ts");
      /* harmony import */


      var _services_publisher_publishers_alert_publishers_alert_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./services/publisher/publishers-alert/publishers-alert.service */
      "./src/app/services/publisher/publishers-alert/publishers-alert.service.ts");
      /* harmony import */


      var _services_publisher_sample_publisher_sample_publisher__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./services/publisher/sample-publisher/sample-publisher */
      "./src/app/services/publisher/sample-publisher/sample-publisher.ts");
      /* harmony import */


      var _services_serialization_serialization_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./services/serialization/serialization.service */
      "./src/app/services/serialization/serialization.service.ts");

      var SplashScreen = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].SplashScreen;

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, collectorService, publishersAlert, serializationService, informationRepository, signatureRepository, translocoService, notificationService, langaugeService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.collectorService = collectorService;
          this.publishersAlert = publishersAlert;
          this.serializationService = serializationService;
          this.informationRepository = informationRepository;
          this.signatureRepository = signatureRepository;
          this.translocoService = translocoService;
          this.notificationService = notificationService;
          this.initializeApp();
          this.initializeCollector();
          this.initializePublisher();
          langaugeService.initialize$().pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this)).subscribe();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            this.platform.ready().then(function () {
              SplashScreen.hide();
            });
          }
        }, {
          key: "initializeCollector",
          value: function initializeCollector() {
            _services_collector_signature_default_provider_default_provider__WEBPACK_IMPORTED_MODULE_8__["DefaultSignatureProvider"].initialize$().pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this)).subscribe();

            this.collectorService.addInformationProvider(new _services_collector_information_capacitor_provider_capacitor_provider__WEBPACK_IMPORTED_MODULE_7__["CapacitorProvider"](this.informationRepository, this.translocoService));
            this.collectorService.addSignatureProvider(new _services_collector_signature_default_provider_default_provider__WEBPACK_IMPORTED_MODULE_8__["DefaultSignatureProvider"](this.signatureRepository, this.serializationService));
          }
        }, {
          key: "initializePublisher",
          value: function initializePublisher() {
            this.publishersAlert.addPublisher(new _services_publisher_sample_publisher_sample_publisher__WEBPACK_IMPORTED_MODULE_14__["SamplePublisher"](this.translocoService, this.notificationService));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _services_collector_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"]
        }, {
          type: _services_publisher_publishers_alert_publishers_alert_service__WEBPACK_IMPORTED_MODULE_13__["PublishersAlert"]
        }, {
          type: _services_serialization_serialization_service__WEBPACK_IMPORTED_MODULE_15__["SerializationService"]
        }, {
          type: _services_data_information_information_repository_service__WEBPACK_IMPORTED_MODULE_9__["InformationRepository"]
        }, {
          type: _services_data_signature_signature_repository_service__WEBPACK_IMPORTED_MODULE_10__["SignatureRepository"]
        }, {
          type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TranslocoService"]
        }, {
          type: _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"]
        }, {
          type: _services_language_language_service__WEBPACK_IMPORTED_MODULE_11__["LanguageService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["UntilDestroy"])({
        checkProperties: true
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _transloco_root_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./transloco-root.module */
      "./src/app/transloco-root.module.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _transloco_root_module__WEBPACK_IMPORTED_MODULE_10__["TranslocoRootModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/services/collector/collector.service.ts":
    /*!*********************************************************!*\
      !*** ./src/app/services/collector/collector.service.ts ***!
      \*********************************************************/

    /*! exports provided: CollectorService */

    /***/
    function srcAppServicesCollectorCollectorServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectorService", function () {
        return CollectorService;
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


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngneat/transloco */
      "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm2015/ngneat-transloco.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/utils/background-task/background-task */
      "./src/app/utils/background-task/background-task.ts");
      /* harmony import */


      var src_app_utils_file_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/utils/file/file */
      "./src/app/utils/file/file.ts");
      /* harmony import */


      var _data_proof_proof_repository_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../data/proof/proof-repository.service */
      "./src/app/services/data/proof/proof-repository.service.ts");
      /* harmony import */


      var _notification_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../notification/notification.service */
      "./src/app/services/notification/notification.service.ts");

      var CollectorService = /*#__PURE__*/function () {
        function CollectorService(proofRepository, notificationService, translocoService) {
          _classCallCheck(this, CollectorService);

          this.proofRepository = proofRepository;
          this.notificationService = notificationService;
          this.translocoService = translocoService;
          this.informationProviders = new Set();
          this.signatureProviders = new Set();
        }

        _createClass(CollectorService, [{
          key: "storeAndCollect",
          value: function storeAndCollect(rawBase64, mimeType) {
            var _this = this;

            // Deliberately store proof and its media file in the foreground, so the app page can
            // correctly and continuously subscribe the Storage.getAll$().
            this.store$(rawBase64, mimeType).subscribe(function (proof) {
              Object(src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_5__["subscribeInBackground"])(_this.collectAndSign$(proof));
            });
          }
        }, {
          key: "store$",
          value: function store$(rawBase64, mimeType) {
            var _this2 = this;

            return this.proofRepository.saveRawFile$(rawBase64, mimeType).pipe( // Get the proof hash from the uri.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (uri) {
              return Object(src_app_utils_file_file__WEBPACK_IMPORTED_MODULE_6__["fileNameWithoutExtension"])(uri);
            }), // Store the media file.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (hash) {
              return _this2.proofRepository.add$({
                hash: hash,
                mimeType: mimeType,
                timestamp: Date.now()
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (proofs) {
              return proofs[0];
            }));
          }
        }, {
          key: "collectAndSign$",
          value: function collectAndSign$(proof) {
            var _this3 = this;

            var notificationId = this.notificationService.createNotificationId();
            this.notificationService.notify(notificationId, this.translocoService.translate('collectingProof'), this.translocoService.translate('collectingInformation'));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(_toConsumableArray(this.informationProviders).map(function (provider) {
              return provider.collectAndStore$(proof);
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["defaultIfEmpty"])([]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return _this3.notificationService.notify(notificationId, _this3.translocoService.translate('collectingProof'), _this3.translocoService.translate('signingProof'));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMapTo"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(_toConsumableArray(this.signatureProviders).map(function (provider) {
              return provider.collectAndStore$(proof);
            }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return _this3.notificationService.cancel(notificationId);
            }));
          }
        }, {
          key: "addInformationProvider",
          value: function addInformationProvider() {
            var _this4 = this;

            for (var _len = arguments.length, providers = new Array(_len), _key = 0; _key < _len; _key++) {
              providers[_key] = arguments[_key];
            }

            providers.forEach(function (provider) {
              return _this4.informationProviders.add(provider);
            });
          }
        }, {
          key: "removeInformationProvider",
          value: function removeInformationProvider() {
            var _this5 = this;

            for (var _len2 = arguments.length, providers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              providers[_key2] = arguments[_key2];
            }

            providers.forEach(function (provider) {
              return _this5.informationProviders["delete"](provider);
            });
          }
        }, {
          key: "addSignatureProvider",
          value: function addSignatureProvider() {
            var _this6 = this;

            for (var _len3 = arguments.length, providers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              providers[_key3] = arguments[_key3];
            }

            providers.forEach(function (provider) {
              return _this6.signatureProviders.add(provider);
            });
          }
        }, {
          key: "removeSignatureProvider",
          value: function removeSignatureProvider() {
            var _this7 = this;

            for (var _len4 = arguments.length, providers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              providers[_key4] = arguments[_key4];
            }

            providers.forEach(function (provider) {
              return _this7.signatureProviders["delete"](provider);
            });
          }
        }]);

        return CollectorService;
      }();

      CollectorService.ctorParameters = function () {
        return [{
          type: _data_proof_proof_repository_service__WEBPACK_IMPORTED_MODULE_7__["ProofRepository"]
        }, {
          type: _notification_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]
        }, {
          type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__["TranslocoService"]
        }];
      };

      CollectorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CollectorService);
      /***/
    },

    /***/
    "./src/app/services/collector/information/capacitor-provider/capacitor-provider.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/services/collector/information/capacitor-provider/capacitor-provider.ts ***!
      \*****************************************************************************************/

    /*! exports provided: CapacitorProvider */

    /***/
    function srcAppServicesCollectorInformationCapacitorProviderCapacitorProviderTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CapacitorProvider", function () {
        return CapacitorProvider;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _information_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../information-provider */
      "./src/app/services/collector/information/information-provider.ts");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"],
          Device = _capacitor_core__WEBP.Device,
          Geolocation = _capacitor_core__WEBP.Geolocation;

      var CapacitorProvider = /*#__PURE__*/function (_information_provider) {
        _inherits(CapacitorProvider, _information_provider);

        var _super = _createSuper(CapacitorProvider);

        function CapacitorProvider(informationRepository, translocoService) {
          var _this8;

          _classCallCheck(this, CapacitorProvider);

          _this8 = _super.call(this, informationRepository);
          _this8.translocoService = translocoService;
          _this8.name = 'Capacitor';
          return _this8;
        }

        _createClass(CapacitorProvider, [{
          key: "provide$",
          value: function provide$(proof) {
            var _this9 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
              return Device.getInfo();
            }), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
              return Device.getBatteryInfo();
            }), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
              return Device.getLanguageCode();
            }), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
              return Geolocation.getCurrentPosition({
                enableHighAccuracy: true,
                maximumAge: 10 * 60 * 1000,
                timeout: 10 * 1000
              });
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 4),
                  deviceInfo = _ref2[0],
                  batteryInfo = _ref2[1],
                  languageCode = _ref2[2],
                  geolocationPosition = _ref2[3];

              return [{
                proofHash: proof.hash,
                provider: _this9.name,
                name: _this9.translocoService.translate('deviceName'),
                value: String(deviceInfo.name)
              }, {
                proofHash: proof.hash,
                provider: _this9.name,
                name: _this9.translocoService.translate('deviceModel'),
                value: String(deviceInfo.model)
              }, {
                proofHash: proof.hash,
                provider: _this9.name,
                name: _this9.translocoService.translate('devicePlatform'),
                value: String(deviceInfo.platform)
              }, {
                proofHash: proof.hash,
                provider: _this9.name,
                name: _this9.translocoService.translate('uuid'),
                value: String(deviceInfo.uuid)
              }, {
                proofHash: proof.hash,
                provider: _this9.name,
                name: _this9.translocoService.translate('appVersion'),
                value: String(deviceInfo.appVersion)
              }, {
                proofHash: proof.hash,
                provider: _this9.name,
                name: _this9.translocoService.translate('appVersionCode'),
                value: String(deviceInfo.appBuild)
              }, {
                proofHash: proof.hash,
                provider: _this9.name,
                name: _this9.translocoService.translate('operatingSystem'),
                value: String(deviceInfo.operatingSystem)
              }, {
                proofHash: proof.hash,
                provider: _this9.name,
                name: _this9.translocoService.translate('osVersion'),
                value: String(deviceInfo.osVersion)
              }, {
                proofHash: proof.hash,
                provider: _this9.name,
                name: _this9.translocoService.translate('deviceManufacturer'),
                value: String(deviceInfo.manufacturer)
              }, {
                proofHash: proof.hash,
                provider: _this9.name,
                name: _this9.translocoService.translate('runningOnVm'),
                value: String(deviceInfo.isVirtual)
              }, {
                proofHash: proof.hash,
                provider: _this9.name,
                name: _this9.translocoService.translate('usedMemory'),
                value: String(deviceInfo.memUsed)
              }, {
                proofHash: proof.hash,
                provider: _this9.name,
                name: _this9.translocoService.translate('freeDiskSpace'),
                value: String(deviceInfo.diskFree)
              }, {
                proofHash: proof.hash,
                provider: _this9.name,
                name: _this9.translocoService.translate('totalDiskSpace'),
                value: String(deviceInfo.diskTotal)
              }, {
                proofHash: proof.hash,
                provider: _this9.name,
                name: _this9.translocoService.translate('batteryLevel'),
                value: String(batteryInfo.batteryLevel)
              }, {
                proofHash: proof.hash,
                provider: _this9.name,
                name: _this9.translocoService.translate('batteryCharging'),
                value: String(batteryInfo.isCharging)
              }, {
                proofHash: proof.hash,
                provider: _this9.name,
                name: _this9.translocoService.translate('deviceLanguageCode'),
                value: String(languageCode.value)
              }, {
                proofHash: proof.hash,
                provider: _this9.name,
                name: _this9.translocoService.translate('location'),
                value: "(".concat(geolocationPosition.coords.latitude, ", ").concat(geolocationPosition.coords.longitude, ")")
              }];
            }));
          }
        }]);

        return CapacitorProvider;
      }(_information_provider__WEBPACK_IMPORTED_MODULE_3__["InformationProvider"]);
      /***/

    },

    /***/
    "./src/app/services/collector/information/information-provider.ts":
    /*!************************************************************************!*\
      !*** ./src/app/services/collector/information/information-provider.ts ***!
      \************************************************************************/

    /*! exports provided: InformationProvider */

    /***/
    function srcAppServicesCollectorInformationInformationProviderTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InformationProvider", function () {
        return InformationProvider;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var InformationProvider = /*#__PURE__*/function () {
        function InformationProvider(informationRepository) {
          _classCallCheck(this, InformationProvider);

          this.informationRepository = informationRepository;
        }

        _createClass(InformationProvider, [{
          key: "collectAndStore$",
          value: function collectAndStore$(proof) {
            var _this10 = this;

            return this.provide$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (information) {
              var _this10$informationRe;

              return (_this10$informationRe = _this10.informationRepository).add$.apply(_this10$informationRe, _toConsumableArray(information));
            }));
          }
        }]);

        return InformationProvider;
      }();
      /***/

    },

    /***/
    "./src/app/services/collector/signature/default-provider/default-provider.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/services/collector/signature/default-provider/default-provider.ts ***!
      \***********************************************************************************/

    /*! exports provided: DefaultSignatureProvider */

    /***/
    function srcAppServicesCollectorSignatureDefaultProviderDefaultProviderTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultSignatureProvider", function () {
        return DefaultSignatureProvider;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_utils_crypto_crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/utils/crypto/crypto */
      "./src/app/utils/crypto/crypto.ts");
      /* harmony import */


      var src_app_utils_preferences_preference_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/preferences/preference-manager */
      "./src/app/utils/preferences/preference-manager.ts");
      /* harmony import */


      var _signature_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../signature-provider */
      "./src/app/services/collector/signature/signature-provider.ts");

      var preferences = src_app_utils_preferences_preference_manager__WEBPACK_IMPORTED_MODULE_3__["PreferenceManager"].DEFAULT_SIGNATURE_PROVIDER_PREF;

      var DefaultSignatureProvider = /*#__PURE__*/function (_signature_provider__) {
        _inherits(DefaultSignatureProvider, _signature_provider__);

        var _super2 = _createSuper(DefaultSignatureProvider);

        function DefaultSignatureProvider() {
          var _this11;

          _classCallCheck(this, DefaultSignatureProvider);

          _this11 = _super2.apply(this, arguments);
          _this11.name = 'Web Crypto API';
          return _this11;
        }

        _createClass(DefaultSignatureProvider, [{
          key: "provide$",
          value: function provide$(proof, serialized) {
            var _this12 = this;

            return preferences.getString$("privateKey"
            /* PrivateKey */
            ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (privateKeyHex) {
              return Object(src_app_utils_crypto_crypto__WEBPACK_IMPORTED_MODULE_2__["signWithSha256AndEcdsa$"])(serialized, privateKeyHex);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (signatureHex) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(signatureHex), DefaultSignatureProvider.getPublicKey$());
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  signatureHex = _ref4[0],
                  publicKeyHex = _ref4[1];

              return {
                proofHash: proof.hash,
                provider: _this12.name,
                signature: signatureHex,
                publicKey: publicKeyHex
              };
            }));
          }
        }], [{
          key: "initialize$",
          value: function initialize$() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["zip"])(this.getPublicKey$(), this.getPrivateKey$()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  publicKey = _ref6[0],
                  privateKey = _ref6[1];

              return publicKey.length === 0 || privateKey.length === 0;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMapTo"])(Object(src_app_utils_crypto_crypto__WEBPACK_IMPORTED_MODULE_2__["createEcKeyPair$"])()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (_ref7) {
              var publicKey = _ref7.publicKey,
                  privateKey = _ref7.privateKey;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["zip"])(preferences.setString$("publicKey"
              /* PublicKey */
              , publicKey), preferences.setString$("privateKey"
              /* PrivateKey */
              , privateKey));
            }));
          }
        }, {
          key: "getPublicKey$",
          value: function getPublicKey$() {
            return preferences.getString$("publicKey"
            /* PublicKey */
            );
          }
        }, {
          key: "getPrivateKey$",
          value: function getPrivateKey$() {
            return preferences.getString$("privateKey"
            /* PrivateKey */
            );
          }
        }]);

        return DefaultSignatureProvider;
      }(_signature_provider__WEBPACK_IMPORTED_MODULE_4__["SignatureProvider"]);
      /***/

    },

    /***/
    "./src/app/services/collector/signature/signature-provider.ts":
    /*!********************************************************************!*\
      !*** ./src/app/services/collector/signature/signature-provider.ts ***!
      \********************************************************************/

    /*! exports provided: SignatureProvider */

    /***/
    function srcAppServicesCollectorSignatureSignatureProviderTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignatureProvider", function () {
        return SignatureProvider;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var SignatureProvider = /*#__PURE__*/function () {
        function SignatureProvider(signatureRepository, serializationService) {
          _classCallCheck(this, SignatureProvider);

          this.signatureRepository = signatureRepository;
          this.serializationService = serializationService;
        }

        _createClass(SignatureProvider, [{
          key: "collectAndStore$",
          value: function collectAndStore$(proof) {
            var _this13 = this;

            return this.serializationService.stringify$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (serialized) {
              return _this13.provide$(proof, serialized);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (signature) {
              return _this13.signatureRepository.add$(signature);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (signatures) {
              return signatures[0];
            }));
          }
        }]);

        return SignatureProvider;
      }();
      /***/

    },

    /***/
    "./src/app/services/data/caption/caption-repository.service.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/services/data/caption/caption-repository.service.ts ***!
      \*********************************************************************/

    /*! exports provided: CaptionRepository */

    /***/
    function srcAppServicesDataCaptionCaptionRepositoryServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CaptionRepository", function () {
        return CaptionRepository;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/storage/storage */
      "./src/app/utils/storage/storage.ts");

      var CaptionRepository = /*#__PURE__*/function () {
        function CaptionRepository() {
          _classCallCheck(this, CaptionRepository);

          this.captionStorage = new src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]('caption');
        }

        _createClass(CaptionRepository, [{
          key: "refresh$",
          value: function refresh$() {
            return this.captionStorage.refresh$();
          }
        }, {
          key: "getByProof$",
          value: function getByProof$(proof) {
            return this.captionStorage.getAll$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (captions) {
              return captions.filter(function (caption) {
                return caption.proofHash === proof.hash;
              });
            }));
          }
        }, {
          key: "addOrEdit$",
          value: function addOrEdit$(value) {
            var _this14 = this;

            return this.captionStorage.getAll$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (captions) {
              return captions.find(function (caption) {
                return caption.proofHash === value.proofHash;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (found) {
              if (found) {
                return _this14.remove$(found);
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(found);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMapTo"])(this.captionStorage.add$(value)));
          }
        }, {
          key: "removeByProof$",
          value: function removeByProof$(proof) {
            var _this15 = this;

            return this.getByProof$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (captions) {
              return _this15.remove$.apply(_this15, _toConsumableArray(captions));
            }));
          }
        }, {
          key: "remove$",
          value: function remove$() {
            var _this$captionStorage;

            return (_this$captionStorage = this.captionStorage).remove$.apply(_this$captionStorage, arguments);
          }
        }]);

        return CaptionRepository;
      }();

      CaptionRepository = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CaptionRepository);
      /***/
    },

    /***/
    "./src/app/services/data/information/information-repository.service.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/services/data/information/information-repository.service.ts ***!
      \*****************************************************************************/

    /*! exports provided: InformationRepository */

    /***/
    function srcAppServicesDataInformationInformationRepositoryServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InformationRepository", function () {
        return InformationRepository;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/storage/storage */
      "./src/app/utils/storage/storage.ts");

      var InformationRepository = /*#__PURE__*/function () {
        function InformationRepository() {
          _classCallCheck(this, InformationRepository);

          this.informationStorage = new src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]('information');
        }

        _createClass(InformationRepository, [{
          key: "refresh$",
          value: function refresh$() {
            return this.informationStorage.refresh$();
          }
        }, {
          key: "getByProof$",
          value: function getByProof$(proof) {
            return this.informationStorage.getAll$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (informationList) {
              return informationList.filter(function (info) {
                return info.proofHash === proof.hash;
              });
            }));
          }
        }, {
          key: "add$",
          value: function add$() {
            var _this$informationStor;

            return (_this$informationStor = this.informationStorage).add$.apply(_this$informationStor, arguments);
          }
        }, {
          key: "removeByProof$",
          value: function removeByProof$(proof) {
            var _this16 = this;

            return this.getByProof$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (informationList) {
              return _this16.remove$.apply(_this16, _toConsumableArray(informationList));
            }));
          }
        }, {
          key: "remove$",
          value: function remove$() {
            var _this$informationStor2;

            return (_this$informationStor2 = this.informationStorage).remove$.apply(_this$informationStor2, arguments);
          }
        }]);

        return InformationRepository;
      }();

      InformationRepository = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], InformationRepository);
      /***/
    },

    /***/
    "./src/app/services/data/proof/proof-repository.service.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/services/data/proof/proof-repository.service.ts ***!
      \*****************************************************************/

    /*! exports provided: ProofRepository */

    /***/
    function srcAppServicesDataProofProofRepositoryServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProofRepository", function () {
        return ProofRepository;
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
      /* harmony import */


      var src_app_utils_crypto_crypto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/utils/crypto/crypto */
      "./src/app/utils/crypto/crypto.ts");
      /* harmony import */


      var src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/utils/storage/storage */
      "./src/app/utils/storage/storage.ts");
      /* harmony import */


      var _caption_caption_repository_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../caption/caption-repository.service */
      "./src/app/services/data/caption/caption-repository.service.ts");
      /* harmony import */


      var _information_information_repository_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../information/information-repository.service */
      "./src/app/services/data/information/information-repository.service.ts");
      /* harmony import */


      var _signature_signature_repository_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../signature/signature-repository.service */
      "./src/app/services/data/signature/signature-repository.service.ts");

      var Filesystem = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Filesystem;

      var ProofRepository = /*#__PURE__*/function () {
        function ProofRepository(captionRepository, informationRepository, signatureRepository) {
          _classCallCheck(this, ProofRepository);

          this.captionRepository = captionRepository;
          this.informationRepository = informationRepository;
          this.signatureRepository = signatureRepository;
          this.proofStorage = new src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]('proof');
          this.rawFileDir = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data;
          this.rawFileFolderName = 'raw';
        }

        _createClass(ProofRepository, [{
          key: "refresh$",
          value: function refresh$() {
            return this.proofStorage.refresh$();
          }
        }, {
          key: "getAll$",
          value: function getAll$() {
            return this.proofStorage.getAll$();
          }
        }, {
          key: "getByHash$",
          value: function getByHash$(hash) {
            return this.getAll$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (proofList) {
              return proofList.find(function (proof) {
                return proof.hash === hash;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (proof) {
              return !!proof;
            }));
          }
        }, {
          key: "add$",
          value: function add$() {
            var _this$proofStorage;

            return (_this$proofStorage = this.proofStorage).add$.apply(_this$proofStorage, arguments);
          }
        }, {
          key: "remove$",
          value: function remove$() {
            var _this$proofStorage2,
                _this17 = this;

            for (var _len5 = arguments.length, proofs = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              proofs[_key5] = arguments[_key5];
            }

            return (_this$proofStorage2 = this.proofStorage).remove$.apply(_this$proofStorage2, proofs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMapTo"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(proofs.map(function (proof) {
              return _this17.deleteRawFile$(proof);
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["defaultIfEmpty"])([]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMapTo"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(proofs.map(function (proof) {
              return _this17.captionRepository.removeByProof$(proof);
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["defaultIfEmpty"])([]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMapTo"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(proofs.map(function (proof) {
              return _this17.informationRepository.removeByProof$(proof);
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["defaultIfEmpty"])([]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMapTo"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(proofs.map(function (proof) {
              return _this17.signatureRepository.removeByProof$(proof);
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["defaultIfEmpty"])([]))));
          }
        }, {
          key: "getRawFile$",
          value: function getRawFile$(proof) {
            var _this18 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(function () {
              return Filesystem.readFile({
                path: "".concat(_this18.rawFileFolderName, "/").concat(proof.hash, ".").concat(proof.mimeType.extension),
                directory: _this18.rawFileDir
              });
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
              return result.data;
            }));
          }
          /**
           * Copy [rawBase64] to add raw file to internal storage.
           * @param rawBase64 The original source of raw file which will be copied.
           * @param mimeType The file added in the internal storage. The name of the returned file will be its hash with original extension.
           */

        }, {
          key: "saveRawFile$",
          value: function saveRawFile$(rawBase64, mimeType) {
            var _this19 = this;

            return Object(src_app_utils_crypto_crypto__WEBPACK_IMPORTED_MODULE_5__["sha256WithBase64$"])(rawBase64).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (hash) {
              return Filesystem.writeFile({
                path: "".concat(_this19.rawFileFolderName, "/").concat(hash, ".").concat(mimeType.extension),
                data: rawBase64,
                directory: _this19.rawFileDir,
                recursive: true
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
              return result.uri;
            }));
          }
        }, {
          key: "deleteRawFile$",
          value: function deleteRawFile$(proof) {
            var _this20 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(function () {
              return Filesystem.deleteFile({
                path: "".concat(_this20.rawFileFolderName, "/").concat(proof.hash, ".").concat(proof.mimeType.extension),
                directory: _this20.rawFileDir
              });
            });
          }
        }]);

        return ProofRepository;
      }();

      ProofRepository.ctorParameters = function () {
        return [{
          type: _caption_caption_repository_service__WEBPACK_IMPORTED_MODULE_7__["CaptionRepository"]
        }, {
          type: _information_information_repository_service__WEBPACK_IMPORTED_MODULE_8__["InformationRepository"]
        }, {
          type: _signature_signature_repository_service__WEBPACK_IMPORTED_MODULE_9__["SignatureRepository"]
        }];
      };

      ProofRepository = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ProofRepository);
      /***/
    },

    /***/
    "./src/app/services/data/signature/signature-repository.service.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/services/data/signature/signature-repository.service.ts ***!
      \*************************************************************************/

    /*! exports provided: SignatureRepository */

    /***/
    function srcAppServicesDataSignatureSignatureRepositoryServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignatureRepository", function () {
        return SignatureRepository;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/storage/storage */
      "./src/app/utils/storage/storage.ts");

      var SignatureRepository = /*#__PURE__*/function () {
        function SignatureRepository() {
          _classCallCheck(this, SignatureRepository);

          this.signatureStorage = new src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]('signature');
        }

        _createClass(SignatureRepository, [{
          key: "refresh$",
          value: function refresh$() {
            return this.signatureStorage.refresh$();
          }
        }, {
          key: "getByProof$",
          value: function getByProof$(proof) {
            return this.signatureStorage.getAll$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (signatures) {
              return signatures.filter(function (info) {
                return info.proofHash === proof.hash;
              });
            }));
          }
        }, {
          key: "add$",
          value: function add$() {
            var _this$signatureStorag;

            return (_this$signatureStorag = this.signatureStorage).add$.apply(_this$signatureStorag, arguments);
          }
        }, {
          key: "removeByProof$",
          value: function removeByProof$(proof) {
            var _this21 = this;

            return this.getByProof$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (signatures) {
              return _this21.remove$.apply(_this21, _toConsumableArray(signatures));
            }));
          }
        }, {
          key: "remove$",
          value: function remove$() {
            var _this$signatureStorag2;

            return (_this$signatureStorag2 = this.signatureStorage).remove$.apply(_this$signatureStorag2, arguments);
          }
        }]);

        return SignatureRepository;
      }();

      SignatureRepository = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SignatureRepository);
      /***/
    },

    /***/
    "./src/app/services/language/language.service.ts":
    /*!*******************************************************!*\
      !*** ./src/app/services/language/language.service.ts ***!
      \*******************************************************/

    /*! exports provided: LanguageService */

    /***/
    function srcAppServicesLanguageLanguageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageService", function () {
        return LanguageService;
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


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngneat/transloco */
      "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm2015/ngneat-transloco.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/transloco-root.module */
      "./src/app/transloco-root.module.ts");
      /* harmony import */


      var _utils_preferences_preference_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../utils/preferences/preference-manager */
      "./src/app/utils/preferences/preference-manager.ts");

      var LanguageService = /*#__PURE__*/function () {
        function LanguageService(translocoService) {
          _classCallCheck(this, LanguageService);

          this.translocoService = translocoService;
          this.preferences = _utils_preferences_preference_manager__WEBPACK_IMPORTED_MODULE_5__["PreferenceManager"].LANGUAGE_PREF;
          this.prefKeys = {
            langauge: 'langauge'
          };
          this.languages = src_app_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__["languages"];
          this.defaultLanguage = src_app_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__["defaultLanguage"];
          this.currentLanguageKey$ = this.preferences.get$(this.prefKeys.langauge, src_app_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__["defaultLanguage"][0]);
        }

        _createClass(LanguageService, [{
          key: "initialize$",
          value: function initialize$() {
            var _this22 = this;

            this.translocoService.setDefaultLang(src_app_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__["defaultLanguage"][0]);
            return this.currentLanguageKey$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (key) {
              return _this22.setCurrentLanguage$(key);
            }));
          }
        }, {
          key: "setCurrentLanguage$",
          value: function setCurrentLanguage$(key) {
            return this.preferences.set$(this.prefKeys.langauge, key).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(this.translocoService.setActiveLang(key)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(key));
          }
        }]);

        return LanguageService;
      }();

      LanguageService.ctorParameters = function () {
        return [{
          type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__["TranslocoService"]
        }];
      };

      LanguageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LanguageService);
      /***/
    },

    /***/
    "./src/app/services/notification/notification.service.ts":
    /*!***************************************************************!*\
      !*** ./src/app/services/notification/notification.service.ts ***!
      \***************************************************************/

    /*! exports provided: NotificationService */

    /***/
    function srcAppServicesNotificationNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
        return NotificationService;
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


      var src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/background-task/background-task */
      "./src/app/utils/background-task/background-task.ts");

      var LocalNotifications = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].LocalNotifications;

      var NotificationService = /*#__PURE__*/function () {
        function NotificationService() {
          _classCallCheck(this, NotificationService);

          this.currentId = 1;
          LocalNotifications.requestPermission().then(function (result) {
            return console.log("Notification permission request result: ".concat(result.granted));
          });
        }

        _createClass(NotificationService, [{
          key: "createNotificationId",
          value: function createNotificationId() {
            this.currentId++;
            return this.currentId;
          } // TODO: Add on-going configurations when this PR got merged and released:
          //       https://github.com/ionic-team/capacitor/pull/3165

        }, {
          key: "notify",
          value: function notify(id, title, body) {
            Object(src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_4__["subscribeInBackground"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(function () {
              return LocalNotifications.schedule({
                notifications: [{
                  title: title,
                  body: body,
                  id: id
                }]
              });
            }));
          }
        }, {
          key: "cancel",
          value: function cancel(id) {
            Object(src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_4__["subscribeInBackground"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(function () {
              return LocalNotifications.cancel({
                notifications: [{
                  id: String(id)
                }]
              });
            }));
          }
        }]);

        return NotificationService;
      }();

      NotificationService.ctorParameters = function () {
        return [];
      };

      NotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], NotificationService);
      /***/
    },

    /***/
    "./src/app/services/publisher/publisher.ts":
    /*!*************************************************!*\
      !*** ./src/app/services/publisher/publisher.ts ***!
      \*************************************************/

    /*! exports provided: Publisher */

    /***/
    function srcAppServicesPublisherPublisherTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Publisher", function () {
        return Publisher;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/utils/background-task/background-task */
      "./src/app/utils/background-task/background-task.ts");

      var Publisher = /*#__PURE__*/function () {
        function Publisher(translocoService, notificationService) {
          _classCallCheck(this, Publisher);

          this.translocoService = translocoService;
          this.notificationService = notificationService;
        }

        _createClass(Publisher, [{
          key: "publish",
          value: function publish(proof) {
            var _this23 = this;

            var notificationId = this.notificationService.createNotificationId();
            this.notificationService.notify(notificationId, this.translocoService.translate('publishingProof'), this.translocoService.translate('message.publishingProof', {
              hash: proof.hash,
              publisherName: this.name
            }));
            Object(src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_1__["subscribeInBackground"])(this.run$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (_) {
              return _this23.notificationService.notify(notificationId, _this23.translocoService.translate('proofPublished'), _this23.translocoService.translate('message.proofPublished', {
                hash: proof.hash,
                publisherName: _this23.name
              }));
            })));
          }
        }]);

        return Publisher;
      }();
      /***/

    },

    /***/
    "./src/app/services/publisher/publishers-alert/publishers-alert.service.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/services/publisher/publishers-alert/publishers-alert.service.ts ***!
      \*********************************************************************************/

    /*! exports provided: PublishersAlert */

    /***/
    function srcAppServicesPublisherPublishersAlertPublishersAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublishersAlert", function () {
        return PublishersAlert;
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


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngneat/transloco */
      "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm2015/ngneat-transloco.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var PublishersAlert = /*#__PURE__*/function () {
        function PublishersAlert(alertController, translocoService) {
          _classCallCheck(this, PublishersAlert);

          this.alertController = alertController;
          this.translocoService = translocoService;
          this.publishers = [];
        }

        _createClass(PublishersAlert, [{
          key: "addPublisher",
          value: function addPublisher(publisher) {
            this.publishers.push(publisher);
          }
        }, {
          key: "present$",
          value: function present$(proof) {
            var _this24 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(function () {
              return _this24.alertController.create({
                header: _this24.translocoService.translate('selectAPublisher'),
                inputs: _this24.publishers.map(function (publisher, index) {
                  return {
                    name: publisher.name,
                    type: 'radio',
                    label: publisher.name,
                    value: publisher.name,
                    checked: index === 0
                  };
                }),
                buttons: [{
                  text: _this24.translocoService.translate('cancel'),
                  role: 'cancel'
                }, {
                  text: _this24.translocoService.translate('ok'),
                  handler: function handler(name) {
                    var _a;

                    return (_a = _this24.getPublisherByName(name)) === null || _a === void 0 ? void 0 : _a.publish(proof);
                  }
                }]
              });
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (alertElement) {
              return alertElement.present();
            }));
          }
        }, {
          key: "getPublisherByName",
          value: function getPublisherByName(name) {
            return this.publishers.find(function (publisher) {
              return publisher.name === name;
            });
          }
        }]);

        return PublishersAlert;
      }();

      PublishersAlert.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoService"]
        }];
      };

      PublishersAlert = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PublishersAlert);
      /***/
    },

    /***/
    "./src/app/services/publisher/sample-publisher/sample-publisher.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/services/publisher/sample-publisher/sample-publisher.ts ***!
      \*************************************************************************/

    /*! exports provided: SamplePublisher */

    /***/
    function srcAppServicesPublisherSamplePublisherSamplePublisherTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SamplePublisher", function () {
        return SamplePublisher;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _publisher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../publisher */
      "./src/app/services/publisher/publisher.ts");

      var SamplePublisher = /*#__PURE__*/function (_publisher__WEBPACK_I) {
        _inherits(SamplePublisher, _publisher__WEBPACK_I);

        var _super3 = _createSuper(SamplePublisher);

        function SamplePublisher() {
          var _this25;

          _classCallCheck(this, SamplePublisher);

          _this25 = _super3.apply(this, arguments);
          _this25.name = 'Sample Publisher';
          return _this25;
        }

        _createClass(SamplePublisher, [{
          key: "run$",
          value: function run$(proof) {
            var _this26 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(void 0).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_) {
              return console.log("Start publishing ".concat(proof.hash, " from ").concat(_this26.name, "."));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_) {
              return console.log("Finish publishing ".concat(proof.hash, " from ").concat(_this26.name, "."));
            }));
          }
        }]);

        return SamplePublisher;
      }(_publisher__WEBPACK_IMPORTED_MODULE_2__["Publisher"]);
      /***/

    },

    /***/
    "./src/app/services/serialization/serialization.service.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/services/serialization/serialization.service.ts ***!
      \*****************************************************************/

    /*! exports provided: SerializationService */

    /***/
    function srcAppServicesSerializationSerializationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SerializationService", function () {
        return SerializationService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _data_information_information_repository_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../data/information/information-repository.service */
      "./src/app/services/data/information/information-repository.service.ts");

      var SerializationService = /*#__PURE__*/function () {
        function SerializationService(informationRepository) {
          _classCallCheck(this, SerializationService);

          this.informationRepository = informationRepository;
        }

        _createClass(SerializationService, [{
          key: "stringify$",
          value: function stringify$(proof) {
            return this.createSortedProofInformation$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (sortedProofInformation) {
              return JSON.stringify(sortedProofInformation);
            }));
          }
        }, {
          key: "createSortedProofInformation$",
          value: function createSortedProofInformation$(proof) {
            return this.informationRepository.getByProof$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (informationList) {
              var sortedInformation = informationList.sort(function (a, b) {
                var proofHashCompared = a.proofHash.localeCompare(b.proofHash);
                var providerCompared = a.provider.localeCompare(b.provider);
                var nameCompared = a.name.localeCompare(b.name);
                var valueCompared = a.value.localeCompare(b.value);

                if (proofHashCompared !== 0) {
                  return proofHashCompared;
                }

                if (providerCompared !== 0) {
                  return providerCompared;
                }

                if (nameCompared !== 0) {
                  return nameCompared;
                }

                return valueCompared;
              });
              return {
                proof: proof,
                sortedInformation: sortedInformation
              };
            }));
          }
        }]);

        return SerializationService;
      }();

      SerializationService.ctorParameters = function () {
        return [{
          type: _data_information_information_repository_service__WEBPACK_IMPORTED_MODULE_3__["InformationRepository"]
        }];
      };

      SerializationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SerializationService);
      /***/
    },

    /***/
    "./src/app/transloco-root.module.ts":
    /*!******************************************!*\
      !*** ./src/app/transloco-root.module.ts ***!
      \******************************************/

    /*! exports provided: languages, defaultLanguage, TranslocoHttpLoader, TranslocoRootModule */

    /***/
    function srcAppTranslocoRootModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "languages", function () {
        return languages;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultLanguage", function () {
        return defaultLanguage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslocoHttpLoader", function () {
        return TranslocoHttpLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslocoRootModule", function () {
        return TranslocoRootModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngneat/transloco */
      "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm2015/ngneat-transloco.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");

      var languages = {
        'en-us': 'English (United State)',
        'zh-tw': '繁體中文（台灣）'
      };
      var defaultLanguage = Object.entries(languages)[0];

      var TranslocoHttpLoader = /*#__PURE__*/function () {
        function TranslocoHttpLoader(http) {
          _classCallCheck(this, TranslocoHttpLoader);

          this.http = http;
        }

        _createClass(TranslocoHttpLoader, [{
          key: "getTranslation",
          value: function getTranslation(lang) {
            return this.http.get("./assets/i18n/".concat(lang, ".json"));
          }
        }]);

        return TranslocoHttpLoader;
      }();

      TranslocoHttpLoader.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      TranslocoHttpLoader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], TranslocoHttpLoader);

      var TranslocoRootModule = function TranslocoRootModule() {
        _classCallCheck(this, TranslocoRootModule);
      };

      TranslocoRootModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        exports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoModule"]],
        providers: [{
          provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TRANSLOCO_CONFIG"],
          useValue: Object(_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["translocoConfig"])({
            availableLangs: Object.keys(languages),
            defaultLang: defaultLanguage[0],
            fallbackLang: defaultLanguage[0],
            missingHandler: {
              useFallbackTranslation: true
            },
            // Remove this option if your application doesn't support changing language in runtime.
            reRenderOnLangChange: true,
            prodMode: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production
          })
        }, {
          provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TRANSLOCO_LOADER"],
          useClass: TranslocoHttpLoader
        }]
      })], TranslocoRootModule);
      /***/
    },

    /***/
    "./src/app/utils/background-task/background-task.ts":
    /*!**********************************************************!*\
      !*** ./src/app/utils/background-task/background-task.ts ***!
      \**********************************************************/

    /*! exports provided: subscribeInBackground */

    /***/
    function srcAppUtilsBackgroundTaskBackgroundTaskTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "subscribeInBackground", function () {
        return subscribeInBackground;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var BackgroundTask = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"].BackgroundTask;

      function subscribeInBackground(work$) {
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Capacitor"].isPluginAvailable('BackgroundTask')) {
          var taskId = BackgroundTask.beforeExit(function () {
            work$.subscribe(function (_) {
              return BackgroundTask.finish({
                taskId: taskId
              });
            });
          });
        } else {
          work$.subscribe();
        }
      }
      /***/

    },

    /***/
    "./src/app/utils/crypto/crypto.ts":
    /*!****************************************!*\
      !*** ./src/app/utils/crypto/crypto.ts ***!
      \****************************************/

    /*! exports provided: sha256$, sha256WithString$, sha256WithBase64$, createEcKeyPair$, signWithSha256AndEcdsa$, verifyWithSha256AndEcdsa$ */

    /***/
    function srcAppUtilsCryptoCryptoTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sha256$", function () {
        return sha256$;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sha256WithString$", function () {
        return sha256WithString$;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sha256WithBase64$", function () {
        return sha256WithBase64$;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createEcKeyPair$", function () {
        return createEcKeyPair$;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "signWithSha256AndEcdsa$", function () {
        return signWithSha256AndEcdsa$;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "verifyWithSha256AndEcdsa$", function () {
        return verifyWithSha256AndEcdsa$;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _encoding_encoding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoding/encoding */
      "./src/app/utils/encoding/encoding.ts");

      var subtle = crypto.subtle;
      var SHA_256 = 'SHA-256';
      var ECDSA = 'ECDSA';
      var SECP256R1 = 'P-256';

      function sha256$(object) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(JSON.stringify(object)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (json) {
          return sha256WithString$(json);
        }));
      }

      function sha256WithString$(str) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(new TextEncoder().encode(str).buffer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (arrayBuffer) {
          return subtle.digest(SHA_256, arrayBuffer);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (digested) {
          return Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["arrayBufferToHex"])(digested);
        }));
      }

      function sha256WithBase64$(base64) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["base64ToArrayBuffer"])(base64)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (arrayBuffer) {
          return subtle.digest(SHA_256, arrayBuffer);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (digested) {
          return Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["arrayBufferToHex"])(digested);
        }));
      }

      function createEcKeyPair$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () {
          return subtle.generateKey({
            name: ECDSA,
            namedCurve: SECP256R1
          }, true, ["sign"
          /* Sign */
          , "verify"
          /* Verify */
          ]);
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (_ref8) {
          var publicKey = _ref8.publicKey,
              privateKey = _ref8.privateKey;
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["zip"])(exportEcdsaPublicKey$(publicKey), exportEcdsaPrivateKey$(privateKey));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref9) {
          var _ref10 = _slicedToArray(_ref9, 2),
              publicKey = _ref10[0],
              privateKey = _ref10[1];

          return {
            publicKey: publicKey,
            privateKey: privateKey
          };
        }));
      }

      function signWithSha256AndEcdsa$(message, privateKeyHex) {
        return importEcdsaPrivateKey$(privateKeyHex).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (key) {
          return subtle.sign({
            name: ECDSA,
            hash: SHA_256
          }, key, Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["stringToArrayBuffer"])(message));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (signature) {
          return Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["arrayBufferToHex"])(signature);
        }));
      }

      function verifyWithSha256AndEcdsa$(message, signatureHex, publicKeyHex) {
        return importEcdsaPublicKey$(publicKeyHex).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (key) {
          return subtle.verify({
            name: ECDSA,
            hash: SHA_256
          }, key, Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["hexToArrayBuffer"])(signatureHex), Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["stringToArrayBuffer"])(message));
        }));
      }

      function exportEcdsaPublicKey$(key) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () {
          return subtle.exportKey("spki"
          /* SubjectPublicKeyInfo */
          , key);
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (arrayBuffer) {
          return Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["arrayBufferToHex"])(arrayBuffer);
        }));
      }

      function exportEcdsaPrivateKey$(key) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () {
          return subtle.exportKey("pkcs8"
          /* PKCS8 */
          , key);
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (arrayBuffer) {
          return Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["arrayBufferToHex"])(arrayBuffer);
        }));
      }

      function importEcdsaPublicKey$(keyHex) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () {
          return subtle.importKey("spki"
          /* SubjectPublicKeyInfo */
          , Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["hexToArrayBuffer"])(keyHex), {
            name: ECDSA,
            hash: SHA_256,
            namedCurve: SECP256R1
          }, true, ["verify"
          /* Verify */
          ]);
        });
      }

      function importEcdsaPrivateKey$(keyHex) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () {
          return subtle.importKey("pkcs8"
          /* PKCS8 */
          , Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["hexToArrayBuffer"])(keyHex), {
            name: ECDSA,
            hash: SHA_256,
            namedCurve: SECP256R1
          }, true, ["sign"
          /* Sign */
          ]);
        });
      }
      /***/

    },

    /***/
    "./src/app/utils/encoding/encoding.ts":
    /*!********************************************!*\
      !*** ./src/app/utils/encoding/encoding.ts ***!
      \********************************************/

    /*! exports provided: base64ToArrayBuffer, arrayBufferToBase64, arrayBufferToHex, hexToArrayBuffer, stringToArrayBuffer, arrayBufferToString */

    /***/
    function srcAppUtilsEncodingEncodingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "base64ToArrayBuffer", function () {
        return base64ToArrayBuffer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "arrayBufferToBase64", function () {
        return arrayBufferToBase64;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "arrayBufferToHex", function () {
        return arrayBufferToHex;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hexToArrayBuffer", function () {
        return hexToArrayBuffer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stringToArrayBuffer", function () {
        return stringToArrayBuffer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "arrayBufferToString", function () {
        return arrayBufferToString;
      });

      var textEncoder = new TextEncoder();
      var textDecoder = new TextDecoder();

      function base64ToArrayBuffer(base64) {
        var binaryString = atob(base64);
        var bytes = new Uint8Array(binaryString.length);

        for (var i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }

        return bytes.buffer;
      }

      function arrayBufferToBase64(arrayBuffer) {
        return btoa(String.fromCharCode.apply(String, _toConsumableArray(new Uint8Array(arrayBuffer))));
      }

      function arrayBufferToHex(arrayBuffer) {
        return _toConsumableArray(new Uint8Array(arrayBuffer)).map(function (b) {
          return b.toString(16).padStart(2, '0');
        }).join('');
      }

      function hexToArrayBuffer(hex) {
        // tslint:disable-next-line: no-non-null-assertion
        return new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
          return parseInt(h, 16);
        })).buffer;
      }

      function stringToArrayBuffer(str) {
        return textEncoder.encode(str).buffer;
      }

      function arrayBufferToString(arrayBuffer) {
        return textDecoder.decode(arrayBuffer);
      }
      /***/

    },

    /***/
    "./src/app/utils/file/file.ts":
    /*!************************************!*\
      !*** ./src/app/utils/file/file.ts ***!
      \************************************/

    /*! exports provided: fileNameWithoutExtension */

    /***/
    function srcAppUtilsFileFileTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fileNameWithoutExtension", function () {
        return fileNameWithoutExtension;
      });

      function fileNameWithoutExtension(uri) {
        // tslint:disable-next-line: no-non-null-assertion
        return uri.match(/([^\/]+)(?=\.\w+$)/)[0];
      }
      /***/

    },

    /***/
    "./src/app/utils/preferences/preference-manager.ts":
    /*!*********************************************************!*\
      !*** ./src/app/utils/preferences/preference-manager.ts ***!
      \*********************************************************/

    /*! exports provided: PreferenceManager */

    /***/
    function srcAppUtilsPreferencesPreferenceManagerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreferenceManager", function () {
        return PreferenceManager;
      });
      /* harmony import */


      var _preferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./preferences */
      "./src/app/utils/preferences/preferences.ts");

      var PreferenceManager = function PreferenceManager() {
        _classCallCheck(this, PreferenceManager);
      };

      PreferenceManager.LANGUAGE_PREF = new _preferences__WEBPACK_IMPORTED_MODULE_0__["Preferences"]("language"
      /* Language */
      );
      PreferenceManager.DEFAULT_SIGNATURE_PROVIDER_PREF = new _preferences__WEBPACK_IMPORTED_MODULE_0__["Preferences"]("defaultSignatureProvider"
      /* DefaultSignatureProvider */
      );
      /***/
    },

    /***/
    "./src/app/utils/preferences/preferences.ts":
    /*!**************************************************!*\
      !*** ./src/app/utils/preferences/preferences.ts ***!
      \**************************************************/

    /*! exports provided: Preferences */

    /***/
    function srcAppUtilsPreferencesPreferencesTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Preferences", function () {
        return Preferences;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"].Storage;

      var Preferences = /*#__PURE__*/function () {
        function Preferences(name) {
          _classCallCheck(this, Preferences);

          this.name = name;
        }

        _createClass(Preferences, [{
          key: "get$",
          value: function get$(key, defaultValue) {
            var converter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : JSON.parse;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
              return Storage.get({
                key: "".concat(name, "_").concat(key)
              });
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (ret) {
              return ret.value;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
              return value && value !== '[null]' ? converter(value) : defaultValue;
            }));
          }
        }, {
          key: "getNumber$",
          value: function getNumber$(key) {
            var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this.get$(key, defaultValue, Number);
          }
        }, {
          key: "getString$",
          value: function getString$(key) {
            var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            return this.get$(key, defaultValue, function (v) {
              return v;
            });
          }
        }, {
          key: "set$",
          value: function set$(key, value) {
            var converter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : JSON.stringify;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
              return Storage.set({
                key: "".concat(name, "_").concat(key),
                value: converter(value)
              });
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(value));
          }
        }, {
          key: "setNumber$",
          value: function setNumber$(key, value) {
            return this.set$(key, value, String);
          }
        }, {
          key: "setString$",
          value: function setString$(key, value) {
            return this.set$(key, value, function (v) {
              return v;
            });
          }
        }]);

        return Preferences;
      }();
      /***/

    },

    /***/
    "./src/app/utils/storage/storage.ts":
    /*!******************************************!*\
      !*** ./src/app/utils/storage/storage.ts ***!
      \******************************************/

    /*! exports provided: Storage */

    /***/
    function srcAppUtilsStorageStorageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Storage", function () {
        return Storage;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _crypto_crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../crypto/crypto */
      "./src/app/utils/crypto/crypto.ts");

      var Filesystem = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"].Filesystem;

      var Storage = /*#__PURE__*/function () {
        function Storage(name) {
          var directory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["FilesystemDirectory"].Data;

          _classCallCheck(this, Storage);

          this.name = name;
          this.directory = directory;
          this.tuples$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        }

        _createClass(Storage, [{
          key: "refresh$",
          value: function refresh$() {
            var _this27 = this;

            console.log("Storege refreshing: ".concat(this.name));
            return this.makeNameDir$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMapTo"])(this.readNameDir$()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
              return result.files;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (fileNames) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(fileNames.map(function (fileName) {
                return _this27.readFile$(fileName);
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["defaultIfEmpty"])([]));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results.map(function (result) {
                return JSON.parse(result.data);
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (tuples) {
              return _this27.tuples$.next(tuples);
            }));
          }
        }, {
          key: "makeNameDir$",
          value: function makeNameDir$() {
            var _this28 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
              return Filesystem.mkdir({
                path: _this28.name,
                directory: _this28.directory,
                recursive: true
              });
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(void 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              console.log("".concat(err.message, " (").concat(_this28.directory, "/").concat(_this28.name, ")"));
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(void 0);
            }));
          }
        }, {
          key: "readNameDir$",
          value: function readNameDir$() {
            var _this29 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
              return Filesystem.readdir({
                path: _this29.name,
                directory: _this29.directory
              });
            });
          }
        }, {
          key: "readFile$",
          value: function readFile$(fileName) {
            var _this30 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
              return Filesystem.readFile({
                path: "".concat(_this30.name, "/").concat(fileName),
                directory: _this30.directory,
                encoding: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["FilesystemEncoding"].UTF8
              });
            });
          }
        }, {
          key: "getAll$",
          value: function getAll$() {
            return this.tuples$.asObservable();
          }
        }, {
          key: "add$",
          value: function add$() {
            var _this31 = this;

            for (var _len6 = arguments.length, tuples = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              tuples[_key6] = arguments[_key6];
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(tuples.map(function (tuple) {
              return _this31.saveFile$(tuple);
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMapTo"])(this.refresh$()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(tuples));
          }
        }, {
          key: "saveFile$",
          value: function saveFile$(tuple) {
            var _this32 = this;

            return Object(_crypto_crypto__WEBPACK_IMPORTED_MODULE_3__["sha256$"])(tuple).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (hash) {
              return Filesystem.writeFile({
                path: "".concat(_this32.name, "/").concat(hash, ".json"),
                data: JSON.stringify(tuple),
                directory: _this32.directory,
                encoding: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["FilesystemEncoding"].UTF8,
                recursive: true
              });
            }));
          }
        }, {
          key: "remove$",
          value: function remove$() {
            var _this33 = this;

            for (var _len7 = arguments.length, tuples = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              tuples[_key7] = arguments[_key7];
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(tuples.map(function (tuple) {
              return _this33.deleteFile$(tuple);
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMapTo"])(this.refresh$()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(tuples));
          }
        }, {
          key: "deleteFile$",
          value: function deleteFile$(tuple) {
            var _this34 = this;

            return Object(_crypto_crypto__WEBPACK_IMPORTED_MODULE_3__["sha256$"])(tuple).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (hash) {
              return Filesystem.deleteFile({
                path: "".concat(_this34.name, "/").concat(hash, ".json"),
                directory: _this34.directory
              });
            }));
          }
        }]);

        return Storage;
      }();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/pwa-elements/loader */
      "./node_modules/@ionic/pwa-elements/loader/index.es2017.mjs");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/runner/work/capture-lite/capture-lite/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map