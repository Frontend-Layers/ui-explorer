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
	          '${active}': node.active ? '' : ' hide ',
	          '${src}': node.thumb,
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
	      var newTpl = document.createElement('template');
	      newTpl.innerHTML = tpl(rawInnerHTML, {
	        '${id}': 'uie' + dbID + node.el,
	        '${cb_id}': 'uie' + dbID + node.el + 'Cb',
	        '${cb_val}': node.active ? ' checked ' : '',
	        '${src}': node.thumb
	      });

	      // Append Outline elements into the Panel
	      var templateContent = newTpl.content;
	      elSection.appendChild(templateContent.cloneNode(true));
	    });

	    // Append Upload Button
	    elSection.appendChild(elPanelUpload.content.cloneNode(true));

	    /**
	     * Upload By Drag&Drop
	     * ref: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
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
	    var cbInputs = ui.querySelectorAll("".concat(sectionId, " .uie-mockup-cb"));
	    if (cbInputs) {
	      cbInputs.forEach(function (element) {
	        element.addEventListener('change', function (e) {
	          var target = e.target;
	          var parent = target.closest('.uie-mockup-item');
	          var key = parent.id;
	          DB.update(dbID, key, {
	            active: target.checked
	          });
	          Paint(cfg);
	        });
	      });
	    }

	    // sectionMockupTiles(cfg, tile);
	  } // render()

	  uiTile(cfg);
	  Paint(cfg);
	  render();
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

	var btnHTML = "data:text/html;base64,PCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9IlVURi04Ij48bWV0YSBodHRwLWVxdWl2PSJYLVVBLUNvbXBhdGlibGUiIGNvbnRlbnQ9IklFPWVkZ2UiPjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+RG9jdW1lbnQ8L3RpdGxlPjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0ic3R5bGVzL21haW4uY3NzIj48L2hlYWQ+PGJvZHk+PGEgaHJlZj0icGFuZWwuaHRtbCIgaWQ9InVpZUJ0biIgdGFiaW5kZXg9Ii0xIiBhcmlhLWxhYmVsPSJUb2dnbGUgQWN0aW9uIFBhbmVsIiBjbGFzcz0idWllLWJ0biIgc3R5bGU9ImxlZnQ6MCFpbXBvcnRhbnQiPjxzcGFuIGNsYXNzPSJ1aWUtYnRuLW1hdCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktdG9vbHMiIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTEgMCAwIDFsMi4yIDMuMDgxYTEgMSAwIDAgMCAuODE1LjQxOWguMDdhMSAxIDAgMCAxIC43MDguMjkzbDIuNjc1IDIuNjc1LTIuNjE3IDIuNjU0QTMuMDAzIDMuMDAzIDAgMCAwIDAgMTNhMyAzIDAgMSAwIDUuODc4LS44NTFsMi42NTQtMi42MTcuOTY4Ljk2OC0uMzA1LjkxNGExIDEgMCAwIDAgLjI0MiAxLjAyM2wzLjI3IDMuMjdhLjk5Ny45OTcgMCAwIDAgMS40MTQgMGwxLjU4Ni0xLjU4NmEuOTk3Ljk5NyAwIDAgMCAwLTEuNDE0bC0zLjI3LTMuMjdhMSAxIDAgMCAwLTEuMDIzLS4yNDJMMTAuNSA5LjVsLS45Ni0uOTYgMi42OC0yLjY0M0EzLjAwNSAzLjAwNSAwIDAgMCAxNiAzYzAtLjI2OS0uMDM1LS41My0uMTAyLS43NzdsLTIuMTQgMi4xNDFMMTIgNGwtLjM2NC0xLjc1N0wxMy43NzcuMTAyYTMgMyAwIDAgMC0zLjY3NSAzLjY4TDcuNDYyIDYuNDYgNC43OTMgMy43OTNhMSAxIDAgMCAxLS4yOTMtLjcwN3YtLjA3MWExIDEgMCAwIDAtLjQxOS0uODE0TDEgMFptOS42NDYgMTAuNjQ2YS41LjUgMCAwIDEgLjcwOCAwbDIuOTE0IDIuOTE1YS41LjUgMCAwIDEtLjcwNy43MDdsLTIuOTE1LTIuOTE0YS41LjUgMCAwIDEgMC0uNzA4Wk0zIDExbC40NzEuMjQyLjUyOS4wMjYuMjg3LjQ0NS40NDUuMjg3LjAyNi41MjlMNSAxM2wtLjI0Mi40NzEtLjAyNi41MjktLjQ0NS4yODctLjI4Ny40NDUtLjUyOS4wMjZMMyAxNWwtLjQ3MS0uMjQyTDIgMTQuNzMybC0uMjg3LS40NDVMMS4yNjggMTRsLS4wMjYtLjUyOUwxIDEzbC4yNDItLjQ3MS4wMjYtLjUyOS40NDUtLjI4Ny4yODctLjQ0NS41MjktLjAyNkwzIDExWiIvPjwvc3ZnPjwvc3Bhbj48L2E+PC9ib2R5PjwvaHRtbD4=";

	var panelHTML = "data:text/html;base64,PCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9IlVURi04Ij48bWV0YSBodHRwLWVxdWl2PSJYLVVBLUNvbXBhdGlibGUiIGNvbnRlbnQ9IklFPWVkZ2UiPjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+RG9jdW1lbnQ8L3RpdGxlPjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0ic3R5bGVzL21haW4uY3NzIj48c3R5bGU+LnVpZS1wYW5lbHtkaXNwbGF5OmJsb2NrIWltcG9ydGFudH08L3N0eWxlPjwvaGVhZD48Ym9keT48ZGl2IGNsYXNzPSJ1aWUtcGFuZWwiIGlkPSJ1aWVQYW5lbCI+PGRpdiBjbGFzcz0idWllLXBhbmVsLWNvbnRhaW5lciI+PGRpdiBjbGFzcz0idWllLXRvcC1oZWFkZXIiPjxkaXYgY2xhc3M9InVpZS10b3AtdGl0bGUiPjxhIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXltYXRpbi91aS1leHBsb3JlciIgdGFyZ2V0PSJfYmxhbmsiPlVJIEV4cGxvcmVyIHYxMDE8L2E+PC9kaXY+PGRpdiBjbGFzcz0idWllLXRvcC1oZWFkZXItYWN0aW9uIj48YSBjbGFzcz0idWllLXRvcC1oZWFkZXItYWN0aW9uLWJ0biIgaHJlZj0iYnRuLmh0bWwiIHRpdGxlPSJIaWRlIFBhbmVsIFtFc2NdIj48L2E+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0idWllLWJsb2NrIiBpZD0idWllR2VuZXJhbCI+PGEgaHJlZj0iIyIgY2xhc3M9InVpZS1hY2NvcmRpb24tYWN0aW9uIj48ZGl2IGNsYXNzPSJ1aWUtaHIiPjxoMyBjbGFzcz0idWllLWJsb2NrLXRpdGxlIj5HZW5lcmFsPC9oMz48L2Rpdj48L2E+PGRpdiBjbGFzcz0idWllLWFjY29yZGlvbi1wYW5lbCIgaWQ9InVpZUdlbmVyYWxDb250ZW50Ij48ZGl2IGNsYXNzPSJ1aWUtcGFuZWwtcm93IiBpZD0iJHtpZH0iPjxkaXYgY2xhc3M9InVpZS1wYW5lbC1jb2wgdWllLXBhbmVsLWNvbC1tYWluIj48ZGl2IGNsYXNzPSJ1aWUtcGFuZWwtbWVudS1jb250ZW50Ij48bGFiZWwgY2xhc3M9InVpZS1sYWJlbCIgZm9yPSIke2NiX2lkfSI+PGlucHV0IGNsYXNzPSJ1aWUtY2hlY2tib3giIHR5cGU9ImNoZWNrYm94IiBpZD0iJHtjYl9pZH0iICR7Y2JfdmFsfT4gPHNwYW4gY2xhc3M9InVpZS1sYWJlbC10ZXh0Ij4ke3RpdGxlfTwvc3Bhbj48L2xhYmVsPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9InVpZS1wYW5lbC1jb2wiPjxkaXYgY2xhc3M9InVpZS10ZXh0LWtiZCI+PGEgaHJlZj0iIyIgY2xhc3M9InVpZS10ZXh0LWtiZC1jdXN0b20iPiR7a2V5YmluZH08L2E+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0idWllLWJsb2NrIiBpZD0idWllT3V0bGluZXMiPjxhIGhyZWY9IiMiIGNsYXNzPSJ1aWUtYWNjb3JkaW9uLWFjdGlvbiI+PGRpdiBjbGFzcz0idWllLWhyIj48aDMgY2xhc3M9InVpZS1ibG9jay10aXRsZSI+T3V0bGluZXM8L2gzPjwvZGl2PjwvYT48ZGl2IGNsYXNzPSJ1aWUtYWNjb3JkaW9uLXBhbmVsIj48ZGl2IGlkPSJ1aWVPdXRsaW5lc0NvbnRlbnQiPjxkaXYgY2xhc3M9InVpZS1wYW5lbC1yb3ciIGlkPSIke2lkfSI+PGRpdiBjbGFzcz0idWllLXBhbmVsLWNvbCB1aWUtcGFuZWwtY29sLW1haW4iPjxkaXYgY2xhc3M9InVpZS1wYW5lbC1tZW51LWluZGljYXRvciIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6dWllLWJnLWNvbG9yIj48L2Rpdj48ZGl2IGNsYXNzPSJ1aWUtcGFuZWwtbWVudS1jb250ZW50Ij48YSBocmVmPSIjIiBjbGFzcz0idWllLWJ0bi1zaHJpbmsgJHtzaHJpbmt9IiB0aXRsZT0iVG9nZ2xlIFByb3BlcnRpZXMiPjwvYT4gPGEgaHJlZj0iIyIgY2xhc3M9InVpZS1idG4tcmVtb3ZlIiB0aXRsZT0iUmVtb3ZlIj48L2E+IDxsYWJlbCBjbGFzcz0idWllLWxhYmVsIiBmb3I9IiR7Y2JfaWR9Ij48aW5wdXQgY2xhc3M9InVpZS1jaGVja2JveCIgdHlwZT0iY2hlY2tib3giIGlkPSIke2NiX2lkfSIgJHtjYl92YWx9PiA8c3BhbiBjbGFzcz0idWllLWxhYmVsLXRleHQiPiR7dGl0bGV9PC9zcGFuPjwvbGFiZWw+PHVsIGNsYXNzPSJ1aWUtcGFuZWwtc3ViIj48bGkgY2xhc3M9InVpZS1wYW5lbC1zdWItaXRlbSI+PGRpdiBjbGFzcz0idWllLXJvdyI+PGRpdiBjbGFzcz0idWllLWNvbCB1aWUtY29sLW1haW4iPjxsYWJlbCBjbGFzcz0idWllLWxhYmVsIiBmb3I9IiR7aWRfY29sb3J9Ij5Db2xvcjo8L2xhYmVsPjwvZGl2PjxkaXYgY2xhc3M9InVpZS1jb2wiPjxpbnB1dCBjbGFzcz0idWllLWNvbG9yIiB0eXBlPSJjb2xvciIgaWQ9IiR7aWRfY29sb3J9IiB2YWx1ZT0iJHtpZF9jb2xvcl92YWx9IiBsaXN0PSJ1aWUtY29sb3Itc2VjdGlvbi1wcmVzZXQiPjwvZGl2PjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJ1aWUtcGFuZWwtc3ViLWl0ZW0iPjxkaXYgY2xhc3M9InVpZS1yb3ciPjxkaXYgY2xhc3M9InVpZS1jb2wgdWllLWNvbC1tYWluIj48bGFiZWwgZm9yPSIke2lkX3dpZHRofSI+V2lkdGg6PC9sYWJlbD48L2Rpdj48ZGl2IGNsYXNzPSJ1aWUtY29sIj48aW5wdXQgY2xhc3M9InVpZS1udW1iZXIiIHR5cGU9Im51bWJlciIgaWQ9IiR7aWRfd2lkdGh9IiB2YWx1ZT0iJHtpZF93aWR0aF92YWx9IiBtaW49IjEiIG1heD0iMyI+PC9kaXY+PC9kaXY+PC9saT48L3VsPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9InVpZS1wYW5lbC1yb3ciPjxkaXYgY2xhc3M9InVpZS1wYW5lbC1jb2wgdWllLXBhbmVsLWNvbC1tYWluIj48ZGl2IGNsYXNzPSJ1aWUtbmV3LWl0ZW0iPjxpbnB1dCBjbGFzcz0idWllLWlucHV0IHVpZS1uZXctb3V0bGluZS1pbnB1dCIgdHlwZT0idGV4dCIgbGlzdD0idWllLWVsZW1lbnRzLWRhdGFsaXN0Ij4gPGEgY2xhc3M9InVpZS1idG4tYWRkLW5ldyIgaHJlZj0iIyIgYXJpYS1sYWJlbD0iQWRkIE5ldyBPdXRsaW5lIEVsZW1lbnQiPjwvYT48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJ1aWUtYmxvY2siIGlkPSJ1aWVNb2NrdXAiPjxhIGhyZWY9IiMiIGNsYXNzPSJ1aWUtYWNjb3JkaW9uLWFjdGlvbiI+PGRpdiBjbGFzcz0idWllLWhyIj48aDMgY2xhc3M9InVpZS1ibG9jay10aXRsZSI+TW9ja3VwczwvaDM+PC9kaXY+PC9hPjxkaXYgY2xhc3M9InVpZS1tb2NrdXAtcHJldmlldyI+PGltZyBjbGFzcz0idWllLW1vY2t1cC1wcmV2aWV3LWltZyIgc3JjPSJodHRwczovL3BpY3N1bS5waG90b3MvNTAvNTAiIGFsdD0iIj48L2Rpdj48ZGl2IGNsYXNzPSJ1aWUtYWNjb3JkaW9uLXBhbmVsIj48ZGl2IGlkPSJ1aWVNb2NrdXBDb250ZW50IiBjbGFzcz0idWllLW1vY2t1cC1saXN0Ij48ZGl2IGNsYXNzPSJ1aWUtbW9ja3VwLWl0ZW0iIGlkPSIke2lkfSI+PGxhYmVsIGNsYXNzPSJ1aWUtbW9ja3VwLWxhYmVsIiBmb3I9IiR7Y2JfaWR9Ij48aW5wdXQgY2xhc3M9InVpZS1tb2NrdXAtY2IiIHR5cGU9ImNoZWNrYm94IiBpZD0iJHtjYl9pZH0iICR7Y2JfdmFsfT48cGljdHVyZSBjbGFzcz0idWllLW1vY2t1cC1waWN0Ij48aW1nIGNsYXNzPSJ1aWUtbW9ja3VwLXRodW1iIiBzcmM9IiR7c3JjfSIgYWx0PSIiPjwvcGljdHVyZT48L2xhYmVsPiA8YSBocmVmPSIjIiBjbGFzcz0idWllLWJ0bi1yZW1vdmUtbGluayIgdGl0bGU9IlJlbW92ZSBNb2NrdXAiPjxzcGFuIGNsYXNzPSJ1aWUtYnRuLXJlbW92ZSI+PC9zcGFuPjwvYT48L2Rpdj48ZGl2IGNsYXNzPSJ1aWUtbW9ja3VwLWJ0bi11cGxvYWQiPjxkaXYgY2xhc3M9InVpZS1tb2NrdXAtYnRuLXVwbG9hZC1jb250ZW50Ij48bGFiZWwgY2xhc3M9InVpZS1tb2NrdXAtbGFiZWwtdXBsb2FkIiBmb3I9InVpZS1tb2NrdXAtaW5wdXQtdXBsb2FkIj48aW5wdXQgdHlwZT0iZmlsZSIgaWQ9InVpZS1tb2NrdXAtaW5wdXQtdXBsb2FkIiBjbGFzcz0idWllLW1vY2t1cC1pbnB1dC11cGxvYWQiIGFjY2VwdD0iaW1hZ2UvKiI+PC9sYWJlbD48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48ZGF0YWxpc3QgY2xhc3M9InVpZS1jb2xvcnMtZGF0YWxpc3QiIGlkPSJ1aWUtY29sb3Itc2VjdGlvbi1wcmVzZXQiPjxvcHRpb24+I0ZGRkYwMDwvb3B0aW9uPjxvcHRpb24+I0ZGMDBGRjwvb3B0aW9uPjxvcHRpb24+IzAwRkZGRjwvb3B0aW9uPjxvcHRpb24+IzAwRkYwMDwvb3B0aW9uPjxvcHRpb24+IzAwMDBGRjwvb3B0aW9uPjxvcHRpb24+IzgwODA4MDwvb3B0aW9uPjxvcHRpb24+IzAwODAwMDwvb3B0aW9uPjxvcHRpb24+IzgwMDAwMDwvb3B0aW9uPjxvcHRpb24+IzAwMDA4MDwvb3B0aW9uPjxvcHRpb24+IzgwODAwMDwvb3B0aW9uPjxvcHRpb24+IzgwMDA4MDwvb3B0aW9uPjxvcHRpb24+I0ZGMDAwMDwvb3B0aW9uPjxvcHRpb24+I0MwQzBDMDwvb3B0aW9uPjxvcHRpb24+IzAwODA4MDwvb3B0aW9uPjxvcHRpb24+IzRCMDA4Mjwvb3B0aW9uPjwvZGF0YWxpc3Q+PGRhdGFsaXN0IGlkPSJ1aWUtZWxlbWVudHMtZGF0YWxpc3QiPjxvcHRpb24gdmFsdWU9InNlY3Rpb24iPjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9ImRpdiI+PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0icCI+PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0ibmF2Ij48L29wdGlvbj48b3B0aW9uIHZhbHVlPSIuY2xhc3NuYW1lIj48L29wdGlvbj48L2RhdGFsaXN0PjwvZGl2PjwvZGl2PjwvYm9keT48L2h0bWw+";

	var tileHTML = "data:text/html;base64,PCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9IlVURi04Ij48bWV0YSBodHRwLWVxdWl2PSJYLVVBLUNvbXBhdGlibGUiIGNvbnRlbnQ9IklFPWVkZ2UiPjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+RG9jdW1lbnQ8L3RpdGxlPjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0ic3R5bGVzL21haW4uY3NzIj48L2hlYWQ+PGJvZHk+PGRpdiBpZD0iJHtpZH0iIGNsYXNzPSJ1aWUtbW9ja3VwLXRpbGUke2FjdGl2ZX0ke3N0YXR1c2J3fSIgdGFiaW5kZXg9Ii0xIiAke3N0eWxlc30+PGRpdiBjbGFzcz0idWllLW1vY2t1cC10aWxlLXRvb2xzIj48dWwgY2xhc3M9InVpZS1tb2NrdXAtdGlsZS10b29scy1saXN0Ij48bGkgY2xhc3M9InVpZS1tb2NrdXAtdGlsZS10b29scy1pdGVtIj48YSBocmVmPSIjIiBjbGFzcz0idWllLW1vY2t1cC10aWxlLXRvb2xzLWxpbmsgdWllLW1vY2t1cC10aWxlLWJ0bi1tYWduZXQiIHRpdGxlPSJNYWduZXRpemUgdG8gTmVhcmVzdCBFbGVtZW50Ij48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJiaSBiaS1tYWduZXQiPjxwYXRoIGQ9Ik04IDFhNyA3IDAgMCAwLTcgN3YzaDRWOGEzIDMgMCAwIDEgNiAwdjNoNFY4YTcgNyAwIDAgMC03LTdabTcgMTFoLTR2M2g0di0zWk01IDEySDF2M2g0di0zWk0wIDhhOCA4IDAgMSAxIDE2IDB2OGgtNlY4YTIgMiAwIDEgMC00IDB2OEgwVjhaIi8+PC9zdmc+PC9hPjwvbGk+PGxpIGNsYXNzPSJ1aWUtbW9ja3VwLXRpbGUtdG9vbHMtaXRlbSI+PGEgaHJlZj0iIyIgY2xhc3M9InVpZS1tb2NrdXAtdGlsZS10b29scy1saW5rIHVpZS1tb2NrdXAtdGlsZS1idG4tYncgJHtidG5id30iIHRpdGxlPSJHcmF5c2NhbGUgSW1hZ2UiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSJiaSBiaS1jaXJjbGUtaGFsZiI+PHBhdGggZD0iTTggMTVBNyA3IDAgMSAwIDggMXYxNHptMCAxQTggOCAwIDEgMSA4IDBhOCA4IDAgMCAxIDAgMTZ6Ii8+PC9zdmc+PC9hPjwvbGk+PGxpIGNsYXNzPSJ1aWUtbW9ja3VwLXRpbGUtdG9vbHMtaXRlbSI+PGEgaHJlZj0iIyIgY2xhc3M9InVpZS1tb2NrdXAtdGlsZS10b29scy1saW5rIHVpZS1tb2NrdXAtdGlsZS1idG4tY3JvcCIgdGl0bGU9IkNyb3AiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSJiaSBiaS1jcm9wIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGQ9Ik0zLjUuNUEuNS41IDAgMCAxIDQgMXYxM2gxM2EuNS41IDAgMCAxIDAgMWgtMnYyYS41LjUgMCAwIDEtMSAwdi0ySDMuNWEuNS41IDAgMCAxLS41LS41VjRIMWEuNS41IDAgMCAxIDAtMWgyVjFhLjUuNSAwIDAgMSAuNS0uNXptMi41IDNhLjUuNSAwIDAgMSAuNS0uNWg4YS41LjUgMCAwIDEgLjUuNXY4YS41LjUgMCAwIDEtMSAwVjRINi41YS41LjUgMCAwIDEtLjUtLjV6Ii8+PC9zdmc+PC9hPjwvbGk+PGxpIGNsYXNzPSJ1aWUtbW9ja3VwLXRpbGUtdG9vbHMtaXRlbSI+PGEgaHJlZj0iIyIgY2xhc3M9InVpZS1tb2NrdXAtdGlsZS10b29scy1saW5rIHVpZS1tb2NrdXAtdGlsZS1idG4tb2Zmc2V0IiB0aXRsZT0iT2Zmc2V0Ij48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjMDAwMDAwIiBjbGFzcz0iYmkgYmktYXJyb3dzLW1vdmUiIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy42NDYuMTQ2YS41LjUgMCAwIDEgLjcwOCAwbDIgMmEuNS41IDAgMCAxLS43MDguNzA4TDguNSAxLjcwN1Y1LjVhLjUuNSAwIDAgMS0xIDBWMS43MDdMNi4zNTQgMi44NTRhLjUuNSAwIDEgMS0uNzA4LS43MDhsMi0yek04IDEwYS41LjUgMCAwIDEgLjUuNXYzLjc5M2wxLjE0Ni0xLjE0N2EuNS41IDAgMCAxIC43MDguNzA4bC0yIDJhLjUuNSAwIDAgMS0uNzA4IDBsLTItMmEuNS41IDAgMCAxIC43MDgtLjcwOEw3LjUgMTQuMjkzVjEwLjVBLjUuNSAwIDAgMSA4IDEwek0uMTQ2IDguMzU0YS41LjUgMCAwIDEgMC0uNzA4bDItMmEuNS41IDAgMSAxIC43MDguNzA4TDEuNzA3IDcuNUg1LjVhLjUuNSAwIDAgMSAwIDFIMS43MDdsMS4xNDcgMS4xNDZhLjUuNSAwIDAgMS0uNzA4LjcwOGwtMi0yek0xMCA4YS41LjUgMCAwIDEgLjUtLjVoMy43OTNsLTEuMTQ3LTEuMTQ2YS41LjUgMCAwIDEgLjcwOC0uNzA4bDIgMmEuNS41IDAgMCAxIDAgLjcwOGwtMiAyYS41LjUgMCAwIDEtLjcwOC0uNzA4TDE0LjI5MyA4LjVIMTAuNUEuNS41IDAgMCAxIDEwIDh6Ii8+PC9zdmc+PC9hPjwvbGk+PC91bD48L2Rpdj48aW1nIGNsYXNzPSJ1aWUtbW9ja3VwLXRpbGUtaW1nIiBzcmM9IiR7c3JjfSIgYWx0PSIiICR7aW1nc3R5bGV9PjwvZGl2PjwvYm9keT48L2h0bWw+";

	var styles = "data:text/css;base64,QG5hbWVzcGFjZSBzdmcgImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIjs6d2hlcmUoOm5vdCh0YWJsZSx0aGVhZCx0Ym9keSx0cix0aCx0ZCxzdmd8Kikpe2FsbDp1bnNldDtib3gtc2l6aW5nOmJvcmRlci1ib3h9OndoZXJlKDpub3QodGFibGUsdGhlYWQsdGJvZHksdHIsdGgsdGQsc3ZnfCopKTo6YWZ0ZXIsOndoZXJlKDpub3QodGFibGUsdGhlYWQsdGJvZHksdHIsdGgsdGQsc3ZnfCopKTo6YmVmb3Jle2FsbDp1bnNldDtib3gtc2l6aW5nOmJvcmRlci1ib3h9YSxhYmJyLGFjcm9ueW0sYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGF1ZGlvLGIsYmlnLGJsb2NrcXVvdGUsYnV0dG9uLGNhbnZhcyxjYXB0aW9uLGNlbnRlcixjaXRlLGNvZGUsZGQsZGVsLGRldGFpbHMsZGZuLGRpdixkbCxkdCxlbSxlbWJlZCxmaWVsZHNldCxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsZm9ybSxoMSxoMixoMyxoNCxoNSxoNixoZWFkZXIsaGdyb3VwLGksaWZyYW1lLGltZyxpbnMsa2JkLGxhYmVsLGxlZ2VuZCxsaSxtYWluLG1hcmssbWVudSxuYXYsb2wsb3V0cHV0LHAscHJlLHEscnVieSxzLHNhbXAsc2VjdGlvbixzbWFsbCxzcGFuLHN0cmlrZSxzdHJvbmcsc3ViLHN1bW1hcnksc3VwLHRhYmxlLHRib2R5LHRkLHRmb290LHRoLHRoZWFkLHRpbWUsdHIsdHQsdSx1bCx2YXIsdmlkZW97Zm9udC1zaXplOjEwMCV9YXJ0aWNsZSxhc2lkZSxibG9ja3F1b3RlLGRldGFpbHMsZGl2LGZpZ2NhcHRpb24sZmlndXJlLGZvb3Rlcixmb3JtLGgxLGgyLGgzLGg0LGg1LGg2LGhlYWRlcixoZ3JvdXAsbWFpbixtZW51LG5hdixwLHByZSxzZWN0aW9ue2Rpc3BsYXk6YmxvY2t9YXVkaW8sY2FudmFzLGltZyxwaWN0dXJlLHN2Zyx2aWRlb3tkaXNwbGF5OmlubGluZS1ibG9jazttYXgtd2lkdGg6MTAwJTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9W2hpZGRlbl17ZGlzcGxheTpub25lfWhlYWQsbGluayxtZXRhLHNjcmlwdCxzdHlsZSx0ZW1wbGF0ZSx0aXRsZXtkaXNwbGF5Om5vbmV9YVtocmVmXSxidXR0b24sbGFiZWxbZm9yXSxzZWxlY3R7Y3Vyc29yOnBvaW50ZXJ9dGFibGV7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjA7dGV4dC1pbmRlbnQ6MH10YWJsZSx0Ym9keSx0ZCx0aCx0aGVhZCx0cntmb250LXNpemU6MTAwJTtmb250OmluaGVyaXQ7bWFyZ2luOjA7cGFkZGluZzowO2JvcmRlcjowO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfS51aWUtYnRue2NvbG9yOiMwMDA7b3V0bGluZTowO3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6LTI5cHg7d2lkdGg6MzFweDtoZWlnaHQ6MzFweDtib3JkZXI6MDtvdXRsaW5lOjA7cGFkZGluZzoycHg7bWFyZ2luOjA7dHJhbnNpdGlvbjphbGwgLjFzO2JhY2tncm91bmQ6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg0NWRlZywjMDAwLCMwMDAgMnB4LCNmZjAgMnB4LCNmZjAgNHB4KTt6LWluZGV4OjEwMDB9LnVpZS1idG46aG92ZXJ7bGVmdDowfS51aWUtYnRuLW1hdHtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwYWRkaW5nOjA7bWFyZ2luOjA7Ym9yZGVyOjA7b3V0bGluZTowO2JhY2tncm91bmQ6I2ZmZn0udWllLXBhbmVse2Rpc3BsYXk6bm9uZX0udWllLXBhbmVsLmFjdGl2ZXtkaXNwbGF5OmJsb2NrfS51aWUtcGFuZWwgKiBhe2N1cnNvcjpwb2ludGVyfS51aWUtY29sb3JzLWRhdGFsaXN0e2Rpc3BsYXk6bm9uZX0udWllLXBhbmVsLWNvbnRhaW5lcntmb250LWZhbWlseTpBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtmb250LXNpemU6MTJweDtwb3NpdGlvbjpmaXhlZDttaW4td2lkdGg6MTYwcHg7bWF4LXdpZHRoOjE2OHB4O3RvcDowO2xlZnQ6MDtwYWRkaW5nOjA7b3V0bGluZTowO2JhY2tncm91bmQ6I2ZmZjtib3JkZXI6MXB4IGRhc2hlZCAjMDAwO2JveC1zaGFkb3c6MXB4IDFweCAzcHggI2NjYzt6LWluZGV4OjExMDB9LnVpZS1wYW5lbC1yb3d7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O3BhZGRpbmc6MXB4fS51aWUtcGFuZWwtY29se2Rpc3BsYXk6ZmxleH0udWllLXBhbmVsLWNvbC1tYWlue3dpZHRoOjEwMCV9LnVpZS1yb3d7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcn0udWllLWNvbC1tYWlue3dpZHRoOjEwMCV9LnVpZS10b3AtaGVhZGVye2ZvbnQtc2l6ZTo4cHg7YmFja2dyb3VuZDojZmZmO2Rpc3BsYXk6YmxvY2s7ZGlzcGxheTpmbGV4fS51aWUtdG9wLXRpdGxle3dpZHRoOjEwMCU7cGFkZGluZzo1cHg7dXNlci1zZWxlY3Q6bm9uZX0udWllLXRvcC1oZWFkZXItYWN0aW9ue2Rpc3BsYXk6ZmxleH0udWllLXRvcC1oZWFkZXItYWN0aW9uLWJ0bnt3aWR0aDoxNXB4O2hlaWdodDoxNXB4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46M3B4O2JhY2tncm91bmQtY29sb3I6Izc3NzttYXNrLWltYWdlOnVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhOaUlnYUdWcFoyaDBQU0l4TmlJZ1ptbHNiRDBpWTNWeWNtVnVkRU52Ykc5eUlpQmpiR0Z6Y3owaVlta2dZbWt0ZUNJK1BIQmhkR2dnWkQwaVRUUXVOalEySURRdU5qUTJZUzQxTGpVZ01DQXdJREVnTGpjd09DQXdURGdnTnk0eU9UTnNNaTQyTkRZdE1pNDJORGRoTGpVdU5TQXdJREFnTVNBdU56QTRMamN3T0V3NExqY3dOeUE0YkRJdU5qUTNJREl1TmpRMllTNDFMalVnTUNBd0lERXRMamN3T0M0M01EaE1PQ0E0TGpjd04yd3RNaTQyTkRZZ01pNDJORGRoTGpVdU5TQXdJREFnTVMwdU56QTRMUzQzTURoTU55NHlPVE1nT0NBMExqWTBOaUExTGpNMU5HRXVOUzQxSURBZ01DQXhJREF0TGpjd09Ib2lMejQ4TDNOMlp6ND0pO21hc2stc2l6ZToxNHB4IDE0cHg7bWFzay1wb3NpdGlvbjpjZW50ZXI7bWFzay1yZXBlYXQ6bm8tcmVwZWF0fS51aWUtdG9wLWhlYWRlci1hY3Rpb24tYnRuOmhvdmVye2JhY2tncm91bmQ6IzAwMH0udWllLWhye2Rpc3BsYXk6YmxvY2t9LnVpZS1ibG9ja3twb3NpdGlvbjpyZWxhdGl2ZX0udWllLWJsb2NrLXRpdGxle2NvbG9yOiM3Nzc7Zm9udC1zaXplOjhweDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MThweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bGV0dGVyLXNwYWNpbmc6MXB4O3BhZGRpbmc6MDttYXJnaW46MDt1c2VyLXNlbGVjdDpub25lfS51aWUtdGV4dC1rYmR7Zm9udC1zaXplOjhweDt3aGl0ZS1zcGFjZTpub3dyYXA7cGFkZGluZzozcHh9LnVpZS10ZXh0LWtiZCBrYmR7YmFja2dyb3VuZDojZWVlO3BhZGRpbmc6M3B4O2JvcmRlci1yYWRpdXM6MnB4O2JveC1zaGFkb3c6MCAxcHggMXB4ICMwMDB9LnVpZS10ZXh0LWtiZC1jdXN0b217ZGlzcGxheTpibG9jazt1c2VyLXNlbGVjdDpub25lfS51aWUtYWNjb3JkaW9uLWFjdGlvbntjb2xvcjojMDAwO3RleHQtZGVjb3JhdGlvbjpub25lO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzozcHg7YmFja2dyb3VuZDojZWVlfS51aWUtYWNjb3JkaW9uLWFjdGlvbjpiZWZvcmV7Y29udGVudDoiIjtjb2xvcjojNzc3O2ZvbnQtc2l6ZToxOHB4O2xpbmUtaGVpZ2h0OjE4cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjhweDtyaWdodDozcHg7d2lkdGg6OHB4O2hlaWdodDo4cHg7YmFja2dyb3VuZDp1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0l4TmlJZ2FHVnBaMmgwUFNJeE5pSWdabWxzYkQwaVkzVnljbVZ1ZEVOdmJHOXlJaUJqYkdGemN6MGlZbWtnWW1rdFkyaGxkbkp2YmkxMWNDSStQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTnk0Mk5EWWdOQzQyTkRaaExqVXVOU0F3SURBZ01TQXVOekE0SURCc05pQTJZUzQxTGpVZ01DQXdJREV0TGpjd09DNDNNRGhNT0NBMUxqY3dOMnd0TlM0Mk5EWWdOUzQyTkRkaExqVXVOU0F3SURBZ01TMHVOekE0TFM0M01EaHNOaTAyZWlJdlBqd3ZjM1puUGc9PSkgMCAwIG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y29udGFpbn0udWllLWFjY29yZGlvbi1hY3Rpb24uaGlkZTpiZWZvcmV7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfS51aWUtYWNjb3JkaW9uLWFjdGlvbi5oaWRlfi51aWUtYWNjb3JkaW9uLXBhbmVse2Rpc3BsYXk6bm9uZX0udWllLWJ0bi1tZW51LXRvZ2dsZXtjb2xvcjojY2NjO3RleHQtYWxpZ246Y2VudGVyO3RleHQtZGVjb3JhdGlvbjpub25lO2xpbmUtaGVpZ2h0OjEycHg7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMnB4O2hlaWdodDoxMnB4O291dGxpbmU6MH0udWllLXBhbmVsLW1lbnUtYWN0aW9ue3BhZGRpbmc6M3B4fS51aWUtcGFuZWwtbWVudS1pbmRpY2F0b3J7d2lkdGg6MnB4O2JhY2tncm91bmQ6I2NjY30udWllLXBhbmVsLW1lbnUtY29udGVudHtwYWRkaW5nOjNweDt3aWR0aDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlfS51aWUtcGFuZWwtbWVudS1jb250ZW50IC51aWUtYnRuLXJlbW92ZSwudWllLXBhbmVsLW1lbnUtY29udGVudCAudWllLWJ0bi1zaHJpbmt7ZGlzcGxheTpub25lfS51aWUtcGFuZWwtbWVudS1jb250ZW50OmhvdmVyIC51aWUtYnRuLXJlbW92ZSwudWllLXBhbmVsLW1lbnUtY29udGVudDpob3ZlciAudWllLWJ0bi1zaHJpbmt7ZGlzcGxheTpibG9ja30udWllLXBhbmVsLXN1YntkaXNwbGF5OmJsb2NrO21hcmdpbjowO3BhZGRpbmc6NXB4IDB9LnVpZS1wYW5lbC1zdWItaXRlbXtmb250LXNpemU6MTBweDtkaXNwbGF5OmJsb2NrO2xpc3Qtc3R5bGU6bm9uZTttYXJnaW46MDtwYWRkaW5nOjNweCAwfS51aWUtbmV3LWl0ZW17ZGlzcGxheTpmbGV4O3BhZGRpbmc6M3B4O3dpZHRoOjEwMCV9LnVpZS1idG4tYWRkLW5ld3tkaXNwbGF5OmJsb2NrO3BhZGRpbmc6M3B4O2JhY2tncm91bmQ6I2NjYzttYXJnaW4tbGVmdDozcHg7d2lkdGg6MTRweDtoZWlnaHQ6MTRweDtiYWNrZ3JvdW5kLWNvbG9yOiM3Nzc7YmFja2dyb3VuZC1zaXplOmNvbnRhaW47bWFzay1pbWFnZTp1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0l4TmlJZ2FHVnBaMmgwUFNJeE5pSWdabWxzYkQwaVkzVnljbVZ1ZEVOdmJHOXlJaUJqYkdGemN6MGlZbWtnWW1rdGNHeDFjeTFqYVhKamJHVWlQanh3WVhSb0lHUTlJazA0SURFMVFUY2dOeUF3SURFZ01TQTRJREZoTnlBM0lEQWdNQ0F4SURBZ01UUjZiVEFnTVVFNElEZ2dNQ0F4SURBZ09DQXdZVGdnT0NBd0lEQWdNQ0F3SURFMmVpSXZQanh3WVhSb0lHUTlJazA0SURSaExqVXVOU0F3SURBZ01TQXVOUzQxZGpOb00yRXVOUzQxSURBZ01DQXhJREFnTVdndE0zWXpZUzQxTGpVZ01DQXdJREV0TVNBd2RpMHphQzB6WVM0MUxqVWdNQ0F3SURFZ01DMHhhRE4yTFROQkxqVXVOU0F3SURBZ01TQTRJRFI2SWk4K1BDOXpkbWMrKTttYXNrLXNpemU6MTRweCAxNHB4O21hcmdpbi10b3A6MXB4O21hc2stcmVwZWF0Om5vLXJlcGVhdH0udWllLWJ0bi1hZGQtbmV3OmhvdmVye29wYWNpdHk6LjZ9LnVpZS1idG4tc2hyaW5re3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjIwcHg7dG9wOjJweDt3aWR0aDoxN3B4O2hlaWdodDoxN3B4O2JhY2tncm91bmQ6Izc3NzttYXNrLWltYWdlOnVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhOaUlnYUdWcFoyaDBQU0l4TmlJZ1ptbHNiRDBpWTNWeWNtVnVkRU52Ykc5eUlpQmpiR0Z6Y3owaVlta2dZbWt0WTJobGRuSnZiaTExY0NJK1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5OeTQyTkRZZ05DNDJORFpoTGpVdU5TQXdJREFnTVNBdU56QTRJREJzTmlBMllTNDFMalVnTUNBd0lERXRMamN3T0M0M01EaE1PQ0ExTGpjd04yd3ROUzQyTkRZZ05TNDJORGRoTGpVdU5TQXdJREFnTVMwdU56QTRMUzQzTURoc05pMDJlaUl2UGp3dmMzWm5QZz09KTttYXNrLXNpemU6OHB4IDhweDttYXNrLXBvc2l0aW9uOmNlbnRlcjttYXNrLXJlcGVhdDpuby1yZXBlYXR9LnVpZS1idG4tc2hyaW5rOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzAwZn0udWllLWJ0bi1zaHJpbmsuaGlkZXt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9LnVpZS1idG4tc2hyaW5rLmhpZGV+LnVpZS1wYW5lbC1zdWJ7ZGlzcGxheTpub25lfS51aWUtYnRuLXJlbW92ZXtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDoycHg7d2lkdGg6MTdweDtoZWlnaHQ6MTdweDtiYWNrZ3JvdW5kLWNvbG9yOiM3Nzc7bWFzay1pbWFnZTp1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0l4TmlJZ2FHVnBaMmgwUFNJeE5pSWdabWxzYkQwaVkzVnljbVZ1ZEVOdmJHOXlJaUJqYkdGemN6MGlZbWtnWW1rdGVDSStQSEJoZEdnZ1pEMGlUVFF1TmpRMklEUXVOalEyWVM0MUxqVWdNQ0F3SURFZ0xqY3dPQ0F3VERnZ055NHlPVE5zTWk0Mk5EWXRNaTQyTkRkaExqVXVOU0F3SURBZ01TQXVOekE0TGpjd09FdzRMamN3TnlBNGJESXVOalEzSURJdU5qUTJZUzQxTGpVZ01DQXdJREV0TGpjd09DNDNNRGhNT0NBNExqY3dOMnd0TWk0Mk5EWWdNaTQyTkRkaExqVXVOU0F3SURBZ01TMHVOekE0TFM0M01EaE1OeTR5T1RNZ09DQTBMalkwTmlBMUxqTTFOR0V1TlM0MUlEQWdNQ0F4SURBdExqY3dPSG9pTHo0OEwzTjJaejQ9KTttYXNrLXNpemU6MTRweCAxNHB4O21hc2stcG9zaXRpb246Y2VudGVyO21hc2stcmVwZWF0Om5vLXJlcGVhdH0udWllLWJ0bi1yZW1vdmU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZWR9bGFiZWx7dXNlci1zZWxlY3Q6bm9uZX0udWllLWNvbG9ye2JvcmRlcjowO291dGxpbmU6MDtwYWRkaW5nOjA7bWFyZ2luOjA7d2lkdGg6MTJweDtoZWlnaHQ6MTJweH0udWllLWNoZWNrYm94e291dGxpbmU6MDtwYWRkaW5nOjA7bWFyZ2luOjA7d2lkdGg6MTJweDtoZWlnaHQ6MTJweDtib3gtc2hhZG93OjA7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTAwMHB4fS51aWUtY2hlY2tib3g6Y2hlY2tlZH4udWllLWxhYmVsLXRleHQ6YmVmb3Jle2JhY2tncm91bmQ6dXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeE5pSWdhR1ZwWjJoMFBTSXhOaUlnWm1sc2JEMGlZM1Z5Y21WdWRFTnZiRzl5SWlCamJHRnpjejBpWW1rZ1lta3RaWGxsSWo0OGNHRjBhQ0JrUFNKTk1UWWdPSE10TXkwMUxqVXRPQzAxTGpWVE1DQTRJREFnT0hNeklEVXVOU0E0SURVdU5WTXhOaUE0SURFMklEaDZUVEV1TVRjeklEaGhNVE11TVRNeklERXpMakV6TXlBd0lEQWdNU0F4TGpZMkxUSXVNRFF6UXpRdU1USWdOQzQyTmpnZ05TNDRPQ0F6TGpVZ09DQXpMalZqTWk0eE1pQXdJRE11T0RjNUlERXVNVFk0SURVdU1UWTRJREl1TkRVM1FURXpMakV6TXlBeE15NHhNek1nTUNBd0lERWdNVFF1T0RJNElEaGpMUzR3TlRndU1EZzNMUzR4TWpJdU1UZ3pMUzR4T1RVdU1qZzRMUzR6TXpVdU5EZ3RMamd6SURFdU1USXRNUzQwTmpVZ01TNDNOVFZETVRFdU9EYzVJREV4TGpNek1pQXhNQzR4TVRrZ01USXVOU0E0SURFeUxqVmpMVEl1TVRJZ01DMHpMamczT1MweExqRTJPQzAxTGpFMk9DMHlMalExTjBFeE15NHhNelFnTVRNdU1UTTBJREFnTUNBeElERXVNVGN5SURoNklpOCtQSEJoZEdnZ1pEMGlUVGdnTlM0MVlUSXVOU0F5TGpVZ01DQXhJREFnTUNBMUlESXVOU0F5TGpVZ01DQXdJREFnTUMwMWVrMDBMalVnT0dFekxqVWdNeTQxSURBZ01TQXhJRGNnTUNBekxqVWdNeTQxSURBZ01DQXhMVGNnTUhvaUx6NDhMM04yWno0PSkgbm8tcmVwZWF0IDAgMDtiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtvcGFjaXR5OjF9LnVpZS1sYWJlbC10ZXh0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmctbGVmdDoxNXB4O3Bvc2l0aW9uOnJlbGF0aXZlO3VzZXItc2VsZWN0Om5vbmV9LnVpZS1sYWJlbC10ZXh0OmhvdmVye2NvbG9yOiMwMDB9LnVpZS1sYWJlbC10ZXh0OmJlZm9yZXtjb250ZW50OiIiO3dpZHRoOjEycHg7aGVpZ2h0OjEycHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDoxcHg7YmFja2dyb3VuZDp1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0l4TmlJZ2FHVnBaMmgwUFNJeE5pSWdabWxzYkQwaVkzVnljbVZ1ZEVOdmJHOXlJaUJqYkdGemN6MGlZbWtnWW1rdFpYbGxMWE5zWVhOb0lqNDhjR0YwYUNCa1BTSk5NVE11TXpVNUlERXhMakl6T0VNeE5TNHdOaUE1TGpjeUlERTJJRGdnTVRZZ09ITXRNeTAxTGpVdE9DMDFMalZoTnk0d01qZ2dOeTR3TWpnZ01DQXdJREF0TWk0M09TNDFPRGhzTGpjM0xqYzNNVUUxTGprME5DQTFMamswTkNBd0lEQWdNU0E0SURNdU5XTXlMakV5SURBZ015NDROemtnTVM0eE5qZ2dOUzR4TmpnZ01pNDBOVGRCTVRNdU1UTTBJREV6TGpFek5DQXdJREFnTVNBeE5DNDRNamdnT0dNdExqQTFPQzR3T0RjdExqRXlNaTR4T0RNdExqRTVOUzR5T0RndExqTXpOUzQwT0MwdU9ETWdNUzR4TWkweExqUTJOU0F4TGpjMU5TMHVNVFkxTGpFMk5TMHVNek0zTGpNeU9DMHVOVEUzTGpRNE5td3VOekE0TGpjd09Yb2lMejQ4Y0dGMGFDQmtQU0pOTVRFdU1qazNJRGt1TVRjMllUTXVOU0F6TGpVZ01DQXdJREF0TkM0ME56UXROQzQwTnpSc0xqZ3lNeTQ0TWpOaE1pNDFJREl1TlNBd0lEQWdNU0F5TGpneU9TQXlMamd5T1d3dU9ESXlMamd5TW5wdExUSXVPVFF6SURFdU1qazVMamd5TWk0NE1qSmhNeTQxSURNdU5TQXdJREFnTVMwMExqUTNOQzAwTGpRM05Hd3VPREl6TGpneU0yRXlMalVnTWk0MUlEQWdNQ0F3SURJdU9ESTVJREl1T0RJNWVpSXZQanh3WVhSb0lHUTlJazB6TGpNMUlEVXVORGRqTFM0eE9DNHhOaTB1TXpVekxqTXlNaTB1TlRFNExqUTROMEV4TXk0eE16UWdNVE11TVRNMElEQWdNQ0F3SURFdU1UY3lJRGhzTGpFNU5TNHlPRGhqTGpNek5TNDBPQzQ0TXlBeExqRXlJREV1TkRZMUlERXVOelUxUXpRdU1USXhJREV4TGpNek1pQTFMamc0TVNBeE1pNDFJRGdnTVRJdU5XTXVOekUySURBZ01TNHpPUzB1TVRNeklESXVNREl0TGpNMmJDNDNOeTQzTnpKQk55NHdNamtnTnk0d01qa2dNQ0F3SURFZ09DQXhNeTQxUXpNZ01UTXVOU0F3SURnZ01DQTRjeTQ1TXprdE1TNDNNakVnTWk0Mk5ERXRNeTR5TXpoc0xqY3dPQzQzTURsNmJURXdMakk1TmlBNExqZzROQzB4TWkweE1pQXVOekE0TFM0M01EZ2dNVElnTVRJdExqY3dPQzQzTURoNklpOCtQQzl6ZG1jKykgbm8tcmVwZWF0IDAgMDtiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtvcGFjaXR5Oi42fS51aWUtbGFiZWx7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTpibG9ja30udWllLW51bWJlcntmb250LXNpemU6OXB4O2JvcmRlcjoxcHggc29saWQgI2NjYztwYWRkaW5nOjNweDttYXgtd2lkdGg6NTBweH0udWllLWlucHV0e2JvcmRlcjoxcHggc29saWQgI2NjYztmb250LXNpemU6MTBweDtwYWRkaW5nOjJweDt3aWR0aDoxMDAlfS51aWUtbW9ja3VwLWxpc3R7ZGlzcGxheTppbmxpbmUtZmxleDtmbGV4LXdyYXA6d3JhcH0udWllLW1vY2t1cC1pdGVte3dpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7YmFja2dyb3VuZDojY2NjO21hcmdpbjoycHg7Ym9yZGVyLXJhZGl1czozcHg7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlfS51aWUtbW9ja3VwLWl0ZW06aG92ZXIgLnVpZS1idG4tcmVtb3ZlLWxpbmt7ZGlzcGxheTpibG9ja30udWllLWJ0bi1yZW1vdmUtbGlua3tkaXNwbGF5Om5vbmU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDt3aWR0aDoxN3B4O2hlaWdodDoxN3B4O2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuNSl9LnVpZS1idG4tcmVtb3ZlLWxpbmsgLnVpZS1idG4tcmVtb3Zle3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7bGVmdDowO3RvcDowfS51aWUtbW9ja3VwLWNie3Zpc2liaWxpdHk6aGlkZGVufS51aWUtbW9ja3VwLWNiOmNoZWNrZWR+LnVpZS1tb2NrdXAtcGljdDpiZWZvcmV7ZGlzcGxheTpub25lfS51aWUtbW9ja3VwLWNiOmNoZWNrZWR+LnVpZS1tb2NrdXAtcGljdCAudWllLW1vY2t1cC10aHVtYntvcGFjaXR5OjE7Ym9yZGVyOjFweCBzb2xpZCAjMDAwfS51aWUtbW9ja3VwLXRodW1ie3dpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7b3BhY2l0eTouMjtib3JkZXI6MXB4IHNvbGlkICNmZmY7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9ja30udWllLW1vY2t1cC1waWN0OmJlZm9yZXtjb250ZW50OiIiO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3dpZHRoOjEycHg7aGVpZ2h0OjEycHg7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDp1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0l4TmlJZ2FHVnBaMmgwUFNJeE5pSWdabWxzYkQwaVkzVnljbVZ1ZEVOdmJHOXlJaUJqYkdGemN6MGlZbWtnWW1rdFpYbGxMWE5zWVhOb0lqNDhjR0YwYUNCa1BTSk5NVE11TXpVNUlERXhMakl6T0VNeE5TNHdOaUE1TGpjeUlERTJJRGdnTVRZZ09ITXRNeTAxTGpVdE9DMDFMalZoTnk0d01qZ2dOeTR3TWpnZ01DQXdJREF0TWk0M09TNDFPRGhzTGpjM0xqYzNNVUUxTGprME5DQTFMamswTkNBd0lEQWdNU0E0SURNdU5XTXlMakV5SURBZ015NDROemtnTVM0eE5qZ2dOUzR4TmpnZ01pNDBOVGRCTVRNdU1UTTBJREV6TGpFek5DQXdJREFnTVNBeE5DNDRNamdnT0dNdExqQTFPQzR3T0RjdExqRXlNaTR4T0RNdExqRTVOUzR5T0RndExqTXpOUzQwT0MwdU9ETWdNUzR4TWkweExqUTJOU0F4TGpjMU5TMHVNVFkxTGpFMk5TMHVNek0zTGpNeU9DMHVOVEUzTGpRNE5td3VOekE0TGpjd09Yb2lMejQ4Y0dGMGFDQmtQU0pOTVRFdU1qazNJRGt1TVRjMllUTXVOU0F6TGpVZ01DQXdJREF0TkM0ME56UXROQzQwTnpSc0xqZ3lNeTQ0TWpOaE1pNDFJREl1TlNBd0lEQWdNU0F5TGpneU9TQXlMamd5T1d3dU9ESXlMamd5TW5wdExUSXVPVFF6SURFdU1qazVMamd5TWk0NE1qSmhNeTQxSURNdU5TQXdJREFnTVMwMExqUTNOQzAwTGpRM05Hd3VPREl6TGpneU0yRXlMalVnTWk0MUlEQWdNQ0F3SURJdU9ESTVJREl1T0RJNWVpSXZQanh3WVhSb0lHUTlJazB6TGpNMUlEVXVORGRqTFM0eE9DNHhOaTB1TXpVekxqTXlNaTB1TlRFNExqUTROMEV4TXk0eE16UWdNVE11TVRNMElEQWdNQ0F3SURFdU1UY3lJRGhzTGpFNU5TNHlPRGhqTGpNek5TNDBPQzQ0TXlBeExqRXlJREV1TkRZMUlERXVOelUxUXpRdU1USXhJREV4TGpNek1pQTFMamc0TVNBeE1pNDFJRGdnTVRJdU5XTXVOekUySURBZ01TNHpPUzB1TVRNeklESXVNREl0TGpNMmJDNDNOeTQzTnpKQk55NHdNamtnTnk0d01qa2dNQ0F3SURFZ09DQXhNeTQxUXpNZ01UTXVOU0F3SURnZ01DQTRjeTQ1TXprdE1TNDNNakVnTWk0Mk5ERXRNeTR5TXpoc0xqY3dPQzQzTURsNmJURXdMakk1TmlBNExqZzROQzB4TWkweE1pQXVOekE0TFM0M01EZ2dNVElnTVRJdExqY3dPQzQzTURoNklpOCtQQzl6ZG1jKykgbm8tcmVwZWF0IDAgMDtiYWNrZ3JvdW5kLXNpemU6Y29udGFpbn0udWllLW1vY2t1cC1sYWJlbHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjUwcHg7aGVpZ2h0OjUwcHh9LnVpZS1tb2NrdXAtY2Itc3RhdHVze3Bvc2l0aW9uOmFic29sdXRlO3RvcDoycHg7bGVmdDoycHg7d2lkdGg6MTJweDtoZWlnaHQ6MTJweDtiYWNrZ3JvdW5kOiNmZmZ9LnVpZS1tb2NrdXAtYnRuLXVwbG9hZHtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDo1MHB4O2hlaWdodDo1MHB4O21hcmdpbjoycHh9LnVpZS1tb2NrdXAtYnRuLXVwbG9hZC5hY3RpdmV7b3V0bGluZToycHggZGFzaGVkICMwMDA7YmFja2dyb3VuZDojZWVlfS51aWUtbW9ja3VwLWJ0bi11cGxvYWQtY29udGVudHtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDo1MHB4O2hlaWdodDo1MHB4O2JhY2tncm91bmQtY29sb3I6Izc3NzttYXNrLWltYWdlOnVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhOaUlnYUdWcFoyaDBQU0l4TmlJZ1ptbHNiRDBpWTNWeWNtVnVkRU52Ykc5eUlpQmpiR0Z6Y3owaVlta2dZbWt0Wkc5M2JteHZZV1FpUGp4d1lYUm9JR1E5SWswdU5TQTVMamxoTGpVdU5TQXdJREFnTVNBdU5TNDFkakl1TldFeElERWdNQ0F3SURBZ01TQXhhREV5WVRFZ01TQXdJREFnTUNBeExURjJMVEl1TldFdU5TNDFJREFnTUNBeElERWdNSFl5TGpWaE1pQXlJREFnTUNBeExUSWdNa2d5WVRJZ01pQXdJREFnTVMweUxUSjJMVEl1TldFdU5TNDFJREFnTUNBeElDNDFMUzQxZWlJdlBqeHdZWFJvSUdROUlrMDNMalkwTmlBeE1TNDROVFJoTGpVdU5TQXdJREFnTUNBdU56QTRJREJzTXkwellTNDFMalVnTUNBd0lEQXRMamN3T0MwdU56QTRURGd1TlNBeE1DNHlPVE5XTVM0MVlTNDFMalVnTUNBd0lEQXRNU0F3ZGpndU56a3pURFV1TXpVMElEZ3VNVFEyWVM0MUxqVWdNQ0F4SURBdExqY3dPQzQzTURoc015QXplaUl2UGp3dmMzWm5QZz09KTttYXNrLXNpemU6MTRweCAxNHB4O21hc2stcG9zaXRpb246Y2VudGVyO21hc2stcmVwZWF0Om5vLXJlcGVhdH0udWllLW1vY2t1cC1sYWJlbC11cGxvYWR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LnVpZS1tb2NrdXAtaW5wdXQtdXBsb2Fke2Rpc3BsYXk6bm9uZX0udWllLW1vY2t1cC1wcmV2aWV3e2Rpc3BsYXk6bm9uZTt3aWR0aDoyNTBweDtoZWlnaHQ6MjUwcHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDoxMDAlO3RvcDowfS51aWUtbW9ja3VwLXByZXZpZXcuc2hvd3tkaXNwbGF5OmJsb2NrfS51aWUtbW9ja3VwLXByZXZpZXctaW1ne29iamVjdC1maXQ6Y292ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0udWllLW1vY2t1cC10aWxle3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7b3ZlcmZsb3c6aGlkZGVuO2N1cnNvcjpncmFiO3otaW5kZXg6MTAwMH0udWllLW1vY2t1cC10aWxlOmhvdmVyIC51aWUtbW9ja3VwLXRpbGUtdG9vbHN7ZGlzcGxheTpibG9ja30udWllLW1vY2t1cC10aWxlLmhpZGV7ZGlzcGxheTpub25lfS51aWUtbW9ja3VwLXRpbGUuYWN0aXZle2JveC1zaGFkb3c6MCAwIDAgMXB4ICMwMDB9LnVpZS1tb2NrdXAtdGlsZS5jcm9we3Jlc2l6ZTpib3RofS51aWUtbW9ja3VwLXRpbGUuZ3JheXNjYWxlIC51aWUtbW9ja3VwLXRpbGUtaW1ne2ZpbHRlcjpncmF5c2NhbGUoMSkgY29udHJhc3QoMS43NSl9LnVpZS1tb2NrdXAtdGlsZS10b29sc3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO3BhZGRpbmc6MnB4O2Rpc3BsYXk6bm9uZTt6LWluZGV4OjEwMH0udWllLW1vY2t1cC10aWxlLXRvb2xzLWxpc3R7ZGlzcGxheTpmbGV4fS51aWUtbW9ja3VwLXRpbGUtdG9vbHMtbGlua3tkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzo1cHg7YmFja2dyb3VuZDojZmZmO3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHg7b3BhY2l0eTouOH0udWllLW1vY2t1cC10aWxlLXRvb2xzLWxpbmsuYWN0aXZle291dGxpbmU6MnB4IHNvbGlkICMwMDA7b3BhY2l0eToxfS51aWUtbW9ja3VwLXRpbGUtdG9vbHMtaXRlbXttYXJnaW46MnB4fS51aWUtbW9ja3VwLXRpbGUtaW1ne3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt6LWluZGV4OjUwO21heC13aWR0aDpub25lO29wYWNpdHk6LjV9";

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

	var cfg = {
	  btn: {
	    html: getBodyContent(decodeRollupUrl(btnHTML, 'html')),
	    id: 'uieBtn'
	  },
	  panel: {
	    html: getBodyContent(decodeRollupUrl(panelHTML, 'html')),
	    id: 'uiePanel'
	  },
	  tile: {
	    html: getBodyContent(decodeRollupUrl(tileHTML, 'html')),
	    id: 'uieTile'
	  },
	  styles: "<style>@import url(\"".concat(styles, "\");</style>"),
	  data: data
	};
	UIExplorer(cfg);

}));
