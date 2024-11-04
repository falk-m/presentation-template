/* esm.sh - esbuild bundle(preact@10.23.1) es2022 production */
var M, h, X, ie, x, J, Y, R, j, $, O, Z, T = {}, ee = [], le = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, I = Array.isArray;
function b(_, e) {
    for (var t in e)
        _[t] = e[t];
    return _
}
function _e(_) {
    var e = _.parentNode;
    e && e.removeChild(_)
}
function se(_, e, t) {
    var i, n, r, l = {};
    for (r in e)
        r == "key" ? i = e[r] : r == "ref" ? n = e[r] : l[r] = e[r];
    if (arguments.length > 2 && (l.children = arguments.length > 3 ? M.call(arguments, 2) : t),
    typeof _ == "function" && _.defaultProps != null)
        for (r in _.defaultProps)
            l[r] === void 0 && (l[r] = _.defaultProps[r]);
    return U(_, l, i, n, null)
}
function U(_, e, t, i, n) {
    var r = {
        type: _,
        props: e,
        key: t,
        ref: i,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: n ?? ++X,
        __i: -1,
        __u: 0
    };
    return n == null && h.vnode != null && h.vnode(r),
    r
}
function ve() {
    return {
        current: null
    }
}
function N(_) {
    return _.children
}
function F(_, e) {
    this.props = _,
    this.context = e
}
function C(_, e) {
    if (e == null)
        return _.__ ? C(_.__, _.__i + 1) : null;
    for (var t; e < _.__k.length; e++)
        if ((t = _.__k[e]) != null && t.__e != null)
            return t.__e;
    return typeof _.type == "function" ? C(_) : null
}
function te(_) {
    var e, t;
    if ((_ = _.__) != null && _.__c != null) {
        for (_.__e = _.__c.base = null,
        e = 0; e < _.__k.length; e++)
            if ((t = _.__k[e]) != null && t.__e != null) {
                _.__e = _.__c.base = t.__e;
                break
            }
        return te(_)
    }
}
function B(_) {
    (!_.__d && (_.__d = !0) && x.push(_) && !H.__r++ || J !== h.debounceRendering) && ((J = h.debounceRendering) || Y)(H)
}
function H() {
    var _, e, t, i, n, r, l, s;
    for (x.sort(R); _ = x.shift(); )
        _.__d && (e = x.length,
        i = void 0,
        r = (n = (t = _).__v).__e,
        l = [],
        s = [],
        t.__P && ((i = b({}, n)).__v = n.__v + 1,
        h.vnode && h.vnode(i),
        z(t.__P, i, n, t.__n, t.__P.namespaceURI, 32 & n.__u ? [r] : null, l, r ?? C(n), !!(32 & n.__u), s),
        i.__v = n.__v,
        i.__.__k[i.__i] = i,
        re(l, i, s),
        i.__e != r && te(i)),
        x.length > e && x.sort(R));
    H.__r = 0
}
function ne(_, e, t, i, n, r, l, s, c, u, p) {
    var o, m, f, v, g, y = i && i.__k || ee, a = e.length;
    for (t.__d = c,
    ue(t, e, y),
    c = t.__d,
    o = 0; o < a; o++)
        (f = t.__k[o]) != null && typeof f != "boolean" && typeof f != "function" && (m = f.__i === -1 ? T : y[f.__i] || T,
        f.__i = o,
        z(_, f, m, n, r, l, s, c, u, p),
        v = f.__e,
        f.ref && m.ref != f.ref && (m.ref && q(m.ref, null, f),
        p.push(f.ref, f.__c || v, f)),
        g == null && v != null && (g = v),
        65536 & f.__u || m.__k === f.__k ? c = oe(f, c, _) : typeof f.type == "function" && f.__d !== void 0 ? c = f.__d : v && (c = v.nextSibling),
        f.__d = void 0,
        f.__u &= -196609);
    t.__d = c,
    t.__e = g
}
function ue(_, e, t) {
    var i, n, r, l, s, c = e.length, u = t.length, p = u, o = 0;
    for (_.__k = [],
    i = 0; i < c; i++)
        l = i + o,
        (n = _.__k[i] = (n = e[i]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? U(null, n, null, null, null) : I(n) ? U(N, {
            children: n
        }, null, null, null) : n.constructor === void 0 && n.__b > 0 ? U(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = _,
        n.__b = _.__b + 1,
        s = ce(n, t, l, p),
        n.__i = s,
        r = null,
        s !== -1 && (p--,
        (r = t[s]) && (r.__u |= 131072)),
        r == null || r.__v === null ? (s == -1 && o--,
        typeof n.type != "function" && (n.__u |= 65536)) : s !== l && (s == l - 1 ? o = s - l : s == l + 1 ? o++ : s > l ? p > c - l ? o += s - l : o-- : s < l && o++,
        s !== i + o && (n.__u |= 65536))) : (r = t[l]) && r.key == null && r.__e && !(131072 & r.__u) && (r.__e == _.__d && (_.__d = C(r)),
        V(r, r, !1),
        t[l] = null,
        p--);
    if (p)
        for (i = 0; i < u; i++)
            (r = t[i]) != null && !(131072 & r.__u) && (r.__e == _.__d && (_.__d = C(r)),
            V(r, r))
}
function oe(_, e, t) {
    var i, n;
    if (typeof _.type == "function") {
        for (i = _.__k,
        n = 0; i && n < i.length; n++)
            i[n] && (i[n].__ = _,
            e = oe(i[n], e, t));
        return e
    }
    _.__e != e && (e && _.type && !t.contains(e) && (e = C(_)),
    t.insertBefore(_.__e, e || null),
    e = _.__e);
    do
        e = e && e.nextSibling;
    while (e != null && e.nodeType === 8);
    return e
}
function fe(_, e) {
    return e = e || [],
    _ == null || typeof _ == "boolean" || (I(_) ? _.some(function(t) {
        fe(t, e)
    }) : e.push(_)),
    e
}
function ce(_, e, t, i) {
    var n = _.key
      , r = _.type
      , l = t - 1
      , s = t + 1
      , c = e[t];
    if (c === null || c && n == c.key && r === c.type && !(131072 & c.__u))
        return t;
    if (i > (c != null && !(131072 & c.__u) ? 1 : 0))
        for (; l >= 0 || s < e.length; ) {
            if (l >= 0) {
                if ((c = e[l]) && !(131072 & c.__u) && n == c.key && r === c.type)
                    return l;
                l--
            }
            if (s < e.length) {
                if ((c = e[s]) && !(131072 & c.__u) && n == c.key && r === c.type)
                    return s;
                s++
            }
        }
    return -1
}
function K(_, e, t) {
    e[0] === "-" ? _.setProperty(e, t ?? "") : _[e] = t == null ? "" : typeof t != "number" || le.test(e) ? t : t + "px"
}
function W(_, e, t, i, n) {
    var r;
    e: if (e === "style")
        if (typeof t == "string")
            _.style.cssText = t;
        else {
            if (typeof i == "string" && (_.style.cssText = i = ""),
            i)
                for (e in i)
                    t && e in t || K(_.style, e, "");
            if (t)
                for (e in t)
                    i && t[e] === i[e] || K(_.style, e, t[e])
        }
    else if (e[0] === "o" && e[1] === "n")
        r = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1")),
        e = e.toLowerCase()in _ || e === "onFocusOut" || e === "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2),
        _.l || (_.l = {}),
        _.l[e + r] = t,
        t ? i ? t.u = i.u : (t.u = j,
        _.addEventListener(e, r ? O : $, r)) : _.removeEventListener(e, r ? O : $, r);
    else {
        if (n == "http://www.w3.org/2000/svg")
            e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in _)
            try {
                _[e] = t ?? "";
                break e
            } catch {}
        typeof t == "function" || (t == null || t === !1 && e[4] !== "-" ? _.removeAttribute(e) : _.setAttribute(e, e == "popover" && t == 1 ? "" : t))
    }
}
function Q(_) {
    return function(e) {
        if (this.l) {
            var t = this.l[e.type + _];
            if (e.t == null)
                e.t = j++;
            else if (e.t < t.u)
                return;
            return t(h.event ? h.event(e) : e)
        }
    }
}
function z(_, e, t, i, n, r, l, s, c, u) {
    var p, o, m, f, v, g, y, a, d, P, w, D, S, G, E, A, k = e.type;
    if (e.constructor !== void 0)
        return null;
    128 & t.__u && (c = !!(32 & t.__u),
    r = [s = e.__e = t.__e]),
    (p = h.__b) && p(e);
    e: if (typeof k == "function")
        try {
            if (a = e.props,
            d = "prototype"in k && k.prototype.render,
            P = (p = k.contextType) && i[p.__c],
            w = p ? P ? P.props.value : p.__ : i,
            t.__c ? y = (o = e.__c = t.__c).__ = o.__E : (d ? e.__c = o = new k(a,w) : (e.__c = o = new F(a,w),
            o.constructor = k,
            o.render = ae),
            P && P.sub(o),
            o.props = a,
            o.state || (o.state = {}),
            o.context = w,
            o.__n = i,
            m = o.__d = !0,
            o.__h = [],
            o._sb = []),
            d && o.__s == null && (o.__s = o.state),
            d && k.getDerivedStateFromProps != null && (o.__s == o.state && (o.__s = b({}, o.__s)),
            b(o.__s, k.getDerivedStateFromProps(a, o.__s))),
            f = o.props,
            v = o.state,
            o.__v = e,
            m)
                d && k.getDerivedStateFromProps == null && o.componentWillMount != null && o.componentWillMount(),
                d && o.componentDidMount != null && o.__h.push(o.componentDidMount);
            else {
                if (d && k.getDerivedStateFromProps == null && a !== f && o.componentWillReceiveProps != null && o.componentWillReceiveProps(a, w),
                !o.__e && (o.shouldComponentUpdate != null && o.shouldComponentUpdate(a, o.__s, w) === !1 || e.__v === t.__v)) {
                    for (e.__v !== t.__v && (o.props = a,
                    o.state = o.__s,
                    o.__d = !1),
                    e.__e = t.__e,
                    e.__k = t.__k,
                    e.__k.forEach(function(L) {
                        L && (L.__ = e)
                    }),
                    D = 0; D < o._sb.length; D++)
                        o.__h.push(o._sb[D]);
                    o._sb = [],
                    o.__h.length && l.push(o);
                    break e
                }
                o.componentWillUpdate != null && o.componentWillUpdate(a, o.__s, w),
                d && o.componentDidUpdate != null && o.__h.push(function() {
                    o.componentDidUpdate(f, v, g)
                })
            }
            if (o.context = w,
            o.props = a,
            o.__P = _,
            o.__e = !1,
            S = h.__r,
            G = 0,
            d) {
                for (o.state = o.__s,
                o.__d = !1,
                S && S(e),
                p = o.render(o.props, o.state, o.context),
                E = 0; E < o._sb.length; E++)
                    o.__h.push(o._sb[E]);
                o._sb = []
            } else
                do
                    o.__d = !1,
                    S && S(e),
                    p = o.render(o.props, o.state, o.context),
                    o.state = o.__s;
                while (o.__d && ++G < 25);
            o.state = o.__s,
            o.getChildContext != null && (i = b(b({}, i), o.getChildContext())),
            d && !m && o.getSnapshotBeforeUpdate != null && (g = o.getSnapshotBeforeUpdate(f, v)),
            ne(_, I(A = p != null && p.type === N && p.key == null ? p.props.children : p) ? A : [A], e, t, i, n, r, l, s, c, u),
            o.base = e.__e,
            e.__u &= -161,
            o.__h.length && l.push(o),
            y && (o.__E = o.__ = null)
        } catch (L) {
            if (e.__v = null,
            c || r != null) {
                for (e.__u |= c ? 160 : 32; s && s.nodeType === 8 && s.nextSibling; )
                    s = s.nextSibling;
                r[r.indexOf(s)] = null,
                e.__e = s
            } else
                e.__e = t.__e,
                e.__k = t.__k;
            h.__e(L, e, t)
        }
    else
        r == null && e.__v === t.__v ? (e.__k = t.__k,
        e.__e = t.__e) : e.__e = pe(t.__e, e, t, i, n, r, l, c, u);
    (p = h.diffed) && p(e)
}
function re(_, e, t) {
    e.__d = void 0;
    for (var i = 0; i < t.length; i++)
        q(t[i], t[++i], t[++i]);
    h.__c && h.__c(e, _),
    _.some(function(n) {
        try {
            _ = n.__h,
            n.__h = [],
            _.some(function(r) {
                r.call(n)
            })
        } catch (r) {
            h.__e(r, n.__v)
        }
    })
}
function pe(_, e, t, i, n, r, l, s, c) {
    var u, p, o, m, f, v, g, y = t.props, a = e.props, d = e.type;
    if (d === "svg" ? n = "http://www.w3.org/2000/svg" : d === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"),
    r != null) {
        for (u = 0; u < r.length; u++)
            if ((f = r[u]) && "setAttribute"in f == !!d && (d ? f.localName === d : f.nodeType === 3)) {
                _ = f,
                r[u] = null;
                break
            }
    }
    if (_ == null) {
        if (d === null)
            return document.createTextNode(a);
        _ = document.createElementNS(n, d, a.is && a),
        r = null,
        s = !1
    }
    if (d === null)
        y === a || s && _.data === a || (_.data = a);
    else {
        if (r = r && M.call(_.childNodes),
        y = t.props || T,
        !s && r != null)
            for (y = {},
            u = 0; u < _.attributes.length; u++)
                y[(f = _.attributes[u]).name] = f.value;
        for (u in y)
            if (f = y[u],
            u != "children") {
                if (u == "dangerouslySetInnerHTML")
                    o = f;
                else if (u !== "key" && !(u in a)) {
                    if (u == "value" && "defaultValue"in a || u == "checked" && "defaultChecked"in a)
                        continue;
                    W(_, u, null, f, n)
                }
            }
        for (u in a)
            f = a[u],
            u == "children" ? m = f : u == "dangerouslySetInnerHTML" ? p = f : u == "value" ? v = f : u == "checked" ? g = f : u === "key" || s && typeof f != "function" || y[u] === f || W(_, u, f, y[u], n);
        if (p)
            s || o && (p.__html === o.__html || p.__html === _.innerHTML) || (_.innerHTML = p.__html),
            e.__k = [];
        else if (o && (_.innerHTML = ""),
        ne(_, I(m) ? m : [m], e, t, i, d === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, r, l, r ? r[0] : t.__k && C(t, 0), s, c),
        r != null)
            for (u = r.length; u--; )
                r[u] != null && _e(r[u]);
        s || (u = "value",
        v !== void 0 && (v !== _[u] || d === "progress" && !v || d === "option" && v !== y[u]) && W(_, u, v, y[u], n),
        u = "checked",
        g !== void 0 && g !== _[u] && W(_, u, g, y[u], n))
    }
    return _
}
function q(_, e, t) {
    try {
        if (typeof _ == "function") {
            var i = typeof _.__u == "function";
            i && _.__u(),
            i && e == null || (_.__u = _(e))
        } else
            _.current = e
    } catch (n) {
        h.__e(n, t)
    }
}
function V(_, e, t) {
    var i, n;
    if (h.unmount && h.unmount(_),
    (i = _.ref) && (i.current && i.current !== _.__e || q(i, null, e)),
    (i = _.__c) != null) {
        if (i.componentWillUnmount)
            try {
                i.componentWillUnmount()
            } catch (r) {
                h.__e(r, e)
            }
        i.base = i.__P = null
    }
    if (i = _.__k)
        for (n = 0; n < i.length; n++)
            i[n] && V(i[n], e, t || typeof _.type != "function");
    t || _.__e == null || _e(_.__e),
    _.__c = _.__ = _.__e = _.__d = void 0
}
function ae(_, e, t) {
    return this.constructor(_, t)
}
function de(_, e, t) {
    var i, n, r, l;
    h.__ && h.__(_, e),
    n = (i = typeof t == "function") ? null : t && t.__k || e.__k,
    r = [],
    l = [],
    z(e, _ = (!i && t || e).__k = se(N, null, [_]), n || T, T, e.namespaceURI, !i && t ? [t] : n ? null : e.firstChild ? M.call(e.childNodes) : null, r, !i && t ? t : n ? n.__e : e.firstChild, i, l),
    re(r, _, l)
}
function he(_, e) {
    de(_, e, he)
}
function ye(_, e, t) {
    var i, n, r, l, s = b({}, _.props);
    for (r in _.type && _.type.defaultProps && (l = _.type.defaultProps),
    e)
        r == "key" ? i = e[r] : r == "ref" ? n = e[r] : s[r] = e[r] === void 0 && l !== void 0 ? l[r] : e[r];
    return arguments.length > 2 && (s.children = arguments.length > 3 ? M.call(arguments, 2) : t),
    U(_.type, s, i || _.key, n || _.ref, null)
}
function me(_, e) {
    var t = {
        __c: e = "__cC" + Z++,
        __: _,
        Consumer: function(i, n) {
            return i.children(n)
        },
        Provider: function(i) {
            var n, r;
            return this.getChildContext || (n = [],
            (r = {})[e] = this,
            this.getChildContext = function() {
                return r
            }
            ,
            this.componentWillUnmount = function() {
                n = null
            }
            ,
            this.shouldComponentUpdate = function(l) {
                this.props.value !== l.value && n.some(function(s) {
                    s.__e = !0,
                    B(s)
                })
            }
            ,
            this.sub = function(l) {
                n.push(l);
                var s = l.componentWillUnmount;
                l.componentWillUnmount = function() {
                    n && n.splice(n.indexOf(l), 1),
                    s && s.call(l)
                }
            }
            ),
            i.children
        }
    };
    return t.Provider.__ = t.Consumer.contextType = t
}
M = ee.slice,
h = {
    __e: function(_, e, t, i) {
        for (var n, r, l; e = e.__; )
            if ((n = e.__c) && !n.__)
                try {
                    if ((r = n.constructor) && r.getDerivedStateFromError != null && (n.setState(r.getDerivedStateFromError(_)),
                    l = n.__d),
                    n.componentDidCatch != null && (n.componentDidCatch(_, i || {}),
                    l = n.__d),
                    l)
                        return n.__E = n
                } catch (s) {
                    _ = s
                }
        throw _
    }
},
X = 0,
ie = function(_) {
    return _ != null && _.constructor == null
}
,
F.prototype.setState = function(_, e) {
    var t;
    t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({}, this.state),
    typeof _ == "function" && (_ = _(b({}, t), this.props)),
    _ && b(t, _),
    _ != null && this.__v && (e && this._sb.push(e),
    B(this))
}
,
F.prototype.forceUpdate = function(_) {
    this.__v && (this.__e = !0,
    _ && this.__h.push(_),
    B(this))
}
,
F.prototype.render = N,
x = [],
Y = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
R = function(_, e) {
    return _.__v.__b - e.__v.__b
}
,
H.__r = 0,
j = 0,
$ = Q(!1),
O = Q(!0),
Z = 0;
export {F as Component, N as Fragment, ye as cloneElement, me as createContext, se as createElement, ve as createRef, se as h, he as hydrate, ie as isValidElement, h as options, de as render, fe as toChildArray};
//# sourceMappingURL=preact.mjs.map
