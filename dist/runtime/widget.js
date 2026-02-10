System.register(["jimu-core","jimu-arcgis","esri/geometry/Extent"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry_Extent__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry_Extent__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry_Extent__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/map-extent-connector/src/extensions/my-store.ts":
/*!*********************************************************************************!*\
  !*** ./your-extensions/widgets/map-extent-connector/src/extensions/my-store.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ "@arcgis/core/geometry/Extent":
/*!***************************************!*\
  !*** external "esri/geometry/Extent" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry_Extent__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/map-extent-connector/src/runtime/widget.tsx ***!
  \*****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _extensions_my_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extensions/my-store */ "./your-extensions/widgets/map-extent-connector/src/extensions/my-store.ts");
/* harmony import */ var _arcgis_core_geometry_Extent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @arcgis/core/geometry/Extent */ "@arcgis/core/geometry/Extent");




function Widget(props) {
    var _a, _b, _c, _d, _e, _f;
    let extentWatcherAttached = false; // guard (module-level)
    console.log("Current widget id:", props.widgetId);
    console.log("useMapWidgetIds in props", props.useMapWidgetIds);
    // Code to Access Map Widget Id
    const state = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => state);
    const appConfig = state.appConfig;
    const appRuntimeInfo = state.appRuntimeInfo;
    console.log("appRuntimeInfo:", appRuntimeInfo);
    const activeViewId = (_b = (_a = appRuntimeInfo.sectionNavInfos) === null || _a === void 0 ? void 0 : _a.section_2) === null || _b === void 0 ? void 0 : _b.currentViewId;
    const activeLayoutId = (_d = (_c = appConfig.views[activeViewId]) === null || _c === void 0 ? void 0 : _c.layout) === null || _d === void 0 ? void 0 : _d.LARGE;
    var activeMapWidgetId = (_f = (_e = appConfig.layouts[activeLayoutId]) === null || _e === void 0 ? void 0 : _e.content[0]) === null || _f === void 0 ? void 0 : _f.widgetId;
    // Set the activeMapWidgetId for Jimu Map View Component processing
    if (!activeMapWidgetId) {
        activeMapWidgetId = 'widget_61';
    }
    console.log("active view id", activeViewId);
    console.log("active layout id", activeLayoutId);
    console.log("active map widget id", activeMapWidgetId);
    //console.log("Layout content", appConfig.layouts[activeLayoutId].content);
    const handleActiveViewChange = (jimuMapView) => {
        var _a;
        console.log("Handle Active View Change Triggered");
        if (!jimuMapView) {
            console.log("No JimuMapView yet");
            return;
        }
        const view = jimuMapView.view;
        console.log("view is: ", view);
        console.log("MapView loaded");
        console.log('View Extent:', view.extent.toJSON());
        console.log("Map id is ", jimuMapView.id);
        // If extent already exists zoom to the extent
        const firstStore = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)();
        const storedExtentJson = firstStore.getState();
        const storedExtent = (_a = storedExtentJson.myState) === null || _a === void 0 ? void 0 : _a.savedExtent;
        console.log("is there a stored extent:", storedExtent);
        if (storedExtent) {
            console.log("in extent set conditional");
            var extent = _arcgis_core_geometry_Extent__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(storedExtent);
            console.log("attempting to change extent to:", extent);
            view.when().then(() => {
                view.goTo(extent);
            });
            //var sample = view.extent.set(extent)
            //console.log("sample is", sample)
        }
        // Attach watcher only once
        if (extentWatcherAttached)
            return;
        extentWatcherAttached = true;
        // Correct EB dispatch to redux— THIS WORKS
        view.watch('stationary', (isStationary) => {
            var _a;
            if (!isStationary)
                return;
            const extentJSON = view.extent.toJSON();
            props.dispatch({
                type: _extensions_my_store__WEBPACK_IMPORTED_MODULE_2__.MyActionKeys.SetExtent,
                val: extentJSON
            });
            // ⭐ Immediately retrieve updated Redux state
            const reduxStore = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)();
            const reduxExtent = reduxStore.getState();
            console.log("saved Extent type:", (_a = reduxExtent.myState) === null || _a === void 0 ? void 0 : _a.savedExtent);
        });
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { padding: 10 } },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h4", null, " "),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: activeMapWidgetId, onActiveViewChange: handleActiveViewChange })));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXAtZXh0ZW50LWNvbm5lY3Rvci9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQVksWUFHWDtBQUhELFdBQVksWUFBWTtJQUNwQix3Q0FBd0I7SUFDeEIsZ0NBQWdCO0FBQ3BCLENBQUMsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QjtBQXNDYyxNQUFNLHFCQUFxQjtJQUExQztRQUNJLE9BQUUsR0FBRyxzQ0FBc0MsQ0FBQztJQWtDaEQsQ0FBQztJQWhDRyw2QkFBNkI7SUFDN0IsVUFBVTtRQUNOLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDdEMsQ0FBQztJQUVELCtCQUErQjtJQUMvQixpQkFBaUI7UUFDYixPQUFPO1lBQ0gsV0FBVyxFQUFFLElBQUk7WUFDakIsYUFBYSxFQUFFLElBQUk7U0FDdEI7SUFDTCxDQUFDO0lBRUQsaUdBQWlHO0lBRWpHLFVBQVU7UUFDTixPQUFPLENBQUMsVUFBcUIsRUFBRSxNQUFtQixFQUFFLFFBQWlCLEVBQWEsRUFBRTtZQUNoRixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbEIsS0FBSyxZQUFZLENBQUMsU0FBUztvQkFDdkIsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JELEtBQUssWUFBWSxDQUFDLEtBQUs7b0JBQ25CLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2RDtvQkFDSSxPQUFPLFVBQVUsQ0FBQztZQUMxQixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBbUM7SUFDbkMsV0FBVztRQUNQLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7O0FDOUVEOzs7Ozs7Ozs7OztBQ0FB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TywwQ0FBRSxXQUFXLENBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTCxvRUFBSyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1FBQ3pCLDJFQUFVO1FBQ04sMkRBQUMsNkRBQW9CLElBQ25CLGNBQWMsRUFBRyxpQkFBaUIsRUFDbEMsa0JBQWtCLEVBQUUsc0JBQXNCLEdBQzFDLENBQ0YsQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQUNPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hcC1leHRlbnQtY29ubmVjdG9yL3NyYy9leHRlbnNpb25zL215LXN0b3JlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9FeHRlbnRcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hcC1leHRlbnQtY29ubmVjdG9yL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5zaW9uU3BlYywgSW1tdXRhYmxlT2JqZWN0LCBJTVN0YXRlIH0gZnJvbSAnamltdS1jb3JlJztcclxuXHJcbmV4cG9ydCBlbnVtIE15QWN0aW9uS2V5cyB7XHJcbiAgICBTZXRFeHRlbnQgPSAnU0VUX0VYVEVOVCcsXHJcbiAgICBTZXRJZCA9ICdTRVRfSUQnXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2V0RXh0ZW50QWN0aW9uIHtcclxuICAgIHR5cGU6IE15QWN0aW9uS2V5cy5TZXRFeHRlbnRcclxuICAgIHZhbDogUGxhaW5FeHRlbnRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXRJZEFjdGlvbiB7XHJcbiAgICB0eXBlOiBNeUFjdGlvbktleXMuU2V0SWRcclxuICAgIHZhbDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEFjdGlvblR5cGVzID0gU2V0RXh0ZW50QWN0aW9uIHwgU2V0SWRBY3Rpb25cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGxhaW5FeHRlbnQge1xyXG4gIHhtaW46IG51bWJlclxyXG4gIHltaW46IG51bWJlclxyXG4gIHhtYXg6IG51bWJlclxyXG4gIHltYXg6IG51bWJlclxyXG4gIHNwYXRpYWxSZWZlcmVuY2U6IHtcclxuICAgIHdraWQ/OiBudW1iZXJcclxuICAgIHdrdD86IHN0cmluZ1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNeVN0YXRlIHtcclxuICAgIHNhdmVkRXh0ZW50OiBQbGFpbkV4dGVudCB8IG51bGw7XHJcbiAgICBzYXZlZFdpZGdldElkOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTU15U3RhdGUgPSBJbW11dGFibGVPYmplY3Q8TXlTdGF0ZT5cclxuXHJcbmRlY2xhcmUgbW9kdWxlICdqaW11LWNvcmUvbGliL3R5cGVzL3N0YXRlJyB7XHJcbiAgICBpbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgICAgIG15U3RhdGU/OiBJTU15U3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlSZWR1eFN0b3JlRXh0ZW5zaW9uIGltcGxlbWVudHMgZXh0ZW5zaW9uU3BlYy5SZWR1eFN0b3JlRXh0ZW5zaW9uIHtcclxuICAgIGlkID0gJ21hcC1leHRlbnQtY29ubmVjdG9yLXN0b3JlLWV4dGVuc2lvbic7XHJcblxyXG4gICAgLy8gUmV0dXJucyB5b3VyIHJlZHV4IGFjdGlvbnNcclxuICAgIGdldEFjdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoTXlBY3Rpb25LZXlzKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoaXMgcmV0dXJucyB0aGUgbG9jYWwgc3RhdGVcclxuICAgIGdldEluaXRMb2NhbFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNhdmVkRXh0ZW50OiBudWxsLFxyXG4gICAgICAgICAgICBzYXZlZFdpZGdldElkOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoaXMgaXMgdGhlIHJlZHVjZXIgYW5kIHNwZWNpZmllcyBob3cgdGhlIGFwcGxpY2F0aW9uIHN0YXRlIGNoYW5nZXMgaW4gcmVzcG9uc2UgdG8gdGhlIGFjdGlvbnNcclxuXHJcbiAgICBnZXRSZWR1Y2VyKCkge1xyXG4gICAgICAgIHJldHVybiAobG9jYWxTdGF0ZTogSU1NeVN0YXRlLCBhY3Rpb246IEFjdGlvblR5cGVzLCBhcHBTdGF0ZTogSU1TdGF0ZSk6IElNTXlTdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgTXlBY3Rpb25LZXlzLlNldEV4dGVudDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxTdGF0ZS5zZXQoJ3NhdmVkRXh0ZW50JywgYWN0aW9uLnZhbCk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE15QWN0aW9uS2V5cy5TZXRJZDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxTdGF0ZS5zZXQoJ3NhdmVkV2lkZ2V0SWQnLCBhY3Rpb24udmFsKTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsU3RhdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbG9jYWwga2V5IGZvciBteVN0YXRlXHJcbiAgICBnZXRTdG9yZUtleSgpIHtcclxuICAgICAgICByZXR1cm4gJ215U3RhdGUnO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9nZW9tZXRyeV9FeHRlbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgUmVhY3QsIFJlYWN0UmVkdXgsIEFsbFdpZGdldFByb3BzLCBJTVN0YXRlLCBnZXRBcHBTdG9yZSB9IGZyb20gJ2ppbXUtY29yZSc7XHJcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJztcclxuaW1wb3J0IE1hcFZpZXcgZnJvbSAnQGFyY2dpcy9jb3JlL3ZpZXdzL01hcFZpZXcnO1xyXG5pbXBvcnQgeyBNeUFjdGlvbktleXMgfSBmcm9tICcuLi9leHRlbnNpb25zL215LXN0b3JlJztcclxuaW1wb3J0IEV4dGVudCBmcm9tICdAYXJjZ2lzL2NvcmUvZ2VvbWV0cnkvRXh0ZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldChwcm9wczogQWxsV2lkZ2V0UHJvcHM8YW55Pikge1xyXG4gIGxldCBleHRlbnRXYXRjaGVyQXR0YWNoZWQgPSBmYWxzZTsgLy8gZ3VhcmQgKG1vZHVsZS1sZXZlbClcclxuXHJcbiAgY29uc29sZS5sb2coXCJDdXJyZW50IHdpZGdldCBpZDpcIiwgcHJvcHMud2lkZ2V0SWQpXHJcbiAgY29uc29sZS5sb2coXCJ1c2VNYXBXaWRnZXRJZHMgaW4gcHJvcHNcIiwgcHJvcHMudXNlTWFwV2lkZ2V0SWRzKVxyXG4gIC8vIENvZGUgdG8gQWNjZXNzIE1hcCBXaWRnZXQgSWRcclxuICBjb25zdCBzdGF0ZSA9IFJlYWN0UmVkdXgudXNlU2VsZWN0b3IoKHN0YXRlOiBJTVN0YXRlKSA9PiBzdGF0ZSk7XHJcblxyXG4gIGNvbnN0IGFwcENvbmZpZyA9IHN0YXRlLmFwcENvbmZpZztcclxuICBjb25zdCBhcHBSdW50aW1lSW5mbyA9IHN0YXRlLmFwcFJ1bnRpbWVJbmZvO1xyXG4gIGNvbnNvbGUubG9nKFwiYXBwUnVudGltZUluZm86XCIsIGFwcFJ1bnRpbWVJbmZvKTtcclxuICBjb25zdCBhY3RpdmVWaWV3SWQgPSBhcHBSdW50aW1lSW5mby5zZWN0aW9uTmF2SW5mb3M/LnNlY3Rpb25fMj8uY3VycmVudFZpZXdJZDtcclxuICBjb25zdCBhY3RpdmVMYXlvdXRJZCA9IGFwcENvbmZpZy52aWV3c1thY3RpdmVWaWV3SWRdPy5sYXlvdXQ/LkxBUkdFO1xyXG4gIHZhciBhY3RpdmVNYXBXaWRnZXRJZCA9IGFwcENvbmZpZy5sYXlvdXRzW2FjdGl2ZUxheW91dElkXT8uY29udGVudFswXT8ud2lkZ2V0SWQ7XHJcbiAgLy8gU2V0IHRoZSBhY3RpdmVNYXBXaWRnZXRJZCBmb3IgSmltdSBNYXAgVmlldyBDb21wb25lbnQgcHJvY2Vzc2luZ1xyXG4gIGlmICghYWN0aXZlTWFwV2lkZ2V0SWQpIHtcclxuICAgICAgYWN0aXZlTWFwV2lkZ2V0SWQgPSAnd2lkZ2V0XzYxJ1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coXCJhY3RpdmUgdmlldyBpZFwiLCBhY3RpdmVWaWV3SWQpO1xyXG4gIGNvbnNvbGUubG9nKFwiYWN0aXZlIGxheW91dCBpZFwiLCBhY3RpdmVMYXlvdXRJZCk7XHJcbiAgY29uc29sZS5sb2coXCJhY3RpdmUgbWFwIHdpZGdldCBpZFwiLCBhY3RpdmVNYXBXaWRnZXRJZCk7XHJcblxyXG4gXHJcblxyXG4gIC8vY29uc29sZS5sb2coXCJMYXlvdXQgY29udGVudFwiLCBhcHBDb25maWcubGF5b3V0c1thY3RpdmVMYXlvdXRJZF0uY29udGVudCk7XHJcbiAgY29uc3QgaGFuZGxlQWN0aXZlVmlld0NoYW5nZSA9IChqaW11TWFwVmlldzogSmltdU1hcFZpZXcpID0+IHtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJIYW5kbGUgQWN0aXZlIFZpZXcgQ2hhbmdlIFRyaWdnZXJlZFwiKVxyXG5cclxuICAgIGlmICghamltdU1hcFZpZXcpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJObyBKaW11TWFwVmlldyB5ZXRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldy52aWV3IGFzIE1hcFZpZXc7XHJcbiAgICBjb25zb2xlLmxvZyhcInZpZXcgaXM6IFwiLCB2aWV3KVxyXG4gICAgY29uc29sZS5sb2coXCJNYXBWaWV3IGxvYWRlZFwiKTtcclxuICAgIGNvbnNvbGUubG9nKCdWaWV3IEV4dGVudDonLCB2aWV3LmV4dGVudC50b0pTT04oKSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIk1hcCBpZCBpcyBcIiwgamltdU1hcFZpZXcuaWQpXHJcblxyXG4gICAgLy8gSWYgZXh0ZW50IGFscmVhZHkgZXhpc3RzIHpvb20gdG8gdGhlIGV4dGVudFxyXG4gICAgY29uc3QgZmlyc3RTdG9yZSA9IGdldEFwcFN0b3JlKCk7XHJcbiAgICBjb25zdCBzdG9yZWRFeHRlbnRKc29uID0gZmlyc3RTdG9yZS5nZXRTdGF0ZSgpO1xyXG4gICAgY29uc3Qgc3RvcmVkRXh0ZW50ID0gc3RvcmVkRXh0ZW50SnNvbi5teVN0YXRlPy5zYXZlZEV4dGVudDtcclxuICAgIGNvbnNvbGUubG9nKFwiaXMgdGhlcmUgYSBzdG9yZWQgZXh0ZW50OlwiLCBzdG9yZWRFeHRlbnQpO1xyXG4gICAgaWYgKHN0b3JlZEV4dGVudCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImluIGV4dGVudCBzZXQgY29uZGl0aW9uYWxcIilcclxuICAgICAgdmFyIGV4dGVudCA9IEV4dGVudC5mcm9tSlNPTihzdG9yZWRFeHRlbnQpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYXR0ZW1wdGluZyB0byBjaGFuZ2UgZXh0ZW50IHRvOlwiLCBleHRlbnQpXHJcblxyXG4gICAgICB2aWV3LndoZW4oKS50aGVuKCgpID0+IHtcclxuICAgICAgICB2aWV3LmdvVG8oZXh0ZW50KTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vdmFyIHNhbXBsZSA9IHZpZXcuZXh0ZW50LnNldChleHRlbnQpXHJcblxyXG4gICAgICAvL2NvbnNvbGUubG9nKFwic2FtcGxlIGlzXCIsIHNhbXBsZSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBBdHRhY2ggd2F0Y2hlciBvbmx5IG9uY2VcclxuICAgIGlmIChleHRlbnRXYXRjaGVyQXR0YWNoZWQpIHJldHVybjtcclxuICAgIGV4dGVudFdhdGNoZXJBdHRhY2hlZCA9IHRydWU7XHJcblxyXG4gICAgLy8gQ29ycmVjdCBFQiBkaXNwYXRjaCB0byByZWR1eOKAlCBUSElTIFdPUktTXHJcblxyXG4gICAgdmlldy53YXRjaCgnc3RhdGlvbmFyeScsIChpc1N0YXRpb25hcnkpID0+IHtcclxuICAgICAgaWYgKCFpc1N0YXRpb25hcnkpIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IGV4dGVudEpTT04gPSB2aWV3LmV4dGVudC50b0pTT04oKTtcclxuXHJcbiAgICAgIHByb3BzLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBNeUFjdGlvbktleXMuU2V0RXh0ZW50LFxyXG4gICAgICAgIHZhbDogZXh0ZW50SlNPTlxyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyDirZAgSW1tZWRpYXRlbHkgcmV0cmlldmUgdXBkYXRlZCBSZWR1eCBzdGF0ZVxyXG4gICAgICBjb25zdCByZWR1eFN0b3JlID0gZ2V0QXBwU3RvcmUoKTtcclxuICAgICAgY29uc3QgcmVkdXhFeHRlbnQgPSByZWR1eFN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic2F2ZWQgRXh0ZW50IHR5cGU6XCIsIHJlZHV4RXh0ZW50Lm15U3RhdGU/LnNhdmVkRXh0ZW50KTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMTAgfX0+XHJcbiAgICAgIDxoND4gPC9oND5cclxuICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD0ge2FjdGl2ZU1hcFdpZGdldElkfVxyXG4gICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2hhbmRsZUFjdGl2ZVZpZXdDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=