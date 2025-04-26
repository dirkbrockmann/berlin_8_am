(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}._car_1nx4j_1{stroke:#000;stroke-width:1px}._tire_1nx4j_6{fill:#000;stroke:none}._street_background_1nx4j_11{stroke:#000;stroke-width:32;fill:none;stroke-linecap:round}._asphalt_1nx4j_18{stroke:#787878;stroke-width:29;fill:none;stroke-linecap:round}._street_marks_1nx4j_25{stroke:#fff;stroke-width:1;fill:none;stroke-dasharray:4}._tachoborder_1nx4j_36{fill:none;stroke:#000;stroke-width:1.5px}._tachoredzone_1nx4j_42{fill:none;stroke:red;stroke-opacity:.3;stroke-width:7;stroke-linecap:round}._tachotick_1nx4j_50{fill:none;stroke:#000;stroke-width:1px}._ticklabel_1nx4j_56{font-size:10;text-anchor:middle}._pin_1nx4j_62{stroke:#000;stroke-width:1px;stroke-linecap:round;stroke-opacity:.1}._meanspeed_1nx4j_69{stroke:#b40000;stroke-width:5px;stroke-linecap:round;stroke-opacity:1}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const na = {
  display_type: "svg",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function un(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function ea(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Dr(t) {
  let n, e, r;
  t.length !== 2 ? (n = un, e = (s, u) => un(t(s), u), r = (s, u) => t(s) - u) : (n = t === un || t === ea ? t : ra, e = t, r = t);
  function i(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (n(u, u) !== 0) return c;
      do {
        const f = l + c >>> 1;
        e(s[f], u) < 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function a(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (n(u, u) !== 0) return c;
      do {
        const f = l + c >>> 1;
        e(s[f], u) <= 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function o(s, u, l = 0, c = s.length) {
    const f = i(s, u, l, c - 1);
    return f > l && r(s[f - 1], u) > -r(s[f], u) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function ra() {
  return 0;
}
function ia(t) {
  return t === null ? NaN : +t;
}
const aa = Dr(un), oa = aa.right;
Dr(ia).center;
const sa = Math.sqrt(50), ua = Math.sqrt(10), la = Math.sqrt(2);
function gn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= sa ? 10 : a >= ua ? 5 : a >= la ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / o, s = Math.round(t * l), u = Math.round(n * l), s / l < t && ++s, u / l > n && --u, l = -l) : (l = Math.pow(10, i) * o, s = Math.round(t / l), u = Math.round(n / l), s * l < t && ++s, u * l > n && --u), u < s && 0.5 <= e && e < 2 ? gn(t, n, e * 2) : [s, u, l];
}
function fa(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? gn(n, t, e) : gn(t, n, e);
  if (!(a >= i)) return [];
  const s = a - i + 1, u = new Array(s);
  if (r)
    if (o < 0) for (let l = 0; l < s; ++l) u[l] = (a - l) / -o;
    else for (let l = 0; l < s; ++l) u[l] = (a - l) * o;
  else if (o < 0) for (let l = 0; l < s; ++l) u[l] = (i + l) / -o;
  else for (let l = 0; l < s; ++l) u[l] = (i + l) * o;
  return u;
}
function Jn(t, n, e) {
  return n = +n, t = +t, e = +e, gn(t, n, e)[2];
}
function ca(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Jn(n, t, e) : Jn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Ct(t, n) {
  let e;
  if (n === void 0)
    for (const r of t)
      r != null && (e < r || e === void 0 && r >= r) && (e = r);
  else {
    let r = -1;
    for (let i of t)
      (i = n(i, ++r, t)) != null && (e < i || e === void 0 && i >= i) && (e = i);
  }
  return e;
}
function ha(t, n) {
  let e;
  if (n === void 0)
    for (const r of t)
      r != null && (e > r || e === void 0 && r >= r) && (e = r);
  else {
    let r = -1;
    for (let i of t)
      (i = n(i, ++r, t)) != null && (e > i || e === void 0 && i >= i) && (e = i);
  }
  return e;
}
function Hr(t, n) {
  let e = 0, r = 0;
  if (n === void 0)
    for (let i of t)
      i != null && (i = +i) >= i && (++e, r += i);
  else {
    let i = -1;
    for (let a of t)
      (a = n(a, ++i, t)) != null && (a = +a) >= a && (++e, r += a);
  }
  if (e) return r / e;
}
function Rt(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * e;
  return a;
}
var da = { value: () => {
} };
function we() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new ln(e);
}
function ln(t) {
  this._ = t;
}
function pa(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
ln.prototype = we.prototype = {
  constructor: ln,
  on: function(t, n) {
    var e = this._, r = pa(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = ga(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = Ge(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Ge(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new ln(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, a; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e);
  }
};
function ga(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Ge(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = da, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Qn = "http://www.w3.org/1999/xhtml";
const Ue = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Qn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Pn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Ue.hasOwnProperty(n) ? { space: Ue[n], local: t } : t;
}
function _a(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Qn && n.documentElement.namespaceURI === Qn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function ya(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function qr(t) {
  var n = Pn(t);
  return (n.local ? ya : _a)(n);
}
function ma() {
}
function xe(t) {
  return t == null ? ma : function() {
    return this.querySelector(t);
  };
}
function va(t) {
  typeof t != "function" && (t = xe(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), u, l, c = 0; c < o; ++c)
      (u = a[c]) && (l = t.call(u, u.__data__, c, a)) && ("__data__" in u && (l.__data__ = u.__data__), s[c] = l);
  return new C(r, this._parents);
}
function wa(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function xa() {
  return [];
}
function Br(t) {
  return t == null ? xa : function() {
    return this.querySelectorAll(t);
  };
}
function ba(t) {
  return function() {
    return wa(t.apply(this, arguments));
  };
}
function Ma(t) {
  typeof t == "function" ? t = ba(t) : t = Br(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, u, l = 0; l < s; ++l)
      (u = o[l]) && (r.push(t.call(u, u.__data__, l, o)), i.push(u));
  return new C(r, i);
}
function Xr(t) {
  return function() {
    return this.matches(t);
  };
}
function Gr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var $a = Array.prototype.find;
function Aa(t) {
  return function() {
    return $a.call(this.children, t);
  };
}
function Ta() {
  return this.firstElementChild;
}
function Pa(t) {
  return this.select(t == null ? Ta : Aa(typeof t == "function" ? t : Gr(t)));
}
var Sa = Array.prototype.filter;
function Ea() {
  return Array.from(this.children);
}
function Na(t) {
  return function() {
    return Sa.call(this.children, t);
  };
}
function Ia(t) {
  return this.selectAll(t == null ? Ea : Na(typeof t == "function" ? t : Gr(t)));
}
function ka(t) {
  typeof t != "function" && (t = Xr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], u, l = 0; l < o; ++l)
      (u = a[l]) && t.call(u, u.__data__, l, a) && s.push(u);
  return new C(r, this._parents);
}
function Ur(t) {
  return new Array(t.length);
}
function za() {
  return new C(this._enter || this._groups.map(Ur), this._parents);
}
function _n(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
_n.prototype = {
  constructor: _n,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Oa(t) {
  return function() {
    return t;
  };
}
function Ca(t, n, e, r, i, a) {
  for (var o = 0, s, u = n.length, l = a.length; o < l; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new _n(t, a[o]);
  for (; o < u; ++o)
    (s = n[o]) && (i[o] = s);
}
function Ra(t, n, e, r, i, a, o) {
  var s, u, l = /* @__PURE__ */ new Map(), c = n.length, f = a.length, h = new Array(c), p;
  for (s = 0; s < c; ++s)
    (u = n[s]) && (h[s] = p = o.call(u, u.__data__, s, n) + "", l.has(p) ? i[s] = u : l.set(p, u));
  for (s = 0; s < f; ++s)
    p = o.call(t, a[s], s, a) + "", (u = l.get(p)) ? (r[s] = u, u.__data__ = a[s], l.delete(p)) : e[s] = new _n(t, a[s]);
  for (s = 0; s < c; ++s)
    (u = n[s]) && l.get(h[s]) === u && (i[s] = u);
}
function Fa(t) {
  return t.__data__;
}
function La(t, n) {
  if (!arguments.length) return Array.from(this, Fa);
  var e = n ? Ra : Ca, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Oa(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), u = new Array(a), l = 0; l < a; ++l) {
    var c = r[l], f = i[l], h = f.length, p = Da(t.call(c, c && c.__data__, l, r)), d = p.length, m = s[l] = new Array(d), b = o[l] = new Array(d), _ = u[l] = new Array(h);
    e(c, f, m, b, _, p, n);
    for (var M = 0, A = 0, g, v; M < d; ++M)
      if (g = m[M]) {
        for (M >= A && (A = M + 1); !(v = b[A]) && ++A < d; ) ;
        g._next = v || null;
      }
  }
  return o = new C(o, r), o._enter = s, o._exit = u, o;
}
function Da(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Ha() {
  return new C(this._exit || this._groups.map(Ur), this._parents);
}
function qa(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function Ba(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), u = 0; u < o; ++u)
    for (var l = e[u], c = r[u], f = l.length, h = s[u] = new Array(f), p, d = 0; d < f; ++d)
      (p = l[d] || c[d]) && (h[d] = p);
  for (; u < i; ++u)
    s[u] = e[u];
  return new C(s, this._parents);
}
function Xa() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Ga(t) {
  t || (t = Ua);
  function n(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], s = o.length, u = i[a] = new Array(s), l, c = 0; c < s; ++c)
      (l = o[c]) && (u[c] = l);
    u.sort(n);
  }
  return new C(i, this._parents).order();
}
function Ua(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ya() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Ka() {
  return Array.from(this);
}
function Va() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function ja() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Za() {
  return !this.node();
}
function Wa(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Ja(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Qa(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function to(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function no(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function eo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function ro(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function io(t, n) {
  var e = Pn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Qa : Ja : typeof n == "function" ? e.local ? ro : eo : e.local ? no : to)(e, n));
}
function Yr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ao(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function oo(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function so(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function uo(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? ao : typeof n == "function" ? so : oo)(t, n, e ?? "")) : Nt(this.node(), t);
}
function Nt(t, n) {
  return t.style.getPropertyValue(n) || Yr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function lo(t) {
  return function() {
    delete this[t];
  };
}
function fo(t, n) {
  return function() {
    this[t] = n;
  };
}
function co(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function ho(t, n) {
  return arguments.length > 1 ? this.each((n == null ? lo : typeof n == "function" ? co : fo)(t, n)) : this.node()[t];
}
function Kr(t) {
  return t.trim().split(/^|\s+/);
}
function be(t) {
  return t.classList || new Vr(t);
}
function Vr(t) {
  this._node = t, this._names = Kr(t.getAttribute("class") || "");
}
Vr.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function jr(t, n) {
  for (var e = be(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Zr(t, n) {
  for (var e = be(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function po(t) {
  return function() {
    jr(this, t);
  };
}
function go(t) {
  return function() {
    Zr(this, t);
  };
}
function _o(t, n) {
  return function() {
    (n.apply(this, arguments) ? jr : Zr)(this, t);
  };
}
function yo(t, n) {
  var e = Kr(t + "");
  if (arguments.length < 2) {
    for (var r = be(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? _o : n ? po : go)(e, n));
}
function mo() {
  this.textContent = "";
}
function vo(t) {
  return function() {
    this.textContent = t;
  };
}
function wo(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function xo(t) {
  return arguments.length ? this.each(t == null ? mo : (typeof t == "function" ? wo : vo)(t)) : this.node().textContent;
}
function bo() {
  this.innerHTML = "";
}
function Mo(t) {
  return function() {
    this.innerHTML = t;
  };
}
function $o(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function Ao(t) {
  return arguments.length ? this.each(t == null ? bo : (typeof t == "function" ? $o : Mo)(t)) : this.node().innerHTML;
}
function To() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Po() {
  return this.each(To);
}
function So() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Eo() {
  return this.each(So);
}
function No(t) {
  var n = typeof t == "function" ? t : qr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Io() {
  return null;
}
function ko(t, n) {
  var e = typeof t == "function" ? t : qr(t), r = n == null ? Io : typeof n == "function" ? n : xe(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function zo() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Oo() {
  return this.each(zo);
}
function Co() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ro() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Fo(t) {
  return this.select(t ? Ro : Co);
}
function Lo(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Do(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Ho(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function qo(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Bo(t, n, e) {
  return function() {
    var r = this.__on, i, a = Do(n);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, a, e), i = { type: t.type, name: t.name, value: n, listener: a, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Xo(t, n, e) {
  var r = Ho(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, c; u < l; ++u)
        for (i = 0, c = s[u]; i < a; ++i)
          if ((o = r[i]).type === c.type && o.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? Bo : qo, i = 0; i < a; ++i) this.each(s(r[i], n, e));
  return this;
}
function Wr(t, n, e) {
  var r = Yr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Go(t, n) {
  return function() {
    return Wr(this, t, n);
  };
}
function Uo(t, n) {
  return function() {
    return Wr(this, t, n.apply(this, arguments));
  };
}
function Yo(t, n) {
  return this.each((typeof n == "function" ? Uo : Go)(t, n));
}
function* Ko() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var Jr = [null];
function C(t, n) {
  this._groups = t, this._parents = n;
}
function Vt() {
  return new C([[document.documentElement]], Jr);
}
function Vo() {
  return this;
}
C.prototype = Vt.prototype = {
  constructor: C,
  select: va,
  selectAll: Ma,
  selectChild: Pa,
  selectChildren: Ia,
  filter: ka,
  data: La,
  enter: za,
  exit: Ha,
  join: qa,
  merge: Ba,
  selection: Vo,
  order: Xa,
  sort: Ga,
  call: Ya,
  nodes: Ka,
  node: Va,
  size: ja,
  empty: Za,
  each: Wa,
  attr: io,
  style: uo,
  property: ho,
  classed: yo,
  text: xo,
  html: Ao,
  raise: Po,
  lower: Eo,
  append: No,
  insert: ko,
  remove: Oo,
  clone: Fo,
  datum: Lo,
  on: Xo,
  dispatch: Yo,
  [Symbol.iterator]: Ko
};
function E(t) {
  return typeof t == "string" ? new C([[document.querySelector(t)]], [document.documentElement]) : new C([[t]], Jr);
}
function jo(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function te(t, n) {
  if (t = jo(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Zo = { passive: !1 }, qt = { capture: !0, passive: !1 };
function Xn(t) {
  t.stopImmediatePropagation();
}
function Tt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Wo(t) {
  var n = t.document.documentElement, e = E(t).on("dragstart.drag", Tt, qt);
  "onselectstart" in n ? e.on("selectstart.drag", Tt, qt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Jo(t, n) {
  var e = t.document.documentElement, r = E(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Tt, qt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const tn = (t) => () => t;
function ne(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: a,
  x: o,
  y: s,
  dx: u,
  dy: l,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
ne.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Qo(t) {
  return !t.ctrlKey && !t.button;
}
function ts() {
  return this.parentNode;
}
function ns(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function es() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function rs() {
  var t = Qo, n = ts, e = ns, r = es, i = {}, a = we("start", "drag", "end"), o = 0, s, u, l, c, f = 0;
  function h(g) {
    g.on("mousedown.drag", p).filter(r).on("touchstart.drag", b).on("touchmove.drag", _, Zo).on("touchend.drag touchcancel.drag", M).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(g, v) {
    if (!(c || !t.call(this, g, v))) {
      var S = A(this, n.call(this, g, v), g, v, "mouse");
      S && (E(g.view).on("mousemove.drag", d, qt).on("mouseup.drag", m, qt), Wo(g.view), Xn(g), l = !1, s = g.clientX, u = g.clientY, S("start", g));
    }
  }
  function d(g) {
    if (Tt(g), !l) {
      var v = g.clientX - s, S = g.clientY - u;
      l = v * v + S * S > f;
    }
    i.mouse("drag", g);
  }
  function m(g) {
    E(g.view).on("mousemove.drag mouseup.drag", null), Jo(g.view, l), Tt(g), i.mouse("end", g);
  }
  function b(g, v) {
    if (t.call(this, g, v)) {
      var S = g.changedTouches, N = n.call(this, g, v), k = S.length, U, Z;
      for (U = 0; U < k; ++U)
        (Z = A(this, N, g, v, S[U].identifier, S[U])) && (Xn(g), Z("start", g, S[U]));
    }
  }
  function _(g) {
    var v = g.changedTouches, S = v.length, N, k;
    for (N = 0; N < S; ++N)
      (k = i[v[N].identifier]) && (Tt(g), k("drag", g, v[N]));
  }
  function M(g) {
    var v = g.changedTouches, S = v.length, N, k;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), N = 0; N < S; ++N)
      (k = i[v[N].identifier]) && (Xn(g), k("end", g, v[N]));
  }
  function A(g, v, S, N, k, U) {
    var Z = a.copy(), w = te(U || S, v), Y, z, D;
    if ((D = e.call(g, new ne("beforestart", {
      sourceEvent: S,
      target: h,
      identifier: k,
      active: o,
      x: w[0],
      y: w[1],
      dx: 0,
      dy: 0,
      dispatch: Z
    }), N)) != null)
      return Y = D.x - w[0] || 0, z = D.y - w[1] || 0, function Qt(ot, ut, xt) {
        var R = w, Bn;
        switch (ot) {
          case "start":
            i[k] = Qt, Bn = o++;
            break;
          case "end":
            delete i[k], --o;
          // falls through
          case "drag":
            w = te(xt || ut, v), Bn = o;
            break;
        }
        Z.call(
          ot,
          g,
          new ne(ot, {
            sourceEvent: ut,
            subject: D,
            target: h,
            identifier: k,
            active: Bn,
            x: w[0] + Y,
            y: w[1] + z,
            dx: w[0] - R[0],
            dy: w[1] - R[1],
            dispatch: Z
          }),
          N
        );
      };
  }
  return h.filter = function(g) {
    return arguments.length ? (t = typeof g == "function" ? g : tn(!!g), h) : t;
  }, h.container = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : tn(g), h) : n;
  }, h.subject = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : tn(g), h) : e;
  }, h.touchable = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : tn(!!g), h) : r;
  }, h.on = function() {
    var g = a.on.apply(a, arguments);
    return g === a ? h : g;
  }, h.clickDistance = function(g) {
    return arguments.length ? (f = (g = +g) * g, h) : Math.sqrt(f);
  }, h;
}
function Me(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Qr(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function jt() {
}
var Bt = 0.7, yn = 1 / Bt, Pt = "\\s*([+-]?\\d+)\\s*", Xt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", K = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", is = /^#([0-9a-f]{3,8})$/, as = new RegExp(`^rgb\\(${Pt},${Pt},${Pt}\\)$`), os = new RegExp(`^rgb\\(${K},${K},${K}\\)$`), ss = new RegExp(`^rgba\\(${Pt},${Pt},${Pt},${Xt}\\)$`), us = new RegExp(`^rgba\\(${K},${K},${K},${Xt}\\)$`), ls = new RegExp(`^hsl\\(${Xt},${K},${K}\\)$`), fs = new RegExp(`^hsla\\(${Xt},${K},${K},${Xt}\\)$`), Ye = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Me(jt, ht, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ke,
  // Deprecated! Use color.formatHex.
  formatHex: Ke,
  formatHex8: cs,
  formatHsl: hs,
  formatRgb: Ve,
  toString: Ve
});
function Ke() {
  return this.rgb().formatHex();
}
function cs() {
  return this.rgb().formatHex8();
}
function hs() {
  return ti(this).formatHsl();
}
function Ve() {
  return this.rgb().formatRgb();
}
function ht(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = is.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? je(n) : e === 3 ? new O(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? nn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? nn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = as.exec(t)) ? new O(n[1], n[2], n[3], 1) : (n = os.exec(t)) ? new O(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = ss.exec(t)) ? nn(n[1], n[2], n[3], n[4]) : (n = us.exec(t)) ? nn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = ls.exec(t)) ? Je(n[1], n[2] / 100, n[3] / 100, 1) : (n = fs.exec(t)) ? Je(n[1], n[2] / 100, n[3] / 100, n[4]) : Ye.hasOwnProperty(t) ? je(Ye[t]) : t === "transparent" ? new O(NaN, NaN, NaN, 0) : null;
}
function je(t) {
  return new O(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function nn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new O(t, n, e, r);
}
function ds(t) {
  return t instanceof jt || (t = ht(t)), t ? (t = t.rgb(), new O(t.r, t.g, t.b, t.opacity)) : new O();
}
function ee(t, n, e, r) {
  return arguments.length === 1 ? ds(t) : new O(t, n, e, r ?? 1);
}
function O(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
Me(O, ee, Qr(jt, {
  brighter(t) {
    return t = t == null ? yn : Math.pow(yn, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Bt : Math.pow(Bt, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new O(ct(this.r), ct(this.g), ct(this.b), mn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ze,
  // Deprecated! Use color.formatHex.
  formatHex: Ze,
  formatHex8: ps,
  formatRgb: We,
  toString: We
}));
function Ze() {
  return `#${ft(this.r)}${ft(this.g)}${ft(this.b)}`;
}
function ps() {
  return `#${ft(this.r)}${ft(this.g)}${ft(this.b)}${ft((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function We() {
  const t = mn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${ct(this.r)}, ${ct(this.g)}, ${ct(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function mn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function ct(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ft(t) {
  return t = ct(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Je(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new q(t, n, e, r);
}
function ti(t) {
  if (t instanceof q) return new q(t.h, t.s, t.l, t.opacity);
  if (t instanceof jt || (t = ht(t)), !t) return new q();
  if (t instanceof q) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, u = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= u < 0.5 ? a + i : 2 - a - i, o *= 60) : s = u > 0 && u < 1 ? 0 : o, new q(o, s, u, t.opacity);
}
function gs(t, n, e, r) {
  return arguments.length === 1 ? ti(t) : new q(t, n, e, r ?? 1);
}
function q(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
Me(q, gs, Qr(jt, {
  brighter(t) {
    return t = t == null ? yn : Math.pow(yn, t), new q(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Bt : Math.pow(Bt, t), new q(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new O(
      Gn(t >= 240 ? t - 240 : t + 120, i, r),
      Gn(t, i, r),
      Gn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new q(Qe(this.h), en(this.s), en(this.l), mn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = mn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Qe(this.h)}, ${en(this.s) * 100}%, ${en(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Qe(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function en(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Gn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const $e = (t) => () => t;
function _s(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function ys(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function ms(t) {
  return (t = +t) == 1 ? ni : function(n, e) {
    return e - n ? ys(n, e, t) : $e(isNaN(n) ? e : n);
  };
}
function ni(t, n) {
  var e = n - t;
  return e ? _s(t, e) : $e(isNaN(t) ? n : t);
}
const vn = function t(n) {
  var e = ms(n);
  function r(i, a) {
    var o = e((i = ee(i)).r, (a = ee(a)).r), s = e(i.g, a.g), u = e(i.b, a.b), l = ni(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = s(c), i.b = u(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function vs(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function ws(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function xs(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = Ae(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function bs(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function H(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function Ms(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Ae(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e) r[i] = e[i](a);
    return r;
  };
}
var re = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Un = new RegExp(re.source, "g");
function $s(t) {
  return function() {
    return t;
  };
}
function As(t) {
  return function(n) {
    return t(n) + "";
  };
}
function ei(t, n) {
  var e = re.lastIndex = Un.lastIndex = 0, r, i, a, o = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = re.exec(t)) && (i = Un.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, u.push({ i: o, x: H(r, i) })), e = Un.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? u[0] ? As(u[0].x) : $s(n) : (n = u.length, function(l) {
    for (var c = 0, f; c < n; ++c) s[(f = u[c]).i] = f.x(l);
    return s.join("");
  });
}
function Ae(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? $e(n) : (e === "number" ? H : e === "string" ? (r = ht(n)) ? (n = r, vn) : ei : n instanceof ht ? vn : n instanceof Date ? bs : ws(n) ? vs : Array.isArray(n) ? xs : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Ms : H)(t, n);
}
function Ts(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var tr = 180 / Math.PI, ie = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ri(t, n, e, r, i, a) {
  var o, s, u;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * tr,
    skewX: Math.atan(u) * tr,
    scaleX: o,
    scaleY: s
  };
}
var rn;
function Ps(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? ie : ri(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Ss(t) {
  return t == null || (rn || (rn = document.createElementNS("http://www.w3.org/2000/svg", "g")), rn.setAttribute("transform", t), !(t = rn.transform.baseVal.consolidate())) ? ie : (t = t.matrix, ri(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ii(t, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function a(l, c, f, h, p, d) {
    if (l !== f || c !== h) {
      var m = p.push("translate(", null, n, null, e);
      d.push({ i: m - 4, x: H(l, f) }, { i: m - 2, x: H(c, h) });
    } else (f || h) && p.push("translate(" + f + n + h + e);
  }
  function o(l, c, f, h) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: H(l, c) })) : c && f.push(i(f) + "rotate(" + c + r);
  }
  function s(l, c, f, h) {
    l !== c ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: H(l, c) }) : c && f.push(i(f) + "skewX(" + c + r);
  }
  function u(l, c, f, h, p, d) {
    if (l !== f || c !== h) {
      var m = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: m - 4, x: H(l, f) }, { i: m - 2, x: H(c, h) });
    } else (f !== 1 || h !== 1) && p.push(i(p) + "scale(" + f + "," + h + ")");
  }
  return function(l, c) {
    var f = [], h = [];
    return l = t(l), c = t(c), a(l.translateX, l.translateY, c.translateX, c.translateY, f, h), o(l.rotate, c.rotate, f, h), s(l.skewX, c.skewX, f, h), u(l.scaleX, l.scaleY, c.scaleX, c.scaleY, f, h), l = c = null, function(p) {
      for (var d = -1, m = h.length, b; ++d < m; ) f[(b = h[d]).i] = b.x(p);
      return f.join("");
    };
  };
}
var Es = ii(Ps, "px, ", "px)", "deg)"), Ns = ii(Ss, ", ", ")", ")"), It = 0, Ft = 0, zt = 0, ai = 1e3, wn, Lt, xn = 0, dt = 0, Sn = 0, Gt = typeof performance == "object" && performance.now ? performance : Date, oi = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function En() {
  return dt || (oi(Is), dt = Gt.now() + Sn);
}
function Is() {
  dt = 0;
}
function Ut() {
  this._call = this._time = this._next = null;
}
Ut.prototype = si.prototype = {
  constructor: Ut,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? En() : +e) + (n == null ? 0 : +n), !this._next && Lt !== this && (Lt ? Lt._next = this : wn = this, Lt = this), this._call = t, this._time = e, ae();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ae());
  }
};
function si(t, n, e) {
  var r = new Ut();
  return r.restart(t, n, e), r;
}
function ks() {
  En(), ++It;
  for (var t = wn, n; t; )
    (n = dt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --It;
}
function nr() {
  dt = (xn = Gt.now()) + Sn, It = Ft = 0;
  try {
    ks();
  } finally {
    It = 0, Os(), dt = 0;
  }
}
function zs() {
  var t = Gt.now(), n = t - xn;
  n > ai && (Sn -= n, xn = t);
}
function Os() {
  for (var t, n = wn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : wn = e);
  Lt = t, ae(r);
}
function ae(t) {
  if (!It) {
    Ft && (Ft = clearTimeout(Ft));
    var n = t - dt;
    n > 24 ? (t < 1 / 0 && (Ft = setTimeout(nr, t - Gt.now() - Sn)), zt && (zt = clearInterval(zt))) : (zt || (xn = Gt.now(), zt = setInterval(zs, ai)), It = 1, oi(nr));
  }
}
function er(t, n, e) {
  var r = new Ut();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function Cs(t, n, e) {
  var r = new Ut(), i = n;
  return r._restart = r.restart, r.restart = function(a, o, s) {
    o = +o, s = s == null ? En() : +s, r._restart(function u(l) {
      l += i, r._restart(u, i += o, s), a(l);
    }, o, s);
  }, r.restart(t, n, e), r;
}
var Rs = we("start", "end", "cancel", "interrupt"), Fs = [], ui = 0, rr = 1, oe = 2, fn = 3, ir = 4, se = 5, cn = 6;
function Nn(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  Ls(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Rs,
    tween: Fs,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: ui
  });
}
function Te(t, n) {
  var e = X(t, n);
  if (e.state > ui) throw new Error("too late; already scheduled");
  return e;
}
function j(t, n) {
  var e = X(t, n);
  if (e.state > fn) throw new Error("too late; already running");
  return e;
}
function X(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Ls(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = si(a, 0, e.time);
  function a(l) {
    e.state = rr, e.timer.restart(o, e.delay, e.time), e.delay <= l && o(l - e.delay);
  }
  function o(l) {
    var c, f, h, p;
    if (e.state !== rr) return u();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === fn) return er(o);
        p.state === ir ? (p.state = cn, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = cn, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (er(function() {
      e.state === fn && (e.state = ir, e.timer.restart(s, e.delay, e.time), s(l));
    }), e.state = oe, e.on.call("start", t, t.__data__, e.index, e.group), e.state === oe) {
      for (e.state = fn, i = new Array(h = e.tween.length), c = 0, f = -1; c < h; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = p);
      i.length = f + 1;
    }
  }
  function s(l) {
    for (var c = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(u), e.state = se, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, c);
    e.state === se && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = cn, e.timer.stop(), delete r[n];
    for (var l in r) return;
    delete t.__transition;
  }
}
function Ds(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > oe && r.state < se, r.state = cn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function Hs(t) {
  return this.each(function() {
    Ds(this, t);
  });
}
function qs(t, n) {
  var e, r;
  return function() {
    var i = j(this, t), a = i.tween;
    if (a !== e) {
      r = e = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Bs(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var a = j(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: n, value: e }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === n) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    a.tween = i;
  };
}
function Xs(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = X(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? qs : Bs)(e, t, n));
}
function Pe(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = j(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return X(i, r).value[n];
  };
}
function li(t, n) {
  var e;
  return (typeof n == "number" ? H : n instanceof ht ? vn : (e = ht(n)) ? (n = e, vn) : ei)(t, n);
}
function Gs(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Us(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ys(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Ks(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Vs(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), u = s + "", o === u ? null : o === r && u === i ? a : (i = u, a = n(r = o, s)));
  };
}
function js(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), u = s + "", o === u ? null : o === r && u === i ? a : (i = u, a = n(r = o, s)));
  };
}
function Zs(t, n) {
  var e = Pn(t), r = e === "transform" ? Ns : li;
  return this.attrTween(t, typeof n == "function" ? (e.local ? js : Vs)(e, r, Pe(this, "attr." + t, n)) : n == null ? (e.local ? Us : Gs)(e) : (e.local ? Ks : Ys)(e, r, n));
}
function Ws(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Js(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Qs(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Js(t, a)), e;
  }
  return i._value = n, i;
}
function tu(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Ws(t, a)), e;
  }
  return i._value = n, i;
}
function nu(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Pn(t);
  return this.tween(e, (r.local ? Qs : tu)(r, n));
}
function eu(t, n) {
  return function() {
    Te(this, t).delay = +n.apply(this, arguments);
  };
}
function ru(t, n) {
  return n = +n, function() {
    Te(this, t).delay = n;
  };
}
function iu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? eu : ru)(n, t)) : X(this.node(), n).delay;
}
function au(t, n) {
  return function() {
    j(this, t).duration = +n.apply(this, arguments);
  };
}
function ou(t, n) {
  return n = +n, function() {
    j(this, t).duration = n;
  };
}
function su(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? au : ou)(n, t)) : X(this.node(), n).duration;
}
function uu(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    j(this, t).ease = n;
  };
}
function lu(t) {
  var n = this._id;
  return arguments.length ? this.each(uu(n, t)) : X(this.node(), n).ease;
}
function fu(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    j(this, t).ease = e;
  };
}
function cu(t) {
  if (typeof t != "function") throw new Error();
  return this.each(fu(this._id, t));
}
function hu(t) {
  typeof t != "function" && (t = Xr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], u, l = 0; l < o; ++l)
      (u = a[l]) && t.call(u, u.__data__, l, a) && s.push(u);
  return new tt(r, this._parents, this._name, this._id);
}
function du(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var u = n[s], l = e[s], c = u.length, f = o[s] = new Array(c), h, p = 0; p < c; ++p)
      (h = u[p] || l[p]) && (f[p] = h);
  for (; s < r; ++s)
    o[s] = n[s];
  return new tt(o, this._parents, this._name, this._id);
}
function pu(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function gu(t, n, e) {
  var r, i, a = pu(n) ? Te : j;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
  };
}
function _u(t, n) {
  var e = this._id;
  return arguments.length < 2 ? X(this.node(), e).on.on(t) : this.each(gu(e, t, n));
}
function yu(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function mu() {
  return this.on("end.remove", yu(this._id));
}
function vu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = xe(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], u = s.length, l = a[o] = new Array(u), c, f, h = 0; h < u; ++h)
      (c = s[h]) && (f = t.call(c, c.__data__, h, s)) && ("__data__" in c && (f.__data__ = c.__data__), l[h] = f, Nn(l[h], n, e, h, l, X(c, e)));
  return new tt(a, this._parents, n, e);
}
function wu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Br(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, c, f = 0; f < l; ++f)
      if (c = u[f]) {
        for (var h = t.call(c, c.__data__, f, u), p, d = X(c, e), m = 0, b = h.length; m < b; ++m)
          (p = h[m]) && Nn(p, n, e, m, h, d);
        a.push(h), o.push(c);
      }
  return new tt(a, o, n, e);
}
var xu = Vt.prototype.constructor;
function bu() {
  return new xu(this._groups, this._parents);
}
function Mu(t, n) {
  var e, r, i;
  return function() {
    var a = Nt(this, t), o = (this.style.removeProperty(t), Nt(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function fi(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function $u(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = Nt(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Au(t, n, e) {
  var r, i, a;
  return function() {
    var o = Nt(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), Nt(this, t))), o === u ? null : o === r && u === i ? a : (i = u, a = n(r = o, s));
  };
}
function Tu(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var u = j(this, t), l = u.on, c = u.value[a] == null ? s || (s = fi(n)) : void 0;
    (l !== e || i !== c) && (r = (e = l).copy()).on(o, i = c), u.on = r;
  };
}
function Pu(t, n, e) {
  var r = (t += "") == "transform" ? Es : li;
  return n == null ? this.styleTween(t, Mu(t, r)).on("end.style." + t, fi(t)) : typeof n == "function" ? this.styleTween(t, Au(t, r, Pe(this, "style." + t, n))).each(Tu(this._id, t)) : this.styleTween(t, $u(t, r, n), e).on("end.style." + t, null);
}
function Su(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Eu(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && Su(t, o, e)), r;
  }
  return a._value = n, a;
}
function Nu(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Eu(t, n, e ?? ""));
}
function Iu(t) {
  return function() {
    this.textContent = t;
  };
}
function ku(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function zu(t) {
  return this.tween("text", typeof t == "function" ? ku(Pe(this, "text", t)) : Iu(t == null ? "" : t + ""));
}
function Ou(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Cu(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Ou(i)), n;
  }
  return r._value = t, r;
}
function Ru(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Cu(t));
}
function Fu() {
  for (var t = this._name, n = this._id, e = ci(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, u, l = 0; l < s; ++l)
      if (u = o[l]) {
        var c = X(u, n);
        Nn(u, t, e, l, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new tt(r, this._parents, t, e);
}
function Lu() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var s = { value: o }, u = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var l = j(this, r), c = l.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), l.on = n;
    }), i === 0 && a();
  });
}
var Du = 0;
function tt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function ci() {
  return ++Du;
}
var W = Vt.prototype;
tt.prototype = {
  constructor: tt,
  select: vu,
  selectAll: wu,
  selectChild: W.selectChild,
  selectChildren: W.selectChildren,
  filter: hu,
  merge: du,
  selection: bu,
  transition: Fu,
  call: W.call,
  nodes: W.nodes,
  node: W.node,
  size: W.size,
  empty: W.empty,
  each: W.each,
  on: _u,
  attr: Zs,
  attrTween: nu,
  style: Pu,
  styleTween: Nu,
  text: zu,
  textTween: Ru,
  remove: mu,
  tween: Xs,
  delay: iu,
  duration: su,
  ease: lu,
  easeVarying: cu,
  end: Lu,
  [Symbol.iterator]: W[Symbol.iterator]
};
function Hu(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var qu = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Hu
};
function Bu(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Xu(t) {
  var n, e;
  t instanceof tt ? (n = t._id, t = t._name) : (n = ci(), (e = qu).time = En(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, u, l = 0; l < s; ++l)
      (u = o[l]) && Nn(u, t, n, l, o, e || Bu(u, n));
  return new tt(r, this._parents, t, n);
}
Vt.prototype.interrupt = Hs;
Vt.prototype.transition = Xu;
const ue = Math.PI, le = 2 * ue, lt = 1e-6, Gu = le - lt;
function hi(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Uu(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return hi;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Se {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? hi : Uu(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, a, o) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(n, e, r, i, a) {
    if (n = +n, e = +e, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, u = r - n, l = i - e, c = o - n, f = s - e, h = c * c + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (h > lt) if (!(Math.abs(f * u - l * c) > lt) || !a)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - o, d = i - s, m = u * u + l * l, b = p * p + d * d, _ = Math.sqrt(m), M = Math.sqrt(h), A = a * Math.tan((ue - Math.acos((m + h - b) / (2 * _ * M))) / 2), g = A / M, v = A / _;
      Math.abs(g - 1) > lt && this._append`L${n + g * c},${e + g * f}`, this._append`A${a},${a},0,0,${+(f * p > c * d)},${this._x1 = n + v * u},${this._y1 = e + v * l}`;
    }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = n + s, c = e + u, f = 1 ^ o, h = o ? i - a : a - i;
    this._x1 === null ? this._append`M${l},${c}` : (Math.abs(this._x1 - l) > lt || Math.abs(this._y1 - c) > lt) && this._append`L${l},${c}`, r && (h < 0 && (h = h % le + le), h > Gu ? this._append`A${r},${r},0,1,${f},${n - s},${e - u}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = c}` : h > lt && this._append`A${r},${r},0,${+(h >= ue)},${f},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function G() {
  return new Se();
}
G.prototype = Se.prototype;
function Yu(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function bn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function kt(t) {
  return t = bn(Math.abs(t)), t ? t[1] : NaN;
}
function Ku(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), a.push(e.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function Vu(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var ju = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Mn(t) {
  if (!(n = ju.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new Ee({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
Mn.prototype = Ee.prototype;
function Ee(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Ee.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Zu(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var di;
function Wu(t, n) {
  var e = bn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], a = i - (di = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + bn(t, Math.max(0, n + a - 1))[0];
}
function ar(t, n) {
  var e = bn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const or = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Yu,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => ar(t * 100, n),
  r: ar,
  s: Wu,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function sr(t) {
  return t;
}
var ur = Array.prototype.map, lr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ju(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? sr : Ku(ur.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? sr : Vu(ur.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(f) {
    f = Mn(f);
    var h = f.fill, p = f.align, d = f.sign, m = f.symbol, b = f.zero, _ = f.width, M = f.comma, A = f.precision, g = f.trim, v = f.type;
    v === "n" ? (M = !0, v = "g") : or[v] || (A === void 0 && (A = 12), g = !0, v = "g"), (b || h === "0" && p === "=") && (b = !0, h = "0", p = "=");
    var S = m === "$" ? e : m === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", N = m === "$" ? r : /[%p]/.test(v) ? o : "", k = or[v], U = /[defgprs%]/.test(v);
    A = A === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function Z(w) {
      var Y = S, z = N, D, Qt, ot;
      if (v === "c")
        z = k(w) + z, w = "";
      else {
        w = +w;
        var ut = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? u : k(Math.abs(w), A), g && (w = Zu(w)), ut && +w == 0 && d !== "+" && (ut = !1), Y = (ut ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + Y, z = (v === "s" ? lr[8 + di / 3] : "") + z + (ut && d === "(" ? ")" : ""), U) {
          for (D = -1, Qt = w.length; ++D < Qt; )
            if (ot = w.charCodeAt(D), 48 > ot || ot > 57) {
              z = (ot === 46 ? i + w.slice(D + 1) : w.slice(D)) + z, w = w.slice(0, D);
              break;
            }
        }
      }
      M && !b && (w = n(w, 1 / 0));
      var xt = Y.length + w.length + z.length, R = xt < _ ? new Array(_ - xt + 1).join(h) : "";
      switch (M && b && (w = n(R + w, R.length ? _ - z.length : 1 / 0), R = ""), p) {
        case "<":
          w = Y + w + z + R;
          break;
        case "=":
          w = Y + R + w + z;
          break;
        case "^":
          w = R.slice(0, xt = R.length >> 1) + Y + w + z + R.slice(xt);
          break;
        default:
          w = R + Y + w + z;
          break;
      }
      return a(w);
    }
    return Z.toString = function() {
      return f + "";
    }, Z;
  }
  function c(f, h) {
    var p = l((f = Mn(f), f.type = "f", f)), d = Math.max(-8, Math.min(8, Math.floor(kt(h) / 3))) * 3, m = Math.pow(10, -d), b = lr[8 + d / 3];
    return function(_) {
      return p(m * _) + b;
    };
  }
  return {
    format: l,
    formatPrefix: c
  };
}
var an, In, pi;
Qu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Qu(t) {
  return an = Ju(t), In = an.format, pi = an.formatPrefix, an;
}
function tl(t) {
  return Math.max(0, -kt(Math.abs(t)));
}
function nl(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(kt(n) / 3))) * 3 - kt(Math.abs(t)));
}
function el(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, kt(n) - kt(t)) + 1;
}
function rl(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function il(t) {
  return function() {
    return t;
  };
}
function al(t) {
  return +t;
}
var fr = [0, 1];
function Mt(t) {
  return t;
}
function fe(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : il(isNaN(n) ? NaN : 0.5);
}
function ol(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function sl(t, n, e) {
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = fe(i, r), a = e(o, a)) : (r = fe(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function ul(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = fe(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var u = oa(t, s, 1, r) - 1;
    return a[u](i[u](s));
  };
}
function ll(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function fl() {
  var t = fr, n = fr, e = Ae, r, i, a, o = Mt, s, u, l;
  function c() {
    var h = Math.min(t.length, n.length);
    return o !== Mt && (o = ol(t[0], t[h - 1])), s = h > 2 ? ul : sl, u = l = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? a : (u || (u = s(t.map(r), n, e)))(r(o(h)));
  }
  return f.invert = function(h) {
    return o(i((l || (l = s(n, t.map(r), H)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, al), c()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (n = Array.from(h), c()) : n.slice();
  }, f.rangeRound = function(h) {
    return n = Array.from(h), e = Ts, c();
  }, f.clamp = function(h) {
    return arguments.length ? (o = h ? !0 : Mt, c()) : o !== Mt;
  }, f.interpolate = function(h) {
    return arguments.length ? (e = h, c()) : e;
  }, f.unknown = function(h) {
    return arguments.length ? (a = h, f) : a;
  }, function(h, p) {
    return r = h, i = p, c();
  };
}
function cl() {
  return fl()(Mt, Mt);
}
function hl(t, n, e, r) {
  var i = ca(t, n, e), a;
  switch (r = Mn(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = nl(i, o)) && (r.precision = a), pi(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = el(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = tl(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return In(r);
}
function dl(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return fa(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return hl(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, a = r.length - 1, o = r[i], s = r[a], u, l, c = 10;
    for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); c-- > 0; ) {
      if (l = Jn(o, s, e), l === u)
        return r[i] = o, r[a] = s, n(r);
      if (l > 0)
        o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      u = l;
    }
    return t;
  }, t;
}
function B() {
  var t = cl();
  return t.copy = function() {
    return ll(t, B());
  }, rl.apply(t, arguments), dl(t);
}
function bt(t) {
  return function() {
    return t;
  };
}
function pl(t) {
  let n = 3;
  return t.digits = function(e) {
    if (!arguments.length) return n;
    if (e == null)
      n = null;
    else {
      const r = Math.floor(e);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${e}`);
      n = r;
    }
    return t;
  }, () => new Se(n);
}
function gl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function gi(t) {
  this._context = t;
}
gi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(t, n);
        break;
    }
  }
};
function _l(t) {
  return new gi(t);
}
function yl(t) {
  return t[0];
}
function ml(t) {
  return t[1];
}
function _i(t, n) {
  var e = bt(!0), r = null, i = _l, a = null, o = pl(s);
  t = typeof t == "function" ? t : t === void 0 ? yl : bt(t), n = typeof n == "function" ? n : n === void 0 ? ml : bt(n);
  function s(u) {
    var l, c = (u = gl(u)).length, f, h = !1, p;
    for (r == null && (a = i(p = o())), l = 0; l <= c; ++l)
      !(l < c && e(f = u[l], l, u)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()), h && a.point(+t(f, l, u), +n(f, l, u));
    if (p) return a = null, p + "" || null;
  }
  return s.x = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : bt(+u), s) : t;
  }, s.y = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : bt(+u), s) : n;
  }, s.defined = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : bt(!!u), s) : e;
  }, s.curve = function(u) {
    return arguments.length ? (i = u, r != null && (a = i(r)), s) : i;
  }, s.context = function(u) {
    return arguments.length ? (u == null ? r = a = null : a = i(r = u), s) : r;
  }, s;
}
function Dt(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Dt.prototype = {
  constructor: Dt,
  scale: function(t) {
    return t === 1 ? this : new Dt(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Dt(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Dt.prototype;
var yi = typeof global == "object" && global && global.Object === Object && global, vl = typeof self == "object" && self && self.Object === Object && self, rt = yi || vl || Function("return this")(), V = rt.Symbol, mi = Object.prototype, wl = mi.hasOwnProperty, xl = mi.toString, Ot = V ? V.toStringTag : void 0;
function bl(t) {
  var n = wl.call(t, Ot), e = t[Ot];
  try {
    t[Ot] = void 0;
    var r = !0;
  } catch {
  }
  var i = xl.call(t);
  return r && (n ? t[Ot] = e : delete t[Ot]), i;
}
var Ml = Object.prototype, $l = Ml.toString;
function Al(t) {
  return $l.call(t);
}
var Tl = "[object Null]", Pl = "[object Undefined]", cr = V ? V.toStringTag : void 0;
function mt(t) {
  return t == null ? t === void 0 ? Pl : Tl : cr && cr in Object(t) ? bl(t) : Al(t);
}
function pt(t) {
  return t != null && typeof t == "object";
}
var Sl = "[object Symbol]";
function Zt(t) {
  return typeof t == "symbol" || pt(t) && mt(t) == Sl;
}
function kn(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var L = Array.isArray, hr = V ? V.prototype : void 0, dr = hr ? hr.toString : void 0;
function vi(t) {
  if (typeof t == "string")
    return t;
  if (L(t))
    return kn(t, vi) + "";
  if (Zt(t))
    return dr ? dr.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var El = /\s/;
function Nl(t) {
  for (var n = t.length; n-- && El.test(t.charAt(n)); )
    ;
  return n;
}
var Il = /^\s+/;
function kl(t) {
  return t && t.slice(0, Nl(t) + 1).replace(Il, "");
}
function nt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var pr = NaN, zl = /^[-+]0x[0-9a-f]+$/i, Ol = /^0b[01]+$/i, Cl = /^0o[0-7]+$/i, Rl = parseInt;
function Fl(t) {
  if (typeof t == "number")
    return t;
  if (Zt(t))
    return pr;
  if (nt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = nt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = kl(t);
  var e = Ol.test(t);
  return e || Cl.test(t) ? Rl(t.slice(2), e ? 2 : 8) : zl.test(t) ? pr : +t;
}
var Ll = 1 / 0, Dl = 17976931348623157e292;
function Yn(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Fl(t), t === Ll || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * Dl;
  }
  return t === t ? t : 0;
}
function Ne(t) {
  return t;
}
var Hl = "[object AsyncFunction]", ql = "[object Function]", Bl = "[object GeneratorFunction]", Xl = "[object Proxy]";
function wi(t) {
  if (!nt(t))
    return !1;
  var n = mt(t);
  return n == ql || n == Bl || n == Hl || n == Xl;
}
var Kn = rt["__core-js_shared__"], gr = function() {
  var t = /[^.]+$/.exec(Kn && Kn.keys && Kn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Gl(t) {
  return !!gr && gr in t;
}
var Ul = Function.prototype, Yl = Ul.toString;
function vt(t) {
  if (t != null) {
    try {
      return Yl.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Kl = /[\\^$.*+?()[\]{}|]/g, Vl = /^\[object .+?Constructor\]$/, jl = Function.prototype, Zl = Object.prototype, Wl = jl.toString, Jl = Zl.hasOwnProperty, Ql = RegExp(
  "^" + Wl.call(Jl).replace(Kl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function tf(t) {
  if (!nt(t) || Gl(t))
    return !1;
  var n = wi(t) ? Ql : Vl;
  return n.test(vt(t));
}
function nf(t, n) {
  return t == null ? void 0 : t[n];
}
function wt(t, n) {
  var e = nf(t, n);
  return tf(e) ? e : void 0;
}
var ce = wt(rt, "WeakMap"), _r = function() {
  try {
    var t = wt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function ef(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var rf = 9007199254740991, af = /^(?:0|[1-9]\d*)$/;
function zn(t, n) {
  var e = typeof t;
  return n = n ?? rf, !!n && (e == "number" || e != "symbol" && af.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function of(t, n, e) {
  n == "__proto__" && _r ? _r(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function On(t, n) {
  return t === n || t !== t && n !== n;
}
var sf = Object.prototype, uf = sf.hasOwnProperty;
function lf(t, n, e) {
  var r = t[n];
  (!(uf.call(t, n) && On(r, e)) || e === void 0 && !(n in t)) && of(t, n, e);
}
var ff = 9007199254740991;
function Ie(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ff;
}
function Wt(t) {
  return t != null && Ie(t.length) && !wi(t);
}
function cf(t, n, e) {
  if (!nt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Wt(e) && zn(n, e.length) : r == "string" && n in e) ? On(e[n], t) : !1;
}
var hf = Object.prototype;
function xi(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || hf;
  return t === e;
}
function df(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var pf = "[object Arguments]";
function yr(t) {
  return pt(t) && mt(t) == pf;
}
var bi = Object.prototype, gf = bi.hasOwnProperty, _f = bi.propertyIsEnumerable, ke = yr(/* @__PURE__ */ function() {
  return arguments;
}()) ? yr : function(t) {
  return pt(t) && gf.call(t, "callee") && !_f.call(t, "callee");
};
function yf() {
  return !1;
}
var Mi = typeof exports == "object" && exports && !exports.nodeType && exports, mr = Mi && typeof module == "object" && module && !module.nodeType && module, mf = mr && mr.exports === Mi, vr = mf ? rt.Buffer : void 0, vf = vr ? vr.isBuffer : void 0, he = vf || yf, wf = "[object Arguments]", xf = "[object Array]", bf = "[object Boolean]", Mf = "[object Date]", $f = "[object Error]", Af = "[object Function]", Tf = "[object Map]", Pf = "[object Number]", Sf = "[object Object]", Ef = "[object RegExp]", Nf = "[object Set]", If = "[object String]", kf = "[object WeakMap]", zf = "[object ArrayBuffer]", Of = "[object DataView]", Cf = "[object Float32Array]", Rf = "[object Float64Array]", Ff = "[object Int8Array]", Lf = "[object Int16Array]", Df = "[object Int32Array]", Hf = "[object Uint8Array]", qf = "[object Uint8ClampedArray]", Bf = "[object Uint16Array]", Xf = "[object Uint32Array]", $ = {};
$[Cf] = $[Rf] = $[Ff] = $[Lf] = $[Df] = $[Hf] = $[qf] = $[Bf] = $[Xf] = !0;
$[wf] = $[xf] = $[zf] = $[bf] = $[Of] = $[Mf] = $[$f] = $[Af] = $[Tf] = $[Pf] = $[Sf] = $[Ef] = $[Nf] = $[If] = $[kf] = !1;
function Gf(t) {
  return pt(t) && Ie(t.length) && !!$[mt(t)];
}
function Uf(t) {
  return function(n) {
    return t(n);
  };
}
var $i = typeof exports == "object" && exports && !exports.nodeType && exports, Ht = $i && typeof module == "object" && module && !module.nodeType && module, Yf = Ht && Ht.exports === $i, Vn = Yf && yi.process, wr = function() {
  try {
    var t = Ht && Ht.require && Ht.require("util").types;
    return t || Vn && Vn.binding && Vn.binding("util");
  } catch {
  }
}(), xr = wr && wr.isTypedArray, Ai = xr ? Uf(xr) : Gf, Kf = Object.prototype, Vf = Kf.hasOwnProperty;
function Ti(t, n) {
  var e = L(t), r = !e && ke(t), i = !e && !r && he(t), a = !e && !r && !i && Ai(t), o = e || r || i || a, s = o ? df(t.length, String) : [], u = s.length;
  for (var l in t)
    (n || Vf.call(t, l)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    zn(l, u))) && s.push(l);
  return s;
}
function Pi(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var jf = Pi(Object.keys, Object), Zf = Object.prototype, Wf = Zf.hasOwnProperty;
function Jf(t) {
  if (!xi(t))
    return jf(t);
  var n = [];
  for (var e in Object(t))
    Wf.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Cn(t) {
  return Wt(t) ? Ti(t) : Jf(t);
}
function Qf(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var tc = Object.prototype, nc = tc.hasOwnProperty;
function ec(t) {
  if (!nt(t))
    return Qf(t);
  var n = xi(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !nc.call(t, r)) || e.push(r);
  return e;
}
function rc(t) {
  return Wt(t) ? Ti(t, !0) : ec(t);
}
var ic = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ac = /^\w*$/;
function ze(t, n) {
  if (L(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Zt(t) ? !0 : ac.test(t) || !ic.test(t) || n != null && t in Object(n);
}
var Yt = wt(Object, "create");
function oc() {
  this.__data__ = Yt ? Yt(null) : {}, this.size = 0;
}
function sc(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var uc = "__lodash_hash_undefined__", lc = Object.prototype, fc = lc.hasOwnProperty;
function cc(t) {
  var n = this.__data__;
  if (Yt) {
    var e = n[t];
    return e === uc ? void 0 : e;
  }
  return fc.call(n, t) ? n[t] : void 0;
}
var hc = Object.prototype, dc = hc.hasOwnProperty;
function pc(t) {
  var n = this.__data__;
  return Yt ? n[t] !== void 0 : dc.call(n, t);
}
var gc = "__lodash_hash_undefined__";
function _c(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Yt && n === void 0 ? gc : n, this;
}
function gt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
gt.prototype.clear = oc;
gt.prototype.delete = sc;
gt.prototype.get = cc;
gt.prototype.has = pc;
gt.prototype.set = _c;
function yc() {
  this.__data__ = [], this.size = 0;
}
function Rn(t, n) {
  for (var e = t.length; e--; )
    if (On(t[e][0], n))
      return e;
  return -1;
}
var mc = Array.prototype, vc = mc.splice;
function wc(t) {
  var n = this.__data__, e = Rn(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : vc.call(n, e, 1), --this.size, !0;
}
function xc(t) {
  var n = this.__data__, e = Rn(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function bc(t) {
  return Rn(this.__data__, t) > -1;
}
function Mc(t, n) {
  var e = this.__data__, r = Rn(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function it(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
it.prototype.clear = yc;
it.prototype.delete = wc;
it.prototype.get = xc;
it.prototype.has = bc;
it.prototype.set = Mc;
var Kt = wt(rt, "Map");
function $c() {
  this.size = 0, this.__data__ = {
    hash: new gt(),
    map: new (Kt || it)(),
    string: new gt()
  };
}
function Ac(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Fn(t, n) {
  var e = t.__data__;
  return Ac(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Tc(t) {
  var n = Fn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Pc(t) {
  return Fn(this, t).get(t);
}
function Sc(t) {
  return Fn(this, t).has(t);
}
function Ec(t, n) {
  var e = Fn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function at(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
at.prototype.clear = $c;
at.prototype.delete = Tc;
at.prototype.get = Pc;
at.prototype.has = Sc;
at.prototype.set = Ec;
var Nc = "Expected a function";
function Oe(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Nc);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (Oe.Cache || at)(), e;
}
Oe.Cache = at;
var Ic = 500;
function kc(t) {
  var n = Oe(t, function(r) {
    return e.size === Ic && e.clear(), r;
  }), e = n.cache;
  return n;
}
var zc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Oc = /\\(\\)?/g, Cc = kc(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(zc, function(e, r, i, a) {
    n.push(i ? a.replace(Oc, "$1") : r || e);
  }), n;
});
function Ln(t) {
  return t == null ? "" : vi(t);
}
function Dn(t, n) {
  return L(t) ? t : ze(t, n) ? [t] : Cc(Ln(t));
}
function Jt(t) {
  if (typeof t == "string" || Zt(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Ce(t, n) {
  n = Dn(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Jt(n[e++])];
  return e && e == r ? t : void 0;
}
function Rc(t, n, e) {
  var r = t == null ? void 0 : Ce(t, n);
  return r === void 0 ? e : r;
}
function Re(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var br = V ? V.isConcatSpreadable : void 0;
function Fc(t) {
  return L(t) || ke(t) || !!(br && t && t[br]);
}
function Lc(t, n, e, r, i) {
  var a = -1, o = t.length;
  for (e || (e = Fc), i || (i = []); ++a < o; ) {
    var s = t[a];
    e(s) ? Re(i, s) : i[i.length] = s;
  }
  return i;
}
function Dc(t) {
  var n = t == null ? 0 : t.length;
  return n ? Lc(t) : [];
}
var Hc = Pi(Object.getPrototypeOf, Object);
function qc(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + n];
  return a;
}
function Bc(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, qc(t, n, e);
}
var Xc = "\\ud800-\\udfff", Gc = "\\u0300-\\u036f", Uc = "\\ufe20-\\ufe2f", Yc = "\\u20d0-\\u20ff", Kc = Gc + Uc + Yc, Vc = "\\ufe0e\\ufe0f", jc = "\\u200d", Zc = RegExp("[" + jc + Xc + Kc + Vc + "]");
function Si(t) {
  return Zc.test(t);
}
function Wc(t) {
  return t.split("");
}
var Ei = "\\ud800-\\udfff", Jc = "\\u0300-\\u036f", Qc = "\\ufe20-\\ufe2f", th = "\\u20d0-\\u20ff", nh = Jc + Qc + th, eh = "\\ufe0e\\ufe0f", rh = "[" + Ei + "]", de = "[" + nh + "]", pe = "\\ud83c[\\udffb-\\udfff]", ih = "(?:" + de + "|" + pe + ")", Ni = "[^" + Ei + "]", Ii = "(?:\\ud83c[\\udde6-\\uddff]){2}", ki = "[\\ud800-\\udbff][\\udc00-\\udfff]", ah = "\\u200d", zi = ih + "?", Oi = "[" + eh + "]?", oh = "(?:" + ah + "(?:" + [Ni, Ii, ki].join("|") + ")" + Oi + zi + ")*", sh = Oi + zi + oh, uh = "(?:" + [Ni + de + "?", de, Ii, ki, rh].join("|") + ")", lh = RegExp(pe + "(?=" + pe + ")|" + uh + sh, "g");
function fh(t) {
  return t.match(lh) || [];
}
function ch(t) {
  return Si(t) ? fh(t) : Wc(t);
}
function hh(t) {
  return function(n) {
    n = Ln(n);
    var e = Si(n) ? ch(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Bc(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var dh = hh("toUpperCase");
function ph(t) {
  return dh(Ln(t).toLowerCase());
}
function gh() {
  this.__data__ = new it(), this.size = 0;
}
function _h(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function yh(t) {
  return this.__data__.get(t);
}
function mh(t) {
  return this.__data__.has(t);
}
var vh = 200;
function wh(t, n) {
  var e = this.__data__;
  if (e instanceof it) {
    var r = e.__data__;
    if (!Kt || r.length < vh - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new at(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function Q(t) {
  var n = this.__data__ = new it(t);
  this.size = n.size;
}
Q.prototype.clear = gh;
Q.prototype.delete = _h;
Q.prototype.get = yh;
Q.prototype.has = mh;
Q.prototype.set = wh;
function xh(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function Ci() {
  return [];
}
var bh = Object.prototype, Mh = bh.propertyIsEnumerable, Mr = Object.getOwnPropertySymbols, Ri = Mr ? function(t) {
  return t == null ? [] : (t = Object(t), xh(Mr(t), function(n) {
    return Mh.call(t, n);
  }));
} : Ci, $h = Object.getOwnPropertySymbols, Ah = $h ? function(t) {
  for (var n = []; t; )
    Re(n, Ri(t)), t = Hc(t);
  return n;
} : Ci;
function Fi(t, n, e) {
  var r = n(t);
  return L(t) ? r : Re(r, e(t));
}
function $r(t) {
  return Fi(t, Cn, Ri);
}
function Th(t) {
  return Fi(t, rc, Ah);
}
var ge = wt(rt, "DataView"), _e = wt(rt, "Promise"), ye = wt(rt, "Set"), Ar = "[object Map]", Ph = "[object Object]", Tr = "[object Promise]", Pr = "[object Set]", Sr = "[object WeakMap]", Er = "[object DataView]", Sh = vt(ge), Eh = vt(Kt), Nh = vt(_e), Ih = vt(ye), kh = vt(ce), J = mt;
(ge && J(new ge(new ArrayBuffer(1))) != Er || Kt && J(new Kt()) != Ar || _e && J(_e.resolve()) != Tr || ye && J(new ye()) != Pr || ce && J(new ce()) != Sr) && (J = function(t) {
  var n = mt(t), e = n == Ph ? t.constructor : void 0, r = e ? vt(e) : "";
  if (r)
    switch (r) {
      case Sh:
        return Er;
      case Eh:
        return Ar;
      case Nh:
        return Tr;
      case Ih:
        return Pr;
      case kh:
        return Sr;
    }
  return n;
});
var Nr = rt.Uint8Array, zh = "__lodash_hash_undefined__";
function Oh(t) {
  return this.__data__.set(t, zh), this;
}
function Ch(t) {
  return this.__data__.has(t);
}
function $n(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new at(); ++n < e; )
    this.add(t[n]);
}
$n.prototype.add = $n.prototype.push = Oh;
$n.prototype.has = Ch;
function Rh(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Fh(t, n) {
  return t.has(n);
}
var Lh = 1, Dh = 2;
function Li(t, n, e, r, i, a) {
  var o = e & Lh, s = t.length, u = n.length;
  if (s != u && !(o && u > s))
    return !1;
  var l = a.get(t), c = a.get(n);
  if (l && c)
    return l == n && c == t;
  var f = -1, h = !0, p = e & Dh ? new $n() : void 0;
  for (a.set(t, n), a.set(n, t); ++f < s; ) {
    var d = t[f], m = n[f];
    if (r)
      var b = o ? r(m, d, f, n, t, a) : r(d, m, f, t, n, a);
    if (b !== void 0) {
      if (b)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!Rh(n, function(_, M) {
        if (!Fh(p, M) && (d === _ || i(d, _, e, r, a)))
          return p.push(M);
      })) {
        h = !1;
        break;
      }
    } else if (!(d === m || i(d, m, e, r, a))) {
      h = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), h;
}
function Di(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Hh(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var qh = 1, Bh = 2, Xh = "[object Boolean]", Gh = "[object Date]", Uh = "[object Error]", Yh = "[object Map]", Kh = "[object Number]", Vh = "[object RegExp]", jh = "[object Set]", Zh = "[object String]", Wh = "[object Symbol]", Jh = "[object ArrayBuffer]", Qh = "[object DataView]", Ir = V ? V.prototype : void 0, jn = Ir ? Ir.valueOf : void 0;
function td(t, n, e, r, i, a, o) {
  switch (e) {
    case Qh:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Jh:
      return !(t.byteLength != n.byteLength || !a(new Nr(t), new Nr(n)));
    case Xh:
    case Gh:
    case Kh:
      return On(+t, +n);
    case Uh:
      return t.name == n.name && t.message == n.message;
    case Vh:
    case Zh:
      return t == n + "";
    case Yh:
      var s = Di;
    case jh:
      var u = r & qh;
      if (s || (s = Hh), t.size != n.size && !u)
        return !1;
      var l = o.get(t);
      if (l)
        return l == n;
      r |= Bh, o.set(t, n);
      var c = Li(s(t), s(n), r, i, a, o);
      return o.delete(t), c;
    case Wh:
      if (jn)
        return jn.call(t) == jn.call(n);
  }
  return !1;
}
var nd = 1, ed = Object.prototype, rd = ed.hasOwnProperty;
function id(t, n, e, r, i, a) {
  var o = e & nd, s = $r(t), u = s.length, l = $r(n), c = l.length;
  if (u != c && !o)
    return !1;
  for (var f = u; f--; ) {
    var h = s[f];
    if (!(o ? h in n : rd.call(n, h)))
      return !1;
  }
  var p = a.get(t), d = a.get(n);
  if (p && d)
    return p == n && d == t;
  var m = !0;
  a.set(t, n), a.set(n, t);
  for (var b = o; ++f < u; ) {
    h = s[f];
    var _ = t[h], M = n[h];
    if (r)
      var A = o ? r(M, _, h, n, t, a) : r(_, M, h, t, n, a);
    if (!(A === void 0 ? _ === M || i(_, M, e, r, a) : A)) {
      m = !1;
      break;
    }
    b || (b = h == "constructor");
  }
  if (m && !b) {
    var g = t.constructor, v = n.constructor;
    g != v && "constructor" in t && "constructor" in n && !(typeof g == "function" && g instanceof g && typeof v == "function" && v instanceof v) && (m = !1);
  }
  return a.delete(t), a.delete(n), m;
}
var ad = 1, kr = "[object Arguments]", zr = "[object Array]", on = "[object Object]", od = Object.prototype, Or = od.hasOwnProperty;
function sd(t, n, e, r, i, a) {
  var o = L(t), s = L(n), u = o ? zr : J(t), l = s ? zr : J(n);
  u = u == kr ? on : u, l = l == kr ? on : l;
  var c = u == on, f = l == on, h = u == l;
  if (h && he(t)) {
    if (!he(n))
      return !1;
    o = !0, c = !1;
  }
  if (h && !c)
    return a || (a = new Q()), o || Ai(t) ? Li(t, n, e, r, i, a) : td(t, n, u, e, r, i, a);
  if (!(e & ad)) {
    var p = c && Or.call(t, "__wrapped__"), d = f && Or.call(n, "__wrapped__");
    if (p || d) {
      var m = p ? t.value() : t, b = d ? n.value() : n;
      return a || (a = new Q()), i(m, b, e, r, a);
    }
  }
  return h ? (a || (a = new Q()), id(t, n, e, r, i, a)) : !1;
}
function Fe(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !pt(t) && !pt(n) ? t !== t && n !== n : sd(t, n, e, r, Fe, i);
}
var ud = 1, ld = 2;
function fd(t, n, e, r) {
  var i = e.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = e[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = e[i];
    var s = o[0], u = t[s], l = o[1];
    if (o[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var c = new Q(), f;
      if (!(f === void 0 ? Fe(l, u, ud | ld, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function Hi(t) {
  return t === t && !nt(t);
}
function cd(t) {
  for (var n = Cn(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Hi(i)];
  }
  return n;
}
function qi(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function hd(t) {
  var n = cd(t);
  return n.length == 1 && n[0][2] ? qi(n[0][0], n[0][1]) : function(e) {
    return e === t || fd(e, t, n);
  };
}
function dd(t, n) {
  return t != null && n in Object(t);
}
function Bi(t, n, e) {
  n = Dn(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = Jt(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && Ie(i) && zn(o, i) && (L(t) || ke(t)));
}
function pd(t, n) {
  return t != null && Bi(t, n, dd);
}
var gd = 1, _d = 2;
function yd(t, n) {
  return ze(t) && Hi(n) ? qi(Jt(t), n) : function(e) {
    var r = Rc(e, t);
    return r === void 0 && r === n ? pd(e, t) : Fe(n, r, gd | _d);
  };
}
function md(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function vd(t) {
  return function(n) {
    return Ce(n, t);
  };
}
function wd(t) {
  return ze(t) ? md(Jt(t)) : vd(t);
}
function Le(t) {
  return typeof t == "function" ? t : t == null ? Ne : typeof t == "object" ? L(t) ? yd(t[0], t[1]) : hd(t) : wd(t);
}
function xd(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var u = o[++i];
      if (e(a[u], u, a) === !1)
        break;
    }
    return n;
  };
}
var bd = xd();
function Md(t, n) {
  return t && bd(t, n, Cn);
}
function $d(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Wt(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var Xi = $d(Md);
function Ad(t) {
  return typeof t == "function" ? t : Ne;
}
function _t(t, n) {
  var e = L(t) ? ef : Xi;
  return e(t, Ad(n));
}
function Td(t, n) {
  return kn(n, function(e) {
    return [e, t[e]];
  });
}
function Pd(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var Sd = "[object Map]", Ed = "[object Set]";
function Nd(t) {
  return function(n) {
    var e = J(n);
    return e == Sd ? Di(n) : e == Ed ? Pd(n) : Td(n, t(n));
  };
}
var Gi = Nd(Cn);
function Id(t, n) {
  var e = -1, r = Wt(t) ? Array(t.length) : [];
  return Xi(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function et(t, n) {
  var e = L(t) ? kn : Id;
  return e(t, Le(n));
}
function kd(t, n) {
  return t > n;
}
var zd = Object.prototype, Od = zd.hasOwnProperty;
function Cd(t, n) {
  return t != null && Od.call(t, n);
}
function Rd(t, n) {
  return t != null && Bi(t, n, Cd);
}
var Fd = "[object Boolean]";
function Ld(t) {
  return t === !0 || t === !1 || pt(t) && mt(t) == Fd;
}
function Dd(t, n, e) {
  for (var r = -1, i = t.length; ++r < i; ) {
    var a = t[r], o = n(a);
    if (o != null && (s === void 0 ? o === o && !Zt(o) : e(o, s)))
      var s = o, u = a;
  }
  return u;
}
function Hd(t, n) {
  return t && t.length ? Dd(t, Le(n), kd) : void 0;
}
function qd(t, n) {
  for (var e, r = -1, i = t.length; ++r < i; ) {
    var a = n(t[r]);
    a !== void 0 && (e = e === void 0 ? a : e + a);
  }
  return e;
}
var Bd = NaN;
function Xd(t, n) {
  var e = t == null ? 0 : t.length;
  return e ? qd(t, n) / e : Bd;
}
function Gd(t) {
  return Xd(t, Ne);
}
function Ud(t, n, e, r) {
  if (!nt(t))
    return t;
  n = Dn(n, t);
  for (var i = -1, a = n.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var u = Jt(n[i]), l = e;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != o) {
      var c = s[u];
      l = void 0, l === void 0 && (l = nt(c) ? c : zn(n[i + 1]) ? [] : {});
    }
    lf(s, u, l), s = s[u];
  }
  return t;
}
function Yd(t, n, e) {
  for (var r = -1, i = n.length, a = {}; ++r < i; ) {
    var o = n[r], s = Ce(t, o);
    e(s, o) && Ud(a, Dn(o, t), s);
  }
  return a;
}
function Ui(t, n) {
  if (t == null)
    return {};
  var e = kn(Th(t), function(r) {
    return [r];
  });
  return n = Le(n), Yd(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var Kd = Math.ceil, Vd = Math.max;
function jd(t, n, e, r) {
  for (var i = -1, a = Vd(Kd((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function Zd(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && cf(n, e, r) && (e = r = void 0), n = Yn(n), e === void 0 ? (e = n, n = 0) : e = Yn(e), r = r === void 0 ? n < e ? 1 : -1 : Yn(r), jd(n, e, r);
  };
}
var yt = Zd();
function Wd() {
  var t = arguments, n = Ln(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
const Jd = (t, n, e = 12, r = 12) => {
  const i = B().domain([0, e]).range([0, t]), a = B().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return yt((e + 1) * (r + 1)).map(function(u) {
        return { m: u % (e + 1), n: Math.floor(u / (e + 1)), x: i(u % (e + 1)), y: a(Math.floor(u / (e + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const c = Dc(et(l, function(f) {
        return et(
          u,
          function(h) {
            return { x: i(h), y: a(f) };
          }
        );
      }));
      return c.length == 1 ? c[0] : c;
    }
  };
}, Qd = "_widget_18g36_1", tp = "_label_18g36_19", np = "_lit_18g36_24", ep = "_button_18g36_29", rp = "_symbol_18g36_29", ip = "_radio_18g36_29", ap = "_radiobutton_18g36_29", op = "_selected_18g36_35", sp = "_toggle_18g36_35", up = "_slider_18g36_44", lp = "_track_18g36_44", fp = "_track_overlay_18g36_48", cp = "_handle_18g36_55", y = {
  widget: Qd,
  label: tp,
  lit: np,
  button: ep,
  symbol: rp,
  radio: ip,
  radiobutton: ap,
  selected: op,
  toggle: sp,
  slider: up,
  track: lp,
  track_overlay: fp,
  handle: cp
}, De = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, He = (t, n, e) => {
  var r, i, a, o;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, a = "middle", o = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, a = "end", o = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, a = "start", o = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
  }
  return { x: r, y: i, anchor: a, valign: o };
}, hp = (t = 1) => {
  const n = G();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, dp = (t = 1) => {
  const n = G(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, pp = (t = 1) => {
  const n = G();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, gp = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = G();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, _p = (t = 1) => {
  const n = G(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, a = 0.5, o = 0.6, s = 0.6, u = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), n.arc(0, 0, t * (1 - a), r, i, !1), n.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), n.closePath(), n.toString();
}, yp = (t = 1) => {
  const n = G(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, a = e, o = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, o), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, a, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, mp = (t = 1) => {
  const n = G(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), n.arc(0, 0, t * (1 - a), i, r, !0), n.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var u = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), n.closePath(), n.toString();
}, vp = (t = 1) => {
  var n = G(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, wp = (t = 1) => {
  const n = G(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, me = (t) => {
  switch (t) {
    case "play":
      return hp;
    case "forward":
      return dp;
    case "back":
      return pp;
    case "pause":
      return gp;
    case "reload":
      return _p;
    case "capture":
      return yp;
    case "rewind":
      return mp;
    case "stop":
      return vp;
    case "push":
      return wp;
  }
}, qe = () => {
  const t = "button";
  var n = De(), e = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", u = null, l = function(d) {
  }, c = ["play"], f = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? a.x : (a.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? a.y : (a.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return l = d, this;
      l(d);
    },
    actions: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    click: function() {
      f = (f + 1) % c.length, l(), E(this.parentNode).select("." + y.symbol).attr("d", me(c[f])(r * e));
    },
    press: function(d) {
      f = (f + 1) % c.length, l(), d.select("#button_" + n).select("." + y.symbol).attr("d", me(c[f])(r * e));
    }
  };
}, xp = () => {
  const t = "slider", n = In(".3f");
  var e = De(), r = 100, i = 8, a = 10, o = !1, s = { x: 0, y: 0 }, u = "top-left", l = null, c = function(_) {
  }, f = function(_) {
  }, h = [0, 1], p = 0, d = null, m = B().domain(h).range([0, r]).clamp(!0);
  const b = function(_, M, A = h) {
    const g = _.select("#slider_" + e);
    m.domain(A), p = M, g.selectAll("." + y.handle).transition().attr("cx", m(M)), o && g.select("." + y.label).text(d + " = " + n(p)), c(), f();
  };
  return {
    type: t,
    scale: m,
    id: function(_) {
      return typeof _ > "u" ? e : (e = _, this);
    },
    label: function(_) {
      return typeof _ > "u" ? d : (d = _, this);
    },
    size: function(_) {
      return typeof _ > "u" ? r : (r = _, this);
    },
    girth: function(_) {
      return typeof _ > "u" ? i : (i = _, this);
    },
    knob: function(_) {
      return typeof _ > "u" ? a : (a = _, this);
    },
    show: function(_) {
      return typeof _ > "u" ? o : (o = _, this);
    },
    position: function(_) {
      return typeof _ > "u" ? s : (s = _, this);
    },
    x: function(_) {
      return typeof _ > "u" ? s.x : (s.x = _, this);
    },
    y: function(_) {
      return typeof _ > "u" ? s.y : (s.y = _, this);
    },
    labelposition: function(_) {
      return typeof _ > "u" ? u : (u = _, this);
    },
    fontsize: function(_) {
      return typeof _ > "u" ? l : (l = _, this);
    },
    update: function(_) {
      if (typeof _ == "function")
        return c = _, this;
      c(_);
    },
    update_end: function(_) {
      if (typeof _ == "function")
        return f = _, this;
      f(_);
    },
    range: function(_) {
      return typeof _ > "u" ? h : (h = _, this);
    },
    value: function(_) {
      return typeof _ > "u" ? p : (p = _, this);
    },
    reset: b,
    click: b
  };
}, bp = () => {
  const t = "toggle";
  var n = De(), e = 10, r = { x: 0, y: 0 }, i = null, a = "top", o = null, s = function(f) {
  }, u = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? r.x : (r.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? r.y : (r.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return s = f, this;
      s(f);
    },
    value: function(f) {
      return typeof f > "u" ? u : (u = f, this);
    },
    click: function() {
      u = !u;
      const f = E(this.parentNode);
      f.select("." + y.handle).transition().attr("cx", u ? 2 * e : 0), f.classed(y.selected, u), s();
    },
    reset: function(f, h) {
      u = h;
      const p = f.select("#toggle_" + n);
      p.selectAll("." + y.handle).transition().attr("cx", u ? 2 * e : 0), p.classed(y.selected, u), s();
    }
  };
}, Mp = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = E(a).attr("class", y.widget + " " + y.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", y.background).on("click", t.click).on("mouseover", function() {
    E(this).classed(y.lit, !0), E(this.parentNode).select("." + y.symbol).classed(y.lit, !0);
  }).on("mouseout", function() {
    E(this).classed(y.lit, !1), E(this.parentNode).select("." + y.symbol).classed(y.lit, !1);
  }), o.append("path").attr("d", me(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", y.symbol), r) {
    const u = He(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", y.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return a;
}, Yi = (t, n) => {
  const e = G();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, $p = (t, n) => {
  const e = In(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = E(u).attr("class", y.widget + " " + y.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", Yi(t.size(), t.girth())).attr("class", y.track), s.append("circle").attr("class", y.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", y.track_overlay).on("click", function(d) {
    const m = te(d, this)[0];
    t.value(o.invert(m)), t.update(), t.update_end(), s.selectAll("." + y.handle).attr("cx", o(t.value())), t.show() && s.select("." + y.label).text(t.label() + " = " + e(t.value()));
  }).call(
    rs().on("drag", function(d) {
      t.value(o.invert(d.x)), t.update(), s.selectAll("." + y.handle).attr("cx", o(t.value())), t.show() && s.select("." + y.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var c, f, h, p = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? Ct([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Ct([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? Ct([t.girth() / 2, t.knob()]) + 7 : -Ct([t.girth() / 2, t.knob()]) - 7, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", p = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", y.label).style("text-anchor", h).style("alignment-baseline", p).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + f + ")"), u;
}, Ap = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = E(o).attr("class", y.widget + " " + y.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(y.selected, t.value() == 1);
  if (s.append("path").attr("d", Yi(2 * t.size(), 2 * t.size())).attr("class", y.track), s.append("circle").attr("class", y.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", y.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = He(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", y.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return o;
}, Tp = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = Rt(o), u = B().domain([0, o - 1]).range([0, t.size()]), l = B().domain([0, o - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = E(c).attr("class", y.widget + " " + y.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + y.radiobutton).data(s).enter().append("g").attr("class", y.radiobutton).attr("id", (b) => "b" + b).attr("transform", (b) => t.orientation() == "vertical" ? "translate(0," + l(b) + ")" : "translate(" + u(b) + ",0)");
  var p, d;
  t.shape() == "rect" ? (p = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (p = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", a / 2)), p.attr("class", y.background).on("mouseover", function() {
    E(this).classed(y.lit, !0), E(this.parentNode).select("." + y.symbol).classed(y.lit, !0);
  }).on("mouseout", function() {
    E(this).classed(y.lit, !1), E(this.parentNode).select("." + y.symbol).classed(y.lit, !1);
  }), d.attr("class", y.symbol), d.filter((b) => b == t.value()).classed(y.selected, !0), h.on("click", t.click);
  const m = He(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", y.label).text(function(b, _) {
    return t.choices()[_];
  }).attr("alignment-baseline", m.valign).attr("transform", "translate(" + m.x + "," + m.y + ")").style("font-size", t.fontsize()).attr("text-anchor", m.anchor), c;
}, Zn = (t, n) => {
  switch (t.type) {
    case "button":
      return Mp(t);
    case "slider":
      return $p(t);
    case "radio":
      return Tp(t);
    case "toggle":
      return Ap(t);
  }
}, Pp = (t, n) => {
  const e = Jd(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = E("#" + t).classed("explorable " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), a = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && a.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && a.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (o) => "translate(" + o.x + "," + o.y + ")").style("fill", "black"), { display: i, controls: a, grid: e };
}, T = {
  widgets: {
    slider_size: 400,
    slider_gap: 1.5,
    slider_girth: 12,
    slider_knob: 14,
    slider_anchor: { x: 1, y: 7 },
    toggle_anchor: { x: 6.5, y: 4 },
    toggle_label_position: "right",
    toggle_gap: 1,
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 4, y: 5 },
    resetbutton_anchor: { x: 2, y: 5 }
  },
  simulation: {
    delay: 10
  },
  tacho: {
    anchor: { x: 8.5, y: 3 },
    tick: 4,
    size: 100
  }
}, x = {
  N: 40,
  delta: 0.01,
  dt: 35e-4,
  path: {
    kr: 6,
    ktheta: 12,
    rmin: 2,
    slope: 1,
    vartheta: 0.169,
    vartheta_0: 0.169,
    varr: 1,
    varr_0: 1
  },
  mean_speed: {
    range: [0.1, 0.3],
    default: 0.2
  },
  speed_variability: {
    range: [0, 0.25 * 0.2],
    default: 0.1 * 0.2
  },
  inertia: {
    range: [0.1 * 1 / 40, 1 / 40],
    default: 0.5 * 1 / 40
  },
  acceleration: {
    range: [0.15, 0.75],
    default: 0.5
  },
  highlight_passing: {
    default: !1
  },
  color_speed: {
    default: !1
  },
  allow_lane_changes: {
    default: !0
  }
}, Ki = (t) => et(Gi(t), (n) => {
  n[1].id = n[0], n[1].label = Wd(ph(n[0]), /_/g, " ");
}), Vi = (t) => et(Gi(t), (n) => n[1]), ji = (t, n) => _t(t, (e, r) => e.widget = n[r]), Sp = (t) => Ui(t, (n) => Rd(n, "range")), Ep = (t) => Ui(t, (n) => Ld(n.default));
B().domain([0, 360]).range([0, 2 * Math.PI]);
B().range([0, 360]).domain([0, 2 * Math.PI]);
const F = (t, n) => {
  if (t - n >= 0 && t - n < 0.5)
    return t - n;
  if (t - n < 0 && t - n < -0.5)
    return 1 - n + t;
  if (t - n < 0 && t - n > -0.5)
    return t - n;
  if (t - n > 0 && t - n > 0.5)
    return t - n - 1;
}, Be = Sp(x), Xe = Ep(x);
Ki(Be);
Ki(Xe);
const Zi = Vi(Be), Wi = Vi(Xe), hn = et(
  Zi,
  (t) => xp().id(t.id).label(t.label).range(t.range).value(t.default).size(T.widgets.slider_size).girth(T.widgets.slider_girth).knob(T.widgets.slider_knob)
), dn = et(
  Wi,
  (t) => bp().id(t.id).label(t.label).value(t.default).labelposition(T.widgets.toggle_label_position)
);
ji(Wi, dn);
ji(Zi, hn);
const st = qe().actions(["play", "pause"]), Hn = qe().actions(["back"]), qn = qe().actions(["rewind"]), Np = [st, Hn, qn], Ip = (t, n) => {
  const e = n.position(T.widgets.slider_anchor.x, yt(hn.length).map((i) => T.widgets.slider_anchor.y + T.widgets.slider_gap * i)), r = n.position(T.widgets.toggle_anchor.x, yt(dn.length).map((i) => T.widgets.toggle_anchor.y + T.widgets.toggle_gap * i));
  hn.forEach((i, a) => i.position(e[a])), dn.forEach((i, a) => i.position(r[a])), st.position(n.position(T.widgets.playbutton_anchor.x, T.widgets.playbutton_anchor.y)).size(T.widgets.playbutton_size), qn.position(n.position(T.widgets.backbutton_anchor.x, T.widgets.backbutton_anchor.y)), Hn.position(n.position(T.widgets.resetbutton_anchor.x, T.widgets.resetbutton_anchor.y)), t.selectAll(null).data(hn).enter().append(Zn), t.selectAll(null).data(dn).enter().append(Zn), t.selectAll(null).data(Np).enter().append(Zn);
}, kp = (t) => {
  _t(Be, (n) => n.widget.reset(t, n.default)), _t(Xe, (n) => n.widget.reset(t, n.default));
};
x.L;
const Wn = x.dt;
var I = [];
const zp = () => {
  x.timer = {}, x.tick = 0;
  const t = x.N;
  x.mean_speed.widget.value(), x.speed_variability.widget.value(), I = et(yt(2 * t), (n) => {
    const e = Math.random();
    return {
      id: n,
      x: n < t ? n / t % 1 : (n / t + 0.5 / t) % 1,
      v: 0,
      v0: x.mean_speed.widget.value() + x.speed_variability.widget.value() * e,
      vdiff: e,
      lane: n < t ? "left" : "right",
      passing: !1,
      passing_tau: 0,
      v_hist: et(yt(50), (r) => 0),
      v_avg: 0
    };
  }), _t(I, (n, e) => {
    e < t ? n.next = I[(e + 1) % t] : n.next = I[t + (e + 1) % t];
  });
}, Op = () => {
  x.tick++, _t(I, (t, n) => {
    if (Math.random() < 0.5 && F(t.next.x, t.x) < 0.03 && t.passing == !1 && x.allow_lane_changes.widget.value()) {
      var e = I.filter(function(f) {
        return f.lane != t.lane && F(f.x, t.x) < 0;
      }), r = I.filter(function(f) {
        return f.lane != t.lane && F(f.x, t.x) > 0;
      }), i = Ct(e, function(f) {
        return F(f.x, t.x);
      }), a = ha(r, function(f) {
        return F(f.x, t.x);
      });
      if (i < -0.015 && a > 0.015 && a > F(t.next.x, t.x)) {
        var o = I.filter(function(f) {
          return f.next == t;
        })[0];
        o.next = t.next;
        var s = e.filter(function(f) {
          return F(f.x, t.x) == i;
        })[0], u = r.filter(function(f) {
          return F(f.x, t.x) == a;
        })[0];
        s.next = t, t.next = u, t.lane == "left" ? t.lane = "right" : t.lane = "left", t.passing = !0, t.passing_tau = 1;
      }
    }
    let l = t.x, c = t.next.x;
    F(c, l) > x.inertia.widget.value() && (t.v < t.v0 ? t.dv = x.acceleration.widget.value() * Wn : t.dv = -x.acceleration.widget.value() * Wn), F(c, l) < x.delta && (t.dv = 0.5 * t.next.v - t.v), F(c, l) >= x.delta && F(c, l) < x.inertia.widget.value() && (t.dv = 0), t.passing == !0 && (t.passing_tau -= 0.025), t.passing_tau <= 0 && (t.passing = !1, t.passing_tau = 0), t.dx = t.v * Wn;
  }), _t(I, (t) => {
    t.x += t.dx, t.v += t.dv, t.v < 0 && (t.v = 0), t.x = t.x % 1, t.v_hist.push(t.v), t.v_hist.shift(), t.v_avg = Gd(t.v_hist);
  });
}, Cp = () => {
  _t(I, (t) => {
    t.v0 = x.mean_speed.widget.value() + x.speed_variability.widget.value() * t.vdiff;
  });
}, Rp = "_car_1nx4j_1", Fp = "_tire_1nx4j_6", Lp = "_street_background_1nx4j_11", Dp = "_asphalt_1nx4j_18", Hp = "_street_marks_1nx4j_25", qp = "_tacho_1nx4j_32", Bp = "_tachoborder_1nx4j_36", Xp = "_tachoredzone_1nx4j_42", Gp = "_tachotick_1nx4j_50", Up = "_ticklabel_1nx4j_56", Yp = "_pin_1nx4j_62", Kp = "_meanspeed_1nx4j_69", P = {
  car: Rp,
  tire: Fp,
  street_background: Lp,
  asphalt: Dp,
  street_marks: Hp,
  tacho: qp,
  tachoborder: Bp,
  tachoredzone: Xp,
  tachotick: Gp,
  ticklabel: Up,
  pin: Yp,
  meanspeed: Kp
}, Vp = (t, n) => {
  const r = yt(0, 1.001, 1e-3);
  t.append("path").datum(r).attr("d", n).attr("class", P.street_background), t.append("path").datum(r).attr("d", n).attr("class", P.asphalt), t.append("path").datum(r).attr("d", n).attr("class", P.street_marks);
}, jp = (t) => {
  const n = [{ x: 4, y: 4 }, { x: 4, y: -4 }, { x: -4, y: -4 }, { x: -4, y: 4 }];
  t.selectAll("." + P.tire).data(n).enter().append("circle").attr("class", P.tire).attr("r", "2").attr("cy", (e) => e.y).attr("cx", (e) => e.x), t.append("rect").attr("width", 8).attr("height", 16).attr("rx", 1).attr("ry", 3).attr("x", "-4").attr("y", "-8"), t.append("rect").attr("width", 6).attr("height", 6).attr("rx", 1).attr("ry", 1).attr("x", "-3").attr("y", "-2");
};
x.L;
const $t = (t) => (x.path.rmin + x.path.varr * Math.cos(x.path.kr * 2 * Math.PI * t)) * Math.cos(
  x.path.slope * 2 * Math.PI * t + x.path.vartheta * Math.sin(x.path.ktheta * 2 * Math.PI * t)
), At = (t) => (x.path.rmin + x.path.varr * Math.cos(x.path.kr * 2 * Math.PI * t)) * Math.sin(
  x.path.slope * 2 * Math.PI * t + x.path.vartheta * Math.sin(x.path.ktheta * 2 * Math.PI * t)
), Zp = () => {
  let t = 2e3, n = yt(0, 1, 1 / t);
  var e = [0];
  for (let r = 0; r < t - 1; r++)
    e.push(e[r] + Math.sqrt(($t(n[r + 1]) - $t(n[r])) * ($t(n[r + 1]) - $t(n[r])) + (At(n[r + 1]) - At(n[r])) * (At(n[r + 1]) - At(n[r]))));
  return e = et(e, (r) => r / e[e.length - 1]), e;
}, An = B().domain([-3.4, 3.4]), Tn = B().domain([-3.4, 3.4]);
var ve = B().range(["red", "white"]);
const Wp = _i().x((t) => An($t(t))).y((t) => Tn(At(t)));
var sn = Zp();
const Ji = (t) => {
  let n = sn.filter((r) => r <= t % 1), e = (t - n[n.length - 1]) / (sn[n.length] - sn[n.length - 1]);
  return t > 1 && (e = 0), (n.length + e) / (sn.length - 1);
}, St = (t) => $t(Ji(t)), Et = (t) => At(Ji(t)), Jp = (t, n) => {
  ve.domain([0, Hd(I, (o) => o.v0).v0]);
  const e = n.display_size.width, r = n.display_size.height;
  An.range([0, e]), Tn.range([0, r]), t.selectAll("#origin").remove();
  const i = t.append("g").attr("id", "origin");
  Vp(i, Wp);
  const a = i.selectAll("." + P.car).data(I).enter().append("g").attr("class", P.car).attr("transform", (o) => {
    let s = St(o.x + 1e-3) - St(o.x), u = Et(o.x + 1e-3) - Et(o.x), l = o.lane == "left" ? 8 : -8, c = Math.atan2(u, s);
    return o.passing == !0 && (l = o.lane == "left" ? o.passing_tau * -8 + (1 - o.passing_tau) * 8 : o.passing_tau * 8 + (1 - o.passing_tau) * -8), "translate(" + An(St(o.x)) + "," + Tn(Et(o.x)) + ")rotate(" + (90 + c / Math.PI * 180) + ")translate(" + l + ",0)scale(0.8)";
  }).style("fill", (o) => x.color_speed.widget.value() ? ve(o.v) : "white");
  jp(a);
}, Qp = (t, n) => {
  t.selectAll("#origin").selectAll("." + P.car).attr("transform", (e) => {
    let r = St(e.x + 1e-3) - St(e.x), i = Et(e.x + 1e-3) - Et(e.x), a = e.lane == "left" ? 8 : -8, o = Math.atan2(i, r);
    return e.passing == !0 && (a = e.lane == "left" ? e.passing_tau * -8 + (1 - e.passing_tau) * 8 : e.passing_tau * 8 + (1 - e.passing_tau) * -8), "translate(" + An(St(e.x)) + "," + Tn(Et(e.x)) + ")rotate(" + (90 + o / Math.PI * 180) + ")translate(" + a + ",0)scale(0.8)";
  }).style("fill", (e) => e.passing && x.highlight_passing.widget.value() ? "blue" : x.color_speed.widget.value() ? ve(e.v) : "white");
}, pn = T.tacho.size, Cr = T.tacho.tick, Rr = _i().x(function(t) {
  return pn * Math.cos(t);
}).y(function(t) {
  return -100 * Math.sin(t);
}), t0 = (t, n) => {
  const e = x.mean_speed.range[1] + x.speed_variability.range[1];
  t.select("." + P.tacho).remove();
  const r = n.position(T.tacho.anchor.x, T.tacho.anchor.y), i = t.append("g").attr("class", P.tacho).attr("transform", "translate(" + r.x + "," + r.y + ")");
  i.append("path").data([Rt(0, 0.2 * Math.PI, 0.01)]).attr("d", Rr).attr("class", P.tachoredzone), i.append("path").data([Rt(0, Math.PI, 0.01)]).attr("d", Rr).attr("class", P.tachoborder), i.selectAll("." + P.tachotick).data(Rt(0, Math.PI + Math.PI / 10, Math.PI / 10)).enter().append("line").attr("class", P.tachotick).attr("x1", (a) => (pn - Cr) * Math.cos(a)).attr("x2", (a) => pn * Math.cos(a)).attr("y1", (a) => -96 * Math.sin(a)).attr("y2", (a) => -100 * Math.sin(a)), i.selectAll("." + P.ticklabel).data(Rt(0, Math.PI + Math.PI / 10, Math.PI / 10)).enter().append("g").attr("transform", function(a, o) {
    return "translate(" + (pn + 2 * Cr) * Math.cos(a) + "," + -108 * Math.sin(a) + ")rotate(" + (-a / (2 * Math.PI) * 360 + 90) + ")";
  }).append("text").text(function(a, o) {
    return 150 - o * 15;
  }).attr("class", P.ticklabel), i.selectAll("." + P.pin).data(I).enter().append("line").attr("class", P.pin).attr("x1", function(a) {
    return 0;
  }).attr("x2", function(a) {
    return -92 * Math.cos(a.v / e);
  }).attr("y1", function(a) {
    return 0;
  }).attr("y2", function(a) {
    return -92 * Math.sin(a.v / e);
  }), i.datum(Hr(I, function(a) {
    return a.v_avg;
  })).append("line").attr("class", P.meanspeed).attr("x1", function(a) {
    return 0;
  }).attr("x2", function(a) {
    return -92 * Math.cos(a / e);
  }).attr("y1", function(a) {
    return 0;
  }).attr("y2", function(a) {
    return -92 * Math.sin(a / e);
  }), i.append("circle").attr("class", "pivot").attr("r", 5);
}, Qi = (t) => {
  const n = x.mean_speed.range[1] + x.speed_variability.range[1], e = t.select("." + P.tacho);
  e.selectAll("." + P.pin).data(I).attr("x1", function(r) {
    return 0;
  }).attr("x2", function(r) {
    return -92 * Math.cos(Math.PI * r.v_avg / n);
  }).attr("y1", function(r) {
    return 0;
  }).attr("y2", function(r) {
    return -92 * Math.sin(Math.PI * r.v_avg / n);
  }), e.selectAll("." + P.meanspeed).datum(Hr(I, function(r) {
    return r.v_avg;
  })).attr("x1", function(r) {
    return 0;
  }).attr("x2", function(r) {
    return -92 * Math.cos(Math.PI * r / n);
  }).attr("y1", function(r) {
    return 0;
  }).attr("y2", function(r) {
    return -92 * Math.sin(Math.PI * r / n);
  });
};
function n0(t, n, e) {
  Op(), Qp(t), Qi(n);
}
function ta(t, n, e, r) {
  zp(), Jp(t, r), t0(n, e);
}
function Fr(t, n, e) {
  Cp(), Qi(n);
}
var Lr = {};
const e0 = (t, n, e) => {
  st.value() == 1 ? Lr = Cs(() => n0(t, n), T.simulation.delay) : Lr.stop();
}, r0 = (t, n, e, r) => {
  qn.update(() => kp(n)), st.update(() => e0(t, n)), Hn.update(() => ta(t, n, e, r)), x.mean_speed.widget.update(() => Fr(t, n)), x.speed_variability.widget.update(() => Fr(t, n));
}, i0 = {
  name: "@explorables/berlin_8_am",
  title: "Berlin 8:00 a.m.",
  subtitle: "The emergence of phantom traffic jams",
  description: "This explorable illustrates a model for traffic and congestion and the phenomenon knowns as phantom traffic jams, spontaneously emergent congested traffic segments that move slowly and oppositely to the traffic.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function a0(t, n = na) {
  const e = Pp(t, n), r = e.display, i = e.controls, a = e.grid;
  return Ip(i, a), r0(r, i, a, n), ta(r, i, a, n), {
    halt() {
      st.value() === 1 && st.press(i);
    },
    reset() {
      st.value() === 1 && st.press(i), qn.press(i), Hn.press(i);
    },
    config: n,
    meta: i0
  };
}
export {
  na as config,
  a0 as default,
  a0 as load,
  i0 as meta
};
