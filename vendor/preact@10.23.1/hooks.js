/* esm.sh - esbuild bundle(preact@10.23.1/hooks) es2022 production */
import {options as V} from "./preact.mjs";
var c, r, d, b, v = 0, x = [], o = V, g = o.__b, C = o.__r, A = o.diffed, D = o.__c, F = o.unmount, k = o.__;
function l(t, _) {
    o.__h && o.__h(r, t, v || _),
    v = 0;
    var u = r.__H || (r.__H = {
        __: [],
        __h: []
    });
    return t >= u.__.length && u.__.push({}),
    u.__[t]
}
function B(t) {
    return v = 1,
    I(U, t)
}
function I(t, _, u) {
    var n = l(c++, 2);
    if (n.t = t,
    !n.__c && (n.__ = [u ? u(_) : U(void 0, _), function(a) {
        var f = n.__N ? n.__N[0] : n.__[0]
          , s = n.t(f, a);
        f !== s && (n.__N = [s, n.__[1]],
        n.__c.setState({}))
    }
    ],
    n.__c = r,
    !r.u)) {
        var i = function(a, f, s) {
            if (!n.__c.__H)
                return !0;
            var m = n.__c.__H.__.filter(function(e) {
                return !!e.__c
            });
            if (m.every(function(e) {
                return !e.__N
            }))
                return !h || h.call(this, a, f, s);
            var N = !1;
            return m.forEach(function(e) {
                if (e.__N) {
                    var P = e.__[0];
                    e.__ = e.__N,
                    e.__N = void 0,
                    P !== e.__[0] && (N = !0)
                }
            }),
            !(!N && n.__c.props === a) && (!h || h.call(this, a, f, s))
        };
        r.u = !0;
        var h = r.shouldComponentUpdate
          , y = r.componentWillUpdate;
        r.componentWillUpdate = function(a, f, s) {
            if (this.__e) {
                var m = h;
                h = void 0,
                i(a, f, s),
                h = m
            }
            y && y.call(this, a, f, s)
        }
        ,
        r.shouldComponentUpdate = i
    }
    return n.__N || n.__
}
function w(t, _) {
    var u = l(c++, 3);
    !o.__s && E(u.__H, _) && (u.__ = t,
    u.i = _,
    r.__H.__h.push(u))
}
function R(t, _) {
    var u = l(c++, 4);
    !o.__s && E(u.__H, _) && (u.__ = t,
    u.i = _,
    r.__h.push(u))
}
function z(t) {
    return v = 5,
    T(function() {
        return {
            current: t
        }
    }, [])
}
function L(t, _, u) {
    v = 6,
    R(function() {
        return typeof t == "function" ? (t(_()),
        function() {
            return t(null)
        }
        ) : t ? (t.current = _(),
        function() {
            return t.current = null
        }
        ) : void 0
    }, u == null ? u : u.concat(t))
}
function T(t, _) {
    var u = l(c++, 7);
    return E(u.__H, _) && (u.__ = t(),
    u.__H = _,
    u.__h = t),
    u.__
}
function M(t, _) {
    return v = 8,
    T(function() {
        return t
    }, _)
}
function G(t) {
    var _ = r.context[t.__c]
      , u = l(c++, 9);
    return u.c = t,
    _ ? (u.__ == null && (u.__ = !0,
    _.sub(r)),
    _.props.value) : t.__
}
function J(t, _) {
    o.useDebugValue && o.useDebugValue(_ ? _(t) : t)
}
function K(t) {
    var _ = l(c++, 10)
      , u = B();
    return _.__ = t,
    r.componentDidCatch || (r.componentDidCatch = function(n, i) {
        _.__ && _.__(n, i),
        u[1](n)
    }
    ),
    [u[0], function() {
        u[1](void 0)
    }
    ]
}
function O() {
    var t = l(c++, 11);
    if (!t.__) {
        for (var _ = r.__v; _ !== null && !_.__m && _.__ !== null; )
            _ = _.__;
        var u = _.__m || (_.__m = [0, 0]);
        t.__ = "P" + u[0] + "-" + u[1]++
    }
    return t.__
}
function S() {
    for (var t; t = x.shift(); )
        if (t.__P && t.__H)
            try {
                t.__H.__h.forEach(p),
                t.__H.__h.forEach(H),
                t.__H.__h = []
            } catch (_) {
                t.__H.__h = [],
                o.__e(_, t.__v)
            }
}
o.__b = function(t) {
    r = null,
    g && g(t)
}
,
o.__ = function(t, _) {
    t && _.__k && _.__k.__m && (t.__m = _.__k.__m),
    k && k(t, _)
}
,
o.__r = function(t) {
    C && C(t),
    c = 0;
    var _ = (r = t.__c).__H;
    _ && (d === r ? (_.__h = [],
    r.__h = [],
    _.__.forEach(function(u) {
        u.__N && (u.__ = u.__N),
        u.i = u.__N = void 0
    })) : (_.__h.forEach(p),
    _.__h.forEach(H),
    _.__h = [],
    c = 0)),
    d = r
}
,
o.diffed = function(t) {
    A && A(t);
    var _ = t.__c;
    _ && _.__H && (_.__H.__h.length && (x.push(_) !== 1 && b === o.requestAnimationFrame || ((b = o.requestAnimationFrame) || W)(S)),
    _.__H.__.forEach(function(u) {
        u.i && (u.__H = u.i),
        u.i = void 0
    })),
    d = r = null
}
,
o.__c = function(t, _) {
    _.some(function(u) {
        try {
            u.__h.forEach(p),
            u.__h = u.__h.filter(function(n) {
                return !n.__ || H(n)
            })
        } catch (n) {
            _.some(function(i) {
                i.__h && (i.__h = [])
            }),
            _ = [],
            o.__e(n, u.__v)
        }
    }),
    D && D(t, _)
}
,
o.unmount = function(t) {
    F && F(t);
    var _, u = t.__c;
    u && u.__H && (u.__H.__.forEach(function(n) {
        try {
            p(n)
        } catch (i) {
            _ = i
        }
    }),
    u.__H = void 0,
    _ && o.__e(_, u.__v))
}
;
var q = typeof requestAnimationFrame == "function";
function W(t) {
    var _, u = function() {
        clearTimeout(n),
        q && cancelAnimationFrame(_),
        setTimeout(t)
    }, n = setTimeout(u, 100);
    q && (_ = requestAnimationFrame(u))
}
function p(t) {
    var _ = r
      , u = t.__c;
    typeof u == "function" && (t.__c = void 0,
    u()),
    r = _
}
function H(t) {
    var _ = r;
    t.__c = t.__(),
    r = _
}
function E(t, _) {
    return !t || t.length !== _.length || _.some(function(u, n) {
        return u !== t[n]
    })
}
function U(t, _) {
    return typeof _ == "function" ? _(t) : _
}
export {M as useCallback, G as useContext, J as useDebugValue, w as useEffect, K as useErrorBoundary, O as useId, L as useImperativeHandle, R as useLayoutEffect, T as useMemo, I as useReducer, z as useRef, B as useState};
//# sourceMappingURL=hooks.js.map
