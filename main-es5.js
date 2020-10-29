(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
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
      "zUnb");
      /***/
    },

    /***/
    "176C":
    /*!********************************************************************!*\
      !*** ./src/app/services/collector/signature/signature-provider.ts ***!
      \********************************************************************/

    /*! exports provided: SignatureProvider */

    /***/
    function C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignatureProvider", function () {
        return SignatureProvider;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var SignatureProvider = /*#__PURE__*/function () {
        function SignatureProvider(signatureRepository, serializationService) {
          _classCallCheck(this, SignatureProvider);

          this.signatureRepository = signatureRepository;
          this.serializationService = serializationService;
        }

        _createClass(SignatureProvider, [{
          key: "signAndStore$",
          value: function signAndStore$(proof) {
            var _this = this;

            return this.serializationService.stringify$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (serialized) {
              return _this.provide$(proof, serialized);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (signature) {
              return _this.signatureRepository.add$(signature);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])(0));
          }
        }]);

        return SignatureProvider;
      }();
      /***/

    },

    /***/
    "2MVJ":
    /*!***************************************************!*\
      !*** ./src/app/services/camera/camera.service.ts ***!
      \***************************************************/

    /*! exports provided: CameraService */

    /***/
    function MVJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraService", function () {
        return CameraService;
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


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"],
          App = _capacitor_core__WEBP.App,
          Camera = _capacitor_core__WEBP.Camera;

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
        }, {
          key: "restoreKilledAppResult$",
          value: function restoreKilledAppResult$() {
            var appRestored$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEventPattern"])(function (handler) {
              return App.addListener('appRestoredResult', handler);
            });
            return appRestored$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (result) {
              return result.pluginId === 'Camera' && result.methodName === 'getPhoto' && result.success;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
              return result.data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (cameraPhoto) {
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
    "2Rqb":
    /*!*********************************************************************************!*\
      !*** ./src/app/services/publisher/publishers-alert/publishers-alert.service.ts ***!
      \*********************************************************************************/

    /*! exports provided: PublishersAlert */

    /***/
    function Rqb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublishersAlert", function () {
        return PublishersAlert;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngneat/transloco */
      "QPBi");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

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
            var _this2 = this;

            return this.getEnabledPublishers$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (publishers) {
              return _this2.alertController.create({
                header: _this2.translocoService.translate('selectAPublisher'),
                inputs: publishers.map(function (publisher, index) {
                  return {
                    name: publisher.name,
                    type: 'radio',
                    label: publisher.name,
                    value: publisher.name,
                    checked: index === 0
                  };
                }),
                buttons: [{
                  text: _this2.translocoService.translate('cancel'),
                  role: 'cancel'
                }, {
                  text: _this2.translocoService.translate('ok'),
                  handler: function handler(name) {
                    var _a;

                    return (_a = _this2.getPublisherByName(name)) === null || _a === void 0 ? void 0 : _a.publish(proof);
                  }
                }]
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (alertElement) {
              return alertElement.present();
            }));
          }
        }, {
          key: "getEnabledPublishers$",
          value: function getEnabledPublishers$() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.publishers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (publisher) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(publisher), publisher.isEnabled$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  _ = _ref2[0],
                  isEnabled = _ref2[1];

              return isEnabled;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["pluck"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])());
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
    "5RWN":
    /*!*******************************************************!*\
      !*** ./src/app/services/language/language.service.ts ***!
      \*******************************************************/

    /*! exports provided: LanguageService */

    /***/
    function RWN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageService", function () {
        return LanguageService;
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


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngneat/transloco */
      "QPBi");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/transloco/transloco-root.module */
      "b3Gb");
      /* harmony import */


      var _utils_preferences_preference_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../utils/preferences/preference-manager */
      "sO7I");

      var preferences = _utils_preferences_preference_manager__WEBPACK_IMPORTED_MODULE_5__["PreferenceManager"].LANGUAGE_PREF;

      var LanguageService = /*#__PURE__*/function () {
        function LanguageService(translocoService) {
          _classCallCheck(this, LanguageService);

          this.translocoService = translocoService;
          this.languages = src_app_transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__["languages"];
          this.defaultLanguage = src_app_transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__["defaultLanguage"];
          this.currentLanguageKey$ = preferences.getString$("language"
          /* Language */
          , src_app_transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__["defaultLanguage"][0]);
        }

        _createClass(LanguageService, [{
          key: "initialize$",
          value: function initialize$() {
            var _this3 = this;

            this.translocoService.setDefaultLang(src_app_transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__["defaultLanguage"][0]);
            return this.currentLanguageKey$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (key) {
              return _this3.setCurrentLanguage$(key);
            }));
          }
        }, {
          key: "setCurrentLanguage$",
          value: function setCurrentLanguage$(key) {
            return preferences.setString$("language"
            /* Language */
            , key).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(this.translocoService.setActiveLang(key)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(key));
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
    "5gSH":
    /*!************************************!*\
      !*** ./src/app/utils/file/file.ts ***!
      \************************************/

    /*! exports provided: fileNameWithoutExtension */

    /***/
    function gSH(module, __webpack_exports__, __webpack_require__) {
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
    "5yvM":
    /*!*************************************************************************!*\
      !*** ./src/app/services/publisher/sample-publisher/sample-publisher.ts ***!
      \*************************************************************************/

    /*! exports provided: SamplePublisher */

    /***/
    function yvM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SamplePublisher", function () {
        return SamplePublisher;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _publisher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../publisher */
      "xH0/");

      var SamplePublisher = /*#__PURE__*/function (_publisher__WEBPACK_I) {
        _inherits(SamplePublisher, _publisher__WEBPACK_I);

        var _super = _createSuper(SamplePublisher);

        function SamplePublisher() {
          var _this4;

          _classCallCheck(this, SamplePublisher);

          _this4 = _super.apply(this, arguments);
          _this4.name = 'Sample Publisher';
          return _this4;
        }

        _createClass(SamplePublisher, [{
          key: "run$",
          value: function run$(proof) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(void 0).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(3000));
          }
        }, {
          key: "isEnabled$",
          value: function isEnabled$() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
          }
        }]);

        return SamplePublisher;
      }(_publisher__WEBPACK_IMPORTED_MODULE_2__["Publisher"]);
      /***/

    },

    /***/
    "6g5+":
    /*!***********************************************************************************!*\
      !*** ./src/app/services/collector/signature/default-provider/default-provider.ts ***!
      \***********************************************************************************/

    /*! exports provided: DefaultSignatureProvider */

    /***/
    function g5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultSignatureProvider", function () {
        return DefaultSignatureProvider;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_utils_crypto_crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/utils/crypto/crypto */
      "sWsZ");
      /* harmony import */


      var src_app_utils_preferences_preference_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/preferences/preference-manager */
      "sO7I");
      /* harmony import */


      var _signature_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../signature-provider */
      "176C");

      var preferences = src_app_utils_preferences_preference_manager__WEBPACK_IMPORTED_MODULE_3__["PreferenceManager"].DEFAULT_SIGNATURE_PROVIDER_PREF;

      var DefaultSignatureProvider = /*#__PURE__*/function (_signature_provider__) {
        _inherits(DefaultSignatureProvider, _signature_provider__);

        var _super2 = _createSuper(DefaultSignatureProvider);

        function DefaultSignatureProvider() {
          var _this5;

          _classCallCheck(this, DefaultSignatureProvider);

          _this5 = _super2.apply(this, arguments);
          _this5.name = 'Web Crypto API';
          return _this5;
        }

        _createClass(DefaultSignatureProvider, [{
          key: "provide$",
          value: function provide$(proof, serialized) {
            var _this6 = this;

            return DefaultSignatureProvider.getPrivateKey$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (privateKeyHex) {
              return Object(src_app_utils_crypto_crypto__WEBPACK_IMPORTED_MODULE_2__["signWithSha256AndEcdsa$"])(serialized, privateKeyHex);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (signatureHex) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(signatureHex), DefaultSignatureProvider.getPublicKey$());
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  signatureHex = _ref4[0],
                  publicKeyHex = _ref4[1];

              return {
                proofHash: proof.hash,
                provider: _this6.name,
                signature: signatureHex,
                publicKey: publicKeyHex
              };
            }));
          }
        }], [{
          key: "initialize$",
          value: function initialize$() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["zip"])(this.getPublicKey$(), this.getPrivateKey$()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (_ref5) {
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
    "7IEa":
    /*!*****************************************************************************!*\
      !*** ./src/app/services/data/information/information-repository.service.ts ***!
      \*****************************************************************************/

    /*! exports provided: InformationRepository */

    /***/
    function IEa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InformationRepository", function () {
        return InformationRepository;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/storage/storage */
      "rIbz");

      var InformationRepository = /*#__PURE__*/function () {
        function InformationRepository() {
          _classCallCheck(this, InformationRepository);

          this.informationStorage = new src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]('information');
        }

        _createClass(InformationRepository, [{
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
            var _this7 = this;

            return this.getByProof$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (informationList) {
              return _this7.remove$.apply(_this7, _toConsumableArray(informationList));
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
    "AumY":
    /*!************************************!*\
      !*** ./src/app/utils/mime-type.ts ***!
      \************************************/

    /*! exports provided: getExtension, fromExtension */

    /***/
    function AumY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getExtension", function () {
        return getExtension;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromExtension", function () {
        return fromExtension;
      });

      function getExtension(mimeType) {
        switch (mimeType) {
          case 'image/jpeg':
            return 'jpg';

          case 'image/png':
            return 'png';
        }
      }

      function fromExtension(extension) {
        switch (extension) {
          case 'jpg':
          case 'jpeg':
            return 'image/jpeg';

          case 'png':
            return 'image/png';

          default:
            throw TypeError("Unknown extension: ".concat(extension));
        }
      }
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
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
    "D9E+":
    /*!**************************************************!*\
      !*** ./src/app/utils/preferences/preferences.ts ***!
      \**************************************************/

    /*! exports provided: Preferences */

    /***/
    function D9E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Preferences", function () {
        return Preferences;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"].Storage;

      var Preferences = /*#__PURE__*/function () {
        function Preferences(name) {
          _classCallCheck(this, Preferences);

          this.name = name;
          this.subjects = new Map();
        }

        _createClass(Preferences, [{
          key: "get$",
          value: function get$(key, defaultValue) {
            var _this8 = this;

            var converter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : JSON.parse;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_this8.subjects.has(key));
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (existed) {
              if (!existed) {
                return _this8._get$(key, defaultValue, converter);
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(existed);
            }), // tslint:disable-next-line: no-non-null-assertion
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMapTo"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
              return _this8.subjects.get(key).asObservable();
            })));
          }
        }, {
          key: "_get$",
          value: function _get$(key, defaultValue, converter) {
            var _this9 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
              return Storage.get({
                key: "".concat(_this9.name, "_").concat(key)
              });
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('value'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
              return value && value !== '[null]' ? converter(value) : defaultValue;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (converted) {
              return _this9.updateSubjects(key, converted);
            }));
          }
        }, {
          key: "getBoolean$",
          value: function getBoolean$(key) {
            var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return this.get$(key, defaultValue, function (v) {
              return v === 'true';
            });
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
            var _this10 = this;

            var converter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : JSON.stringify;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
              return Storage.set({
                key: "".concat(_this10.name, "_").concat(key),
                value: converter(value)
              });
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(this.updateSubjects(key, value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(value));
          }
        }, {
          key: "setBoolean$",
          value: function setBoolean$(key, value) {
            return this.set$(key, value, String);
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
        }, {
          key: "updateSubjects",
          value: function updateSubjects(key, value) {
            var _a;

            if (this.subjects.has(key)) {
              (_a = this.subjects.get(key)) === null || _a === void 0 ? void 0 : _a.next(value);
            } else {
              this.subjects.set(key, new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](value));
            }
          }
        }]);

        return Preferences;
      }();
      /***/

    },

    /***/
    "GeUf":
    /*!************************************************************************!*\
      !*** ./src/app/services/collector/information/information-provider.ts ***!
      \************************************************************************/

    /*! exports provided: InformationProvider */

    /***/
    function GeUf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InformationProvider", function () {
        return InformationProvider;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var InformationProvider = /*#__PURE__*/function () {
        function InformationProvider(informationRepository) {
          _classCallCheck(this, InformationProvider);

          this.informationRepository = informationRepository;
        }

        _createClass(InformationProvider, [{
          key: "collectAndStore$",
          value: function collectAndStore$(proof) {
            var _this11 = this;

            return this.provide$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (information) {
              var _this11$informationRe;

              return (_this11$informationRe = _this11.informationRepository).add$.apply(_this11$informationRe, _toConsumableArray(information));
            }));
          }
        }]);

        return InformationProvider;
      }();
      /***/

    },

    /***/
    "K0yA":
    /*!*****************************************************************!*\
      !*** ./src/app/services/serialization/serialization.service.ts ***!
      \*****************************************************************/

    /*! exports provided: SerializationService */

    /***/
    function K0yA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SerializationService", function () {
        return SerializationService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _data_information_information_repository_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../data/information/information-repository.service */
      "7IEa");

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
                var providerCompared = a.provider.localeCompare(b.provider);
                var nameCompared = a.name.localeCompare(b.name);
                var valueCompared = a.value.localeCompare(b.value);

                if (providerCompared !== 0) {
                  return providerCompared;
                }

                if (nameCompared !== 0) {
                  return nameCompared;
                }

                return valueCompared;
              }).map(function (_ref8) {
                var provider = _ref8.provider,
                    name = _ref8.name,
                    value = _ref8.value;
                return {
                  provider: provider,
                  name: name,
                  value: value
                };
              });
              return {
                proof: proof,
                information: sortedInformation
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
    "KJy6":
    /*!***************************************!*\
      !*** ./src/app/utils/rx-operators.ts ***!
      \***************************************/

    /*! exports provided: isNonNullable, forkJoinWithDefault */

    /***/
    function KJy6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isNonNullable", function () {
        return isNonNullable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "forkJoinWithDefault", function () {
        return forkJoinWithDefault;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      function isNonNullable() {
        return function (source$) {
          return source$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (v) {
            return v !== null && v !== undefined;
          }));
        };
      }

      function forkJoinWithDefault(sources) {
        var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])(sources).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["defaultIfEmpty"])(defaultValue));
      }
      /***/

    },

    /***/
    "KwcL":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*************************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function KwcL(module, exports, __webpack_require__) {
      var map = {
        "./pwa-action-sheet.entry.js": ["jDxf", 43],
        "./pwa-camera-modal-instance.entry.js": ["37vE", 44],
        "./pwa-camera-modal.entry.js": ["cJxf", 45],
        "./pwa-camera.entry.js": ["eGHz", 46],
        "./pwa-toast.entry.js": ["fHjd", 47]
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

      webpackAsyncContext.id = "KwcL";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "PJNO":
    /*!*************************************************************************!*\
      !*** ./src/app/services/data/signature/signature-repository.service.ts ***!
      \*************************************************************************/

    /*! exports provided: SignatureRepository */

    /***/
    function PJNO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignatureRepository", function () {
        return SignatureRepository;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/storage/storage */
      "rIbz");

      var SignatureRepository = /*#__PURE__*/function () {
        function SignatureRepository() {
          _classCallCheck(this, SignatureRepository);

          this.signatureStorage = new src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]('signature');
        }

        _createClass(SignatureRepository, [{
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
            var _this12 = this;

            return this.getByProof$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (signatures) {
              return _this12.remove$.apply(_this12, _toConsumableArray(signatures));
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
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngneat/transloco */
      "QPBi");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_camera_camera_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/camera/camera.service */
      "2MVJ");
      /* harmony import */


      var _services_collector_collector_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/collector/collector.service */
      "bWLf");
      /* harmony import */


      var _services_collector_information_capacitor_provider_capacitor_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./services/collector/information/capacitor-provider/capacitor-provider */
      "TtCf");
      /* harmony import */


      var _services_collector_signature_default_provider_default_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/collector/signature/default-provider/default-provider */
      "6g5+");
      /* harmony import */


      var _services_data_information_information_repository_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./services/data/information/information-repository.service */
      "7IEa");
      /* harmony import */


      var _services_data_signature_signature_repository_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./services/data/signature/signature-repository.service */
      "PJNO");
      /* harmony import */


      var _services_language_language_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./services/language/language.service */
      "5RWN");
      /* harmony import */


      var _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./services/notification/notification.service */
      "nak+");
      /* harmony import */


      var _services_publisher_publishers_alert_publishers_alert_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./services/publisher/publishers-alert/publishers-alert.service */
      "2Rqb");
      /* harmony import */


      var _services_publisher_sample_publisher_sample_publisher__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./services/publisher/sample-publisher/sample-publisher */
      "5yvM");
      /* harmony import */


      var _services_serialization_serialization_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./services/serialization/serialization.service */
      "K0yA");
      /* harmony import */


      var _utils_mime_type__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./utils/mime-type */
      "AumY");

      var SplashScreen = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].SplashScreen;

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, collectorService, publishersAlert, serializationService, informationRepository, signatureRepository, translocoService, notificationService, langaugeService, cameraService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.collectorService = collectorService;
          this.publishersAlert = publishersAlert;
          this.serializationService = serializationService;
          this.informationRepository = informationRepository;
          this.signatureRepository = signatureRepository;
          this.translocoService = translocoService;
          this.notificationService = notificationService;
          this.cameraService = cameraService;
          this.restoreAppStatus();
          this.initializeApp();
          this.initializeCollector();
          this.initializePublisher();
          langaugeService.initialize$().pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this)).subscribe();
        }

        _createClass(AppComponent, [{
          key: "restoreAppStatus",
          value: function restoreAppStatus() {
            var _this13 = this;

            this.cameraService.restoreKilledAppResult$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (cameraPhoto) {
              return _this13.collectorService.storeAndCollect(cameraPhoto.base64String, Object(_utils_mime_type__WEBPACK_IMPORTED_MODULE_20__["fromExtension"])(cameraPhoto.format));
            }), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this)).subscribe();
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            this.platform.ready().then(function () {
              SplashScreen.hide();
            });
          }
        }, {
          key: "initializeCollector",
          value: function initializeCollector() {
            _services_collector_signature_default_provider_default_provider__WEBPACK_IMPORTED_MODULE_12__["DefaultSignatureProvider"].initialize$().pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this)).subscribe();

            this.collectorService.addInformationProvider(new _services_collector_information_capacitor_provider_capacitor_provider__WEBPACK_IMPORTED_MODULE_11__["CapacitorProvider"](this.informationRepository, this.translocoService));
            this.collectorService.addSignatureProvider(new _services_collector_signature_default_provider_default_provider__WEBPACK_IMPORTED_MODULE_12__["DefaultSignatureProvider"](this.signatureRepository, this.serializationService));
          }
        }, {
          key: "initializePublisher",
          value: function initializePublisher() {
            this.publishersAlert.addPublisher(new _services_publisher_sample_publisher_sample_publisher__WEBPACK_IMPORTED_MODULE_18__["SamplePublisher"](this.translocoService, this.notificationService));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _services_collector_collector_service__WEBPACK_IMPORTED_MODULE_10__["CollectorService"]
        }, {
          type: _services_publisher_publishers_alert_publishers_alert_service__WEBPACK_IMPORTED_MODULE_17__["PublishersAlert"]
        }, {
          type: _services_serialization_serialization_service__WEBPACK_IMPORTED_MODULE_19__["SerializationService"]
        }, {
          type: _services_data_information_information_repository_service__WEBPACK_IMPORTED_MODULE_13__["InformationRepository"]
        }, {
          type: _services_data_signature_signature_repository_service__WEBPACK_IMPORTED_MODULE_14__["SignatureRepository"]
        }, {
          type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__["TranslocoService"]
        }, {
          type: _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"]
        }, {
          type: _services_language_language_service__WEBPACK_IMPORTED_MODULE_15__["LanguageService"]
        }, {
          type: _services_camera_camera_service__WEBPACK_IMPORTED_MODULE_9__["CameraService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__["UntilDestroy"])({
        checkProperties: true
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "TtCf":
    /*!*****************************************************************************************!*\
      !*** ./src/app/services/collector/information/capacitor-provider/capacitor-provider.ts ***!
      \*****************************************************************************************/

    /*! exports provided: CapacitorProvider */

    /***/
    function TtCf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CapacitorProvider", function () {
        return CapacitorProvider;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_utils_preferences_preference_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/preferences/preference-manager */
      "sO7I");
      /* harmony import */


      var _information_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../information-provider */
      "GeUf");

      var _capacitor_core__WEBP2 = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"],
          Device = _capacitor_core__WEBP2.Device,
          Geolocation = _capacitor_core__WEBP2.Geolocation;
      var preferences = src_app_utils_preferences_preference_manager__WEBPACK_IMPORTED_MODULE_3__["PreferenceManager"].DEFAULT_INFORMATION_PROVIDER_PREF;

      var CapacitorProvider = /*#__PURE__*/function (_information_provider) {
        _inherits(CapacitorProvider, _information_provider);

        var _super3 = _createSuper(CapacitorProvider);

        function CapacitorProvider(informationRepository, translocoService) {
          var _this14;

          _classCallCheck(this, CapacitorProvider);

          _this14 = _super3.call(this, informationRepository);
          _this14.translocoService = translocoService;
          _this14.name = 'Capacitor';
          return _this14;
        }

        _createClass(CapacitorProvider, [{
          key: "provide$",
          value: function provide$(proof) {
            var _this15 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(CapacitorProvider.isDeviceInfoCollectionEnabled$(), CapacitorProvider.isLocationInfoCollectionEnabled$()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref9) {
              var _ref10 = _slicedToArray(_ref9, 2),
                  isDeviceInfoCollectionEnabled = _ref10[0],
                  isLocationInfoCollectionEnabled = _ref10[1];

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(isDeviceInfoCollectionEnabled ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
                return Device.getInfo();
              }) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined), isDeviceInfoCollectionEnabled ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
                return Device.getBatteryInfo();
              }) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined), isDeviceInfoCollectionEnabled ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
                return Device.getLanguageCode();
              }) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined), isLocationInfoCollectionEnabled ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
                return Geolocation.getCurrentPosition({
                  enableHighAccuracy: true,
                  maximumAge: 10 * 60 * 1000,
                  timeout: 10 * 1000
                });
              }) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref11) {
              var _ref12 = _slicedToArray(_ref11, 4),
                  deviceInfo = _ref12[0],
                  batteryInfo = _ref12[1],
                  languageCode = _ref12[2],
                  geolocationPosition = _ref12[3];

              var informationList = [];

              if (deviceInfo !== undefined) {
                informationList.push({
                  proofHash: proof.hash,
                  provider: _this15.name,
                  name: _this15.translocoService.translate('uuid'),
                  value: String(deviceInfo.uuid),
                  importance: "high"
                  /* High */
                  ,
                  type: "other"
                  /* Other */

                }, {
                  proofHash: proof.hash,
                  provider: _this15.name,
                  name: _this15.translocoService.translate('deviceName'),
                  value: String(deviceInfo.name),
                  importance: "low"
                  /* Low */
                  ,
                  type: "device"
                  /* Device */

                }, {
                  proofHash: proof.hash,
                  provider: _this15.name,
                  name: _this15.translocoService.translate('deviceModel'),
                  value: String(deviceInfo.model),
                  importance: "low"
                  /* Low */
                  ,
                  type: "device"
                  /* Device */

                }, {
                  proofHash: proof.hash,
                  provider: _this15.name,
                  name: _this15.translocoService.translate('devicePlatform'),
                  value: String(deviceInfo.platform),
                  importance: "low"
                  /* Low */
                  ,
                  type: "device"
                  /* Device */

                }, {
                  proofHash: proof.hash,
                  provider: _this15.name,
                  name: _this15.translocoService.translate('appVersion'),
                  value: String(deviceInfo.appVersion),
                  importance: "low"
                  /* Low */
                  ,
                  type: "device"
                  /* Device */

                }, {
                  proofHash: proof.hash,
                  provider: _this15.name,
                  name: _this15.translocoService.translate('appVersionCode'),
                  value: String(deviceInfo.appBuild),
                  importance: "low"
                  /* Low */
                  ,
                  type: "device"
                  /* Device */

                }, {
                  proofHash: proof.hash,
                  provider: _this15.name,
                  name: _this15.translocoService.translate('operatingSystem'),
                  value: String(deviceInfo.operatingSystem),
                  importance: "low"
                  /* Low */
                  ,
                  type: "device"
                  /* Device */

                }, {
                  proofHash: proof.hash,
                  provider: _this15.name,
                  name: _this15.translocoService.translate('osVersion'),
                  value: String(deviceInfo.osVersion),
                  importance: "low"
                  /* Low */
                  ,
                  type: "device"
                  /* Device */

                }, {
                  proofHash: proof.hash,
                  provider: _this15.name,
                  name: _this15.translocoService.translate('deviceManufacturer'),
                  value: String(deviceInfo.manufacturer),
                  importance: "low"
                  /* Low */
                  ,
                  type: "device"
                  /* Device */

                }, {
                  proofHash: proof.hash,
                  provider: _this15.name,
                  name: _this15.translocoService.translate('runningOnVm'),
                  value: String(deviceInfo.isVirtual),
                  importance: "low"
                  /* Low */
                  ,
                  type: "device"
                  /* Device */

                }, {
                  proofHash: proof.hash,
                  provider: _this15.name,
                  name: _this15.translocoService.translate('usedMemory'),
                  value: String(deviceInfo.memUsed),
                  importance: "low"
                  /* Low */
                  ,
                  type: "device"
                  /* Device */

                }, {
                  proofHash: proof.hash,
                  provider: _this15.name,
                  name: _this15.translocoService.translate('freeDiskSpace'),
                  value: String(deviceInfo.diskFree),
                  importance: "low"
                  /* Low */
                  ,
                  type: "device"
                  /* Device */

                }, {
                  proofHash: proof.hash,
                  provider: _this15.name,
                  name: _this15.translocoService.translate('totalDiskSpace'),
                  value: String(deviceInfo.diskTotal),
                  importance: "low"
                  /* Low */
                  ,
                  type: "device"
                  /* Device */

                });
              }

              if (batteryInfo !== undefined) {
                informationList.push({
                  proofHash: proof.hash,
                  provider: _this15.name,
                  name: _this15.translocoService.translate('batteryLevel'),
                  value: String(batteryInfo.batteryLevel),
                  importance: "low"
                  /* Low */
                  ,
                  type: "device"
                  /* Device */

                }, {
                  proofHash: proof.hash,
                  provider: _this15.name,
                  name: _this15.translocoService.translate('batteryCharging'),
                  value: String(batteryInfo.isCharging),
                  importance: "low"
                  /* Low */
                  ,
                  type: "device"
                  /* Device */

                });
              }

              if (languageCode !== undefined) {
                informationList.push({
                  proofHash: proof.hash,
                  provider: _this15.name,
                  name: _this15.translocoService.translate('deviceLanguageCode'),
                  value: String(languageCode.value),
                  importance: "low"
                  /* Low */
                  ,
                  type: "device"
                  /* Device */

                });
              }

              if (geolocationPosition !== undefined) {
                informationList.push({
                  proofHash: proof.hash,
                  provider: _this15.name,
                  name: _this15.translocoService.translate('location'),
                  value: "(".concat(geolocationPosition.coords.latitude, ", ").concat(geolocationPosition.coords.longitude, ")"),
                  importance: "high"
                  /* High */
                  ,
                  type: "location"
                  /* Location */

                });
              }

              return informationList;
            }));
          }
        }], [{
          key: "isDeviceInfoCollectionEnabled$",
          value: function isDeviceInfoCollectionEnabled$() {
            return preferences.getBoolean$("collectDeviceInfo"
            /* CollectDeviceInfo */
            , true);
          }
        }, {
          key: "setDeviceInfoCollection$",
          value: function setDeviceInfoCollection$(enable) {
            return preferences.setBoolean$("collectDeviceInfo"
            /* CollectDeviceInfo */
            , enable);
          }
        }, {
          key: "isLocationInfoCollectionEnabled$",
          value: function isLocationInfoCollectionEnabled$() {
            return preferences.getBoolean$("collectLocationInfo"
            /* CollectLocationInfo */
            , true);
          }
        }, {
          key: "setLocationInfoCollection$",
          value: function setLocationInfoCollection$(enable) {
            return preferences.setBoolean$("collectLocationInfo"
            /* CollectLocationInfo */
            , enable);
          }
        }]);

        return CapacitorProvider;
      }(_information_provider__WEBPACK_IMPORTED_MODULE_4__["InformationProvider"]);
      /***/

    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./transloco/transloco-root.module */
      "b3Gb");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_8__["TranslocoRootModule"]],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "b3Gb":
    /*!****************************************************!*\
      !*** ./src/app/transloco/transloco-root.module.ts ***!
      \****************************************************/

    /*! exports provided: languages, defaultLanguage, TranslocoHttpLoader, TranslocoRootModule */

    /***/
    function b3Gb(module, __webpack_exports__, __webpack_require__) {
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
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngneat/transloco */
      "QPBi");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

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
    "bWLf":
    /*!*********************************************************!*\
      !*** ./src/app/services/collector/collector.service.ts ***!
      \*********************************************************/

    /*! exports provided: CollectorService */

    /***/
    function bWLf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectorService", function () {
        return CollectorService;
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


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngneat/transloco */
      "QPBi");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/utils/background-task/background-task */
      "no1F");
      /* harmony import */


      var src_app_utils_file_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/utils/file/file */
      "5gSH");
      /* harmony import */


      var src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/utils/rx-operators */
      "KJy6");
      /* harmony import */


      var _data_proof_proof_repository_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../data/proof/proof-repository.service */
      "z1Mc");
      /* harmony import */


      var _notification_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../notification/notification.service */
      "nak+");

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
            var _this16 = this;

            // Deliberately store proof and its media file in the foreground, so the app page can
            // correctly and continuously subscribe the Storage.getAll$().
            this.store$(rawBase64, mimeType).subscribe(function (proof) {
              Object(src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_5__["subscribeInBackground"])(_this16.collectAndSign$(proof));
            });
          }
        }, {
          key: "store$",
          value: function store$(rawBase64, mimeType) {
            var _this17 = this;

            return this.proofRepository.saveRawFile$(rawBase64, mimeType).pipe( // Get the proof hash from the uri.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (uri) {
              return Object(src_app_utils_file_file__WEBPACK_IMPORTED_MODULE_6__["fileNameWithoutExtension"])(uri);
            }), // Store the media file.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (hash) {
              return _this17.proofRepository.add$({
                hash: hash,
                mimeType: mimeType,
                timestamp: Date.now()
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])(0));
          }
        }, {
          key: "collectAndSign$",
          value: function collectAndSign$(proof) {
            var _this18 = this;

            var notificationId = this.notificationService.createNotificationId();
            this.notificationService.notify(notificationId, this.translocoService.translate('collectingProof'), this.translocoService.translate('collectingInformation'));
            return Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_7__["forkJoinWithDefault"])(_toConsumableArray(this.informationProviders).map(function (provider) {
              return provider.collectAndStore$(proof);
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return _this18.notificationService.notify(notificationId, _this18.translocoService.translate('collectingProof'), _this18.translocoService.translate('signingProof'));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMapTo"])(Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_7__["forkJoinWithDefault"])(_toConsumableArray(this.signatureProviders).map(function (provider) {
              return provider.signAndStore$(proof);
            }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return _this18.notificationService.cancel(notificationId);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              _this18.notificationService.notifyError(notificationId, error);

              return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }));
          }
        }, {
          key: "addInformationProvider",
          value: function addInformationProvider() {
            var _this19 = this;

            for (var _len = arguments.length, providers = new Array(_len), _key = 0; _key < _len; _key++) {
              providers[_key] = arguments[_key];
            }

            providers.forEach(function (provider) {
              return _this19.informationProviders.add(provider);
            });
          }
        }, {
          key: "removeInformationProvider",
          value: function removeInformationProvider() {
            var _this20 = this;

            for (var _len2 = arguments.length, providers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              providers[_key2] = arguments[_key2];
            }

            providers.forEach(function (provider) {
              return _this20.informationProviders["delete"](provider);
            });
          }
        }, {
          key: "addSignatureProvider",
          value: function addSignatureProvider() {
            var _this21 = this;

            for (var _len3 = arguments.length, providers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              providers[_key3] = arguments[_key3];
            }

            providers.forEach(function (provider) {
              return _this21.signatureProviders.add(provider);
            });
          }
        }, {
          key: "removeSignatureProvider",
          value: function removeSignatureProvider() {
            var _this22 = this;

            for (var _len4 = arguments.length, providers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              providers[_key4] = arguments[_key4];
            }

            providers.forEach(function (provider) {
              return _this22.signatureProviders["delete"](provider);
            });
          }
        }]);

        return CollectorService;
      }();

      CollectorService.ctorParameters = function () {
        return [{
          type: _data_proof_proof_repository_service__WEBPACK_IMPORTED_MODULE_8__["ProofRepository"]
        }, {
          type: _notification_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"]
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
    "bw8K":
    /*!********************************************!*\
      !*** ./src/app/utils/encoding/encoding.ts ***!
      \********************************************/

    /*! exports provided: base64ToArrayBuffer, arrayBufferToBase64, arrayBufferToHex, hexToArrayBuffer, stringToArrayBuffer, arrayBufferToString, base64ToBlob$, blobToBase64$ */

    /***/
    function bw8K(module, __webpack_exports__, __webpack_require__) {
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
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "base64ToBlob$", function () {
        return base64ToBlob$;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "blobToBase64$", function () {
        return blobToBase64$;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

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

      function base64ToBlob$(base64) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () {
          return fetch(base64);
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (res) {
          return res.blob();
        }));
      }

      function blobToBase64$(blob) {
        var fileReader = new FileReader();
        var subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

        fileReader.onloadend = function () {
          subject$.next(fileReader.result);
          subject$.complete();
        };

        fileReader.readAsDataURL(blob);
        return subject$.asObservable();
      }
      /***/

    },

    /***/
    "fpah":
    /*!*********************************************************************!*\
      !*** ./src/app/services/data/caption/caption-repository.service.ts ***!
      \*********************************************************************/

    /*! exports provided: CaptionRepository */

    /***/
    function fpah(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CaptionRepository", function () {
        return CaptionRepository;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/rx-operators */
      "KJy6");
      /* harmony import */


      var src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/utils/storage/storage */
      "rIbz");

      var CaptionRepository = /*#__PURE__*/function () {
        function CaptionRepository() {
          _classCallCheck(this, CaptionRepository);

          this.captionStorage = new src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]('caption');
        }

        _createClass(CaptionRepository, [{
          key: "getByProof$",
          value: function getByProof$(proof) {
            return this.captionStorage.getAll$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (captions) {
              return captions.find(function (caption) {
                return caption.proofHash === proof.hash;
              });
            }));
          }
        }, {
          key: "addOrEdit$",
          value: function addOrEdit$(value) {
            var _this23 = this;

            return this.captionStorage.getAll$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (captions) {
              return captions.find(function (caption) {
                return caption.proofHash === value.proofHash;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (found) {
              if (found) {
                return _this23.remove$(found);
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(found);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMapTo"])(this.captionStorage.add$(value)));
          }
        }, {
          key: "removeByProof$",
          value: function removeByProof$(proof) {
            var _this24 = this;

            return this.getByProof$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (caption) {
              return _this24.remove$(caption);
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
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
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

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "nak+":
    /*!***************************************************************!*\
      !*** ./src/app/services/notification/notification.service.ts ***!
      \***************************************************************/

    /*! exports provided: NotificationService */

    /***/
    function nak(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
        return NotificationService;
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


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngneat/transloco */
      "QPBi");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/utils/background-task/background-task */
      "no1F");

      var LocalNotifications = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].LocalNotifications;

      var NotificationService = /*#__PURE__*/function () {
        function NotificationService(translocoService) {
          _classCallCheck(this, NotificationService);

          this.translocoService = translocoService;
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
            console.log("".concat(title, ": ").concat(body));
            Object(src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_5__["subscribeInBackground"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(function () {
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
          key: "notifyError",
          value: function notifyError(id, error) {
            this.notify(id, this.translocoService.translate('unknownError'), JSON.stringify(error));
          }
        }, {
          key: "cancel",
          value: function cancel(id) {
            Object(src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_5__["subscribeInBackground"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(function () {
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
        return [{
          type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoService"]
        }];
      };

      NotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], NotificationService);
      /***/
    },

    /***/
    "no1F":
    /*!**********************************************************!*\
      !*** ./src/app/utils/background-task/background-task.ts ***!
      \**********************************************************/

    /*! exports provided: subscribeInBackground */

    /***/
    function no1F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "subscribeInBackground", function () {
        return subscribeInBackground;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var BackgroundTask = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"].BackgroundTask;

      function subscribeInBackground(work$, error, complete) {
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Capacitor"].isPluginAvailable('BackgroundTask')) {
          var taskId = BackgroundTask.beforeExit(function () {
            work$.subscribe(function (_) {
              return BackgroundTask.finish({
                taskId: taskId
              });
            }, error, complete);
          });
        } else {
          work$.subscribe(function (_) {
            return _;
          }, error, complete);
        }
      }
      /***/

    },

    /***/
    "rIbz":
    /*!******************************************!*\
      !*** ./src/app/utils/storage/storage.ts ***!
      \******************************************/

    /*! exports provided: Storage */

    /***/
    function rIbz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Storage", function () {
        return Storage;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _crypto_crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../crypto/crypto */
      "sWsZ");
      /* harmony import */


      var _rx_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../rx-operators */
      "KJy6");

      var Filesystem = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"].Filesystem;

      var Storage = /*#__PURE__*/function () {
        function Storage(name) {
          var directory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["FilesystemDirectory"].Data;

          _classCallCheck(this, Storage);

          this.name = name;
          this.directory = directory;
          this.tuples$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
          this.hasInitialized = false;
        }

        _createClass(Storage, [{
          key: "checkInitialization$",
          value: function checkInitialization$() {
            var _this25 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
              if (_this25.hasInitialized) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(void 0);
              } else {
                return _this25.refresh$();
              }
            });
          }
        }, {
          key: "refresh$",
          value: function refresh$() {
            var _this26 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(void 0).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
              return _this26.hasInitialized = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMapTo"])(this.makeNameDir$()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMapTo"])(this.readNameDir$()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('files'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (fileNames) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(fileNames);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (fileName) {
              return _this26.readFile$(fileName);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
              return JSON.parse(result.data);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["toArray"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (tuples) {
              return _this26.tuples$.next(tuples);
            }));
          }
        }, {
          key: "makeNameDir$",
          value: function makeNameDir$() {
            var _this27 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
              return Filesystem.mkdir({
                path: _this27.name,
                directory: _this27.directory,
                recursive: true
              });
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(void 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              console.log("".concat(_this27.directory, "/").concat(_this27.name, ": ").concat(err.message));
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(void 0);
            }));
          }
        }, {
          key: "readNameDir$",
          value: function readNameDir$() {
            var _this28 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
              return Filesystem.readdir({
                path: _this28.name,
                directory: _this28.directory
              });
            });
          }
        }, {
          key: "readFile$",
          value: function readFile$(fileName) {
            var _this29 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
              return Filesystem.readFile({
                path: "".concat(_this29.name, "/").concat(fileName),
                directory: _this29.directory,
                encoding: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["FilesystemEncoding"].UTF8
              });
            });
          }
        }, {
          key: "getAll$",
          value: function getAll$() {
            return this.checkInitialization$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMapTo"])(this.tuples$.asObservable()));
          }
        }, {
          key: "add$",
          value: function add$() {
            var _this30 = this;

            for (var _len5 = arguments.length, tuples = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              tuples[_key5] = arguments[_key5];
            }

            return Object(_rx_operators__WEBPACK_IMPORTED_MODULE_4__["forkJoinWithDefault"])(tuples.map(function (tuple) {
              return _this30.saveFile$(tuple);
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMapTo"])(this.checkInitialization$()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
              return _this30.tuples$.next([].concat(_toConsumableArray(_this30.tuples$.value), tuples));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(tuples));
          }
        }, {
          key: "saveFile$",
          value: function saveFile$(tuple) {
            var _this31 = this;

            // XXX: Use sha256 is not a good idea as `sha256$()` uses `JSON.stringify()` under the hood.
            //      Thus, the order of the tuple (properties) will result in different hash if tuple is
            //      an array (object).
            return Object(_crypto_crypto__WEBPACK_IMPORTED_MODULE_3__["sha256$"])(tuple).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (hash) {
              return Filesystem.writeFile({
                path: "".concat(_this31.name, "/").concat(hash, ".json"),
                data: JSON.stringify(tuple),
                directory: _this31.directory,
                encoding: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["FilesystemEncoding"].UTF8,
                recursive: true
              });
            }));
          }
        }, {
          key: "remove$",
          value: function remove$() {
            var _this32 = this;

            for (var _len6 = arguments.length, tuples = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              tuples[_key6] = arguments[_key6];
            }

            return Object(_rx_operators__WEBPACK_IMPORTED_MODULE_4__["forkJoinWithDefault"])(tuples.map(function (tuple) {
              return _this32.deleteFile$(tuple);
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMapTo"])(this.refresh$()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(tuples));
          }
        }, {
          key: "deleteFile$",
          value: function deleteFile$(tuple) {
            var _this33 = this;

            // XXX: Use sha256 is not a good idea as `sha256$()` uses `JSON.stringify()` under the hood.
            //      Thus, the order of the tuple (properties) will result in different hash if tuple is
            //      an array (object).
            return Object(_crypto_crypto__WEBPACK_IMPORTED_MODULE_3__["sha256$"])(tuple).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (hash) {
              return Filesystem.deleteFile({
                path: "".concat(_this33.name, "/").concat(hash, ".json"),
                directory: _this33.directory
              });
            }));
          }
        }]);

        return Storage;
      }();
      /***/

    },

    /***/
    "sO7I":
    /*!*********************************************************!*\
      !*** ./src/app/utils/preferences/preference-manager.ts ***!
      \*********************************************************/

    /*! exports provided: PreferenceManager */

    /***/
    function sO7I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreferenceManager", function () {
        return PreferenceManager;
      });
      /* harmony import */


      var _preferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./preferences */
      "D9E+");

      var PreferenceManager = function PreferenceManager() {
        _classCallCheck(this, PreferenceManager);
      };

      PreferenceManager.LANGUAGE_PREF = new _preferences__WEBPACK_IMPORTED_MODULE_0__["Preferences"]("language"
      /* Language */
      );
      PreferenceManager.DEFAULT_INFORMATION_PROVIDER_PREF = new _preferences__WEBPACK_IMPORTED_MODULE_0__["Preferences"]("defaultInformationProvider"
      /* DefaultInformationProvider */
      );
      PreferenceManager.DEFAULT_SIGNATURE_PROVIDER_PREF = new _preferences__WEBPACK_IMPORTED_MODULE_0__["Preferences"]("defaultSignatureProvider"
      /* DefaultSignatureProvider */
      );
      /***/
    },

    /***/
    "sWsZ":
    /*!****************************************!*\
      !*** ./src/app/utils/crypto/crypto.ts ***!
      \****************************************/

    /*! exports provided: sha256$, sha256WithString$, sha256WithBase64$, createEcKeyPair$, signWithSha256AndEcdsa$, verifyWithSha256AndEcdsa$ */

    /***/
    function sWsZ(module, __webpack_exports__, __webpack_require__) {
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
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _encoding_encoding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoding/encoding */
      "bw8K");

      var subtle = crypto.subtle;
      var SHA_256 = 'SHA-256';
      var ECDSA = 'ECDSA';
      var SECP256R1 = 'P-256';
      /**
       * Use SHA-256 to hash the object.
       * @param object The target object. Note that the order of the object properties is sensitive.
       */

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
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (_ref13) {
          var publicKey = _ref13.publicKey,
              privateKey = _ref13.privateKey;
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["zip"])(exportEcdsaPublicKey$(publicKey), exportEcdsaPrivateKey$(privateKey));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref14) {
          var _ref15 = _slicedToArray(_ref14, 2),
              publicKey = _ref15[0],
              privateKey = _ref15[1];

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
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        redirectTo: 'storage',
        pathMatch: 'full'
      }, {
        path: 'storage',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-storage-storage-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-storage-storage-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/storage/storage.module */
          "rZjt")).then(function (m) {
            return m.StoragePageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-settings-settings-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-settings-settings-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/settings/settings.module */
          "yPrK")).then(function (m) {
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
          "d0DS")).then(function (m) {
            return m.ProofPageModule;
          });
        }
      }, {
        path: 'information',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-information-information-module */
          "pages-information-information-module").then(__webpack_require__.bind(null,
          /*! ./pages/information/information.module */
          "gSC0")).then(function (m) {
            return m.InformationPageModule;
          });
        }
      }, {
        path: 'general',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-general-general-module */
          "pages-general-general-module").then(__webpack_require__.bind(null,
          /*! ./pages/general/general.module */
          "yebe")).then(function (m) {
            return m.GeneralPageModule;
          });
        }
      }, {
        path: 'defaultinformationprovider',
        // tslint:disable-next-line: max-line-length
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-defaultinformationprovider-defaultinformationprovider-module */
          "pages-defaultinformationprovider-defaultinformationprovider-module").then(__webpack_require__.bind(null,
          /*! ./pages/defaultinformationprovider/defaultinformationprovider.module */
          "RoSL")).then(function (m) {
            return m.DefaultInformationProviderPageModule;
          });
        }
      }, {
        path: 'defaultsignature',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-defaultsignature-defaultsignature-module */
          "pages-defaultsignature-defaultsignature-module").then(__webpack_require__.bind(null,
          /*! ./pages/defaultsignature/defaultsignature.module */
          "HaGY")).then(function (m) {
            return m.DefaultSignaturePageModule;
          });
        }
      }, {
        path: 'about',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-about-about-module */
          "pages-about-about-module").then(__webpack_require__.bind(null,
          /*! ./pages/about/about.module */
          "UoYK")).then(function (m) {
            return m.AboutPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"],
          relativeLinkResolution: 'corrected'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "xH0/":
    /*!*************************************************!*\
      !*** ./src/app/services/publisher/publisher.ts ***!
      \*************************************************/

    /*! exports provided: Publisher */

    /***/
    function xH0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Publisher", function () {
        return Publisher;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/utils/background-task/background-task */
      "no1F");

      var Publisher = /*#__PURE__*/function () {
        function Publisher(translocoService, notificationService) {
          _classCallCheck(this, Publisher);

          this.translocoService = translocoService;
          this.notificationService = notificationService;
        }

        _createClass(Publisher, [{
          key: "publish",
          value: function publish(proof) {
            var _this34 = this;

            var notificationId = this.notificationService.createNotificationId();
            this.notificationService.notify(notificationId, this.translocoService.translate('publishingProof'), this.translocoService.translate('message.publishingProof', {
              hash: proof.hash,
              publisherName: this.name
            }));
            Object(src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_1__["subscribeInBackground"])(this.run$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (_) {
              return _this34.notificationService.notify(notificationId, _this34.translocoService.translate('proofPublished'), _this34.translocoService.translate('message.proofPublished', {
                hash: proof.hash,
                publisherName: _this34.name
              }));
            })), function (error) {
              return _this34.notificationService.notifyError(notificationId, error);
            });
          }
        }]);

        return Publisher;
      }();
      /***/

    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "z1Mc":
    /*!*****************************************************************!*\
      !*** ./src/app/services/data/proof/proof-repository.service.ts ***!
      \*****************************************************************/

    /*! exports provided: ProofRepository */

    /***/
    function z1Mc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProofRepository", function () {
        return ProofRepository;
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


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_utils_crypto_crypto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/utils/crypto/crypto */
      "sWsZ");
      /* harmony import */


      var src_app_utils_encoding_encoding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/utils/encoding/encoding */
      "bw8K");
      /* harmony import */


      var src_app_utils_mime_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/utils/mime-type */
      "AumY");
      /* harmony import */


      var src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/utils/rx-operators */
      "KJy6");
      /* harmony import */


      var src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/utils/storage/storage */
      "rIbz");
      /* harmony import */


      var _caption_caption_repository_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../caption/caption-repository.service */
      "fpah");
      /* harmony import */


      var _information_information_repository_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../information/information-repository.service */
      "7IEa");
      /* harmony import */


      var _signature_signature_repository_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../signature/signature-repository.service */
      "PJNO");

      var Filesystem = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Filesystem; // @ts-ignore

      var ImageBlobReduce = __webpack_require__(
      /*! image-blob-reduce */
      "WiYX")();

      var ProofRepository = /*#__PURE__*/function () {
        function ProofRepository(captionRepository, informationRepository, signatureRepository) {
          _classCallCheck(this, ProofRepository);

          this.captionRepository = captionRepository;
          this.informationRepository = informationRepository;
          this.signatureRepository = signatureRepository;
          this.proofStorage = new src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]('proof');
          this.rawFileDir = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data;
          this.rawFileFolderName = 'raw';
          this.thumbnailFileDir = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data;
          this.thumbnailFileFolderName = 'thumb';
          this.thumbnailSize = 200;
        }

        _createClass(ProofRepository, [{
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
                _this35 = this;

            for (var _len7 = arguments.length, proofs = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              proofs[_key7] = arguments[_key7];
            }

            return (_this$proofStorage2 = this.proofStorage).remove$.apply(_this$proofStorage2, proofs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMapTo"])(Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_8__["forkJoinWithDefault"])(proofs.map(function (proof) {
              return _this35.deleteRawFile$(proof);
            }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMapTo"])(Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_8__["forkJoinWithDefault"])(proofs.map(function (proof) {
              return _this35.captionRepository.removeByProof$(proof);
            }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMapTo"])(Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_8__["forkJoinWithDefault"])(proofs.map(function (proof) {
              return _this35.informationRepository.removeByProof$(proof);
            }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMapTo"])(Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_8__["forkJoinWithDefault"])(proofs.map(function (proof) {
              return _this35.signatureRepository.removeByProof$(proof);
            }))));
          }
        }, {
          key: "getRawFile$",
          value: function getRawFile$(proof) {
            var _this36 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(function () {
              return Filesystem.readFile({
                path: "".concat(_this36.rawFileFolderName, "/").concat(proof.hash, ".").concat(Object(src_app_utils_mime_type__WEBPACK_IMPORTED_MODULE_7__["getExtension"])(proof.mimeType)),
                directory: _this36.rawFileDir
              });
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('data'));
          }
          /**
           * Copy [rawBase64] to add raw file to internal storage.
           * @param rawBase64 The original source of raw file which will be copied.
           * @param mimeType The file added in the internal storage. The name of the returned file will be its hash with original extension.
           */

        }, {
          key: "saveRawFile$",
          value: function saveRawFile$(rawBase64, mimeType) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"])(this._saveRawFile$(rawBase64, mimeType), this.generateAndSaveThumbnailFile$(rawBase64, mimeType)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_ref16) {
              var _ref17 = _slicedToArray(_ref16, 2),
                  rawUri = _ref17[0],
                  _ = _ref17[1];

              return rawUri;
            }));
          }
        }, {
          key: "_saveRawFile$",
          value: function _saveRawFile$(rawBase64, mimeType) {
            var _this37 = this;

            return Object(src_app_utils_crypto_crypto__WEBPACK_IMPORTED_MODULE_5__["sha256WithBase64$"])(rawBase64).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (hash) {
              return Filesystem.writeFile({
                path: "".concat(_this37.rawFileFolderName, "/").concat(hash, ".").concat(Object(src_app_utils_mime_type__WEBPACK_IMPORTED_MODULE_7__["getExtension"])(mimeType)),
                data: rawBase64,
                directory: _this37.rawFileDir,
                recursive: true
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('uri'));
          }
        }, {
          key: "deleteRawFile$",
          value: function deleteRawFile$(proof) {
            var _this38 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(function () {
              return Filesystem.deleteFile({
                path: "".concat(_this38.rawFileFolderName, "/").concat(proof.hash, ".").concat(Object(src_app_utils_mime_type__WEBPACK_IMPORTED_MODULE_7__["getExtension"])(proof.mimeType)),
                directory: _this38.rawFileDir
              });
            });
          }
        }, {
          key: "getThumbnail$",
          value: function getThumbnail$(proof) {
            var _this39 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(function () {
              return Filesystem.readFile({
                path: "".concat(_this39.thumbnailFileFolderName, "/").concat(proof.hash, ".").concat(Object(src_app_utils_mime_type__WEBPACK_IMPORTED_MODULE_7__["getExtension"])(proof.mimeType)),
                directory: _this39.thumbnailFileDir
              });
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('data'));
          }
        }, {
          key: "generateAndSaveThumbnailFile$",
          value: function generateAndSaveThumbnailFile$(rawBase64, mimeType) {
            var _this40 = this;

            return Object(src_app_utils_encoding_encoding__WEBPACK_IMPORTED_MODULE_6__["base64ToBlob$"])("data:".concat(mimeType, ";base64,").concat(rawBase64)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (rawImageBlob) {
              return ImageBlobReduce.toBlob(rawImageBlob, {
                max: _this40.thumbnailSize
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (thumbnailBlob) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"])(Object(src_app_utils_encoding_encoding__WEBPACK_IMPORTED_MODULE_6__["blobToBase64$"])(thumbnailBlob), Object(src_app_utils_crypto_crypto__WEBPACK_IMPORTED_MODULE_5__["sha256WithBase64$"])(rawBase64));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_ref18) {
              var _ref19 = _slicedToArray(_ref18, 2),
                  thumbnailBase64 = _ref19[0],
                  hash = _ref19[1];

              return Filesystem.writeFile({
                path: "".concat(_this40.thumbnailFileFolderName, "/").concat(hash, ".").concat(Object(src_app_utils_mime_type__WEBPACK_IMPORTED_MODULE_7__["getExtension"])(mimeType)),
                data: thumbnailBase64,
                directory: _this40.thumbnailFileDir,
                recursive: true
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('uri'));
          }
        }]);

        return ProofRepository;
      }();

      ProofRepository.ctorParameters = function () {
        return [{
          type: _caption_caption_repository_service__WEBPACK_IMPORTED_MODULE_10__["CaptionRepository"]
        }, {
          type: _information_information_repository_service__WEBPACK_IMPORTED_MODULE_11__["InformationRepository"]
        }, {
          type: _signature_signature_repository_service__WEBPACK_IMPORTED_MODULE_12__["SignatureRepository"]
        }];
      };

      ProofRepository = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ProofRepository);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/pwa-elements/loader */
      "2Zi2");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

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
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map