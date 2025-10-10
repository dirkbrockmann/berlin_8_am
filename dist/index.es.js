(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-color-black:#000;--tw-color-white:#fff;--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:bg-white{background-color:var(--tw-color-white)}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:text-black{color:var(--tw-color-black)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}@media (prefers-color-scheme:dark){.tw\\:dark\\:bg-black{background-color:var(--tw-color-black)}.tw\\:dark\\:text-white{color:var(--tw-color-white)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._displayPanel_u655x_1,._controlPanel_u655x_8{display:block;line-height:0;box-sizing:border-box}._displayPanel_u655x_1>canvas,._displayPanel_u655x_1>svg,._controlPanel_u655x_8>svg,._controlPanel_u655x_8>canvas{display:block;box-sizing:border-box}._car_u655x_29{stroke:#000;stroke-width:1px}._tire_u655x_34{fill:#000;stroke:none}._street_background_u655x_39{stroke:#000;stroke-width:32;fill:none;stroke-linecap:round}._asphalt_u655x_46{stroke:#787878;stroke-width:29;fill:none;stroke-linecap:round}._street_marks_u655x_53{stroke:#fff;stroke-width:1;fill:none;stroke-dasharray:4}._pivot_u655x_62{stroke:#000;fill:#000}._tachoborder_u655x_67{fill:none;stroke:#000;stroke-width:1.5px}._tachoredzone_u655x_73{fill:none;stroke:red;stroke-opacity:.3;stroke-width:7;stroke-linecap:round}._tachotick_u655x_81{fill:none;stroke:#000;stroke-width:1px}._ticklabel_u655x_87{font-size:10;text-anchor:middle}._pin_u655x_93{stroke:#000;stroke-width:1px;stroke-linecap:round;stroke-opacity:.1}._meanspeed_u655x_100{stroke:#b40000;stroke-width:5px;stroke-linecap:round;stroke-opacity:1}@media (prefers-color-scheme: dark){._car_u655x_29{stroke:#000;stroke-width:1px}._tire_u655x_34{fill:#000;stroke:none}._street_background_u655x_39{stroke:#fff;stroke-width:32;fill:none;stroke-linecap:round}._asphalt_u655x_46{stroke:#141414;stroke-width:29;fill:none;stroke-linecap:round}._street_marks_u655x_53{stroke:gray;stroke-width:1;fill:none;stroke-dasharray:4}._tachoborder_u655x_67{fill:none;stroke:#fff;stroke-width:1.5px}._tachoredzone_u655x_73{fill:none;stroke:red;stroke-opacity:.7;stroke-width:7;stroke-linecap:round}._tachotick_u655x_81{fill:none;stroke:#fff;stroke-width:1px}._ticklabel_u655x_87{font-size:10;text-anchor:middle;fill:#fff}._pin_u655x_93{stroke:#fff;stroke-width:1px;stroke-linecap:round;stroke-opacity:.1}._pivot_u655x_62{stroke:#fff;fill:#fff}._meanspeed_u655x_100{stroke:#b40000;stroke-width:5px;stroke-linecap:round;stroke-opacity:1}}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Hu = {
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
function oe(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Uu(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Oo(t) {
  let n, e, r;
  t.length !== 2 ? (n = oe, e = (s, l) => oe(t(s), l), r = (s, l) => t(s) - l) : (n = t === oe || t === Uu ? t : Gu, e = t, r = t);
  function i(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const f = u + c >>> 1;
        e(s[f], l) < 0 ? u = f + 1 : c = f;
      } while (u < c);
    }
    return u;
  }
  function a(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const f = u + c >>> 1;
        e(s[f], l) <= 0 ? u = f + 1 : c = f;
      } while (u < c);
    }
    return u;
  }
  function o(s, l, u = 0, c = s.length) {
    const f = i(s, l, u, c - 1);
    return f > u && r(s[f - 1], l) > -r(s[f], l) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function Gu() {
  return 0;
}
function Yu(t) {
  return t === null ? NaN : +t;
}
const Vu = Oo(oe), Ku = Vu.right;
Oo(Yu).center;
const Zu = Math.sqrt(50), Wu = Math.sqrt(10), Ju = Math.sqrt(2);
function ye(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= Zu ? 10 : a >= Wu ? 5 : a >= Ju ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? ye(t, n, e * 2) : [s, l, u];
}
function Qu(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? ye(n, t, e) : ye(t, n, e);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) l[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) l[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * o;
  return l;
}
function Ar(t, n, e) {
  return n = +n, t = +t, e = +e, ye(t, n, e)[2];
}
function tl(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Ar(n, t, e) : Ar(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function nl(t, n) {
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
function el(t, n) {
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
function zo(t, n) {
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
function Gn(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * e;
  return a;
}
var rl = { value: () => {
} };
function Io() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new se(e);
}
function se(t) {
  this._ = t;
}
function il(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
se.prototype = Io.prototype = {
  constructor: se,
  on: function(t, n) {
    var e = this._, r = il(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = al(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = Ui(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Ui(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new se(t);
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
function al(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Ui(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = rl, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Tr = "http://www.w3.org/1999/xhtml";
const Gi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Tr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function De(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Gi.hasOwnProperty(n) ? { space: Gi[n], local: t } : t;
}
function ol(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Tr && n.documentElement.namespaceURI === Tr ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function sl(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Co(t) {
  var n = De(t);
  return (n.local ? sl : ol)(n);
}
function ul() {
}
function si(t) {
  return t == null ? ul : function() {
    return this.querySelector(t);
  };
}
function ll(t) {
  typeof t != "function" && (t = si(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), l, u, c = 0; c < o; ++c)
      (l = a[c]) && (u = t.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new q(r, this._parents);
}
function cl(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function fl() {
  return [];
}
function Ro(t) {
  return t == null ? fl : function() {
    return this.querySelectorAll(t);
  };
}
function hl(t) {
  return function() {
    return cl(t.apply(this, arguments));
  };
}
function pl(t) {
  typeof t == "function" ? t = hl(t) : t = Ro(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && (r.push(t.call(l, l.__data__, u, o)), i.push(l));
  return new q(r, i);
}
function jo(t) {
  return function() {
    return this.matches(t);
  };
}
function Fo(t) {
  return function(n) {
    return n.matches(t);
  };
}
var dl = Array.prototype.find;
function gl(t) {
  return function() {
    return dl.call(this.children, t);
  };
}
function _l() {
  return this.firstElementChild;
}
function yl(t) {
  return this.select(t == null ? _l : gl(typeof t == "function" ? t : Fo(t)));
}
var vl = Array.prototype.filter;
function ml() {
  return Array.from(this.children);
}
function wl(t) {
  return function() {
    return vl.call(this.children, t);
  };
}
function bl(t) {
  return this.selectAll(t == null ? ml : wl(typeof t == "function" ? t : Fo(t)));
}
function xl(t) {
  typeof t != "function" && (t = jo(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new q(r, this._parents);
}
function Lo(t) {
  return new Array(t.length);
}
function Ml() {
  return new q(this._enter || this._groups.map(Lo), this._parents);
}
function ve(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
ve.prototype = {
  constructor: ve,
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
function $l(t) {
  return function() {
    return t;
  };
}
function Al(t, n, e, r, i, a) {
  for (var o = 0, s, l = n.length, u = a.length; o < u; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new ve(t, a[o]);
  for (; o < l; ++o)
    (s = n[o]) && (i[o] = s);
}
function Tl(t, n, e, r, i, a, o) {
  var s, l, u = /* @__PURE__ */ new Map(), c = n.length, f = a.length, h = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = n[s]) && (h[s] = p = o.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < f; ++s)
    p = o.call(t, a[s], s, a) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = a[s], u.delete(p)) : e[s] = new ve(t, a[s]);
  for (s = 0; s < c; ++s)
    (l = n[s]) && u.get(h[s]) === l && (i[s] = l);
}
function Nl(t) {
  return t.__data__;
}
function kl(t, n) {
  if (!arguments.length) return Array.from(this, Nl);
  var e = n ? Tl : Al, r = this._parents, i = this._groups;
  typeof t != "function" && (t = $l(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], f = i[u], h = f.length, p = Sl(t.call(c, c && c.__data__, u, r)), g = p.length, y = s[u] = new Array(g), w = o[u] = new Array(g), b = l[u] = new Array(h);
    e(c, f, y, w, b, p, n);
    for (var d = 0, x = 0, _, m; d < g; ++d)
      if (_ = y[d]) {
        for (d >= x && (x = d + 1); !(m = w[x]) && ++x < g; ) ;
        _._next = m || null;
      }
  }
  return o = new q(o, r), o._enter = s, o._exit = l, o;
}
function Sl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Pl() {
  return new q(this._exit || this._groups.map(Lo), this._parents);
}
function El(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function Ol(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), l = 0; l < o; ++l)
    for (var u = e[l], c = r[l], f = u.length, h = s[l] = new Array(f), p, g = 0; g < f; ++g)
      (p = u[g] || c[g]) && (h[g] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new q(s, this._parents);
}
function zl() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Il(t) {
  t || (t = Cl);
  function n(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], s = o.length, l = i[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = o[c]) && (l[c] = u);
    l.sort(n);
  }
  return new q(i, this._parents).order();
}
function Cl(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Rl() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function jl() {
  return Array.from(this);
}
function Fl() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Ll() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Dl() {
  return !this.node();
}
function ql(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Xl(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Bl(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Hl(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Ul(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Gl(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Yl(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Vl(t, n) {
  var e = De(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Bl : Xl : typeof n == "function" ? e.local ? Yl : Gl : e.local ? Ul : Hl)(e, n));
}
function Do(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Kl(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Zl(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Wl(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Jl(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Kl : typeof n == "function" ? Wl : Zl)(t, n, e ?? "")) : nn(this.node(), t);
}
function nn(t, n) {
  return t.style.getPropertyValue(n) || Do(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Ql(t) {
  return function() {
    delete this[t];
  };
}
function tc(t, n) {
  return function() {
    this[t] = n;
  };
}
function nc(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function ec(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Ql : typeof n == "function" ? nc : tc)(t, n)) : this.node()[t];
}
function qo(t) {
  return t.trim().split(/^|\s+/);
}
function ui(t) {
  return t.classList || new Xo(t);
}
function Xo(t) {
  this._node = t, this._names = qo(t.getAttribute("class") || "");
}
Xo.prototype = {
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
function Bo(t, n) {
  for (var e = ui(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Ho(t, n) {
  for (var e = ui(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function rc(t) {
  return function() {
    Bo(this, t);
  };
}
function ic(t) {
  return function() {
    Ho(this, t);
  };
}
function ac(t, n) {
  return function() {
    (n.apply(this, arguments) ? Bo : Ho)(this, t);
  };
}
function oc(t, n) {
  var e = qo(t + "");
  if (arguments.length < 2) {
    for (var r = ui(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? ac : n ? rc : ic)(e, n));
}
function sc() {
  this.textContent = "";
}
function uc(t) {
  return function() {
    this.textContent = t;
  };
}
function lc(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function cc(t) {
  return arguments.length ? this.each(t == null ? sc : (typeof t == "function" ? lc : uc)(t)) : this.node().textContent;
}
function fc() {
  this.innerHTML = "";
}
function hc(t) {
  return function() {
    this.innerHTML = t;
  };
}
function pc(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function dc(t) {
  return arguments.length ? this.each(t == null ? fc : (typeof t == "function" ? pc : hc)(t)) : this.node().innerHTML;
}
function gc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function _c() {
  return this.each(gc);
}
function yc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function vc() {
  return this.each(yc);
}
function mc(t) {
  var n = typeof t == "function" ? t : Co(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function wc() {
  return null;
}
function bc(t, n) {
  var e = typeof t == "function" ? t : Co(t), r = n == null ? wc : typeof n == "function" ? n : si(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function xc() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Mc() {
  return this.each(xc);
}
function $c() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ac() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Tc(t) {
  return this.select(t ? Ac : $c);
}
function Nc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function kc(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Sc(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Pc(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Ec(t, n, e) {
  return function() {
    var r = this.__on, i, a = kc(n);
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
function Oc(t, n, e) {
  var r = Sc(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (i = 0, c = s[l]; i < a; ++i)
          if ((o = r[i]).type === c.type && o.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? Ec : Pc, i = 0; i < a; ++i) this.each(s(r[i], n, e));
  return this;
}
function Uo(t, n, e) {
  var r = Do(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function zc(t, n) {
  return function() {
    return Uo(this, t, n);
  };
}
function Ic(t, n) {
  return function() {
    return Uo(this, t, n.apply(this, arguments));
  };
}
function Cc(t, n) {
  return this.each((typeof n == "function" ? Ic : zc)(t, n));
}
function* Rc() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var Go = [null];
function q(t, n) {
  this._groups = t, this._parents = n;
}
function Ln() {
  return new q([[document.documentElement]], Go);
}
function jc() {
  return this;
}
q.prototype = Ln.prototype = {
  constructor: q,
  select: ll,
  selectAll: pl,
  selectChild: yl,
  selectChildren: bl,
  filter: xl,
  data: kl,
  enter: Ml,
  exit: Pl,
  join: El,
  merge: Ol,
  selection: jc,
  order: zl,
  sort: Il,
  call: Rl,
  nodes: jl,
  node: Fl,
  size: Ll,
  empty: Dl,
  each: ql,
  attr: Vl,
  style: Jl,
  property: ec,
  classed: oc,
  text: cc,
  html: dc,
  raise: _c,
  lower: vc,
  append: mc,
  insert: bc,
  remove: Mc,
  clone: Tc,
  datum: Nc,
  on: Oc,
  dispatch: Cc,
  [Symbol.iterator]: Rc
};
function Fc(t) {
  return typeof t == "string" ? new q([[document.querySelector(t)]], [document.documentElement]) : new q([[t]], Go);
}
function li(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Yo(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Dn() {
}
var Nn = 0.7, me = 1 / Nn, Zt = "\\s*([+-]?\\d+)\\s*", kn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Lc = /^#([0-9a-f]{3,8})$/, Dc = new RegExp(`^rgb\\(${Zt},${Zt},${Zt}\\)$`), qc = new RegExp(`^rgb\\(${rt},${rt},${rt}\\)$`), Xc = new RegExp(`^rgba\\(${Zt},${Zt},${Zt},${kn}\\)$`), Bc = new RegExp(`^rgba\\(${rt},${rt},${rt},${kn}\\)$`), Hc = new RegExp(`^hsl\\(${kn},${rt},${rt}\\)$`), Uc = new RegExp(`^hsla\\(${kn},${rt},${rt},${kn}\\)$`), Yi = {
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
li(Dn, Ot, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Vi,
  // Deprecated! Use color.formatHex.
  formatHex: Vi,
  formatHex8: Gc,
  formatHsl: Yc,
  formatRgb: Ki,
  toString: Ki
});
function Vi() {
  return this.rgb().formatHex();
}
function Gc() {
  return this.rgb().formatHex8();
}
function Yc() {
  return Vo(this).formatHsl();
}
function Ki() {
  return this.rgb().formatRgb();
}
function Ot(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Lc.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Zi(n) : e === 3 ? new F(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Yn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Yn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Dc.exec(t)) ? new F(n[1], n[2], n[3], 1) : (n = qc.exec(t)) ? new F(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Xc.exec(t)) ? Yn(n[1], n[2], n[3], n[4]) : (n = Bc.exec(t)) ? Yn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Hc.exec(t)) ? Qi(n[1], n[2] / 100, n[3] / 100, 1) : (n = Uc.exec(t)) ? Qi(n[1], n[2] / 100, n[3] / 100, n[4]) : Yi.hasOwnProperty(t) ? Zi(Yi[t]) : t === "transparent" ? new F(NaN, NaN, NaN, 0) : null;
}
function Zi(t) {
  return new F(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Yn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new F(t, n, e, r);
}
function Vc(t) {
  return t instanceof Dn || (t = Ot(t)), t ? (t = t.rgb(), new F(t.r, t.g, t.b, t.opacity)) : new F();
}
function Nr(t, n, e, r) {
  return arguments.length === 1 ? Vc(t) : new F(t, n, e, r ?? 1);
}
function F(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
li(F, Nr, Yo(Dn, {
  brighter(t) {
    return t = t == null ? me : Math.pow(me, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Nn : Math.pow(Nn, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new F(Pt(this.r), Pt(this.g), Pt(this.b), we(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Wi,
  // Deprecated! Use color.formatHex.
  formatHex: Wi,
  formatHex8: Kc,
  formatRgb: Ji,
  toString: Ji
}));
function Wi() {
  return `#${kt(this.r)}${kt(this.g)}${kt(this.b)}`;
}
function Kc() {
  return `#${kt(this.r)}${kt(this.g)}${kt(this.b)}${kt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ji() {
  const t = we(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Pt(this.r)}, ${Pt(this.g)}, ${Pt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function we(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Pt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function kt(t) {
  return t = Pt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Qi(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Z(t, n, e, r);
}
function Vo(t) {
  if (t instanceof Z) return new Z(t.h, t.s, t.l, t.opacity);
  if (t instanceof Dn || (t = Ot(t)), !t) return new Z();
  if (t instanceof Z) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new Z(o, s, l, t.opacity);
}
function Zc(t, n, e, r) {
  return arguments.length === 1 ? Vo(t) : new Z(t, n, e, r ?? 1);
}
function Z(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
li(Z, Zc, Yo(Dn, {
  brighter(t) {
    return t = t == null ? me : Math.pow(me, t), new Z(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Nn : Math.pow(Nn, t), new Z(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new F(
      cr(t >= 240 ? t - 240 : t + 120, i, r),
      cr(t, i, r),
      cr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Z(ta(this.h), Vn(this.s), Vn(this.l), we(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = we(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${ta(this.h)}, ${Vn(this.s) * 100}%, ${Vn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function ta(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Vn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function cr(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const ci = (t) => () => t;
function Wc(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Jc(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Qc(t) {
  return (t = +t) == 1 ? Ko : function(n, e) {
    return e - n ? Jc(n, e, t) : ci(isNaN(n) ? e : n);
  };
}
function Ko(t, n) {
  var e = n - t;
  return e ? Wc(t, e) : ci(isNaN(t) ? n : t);
}
const be = function t(n) {
  var e = Qc(n);
  function r(i, a) {
    var o = e((i = Nr(i)).r, (a = Nr(a)).r), s = e(i.g, a.g), l = e(i.b, a.b), u = Ko(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function tf(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function nf(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function ef(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = fi(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function rf(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function V(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function af(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = fi(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e) r[i] = e[i](a);
    return r;
  };
}
var kr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, fr = new RegExp(kr.source, "g");
function of(t) {
  return function() {
    return t;
  };
}
function sf(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Zo(t, n) {
  var e = kr.lastIndex = fr.lastIndex = 0, r, i, a, o = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = kr.exec(t)) && (i = fr.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: V(r, i) })), e = fr.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? sf(l[0].x) : of(n) : (n = l.length, function(u) {
    for (var c = 0, f; c < n; ++c) s[(f = l[c]).i] = f.x(u);
    return s.join("");
  });
}
function fi(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? ci(n) : (e === "number" ? V : e === "string" ? (r = Ot(n)) ? (n = r, be) : Zo : n instanceof Ot ? be : n instanceof Date ? rf : nf(n) ? tf : Array.isArray(n) ? ef : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? af : V)(t, n);
}
function uf(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var na = 180 / Math.PI, Sr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Wo(t, n, e, r, i, a) {
  var o, s, l;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * na,
    skewX: Math.atan(l) * na,
    scaleX: o,
    scaleY: s
  };
}
var Kn;
function lf(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Sr : Wo(n.a, n.b, n.c, n.d, n.e, n.f);
}
function cf(t) {
  return t == null || (Kn || (Kn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Kn.setAttribute("transform", t), !(t = Kn.transform.baseVal.consolidate())) ? Sr : (t = t.matrix, Wo(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Jo(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, f, h, p, g) {
    if (u !== f || c !== h) {
      var y = p.push("translate(", null, n, null, e);
      g.push({ i: y - 4, x: V(u, f) }, { i: y - 2, x: V(c, h) });
    } else (f || h) && p.push("translate(" + f + n + h + e);
  }
  function o(u, c, f, h) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: V(u, c) })) : c && f.push(i(f) + "rotate(" + c + r);
  }
  function s(u, c, f, h) {
    u !== c ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: V(u, c) }) : c && f.push(i(f) + "skewX(" + c + r);
  }
  function l(u, c, f, h, p, g) {
    if (u !== f || c !== h) {
      var y = p.push(i(p) + "scale(", null, ",", null, ")");
      g.push({ i: y - 4, x: V(u, f) }, { i: y - 2, x: V(c, h) });
    } else (f !== 1 || h !== 1) && p.push(i(p) + "scale(" + f + "," + h + ")");
  }
  return function(u, c) {
    var f = [], h = [];
    return u = t(u), c = t(c), a(u.translateX, u.translateY, c.translateX, c.translateY, f, h), o(u.rotate, c.rotate, f, h), s(u.skewX, c.skewX, f, h), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, h), u = c = null, function(p) {
      for (var g = -1, y = h.length, w; ++g < y; ) f[(w = h[g]).i] = w.x(p);
      return f.join("");
    };
  };
}
var ff = Jo(lf, "px, ", "px)", "deg)"), hf = Jo(cf, ", ", ")", ")"), en = 0, mn = 0, gn = 0, Qo = 1e3, xe, wn, Me = 0, zt = 0, qe = 0, Sn = typeof performance == "object" && performance.now ? performance : Date, ts = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Xe() {
  return zt || (ts(pf), zt = Sn.now() + qe);
}
function pf() {
  zt = 0;
}
function Pn() {
  this._call = this._time = this._next = null;
}
Pn.prototype = ns.prototype = {
  constructor: Pn,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Xe() : +e) + (n == null ? 0 : +n), !this._next && wn !== this && (wn ? wn._next = this : xe = this, wn = this), this._call = t, this._time = e, Pr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Pr());
  }
};
function ns(t, n, e) {
  var r = new Pn();
  return r.restart(t, n, e), r;
}
function df() {
  Xe(), ++en;
  for (var t = xe, n; t; )
    (n = zt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --en;
}
function ea() {
  zt = (Me = Sn.now()) + qe, en = mn = 0;
  try {
    df();
  } finally {
    en = 0, _f(), zt = 0;
  }
}
function gf() {
  var t = Sn.now(), n = t - Me;
  n > Qo && (qe -= n, Me = t);
}
function _f() {
  for (var t, n = xe, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : xe = e);
  wn = t, Pr(r);
}
function Pr(t) {
  if (!en) {
    mn && (mn = clearTimeout(mn));
    var n = t - zt;
    n > 24 ? (t < 1 / 0 && (mn = setTimeout(ea, t - Sn.now() - qe)), gn && (gn = clearInterval(gn))) : (gn || (Me = Sn.now(), gn = setInterval(gf, Qo)), en = 1, ts(ea));
  }
}
function ra(t, n, e) {
  var r = new Pn();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function yf(t, n, e) {
  var r = new Pn(), i = n;
  return r._restart = r.restart, r.restart = function(a, o, s) {
    o = +o, s = s == null ? Xe() : +s, r._restart(function l(u) {
      u += i, r._restart(l, i += o, s), a(u);
    }, o, s);
  }, r.restart(t, n, e), r;
}
var vf = Io("start", "end", "cancel", "interrupt"), mf = [], es = 0, ia = 1, Er = 2, ue = 3, aa = 4, Or = 5, le = 6;
function Be(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  wf(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: vf,
    tween: mf,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: es
  });
}
function hi(t, n) {
  var e = tt(t, n);
  if (e.state > es) throw new Error("too late; already scheduled");
  return e;
}
function ot(t, n) {
  var e = tt(t, n);
  if (e.state > ue) throw new Error("too late; already running");
  return e;
}
function tt(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function wf(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = ns(a, 0, e.time);
  function a(u) {
    e.state = ia, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var c, f, h, p;
    if (e.state !== ia) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === ue) return ra(o);
        p.state === aa ? (p.state = le, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = le, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (ra(function() {
      e.state === ue && (e.state = aa, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = Er, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Er) {
      for (e.state = ue, i = new Array(h = e.tween.length), c = 0, f = -1; c < h; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = p);
      i.length = f + 1;
    }
  }
  function s(u) {
    for (var c = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = Or, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, c);
    e.state === Or && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = le, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function bf(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > Er && r.state < Or, r.state = le, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function xf(t) {
  return this.each(function() {
    bf(this, t);
  });
}
function Mf(t, n) {
  var e, r;
  return function() {
    var i = ot(this, t), a = i.tween;
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
function $f(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var a = ot(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    a.tween = i;
  };
}
function Af(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = tt(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? Mf : $f)(e, t, n));
}
function pi(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = ot(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return tt(i, r).value[n];
  };
}
function rs(t, n) {
  var e;
  return (typeof n == "number" ? V : n instanceof Ot ? be : (e = Ot(n)) ? (n = e, be) : Zo)(t, n);
}
function Tf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Nf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function kf(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Sf(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Pf(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function Ef(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function Of(t, n) {
  var e = De(t), r = e === "transform" ? hf : rs;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Ef : Pf)(e, r, pi(this, "attr." + t, n)) : n == null ? (e.local ? Nf : Tf)(e) : (e.local ? Sf : kf)(e, r, n));
}
function zf(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function If(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Cf(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && If(t, a)), e;
  }
  return i._value = n, i;
}
function Rf(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && zf(t, a)), e;
  }
  return i._value = n, i;
}
function jf(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = De(t);
  return this.tween(e, (r.local ? Cf : Rf)(r, n));
}
function Ff(t, n) {
  return function() {
    hi(this, t).delay = +n.apply(this, arguments);
  };
}
function Lf(t, n) {
  return n = +n, function() {
    hi(this, t).delay = n;
  };
}
function Df(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ff : Lf)(n, t)) : tt(this.node(), n).delay;
}
function qf(t, n) {
  return function() {
    ot(this, t).duration = +n.apply(this, arguments);
  };
}
function Xf(t, n) {
  return n = +n, function() {
    ot(this, t).duration = n;
  };
}
function Bf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? qf : Xf)(n, t)) : tt(this.node(), n).duration;
}
function Hf(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    ot(this, t).ease = n;
  };
}
function Uf(t) {
  var n = this._id;
  return arguments.length ? this.each(Hf(n, t)) : tt(this.node(), n).ease;
}
function Gf(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    ot(this, t).ease = e;
  };
}
function Yf(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Gf(this._id, t));
}
function Vf(t) {
  typeof t != "function" && (t = jo(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new pt(r, this._parents, this._name, this._id);
}
function Kf(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var l = n[s], u = e[s], c = l.length, f = o[s] = new Array(c), h, p = 0; p < c; ++p)
      (h = l[p] || u[p]) && (f[p] = h);
  for (; s < r; ++s)
    o[s] = n[s];
  return new pt(o, this._parents, this._name, this._id);
}
function Zf(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Wf(t, n, e) {
  var r, i, a = Zf(n) ? hi : ot;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
  };
}
function Jf(t, n) {
  var e = this._id;
  return arguments.length < 2 ? tt(this.node(), e).on.on(t) : this.each(Wf(e, t, n));
}
function Qf(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function th() {
  return this.on("end.remove", Qf(this._id));
}
function nh(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = si(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], l = s.length, u = a[o] = new Array(l), c, f, h = 0; h < l; ++h)
      (c = s[h]) && (f = t.call(c, c.__data__, h, s)) && ("__data__" in c && (f.__data__ = c.__data__), u[h] = f, Be(u[h], n, e, h, u, tt(c, e)));
  return new pt(a, this._parents, n, e);
}
function eh(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Ro(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, f = 0; f < u; ++f)
      if (c = l[f]) {
        for (var h = t.call(c, c.__data__, f, l), p, g = tt(c, e), y = 0, w = h.length; y < w; ++y)
          (p = h[y]) && Be(p, n, e, y, h, g);
        a.push(h), o.push(c);
      }
  return new pt(a, o, n, e);
}
var rh = Ln.prototype.constructor;
function ih() {
  return new rh(this._groups, this._parents);
}
function ah(t, n) {
  var e, r, i;
  return function() {
    var a = nn(this, t), o = (this.style.removeProperty(t), nn(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function is(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function oh(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = nn(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function sh(t, n, e) {
  var r, i, a;
  return function() {
    var o = nn(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), nn(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s));
  };
}
function uh(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var l = ot(this, t), u = l.on, c = l.value[a] == null ? s || (s = is(n)) : void 0;
    (u !== e || i !== c) && (r = (e = u).copy()).on(o, i = c), l.on = r;
  };
}
function lh(t, n, e) {
  var r = (t += "") == "transform" ? ff : rs;
  return n == null ? this.styleTween(t, ah(t, r)).on("end.style." + t, is(t)) : typeof n == "function" ? this.styleTween(t, sh(t, r, pi(this, "style." + t, n))).each(uh(this._id, t)) : this.styleTween(t, oh(t, r, n), e).on("end.style." + t, null);
}
function ch(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function fh(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && ch(t, o, e)), r;
  }
  return a._value = n, a;
}
function hh(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, fh(t, n, e ?? ""));
}
function ph(t) {
  return function() {
    this.textContent = t;
  };
}
function dh(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function gh(t) {
  return this.tween("text", typeof t == "function" ? dh(pi(this, "text", t)) : ph(t == null ? "" : t + ""));
}
function _h(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function yh(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && _h(i)), n;
  }
  return r._value = t, r;
}
function vh(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, yh(t));
}
function mh() {
  for (var t = this._name, n = this._id, e = as(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      if (l = o[u]) {
        var c = tt(l, n);
        Be(l, t, e, u, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new pt(r, this._parents, t, e);
}
function wh() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var s = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = ot(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && a();
  });
}
var bh = 0;
function pt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function as() {
  return ++bh;
}
var ut = Ln.prototype;
pt.prototype = {
  constructor: pt,
  select: nh,
  selectAll: eh,
  selectChild: ut.selectChild,
  selectChildren: ut.selectChildren,
  filter: Vf,
  merge: Kf,
  selection: ih,
  transition: mh,
  call: ut.call,
  nodes: ut.nodes,
  node: ut.node,
  size: ut.size,
  empty: ut.empty,
  each: ut.each,
  on: Jf,
  attr: Of,
  attrTween: jf,
  style: lh,
  styleTween: hh,
  text: gh,
  textTween: vh,
  remove: th,
  tween: Af,
  delay: Df,
  duration: Bf,
  ease: Uf,
  easeVarying: Yf,
  end: wh,
  [Symbol.iterator]: ut[Symbol.iterator]
};
function xh(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Mh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: xh
};
function $h(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Ah(t) {
  var n, e;
  t instanceof pt ? (n = t._id, t = t._name) : (n = as(), (e = Mh).time = Xe(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && Be(l, t, n, u, o, e || $h(l, n));
  return new pt(r, this._parents, t, n);
}
Ln.prototype.interrupt = xf;
Ln.prototype.transition = Ah;
const zr = Math.PI, Ir = 2 * zr, Tt = 1e-6, Th = Ir - Tt;
function os(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Nh(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return os;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class kh {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? os : Nh(n);
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
    let o = this._x1, s = this._y1, l = r - n, u = i - e, c = o - n, f = s - e, h = c * c + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (h > Tt) if (!(Math.abs(f * l - u * c) > Tt) || !a)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - o, g = i - s, y = l * l + u * u, w = p * p + g * g, b = Math.sqrt(y), d = Math.sqrt(h), x = a * Math.tan((zr - Math.acos((y + h - w) / (2 * b * d))) / 2), _ = x / d, m = x / b;
      Math.abs(_ - 1) > Tt && this._append`L${n + _ * c},${e + _ * f}`, this._append`A${a},${a},0,0,${+(f * p > c * g)},${this._x1 = n + m * l},${this._y1 = e + m * u}`;
    }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, c = e + l, f = 1 ^ o, h = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > Tt || Math.abs(this._y1 - c) > Tt) && this._append`L${u},${c}`, r && (h < 0 && (h = h % Ir + Ir), h > Th ? this._append`A${r},${r},0,1,${f},${n - s},${e - l}A${r},${r},0,1,${f},${this._x1 = u},${this._y1 = c}` : h > Tt && this._append`A${r},${r},0,${+(h >= zr)},${f},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Sh(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function $e(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function rn(t) {
  return t = $e(Math.abs(t)), t ? t[1] : NaN;
}
function Ph(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), a.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function Eh(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Oh = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ae(t) {
  if (!(n = Oh.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new di({
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
Ae.prototype = di.prototype;
function di(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
di.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function zh(t) {
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
var ss;
function Ih(t, n) {
  var e = $e(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], a = i - (ss = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + $e(t, Math.max(0, n + a - 1))[0];
}
function oa(t, n) {
  var e = $e(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const sa = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Sh,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => oa(t * 100, n),
  r: oa,
  s: Ih,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function ua(t) {
  return t;
}
var la = Array.prototype.map, ca = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ch(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? ua : Ph(la.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? ua : Eh(la.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(f) {
    f = Ae(f);
    var h = f.fill, p = f.align, g = f.sign, y = f.symbol, w = f.zero, b = f.width, d = f.comma, x = f.precision, _ = f.trim, m = f.type;
    m === "n" ? (d = !0, m = "g") : sa[m] || (x === void 0 && (x = 12), _ = !0, m = "g"), (w || h === "0" && p === "=") && (w = !0, h = "0", p = "=");
    var S = y === "$" ? e : y === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", P = y === "$" ? r : /[%p]/.test(m) ? o : "", z = sa[m], B = /[defgprs%]/.test(m);
    x = x === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function H(v) {
      var I = S, A = P, C, At, D;
      if (m === "c")
        A = z(v) + A, v = "";
      else {
        v = +v;
        var U = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : z(Math.abs(v), x), _ && (v = zh(v)), U && +v == 0 && g !== "+" && (U = !1), I = (U ? g === "(" ? g : s : g === "-" || g === "(" ? "" : g) + I, A = (m === "s" ? ca[8 + ss / 3] : "") + A + (U && g === "(" ? ")" : ""), B) {
          for (C = -1, At = v.length; ++C < At; )
            if (D = v.charCodeAt(C), 48 > D || D > 57) {
              A = (D === 46 ? i + v.slice(C + 1) : v.slice(C)) + A, v = v.slice(0, C);
              break;
            }
        }
      }
      d && !w && (v = n(v, 1 / 0));
      var Y = I.length + v.length + A.length, E = Y < b ? new Array(b - Y + 1).join(h) : "";
      switch (d && w && (v = n(E + v, E.length ? b - A.length : 1 / 0), E = ""), p) {
        case "<":
          v = I + v + A + E;
          break;
        case "=":
          v = I + E + v + A;
          break;
        case "^":
          v = E.slice(0, Y = E.length >> 1) + I + v + A + E.slice(Y);
          break;
        default:
          v = E + I + v + A;
          break;
      }
      return a(v);
    }
    return H.toString = function() {
      return f + "";
    }, H;
  }
  function c(f, h) {
    var p = u((f = Ae(f), f.type = "f", f)), g = Math.max(-8, Math.min(8, Math.floor(rn(h) / 3))) * 3, y = Math.pow(10, -g), w = ca[8 + g / 3];
    return function(b) {
      return p(y * b) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var Zn, us, ls;
Rh({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Rh(t) {
  return Zn = Ch(t), us = Zn.format, ls = Zn.formatPrefix, Zn;
}
function jh(t) {
  return Math.max(0, -rn(Math.abs(t)));
}
function Fh(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(rn(n) / 3))) * 3 - rn(Math.abs(t)));
}
function Lh(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, rn(n) - rn(t)) + 1;
}
function Dh(t, n) {
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
function qh(t) {
  return function() {
    return t;
  };
}
function Xh(t) {
  return +t;
}
var fa = [0, 1];
function Gt(t) {
  return t;
}
function Cr(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : qh(isNaN(n) ? NaN : 0.5);
}
function Bh(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Hh(t, n, e) {
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = Cr(i, r), a = e(o, a)) : (r = Cr(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function Uh(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = Cr(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var l = Ku(t, s, 1, r) - 1;
    return a[l](i[l](s));
  };
}
function Gh(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Yh() {
  var t = fa, n = fa, e = fi, r, i, a, o = Gt, s, l, u;
  function c() {
    var h = Math.min(t.length, n.length);
    return o !== Gt && (o = Bh(t[0], t[h - 1])), s = h > 2 ? Uh : Hh, l = u = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? a : (l || (l = s(t.map(r), n, e)))(r(o(h)));
  }
  return f.invert = function(h) {
    return o(i((u || (u = s(n, t.map(r), V)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, Xh), c()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (n = Array.from(h), c()) : n.slice();
  }, f.rangeRound = function(h) {
    return n = Array.from(h), e = uf, c();
  }, f.clamp = function(h) {
    return arguments.length ? (o = h ? !0 : Gt, c()) : o !== Gt;
  }, f.interpolate = function(h) {
    return arguments.length ? (e = h, c()) : e;
  }, f.unknown = function(h) {
    return arguments.length ? (a = h, f) : a;
  }, function(h, p) {
    return r = h, i = p, c();
  };
}
function Vh() {
  return Yh()(Gt, Gt);
}
function Kh(t, n, e, r) {
  var i = tl(t, n, e), a;
  switch (r = Ae(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = Fh(i, o)) && (r.precision = a), ls(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Lh(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = jh(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return us(r);
}
function Zh(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Qu(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Kh(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, a = r.length - 1, o = r[i], s = r[a], l, u, c = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); c-- > 0; ) {
      if (u = Ar(o, s, e), u === l)
        return r[i] = o, r[a] = s, n(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      l = u;
    }
    return t;
  }, t;
}
function hn() {
  var t = Vh();
  return t.copy = function() {
    return Gh(t, hn());
  }, Dh.apply(t, arguments), Zh(t);
}
function Ut(t) {
  return function() {
    return t;
  };
}
function Wh(t) {
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
  }, () => new kh(n);
}
function Jh(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function cs(t) {
  this._context = t;
}
cs.prototype = {
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
function Qh(t) {
  return new cs(t);
}
function tp(t) {
  return t[0];
}
function np(t) {
  return t[1];
}
function fs(t, n) {
  var e = Ut(!0), r = null, i = Qh, a = null, o = Wh(s);
  t = typeof t == "function" ? t : t === void 0 ? tp : Ut(t), n = typeof n == "function" ? n : n === void 0 ? np : Ut(n);
  function s(l) {
    var u, c = (l = Jh(l)).length, f, h = !1, p;
    for (r == null && (a = i(p = o())), u = 0; u <= c; ++u)
      !(u < c && e(f = l[u], u, l)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()), h && a.point(+t(f, u, l), +n(f, u, l));
    if (p) return a = null, p + "" || null;
  }
  return s.x = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Ut(+l), s) : t;
  }, s.y = function(l) {
    return arguments.length ? (n = typeof l == "function" ? l : Ut(+l), s) : n;
  }, s.defined = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Ut(!!l), s) : e;
  }, s.curve = function(l) {
    return arguments.length ? (i = l, r != null && (a = i(r)), s) : i;
  }, s.context = function(l) {
    return arguments.length ? (l == null ? r = a = null : a = i(r = l), s) : r;
  }, s;
}
function bn(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
bn.prototype = {
  constructor: bn,
  scale: function(t) {
    return t === 1 ? this : new bn(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new bn(this.k, this.x + this.k * t, this.y + this.k * n);
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
bn.prototype;
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode(".d3-widgets{--color-border: rgb(150, 150, 150);--color-background: #ccc;--color-text: #000;--color-symbol: #fff;--color-lit: #eee;--color-lit-symbol: #bbb;--color-selected: #000;--color-handle: #fff;--dw-font-size: 16px;--dw-line-height: 1.25;font-size:var(--dw-font-size);line-height:var(--dw-line-height);font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-weight:400}@media (prefers-color-scheme: dark){.d3-widgets{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}}.d3-widgets.dark-mode{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}._widget_9wct0_49{stroke:var(--color-border);stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:var(--color-background);font-size:1em}._widget_9wct0_49 ._title_9wct0_61{font-size:1.25em;fill:var(--color-text);stroke:none;text-anchor:middle}._widget_9wct0_49 ._label_9wct0_69{fill:var(--color-text);stroke:none}._widget_9wct0_49 ._lit_9wct0_74{fill:var(--color-lit)}._button_9wct0_78>._symbol_9wct0_78,._radio_9wct0_79>._radiobutton_9wct0_79>._symbol_9wct0_78{fill:var(--color-symbol);fill-rule:nonzero;pointer-events:none}._widget_9wct0_49 ._symbol_9wct0_78._selected_9wct0_85,._toggle_9wct0_86._selected_9wct0_85,._widget_9wct0_49 ._symbol_9wct0_78._selected_9wct0_85._lit_9wct0_74{fill:var(--color-selected)}._widget_9wct0_49 ._symbol_9wct0_78._lit_9wct0_74{fill:var(--color-lit-symbol)}._slider_9wct0_95>._track_9wct0_95,._toggle_9wct0_86>._track_9wct0_95{pointer-events:none}._slider_9wct0_95>._track_overlay_9wct0_100,._toggle_9wct0_86>._track_overlay_9wct0_100{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_9wct0_95>._handle_9wct0_108,._toggle_9wct0_86>._handle_9wct0_108{fill:var(--color-handle)}")), document.head.appendChild(t);
    }
  } catch (n) {
    console.error("vite-plugin-css-injected-by-js", n);
  }
})();
function ce(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function ep(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function hs(t) {
  let n, e, r;
  t.length !== 2 ? (n = ce, e = (s, l) => ce(t(s), l), r = (s, l) => t(s) - l) : (n = t === ce || t === ep ? t : rp, e = t, r = t);
  function i(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const f = u + c >>> 1;
        e(s[f], l) < 0 ? u = f + 1 : c = f;
      } while (u < c);
    }
    return u;
  }
  function a(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const f = u + c >>> 1;
        e(s[f], l) <= 0 ? u = f + 1 : c = f;
      } while (u < c);
    }
    return u;
  }
  function o(s, l, u = 0, c = s.length) {
    const f = i(s, l, u, c - 1);
    return f > u && r(s[f - 1], l) > -r(s[f], l) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function rp() {
  return 0;
}
function ip(t) {
  return t === null ? NaN : +t;
}
const ap = hs(ce), op = ap.right;
hs(ip).center;
const sp = Math.sqrt(50), up = Math.sqrt(10), lp = Math.sqrt(2);
function Te(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= sp ? 10 : a >= up ? 5 : a >= lp ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? Te(t, n, e * 2) : [s, l, u];
}
function cp(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? Te(n, t, e) : Te(t, n, e);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) l[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) l[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * o;
  return l;
}
function Rr(t, n, e) {
  return n = +n, t = +t, e = +e, Te(t, n, e)[2];
}
function fp(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Rr(n, t, e) : Rr(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Wn(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function hp(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * e;
  return a;
}
var pp = { value: () => {
} };
function gi() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new fe(e);
}
function fe(t) {
  this._ = t;
}
function dp(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
fe.prototype = gi.prototype = {
  constructor: fe,
  on: function(t, n) {
    var e = this._, r = dp(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = gp(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = ha(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = ha(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new fe(t);
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
function gp(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function ha(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = pp, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var jr = "http://www.w3.org/1999/xhtml";
const pa = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: jr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function He(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), pa.hasOwnProperty(n) ? { space: pa[n], local: t } : t;
}
function _p(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === jr && n.documentElement.namespaceURI === jr ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function yp(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ps(t) {
  var n = He(t);
  return (n.local ? yp : _p)(n);
}
function vp() {
}
function _i(t) {
  return t == null ? vp : function() {
    return this.querySelector(t);
  };
}
function mp(t) {
  typeof t != "function" && (t = _i(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), l, u, c = 0; c < o; ++c)
      (l = a[c]) && (u = t.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new X(r, this._parents);
}
function wp(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function bp() {
  return [];
}
function ds(t) {
  return t == null ? bp : function() {
    return this.querySelectorAll(t);
  };
}
function xp(t) {
  return function() {
    return wp(t.apply(this, arguments));
  };
}
function Mp(t) {
  typeof t == "function" ? t = xp(t) : t = ds(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && (r.push(t.call(l, l.__data__, u, o)), i.push(l));
  return new X(r, i);
}
function gs(t) {
  return function() {
    return this.matches(t);
  };
}
function _s(t) {
  return function(n) {
    return n.matches(t);
  };
}
var $p = Array.prototype.find;
function Ap(t) {
  return function() {
    return $p.call(this.children, t);
  };
}
function Tp() {
  return this.firstElementChild;
}
function Np(t) {
  return this.select(t == null ? Tp : Ap(typeof t == "function" ? t : _s(t)));
}
var kp = Array.prototype.filter;
function Sp() {
  return Array.from(this.children);
}
function Pp(t) {
  return function() {
    return kp.call(this.children, t);
  };
}
function Ep(t) {
  return this.selectAll(t == null ? Sp : Pp(typeof t == "function" ? t : _s(t)));
}
function Op(t) {
  typeof t != "function" && (t = gs(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new X(r, this._parents);
}
function ys(t) {
  return new Array(t.length);
}
function zp() {
  return new X(this._enter || this._groups.map(ys), this._parents);
}
function Ne(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Ne.prototype = {
  constructor: Ne,
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
function Ip(t) {
  return function() {
    return t;
  };
}
function Cp(t, n, e, r, i, a) {
  for (var o = 0, s, l = n.length, u = a.length; o < u; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new Ne(t, a[o]);
  for (; o < l; ++o)
    (s = n[o]) && (i[o] = s);
}
function Rp(t, n, e, r, i, a, o) {
  var s, l, u = /* @__PURE__ */ new Map(), c = n.length, f = a.length, h = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = n[s]) && (h[s] = p = o.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < f; ++s)
    p = o.call(t, a[s], s, a) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = a[s], u.delete(p)) : e[s] = new Ne(t, a[s]);
  for (s = 0; s < c; ++s)
    (l = n[s]) && u.get(h[s]) === l && (i[s] = l);
}
function jp(t) {
  return t.__data__;
}
function Fp(t, n) {
  if (!arguments.length) return Array.from(this, jp);
  var e = n ? Rp : Cp, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Ip(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], f = i[u], h = f.length, p = Lp(t.call(c, c && c.__data__, u, r)), g = p.length, y = s[u] = new Array(g), w = o[u] = new Array(g), b = l[u] = new Array(h);
    e(c, f, y, w, b, p, n);
    for (var d = 0, x = 0, _, m; d < g; ++d)
      if (_ = y[d]) {
        for (d >= x && (x = d + 1); !(m = w[x]) && ++x < g; ) ;
        _._next = m || null;
      }
  }
  return o = new X(o, r), o._enter = s, o._exit = l, o;
}
function Lp(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Dp() {
  return new X(this._exit || this._groups.map(ys), this._parents);
}
function qp(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function Xp(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), l = 0; l < o; ++l)
    for (var u = e[l], c = r[l], f = u.length, h = s[l] = new Array(f), p, g = 0; g < f; ++g)
      (p = u[g] || c[g]) && (h[g] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new X(s, this._parents);
}
function Bp() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Hp(t) {
  t || (t = Up);
  function n(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], s = o.length, l = i[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = o[c]) && (l[c] = u);
    l.sort(n);
  }
  return new X(i, this._parents).order();
}
function Up(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Gp() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Yp() {
  return Array.from(this);
}
function Vp() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Kp() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Zp() {
  return !this.node();
}
function Wp(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Jp(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Qp(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function td(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function nd(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function ed(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function rd(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function id(t, n) {
  var e = He(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Qp : Jp : typeof n == "function" ? e.local ? rd : ed : e.local ? nd : td)(e, n));
}
function vs(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ad(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function od(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function sd(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function ud(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? ad : typeof n == "function" ? sd : od)(t, n, e ?? "")) : an(this.node(), t);
}
function an(t, n) {
  return t.style.getPropertyValue(n) || vs(t).getComputedStyle(t, null).getPropertyValue(n);
}
function ld(t) {
  return function() {
    delete this[t];
  };
}
function cd(t, n) {
  return function() {
    this[t] = n;
  };
}
function fd(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function hd(t, n) {
  return arguments.length > 1 ? this.each((n == null ? ld : typeof n == "function" ? fd : cd)(t, n)) : this.node()[t];
}
function ms(t) {
  return t.trim().split(/^|\s+/);
}
function yi(t) {
  return t.classList || new ws(t);
}
function ws(t) {
  this._node = t, this._names = ms(t.getAttribute("class") || "");
}
ws.prototype = {
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
function bs(t, n) {
  for (var e = yi(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function xs(t, n) {
  for (var e = yi(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function pd(t) {
  return function() {
    bs(this, t);
  };
}
function dd(t) {
  return function() {
    xs(this, t);
  };
}
function gd(t, n) {
  return function() {
    (n.apply(this, arguments) ? bs : xs)(this, t);
  };
}
function _d(t, n) {
  var e = ms(t + "");
  if (arguments.length < 2) {
    for (var r = yi(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? gd : n ? pd : dd)(e, n));
}
function yd() {
  this.textContent = "";
}
function vd(t) {
  return function() {
    this.textContent = t;
  };
}
function md(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function wd(t) {
  return arguments.length ? this.each(t == null ? yd : (typeof t == "function" ? md : vd)(t)) : this.node().textContent;
}
function bd() {
  this.innerHTML = "";
}
function xd(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Md(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function $d(t) {
  return arguments.length ? this.each(t == null ? bd : (typeof t == "function" ? Md : xd)(t)) : this.node().innerHTML;
}
function Ad() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Td() {
  return this.each(Ad);
}
function Nd() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function kd() {
  return this.each(Nd);
}
function Sd(t) {
  var n = typeof t == "function" ? t : ps(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Pd() {
  return null;
}
function Ed(t, n) {
  var e = typeof t == "function" ? t : ps(t), r = n == null ? Pd : typeof n == "function" ? n : _i(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Od() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function zd() {
  return this.each(Od);
}
function Id() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Cd() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Rd(t) {
  return this.select(t ? Cd : Id);
}
function jd(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Fd(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Ld(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Dd(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function qd(t, n, e) {
  return function() {
    var r = this.__on, i, a = Fd(n);
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
function Xd(t, n, e) {
  var r = Ld(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (i = 0, c = s[l]; i < a; ++i)
          if ((o = r[i]).type === c.type && o.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? qd : Dd, i = 0; i < a; ++i) this.each(s(r[i], n, e));
  return this;
}
function Ms(t, n, e) {
  var r = vs(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Bd(t, n) {
  return function() {
    return Ms(this, t, n);
  };
}
function Hd(t, n) {
  return function() {
    return Ms(this, t, n.apply(this, arguments));
  };
}
function Ud(t, n) {
  return this.each((typeof n == "function" ? Hd : Bd)(t, n));
}
function* Gd() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var $s = [null];
function X(t, n) {
  this._groups = t, this._parents = n;
}
function qn() {
  return new X([[document.documentElement]], $s);
}
function Yd() {
  return this;
}
X.prototype = qn.prototype = {
  constructor: X,
  select: mp,
  selectAll: Mp,
  selectChild: Np,
  selectChildren: Ep,
  filter: Op,
  data: Fp,
  enter: zp,
  exit: Dp,
  join: qp,
  merge: Xp,
  selection: Yd,
  order: Bp,
  sort: Hp,
  call: Gp,
  nodes: Yp,
  node: Vp,
  size: Kp,
  empty: Zp,
  each: Wp,
  attr: id,
  style: ud,
  property: hd,
  classed: _d,
  text: wd,
  html: $d,
  raise: Td,
  lower: kd,
  append: Sd,
  insert: Ed,
  remove: zd,
  clone: Rd,
  datum: jd,
  on: Xd,
  dispatch: Ud,
  [Symbol.iterator]: Gd
};
function R(t) {
  return typeof t == "string" ? new X([[document.querySelector(t)]], [document.documentElement]) : new X([[t]], $s);
}
function Vd(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function da(t, n) {
  if (t = Vd(t), n === void 0 && (n = t.currentTarget), n) {
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
const Kd = { passive: !1 }, En = { capture: !0, passive: !1 };
function hr(t) {
  t.stopImmediatePropagation();
}
function Wt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Zd(t) {
  var n = t.document.documentElement, e = R(t).on("dragstart.drag", Wt, En);
  "onselectstart" in n ? e.on("selectstart.drag", Wt, En) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Wd(t, n) {
  var e = t.document.documentElement, r = R(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Wt, En), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Jn = (t) => () => t;
function Fr(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: a,
  x: o,
  y: s,
  dx: l,
  dy: u,
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
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
Fr.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Jd(t) {
  return !t.ctrlKey && !t.button;
}
function Qd() {
  return this.parentNode;
}
function t0(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function n0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function e0() {
  var t = Jd, n = Qd, e = t0, r = n0, i = {}, a = gi("start", "drag", "end"), o = 0, s, l, u, c, f = 0;
  function h(_) {
    _.on("mousedown.drag", p).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, Kd).on("touchend.drag touchcancel.drag", d).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(_, m) {
    if (!(c || !t.call(this, _, m))) {
      var S = x(this, n.call(this, _, m), _, m, "mouse");
      S && (R(_.view).on("mousemove.drag", g, En).on("mouseup.drag", y, En), Zd(_.view), hr(_), u = !1, s = _.clientX, l = _.clientY, S("start", _));
    }
  }
  function g(_) {
    if (Wt(_), !u) {
      var m = _.clientX - s, S = _.clientY - l;
      u = m * m + S * S > f;
    }
    i.mouse("drag", _);
  }
  function y(_) {
    R(_.view).on("mousemove.drag mouseup.drag", null), Wd(_.view, u), Wt(_), i.mouse("end", _);
  }
  function w(_, m) {
    if (t.call(this, _, m)) {
      var S = _.changedTouches, P = n.call(this, _, m), z = S.length, B, H;
      for (B = 0; B < z; ++B)
        (H = x(this, P, _, m, S[B].identifier, S[B])) && (hr(_), H("start", _, S[B]));
    }
  }
  function b(_) {
    var m = _.changedTouches, S = m.length, P, z;
    for (P = 0; P < S; ++P)
      (z = i[m[P].identifier]) && (Wt(_), z("drag", _, m[P]));
  }
  function d(_) {
    var m = _.changedTouches, S = m.length, P, z;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), P = 0; P < S; ++P)
      (z = i[m[P].identifier]) && (hr(_), z("end", _, m[P]));
  }
  function x(_, m, S, P, z, B) {
    var H = a.copy(), v = da(B || S, m), I, A, C;
    if ((C = e.call(_, new Fr("beforestart", {
      sourceEvent: S,
      target: h,
      identifier: z,
      active: o,
      x: v[0],
      y: v[1],
      dx: 0,
      dy: 0,
      dispatch: H
    }), P)) != null)
      return I = C.x - v[0] || 0, A = C.y - v[1] || 0, function At(D, U, Y) {
        var E = v, lr;
        switch (D) {
          case "start":
            i[z] = At, lr = o++;
            break;
          case "end":
            delete i[z], --o;
          // falls through
          case "drag":
            v = da(Y || U, m), lr = o;
            break;
        }
        H.call(
          D,
          _,
          new Fr(D, {
            sourceEvent: U,
            subject: C,
            target: h,
            identifier: z,
            active: lr,
            x: v[0] + I,
            y: v[1] + A,
            dx: v[0] - E[0],
            dy: v[1] - E[1],
            dispatch: H
          }),
          P
        );
      };
  }
  return h.filter = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : Jn(!!_), h) : t;
  }, h.container = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : Jn(_), h) : n;
  }, h.subject = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : Jn(_), h) : e;
  }, h.touchable = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : Jn(!!_), h) : r;
  }, h.on = function() {
    var _ = a.on.apply(a, arguments);
    return _ === a ? h : _;
  }, h.clickDistance = function(_) {
    return arguments.length ? (f = (_ = +_) * _, h) : Math.sqrt(f);
  }, h;
}
function vi(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function As(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Xn() {
}
var On = 0.7, ke = 1 / On, Jt = "\\s*([+-]?\\d+)\\s*", zn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", it = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", r0 = /^#([0-9a-f]{3,8})$/, i0 = new RegExp(`^rgb\\(${Jt},${Jt},${Jt}\\)$`), a0 = new RegExp(`^rgb\\(${it},${it},${it}\\)$`), o0 = new RegExp(`^rgba\\(${Jt},${Jt},${Jt},${zn}\\)$`), s0 = new RegExp(`^rgba\\(${it},${it},${it},${zn}\\)$`), u0 = new RegExp(`^hsl\\(${zn},${it},${it}\\)$`), l0 = new RegExp(`^hsla\\(${zn},${it},${it},${zn}\\)$`), ga = {
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
vi(Xn, It, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: _a,
  // Deprecated! Use color.formatHex.
  formatHex: _a,
  formatHex8: c0,
  formatHsl: f0,
  formatRgb: ya,
  toString: ya
});
function _a() {
  return this.rgb().formatHex();
}
function c0() {
  return this.rgb().formatHex8();
}
function f0() {
  return Ts(this).formatHsl();
}
function ya() {
  return this.rgb().formatRgb();
}
function It(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = r0.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? va(n) : e === 3 ? new L(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Qn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Qn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = i0.exec(t)) ? new L(n[1], n[2], n[3], 1) : (n = a0.exec(t)) ? new L(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = o0.exec(t)) ? Qn(n[1], n[2], n[3], n[4]) : (n = s0.exec(t)) ? Qn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = u0.exec(t)) ? ba(n[1], n[2] / 100, n[3] / 100, 1) : (n = l0.exec(t)) ? ba(n[1], n[2] / 100, n[3] / 100, n[4]) : ga.hasOwnProperty(t) ? va(ga[t]) : t === "transparent" ? new L(NaN, NaN, NaN, 0) : null;
}
function va(t) {
  return new L(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Qn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new L(t, n, e, r);
}
function h0(t) {
  return t instanceof Xn || (t = It(t)), t ? (t = t.rgb(), new L(t.r, t.g, t.b, t.opacity)) : new L();
}
function Lr(t, n, e, r) {
  return arguments.length === 1 ? h0(t) : new L(t, n, e, r ?? 1);
}
function L(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
vi(L, Lr, As(Xn, {
  brighter(t) {
    return t = t == null ? ke : Math.pow(ke, t), new L(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? On : Math.pow(On, t), new L(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new L(Et(this.r), Et(this.g), Et(this.b), Se(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ma,
  // Deprecated! Use color.formatHex.
  formatHex: ma,
  formatHex8: p0,
  formatRgb: wa,
  toString: wa
}));
function ma() {
  return `#${St(this.r)}${St(this.g)}${St(this.b)}`;
}
function p0() {
  return `#${St(this.r)}${St(this.g)}${St(this.b)}${St((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function wa() {
  const t = Se(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Et(this.r)}, ${Et(this.g)}, ${Et(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Se(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Et(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function St(t) {
  return t = Et(t), (t < 16 ? "0" : "") + t.toString(16);
}
function ba(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new W(t, n, e, r);
}
function Ts(t) {
  if (t instanceof W) return new W(t.h, t.s, t.l, t.opacity);
  if (t instanceof Xn || (t = It(t)), !t) return new W();
  if (t instanceof W) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new W(o, s, l, t.opacity);
}
function d0(t, n, e, r) {
  return arguments.length === 1 ? Ts(t) : new W(t, n, e, r ?? 1);
}
function W(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
vi(W, d0, As(Xn, {
  brighter(t) {
    return t = t == null ? ke : Math.pow(ke, t), new W(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? On : Math.pow(On, t), new W(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new L(
      pr(t >= 240 ? t - 240 : t + 120, i, r),
      pr(t, i, r),
      pr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new W(xa(this.h), te(this.s), te(this.l), Se(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Se(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${xa(this.h)}, ${te(this.s) * 100}%, ${te(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function xa(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function te(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function pr(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const mi = (t) => () => t;
function g0(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function _0(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function y0(t) {
  return (t = +t) == 1 ? Ns : function(n, e) {
    return e - n ? _0(n, e, t) : mi(isNaN(n) ? e : n);
  };
}
function Ns(t, n) {
  var e = n - t;
  return e ? g0(t, e) : mi(isNaN(t) ? n : t);
}
const Pe = function t(n) {
  var e = y0(n);
  function r(i, a) {
    var o = e((i = Lr(i)).r, (a = Lr(a)).r), s = e(i.g, a.g), l = e(i.b, a.b), u = Ns(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function v0(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function m0(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function w0(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = wi(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function b0(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function K(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function x0(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = wi(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e) r[i] = e[i](a);
    return r;
  };
}
var Dr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, dr = new RegExp(Dr.source, "g");
function M0(t) {
  return function() {
    return t;
  };
}
function $0(t) {
  return function(n) {
    return t(n) + "";
  };
}
function ks(t, n) {
  var e = Dr.lastIndex = dr.lastIndex = 0, r, i, a, o = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = Dr.exec(t)) && (i = dr.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: K(r, i) })), e = dr.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? $0(l[0].x) : M0(n) : (n = l.length, function(u) {
    for (var c = 0, f; c < n; ++c) s[(f = l[c]).i] = f.x(u);
    return s.join("");
  });
}
function wi(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? mi(n) : (e === "number" ? K : e === "string" ? (r = It(n)) ? (n = r, Pe) : ks : n instanceof It ? Pe : n instanceof Date ? b0 : m0(n) ? v0 : Array.isArray(n) ? w0 : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? x0 : K)(t, n);
}
function A0(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Ma = 180 / Math.PI, Ss = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ps(t, n, e, r, i, a) {
  var o, s, l;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * Ma,
    skewX: Math.atan(l) * Ma,
    scaleX: o,
    scaleY: s
  };
}
var ne;
function T0(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Ss : Ps(n.a, n.b, n.c, n.d, n.e, n.f);
}
function N0(t) {
  return t == null || (ne || (ne = document.createElementNS("http://www.w3.org/2000/svg", "g")), ne.setAttribute("transform", t), !(t = ne.transform.baseVal.consolidate())) ? Ss : (t = t.matrix, Ps(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Es(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, f, h, p, g) {
    if (u !== f || c !== h) {
      var y = p.push("translate(", null, n, null, e);
      g.push({ i: y - 4, x: K(u, f) }, { i: y - 2, x: K(c, h) });
    } else (f || h) && p.push("translate(" + f + n + h + e);
  }
  function o(u, c, f, h) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: K(u, c) })) : c && f.push(i(f) + "rotate(" + c + r);
  }
  function s(u, c, f, h) {
    u !== c ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: K(u, c) }) : c && f.push(i(f) + "skewX(" + c + r);
  }
  function l(u, c, f, h, p, g) {
    if (u !== f || c !== h) {
      var y = p.push(i(p) + "scale(", null, ",", null, ")");
      g.push({ i: y - 4, x: K(u, f) }, { i: y - 2, x: K(c, h) });
    } else (f !== 1 || h !== 1) && p.push(i(p) + "scale(" + f + "," + h + ")");
  }
  return function(u, c) {
    var f = [], h = [];
    return u = t(u), c = t(c), a(u.translateX, u.translateY, c.translateX, c.translateY, f, h), o(u.rotate, c.rotate, f, h), s(u.skewX, c.skewX, f, h), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, h), u = c = null, function(p) {
      for (var g = -1, y = h.length, w; ++g < y; ) f[(w = h[g]).i] = w.x(p);
      return f.join("");
    };
  };
}
var k0 = Es(T0, "px, ", "px)", "deg)"), S0 = Es(N0, ", ", ")", ")"), on = 0, xn = 0, _n = 0, Os = 1e3, Ee, Mn, Oe = 0, Ct = 0, Ue = 0, In = typeof performance == "object" && performance.now ? performance : Date, zs = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function bi() {
  return Ct || (zs(P0), Ct = In.now() + Ue);
}
function P0() {
  Ct = 0;
}
function ze() {
  this._call = this._time = this._next = null;
}
ze.prototype = Is.prototype = {
  constructor: ze,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? bi() : +e) + (n == null ? 0 : +n), !this._next && Mn !== this && (Mn ? Mn._next = this : Ee = this, Mn = this), this._call = t, this._time = e, qr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, qr());
  }
};
function Is(t, n, e) {
  var r = new ze();
  return r.restart(t, n, e), r;
}
function E0() {
  bi(), ++on;
  for (var t = Ee, n; t; )
    (n = Ct - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --on;
}
function $a() {
  Ct = (Oe = In.now()) + Ue, on = xn = 0;
  try {
    E0();
  } finally {
    on = 0, z0(), Ct = 0;
  }
}
function O0() {
  var t = In.now(), n = t - Oe;
  n > Os && (Ue -= n, Oe = t);
}
function z0() {
  for (var t, n = Ee, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Ee = e);
  Mn = t, qr(r);
}
function qr(t) {
  if (!on) {
    xn && (xn = clearTimeout(xn));
    var n = t - Ct;
    n > 24 ? (t < 1 / 0 && (xn = setTimeout($a, t - In.now() - Ue)), _n && (_n = clearInterval(_n))) : (_n || (Oe = In.now(), _n = setInterval(O0, Os)), on = 1, zs($a));
  }
}
function Aa(t, n, e) {
  var r = new ze();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var I0 = gi("start", "end", "cancel", "interrupt"), C0 = [], Cs = 0, Ta = 1, Xr = 2, he = 3, Na = 4, Br = 5, pe = 6;
function Ge(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  R0(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: I0,
    tween: C0,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Cs
  });
}
function xi(t, n) {
  var e = nt(t, n);
  if (e.state > Cs) throw new Error("too late; already scheduled");
  return e;
}
function st(t, n) {
  var e = nt(t, n);
  if (e.state > he) throw new Error("too late; already running");
  return e;
}
function nt(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function R0(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Is(a, 0, e.time);
  function a(u) {
    e.state = Ta, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var c, f, h, p;
    if (e.state !== Ta) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === he) return Aa(o);
        p.state === Na ? (p.state = pe, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = pe, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (Aa(function() {
      e.state === he && (e.state = Na, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = Xr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Xr) {
      for (e.state = he, i = new Array(h = e.tween.length), c = 0, f = -1; c < h; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = p);
      i.length = f + 1;
    }
  }
  function s(u) {
    for (var c = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = Br, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, c);
    e.state === Br && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = pe, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function j0(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > Xr && r.state < Br, r.state = pe, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function F0(t) {
  return this.each(function() {
    j0(this, t);
  });
}
function L0(t, n) {
  var e, r;
  return function() {
    var i = st(this, t), a = i.tween;
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
function D0(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var a = st(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    a.tween = i;
  };
}
function q0(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = nt(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? L0 : D0)(e, t, n));
}
function Mi(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = st(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return nt(i, r).value[n];
  };
}
function Rs(t, n) {
  var e;
  return (typeof n == "number" ? K : n instanceof It ? Pe : (e = It(n)) ? (n = e, Pe) : ks)(t, n);
}
function X0(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function B0(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function H0(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function U0(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function G0(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function Y0(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function V0(t, n) {
  var e = He(t), r = e === "transform" ? S0 : Rs;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Y0 : G0)(e, r, Mi(this, "attr." + t, n)) : n == null ? (e.local ? B0 : X0)(e) : (e.local ? U0 : H0)(e, r, n));
}
function K0(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Z0(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function W0(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Z0(t, a)), e;
  }
  return i._value = n, i;
}
function J0(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && K0(t, a)), e;
  }
  return i._value = n, i;
}
function Q0(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = He(t);
  return this.tween(e, (r.local ? W0 : J0)(r, n));
}
function tg(t, n) {
  return function() {
    xi(this, t).delay = +n.apply(this, arguments);
  };
}
function ng(t, n) {
  return n = +n, function() {
    xi(this, t).delay = n;
  };
}
function eg(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? tg : ng)(n, t)) : nt(this.node(), n).delay;
}
function rg(t, n) {
  return function() {
    st(this, t).duration = +n.apply(this, arguments);
  };
}
function ig(t, n) {
  return n = +n, function() {
    st(this, t).duration = n;
  };
}
function ag(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? rg : ig)(n, t)) : nt(this.node(), n).duration;
}
function og(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    st(this, t).ease = n;
  };
}
function sg(t) {
  var n = this._id;
  return arguments.length ? this.each(og(n, t)) : nt(this.node(), n).ease;
}
function ug(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    st(this, t).ease = e;
  };
}
function lg(t) {
  if (typeof t != "function") throw new Error();
  return this.each(ug(this._id, t));
}
function cg(t) {
  typeof t != "function" && (t = gs(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new dt(r, this._parents, this._name, this._id);
}
function fg(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var l = n[s], u = e[s], c = l.length, f = o[s] = new Array(c), h, p = 0; p < c; ++p)
      (h = l[p] || u[p]) && (f[p] = h);
  for (; s < r; ++s)
    o[s] = n[s];
  return new dt(o, this._parents, this._name, this._id);
}
function hg(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function pg(t, n, e) {
  var r, i, a = hg(n) ? xi : st;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
  };
}
function dg(t, n) {
  var e = this._id;
  return arguments.length < 2 ? nt(this.node(), e).on.on(t) : this.each(pg(e, t, n));
}
function gg(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function _g() {
  return this.on("end.remove", gg(this._id));
}
function yg(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = _i(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], l = s.length, u = a[o] = new Array(l), c, f, h = 0; h < l; ++h)
      (c = s[h]) && (f = t.call(c, c.__data__, h, s)) && ("__data__" in c && (f.__data__ = c.__data__), u[h] = f, Ge(u[h], n, e, h, u, nt(c, e)));
  return new dt(a, this._parents, n, e);
}
function vg(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ds(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, f = 0; f < u; ++f)
      if (c = l[f]) {
        for (var h = t.call(c, c.__data__, f, l), p, g = nt(c, e), y = 0, w = h.length; y < w; ++y)
          (p = h[y]) && Ge(p, n, e, y, h, g);
        a.push(h), o.push(c);
      }
  return new dt(a, o, n, e);
}
var mg = qn.prototype.constructor;
function wg() {
  return new mg(this._groups, this._parents);
}
function bg(t, n) {
  var e, r, i;
  return function() {
    var a = an(this, t), o = (this.style.removeProperty(t), an(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function js(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function xg(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = an(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Mg(t, n, e) {
  var r, i, a;
  return function() {
    var o = an(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), an(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s));
  };
}
function $g(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var l = st(this, t), u = l.on, c = l.value[a] == null ? s || (s = js(n)) : void 0;
    (u !== e || i !== c) && (r = (e = u).copy()).on(o, i = c), l.on = r;
  };
}
function Ag(t, n, e) {
  var r = (t += "") == "transform" ? k0 : Rs;
  return n == null ? this.styleTween(t, bg(t, r)).on("end.style." + t, js(t)) : typeof n == "function" ? this.styleTween(t, Mg(t, r, Mi(this, "style." + t, n))).each($g(this._id, t)) : this.styleTween(t, xg(t, r, n), e).on("end.style." + t, null);
}
function Tg(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Ng(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && Tg(t, o, e)), r;
  }
  return a._value = n, a;
}
function kg(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Ng(t, n, e ?? ""));
}
function Sg(t) {
  return function() {
    this.textContent = t;
  };
}
function Pg(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Eg(t) {
  return this.tween("text", typeof t == "function" ? Pg(Mi(this, "text", t)) : Sg(t == null ? "" : t + ""));
}
function Og(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function zg(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Og(i)), n;
  }
  return r._value = t, r;
}
function Ig(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, zg(t));
}
function Cg() {
  for (var t = this._name, n = this._id, e = Fs(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      if (l = o[u]) {
        var c = nt(l, n);
        Ge(l, t, e, u, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new dt(r, this._parents, t, e);
}
function Rg() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var s = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = st(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && a();
  });
}
var jg = 0;
function dt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Fs() {
  return ++jg;
}
var lt = qn.prototype;
dt.prototype = {
  constructor: dt,
  select: yg,
  selectAll: vg,
  selectChild: lt.selectChild,
  selectChildren: lt.selectChildren,
  filter: cg,
  merge: fg,
  selection: wg,
  transition: Cg,
  call: lt.call,
  nodes: lt.nodes,
  node: lt.node,
  size: lt.size,
  empty: lt.empty,
  each: lt.each,
  on: dg,
  attr: V0,
  attrTween: Q0,
  style: Ag,
  styleTween: kg,
  text: Eg,
  textTween: Ig,
  remove: _g,
  tween: q0,
  delay: eg,
  duration: ag,
  ease: sg,
  easeVarying: lg,
  end: Rg,
  [Symbol.iterator]: lt[Symbol.iterator]
};
function Fg(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Lg = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Fg
};
function Dg(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function qg(t) {
  var n, e;
  t instanceof dt ? (n = t._id, t = t._name) : (n = Fs(), (e = Lg).time = bi(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && Ge(l, t, n, u, o, e || Dg(l, n));
  return new dt(r, this._parents, t, n);
}
qn.prototype.interrupt = F0;
qn.prototype.transition = qg;
const Hr = Math.PI, Ur = 2 * Hr, Nt = 1e-6, Xg = Ur - Nt;
function Ls(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Bg(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return Ls;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Ds {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? Ls : Bg(n);
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
    let o = this._x1, s = this._y1, l = r - n, u = i - e, c = o - n, f = s - e, h = c * c + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (h > Nt) if (!(Math.abs(f * l - u * c) > Nt) || !a)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - o, g = i - s, y = l * l + u * u, w = p * p + g * g, b = Math.sqrt(y), d = Math.sqrt(h), x = a * Math.tan((Hr - Math.acos((y + h - w) / (2 * b * d))) / 2), _ = x / d, m = x / b;
      Math.abs(_ - 1) > Nt && this._append`L${n + _ * c},${e + _ * f}`, this._append`A${a},${a},0,0,${+(f * p > c * g)},${this._x1 = n + m * l},${this._y1 = e + m * u}`;
    }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, c = e + l, f = 1 ^ o, h = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > Nt || Math.abs(this._y1 - c) > Nt) && this._append`L${u},${c}`, r && (h < 0 && (h = h % Ur + Ur), h > Xg ? this._append`A${r},${r},0,1,${f},${n - s},${e - l}A${r},${r},0,1,${f},${this._x1 = u},${this._y1 = c}` : h > Nt && this._append`A${r},${r},0,${+(h >= Hr)},${f},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function et() {
  return new Ds();
}
et.prototype = Ds.prototype;
function Hg(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Ie(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function sn(t) {
  return t = Ie(Math.abs(t)), t ? t[1] : NaN;
}
function Ug(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), a.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function Gg(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Yg = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ce(t) {
  if (!(n = Yg.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new $i({
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
Ce.prototype = $i.prototype;
function $i(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
$i.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Vg(t) {
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
var qs;
function Kg(t, n) {
  var e = Ie(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], a = i - (qs = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Ie(t, Math.max(0, n + a - 1))[0];
}
function ka(t, n) {
  var e = Ie(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Sa = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Hg,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => ka(t * 100, n),
  r: ka,
  s: Kg,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Pa(t) {
  return t;
}
var Ea = Array.prototype.map, Oa = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Zg(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Pa : Ug(Ea.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? Pa : Gg(Ea.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(f) {
    f = Ce(f);
    var h = f.fill, p = f.align, g = f.sign, y = f.symbol, w = f.zero, b = f.width, d = f.comma, x = f.precision, _ = f.trim, m = f.type;
    m === "n" ? (d = !0, m = "g") : Sa[m] || (x === void 0 && (x = 12), _ = !0, m = "g"), (w || h === "0" && p === "=") && (w = !0, h = "0", p = "=");
    var S = y === "$" ? e : y === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", P = y === "$" ? r : /[%p]/.test(m) ? o : "", z = Sa[m], B = /[defgprs%]/.test(m);
    x = x === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function H(v) {
      var I = S, A = P, C, At, D;
      if (m === "c")
        A = z(v) + A, v = "";
      else {
        v = +v;
        var U = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : z(Math.abs(v), x), _ && (v = Vg(v)), U && +v == 0 && g !== "+" && (U = !1), I = (U ? g === "(" ? g : s : g === "-" || g === "(" ? "" : g) + I, A = (m === "s" ? Oa[8 + qs / 3] : "") + A + (U && g === "(" ? ")" : ""), B) {
          for (C = -1, At = v.length; ++C < At; )
            if (D = v.charCodeAt(C), 48 > D || D > 57) {
              A = (D === 46 ? i + v.slice(C + 1) : v.slice(C)) + A, v = v.slice(0, C);
              break;
            }
        }
      }
      d && !w && (v = n(v, 1 / 0));
      var Y = I.length + v.length + A.length, E = Y < b ? new Array(b - Y + 1).join(h) : "";
      switch (d && w && (v = n(E + v, E.length ? b - A.length : 1 / 0), E = ""), p) {
        case "<":
          v = I + v + A + E;
          break;
        case "=":
          v = I + E + v + A;
          break;
        case "^":
          v = E.slice(0, Y = E.length >> 1) + I + v + A + E.slice(Y);
          break;
        default:
          v = E + I + v + A;
          break;
      }
      return a(v);
    }
    return H.toString = function() {
      return f + "";
    }, H;
  }
  function c(f, h) {
    var p = u((f = Ce(f), f.type = "f", f)), g = Math.max(-8, Math.min(8, Math.floor(sn(h) / 3))) * 3, y = Math.pow(10, -g), w = Oa[8 + g / 3];
    return function(b) {
      return p(y * b) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var ee, Ye, Xs;
Wg({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Wg(t) {
  return ee = Zg(t), Ye = ee.format, Xs = ee.formatPrefix, ee;
}
function Jg(t) {
  return Math.max(0, -sn(Math.abs(t)));
}
function Qg(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(sn(n) / 3))) * 3 - sn(Math.abs(t)));
}
function t_(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, sn(n) - sn(t)) + 1;
}
function n_(t, n) {
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
function e_(t) {
  return function() {
    return t;
  };
}
function r_(t) {
  return +t;
}
var za = [0, 1];
function Yt(t) {
  return t;
}
function Gr(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : e_(isNaN(n) ? NaN : 0.5);
}
function i_(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function a_(t, n, e) {
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = Gr(i, r), a = e(o, a)) : (r = Gr(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function o_(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = Gr(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var l = op(t, s, 1, r) - 1;
    return a[l](i[l](s));
  };
}
function s_(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function u_() {
  var t = za, n = za, e = wi, r, i, a, o = Yt, s, l, u;
  function c() {
    var h = Math.min(t.length, n.length);
    return o !== Yt && (o = i_(t[0], t[h - 1])), s = h > 2 ? o_ : a_, l = u = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? a : (l || (l = s(t.map(r), n, e)))(r(o(h)));
  }
  return f.invert = function(h) {
    return o(i((u || (u = s(n, t.map(r), K)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, r_), c()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (n = Array.from(h), c()) : n.slice();
  }, f.rangeRound = function(h) {
    return n = Array.from(h), e = A0, c();
  }, f.clamp = function(h) {
    return arguments.length ? (o = h ? !0 : Yt, c()) : o !== Yt;
  }, f.interpolate = function(h) {
    return arguments.length ? (e = h, c()) : e;
  }, f.unknown = function(h) {
    return arguments.length ? (a = h, f) : a;
  }, function(h, p) {
    return r = h, i = p, c();
  };
}
function l_() {
  return u_()(Yt, Yt);
}
function c_(t, n, e, r) {
  var i = fp(t, n, e), a;
  switch (r = Ce(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = Qg(i, o)) && (r.precision = a), Xs(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = t_(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Jg(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Ye(r);
}
function f_(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return cp(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return c_(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, a = r.length - 1, o = r[i], s = r[a], l, u, c = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); c-- > 0; ) {
      if (u = Rr(o, s, e), u === l)
        return r[i] = o, r[a] = s, n(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      l = u;
    }
    return t;
  }, t;
}
function un() {
  var t = l_();
  return t.copy = function() {
    return s_(t, un());
  }, n_.apply(t, arguments), f_(t);
}
function $n(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
$n.prototype = {
  constructor: $n,
  scale: function(t) {
    return t === 1 ? this : new $n(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new $n(this.k, this.x + this.k * t, this.y + this.k * n);
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
$n.prototype;
var Bs = typeof global == "object" && global && global.Object === Object && global, h_ = typeof self == "object" && self && self.Object === Object && self, _t = Bs || h_ || Function("return this")(), at = _t.Symbol, Hs = Object.prototype, p_ = Hs.hasOwnProperty, d_ = Hs.toString, yn = at ? at.toStringTag : void 0;
function g_(t) {
  var n = p_.call(t, yn), e = t[yn];
  try {
    t[yn] = void 0;
    var r = !0;
  } catch {
  }
  var i = d_.call(t);
  return r && (n ? t[yn] = e : delete t[yn]), i;
}
var __ = Object.prototype, y_ = __.toString;
function v_(t) {
  return y_.call(t);
}
var m_ = "[object Null]", w_ = "[object Undefined]", Ia = at ? at.toStringTag : void 0;
function pn(t) {
  return t == null ? t === void 0 ? w_ : m_ : Ia && Ia in Object(t) ? g_(t) : v_(t);
}
function ln(t) {
  return t != null && typeof t == "object";
}
var b_ = "[object Symbol]";
function Ve(t) {
  return typeof t == "symbol" || ln(t) && pn(t) == b_;
}
function Us(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var J = Array.isArray, Ca = at ? at.prototype : void 0, Ra = Ca ? Ca.toString : void 0;
function Gs(t) {
  if (typeof t == "string")
    return t;
  if (J(t))
    return Us(t, Gs) + "";
  if (Ve(t))
    return Ra ? Ra.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var x_ = /\s/;
function M_(t) {
  for (var n = t.length; n-- && x_.test(t.charAt(n)); )
    ;
  return n;
}
var $_ = /^\s+/;
function A_(t) {
  return t && t.slice(0, M_(t) + 1).replace($_, "");
}
function cn(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var ja = NaN, T_ = /^[-+]0x[0-9a-f]+$/i, N_ = /^0b[01]+$/i, k_ = /^0o[0-7]+$/i, S_ = parseInt;
function P_(t) {
  if (typeof t == "number")
    return t;
  if (Ve(t))
    return ja;
  if (cn(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = cn(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = A_(t);
  var e = N_.test(t);
  return e || k_.test(t) ? S_(t.slice(2), e ? 2 : 8) : T_.test(t) ? ja : +t;
}
var E_ = 1 / 0, O_ = 17976931348623157e292;
function gr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = P_(t), t === E_ || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * O_;
  }
  return t === t ? t : 0;
}
function z_(t) {
  return t;
}
var I_ = "[object AsyncFunction]", C_ = "[object Function]", R_ = "[object GeneratorFunction]", j_ = "[object Proxy]";
function Ys(t) {
  if (!cn(t))
    return !1;
  var n = pn(t);
  return n == C_ || n == R_ || n == I_ || n == j_;
}
var _r = _t["__core-js_shared__"], Fa = function() {
  var t = /[^.]+$/.exec(_r && _r.keys && _r.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function F_(t) {
  return !!Fa && Fa in t;
}
var L_ = Function.prototype, D_ = L_.toString;
function qt(t) {
  if (t != null) {
    try {
      return D_.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var q_ = /[\\^$.*+?()[\]{}|]/g, X_ = /^\[object .+?Constructor\]$/, B_ = Function.prototype, H_ = Object.prototype, U_ = B_.toString, G_ = H_.hasOwnProperty, Y_ = RegExp(
  "^" + U_.call(G_).replace(q_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function V_(t) {
  if (!cn(t) || F_(t))
    return !1;
  var n = Ys(t) ? Y_ : X_;
  return n.test(qt(t));
}
function K_(t, n) {
  return t == null ? void 0 : t[n];
}
function dn(t, n) {
  var e = K_(t, n);
  return V_(e) ? e : void 0;
}
var Yr = dn(_t, "WeakMap"), Z_ = 9007199254740991, W_ = /^(?:0|[1-9]\d*)$/;
function Ai(t, n) {
  var e = typeof t;
  return n = n ?? Z_, !!n && (e == "number" || e != "symbol" && W_.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function Ti(t, n) {
  return t === n || t !== t && n !== n;
}
var J_ = 9007199254740991;
function Ni(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= J_;
}
function Ke(t) {
  return t != null && Ni(t.length) && !Ys(t);
}
function Q_(t, n, e) {
  if (!cn(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Ke(e) && Ai(n, e.length) : r == "string" && n in e) ? Ti(e[n], t) : !1;
}
var ty = Object.prototype;
function ny(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || ty;
  return t === e;
}
function ey(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var ry = "[object Arguments]";
function La(t) {
  return ln(t) && pn(t) == ry;
}
var Vs = Object.prototype, iy = Vs.hasOwnProperty, ay = Vs.propertyIsEnumerable, ki = La(/* @__PURE__ */ function() {
  return arguments;
}()) ? La : function(t) {
  return ln(t) && iy.call(t, "callee") && !ay.call(t, "callee");
};
function oy() {
  return !1;
}
var Ks = typeof exports == "object" && exports && !exports.nodeType && exports, Da = Ks && typeof module == "object" && module && !module.nodeType && module, sy = Da && Da.exports === Ks, qa = sy ? _t.Buffer : void 0, uy = qa ? qa.isBuffer : void 0, Vr = uy || oy, ly = "[object Arguments]", cy = "[object Array]", fy = "[object Boolean]", hy = "[object Date]", py = "[object Error]", dy = "[object Function]", gy = "[object Map]", _y = "[object Number]", yy = "[object Object]", vy = "[object RegExp]", my = "[object Set]", wy = "[object String]", by = "[object WeakMap]", xy = "[object ArrayBuffer]", My = "[object DataView]", $y = "[object Float32Array]", Ay = "[object Float64Array]", Ty = "[object Int8Array]", Ny = "[object Int16Array]", ky = "[object Int32Array]", Sy = "[object Uint8Array]", Py = "[object Uint8ClampedArray]", Ey = "[object Uint16Array]", Oy = "[object Uint32Array]", T = {};
T[$y] = T[Ay] = T[Ty] = T[Ny] = T[ky] = T[Sy] = T[Py] = T[Ey] = T[Oy] = !0;
T[ly] = T[cy] = T[xy] = T[fy] = T[My] = T[hy] = T[py] = T[dy] = T[gy] = T[_y] = T[yy] = T[vy] = T[my] = T[wy] = T[by] = !1;
function zy(t) {
  return ln(t) && Ni(t.length) && !!T[pn(t)];
}
function Iy(t) {
  return function(n) {
    return t(n);
  };
}
var Zs = typeof exports == "object" && exports && !exports.nodeType && exports, An = Zs && typeof module == "object" && module && !module.nodeType && module, Cy = An && An.exports === Zs, yr = Cy && Bs.process, Xa = function() {
  try {
    var t = An && An.require && An.require("util").types;
    return t || yr && yr.binding && yr.binding("util");
  } catch {
  }
}(), Ba = Xa && Xa.isTypedArray, Ws = Ba ? Iy(Ba) : zy, Ry = Object.prototype, jy = Ry.hasOwnProperty;
function Fy(t, n) {
  var e = J(t), r = !e && ki(t), i = !e && !r && Vr(t), a = !e && !r && !i && Ws(t), o = e || r || i || a, s = o ? ey(t.length, String) : [], l = s.length;
  for (var u in t)
    jy.call(t, u) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ai(u, l))) && s.push(u);
  return s;
}
function Ly(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Dy = Ly(Object.keys, Object), qy = Object.prototype, Xy = qy.hasOwnProperty;
function By(t) {
  if (!ny(t))
    return Dy(t);
  var n = [];
  for (var e in Object(t))
    Xy.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Si(t) {
  return Ke(t) ? Fy(t) : By(t);
}
var Hy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Uy = /^\w*$/;
function Pi(t, n) {
  if (J(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Ve(t) ? !0 : Uy.test(t) || !Hy.test(t) || n != null && t in Object(n);
}
var Cn = dn(Object, "create");
function Gy() {
  this.__data__ = Cn ? Cn(null) : {}, this.size = 0;
}
function Yy(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var Vy = "__lodash_hash_undefined__", Ky = Object.prototype, Zy = Ky.hasOwnProperty;
function Wy(t) {
  var n = this.__data__;
  if (Cn) {
    var e = n[t];
    return e === Vy ? void 0 : e;
  }
  return Zy.call(n, t) ? n[t] : void 0;
}
var Jy = Object.prototype, Qy = Jy.hasOwnProperty;
function tv(t) {
  var n = this.__data__;
  return Cn ? n[t] !== void 0 : Qy.call(n, t);
}
var nv = "__lodash_hash_undefined__";
function ev(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Cn && n === void 0 ? nv : n, this;
}
function Rt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Rt.prototype.clear = Gy;
Rt.prototype.delete = Yy;
Rt.prototype.get = Wy;
Rt.prototype.has = tv;
Rt.prototype.set = ev;
function rv() {
  this.__data__ = [], this.size = 0;
}
function Ze(t, n) {
  for (var e = t.length; e--; )
    if (Ti(t[e][0], n))
      return e;
  return -1;
}
var iv = Array.prototype, av = iv.splice;
function ov(t) {
  var n = this.__data__, e = Ze(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : av.call(n, e, 1), --this.size, !0;
}
function sv(t) {
  var n = this.__data__, e = Ze(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function uv(t) {
  return Ze(this.__data__, t) > -1;
}
function lv(t, n) {
  var e = this.__data__, r = Ze(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function yt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
yt.prototype.clear = rv;
yt.prototype.delete = ov;
yt.prototype.get = sv;
yt.prototype.has = uv;
yt.prototype.set = lv;
var Rn = dn(_t, "Map");
function cv() {
  this.size = 0, this.__data__ = {
    hash: new Rt(),
    map: new (Rn || yt)(),
    string: new Rt()
  };
}
function fv(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function We(t, n) {
  var e = t.__data__;
  return fv(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function hv(t) {
  var n = We(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function pv(t) {
  return We(this, t).get(t);
}
function dv(t) {
  return We(this, t).has(t);
}
function gv(t, n) {
  var e = We(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function vt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
vt.prototype.clear = cv;
vt.prototype.delete = hv;
vt.prototype.get = pv;
vt.prototype.has = dv;
vt.prototype.set = gv;
var _v = "Expected a function";
function Ei(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(_v);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (Ei.Cache || vt)(), e;
}
Ei.Cache = vt;
var yv = 500;
function vv(t) {
  var n = Ei(t, function(r) {
    return e.size === yv && e.clear(), r;
  }), e = n.cache;
  return n;
}
var mv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wv = /\\(\\)?/g, bv = vv(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(mv, function(e, r, i, a) {
    n.push(i ? a.replace(wv, "$1") : r || e);
  }), n;
});
function xv(t) {
  return t == null ? "" : Gs(t);
}
function Js(t, n) {
  return J(t) ? t : Pi(t, n) ? [t] : bv(xv(t));
}
function Je(t) {
  if (typeof t == "string" || Ve(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Qs(t, n) {
  n = Js(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Je(n[e++])];
  return e && e == r ? t : void 0;
}
function Mv(t, n, e) {
  var r = t == null ? void 0 : Qs(t, n);
  return r === void 0 ? e : r;
}
function tu(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Ha = at ? at.isConcatSpreadable : void 0;
function $v(t) {
  return J(t) || ki(t) || !!(Ha && t && t[Ha]);
}
function Av(t, n, e, r, i) {
  var a = -1, o = t.length;
  for (e || (e = $v), i || (i = []); ++a < o; ) {
    var s = t[a];
    e(s) ? tu(i, s) : i[i.length] = s;
  }
  return i;
}
function Tv(t) {
  var n = t == null ? 0 : t.length;
  return n ? Av(t) : [];
}
function Nv() {
  this.__data__ = new yt(), this.size = 0;
}
function kv(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function Sv(t) {
  return this.__data__.get(t);
}
function Pv(t) {
  return this.__data__.has(t);
}
var Ev = 200;
function Ov(t, n) {
  var e = this.__data__;
  if (e instanceof yt) {
    var r = e.__data__;
    if (!Rn || r.length < Ev - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new vt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function ft(t) {
  var n = this.__data__ = new yt(t);
  this.size = n.size;
}
ft.prototype.clear = Nv;
ft.prototype.delete = kv;
ft.prototype.get = Sv;
ft.prototype.has = Pv;
ft.prototype.set = Ov;
function zv(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function Iv() {
  return [];
}
var Cv = Object.prototype, Rv = Cv.propertyIsEnumerable, Ua = Object.getOwnPropertySymbols, jv = Ua ? function(t) {
  return t == null ? [] : (t = Object(t), zv(Ua(t), function(n) {
    return Rv.call(t, n);
  }));
} : Iv;
function Fv(t, n, e) {
  var r = n(t);
  return J(t) ? r : tu(r, e(t));
}
function Ga(t) {
  return Fv(t, Si, jv);
}
var Kr = dn(_t, "DataView"), Zr = dn(_t, "Promise"), Wr = dn(_t, "Set"), Ya = "[object Map]", Lv = "[object Object]", Va = "[object Promise]", Ka = "[object Set]", Za = "[object WeakMap]", Wa = "[object DataView]", Dv = qt(Kr), qv = qt(Rn), Xv = qt(Zr), Bv = qt(Wr), Hv = qt(Yr), xt = pn;
(Kr && xt(new Kr(new ArrayBuffer(1))) != Wa || Rn && xt(new Rn()) != Ya || Zr && xt(Zr.resolve()) != Va || Wr && xt(new Wr()) != Ka || Yr && xt(new Yr()) != Za) && (xt = function(t) {
  var n = pn(t), e = n == Lv ? t.constructor : void 0, r = e ? qt(e) : "";
  if (r)
    switch (r) {
      case Dv:
        return Wa;
      case qv:
        return Ya;
      case Xv:
        return Va;
      case Bv:
        return Ka;
      case Hv:
        return Za;
    }
  return n;
});
var Ja = _t.Uint8Array, Uv = "__lodash_hash_undefined__";
function Gv(t) {
  return this.__data__.set(t, Uv), this;
}
function Yv(t) {
  return this.__data__.has(t);
}
function Re(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new vt(); ++n < e; )
    this.add(t[n]);
}
Re.prototype.add = Re.prototype.push = Gv;
Re.prototype.has = Yv;
function Vv(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Kv(t, n) {
  return t.has(n);
}
var Zv = 1, Wv = 2;
function nu(t, n, e, r, i, a) {
  var o = e & Zv, s = t.length, l = n.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(t), c = a.get(n);
  if (u && c)
    return u == n && c == t;
  var f = -1, h = !0, p = e & Wv ? new Re() : void 0;
  for (a.set(t, n), a.set(n, t); ++f < s; ) {
    var g = t[f], y = n[f];
    if (r)
      var w = o ? r(y, g, f, n, t, a) : r(g, y, f, t, n, a);
    if (w !== void 0) {
      if (w)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!Vv(n, function(b, d) {
        if (!Kv(p, d) && (g === b || i(g, b, e, r, a)))
          return p.push(d);
      })) {
        h = !1;
        break;
      }
    } else if (!(g === y || i(g, y, e, r, a))) {
      h = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), h;
}
function Jv(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Qv(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var tm = 1, nm = 2, em = "[object Boolean]", rm = "[object Date]", im = "[object Error]", am = "[object Map]", om = "[object Number]", sm = "[object RegExp]", um = "[object Set]", lm = "[object String]", cm = "[object Symbol]", fm = "[object ArrayBuffer]", hm = "[object DataView]", Qa = at ? at.prototype : void 0, vr = Qa ? Qa.valueOf : void 0;
function pm(t, n, e, r, i, a, o) {
  switch (e) {
    case hm:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case fm:
      return !(t.byteLength != n.byteLength || !a(new Ja(t), new Ja(n)));
    case em:
    case rm:
    case om:
      return Ti(+t, +n);
    case im:
      return t.name == n.name && t.message == n.message;
    case sm:
    case lm:
      return t == n + "";
    case am:
      var s = Jv;
    case um:
      var l = r & tm;
      if (s || (s = Qv), t.size != n.size && !l)
        return !1;
      var u = o.get(t);
      if (u)
        return u == n;
      r |= nm, o.set(t, n);
      var c = nu(s(t), s(n), r, i, a, o);
      return o.delete(t), c;
    case cm:
      if (vr)
        return vr.call(t) == vr.call(n);
  }
  return !1;
}
var dm = 1, gm = Object.prototype, _m = gm.hasOwnProperty;
function ym(t, n, e, r, i, a) {
  var o = e & dm, s = Ga(t), l = s.length, u = Ga(n), c = u.length;
  if (l != c && !o)
    return !1;
  for (var f = l; f--; ) {
    var h = s[f];
    if (!(o ? h in n : _m.call(n, h)))
      return !1;
  }
  var p = a.get(t), g = a.get(n);
  if (p && g)
    return p == n && g == t;
  var y = !0;
  a.set(t, n), a.set(n, t);
  for (var w = o; ++f < l; ) {
    h = s[f];
    var b = t[h], d = n[h];
    if (r)
      var x = o ? r(d, b, h, n, t, a) : r(b, d, h, t, n, a);
    if (!(x === void 0 ? b === d || i(b, d, e, r, a) : x)) {
      y = !1;
      break;
    }
    w || (w = h == "constructor");
  }
  if (y && !w) {
    var _ = t.constructor, m = n.constructor;
    _ != m && "constructor" in t && "constructor" in n && !(typeof _ == "function" && _ instanceof _ && typeof m == "function" && m instanceof m) && (y = !1);
  }
  return a.delete(t), a.delete(n), y;
}
var vm = 1, to = "[object Arguments]", no = "[object Array]", re = "[object Object]", mm = Object.prototype, eo = mm.hasOwnProperty;
function wm(t, n, e, r, i, a) {
  var o = J(t), s = J(n), l = o ? no : xt(t), u = s ? no : xt(n);
  l = l == to ? re : l, u = u == to ? re : u;
  var c = l == re, f = u == re, h = l == u;
  if (h && Vr(t)) {
    if (!Vr(n))
      return !1;
    o = !0, c = !1;
  }
  if (h && !c)
    return a || (a = new ft()), o || Ws(t) ? nu(t, n, e, r, i, a) : pm(t, n, l, e, r, i, a);
  if (!(e & vm)) {
    var p = c && eo.call(t, "__wrapped__"), g = f && eo.call(n, "__wrapped__");
    if (p || g) {
      var y = p ? t.value() : t, w = g ? n.value() : n;
      return a || (a = new ft()), i(y, w, e, r, a);
    }
  }
  return h ? (a || (a = new ft()), ym(t, n, e, r, i, a)) : !1;
}
function Oi(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !ln(t) && !ln(n) ? t !== t && n !== n : wm(t, n, e, r, Oi, i);
}
var bm = 1, xm = 2;
function Mm(t, n, e, r) {
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
    var s = o[0], l = t[s], u = o[1];
    if (o[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var c = new ft(), f;
      if (!(f === void 0 ? Oi(u, l, bm | xm, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function eu(t) {
  return t === t && !cn(t);
}
function $m(t) {
  for (var n = Si(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, eu(i)];
  }
  return n;
}
function ru(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function Am(t) {
  var n = $m(t);
  return n.length == 1 && n[0][2] ? ru(n[0][0], n[0][1]) : function(e) {
    return e === t || Mm(e, t, n);
  };
}
function Tm(t, n) {
  return t != null && n in Object(t);
}
function Nm(t, n, e) {
  n = Js(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = Je(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && Ni(i) && Ai(o, i) && (J(t) || ki(t)));
}
function km(t, n) {
  return t != null && Nm(t, n, Tm);
}
var Sm = 1, Pm = 2;
function Em(t, n) {
  return Pi(t) && eu(n) ? ru(Je(t), n) : function(e) {
    var r = Mv(e, t);
    return r === void 0 && r === n ? km(e, t) : Oi(n, r, Sm | Pm);
  };
}
function Om(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function zm(t) {
  return function(n) {
    return Qs(n, t);
  };
}
function Im(t) {
  return Pi(t) ? Om(Je(t)) : zm(t);
}
function Cm(t) {
  return typeof t == "function" ? t : t == null ? z_ : typeof t == "object" ? J(t) ? Em(t[0], t[1]) : Am(t) : Im(t);
}
function Rm(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var l = o[++i];
      if (e(a[l], l, a) === !1)
        break;
    }
    return n;
  };
}
var jm = Rm();
function Fm(t, n) {
  return t && jm(t, n, Si);
}
function Lm(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Ke(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var Dm = Lm(Fm);
function qm(t, n) {
  var e = -1, r = Ke(t) ? Array(t.length) : [];
  return Dm(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function ro(t, n) {
  var e = J(t) ? Us : qm;
  return e(t, Cm(n));
}
var Xm = Math.ceil, Bm = Math.max;
function Hm(t, n, e, r) {
  for (var i = -1, a = Bm(Xm((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function Um(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && Q_(n, e, r) && (e = r = void 0), n = gr(n), e === void 0 ? (e = n, n = 0) : e = gr(e), r = r === void 0 ? n < e ? 1 : -1 : gr(r), Hm(n, e, r);
  };
}
var Gm = Um();
const Ym = (t, n, e = 12, r = 12) => {
  const i = un().domain([0, e]).range([0, t]), a = un().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return Gm((e + 1) * (r + 1)).map(function(o) {
        return { m: o % (e + 1), n: Math.floor(o / (e + 1)), x: i(o % (e + 1)), y: a(Math.floor(o / (e + 1))) };
      });
    },
    position: function(o, s) {
      typeof o == "number" && (o = [o]), typeof s == "number" && (s = [s]);
      const l = Tv(ro(s, function(u) {
        return ro(
          o,
          function(c) {
            return { x: i(c), y: a(u) };
          }
        );
      }));
      return l.length == 1 ? l[0] : l;
    }
  };
}, Vm = "_widget_9wct0_49", Km = "_label_9wct0_69", Zm = "_lit_9wct0_74", Wm = "_button_9wct0_78", Jm = "_symbol_9wct0_78", Qm = "_radio_9wct0_79", t1 = "_radiobutton_9wct0_79", n1 = "_selected_9wct0_85", e1 = "_toggle_9wct0_86", r1 = "_slider_9wct0_95", i1 = "_track_9wct0_95", a1 = "_track_overlay_9wct0_100", o1 = "_handle_9wct0_108", M = {
  widget: Vm,
  label: Km,
  lit: Zm,
  button: Wm,
  symbol: Jm,
  radio: Qm,
  radiobutton: t1,
  selected: n1,
  toggle: e1,
  slider: r1,
  track: i1,
  track_overlay: a1,
  handle: o1
}, zi = () => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = t.length;
  let e = "";
  for (let r = 0; r < 10; ++r)
    e += t[Math.floor(Math.random() * n)];
  return e;
}, Ii = (t, n, e) => {
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
}, s1 = (t = 1) => {
  const n = et();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, u1 = (t = 1) => {
  const n = et(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, l1 = (t = 1) => {
  const n = et();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, c1 = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = et();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, f1 = (t = 1) => {
  const n = et(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, a = 0.5, o = 0.6, s = 0.6, l = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), n.arc(0, 0, t * (1 - a), r, i, !1), n.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), n.closePath(), n.toString();
}, h1 = (t = 1) => {
  const n = et(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, a = e, o = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, o), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, a, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, p1 = (t = 1) => {
  const n = et(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), n.arc(0, 0, t * (1 - a), i, r, !0), n.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var l = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), n.closePath(), n.toString();
}, d1 = (t = 1) => {
  var n = et(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, g1 = (t = 1) => {
  const n = et(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, Jr = (t) => {
  switch (t) {
    case "play":
      return s1;
    case "forward":
      return u1;
    case "back":
      return l1;
    case "pause":
      return c1;
    case "reload":
      return f1;
    case "capture":
      return h1;
    case "rewind":
      return p1;
    case "stop":
      return d1;
    case "push":
      return g1;
  }
}, Ci = () => {
  const t = "button";
  var n = zi(), e = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", l = null, u = function(h) {
  }, c = ["play"], f = 0;
  return {
    type: t,
    id: function(h) {
      return typeof h > "u" ? n : (n = h, this);
    },
    size: function(h) {
      return typeof h > "u" ? e : (e = h, this);
    },
    symbolsize: function(h) {
      return typeof h > "u" ? r : (r = h, this);
    },
    shape: function(h) {
      return typeof h > "u" ? i : (i = h, this);
    },
    position: function(h) {
      return typeof h > "u" ? a : (a = h, this);
    },
    x: function(h) {
      return typeof h > "u" ? a.x : (a.x = h, this);
    },
    y: function(h) {
      return typeof h > "u" ? a.y : (a.y = h, this);
    },
    label: function(h) {
      return typeof h > "u" ? o : (o = h, this);
    },
    labelposition: function(h) {
      return typeof h > "u" ? s : (s = h, this);
    },
    fontsize: function(h) {
      return typeof h > "u" ? l : (l = h, this);
    },
    update: function(h) {
      if (typeof h == "function")
        return u = h, this;
      u(h);
    },
    actions: function(h) {
      return typeof h > "u" ? c : (c = h, this);
    },
    value: function(h) {
      return typeof h > "u" ? f : (f = h, this);
    },
    click: function() {
      f = (f + 1) % c.length, u(), R(this.parentNode).select("." + M.symbol).attr("d", Jr(c[f])(r * e));
    },
    press: function(h) {
      f = (f + 1) % c.length, u(), h.select("#button_" + n).select("." + M.symbol).attr("d", Jr(c[f])(r * e));
    }
  };
}, _1 = () => {
  const t = "slider", n = Ye(".3f");
  var e = zi(), r = 100, i = 8, a = 10, o = !1, s = { x: 0, y: 0 }, l = "top-left", u = 4, c = null, f = function(d) {
  }, h = function(d) {
  }, p = [0, 1], g = 0, y = null, w = un().domain(p).range([0, r]).clamp(!0);
  const b = function(d, x, _ = p) {
    const m = d.select("#slider_" + e);
    w.domain(_), g = x, m.selectAll("." + M.handle).transition().attr("cx", w(x)), o && m.select("." + M.label).text(y + " = " + n(g)), f(), h();
  };
  return {
    type: t,
    scale: w,
    id: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? y : (y = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    girth: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    knob: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    show: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? s.x : (s.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? s.y : (s.y = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? l : (l = d, this);
    },
    labelpadding: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return f = d, this;
      f(d);
    },
    update_end: function(d) {
      if (typeof d == "function")
        return h = d, this;
      h(d);
    },
    range: function(d) {
      return typeof d > "u" ? p : (p = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? g : (g = d, this);
    },
    reset: b,
    click: b
  };
}, y1 = () => {
  const t = "toggle";
  var n = zi(), e = 10, r = { x: 0, y: 0 }, i = null, a = "top", o = null, s = function(u) {
  }, l = 0;
  return {
    type: t,
    id: function(u) {
      return typeof u > "u" ? n : (n = u, this);
    },
    size: function(u) {
      return typeof u > "u" ? e : (e = u, this);
    },
    position: function(u) {
      return typeof u > "u" ? r : (r = u, this);
    },
    x: function(u) {
      return typeof u > "u" ? r.x : (r.x = u, this);
    },
    y: function(u) {
      return typeof u > "u" ? r.y : (r.y = u, this);
    },
    label: function(u) {
      return typeof u > "u" ? i : (i = u, this);
    },
    labelposition: function(u) {
      return typeof u > "u" ? a : (a = u, this);
    },
    fontsize: function(u) {
      return typeof u > "u" ? o : (o = u, this);
    },
    update: function(u) {
      if (typeof u == "function")
        return s = u, this;
      s(u);
    },
    value: function(u) {
      return typeof u > "u" ? l : (l = u, this);
    },
    click: function() {
      l = !l;
      const u = R(this.parentNode);
      u.select("." + M.handle).transition().attr("cx", l ? 2 * e : 0), u.classed(M.selected, l), s();
    },
    reset: function(u, c) {
      l = c;
      const f = u.select("#toggle_" + n);
      f.selectAll("." + M.handle).transition().attr("cx", l ? 2 * e : 0), f.classed(M.selected, l), s();
    }
  };
}, v1 = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = R(a).attr("class", M.widget + " " + M.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", M.background).on("click", t.click).on("mouseover", function() {
    R(this).classed(M.lit, !0), R(this.parentNode).select("." + M.symbol).classed(M.lit, !0);
  }).on("mouseout", function() {
    R(this).classed(M.lit, !1), R(this.parentNode).select("." + M.symbol).classed(M.lit, !1);
  }), o.append("path").attr("d", Jr(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", M.symbol), r) {
    const l = Ii(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", M.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + l.x + "," + l.y + ")");
  }
  return a;
}, iu = (t, n) => {
  const e = et();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, m1 = (t, n) => {
  const e = Ye(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const l = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = R(l).attr("class", M.widget + " " + M.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2, c = (b) => {
    const d = b && b.sourceEvent ? b.sourceEvent : b;
    return d ? d.clientX != null ? d.clientX : d.touches && d.touches.length ? d.touches[0].clientX : d.changedTouches && d.changedTouches.length ? d.changedTouches[0].clientX : null : null;
  }, f = (b, d) => {
    const x = c(b);
    if (x == null) return null;
    const _ = d.getBoundingClientRect(), m = x - _.left, S = d.width && d.width.baseVal ? d.width.baseVal.value : _.width, P = _.width ? S / _.width : 1;
    return m * P - u;
  };
  s.append("path").attr("d", iu(t.size(), t.girth())).attr("class", M.track), s.append("circle").attr("class", M.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", M.track_overlay).on("click", function(b) {
    const d = f(b, this);
    if (d == null) return;
    const x = Math.max(0, Math.min(t.size(), d));
    t.value(o.invert(x)), t.update(), t.update_end(), s.selectAll("." + M.handle).attr("cx", o(t.value())), t.show() && s.select("." + M.label).text(t.label() + " = " + e(t.value()));
  }).call(
    e0().on("drag", function(b) {
      const d = f(b, this);
      if (d == null) return;
      const x = Math.max(0, Math.min(t.size(), d));
      t.value(o.invert(x)), t.update(), s.selectAll("." + M.handle).attr("cx", o(t.value())), t.show() && s.select("." + M.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(b) {
      t.update_end();
    })
  );
  var h, p, g, y = "bottom";
  const w = (typeof t.labelpadding == "function" ? t.labelpadding() : 4) || 0;
  return t.fontsize ? p = t.labelposition().match(/bottom/i) != null ? Wn([t.girth() / 2, t.knob()]) + t.fontsize() / 2 + w : -Wn([t.girth() / 2, t.knob()]) - t.fontsize() / 2 - w : p = t.labelposition().match(/bottom/i) != null ? Wn([t.girth() / 2, t.knob()]) + 7 + w : -Wn([t.girth() / 2, t.knob()]) - 7 - w, h = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, g = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", y = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", M.label).style("text-anchor", g).style("alignment-baseline", y).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + h + "," + p + ")"), l;
}, w1 = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = R(o).attr("class", M.widget + " " + M.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(M.selected, t.value() == 1);
  if (s.append("path").attr("d", iu(2 * t.size(), 2 * t.size())).attr("class", M.track), s.append("circle").attr("class", M.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", M.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const l = Ii(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", M.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + (l.x + r) + "," + l.y + ")");
  }
  return o;
}, b1 = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = hp(o), l = un().domain([0, o - 1]).range([0, t.size()]), u = un().domain([0, o - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), f = R(c).attr("class", M.widget + " " + M.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + M.radiobutton).data(s).enter().append("g").attr("class", M.radiobutton).attr("id", (y) => "b" + y).attr("transform", (y) => t.orientation() == "vertical" ? "translate(0," + u(y) + ")" : "translate(" + l(y) + ",0)");
  var h, p;
  t.shape() == "rect" ? (h = f.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = f.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (h = f.append("circle").attr("r", i / 2), p = f.append("circle").attr("r", a / 2)), h.attr("class", M.background).on("mouseover", function() {
    R(this).classed(M.lit, !0), R(this.parentNode).select("." + M.symbol).classed(M.lit, !0);
  }).on("mouseout", function() {
    R(this).classed(M.lit, !1), R(this.parentNode).select("." + M.symbol).classed(M.lit, !1);
  }), p.attr("class", M.symbol), p.filter((y) => y == t.value()).classed(M.selected, !0), f.on("click", t.click);
  const g = Ii(t.buttonsize(), t.buttonsize(), r);
  return f.append("text").attr("class", M.label).text(function(y, w) {
    return t.choices()[w];
  }).attr("alignment-baseline", g.valign).attr("transform", "translate(" + g.x + "," + g.y + ")").style("font-size", t.fontsize()).attr("text-anchor", g.anchor), c;
}, mr = (t, n) => {
  switch (t.type) {
    case "button":
      return v1(t);
    case "slider":
      return m1(t);
    case "radio":
      return b1(t);
    case "toggle":
      return w1(t);
  }
}, x1 = "_displayPanel_u655x_1", M1 = "_controlPanel_u655x_8", $1 = "_tacho_u655x_25", A1 = "_car_u655x_29", T1 = "_tire_u655x_34", N1 = "_street_background_u655x_39", k1 = "_asphalt_u655x_46", S1 = "_street_marks_u655x_53", P1 = "_pivot_u655x_62", E1 = "_tachoborder_u655x_67", O1 = "_tachoredzone_u655x_73", z1 = "_tachotick_u655x_81", I1 = "_ticklabel_u655x_87", C1 = "_pin_u655x_93", R1 = "_meanspeed_u655x_100", k = {
  displayPanel: x1,
  controlPanel: M1,
  tacho: $1,
  car: A1,
  tire: T1,
  street_background: N1,
  asphalt: k1,
  street_marks: S1,
  pivot: P1,
  tachoborder: E1,
  tachoredzone: O1,
  tachotick: z1,
  ticklabel: I1,
  pin: C1,
  meanspeed: R1
}, j1 = (t, n) => {
  const e = Ym(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  );
  console.log(t);
  const r = Fc("#" + t).classed(t + " " + n.container_class, !0), i = t + "_display", a = t + "_controls", o = r.append("div").attr("id", i).attr("class", k.displayPanel).classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), s = r.append("div").attr("id", a).attr("class", "d3-widgets " + k.controlPanel).classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && s.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && o.style("border", n.display_border), n.debug && s.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (l) => "translate(" + l.x + "," + l.y + ")").style("fill", "black"), { display: o, controls: s, grid: e };
};
var au = typeof global == "object" && global && global.Object === Object && global, F1 = typeof self == "object" && self && self.Object === Object && self, mt = au || F1 || Function("return this")(), $t = mt.Symbol, ou = Object.prototype, L1 = ou.hasOwnProperty, D1 = ou.toString, vn = $t ? $t.toStringTag : void 0;
function q1(t) {
  var n = L1.call(t, vn), e = t[vn];
  try {
    t[vn] = void 0;
    var r = !0;
  } catch {
  }
  var i = D1.call(t);
  return r && (n ? t[vn] = e : delete t[vn]), i;
}
var X1 = Object.prototype, B1 = X1.toString;
function H1(t) {
  return B1.call(t);
}
var U1 = "[object Null]", G1 = "[object Undefined]", io = $t ? $t.toStringTag : void 0;
function Xt(t) {
  return t == null ? t === void 0 ? G1 : U1 : io && io in Object(t) ? q1(t) : H1(t);
}
function jt(t) {
  return t != null && typeof t == "object";
}
var Y1 = "[object Symbol]";
function Bn(t) {
  return typeof t == "symbol" || jt(t) && Xt(t) == Y1;
}
function Qe(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var Q = Array.isArray, ao = $t ? $t.prototype : void 0, oo = ao ? ao.toString : void 0;
function su(t) {
  if (typeof t == "string")
    return t;
  if (Q(t))
    return Qe(t, su) + "";
  if (Bn(t))
    return oo ? oo.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var V1 = /\s/;
function K1(t) {
  for (var n = t.length; n-- && V1.test(t.charAt(n)); )
    ;
  return n;
}
var Z1 = /^\s+/;
function W1(t) {
  return t && t.slice(0, K1(t) + 1).replace(Z1, "");
}
function gt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var so = NaN, J1 = /^[-+]0x[0-9a-f]+$/i, Q1 = /^0b[01]+$/i, tw = /^0o[0-7]+$/i, nw = parseInt;
function ew(t) {
  if (typeof t == "number")
    return t;
  if (Bn(t))
    return so;
  if (gt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = gt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = W1(t);
  var e = Q1.test(t);
  return e || tw.test(t) ? nw(t.slice(2), e ? 2 : 8) : J1.test(t) ? so : +t;
}
var rw = 1 / 0, iw = 17976931348623157e292;
function wr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = ew(t), t === rw || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * iw;
  }
  return t === t ? t : 0;
}
function Ri(t) {
  return t;
}
var aw = "[object AsyncFunction]", ow = "[object Function]", sw = "[object GeneratorFunction]", uw = "[object Proxy]";
function uu(t) {
  if (!gt(t))
    return !1;
  var n = Xt(t);
  return n == ow || n == sw || n == aw || n == uw;
}
var br = mt["__core-js_shared__"], uo = function() {
  var t = /[^.]+$/.exec(br && br.keys && br.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function lw(t) {
  return !!uo && uo in t;
}
var cw = Function.prototype, fw = cw.toString;
function Bt(t) {
  if (t != null) {
    try {
      return fw.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var hw = /[\\^$.*+?()[\]{}|]/g, pw = /^\[object .+?Constructor\]$/, dw = Function.prototype, gw = Object.prototype, _w = dw.toString, yw = gw.hasOwnProperty, vw = RegExp(
  "^" + _w.call(yw).replace(hw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function mw(t) {
  if (!gt(t) || lw(t))
    return !1;
  var n = uu(t) ? vw : pw;
  return n.test(Bt(t));
}
function ww(t, n) {
  return t == null ? void 0 : t[n];
}
function Ht(t, n) {
  var e = ww(t, n);
  return mw(e) ? e : void 0;
}
var Qr = Ht(mt, "WeakMap"), lo = function() {
  try {
    var t = Ht(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function bw(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var xw = 9007199254740991, Mw = /^(?:0|[1-9]\d*)$/;
function tr(t, n) {
  var e = typeof t;
  return n = n ?? xw, !!n && (e == "number" || e != "symbol" && Mw.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function $w(t, n, e) {
  n == "__proto__" && lo ? lo(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function nr(t, n) {
  return t === n || t !== t && n !== n;
}
var Aw = Object.prototype, Tw = Aw.hasOwnProperty;
function Nw(t, n, e) {
  var r = t[n];
  (!(Tw.call(t, n) && nr(r, e)) || e === void 0 && !(n in t)) && $w(t, n, e);
}
var kw = 9007199254740991;
function ji(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= kw;
}
function Hn(t) {
  return t != null && ji(t.length) && !uu(t);
}
function Sw(t, n, e) {
  if (!gt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Hn(e) && tr(n, e.length) : r == "string" && n in e) ? nr(e[n], t) : !1;
}
var Pw = Object.prototype;
function lu(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || Pw;
  return t === e;
}
function Ew(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var Ow = "[object Arguments]";
function co(t) {
  return jt(t) && Xt(t) == Ow;
}
var cu = Object.prototype, zw = cu.hasOwnProperty, Iw = cu.propertyIsEnumerable, fu = co(/* @__PURE__ */ function() {
  return arguments;
}()) ? co : function(t) {
  return jt(t) && zw.call(t, "callee") && !Iw.call(t, "callee");
};
function Cw() {
  return !1;
}
var hu = typeof exports == "object" && exports && !exports.nodeType && exports, fo = hu && typeof module == "object" && module && !module.nodeType && module, Rw = fo && fo.exports === hu, ho = Rw ? mt.Buffer : void 0, jw = ho ? ho.isBuffer : void 0, ti = jw || Cw, Fw = "[object Arguments]", Lw = "[object Array]", Dw = "[object Boolean]", qw = "[object Date]", Xw = "[object Error]", Bw = "[object Function]", Hw = "[object Map]", Uw = "[object Number]", Gw = "[object Object]", Yw = "[object RegExp]", Vw = "[object Set]", Kw = "[object String]", Zw = "[object WeakMap]", Ww = "[object ArrayBuffer]", Jw = "[object DataView]", Qw = "[object Float32Array]", tb = "[object Float64Array]", nb = "[object Int8Array]", eb = "[object Int16Array]", rb = "[object Int32Array]", ib = "[object Uint8Array]", ab = "[object Uint8ClampedArray]", ob = "[object Uint16Array]", sb = "[object Uint32Array]", N = {};
N[Qw] = N[tb] = N[nb] = N[eb] = N[rb] = N[ib] = N[ab] = N[ob] = N[sb] = !0;
N[Fw] = N[Lw] = N[Ww] = N[Dw] = N[Jw] = N[qw] = N[Xw] = N[Bw] = N[Hw] = N[Uw] = N[Gw] = N[Yw] = N[Vw] = N[Kw] = N[Zw] = !1;
function ub(t) {
  return jt(t) && ji(t.length) && !!N[Xt(t)];
}
function lb(t) {
  return function(n) {
    return t(n);
  };
}
var pu = typeof exports == "object" && exports && !exports.nodeType && exports, Tn = pu && typeof module == "object" && module && !module.nodeType && module, cb = Tn && Tn.exports === pu, xr = cb && au.process, po = function() {
  try {
    var t = Tn && Tn.require && Tn.require("util").types;
    return t || xr && xr.binding && xr.binding("util");
  } catch {
  }
}(), go = po && po.isTypedArray, du = go ? lb(go) : ub, fb = Object.prototype, hb = fb.hasOwnProperty;
function gu(t, n) {
  var e = Q(t), r = !e && fu(t), i = !e && !r && ti(t), a = !e && !r && !i && du(t), o = e || r || i || a, s = o ? Ew(t.length, String) : [], l = s.length;
  for (var u in t)
    (n || hb.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    tr(u, l))) && s.push(u);
  return s;
}
function _u(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var pb = _u(Object.keys, Object), db = Object.prototype, gb = db.hasOwnProperty;
function _b(t) {
  if (!lu(t))
    return pb(t);
  var n = [];
  for (var e in Object(t))
    gb.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function er(t) {
  return Hn(t) ? gu(t) : _b(t);
}
function yb(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var vb = Object.prototype, mb = vb.hasOwnProperty;
function wb(t) {
  if (!gt(t))
    return yb(t);
  var n = lu(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !mb.call(t, r)) || e.push(r);
  return e;
}
function bb(t) {
  return Hn(t) ? gu(t, !0) : wb(t);
}
var xb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Mb = /^\w*$/;
function Fi(t, n) {
  if (Q(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Bn(t) ? !0 : Mb.test(t) || !xb.test(t) || n != null && t in Object(n);
}
var jn = Ht(Object, "create");
function $b() {
  this.__data__ = jn ? jn(null) : {}, this.size = 0;
}
function Ab(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var Tb = "__lodash_hash_undefined__", Nb = Object.prototype, kb = Nb.hasOwnProperty;
function Sb(t) {
  var n = this.__data__;
  if (jn) {
    var e = n[t];
    return e === Tb ? void 0 : e;
  }
  return kb.call(n, t) ? n[t] : void 0;
}
var Pb = Object.prototype, Eb = Pb.hasOwnProperty;
function Ob(t) {
  var n = this.__data__;
  return jn ? n[t] !== void 0 : Eb.call(n, t);
}
var zb = "__lodash_hash_undefined__";
function Ib(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = jn && n === void 0 ? zb : n, this;
}
function Ft(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Ft.prototype.clear = $b;
Ft.prototype.delete = Ab;
Ft.prototype.get = Sb;
Ft.prototype.has = Ob;
Ft.prototype.set = Ib;
function Cb() {
  this.__data__ = [], this.size = 0;
}
function rr(t, n) {
  for (var e = t.length; e--; )
    if (nr(t[e][0], n))
      return e;
  return -1;
}
var Rb = Array.prototype, jb = Rb.splice;
function Fb(t) {
  var n = this.__data__, e = rr(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : jb.call(n, e, 1), --this.size, !0;
}
function Lb(t) {
  var n = this.__data__, e = rr(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function Db(t) {
  return rr(this.__data__, t) > -1;
}
function qb(t, n) {
  var e = this.__data__, r = rr(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function wt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
wt.prototype.clear = Cb;
wt.prototype.delete = Fb;
wt.prototype.get = Lb;
wt.prototype.has = Db;
wt.prototype.set = qb;
var Fn = Ht(mt, "Map");
function Xb() {
  this.size = 0, this.__data__ = {
    hash: new Ft(),
    map: new (Fn || wt)(),
    string: new Ft()
  };
}
function Bb(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function ir(t, n) {
  var e = t.__data__;
  return Bb(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Hb(t) {
  var n = ir(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Ub(t) {
  return ir(this, t).get(t);
}
function Gb(t) {
  return ir(this, t).has(t);
}
function Yb(t, n) {
  var e = ir(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function bt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
bt.prototype.clear = Xb;
bt.prototype.delete = Hb;
bt.prototype.get = Ub;
bt.prototype.has = Gb;
bt.prototype.set = Yb;
var Vb = "Expected a function";
function Li(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Vb);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (Li.Cache || bt)(), e;
}
Li.Cache = bt;
var Kb = 500;
function Zb(t) {
  var n = Li(t, function(r) {
    return e.size === Kb && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Wb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Jb = /\\(\\)?/g, Qb = Zb(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Wb, function(e, r, i, a) {
    n.push(i ? a.replace(Jb, "$1") : r || e);
  }), n;
});
function ar(t) {
  return t == null ? "" : su(t);
}
function or(t, n) {
  return Q(t) ? t : Fi(t, n) ? [t] : Qb(ar(t));
}
function Un(t) {
  if (typeof t == "string" || Bn(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Di(t, n) {
  n = or(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Un(n[e++])];
  return e && e == r ? t : void 0;
}
function tx(t, n, e) {
  var r = t == null ? void 0 : Di(t, n);
  return r === void 0 ? e : r;
}
function yu(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var nx = _u(Object.getPrototypeOf, Object);
function ex(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + n];
  return a;
}
function rx(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, ex(t, n, e);
}
var ix = "\\ud800-\\udfff", ax = "\\u0300-\\u036f", ox = "\\ufe20-\\ufe2f", sx = "\\u20d0-\\u20ff", ux = ax + ox + sx, lx = "\\ufe0e\\ufe0f", cx = "\\u200d", fx = RegExp("[" + cx + ix + ux + lx + "]");
function vu(t) {
  return fx.test(t);
}
function hx(t) {
  return t.split("");
}
var mu = "\\ud800-\\udfff", px = "\\u0300-\\u036f", dx = "\\ufe20-\\ufe2f", gx = "\\u20d0-\\u20ff", _x = px + dx + gx, yx = "\\ufe0e\\ufe0f", vx = "[" + mu + "]", ni = "[" + _x + "]", ei = "\\ud83c[\\udffb-\\udfff]", mx = "(?:" + ni + "|" + ei + ")", wu = "[^" + mu + "]", bu = "(?:\\ud83c[\\udde6-\\uddff]){2}", xu = "[\\ud800-\\udbff][\\udc00-\\udfff]", wx = "\\u200d", Mu = mx + "?", $u = "[" + yx + "]?", bx = "(?:" + wx + "(?:" + [wu, bu, xu].join("|") + ")" + $u + Mu + ")*", xx = $u + Mu + bx, Mx = "(?:" + [wu + ni + "?", ni, bu, xu, vx].join("|") + ")", $x = RegExp(ei + "(?=" + ei + ")|" + Mx + xx, "g");
function Ax(t) {
  return t.match($x) || [];
}
function Tx(t) {
  return vu(t) ? Ax(t) : hx(t);
}
function Nx(t) {
  return function(n) {
    n = ar(n);
    var e = vu(n) ? Tx(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? rx(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var kx = Nx("toUpperCase");
function Sx(t) {
  return kx(ar(t).toLowerCase());
}
function Px() {
  this.__data__ = new wt(), this.size = 0;
}
function Ex(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function Ox(t) {
  return this.__data__.get(t);
}
function zx(t) {
  return this.__data__.has(t);
}
var Ix = 200;
function Cx(t, n) {
  var e = this.__data__;
  if (e instanceof wt) {
    var r = e.__data__;
    if (!Fn || r.length < Ix - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new bt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function ht(t) {
  var n = this.__data__ = new wt(t);
  this.size = n.size;
}
ht.prototype.clear = Px;
ht.prototype.delete = Ex;
ht.prototype.get = Ox;
ht.prototype.has = zx;
ht.prototype.set = Cx;
function Rx(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function Au() {
  return [];
}
var jx = Object.prototype, Fx = jx.propertyIsEnumerable, _o = Object.getOwnPropertySymbols, Tu = _o ? function(t) {
  return t == null ? [] : (t = Object(t), Rx(_o(t), function(n) {
    return Fx.call(t, n);
  }));
} : Au, Lx = Object.getOwnPropertySymbols, Dx = Lx ? function(t) {
  for (var n = []; t; )
    yu(n, Tu(t)), t = nx(t);
  return n;
} : Au;
function Nu(t, n, e) {
  var r = n(t);
  return Q(t) ? r : yu(r, e(t));
}
function yo(t) {
  return Nu(t, er, Tu);
}
function qx(t) {
  return Nu(t, bb, Dx);
}
var ri = Ht(mt, "DataView"), ii = Ht(mt, "Promise"), ai = Ht(mt, "Set"), vo = "[object Map]", Xx = "[object Object]", mo = "[object Promise]", wo = "[object Set]", bo = "[object WeakMap]", xo = "[object DataView]", Bx = Bt(ri), Hx = Bt(Fn), Ux = Bt(ii), Gx = Bt(ai), Yx = Bt(Qr), ct = Xt;
(ri && ct(new ri(new ArrayBuffer(1))) != xo || Fn && ct(new Fn()) != vo || ii && ct(ii.resolve()) != mo || ai && ct(new ai()) != wo || Qr && ct(new Qr()) != bo) && (ct = function(t) {
  var n = Xt(t), e = n == Xx ? t.constructor : void 0, r = e ? Bt(e) : "";
  if (r)
    switch (r) {
      case Bx:
        return xo;
      case Hx:
        return vo;
      case Ux:
        return mo;
      case Gx:
        return wo;
      case Yx:
        return bo;
    }
  return n;
});
var Mo = mt.Uint8Array, Vx = "__lodash_hash_undefined__";
function Kx(t) {
  return this.__data__.set(t, Vx), this;
}
function Zx(t) {
  return this.__data__.has(t);
}
function je(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new bt(); ++n < e; )
    this.add(t[n]);
}
je.prototype.add = je.prototype.push = Kx;
je.prototype.has = Zx;
function Wx(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Jx(t, n) {
  return t.has(n);
}
var Qx = 1, t2 = 2;
function ku(t, n, e, r, i, a) {
  var o = e & Qx, s = t.length, l = n.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(t), c = a.get(n);
  if (u && c)
    return u == n && c == t;
  var f = -1, h = !0, p = e & t2 ? new je() : void 0;
  for (a.set(t, n), a.set(n, t); ++f < s; ) {
    var g = t[f], y = n[f];
    if (r)
      var w = o ? r(y, g, f, n, t, a) : r(g, y, f, t, n, a);
    if (w !== void 0) {
      if (w)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!Wx(n, function(b, d) {
        if (!Jx(p, d) && (g === b || i(g, b, e, r, a)))
          return p.push(d);
      })) {
        h = !1;
        break;
      }
    } else if (!(g === y || i(g, y, e, r, a))) {
      h = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), h;
}
function Su(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function n2(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var e2 = 1, r2 = 2, i2 = "[object Boolean]", a2 = "[object Date]", o2 = "[object Error]", s2 = "[object Map]", u2 = "[object Number]", l2 = "[object RegExp]", c2 = "[object Set]", f2 = "[object String]", h2 = "[object Symbol]", p2 = "[object ArrayBuffer]", d2 = "[object DataView]", $o = $t ? $t.prototype : void 0, Mr = $o ? $o.valueOf : void 0;
function g2(t, n, e, r, i, a, o) {
  switch (e) {
    case d2:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case p2:
      return !(t.byteLength != n.byteLength || !a(new Mo(t), new Mo(n)));
    case i2:
    case a2:
    case u2:
      return nr(+t, +n);
    case o2:
      return t.name == n.name && t.message == n.message;
    case l2:
    case f2:
      return t == n + "";
    case s2:
      var s = Su;
    case c2:
      var l = r & e2;
      if (s || (s = n2), t.size != n.size && !l)
        return !1;
      var u = o.get(t);
      if (u)
        return u == n;
      r |= r2, o.set(t, n);
      var c = ku(s(t), s(n), r, i, a, o);
      return o.delete(t), c;
    case h2:
      if (Mr)
        return Mr.call(t) == Mr.call(n);
  }
  return !1;
}
var _2 = 1, y2 = Object.prototype, v2 = y2.hasOwnProperty;
function m2(t, n, e, r, i, a) {
  var o = e & _2, s = yo(t), l = s.length, u = yo(n), c = u.length;
  if (l != c && !o)
    return !1;
  for (var f = l; f--; ) {
    var h = s[f];
    if (!(o ? h in n : v2.call(n, h)))
      return !1;
  }
  var p = a.get(t), g = a.get(n);
  if (p && g)
    return p == n && g == t;
  var y = !0;
  a.set(t, n), a.set(n, t);
  for (var w = o; ++f < l; ) {
    h = s[f];
    var b = t[h], d = n[h];
    if (r)
      var x = o ? r(d, b, h, n, t, a) : r(b, d, h, t, n, a);
    if (!(x === void 0 ? b === d || i(b, d, e, r, a) : x)) {
      y = !1;
      break;
    }
    w || (w = h == "constructor");
  }
  if (y && !w) {
    var _ = t.constructor, m = n.constructor;
    _ != m && "constructor" in t && "constructor" in n && !(typeof _ == "function" && _ instanceof _ && typeof m == "function" && m instanceof m) && (y = !1);
  }
  return a.delete(t), a.delete(n), y;
}
var w2 = 1, Ao = "[object Arguments]", To = "[object Array]", ie = "[object Object]", b2 = Object.prototype, No = b2.hasOwnProperty;
function x2(t, n, e, r, i, a) {
  var o = Q(t), s = Q(n), l = o ? To : ct(t), u = s ? To : ct(n);
  l = l == Ao ? ie : l, u = u == Ao ? ie : u;
  var c = l == ie, f = u == ie, h = l == u;
  if (h && ti(t)) {
    if (!ti(n))
      return !1;
    o = !0, c = !1;
  }
  if (h && !c)
    return a || (a = new ht()), o || du(t) ? ku(t, n, e, r, i, a) : g2(t, n, l, e, r, i, a);
  if (!(e & w2)) {
    var p = c && No.call(t, "__wrapped__"), g = f && No.call(n, "__wrapped__");
    if (p || g) {
      var y = p ? t.value() : t, w = g ? n.value() : n;
      return a || (a = new ht()), i(y, w, e, r, a);
    }
  }
  return h ? (a || (a = new ht()), m2(t, n, e, r, i, a)) : !1;
}
function qi(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !jt(t) && !jt(n) ? t !== t && n !== n : x2(t, n, e, r, qi, i);
}
var M2 = 1, $2 = 2;
function A2(t, n, e, r) {
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
    var s = o[0], l = t[s], u = o[1];
    if (o[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var c = new ht(), f;
      if (!(f === void 0 ? qi(u, l, M2 | $2, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function Pu(t) {
  return t === t && !gt(t);
}
function T2(t) {
  for (var n = er(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Pu(i)];
  }
  return n;
}
function Eu(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function N2(t) {
  var n = T2(t);
  return n.length == 1 && n[0][2] ? Eu(n[0][0], n[0][1]) : function(e) {
    return e === t || A2(e, t, n);
  };
}
function k2(t, n) {
  return t != null && n in Object(t);
}
function Ou(t, n, e) {
  n = or(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = Un(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && ji(i) && tr(o, i) && (Q(t) || fu(t)));
}
function S2(t, n) {
  return t != null && Ou(t, n, k2);
}
var P2 = 1, E2 = 2;
function O2(t, n) {
  return Fi(t) && Pu(n) ? Eu(Un(t), n) : function(e) {
    var r = tx(e, t);
    return r === void 0 && r === n ? S2(e, t) : qi(n, r, P2 | E2);
  };
}
function z2(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function I2(t) {
  return function(n) {
    return Di(n, t);
  };
}
function C2(t) {
  return Fi(t) ? z2(Un(t)) : I2(t);
}
function Xi(t) {
  return typeof t == "function" ? t : t == null ? Ri : typeof t == "object" ? Q(t) ? O2(t[0], t[1]) : N2(t) : C2(t);
}
function R2(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var l = o[++i];
      if (e(a[l], l, a) === !1)
        break;
    }
    return n;
  };
}
var j2 = R2();
function F2(t, n) {
  return t && j2(t, n, er);
}
function L2(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Hn(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var zu = L2(F2);
function D2(t) {
  return typeof t == "function" ? t : Ri;
}
function Lt(t, n) {
  var e = Q(t) ? bw : zu;
  return e(t, D2(n));
}
function q2(t, n) {
  return Qe(n, function(e) {
    return [e, t[e]];
  });
}
function X2(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var B2 = "[object Map]", H2 = "[object Set]";
function U2(t) {
  return function(n) {
    var e = ct(n);
    return e == B2 ? Su(n) : e == H2 ? X2(n) : q2(n, t(n));
  };
}
var Iu = U2(er);
function G2(t, n) {
  var e = -1, r = Hn(t) ? Array(t.length) : [];
  return zu(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function Dt(t, n) {
  var e = Q(t) ? Qe : G2;
  return e(t, Xi(n));
}
function Y2(t, n) {
  return t > n;
}
var V2 = Object.prototype, K2 = V2.hasOwnProperty;
function Z2(t, n) {
  return t != null && K2.call(t, n);
}
function W2(t, n) {
  return t != null && Ou(t, n, Z2);
}
var J2 = "[object Boolean]";
function Q2(t) {
  return t === !0 || t === !1 || jt(t) && Xt(t) == J2;
}
function tM(t, n, e) {
  for (var r = -1, i = t.length; ++r < i; ) {
    var a = t[r], o = n(a);
    if (o != null && (s === void 0 ? o === o && !Bn(o) : e(o, s)))
      var s = o, l = a;
  }
  return l;
}
function nM(t, n) {
  return t && t.length ? tM(t, Xi(n), Y2) : void 0;
}
function eM(t, n) {
  for (var e, r = -1, i = t.length; ++r < i; ) {
    var a = n(t[r]);
    a !== void 0 && (e = e === void 0 ? a : e + a);
  }
  return e;
}
var rM = NaN;
function iM(t, n) {
  var e = t == null ? 0 : t.length;
  return e ? eM(t, n) / e : rM;
}
function aM(t) {
  return iM(t, Ri);
}
function oM(t, n, e, r) {
  if (!gt(t))
    return t;
  n = or(n, t);
  for (var i = -1, a = n.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var l = Un(n[i]), u = e;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != o) {
      var c = s[l];
      u = void 0, u === void 0 && (u = gt(c) ? c : tr(n[i + 1]) ? [] : {});
    }
    Nw(s, l, u), s = s[l];
  }
  return t;
}
function sM(t, n, e) {
  for (var r = -1, i = n.length, a = {}; ++r < i; ) {
    var o = n[r], s = Di(t, o);
    e(s, o) && oM(a, or(o, t), s);
  }
  return a;
}
function Cu(t, n) {
  if (t == null)
    return {};
  var e = Qe(qx(t), function(r) {
    return [r];
  });
  return n = Xi(n), sM(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var uM = Math.ceil, lM = Math.max;
function cM(t, n, e, r) {
  for (var i = -1, a = lM(uM((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function fM(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && Sw(n, e, r) && (e = r = void 0), n = wr(n), e === void 0 ? (e = n, n = 0) : e = wr(e), r = r === void 0 ? n < e ? 1 : -1 : wr(r), cM(n, e, r);
  };
}
var fn = fM();
function hM() {
  var t = arguments, n = ar(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
const O = {
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
}, $ = {
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
}, Ru = (t) => Dt(Iu(t), (n) => {
  n[1].id = n[0], n[1].label = hM(Sx(n[0]), /_/g, " ");
}), ju = (t) => Dt(Iu(t), (n) => n[1]), Fu = (t, n) => Lt(t, (e, r) => e.widget = n[r]), pM = (t) => Cu(t, (n) => W2(n, "range")), dM = (t) => Cu(t, (n) => Q2(n.default));
hn().domain([0, 360]).range([0, 2 * Math.PI]);
hn().range([0, 360]).domain([0, 2 * Math.PI]);
const G = (t, n) => {
  if (t - n >= 0 && t - n < 0.5)
    return t - n;
  if (t - n < 0 && t - n < -0.5)
    return 1 - n + t;
  if (t - n < 0 && t - n > -0.5)
    return t - n;
  if (t - n > 0 && t - n > 0.5)
    return t - n - 1;
}, Bi = pM($), Hi = dM($);
Ru(Bi);
Ru(Hi);
const Lu = ju(Bi), Du = ju(Hi), de = Dt(
  Lu,
  (t) => _1().id(t.id).label(t.label).range(t.range).value(t.default).size(O.widgets.slider_size).girth(O.widgets.slider_girth).knob(O.widgets.slider_knob)
), ge = Dt(
  Du,
  (t) => y1().id(t.id).label(t.label).value(t.default).labelposition(O.widgets.toggle_label_position)
);
Fu(Du, ge);
Fu(Lu, de);
const Mt = Ci().actions(["play", "pause"]), sr = Ci().actions(["back"]), ur = Ci().actions(["rewind"]), gM = [Mt, sr, ur], _M = (t, n) => {
  const e = n.position(O.widgets.slider_anchor.x, fn(de.length).map((i) => O.widgets.slider_anchor.y + O.widgets.slider_gap * i)), r = n.position(O.widgets.toggle_anchor.x, fn(ge.length).map((i) => O.widgets.toggle_anchor.y + O.widgets.toggle_gap * i));
  de.forEach((i, a) => i.position(e[a])), ge.forEach((i, a) => i.position(r[a])), Mt.position(n.position(O.widgets.playbutton_anchor.x, O.widgets.playbutton_anchor.y)).size(O.widgets.playbutton_size), ur.position(n.position(O.widgets.backbutton_anchor.x, O.widgets.backbutton_anchor.y)), sr.position(n.position(O.widgets.resetbutton_anchor.x, O.widgets.resetbutton_anchor.y)), t.selectAll(null).data(de).enter().append(mr), t.selectAll(null).data(ge).enter().append(mr), t.selectAll(null).data(gM).enter().append(mr);
}, yM = (t) => {
  Lt(Bi, (n) => n.widget.reset(t, n.default)), Lt(Hi, (n) => n.widget.reset(t, n.default));
};
$.L;
const $r = $.dt;
var j = [];
const vM = () => {
  $.timer = {}, $.tick = 0;
  const t = $.N;
  $.mean_speed.widget.value(), $.speed_variability.widget.value(), j = Dt(fn(2 * t), (n) => {
    const e = Math.random();
    return {
      id: n,
      x: n < t ? n / t % 1 : (n / t + 0.5 / t) % 1,
      v: 0,
      v0: $.mean_speed.widget.value() + $.speed_variability.widget.value() * e,
      vdiff: e,
      lane: n < t ? "left" : "right",
      passing: !1,
      passing_tau: 0,
      v_hist: Dt(fn(50), (r) => 0),
      v_avg: 0
    };
  }), Lt(j, (n, e) => {
    e < t ? n.next = j[(e + 1) % t] : n.next = j[t + (e + 1) % t];
  });
}, mM = () => {
  $.tick++, Lt(j, (t, n) => {
    if (Math.random() < 0.5 && G(t.next.x, t.x) < 0.03 && t.passing == !1 && $.allow_lane_changes.widget.value()) {
      var e = j.filter(function(f) {
        return f.lane != t.lane && G(f.x, t.x) < 0;
      }), r = j.filter(function(f) {
        return f.lane != t.lane && G(f.x, t.x) > 0;
      }), i = nl(e, function(f) {
        return G(f.x, t.x);
      }), a = el(r, function(f) {
        return G(f.x, t.x);
      });
      if (i < -0.015 && a > 0.015 && a > G(t.next.x, t.x)) {
        var o = j.filter(function(f) {
          return f.next == t;
        })[0];
        o.next = t.next;
        var s = e.filter(function(f) {
          return G(f.x, t.x) == i;
        })[0], l = r.filter(function(f) {
          return G(f.x, t.x) == a;
        })[0];
        s.next = t, t.next = l, t.lane == "left" ? t.lane = "right" : t.lane = "left", t.passing = !0, t.passing_tau = 1;
      }
    }
    let u = t.x, c = t.next.x;
    G(c, u) > $.inertia.widget.value() && (t.v < t.v0 ? t.dv = $.acceleration.widget.value() * $r : t.dv = -$.acceleration.widget.value() * $r), G(c, u) < $.delta && (t.dv = 0.5 * t.next.v - t.v), G(c, u) >= $.delta && G(c, u) < $.inertia.widget.value() && (t.dv = 0), t.passing == !0 && (t.passing_tau -= 0.025), t.passing_tau <= 0 && (t.passing = !1, t.passing_tau = 0), t.dx = t.v * $r;
  }), Lt(j, (t) => {
    t.x += t.dx, t.v += t.dv, t.v < 0 && (t.v = 0), t.x = t.x % 1, t.v_hist.push(t.v), t.v_hist.shift(), t.v_avg = aM(t.v_hist);
  });
}, wM = () => {
  Lt(j, (t) => {
    t.v0 = $.mean_speed.widget.value() + $.speed_variability.widget.value() * t.vdiff;
  });
}, bM = (t, n) => {
  const r = fn(0, 1.001, 1e-3);
  t.append("path").datum(r).attr("d", n).attr("class", k.street_background), t.append("path").datum(r).attr("d", n).attr("class", k.asphalt), t.append("path").datum(r).attr("d", n).attr("class", k.street_marks);
}, xM = (t) => {
  const n = [{ x: 4, y: 4 }, { x: 4, y: -4 }, { x: -4, y: -4 }, { x: -4, y: 4 }];
  t.selectAll("." + k.tire).data(n).enter().append("circle").attr("class", k.tire).attr("r", "2").attr("cy", (e) => e.y).attr("cx", (e) => e.x), t.append("rect").attr("width", 8).attr("height", 16).attr("rx", 1).attr("ry", 3).attr("x", "-4").attr("y", "-8"), t.append("rect").attr("width", 6).attr("height", 6).attr("rx", 1).attr("ry", 1).attr("x", "-3").attr("y", "-2");
};
$.L;
const Vt = (t) => ($.path.rmin + $.path.varr * Math.cos($.path.kr * 2 * Math.PI * t)) * Math.cos(
  $.path.slope * 2 * Math.PI * t + $.path.vartheta * Math.sin($.path.ktheta * 2 * Math.PI * t)
), Kt = (t) => ($.path.rmin + $.path.varr * Math.cos($.path.kr * 2 * Math.PI * t)) * Math.sin(
  $.path.slope * 2 * Math.PI * t + $.path.vartheta * Math.sin($.path.ktheta * 2 * Math.PI * t)
), MM = () => {
  let t = 2e3, n = fn(0, 1, 1 / t);
  var e = [0];
  for (let r = 0; r < t - 1; r++)
    e.push(e[r] + Math.sqrt((Vt(n[r + 1]) - Vt(n[r])) * (Vt(n[r + 1]) - Vt(n[r])) + (Kt(n[r + 1]) - Kt(n[r])) * (Kt(n[r + 1]) - Kt(n[r]))));
  return e = Dt(e, (r) => r / e[e.length - 1]), e;
}, Fe = hn().domain([-3.4, 3.4]), Le = hn().domain([-3.4, 3.4]);
var oi = hn().range(["red", "white"]);
const $M = fs().x((t) => Fe(Vt(t))).y((t) => Le(Kt(t)));
var ae = MM();
const qu = (t) => {
  let n = ae.filter((r) => r <= t % 1), e = (t - n[n.length - 1]) / (ae[n.length] - ae[n.length - 1]);
  return t > 1 && (e = 0), (n.length + e) / (ae.length - 1);
}, Qt = (t) => Vt(qu(t)), tn = (t) => Kt(qu(t)), AM = (t, n) => {
  oi.domain([0, nM(j, (o) => o.v0).v0]);
  const e = n.display_size.width, r = n.display_size.height;
  Fe.range([0, e]), Le.range([0, r]), t.selectAll("#origin").remove();
  const i = t.append("g").attr("id", "origin");
  bM(i, $M);
  const a = i.selectAll("." + k.car).data(j).enter().append("g").attr("class", k.car).attr("transform", (o) => {
    let s = Qt(o.x + 1e-3) - Qt(o.x), l = tn(o.x + 1e-3) - tn(o.x), u = o.lane == "left" ? 8 : -8, c = Math.atan2(l, s);
    return o.passing == !0 && (u = o.lane == "left" ? o.passing_tau * -8 + (1 - o.passing_tau) * 8 : o.passing_tau * 8 + (1 - o.passing_tau) * -8), "translate(" + Fe(Qt(o.x)) + "," + Le(tn(o.x)) + ")rotate(" + (90 + c / Math.PI * 180) + ")translate(" + u + ",0)scale(0.8)";
  }).style("fill", (o) => $.color_speed.widget.value() ? oi(o.v) : "white");
  xM(a);
}, TM = (t, n) => {
  t.selectAll("#origin").selectAll("." + k.car).attr("transform", (e) => {
    let r = Qt(e.x + 1e-3) - Qt(e.x), i = tn(e.x + 1e-3) - tn(e.x), a = e.lane == "left" ? 8 : -8, o = Math.atan2(i, r);
    return e.passing == !0 && (a = e.lane == "left" ? e.passing_tau * -8 + (1 - e.passing_tau) * 8 : e.passing_tau * 8 + (1 - e.passing_tau) * -8), "translate(" + Fe(Qt(e.x)) + "," + Le(tn(e.x)) + ")rotate(" + (90 + o / Math.PI * 180) + ")translate(" + a + ",0)scale(0.8)";
  }).style("fill", (e) => e.passing && $.highlight_passing.widget.value() ? "blue" : $.color_speed.widget.value() ? oi(e.v) : "white");
}, _e = O.tacho.size, ko = O.tacho.tick, So = fs().x(function(t) {
  return _e * Math.cos(t);
}).y(function(t) {
  return -100 * Math.sin(t);
}), NM = (t, n) => {
  const e = $.mean_speed.range[1] + $.speed_variability.range[1];
  t.select("." + k.tacho).remove();
  const r = n.position(O.tacho.anchor.x, O.tacho.anchor.y), i = t.append("g").attr("class", k.tacho).attr("transform", "translate(" + r.x + "," + r.y + ")");
  i.append("path").data([Gn(0, 0.2 * Math.PI, 0.01)]).attr("d", So).attr("class", k.tachoredzone), i.append("path").data([Gn(0, Math.PI, 0.01)]).attr("d", So).attr("class", k.tachoborder), i.selectAll("." + k.tachotick).data(Gn(0, Math.PI + Math.PI / 10, Math.PI / 10)).enter().append("line").attr("class", k.tachotick).attr("x1", (a) => (_e - ko) * Math.cos(a)).attr("x2", (a) => _e * Math.cos(a)).attr("y1", (a) => -96 * Math.sin(a)).attr("y2", (a) => -100 * Math.sin(a)), i.selectAll("." + k.ticklabel).data(Gn(0, Math.PI + Math.PI / 10, Math.PI / 10)).enter().append("g").attr("transform", function(a, o) {
    return "translate(" + (_e + 2 * ko) * Math.cos(a) + "," + -108 * Math.sin(a) + ")rotate(" + (-a / (2 * Math.PI) * 360 + 90) + ")";
  }).append("text").text(function(a, o) {
    return 150 - o * 15;
  }).attr("class", k.ticklabel), i.selectAll("." + k.pin).data(j).enter().append("line").attr("class", k.pin).attr("x1", function(a) {
    return 0;
  }).attr("x2", function(a) {
    return -92 * Math.cos(a.v / e);
  }).attr("y1", function(a) {
    return 0;
  }).attr("y2", function(a) {
    return -92 * Math.sin(a.v / e);
  }), i.datum(zo(j, function(a) {
    return a.v_avg;
  })).append("line").attr("class", k.meanspeed).attr("x1", function(a) {
    return 0;
  }).attr("x2", function(a) {
    return -92 * Math.cos(a / e);
  }).attr("y1", function(a) {
    return 0;
  }).attr("y2", function(a) {
    return -92 * Math.sin(a / e);
  }), i.append("circle").attr("class", k.pivot).attr("r", 5);
}, Xu = (t) => {
  const n = $.mean_speed.range[1] + $.speed_variability.range[1], e = t.select("." + k.tacho);
  e.selectAll("." + k.pin).data(j).attr("x1", function(r) {
    return 0;
  }).attr("x2", function(r) {
    return -92 * Math.cos(Math.PI * r.v_avg / n);
  }).attr("y1", function(r) {
    return 0;
  }).attr("y2", function(r) {
    return -92 * Math.sin(Math.PI * r.v_avg / n);
  }), e.selectAll("." + k.meanspeed).datum(zo(j, function(r) {
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
function kM(t, n, e) {
  mM(), TM(t), Xu(n);
}
function Bu(t, n, e, r) {
  vM(), AM(t, r), NM(n, e);
}
function Po(t, n, e) {
  wM(), Xu(n);
}
var Eo = {};
const SM = (t, n, e) => {
  Mt.value() == 1 ? Eo = yf(() => kM(t, n), O.simulation.delay) : Eo.stop();
}, PM = (t, n, e, r) => {
  ur.update(() => yM(n)), Mt.update(() => SM(t, n)), sr.update(() => Bu(t, n, e, r)), $.mean_speed.widget.update(() => Po(t, n)), $.speed_variability.widget.update(() => Po(t, n));
}, EM = {
  name: "@explorables/berlin_8_am",
  title: "Berlin 8:00 a.m.",
  subtitle: "The emergence of phantom traffic jams",
  description: "This explorable illustrates a model for traffic and congestion and the phenomenon knowns as phantom traffic jams, spontaneously emergent congested traffic segments that move slowly and oppositely to the traffic.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function OM(t, n = Hu) {
  const e = j1(t, n), r = e.display, i = e.controls, a = e.grid;
  return _M(i, a), PM(r, i, a, n), Bu(r, i, a, n), {
    halt() {
      Mt.value() === 1 && Mt.press(i);
    },
    reset() {
      Mt.value() === 1 && Mt.press(i), ur.press(i), sr.press(i);
    },
    config: n,
    meta: EM
  };
}
export {
  Hu as config,
  OM as default,
  OM as load,
  EM as meta
};
