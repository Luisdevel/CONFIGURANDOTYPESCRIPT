/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/19-validando-formulário/index.ts":
/*!**********************************************!*\
  !*** ./src/19-validando-formulário/index.ts ***!
  \**********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../34-interfaces-e-classes/index */ "./src/34-interfaces-e-classes/index.ts");


/***/ }),

/***/ "./src/34-interfaces-e-classes/index.ts":
/*!**********************************************!*\
  !*** ./src/34-interfaces-e-classes/index.ts ***!
  \**********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var VideoPlayer = (function () {
    function VideoPlayer(videoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.playButton = videoPlayerElements.playButton;
        this.stopButton = videoPlayerElements.stopButton;
    }
    VideoPlayer.prototype.startEvent = function () {
        var _this = this;
        this.playButton.addEventListener('click', function () {
            _this.playToggle();
        });
        this.stopButton.addEventListener('click', function () {
            _this.videoPlayer.pause();
            _this.videoPlayer.currentTime = 0;
            _this.playButton.innerText = 'Play';
        });
    };
    VideoPlayer.prototype.playToggle = function () {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playButton.innerText = 'Pause';
        }
        else {
            this.videoPlayer.pause();
            this.playButton.innerText = 'Play';
        }
    };
    VideoPlayer.prototype.stop = function () {
    };
    return VideoPlayer;
}());
exports.default = VideoPlayer;
var videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector('.video'),
    playButton: document.querySelector('.play'),
    stopButton: document.querySelector('.stop'),
});
videoPlayer.startEvent();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/19-validando-formulário/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map