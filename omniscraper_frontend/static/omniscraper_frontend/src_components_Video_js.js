/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkomniscraper_frontend"] = self["webpackChunkomniscraper_frontend"] || []).push([["src_components_Video_js"],{

/***/ "./node_modules/@material-ui/icons/ArrowDownward.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/icons/ArrowDownward.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar React = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@material-ui/icons/utils/createSvgIcon.js\"));\n\nvar _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement(\"path\", {\n  d: \"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z\"\n}), 'ArrowDownward');\n\nexports.default = _default;\n\n//# sourceURL=webpack://omniscraper_frontend/./node_modules/@material-ui/icons/ArrowDownward.js?");

/***/ }),

/***/ "./node_modules/@material-ui/icons/Twitter.js":
/*!****************************************************!*\
  !*** ./node_modules/@material-ui/icons/Twitter.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar React = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@material-ui/icons/utils/createSvgIcon.js\"));\n\nvar _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement(\"path\", {\n  d: \"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z\"\n}), 'Twitter');\n\nexports.default = _default;\n\n//# sourceURL=webpack://omniscraper_frontend/./node_modules/@material-ui/icons/Twitter.js?");

/***/ }),

/***/ "./src/components/Video.js":
/*!*********************************!*\
  !*** ./src/components/Video.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Video\": () => (/* binding */ Video),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/Hidden/Hidden.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/Card/Card.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/CardActionArea/CardActionArea.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/CardActions/CardActions.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/Button/Button.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/styles/withStyles.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ \"./node_modules/@material-ui/icons/ArrowDownward.js\");\n/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Twitter */ \"./node_modules/@material-ui/icons/Twitter.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      flex: 1,\n      paddingTop: 100,\n      margin: \"auto\",\n      width: \"80vw\",\n      display: \"flex\",\n      justifyContent: \"center\"\n    } // buttons: {\n    //   border: \"1px solid #185adb\",\n    //   color: \"#185adb\",\n    // },\n\n  };\n};\n\nvar Video = /*#__PURE__*/function (_Component) {\n  _inherits(Video, _Component);\n\n  var _super = _createSuper(Video);\n\n  function Video() {\n    var _this;\n\n    _classCallCheck(this, Video);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      error: false,\n      loading: false,\n      video: {}\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"UNSAFE_componentWillMount\", function () {\n      _this.loadVideo();\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"loadVideo\", function () {\n      _this.setState({\n        loading: true\n      }, function () {\n        var slug = _this.props.match.params.slug; // const url = `http://127.0.0.1:8000/api/${slug}`;\n\n        var url = \"https://omniscraper-dev.herokuapp.com/api/\".concat(slug);\n        axios__WEBPACK_IMPORTED_MODULE_0___default().get(url).then(function (res) {\n          _this.setState({\n            video: res.data\n          });\n        })[\"catch\"](function (err) {\n          return _this.setState({\n            error: err.message,\n            loading: false\n          });\n        });\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"downloadVideo\", function (video) {\n      var url = video.url;\n      var slug = video.slug;\n      axios__WEBPACK_IMPORTED_MODULE_0___default().get({\n        url: url,\n        responseType: \"blob\"\n      }).then(function (response) {\n        var url = window.URL.createObjectURL(new Blob([response.data], {\n          type: \"video/mp4\"\n        }));\n        var link = document.createElement(\"a\");\n        link.href = url;\n        link.download = \"\".concat(slug, \".mp4\");\n        document.body.appendChild(link);\n        link.click();\n        window.URL.revokeObjectURL(url);\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(Video, [{\n    key: \"render\",\n    value: function render() {\n      var downloadVideo = this.downloadVideo;\n      var video = this.state.video;\n      var classes = this.props.classes;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n        className: classes.root\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.default, {\n        mdDown: true\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.default, {\n        style: {\n          width: 640\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {\n        component: \"video\",\n        height: \"360\",\n        src: video.url,\n        style: {\n          objectFit: \"contain\"\n        },\n        controls: true,\n        disablePictureInPicture: true,\n        controlsList: \"nodownload\",\n        onContextMenu: function onContextMenu(e) {\n          return e.preventDefault();\n        }\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {\n        style: {\n          display: \"flex\",\n          justifyContent: \"space-between\"\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {\n        size: \"small\",\n        color: \"primary\",\n        startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_8__.default, null),\n        href: \"https://twitter.com/i/status/\".concat(video.parent_tweet_id),\n        target: \"_blank\",\n        rel: \"noopener noreferrer\"\n      }, \"Source\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {\n        size: \"small\",\n        color: \"primary\",\n        variant: \"outlined\",\n        startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_9__.default, null),\n        onClick: function onClick() {\n          return downloadVideo(video);\n        }\n      }, \"Download\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.default, {\n        mdUp: true\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.default, {\n        style: {\n          width: \"100%\"\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {\n        component: \"video\" // height=\"60vh\"\n        ,\n        src: video.url,\n        style: {\n          objectFit: \"contain\",\n          height: \"75vh\"\n        },\n        controls: true,\n        disablePictureInPicture: true,\n        controlsList: \"nodownload\",\n        onContextMenu: function onContextMenu(e) {\n          return e.preventDefault();\n        }\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {\n        style: {\n          display: \"flex\",\n          justifyContent: \"space-between\"\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {\n        size: \"small\",\n        color: \"primary\",\n        style: {\n          color: \"#185adb\",\n          fontFamily: \"inherit\"\n        },\n        startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_8__.default, null),\n        href: \"https://twitter.com/i/status/\".concat(video.parent_tweet_id),\n        target: \"_blank\",\n        rel: \"noopener noreferrer\"\n      }, \"Source\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {\n        size: \"small\",\n        color: \"primary\",\n        variant: \"outlined\",\n        className: classes.buttons,\n        style: {\n          fontFamily: \"inherit\"\n        },\n        startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_9__.default, null),\n        onClick: function onClick() {\n          return downloadVideo(video);\n        }\n      }, \"Download\")))));\n    }\n  }]);\n\n  return Video;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default)(styles)((0,react_router__WEBPACK_IMPORTED_MODULE_11__.withRouter)(Video)));\n\n//# sourceURL=webpack://omniscraper_frontend/./src/components/Video.js?");

/***/ })

}]);