System.register([], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {


	return {

		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*********************************************************************************!*\
  !*** ./your-extensions/widgets/map-extent-connector/src/extensions/my-store.ts ***!
  \*********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyActionKeys: () => (/* binding */ MyActionKeys),
/* harmony export */   "default": () => (/* binding */ MyReduxStoreExtension)
/* harmony export */ });
var MyActionKeys;
(function (MyActionKeys) {
    MyActionKeys["SetExtent"] = "SET_EXTENT";
    MyActionKeys["SetId"] = "SET_ID";
})(MyActionKeys || (MyActionKeys = {}));
class MyReduxStoreExtension {
    constructor() {
        this.id = 'map-extent-connector-store-extension';
    }
    // Returns your redux actions
    getActions() {
        return Object.values(MyActionKeys);
    }
    // This returns the local state
    getInitLocalState() {
        return {
            savedExtent: null,
            savedWidgetId: null
        };
    }
    // This is the reducer and specifies how the application state changes in response to the actions
    getReducer() {
        return (localState, action, appState) => {
            switch (action.type) {
                case MyActionKeys.SetExtent:
                    return localState.set('savedExtent', action.val);
                case MyActionKeys.SetId:
                    return localState.set('savedWidgetId', action.val);
                default:
                    return localState;
            }
        };
    }
    // Return the local key for myState
    getStoreKey() {
        return 'myState';
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXAtZXh0ZW50LWNvbm5lY3Rvci9kaXN0L2V4dGVuc2lvbnMvbXktc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7QUNGbkQsSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3BCLHdDQUF3QjtJQUN4QixnQ0FBZ0I7QUFDcEIsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBc0NjLE1BQU0scUJBQXFCO0lBQTFDO1FBQ0ksT0FBRSxHQUFHLHNDQUFzQyxDQUFDO0lBa0NoRCxDQUFDO0lBaENHLDZCQUE2QjtJQUM3QixVQUFVO1FBQ04sT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN0QyxDQUFDO0lBRUQsK0JBQStCO0lBQy9CLGlCQUFpQjtRQUNiLE9BQU87WUFDSCxXQUFXLEVBQUUsSUFBSTtZQUNqQixhQUFhLEVBQUUsSUFBSTtTQUN0QjtJQUNMLENBQUM7SUFFRCxpR0FBaUc7SUFFakcsVUFBVTtRQUNOLE9BQU8sQ0FBQyxVQUFxQixFQUFFLE1BQW1CLEVBQUUsUUFBaUIsRUFBYSxFQUFFO1lBQ2hGLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNsQixLQUFLLFlBQVksQ0FBQyxTQUFTO29CQUN2QixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckQsS0FBSyxZQUFZLENBQUMsS0FBSztvQkFDbkIsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZEO29CQUNJLE9BQU8sVUFBVSxDQUFDO1lBQzFCLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFtQztJQUNuQyxXQUFXO1FBQ1AsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXAtZXh0ZW50LWNvbm5lY3Rvci9zcmMvZXh0ZW5zaW9ucy9teS1zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBleHRlbnNpb25TcGVjLCBJbW11dGFibGVPYmplY3QsIElNU3RhdGUgfSBmcm9tICdqaW11LWNvcmUnO1xyXG5cclxuZXhwb3J0IGVudW0gTXlBY3Rpb25LZXlzIHtcclxuICAgIFNldEV4dGVudCA9ICdTRVRfRVhURU5UJyxcclxuICAgIFNldElkID0gJ1NFVF9JRCdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXRFeHRlbnRBY3Rpb24ge1xyXG4gICAgdHlwZTogTXlBY3Rpb25LZXlzLlNldEV4dGVudFxyXG4gICAgdmFsOiBQbGFpbkV4dGVudFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldElkQWN0aW9uIHtcclxuICAgIHR5cGU6IE15QWN0aW9uS2V5cy5TZXRJZFxyXG4gICAgdmFsOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQWN0aW9uVHlwZXMgPSBTZXRFeHRlbnRBY3Rpb24gfCBTZXRJZEFjdGlvblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQbGFpbkV4dGVudCB7XHJcbiAgeG1pbjogbnVtYmVyXHJcbiAgeW1pbjogbnVtYmVyXHJcbiAgeG1heDogbnVtYmVyXHJcbiAgeW1heDogbnVtYmVyXHJcbiAgc3BhdGlhbFJlZmVyZW5jZToge1xyXG4gICAgd2tpZD86IG51bWJlclxyXG4gICAgd2t0Pzogc3RyaW5nXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE15U3RhdGUge1xyXG4gICAgc2F2ZWRFeHRlbnQ6IFBsYWluRXh0ZW50IHwgbnVsbDtcclxuICAgIHNhdmVkV2lkZ2V0SWQ6IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElNTXlTdGF0ZSA9IEltbXV0YWJsZU9iamVjdDxNeVN0YXRlPlxyXG5cclxuZGVjbGFyZSBtb2R1bGUgJ2ppbXUtY29yZS9saWIvdHlwZXMvc3RhdGUnIHtcclxuICAgIGludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICAgICAgbXlTdGF0ZT86IElNTXlTdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVJlZHV4U3RvcmVFeHRlbnNpb24gaW1wbGVtZW50cyBleHRlbnNpb25TcGVjLlJlZHV4U3RvcmVFeHRlbnNpb24ge1xyXG4gICAgaWQgPSAnbWFwLWV4dGVudC1jb25uZWN0b3Itc3RvcmUtZXh0ZW5zaW9uJztcclxuXHJcbiAgICAvLyBSZXR1cm5zIHlvdXIgcmVkdXggYWN0aW9uc1xyXG4gICAgZ2V0QWN0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhNeUFjdGlvbktleXMpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhpcyByZXR1cm5zIHRoZSBsb2NhbCBzdGF0ZVxyXG4gICAgZ2V0SW5pdExvY2FsU3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2F2ZWRFeHRlbnQ6IG51bGwsXHJcbiAgICAgICAgICAgIHNhdmVkV2lkZ2V0SWQ6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhpcyBpcyB0aGUgcmVkdWNlciBhbmQgc3BlY2lmaWVzIGhvdyB0aGUgYXBwbGljYXRpb24gc3RhdGUgY2hhbmdlcyBpbiByZXNwb25zZSB0byB0aGUgYWN0aW9uc1xyXG5cclxuICAgIGdldFJlZHVjZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChsb2NhbFN0YXRlOiBJTU15U3RhdGUsIGFjdGlvbjogQWN0aW9uVHlwZXMsIGFwcFN0YXRlOiBJTVN0YXRlKTogSU1NeVN0YXRlID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBNeUFjdGlvbktleXMuU2V0RXh0ZW50OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2NhbFN0YXRlLnNldCgnc2F2ZWRFeHRlbnQnLCBhY3Rpb24udmFsKTtcclxuICAgICAgICAgICAgICAgIGNhc2UgTXlBY3Rpb25LZXlzLlNldElkOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2NhbFN0YXRlLnNldCgnc2F2ZWRXaWRnZXRJZCcsIGFjdGlvbi52YWwpO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxTdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBsb2NhbCBrZXkgZm9yIG15U3RhdGVcclxuICAgIGdldFN0b3JlS2V5KCkge1xyXG4gICAgICAgIHJldHVybiAnbXlTdGF0ZSc7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=