(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
})((function () { 'use strict';

	/**
	 * Get content from Body tag
	 *
	 * @param {*} html
	 * @returns
	 */
	function getBodyContent(html) {
	  var regBodyPattern = /^[\s\S]*<body[^\>]*>([\s\S]*)<\/body>[\s\S]*$/im;
	  var res = regBodyPattern.exec(html);
	  return res[1];
	}

	/**
	 * Decode HTML to String
	 *
	 * @param {*} html
	 */
	function decodeRollupUrl(html, type) {
	  var res = html.replace("data:text/".concat(type, ";base64,"), '');
	  return atob(res);
	}

	/**
	 * Get Random Color
	 */
	function getColor() {
	  // const randomColor = Math.floor(Math.random()*16777215).toString(16);
	  // const randomColor = Math.floor(Math.random() * (high - low + 1)) + low;

	  var r = Math.floor(Math.random() * (255 + 1));
	  var g = Math.floor(Math.random() * (255 + 1));
	  var b = Math.floor(Math.random() * (255 + 1));
	  var hr = r.toString(16).padStart(2, '0');
	  var hg = g.toString(16).padStart(2, '0');
	  var hb = b.toString(16).padStart(2, '0');
	  return '#' + hr + hg + hb;
	}

	/**
	 * Toggle Button
	 */

	var Btn = function Btn(cfg, ui) {
	  if (ui) {
	    var btn = ui.getElementById(cfg.btn.id);
	    if (btn) {
	      btn.addEventListener('click', function (e) {
	        e.preventDefault();
	        var panel = ui.getElementById(cfg.panel.id);
	        if (panel) {
	          panel.classList.toggle('active');
	        }
	      });
	    }
	  }
	};

	function _iterableToArrayLimit(arr, i) {
	  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
	  if (null != _i) {
	    var _s,
	      _e,
	      _x,
	      _r,
	      _arr = [],
	      _n = !0,
	      _d = !1;
	    try {
	      if (_x = (_i = _i.call(arr)).next, 0 === i) {
	        if (Object(_i) !== _i) return;
	        _n = !1;
	      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
	    } catch (err) {
	      _d = !0, _e = err;
	    } finally {
	      try {
	        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	    return _arr;
	  }
	}
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
	  }
	}
	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  Object.defineProperty(subClass, "prototype", {
	    writable: false
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}
	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}
	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };
	  return _setPrototypeOf(o, p);
	}
	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;
	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}
	function _construct(Parent, args, Class) {
	  if (_isNativeReflectConstruct()) {
	    _construct = Reflect.construct.bind();
	  } else {
	    _construct = function _construct(Parent, args, Class) {
	      var a = [null];
	      a.push.apply(a, args);
	      var Constructor = Function.bind.apply(Parent, a);
	      var instance = new Constructor();
	      if (Class) _setPrototypeOf(instance, Class.prototype);
	      return instance;
	    };
	  }
	  return _construct.apply(null, arguments);
	}
	function _isNativeFunction(fn) {
	  return Function.toString.call(fn).indexOf("[native code]") !== -1;
	}
	function _wrapNativeSuper(Class) {
	  var _cache = typeof Map === "function" ? new Map() : undefined;
	  _wrapNativeSuper = function _wrapNativeSuper(Class) {
	    if (Class === null || !_isNativeFunction(Class)) return Class;
	    if (typeof Class !== "function") {
	      throw new TypeError("Super expression must either be null or a function");
	    }
	    if (typeof _cache !== "undefined") {
	      if (_cache.has(Class)) return _cache.get(Class);
	      _cache.set(Class, Wrapper);
	    }
	    function Wrapper() {
	      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
	    }
	    Wrapper.prototype = Object.create(Class.prototype, {
	      constructor: {
	        value: Wrapper,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    return _setPrototypeOf(Wrapper, Class);
	  };
	  return _wrapNativeSuper(Class);
	}
	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	  return self;
	}
	function _possibleConstructorReturn(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }
	  return _assertThisInitialized(self);
	}
	function _createSuper(Derived) {
	  var hasNativeReflectConstruct = _isNativeReflectConstruct();
	  return function _createSuperInternal() {
	    var Super = _getPrototypeOf(Derived),
	      result;
	    if (hasNativeReflectConstruct) {
	      var NewTarget = _getPrototypeOf(this).constructor;
	      result = Reflect.construct(Super, arguments, NewTarget);
	    } else {
	      result = Super.apply(this, arguments);
	    }
	    return _possibleConstructorReturn(this, result);
	  };
	}
	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}
	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}
	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}
	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;
	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	  return arr2;
	}
	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _createForOfIteratorHelper(o, allowArrayLike) {
	  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
	  if (!it) {
	    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
	      if (it) o = it;
	      var i = 0;
	      var F = function () {};
	      return {
	        s: F,
	        n: function () {
	          if (i >= o.length) return {
	            done: true
	          };
	          return {
	            done: false,
	            value: o[i++]
	          };
	        },
	        e: function (e) {
	          throw e;
	        },
	        f: F
	      };
	    }
	    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }
	  var normalCompletion = true,
	    didErr = false,
	    err;
	  return {
	    s: function () {
	      it = it.call(o);
	    },
	    n: function () {
	      var step = it.next();
	      normalCompletion = step.done;
	      return step;
	    },
	    e: function (e) {
	      didErr = true;
	      err = e;
	    },
	    f: function () {
	      try {
	        if (!normalCompletion && it.return != null) it.return();
	      } finally {
	        if (didErr) throw err;
	      }
	    }
	  };
	}
	function _toPrimitive(input, hint) {
	  if (typeof input !== "object" || input === null) return input;
	  var prim = input[Symbol.toPrimitive];
	  if (prim !== undefined) {
	    var res = prim.call(input, hint || "default");
	    if (typeof res !== "object") return res;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return (hint === "string" ? String : Number)(input);
	}
	function _toPropertyKey(arg) {
	  var key = _toPrimitive(arg, "string");
	  return typeof key === "symbol" ? key : String(key);
	}

	/**
	 * Toggle Button
	 */

	var Datalist = function Datalist(ui) {
	  if (ui) {
	    var datalist = ui.getElementById('uie-elements-datalist');

	    // Get all unique tags
	    var allTags = [];
	    var _iterator = _createForOfIteratorHelper(document.body.getElementsByTagName('*')),
	      _step;
	    try {
	      for (_iterator.s(); !(_step = _iterator.n()).done;) {
	        var item = _step.value;
	        if (!allTags.includes(item.tagName)) {
	          allTags.push(item.tagName);
	        }
	      }

	      // Get all unique classes
	    } catch (err) {
	      _iterator.e(err);
	    } finally {
	      _iterator.f();
	    }
	    var allClasses = [];
	    var allIds = [];
	    var allElements = document.querySelectorAll('*');
	    for (var i = 0; i < allElements.length; i++) {
	      var classes = allElements[i].className.toString().split(/\s+/);
	      for (var j = 0; j < classes.length; j++) {
	        var cls = classes[j];
	        if (cls && allClasses.indexOf('.' + cls) === -1) {
	          allClasses.push('.' + cls);
	        }
	      }
	      if (allElements[i].id) {
	        if (!allIds.includes('#' + allElements[i].id)) {
	          allIds.push('#' + allElements[i].id);
	        }
	      }
	    }
	    var allElems = [].concat(allTags, allClasses, allIds).sort();
	    var options = '';
	    allElems.forEach(function (item) {
	      options += "<option value=\"".concat(item, "\"></option>");
	    });
	    datalist.innerHTML = options;
	  }
	};

	var Panel = function Panel(cfg, ui) {
	  if (ui) {
	    var panel = ui.getElementById(cfg.panel.id);
	    if (panel) {
	      /**
	       * Hide Panel
	       */
	      var btnHide = ui.querySelector('.uie-top-header-action-btn');
	      if (btnHide) {
	        btnHide.addEventListener('click', function (e) {
	          e.preventDefault();
	          panel.classList.remove('active');
	        });
	      }

	      /**
	       * Hide Panel by Esc
	       */
	      document.addEventListener('keydown', function (e) {
	        if (e.code === 'Escape') {
	          panel.classList.remove('active');
	        }
	      });
	      document.addEventListener('click', function (e) {
	        var target = e.target;
	        if (target.tagName !== 'UI-EXPLORER') {
	          panel.classList.remove('active');
	        }
	      });

	      /**
	       * Show Hide Panel Sections
	       */
	      var btnAccordion = ui.querySelectorAll('.uie-accordion-action');
	      if (btnAccordion) {
	        btnAccordion.forEach(function (element) {
	          element.addEventListener('click', function (e) {
	            e.preventDefault();
	            var target = e.currentTarget;
	            target.classList.toggle('hide');
	          });
	        });
	      }
	    }
	    Datalist(ui);
	  }
	};

	/**
	 * Render Component UI
	 *
	 * @param {*} cfg
	 */
	function UI(cfg) {
	  initUIComponent(cfg);
	  var uiExplorer = document.querySelector('ui-explorer');
	  if (uiExplorer) {
	    return uiExplorer.shadowRoot;
	  }
	  return false;
	}
	function initUIComponent(cfg) {
	  // Get Frontend Resources
	  var btnHtml = cfg.btn.html;
	  var panelHtml = cfg.panel.html;
	  var mainStyles = cfg.styles;

	  // HTML template content
	  var newTpl = document.createElement('template');
	  newTpl.innerHTML = mainStyles + btnHtml + panelHtml;
	  var templateContent = newTpl.content;

	  /**
	   * UI Web Component
	   */
	  var UIExplorer = /*#__PURE__*/function (_HTMLElement) {
	    _inherits(UIExplorer, _HTMLElement);
	    var _super = _createSuper(UIExplorer);
	    function UIExplorer() {
	      var _this;
	      _classCallCheck(this, UIExplorer);
	      _this = _super.call(this);
	      var shadowRoot = _this.attachShadow({
	        mode: 'open'
	      });
	      shadowRoot.appendChild(templateContent.cloneNode(true));
	      return _this;
	    }
	    return _createClass(UIExplorer);
	  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)); // Add componet to Page
	  customElements.define('ui-explorer', UIExplorer);
	  var wcUie = document.createElement('ui-explorer');
	  document.body.appendChild(wcUie);
	}

	var DB = /*#__PURE__*/function () {
	  function DB() {
	    _classCallCheck(this, DB);
	  }
	  _createClass(DB, null, [{
	    key: "update",
	    value:
	    /**
	     * Update
	     *
	     */
	    function update(id, key, item) {
	      var val = key.replace("uie".concat(id), '');
	      var db = JSON.parse(localStorage.getItem('uie-db'));
	      var data = db[id].data;
	      for (var i = 0; i < data.length; i++) {
	        if (val === data[i].el) {
	          Object.assign(data[i], item);
	          break;
	        }
	      }
	      db[id].data = data;
	      localStorage.setItem('uie-db', JSON.stringify(db));
	    }

	    /**
	     * Add Record From DB
	     */
	  }, {
	    key: "add",
	    value: function add(id, key, item) {
	      var db = JSON.parse(localStorage.getItem('uie-db'));
	      var data = db[id].data;
	      var unique = true;
	      for (var i = 0; i < data.length; i++) {
	        var _item = data[i];
	        if (_item.el === key || _item.name === key) {
	          unique = false;
	          break;
	        }
	      }
	      if (unique) {
	        data.push(item);
	        db[id].data = data;
	        localStorage.setItem('uie-db', JSON.stringify(db));
	      }
	    }

	    /**
	     * Remove Record From DB
	     */
	  }, {
	    key: "remove",
	    value: function remove(id, key) {
	      var val = key.replace("uie".concat(id), '');
	      var db = JSON.parse(localStorage.getItem('uie-db'));
	      var data = db[id].data;
	      for (var i = 0; i < data.length; i++) {
	        var item = data[i];
	        if (item.el === val) {
	          data.splice(i, 1);
	          break;
	        }
	      }
	      db[id].data = data;
	      localStorage.setItem('uie-db', JSON.stringify(db));
	    }

	    /**
	     * Initialize database
	     */
	  }, {
	    key: "init",
	    value: function init(_ref) {
	      var data = _ref.data;
	      var db = localStorage.getItem('uie-db');

	      // Check is DB presented
	      if (!db) {
	        localStorage.setItem('uie-db', JSON.stringify(data));
	      }
	    }
	  }, {
	    key: "get",
	    value: function get(key) {
	      var data = JSON.parse(localStorage.getItem('uie-db'));
	      if (key) {
	        return data[key];
	      }
	      return data;
	    }
	  }]);
	  return DB;
	}();

	function tpl(str, labels) {
	  var res = str;
	  for (var _i = 0, _Object$entries = Object.entries(labels); _i < _Object$entries.length; _i++) {
	    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
	      key = _Object$entries$_i[0],
	      value = _Object$entries$_i[1];
	    res = res.replaceAll(key, value);
	  }
	  return res;
	}

	function Paint$1() {
	  function render() {
	    var data = DB.get();
	    paintOutlines(data);
	  }
	  function domReadyRender(e) {
	    render();
	  }

	  /**
	   * Check DOM loading
	   */
	  window.removeEventListener('DOMContentLoaded', domReadyRender);
	  window.addEventListener('DOMContentLoaded', domReadyRender);
	  render();
	}

	/**
	 * Paint Outlines
	 */
	function paintOutlines(data) {
	  var outlines = data.general.data.filter(function (i, n) {
	    return i.el === 'outlines';
	  });
	  var classNames = [];
	  if (outlines[0].active) {
	    data.outlines.data.forEach(function (item) {
	      if (item.active) {
	        var nodes = document.querySelectorAll(item.el);
	        if (nodes) {
	          nodes.forEach(function (element) {
	            var itemElname = item.el;
	            itemElname = itemElname.replaceAll('.', 'dot');
	            itemElname = itemElname.replaceAll('#', 'hash');
	            itemElname = itemElname.replaceAll(' ', '');
	            itemElname = itemElname.replaceAll('~', 'tld');
	            itemElname = itemElname.replaceAll('+', 'pls');
	            var className = "uie-outlines-".concat(itemElname);
	            element.classList.add(className);
	            classNames.push(".".concat(className, " { outline: ").concat(item.size, "px solid ").concat(item.color, "; }"));
	          });
	        }
	      }
	    });
	  }
	  setStyles(classNames);
	}

	/**
	 * Set Stiles
	 *
	 * @param {*} classNames
	 */
	function setStyles(classNames) {
	  if (classNames) {
	    var styles = classNames.join('');
	    var elStyles = document.querySelector('#uie-doc-styles');
	    if (elStyles) {
	      elStyles.innerHTML = styles;
	    } else {
	      var head = document.head || document.getElementsByTagName('head')[0];
	      var style = document.createElement('style');
	      style.setAttribute('id', 'uie-doc-styles');
	      head.appendChild(style);
	      style.appendChild(document.createTextNode(styles));
	    }
	  }
	}

	function Paint(cfg) {
	  function render() {
	    var dbID = 'mockup';
	    renderMockupTiles(cfg.styles, cfg.tile.html);

	    /**
	     * Actions on Mockup Tile
	     */
	    var mockupTile = document.querySelectorAll('uie-tile');
	    if (mockupTile) {
	      mockupTile.forEach(function (item) {
	        var element = item.shadowRoot.querySelector('.uie-mockup-tile');
	        if (element) {
	          var btnCrop = element.querySelector('.uie-mockup-tile-btn-crop');
	          var btnOffset = element.querySelector('.uie-mockup-tile-btn-offset');
	          var btnBW = element.querySelector('.uie-mockup-tile-btn-bw');
	          var btnMag = element.querySelector('.uie-mockup-tile-btn-magnet');
	          var img = element.querySelector('.uie-mockup-tile-img');
	          if (btnCrop && btnOffset && img) {
	            moveTile(element, btnCrop, btnOffset);
	            offsetImg(img, element, btnOffset);

	            /**
	            * Magnetize to related Layer
	            */
	            btnMag.addEventListener('click', function (e) {
	              e.preventDefault();
	              var target = e.currentTarget;
	              var parent = target.closest('.uie-mockup-tile');
	              var tmpEl = document.createElement('div');
	              tmpEl.classList.add('uie-tpm-position');
	              tmpEl.style.position = 'absolute';
	              tmpEl.style.top = parent.style.top;
	              tmpEl.style.left = parent.style.left;
	              tmpEl.style.display = 'block';
	              tmpEl.style.width = '1px';
	              tmpEl.style.height = '1px';
	              document.body.appendChild(tmpEl);
	              Magnetize(tmpEl, parent, dbID);
	              tmpEl.remove();
	              parent.focus();
	            });

	            /**
	            * Grayscale Image
	            */
	            btnBW.addEventListener('click', function (e) {
	              e.preventDefault();
	              var target = e.currentTarget;
	              var parent = target.closest('.uie-mockup-tile');
	              target.classList.toggle('active');
	              var grayscale = parent.classList.toggle('grayscale');
	              DB.update('mockup', parent.id, {
	                grayscale: grayscale
	              });
	            });

	            /**
	            * Crop
	            */
	            btnCrop.addEventListener('click', function (e) {
	              e.preventDefault();
	              var target = e.currentTarget;
	              var toggle = target.classList.toggle('active');
	              var parent = target.closest('.uie-mockup-tile');
	              parent.classList.remove('crop');
	              if (toggle) {
	                btnOffset.classList.remove('active');
	                parent.classList.add('crop'); // ref: https://stackoverflow.com/questions/8960193/how-to-make-html-element-resizable-using-pure-javascript
	              }
	            });

	            /**
	            * Offset
	            */
	            btnOffset.addEventListener('click', function (e) {
	              e.preventDefault();
	              var target = e.currentTarget;
	              var toggle = target.classList.toggle('active');
	              var parent = target.closest('.uie-mockup-tile');
	              parent.classList.remove('crop');
	              if (toggle) {
	                btnCrop.classList.remove('active');
	              }
	            });

	            /**
	            * Focus / Blur Element
	            */
	            element.addEventListener('focus', function (e) {
	              element.classList.add('active');
	            });
	            element.addEventListener('blur', function (e) {
	              if (!e.currentTarget.contains(e.relatedTarget)) {
	                element.classList.remove('active');
	                enableKeyboard();
	              } else {
	                element.focus();
	              }
	            });
	            var btnCtrl = false;
	            document.addEventListener('keydown', function (e) {
	              btnCtrl = false;
	              if (e.ctrlKey) {
	                btnCtrl = true;
	              }
	            });
	            document.addEventListener('keypress', function (e) {
	              if (e.ctrlKey) {
	                btnCtrl = true;
	              }
	            });
	            document.addEventListener('keyup', function (e) {
	              if (!e.ctrlKey) {
	                btnCtrl = false;
	              }
	            });

	            /**
	            * Keypress
	            */
	            element.addEventListener('keydown', function (e) {
	              disableKeyboard();
	              switch (e.keyCode) {
	                // Arrows
	                case 38:
	                  if (btnCtrl) {
	                    element.style.top = element.offsetTop - 10 + 'px';
	                  } else {
	                    element.style.top = element.offsetTop - 1 + 'px';
	                  }
	                  break;
	                case 40:
	                  if (btnCtrl) {
	                    element.style.top = element.offsetTop + 10 + 'px';
	                  } else {
	                    element.style.top = element.offsetTop + 1 + 'px';
	                  }
	                  break;
	                case 37:
	                  if (btnCtrl) {
	                    element.style.left = element.offsetLeft - 10 + 'px';
	                  } else {
	                    element.style.left = element.offsetLeft - 1 + 'px';
	                  }
	                  break;
	                case 39:
	                  if (btnCtrl) {
	                    element.style.left = element.offsetLeft + 10 + 'px';
	                  } else {
	                    element.style.left = element.offsetLeft + 1 + 'px';
	                  }
	                  break;

	                // Opacity
	                case 48:
	                  if (btnCtrl) {
	                    element.style.zIndex = 10000;
	                  } else {
	                    img.style.opacity = '1';
	                  }
	                  break;
	                case 49:
	                  if (btnCtrl) {
	                    element.style.zIndex = 0;
	                  } else {
	                    img.style.opacity = '0.1';
	                  }
	                  break;
	                case 50:
	                  if (btnCtrl) {
	                    element.style.zIndex = 200;
	                  } else {
	                    img.style.opacity = '0.2';
	                  }
	                  break;
	                case 51:
	                  if (btnCtrl) {
	                    element.style.zIndex = 300;
	                  } else {
	                    img.style.opacity = '0.3';
	                  }
	                  break;
	                case 52:
	                  if (btnCtrl) {
	                    element.style.zIndex = 400;
	                  } else {
	                    img.style.opacity = '0.4';
	                  }
	                  break;
	                case 53:
	                  if (btnCtrl) {
	                    element.style.zIndex = 500;
	                  } else {
	                    img.style.opacity = '0.5';
	                  }
	                  break;
	                case 54:
	                  if (btnCtrl) {
	                    element.style.zIndex = 600;
	                  } else {
	                    img.style.opacity = '0.6';
	                  }
	                  break;
	                case 55:
	                  if (btnCtrl) {
	                    element.style.zIndex = 700;
	                  } else {
	                    img.style.opacity = '0.7';
	                  }
	                  break;
	                case 56:
	                  if (btnCtrl) {
	                    element.style.zIndex = 800;
	                  } else {
	                    img.style.opacity = '0.8';
	                  }
	                  break;
	                case 57:
	                  if (btnCtrl) {
	                    element.style.zIndex = 1000;
	                  } else {
	                    img.style.opacity = '0.9';
	                  }
	                  break;
	              }
	              var key = element.id;
	              DB.update(dbID, key, {
	                position: {
	                  left: element.offsetLeft,
	                  top: element.offsetTop
	                }
	              });
	              DB.update(dbID, key, {
	                opacity: img.style.opacity
	              });
	              DB.update(dbID, key, {
	                zindex: parseInt(element.style.zIndex)
	              });

	              // 38 Up
	              // 40 Down
	              // 37 left
	              // 39 Right
	            });

	            element.addEventListener('keyup', function (e) {
	              enableKeyboard();
	            });
	          }
	        } // if element
	      }); // mockupTile.forEach(element => {
	    }
	  }

	  render();
	}

	/**
	 * Disable Keyboard
	 */
	function disableKeyboard() {
	  document.onkeydown = function (event) {
	    return false;
	  };
	}

	/**
	 * Enable Keyboard
	 */
	function enableKeyboard() {
	  document.onkeydown = function (event) {
	    return true;
	  };
	}

	/**
	 * Offset: Move Image
	 */
	function offsetImg(img, element, btnOffset) {
	  var localX = 0;
	  var localY = 0;
	  var shiftX = 0;
	  var shiftY = 0;
	  var mousedown = false;
	  element.onmousemove = function (e) {
	    // Local cursor position
	    localX = e.pageX - e.currentTarget.offsetLeft;
	    localY = e.pageY - e.currentTarget.offsetTop;
	    moveAt();
	  };
	  img.onmousedown = function (e) {
	    mousedown = true;

	    // Img cursor Down Position
	    shiftX = e.clientX - parseInt(img.getBoundingClientRect().left);
	    shiftY = e.clientY - parseInt(img.getBoundingClientRect().top);
	    moveAt();
	  };
	  function moveAt() {
	    var btnOffsetStatus = btnOffset.classList.contains('active');
	    if (btnOffsetStatus) {
	      if (mousedown) {
	        img.style.left = localX - shiftX + 'px';
	        img.style.top = localY - shiftY + 'px';
	      }
	    }
	  }

	  // drop the div, remove unneeded handlers
	  img.onmouseup = function (e) {
	    var target = e.currentTarget;
	    var parent = target.closest('.uie-mockup-tile');
	    DB.update('mockup', parent.id, {
	      offset: {
	        left: target.offsetLeft,
	        top: target.offsetTop
	      }
	    });
	    mousedown = false;
	  };
	  img.onmouseout = function (e) {
	    var target = e.currentTarget;
	    var parent = target.closest('.uie-mockup-tile');
	    DB.update('mockup', parent.id, {
	      offset: {
	        left: target.offsetLeft,
	        top: target.offsetTop
	      }
	    });
	    mousedown = false;
	  };
	  img.ondragstart = function () {
	    return false;
	  };
	  img.addEventListener('dblclick', function () {
	    var btnOffsetStatus = btnOffset.classList.contains('active');
	    if (btnOffsetStatus) {
	      img.style.left = 0;
	      img.style.top = 0;
	    }
	  });
	}

	/**
	 * Move Tile
	 */
	function moveTile(element, btnCrop, btnOffset) {
	  var mousedown = false;

	  /**
	   * Move Tile
	   * @param {*} event
	   */
	  element.onmousedown = function (event) {
	    mousedown = true;
	    var shiftX = event.clientX - parseInt(element.getBoundingClientRect().left);
	    var shiftY = event.clientY - parseInt(element.getBoundingClientRect().top);
	    moveAt(event.pageX, event.pageY);

	    // moves the div at (pageX, pageY) coordinates
	    // taking initial shifts into account
	    function moveAt(pageX, pageY) {
	      var btnCropStatus = btnCrop.classList.contains('active');
	      var btnOffsetStatus = btnOffset.classList.contains('active');
	      if (!btnCropStatus && !btnOffsetStatus) {
	        if (mousedown) {
	          element.style.left = pageX - shiftX + 'px';
	          element.style.top = pageY - shiftY + 'px';
	        }
	      }
	    }
	    function onMouseMove(event) {
	      moveAt(event.pageX, event.pageY);
	    }

	    // move the div on mousemove
	    document.addEventListener('mousemove', onMouseMove);

	    // drop the div, remove unneeded handlers
	    element.onmouseup = function (e) {
	      var target = e.currentTarget;
	      DB.update('mockup', target.id, {
	        position: {
	          left: target.offsetLeft,
	          top: target.offsetTop
	        }
	      });
	      DB.update('mockup', target.id, {
	        crop: {
	          width: target.offsetWidth,
	          height: target.offsetHeight
	        }
	      });
	      mousedown = false;
	      document.removeEventListener('mousemove', onMouseMove);
	      element.onmouseup = null;
	    };
	    element.onmouseout = function (e) {
	      var target = e.currentTarget;
	      DB.update('mockup', target.id, {
	        position: {
	          left: target.offsetLeft,
	          top: target.offsetTop
	        }
	      });
	      DB.update('mockup', target.id, {
	        crop: {
	          width: target.offsetWidth,
	          height: target.offsetHeight
	        }
	      });
	      mousedown = false;
	      document.removeEventListener('mousemove', onMouseMove);
	      element.onmouseup = null;
	    };
	  };
	  element.ondragstart = function () {
	    return false;
	  };
	}

	/**
	 * Magnetize Tile to Related Page Element
	 * @param {*} target
	 */
	function Magnetize(target, parent, dbID) {
	  var x = target.offsetLeft;
	  var y = target.offsetTop;
	  var ignore = ['UI-EXPLORER', 'UIE-TILE', 'BODY', 'HTML'];
	  var el = getAllElementsFromPoint(x, y, ignore);
	  if (el) {
	    var elMg = el[1];
	    if (elMg) {
	      parent.style.left = elMg.offsetLeft + 'px';
	      parent.style.top = elMg.offsetTop + 'px';
	      var key = parent.id;
	      DB.update(dbID, key, {
	        position: {
	          left: elMg.offsetLeft,
	          top: elMg.offsetTop
	        }
	      });
	    }
	  }
	}

	/**
	 * Get All Elements From Point
	 *
	 * @param {*} x
	 * @param {*} y
	 * @returns
	 */
	function getAllElementsFromPoint(x, y) {
	  var ignore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	  var stack = [];
	  var elementMouseIsOver = document.elementFromPoint(x, y);
	  if (elementMouseIsOver) {
	    stack.push(elementMouseIsOver);
	    while (elementMouseIsOver.tagName !== 'HTML') {
	      if (ignore) {
	        elementMouseIsOver.style.pointerEvents = 'none';
	        elementMouseIsOver = document.elementFromPoint(x, y);
	        stack.push(elementMouseIsOver);
	      }
	    }

	    /* Now clean it up */
	    var i = 0;
	    var il = stack.length;
	    for (; i < il; i += 1) {
	      stack[i].style.pointerEvents = '';
	    }
	    if (stack) {
	      var filteredStack = stack.filter(function (item) {
	        return !ignore.includes(item.tagName);
	      });
	      return filteredStack;
	    }
	  }
	  return false;
	}

	/**
	 * Paint Tiles
	 *
	 * @param {*} data
	 */
	function renderMockupTiles(styles, tile) {
	  // Clear Mockup Tiles
	  removeElements('uie-tile');
	  var visible = DB.get('general').data[1].active;
	  if (visible) {
	    var dbID = 'mockup';
	    var data = DB.get(dbID).data;

	    // Add Tiles to Document
	    data.forEach(function (node) {
	      var newTpl = document.createElement('uie-tile');
	      if (node.thumb) {
	        var uid = 'uie' + dbID + node.el;
	        newTpl.shadowRoot.innerHTML = styles + tpl(tile, {
	          '${id}': uid,
	          '${tilestatus}': getTileStatus(node.status),
	          'https://${src}': node.thumb,
	          '${styles}': "style=\"width:".concat(node.crop.width, "px; height:").concat(node.crop.height, "px; top: ").concat(node.position.top, "px; left: ").concat(node.position.left, "px; z-index: ").concat(node.zindex, "\""),
	          '${imgstyle}': "style=\"opacity:".concat(node.opacity, "; top: ").concat(node.offset.top, "px; left: ").concat(node.offset.left, "px;\""),
	          '${btnbw}': node.grayscale ? ' active ' : '',
	          '${statusbw}': node.grayscale ? ' grayscale ' : ''
	        });

	        // Append Element
	        document.body.appendChild(newTpl);
	      }
	    });
	  }
	}

	/**
	 * Remove All Elements by Class Name
	 *
	 * @param {*} className
	 */
	function removeElements(className) {
	  var elements = document.querySelectorAll(className);
	  elements.forEach(function (item) {
	    item.parentElement.removeChild(item);
	  });
	}

	/**
	 * Get tile status Class Name
	 *
	 * @param {*} status
	 */
	function getTileStatus(status) {
	  switch (status) {
	    case '1':
	      return ' hide ';
	    case '2':
	      return '';
	    case '3':
	      return ' noevents ';
	    default:
	      return '';
	  }
	}

	function Section$2(cfg, ui) {
	  var dbID = 'general';
	  var sectionId = '#uieGeneralContent';
	  var content = ui.innerHTML;
	  function render() {
	    // Clear Outline Section
	    var elSection = ui.querySelector(sectionId);
	    elSection.innerHTML = '';

	    // Get Outline element HTML
	    var parser = new DOMParser();
	    var docSection = parser.parseFromString(content, 'text/html');
	    var rawInnerHTML = docSection.querySelector(sectionId).innerHTML;

	    // Apply properties
	    var data = DB.get(dbID).data;
	    data.forEach(function (node) {
	      var newTpl = document.createElement('template');
	      newTpl.innerHTML = tpl(rawInnerHTML, {
	        '${id}': 'uie' + dbID + node.el,
	        '${cb_id}': 'uie' + dbID + node.el + 'Cb',
	        '${cb_val}': node.active ? ' checked ' : '',
	        '${title}': node.el,
	        '${keybind}': getKeyBind(node.keybind)
	      });

	      // Append Outline elements into the Panel
	      var templateContent = newTpl.content;
	      elSection.appendChild(templateContent.cloneNode(true));
	    });

	    /**
	     * Get Key Bind from Data
	     */
	    function getKeyBind(keybind) {
	      var s = '';
	      if (keybind) {
	        keybind.forEach(function (item) {
	          s += "<kbd>".concat(item, "</kbd>");
	        });
	      }
	      return s;
	    }

	    /**
	     * Toggle Visibility
	     */
	    var cbInputs = ui.querySelectorAll("".concat(sectionId, " .uie-checkbox"));
	    if (cbInputs) {
	      cbInputs.forEach(function (element) {
	        element.addEventListener('change', function (e) {
	          var target = e.target;
	          var parent = target.closest('.uie-panel-row');
	          var key = parent.id;
	          DB.update(dbID, key, {
	            active: target.checked
	          });
	          Paint$1();
	          Paint(cfg);
	        });
	      });
	    }
	  }

	  /**
	   * Show/Hide outlines by Keyboard shortcut
	   */
	  document.addEventListener('keydown', function (e) {
	    if (e.code === 'Backquote' && e.ctrlKey) {
	      var outlines = ui.querySelector("".concat(sectionId, " #uiegeneraloutlinesCb"));
	      if (outlines) {
	        outlines.checked ^= 1;
	        outlines.dispatchEvent(new Event('change'));
	        Paint$1();
	      }
	    }
	  });
	  render();
	}

	function Section$1(cfg, ui) {
	  Paint$1();
	  var dbID = 'outlines';
	  var blockId = '#uieOutlines';
	  var sectionId = '#uieOutlinesContent';
	  function render() {
	    // Clear Outline Section
	    var elSection = ui.querySelector(sectionId);
	    elSection.innerHTML = '';

	    // Get Outline element HTML
	    var parser = new DOMParser();
	    var docSection = parser.parseFromString(cfg.html, 'text/html');
	    var rawInnerHTML = docSection.querySelector(sectionId).innerHTML;

	    // Apply properties
	    var data = DB.get(dbID).data;
	    data.forEach(function (node) {
	      var newTpl = document.createElement('template');
	      newTpl.innerHTML = tpl(rawInnerHTML, {
	        '${id}': 'uie' + dbID + node.el,
	        '${cb_id}': 'uie' + dbID + node.el + 'Cb',
	        '${cb_val}': node.active ? ' checked ' : '',
	        '${title}': node.el,
	        '${id_color}': 'uie' + dbID + node.el + 'Color',
	        '${id_width}': 'uie' + dbID + node.el + 'Width',
	        '${id_color_val}': node.color,
	        '${id_width_val}': node.size,
	        '${shrink}': node.shrink ? ' hide ' : '',
	        'uie-bg-color': node.color
	      });

	      // Append Outline elements into the Panel
	      var templateContent = newTpl.content;
	      elSection.appendChild(templateContent.cloneNode(true));
	    });

	    /**
	     * Toggle Section Properties
	     */
	    var btnShrink = ui.querySelectorAll("".concat(sectionId, " .uie-btn-shrink"));
	    if (btnShrink) {
	      btnShrink.forEach(function (element) {
	        element.addEventListener('click', function (e) {
	          e.preventDefault();
	          var target = e.currentTarget;
	          var toggle = target.classList.toggle('hide');
	          var parent = target.closest('.uie-panel-row');
	          var key = parent.id;
	          DB.update(dbID, key, {
	            shrink: toggle
	          });
	        });
	      });
	    }

	    /**
	     * Remove Button
	     */
	    var btnRemove = ui.querySelectorAll("".concat(sectionId, " .uie-btn-remove"));
	    if (btnRemove) {
	      btnRemove.forEach(function (element) {
	        element.addEventListener('click', function (e) {
	          e.preventDefault();
	          var target = e.currentTarget;
	          var parent = target.closest('.uie-panel-row');
	          var key = parent.id;
	          DB.remove(dbID, key);
	          render();
	          Paint$1();
	        });
	      });
	    }

	    /**
	     * Add Button
	     */
	    var btnAddNew = ui.querySelector("".concat(blockId, " .uie-btn-add-new"));
	    var elInput = ui.querySelector('.uie-new-outline-input');
	    if (btnAddNew) {
	      btnAddNew.addEventListener('click', function (e) {
	        e.preventDefault();
	        getInput(elInput);
	      });
	    }

	    /**
	     * Input Enter
	     */
	    if (elInput) {
	      elInput.addEventListener('keypress', function (event) {
	        // If the user presses the "Enter" key on the keyboard
	        if (event.key === 'Enter') {
	          getInput(elInput);
	        }
	      });
	    }

	    /**
	     * Input action
	     *
	     * @param {*} elInput
	     */
	    function getInput(elInput) {
	      if (elInput && elInput.value) {
	        var val = elInput.value;
	        var elVal = document.querySelector(val);
	        if (elVal) {
	          var item = {
	            el: val,
	            active: true,
	            color: getColor(),
	            size: '1',
	            shrink: true
	          };
	          DB.add(dbID, val, item);
	          render();
	          Paint$1();
	        }
	        elInput.value = '';
	      }
	    }

	    /**
	     * Toggle Visibility
	     */
	    var cbInputs = ui.querySelectorAll("".concat(sectionId, " .uie-checkbox"));
	    if (cbInputs) {
	      cbInputs.forEach(function (element) {
	        element.addEventListener('change', function (e) {
	          var target = e.target;
	          var parent = target.closest('.uie-panel-row');
	          var key = parent.id;
	          DB.update(dbID, key, {
	            active: target.checked
	          });
	          Paint$1();
	        });
	      });
	    }

	    /**
	     * Change Outline Size
	     */
	    var inNumber = ui.querySelectorAll("".concat(sectionId, " .uie-number"));
	    if (inNumber) {
	      inNumber.forEach(function (element) {
	        element.addEventListener('change', function (e) {
	          var target = e.target;
	          var parent = target.closest('.uie-panel-row');
	          var key = parent.id;
	          DB.update(dbID, key, {
	            size: target.value
	          });
	          Paint$1();
	        });
	      });
	    }

	    /**
	     * Change Background
	     */
	    var inColor = ui.querySelectorAll("".concat(sectionId, " .uie-color"));
	    if (inColor) {
	      inColor.forEach(function (element) {
	        element.addEventListener('change', function (e) {
	          var target = e.target;
	          var parent = target.closest('.uie-panel-row');
	          var key = parent.id;
	          DB.update(dbID, key, {
	            color: target.value
	          });
	          render();
	          Paint$1();
	        });
	      });
	    }
	  }
	  render();
	}

	/**
	 * Define Tile Component
	 *
	 * @param {*} cfg
	 */
	function uiTile(cfg) {
	  // Get Frontend Resources
	  var mainStyles = "<style>@import url(\"".concat(cfg.styles, "\");</style>");
	  var tileHtml = cfg.tile.html;

	  // HTML template content
	  var newTpl = document.createElement('template');
	  newTpl.innerHTML = mainStyles + tileHtml;
	  var templateContent = newTpl.content;
	  var img = templateContent.querySelector('img');
	  img.setAttribute('src', '');

	  /**
	   * UI Web Component
	   */
	  var TileComponent = /*#__PURE__*/function (_HTMLElement) {
	    _inherits(TileComponent, _HTMLElement);
	    var _super = _createSuper(TileComponent);
	    function TileComponent() {
	      var _this;
	      _classCallCheck(this, TileComponent);
	      _this = _super.call(this);
	      var shadowRoot = _this.attachShadow({
	        mode: 'open'
	      });
	      shadowRoot.appendChild(templateContent.cloneNode(true));
	      return _this;
	    }
	    return _createClass(TileComponent);
	  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)); // Add componet to Page
	  customElements.define('uie-tile', TileComponent);
	}

	//    ShadowRoot.appendChild(templateConte

	function Section(cfg, ui) {
	  var dbID = 'mockup';
	  var sectionId = '#uieMockupContent';
	  function render() {
	    // Save Upload Button
	    var htmlPanelUpload = ui.querySelector('.uie-mockup-btn-upload').outerHTML;
	    var elPanelUpload = document.createElement('template');
	    elPanelUpload.innerHTML = htmlPanelUpload;

	    // Clear Outline Section
	    var elSection = ui.querySelector(sectionId);
	    elSection.innerHTML = '';

	    // Get Outline element HTML
	    var parser = new DOMParser();
	    var docSection = parser.parseFromString(cfg.panel.html, 'text/html');
	    var rawInnerHTML = docSection.querySelector(sectionId + ' .uie-mockup-item').outerHTML;

	    // Apply properties
	    var data = DB.get(dbID).data;
	    data.forEach(function (node) {
	      if (node.thumb) {
	        var newTpl = document.createElement('template');
	        newTpl.innerHTML = tpl(rawInnerHTML, {
	          '${id}': 'uie' + dbID + node.el,
	          '${out_id}': 'uie' + dbID + node.el + 'Cb',
	          '${out_val}': node.status,
	          '${statusClass}': getClassStatus(node.status),
	          '${statusTitle}': getTitleStatus(node.status),
	          'https://${src}': node.thumb
	        });

	        // Append Outline elements into the Panel
	        var templateContent = newTpl.content;
	        elSection.appendChild(templateContent.cloneNode(true));
	      }
	    });

	    // Append Upload Button
	    elSection.appendChild(elPanelUpload.content.cloneNode(true));

	    /**
	     * Upload By Drag&Drop
	     */
	    var uieMockupUpload = elSection.querySelector('.uie-mockup-btn-upload');
	    if (uieMockupUpload) {
	      uieMockupUpload.addEventListener('drop', function (e) {
	        e.preventDefault();
	        uploadImage(e.dataTransfer.files[0]);
	        uieMockupUpload.classList.remove('active');
	      });
	      uieMockupUpload.addEventListener('dragover', function (e) {
	        e.preventDefault();
	        uieMockupUpload.classList.add('active');
	      });
	      uieMockupUpload.addEventListener('dragleave', function (e) {
	        e.preventDefault();
	        uieMockupUpload.classList.remove('active');
	      });
	    }

	    /**
	     * Upload By Clipboard
	     * ref: https://htmldom.dev/paste-an-image-from-the-clipboard/
	     */
	    // Handle the `paste` event
	    document.addEventListener('paste', function (evt) {
	      var parent = elSection.closest('.uie-panel');
	      if (parent && parent.classList.contains('active')) {
	        // Get the data of clipboard
	        var clipboardItems = evt.clipboardData.items;
	        var items = [].slice.call(clipboardItems).filter(function (item) {
	          // Filter the image items only
	          return item.type.indexOf('image') !== -1;
	        });
	        if (items.length === 0) {
	          return;
	        }
	        var item = items[0];
	        // Get the blob of image
	        var blob = item.getAsFile();
	        uploadImage(blob);
	      }
	    });

	    /**
	     * Preview Event
	     */
	    var uieMockupItem = ui.querySelectorAll('.uie-mockup-item');
	    var preview = ui.querySelector('.uie-mockup-preview');
	    var previewImg = ui.querySelector('.uie-mockup-preview-img');
	    if (uieMockupItem && preview && previewImg) {
	      uieMockupItem.forEach(function (element) {
	        var img = element.querySelector('.uie-mockup-thumb');
	        if (img) {
	          element.addEventListener('mousemove', function (e) {
	            preview.classList.add('show');
	            previewImg.setAttribute('src', img.src);
	          });
	          element.addEventListener('mouseout', function (e) {
	            preview.classList.remove('show');
	          });
	        }
	      });
	    }

	    /**
	     * Upload Event
	     */
	    var inputUpload = ui.querySelector('#uie-mockup-input-upload');
	    if (inputUpload) {
	      inputUpload.addEventListener('change', function (event) {
	        uploadImage(event.target.files[0]);
	      });
	    }

	    /**
	     * Upload Image
	     */
	    function uploadImage(image) {
	      if (image) {
	        var extension = image.name.split('.').pop();
	        var allowedExtensions = ['jpg', 'jpeg', 'png'];
	        var size = image.size;
	        var sizeLimit = 2000000; // ~ 2Mb

	        var elImg = new Image();
	        elImg.src = URL.createObjectURL(image);
	        elImg.onload = function () {
	          var imgWidth = elImg.width;
	          var imgHeight = elImg.height;
	          if (allowedExtensions.includes(extension) && size < sizeLimit) {
	            var reader = new FileReader();
	            reader.readAsDataURL(image);
	            reader.addEventListener('load', function () {
	              if (reader.result) {
	                var el = new Date().valueOf().toString(16);
	                var name = image.name;
	                var item = {
	                  name: name,
	                  el: el,
	                  thumb: reader.result,
	                  status: '2',
	                  opacity: '0.5',
	                  zindex: 100,
	                  grayscale: false,
	                  position: {
	                    left: 0,
	                    top: 0
	                  },
	                  offset: {
	                    left: 0,
	                    top: 0
	                  },
	                  crop: {
	                    width: imgWidth,
	                    height: imgHeight
	                  }
	                };
	                DB.add(dbID, name, item);
	                render();
	                Paint(cfg);
	              }
	            });
	          }
	        };
	      }
	    }

	    /**
	     * Remove Button
	     */
	    var btnRemove = ui.querySelectorAll("".concat(sectionId, " .uie-btn-remove"));
	    if (btnRemove) {
	      btnRemove.forEach(function (element) {
	        element.addEventListener('click', function (e) {
	          e.preventDefault();
	          var target = e.currentTarget;
	          var parent = target.closest('.uie-mockup-item');
	          var key = parent.id;
	          preview.classList.remove('show');
	          DB.remove(dbID, key);
	          render();
	          Paint(cfg);
	        });
	      });
	    }

	    /**
	     * Toggle Visibility
	     */
	    var cbInputs = ui.querySelectorAll("".concat(sectionId, " .uie-mockup-label"));
	    if (cbInputs) {
	      cbInputs.forEach(function (element) {
	        element.addEventListener('click', function (e) {
	          e.preventDefault();
	          var target = e.currentTarget;
	          var output = target.querySelector('.uie-mockup-out');
	          if (output) {
	            switch (output.value) {
	              case '1':
	                output.value = '2';
	                target.classList.remove('uie-mockup-label--noevents');
	                target.classList.remove('uie-mockup-label--hide');
	                break;
	              case '2':
	                output.value = '3';
	                target.classList.add('uie-mockup-label--noevents');
	                target.classList.remove('uie-mockup-label--hide');
	                break;
	              case '3':
	                output.value = '1';
	                target.classList.remove('uie-mockup-label--noevents');
	                target.classList.add('uie-mockup-label--hide');
	                break;
	              default:
	                output.value = '1';
	                target.classList.remove('uie-mockup-label--noevents');
	                target.classList.remove('uie-mockup-label--hide');
	                break;
	            }
	            var parent = target.closest('.uie-mockup-item');
	            var key = parent.id;
	            DB.update(dbID, key, {
	              status: output.value
	            });
	            Paint(cfg);
	            target.setAttribute('title', getTitleStatus(output.value));
	          }
	        });
	      });
	    }
	  } // render()

	  uiTile(cfg);
	  Paint(cfg);
	  render();
	}

	/**
	 * Get Class Name for Label by Thumbnail Status
	 *
	 * @param {*} status
	 * @returns
	 */
	function getClassStatus(status) {
	  switch (status) {
	    case '1':
	      return 'uie-mockup-label--hide';
	    case '2':
	      return '';
	    case '3':
	      return 'uie-mockup-label--noevents';
	    default:
	      return '';
	  }
	}

	/**
	 * Get Title for Label by Thumbnail Status
	 *
	 * @param {*} status
	 * @returns
	 */
	function getTitleStatus(status) {
	  switch (status) {
	    case '1':
	      return 'Hide Tile';
	    case '2':
	      return 'Show Tile';
	    case '3':
	      return 'Inactive Tile';
	    default:
	      return 'Show Tile';
	  }
	}

	var UIExplorer = function UIExplorer(cfg) {
	  DB.init(cfg);
	  var ui = UI(cfg);

	  // UI Events
	  Btn(cfg, ui);
	  Panel(cfg, ui);

	  /**
	   * Sections
	   */

	  // General Events
	  Section$2(cfg, ui);

	  // Outline Events
	  Section$1(cfg.panel, ui);

	  // Mockup Events
	  Section(cfg, ui);
	};

	var btnHTML = "data:text/html;base64,PCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9IlVURi04Ij48bWV0YSBodHRwLWVxdWl2PSJYLVVBLUNvbXBhdGlibGUiIGNvbnRlbnQ9IklFPWVkZ2UiPjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+RG9jdW1lbnQ8L3RpdGxlPjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0ic3R5bGVzL21haW4uY3NzIj48L2hlYWQ+PGJvZHk+PGEgaHJlZj0icGFuZWwuaHRtbCIgaWQ9InVpZUJ0biIgdGFiaW5kZXg9Ii0xIiBhcmlhLWxhYmVsPSJUb2dnbGUgQWN0aW9uIFBhbmVsIiBjbGFzcz0idWllLWJ0biI+PHNwYW4gY2xhc3M9InVpZS1idG4tbWF0Ij48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJiaSBiaS10b29scyIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNMSAwIDAgMWwyLjIgMy4wODFhMSAxIDAgMCAwIC44MTUuNDE5aC4wN2ExIDEgMCAwIDEgLjcwOC4yOTNsMi42NzUgMi42NzUtMi42MTcgMi42NTRBMy4wMDMgMy4wMDMgMCAwIDAgMCAxM2EzIDMgMCAxIDAgNS44NzgtLjg1MWwyLjY1NC0yLjYxNy45NjguOTY4LS4zMDUuOTE0YTEgMSAwIDAgMCAuMjQyIDEuMDIzbDMuMjcgMy4yN2EuOTk3Ljk5NyAwIDAgMCAxLjQxNCAwbDEuNTg2LTEuNTg2YS45OTcuOTk3IDAgMCAwIDAtMS40MTRsLTMuMjctMy4yN2ExIDEgMCAwIDAtMS4wMjMtLjI0MkwxMC41IDkuNWwtLjk2LS45NiAyLjY4LTIuNjQzQTMuMDA1IDMuMDA1IDAgMCAwIDE2IDNjMC0uMjY5LS4wMzUtLjUzLS4xMDItLjc3N2wtMi4xNCAyLjE0MUwxMiA0bC0uMzY0LTEuNzU3TDEzLjc3Ny4xMDJhMyAzIDAgMCAwLTMuNjc1IDMuNjhMNy40NjIgNi40NiA0Ljc5MyAzLjc5M2ExIDEgMCAwIDEtLjI5My0uNzA3di0uMDcxYTEgMSAwIDAgMC0uNDE5LS44MTRMMSAwWm05LjY0NiAxMC42NDZhLjUuNSAwIDAgMSAuNzA4IDBsMi45MTQgMi45MTVhLjUuNSAwIDAgMS0uNzA3LjcwN2wtMi45MTUtMi45MTRhLjUuNSAwIDAgMSAwLS43MDhaTTMgMTFsLjQ3MS4yNDIuNTI5LjAyNi4yODcuNDQ1LjQ0NS4yODcuMDI2LjUyOUw1IDEzbC0uMjQyLjQ3MS0uMDI2LjUyOS0uNDQ1LjI4Ny0uMjg3LjQ0NS0uNTI5LjAyNkwzIDE1bC0uNDcxLS4yNDJMMiAxNC43MzJsLS4yODctLjQ0NUwxLjI2OCAxNGwtLjAyNi0uNTI5TDEgMTNsLjI0Mi0uNDcxLjAyNi0uNTI5LjQ0NS0uMjg3LjI4Ny0uNDQ1LjUyOS0uMDI2TDMgMTFaIi8+PC9zdmc+PC9zcGFuPjwvYT48L2JvZHk+PC9odG1sPg==";

	var panelHTML = "data:text/html;base64,PCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9IlVURi04Ij48bWV0YSBodHRwLWVxdWl2PSJYLVVBLUNvbXBhdGlibGUiIGNvbnRlbnQ9IklFPWVkZ2UiPjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+RG9jdW1lbnQ8L3RpdGxlPjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0ic3R5bGVzL21haW4uY3NzIj48c3R5bGU+LnVpZS1wYW5lbHtkaXNwbGF5OmJsb2NrIWltcG9ydGFudH08L3N0eWxlPjwvaGVhZD48Ym9keT48ZGl2IGNsYXNzPSJ1aWUtcGFuZWwiIGlkPSJ1aWVQYW5lbCI+PGRpdiBjbGFzcz0idWllLXBhbmVsLWNvbnRhaW5lciI+PGRpdiBjbGFzcz0idWllLXRvcC1oZWFkZXIiPjxkaXYgY2xhc3M9InVpZS10b3AtdGl0bGUiPjxhIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9mcm9udGVuZC1sYXllcnMvdWktZXhwbG9yZXIiIHRhcmdldD0iX2JsYW5rIj5VSSBFeHBsb3JlciAke3ZlcnNpb259PC9hPjwvZGl2PjxkaXYgY2xhc3M9InVpZS10b3AtaGVhZGVyLWFjdGlvbiI+PGEgY2xhc3M9InVpZS10b3AtaGVhZGVyLWFjdGlvbi1idG4iIGhyZWY9ImJ0bi5odG1sIiB0aXRsZT0iSGlkZSBQYW5lbCBbRXNjXSI+PC9hPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9InVpZS1ibG9jayIgaWQ9InVpZUdlbmVyYWwiPjxhIGhyZWY9IiMiIGNsYXNzPSJ1aWUtYWNjb3JkaW9uLWFjdGlvbiI+PGRpdiBjbGFzcz0idWllLWhyIj48aDMgY2xhc3M9InVpZS1ibG9jay10aXRsZSI+R2VuZXJhbDwvaDM+PC9kaXY+PC9hPjxkaXYgY2xhc3M9InVpZS1hY2NvcmRpb24tcGFuZWwiIGlkPSJ1aWVHZW5lcmFsQ29udGVudCI+PGRpdiBjbGFzcz0idWllLXBhbmVsLXJvdyIgaWQ9IiR7aWR9Ij48ZGl2IGNsYXNzPSJ1aWUtcGFuZWwtY29sIHVpZS1wYW5lbC1jb2wtbWFpbiI+PGRpdiBjbGFzcz0idWllLXBhbmVsLW1lbnUtY29udGVudCI+PGxhYmVsIGNsYXNzPSJ1aWUtbGFiZWwiIGZvcj0iJHtjYl9pZH0iPjxpbnB1dCBjbGFzcz0idWllLWNoZWNrYm94IiB0eXBlPSJjaGVja2JveCIgaWQ9IiR7Y2JfaWR9IiAke2NiX3ZhbH0+IDxzcGFuIGNsYXNzPSJ1aWUtbGFiZWwtdGV4dCI+JHt0aXRsZX08L3NwYW4+PC9sYWJlbD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJ1aWUtcGFuZWwtY29sIj48ZGl2IGNsYXNzPSJ1aWUtdGV4dC1rYmQiPjxhIGhyZWY9IiMiIGNsYXNzPSJ1aWUtdGV4dC1rYmQtY3VzdG9tIj4ke2tleWJpbmR9PC9hPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9InVpZS1ibG9jayIgaWQ9InVpZU91dGxpbmVzIj48YSBocmVmPSIjIiBjbGFzcz0idWllLWFjY29yZGlvbi1hY3Rpb24iPjxkaXYgY2xhc3M9InVpZS1ociI+PGgzIGNsYXNzPSJ1aWUtYmxvY2stdGl0bGUiPk91dGxpbmVzPC9oMz48L2Rpdj48L2E+PGRpdiBjbGFzcz0idWllLWFjY29yZGlvbi1wYW5lbCI+PGRpdiBpZD0idWllT3V0bGluZXNDb250ZW50Ij48ZGl2IGNsYXNzPSJ1aWUtcGFuZWwtcm93IiBpZD0iJHtpZH0iPjxkaXYgY2xhc3M9InVpZS1wYW5lbC1jb2wgdWllLXBhbmVsLWNvbC1tYWluIj48ZGl2IGNsYXNzPSJ1aWUtcGFuZWwtbWVudS1pbmRpY2F0b3IiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOnVpZS1iZy1jb2xvciI+PC9kaXY+PGRpdiBjbGFzcz0idWllLXBhbmVsLW1lbnUtY29udGVudCI+PGEgaHJlZj0iIyIgY2xhc3M9InVpZS1idG4tc2hyaW5rICR7c2hyaW5rfSIgdGl0bGU9IlRvZ2dsZSBQcm9wZXJ0aWVzIj48L2E+IDxhIGhyZWY9IiMiIGNsYXNzPSJ1aWUtYnRuLXJlbW92ZSIgdGl0bGU9IlJlbW92ZSI+PC9hPiA8bGFiZWwgY2xhc3M9InVpZS1sYWJlbCIgZm9yPSIke2NiX2lkfSI+PGlucHV0IGNsYXNzPSJ1aWUtY2hlY2tib3giIHR5cGU9ImNoZWNrYm94IiBpZD0iJHtjYl9pZH0iICR7Y2JfdmFsfT4gPHNwYW4gY2xhc3M9InVpZS1sYWJlbC10ZXh0Ij4ke3RpdGxlfTwvc3Bhbj48L2xhYmVsPjx1bCBjbGFzcz0idWllLXBhbmVsLXN1YiI+PGxpIGNsYXNzPSJ1aWUtcGFuZWwtc3ViLWl0ZW0iPjxkaXYgY2xhc3M9InVpZS1yb3ciPjxkaXYgY2xhc3M9InVpZS1jb2wgdWllLWNvbC1tYWluIj48bGFiZWwgY2xhc3M9InVpZS1sYWJlbCIgZm9yPSIke2lkX2NvbG9yfSI+Q29sb3I6PC9sYWJlbD48L2Rpdj48ZGl2IGNsYXNzPSJ1aWUtY29sIj48aW5wdXQgY2xhc3M9InVpZS1jb2xvciIgdHlwZT0iY29sb3IiIGlkPSIke2lkX2NvbG9yfSIgdmFsdWU9IiR7aWRfY29sb3JfdmFsfSIgbGlzdD0idWllLWNvbG9yLXNlY3Rpb24tcHJlc2V0Ij48L2Rpdj48L2Rpdj48L2xpPjxsaSBjbGFzcz0idWllLXBhbmVsLXN1Yi1pdGVtIj48ZGl2IGNsYXNzPSJ1aWUtcm93Ij48ZGl2IGNsYXNzPSJ1aWUtY29sIHVpZS1jb2wtbWFpbiI+PGxhYmVsIGZvcj0iJHtpZF93aWR0aH0iPldpZHRoOjwvbGFiZWw+PC9kaXY+PGRpdiBjbGFzcz0idWllLWNvbCI+PGlucHV0IGNsYXNzPSJ1aWUtbnVtYmVyIiB0eXBlPSJudW1iZXIiIGlkPSIke2lkX3dpZHRofSIgdmFsdWU9IiR7aWRfd2lkdGhfdmFsfSIgbWluPSIxIiBtYXg9IjMiPjwvZGl2PjwvZGl2PjwvbGk+PC91bD48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJ1aWUtcGFuZWwtcm93Ij48ZGl2IGNsYXNzPSJ1aWUtcGFuZWwtY29sIHVpZS1wYW5lbC1jb2wtbWFpbiI+PGRpdiBjbGFzcz0idWllLW5ldy1pdGVtIj48aW5wdXQgY2xhc3M9InVpZS1pbnB1dCB1aWUtbmV3LW91dGxpbmUtaW5wdXQiIHR5cGU9InRleHQiIGxpc3Q9InVpZS1lbGVtZW50cy1kYXRhbGlzdCI+IDxhIGNsYXNzPSJ1aWUtYnRuLWFkZC1uZXciIGhyZWY9IiMiIGFyaWEtbGFiZWw9IkFkZCBOZXcgT3V0bGluZSBFbGVtZW50Ij48L2E+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0idWllLWJsb2NrIiBpZD0idWllTW9ja3VwIj48YSBocmVmPSIjIiBjbGFzcz0idWllLWFjY29yZGlvbi1hY3Rpb24iPjxkaXYgY2xhc3M9InVpZS1ociI+PGgzIGNsYXNzPSJ1aWUtYmxvY2stdGl0bGUiPk1vY2t1cHM8L2gzPjwvZGl2PjwvYT48ZGl2IGNsYXNzPSJ1aWUtbW9ja3VwLXByZXZpZXciPjxpbWcgY2xhc3M9InVpZS1tb2NrdXAtcHJldmlldy1pbWciIHNyYz0iaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzUwLzUwIiBhbHQ9IiI+PC9kaXY+PGRpdiBjbGFzcz0idWllLWFjY29yZGlvbi1wYW5lbCI+PGRpdiBpZD0idWllTW9ja3VwQ29udGVudCIgY2xhc3M9InVpZS1tb2NrdXAtbGlzdCI+PGRpdiBjbGFzcz0idWllLW1vY2t1cC1pdGVtIiBpZD0iJHtpZH0iPjxsYWJlbCBjbGFzcz0idWllLW1vY2t1cC1sYWJlbCAke3N0YXR1c0NsYXNzfSIgZm9yPSIke291dF9pZH0iIHRpdGxlPSIke3N0YXR1c1RpdGxlfSI+PG91dHB1dCBjbGFzcz0idWllLW1vY2t1cC1vdXQiIGlkPSIke291dF9pZH0iPiR7b3V0X3ZhbH08L291dHB1dD48cGljdHVyZSBjbGFzcz0idWllLW1vY2t1cC1waWN0Ij48aW1nIGNsYXNzPSJ1aWUtbW9ja3VwLXRodW1iIiBzcmM9Imh0dHBzOi8vJHtzcmN9IiBhbHQ9IiI+PC9waWN0dXJlPjwvbGFiZWw+IDxhIGhyZWY9IiMiIGNsYXNzPSJ1aWUtYnRuLXJlbW92ZS1saW5rIiB0aXRsZT0iUmVtb3ZlIE1vY2t1cCI+PHNwYW4gY2xhc3M9InVpZS1idG4tcmVtb3ZlIj48L3NwYW4+PC9hPjwvZGl2PjxkaXYgY2xhc3M9InVpZS1tb2NrdXAtYnRuLXVwbG9hZCI+PGRpdiBjbGFzcz0idWllLW1vY2t1cC1idG4tdXBsb2FkLWNvbnRlbnQiPjxsYWJlbCBjbGFzcz0idWllLW1vY2t1cC1sYWJlbC11cGxvYWQiIGZvcj0idWllLW1vY2t1cC1pbnB1dC11cGxvYWQiPjxpbnB1dCB0eXBlPSJmaWxlIiBpZD0idWllLW1vY2t1cC1pbnB1dC11cGxvYWQiIGNsYXNzPSJ1aWUtbW9ja3VwLWlucHV0LXVwbG9hZCIgYWNjZXB0PSJpbWFnZS8qIj48L2xhYmVsPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjxkYXRhbGlzdCBjbGFzcz0idWllLWNvbG9ycy1kYXRhbGlzdCIgaWQ9InVpZS1jb2xvci1zZWN0aW9uLXByZXNldCI+PG9wdGlvbj4jRkZGRjAwPC9vcHRpb24+PG9wdGlvbj4jRkYwMEZGPC9vcHRpb24+PG9wdGlvbj4jMDBGRkZGPC9vcHRpb24+PG9wdGlvbj4jMDBGRjAwPC9vcHRpb24+PG9wdGlvbj4jMDAwMEZGPC9vcHRpb24+PG9wdGlvbj4jODA4MDgwPC9vcHRpb24+PG9wdGlvbj4jMDA4MDAwPC9vcHRpb24+PG9wdGlvbj4jODAwMDAwPC9vcHRpb24+PG9wdGlvbj4jMDAwMDgwPC9vcHRpb24+PG9wdGlvbj4jODA4MDAwPC9vcHRpb24+PG9wdGlvbj4jODAwMDgwPC9vcHRpb24+PG9wdGlvbj4jRkYwMDAwPC9vcHRpb24+PG9wdGlvbj4jQzBDMEMwPC9vcHRpb24+PG9wdGlvbj4jMDA4MDgwPC9vcHRpb24+PG9wdGlvbj4jNEIwMDgyPC9vcHRpb24+PC9kYXRhbGlzdD48ZGF0YWxpc3QgaWQ9InVpZS1lbGVtZW50cy1kYXRhbGlzdCI+PG9wdGlvbiB2YWx1ZT0ic2VjdGlvbiI+PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0iZGl2Ij48L29wdGlvbj48b3B0aW9uIHZhbHVlPSJwIj48L29wdGlvbj48b3B0aW9uIHZhbHVlPSJuYXYiPjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9Ii5jbGFzc25hbWUiPjwvb3B0aW9uPjwvZGF0YWxpc3Q+PC9kaXY+PC9kaXY+PC9ib2R5PjwvaHRtbD4=";

	var tileHTML = "data:text/html;base64,PCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9IlVURi04Ij48bWV0YSBodHRwLWVxdWl2PSJYLVVBLUNvbXBhdGlibGUiIGNvbnRlbnQ9IklFPWVkZ2UiPjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+RG9jdW1lbnQ8L3RpdGxlPjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0ic3R5bGVzL21haW4uY3NzIj48L2hlYWQ+PGJvZHk+PGRpdiBpZD0iJHtpZH0iIGNsYXNzPSJ1aWUtbW9ja3VwLXRpbGUke3RpbGVzdGF0dXN9JHtzdGF0dXNid30iIHRhYmluZGV4PSItMSIgJHtzdHlsZXN9PjxkaXYgY2xhc3M9InVpZS1tb2NrdXAtdGlsZS10b29scyI+PHVsIGNsYXNzPSJ1aWUtbW9ja3VwLXRpbGUtdG9vbHMtbGlzdCI+PGxpIGNsYXNzPSJ1aWUtbW9ja3VwLXRpbGUtdG9vbHMtaXRlbSI+PGEgaHJlZj0iIyIgY2xhc3M9InVpZS1tb2NrdXAtdGlsZS10b29scy1saW5rIHVpZS1tb2NrdXAtdGlsZS1idG4tbWFnbmV0IiB0aXRsZT0iTWFnbmV0aXplIHRvIE5lYXJlc3QgRWxlbWVudCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktbWFnbmV0Ij48cGF0aCBkPSJNOCAxYTcgNyAwIDAgMC03IDd2M2g0VjhhMyAzIDAgMCAxIDYgMHYzaDRWOGE3IDcgMCAwIDAtNy03Wm03IDExaC00djNoNHYtM1pNNSAxMkgxdjNoNHYtM1pNMCA4YTggOCAwIDEgMSAxNiAwdjhoLTZWOGEyIDIgMCAxIDAtNCAwdjhIMFY4WiIvPjwvc3ZnPjwvYT48L2xpPjxsaSBjbGFzcz0idWllLW1vY2t1cC10aWxlLXRvb2xzLWl0ZW0iPjxhIGhyZWY9IiMiIGNsYXNzPSJ1aWUtbW9ja3VwLXRpbGUtdG9vbHMtbGluayB1aWUtbW9ja3VwLXRpbGUtYnRuLWJ3ICR7YnRuYnd9IiB0aXRsZT0iR3JheXNjYWxlIEltYWdlIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjMDAwMDAwIiBjbGFzcz0iYmkgYmktY2lyY2xlLWhhbGYiPjxwYXRoIGQ9Ik04IDE1QTcgNyAwIDEgMCA4IDF2MTR6bTAgMUE4IDggMCAxIDEgOCAwYTggOCAwIDAgMSAwIDE2eiIvPjwvc3ZnPjwvYT48L2xpPjxsaSBjbGFzcz0idWllLW1vY2t1cC10aWxlLXRvb2xzLWl0ZW0iPjxhIGhyZWY9IiMiIGNsYXNzPSJ1aWUtbW9ja3VwLXRpbGUtdG9vbHMtbGluayB1aWUtbW9ja3VwLXRpbGUtYnRuLWNyb3AiIHRpdGxlPSJDcm9wIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjMDAwMDAwIiBjbGFzcz0iYmkgYmktY3JvcCIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNMy41LjVBLjUuNSAwIDAgMSA0IDF2MTNoMTNhLjUuNSAwIDAgMSAwIDFoLTJ2MmEuNS41IDAgMCAxLTEgMHYtMkgzLjVhLjUuNSAwIDAgMS0uNS0uNVY0SDFhLjUuNSAwIDAgMSAwLTFoMlYxYS41LjUgMCAwIDEgLjUtLjV6bTIuNSAzYS41LjUgMCAwIDEgLjUtLjVoOGEuNS41IDAgMCAxIC41LjV2OGEuNS41IDAgMCAxLTEgMFY0SDYuNWEuNS41IDAgMCAxLS41LS41eiIvPjwvc3ZnPjwvYT48L2xpPjxsaSBjbGFzcz0idWllLW1vY2t1cC10aWxlLXRvb2xzLWl0ZW0iPjxhIGhyZWY9IiMiIGNsYXNzPSJ1aWUtbW9ja3VwLXRpbGUtdG9vbHMtbGluayB1aWUtbW9ja3VwLXRpbGUtYnRuLW9mZnNldCIgdGl0bGU9Ik9mZnNldCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzAwMDAwMCIgY2xhc3M9ImJpIGJpLWFycm93cy1tb3ZlIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuNjQ2LjE0NmEuNS41IDAgMCAxIC43MDggMGwyIDJhLjUuNSAwIDAgMS0uNzA4LjcwOEw4LjUgMS43MDdWNS41YS41LjUgMCAwIDEtMSAwVjEuNzA3TDYuMzU0IDIuODU0YS41LjUgMCAxIDEtLjcwOC0uNzA4bDItMnpNOCAxMGEuNS41IDAgMCAxIC41LjV2My43OTNsMS4xNDYtMS4xNDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtMiAyYS41LjUgMCAwIDEtLjcwOCAwbC0yLTJhLjUuNSAwIDAgMSAuNzA4LS43MDhMNy41IDE0LjI5M1YxMC41QS41LjUgMCAwIDEgOCAxMHpNLjE0NiA4LjM1NGEuNS41IDAgMCAxIDAtLjcwOGwyLTJhLjUuNSAwIDEgMSAuNzA4LjcwOEwxLjcwNyA3LjVINS41YS41LjUgMCAwIDEgMCAxSDEuNzA3bDEuMTQ3IDEuMTQ2YS41LjUgMCAwIDEtLjcwOC43MDhsLTItMnpNMTAgOGEuNS41IDAgMCAxIC41LS41aDMuNzkzbC0xLjE0Ny0xLjE0NmEuNS41IDAgMCAxIC43MDgtLjcwOGwyIDJhLjUuNSAwIDAgMSAwIC43MDhsLTIgMmEuNS41IDAgMCAxLS43MDgtLjcwOEwxNC4yOTMgOC41SDEwLjVBLjUuNSAwIDAgMSAxMCA4eiIvPjwvc3ZnPjwvYT48L2xpPjwvdWw+PC9kaXY+PGltZyBjbGFzcz0idWllLW1vY2t1cC10aWxlLWltZyIgc3JjPSJodHRwczovLyR7c3JjfSIgYWx0PSIiICR7aW1nc3R5bGV9PjwvZGl2PjwvYm9keT48L2h0bWw+";

	var css_248z = "@namespace svg \"http://www.w3.org/2000/svg\";:where(:not(table,thead,tbody,tr,th,td,svg|*)){all:unset;box-sizing:border-box}:where(:not(table,thead,tbody,tr,th,td,svg|*))::after,:where(:not(table,thead,tbody,tr,th,td,svg|*))::before{all:unset;box-sizing:border-box}a,abbr,acronym,address,article,aside,audio,b,big,blockquote,button,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{font-size:100%}article,aside,blockquote,details,div,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,main,menu,nav,p,pre,section{display:block}audio,canvas,img,picture,svg,video{display:inline-block;max-width:100%;vertical-align:middle}[hidden]{display:none}head,link,meta,script,style,template,title{display:none}a[href],button,label[for],select{cursor:pointer}table{border-collapse:collapse;border-spacing:0;text-indent:0}table,tbody,td,th,thead,tr{font-size:100%;font:inherit;margin:0;padding:0;border:0;vertical-align:baseline}input{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:inline-block}input[type=color]{width:15px;height:15px}input[type=color]::-webkit-color-swatch-wrapper{padding:0}input[type=color]::-webkit-color-swatch{border:none}input,input:required{box-shadow:none}input:-webkit-autofill,input:-webkit-autofill:active,input:-webkit-autofill:focus,input:-webkit-autofill:hover{-webkit-box-shadow:0 0 0 30px #fff inset}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none;-moz-appearance:none}input[type=search]{-webkit-appearance:none;-moz-appearance:none;box-sizing:content-box}textarea{overflow:auto;vertical-align:top;resize:vertical}input:focus{outline:0}.uie-btn{color:#000;outline:0;position:fixed;top:0;left:-29px;width:31px;height:31px;border:0;outline:0;padding:2px;margin:0;transition:all .1s;background:repeating-linear-gradient(45deg,#000,#000 2px,#ff0 2px,#ff0 4px);z-index:1000}.uie-btn:hover{left:0}.uie-btn-mat{display:flex;justify-content:center;align-items:center;width:100%;height:100%;padding:0;margin:0;border:0;outline:0;background:#fff}.uie-panel{display:none}.uie-panel.active{display:block}.uie-panel * a{cursor:pointer}.uie-colors-datalist{display:none}.uie-panel-container{font-family:Arial,Helvetica,sans-serif;font-size:12px;position:fixed;min-width:160px;max-width:168px;top:0;left:0;padding:0;outline:0;background:#fff;border:1px dashed #000;box-shadow:1px 1px 3px #ccc;z-index:1100}.uie-panel-row{display:flex;align-items:center;display:flex;flex-direction:row;padding:1px}.uie-panel-col{display:flex}.uie-panel-col-main{width:100%}.uie-row{display:flex;align-items:center}.uie-col-main{width:100%}.uie-top-header{font-size:8px;background:#fff;display:block;display:flex}.uie-top-title{width:100%;padding:5px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.uie-top-header-action{display:flex}.uie-top-header-action-btn{width:15px;height:15px;display:flex;align-items:center;justify-content:center;margin:3px;background-color:#777;-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmkteCI+PHBhdGggZD0iTTQuNjQ2IDQuNjQ2YS41LjUgMCAwIDEgLjcwOCAwTDggNy4yOTNsMi42NDYtMi42NDdhLjUuNSAwIDAgMSAuNzA4LjcwOEw4LjcwNyA4bDIuNjQ3IDIuNjQ2YS41LjUgMCAwIDEtLjcwOC43MDhMOCA4LjcwN2wtMi42NDYgMi42NDdhLjUuNSAwIDAgMS0uNzA4LS43MDhMNy4yOTMgOCA0LjY0NiA1LjM1NGEuNS41IDAgMCAxIDAtLjcwOHoiLz48L3N2Zz4=);mask-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmkteCI+PHBhdGggZD0iTTQuNjQ2IDQuNjQ2YS41LjUgMCAwIDEgLjcwOCAwTDggNy4yOTNsMi42NDYtMi42NDdhLjUuNSAwIDAgMSAuNzA4LjcwOEw4LjcwNyA4bDIuNjQ3IDIuNjQ2YS41LjUgMCAwIDEtLjcwOC43MDhMOCA4LjcwN2wtMi42NDYgMi42NDdhLjUuNSAwIDAgMS0uNzA4LS43MDhMNy4yOTMgOCA0LjY0NiA1LjM1NGEuNS41IDAgMCAxIDAtLjcwOHoiLz48L3N2Zz4=);-webkit-mask-size:14px 14px;mask-size:14px 14px;-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.uie-top-header-action-btn:hover{background:#000}.uie-hr{display:block}.uie-block{position:relative}.uie-block-title{color:#777;font-size:8px;font-weight:400;line-height:18px;text-transform:uppercase;letter-spacing:1px;padding:0;margin:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.uie-text-kbd{font-size:8px;white-space:nowrap;padding:3px}.uie-text-kbd kbd{background:#eee;padding:3px;border-radius:2px;box-shadow:0 1px 1px #000}.uie-text-kbd-custom{display:block;-webkit-user-select:none;-moz-user-select:none;user-select:none}.uie-accordion-action{color:#000;text-decoration:none;display:block;position:relative;padding:3px;background:#eee}.uie-accordion-action:before{content:\"\";color:#777;font-size:18px;line-height:18px;position:absolute;top:8px;right:3px;width:8px;height:8px;background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktY2hldnJvbi11cCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy42NDYgNC42NDZhLjUuNSAwIDAgMSAuNzA4IDBsNiA2YS41LjUgMCAwIDEtLjcwOC43MDhMOCA1LjcwN2wtNS42NDYgNS42NDdhLjUuNSAwIDAgMS0uNzA4LS43MDhsNi02eiIvPjwvc3ZnPg==) 0 0 no-repeat;background-size:contain}.uie-accordion-action.hide:before{transform:rotate(180deg)}.uie-accordion-action.hide~.uie-accordion-panel{display:none}.uie-btn-menu-toggle{color:#ccc;text-align:center;text-decoration:none;line-height:12px;display:block;position:relative;width:12px;height:12px;outline:0}.uie-panel-menu-action{padding:3px}.uie-panel-menu-indicator{width:2px;background:#ccc}.uie-panel-menu-content{padding:3px;width:100%;position:relative}.uie-panel-menu-content .uie-btn-remove,.uie-panel-menu-content .uie-btn-shrink{display:none}.uie-panel-menu-content:hover .uie-btn-remove,.uie-panel-menu-content:hover .uie-btn-shrink{display:block}.uie-panel-sub{display:block;margin:0;padding:5px 0}.uie-panel-sub-item{font-size:10px;display:block;list-style:none;margin:0;padding:3px 0}.uie-new-item{display:flex;padding:3px;width:100%}.uie-btn-add-new{display:block;padding:3px;background:#ccc;margin-left:3px;width:14px;height:14px;background-color:#777;background-size:contain;-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktcGx1cy1jaXJjbGUiPjxwYXRoIGQ9Ik04IDE1QTcgNyAwIDEgMSA4IDFhNyA3IDAgMCAxIDAgMTR6bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2eiIvPjxwYXRoIGQ9Ik04IDRhLjUuNSAwIDAgMSAuNS41djNoM2EuNS41IDAgMCAxIDAgMWgtM3YzYS41LjUgMCAwIDEtMSAwdi0zaC0zYS41LjUgMCAwIDEgMC0xaDN2LTNBLjUuNSAwIDAgMSA4IDR6Ii8+PC9zdmc+);mask-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktcGx1cy1jaXJjbGUiPjxwYXRoIGQ9Ik04IDE1QTcgNyAwIDEgMSA4IDFhNyA3IDAgMCAxIDAgMTR6bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2eiIvPjxwYXRoIGQ9Ik04IDRhLjUuNSAwIDAgMSAuNS41djNoM2EuNS41IDAgMCAxIDAgMWgtM3YzYS41LjUgMCAwIDEtMSAwdi0zaC0zYS41LjUgMCAwIDEgMC0xaDN2LTNBLjUuNSAwIDAgMSA4IDR6Ii8+PC9zdmc+);-webkit-mask-size:14px 14px;mask-size:14px 14px;margin-top:1px;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.uie-btn-add-new:hover{opacity:.6}.uie-btn-shrink{position:absolute;right:20px;top:2px;width:17px;height:17px;background:#777;-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktY2hldnJvbi11cCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy42NDYgNC42NDZhLjUuNSAwIDAgMSAuNzA4IDBsNiA2YS41LjUgMCAwIDEtLjcwOC43MDhMOCA1LjcwN2wtNS42NDYgNS42NDdhLjUuNSAwIDAgMS0uNzA4LS43MDhsNi02eiIvPjwvc3ZnPg==);mask-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktY2hldnJvbi11cCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy42NDYgNC42NDZhLjUuNSAwIDAgMSAuNzA4IDBsNiA2YS41LjUgMCAwIDEtLjcwOC43MDhMOCA1LjcwN2wtNS42NDYgNS42NDdhLjUuNSAwIDAgMS0uNzA4LS43MDhsNi02eiIvPjwvc3ZnPg==);-webkit-mask-size:8px 8px;mask-size:8px 8px;-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.uie-btn-shrink:hover{background-color:#00f}.uie-btn-shrink.hide{transform:rotate(180deg)}.uie-btn-shrink.hide~.uie-panel-sub{display:none}.uie-btn-remove{position:absolute;right:0;top:2px;width:17px;height:17px;background-color:#777;-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmkteCI+PHBhdGggZD0iTTQuNjQ2IDQuNjQ2YS41LjUgMCAwIDEgLjcwOCAwTDggNy4yOTNsMi42NDYtMi42NDdhLjUuNSAwIDAgMSAuNzA4LjcwOEw4LjcwNyA4bDIuNjQ3IDIuNjQ2YS41LjUgMCAwIDEtLjcwOC43MDhMOCA4LjcwN2wtMi42NDYgMi42NDdhLjUuNSAwIDAgMS0uNzA4LS43MDhMNy4yOTMgOCA0LjY0NiA1LjM1NGEuNS41IDAgMCAxIDAtLjcwOHoiLz48L3N2Zz4=);mask-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmkteCI+PHBhdGggZD0iTTQuNjQ2IDQuNjQ2YS41LjUgMCAwIDEgLjcwOCAwTDggNy4yOTNsMi42NDYtMi42NDdhLjUuNSAwIDAgMSAuNzA4LjcwOEw4LjcwNyA4bDIuNjQ3IDIuNjQ2YS41LjUgMCAwIDEtLjcwOC43MDhMOCA4LjcwN2wtMi42NDYgMi42NDdhLjUuNSAwIDAgMS0uNzA4LS43MDhMNy4yOTMgOCA0LjY0NiA1LjM1NGEuNS41IDAgMCAxIDAtLjcwOHoiLz48L3N2Zz4=);-webkit-mask-size:14px 14px;mask-size:14px 14px;-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.uie-btn-remove:hover{background-color:red}label{-webkit-user-select:none;-moz-user-select:none;user-select:none}.uie-color{border:0;outline:0;padding:0;margin:0;width:12px;height:12px}.uie-checkbox{outline:0;padding:0;margin:0;width:12px;height:12px;box-shadow:0;position:absolute;left:-1000px}.uie-checkbox:checked~.uie-label-text:before{background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktZXllIj48cGF0aCBkPSJNMTYgOHMtMy01LjUtOC01LjVTMCA4IDAgOHMzIDUuNSA4IDUuNVMxNiA4IDE2IDh6TTEuMTczIDhhMTMuMTMzIDEzLjEzMyAwIDAgMSAxLjY2LTIuMDQzQzQuMTIgNC42NjggNS44OCAzLjUgOCAzLjVjMi4xMiAwIDMuODc5IDEuMTY4IDUuMTY4IDIuNDU3QTEzLjEzMyAxMy4xMzMgMCAwIDEgMTQuODI4IDhjLS4wNTguMDg3LS4xMjIuMTgzLS4xOTUuMjg4LS4zMzUuNDgtLjgzIDEuMTItMS40NjUgMS43NTVDMTEuODc5IDExLjMzMiAxMC4xMTkgMTIuNSA4IDEyLjVjLTIuMTIgMC0zLjg3OS0xLjE2OC01LjE2OC0yLjQ1N0ExMy4xMzQgMTMuMTM0IDAgMCAxIDEuMTcyIDh6Ii8+PHBhdGggZD0iTTggNS41YTIuNSAyLjUgMCAxIDAgMCA1IDIuNSAyLjUgMCAwIDAgMC01ek00LjUgOGEzLjUgMy41IDAgMSAxIDcgMCAzLjUgMy41IDAgMCAxLTcgMHoiLz48L3N2Zz4=) no-repeat 0 0;background-size:contain;opacity:1}.uie-label-text{display:inline-block;padding-left:15px;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none}.uie-label-text:hover{color:#000}.uie-label-text:before{content:\"\";width:12px;height:12px;position:absolute;left:0;top:1px;background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktZXllLXNsYXNoIj48cGF0aCBkPSJNMTMuMzU5IDExLjIzOEMxNS4wNiA5LjcyIDE2IDggMTYgOHMtMy01LjUtOC01LjVhNy4wMjggNy4wMjggMCAwIDAtMi43OS41ODhsLjc3Ljc3MUE1Ljk0NCA1Ljk0NCAwIDAgMSA4IDMuNWMyLjEyIDAgMy44NzkgMS4xNjggNS4xNjggMi40NTdBMTMuMTM0IDEzLjEzNCAwIDAgMSAxNC44MjggOGMtLjA1OC4wODctLjEyMi4xODMtLjE5NS4yODgtLjMzNS40OC0uODMgMS4xMi0xLjQ2NSAxLjc1NS0uMTY1LjE2NS0uMzM3LjMyOC0uNTE3LjQ4NmwuNzA4LjcwOXoiLz48cGF0aCBkPSJNMTEuMjk3IDkuMTc2YTMuNSAzLjUgMCAwIDAtNC40NzQtNC40NzRsLjgyMy44MjNhMi41IDIuNSAwIDAgMSAyLjgyOSAyLjgyOWwuODIyLjgyMnptLTIuOTQzIDEuMjk5LjgyMi44MjJhMy41IDMuNSAwIDAgMS00LjQ3NC00LjQ3NGwuODIzLjgyM2EyLjUgMi41IDAgMCAwIDIuODI5IDIuODI5eiIvPjxwYXRoIGQ9Ik0zLjM1IDUuNDdjLS4xOC4xNi0uMzUzLjMyMi0uNTE4LjQ4N0ExMy4xMzQgMTMuMTM0IDAgMCAwIDEuMTcyIDhsLjE5NS4yODhjLjMzNS40OC44MyAxLjEyIDEuNDY1IDEuNzU1QzQuMTIxIDExLjMzMiA1Ljg4MSAxMi41IDggMTIuNWMuNzE2IDAgMS4zOS0uMTMzIDIuMDItLjM2bC43Ny43NzJBNy4wMjkgNy4wMjkgMCAwIDEgOCAxMy41QzMgMTMuNSAwIDggMCA4cy45MzktMS43MjEgMi42NDEtMy4yMzhsLjcwOC43MDl6bTEwLjI5NiA4Ljg4NC0xMi0xMiAuNzA4LS43MDggMTIgMTItLjcwOC43MDh6Ii8+PC9zdmc+) no-repeat 0 0;background-size:contain;opacity:.6}.uie-label{cursor:pointer;display:block}.uie-number{font-size:9px;border:1px solid #ccc;padding:3px;max-width:50px}.uie-input{border:1px solid #ccc;font-size:10px;padding:2px;width:100%}.uie-mockup-list{display:inline-flex;flex-wrap:wrap}.uie-mockup-item{width:50px;height:50px;background:#ccc;margin:2px;border-radius:3px;overflow:hidden;position:relative}.uie-mockup-item:hover .uie-btn-remove-link{display:block}.uie-btn-remove-link{display:none;position:absolute;top:0;right:0;width:17px;height:17px;background:rgba(255,255,255,.5)}.uie-btn-remove-link .uie-btn-remove{position:relative;display:block;left:0;top:0}.uie-mockup-out{display:none}.uie-mockup-thumb{width:50px;height:50px;opacity:1;position:relative;display:block}.uie-mockup-pict{border:1px solid #fff}.uie-mockup-pict:before{display:none;content:\"\";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:12px;height:12px;position:absolute;background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktZXllLXNsYXNoIj48cGF0aCBkPSJNMTMuMzU5IDExLjIzOEMxNS4wNiA5LjcyIDE2IDggMTYgOHMtMy01LjUtOC01LjVhNy4wMjggNy4wMjggMCAwIDAtMi43OS41ODhsLjc3Ljc3MUE1Ljk0NCA1Ljk0NCAwIDAgMSA4IDMuNWMyLjEyIDAgMy44NzkgMS4xNjggNS4xNjggMi40NTdBMTMuMTM0IDEzLjEzNCAwIDAgMSAxNC44MjggOGMtLjA1OC4wODctLjEyMi4xODMtLjE5NS4yODgtLjMzNS40OC0uODMgMS4xMi0xLjQ2NSAxLjc1NS0uMTY1LjE2NS0uMzM3LjMyOC0uNTE3LjQ4NmwuNzA4LjcwOXoiLz48cGF0aCBkPSJNMTEuMjk3IDkuMTc2YTMuNSAzLjUgMCAwIDAtNC40NzQtNC40NzRsLjgyMy44MjNhMi41IDIuNSAwIDAgMSAyLjgyOSAyLjgyOWwuODIyLjgyMnptLTIuOTQzIDEuMjk5LjgyMi44MjJhMy41IDMuNSAwIDAgMS00LjQ3NC00LjQ3NGwuODIzLjgyM2EyLjUgMi41IDAgMCAwIDIuODI5IDIuODI5eiIvPjxwYXRoIGQ9Ik0zLjM1IDUuNDdjLS4xOC4xNi0uMzUzLjMyMi0uNTE4LjQ4N0ExMy4xMzQgMTMuMTM0IDAgMCAwIDEuMTcyIDhsLjE5NS4yODhjLjMzNS40OC44MyAxLjEyIDEuNDY1IDEuNzU1QzQuMTIxIDExLjMzMiA1Ljg4MSAxMi41IDggMTIuNWMuNzE2IDAgMS4zOS0uMTMzIDIuMDItLjM2bC43Ny43NzJBNy4wMjkgNy4wMjkgMCAwIDEgOCAxMy41QzMgMTMuNSAwIDggMCA4cy45MzktMS43MjEgMi42NDEtMy4yMzhsLjcwOC43MDl6bTEwLjI5NiA4Ljg4NC0xMi0xMiAuNzA4LS43MDggMTIgMTItLjcwOC43MDh6Ii8+PC9zdmc+) no-repeat 0 0;background-size:contain}.uie-mockup-label{display:block;position:relative;width:50px;height:50px}.uie-mockup-label.uie-mockup-label--noevents .uie-mockup-pict{border:1px solid #000}.uie-mockup-label.uie-mockup-label--noevents .uie-mockup-pict:before{display:block;content:\"\";background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktZXhjbGFtYXRpb24tdHJpYW5nbGUiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZD0iTTcuOTM4IDIuMDE2QS4xMy4xMyAwIDAgMSA4LjAwMiAyYS4xMy4xMyAwIDAgMSAuMDYzLjAxNi4xNDYuMTQ2IDAgMCAxIC4wNTQuMDU3bDYuODU3IDExLjY2N2MuMDM2LjA2LjAzNS4xMjQuMDAyLjE4M2EuMTYzLjE2MyAwIDAgMS0uMDU0LjA2LjExNi4xMTYgMCAwIDEtLjA2Ni4wMTdIMS4xNDZhLjExNS4xMTUgMCAwIDEtLjA2Ni0uMDE3LjE2My4xNjMgMCAwIDEtLjA1NC0uMDYuMTc2LjE3NiAwIDAgMSAuMDAyLS4xODNMNy44ODQgMi4wNzNhLjE0Ny4xNDcgMCAwIDEgLjA1NC0uMDU3em0xLjA0NC0uNDVhMS4xMyAxLjEzIDAgMCAwLTEuOTYgMEwuMTY1IDEzLjIzM2MtLjQ1Ny43NzguMDkxIDEuNzY3Ljk4IDEuNzY3aDEzLjcxM2MuODg5IDAgMS40MzgtLjk5Ljk4LTEuNzY3TDguOTgyIDEuNTY2eiIvPgogIDxwYXRoIGQ9Ik03LjAwMiAxMmExIDEgMCAxIDEgMiAwIDEgMSAwIDAgMS0yIDB6TTcuMSA1Ljk5NWEuOTA1LjkwNSAwIDEgMSAxLjggMGwtLjM1IDMuNTA3YS41NTIuNTUyIDAgMCAxLTEuMSAwTDcuMSA1Ljk5NXoiLz4KPC9zdmc+)}.uie-mockup-label.uie-mockup-label--noevents .uie-mockup-pict .uie-mockup-thumb{opacity:.2}.uie-mockup-label.uie-mockup-label--hide .uie-mockup-pict{border:1px solid #000}.uie-mockup-label.uie-mockup-label--hide .uie-mockup-pict:before{display:block}.uie-mockup-label.uie-mockup-label--hide .uie-mockup-pict .uie-mockup-thumb{opacity:.2}.uie-mockup-cb-status{position:absolute;top:2px;left:2px;width:12px;height:12px;background:#fff}.uie-mockup-btn-upload{position:relative;width:50px;height:50px;margin:2px}.uie-mockup-btn-upload.active{outline:2px dashed #000;background:#eee}.uie-mockup-btn-upload-content{position:relative;width:50px;height:50px;background-color:#777;-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktZG93bmxvYWQiPjxwYXRoIGQ9Ik0uNSA5LjlhLjUuNSAwIDAgMSAuNS41djIuNWExIDEgMCAwIDAgMSAxaDEyYTEgMSAwIDAgMCAxLTF2LTIuNWEuNS41IDAgMCAxIDEgMHYyLjVhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJ2LTIuNWEuNS41IDAgMCAxIC41LS41eiIvPjxwYXRoIGQ9Ik03LjY0NiAxMS44NTRhLjUuNSAwIDAgMCAuNzA4IDBsMy0zYS41LjUgMCAwIDAtLjcwOC0uNzA4TDguNSAxMC4yOTNWMS41YS41LjUgMCAwIDAtMSAwdjguNzkzTDUuMzU0IDguMTQ2YS41LjUgMCAxIDAtLjcwOC43MDhsMyAzeiIvPjwvc3ZnPg==);mask-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktZG93bmxvYWQiPjxwYXRoIGQ9Ik0uNSA5LjlhLjUuNSAwIDAgMSAuNS41djIuNWExIDEgMCAwIDAgMSAxaDEyYTEgMSAwIDAgMCAxLTF2LTIuNWEuNS41IDAgMCAxIDEgMHYyLjVhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJ2LTIuNWEuNS41IDAgMCAxIC41LS41eiIvPjxwYXRoIGQ9Ik03LjY0NiAxMS44NTRhLjUuNSAwIDAgMCAuNzA4IDBsMy0zYS41LjUgMCAwIDAtLjcwOC0uNzA4TDguNSAxMC4yOTNWMS41YS41LjUgMCAwIDAtMSAwdjguNzkzTDUuMzU0IDguMTQ2YS41LjUgMCAxIDAtLjcwOC43MDhsMyAzeiIvPjwvc3ZnPg==);-webkit-mask-size:14px 14px;mask-size:14px 14px;-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.uie-mockup-label-upload{position:absolute;top:0;left:0;width:100%;height:100%}.uie-mockup-input-upload{display:none}.uie-mockup-preview{display:none;width:250px;height:250px;position:absolute;left:100%;top:0}.uie-mockup-preview.show{display:block}.uie-mockup-preview-img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.uie-mockup-tile{position:absolute;top:0;right:0;overflow:hidden;cursor:grab;z-index:1000}.uie-mockup-tile:hover .uie-mockup-tile-tools{display:block}.uie-mockup-tile.hide{display:none}.uie-mockup-tile.noevents{pointer-events:none}.uie-mockup-tile.active{box-shadow:0 0 0 1px #000}.uie-mockup-tile.crop{resize:both}.uie-mockup-tile.grayscale .uie-mockup-tile-img{filter:grayscale(1) contrast(1.75)}.uie-mockup-tile-tools{position:absolute;top:0;right:0;padding:2px;display:none;z-index:100}.uie-mockup-tile-tools-list{display:flex}.uie-mockup-tile-tools-link{display:flex;align-items:center;justify-content:center;padding:5px;background:#fff;width:30px;height:30px;opacity:.8}.uie-mockup-tile-tools-link.active{outline:2px solid #000;opacity:1}.uie-mockup-tile-tools-item{margin:2px}.uie-mockup-tile-img{position:absolute;left:0;top:0;z-index:50;max-width:none;opacity:.5}";

	var general = {
		data: [
			{
				el: "outlines",
				active: true,
				keybind: [
					"Ctrl",
					"~"
				]
			},
			{
				el: "mockups",
				active: true
			}
		]
	};
	var outlines = {
		data: [
			{
				el: "section",
				active: true,
				shrink: true,
				color: "#ff00ff",
				size: "1"
			},
			{
				el: "div",
				active: true,
				shrink: false,
				color: "#00ffff",
				size: "1"
			},
			{
				el: "p",
				active: true,
				shrink: false,
				color: "#cccccc",
				size: "1"
			}
		]
	};
	var mockup = {
		data: [
			{
				name: "mockup.jpg",
				el: "343242",
				thumb: "",
				active: true,
				opacity: 1,
				zindex: 1000,
				grayscale: false,
				position: {
					left: 0,
					top: 0
				},
				offset: {
					left: 0,
					top: 0
				},
				crop: {
					width: 100,
					height: 200
				}
			}
		]
	};
	var data = {
		general: general,
		outlines: outlines,
		mockup: mockup
	};

	var name = "ui-explorer";
	var version = "1.2.0";
	var description = "UI Explorer";
	var directories = {
		test: "tests"
	};
	var scripts = {
		dev: "gulp",
		server: "gulp",
		start: "gulp",
		build: "gulp build",
		test: "mocha"
	};
	var author = "Matin Andrey";
	var license = "MIT";
	var repository = {
		type: "git",
		url: "git+https://github.com/frontend-layers/ui-explorer.git"
	};
	var keywords = [
		"css",
		"js",
		"html"
	];
	var bugs = {
		url: "https://github.com/frontend-layers/ui-explorer/issues"
	};
	var type = "module";
	var homepage = "https://github.com/frontend-layers/ui-explorer/";
	var devDependencies = {
		"@babel/core": "^7.21.8",
		"@babel/plugin-proposal-class-properties": "^7.18.6",
		"@babel/preset-env": "^7.21.5",
		"@rollup/plugin-alias": "^5.0.0",
		"@rollup/plugin-babel": "^6.0.3",
		"@rollup/plugin-commonjs": "^25.0.0",
		"@rollup/plugin-json": "^6.0.0",
		"@rollup/plugin-node-resolve": "^15.0.2",
		"@rollup/plugin-terser": "^0.4.1",
		"@rollup/plugin-url": "^8.0.1",
		autoprefixer: "^10.4.14",
		bootstrap: "5.2.3",
		"bootstrap-icons": "1.10.5",
		"css-test-npm": "^1.0.1",
		del: "^7.0.0",
		eslint: "^8.40.0",
		"eslint-config-standard": "^17.0.0",
		"eslint-plugin-import": "^2.27.5",
		"eslint-plugin-n": "^15.7.0",
		"eslint-plugin-promise": "^6.1.1",
		giflossy: "^3.0.41",
		gulp: "^4.0.2",
		"gulp-bump": "^3.2.0",
		"gulp-cache": "^1.1.3",
		"gulp-clean-css": "^4.3.0",
		"gulp-concat": "^2.6.1",
		"gulp-connect": "^5.7.0",
		"gulp-htmlmin": "^5.0.1",
		"gulp-imagemin": "^8.0.0",
		"gulp-notify": "^4.0.0",
		"gulp-nunjucks-render": "^2.2.3",
		"gulp-open": "^3.0.1",
		"gulp-plumber": "^1.2.1",
		"gulp-prettify": "^0.5.0",
		"gulp-purifycss": "^0.2.0",
		"gulp-sass": "^5.1.0",
		"gulp-size": "^4.0.1",
		"gulp-sourcemaps": "^3.0.0",
		"gulp-standard": "^14.0.0",
		"gulp-svg-sprite": "^2.0.3",
		"gulp-uglify": "^3.0.2",
		"gulp-w3c-html-validator": "^5.2.0",
		"gulp-webp": "^4.0.1",
		"html-pages-preview": "^1.1.3",
		"html-speed": "^1.0.3",
		"html-test": "^1.2.1",
		"imagemin-giflossy": "^5.1.10",
		"imagemin-jpeg-recompress": "^7.1.0",
		"imagemin-mozjpeg": "^10.0.0",
		"imagemin-pngquant": "^9.0.2",
		"imagemin-svgo": "^10.0.1",
		"imagemin-zopfli": "^7.0.0",
		"js-components-npm": "^1.0.2",
		localtunnel: "^2.0.2",
		"mobile-friendly-test-npm": "^1.0.4",
		mocha: "^10.2.0",
		postcss: "^8.4.23",
		rollup: "^3.21.6",
		"rollup-plugin-postcss": "^4.0.2",
		sass: "^1.62.1",
		"scss-mixins-npm": "^1.0.6",
		"scss-reset": "^1.4.2"
	};
	var dataPackageJson = {
		name: name,
		version: version,
		description: description,
		directories: directories,
		scripts: scripts,
		author: author,
		license: license,
		repository: repository,
		keywords: keywords,
		bugs: bugs,
		type: type,
		homepage: homepage,
		devDependencies: devDependencies
	};

	var appVerion = dataPackageJson.version;
	data.version = appVerion;
	var cfg = {
	  btn: {
	    html: getBodyContent(decodeRollupUrl(btnHTML, 'html')),
	    id: 'uieBtn'
	  },
	  panel: {
	    html: tpl(getBodyContent(decodeRollupUrl(panelHTML, 'html')), {
	      '${version}': appVerion
	    }),
	    id: 'uiePanel'
	  },
	  tile: {
	    html: getBodyContent(decodeRollupUrl(tileHTML, 'html')),
	    id: 'uieTile'
	  },
	  styles: "<style type=\"text/css\">".concat(css_248z, "</style>"),
	  data: data
	};
	UIExplorer(cfg);

}));
