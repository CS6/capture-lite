(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/capture-lite/capture-lite/src/main.ts */"zUnb");


/***/ }),

/***/ "176C":
/*!********************************************************************!*\
  !*** ./src/app/services/collector/signature/signature-provider.ts ***!
  \********************************************************************/
/*! exports provided: SignatureProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureProvider", function() { return SignatureProvider; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");

class SignatureProvider {
    constructor(signatureRepository, serializationService) {
        this.signatureRepository = signatureRepository;
        this.serializationService = serializationService;
    }
    signAndStore$(proof) {
        return this.serializationService.stringify$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(serialized => this.provide$(proof, serialized)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(signature => this.signatureRepository.add$(signature)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])(0));
    }
}


/***/ }),

/***/ "2MVJ":
/*!***************************************************!*\
  !*** ./src/app/services/camera/camera.service.ts ***!
  \***************************************************/
/*! exports provided: CameraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraService", function() { return CameraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





const { App, Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
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
    restoreKilledAppResult$() {
        const appRestored$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEventPattern"])(handler => App.addListener('appRestoredResult', handler));
        return appRestored$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(result => result.pluginId === 'Camera' && result.methodName === 'getPhoto' && result.success), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => result.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(cameraPhoto => ({
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

/***/ "2Rqb":
/*!*********************************************************************************!*\
  !*** ./src/app/services/publisher/publishers-alert/publishers-alert.service.ts ***!
  \*********************************************************************************/
/*! exports provided: PublishersAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishersAlert", function() { return PublishersAlert; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let PublishersAlert = class PublishersAlert {
    constructor(alertController, translocoService) {
        this.alertController = alertController;
        this.translocoService = translocoService;
        this.publishers = [];
    }
    addPublisher(publisher) {
        this.publishers.push(publisher);
    }
    present$(proof) {
        return this.getEnabledPublishers$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(publishers => this.alertController.create({
            header: this.translocoService.translate('selectAPublisher'),
            inputs: publishers.map((publisher, index) => ({
                name: publisher.name,
                type: 'radio',
                label: publisher.name,
                value: publisher.name,
                checked: index === 0
            })),
            buttons: [{
                    text: this.translocoService.translate('cancel'),
                    role: 'cancel'
                }, {
                    text: this.translocoService.translate('ok'),
                    handler: (name) => { var _a; return (_a = this.getPublisherByName(name)) === null || _a === void 0 ? void 0 : _a.publish(proof); }
                }]
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(alertElement => alertElement.present()));
    }
    getEnabledPublishers$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.publishers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(publisher => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(publisher), publisher.isEnabled$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(([_, isEnabled]) => isEnabled), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["pluck"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])());
    }
    getPublisherByName(name) {
        return this.publishers.find(publisher => publisher.name === name);
    }
};
PublishersAlert.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoService"] }
];
PublishersAlert = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PublishersAlert);



/***/ }),

/***/ "5RWN":
/*!*******************************************************!*\
  !*** ./src/app/services/language/language.service.ts ***!
  \*******************************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/transloco/transloco-root.module */ "b3Gb");
/* harmony import */ var _utils_preferences_preference_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/preferences/preference-manager */ "sO7I");






const preferences = _utils_preferences_preference_manager__WEBPACK_IMPORTED_MODULE_5__["PreferenceManager"].LANGUAGE_PREF;
let LanguageService = class LanguageService {
    constructor(translocoService) {
        this.translocoService = translocoService;
        this.languages = src_app_transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__["languages"];
        this.defaultLanguage = src_app_transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__["defaultLanguage"];
        this.currentLanguageKey$ = preferences.getString$("language" /* Language */, src_app_transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__["defaultLanguage"][0]);
    }
    initialize$() {
        this.translocoService.setDefaultLang(src_app_transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__["defaultLanguage"][0]);
        return this.currentLanguageKey$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(key => this.setCurrentLanguage$(key)));
    }
    setCurrentLanguage$(key) {
        return preferences.setString$("language" /* Language */, key).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(this.translocoService.setActiveLang(key)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(key));
    }
};
LanguageService.ctorParameters = () => [
    { type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__["TranslocoService"] }
];
LanguageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LanguageService);



/***/ }),

/***/ "5gSH":
/*!************************************!*\
  !*** ./src/app/utils/file/file.ts ***!
  \************************************/
/*! exports provided: fileNameWithoutExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileNameWithoutExtension", function() { return fileNameWithoutExtension; });
function fileNameWithoutExtension(uri) {
    // tslint:disable-next-line: no-non-null-assertion
    return uri.match(/([^\/]+)(?=\.\w+$)/)[0];
}


/***/ }),

/***/ "5yvM":
/*!*************************************************************************!*\
  !*** ./src/app/services/publisher/sample-publisher/sample-publisher.ts ***!
  \*************************************************************************/
/*! exports provided: SamplePublisher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePublisher", function() { return SamplePublisher; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _publisher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../publisher */ "xH0/");



class SamplePublisher extends _publisher__WEBPACK_IMPORTED_MODULE_2__["Publisher"] {
    constructor() {
        super(...arguments);
        this.name = 'Sample Publisher';
    }
    run$(proof) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(void 0).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(3000));
    }
    isEnabled$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
    }
}


/***/ }),

/***/ "6g5+":
/*!***********************************************************************************!*\
  !*** ./src/app/services/collector/signature/default-provider/default-provider.ts ***!
  \***********************************************************************************/
/*! exports provided: DefaultSignatureProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSignatureProvider", function() { return DefaultSignatureProvider; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_utils_crypto_crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/crypto/crypto */ "sWsZ");
/* harmony import */ var src_app_utils_preferences_preference_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/preferences/preference-manager */ "sO7I");
/* harmony import */ var _signature_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signature-provider */ "176C");





const preferences = src_app_utils_preferences_preference_manager__WEBPACK_IMPORTED_MODULE_3__["PreferenceManager"].DEFAULT_SIGNATURE_PROVIDER_PREF;
class DefaultSignatureProvider extends _signature_provider__WEBPACK_IMPORTED_MODULE_4__["SignatureProvider"] {
    constructor() {
        super(...arguments);
        this.name = 'Web Crypto API';
    }
    static initialize$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["zip"])(this.getPublicKey$(), this.getPrivateKey$()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(([publicKey, privateKey]) => publicKey.length === 0 || privateKey.length === 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMapTo"])(Object(src_app_utils_crypto_crypto__WEBPACK_IMPORTED_MODULE_2__["createEcKeyPair$"])()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(({ publicKey, privateKey }) => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["zip"])(preferences.setString$("publicKey" /* PublicKey */, publicKey), preferences.setString$("privateKey" /* PrivateKey */, privateKey))));
    }
    static getPublicKey$() {
        return preferences.getString$("publicKey" /* PublicKey */);
    }
    static getPrivateKey$() {
        return preferences.getString$("privateKey" /* PrivateKey */);
    }
    provide$(proof, serialized) {
        return DefaultSignatureProvider.getPrivateKey$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(privateKeyHex => Object(src_app_utils_crypto_crypto__WEBPACK_IMPORTED_MODULE_2__["signWithSha256AndEcdsa$"])(serialized, privateKeyHex)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(signatureHex => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(signatureHex), DefaultSignatureProvider.getPublicKey$())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(([signatureHex, publicKeyHex]) => ({
            proofHash: proof.hash,
            provider: this.name,
            signature: signatureHex,
            publicKey: publicKeyHex
        })));
    }
}


/***/ }),

/***/ "7IEa":
/*!*****************************************************************************!*\
  !*** ./src/app/services/data/information/information-repository.service.ts ***!
  \*****************************************************************************/
/*! exports provided: InformationRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationRepository", function() { return InformationRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/storage/storage */ "rIbz");




let InformationRepository = class InformationRepository {
    constructor() {
        this.informationStorage = new src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]('information');
    }
    getByProof$(proof) {
        return this.informationStorage.getAll$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(informationList => informationList.filter(info => info.proofHash === proof.hash)));
    }
    add$(...information) { return this.informationStorage.add$(...information); }
    removeByProof$(proof) {
        return this.getByProof$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(informationList => this.remove$(...informationList)));
    }
    remove$(...information) {
        return this.informationStorage.remove$(...information);
    }
};
InformationRepository = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InformationRepository);



/***/ }),

/***/ "AumY":
/*!************************************!*\
  !*** ./src/app/utils/mime-type.ts ***!
  \************************************/
/*! exports provided: getExtension, fromExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtension", function() { return getExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromExtension", function() { return fromExtension; });
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
            throw TypeError(`Unknown extension: ${extension}`);
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "D9E+":
/*!**************************************************!*\
  !*** ./src/app/utils/preferences/preferences.ts ***!
  \**************************************************/
/*! exports provided: Preferences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preferences", function() { return Preferences; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"];
class Preferences {
    constructor(name) {
        this.name = name;
        this.subjects = new Map();
    }
    get$(key, defaultValue, converter = JSON.parse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.subjects.has(key))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(existed => {
            if (!existed) {
                return this._get$(key, defaultValue, converter);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(existed);
        }), 
        // tslint:disable-next-line: no-non-null-assertion
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMapTo"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(() => this.subjects.get(key).asObservable())));
    }
    _get$(key, defaultValue, converter) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(() => Storage.get({ key: `${this.name}_${key}` })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('value'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => (value && value !== '[null]') ? converter(value) : defaultValue), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(converted => this.updateSubjects(key, converted)));
    }
    getBoolean$(key, defaultValue = false) {
        return this.get$(key, defaultValue, (v) => v === 'true');
    }
    getNumber$(key, defaultValue = 0) {
        return this.get$(key, defaultValue, Number);
    }
    getString$(key, defaultValue = '') {
        return this.get$(key, defaultValue, (v) => v);
    }
    set$(key, value, converter = JSON.stringify) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(() => Storage.set({ key: `${this.name}_${key}`, value: converter(value) })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(this.updateSubjects(key, value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(value));
    }
    setBoolean$(key, value) {
        return this.set$(key, value, String);
    }
    setNumber$(key, value) {
        return this.set$(key, value, String);
    }
    setString$(key, value) {
        return this.set$(key, value, (v) => v);
    }
    updateSubjects(key, value) {
        var _a;
        if (this.subjects.has(key)) {
            (_a = this.subjects.get(key)) === null || _a === void 0 ? void 0 : _a.next(value);
        }
        else {
            this.subjects.set(key, new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](value));
        }
    }
}


/***/ }),

/***/ "GeUf":
/*!************************************************************************!*\
  !*** ./src/app/services/collector/information/information-provider.ts ***!
  \************************************************************************/
/*! exports provided: InformationProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationProvider", function() { return InformationProvider; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");

class InformationProvider {
    constructor(informationRepository) {
        this.informationRepository = informationRepository;
    }
    collectAndStore$(proof) {
        return this.provide$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(information => this.informationRepository.add$(...information)));
    }
}


/***/ }),

/***/ "K0yA":
/*!*****************************************************************!*\
  !*** ./src/app/services/serialization/serialization.service.ts ***!
  \*****************************************************************/
/*! exports provided: SerializationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerializationService", function() { return SerializationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _data_information_information_repository_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/information/information-repository.service */ "7IEa");




let SerializationService = class SerializationService {
    constructor(informationRepository) {
        this.informationRepository = informationRepository;
    }
    stringify$(proof) {
        return this.createSortedProofInformation$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(sortedProofInformation => JSON.stringify(sortedProofInformation)));
    }
    createSortedProofInformation$(proof) {
        return this.informationRepository.getByProof$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(informationList => {
            const sortedInformation = informationList.sort((a, b) => {
                const providerCompared = a.provider.localeCompare(b.provider);
                const nameCompared = a.name.localeCompare(b.name);
                const valueCompared = a.value.localeCompare(b.value);
                if (providerCompared !== 0) {
                    return providerCompared;
                }
                if (nameCompared !== 0) {
                    return nameCompared;
                }
                return valueCompared;
            }).map(({ provider, name, value }) => ({ provider, name, value }));
            return { proof, information: sortedInformation };
        }));
    }
};
SerializationService.ctorParameters = () => [
    { type: _data_information_information_repository_service__WEBPACK_IMPORTED_MODULE_3__["InformationRepository"] }
];
SerializationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SerializationService);



/***/ }),

/***/ "KJy6":
/*!***************************************!*\
  !*** ./src/app/utils/rx-operators.ts ***!
  \***************************************/
/*! exports provided: isNonNullable, forkJoinWithDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonNullable", function() { return isNonNullable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forkJoinWithDefault", function() { return forkJoinWithDefault; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


function isNonNullable() {
    return (source$) => source$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((v) => v !== null && v !== undefined));
}
function forkJoinWithDefault(sources, defaultValue = []) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])(sources).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["defaultIfEmpty"])(defaultValue));
}


/***/ }),

/***/ "KwcL":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pwa-action-sheet.entry.js": [
		"jDxf",
		43
	],
	"./pwa-camera-modal-instance.entry.js": [
		"37vE",
		44
	],
	"./pwa-camera-modal.entry.js": [
		"cJxf",
		45
	],
	"./pwa-camera.entry.js": [
		"eGHz",
		46
	],
	"./pwa-toast.entry.js": [
		"fHjd",
		47
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "KwcL";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "PJNO":
/*!*************************************************************************!*\
  !*** ./src/app/services/data/signature/signature-repository.service.ts ***!
  \*************************************************************************/
/*! exports provided: SignatureRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureRepository", function() { return SignatureRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/storage/storage */ "rIbz");




let SignatureRepository = class SignatureRepository {
    constructor() {
        this.signatureStorage = new src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]('signature');
    }
    getByProof$(proof) {
        return this.signatureStorage.getAll$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(signatures => signatures.filter(info => info.proofHash === proof.hash)));
    }
    add$(...signatures) {
        return this.signatureStorage.add$(...signatures);
    }
    removeByProof$(proof) {
        return this.getByProof$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(signatures => this.remove$(...signatures)));
    }
    remove$(...signatures) {
        return this.signatureStorage.remove$(...signatures);
    }
};
SignatureRepository = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SignatureRepository);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_camera_camera_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/camera/camera.service */ "2MVJ");
/* harmony import */ var _services_collector_collector_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/collector/collector.service */ "bWLf");
/* harmony import */ var _services_collector_information_capacitor_provider_capacitor_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/collector/information/capacitor-provider/capacitor-provider */ "TtCf");
/* harmony import */ var _services_collector_signature_default_provider_default_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/collector/signature/default-provider/default-provider */ "6g5+");
/* harmony import */ var _services_data_information_information_repository_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/data/information/information-repository.service */ "7IEa");
/* harmony import */ var _services_data_signature_signature_repository_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/data/signature/signature-repository.service */ "PJNO");
/* harmony import */ var _services_language_language_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/language/language.service */ "5RWN");
/* harmony import */ var _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/notification/notification.service */ "nak+");
/* harmony import */ var _services_publisher_publishers_alert_publishers_alert_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/publisher/publishers-alert/publishers-alert.service */ "2Rqb");
/* harmony import */ var _services_publisher_sample_publisher_sample_publisher__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/publisher/sample-publisher/sample-publisher */ "5yvM");
/* harmony import */ var _services_serialization_serialization_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/serialization/serialization.service */ "K0yA");
/* harmony import */ var _utils_mime_type__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utils/mime-type */ "AumY");





















const { SplashScreen } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
let AppComponent = class AppComponent {
    constructor(platform, collectorService, publishersAlert, serializationService, informationRepository, signatureRepository, translocoService, notificationService, langaugeService, cameraService) {
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
    restoreAppStatus() {
        this.cameraService.restoreKilledAppResult$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(cameraPhoto => this.collectorService.storeAndCollect(cameraPhoto.base64String, Object(_utils_mime_type__WEBPACK_IMPORTED_MODULE_20__["fromExtension"])(cameraPhoto.format))), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this)).subscribe();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            SplashScreen.hide();
        });
    }
    initializeCollector() {
        _services_collector_signature_default_provider_default_provider__WEBPACK_IMPORTED_MODULE_12__["DefaultSignatureProvider"].initialize$().pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this)).subscribe();
        this.collectorService.addInformationProvider(new _services_collector_information_capacitor_provider_capacitor_provider__WEBPACK_IMPORTED_MODULE_11__["CapacitorProvider"](this.informationRepository, this.translocoService));
        this.collectorService.addSignatureProvider(new _services_collector_signature_default_provider_default_provider__WEBPACK_IMPORTED_MODULE_12__["DefaultSignatureProvider"](this.signatureRepository, this.serializationService));
    }
    initializePublisher() {
        this.publishersAlert.addPublisher(new _services_publisher_sample_publisher_sample_publisher__WEBPACK_IMPORTED_MODULE_18__["SamplePublisher"](this.translocoService, this.notificationService));
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _services_collector_collector_service__WEBPACK_IMPORTED_MODULE_10__["CollectorService"] },
    { type: _services_publisher_publishers_alert_publishers_alert_service__WEBPACK_IMPORTED_MODULE_17__["PublishersAlert"] },
    { type: _services_serialization_serialization_service__WEBPACK_IMPORTED_MODULE_19__["SerializationService"] },
    { type: _services_data_information_information_repository_service__WEBPACK_IMPORTED_MODULE_13__["InformationRepository"] },
    { type: _services_data_signature_signature_repository_service__WEBPACK_IMPORTED_MODULE_14__["SignatureRepository"] },
    { type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__["TranslocoService"] },
    { type: _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"] },
    { type: _services_language_language_service__WEBPACK_IMPORTED_MODULE_15__["LanguageService"] },
    { type: _services_camera_camera_service__WEBPACK_IMPORTED_MODULE_9__["CameraService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__["UntilDestroy"])({ checkProperties: true }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TtCf":
/*!*****************************************************************************************!*\
  !*** ./src/app/services/collector/information/capacitor-provider/capacitor-provider.ts ***!
  \*****************************************************************************************/
/*! exports provided: CapacitorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacitorProvider", function() { return CapacitorProvider; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_utils_preferences_preference_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/preferences/preference-manager */ "sO7I");
/* harmony import */ var _information_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../information-provider */ "GeUf");





const { Device, Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"];
const preferences = src_app_utils_preferences_preference_manager__WEBPACK_IMPORTED_MODULE_3__["PreferenceManager"].DEFAULT_INFORMATION_PROVIDER_PREF;
class CapacitorProvider extends _information_provider__WEBPACK_IMPORTED_MODULE_4__["InformationProvider"] {
    constructor(informationRepository, translocoService) {
        super(informationRepository);
        this.translocoService = translocoService;
        this.name = 'Capacitor';
    }
    static isDeviceInfoCollectionEnabled$() {
        return preferences.getBoolean$("collectDeviceInfo" /* CollectDeviceInfo */, true);
    }
    static setDeviceInfoCollection$(enable) {
        return preferences.setBoolean$("collectDeviceInfo" /* CollectDeviceInfo */, enable);
    }
    static isLocationInfoCollectionEnabled$() {
        return preferences.getBoolean$("collectLocationInfo" /* CollectLocationInfo */, true);
    }
    static setLocationInfoCollection$(enable) {
        return preferences.setBoolean$("collectLocationInfo" /* CollectLocationInfo */, enable);
    }
    provide$(proof) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(CapacitorProvider.isDeviceInfoCollectionEnabled$(), CapacitorProvider.isLocationInfoCollectionEnabled$()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(([isDeviceInfoCollectionEnabled, isLocationInfoCollectionEnabled]) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(isDeviceInfoCollectionEnabled ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(() => Device.getInfo()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined), isDeviceInfoCollectionEnabled ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(() => Device.getBatteryInfo()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined), isDeviceInfoCollectionEnabled ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(() => Device.getLanguageCode()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined), isLocationInfoCollectionEnabled ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(() => Geolocation.getCurrentPosition({
            enableHighAccuracy: true,
            maximumAge: 10 * 60 * 1000,
            timeout: 10 * 1000
        })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([deviceInfo, batteryInfo, languageCode, geolocationPosition]) => {
            const informationList = [];
            if (deviceInfo !== undefined) {
                informationList.push({
                    proofHash: proof.hash,
                    provider: this.name,
                    name: this.translocoService.translate('uuid'),
                    value: String(deviceInfo.uuid),
                    importance: "high" /* High */,
                    type: "other" /* Other */
                }, {
                    proofHash: proof.hash,
                    provider: this.name,
                    name: this.translocoService.translate('deviceName'),
                    value: String(deviceInfo.name),
                    importance: "low" /* Low */,
                    type: "device" /* Device */
                }, {
                    proofHash: proof.hash,
                    provider: this.name,
                    name: this.translocoService.translate('deviceModel'),
                    value: String(deviceInfo.model),
                    importance: "low" /* Low */,
                    type: "device" /* Device */
                }, {
                    proofHash: proof.hash,
                    provider: this.name,
                    name: this.translocoService.translate('devicePlatform'),
                    value: String(deviceInfo.platform),
                    importance: "low" /* Low */,
                    type: "device" /* Device */
                }, {
                    proofHash: proof.hash,
                    provider: this.name,
                    name: this.translocoService.translate('appVersion'),
                    value: String(deviceInfo.appVersion),
                    importance: "low" /* Low */,
                    type: "device" /* Device */
                }, {
                    proofHash: proof.hash,
                    provider: this.name,
                    name: this.translocoService.translate('appVersionCode'),
                    value: String(deviceInfo.appBuild),
                    importance: "low" /* Low */,
                    type: "device" /* Device */
                }, {
                    proofHash: proof.hash,
                    provider: this.name,
                    name: this.translocoService.translate('operatingSystem'),
                    value: String(deviceInfo.operatingSystem),
                    importance: "low" /* Low */,
                    type: "device" /* Device */
                }, {
                    proofHash: proof.hash,
                    provider: this.name,
                    name: this.translocoService.translate('osVersion'),
                    value: String(deviceInfo.osVersion),
                    importance: "low" /* Low */,
                    type: "device" /* Device */
                }, {
                    proofHash: proof.hash,
                    provider: this.name,
                    name: this.translocoService.translate('deviceManufacturer'),
                    value: String(deviceInfo.manufacturer),
                    importance: "low" /* Low */,
                    type: "device" /* Device */
                }, {
                    proofHash: proof.hash,
                    provider: this.name,
                    name: this.translocoService.translate('runningOnVm'),
                    value: String(deviceInfo.isVirtual),
                    importance: "low" /* Low */,
                    type: "device" /* Device */
                }, {
                    proofHash: proof.hash,
                    provider: this.name,
                    name: this.translocoService.translate('usedMemory'),
                    value: String(deviceInfo.memUsed),
                    importance: "low" /* Low */,
                    type: "device" /* Device */
                }, {
                    proofHash: proof.hash,
                    provider: this.name,
                    name: this.translocoService.translate('freeDiskSpace'),
                    value: String(deviceInfo.diskFree),
                    importance: "low" /* Low */,
                    type: "device" /* Device */
                }, {
                    proofHash: proof.hash,
                    provider: this.name,
                    name: this.translocoService.translate('totalDiskSpace'),
                    value: String(deviceInfo.diskTotal),
                    importance: "low" /* Low */,
                    type: "device" /* Device */
                });
            }
            if (batteryInfo !== undefined) {
                informationList.push({
                    proofHash: proof.hash,
                    provider: this.name,
                    name: this.translocoService.translate('batteryLevel'),
                    value: String(batteryInfo.batteryLevel),
                    importance: "low" /* Low */,
                    type: "device" /* Device */
                }, {
                    proofHash: proof.hash,
                    provider: this.name,
                    name: this.translocoService.translate('batteryCharging'),
                    value: String(batteryInfo.isCharging),
                    importance: "low" /* Low */,
                    type: "device" /* Device */
                });
            }
            if (languageCode !== undefined) {
                informationList.push({
                    proofHash: proof.hash,
                    provider: this.name,
                    name: this.translocoService.translate('deviceLanguageCode'),
                    value: String(languageCode.value),
                    importance: "low" /* Low */,
                    type: "device" /* Device */
                });
            }
            if (geolocationPosition !== undefined) {
                informationList.push({
                    proofHash: proof.hash,
                    provider: this.name,
                    name: this.translocoService.translate('location'),
                    value: `(${geolocationPosition.coords.latitude}, ${geolocationPosition.coords.longitude})`,
                    importance: "high" /* High */,
                    type: "location" /* Location */
                });
            }
            return informationList;
        }));
    }
}


/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transloco/transloco-root.module */ "b3Gb");









let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_8__["TranslocoRootModule"]
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "b3Gb":
/*!****************************************************!*\
  !*** ./src/app/transloco/transloco-root.module.ts ***!
  \****************************************************/
/*! exports provided: languages, defaultLanguage, TranslocoHttpLoader, TranslocoRootModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languages", function() { return languages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLanguage", function() { return defaultLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslocoHttpLoader", function() { return TranslocoHttpLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslocoRootModule", function() { return TranslocoRootModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "AytR");





const languages = {
    'en-us': 'English (United State)',
    'zh-tw': '繁體中文（台灣）'
};
const defaultLanguage = Object.entries(languages)[0];
let TranslocoHttpLoader = class TranslocoHttpLoader {
    constructor(http) {
        this.http = http;
    }
    getTranslation(lang) {
        return this.http.get(`./assets/i18n/${lang}.json`);
    }
};
TranslocoHttpLoader.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TranslocoHttpLoader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], TranslocoHttpLoader);

let TranslocoRootModule = class TranslocoRootModule {
};
TranslocoRootModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        exports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoModule"]],
        providers: [
            {
                provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TRANSLOCO_CONFIG"],
                useValue: Object(_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["translocoConfig"])({
                    availableLangs: Object.keys(languages),
                    defaultLang: defaultLanguage[0],
                    fallbackLang: defaultLanguage[0],
                    missingHandler: { useFallbackTranslation: true },
                    // Remove this option if your application doesn't support changing language in runtime.
                    reRenderOnLangChange: true,
                    prodMode: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production,
                })
            },
            { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TRANSLOCO_LOADER"], useClass: TranslocoHttpLoader }
        ]
    })
], TranslocoRootModule);



/***/ }),

/***/ "bWLf":
/*!*********************************************************!*\
  !*** ./src/app/services/collector/collector.service.ts ***!
  \*********************************************************/
/*! exports provided: CollectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectorService", function() { return CollectorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/background-task/background-task */ "no1F");
/* harmony import */ var src_app_utils_file_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/file/file */ "5gSH");
/* harmony import */ var src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/rx-operators */ "KJy6");
/* harmony import */ var _data_proof_proof_repository_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/proof/proof-repository.service */ "z1Mc");
/* harmony import */ var _notification_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../notification/notification.service */ "nak+");










let CollectorService = class CollectorService {
    constructor(proofRepository, notificationService, translocoService) {
        this.proofRepository = proofRepository;
        this.notificationService = notificationService;
        this.translocoService = translocoService;
        this.informationProviders = new Set();
        this.signatureProviders = new Set();
    }
    storeAndCollect(rawBase64, mimeType) {
        // Deliberately store proof and its media file in the foreground, so the app page can
        // correctly and continuously subscribe the Storage.getAll$().
        this.store$(rawBase64, mimeType).subscribe(proof => {
            Object(src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_5__["subscribeInBackground"])(this.collectAndSign$(proof));
        });
    }
    store$(rawBase64, mimeType) {
        return this.proofRepository.saveRawFile$(rawBase64, mimeType).pipe(
        // Get the proof hash from the uri.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(uri => Object(src_app_utils_file_file__WEBPACK_IMPORTED_MODULE_6__["fileNameWithoutExtension"])(uri)), 
        // Store the media file.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(hash => this.proofRepository.add$({ hash, mimeType, timestamp: Date.now() })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])(0));
    }
    collectAndSign$(proof) {
        const notificationId = this.notificationService.createNotificationId();
        this.notificationService.notify(notificationId, this.translocoService.translate('collectingProof'), this.translocoService.translate('collectingInformation'));
        return Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_7__["forkJoinWithDefault"])([...this.informationProviders].map(provider => provider.collectAndStore$(proof))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.notificationService.notify(notificationId, this.translocoService.translate('collectingProof'), this.translocoService.translate('signingProof'))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMapTo"])(Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_7__["forkJoinWithDefault"])([...this.signatureProviders].map(provider => provider.signAndStore$(proof)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.notificationService.cancel(notificationId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            this.notificationService.notifyError(notificationId, error);
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }));
    }
    addInformationProvider(...providers) {
        providers.forEach(provider => this.informationProviders.add(provider));
    }
    removeInformationProvider(...providers) {
        providers.forEach(provider => this.informationProviders.delete(provider));
    }
    addSignatureProvider(...providers) {
        providers.forEach(provider => this.signatureProviders.add(provider));
    }
    removeSignatureProvider(...providers) {
        providers.forEach(provider => this.signatureProviders.delete(provider));
    }
};
CollectorService.ctorParameters = () => [
    { type: _data_proof_proof_repository_service__WEBPACK_IMPORTED_MODULE_8__["ProofRepository"] },
    { type: _notification_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__["TranslocoService"] }
];
CollectorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CollectorService);



/***/ }),

/***/ "bw8K":
/*!********************************************!*\
  !*** ./src/app/utils/encoding/encoding.ts ***!
  \********************************************/
/*! exports provided: base64ToArrayBuffer, arrayBufferToBase64, arrayBufferToHex, hexToArrayBuffer, stringToArrayBuffer, arrayBufferToString, base64ToBlob$, blobToBase64$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64ToArrayBuffer", function() { return base64ToArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayBufferToBase64", function() { return arrayBufferToBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayBufferToHex", function() { return arrayBufferToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToArrayBuffer", function() { return hexToArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToArrayBuffer", function() { return stringToArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayBufferToString", function() { return arrayBufferToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64ToBlob$", function() { return base64ToBlob$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blobToBase64$", function() { return blobToBase64$; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
function base64ToArrayBuffer(base64) {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}
function arrayBufferToBase64(arrayBuffer) {
    return btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
}
function arrayBufferToHex(arrayBuffer) {
    return [...new Uint8Array(arrayBuffer)]
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}
function hexToArrayBuffer(hex) {
    // tslint:disable-next-line: no-non-null-assertion
    return new Uint8Array(hex.match(/[\da-f]{2}/gi).map(h => parseInt(h, 16))).buffer;
}
function stringToArrayBuffer(str) {
    return textEncoder.encode(str).buffer;
}
function arrayBufferToString(arrayBuffer) {
    return textDecoder.decode(arrayBuffer);
}
function base64ToBlob$(base64) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(() => fetch(base64)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(res => res.blob()));
}
function blobToBase64$(blob) {
    const fileReader = new FileReader();
    const subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    fileReader.onloadend = () => {
        subject$.next(fileReader.result);
        subject$.complete();
    };
    fileReader.readAsDataURL(blob);
    return subject$.asObservable();
}


/***/ }),

/***/ "fpah":
/*!*********************************************************************!*\
  !*** ./src/app/services/data/caption/caption-repository.service.ts ***!
  \*********************************************************************/
/*! exports provided: CaptionRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptionRepository", function() { return CaptionRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/rx-operators */ "KJy6");
/* harmony import */ var src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/storage/storage */ "rIbz");






let CaptionRepository = class CaptionRepository {
    constructor() {
        this.captionStorage = new src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]('caption');
    }
    getByProof$(proof) {
        return this.captionStorage.getAll$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(captions => captions.find(caption => caption.proofHash === proof.hash)));
    }
    addOrEdit$(value) {
        return this.captionStorage.getAll$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(captions => captions.find(caption => caption.proofHash === value.proofHash)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(found => {
            if (found) {
                return this.remove$(found);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(found);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMapTo"])(this.captionStorage.add$(value)));
    }
    removeByProof$(proof) {
        return this.getByProof$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_4__["isNonNullable"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(caption => this.remove$(caption)));
    }
    remove$(...captions) {
        return this.captionStorage.remove$(...captions);
    }
};
CaptionRepository = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CaptionRepository);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "nak+":
/*!***************************************************************!*\
  !*** ./src/app/services/notification/notification.service.ts ***!
  \***************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/background-task/background-task */ "no1F");






const { LocalNotifications } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let NotificationService = class NotificationService {
    constructor(translocoService) {
        this.translocoService = translocoService;
        this.currentId = 1;
        LocalNotifications.requestPermission()
            .then(result => console.log(`Notification permission request result: ${result.granted}`));
    }
    createNotificationId() {
        this.currentId++;
        return this.currentId;
    }
    // TODO: Add on-going configurations when this PR got merged and released:
    //       https://github.com/ionic-team/capacitor/pull/3165
    notify(id, title, body) {
        console.log(`${title}: ${body}`);
        Object(src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_5__["subscribeInBackground"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(() => LocalNotifications.schedule({
            notifications: [{ title, body, id }]
        })));
    }
    notifyError(id, error) {
        this.notify(id, this.translocoService.translate('unknownError'), JSON.stringify(error));
    }
    cancel(id) {
        Object(src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_5__["subscribeInBackground"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(() => LocalNotifications.cancel({ notifications: [{ id: String(id) }] })));
    }
};
NotificationService.ctorParameters = () => [
    { type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoService"] }
];
NotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotificationService);



/***/ }),

/***/ "no1F":
/*!**********************************************************!*\
  !*** ./src/app/utils/background-task/background-task.ts ***!
  \**********************************************************/
/*! exports provided: subscribeInBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeInBackground", function() { return subscribeInBackground; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "gcOT");

const { BackgroundTask } = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"];
function subscribeInBackground(work$, error, complete) {
    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Capacitor"].isPluginAvailable('BackgroundTask')) {
        const taskId = BackgroundTask.beforeExit(() => {
            work$.subscribe(_ => BackgroundTask.finish({ taskId }), error, complete);
        });
    }
    else {
        work$.subscribe(_ => _, error, complete);
    }
}


/***/ }),

/***/ "rIbz":
/*!******************************************!*\
  !*** ./src/app/utils/storage/storage.ts ***!
  \******************************************/
/*! exports provided: Storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _crypto_crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crypto/crypto */ "sWsZ");
/* harmony import */ var _rx_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rx-operators */ "KJy6");





const { Filesystem } = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"];
class Storage {
    constructor(name, directory = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["FilesystemDirectory"].Data) {
        this.name = name;
        this.directory = directory;
        this.tuples$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.hasInitialized = false;
    }
    checkInitialization$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(() => {
            if (this.hasInitialized) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(void 0);
            }
            else {
                return this.refresh$();
            }
        });
    }
    refresh$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(void 0).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.hasInitialized = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMapTo"])(this.makeNameDir$()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMapTo"])(this.readNameDir$()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('files'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(fileNames => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(fileNames)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(fileName => this.readFile$(fileName)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => JSON.parse(result.data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["toArray"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(tuples => this.tuples$.next(tuples)));
    }
    makeNameDir$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(() => Filesystem.mkdir({
            path: this.name,
            directory: this.directory,
            recursive: true
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(void 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            console.log(`${this.directory}/${this.name}: ${err.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(void 0);
        }));
    }
    readNameDir$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(() => Filesystem.readdir({
            path: this.name,
            directory: this.directory
        }));
    }
    readFile$(fileName) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(() => Filesystem.readFile({
            path: `${this.name}/${fileName}`,
            directory: this.directory,
            encoding: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["FilesystemEncoding"].UTF8
        }));
    }
    getAll$() {
        return this.checkInitialization$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMapTo"])(this.tuples$.asObservable()));
    }
    add$(...tuples) {
        return Object(_rx_operators__WEBPACK_IMPORTED_MODULE_4__["forkJoinWithDefault"])(tuples.map(tuple => this.saveFile$(tuple))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMapTo"])(this.checkInitialization$()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.tuples$.next([...this.tuples$.value, ...tuples])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(tuples));
    }
    saveFile$(tuple) {
        // XXX: Use sha256 is not a good idea as `sha256$()` uses `JSON.stringify()` under the hood.
        //      Thus, the order of the tuple (properties) will result in different hash if tuple is
        //      an array (object).
        return Object(_crypto_crypto__WEBPACK_IMPORTED_MODULE_3__["sha256$"])(tuple).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(hash => Filesystem.writeFile({
            path: `${this.name}/${hash}.json`,
            data: JSON.stringify(tuple),
            directory: this.directory,
            encoding: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["FilesystemEncoding"].UTF8,
            recursive: true
        })));
    }
    remove$(...tuples) {
        return Object(_rx_operators__WEBPACK_IMPORTED_MODULE_4__["forkJoinWithDefault"])(tuples.map(tuple => this.deleteFile$(tuple))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMapTo"])(this.refresh$()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(tuples));
    }
    deleteFile$(tuple) {
        // XXX: Use sha256 is not a good idea as `sha256$()` uses `JSON.stringify()` under the hood.
        //      Thus, the order of the tuple (properties) will result in different hash if tuple is
        //      an array (object).
        return Object(_crypto_crypto__WEBPACK_IMPORTED_MODULE_3__["sha256$"])(tuple).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(hash => Filesystem.deleteFile({
            path: `${this.name}/${hash}.json`,
            directory: this.directory
        })));
    }
}


/***/ }),

/***/ "sO7I":
/*!*********************************************************!*\
  !*** ./src/app/utils/preferences/preference-manager.ts ***!
  \*********************************************************/
/*! exports provided: PreferenceManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferenceManager", function() { return PreferenceManager; });
/* harmony import */ var _preferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preferences */ "D9E+");

class PreferenceManager {
}
PreferenceManager.LANGUAGE_PREF = new _preferences__WEBPACK_IMPORTED_MODULE_0__["Preferences"]("language" /* Language */);
PreferenceManager.DEFAULT_INFORMATION_PROVIDER_PREF = new _preferences__WEBPACK_IMPORTED_MODULE_0__["Preferences"]("defaultInformationProvider" /* DefaultInformationProvider */);
PreferenceManager.DEFAULT_SIGNATURE_PROVIDER_PREF = new _preferences__WEBPACK_IMPORTED_MODULE_0__["Preferences"]("defaultSignatureProvider" /* DefaultSignatureProvider */);


/***/ }),

/***/ "sWsZ":
/*!****************************************!*\
  !*** ./src/app/utils/crypto/crypto.ts ***!
  \****************************************/
/*! exports provided: sha256$, sha256WithString$, sha256WithBase64$, createEcKeyPair$, signWithSha256AndEcdsa$, verifyWithSha256AndEcdsa$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sha256$", function() { return sha256$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sha256WithString$", function() { return sha256WithString$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sha256WithBase64$", function() { return sha256WithBase64$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEcKeyPair$", function() { return createEcKeyPair$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signWithSha256AndEcdsa$", function() { return signWithSha256AndEcdsa$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyWithSha256AndEcdsa$", function() { return verifyWithSha256AndEcdsa$; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _encoding_encoding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoding/encoding */ "bw8K");



const subtle = crypto.subtle;
const SHA_256 = 'SHA-256';
const ECDSA = 'ECDSA';
const SECP256R1 = 'P-256';
/**
 * Use SHA-256 to hash the object.
 * @param object The target object. Note that the order of the object properties is sensitive.
 */
function sha256$(object) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(JSON.stringify(object)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(json => sha256WithString$(json)));
}
function sha256WithString$(str) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(new TextEncoder().encode(str).buffer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(arrayBuffer => subtle.digest(SHA_256, arrayBuffer)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(digested => Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["arrayBufferToHex"])(digested)));
}
function sha256WithBase64$(base64) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["base64ToArrayBuffer"])(base64)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(arrayBuffer => subtle.digest(SHA_256, arrayBuffer)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(digested => Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["arrayBufferToHex"])(digested)));
}
function createEcKeyPair$() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(() => subtle.generateKey({
        name: ECDSA,
        namedCurve: SECP256R1
    }, true, ["sign" /* Sign */, "verify" /* Verify */])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(({ publicKey, privateKey }) => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["zip"])(exportEcdsaPublicKey$(publicKey), exportEcdsaPrivateKey$(privateKey))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(([publicKey, privateKey]) => ({ publicKey, privateKey })));
}
function signWithSha256AndEcdsa$(message, privateKeyHex) {
    return importEcdsaPrivateKey$(privateKeyHex).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(key => subtle.sign({ name: ECDSA, hash: SHA_256 }, key, Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["stringToArrayBuffer"])(message))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(signature => Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["arrayBufferToHex"])(signature)));
}
function verifyWithSha256AndEcdsa$(message, signatureHex, publicKeyHex) {
    return importEcdsaPublicKey$(publicKeyHex).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(key => subtle.verify({ name: ECDSA, hash: SHA_256 }, key, Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["hexToArrayBuffer"])(signatureHex), Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["stringToArrayBuffer"])(message))));
}
function exportEcdsaPublicKey$(key) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(() => subtle.exportKey("spki" /* SubjectPublicKeyInfo */, key)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(arrayBuffer => Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["arrayBufferToHex"])(arrayBuffer)));
}
function exportEcdsaPrivateKey$(key) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(() => subtle.exportKey("pkcs8" /* PKCS8 */, key)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(arrayBuffer => Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["arrayBufferToHex"])(arrayBuffer)));
}
function importEcdsaPublicKey$(keyHex) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(() => subtle.importKey("spki" /* SubjectPublicKeyInfo */, Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["hexToArrayBuffer"])(keyHex), {
        name: ECDSA,
        hash: SHA_256,
        namedCurve: SECP256R1
    }, true, ["verify" /* Verify */]));
}
function importEcdsaPrivateKey$(keyHex) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(() => subtle.importKey("pkcs8" /* PKCS8 */, Object(_encoding_encoding__WEBPACK_IMPORTED_MODULE_2__["hexToArrayBuffer"])(keyHex), {
        name: ECDSA,
        hash: SHA_256,
        namedCurve: SECP256R1
    }, true, ["sign" /* Sign */]));
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [{
        path: '',
        redirectTo: 'storage',
        pathMatch: 'full'
    },
    {
        path: 'storage',
        loadChildren: () => Promise.all(/*! import() | pages-storage-storage-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-storage-storage-module")]).then(__webpack_require__.bind(null, /*! ./pages/storage/storage.module */ "rZjt")).then(m => m.StoragePageModule)
    },
    {
        path: 'settings',
        loadChildren: () => Promise.all(/*! import() | pages-settings-settings-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-settings-settings-module")]).then(__webpack_require__.bind(null, /*! ./pages/settings/settings.module */ "yPrK")).then(m => m.SettingsPageModule)
    }, {
        path: 'proof',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-proof-proof-module */ "pages-proof-proof-module").then(__webpack_require__.bind(null, /*! ./pages/proof/proof.module */ "d0DS")).then(m => m.ProofPageModule)
    }, {
        path: 'information',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-information-information-module */ "pages-information-information-module").then(__webpack_require__.bind(null, /*! ./pages/information/information.module */ "gSC0")).then(m => m.InformationPageModule)
    }, {
        path: 'general',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-general-general-module */ "pages-general-general-module").then(__webpack_require__.bind(null, /*! ./pages/general/general.module */ "yebe")).then(m => m.GeneralPageModule)
    }, {
        path: 'defaultinformationprovider',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => __webpack_require__.e(/*! import() | pages-defaultinformationprovider-defaultinformationprovider-module */ "pages-defaultinformationprovider-defaultinformationprovider-module").then(__webpack_require__.bind(null, /*! ./pages/defaultinformationprovider/defaultinformationprovider.module */ "RoSL")).then(m => m.DefaultInformationProviderPageModule)
    }, {
        path: 'defaultsignature',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-defaultsignature-defaultsignature-module */ "pages-defaultsignature-defaultsignature-module").then(__webpack_require__.bind(null, /*! ./pages/defaultsignature/defaultsignature.module */ "HaGY")).then(m => m.DefaultSignaturePageModule)
    }, {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-about-about-module */ "pages-about-about-module").then(__webpack_require__.bind(null, /*! ./pages/about/about.module */ "UoYK")).then(m => m.AboutPageModule)
    }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"],
                relativeLinkResolution: 'corrected'
            })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "xH0/":
/*!*************************************************!*\
  !*** ./src/app/services/publisher/publisher.ts ***!
  \*************************************************/
/*! exports provided: Publisher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Publisher", function() { return Publisher; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/background-task/background-task */ "no1F");


class Publisher {
    constructor(translocoService, notificationService) {
        this.translocoService = translocoService;
        this.notificationService = notificationService;
    }
    publish(proof) {
        const notificationId = this.notificationService.createNotificationId();
        this.notificationService.notify(notificationId, this.translocoService.translate('publishingProof'), this.translocoService.translate('message.publishingProof', { hash: proof.hash, publisherName: this.name }));
        Object(src_app_utils_background_task_background_task__WEBPACK_IMPORTED_MODULE_1__["subscribeInBackground"])(this.run$(proof).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(_ => this.notificationService.notify(notificationId, this.translocoService.translate('proofPublished'), this.translocoService.translate('message.proofPublished', { hash: proof.hash, publisherName: this.name })))), error => this.notificationService.notifyError(notificationId, error));
    }
}


/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "z1Mc":
/*!*****************************************************************!*\
  !*** ./src/app/services/data/proof/proof-repository.service.ts ***!
  \*****************************************************************/
/*! exports provided: ProofRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProofRepository", function() { return ProofRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_utils_crypto_crypto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/crypto/crypto */ "sWsZ");
/* harmony import */ var src_app_utils_encoding_encoding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/encoding/encoding */ "bw8K");
/* harmony import */ var src_app_utils_mime_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/mime-type */ "AumY");
/* harmony import */ var src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/rx-operators */ "KJy6");
/* harmony import */ var src_app_utils_storage_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/utils/storage/storage */ "rIbz");
/* harmony import */ var _caption_caption_repository_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../caption/caption-repository.service */ "fpah");
/* harmony import */ var _information_information_repository_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../information/information-repository.service */ "7IEa");
/* harmony import */ var _signature_signature_repository_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../signature/signature-repository.service */ "PJNO");













const { Filesystem } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
// @ts-ignore
const ImageBlobReduce = __webpack_require__(/*! image-blob-reduce */ "WiYX")();
let ProofRepository = class ProofRepository {
    constructor(captionRepository, informationRepository, signatureRepository) {
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
    getAll$() { return this.proofStorage.getAll$(); }
    getByHash$(hash) {
        return this.getAll$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(proofList => proofList.find(proof => proof.hash === hash)));
    }
    add$(...proofs) { return this.proofStorage.add$(...proofs); }
    remove$(...proofs) {
        return this.proofStorage.remove$(...proofs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMapTo"])(Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_8__["forkJoinWithDefault"])(proofs.map(proof => this.deleteRawFile$(proof)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMapTo"])(Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_8__["forkJoinWithDefault"])(proofs.map(proof => this.captionRepository.removeByProof$(proof)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMapTo"])(Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_8__["forkJoinWithDefault"])(proofs.map(proof => this.informationRepository.removeByProof$(proof)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMapTo"])(Object(src_app_utils_rx_operators__WEBPACK_IMPORTED_MODULE_8__["forkJoinWithDefault"])(proofs.map(proof => this.signatureRepository.removeByProof$(proof)))));
    }
    getRawFile$(proof) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(() => Filesystem.readFile({
            path: `${this.rawFileFolderName}/${proof.hash}.${Object(src_app_utils_mime_type__WEBPACK_IMPORTED_MODULE_7__["getExtension"])(proof.mimeType)}`,
            directory: this.rawFileDir
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('data'));
    }
    /**
     * Copy [rawBase64] to add raw file to internal storage.
     * @param rawBase64 The original source of raw file which will be copied.
     * @param mimeType The file added in the internal storage. The name of the returned file will be its hash with original extension.
     */
    saveRawFile$(rawBase64, mimeType) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"])(this._saveRawFile$(rawBase64, mimeType), this.generateAndSaveThumbnailFile$(rawBase64, mimeType)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([rawUri, _]) => rawUri));
    }
    _saveRawFile$(rawBase64, mimeType) {
        return Object(src_app_utils_crypto_crypto__WEBPACK_IMPORTED_MODULE_5__["sha256WithBase64$"])(rawBase64).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(hash => Filesystem.writeFile({
            path: `${this.rawFileFolderName}/${hash}.${Object(src_app_utils_mime_type__WEBPACK_IMPORTED_MODULE_7__["getExtension"])(mimeType)}`,
            data: rawBase64,
            directory: this.rawFileDir,
            recursive: true
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('uri'));
    }
    deleteRawFile$(proof) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(() => Filesystem.deleteFile({
            path: `${this.rawFileFolderName}/${proof.hash}.${Object(src_app_utils_mime_type__WEBPACK_IMPORTED_MODULE_7__["getExtension"])(proof.mimeType)}`,
            directory: this.rawFileDir
        }));
    }
    getThumbnail$(proof) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(() => Filesystem.readFile({
            path: `${this.thumbnailFileFolderName}/${proof.hash}.${Object(src_app_utils_mime_type__WEBPACK_IMPORTED_MODULE_7__["getExtension"])(proof.mimeType)}`,
            directory: this.thumbnailFileDir
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('data'));
    }
    generateAndSaveThumbnailFile$(rawBase64, mimeType) {
        return Object(src_app_utils_encoding_encoding__WEBPACK_IMPORTED_MODULE_6__["base64ToBlob$"])(`data:${mimeType};base64,${rawBase64}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(rawImageBlob => ImageBlobReduce.toBlob(rawImageBlob, { max: this.thumbnailSize })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(thumbnailBlob => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"])(Object(src_app_utils_encoding_encoding__WEBPACK_IMPORTED_MODULE_6__["blobToBase64$"])(thumbnailBlob), Object(src_app_utils_crypto_crypto__WEBPACK_IMPORTED_MODULE_5__["sha256WithBase64$"])(rawBase64))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([thumbnailBase64, hash]) => Filesystem.writeFile({
            path: `${this.thumbnailFileFolderName}/${hash}.${Object(src_app_utils_mime_type__WEBPACK_IMPORTED_MODULE_7__["getExtension"])(mimeType)}`,
            data: thumbnailBase64,
            directory: this.thumbnailFileDir,
            recursive: true
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('uri'));
    }
};
ProofRepository.ctorParameters = () => [
    { type: _caption_caption_repository_service__WEBPACK_IMPORTED_MODULE_10__["CaptionRepository"] },
    { type: _information_information_repository_service__WEBPACK_IMPORTED_MODULE_11__["InformationRepository"] },
    { type: _signature_signature_repository_service__WEBPACK_IMPORTED_MODULE_12__["SignatureRepository"] }
];
ProofRepository = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProofRepository);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ "2Zi2");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "AytR");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));
Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map