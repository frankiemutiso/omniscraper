/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkomniscraper_frontend"] = self["webpackChunkomniscraper_frontend"] || []).push([["src_components_FilteredVideos_js"],{

/***/ 7624:
/*!******************************************!*\
  !*** ./src/components/FilteredVideos.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ 282);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Card */ 8463);\n/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ 9738);\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/CardActions */ 1907);\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/CardMedia */ 951);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Grid */ 1749);\n/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ 4588);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ 7812);\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Dialog */ 2663);\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ 6083);\n/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogActions */ 6856);\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Menu */ 8396);\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/MenuItem */ 5639);\n/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogContent */ 9525);\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Checkbox */ 7145);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TextField */ 9803);\n/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Chip */ 9069);\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/Fab */ 3758);\n/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/Hidden */ 178);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core */ 2543);\n/* harmony import */ var _material_ui_icons_MovieOutlined__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/MovieOutlined */ 3101);\n/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ 8513);\n/* harmony import */ var _material_ui_icons_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/CheckBoxOutlineBlank */ 7149);\n/* harmony import */ var _material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/CheckBox */ 2810);\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/icons/Add */ 3957);\n/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Close */ 366);\n/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ 9957);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ 3727);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ 9669);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _axiosInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../axiosInstance */ 6755);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react-router */ 6550);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      color: \"#185adb\",\n      flex: 1,\n      marginRight: 40,\n      marginLeft: 40,\n      paddingTop: 100 // position: \"relative\",\n\n    },\n    spinner: {\n      color: \"#185adb\",\n      margin: 20\n    },\n    buttons: {\n      border: \"1px solid #185adb\",\n      color: \"#185adb\",\n      fontFamily: \"Montserrat\"\n    },\n    title: {\n      \"& h2\": {\n        fontFamily: \"inherit\",\n        fontWeight: 700\n      }\n    },\n    menuItemText: {\n      fontFamily: \"inherit\"\n    },\n    fab: {\n      margin: 0,\n      left: \"auto\",\n      top: \"auto\",\n      position: \"fixed\",\n      bottom: theme.spacing(2),\n      right: theme.spacing(2),\n      textTransform: \"none\"\n    },\n    closeButton: {\n      position: \"absolute\",\n      right: theme.spacing(1),\n      top: theme.spacing(1)\n    }\n  };\n};\n\nvar icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_3__.default, {\n  fontSize: \"small\"\n});\nvar checkedIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_4__.default, {\n  fontSize: \"small\",\n  color: \"primary\"\n});\nvar Home = /*#__PURE__*/function (_Component) {\n  _inherits(Home, _Component);\n\n  var _super = _createSuper(Home);\n\n  function Home(props) {\n    var _this;\n\n    _classCallCheck(this, Home);\n\n    _this = _super.call(this, props);\n\n    _defineProperty(_assertThisInitialized(_this), \"componentDidMount\", function () {\n      _this.loadVideos();\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"loadVideos\", function () {\n      var slug = _this.props.match.params.slug;\n      var url = \"\".concat(\"http://localhost:8000\", \"/api/tags/\").concat(slug);\n\n      _this.setState({\n        loading: true\n      }, function () {\n        axios__WEBPACK_IMPORTED_MODULE_1___default().get(url).then(function (res) {\n          var newVideos = res.data.videos;\n\n          _this.setState({\n            loading: false,\n            videos: [].concat(_toConsumableArray(_this.state.videos), _toConsumableArray(newVideos))\n          });\n        })[\"catch\"](function (err) {\n          _this.setState({\n            error: err.message,\n            loading: false\n          });\n        });\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"flagVideo\", function (video) {\n      var url = \"\".concat(video.slug);\n      var flagged = true;\n\n      _this.setState({\n        flagging: true\n      }, function () {\n        _axiosInstance__WEBPACK_IMPORTED_MODULE_2__.axiosInstance.put(url, {\n          id: video.id,\n          url: video.url,\n          parent_tweet_id: video.parent_tweet_id,\n          slug: video.slug,\n          flagged: flagged\n        }).then(function (response) {\n          if (response.status === 200) {\n            var newVideos = _this.state.videos.filter(function (v) {\n              return v.id !== video.id;\n            });\n\n            _this.setState({\n              flagging: false,\n              videos: newVideos\n            });\n\n            _this.handlePromptClose();\n          }\n        })[\"catch\"](function (err) {\n          _this.setState({\n            flagging: false\n          });\n\n          _this.handlePromptClose();\n        });\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleCreateTag\", function () {\n      var url = \"\".concat(\"http://localhost:8000\", \"/api/tags/\");\n      var _this$state = _this.state,\n          tagName = _this$state.tagName,\n          description = _this$state.description;\n\n      _this.setState({\n        creatingTag: true\n      }, function () {\n        _axiosInstance__WEBPACK_IMPORTED_MODULE_2__.axiosInstance.post(url, {\n          tag_name: tagName,\n          description: description\n        }).then(function (response) {\n          if (response.status === 201) {\n            _this.setState({\n              creatingTag: false\n            });\n\n            _this.handleCreateDialogClose();\n\n            _this.props.loadTags();\n          }\n        })[\"catch\"](function (err) {\n          console.log(err);\n\n          _this.setState({\n            creatingTag: false\n          });\n        });\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleMenuClick\", function (video, e) {\n      var videoTags = _this.props.videoTags;\n\n      _this.handleCheckedTags(videoTags, video);\n\n      _this.setState({\n        mouseX: e.clientX - 2,\n        mouseY: e.clientY - 4,\n        clickedVideo: video\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleMenuClose\", function () {\n      _this.setState({\n        mouseX: null,\n        mouseY: null,\n        clickedVideo: {}\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handlePromptOpen\", function () {\n      _this.setState({\n        open: true\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handlePromptClose\", function () {\n      _this.setState({\n        open: false\n      });\n\n      _this.handleMenuClose();\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleTagsDialogOpen\", function () {\n      _this.setState({\n        tagsDialogOpen: true\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleTagsDialogClose\", function () {\n      _this.setState({\n        tagsDialogOpen: false\n      });\n\n      _this.handleMenuClose();\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleCreateDialogOpen\", function () {\n      _this.setState({\n        createTagDialogOpen: true\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleCreateDialogClose\", function () {\n      _this.setState({\n        createTagDialogOpen: false,\n        tagName: \"\",\n        description: \"\"\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleTagChange\", function (e) {\n      _this.setState(_defineProperty({}, e.target.name, e.target.value));\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleSelectedTagsChange\", function (e, values) {\n      _this.setState({\n        selectedTagsIds: values.map(function (value) {\n          return value.id;\n        })\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleEditVideoTags\", function () {\n      var _this$state2 = _this.state,\n          selectedTagsIds = _this$state2.selectedTagsIds,\n          clickedVideo = _this$state2.clickedVideo;\n      var url = \"\".concat(\"http://localhost:8000\", \"/api/\").concat(clickedVideo.slug);\n\n      _this.setState({\n        editingVideoTags: true\n      }, function () {\n        _axiosInstance__WEBPACK_IMPORTED_MODULE_2__.axiosInstance.patch(url, {\n          tags: selectedTagsIds\n        }).then(function (res) {\n          console.log(res.status);\n\n          _this.setState({\n            editingVideoTags: false\n          });\n\n          _this.handleTagsDialogClose();\n        })[\"catch\"](function (err) {\n          console.log(err.message);\n\n          _this.setState({\n            editingVideoTags: false\n          });\n\n          _this.handleTagsDialogClose();\n        });\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleCheckedTags\", function (tags, clickedVideo) {\n      var checked = tags.filter(function (t) {\n        return clickedVideo.tags.includes(t.id);\n      });\n\n      _this.setState({\n        checkedTags: checked\n      });\n    });\n\n    _this.state = {\n      error: false,\n      loading: false,\n      videos: [],\n      loadingTags: false,\n      open: false,\n      clickedVideo: {},\n      flagging: false,\n      mouseX: null,\n      mouseY: null,\n      tagsDialogOpen: false,\n      createTagDialogOpen: false,\n      tagName: \"\",\n      description: \"\",\n      selectedTagsIds: [],\n      editingVideoTags: false,\n      slug: _this.props.match.params.slug\n    };\n    return _this;\n  }\n\n  _createClass(Home, [{\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      var _this2 = this;\n\n      if (prevProps.match.params.slug !== this.props.match.params.slug) {\n        this.setState({\n          slug: this.props.match.params.slug,\n          videos: []\n        }, function () {\n          return _this2.loadVideos();\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var _this$state3 = this.state,\n          error = _this$state3.error,\n          loading = _this$state3.loading,\n          hasMore = _this$state3.hasMore,\n          videos = _this$state3.videos,\n          open = _this$state3.open,\n          clickedVideo = _this$state3.clickedVideo,\n          flagging = _this$state3.flagging,\n          mouseX = _this$state3.mouseX,\n          mouseY = _this$state3.mouseY,\n          tagsDialogOpen = _this$state3.tagsDialogOpen,\n          createTagDialogOpen = _this$state3.createTagDialogOpen,\n          tagName = _this$state3.tagName,\n          description = _this$state3.description,\n          creatingTag = _this$state3.creatingTag,\n          selectedTagsIds = _this$state3.selectedTagsIds,\n          editingVideoTags = _this$state3.editingVideoTags,\n          checkedTags = _this$state3.checkedTags;\n      var _this$props = this.props,\n          classes = _this$props.classes,\n          loggedIn = _this$props.loggedIn,\n          videoTags = _this$props.videoTags;\n      var flagVideo = this.flagVideo,\n          handlePromptOpen = this.handlePromptOpen,\n          handlePromptClose = this.handlePromptClose,\n          handleMenuClick = this.handleMenuClick,\n          handleMenuClose = this.handleMenuClose,\n          handleTagsDialogOpen = this.handleTagsDialogOpen,\n          handleTagsDialogClose = this.handleTagsDialogClose,\n          handleCreateDialogOpen = this.handleCreateDialogOpen,\n          handleCreateDialogClose = this.handleCreateDialogClose,\n          handleTagChange = this.handleTagChange,\n          handleCreateTag = this.handleCreateTag,\n          handleSelectedTagsChange = this.handleSelectedTagsChange,\n          handleEditVideoTags = this.handleEditVideoTags,\n          handleCheckedTags = this.handleCheckedTags;\n      var createTagDialog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__.default, {\n        fullWidth: true,\n        open: createTagDialogOpen,\n        onClose: handleCreateDialogClose\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__.default, {\n        className: classes.title,\n        style: {\n          flex: 1,\n          display: \"flex\",\n          justifyContent: \"space-between\"\n        }\n      }, \"Create a tag\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__.default, {\n        className: classes.closeButton,\n        onClick: handleCreateDialogClose\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__.default, {\n        required: true,\n        variant: \"outlined\",\n        margin: \"normal\",\n        fullWidth: true,\n        label: \"Tag name\",\n        name: \"tagName\",\n        onChange: handleTagChange,\n        value: tagName\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__.default, {\n        variant: \"outlined\",\n        margin: \"normal\",\n        fullWidth: true,\n        label: \"Description (optional)\",\n        multiline: true,\n        name: \"description\",\n        onChange: handleTagChange,\n        value: description\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__.default, {\n        color: \"secondary\",\n        style: {\n          fontFamily: \"inherit\",\n          fontWeight: 600\n        },\n        onClick: handleCreateDialogClose\n      }, \"Cancel\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__.default, {\n        color: \"primary\",\n        variant: \"contained\",\n        autoFocus: true,\n        style: {\n          fontFamily: \"inherit\",\n          fontWeight: 600\n        },\n        onClick: handleCreateTag,\n        endIcon: creatingTag ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13__.default, {\n          size: 16,\n          color: \"white\"\n        }) : \"\"\n      }, \"Save\")));\n      var tagsDialog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__.default, {\n        open: tagsDialogOpen,\n        onClose: handleTagsDialogClose,\n        fullWidth: true\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__.default, {\n        className: classes.title\n      }, \"Edit video tags\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__.default, {\n        className: classes.closeButton,\n        onClick: handleTagsDialogClose\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_14__.default, {\n        fullWidth: true,\n        open: tagsDialogOpen,\n        multiple: true,\n        onChange: handleSelectedTagsChange,\n        options: videoTags,\n        defaultValue: checkedTags,\n        disableCloseOnSelect: true,\n        filterSelectedOptions: true,\n        getOptionLabel: function getOptionLabel(option) {\n          return option.tag_name;\n        },\n        renderOption: function renderOption(option, _ref) {\n          var selected = _ref.selected;\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__.default, {\n            icon: icon,\n            checkedIcon: checkedIcon,\n            style: {\n              marginRight: 8\n            },\n            checked: selected,\n            color: \"primary\"\n          }), option.tag_name);\n        },\n        style: {\n          width: \"100%\",\n          height: \"52vh\"\n        },\n        renderInput: function renderInput(params) {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__.default, _extends({}, params, {\n            variant: \"outlined\",\n            label: \"Tags\"\n          }));\n        }\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__.default, {\n        color: \"secondary\",\n        style: {\n          fontFamily: \"inherit\",\n          fontWeight: 600\n        },\n        onClick: handleTagsDialogClose\n      }, \"Cancel\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__.default, {\n        color: \"primary\",\n        variant: \"contained\",\n        autoFocus: true,\n        style: {\n          fontFamily: \"inherit\",\n          fontWeight: 600\n        },\n        onClick: handleEditVideoTags,\n        endIcon: editingVideoTags ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13__.default, {\n          size: 16,\n          color: \"white\"\n        }) : \"\"\n      }, \"Save\")));\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: classes.root\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_16__.default, {\n        keepMounted: true,\n        open: mouseY !== null,\n        onClose: handleMenuClose,\n        anchorReference: \"anchorPosition\",\n        anchorPosition: mouseY !== null && mouseX !== null ? {\n          top: mouseY,\n          left: mouseX\n        } : undefined\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17__.default, {\n        className: classes.menuItemText,\n        onClick: handlePromptOpen\n      }, \"Report\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17__.default, {\n        className: classes.menuItemText,\n        onClick: handleTagsDialogOpen\n      }, \"Edit video tags\")), tagsDialog, createTagDialog, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__.default, {\n        open: open,\n        onClose: handlePromptClose\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__.default, {\n        className: classes.title\n      }, \"Are you sure you want to report this video?\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__.default, {\n        onClick: handlePromptClose,\n        color: \"primary\",\n        style: {\n          fontFamily: \"inherit\"\n        }\n      }, \"Cancel\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__.default, {\n        onClick: function onClick() {\n          return flagVideo(clickedVideo);\n        },\n        color: \"secondary\",\n        variant: \"contained\",\n        autoFocus: true,\n        style: {\n          fontFamily: \"inherit\"\n        },\n        endIcon: flagging ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13__.default, {\n          size: 16,\n          color: \"white\"\n        }) : \"\"\n      }, \"Report\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, videoTags.map(function (tag) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_18__.default, {\n          to: \"/tags/\".concat(tag.slug),\n          component: react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link,\n          key: tag.tag_name,\n          label: tag.tag_name,\n          clickable: true,\n          color: \"primary\",\n          variant: _this3.props.clickedTag !== null && _this3.props.clickedTag.id == tag.id ? \"default\" : \"outlined\",\n          style: {\n            margin: 5\n          },\n          onClick: function onClick() {\n            return _this3.props.handleClickedTag(tag);\n          }\n        });\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__.default, {\n        container: true,\n        spacing: 6,\n        style: {\n          marginTop: 10\n        }\n      }, videos.map(function (video) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__.default, {\n          item: true,\n          lg: 3,\n          md: 6,\n          sm: 6,\n          xs: 12,\n          key: video.id\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_21__.default, {\n          style: {\n            maxWidth: 380\n          }\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_22__.default, {\n          component: react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link,\n          to: \"/\".concat(video.slug)\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_23__.default, {\n          component: \"video\",\n          height: \"160\",\n          disablePictureInPicture: true,\n          controlsList: \"nodownload\",\n          src: video.url,\n          style: {\n            objectFit: \"cover\"\n          },\n          onContextMenu: function onContextMenu(e) {\n            return e.preventDefault();\n          }\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_24__.default, {\n          style: {\n            display: \"flex\",\n            justifyContent: \"space-between\"\n          }\n        }, loggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__.default, {\n          size: \"small\",\n          color: \"primary\",\n          onClick: function onClick(e) {\n            return handleMenuClick(video, e);\n          }\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_25__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__.default, {\n          component: react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link,\n          to: \"/\".concat(video.slug),\n          size: \"small\",\n          variant: \"outlined\",\n          color: \"primary\",\n          startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_MovieOutlined__WEBPACK_IMPORTED_MODULE_26__.default, null),\n          className: classes.buttons,\n          style: {\n            fontFamily: \"inherit\",\n            marginLeft: \"auto\"\n          }\n        }, \"View\"))));\n      }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, error)), loggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_27__.default, {\n        mdDown: true\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_28__.default, {\n        className: classes.fab,\n        color: \"primary\",\n        variant: \"extended\",\n        size: \"medium\",\n        onClick: handleCreateDialogOpen\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_29__.default, {\n        style: {\n          marginRight: 8\n        }\n      }), \"Create tag\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_27__.default, {\n        mdUp: true\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_28__.default, {\n        className: classes.fab,\n        color: \"primary\",\n        onClick: handleCreateDialogOpen\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_29__.default, null)))), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        style: {\n          display: \"flex\",\n          justifyContent: \"center\",\n          alignItems: \"center\",\n          height: \"50px\",\n          margin: \"30px\"\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13__.default, {\n        className: classes.spinner\n      })));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router__WEBPACK_IMPORTED_MODULE_30__.withRouter)((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_31__.default)(styles)(Home)));\n\n//# sourceURL=webpack://omniscraper_frontend/./src/components/FilteredVideos.js?");

/***/ })

}]);