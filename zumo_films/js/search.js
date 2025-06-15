
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/******************************************************************************/
//Search Example Interaction Plugin v0.0.1
//(c) 2019 Benjamin Zachey
/******************************************************************************/

/******************************************************************************/
//Search data
/******************************************************************************/
var MAX_INPUT_LENGTH = 32;
var MAX_PAGE_X = 12;
var MAX_PAGE_Y = 1;
var SEARCH_HEADLINE = "{ico:search} {INPUT}";
var RESULTS_HEADLINE = "{ITEMS} found";
var createInputButton = function createInputButton(input, key, x, y) {
  var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  return {
    type: "button",
    layout: x + "," + y + ",1,1",
    label: input,
    key: key,
    action: "interaction:commit",
    data: {
      action: "search:input:" + input
    },
    offset: "".concat(offset, ",0,0,0")
  };
};
var createControlButton = function createControlButton(control, key, x, y) {
  var label = null;
  if (control == "back") {
    label = "{ico:backspace}";
  } else if (control == "clear") {
    label = "{ico:clear}";
  } else if (control == "space") {
    label = "{ico:space-bar}";
  } else if (control == "language") {
    label = "{ico:language}";
  }
  return {
    type: "button",
    layout: x + "," + y + ",3,1",
    label: label,
    key: key,
    action: "interaction:commit",
    data: {
      action: "search:control:" + control
    }
  };
};
var numberKeys = [createInputButton("1", "1", 1, 0), createInputButton("2", "2", 2, 0), createInputButton("3", "3", 3, 0), createInputButton("4", "4", 4, 0), createInputButton("5", "5", 5, 0), createInputButton("6", "6", 6, 0), createInputButton("7", "7", 7, 0), createInputButton("8", "8", 8, 0), createInputButton("9", "9", 9, 0), createInputButton("0", "0", 10, 0)];
var controlKeys = [createControlButton("back", "delete", 0, 4), createControlButton("clear", "home|end", 3, 4), createControlButton("space", "space|insert", 6, 4), createControlButton("language", "tab", 9, 4)];
var enKeys = [].concat(numberKeys, [
// First row
createInputButton("Q", "q", 1, 1), createInputButton("W", "w", 2, 1), createInputButton("E", "e", 3, 1), createInputButton("R", "r", 4, 1), createInputButton("T", "t", 5, 1), createInputButton("Y", "y", 6, 1), createInputButton("U", "u", 7, 1), createInputButton("I", "i", 8, 1), createInputButton("O", "o", 9, 1), createInputButton("P", "p", 10, 1),
// Second row
createInputButton("A", "a", 1, 2, 0.5), createInputButton("S", "s", 2, 2, 0.5), createInputButton("D", "d", 3, 2, 0.5), createInputButton("F", "f", 4, 2, 0.5), createInputButton("G", "g", 5, 2, 0.5), createInputButton("H", "h", 6, 2, 0.5), createInputButton("J", "j", 7, 2, 0.5), createInputButton("K", "k", 8, 2, 0.5), createInputButton("L", "l", 9, 2, 0.5),
// Third Row
createInputButton("Z", "Z", 1, 3, 0.5), createInputButton("X", "X", 2, 3, 0.5), createInputButton("C", "C", 3, 3, 0.5), createInputButton("V", "V", 4, 3, 0.5), createInputButton("B", "B", 5, 3, 0.5), createInputButton("N", "N", 6, 3, 0.5), createInputButton("M", "m", 7, 3, 0.5), createInputButton(",", ",", 8, 3, 0.5), createInputButton(".", ".", 9, 3, 0.5), createInputButton("?", "?", 10, 3, 0.5)], controlKeys);
var ruKeys = [].concat(numberKeys, [
// First row
createInputButton("Р™", "Р№", 0, 1), createInputButton("Р¦", "С†", 1, 1), createInputButton("РЈ", "Сѓ", 2, 1), createInputButton("Рљ", "Рє", 3, 1), createInputButton("Р•", "Рµ", 4, 1), createInputButton("Рќ", "РЅ", 5, 1), createInputButton("Р“", "Рі", 6, 1), createInputButton("РЁ", "С€", 7, 1), createInputButton("Р©", "С‰", 8, 1), createInputButton("Р—", "Р·", 9, 1), createInputButton("РҐ", "С…", 10, 1), createInputButton("РЄ", "СЉ", 11, 1),
// Second row
createInputButton("Р¤", "С„", 0, 2), createInputButton("Р«", "С‹", 1, 2), createInputButton("Р’", "РІ", 2, 2), createInputButton("Рђ", "Р°", 3, 2), createInputButton("Рџ", "Рї", 4, 2), createInputButton("Р ", "СЂ", 5, 2), createInputButton("Рћ", "Рѕ", 6, 2), createInputButton("Р›", "Р»", 7, 2), createInputButton("Р”", "Рґ", 8, 2), createInputButton("Р–", "Р¶", 9, 2), createInputButton("Р­", "СЌ", 10, 2), createInputButton("РЃ", "С‘", 11, 2),
// Third Row
createInputButton("РЇ", "СЏ", 0, 3), createInputButton("Р§", "С‡", 1, 3), createInputButton("РЎ", "СЃ", 2, 3), createInputButton("Рњ", "Рј", 3, 3), createInputButton("Р", "Рё", 4, 3), createInputButton("Рў", "С‚", 5, 3), createInputButton("Р¬", "СЊ", 6, 3), createInputButton("Р‘", "Р±", 7, 3), createInputButton("Р®", "СЋ", 8, 3), createInputButton(",", ",", 9, 3), createInputButton(".", ".", 10, 3), createInputButton("?", "?", 11, 3)], controlKeys);
var inputPage = {
  headline: null,
  offset: "0,0,0,0.5",
  items: enKeys
};
var search = {
  cache: false,
  type: "list",
  important: true,
  headline: null,
  pages: null
};

/******************************************************************************/

/******************************************************************************/
//SearchHandler
/******************************************************************************/
function SearchHandler() {
  var searchInput = TVXServices.urlParams.getFullStr("input", "");
  var testItems = null;
  var resultItems = null;
  var lang = "EN";
  var createPages = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(movies, pageCallback) {
      var x, y, w, h, page, resu, json_resu, _iterator, _step, movie, rating, pageItem, pageSerialBadge;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            x = 0;
            y = 0;
            w = 2;
            h = 4;
            page = null;
            _context.next = 7;
            return fetch("/envs/url");
          case 7:
            resu = _context.sent;
            _context.next = 10;
            return resu.json();
          case 10:
            json_resu = _context.sent;
            //Create icons
            if (movies != null && movies.length > 0) {
              _iterator = _createForOfIteratorHelper(movies);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  movie = _step.value;
                  rating = movie.ratings.kinopoisk.rating || "РќРµС‚";
                  pageItem = {
                    type: "separate",
                    layout: x + "," + y + "," + w + "," + h,
                    title: movie.title_ru,
                    image: movie.poster,
                    badge: "{col:msx-white}".concat(rating),
                    badgeColor: "msx-black-soft",
                    stamp: "{col:msx-black}".concat(movie.player.quality),
                    stampColor: "rgb(241, 161, 19)",
                    action: "content:".concat(json_resu.url, "/movie?movie_id=").concat(movie.kinopoisk_id),
                    offset: "0,-0.5,0,0"
                  }; // if (movie.type === "serial") {
                  //     pageItem.tag = "{col:msx-white}РЎРµСЂРёР°Р»";
                  //     pageItem.tagColor = "msx-black-soft";
                  // }
                  if (page == null) {
                    page = {
                      items: []
                    };
                    pageCallback(page);
                  }
                  page.items.push(pageItem);
                  if (movie.type === "serial") {
                    pageSerialBadge = {
                      type: "space",
                      color: "msx-black-soft",
                      layout: x + "," + (y + 1) + ",1,1",
                      text: "{col:msx-white}РЎРµСЂРёР°Р»",
                      centration: "text",
                      offset: "0,0.95,0.2,-0.525"
                    };
                    page.items.push(pageSerialBadge);
                  }
                  x += w;
                  if (x + w > MAX_PAGE_X) {
                    x = 0;
                    y += h;
                    if (y + h > MAX_PAGE_Y) {
                      y = 0;
                      page = null;
                    }
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function createPages(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleSearchInput = function handleSearchInput(input) {
    if (searchInput.length < MAX_INPUT_LENGTH) {
      searchInput += input;
    }
  };
  var handleSearchControl = function handleSearchControl(control) {
    if (control === "back") {
      if (searchInput.length > 0) {
        searchInput = searchInput.substr(0, searchInput.length - 1);
      }
    } else if (control === "clear") {
      searchInput = "";
    } else if (control === "space") {
      if (searchInput.length > 0 && searchInput.length < MAX_INPUT_LENGTH && searchInput[searchInput.length - 1] !== " ") {
        searchInput += " ";
      }
    } else if (control === "language") {
      if (lang === "EN") {
        search.pages[0].items = ruKeys;
        lang = "RU";
      } else if (lang === "RU") {
        search.pages[0].items = enKeys;
        lang = "EN";
      }
      TVXInteractionPlugin.executeAction("reload:content");
    } else {
      TVXInteractionPlugin.warn("Unknown search control: '" + control + "'");
    }
  };
  function fetchMovieSearchResults(title) {
    var searchUrl = "https://api.movielab.guru/api/v1/search/movies?title=".concat(title, "&sort_by=asc&page=1&limit=15");
    return fetch(searchUrl).then(function (response) {
      return response.json();
    })["catch"](function (error) {
      return TVXInteractionPlugin.error(error);
    });
  }
  var updateSearch = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var searchToken, res, movies;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            search.headline = SEARCH_HEADLINE.replace("{INPUT}", searchInput);
            search.pages = [inputPage];
            resultItems = [];
            //Filter icons
            if (!(searchInput.length > 1)) {
              _context2.next = 14;
              break;
            }
            searchToken = TVXTools.strTrim(searchInput.toLowerCase()); //.split(" ");
            _context2.next = 7;
            return fetchMovieSearchResults(searchToken);
          case 7:
            res = _context2.sent;
            movies = res.results;
            _context2.next = 11;
            return createPages(movies, function (page) {
              return search.pages.push(page);
            });
          case 11:
            inputPage.headline = RESULTS_HEADLINE.replace("{ITEMS}", movies.length + " " + (movies.length === 1 ? "Item" : "Items"));
            _context2.next = 15;
            break;
          case 14:
            inputPage.headline = null;
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function updateSearch() {
      return _ref2.apply(this, arguments);
    };
  }();
  var reloadSearch = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return updateSearch();
          case 2:
            TVXInteractionPlugin.executeAction("reload:content");
          case 3:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function reloadSearch() {
      return _ref3.apply(this, arguments);
    };
  }();
  var setupTestItems = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(callback) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!(typeof callback == "function")) {
              _context4.next = 8;
              break;
            }
            if (!(testItems != null && testItems.length > 0)) {
              _context4.next = 5;
              break;
            }
            callback();
            _context4.next = 8;
            break;
          case 5:
            _context4.next = 7;
            return updateSearch();
          case 7:
            // fetch("https://msx.benzac.de/interaction/data/icons.json", { mode: "no-cors"})
            //     .then(response => response.json())
            //     .then(data => {
            //         testItems = data;
            //         updateSearch();
            //         callback();
            //     })
            //     .catch(error => {
            //         TVXInteractionPlugin.error("Setup test items failed: " + error);
            //         testItems = null;
            //         updateSearch();
            //         callback();
            //     });
            callback();
          case 8:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function setupTestItems(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  this.init = function () {
    //Placeholder
  };
  this.ready = function () {
    //Placeholder
  };
  this.handleData = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(data) {
      var action, searchAction;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!(data.data != null && TVXTools.isFullStr(data.data.action))) {
              _context5.next = 33;
              break;
            }
            action = data.data.action;
            if (!(action.indexOf("search:") == 0)) {
              _context5.next = 30;
              break;
            }
            searchAction = action.substr(7);
            if (!(searchAction.indexOf("init:") == 0)) {
              _context5.next = 10;
              break;
            }
            searchInput = searchAction.substr(5);
            _context5.next = 8;
            return updateSearch();
          case 8:
            _context5.next = 28;
            break;
          case 10:
            if (!(searchAction.indexOf("input:") == 0)) {
              _context5.next = 16;
              break;
            }
            handleSearchInput(searchAction.substr(6));
            _context5.next = 14;
            return reloadSearch();
          case 14:
            _context5.next = 28;
            break;
          case 16:
            if (!(searchAction.indexOf("control:") == 0)) {
              _context5.next = 22;
              break;
            }
            handleSearchControl(searchAction.substr(8));
            _context5.next = 20;
            return reloadSearch();
          case 20:
            _context5.next = 28;
            break;
          case 22:
            if (!(searchAction == "reload")) {
              _context5.next = 27;
              break;
            }
            _context5.next = 25;
            return reloadSearch();
          case 25:
            _context5.next = 28;
            break;
          case 27:
            TVXInteractionPlugin.warn("Unknown search action: '" + searchAction + "'");
          case 28:
            _context5.next = 31;
            break;
          case 30:
            TVXInteractionPlugin.warn("Invalid search action: '" + action + "'");
          case 31:
            _context5.next = 34;
            break;
          case 33:
            TVXInteractionPlugin.warn("Unknown search data");
          case 34:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function (_x4) {
      return _ref5.apply(this, arguments);
    };
  }();
  this.handleRequest = function (dataId, data, callback) {
    if (dataId == "init") {
      setupTestItems(function () {
        callback(search);
      });
    } else {
      TVXInteractionPlugin.warn("Unknown request data ID: '" + dataId + "'");
      callback();
    }
  };
}
/******************************************************************************/

/******************************************************************************/
//Setup
/******************************************************************************/
TVXPluginTools.onReady(function () {
  TVXInteractionPlugin.setupHandler(new SearchHandler());
  TVXInteractionPlugin.init();
});
/******************************************************************************/
