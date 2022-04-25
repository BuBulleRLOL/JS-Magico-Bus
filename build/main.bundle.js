/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Router.js":
/*!***********************!*\
  !*** ./src/Router.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Router; }
/* harmony export */ });
/* harmony import */ var _pages_PageDuJeu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/PageDuJeu */ "./src/pages/PageDuJeu.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }



var Router = /*#__PURE__*/function () {
  function Router() {
    _classCallCheck(this, Router);
  }

  _createClass(Router, null, [{
    key: "navigate",

    /**
     * Navigue dans l'application
     * Affiche la page correspondant à `path` dans le tableau `routes`
     * @param {String} path URL de la page courante
     * @param {Boolean} pushState active/désactive le pushState (ajout d'une entrée dans l'historique de navigation)
     */
    value: function navigate(path) {
      var pushState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var route = this.routes.find(function (route) {
        return route.path === path;
      });

      if (route) {
        var _route$page$mount, _route$page;

        this.titleElement.innerHTML = "<h1>".concat(route.title, "</h1>");
        this.contentElement.innerHTML = route.page.render();
        (_route$page$mount = (_route$page = route.page).mount) === null || _route$page$mount === void 0 ? void 0 : _route$page$mount.call(_route$page, this.contentElement); // gestion menu (classe "active")

        var menuLink = _classStaticPrivateFieldSpecGet(this, Router, _menuElement).querySelector("a[href=\"".concat(route.path, "\"]")),
            prevActiveLink = _classStaticPrivateFieldSpecGet(this, Router, _menuElement).querySelector('a.active');

        prevActiveLink === null || prevActiveLink === void 0 ? void 0 : prevActiveLink.classList.remove('active');
        menuLink === null || menuLink === void 0 ? void 0 : menuLink.classList.add('active');
      } else if (path.includes("/detail-")) {
        var _page$mount;

        this.titleElement.innerHTML = "<h1>D\xE9tails</h1>";
        var page = new _pages_PageDuJeu__WEBPACK_IMPORTED_MODULE_0__.default(path.split("detail-")[1]);
        this.contentElement.innerHTML = page.render();
        (_page$mount = page.mount) === null || _page$mount === void 0 ? void 0 : _page$mount.call(page, this.contentElement);
      } else this.navigate("/404");

      if (pushState) {
        window.history.pushState(null, null, path);
      }
    }
  }, {
    key: "menuElement",

    /**
     * Indique au Router la balise HTML contenant le menu de navigation
     * Écoute le clic sur chaque lien et déclenche la méthode navigate
     * @param element Élément HTML de la page qui contient le menu principal
     */
    set: function set(element) {
      var _this = this;

      _classStaticPrivateFieldSpecSet(this, Router, _menuElement, element);

      var links = element.querySelectorAll('a');
      links.forEach(function (link) {
        return link.addEventListener('click', function (event) {
          event.preventDefault();

          _this.navigate(event.target.getAttribute('href'));
        });
      });
    }
  }]);

  return Router;
}();

_defineProperty(Router, "titleElement", void 0);

_defineProperty(Router, "contentElement", void 0);

var _menuElement = {
  writable: true,
  value: void 0
};

_defineProperty(Router, "routes", []);



/***/ }),

/***/ "./src/components/Component.js":
/*!*************************************!*\
  !*** ./src/components/Component.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Component; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Component = /*#__PURE__*/function () {
  function Component(tagName, attribute, children) {
    _classCallCheck(this, Component);

    _defineProperty(this, "tagName", void 0);

    _defineProperty(this, "attribute", void 0);

    _defineProperty(this, "children", void 0);

    this.tagName = tagName;
    this.attribute = attribute;
    this.children = children;
  }

  _createClass(Component, [{
    key: "render",
    value: function render() {
      var html = "<".concat(this.tagName, " ").concat(this.renderAttributes());

      if (this.children) {
        html += ">".concat(this.renderChildren(), "</").concat(this.tagName, ">");
      } else {
        html += ' />';
      }

      return html;
    }
  }, {
    key: "renderAttributes",
    value: function renderAttributes() {
      if (this.attribute instanceof Array) {
        var response = "";

        for (var i = 0; i < this.attribute.length; i++) {
          response += "".concat(this.attribute[i].name, "=\"").concat(this.attribute[i].value, "\" ");
        }

        return response;
      } else if (this.attribute) {
        return "".concat(this.attribute.name, "=\"").concat(this.attribute.value, "\"");
      }

      return '';
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      if (this.children instanceof Array) {
        return this.children.reduce(function (html, child) {
          return html + (child instanceof Component ? child.render() : child);
        }, '');
      }

      return this.children || '';
    }
  }]);

  return Component;
}();



/***/ }),

/***/ "./src/components/GameThumbnail.js":
/*!*****************************************!*\
  !*** ./src/components/GameThumbnail.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GameThumbnail; }
/* harmony export */ });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ "./src/components/Component.js");
/* harmony import */ var _Img_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Img.js */ "./src/components/Img.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var GameThumbnail = /*#__PURE__*/function (_Component) {
  _inherits(GameThumbnail, _Component);

  var _super = _createSuper(GameThumbnail);

  function GameThumbnail(_ref) {
    var name = _ref.name,
        background_image = _ref.background_image,
        metacritic = _ref.metacritic,
        slug = _ref.slug;

    _classCallCheck(this, GameThumbnail);

    var favBouton = "../images/favoris.png";
    return _super.call(this, 'article', [{
      name: 'class',
      value: 'gameThumbnail'
    }, {
      name: 'id',
      value: "".concat(slug)
    }], [new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('a', {
      name: 'href',
      value: "/detail-".concat(slug)
    }, [new _Img_js__WEBPACK_IMPORTED_MODULE_1__.default(background_image, 250), new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('section', null, [new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('h4', null, name), new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('h4', null, [new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('p', null, "Metascore : ".concat(metacritic))]), new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('img', [{
      name: 'src',
      value: favBouton
    }, {
      name: 'id',
      value: 'imgTourne'
    }, {
      name: 'class',
      value: 'fav'
    }, {
      name: 'title',
      value: 'Ajout fav'
    }, {
      name: 'alt',
      value: name + "|" + slug
    }], null)])])]);
  }

  return GameThumbnail;
}(_Component_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/components/Img.js":
/*!*******************************!*\
  !*** ./src/components/Img.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Img; }
/* harmony export */ });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ "./src/components/Component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Img = /*#__PURE__*/function (_Component) {
  _inherits(Img, _Component);

  var _super = _createSuper(Img);

  function Img(url, size) {
    _classCallCheck(this, Img);

    return _super.call(this, 'img', [{
      name: 'src',
      value: url
    }, {
      name: 'width',
      value: size
    }, {
      name: 'height',
      value: 'auto'
    }]);
  }

  return Img;
}(_Component_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/components/JeuDetails.js":
/*!**************************************!*\
  !*** ./src/components/JeuDetails.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ JeuDetails; }
/* harmony export */ });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ "./src/components/Component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var JeuDetails = /*#__PURE__*/function (_Component) {
  _inherits(JeuDetails, _Component);

  var _super = _createSuper(JeuDetails);

  function JeuDetails(jeu) {
    _classCallCheck(this, JeuDetails);

    var name = jeu.name;
    var slug = jeu.slug;
    var description = jeu.description;
    var released = jeu.released;
    var rating = jeu.rating;
    var ratings = jeu.ratings;
    var parent_platforms = jeu.parent_platforms;
    var genres = jeu.genres;
    var tags = jeu.tags;
    var image = jeu.background_image;
    var favBouton = "../images/favoris.png";
    return _super.call(this, 'div', [{
      name: 'class',
      value: 'details'
    }, {
      name: 'id',
      value: "".concat(name)
    }], [
    /*new Component('img', null, {new Img(image,250)}),*/
    new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('h1', null, "".concat(name)), new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('h1', null, 'Ajouter Aux Favoris'), new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('img', [{
      name: 'src',
      value: favBouton
    }, {
      name: 'id',
      value: 'imgTourne'
    }, {
      name: 'class',
      value: 'fav'
    }, {
      name: 'title',
      value: 'Ajout fav'
    }, {
      name: 'alt',
      value: name + "|" + slug
    }], null), new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('h1', null, 'Rating'), new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('p', null, "".concat(rating)), new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('h1', null, 'Ratings'), new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('ul', null, ratings.map(function (rate) {
      return new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('li', null, "".concat(rate.title, " : ").concat(rate.count));
    })), new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('h1', null, 'Date de sortie'), new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('p', null, "".concat(released)), new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('h1', null, "Genres"), new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('ul', null, genres.map(function (genre) {
      return new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('li', null, "".concat(genre.name));
    })), new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('h1', null, 'Description'), new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('p', null, "".concat(description)), new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('h1', null, "Tags"), new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('ul', null, tags.map(function (tag) {
      return new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('li', null, "".concat(tag.name));
    })), new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('h1', null, 'Plateforms'), new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('ul', null, parent_platforms.map(function (plateform) {
      return new _Component_js__WEBPACK_IMPORTED_MODULE_0__.default('li', null, "".concat(plateform.platform.name));
    }))]);
  }

  return JeuDetails;
}(_Component_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/pages/Accueil.js":
/*!******************************!*\
  !*** ./src/pages/Accueil.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Accueil; }
/* harmony export */ });
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ "./src/pages/Page.js");
/* harmony import */ var _components_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Component */ "./src/components/Component.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Router */ "./src/Router.js");
/* harmony import */ var _components_GameThumbnail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GameThumbnail */ "./src/components/GameThumbnail.js");
/* harmony import */ var _Favoris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Favoris */ "./src/pages/Favoris.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }







var _jeux = new WeakMap();

var _numeroDeLaPage = new WeakMap();

var _nomDuJeu = new WeakMap();

var _nomDuJeuGenre = new WeakMap();

var _nomDuJeuOrdre = new WeakMap();

var _besoinDeViderLaPage = new WeakMap();

var _besoinDeNettoyerPageDaccueil = new WeakMap();

var _listeVide = new WeakMap();

var Accueil = /*#__PURE__*/function (_Page) {
  _inherits(Accueil, _Page);

  var _super = _createSuper(Accueil);

  //noms pour le formulaire
  function Accueil(jeux) {
    var _this;

    _classCallCheck(this, Accueil);

    _this = _super.call(this, 'PizzaList');

    _jeux.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _numeroDeLaPage.set(_assertThisInitialized(_this), {
      writable: true,
      value: 1
    });

    _nomDuJeu.set(_assertThisInitialized(_this), {
      writable: true,
      value: ""
    });

    _nomDuJeuGenre.set(_assertThisInitialized(_this), {
      writable: true,
      value: ""
    });

    _nomDuJeuOrdre.set(_assertThisInitialized(_this), {
      writable: true,
      value: ""
    });

    _besoinDeViderLaPage.set(_assertThisInitialized(_this), {
      writable: true,
      value: true
    });

    _besoinDeNettoyerPageDaccueil.set(_assertThisInitialized(_this), {
      writable: true,
      value: false
    });

    _listeVide.set(_assertThisInitialized(_this), {
      writable: true,
      value: ""
    });

    _this.jeux = jeux;
    return _this;
  }

  _createClass(Accueil, [{
    key: "mount",
    value: function mount(element) {
      var _this2 = this;

      _get(_getPrototypeOf(Accueil.prototype), "mount", this).call(this, element);

      if (_classPrivateFieldGet(this, _besoinDeViderLaPage)) {
        _classPrivateFieldSet(this, _besoinDeViderLaPage, false);

        _classPrivateFieldSet(this, _nomDuJeu, "");

        _classPrivateFieldSet(this, _nomDuJeuGenre, "");

        _classPrivateFieldSet(this, _nomDuJeuOrdre, "");

        _classPrivateFieldSet(this, _numeroDeLaPage, 1);

        this.faireEvenement();
      }

      if (_classPrivateFieldGet(this, _besoinDeNettoyerPageDaccueil)) {
        document.querySelector("#listGames").innerHTML = _classPrivateFieldGet(this, _listeVide);

        _classPrivateFieldSet(this, _besoinDeNettoyerPageDaccueil, false);
      } //on charge les jeux


      fetch("https://api.rawg.io/api/games?key=6d64d94371584642b5b60f3425eaa8d3&dates=2020-01-01,2100-01-01&metacritic=50,100&search=\"".concat(_classPrivateFieldGet(this, _nomDuJeu), "\"").concat(_classPrivateFieldGet(this, _nomDuJeuGenre)).concat(_classPrivateFieldGet(this, _nomDuJeuOrdre), "&page=").concat(_classPrivateFieldGet(this, _numeroDeLaPage))).then(function (response) {
        return response.json();
      }).then(function (e) {
        return e.results;
      }).then(function (responseJson) {
        _this2.games = responseJson;
        return responseJson;
      }).then(function (e) {
        return e.forEach(function (element) {
          document.querySelector("#listGames").innerHTML += new _components_GameThumbnail__WEBPACK_IMPORTED_MODULE_3__.default(element).render();
        });
      }).then(function (e) {
        (0,_Favoris__WEBPACK_IMPORTED_MODULE_4__.ajouterAuxFavoris)();
      }).then(function (e) {
        document.querySelectorAll(".gameThumbnail a").forEach(function (e) {
          e.addEventListener('click', function (event) {
            event.preventDefault();
            _Router__WEBPACK_IMPORTED_MODULE_2__.default.navigate('/detail-' + e.parentElement.id);
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      _classPrivateFieldSet(this, _besoinDeViderLaPage, true);

      return "\n\t\t\t\t<form class=\"formulaire\">\n\t\t\t\t<p>Retrouver un jeu\n\t\t\t\t\t\t<input name=\"recherche\" type=\"text\"/>\n\t\t\t\t\t\t<select name=\"genre\">\n\t\t\t\t\t\t\t<option value=\"selected\">les genres</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<select name=\"order\">\n\t\t\t\t\t\t\t<option value=\"&ordering=-pertinence\">pertinence</option>\n\t\t\t\t\t\t\t<option value=\"&ordering=-metacritic\">Note Metacritic</option>\n\t\t\t\t\t\t\t<option value=\"&ordering=-released\">Date de sortie</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t\t<button type=\"submit\">Rechercher</button></p>\n\t\t\t\t</form>\n\t\t\t\t<div id=\"listGames\">\n\n\t\t\t\t</div><br>" + new _components_Component__WEBPACK_IMPORTED_MODULE_1__.default("div", [{
        name: 'style',
        value: 'text-align:center; color:black;'
      }], new _components_Component__WEBPACK_IMPORTED_MODULE_1__.default("button", [{
        name: 'id',
        value: 'boutonJeuxSuivants'
      }, {
        name: 'style',
        value: 'background-color: grey ; border-radius: 10px ; border: 4px double #cccccc; font-size:30px ; width: 20% ;'
      }], "jeux suivants").render()).render();
    }
  }, {
    key: "faireEvenement",
    value: function faireEvenement() {
      var _this3 = this;

      this.element.querySelector('#boutonJeuxSuivants').addEventListener('click', function (e) {
        var _this$numeroDeLaPage;

        e.preventDefault();
        _classPrivateFieldSet(_this3, _numeroDeLaPage, (_this$numeroDeLaPage = +_classPrivateFieldGet(_this3, _numeroDeLaPage)) + 1), _this$numeroDeLaPage;

        _this3.mount(_this3.element);
      });
      var e = this.element.querySelector('select[name="genre"]');
      fetch("https://api.rawg.io/api/genres?key=6d64d94371584642b5b60f3425eaa8d3").then(function (reponse) {
        return reponse.json();
      }).then(function (e) {
        return e.results;
      }).then(function (responseJson) {
        return responseJson.forEach(function (element) {
          e.innerHTML += "<option value=\"&genres=".concat(element.slug, "\">").concat(element.name, "</option>");
        });
      });
      var form = this.element.querySelector('.formulaire');
      form.addEventListener('submit', function (event) {
        event.preventDefault();

        _classPrivateFieldSet(_this3, _nomDuJeu, _this3.element.querySelector('input[name="recherche"]').value + " ");

        _classPrivateFieldSet(_this3, _nomDuJeuOrdre, _this3.element.querySelector('select[name="order"]').value);

        _classPrivateFieldSet(_this3, _nomDuJeuGenre, _this3.element.querySelector('select[name="genre"]').value);

        _classPrivateFieldSet(_this3, _numeroDeLaPage, 1);

        _classPrivateFieldSet(_this3, _besoinDeNettoyerPageDaccueil, true);

        _this3.mount(_this3.element);
      });
    }
  }, {
    key: "jeux",
    set: function set(value) {
      _classPrivateFieldSet(this, _jeux, value);

      this.children = _classPrivateFieldGet(this, _jeux).map(function (jeux) {
        return new _components_GameThumbnail__WEBPACK_IMPORTED_MODULE_3__.default(jeux);
      });
    }
  }]);

  return Accueil;
}(_Page__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/pages/Favoris.js":
/*!******************************!*\
  !*** ./src/pages/Favoris.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Favoris; },
/* harmony export */   "ajouterAuxFavoris": function() { return /* binding */ ajouterAuxFavoris; }
/* harmony export */ });
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ "./src/pages/Page.js");
/* harmony import */ var _components_GameThumbnail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/GameThumbnail */ "./src/components/GameThumbnail.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Favoris = /*#__PURE__*/function (_Page) {
  _inherits(Favoris, _Page);

  var _super = _createSuper(Favoris);

  function Favoris() {
    _classCallCheck(this, Favoris);

    return _super.apply(this, arguments);
  }

  _createClass(Favoris, [{
    key: "render",

    /*#logoEstChange = false;*/
    value: function render() {
      return "\n\t\t\t\t<link rel=\"stylesheet\" href=\"css/favoris.css\">\n\t\t\t\t<div id=\"LesFavoris\"></div>";
    }
  }, {
    key: "mount",
    value: function mount(element) {
      JSON.parse(localStorage.getItem("GameNote_favs")).forEach(function (jeuFav) {
        fetch("https://api.rawg.io/api/games/" + jeuFav).then(function (response) {
          return response.json();
        }).then(function (e) {
          document.querySelector("#LesFavoris").innerHTML += new _components_GameThumbnail__WEBPACK_IMPORTED_MODULE_1__.default(e).render();
          ajouterAuxFavoris();
        });
      });
    }
  }]);

  return Favoris;
}(_Page__WEBPACK_IMPORTED_MODULE_0__.default);



function ajoutDansLocalStorage(boutonFav) {
  localStorage.clear();
  var nom = boutonFav.alt.split('|')[1];
  var favoris = JSON.parse(localStorage.getItem('GameNote_favs'));

  if (favoris != null) {
    if (favoris.includes(nom)) {
      //le retire
      supprimerDesFavoris(favoris, nom);
    } else {
      alert(nom + " ajouté");
      favoris.push(nom); // l'ajoute
    }
  } else {
    favoris = [nom]; //l'ajoute
  }

  localStorage.setItem("GameNote_favs", JSON.stringify(favoris));
}

function ajouterAuxFavoris()
/*logoEstChange*/
{
  /*changerLogoFavoris(logoEstChange);*/
  document.querySelectorAll(".fav").forEach(function (boutonFav) {
    boutonFav.addEventListener('click', function (event) {
      ajoutDansLocalStorage(boutonFav);
      event.preventDefault();
      event.stopImmediatePropagation();
    });
  });
}

function supprimerDesFavoris(favoris, nom) {
  var _document$querySelect;

  alert(nom + " supprimé");
  favoris.splice(favoris.indexOf(nom), 1);
  (_document$querySelect = document.querySelector("#" + nom)) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.remove();
}
/*function changerLogoFavoris(logoEstChange){
	if(!logoEstChange){
		logoEstChange = true;
		document.querySelectorAll(".fav").forEach(function(e){
			e.src = "../images/retirer-favoris.png";
		})
	}
	else{
		logoEstChange =false;
		document.querySelectorAll(".fav").forEach(function(e){
			e.src = "../images/favoris.png";
		})
	}
		}*/




/***/ }),

/***/ "./src/pages/Page.js":
/*!***************************!*\
  !*** ./src/pages/Page.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var _components_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Component */ "./src/components/Component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Page = /*#__PURE__*/function (_Component) {
  _inherits(Page, _Component);

  var _super = _createSuper(Page);

  function Page(className, children) {
    var _this;

    _classCallCheck(this, Page);

    _this = _super.call(this, 'section', {
      name: 'class',
      value: className
    }, children);

    _defineProperty(_assertThisInitialized(_this), "element", void 0);

    return _this;
  }

  _createClass(Page, [{
    key: "mount",
    value: function mount(element) {
      this.element = element;
    }
  }]);

  return Page;
}(_components_Component__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/pages/PageDuJeu.js":
/*!********************************!*\
  !*** ./src/pages/PageDuJeu.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PageDuJeu; }
/* harmony export */ });
/* harmony import */ var _components_JeuDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/JeuDetails */ "./src/components/JeuDetails.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page */ "./src/pages/Page.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var _slug = new WeakMap();

var _game = new WeakMap();

var PageDuJeu = /*#__PURE__*/function (_Page) {
  _inherits(PageDuJeu, _Page);

  var _super = _createSuper(PageDuJeu);

  function PageDuJeu(slug) {
    var _this;

    _classCallCheck(this, PageDuJeu);

    _this = _super.call(this);

    _slug.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _game.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _this.slug = slug;
    return _this;
  }

  _createClass(PageDuJeu, [{
    key: "render",
    value: function render() {
      return (
        /*html*/
        "\n\t\t<section id=\"PageDuJeu\"></section>"
      );
    }
  }, {
    key: "mount",
    value: function mount(element) {
      _get(_getPrototypeOf(PageDuJeu.prototype), "mount", this).call(this, element);

      fetch("https://api.rawg.io/api/games/".concat(this.slug)).then(function (response) {
        return response.json();
      }).then(function (game) {
        return new _components_JeuDetails__WEBPACK_IMPORTED_MODULE_0__.default(game);
      }).then(function (thumbnail) {
        return document.querySelector("#PageDuJeu").innerHTML += thumbnail.render();
      });
    }
  }]);

  return PageDuJeu;
}(_Page__WEBPACK_IMPORTED_MODULE_1__.default);



/***/ }),

/***/ "./src/pages/lequipe.js":
/*!******************************!*\
  !*** ./src/pages/lequipe.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ lequipe; }
/* harmony export */ });
/* harmony import */ var _Page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page.js */ "./src/pages/Page.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var lequipe = /*#__PURE__*/function (_Page) {
  _inherits(lequipe, _Page);

  var _super = _createSuper(lequipe);

  function lequipe() {
    _classCallCheck(this, lequipe);

    return _super.apply(this, arguments);
  }

  _createClass(lequipe, [{
    key: "render",
    value: function render() {
      return (
        /*html*/
        "\n                <link rel=\"stylesheet\" type=\"text/css\" href=\"css/equipe.css\" />\n                <link rel=\"stylesheet\" type=\"text/css\" href=\"css/main.css\" />\n                <table>\n                    <tr>\n                    <img id=\"img\" src=\"\" style=\"display: none\";>\n                <td>\n                <img id=\"img\" src=\"../images/portrait.png\">\n                <p>Carrette Tanguy</p>\n                <p>alias : Pitchoka</p>\n                <p>jeu vid\xE9o pr\xE9f\xE9r\xE9 : Portal 2 </p>\n                <p>Pourcentage de note : 100/3%</p>\n                </td>\n                </br>\n\n                <td>\n                <img id=\"img\" src=\"../images/portrait.png\">\n                <p>Senicourt Mathis</p>\n                <p>alias : Xtreme Neox</p>\n                <p>jeu vid\xE9o pr\xE9f\xE9r\xE9 : Subnautica</p>\n                <p>Pourcentage de note : 100/3%</p>\n                </td>\n                </br>\n\n                <td><img id=\"img\" src=\"../images/portrait.png\">\n                <p>De Buyst Harold</p><p>alias : Bubulle</p>\n                <p>jeu vid\xE9o pr\xE9f\xE9r\xE9 : Rocket League</p>\n                <p>Pourcentage de note : 100/3%</p>\n                </td>\n                </br>\n\n                </tr>\n                </table>\n                "
      );
    }
  }, {
    key: "mount",
    value: function mount(element) {
      _get(_getPrototypeOf(lequipe.prototype), "mount", this).call(this, element);

      var img = document.getElementById('img');
      var angle = 0;
      setInterval(function () {
        img.style.transform = "rotateZ(" + angle++ + "deg)";
      }, 30);
    }
  }]);

  return lequipe;
}(_Page_js__WEBPACK_IMPORTED_MODULE_0__.default);



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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router */ "./src/Router.js");
/* harmony import */ var _pages_Accueil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Accueil */ "./src/pages/Accueil.js");
/* harmony import */ var _pages_lequipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/lequipe */ "./src/pages/lequipe.js");
/* harmony import */ var _pages_Favoris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Favoris */ "./src/pages/Favoris.js");




var accueil = new _pages_Accueil__WEBPACK_IMPORTED_MODULE_1__.default([]);
var favoris = new _pages_Favoris__WEBPACK_IMPORTED_MODULE_3__.default();
var equipe = new _pages_lequipe__WEBPACK_IMPORTED_MODULE_2__.default();
_Router__WEBPACK_IMPORTED_MODULE_0__.default.titleElement = document.querySelector('.pageTitle');
_Router__WEBPACK_IMPORTED_MODULE_0__.default.contentElement = document.querySelector('.pageContent');
_Router__WEBPACK_IMPORTED_MODULE_0__.default.menuElement = document.querySelector('.mainMenu');
_Router__WEBPACK_IMPORTED_MODULE_0__.default.routes = [{
  path: '/',
  page: accueil,
  title: 'Les Jeux'
}, {
  path: '/mes-favoris',
  page: favoris,
  title: 'Mes favoris'
}, {
  path: '/lequipe',
  page: equipe,
  title: 'Notre équipe'
}];
document.querySelector('.logo').innerHTML += "<small> pour l'amour du jeu vid\xE9o</small>";

window.onpopstate = function () {
  return _Router__WEBPACK_IMPORTED_MODULE_0__.default.navigate(document.location.pathname, false);
};

window.onpopstate();
}();
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map