(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
})((function () { 'use strict';

	/**
	 * Toggle Button
	 */

	var Btn = function Btn(cfg, component) {
	  if (component) {
	    var btn = component.getElementById(cfg.btn.id);
	    if (btn) {
	      btn.addEventListener('click', function (e) {
	        e.preventDefault();
	        var panel = component.getElementById(cfg.panel.id);
	        if (panel) {
	          panel.classList.toggle('active');
	        }
	      });
	    }
	  }
	};

	var Panel = function Panel(cfg, component) {
	  if (component) {
	    /**
	     * Hide Panel
	     */
	    var btnHide = component.querySelector('.uie-top-header-action-btn');
	    if (btnHide) {
	      btnHide.addEventListener('click', function (e) {
	        e.preventDefault();
	        var panel = component.getElementById(cfg.panel.id);
	        panel.classList.remove('active');
	      });
	    }

	    /**
	     * Hide Panel by Esc
	     */
	    document.addEventListener('keydown', function (e) {
	      if (e.code === 'Escape') {
	        var panel = component.getElementById(cfg.panel.id);
	        panel.classList.remove('active');
	      }
	    });

	    /**
	     * Show Hide Panel Sections
	     */
	    var btnAccordion = component.querySelectorAll('.uie-accordion-action');
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
	  var r = Math.floor(Math.random() * (255 + 1));
	  var g = Math.floor(Math.random() * (255 + 1));
	  var b = Math.floor(Math.random() * (255 + 1));
	  var hr = r.toString(16).padStart(2, '0');
	  var hg = g.toString(16).padStart(2, '0');
	  var hb = b.toString(16).padStart(2, '0');
	  return '#' + hr + hg + hb;
	}

	/**
	 * Render Component UI
	 *
	 * @param {*} cfg
	 */
	function UI(cfg) {
	  // Get Frontend Resources
	  var btnHtml = getBodyContent(decodeRollupUrl(cfg.btn.html, 'html'));
	  var panelHtml = getBodyContent(decodeRollupUrl(cfg.panel.html, 'html'));
	  var mainStyles = "<style>@import url(\"".concat(cfg.styles, "\");</style>");

	  // HTML template content
	  var newTpl = document.createElement('template');
	  newTpl.innerHTML = mainStyles + btnHtml + panelHtml;
	  var templateContent = newTpl.content;

	  /**
	   * Web Component
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
	  var uiExplorer = document.querySelector('ui-explorer');
	  if (uiExplorer) {
	    return {
	      component: uiExplorer.shadowRoot,
	      content: panelHtml
	    };
	  }
	  return false;
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
	        if (_item.el === key) {
	          unique = false;
	          break;
	        }
	      }
	      if (unique) {
	        data.push(item);
	      }
	      db[id].data = data;
	      localStorage.setItem('uie-db', JSON.stringify(db));
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

	function Paint() {
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
	  function render() {
	    var data = DB.get('');
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
	  if (document.readyState === 'complete' || document.readyState === 'loaded') {
	    render();
	  }

	  /**
	   * Check DOM loading
	   */
	  window.addEventListener('DOMContentLoaded', function (e) {
	    render();
	  });
	}

	function Section$1(_ref) {
	  var component = _ref.component,
	    content = _ref.content;
	  var dbID = 'general';
	  var sectionId = '#uieGeneralContent';
	  function render() {
	    // Clear Outline Section
	    var elSection = component.querySelector(sectionId);
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
	        '${title}': node.el
	      });

	      // Append Outline elements into the Panel
	      var templateContent = newTpl.content;
	      elSection.appendChild(templateContent.cloneNode(true));
	    });

	    /**
	     * Toggle Visibility
	     */
	    var cbInputs = component.querySelectorAll("".concat(sectionId, " .uie-checkbox"));
	    if (cbInputs) {
	      cbInputs.forEach(function (element) {
	        element.addEventListener('change', function (e) {
	          var target = e.target;
	          var parent = target.closest('.uie-panel-row');
	          var key = parent.id;
	          DB.update(dbID, key, {
	            active: target.checked
	          });
	          Paint();
	        });
	      });
	    }
	  }

	  /**
	     * Show/Hide outlines by Keyboard shortcut
	     */
	  document.addEventListener('keydown', function (e) {
	    if (e.code === 'Backquote' && e.ctrlKey) {
	      var outlines = component.querySelector("".concat(sectionId, " #uiegeneraloutlinesCb"));
	      if (outlines) {
	        outlines.checked ^= 1;
	        outlines.dispatchEvent(new Event('change'));
	        Paint();
	      }
	    }
	  });
	  render();
	}

	function Section(_ref) {
	  var component = _ref.component,
	    content = _ref.content;
	  var dbID = 'outlines';
	  var blockId = '#uieOutlines';
	  var sectionId = '#uieOutlinesContent';
	  function render() {
	    // Clear Outline Section
	    var elSection = component.querySelector(sectionId);
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
	    var btnShrink = component.querySelectorAll("".concat(sectionId, " .uie-btn-shrink"));
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
	    var btnRemove = component.querySelectorAll("".concat(sectionId, " .uie-btn-remove"));
	    if (btnRemove) {
	      btnRemove.forEach(function (element) {
	        element.addEventListener('click', function (e) {
	          e.preventDefault();
	          var target = e.currentTarget;
	          var parent = target.closest('.uie-panel-row');
	          var key = parent.id;
	          DB.remove(dbID, key);
	          render();
	          Paint();
	        });
	      });
	    }

	    /**
	     * Add Button
	     */
	    var btnAddNew = component.querySelector("".concat(blockId, " .uie-btn-add-new"));
	    if (btnAddNew) {
	      btnAddNew.addEventListener('click', function (e) {
	        e.preventDefault();
	        var elInput = component.querySelector('.uie-input');
	        if (elInput && elInput.value) {
	          var val = elInput.value;
	          var elVal = document.querySelector(val);
	          if (elVal) {
	            var item = {
	              el: val,
	              active: true,
	              color: getColor(),
	              size: '1'
	            };
	            DB.add(dbID, val, item);
	            render();
	            Paint();
	          }
	        }
	      });
	    }

	    /**
	     * Toggle Visibility
	     */
	    var cbInputs = component.querySelectorAll("".concat(sectionId, " .uie-checkbox"));
	    if (cbInputs) {
	      cbInputs.forEach(function (element) {
	        element.addEventListener('change', function (e) {
	          var target = e.target;
	          var parent = target.closest('.uie-panel-row');
	          var key = parent.id;
	          DB.update(dbID, key, {
	            active: target.checked
	          });
	          Paint();
	        });
	      });
	    }

	    /**
	     * Change Outline Size
	     */
	    var inNumber = component.querySelectorAll("".concat(sectionId, " .uie-number"));
	    if (inNumber) {
	      inNumber.forEach(function (element) {
	        element.addEventListener('change', function (e) {
	          var target = e.target;
	          var parent = target.closest('.uie-panel-row');
	          var key = parent.id;
	          DB.update(dbID, key, {
	            size: target.value
	          });
	          Paint();
	        });
	      });
	    }

	    /**
	     * Change Background
	     */
	    var inColor = component.querySelectorAll("".concat(sectionId, " .uie-color"));
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
	          Paint();
	        });
	      });
	    }
	  }
	  render();
	}

	/**
	 * Toggle Button
	 */

	var Datalist = function Datalist(component) {
	  if (component) {
	    var datalist = component.getElementById('uie-elements-datalist');

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

	var UIExplorer = function UIExplorer(cfg) {
	  DB.init(cfg);
	  var ui = UI(cfg);

	  // UI Events
	  Btn(cfg, ui.component);
	  Panel(cfg, ui.component);

	  // Datalist
	  Datalist(ui.component);

	  /**
	   * Sections
	   */

	  // General Events
	  Section$1(ui);

	  // Outline Events
	  Section(ui);
	  Paint();
	};

	var btnHTML = "data:text/html;base64,PCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9IlVURi04Ij48bWV0YSBodHRwLWVxdWl2PSJYLVVBLUNvbXBhdGlibGUiIGNvbnRlbnQ9IklFPWVkZ2UiPjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+RG9jdW1lbnQ8L3RpdGxlPjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0ic3R5bGVzL21haW4uY3NzIj48L2hlYWQ+PGJvZHk+PGEgaHJlZj0icGFuZWwuaHRtbCIgaWQ9InVpZUJ0biIgdGFiaW5kZXg9Ii0xIiBhcmlhLWxhYmVsPSJUb2dnbGUgQWN0aW9uIFBhbmVsIiBjbGFzcz0idWllLWJ0biI+PHNwYW4gY2xhc3M9InVpZS1idG4tbWF0Ij48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJiaSBiaS10b29scyIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNMSAwIDAgMWwyLjIgMy4wODFhMSAxIDAgMCAwIC44MTUuNDE5aC4wN2ExIDEgMCAwIDEgLjcwOC4yOTNsMi42NzUgMi42NzUtMi42MTcgMi42NTRBMy4wMDMgMy4wMDMgMCAwIDAgMCAxM2EzIDMgMCAxIDAgNS44NzgtLjg1MWwyLjY1NC0yLjYxNy45NjguOTY4LS4zMDUuOTE0YTEgMSAwIDAgMCAuMjQyIDEuMDIzbDMuMjcgMy4yN2EuOTk3Ljk5NyAwIDAgMCAxLjQxNCAwbDEuNTg2LTEuNTg2YS45OTcuOTk3IDAgMCAwIDAtMS40MTRsLTMuMjctMy4yN2ExIDEgMCAwIDAtMS4wMjMtLjI0MkwxMC41IDkuNWwtLjk2LS45NiAyLjY4LTIuNjQzQTMuMDA1IDMuMDA1IDAgMCAwIDE2IDNjMC0uMjY5LS4wMzUtLjUzLS4xMDItLjc3N2wtMi4xNCAyLjE0MUwxMiA0bC0uMzY0LTEuNzU3TDEzLjc3Ny4xMDJhMyAzIDAgMCAwLTMuNjc1IDMuNjhMNy40NjIgNi40NiA0Ljc5MyAzLjc5M2ExIDEgMCAwIDEtLjI5My0uNzA3di0uMDcxYTEgMSAwIDAgMC0uNDE5LS44MTRMMSAwWm05LjY0NiAxMC42NDZhLjUuNSAwIDAgMSAuNzA4IDBsMi45MTQgMi45MTVhLjUuNSAwIDAgMS0uNzA3LjcwN2wtMi45MTUtMi45MTRhLjUuNSAwIDAgMSAwLS43MDhaTTMgMTFsLjQ3MS4yNDIuNTI5LjAyNi4yODcuNDQ1LjQ0NS4yODcuMDI2LjUyOUw1IDEzbC0uMjQyLjQ3MS0uMDI2LjUyOS0uNDQ1LjI4Ny0uMjg3LjQ0NS0uNTI5LjAyNkwzIDE1bC0uNDcxLS4yNDJMMiAxNC43MzJsLS4yODctLjQ0NUwxLjI2OCAxNGwtLjAyNi0uNTI5TDEgMTNsLjI0Mi0uNDcxLjAyNi0uNTI5LjQ0NS0uMjg3LjI4Ny0uNDQ1LjUyOS0uMDI2TDMgMTFaIi8+PC9zdmc+PC9zcGFuPjwvYT48L2JvZHk+PC9odG1sPg==";

	var panelHTML = "data:text/html;base64,PCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9IlVURi04Ij48bWV0YSBodHRwLWVxdWl2PSJYLVVBLUNvbXBhdGlibGUiIGNvbnRlbnQ9IklFPWVkZ2UiPjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+RG9jdW1lbnQ8L3RpdGxlPjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0ic3R5bGVzL21haW4uY3NzIj48c3R5bGU+LnVpZS1wYW5lbHtkaXNwbGF5OmJsb2NrIWltcG9ydGFudH08L3N0eWxlPjwvaGVhZD48Ym9keT48ZGl2IGNsYXNzPSJ1aWUtcGFuZWwiIGlkPSJ1aWVQYW5lbCI+PGRpdiBjbGFzcz0idWllLXBhbmVsLWNvbnRhaW5lciI+PGRpdiBjbGFzcz0idWllLXRvcC1oZWFkZXIiPjxkaXYgY2xhc3M9InVpZS10b3AtdGl0bGUiPjxhIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXltYXRpbi91aS1leHBsb3JlciIgdGFyZ2V0PSJfYmxhbmsiPlVJIEV4cGxvcmVyIHYxMDE8L2E+PC9kaXY+PGRpdiBjbGFzcz0idWllLXRvcC1oZWFkZXItYWN0aW9uIj48YSBjbGFzcz0idWllLXRvcC1oZWFkZXItYWN0aW9uLWJ0biIgaHJlZj0iYnRuLmh0bWwiIHRpdGxlPSJIaWRlIFBhbmVsIFtFc2NdIj48L2E+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0idWllLWJsb2NrIiBpZD0idWllR2VuZXJhbCI+PGEgaHJlZj0iIyIgY2xhc3M9InVpZS1hY2NvcmRpb24tYWN0aW9uIj48ZGl2IGNsYXNzPSJ1aWUtaHIiPjxoMyBjbGFzcz0idWllLWJsb2NrLXRpdGxlIj5HZW5lcmFsPC9oMz48L2Rpdj48L2E+PGRpdiBjbGFzcz0idWllLWFjY29yZGlvbi1wYW5lbCIgaWQ9InVpZUdlbmVyYWxDb250ZW50Ij48ZGl2IGNsYXNzPSJ1aWUtcGFuZWwtcm93IiBpZD0iJHtpZH0iPjxkaXYgY2xhc3M9InVpZS1wYW5lbC1jb2wgdWllLXBhbmVsLWNvbC1tYWluIj48ZGl2IGNsYXNzPSJ1aWUtcGFuZWwtbWVudS1jb250ZW50Ij48bGFiZWwgY2xhc3M9InVpZS1sYWJlbCIgZm9yPSIke2NiX2lkfSI+PGlucHV0IGNsYXNzPSJ1aWUtY2hlY2tib3giIHR5cGU9ImNoZWNrYm94IiBpZD0iJHtjYl9pZH0iICR7Y2JfdmFsfT4gPHNwYW4gY2xhc3M9InVpZS1sYWJlbC10ZXh0Ij4ke3RpdGxlfTwvc3Bhbj48L2xhYmVsPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9InVpZS1wYW5lbC1jb2wiPjxkaXYgY2xhc3M9InVpZS10ZXh0LWtiZCI+PGEgaHJlZj0iIyIgY2xhc3M9InVpZS10ZXh0LWtiZC1jdXN0b20iPjxrYmQ+Q3RybDwva2JkPiArIDxrYmQ+fjwva2JkPjwvYT48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJ1aWUtYmxvY2siIGlkPSJ1aWVPdXRsaW5lcyI+PGEgaHJlZj0iIyIgY2xhc3M9InVpZS1hY2NvcmRpb24tYWN0aW9uIj48ZGl2IGNsYXNzPSJ1aWUtaHIiPjxoMyBjbGFzcz0idWllLWJsb2NrLXRpdGxlIj5PdXRsaW5lczwvaDM+PC9kaXY+PC9hPjxkaXYgY2xhc3M9InVpZS1hY2NvcmRpb24tcGFuZWwiIGlkPSJ1aWVPdXRsaW5lc0NvbnRlbnQiPjxkaXYgY2xhc3M9InVpZS1wYW5lbC1yb3ciIGlkPSIke2lkfSI+PGRpdiBjbGFzcz0idWllLXBhbmVsLWNvbCB1aWUtcGFuZWwtY29sLW1haW4iPjxkaXYgY2xhc3M9InVpZS1wYW5lbC1tZW51LWluZGljYXRvciIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6dWllLWJnLWNvbG9yIj48L2Rpdj48ZGl2IGNsYXNzPSJ1aWUtcGFuZWwtbWVudS1jb250ZW50Ij48YSBocmVmPSIjIiBjbGFzcz0idWllLWJ0bi1zaHJpbmsgJHtzaHJpbmt9IiB0aXRsZT0iVG9nZ2xlIFByb3BlcnRpZXMiPjwvYT4gPGEgaHJlZj0iIyIgY2xhc3M9InVpZS1idG4tcmVtb3ZlIiB0aXRsZT0iUmVtb3ZlIj48L2E+IDxsYWJlbCBjbGFzcz0idWllLWxhYmVsIiBmb3I9IiR7Y2JfaWR9Ij48aW5wdXQgY2xhc3M9InVpZS1jaGVja2JveCIgdHlwZT0iY2hlY2tib3giIGlkPSIke2NiX2lkfSIgJHtjYl92YWx9PiA8c3BhbiBjbGFzcz0idWllLWxhYmVsLXRleHQiPiR7dGl0bGV9PC9zcGFuPjwvbGFiZWw+PHVsIGNsYXNzPSJ1aWUtcGFuZWwtc3ViIj48bGkgY2xhc3M9InVpZS1wYW5lbC1zdWItaXRlbSI+PGRpdiBjbGFzcz0idWllLXJvdyI+PGRpdiBjbGFzcz0idWllLWNvbCB1aWUtY29sLW1haW4iPjxsYWJlbCBjbGFzcz0idWllLWxhYmVsIiBmb3I9IiR7aWRfY29sb3J9Ij5Db2xvcjo8L2xhYmVsPjwvZGl2PjxkaXYgY2xhc3M9InVpZS1jb2wiPjxpbnB1dCBjbGFzcz0idWllLWNvbG9yIiB0eXBlPSJjb2xvciIgaWQ9IiR7aWRfY29sb3J9IiB2YWx1ZT0iJHtpZF9jb2xvcl92YWx9IiBsaXN0PSJ1aWUtY29sb3Itc2VjdGlvbi1wcmVzZXQiPjwvZGl2PjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJ1aWUtcGFuZWwtc3ViLWl0ZW0iPjxkaXYgY2xhc3M9InVpZS1yb3ciPjxkaXYgY2xhc3M9InVpZS1jb2wgdWllLWNvbC1tYWluIj48bGFiZWwgZm9yPSIke2lkX3dpZHRofSI+V2lkdGg6PC9sYWJlbD48L2Rpdj48ZGl2IGNsYXNzPSJ1aWUtY29sIj48aW5wdXQgY2xhc3M9InVpZS1udW1iZXIiIHR5cGU9Im51bWJlciIgaWQ9IiR7aWRfd2lkdGh9IiB2YWx1ZT0iJHtpZF93aWR0aF92YWx9IiBtaW49IjEiIG1heD0iMyI+PC9kaXY+PC9kaXY+PC9saT48L3VsPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9InVpZS1wYW5lbC1yb3ciPjxkaXYgY2xhc3M9InVpZS1wYW5lbC1jb2wgdWllLXBhbmVsLWNvbC1tYWluIj48ZGl2IGNsYXNzPSJ1aWUtbmV3LWl0ZW0iPjxpbnB1dCBjbGFzcz0idWllLWlucHV0IiB0eXBlPSJ0ZXh0IiBsaXN0PSJ1aWUtZWxlbWVudHMtZGF0YWxpc3QiPiA8YSBjbGFzcz0idWllLWJ0bi1hZGQtbmV3IiBocmVmPSIjIiBhcmlhLWxhYmVsPSJBZGQgTmV3IE91dGxpbmUgRWxlbWVudCI+PC9hPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjxkYXRhbGlzdCBjbGFzcz0idWllLWNvbG9ycy1kYXRhbGlzdCIgaWQ9InVpZS1jb2xvci1zZWN0aW9uLXByZXNldCI+PG9wdGlvbj4jRkZGRjAwPC9vcHRpb24+PG9wdGlvbj4jRkYwMEZGPC9vcHRpb24+PG9wdGlvbj4jMDBGRkZGPC9vcHRpb24+PG9wdGlvbj4jMDBGRjAwPC9vcHRpb24+PG9wdGlvbj4jMDAwMEZGPC9vcHRpb24+PG9wdGlvbj4jODA4MDgwPC9vcHRpb24+PG9wdGlvbj4jMDA4MDAwPC9vcHRpb24+PG9wdGlvbj4jODAwMDAwPC9vcHRpb24+PG9wdGlvbj4jMDAwMDgwPC9vcHRpb24+PG9wdGlvbj4jODA4MDAwPC9vcHRpb24+PG9wdGlvbj4jODAwMDgwPC9vcHRpb24+PG9wdGlvbj4jRkYwMDAwPC9vcHRpb24+PG9wdGlvbj4jQzBDMEMwPC9vcHRpb24+PG9wdGlvbj4jMDA4MDgwPC9vcHRpb24+PG9wdGlvbj4jNEIwMDgyPC9vcHRpb24+PC9kYXRhbGlzdD48ZGF0YWxpc3QgaWQ9InVpZS1lbGVtZW50cy1kYXRhbGlzdCI+PG9wdGlvbiB2YWx1ZT0ic2VjdGlvbiI+PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0iZGl2Ij48L29wdGlvbj48b3B0aW9uIHZhbHVlPSJwIj48L29wdGlvbj48b3B0aW9uIHZhbHVlPSJuYXYiPjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9Ii5jbGFzc25hbWUiPjwvb3B0aW9uPjwvZGF0YWxpc3Q+PC9kaXY+PC9kaXY+PC9ib2R5PjwvaHRtbD4=";

	var styles = "data:text/css;base64,LnVpZS1idG57YmFja2dyb3VuZDpyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCMwMDAsIzAwMCAycHgsI2ZmMCAwLCNmZjAgNHB4KTtib3JkZXI6MDtjb2xvcjojMDAwO2hlaWdodDozMXB4O2xlZnQ6LTMzcHg7bWFyZ2luOjA7b3V0bGluZTowO3BhZGRpbmc6MnB4O3Bvc2l0aW9uOmZpeGVkO3RvcDowO3RyYW5zaXRpb246YWxsIC4xczt3aWR0aDozMXB4fS51aWUtYnRuOmhvdmVye2xlZnQ6MH0udWllLWJ0bi1tYXR7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQ6I2ZmZjtib3JkZXI6MDtkaXNwbGF5OmZsZXg7aGVpZ2h0OjEwMCU7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MDtvdXRsaW5lOjA7cGFkZGluZzowO3dpZHRoOjEwMCV9LnVpZS1wYW5lbHthbGw6aW5pdGlhbDtkaXNwbGF5Om5vbmV9LnVpZS1wYW5lbC5hY3RpdmV7ZGlzcGxheTpibG9ja30udWllLXBhbmVsICp7YWxsOnVuc2V0fS51aWUtcGFuZWwgKiwudWllLXBhbmVsIDphZnRlciwudWllLXBhbmVsIDpiZWZvcmV7Ym94LXNpemluZzpib3JkZXItYm94fS51aWUtcGFuZWwgKiBhe2N1cnNvcjpwb2ludGVyfS51aWUtY29sb3JzLWRhdGFsaXN0e2Rpc3BsYXk6bm9uZX0udWllLXBhbmVsLWNvbnRhaW5lcntiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyOjFweCBkYXNoZWQgIzAwMDtib3gtc2hhZG93OjFweCAxcHggM3B4ICNjY2M7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7bGVmdDowO21pbi13aWR0aDoxNjBweDtvdXRsaW5lOjA7cGFkZGluZzowO3Bvc2l0aW9uOmZpeGVkO3RvcDowfS51aWUtcGFuZWwtcm93e2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O3BhZGRpbmc6MXB4fS51aWUtcGFuZWwtY29se2Rpc3BsYXk6ZmxleH0udWllLXBhbmVsLWNvbC1tYWlue3dpZHRoOjEwMCV9LnVpZS1yb3d7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleH0udWllLWNvbC1tYWlue3dpZHRoOjEwMCV9LnVpZS10b3AtaGVhZGVye2JhY2tncm91bmQ6I2ZmZjtkaXNwbGF5OmJsb2NrO2Rpc3BsYXk6ZmxleDtmb250LXNpemU6OHB4fS51aWUtdG9wLXRpdGxle3BhZGRpbmc6NXB4O3dpZHRoOjEwMCV9LnVpZS10b3AtaGVhZGVyLWFjdGlvbntkaXNwbGF5OmZsZXh9LnVpZS10b3AtaGVhZGVyLWFjdGlvbi1idG57YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6Izc3NztkaXNwbGF5OmZsZXg7aGVpZ2h0OjE1cHg7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46M3B4Oy13ZWJraXQtbWFzay1pbWFnZTp1cmwoImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeE5pSWdhR1ZwWjJoMFBTSXhOaUlnWm1sc2JEMGlZM1Z5Y21WdWRFTnZiRzl5SWlCamJHRnpjejBpWW1rZ1lta3RlQ0krUEhCaGRHZ2daRDBpVFRRdU5qUTJJRFF1TmpRMllTNDFMalVnTUNBd0lERWdMamN3T0NBd1REZ2dOeTR5T1ROc01pNDJORFl0TWk0Mk5EZGhMalV1TlNBd0lEQWdNU0F1TnpBNExqY3dPRXc0TGpjd055QTRiREl1TmpRM0lESXVOalEyWVM0MUxqVWdNQ0F3SURFdExqY3dPQzQzTURoTU9DQTRMamN3TjJ3dE1pNDJORFlnTWk0Mk5EZGhMalV1TlNBd0lEQWdNUzB1TnpBNExTNDNNRGhNTnk0eU9UTWdPQ0EwTGpZME5pQTFMak0xTkdFdU5TNDFJREFnTUNBeElEQXRMamN3T0hvaUx6NDhMM04yWno0PSIpO21hc2staW1hZ2U6dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhOaUlnYUdWcFoyaDBQU0l4TmlJZ1ptbHNiRDBpWTNWeWNtVnVkRU52Ykc5eUlpQmpiR0Z6Y3owaVlta2dZbWt0ZUNJK1BIQmhkR2dnWkQwaVRUUXVOalEySURRdU5qUTJZUzQxTGpVZ01DQXdJREVnTGpjd09DQXdURGdnTnk0eU9UTnNNaTQyTkRZdE1pNDJORGRoTGpVdU5TQXdJREFnTVNBdU56QTRMamN3T0V3NExqY3dOeUE0YkRJdU5qUTNJREl1TmpRMllTNDFMalVnTUNBd0lERXRMamN3T0M0M01EaE1PQ0E0TGpjd04yd3RNaTQyTkRZZ01pNDJORGRoTGpVdU5TQXdJREFnTVMwdU56QTRMUzQzTURoTU55NHlPVE1nT0NBMExqWTBOaUExTGpNMU5HRXVOUzQxSURBZ01DQXhJREF0TGpjd09Ib2lMejQ4TDNOMlp6ND0iKTstd2Via2l0LW1hc2stcG9zaXRpb246Y2VudGVyO21hc2stcG9zaXRpb246Y2VudGVyOy13ZWJraXQtbWFzay1yZXBlYXQ6bm8tcmVwZWF0O21hc2stcmVwZWF0Om5vLXJlcGVhdDstd2Via2l0LW1hc2stc2l6ZToxNHB4IDE0cHg7bWFzay1zaXplOjE0cHggMTRweDt3aWR0aDoxNXB4fS51aWUtdG9wLWhlYWRlci1hY3Rpb24tYnRuOmhvdmVye2JhY2tncm91bmQ6IzAwMH0udWllLWhye2Rpc3BsYXk6YmxvY2t9LnVpZS1ibG9jay10aXRsZXtjb2xvcjojNzc3O2ZvbnQtc2l6ZTo4cHg7Zm9udC13ZWlnaHQ6NDAwO2xldHRlci1zcGFjaW5nOjFweDtsaW5lLWhlaWdodDoxOHB4O21hcmdpbjowO3BhZGRpbmc6MDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9LnVpZS10ZXh0LWtiZHtmb250LXNpemU6OHB4O3BhZGRpbmc6M3B4O3doaXRlLXNwYWNlOm5vd3JhcH0udWllLXRleHQta2JkIGtiZHtiYWNrZ3JvdW5kOiNlZWU7Ym9yZGVyLXJhZGl1czoycHg7Ym94LXNoYWRvdzowIDFweCAxcHggIzAwMDtwYWRkaW5nOjNweH0udWllLXRleHQta2JkLWN1c3RvbXtkaXNwbGF5OmJsb2NrfS51aWUtYWNjb3JkaW9uLWFjdGlvbntiYWNrZ3JvdW5kOiNlZWU7Y29sb3I6IzAwMDtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6M3B4O3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtZGVjb3JhdGlvbjpub25lfS51aWUtYWNjb3JkaW9uLWFjdGlvbjpiZWZvcmV7YmFja2dyb3VuZDp1cmwoImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeE5pSWdhR1ZwWjJoMFBTSXhOaUlnWm1sc2JEMGlZM1Z5Y21WdWRFTnZiRzl5SWlCamJHRnpjejBpWW1rZ1lta3RZMmhsZG5KdmJpMTFjQ0krUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk55NDJORFlnTkM0Mk5EWmhMalV1TlNBd0lEQWdNU0F1TnpBNElEQnNOaUEyWVM0MUxqVWdNQ0F3SURFdExqY3dPQzQzTURoTU9DQTFMamN3TjJ3dE5TNDJORFlnTlM0Mk5EZGhMalV1TlNBd0lEQWdNUzB1TnpBNExTNDNNRGhzTmkwMmVpSXZQand2YzNablBnPT0iKSAwIDAgbm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTpjb250YWluO2NvbG9yOiM3Nzc7Y29udGVudDoiIjtmb250LXNpemU6MThweDtoZWlnaHQ6OHB4O2xpbmUtaGVpZ2h0OjE4cHg7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6M3B4O3RvcDo4cHg7d2lkdGg6OHB4fS51aWUtYWNjb3JkaW9uLWFjdGlvbi5oaWRlOmJlZm9yZXt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9LnVpZS1hY2NvcmRpb24tYWN0aW9uLmhpZGV+LnVpZS1hY2NvcmRpb24tcGFuZWx7ZGlzcGxheTpub25lfS51aWUtYnRuLW1lbnUtdG9nZ2xle2NvbG9yOiNjY2M7ZGlzcGxheTpibG9jaztoZWlnaHQ6MTJweDtsaW5lLWhlaWdodDoxMnB4O291dGxpbmU6MDtwb3NpdGlvbjpyZWxhdGl2ZTt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZTt3aWR0aDoxMnB4fS51aWUtcGFuZWwtbWVudS1hY3Rpb257cGFkZGluZzozcHh9LnVpZS1wYW5lbC1tZW51LWluZGljYXRvcntiYWNrZ3JvdW5kOiNjY2M7d2lkdGg6MnB4fS51aWUtcGFuZWwtbWVudS1jb250ZW50e3BhZGRpbmc6M3B4O3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9LnVpZS1wYW5lbC1tZW51LWNvbnRlbnQgLnVpZS1idG4tcmVtb3ZlLC51aWUtcGFuZWwtbWVudS1jb250ZW50IC51aWUtYnRuLXNocmlua3tkaXNwbGF5Om5vbmV9LnVpZS1wYW5lbC1tZW51LWNvbnRlbnQ6aG92ZXIgLnVpZS1idG4tcmVtb3ZlLC51aWUtcGFuZWwtbWVudS1jb250ZW50OmhvdmVyIC51aWUtYnRuLXNocmlua3tkaXNwbGF5OmJsb2NrfS51aWUtcGFuZWwtc3Vie2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjA7cGFkZGluZzo1cHggMH0udWllLXBhbmVsLXN1Yi1pdGVte2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjEwcHg7bGlzdC1zdHlsZTpub25lO21hcmdpbjowO3BhZGRpbmc6M3B4IDB9LnVpZS1uZXctaXRlbXtkaXNwbGF5OmZsZXg7cGFkZGluZzozcHh9LnVpZS1idG4tYWRkLW5ld3tiYWNrZ3JvdW5kOiNjY2M7YmFja2dyb3VuZC1jb2xvcjojNzc3O2JhY2tncm91bmQtc2l6ZTpjb250YWluO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjE0cHg7bWFyZ2luLWxlZnQ6M3B4O21hcmdpbi10b3A6MXB4Oy13ZWJraXQtbWFzay1pbWFnZTp1cmwoImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeE5pSWdhR1ZwWjJoMFBTSXhOaUlnWm1sc2JEMGlZM1Z5Y21WdWRFTnZiRzl5SWlCamJHRnpjejBpWW1rZ1lta3RjR3gxY3kxamFYSmpiR1VpUGp4d1lYUm9JR1E5SWswNElERTFRVGNnTnlBd0lERWdNU0E0SURGaE55QTNJREFnTUNBeElEQWdNVFI2YlRBZ01VRTRJRGdnTUNBeElEQWdPQ0F3WVRnZ09DQXdJREFnTUNBd0lERTJlaUl2UGp4d1lYUm9JR1E5SWswNElEUmhMalV1TlNBd0lEQWdNU0F1TlM0MWRqTm9NMkV1TlM0MUlEQWdNQ0F4SURBZ01XZ3RNM1l6WVM0MUxqVWdNQ0F3SURFdE1TQXdkaTB6YUMwellTNDFMalVnTUNBd0lERWdNQzB4YUROMkxUTkJMalV1TlNBd0lEQWdNU0E0SURSNklpOCtQQzl6ZG1jKyIpO21hc2staW1hZ2U6dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhOaUlnYUdWcFoyaDBQU0l4TmlJZ1ptbHNiRDBpWTNWeWNtVnVkRU52Ykc5eUlpQmpiR0Z6Y3owaVlta2dZbWt0Y0d4MWN5MWphWEpqYkdVaVBqeHdZWFJvSUdROUlrMDRJREUxUVRjZ055QXdJREVnTVNBNElERmhOeUEzSURBZ01DQXhJREFnTVRSNmJUQWdNVUU0SURnZ01DQXhJREFnT0NBd1lUZ2dPQ0F3SURBZ01DQXdJREUyZWlJdlBqeHdZWFJvSUdROUlrMDRJRFJoTGpVdU5TQXdJREFnTVNBdU5TNDFkak5vTTJFdU5TNDFJREFnTUNBeElEQWdNV2d0TTNZellTNDFMalVnTUNBd0lERXRNU0F3ZGkwemFDMHpZUzQxTGpVZ01DQXdJREVnTUMweGFETjJMVE5CTGpVdU5TQXdJREFnTVNBNElEUjZJaTgrUEM5emRtYysiKTstd2Via2l0LW1hc2stcmVwZWF0Om5vLXJlcGVhdDttYXNrLXJlcGVhdDpuby1yZXBlYXQ7LXdlYmtpdC1tYXNrLXNpemU6MTRweCAxNHB4O21hc2stc2l6ZToxNHB4IDE0cHg7cGFkZGluZzozcHg7d2lkdGg6MTRweH0udWllLWJ0bi1hZGQtbmV3OmhvdmVye29wYWNpdHk6LjZ9LnVpZS1idG4tc2hyaW5re2JhY2tncm91bmQ6Izc3NztoZWlnaHQ6MTdweDstd2Via2l0LW1hc2staW1hZ2U6dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhOaUlnYUdWcFoyaDBQU0l4TmlJZ1ptbHNiRDBpWTNWeWNtVnVkRU52Ykc5eUlpQmpiR0Z6Y3owaVlta2dZbWt0WTJobGRuSnZiaTExY0NJK1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5OeTQyTkRZZ05DNDJORFpoTGpVdU5TQXdJREFnTVNBdU56QTRJREJzTmlBMllTNDFMalVnTUNBd0lERXRMamN3T0M0M01EaE1PQ0ExTGpjd04yd3ROUzQyTkRZZ05TNDJORGRoTGpVdU5TQXdJREFnTVMwdU56QTRMUzQzTURoc05pMDJlaUl2UGp3dmMzWm5QZz09Iik7bWFzay1pbWFnZTp1cmwoImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeE5pSWdhR1ZwWjJoMFBTSXhOaUlnWm1sc2JEMGlZM1Z5Y21WdWRFTnZiRzl5SWlCamJHRnpjejBpWW1rZ1lta3RZMmhsZG5KdmJpMTFjQ0krUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk55NDJORFlnTkM0Mk5EWmhMalV1TlNBd0lEQWdNU0F1TnpBNElEQnNOaUEyWVM0MUxqVWdNQ0F3SURFdExqY3dPQzQzTURoTU9DQTFMamN3TjJ3dE5TNDJORFlnTlM0Mk5EZGhMalV1TlNBd0lEQWdNUzB1TnpBNExTNDNNRGhzTmkwMmVpSXZQand2YzNablBnPT0iKTstd2Via2l0LW1hc2stcG9zaXRpb246Y2VudGVyO21hc2stcG9zaXRpb246Y2VudGVyOy13ZWJraXQtbWFzay1yZXBlYXQ6bm8tcmVwZWF0O21hc2stcmVwZWF0Om5vLXJlcGVhdDstd2Via2l0LW1hc2stc2l6ZTo4cHggOHB4O21hc2stc2l6ZTo4cHggOHB4O3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjIwcHg7dG9wOjJweDt3aWR0aDoxN3B4fS51aWUtYnRuLXNocmluazpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOmJsdWV9LnVpZS1idG4tc2hyaW5rLmhpZGV7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfS51aWUtYnRuLXNocmluay5oaWRlfi51aWUtcGFuZWwtc3Vie2Rpc3BsYXk6bm9uZX0udWllLWJ0bi1yZW1vdmV7YmFja2dyb3VuZC1jb2xvcjojNzc3O2hlaWdodDoxN3B4Oy13ZWJraXQtbWFzay1pbWFnZTp1cmwoImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeE5pSWdhR1ZwWjJoMFBTSXhOaUlnWm1sc2JEMGlZM1Z5Y21WdWRFTnZiRzl5SWlCamJHRnpjejBpWW1rZ1lta3RlQ0krUEhCaGRHZ2daRDBpVFRRdU5qUTJJRFF1TmpRMllTNDFMalVnTUNBd0lERWdMamN3T0NBd1REZ2dOeTR5T1ROc01pNDJORFl0TWk0Mk5EZGhMalV1TlNBd0lEQWdNU0F1TnpBNExqY3dPRXc0TGpjd055QTRiREl1TmpRM0lESXVOalEyWVM0MUxqVWdNQ0F3SURFdExqY3dPQzQzTURoTU9DQTRMamN3TjJ3dE1pNDJORFlnTWk0Mk5EZGhMalV1TlNBd0lEQWdNUzB1TnpBNExTNDNNRGhNTnk0eU9UTWdPQ0EwTGpZME5pQTFMak0xTkdFdU5TNDFJREFnTUNBeElEQXRMamN3T0hvaUx6NDhMM04yWno0PSIpO21hc2staW1hZ2U6dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhOaUlnYUdWcFoyaDBQU0l4TmlJZ1ptbHNiRDBpWTNWeWNtVnVkRU52Ykc5eUlpQmpiR0Z6Y3owaVlta2dZbWt0ZUNJK1BIQmhkR2dnWkQwaVRUUXVOalEySURRdU5qUTJZUzQxTGpVZ01DQXdJREVnTGpjd09DQXdURGdnTnk0eU9UTnNNaTQyTkRZdE1pNDJORGRoTGpVdU5TQXdJREFnTVNBdU56QTRMamN3T0V3NExqY3dOeUE0YkRJdU5qUTNJREl1TmpRMllTNDFMalVnTUNBd0lERXRMamN3T0M0M01EaE1PQ0E0TGpjd04yd3RNaTQyTkRZZ01pNDJORGRoTGpVdU5TQXdJREFnTVMwdU56QTRMUzQzTURoTU55NHlPVE1nT0NBMExqWTBOaUExTGpNMU5HRXVOUzQxSURBZ01DQXhJREF0TGpjd09Ib2lMejQ4TDNOMlp6ND0iKTstd2Via2l0LW1hc2stcG9zaXRpb246Y2VudGVyO21hc2stcG9zaXRpb246Y2VudGVyOy13ZWJraXQtbWFzay1yZXBlYXQ6bm8tcmVwZWF0O21hc2stcmVwZWF0Om5vLXJlcGVhdDstd2Via2l0LW1hc2stc2l6ZToxNHB4IDE0cHg7bWFzay1zaXplOjE0cHggMTRweDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDoycHg7d2lkdGg6MTdweH0udWllLWJ0bi1yZW1vdmU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZWR9LnVpZS1jb2xvcntib3JkZXI6MH0udWllLWNoZWNrYm94LC51aWUtY29sb3J7aGVpZ2h0OjEycHg7bWFyZ2luOjA7b3V0bGluZTowO3BhZGRpbmc6MDt3aWR0aDoxMnB4fS51aWUtY2hlY2tib3h7Ym94LXNoYWRvdzowO2xlZnQ6LTEwMDBweDtwb3NpdGlvbjphYnNvbHV0ZX0udWllLWNoZWNrYm94OmNoZWNrZWR+LnVpZS1sYWJlbC10ZXh0OmJlZm9yZXtiYWNrZ3JvdW5kOnVybCgiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0l4TmlJZ2FHVnBaMmgwUFNJeE5pSWdabWxzYkQwaVkzVnljbVZ1ZEVOdmJHOXlJaUJqYkdGemN6MGlZbWtnWW1rdFpYbGxJajQ4Y0dGMGFDQmtQU0pOTVRZZ09ITXRNeTAxTGpVdE9DMDFMalZUTUNBNElEQWdPSE16SURVdU5TQTRJRFV1TlZNeE5pQTRJREUySURoNlRURXVNVGN6SURoaE1UTXVNVE16SURFekxqRXpNeUF3SURBZ01TQXhMalkyTFRJdU1EUXpRelF1TVRJZ05DNDJOamdnTlM0NE9DQXpMalVnT0NBekxqVmpNaTR4TWlBd0lETXVPRGM1SURFdU1UWTRJRFV1TVRZNElESXVORFUzUVRFekxqRXpNeUF4TXk0eE16TWdNQ0F3SURFZ01UUXVPREk0SURoakxTNHdOVGd1TURnM0xTNHhNakl1TVRnekxTNHhPVFV1TWpnNExTNHpNelV1TkRndExqZ3pJREV1TVRJdE1TNDBOalVnTVM0M05UVkRNVEV1T0RjNUlERXhMak16TWlBeE1DNHhNVGtnTVRJdU5TQTRJREV5TGpWakxUSXVNVElnTUMwekxqZzNPUzB4TGpFMk9DMDFMakUyT0MweUxqUTFOMEV4TXk0eE16UWdNVE11TVRNMElEQWdNQ0F4SURFdU1UY3lJRGg2SWk4K1BIQmhkR2dnWkQwaVRUZ2dOUzQxWVRJdU5TQXlMalVnTUNBeElEQWdNQ0ExSURJdU5TQXlMalVnTUNBd0lEQWdNQzAxZWswMExqVWdPR0V6TGpVZ015NDFJREFnTVNBeElEY2dNQ0F6TGpVZ015NDFJREFnTUNBeExUY2dNSG9pTHo0OEwzTjJaejQ9Iikgbm8tcmVwZWF0IDAgMDtiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtvcGFjaXR5OjF9LnVpZS1sYWJlbC10ZXh0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmctbGVmdDoxNXB4O3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0udWllLWxhYmVsLXRleHQ6aG92ZXJ7Y29sb3I6IzAwMH0udWllLWxhYmVsLXRleHQ6YmVmb3Jle2JhY2tncm91bmQ6dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhOaUlnYUdWcFoyaDBQU0l4TmlJZ1ptbHNiRDBpWTNWeWNtVnVkRU52Ykc5eUlpQmpiR0Z6Y3owaVlta2dZbWt0WlhsbExYTnNZWE5vSWo0OGNHRjBhQ0JrUFNKTk1UTXVNelU1SURFeExqSXpPRU14TlM0d05pQTVMamN5SURFMklEZ2dNVFlnT0hNdE15MDFMalV0T0MwMUxqVmhOeTR3TWpnZ055NHdNamdnTUNBd0lEQXRNaTQzT1M0MU9EaHNMamMzTGpjM01VRTFMamswTkNBMUxqazBOQ0F3SURBZ01TQTRJRE11TldNeUxqRXlJREFnTXk0NE56a2dNUzR4TmpnZ05TNHhOamdnTWk0ME5UZEJNVE11TVRNMElERXpMakV6TkNBd0lEQWdNU0F4TkM0NE1qZ2dPR010TGpBMU9DNHdPRGN0TGpFeU1pNHhPRE10TGpFNU5TNHlPRGd0TGpNek5TNDBPQzB1T0RNZ01TNHhNaTB4TGpRMk5TQXhMamMxTlMwdU1UWTFMakUyTlMwdU16TTNMak15T0MwdU5URTNMalE0Tm13dU56QTRMamN3T1hvaUx6NDhjR0YwYUNCa1BTSk5NVEV1TWprM0lEa3VNVGMyWVRNdU5TQXpMalVnTUNBd0lEQXROQzQwTnpRdE5DNDBOelJzTGpneU15NDRNak5oTWk0MUlESXVOU0F3SURBZ01TQXlMamd5T1NBeUxqZ3lPV3d1T0RJeUxqZ3lNbnB0TFRJdU9UUXpJREV1TWprNUxqZ3lNaTQ0TWpKaE15NDFJRE11TlNBd0lEQWdNUzAwTGpRM05DMDBMalEzTkd3dU9ESXpMamd5TTJFeUxqVWdNaTQxSURBZ01DQXdJREl1T0RJNUlESXVPREk1ZWlJdlBqeHdZWFJvSUdROUlrMHpMak0xSURVdU5EZGpMUzR4T0M0eE5pMHVNelV6TGpNeU1pMHVOVEU0TGpRNE4wRXhNeTR4TXpRZ01UTXVNVE0wSURBZ01DQXdJREV1TVRjeUlEaHNMakU1TlM0eU9EaGpMak16TlM0ME9DNDRNeUF4TGpFeUlERXVORFkxSURFdU56VTFRelF1TVRJeElERXhMak16TWlBMUxqZzRNU0F4TWk0MUlEZ2dNVEl1TldNdU56RTJJREFnTVM0ek9TMHVNVE16SURJdU1ESXRMak0yYkM0M055NDNOekpCTnk0d01qa2dOeTR3TWprZ01DQXdJREVnT0NBeE15NDFRek1nTVRNdU5TQXdJRGdnTUNBNGN5NDVNemt0TVM0M01qRWdNaTQyTkRFdE15NHlNemhzTGpjd09DNDNNRGw2YlRFd0xqSTVOaUE0TGpnNE5DMHhNaTB4TWlBdU56QTRMUzQzTURnZ01USWdNVEl0TGpjd09DNDNNRGg2SWk4K1BDOXpkbWMrIikgbm8tcmVwZWF0IDAgMDtiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtjb250ZW50OiIiO2hlaWdodDoxMnB4O2xlZnQ6MDtvcGFjaXR5Oi42O3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxcHg7d2lkdGg6MTJweH0udWllLWxhYmVse2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6YmxvY2t9LnVpZS1udW1iZXJ7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2ZvbnQtc2l6ZTo5cHg7bWF4LXdpZHRoOjUwcHg7cGFkZGluZzozcHh9LnVpZS1pbnB1dHtib3JkZXI6MXB4IHNvbGlkICNjY2M7Zm9udC1zaXplOjEwcHg7cGFkZGluZzoycHh9";

	var general = {
		data: [
			{
				el: "outlines",
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
	var data = {
		general: general,
		outlines: outlines
	};

	var cfg = {
	  btn: {
	    html: btnHTML,
	    id: 'uieBtn'
	  },
	  panel: {
	    html: panelHTML,
	    id: 'uiePanel'
	  },
	  styles: styles,
	  data: data
	};
	UIExplorer(cfg);

}));
