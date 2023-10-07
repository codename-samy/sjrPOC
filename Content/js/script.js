if (function(e) {
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        var t = "left",
            i = "right",
            a = "up",
            n = "down",
            r = "in",
            o = "out",
            s = "none",
            l = "auto",
            d = "swipe",
            h = "pinch",
            p = "tap",
            c = "doubletap",
            u = "longtap",
            f = "horizontal",
            g = "vertical",
            v = "all",
            m = 10,
            w = "start",
            y = "move",
            _ = "end",
            b = "cancel",
            x = "ontouchstart" in window,
            T = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
            k = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            L = "TouchSwipe";
        e.fn.swipetp = function(O) {
            var S = e(this),
                P = S.data(L);
            if (P && "string" == typeof O) {
                if (P[O]) return P[O].apply(this, Array.prototype.slice.call(arguments, 1));
                e.error("Method " + O + " does not exist on jQuery.swipetp")
            } else if (!(P || "object" != typeof O && O)) return function(O) {
                !O || void 0 !== O.allowPageScroll || void 0 === O.swipe && void 0 === O.swipeStatus || (O.allowPageScroll = s);
                void 0 !== O.click && void 0 === O.tap && (O.tap = O.click);
                O || (O = {});
                return O = e.extend({}, e.fn.swipetp.defaults, O), this.each(function() {
                    var S = e(this),
                        P = S.data(L);
                    P || (P = new function(O, S) {
                        var P = x || k || !S.fallbackToMouseEvents,
                            C = P ? k ? T ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                            A = P ? k ? T ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                            z = P ? k ? T ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                            j = P ? null : "mouseleave",
                            M = k ? T ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                            I = 0,
                            R = null,
                            D = 0,
                            Q = 0,
                            F = 0,
                            H = 1,
                            E = 0,
                            W = 0,
                            N = null,
                            X = e(O),
                            V = "start",
                            Y = 0,
                            B = null,
                            q = 0,
                            U = 0,
                            G = 0,
                            Z = 0,
                            $ = 0,
                            K = null,
                            J = null;
                        try {
                            X.bind(C, ee), X.bind(M, ae)
                        } catch (t) {
                            e.error("events not supported " + C + "," + M + " on jQuery.swipetp")
                        }

                        function ee(r) {
                            if (!0 !== X.data(L + "_intouch") && !(e(r.target).closest(S.excludedElements, X).length > 0)) {
                                var o, s, l = r.originalEvent ? r.originalEvent : r,
                                    d = l.touches,
                                    h = d ? d[0] : l;
                                return V = w, d ? Y = d.length : r.preventDefault(), I = 0, R = null, W = null, D = 0, Q = 0, F = 0, H = 1, E = 0, B = function() {
                                    for (var e = [], t = 0; t <= 5; t++) e.push({
                                        start: {
                                            x: 0,
                                            y: 0
                                        },
                                        end: {
                                            x: 0,
                                            y: 0
                                        },
                                        identifier: 0
                                    });
                                    return e
                                }(), (s = {})[t] = Ce(t), s[i] = Ce(i), s[a] = Ce(a), s[n] = Ce(n), N = s, Te(), !d || Y === S.fingers || S.fingers === v || ue() ? (Oe(0, h), q = je(), 2 == Y && (Oe(1, d[1]), Q = F = ze(B[0].start, B[1].start)), (S.swipeStatus || S.pinchStatus) && (o = se(l, V))) : o = !1, !1 === o ? (se(l, V = b), o) : (S.hold && (J = setTimeout(e.proxy(function() {
                                    X.trigger("hold", [l.target]), S.hold && (o = S.hold.call(X, l, l.target))
                                }, this), S.longTapThreshold)), Le(!0), null)
                            }
                        }

                        function te(d) {
                            var h, p, c, u, m, w, x = d.originalEvent ? d.originalEvent : d;
                            if (V !== _ && V !== b && !ke()) {
                                var T, k, L, O, P, C, A, z, j, M, X, q, G = x.touches,
                                    Z = G ? G[0] : x,
                                    $ = Se(Z);
                                if (U = je(), G && (Y = G.length), S.hold && clearTimeout(J), V = y, 2 == Y && (0 == Q ? (Oe(1, G[1]), Q = F = ze(B[0].start, B[1].start)) : (Se(G[1]), F = ze(B[0].end, B[1].end), B[0].end, B[1].end, W = H < 1 ? o : r), H = (F / Q * 1).toFixed(2), E = Math.abs(Q - F)), Y === S.fingers || S.fingers === v || !G || ue()) {
                                    if (M = $.start, X = $.end, h = M, p = X, c = h.x - p.x, u = p.y - h.y, m = Math.atan2(u, c), w = Math.round(180 * m / Math.PI), w < 0 && (w = 360 - Math.abs(w)), q = w, function(e, r) {
                                            if (!1 !== S.preventDefaultEvents)
                                                if (S.allowPageScroll === s) e.preventDefault();
                                                else {
                                                    var o = S.allowPageScroll === l;
                                                    switch (r) {
                                                        case t:
                                                            (S.swipeLeft && o || !o && S.allowPageScroll != f) && e.preventDefault();
                                                            break;
                                                        case i:
                                                            (S.swipeRight && o || !o && S.allowPageScroll != f) && e.preventDefault();
                                                            break;
                                                        case a:
                                                            (S.swipeUp && o || !o && S.allowPageScroll != g) && e.preventDefault();
                                                            break;
                                                        case n:
                                                            (S.swipeDown && o || !o && S.allowPageScroll != g) && e.preventDefault()
                                                    }
                                                }
                                        }(d, R = q <= 45 && q >= 0 ? t : q <= 360 && q >= 315 ? t : q >= 135 && q <= 225 ? i : q > 45 && q < 135 ? n : a), z = $.start, j = $.end, I = Math.round(Math.sqrt(Math.pow(j.x - z.x, 2) + Math.pow(j.y - z.y, 2))), D = Ae(), C = R, A = I, A = Math.max(A, Pe(C)), N[C].distance = A, (S.swipeStatus || S.pinchStatus) && (T = se(x, V)), !S.triggerOnTouchEnd || S.triggerOnTouchLeave) {
                                        var K = !0;
                                        if (S.triggerOnTouchLeave) {
                                            var ee = {
                                                left: (P = (O = e(O = this)).offset()).left,
                                                right: P.left + O.outerWidth(),
                                                top: P.top,
                                                bottom: P.top + O.outerHeight()
                                            };
                                            k = $.end, L = ee, K = k.x > L.left && k.x < L.right && k.y > L.top && k.y < L.bottom
                                        }!S.triggerOnTouchEnd && K ? V = oe(y) : S.triggerOnTouchLeave && !K && (V = oe(_)), V != b && V != _ || se(x, V)
                                    }
                                } else se(x, V = b);
                                !1 === T && se(x, V = b)
                            }
                        }

                        function ie(e) {
                            var t = e.originalEvent ? e.originalEvent : e,
                                i = t.touches;
                            return i && i.length ? (G = je(), Z = event.touches.length + 1, !0) : (ke() && (Y = Z), U = je(), D = Ae(), he() || !de() ? se(t, V = b) : S.triggerOnTouchEnd || 0 == S.triggerOnTouchEnd && V === y ? (e.preventDefault(), se(t, V = _)) : !S.triggerOnTouchEnd && _e() ? le(t, V = _, p) : V === y && se(t, V = b), Le(!1), null)
                        }

                        function ae() {
                            Y = 0, U = 0, q = 0, Q = 0, F = 0, H = 1, Te(), Le(!1)
                        }

                        function ne(e) {
                            var t = e.originalEvent ? e.originalEvent : e;
                            S.triggerOnTouchLeave && (V = oe(_), se(t, V))
                        }

                        function re() {
                            X.unbind(C, ee), X.unbind(M, ae), X.unbind(A, te), X.unbind(z, ie), j && X.unbind(j, ne), Le(!1)
                        }

                        function oe(e) {
                            var t = e,
                                i = pe(),
                                a = de(),
                                n = he();
                            return !i || n ? t = b : !a || e != y || S.triggerOnTouchEnd && !S.triggerOnTouchLeave ? !a && e == _ && S.triggerOnTouchLeave && (t = b) : t = _, t
                        }

                        function se(e, t) {
                            var i, a = e.touches;
                            return me() || ve() || fe() || ue() ? ((me() || ve()) && (i = le(e, t, d)), (fe() || ue()) && !1 !== i && (i = le(e, t, h))) : xe() && be() && !1 !== i ? i = le(e, t, c) : D > S.longTapThreshold && I < m && S.longTap && !1 !== i ? i = le(e, t, u) : 1 !== Y && x || !(isNaN(I) || I < S.threshold) || !_e() || !1 === i || (i = le(e, t, p)), t === b && ae(), t === _ && (a && a.length || ae()), i
                        }

                        function le(s, l, f) {
                            var g;
                            if (f == d) {
                                if (X.trigger("swipeStatus", [l, R || null, I || 0, D || 0, Y, B]), S.swipeStatus && !1 === (g = S.swipeStatus.call(X, s, l, R || null, I || 0, D || 0, Y, B))) return !1;
                                if (l == _ && ge()) {
                                    if (X.trigger("swipe", [R, I, D, Y, B]), S.swipe && !1 === (g = S.swipe.call(X, s, R, I, D, Y, B))) return !1;
                                    switch (R) {
                                        case t:
                                            X.trigger("swipeLeft", [R, I, D, Y, B]), S.swipeLeft && (g = S.swipeLeft.call(X, s, R, I, D, Y, B));
                                            break;
                                        case i:
                                            X.trigger("swipeRight", [R, I, D, Y, B]), S.swipeRight && (g = S.swipeRight.call(X, s, R, I, D, Y, B));
                                            break;
                                        case a:
                                            X.trigger("swipeUp", [R, I, D, Y, B]), S.swipeUp && (g = S.swipeUp.call(X, s, R, I, D, Y, B));
                                            break;
                                        case n:
                                            X.trigger("swipeDown", [R, I, D, Y, B]), S.swipeDown && (g = S.swipeDown.call(X, s, R, I, D, Y, B))
                                    }
                                }
                            }
                            if (f == h) {
                                if (X.trigger("pinchStatus", [l, W || null, E || 0, D || 0, Y, H, B]), S.pinchStatus && !1 === (g = S.pinchStatus.call(X, s, l, W || null, E || 0, D || 0, Y, H, B))) return !1;
                                if (l == _ && ce()) switch (W) {
                                    case r:
                                        X.trigger("pinchIn", [W || null, E || 0, D || 0, Y, H, B]), S.pinchIn && (g = S.pinchIn.call(X, s, W || null, E || 0, D || 0, Y, H, B));
                                        break;
                                    case o:
                                        X.trigger("pinchOut", [W || null, E || 0, D || 0, Y, H, B]), S.pinchOut && (g = S.pinchOut.call(X, s, W || null, E || 0, D || 0, Y, H, B))
                                }
                            }
                            return f == p ? l !== b && l !== _ || (clearTimeout(K), clearTimeout(J), be() && !xe() ? ($ = je(), K = setTimeout(e.proxy(function() {
                                $ = null, X.trigger("tap", [s.target]), S.tap && (g = S.tap.call(X, s, s.target))
                            }, this), S.doubleTapThreshold)) : ($ = null, X.trigger("tap", [s.target]), S.tap && (g = S.tap.call(X, s, s.target)))) : f == c ? l !== b && l !== _ || (clearTimeout(K), $ = null, X.trigger("doubletap", [s.target]), S.doubleTap && (g = S.doubleTap.call(X, s, s.target))) : f == u && (l !== b && l !== _ || (clearTimeout(K), $ = null, X.trigger("longtap", [s.target]), S.longTap && (g = S.longTap.call(X, s, s.target)))), g
                        }

                        function de() {
                            var e = !0;
                            return null !== S.threshold && (e = I >= S.threshold), e
                        }

                        function he() {
                            var e = !1;
                            return null !== S.cancelThreshold && null !== R && (e = Pe(R) - I >= S.cancelThreshold), e
                        }

                        function pe() {
                            return !(S.maxTimeThreshold && D >= S.maxTimeThreshold)
                        }

                        function ce() {
                            var e = we(),
                                t = ye(),
                                i = null === S.pinchThreshold || E >= S.pinchThreshold;
                            return e && t && i
                        }

                        function ue() {
                            return !!(S.pinchStatus || S.pinchIn || S.pinchOut)
                        }

                        function fe() {
                            return !(!ce() || !ue())
                        }

                        function ge() {
                            var e = pe(),
                                t = de(),
                                i = we(),
                                a = ye(),
                                n = he(),
                                r = !n && a && i && t && e;
                            return r
                        }

                        function ve() {
                            return !!(S.swipe || S.swipeStatus || S.swipeLeft || S.swipeRight || S.swipeUp || S.swipeDown)
                        }

                        function me() {
                            return !(!ge() || !ve())
                        }

                        function we() {
                            return Y === S.fingers || S.fingers === v || !x
                        }

                        function ye() {
                            return 0 !== B[0].end.x
                        }

                        function _e() {
                            return !!S.tap
                        }

                        function be() {
                            return !!S.doubleTap
                        }

                        function xe() {
                            if (null == $) return !1;
                            var e = je();
                            return be() && e - $ <= S.doubleTapThreshold
                        }

                        function Te() {
                            G = 0, Z = 0
                        }

                        function ke() {
                            var e = !1;
                            if (G) {
                                var t = je() - G;
                                t <= S.fingerReleaseThreshold && (e = !0)
                            }
                            return e
                        }

                        function Le(e) {
                            !0 === e ? (X.bind(A, te), X.bind(z, ie), j && X.bind(j, ne)) : (X.unbind(A, te, !1), X.unbind(z, ie, !1), j && X.unbind(j, ne, !1)), X.data(L + "_intouch", !0 === e)
                        }

                        function Oe(e, t) {
                            var i = void 0 !== t.identifier ? t.identifier : 0;
                            return B[e].identifier = i, B[e].start.x = B[e].end.x = t.pageX || t.clientX, B[e].start.y = B[e].end.y = t.pageY || t.clientY, B[e]
                        }

                        function Se(e) {
                            var t = void 0 !== e.identifier ? e.identifier : 0,
                                i = function(e) {
                                    for (var t = 0; t < B.length; t++)
                                        if (B[t].identifier == e) return B[t]
                                }(t);
                            return i.end.x = e.pageX || e.clientX, i.end.y = e.pageY || e.clientY, i
                        }

                        function Pe(e) {
                            if (N[e]) return N[e].distance
                        }

                        function Ce(e) {
                            return {
                                direction: e,
                                distance: 0
                            }
                        }

                        function Ae() {
                            return U - q
                        }

                        function ze(e, t) {
                            var i = Math.abs(e.x - t.x),
                                a = Math.abs(e.y - t.y);
                            return Math.round(Math.sqrt(i * i + a * a))
                        }

                        function je() {
                            var e = new Date;
                            return e.getTime()
                        }
                        this.enable = function() {
                            return X.bind(C, ee), X.bind(M, ae), X
                        }, this.disable = function() {
                            return re(), X
                        }, this.destroy = function() {
                            re(), X.data(L, null), X = null
                        }, this.option = function(t, i) {
                            if (void 0 !== S[t]) {
                                if (void 0 === i) return S[t];
                                S[t] = i
                            } else e.error("Option " + t + " does not exist on jQuery.swipetp.options");
                            return null
                        }
                    }(this, O), S.data(L, P))
                })
            }.apply(this, arguments);
            return S
        }, e.fn.swipetp.version = "1.6.9", e.fn.swipetp.defaults = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null,
            pinchThreshold: 20,
            maxTimeThreshold: null,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            pinchIn: null,
            pinchOut: null,
            pinchStatus: null,
            click: null,
            tap: null,
            doubleTap: null,
            longTap: null,
            hold: null,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: "label, button, input, select, textarea, a, .noSwipe",
            preventDefaultEvents: !0
        }, e.fn.swipetp.phases = {
            PHASE_START: w,
            PHASE_MOVE: y,
            PHASE_END: _,
            PHASE_CANCEL: b
        }, e.fn.swipetp.directions = {
            LEFT: t,
            RIGHT: i,
            UP: a,
            DOWN: n,
            IN: r,
            OUT: o
        }, e.fn.swipetp.pageScroll = {
            NONE: s,
            HORIZONTAL: f,
            VERTICAL: g,
            AUTO: l
        }, e.fn.swipetp.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            ALL: v
        }
    }), void 0 === console) {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {}
}
if (1 == window.tplogs) try {
    console.groupCollapsed("ThemePunch GreenSocks Logs")
} catch (e) {}
var oldgs = window.GreenSockGlobals;
oldgs_queue = window._gsQueue;
var punchgs = window.GreenSockGlobals = {};
if (1 == window.tplogs) try {
    console.info("Build GreenSock SandBox for ThemePunch Plugins"), console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin")
} catch (e) {}! function(e, t) {
    "use strict";
    var i, a, n = e.GreenSockGlobals = e.GreenSockGlobals || e;
    if (!n.TweenLite) {
        var r, o, s, l, d, h = function(e) {
                var t, i = e.split("."),
                    a = n;
                for (t = 0; i.length > t; t++) a[i[t]] = a = a[i[t]] || {};
                return a
            },
            p = h("com.greensock"),
            c = 1e-10,
            u = function(e) {
                var t, i = [],
                    a = e.length;
                for (t = 0; t !== a; i.push(e[t++]));
                return i
            },
            f = function() {},
            g = (i = Object.prototype.toString, a = i.call([]), function(e) {
                return null != e && (e instanceof Array || "object" == typeof e && !!e.push && i.call(e) === a)
            }),
            v = {},
            m = function(t, i, a, r) {
                this.sc = v[t] ? v[t].sc : [], v[t] = this, this.gsClass = null, this.func = a;
                var o = [];
                this.check = function(s) {
                    for (var l, d, p, c, u, f = i.length, g = f; --f > -1;)(l = v[i[f]] || new m(i[f], [])).gsClass ? (o[f] = l.gsClass, g--) : s && l.sc.push(this);
                    if (0 === g && a)
                        for (d = ("com.greensock." + t).split("."), p = d.pop(), c = h(d.join("."))[p] = this.gsClass = a.apply(a, o), r && (n[p] = c, u = "undefined" != typeof module && module.exports, !u && "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + t.split(".").pop(), [], function() {
                                return c
                            }) : "TweenLite" === t && u && (module.exports = c)), f = 0; this.sc.length > f; f++) this.sc[f].check()
                }, this.check(!0)
            },
            w = e._gsDefine = function(e, t, i, a) {
                return new m(e, t, i, a)
            },
            y = p._class = function(e, t, i) {
                return t = t || function() {}, w(e, [], function() {
                    return t
                }, i), t
            };
        w.globals = n;
        var _ = [0, 0, 1, 1],
            b = [],
            x = y("easing.Ease", function(e, t, i, a) {
                this._func = e, this._type = i || 0, this._power = a || 0, this._params = t ? _.concat(t) : _
            }, !0),
            T = x.map = {},
            k = x.register = function(e, t, i, a) {
                for (var n, r, o, s, l = t.split(","), d = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --d > -1;)
                    for (r = l[d], n = a ? y("easing." + r, null, !0) : p.easing[r] || {}, o = h.length; --o > -1;) s = h[o], T[r + "." + s] = T[s + r] = n[s] = e.getRatio ? e : e[s] || new e
            };
        for ((s = x.prototype)._calcEnd = !1, s.getRatio = function(e) {
                if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                var t = this._type,
                    i = this._power,
                    a = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
                return 1 === i ? a *= a : 2 === i ? a *= a * a : 3 === i ? a *= a * a * a : 4 === i && (a *= a * a * a * a), 1 === t ? 1 - a : 2 === t ? a : .5 > e ? a / 2 : 1 - a / 2
            }, o = (r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --o > -1;) s = r[o] + ",Power" + o, k(new x(null, null, 1, o), s, "easeOut", !0), k(new x(null, null, 2, o), s, "easeIn" + (0 === o ? ",easeNone" : "")), k(new x(null, null, 3, o), s, "easeInOut");
        T.linear = p.easing.Linear.easeIn, T.swing = p.easing.Quad.easeInOut;
        var L = y("events.EventDispatcher", function(e) {
            this._listeners = {}, this._eventTarget = e || this
        });
        (s = L.prototype).addEventListener = function(e, t, i, a, n) {
            n = n || 0;
            var r, o, s = this._listeners[e],
                h = 0;
            for (null == s && (this._listeners[e] = s = []), o = s.length; --o > -1;) r = s[o], r.c === t && r.s === i ? s.splice(o, 1) : 0 === h && n > r.pr && (h = o + 1);
            s.splice(h, 0, {
                c: t,
                s: i,
                up: a,
                pr: n
            }), this !== l || d || l.wake()
        }, s.removeEventListener = function(e, t) {
            var i, a = this._listeners[e];
            if (a)
                for (i = a.length; --i > -1;)
                    if (a[i].c === t) return void a.splice(i, 1)
        }, s.dispatchEvent = function(e) {
            var t, i, a, n = this._listeners[e];
            if (n)
                for (t = n.length, i = this._eventTarget; --t > -1;) a = n[t], a && (a.up ? a.c.call(a.s || i, {
                    type: e,
                    target: i
                }) : a.c.call(a.s || i))
        };
        var O = e.requestAnimationFrame,
            S = e.cancelAnimationFrame,
            P = Date.now || function() {
                return (new Date).getTime()
            },
            C = P();
        for (o = (r = ["ms", "moz", "webkit", "o"]).length; --o > -1 && !O;) O = e[r[o] + "RequestAnimationFrame"], S = e[r[o] + "CancelAnimationFrame"] || e[r[o] + "CancelRequestAnimationFrame"];
        y("Ticker", function(e, t) {
            var i, a, n, r, o, s = this,
                h = P(),
                p = !1 !== t && O,
                c = 500,
                u = 33,
                g = function(e) {
                    var t, l, d = P() - C;
                    d > c && (h += d - u), C += d, s.time = (C - h) / 1e3, t = s.time - o, (!i || t > 0 || !0 === e) && (s.frame++, o += t + (t >= r ? .004 : r - t), l = !0), !0 !== e && (n = a(g)), l && s.dispatchEvent("tick")
                };
            L.call(s), s.time = s.frame = 0, s.tick = function() {
                g(!0)
            }, s.lagSmoothing = function(e, t) {
                c = e || 1e10, u = Math.min(t, c, 0)
            }, s.sleep = function() {
                null != n && (p && S ? S(n) : clearTimeout(n), a = f, n = null, s === l && (d = !1))
            }, s.wake = function() {
                null !== n ? s.sleep() : s.frame > 10 && (C = P() - c + 5), a = 0 === i ? f : p && O ? O : function(e) {
                    return setTimeout(e, 0 | 1e3 * (o - s.time) + 1)
                }, s === l && (d = !0), g(2)
            }, s.fps = function(e) {
                return arguments.length ? (r = 1 / ((i = e) || 60), o = this.time + r, void s.wake()) : i
            }, s.useRAF = function(e) {
                return arguments.length ? (s.sleep(), p = e, void s.fps(i)) : p
            }, s.fps(e), setTimeout(function() {
                p && 5 > s.frame && s.useRAF(!1)
            }, 1500)
        }), (s = p.Ticker.prototype = new p.events.EventDispatcher).constructor = p.Ticker;
        var A = y("core.Animation", function(e, t) {
            if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = !0 === t.immediateRender, this.data = t.data, this._reversed = !0 === t.reversed, U) {
                d || l.wake();
                var i = this.vars.useFrames ? q : U;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        l = A.ticker = new p.Ticker, (s = A.prototype)._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
        var z = function() {
            d && P() - C > 2e3 && l.wake(), setTimeout(z, 2e3)
        };
        z(), s.play = function(e, t) {
            return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
        }, s.pause = function(e, t) {
            return null != e && this.seek(e, t), this.paused(!0)
        }, s.resume = function(e, t) {
            return null != e && this.seek(e, t), this.paused(!1)
        }, s.seek = function(e, t) {
            return this.totalTime(Number(e), !1 !== t)
        }, s.restart = function(e, t) {
            return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, !1 !== t, !0)
        }, s.reverse = function(e, t) {
            return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
        }, s.render = function() {}, s.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, s.isActive = function() {
            var e, t = this._timeline,
                i = this._startTime;
            return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= i && i + this.totalDuration() / this._timeScale > e
        }, s._enabled = function(e, t) {
            return d || l.wake(), this._gc = !e, this._active = this.isActive(), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
        }, s._kill = function() {
            return this._enabled(!1, !1)
        }, s.kill = function(e, t) {
            return this._kill(e, t), this
        }, s._uncache = function(e) {
            for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
            return this
        }, s._swapSelfInParams = function(e) {
            for (var t = e.length, i = e.concat(); --t > -1;) "{self}" === e[t] && (i[t] = this);
            return i
        }, s._callback = function(e) {
            var t = this.vars;
            t[e].apply(t[e + "Scope"] || t.callbackScope || this, t[e + "Params"] || b)
        }, s.eventCallback = function(e, t, i, a) {
            if ("on" === (e || "").substr(0, 2)) {
                var n = this.vars;
                if (1 === arguments.length) return n[e];
                null == t ? delete n[e] : (n[e] = t, n[e + "Params"] = g(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[e + "Scope"] = a), "onUpdate" === e && (this._onUpdate = t)
            }
            return this
        }, s.delay = function(e) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
        }, s.duration = function(e) {
            return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, s.totalDuration = function(e) {
            return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
        }, s.time = function(e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
        }, s.totalTime = function(e, t, i) {
            if (d || l.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > e && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var a = this._totalDuration,
                        n = this._timeline;
                    if (e > a && !i && (e = a), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? a - e : e) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                        for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (R.length && Z(), this.render(e, t, !1), R.length && Z())
            }
            return this
        }, s.progress = s.totalProgress = function(e, t) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio
        }, s.startTime = function(e) {
            return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
        }, s.endTime = function(e) {
            return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
        }, s.timeScale = function(e) {
            if (!arguments.length) return this._timeScale;
            if (e = e || c, this._timeline && this._timeline.smoothChildTiming) {
                var t = this._pauseTime,
                    i = t || 0 === t ? t : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / e
            }
            return this._timeScale = e, this._uncache(!1)
        }, s.reversed = function(e) {
            return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, s.paused = function(e) {
            if (!arguments.length) return this._paused;
            var t, i, a = this._timeline;
            return e != this._paused && a && (d || e || l.wake(), i = (t = a.rawTime()) - this._pauseTime, !e && a.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== i && this._initted && this.duration() && (t = a.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
        };
        var j = y("core.SimpleTimeline", function(e) {
            A.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        (s = j.prototype = new A).constructor = j, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function(e, t) {
            var i, a;
            if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), i = this._last, this._sortChildren)
                for (a = e._startTime; i && i._startTime > a;) i = i._prev;
            return i ? (e._next = i._next, i._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = i, this._recent = e, this._timeline && this._uncache(!0), this
        }, s._remove = function(e, t) {
            return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, s.render = function(e, t, i) {
            var a, n = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = e; n;) a = n._next, (n._active || e >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = a
        }, s.rawTime = function() {
            return d || l.wake(), this._totalTime
        };
        var M = y("TweenLite", function(t, i, a) {
                if (A.call(this, i, a), this.render = M.prototype.render, null == t) throw "Cannot tween a null target.";
                this.target = t = "string" != typeof t ? t : M.selector(t) || t;
                var n, r, o, s = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? B[M.defaultOverwrite] : "number" == typeof l ? l >> 0 : B[l], (s || t instanceof Array || t.push && g(t)) && "number" != typeof t[0])
                    for (this._targets = o = u(t), this._propLookup = [], this._siblings = [], n = 0; o.length > n; n++) r = o[n], r ? "string" != typeof r ? r.length && r !== e && r[0] && (r[0] === e || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(n--, 1), this._targets = o = o.concat(u(r))) : (this._siblings[n] = $(r, this, !1), 1 === l && this._siblings[n].length > 1 && J(r, this, null, 1, this._siblings[n])) : (r = o[n--] = M.selector(r), "string" == typeof r && o.splice(n + 1, 1)) : o.splice(n--, 1);
                else this._propLookup = {}, this._siblings = $(t, this, !1), 1 === l && this._siblings.length > 1 && J(t, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -c, this.render(-this._delay))
            }, !0),
            I = function(t) {
                return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
            };
        (s = M.prototype = new A).constructor = M, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, M.version = "1.18.0", M.defaultEase = s._ease = new x(null, null, 1, 1), M.defaultOverwrite = "auto", M.ticker = l, M.autoSleep = 120, M.lagSmoothing = function(e, t) {
            l.lagSmoothing(e, t)
        }, M.selector = e.$ || e.jQuery || function(t) {
            var i = e.$ || e.jQuery;
            return i ? (M.selector = i, i(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
        };
        var R = [],
            D = {},
            Q = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            F = function(e) {
                for (var t, i = this._firstPT; i;) t = i.blob ? e ? this.join("") : this.start : i.c * e + i.s, i.r ? t = Math.round(t) : 1e-6 > t && t > -1e-6 && (t = 0), i.f ? i.fp ? i.t[i.p](i.fp, t) : i.t[i.p](t) : i.t[i.p] = t, i = i._next
            },
            H = function(e, t, i, a) {
                var n, r, o, s, l, d, h, p = [e, t],
                    c = 0,
                    u = "",
                    f = 0;
                for (p.start = e, i && (i(p), e = p[0], t = p[1]), p.length = 0, n = e.match(Q) || [], r = t.match(Q) || [], a && (a._next = null, a.blob = 1, p._firstPT = a), l = r.length, s = 0; l > s; s++) h = r[s], d = t.substr(c, t.indexOf(h, c) - c), u += d || !s ? d : ",", c += d.length, f ? f = (f + 1) % 5 : "rgba(" === d.substr(-5) && (f = 1), h === n[s] || s >= n.length ? u += h : (u && (p.push(u), u = ""), o = parseFloat(n[s]), p.push(o), p._firstPT = {
                    _next: p._firstPT,
                    t: p,
                    p: p.length - 1,
                    s: o,
                    c: ("=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * parseFloat(h.substr(2)) : parseFloat(h) - o) || 0,
                    f: 0,
                    r: f && 4 > f
                }), c += h.length;
                return (u += t.substr(c)) && p.push(u), p.setRatio = F, p
            },
            E = function(e, t, i, a, n, r, o, s) {
                var l, d = "get" === i ? e[t] : i,
                    h = typeof e[t],
                    p = "string" == typeof a && "=" === a.charAt(1),
                    c = {
                        t: e,
                        p: t,
                        s: d,
                        f: "function" === h,
                        pg: 0,
                        n: n || t,
                        r: r,
                        pr: 0,
                        c: p ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - d || 0
                    };
                return "number" !== h && ("function" === h && "get" === i && (l = t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3), c.s = d = o ? e[l](o) : e[l]()), "string" == typeof d && (o || isNaN(d)) ? (c.fp = o, c = {
                    t: H(d, a, s || M.defaultStringFilter, c),
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: n || t,
                    pr: 0
                }) : p || (c.c = parseFloat(a) - parseFloat(d) || 0)), c.c ? ((c._next = this._firstPT) && (c._next._prev = c), this._firstPT = c, c) : void 0
            },
            W = M._internals = {
                isArray: g,
                isSelector: I,
                lazyTweens: R,
                blobDif: H
            },
            N = M._plugins = {},
            X = W.tweenLookup = {},
            V = 0,
            Y = W.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1
            },
            B = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0
            },
            q = A._rootFramesTimeline = new j,
            U = A._rootTimeline = new j,
            G = 30,
            Z = W.lazyRender = function() {
                var e, t = R.length;
                for (D = {}; --t > -1;) e = R[t], e && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                R.length = 0
            };
        U._startTime = l.time, q._startTime = l.frame, U._active = q._active = !0, setTimeout(Z, 1), A._updateRoot = M.render = function() {
            var e, t, i;
            if (R.length && Z(), U.render((l.time - U._startTime) * U._timeScale, !1, !1), q.render((l.frame - q._startTime) * q._timeScale, !1, !1), R.length && Z(), l.frame >= G) {
                G = l.frame + (parseInt(M.autoSleep, 10) || 120);
                for (i in X) {
                    for (e = (t = X[i].tweens).length; --e > -1;) t[e]._gc && t.splice(e, 1);
                    0 === t.length && delete X[i]
                }
                if ((!(i = U._first) || i._paused) && M.autoSleep && !q._first && 1 === l._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || l.sleep()
                }
            }
        }, l.addEventListener("tick", A._updateRoot);
        var $ = function(e, t, i) {
                var a, n, r = e._gsTweenID;
                if (X[r || (e._gsTweenID = r = "t" + V++)] || (X[r] = {
                        target: e,
                        tweens: []
                    }), t && ((a = X[r].tweens)[n = a.length] = t, i))
                    for (; --n > -1;) a[n] === t && a.splice(n, 1);
                return X[r].tweens
            },
            K = function(e, t, i, a) {
                var n, r, o = e.vars.onOverwrite;
                return o && (n = o(e, t, i, a)), (o = M.onOverwrite) && (r = o(e, t, i, a)), !1 !== n && !1 !== r
            },
            J = function(e, t, i, a, n) {
                var r, o, s, l;
                if (1 === a || a >= 4) {
                    for (l = n.length, r = 0; l > r; r++)
                        if ((s = n[r]) !== t) s._gc || s._kill(null, e, t) && (o = !0);
                        else if (5 === a) break;
                    return o
                }
                var d, h = t._startTime + c,
                    p = [],
                    u = 0,
                    f = 0 === t._duration;
                for (r = n.length; --r > -1;)(s = n[r]) === t || s._gc || s._paused || (s._timeline !== t._timeline ? (d = d || ee(t, 0, f), 0 === ee(s, d, f) && (p[u++] = s)) : h >= s._startTime && s._startTime + s.totalDuration() / s._timeScale > h && ((f || !s._initted) && 2e-10 >= h - s._startTime || (p[u++] = s)));
                for (r = u; --r > -1;)
                    if (s = p[r], 2 === a && s._kill(i, e, t) && (o = !0), 2 !== a || !s._firstPT && s._initted) {
                        if (2 !== a && !K(s, t)) continue;
                        s._enabled(!1, !1) && (o = !0)
                    }
                return o
            },
            ee = function(e, t, i) {
                for (var a = e._timeline, n = a._timeScale, r = e._startTime; a._timeline;) {
                    if (r += a._startTime, n *= a._timeScale, a._paused) return -100;
                    a = a._timeline
                }
                return (r /= n) > t ? r - t : i && r === t || !e._initted && 2 * c > r - t ? c : (r += e.totalDuration() / e._timeScale / n) > t + c ? 0 : r - t - c
            };
        s._init = function() {
            var e, t, i, a, n, r = this.vars,
                o = this._overwrittenProps,
                s = this._duration,
                l = !!r.immediateRender,
                d = r.ease;
            if (r.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};
                for (a in r.startAt) n[a] = r.startAt[a];
                if (n.overwrite = !1, n.immediateRender = !0, n.lazy = l && !1 !== r.lazy, n.startAt = n.delay = null, this._startAt = M.to(this.target, 0, n), l)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== s) return
            } else if (r.runBackwards && 0 !== s)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    0 !== this._time && (l = !1), i = {};
                    for (a in r) Y[a] && "autoCSS" !== a || (i[a] = r[a]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && !1 !== r.lazy, i.immediateRender = l, this._startAt = M.to(this.target, 0, i), l) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = d = d ? d instanceof x ? d : "function" == typeof d ? new x(d, r.easeParams) : T[d] || M.defaultEase : M.defaultEase, r.easeParams instanceof Array && d.config && (this._ease = d.config.apply(d, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], o ? o[e] : null) && (t = !0);
            else t = this._initProps(this.target, this._propLookup, this._siblings, o);
            if (t && M._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = r.onUpdate, this._initted = !0
        }, s._initProps = function(t, i, a, n) {
            var r, o, s, l, d, h;
            if (null == t) return !1;
            D[t._gsTweenID] && Z(), this.vars.css || t.style && t !== e && t.nodeType && N.css && !1 !== this.vars.autoCSS && function(e, t) {
                var i, a = {};
                for (i in e) Y[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!N[i] || N[i] && N[i]._autoCSS) || (a[i] = e[i], delete e[i]);
                e.css = a
            }(this.vars, t);
            for (r in this.vars)
                if (h = this.vars[r], Y[r]) h && (h instanceof Array || h.push && g(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[r] = h = this._swapSelfInParams(h, this));
                else if (N[r] && (l = new N[r])._onInitTween(t, this.vars[r], this)) {
                for (this._firstPT = d = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: r,
                        pg: 1,
                        pr: l._priority
                    }, o = l._overwriteProps.length; --o > -1;) i[l._overwriteProps[o]] = this._firstPT;
                (l._priority || l._onInitAllProps) && (s = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), d._next && (d._next._prev = d)
            } else i[r] = E.call(this, t, r, "get", h, r, 0, null, this.vars.stringFilter);
            return n && this._kill(n, t) ? this._initProps(t, i, a, n) : this._overwrite > 1 && this._firstPT && a.length > 1 && J(t, this, i, this._overwrite, a) ? (this._kill(i, t), this._initProps(t, i, a, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (D[t._gsTweenID] = !0), s)
        }, s.render = function(e, t, i) {
            var a, n, r, o, s = this._time,
                l = this._duration,
                d = this._rawPrevTime;
            if (e >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (a = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 === e || 0 > d || d === c && "isPause" !== this.data) && d !== e && (i = !0, d > c && (n = "onReverseComplete")), this._rawPrevTime = o = !t || e || d === e ? e : c);
            else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === l && d > 0) && (n = "onReverseComplete", a = this._reversed), 0 > e && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (d >= 0 && (d !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !t || e || d === e ? e : c)), this._initted || (i = !0);
            else if (this._totalTime = this._time = e, this._easeType) {
                var h = e / l,
                    p = this._easeType,
                    u = this._easePower;
                (1 === p || 3 === p && h >= .5) && (h = 1 - h), 3 === p && (h *= 2), 1 === u ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h), this.ratio = 1 === p ? 1 - h : 2 === p ? h : .5 > e / l ? h / 2 : 1 - h / 2
            } else this.ratio = this._ease.getRatio(e / l);
            if (this._time !== s || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = s, this._rawPrevTime = d, R.push(this), void(this._lazy = [e, t]);
                    this._time && !a ? this.ratio = this._ease.getRatio(this._time / l) : a && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== s && e >= 0 && (this._active = !0), 0 === s && (this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                this._onUpdate && (0 > e && this._startAt && -1e-4 !== e && this._startAt.render(e, t, i), t || (this._time !== s || a) && this._callback("onUpdate")), n && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && -1e-4 !== e && this._startAt.render(e, t, i), a && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[n] && this._callback(n), 0 === l && this._rawPrevTime === c && o !== c && (this._rawPrevTime = 0))
            }
        }, s._kill = function(e, t, i) {
            if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            t = "string" != typeof t ? t || this._targets || this.target : M.selector(t) || t;
            var a, n, r, o, s, l, d, h, p, c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((g(t) || I(t)) && "number" != typeof t[0])
                for (a = t.length; --a > -1;) this._kill(e, t[a], i) && (l = !0);
            else {
                if (this._targets) {
                    for (a = this._targets.length; --a > -1;)
                        if (t === this._targets[a]) {
                            s = this._propLookup[a] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[a] = e ? this._overwrittenProps[a] || {} : "all";
                            break
                        }
                } else {
                    if (t !== this.target) return !1;
                    s = this._propLookup, n = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                }
                if (s) {
                    if (d = e || s, h = e !== n && "all" !== n && e !== s && ("object" != typeof e || !e._tempKill), i && (M.onOverwrite || this.vars.onOverwrite)) {
                        for (r in d) s[r] && (p || (p = []), p.push(r));
                        if ((p || !e) && !K(this, i, t, p)) return !1
                    }
                    for (r in d)(o = s[r]) && (c && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(d) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete s[r]), h && (n[r] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }, s.invalidate = function() {
            return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
        }, s._enabled = function(e, t) {
            if (d || l.wake(), e && this._gc) {
                var i, a = this._targets;
                if (a)
                    for (i = a.length; --i > -1;) this._siblings[i] = $(a[i], this, !0);
                else this._siblings = $(this.target, this, !0)
            }
            return A.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && M._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
        }, M.to = function(e, t, i) {
            return new M(e, t, i)
        }, M.from = function(e, t, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new M(e, t, i)
        }, M.fromTo = function(e, t, i, a) {
            return a.startAt = i, a.immediateRender = 0 != a.immediateRender && 0 != i.immediateRender, new M(e, t, a)
        }, M.delayedCall = function(e, t, i, a, n) {
            return new M(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: i,
                callbackScope: a,
                onReverseComplete: t,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: n,
                overwrite: 0
            })
        }, M.set = function(e, t) {
            return new M(e, 0, t)
        }, M.getTweensOf = function(e, t) {
            if (null == e) return [];
            var i, a, n, r;
            if (e = "string" != typeof e ? e : M.selector(e) || e, (g(e) || I(e)) && "number" != typeof e[0]) {
                for (i = e.length, a = []; --i > -1;) a = a.concat(M.getTweensOf(e[i], t));
                for (i = a.length; --i > -1;)
                    for (r = a[i], n = i; --n > -1;) r === a[n] && a.splice(i, 1)
            } else
                for (a = $(e).concat(), i = a.length; --i > -1;)(a[i]._gc || t && !a[i].isActive()) && a.splice(i, 1);
            return a
        }, M.killTweensOf = M.killDelayedCallsTo = function(e, t, i) {
            "object" == typeof t && (i = t, t = !1);
            for (var a = M.getTweensOf(e, t), n = a.length; --n > -1;) a[n]._kill(i, e)
        };
        var te = y("plugins.TweenPlugin", function(e, t) {
            this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = te.prototype
        }, !0);
        if (s = te.prototype, te.version = "1.18.0", te.API = 2, s._firstPT = null, s._addTween = E, s.setRatio = F, s._kill = function(e) {
                var t, i = this._overwriteProps,
                    a = this._firstPT;
                if (null != e[this._propName]) this._overwriteProps = [];
                else
                    for (t = i.length; --t > -1;) null != e[i[t]] && i.splice(t, 1);
                for (; a;) null != e[a.n] && (a._next && (a._next._prev = a._prev), a._prev ? (a._prev._next = a._next, a._prev = null) : this._firstPT === a && (this._firstPT = a._next)), a = a._next;
                return !1
            }, s._roundProps = function(e, t) {
                for (var i = this._firstPT; i;)(e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")]) && (i.r = t), i = i._next
            }, M._onPluginEvent = function(e, t) {
                var i, a, n, r, o, s = t._firstPT;
                if ("_onInitAllProps" === e) {
                    for (; s;) {
                        for (o = s._next, a = n; a && a.pr > s.pr;) a = a._next;
                        (s._prev = a ? a._prev : r) ? s._prev._next = s: n = s, (s._next = a) ? a._prev = s : r = s, s = o
                    }
                    s = t._firstPT = n
                }
                for (; s;) s.pg && "function" == typeof s.t[e] && s.t[e]() && (i = !0), s = s._next;
                return i
            }, te.activate = function(e) {
                for (var t = e.length; --t > -1;) e[t].API === te.API && (N[(new e[t])._propName] = e[t]);
                return !0
            }, w.plugin = function(e) {
                if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                var t, i = e.propName,
                    a = e.priority || 0,
                    n = e.overwriteProps,
                    r = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    o = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        te.call(this, i, a), this._overwriteProps = n || []
                    }, !0 === e.global),
                    s = o.prototype = new te(i);
                s.constructor = o, o.API = e.API;
                for (t in r) "function" == typeof e[t] && (s[r[t]] = e[t]);
                return o.version = e.version, te.activate([o]), o
            }, r = e._gsQueue) {
            for (o = 0; r.length > o; o++) r[o]();
            for (s in v) v[s].func || e.console.log("GSAP encountered missing dependency: com.greensock." + s)
        }
        d = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
            var a = function(e) {
                    t.call(this, e), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var i, a, n = this.vars;
                    for (a in n) i = n[a], l(i) && -1 !== i.join("").indexOf("{self}") && (n[a] = this._swapSelfInParams(i));
                    l(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
                },
                n = 1e-10,
                r = i._internals,
                o = a._internals = {},
                s = r.isSelector,
                l = r.isArray,
                d = r.lazyTweens,
                h = r.lazyRender,
                p = _gsScope._gsDefine.globals,
                c = function(e) {
                    var t, i = {};
                    for (t in e) i[t] = e[t];
                    return i
                },
                u = function(e, t, i) {
                    var a, n, r = e.cycle;
                    for (a in r) n = r[a], e[a] = "function" == typeof n ? n.call(t[i], i) : n[i % n.length];
                    delete e.cycle
                },
                f = o.pauseCallback = function() {},
                g = function(e) {
                    var t, i = [],
                        a = e.length;
                    for (t = 0; t !== a; i.push(e[t++]));
                    return i
                },
                v = a.prototype = new t;
            return a.version = "1.18.0", v.constructor = a, v.kill()._gc = v._forcingPlayhead = v._hasPause = !1, v.to = function(e, t, a, n) {
                var r = a.repeat && p.TweenMax || i;
                return t ? this.add(new r(e, t, a), n) : this.set(e, a, n)
            }, v.from = function(e, t, a, n) {
                return this.add((a.repeat && p.TweenMax || i).from(e, t, a), n)
            }, v.fromTo = function(e, t, a, n, r) {
                var o = n.repeat && p.TweenMax || i;
                return t ? this.add(o.fromTo(e, t, a, n), r) : this.set(e, n, r)
            }, v.staggerTo = function(e, t, n, r, o, l, d, h) {
                var p, f, v = new a({
                        onComplete: l,
                        onCompleteParams: d,
                        callbackScope: h,
                        smoothChildTiming: this.smoothChildTiming
                    }),
                    m = n.cycle;
                for ("string" == typeof e && (e = i.selector(e) || e), s(e = e || []) && (e = g(e)), 0 > (r = r || 0) && ((e = g(e)).reverse(), r *= -1), f = 0; e.length > f; f++) p = c(n), p.startAt && (p.startAt = c(p.startAt), p.startAt.cycle && u(p.startAt, e, f)), m && u(p, e, f), v.to(e[f], t, p, f * r);
                return this.add(v, o)
            }, v.staggerFrom = function(e, t, i, a, n, r, o, s) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(e, t, i, a, n, r, o, s)
            }, v.staggerFromTo = function(e, t, i, a, n, r, o, s, l) {
                return a.startAt = i, a.immediateRender = 0 != a.immediateRender && 0 != i.immediateRender, this.staggerTo(e, t, a, n, r, o, s, l)
            }, v.call = function(e, t, a, n) {
                return this.add(i.delayedCall(0, e, t, a), n)
            }, v.set = function(e, t, a) {
                return a = this._parseTimeOrLabel(a, 0, !0), null == t.immediateRender && (t.immediateRender = a === this._time && !this._paused), this.add(new i(e, 0, t), a)
            }, a.exportRoot = function(e, t) {
                null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
                var n, r, o = new a(e),
                    s = o._timeline;
                for (null == t && (t = !0), s._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = s._time, n = s._first; n;) r = n._next, t && n instanceof i && n.target === n.vars.onComplete || o.add(n, n._startTime - n._delay), n = r;
                return s.add(o, 0), o
            }, v.add = function(n, r, o, s) {
                var d, h, p, c, u, f;
                if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, n)), !(n instanceof e)) {
                    if (n instanceof Array || n && n.push && l(n)) {
                        for (o = o || "normal", s = s || 0, d = r, h = n.length, p = 0; h > p; p++) l(c = n[p]) && (c = new a({
                            tweens: c
                        })), this.add(c, d), "string" != typeof c && "function" != typeof c && ("sequence" === o ? d = c._startTime + c.totalDuration() / c._timeScale : "start" === o && (c._startTime -= c.delay())), d += s;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof n) return this.addLabel(n, r);
                    if ("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                    n = i.delayedCall(0, n)
                }
                if (t.prototype.add.call(this, n, r), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (u = this, f = u.rawTime() > n._startTime; u._timeline;) f && u._timeline.smoothChildTiming ? u.totalTime(u._totalTime, !0) : u._gc && u._enabled(!0, !1), u = u._timeline;
                return this
            }, v.remove = function(t) {
                if (t instanceof e) {
                    this._remove(t, !1);
                    var i = t._timeline = t.vars.useFrames ? e._rootFramesTimeline : e._rootTimeline;
                    return t._startTime = (t._paused ? t._pauseTime : i._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
                }
                if (t instanceof Array || t && t.push && l(t)) {
                    for (var a = t.length; --a > -1;) this.remove(t[a]);
                    return this
                }
                return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
            }, v._remove = function(e, i) {
                t.prototype._remove.call(this, e, i);
                var a = this._last;
                return a ? this._time > a._startTime + a._totalDuration / a._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, v.append = function(e, t) {
                return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
            }, v.insert = v.insertMultiple = function(e, t, i, a) {
                return this.add(e, t || 0, i, a)
            }, v.appendMultiple = function(e, t, i, a) {
                return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, a)
            }, v.addLabel = function(e, t) {
                return this._labels[e] = this._parseTimeOrLabel(t), this
            }, v.addPause = function(e, t, a, n) {
                var r = i.delayedCall(0, f, a, n || this);
                return r.vars.onComplete = r.vars.onReverseComplete = t, r.data = "isPause", this._hasPause = !0, this.add(r, e)
            }, v.removeLabel = function(e) {
                return delete this._labels[e], this
            }, v.getLabelTime = function(e) {
                return null != this._labels[e] ? this._labels[e] : -1
            }, v._parseTimeOrLabel = function(t, i, a, n) {
                var r;
                if (n instanceof e && n.timeline === this) this.remove(n);
                else if (n && (n instanceof Array || n.push && l(n)))
                    for (r = n.length; --r > -1;) n[r] instanceof e && n[r].timeline === this && this.remove(n[r]);
                if ("string" == typeof i) return this._parseTimeOrLabel(i, a && "number" == typeof t && null == this._labels[i] ? t - this.duration() : 0, a);
                if (i = i || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
                else {
                    if (-1 === (r = t.indexOf("="))) return null == this._labels[t] ? a ? this._labels[t] = this.duration() + i : i : this._labels[t] + i;
                    i = parseInt(t.charAt(r - 1) + "1", 10) * Number(t.substr(r + 1)), t = r > 1 ? this._parseTimeOrLabel(t.substr(0, r - 1), 0, a) : this.duration()
                }
                return Number(t) + i
            }, v.seek = function(e, t) {
                return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t)
            }, v.stop = function() {
                return this.paused(!0)
            }, v.gotoAndPlay = function(e, t) {
                return this.play(e, t)
            }, v.gotoAndStop = function(e, t) {
                return this.pause(e, t)
            }, v.render = function(e, t, i) {
                this._gc && this._enabled(!0, !1);
                var a, r, o, s, l, p, c = this._dirty ? this.totalDuration() : this._totalDuration,
                    u = this._time,
                    f = this._startTime,
                    g = this._timeScale,
                    v = this._paused;
                if (e >= c) this._totalTime = this._time = c, this._reversed || this._hasPausedChild() || (r = !0, s = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === e || 0 > this._rawPrevTime || this._rawPrevTime === n) && this._rawPrevTime !== e && this._first && (l = !0, this._rawPrevTime > n && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : n, e = c + 1e-4;
                else if (1e-7 > e)
                    if (this._totalTime = this._time = 0, (0 !== u || 0 === this._duration && this._rawPrevTime !== n && (this._rawPrevTime > 0 || 0 > e && this._rawPrevTime >= 0)) && (s = "onReverseComplete", r = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, s = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = e;
                    else {
                        if (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : n, 0 === e && r)
                            for (a = this._first; a && 0 === a._startTime;) a._duration || (r = !1), a = a._next;
                        e = 0, this._initted || (l = !0)
                    }
                else {
                    if (this._hasPause && !this._forcingPlayhead && !t) {
                        if (e >= u)
                            for (a = this._first; a && e >= a._startTime && !p;) a._duration || "isPause" !== a.data || a.ratio || 0 === a._startTime && 0 === this._rawPrevTime || (p = a), a = a._next;
                        else
                            for (a = this._last; a && a._startTime >= e && !p;) a._duration || "isPause" === a.data && a._rawPrevTime > 0 && (p = a), a = a._prev;
                        p && (this._time = e = p._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    this._totalTime = this._time = this._rawPrevTime = e
                }
                if (this._time !== u && this._first || i || l || p) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== u && e > 0 && (this._active = !0), 0 === u && this.vars.onStart && 0 !== this._time && (t || this._callback("onStart")), this._time >= u)
                        for (a = this._first; a && (o = a._next, !this._paused || v);)(a._active || a._startTime <= this._time && !a._paused && !a._gc) && (p === a && this.pause(), a._reversed ? a.render((a._dirty ? a.totalDuration() : a._totalDuration) - (e - a._startTime) * a._timeScale, t, i) : a.render((e - a._startTime) * a._timeScale, t, i)), a = o;
                    else
                        for (a = this._last; a && (o = a._prev, !this._paused || v);) {
                            if (a._active || u >= a._startTime && !a._paused && !a._gc) {
                                if (p === a) {
                                    for (p = a._prev; p && p.endTime() > this._time;) p.render(p._reversed ? p.totalDuration() - (e - p._startTime) * p._timeScale : (e - p._startTime) * p._timeScale, t, i), p = p._prev;
                                    p = null, this.pause()
                                }
                                a._reversed ? a.render((a._dirty ? a.totalDuration() : a._totalDuration) - (e - a._startTime) * a._timeScale, t, i) : a.render((e - a._startTime) * a._timeScale, t, i)
                            }
                            a = o
                        }
                    this._onUpdate && (t || (d.length && h(), this._callback("onUpdate"))), s && (this._gc || (f === this._startTime || g !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (r && (d.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[s] && this._callback(s)))
                }
            }, v._hasPausedChild = function() {
                for (var e = this._first; e;) {
                    if (e._paused || e instanceof a && e._hasPausedChild()) return !0;
                    e = e._next
                }
                return !1
            }, v.getChildren = function(e, t, a, n) {
                n = n || -9999999999;
                for (var r = [], o = this._first, s = 0; o;) n > o._startTime || (o instanceof i ? !1 !== t && (r[s++] = o) : (!1 !== a && (r[s++] = o), !1 !== e && (r = r.concat(o.getChildren(!0, t, a)), s = r.length))), o = o._next;
                return r
            }, v.getTweensOf = function(e, t) {
                var a, n, r = this._gc,
                    o = [],
                    s = 0;
                for (r && this._enabled(!0, !0), n = (a = i.getTweensOf(e)).length; --n > -1;)(a[n].timeline === this || t && this._contains(a[n])) && (o[s++] = a[n]);
                return r && this._enabled(!1, !0), o
            }, v.recent = function() {
                return this._recent
            }, v._contains = function(e) {
                for (var t = e.timeline; t;) {
                    if (t === this) return !0;
                    t = t.timeline
                }
                return !1
            }, v.shiftChildren = function(e, t, i) {
                i = i || 0;
                for (var a, n = this._first, r = this._labels; n;) n._startTime >= i && (n._startTime += e), n = n._next;
                if (t)
                    for (a in r) r[a] >= i && (r[a] += e);
                return this._uncache(!0)
            }, v._kill = function(e, t) {
                if (!e && !t) return this._enabled(!1, !1);
                for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), a = i.length, n = !1; --a > -1;) i[a]._kill(e, t) && (n = !0);
                return n
            }, v.clear = function(e) {
                var t = this.getChildren(!1, !0, !0),
                    i = t.length;
                for (this._time = this._totalTime = 0; --i > -1;) t[i]._enabled(!1, !1);
                return !1 !== e && (this._labels = {}), this._uncache(!0)
            }, v.invalidate = function() {
                for (var t = this._first; t;) t.invalidate(), t = t._next;
                return e.prototype.invalidate.call(this)
            }, v._enabled = function(e, i) {
                if (e === this._gc)
                    for (var a = this._first; a;) a._enabled(e, !0), a = a._next;
                return t.prototype._enabled.call(this, e, i)
            }, v.totalTime = function() {
                this._forcingPlayhead = !0;
                var t = e.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, t
            }, v.duration = function(e) {
                return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
            }, v.totalDuration = function(e) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var t, i, a = 0, n = this._last, r = 999999999999; n;) t = n._prev, n._dirty && n.totalDuration(), n._startTime > r && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : r = n._startTime, 0 > n._startTime && !n._paused && (a -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -9999999999), r = 0), i = n._startTime + n._totalDuration / n._timeScale, i > a && (a = i), n = t;
                        this._duration = this._totalDuration = a, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return 0 !== this.totalDuration() && 0 !== e && this.timeScale(this._totalDuration / e), this
            }, v.paused = function(t) {
                if (!t)
                    for (var i = this._first, a = this._time; i;) i._startTime === a && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                return e.prototype.paused.apply(this, arguments)
            }, v.usesFrames = function() {
                for (var t = this._timeline; t._timeline;) t = t._timeline;
                return t === e._rootFramesTimeline
            }, v.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, a
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope).TimelineLite
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = t())
    }();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(e) {
        var t, i, a, n = _gsScope.GreenSockGlobals || _gsScope,
            r = n.com.greensock,
            o = 2 * Math.PI,
            s = Math.PI / 2,
            l = r._class,
            d = function(t, i) {
                var a = l("easing." + t, function() {}, !0),
                    n = a.prototype = new e;
                return n.constructor = a, n.getRatio = i, a
            },
            h = e.register || function() {},
            p = function(e, t, i, a) {
                var n = l("easing." + e, {
                    easeOut: new t,
                    easeIn: new i,
                    easeInOut: new a
                }, !0);
                return h(n, e), n
            },
            c = function(e, t, i) {
                this.t = e, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - e)
            },
            u = function(t, i) {
                var a = l("easing." + t, function(e) {
                        this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    n = a.prototype = new e;
                return n.constructor = a, n.getRatio = i, n.config = function(e) {
                    return new a(e)
                }, a
            },
            f = p("Back", u("BackOut", function(e) {
                return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
            }), u("BackIn", function(e) {
                return e * e * ((this._p1 + 1) * e - this._p1)
            }), u("BackInOut", function(e) {
                return 1 > (e *= 2) ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
            })),
            g = l("easing.SlowMo", function(e, t, i) {
                t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
            }, !0),
            v = g.prototype = new e;
        return v.constructor = g, v.getRatio = function(e) {
            var t = e + (.5 - e) * this._p;
            return this._p1 > e ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
        }, g.ease = new g(.7, .7), v.config = g.config = function(e, t, i) {
            return new g(e, t, i)
        }, (v = (t = l("easing.SteppedEase", function(e) {
            e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
        }, !0)).prototype = new e).constructor = t, v.getRatio = function(e) {
            return 0 > e ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
        }, v.config = t.config = function(e) {
            return new t(e)
        }, (v = (i = l("easing.RoughEase", function(t) {
            for (var i, a, n, r, o, s, l = (t = t || {}).taper || "none", d = [], h = 0, p = 0 | (t.points || 20), u = p, f = !1 !== t.randomize, g = !0 === t.clamp, v = t.template instanceof e ? t.template : null, m = "number" == typeof t.strength ? .4 * t.strength : .4; --u > -1;) i = f ? Math.random() : 1 / p * u, a = v ? v.getRatio(i) : i, "none" === l ? n = m : "out" === l ? (r = 1 - i, n = r * r * m) : "in" === l ? n = i * i * m : .5 > i ? (r = 2 * i, n = .5 * r * r * m) : (r = 2 * (1 - i), n = .5 * r * r * m), f ? a += Math.random() * n - .5 * n : u % 2 ? a += .5 * n : a -= .5 * n, g && (a > 1 ? a = 1 : 0 > a && (a = 0)), d[h++] = {
                x: i,
                y: a
            };
            for (d.sort(function(e, t) {
                    return e.x - t.x
                }), s = new c(1, 1, null), u = p; --u > -1;) o = d[u], s = new c(o.x, o.y, s);
            this._prev = new c(0, 0, 0 !== s.t ? s : s.next)
        }, !0)).prototype = new e).constructor = i, v.getRatio = function(e) {
            var t = this._prev;
            if (e > t.t) {
                for (; t.next && e >= t.t;) t = t.next;
                t = t.prev
            } else
                for (; t.prev && t.t >= e;) t = t.prev;
            return this._prev = t, t.v + (e - t.t) / t.gap * t.c
        }, v.config = function(e) {
            return new i(e)
        }, i.ease = new i, p("Bounce", d("BounceOut", function(e) {
            return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }), d("BounceIn", function(e) {
            return 1 / 2.75 > (e = 1 - e) ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }), d("BounceInOut", function(e) {
            var t = .5 > e;
            return e = 1 / 2.75 > (e = t ? 1 - 2 * e : 2 * e - 1) ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
        })), p("Circ", d("CircOut", function(e) {
            return Math.sqrt(1 - (e -= 1) * e)
        }), d("CircIn", function(e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }), d("CircInOut", function(e) {
            return 1 > (e *= 2) ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        })), p("Elastic", (a = function(t, i, a) {
            var n = l("easing." + t, function(e, t) {
                    this._p1 = e >= 1 ? e : 1, this._p2 = (t || a) / (1 > e ? e : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                }, !0),
                r = n.prototype = new e;
            return r.constructor = n, r.getRatio = i, r.config = function(e, t) {
                return new n(e, t)
            }, n
        })("ElasticOut", function(e) {
            return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
        }, .3), a("ElasticIn", function(e) {
            return -this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)
        }, .3), a("ElasticInOut", function(e) {
            return 1 > (e *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) + 1
        }, .45)), p("Expo", d("ExpoOut", function(e) {
            return 1 - Math.pow(2, -10 * e)
        }), d("ExpoIn", function(e) {
            return Math.pow(2, 10 * (e - 1)) - .001
        }), d("ExpoInOut", function(e) {
            return 1 > (e *= 2) ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        })), p("Sine", d("SineOut", function(e) {
            return Math.sin(e * s)
        }), d("SineIn", function(e) {
            return 1 - Math.cos(e * s)
        }), d("SineInOut", function(e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
        })), l("easing.EaseLookup", {
            find: function(t) {
                return e.map[t]
            }
        }, !0), h(n.SlowMo, "SlowMo", "ease,"), h(i, "RoughEase", "ease,"), h(t, "SteppedEase", "ease,"), f
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
            var i, a, n, r, o = function() {
                    e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                },
                s = _gsScope._gsDefine.globals,
                l = {},
                d = o.prototype = new e("css");
            d.constructor = o, o.version = "1.18.0", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, d = "px", o.suffixMap = {
                top: d,
                right: d,
                bottom: d,
                left: d,
                width: d,
                height: d,
                fontSize: d,
                padding: d,
                margin: d,
                perspective: d,
                lineHeight: ""
            };
            var h, p, c, u, f, g, v, m, w = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                _ = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                x = /(?:\d|\-|\+|=|#|\.)*/g,
                T = /opacity *= *([^)]*)/i,
                k = /opacity:([^;]*)/i,
                L = /alpha\(opacity *=.+?\)/i,
                O = /^(rgb|hsl)/,
                S = /([A-Z])/g,
                P = /-([a-z])/gi,
                C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                A = function(e, t) {
                    return t.toUpperCase()
                },
                z = /(?:Left|Right|Width)/i,
                j = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                I = /,(?=[^\)]*(?:\(|$))/gi,
                R = Math.PI / 180,
                D = 180 / Math.PI,
                Q = {},
                F = document,
                H = function(e) {
                    return F.createElementNS ? F.createElementNS("http://www.w3.org/1999/xhtml", e) : F.createElement(e)
                },
                E = H("div"),
                W = H("img"),
                N = o._internals = {
                    _specialProps: l
                },
                X = navigator.userAgent,
                V = (v = X.indexOf("Android"), m = H("a"), c = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === v || Number(X.substr(v + 8, 1)) > 3), f = c && 6 > Number(X.substr(X.indexOf("Version/") + 8, 1)), u = -1 !== X.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) && (g = parseFloat(RegExp.$1)), !!m && (m.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(m.style.opacity))),
                Y = function(e) {
                    return T.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                B = function(e) {
                    window.console && console.log(e)
                },
                q = "",
                U = "",
                G = function(e, t) {
                    var i, a, n = (t = t || E).style;
                    if (void 0 !== n[e]) return e;
                    for (e = e.charAt(0).toUpperCase() + e.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], a = 5; --a > -1 && void 0 === n[i[a] + e];);
                    return a >= 0 ? (q = "-" + (U = 3 === a ? "ms" : i[a]).toLowerCase() + "-", U + e) : null
                },
                Z = F.defaultView ? F.defaultView.getComputedStyle : function() {},
                $ = o.getStyle = function(e, t, i, a, n) {
                    var r;
                    return V || "opacity" !== t ? (!a && e.style[t] ? r = e.style[t] : (i = i || Z(e)) ? r = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(S, "-$1").toLowerCase()) : e.currentStyle && (r = e.currentStyle[t]), null == n || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : n) : Y(e)
                },
                K = N.convertToPixels = function(e, i, a, n, r) {
                    if ("px" === n || !n) return a;
                    if ("auto" === n || !a) return 0;
                    var s, l, d, h = z.test(i),
                        p = e,
                        c = E.style,
                        u = 0 > a;
                    if (u && (a = -a), "%" === n && -1 !== i.indexOf("border")) s = a / 100 * (h ? e.clientWidth : e.clientHeight);
                    else {
                        if (c.cssText = "border:0 solid red;position:" + $(e, "position") + ";line-height:0;", "%" !== n && p.appendChild && "v" !== n.charAt(0) && "rem" !== n) c[h ? "borderLeftWidth" : "borderTopWidth"] = a + n;
                        else {
                            if (l = (p = e.parentNode || F.body)._gsCache, d = t.ticker.frame, l && h && l.time === d) return l.width * a / 100;
                            c[h ? "width" : "height"] = a + n
                        }
                        p.appendChild(E), s = parseFloat(E[h ? "offsetWidth" : "offsetHeight"]), p.removeChild(E), h && "%" === n && !1 !== o.cacheWidths && ((l = p._gsCache = p._gsCache || {}).time = d, l.width = s / a * 100), 0 !== s || r || (s = K(e, i, a, n, !0))
                    }
                    return u ? -s : s
                },
                J = N.calculateOffset = function(e, t, i) {
                    if ("absolute" !== $(e, "position", i)) return 0;
                    var a = "left" === t ? "Left" : "Top",
                        n = $(e, "margin" + a, i);
                    return e["offset" + a] - (K(e, t, parseFloat(n), n.replace(x, "")) || 0)
                },
                ee = function(e, t) {
                    var i, a, n, r = {};
                    if (t = t || Z(e, null))
                        if (i = t.length)
                            for (; --i > -1;) n = t[i], (-1 === n.indexOf("-transform") || ze === n) && (r[n.replace(P, A)] = t.getPropertyValue(n));
                        else
                            for (i in t)(-1 === i.indexOf("Transform") || Ae === i) && (r[i] = t[i]);
                    else if (t = e.currentStyle || e.style)
                        for (i in t) "string" == typeof i && void 0 === r[i] && (r[i.replace(P, A)] = t[i]);
                    return V || (r.opacity = Y(e)), a = Xe(e, t, !1), r.rotation = a.rotation, r.skewX = a.skewX, r.scaleX = a.scaleX, r.scaleY = a.scaleY, r.x = a.x, r.y = a.y, Me && (r.z = a.z, r.rotationX = a.rotationX, r.rotationY = a.rotationY, r.scaleZ = a.scaleZ), r.filters && delete r.filters, r
                },
                te = function(e, t, i, a, n) {
                    var r, o, s, l = {},
                        d = e.style;
                    for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (t[o] !== (r = i[o]) || n && n[o]) && -1 === o.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[o] = "auto" !== r || "left" !== o && "top" !== o ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof t[o] || "" === t[o].replace(b, "") ? r : 0 : J(e, o), void 0 !== d[o] && (s = new ve(d, o, d[o], s)));
                    if (a)
                        for (o in a) "className" !== o && (l[o] = a[o]);
                    return {
                        difs: l,
                        firstMPT: s
                    }
                },
                ie = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                ae = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                ne = function(e, t, i) {
                    var a = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                        n = ie[t],
                        r = n.length;
                    for (i = i || Z(e, null); --r > -1;) a -= parseFloat($(e, "padding" + n[r], i, !0)) || 0, a -= parseFloat($(e, "border" + n[r] + "Width", i, !0)) || 0;
                    return a
                },
                re = function(e, t) {
                    if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                    (null == e || "" === e) && (e = "0 0");
                    var i = e.split(" "),
                        a = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : i[0],
                        n = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : i[1];
                    return null == n ? n = "center" === a ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === a || isNaN(parseFloat(a)) && -1 === (a + "").indexOf("=")) && (a = "50%"), e = a + " " + n + (i.length > 2 ? " " + i[2] : ""), t && (t.oxp = -1 !== a.indexOf("%"), t.oyp = -1 !== n.indexOf("%"), t.oxr = "=" === a.charAt(1), t.oyr = "=" === n.charAt(1), t.ox = parseFloat(a.replace(b, "")), t.oy = parseFloat(n.replace(b, "")), t.v = e), t || e
                },
                oe = function(e, t) {
                    return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
                },
                se = function(e, t) {
                    return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e)
                },
                le = function(e, t, i, a) {
                    var n, r, o, s, l;
                    return null == e ? s = t : "number" == typeof e ? s = e : (n = 360, r = e.split("_"), o = ((l = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === e.indexOf("rad") ? 1 : D) - (l ? 0 : t), r.length && (a && (a[i] = t + o), -1 !== e.indexOf("short") && ((o %= n) !== o % (n / 2) && (o = 0 > o ? o + n : o - n)), -1 !== e.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * n) % n - (0 | o / n) * n : -1 !== e.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * n) % n - (0 | o / n) * n)), s = t + o), 1e-6 > s && s > -1e-6 && (s = 0), s
                },
                de = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                he = function(e, t, i) {
                    return 0 | 255 * (1 > 6 * (e = 0 > e ? e + 1 : e > 1 ? e - 1 : e) ? t + 6 * (i - t) * e : .5 > e ? i : 2 > 3 * e ? t + 6 * (i - t) * (2 / 3 - e) : t) + .5
                },
                pe = o.parseColor = function(e, t) {
                    var i, a, n, r, o, s, l, d, h, p, c;
                    if (e)
                        if ("number" == typeof e) i = [e >> 16, 255 & e >> 8, 255 & e];
                        else {
                            if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), de[e]) i = de[e];
                            else if ("#" === e.charAt(0)) 4 === e.length && (a = e.charAt(1), n = e.charAt(2), r = e.charAt(3), e = "#" + a + a + n + n + r + r), e = parseInt(e.substr(1), 16), i = [e >> 16, 255 & e >> 8, 255 & e];
                            else if ("hsl" === e.substr(0, 3))
                                if (i = c = e.match(w), t) {
                                    if (-1 !== e.indexOf("=")) return e.match(y)
                                } else o = Number(i[0]) % 360 / 360, s = Number(i[1]) / 100, l = Number(i[2]) / 100, n = .5 >= l ? l * (s + 1) : l + s - l * s, a = 2 * l - n, i.length > 3 && (i[3] = Number(e[3])), i[0] = he(o + 1 / 3, a, n), i[1] = he(o, a, n), i[2] = he(o - 1 / 3, a, n);
                            else i = e.match(w) || de.transparent;
                            i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                        }
                    else i = de.black;
                    return t && !c && (a = i[0] / 255, n = i[1] / 255, r = i[2] / 255, l = ((d = Math.max(a, n, r)) + (h = Math.min(a, n, r))) / 2, d === h ? o = s = 0 : (p = d - h, s = l > .5 ? p / (2 - d - h) : p / (d + h), o = d === a ? (n - r) / p + (r > n ? 6 : 0) : d === n ? (r - a) / p + 2 : (a - n) / p + 4, o *= 60), i[0] = 0 | o + .5, i[1] = 0 | 100 * s + .5, i[2] = 0 | 100 * l + .5), i
                },
                ce = function(e, t) {
                    var i, a, n, r = e.match(ue) || [],
                        o = 0,
                        s = r.length ? "" : e;
                    for (i = 0; r.length > i; i++) a = r[i], n = e.substr(o, e.indexOf(a, o) - o), o += n.length + a.length, a = pe(a, t), 3 === a.length && a.push(1), s += n + (t ? "hsla(" + a[0] + "," + a[1] + "%," + a[2] + "%," + a[3] : "rgba(" + a.join(",")) + ")";
                    return s
                },
                ue = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (d in de) ue += "|" + d + "\\b";
            ue = RegExp(ue + ")", "gi"), o.colorStringFilter = function(e) {
                var t, i = e[0] + e[1];
                ue.lastIndex = 0, ue.test(i) && (t = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), e[0] = ce(e[0], t), e[1] = ce(e[1], t))
            }, t.defaultStringFilter || (t.defaultStringFilter = o.colorStringFilter);
            var fe = function(e, t, i, a) {
                    if (null == e) return function(e) {
                        return e
                    };
                    var n, r = t ? (e.match(ue) || [""])[0] : "",
                        o = e.split(r).join("").match(_) || [],
                        s = e.substr(0, e.indexOf(o[0])),
                        l = ")" === e.charAt(e.length - 1) ? ")" : "",
                        d = -1 !== e.indexOf(" ") ? " " : ",",
                        h = o.length,
                        p = h > 0 ? o[0].replace(w, "") : "";
                    return h ? n = t ? function(e) {
                        var t, c, u, f;
                        if ("number" == typeof e) e += p;
                        else if (a && I.test(e)) {
                            for (f = e.replace(I, "|").split("|"), u = 0; f.length > u; u++) f[u] = n(f[u]);
                            return f.join(",")
                        }
                        if (t = (e.match(ue) || [r])[0], u = (c = e.split(t).join("").match(_) || []).length, h > u--)
                            for (; h > ++u;) c[u] = i ? c[0 | (u - 1) / 2] : o[u];
                        return s + c.join(d) + d + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
                    } : function(e) {
                        var t, r, c;
                        if ("number" == typeof e) e += p;
                        else if (a && I.test(e)) {
                            for (r = e.replace(I, "|").split("|"), c = 0; r.length > c; c++) r[c] = n(r[c]);
                            return r.join(",")
                        }
                        if (c = (t = e.match(_) || []).length, h > c--)
                            for (; h > ++c;) t[c] = i ? t[0 | (c - 1) / 2] : o[c];
                        return s + t.join(d) + l
                    } : function(e) {
                        return e
                    }
                },
                ge = function(e) {
                    return e = e.split(","),
                        function(t, i, a, n, r, o, s) {
                            var l, d = (i + "").split(" ");
                            for (s = {}, l = 0; 4 > l; l++) s[e[l]] = d[l] = d[l] || d[(l - 1) / 2 >> 0];
                            return n.parse(t, s, r, o)
                        }
                },
                ve = (N._setPluginRatio = function(e) {
                    this.plugin.setRatio(e);
                    for (var t, i, a, n, r = this.data, o = r.proxy, s = r.firstMPT; s;) t = o[s.v], s.r ? t = Math.round(t) : 1e-6 > t && t > -1e-6 && (t = 0), s.t[s.p] = t, s = s._next;
                    if (r.autoRotate && (r.autoRotate.rotation = o.rotation), 1 === e)
                        for (s = r.firstMPT; s;) {
                            if ((i = s.t).type) {
                                if (1 === i.type) {
                                    for (n = i.xs0 + i.s + i.xs1, a = 1; i.l > a; a++) n += i["xn" + a] + i["xs" + (a + 1)];
                                    i.e = n
                                }
                            } else i.e = i.s + i.xs0;
                            s = s._next
                        }
                }, function(e, t, i, a, n) {
                    this.t = e, this.p = t, this.v = i, this.r = n, a && (a._prev = this, this._next = a)
                }),
                me = (N._parseToProxy = function(e, t, i, a, n, r) {
                    var o, s, l, d, h, p = a,
                        c = {},
                        u = {},
                        f = i._transform,
                        g = Q;
                    for (i._transform = null, Q = t, a = h = i.parse(e, t, a, n), Q = g, r && (i._transform = f, p && (p._prev = null, p._prev && (p._prev._next = null))); a && a !== p;) {
                        if (1 >= a.type && (u[s = a.p] = a.s + a.c, c[s] = a.s, r || (d = new ve(a, "s", s, d, a.r), a.c = 0), 1 === a.type))
                            for (o = a.l; --o > 0;) l = "xn" + o, s = a.p + "_" + l, u[s] = a.data[l], c[s] = a[l], r || (d = new ve(a, l, s, d, a.rxp[l]));
                        a = a._next
                    }
                    return {
                        proxy: c,
                        end: u,
                        firstMPT: d,
                        pt: h
                    }
                }, N.CSSPropTween = function(e, t, a, n, o, s, l, d, h, p, c) {
                    this.t = e, this.p = t, this.s = a, this.c = n, this.n = l || t, e instanceof me || r.push(this.n), this.r = d, this.type = s || 0, h && (this.pr = h, i = !0), this.b = void 0 === p ? a : p, this.e = void 0 === c ? a + n : c, o && (this._next = o, o._prev = this)
                }),
                we = function(e, t, i, a, n, r) {
                    var o = new me(e, t, i, a - i, n, -1, r);
                    return o.b = i, o.e = o.xs0 = a, o
                },
                ye = o.parseComplex = function(e, t, i, a, n, r, o, s, l, d) {
                    i = i || r || "", o = new me(e, t, 0, 0, o, d ? 2 : 1, null, !1, s, i, a), a += "";
                    var p, c, u, f, g, v, m, _, b, x, T, k, L, O = i.split(", ").join(",").split(" "),
                        S = a.split(", ").join(",").split(" "),
                        P = O.length,
                        C = !1 !== h;
                    for ((-1 !== a.indexOf(",") || -1 !== i.indexOf(",")) && (O = O.join(" ").replace(I, ", ").split(" "), S = S.join(" ").replace(I, ", ").split(" "), P = O.length), P !== S.length && (P = (O = (r || "").split(" ")).length), o.plugin = l, o.setRatio = d, ue.lastIndex = 0, p = 0; P > p; p++)
                        if (f = O[p], g = S[p], _ = parseFloat(f), _ || 0 === _) o.appendXtra("", _, oe(g, _), g.replace(y, ""), C && -1 !== g.indexOf("px"), !0);
                        else if (n && ue.test(f)) k = "," === g.charAt(g.length - 1) ? ")," : ")", L = -1 !== g.indexOf("hsl") && V, f = pe(f, L), g = pe(g, L), b = f.length + g.length > 6, b && !V && 0 === g[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(S[p]).join("transparent")) : (V || (b = !1), L ? o.appendXtra(b ? "hsla(" : "hsl(", f[0], oe(g[0], f[0]), ",", !1, !0).appendXtra("", f[1], oe(g[1], f[1]), "%,", !1).appendXtra("", f[2], oe(g[2], f[2]), b ? "%," : "%" + k, !1) : o.appendXtra(b ? "rgba(" : "rgb(", f[0], g[0] - f[0], ",", !0, !0).appendXtra("", f[1], g[1] - f[1], ",", !0).appendXtra("", f[2], g[2] - f[2], b ? "," : k, !0), b && (f = 4 > f.length ? 1 : f[3], o.appendXtra("", f, (4 > g.length ? 1 : g[3]) - f, k, !1))), ue.lastIndex = 0;
                    else if (v = f.match(w)) {
                        if (!(m = g.match(y)) || m.length !== v.length) return o;
                        for (u = 0, c = 0; v.length > c; c++) T = v[c], x = f.indexOf(T, u), o.appendXtra(f.substr(u, x - u), Number(T), oe(m[c], T), "", C && "px" === f.substr(x + T.length, 2), 0 === c), u = x + T.length;
                        o["xs" + o.l] += f.substr(u)
                    } else o["xs" + o.l] += o.l ? " " + f : f;
                    if (-1 !== a.indexOf("=") && o.data) {
                        for (k = o.xs0 + o.data.s, p = 1; o.l > p; p++) k += o["xs" + p] + o.data["xn" + p];
                        o.e = k + o["xs" + p]
                    }
                    return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                },
                _e = 9;
            for ((d = me.prototype).l = d.pr = 0; --_e > 0;) d["xn" + _e] = 0, d["xs" + _e] = "";
            d.xs0 = "", d._next = d._prev = d.xfirst = d.data = d.plugin = d.setRatio = d.rxp = null, d.appendXtra = function(e, t, i, a, n, r) {
                var o = this,
                    s = o.l;
                return o["xs" + s] += r && s ? " " + e : e || "", i || 0 === s || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = a || "", s > 0 ? (o.data["xn" + s] = t + i, o.rxp["xn" + s] = n, o["xn" + s] = t, o.plugin || (o.xfirst = new me(o, "xn" + s, t, i, o.xfirst || o, 0, o.n, n, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                    s: t + i
                }, o.rxp = {}, o.s = t, o.c = i, o.r = n, o)) : (o["xs" + s] += t + (a || ""), o)
            };
            var be = function(e, t) {
                    t = t || {}, this.p = t.prefix && G(e) || e, l[e] = l[this.p] = this, this.format = t.formatter || fe(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                },
                xe = N._registerComplexSpecialProp = function(e, t, i) {
                    "object" != typeof t && (t = {
                        parser: i
                    });
                    var a, n = e.split(","),
                        r = t.defaultValue;
                    for (i = i || [r], a = 0; n.length > a; a++) t.prefix = 0 === a && t.prefix, t.defaultValue = i[a] || r, new be(n[a], t)
                },
                Te = function(e) {
                    if (!l[e]) {
                        var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                        xe(e, {
                            parser: function(e, i, a, n, r, o, d) {
                                var h = s.com.greensock.plugins[t];
                                return h ? (h._cssRegister(), l[a].parse(e, i, a, n, r, o, d)) : (B("Error: " + t + " js file not loaded."), r)
                            }
                        })
                    }
                };
            (d = be.prototype).parseComplex = function(e, t, i, a, n, r) {
                var o, s, l, d, h, p, c = this.keyword;
                if (this.multi && (I.test(i) || I.test(t) ? (s = t.replace(I, "|").split("|"), l = i.replace(I, "|").split("|")) : c && (s = [t], l = [i])), l) {
                    for (d = l.length > s.length ? l.length : s.length, o = 0; d > o; o++) t = s[o] = s[o] || this.dflt, i = l[o] = l[o] || this.dflt, c && (h = t.indexOf(c), p = i.indexOf(c), h !== p && (-1 === p ? s[o] = s[o].split(c).join("") : -1 === h && (s[o] += " " + c)));
                    t = s.join(", "), i = l.join(", ")
                }
                return ye(e, this.p, t, i, this.clrs, this.dflt, a, this.pr, n, r)
            }, d.parse = function(e, t, i, a, r, o) {
                return this.parseComplex(e.style, this.format($(e, this.p, n, !1, this.dflt)), this.format(t), r, o)
            }, o.registerSpecialProp = function(e, t, i) {
                xe(e, {
                    parser: function(e, a, n, r, o, s) {
                        var l = new me(e, n, 0, 0, o, 2, n, !1, i);
                        return l.plugin = s, l.setRatio = t(e, a, r._tween, n), l
                    },
                    priority: i
                })
            }, o.useSVGTransformAttr = c || u;
            var ke, Le, Oe, Se, Pe, Ce = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Ae = G("transform"),
                ze = q + "transform",
                je = G("transformOrigin"),
                Me = null !== G("perspective"),
                Ie = N.Transform = function() {
                    this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(!1 === o.defaultForce3D || !Me) && (o.defaultForce3D || "auto")
                },
                Re = window.SVGElement,
                De = function(e, t, i) {
                    var a, n = F.createElementNS("http://www.w3.org/2000/svg", e),
                        r = /([a-z])([A-Z])/g;
                    for (a in i) n.setAttributeNS(null, a.replace(r, "$1-$2").toLowerCase(), i[a]);
                    return t.appendChild(n), n
                },
                Qe = F.documentElement,
                Fe = (Pe = g || /Android/i.test(X) && !window.chrome, F.createElementNS && !Pe && (Le = De("svg", Qe), Se = (Oe = De("rect", Le, {
                    width: 100,
                    height: 50,
                    x: 100
                })).getBoundingClientRect().width, Oe.style[je] = "50% 50%", Oe.style[Ae] = "scaleX(0.5)", Pe = Se === Oe.getBoundingClientRect().width && !(u && Me), Qe.removeChild(Le)), Pe),
                He = function(e, t, i, a, n) {
                    var r, s, l, d, h, p, c, u, f, g, v, m, w, y, _ = e._gsTransform,
                        b = Ne(e, !0);
                    _ && (w = _.xOrigin, y = _.yOrigin), (!a || 2 > (r = a.split(" ")).length) && (c = e.getBBox(), r = [(-1 !== (t = re(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) / 100 * c.width : parseFloat(t[0])) + c.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * c.height : parseFloat(t[1])) + c.y]), i.xOrigin = d = parseFloat(r[0]), i.yOrigin = h = parseFloat(r[1]), a && b !== We && (p = b[0], c = b[1], u = b[2], f = b[3], g = b[4], v = b[5], s = d * (f / (m = p * f - c * u)) + h * (-u / m) + (u * v - f * g) / m, l = d * (-c / m) + h * (p / m) - (p * v - c * g) / m, d = i.xOrigin = r[0] = s, h = i.yOrigin = r[1] = l), _ && (n || !1 !== n && !1 !== o.defaultSmoothOrigin ? (s = d - w, l = h - y, _.xOffset += s * b[0] + l * b[2] - s, _.yOffset += s * b[1] + l * b[3] - l) : _.xOffset = _.yOffset = 0), e.setAttribute("data-svg-origin", r.join(" "))
                },
                Ee = function(e) {
                    return !!(Re && "function" == typeof e.getBBox && e.getCTM && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM))
                },
                We = [1, 0, 0, 1, 0, 0],
                Ne = function(e, t) {
                    var i, a, n, r, o, s = e._gsTransform || new Ie;
                    if (Ae ? a = $(e, ze, null, !0) : e.currentStyle && (a = (a = e.currentStyle.filter.match(j)) && 4 === a.length ? [a[0].substr(4), Number(a[2].substr(4)), Number(a[1].substr(4)), a[3].substr(4), s.x || 0, s.y || 0].join(",") : ""), i = !a || "none" === a || "matrix(1, 0, 0, 1, 0, 0)" === a, (s.svg || e.getBBox && Ee(e)) && (i && -1 !== (e.style[Ae] + "").indexOf("matrix") && (a = e.style[Ae], i = 0), n = e.getAttribute("transform"), i && n && (-1 !== n.indexOf("matrix") ? (a = n, i = 0) : -1 !== n.indexOf("translate") && (a = "matrix(1,0,0,1," + n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return We;
                    for (n = (a || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], _e = n.length; --_e > -1;) r = Number(n[_e]), n[_e] = (o = r - (r |= 0)) ? (0 | 1e5 * o + (0 > o ? -.5 : .5)) / 1e5 + r : r;
                    return t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
                },
                Xe = N.getTransform = function(e, i, a, r) {
                    if (e._gsTransform && a && !r) return e._gsTransform;
                    var s, l, d, h, p, c, u = a && e._gsTransform || new Ie,
                        f = 0 > u.scaleX,
                        g = Me && (parseFloat($(e, je, i, !1, "0 0 0").split(" ")[2]) || u.zOrigin) || 0,
                        v = parseFloat(o.defaultTransformPerspective) || 0;
                    if (u.svg = !(!e.getBBox || !Ee(e)), u.svg && (He(e, $(e, je, n, !1, "50% 50%") + "", u, e.getAttribute("data-svg-origin")), ke = o.useSVGTransformAttr || Fe), (s = Ne(e)) !== We) {
                        if (16 === s.length) {
                            var m, w, y, _, b, x = s[0],
                                T = s[1],
                                k = s[2],
                                L = s[3],
                                O = s[4],
                                S = s[5],
                                P = s[6],
                                C = s[7],
                                A = s[8],
                                z = s[9],
                                j = s[10],
                                M = s[12],
                                I = s[13],
                                R = s[14],
                                Q = s[11],
                                F = Math.atan2(P, j);
                            u.zOrigin && (M = A * (R = -u.zOrigin) - s[12], I = z * R - s[13], R = j * R + u.zOrigin - s[14]), u.rotationX = F * D, F && (m = O * (_ = Math.cos(-F)) + A * (b = Math.sin(-F)), w = S * _ + z * b, y = P * _ + j * b, A = O * -b + A * _, z = S * -b + z * _, j = P * -b + j * _, Q = C * -b + Q * _, O = m, S = w, P = y), F = Math.atan2(A, j), u.rotationY = F * D, F && (w = T * (_ = Math.cos(-F)) - z * (b = Math.sin(-F)), y = k * _ - j * b, z = T * b + z * _, j = k * b + j * _, Q = L * b + Q * _, x = m = x * _ - A * b, T = w, k = y), F = Math.atan2(T, x), u.rotation = F * D, F && (x = x * (_ = Math.cos(-F)) + O * (b = Math.sin(-F)), w = T * _ + S * b, S = T * -b + S * _, P = k * -b + P * _, T = w), u.rotationX && Math.abs(u.rotationX) + Math.abs(u.rotation) > 359.9 && (u.rotationX = u.rotation = 0, u.rotationY += 180), u.scaleX = (0 | 1e5 * Math.sqrt(x * x + T * T) + .5) / 1e5, u.scaleY = (0 | 1e5 * Math.sqrt(S * S + z * z) + .5) / 1e5, u.scaleZ = (0 | 1e5 * Math.sqrt(P * P + j * j) + .5) / 1e5, u.skewX = 0, u.perspective = Q ? 1 / (0 > Q ? -Q : Q) : 0, u.x = M, u.y = I, u.z = R, u.svg && (u.x -= u.xOrigin - (u.xOrigin * x - u.yOrigin * O), u.y -= u.yOrigin - (u.yOrigin * T - u.xOrigin * S))
                        } else if (!(Me && !r && s.length && u.x === s[4] && u.y === s[5] && (u.rotationX || u.rotationY) || void 0 !== u.x && "none" === $(e, "display", i))) {
                            var H = s.length >= 6,
                                E = H ? s[0] : 1,
                                W = s[1] || 0,
                                N = s[2] || 0,
                                X = H ? s[3] : 1;
                            u.x = s[4] || 0, u.y = s[5] || 0, d = Math.sqrt(E * E + W * W), h = Math.sqrt(X * X + N * N), p = E || W ? Math.atan2(W, E) * D : u.rotation || 0, c = N || X ? Math.atan2(N, X) * D + p : u.skewX || 0, Math.abs(c) > 90 && 270 > Math.abs(c) && (f ? (d *= -1, c += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (h *= -1, c += 0 >= c ? 180 : -180)), u.scaleX = d, u.scaleY = h, u.rotation = p, u.skewX = c, Me && (u.rotationX = u.rotationY = u.z = 0, u.perspective = v, u.scaleZ = 1), u.svg && (u.x -= u.xOrigin - (u.xOrigin * E + u.yOrigin * N), u.y -= u.yOrigin - (u.xOrigin * W + u.yOrigin * X))
                        }
                        u.zOrigin = g;
                        for (l in u) 2e-5 > u[l] && u[l] > -2e-5 && (u[l] = 0)
                    }
                    return a && (e._gsTransform = u, u.svg && (ke && e.style[Ae] ? t.delayedCall(.001, function() {
                        qe(e.style, Ae)
                    }) : !ke && e.getAttribute("transform") && t.delayedCall(.001, function() {
                        e.removeAttribute("transform")
                    }))), u
                },
                Ve = function(e) {
                    var t, i, a = this.data,
                        n = -a.rotation * R,
                        r = n + a.skewX * R,
                        o = 1e5,
                        s = (0 | Math.cos(n) * a.scaleX * o) / o,
                        l = (0 | Math.sin(n) * a.scaleX * o) / o,
                        d = (0 | Math.sin(r) * -a.scaleY * o) / o,
                        h = (0 | Math.cos(r) * a.scaleY * o) / o,
                        p = this.t.style,
                        c = this.t.currentStyle;
                    if (c) {
                        i = l, l = -d, d = -i, t = c.filter, p.filter = "";
                        var u, f, v = this.t.offsetWidth,
                            m = this.t.offsetHeight,
                            w = "absolute" !== c.position,
                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + l + ", M21=" + d + ", M22=" + h,
                            _ = a.x + v * a.xPercent / 100,
                            b = a.y + m * a.yPercent / 100;
                        if (null != a.ox && (_ += (u = (a.oxp ? .01 * v * a.ox : a.ox) - v / 2) - (u * s + (f = (a.oyp ? .01 * m * a.oy : a.oy) - m / 2) * l), b += f - (u * d + f * h)), w ? y += ", Dx=" + ((u = v / 2) - (u * s + (f = m / 2) * l) + _) + ", Dy=" + (f - (u * d + f * h) + b) + ")" : y += ", sizingMethod='auto expand')", p.filter = -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? t.replace(M, y) : y + " " + t, (0 === e || 1 === e) && 1 === s && 0 === l && 0 === d && 1 === h && (w && -1 === y.indexOf("Dx=0, Dy=0") || T.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && p.removeAttribute("filter")), !w) {
                            var k, L, O, S = 8 > g ? 1 : -1;
                            for (u = a.ieOffsetX || 0, f = a.ieOffsetY || 0, a.ieOffsetX = Math.round((v - ((0 > s ? -s : s) * v + (0 > l ? -l : l) * m)) / 2 + _), a.ieOffsetY = Math.round((m - ((0 > h ? -h : h) * m + (0 > d ? -d : d) * v)) / 2 + b), _e = 0; 4 > _e; _e++) L = ae[_e], k = c[L], i = -1 !== k.indexOf("px") ? parseFloat(k) : K(this.t, L, parseFloat(k), k.replace(x, "")) || 0, O = i !== a[L] ? 2 > _e ? -a.ieOffsetX : -a.ieOffsetY : 2 > _e ? u - a.ieOffsetX : f - a.ieOffsetY, p[L] = (a[L] = Math.round(i - O * (0 === _e || 2 === _e ? 1 : S))) + "px"
                        }
                    }
                },
                Ye = N.set3DTransformRatio = N.setTransformRatio = function(e) {
                    var t, i, a, n, r, o, s, l, d, h, p, c, f, g, v, m, w, y, _, b, x, T, k, L = this.data,
                        O = this.t.style,
                        S = L.rotation,
                        P = L.rotationX,
                        C = L.rotationY,
                        A = L.scaleX,
                        z = L.scaleY,
                        j = L.scaleZ,
                        M = L.x,
                        I = L.y,
                        D = L.z,
                        Q = L.svg,
                        F = L.perspective,
                        H = L.force3D;
                    if (!((1 !== e && 0 !== e || "auto" !== H || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && H || D || F || C || P) || ke && Q || !Me) S || L.skewX || Q ? (S *= R, T = L.skewX * R, k = 1e5, t = Math.cos(S) * A, n = Math.sin(S) * A, i = Math.sin(S - T) * -z, r = Math.cos(S - T) * z, T && "simple" === L.skewType && (w = Math.tan(T), i *= w = Math.sqrt(1 + w * w), r *= w, L.skewY && (t *= w, n *= w)), Q && (M += L.xOrigin - (L.xOrigin * t + L.yOrigin * i) + L.xOffset, I += L.yOrigin - (L.xOrigin * n + L.yOrigin * r) + L.yOffset, ke && (L.xPercent || L.yPercent) && (g = this.t.getBBox(), M += .01 * L.xPercent * g.width, I += .01 * L.yPercent * g.height), (g = 1e-6) > M && M > -g && (M = 0), g > I && I > -g && (I = 0)), _ = (0 | t * k) / k + "," + (0 | n * k) / k + "," + (0 | i * k) / k + "," + (0 | r * k) / k + "," + M + "," + I + ")", Q && ke ? this.t.setAttribute("transform", "matrix(" + _) : O[Ae] = (L.xPercent || L.yPercent ? "translate(" + L.xPercent + "%," + L.yPercent + "%) matrix(" : "matrix(") + _) : O[Ae] = (L.xPercent || L.yPercent ? "translate(" + L.xPercent + "%," + L.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + z + "," + M + "," + I + ")";
                    else {
                        if (u && ((g = 1e-4) > A && A > -g && (A = j = 2e-5), g > z && z > -g && (z = j = 2e-5), !F || L.z || L.rotationX || L.rotationY || (F = 0)), S || L.skewX) S *= R, v = t = Math.cos(S), m = n = Math.sin(S), L.skewX && (S -= L.skewX * R, v = Math.cos(S), m = Math.sin(S), "simple" === L.skewType && (w = Math.tan(L.skewX * R), w = Math.sqrt(1 + w * w), v *= w, m *= w, L.skewY && (t *= w, n *= w))), i = -m, r = v;
                        else {
                            if (!(C || P || 1 !== j || F || Q)) return void(O[Ae] = (L.xPercent || L.yPercent ? "translate(" + L.xPercent + "%," + L.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + I + "px," + D + "px)" + (1 !== A || 1 !== z ? " scale(" + A + "," + z + ")" : ""));
                            t = r = 1, i = n = 0
                        }
                        d = 1, a = o = s = l = h = p = 0, c = F ? -1 / F : 0, f = L.zOrigin, g = 1e-6, b = ",", x = "0", (S = C * R) && (v = Math.cos(S), s = -(m = Math.sin(S)), h = c * -m, a = t * m, o = n * m, d = v, c *= v, t *= v, n *= v), (S = P * R) && (w = i * (v = Math.cos(S)) + a * (m = Math.sin(S)), y = r * v + o * m, l = d * m, p = c * m, a = i * -m + a * v, o = r * -m + o * v, d *= v, c *= v, i = w, r = y), 1 !== j && (a *= j, o *= j, d *= j, c *= j), 1 !== z && (i *= z, r *= z, l *= z, p *= z), 1 !== A && (t *= A, n *= A, s *= A, h *= A), (f || Q) && (f && (M += a * -f, I += o * -f, D += d * -f + f), Q && (M += L.xOrigin - (L.xOrigin * t + L.yOrigin * i) + L.xOffset, I += L.yOrigin - (L.xOrigin * n + L.yOrigin * r) + L.yOffset), g > M && M > -g && (M = x), g > I && I > -g && (I = x), g > D && D > -g && (D = 0)), _ = L.xPercent || L.yPercent ? "translate(" + L.xPercent + "%," + L.yPercent + "%) matrix3d(" : "matrix3d(", _ += (g > t && t > -g ? x : t) + b + (g > n && n > -g ? x : n) + b + (g > s && s > -g ? x : s), _ += b + (g > h && h > -g ? x : h) + b + (g > i && i > -g ? x : i) + b + (g > r && r > -g ? x : r), P || C ? (_ += b + (g > l && l > -g ? x : l) + b + (g > p && p > -g ? x : p) + b + (g > a && a > -g ? x : a), _ += b + (g > o && o > -g ? x : o) + b + (g > d && d > -g ? x : d) + b + (g > c && c > -g ? x : c) + b) : _ += ",0,0,0,0,1,0,", _ += M + b + I + b + D + b + (F ? 1 + -D / F : 1) + ")", O[Ae] = _
                    }
                };
            (d = Ie.prototype).x = d.y = d.z = d.skewX = d.skewY = d.rotation = d.rotationX = d.rotationY = d.zOrigin = d.xPercent = d.yPercent = d.xOffset = d.yOffset = 0, d.scaleX = d.scaleY = d.scaleZ = 1, xe("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(e, t, i, a, r, s, l) {
                    if (a._lastParsedTransform === l) return r;
                    a._lastParsedTransform = l;
                    var d, h, p, c, u, f, g, v, m, w, y = e._gsTransform,
                        _ = e.style,
                        b = Ce.length,
                        x = l,
                        T = {},
                        k = "transformOrigin";
                    if (l.display ? (c = $(e, "display"), _.display = "block", d = Xe(e, n, !0, l.parseTransform), _.display = c) : d = Xe(e, n, !0, l.parseTransform), a._transform = d, "string" == typeof x.transform && Ae) c = E.style, c[Ae] = x.transform, c.display = "block", c.position = "absolute", F.body.appendChild(E), h = Xe(E, null, !1), F.body.removeChild(E), h.perspective || (h.perspective = d.perspective), null != x.xPercent && (h.xPercent = se(x.xPercent, d.xPercent)), null != x.yPercent && (h.yPercent = se(x.yPercent, d.yPercent));
                    else if ("object" == typeof x) {
                        if (h = {
                                scaleX: se(null != x.scaleX ? x.scaleX : x.scale, d.scaleX),
                                scaleY: se(null != x.scaleY ? x.scaleY : x.scale, d.scaleY),
                                scaleZ: se(x.scaleZ, d.scaleZ),
                                x: se(x.x, d.x),
                                y: se(x.y, d.y),
                                z: se(x.z, d.z),
                                xPercent: se(x.xPercent, d.xPercent),
                                yPercent: se(x.yPercent, d.yPercent),
                                perspective: se(x.transformPerspective, d.perspective)
                            }, null != (v = x.directionalRotation))
                            if ("object" == typeof v)
                                for (c in v) x[c] = v[c];
                            else x.rotation = v;
                        "string" == typeof x.x && -1 !== x.x.indexOf("%") && (h.x = 0, h.xPercent = se(x.x, d.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (h.y = 0, h.yPercent = se(x.y, d.yPercent)), h.rotation = le("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : "rotationZ" in x ? x.rotationZ : d.rotation, d.rotation, "rotation", T), Me && (h.rotationX = le("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : d.rotationX || 0, d.rotationX, "rotationX", T), h.rotationY = le("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : d.rotationY || 0, d.rotationY, "rotationY", T)), h.skewX = null == x.skewX ? d.skewX : le(x.skewX, d.skewX), h.skewY = null == x.skewY ? d.skewY : le(x.skewY, d.skewY), (p = h.skewY - d.skewY) && (h.skewX += p, h.rotation += p)
                    }
                    for (Me && null != x.force3D && (d.force3D = x.force3D, g = !0), d.skewType = x.skewType || d.skewType || o.defaultSkewType, (f = d.force3D || d.z || d.rotationX || d.rotationY || h.z || h.rotationX || h.rotationY || h.perspective) || null == x.scale || (h.scaleZ = 1); --b > -1;) i = Ce[b], u = h[i] - d[i], (u > 1e-6 || -1e-6 > u || null != x[i] || null != Q[i]) && (g = !0, r = new me(d, i, d[i], u, r), i in T && (r.e = T[i]), r.xs0 = 0, r.plugin = s, a._overwriteProps.push(r.n));
                    return u = x.transformOrigin, d.svg && (u || x.svgOrigin) && (m = d.xOffset, w = d.yOffset, He(e, re(u), h, x.svgOrigin, x.smoothOrigin), r = we(d, "xOrigin", (y ? d : h).xOrigin, h.xOrigin, r, k), r = we(d, "yOrigin", (y ? d : h).yOrigin, h.yOrigin, r, k), (m !== d.xOffset || w !== d.yOffset) && (r = we(d, "xOffset", y ? m : d.xOffset, d.xOffset, r, k), r = we(d, "yOffset", y ? w : d.yOffset, d.yOffset, r, k)), u = ke ? null : "0px 0px"), (u || Me && f && d.zOrigin) && (Ae ? (g = !0, i = je, u = (u || $(e, i, n, !1, "50% 50%")) + "", (r = new me(_, i, 0, 0, r, -1, k)).b = _[i], r.plugin = s, Me ? (c = d.zOrigin, u = u.split(" "), d.zOrigin = (u.length > 2 && (0 === c || "0px" !== u[2]) ? parseFloat(u[2]) : c) || 0, r.xs0 = r.e = u[0] + " " + (u[1] || "50%") + " 0px", (r = new me(d, "zOrigin", 0, 0, r, -1, r.n)).b = c, r.xs0 = r.e = d.zOrigin) : r.xs0 = r.e = u) : re(u + "", d)), g && (a._transformType = d.svg && ke || !f && 3 !== this._transformType ? 2 : 3), r
                },
                prefix: !0
            }), xe("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), xe("borderRadius", {
                defaultValue: "0px",
                parser: function(e, t, i, r, o) {
                    t = this.format(t);
                    var s, l, d, h, p, c, u, f, g, v, m, w, y, _, b, x, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        k = e.style;
                    for (g = parseFloat(e.offsetWidth), v = parseFloat(e.offsetHeight), s = t.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = G(T[l])), p = h = $(e, T[l], n, !1, "0px"), -1 !== p.indexOf(" ") && (h = p.split(" "), p = h[0], h = h[1]), c = d = s[l], u = parseFloat(p), w = p.substr((u + "").length), y = "=" === c.charAt(1), y ? (f = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), f *= parseFloat(c), m = c.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(c), m = c.substr((f + "").length)), "" === m && (m = a[i] || w), m !== w && (_ = K(e, "borderLeft", u, w), b = K(e, "borderTop", u, w), "%" === m ? (p = _ / g * 100 + "%", h = b / v * 100 + "%") : "em" === m ? (x = K(e, "borderLeft", 1, "em"), p = _ / x + "em", h = b / x + "em") : (p = _ + "px", h = b + "px"), y && (c = parseFloat(p) + f + m, d = parseFloat(h) + f + m)), o = ye(k, T[l], p + " " + h, c + " " + d, !1, "0px", o);
                    return o
                },
                prefix: !0,
                formatter: fe("0px 0px 0px 0px", !1, !0)
            }), xe("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(e, t, i, a, r, o) {
                    var s, l, d, h, p, c, u = "background-position",
                        f = n || Z(e, null),
                        v = this.format((f ? g ? f.getPropertyValue(u + "-x") + " " + f.getPropertyValue(u + "-y") : f.getPropertyValue(u) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                        m = this.format(t);
                    if (-1 !== v.indexOf("%") != (-1 !== m.indexOf("%")) && ((c = $(e, "backgroundImage").replace(C, "")) && "none" !== c)) {
                        for (s = v.split(" "), l = m.split(" "), W.setAttribute("src", c), d = 2; --d > -1;) v = s[d], h = -1 !== v.indexOf("%"), h !== (-1 !== l[d].indexOf("%")) && (p = 0 === d ? e.offsetWidth - W.width : e.offsetHeight - W.height, s[d] = h ? parseFloat(v) / 100 * p + "px" : parseFloat(v) / p * 100 + "%");
                        v = s.join(" ")
                    }
                    return this.parseComplex(e.style, v, m, r, o)
                },
                formatter: re
            }), xe("backgroundSize", {
                defaultValue: "0 0",
                formatter: re
            }), xe("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), xe("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), xe("transformStyle", {
                prefix: !0
            }), xe("backfaceVisibility", {
                prefix: !0
            }), xe("userSelect", {
                prefix: !0
            }), xe("margin", {
                parser: ge("marginTop,marginRight,marginBottom,marginLeft")
            }), xe("padding", {
                parser: ge("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), xe("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(e, t, i, a, r, o) {
                    var s, l, d;
                    return 9 > g ? (l = e.currentStyle, d = 8 > g ? " " : ",", s = "rect(" + l.clipTop + d + l.clipRight + d + l.clipBottom + d + l.clipLeft + ")", t = this.format(t).split(",").join(d)) : (s = this.format($(e, this.p, n, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, s, t, r, o)
                }
            }), xe("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), xe("autoRound,strictUnits", {
                parser: function(e, t, i, a, n) {
                    return n
                }
            }), xe("border", {
                defaultValue: "0px solid #000",
                parser: function(e, t, i, a, r, o) {
                    return this.parseComplex(e.style, this.format($(e, "borderTopWidth", n, !1, "0px") + " " + $(e, "borderTopStyle", n, !1, "solid") + " " + $(e, "borderTopColor", n, !1, "#000")), this.format(t), r, o)
                },
                color: !0,
                formatter: function(e) {
                    var t = e.split(" ");
                    return t[0] + " " + (t[1] || "solid") + " " + (e.match(ue) || ["#000"])[0]
                }
            }), xe("borderWidth", {
                parser: ge("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), xe("float,cssFloat,styleFloat", {
                parser: function(e, t, i, a, n) {
                    var r = e.style,
                        o = "cssFloat" in r ? "cssFloat" : "styleFloat";
                    return new me(r, o, 0, 0, n, -1, i, !1, 0, r[o], t)
                }
            });
            var Be = function(e) {
                var t, i = this.t,
                    a = i.filter || $(this.data, "filter") || "",
                    n = 0 | this.s + this.c * e;
                100 === n && (-1 === a.indexOf("atrix(") && -1 === a.indexOf("radient(") && -1 === a.indexOf("oader(") ? (i.removeAttribute("filter"), t = !$(this.data, "filter")) : (i.filter = a.replace(L, ""), t = !0)), t || (this.xn1 && (i.filter = a = a || "alpha(opacity=" + n + ")"), -1 === a.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = a + " alpha(opacity=" + n + ")") : i.filter = a.replace(T, "opacity=" + n))
            };
            xe("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(e, t, i, a, r, o) {
                    var s = parseFloat($(e, "opacity", n, !1, "1")),
                        l = e.style,
                        d = "autoAlpha" === i;
                    return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + s), d && 1 === s && "hidden" === $(e, "visibility", n) && 0 !== t && (s = 0), V ? r = new me(l, "opacity", s, t - s, r) : ((r = new me(l, "opacity", 100 * s, 100 * (t - s), r)).xn1 = d ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = e, r.plugin = o, r.setRatio = Be), d && ((r = new me(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit")).xs0 = "inherit", a._overwriteProps.push(r.n), a._overwriteProps.push(i)), r
                }
            });
            var qe = function(e, t) {
                    t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(S, "-$1").toLowerCase())) : e.removeAttribute(t))
                },
                Ue = function(e) {
                    if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                        this.t.setAttribute("class", 0 === e ? this.b : this.e);
                        for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : qe(i, t.p), t = t._next;
                        1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            xe("className", {
                parser: function(e, t, a, r, o, s, l) {
                    var d, h, p, c, u, f = e.getAttribute("class") || "",
                        g = e.style.cssText;
                    if ((o = r._classNamePT = new me(e, a, 0, 0, o, 2)).setRatio = Ue, o.pr = -11, i = !0, o.b = f, h = ee(e, n), p = e._gsClassPT) {
                        for (c = {}, u = p.data; u;) c[u.p] = 1, u = u._next;
                        p.setRatio(1)
                    }
                    return e._gsClassPT = o, o.e = "=" !== t.charAt(1) ? t : f.replace(RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", o.e), d = te(e, h, ee(e), l, c), e.setAttribute("class", f), o.data = d.firstMPT, e.style.cssText = g, o.xfirst = r.parse(e, d.difs, o, s)
                }
            });
            var Ge = function(e) {
                if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var t, i, a, n, r, o = this.t.style,
                        s = l.transform.parse;
                    if ("all" === this.e) o.cssText = "", n = !0;
                    else
                        for (t = this.e.split(" ").join("").split(","), a = t.length; --a > -1;) i = t[a], l[i] && (l[i].parse === s ? n = !0 : i = "transformOrigin" === i ? je : l[i].p), qe(o, i);
                    n && (qe(o, Ae), (r = this.t._gsTransform) && (r.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                }
            };
            for (xe("clearProps", {
                    parser: function(e, t, a, n, r) {
                        return (r = new me(e, a, 0, 0, r, 2)).setRatio = Ge, r.e = t, r.pr = -10, r.data = n._tween, i = !0, r
                    }
                }), d = "bezier,throwProps,physicsProps,physics2D".split(","), _e = d.length; _e--;) Te(d[_e]);
            (d = o.prototype)._firstPT = d._lastParsedTransform = d._transform = null, d._onInitTween = function(e, t, s) {
                if (!e.nodeType) return !1;
                this._target = e, this._tween = s, this._vars = t, h = t.autoRound, i = !1, a = t.suffixMap || o.suffixMap, n = Z(e, ""), r = this._overwriteProps;
                var d, u, g, v, m, w, y, _, b, x = e.style;
                if (p && "" === x.zIndex && (("auto" === (d = $(e, "zIndex", n)) || "" === d) && this._addLazySet(x, "zIndex", 0)), "string" == typeof t && (v = x.cssText, d = ee(e, n), x.cssText = v + ";" + t, d = te(e, d, ee(e)).difs, !V && k.test(t) && (d.opacity = parseFloat(RegExp.$1)), t = d, x.cssText = v), this._firstPT = u = t.className ? l.className.parse(e, t.className, "className", this, null, null, t) : this.parse(e, t, null), this._transformType) {
                    for (b = 3 === this._transformType, Ae ? c && (p = !0, "" === x.zIndex && (("auto" === (y = $(e, "zIndex", n)) || "" === y) && this._addLazySet(x, "zIndex", 0)), f && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden"))) : x.zoom = 1, g = u; g && g._next;) g = g._next;
                    _ = new me(e, "transform", 0, 0, null, 2), this._linkCSSP(_, null, g), _.setRatio = Ae ? Ye : Ve, _.data = this._transform || Xe(e, n, !0), _.tween = s, _.pr = -1, r.pop()
                }
                if (i) {
                    for (; u;) {
                        for (w = u._next, g = v; g && g.pr > u.pr;) g = g._next;
                        (u._prev = g ? g._prev : m) ? u._prev._next = u: v = u, (u._next = g) ? g._prev = u : m = u, u = w
                    }
                    this._firstPT = v
                }
                return !0
            }, d.parse = function(e, t, i, r) {
                var o, s, d, p, c, u, f, g, v, m, w = e.style;
                for (o in t) u = t[o], s = l[o], s ? i = s.parse(e, u, o, this, i, r, t) : (c = $(e, o, n) + "", v = "string" == typeof u, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || v && O.test(u) ? (v || (u = pe(u), u = (u.length > 3 ? "rgba(" : "rgb(") + u.join(",") + ")"), i = ye(w, o, c, u, !0, "transparent", i, 0, r)) : !v || -1 === u.indexOf(" ") && -1 === u.indexOf(",") ? (d = parseFloat(c), f = d || 0 === d ? c.substr((d + "").length) : "", ("" === c || "auto" === c) && ("width" === o || "height" === o ? (d = ne(e, o, n), f = "px") : "left" === o || "top" === o ? (d = J(e, o, n), f = "px") : (d = "opacity" !== o ? 0 : 1, f = "")), m = v && "=" === u.charAt(1), m ? (p = parseInt(u.charAt(0) + "1", 10), u = u.substr(2), p *= parseFloat(u), g = u.replace(x, "")) : (p = parseFloat(u), g = v ? u.replace(x, "") : ""), "" === g && (g = o in a ? a[o] : f), u = p || 0 === p ? (m ? p + d : p) + g : t[o], f !== g && "" !== g && (p || 0 === p) && d && (d = K(e, o, d, f), "%" === g ? (d /= K(e, o, 100, "%") / 100, !0 !== t.strictUnits && (c = d + "%")) : "em" === g || "rem" === g ? d /= K(e, o, 1, g) : "px" !== g && (p = K(e, o, p, g), g = "px"), m && (p || 0 === p) && (u = p + d + g)), m && (p += d), !d && 0 !== d || !p && 0 !== p ? void 0 !== w[o] && (u || "NaN" != u + "" && null != u) ? (i = new me(w, o, p || d || 0, 0, i, -1, o, !1, 0, c, u), i.xs0 = "none" !== u || "display" !== o && -1 === o.indexOf("Style") ? u : c) : B("invalid " + o + " tween value: " + t[o]) : (i = new me(w, o, d, p - d, i, 0, o, !1 !== h && ("px" === g || "zIndex" === o), 0, c, u), i.xs0 = g)) : i = ye(w, o, c, u, !0, null, i, 0, r)), r && i && !i.plugin && (i.plugin = r);
                return i
            }, d.setRatio = function(e) {
                var t, i, a, n = this._firstPT;
                if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; n;) {
                            if (t = n.c * e + n.s, n.r ? t = Math.round(t) : 1e-6 > t && t > -1e-6 && (t = 0), n.type)
                                if (1 === n.type)
                                    if (a = n.l, 2 === a) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2;
                                    else if (3 === a) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                            else if (4 === a) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                            else if (5 === a) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                            else {
                                for (i = n.xs0 + t + n.xs1, a = 1; n.l > a; a++) i += n["xn" + a] + n["xs" + (a + 1)];
                                n.t[n.p] = i
                            } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(e);
                            else n.t[n.p] = t + n.xs0;
                            n = n._next
                        } else
                            for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(e), n = n._next;
                    else
                        for (; n;) {
                            if (2 !== n.type)
                                if (n.r && -1 !== n.type)
                                    if (t = Math.round(n.s + n.c), n.type) {
                                        if (1 === n.type) {
                                            for (a = n.l, i = n.xs0 + t + n.xs1, a = 1; n.l > a; a++) i += n["xn" + a] + n["xs" + (a + 1)];
                                            n.t[n.p] = i
                                        }
                                    } else n.t[n.p] = t + n.xs0;
                            else n.t[n.p] = n.e;
                            else n.setRatio(e);
                            n = n._next
                        }
            }, d._enableTransforms = function(e) {
                this._transform = this._transform || Xe(this._target, n, !0), this._transformType = this._transform.svg && ke || !e && 3 !== this._transformType ? 2 : 3
            };
            var Ze = function() {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            d._addLazySet = function(e, t, i) {
                var a = this._firstPT = new me(e, t, 0, 0, this._firstPT, 2);
                a.e = i, a.setRatio = Ze, a.data = this
            }, d._linkCSSP = function(e, t, i, a) {
                return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, a = !0), i ? i._next = e : a || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = i), e
            }, d._kill = function(t) {
                var i, a, n, r = t;
                if (t.autoAlpha || t.alpha) {
                    r = {};
                    for (a in t) r[a] = t[a];
                    r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                }
                return t.className && (i = this._classNamePT) && ((n = i.xfirst) && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, n._prev), this._classNamePT = null), e.prototype._kill.call(this, r)
            };
            var $e = function(e, t, i) {
                var a, n, r, o;
                if (e.slice)
                    for (n = e.length; --n > -1;) $e(e[n], t, i);
                else
                    for (a = e.childNodes, n = a.length; --n > -1;) r = a[n], o = r.type, r.style && (t.push(ee(r)), i && i.push(r)), 1 !== o && 9 !== o && 11 !== o || !r.childNodes.length || $e(r, t, i)
            };
            return o.cascadeTo = function(e, i, a) {
                var n, r, o, s, l = t.to(e, i, a),
                    d = [l],
                    h = [],
                    p = [],
                    c = [],
                    u = t._internals.reservedProps;
                for (e = l._targets || l.target, $e(e, h, c), l.render(i, !0, !0), $e(e, p), l.render(0, !0, !0), l._enabled(!0), n = c.length; --n > -1;)
                    if (r = te(c[n], h[n], p[n]), r.firstMPT) {
                        r = r.difs;
                        for (o in a) u[o] && (r[o] = a[o]);
                        s = {};
                        for (o in r) s[o] = h[n][o];
                        d.push(t.fromTo(c[n], i, s, r))
                    }
                return d
            }, e.activate([o]), o
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope).CSSPlugin
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = t())
    }();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(function(e) {
    "use strict";
    var t = e.GreenSockGlobals || e,
        i = function(e) {
            var i, a = e.split("."),
                n = t;
            for (i = 0; a.length > i; i++) n[a[i]] = n = n[a[i]] || {};
            return n
        }("com.greensock.utils"),
        a = function(e) {
            var t = e.nodeType,
                i = "";
            if (1 === t || 9 === t || 11 === t) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) i += a(e)
            } else if (3 === t || 4 === t) return e.nodeValue;
            return i
        },
        n = document,
        r = n.defaultView ? n.defaultView.getComputedStyle : function() {},
        o = /([A-Z])/g,
        s = function(e, t, i, a) {
            var n;
            return (i = i || r(e, null)) ? n = (e = i.getPropertyValue(t.replace(o, "-$1").toLowerCase())) || i.length ? e : i[t] : e.currentStyle && (n = (i = e.currentStyle)[t]), a ? n : parseInt(n, 10) || 0
        },
        l = function(e) {
            return !!(e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]))
        },
        d = ")eefec303079ad17405c",
        h = /(?:<br>|<br\/>|<br \/>)/gi,
        p = "<div style='position:relative;display:inline-block;" + (n.all && !n.addEventListener ? "*display:inline;*zoom:1;'" : "'"),
        c = function(e) {
            var t = -1 !== (e = e || "").indexOf("++"),
                i = 1;
            return t && (e = e.split("++").join("")),
                function() {
                    return p + (e ? " class='" + e + (t ? i++ : "") + "'>" : ">")
                }
        },
        u = i.SplitText = t.SplitText = function(e, t) {
            if ("string" == typeof e && (e = u.selector(e)), !e) throw "cannot split a null element.";
            this.elements = l(e) ? function(e) {
                var t, i, a, n = [],
                    r = e.length;
                for (t = 0; r > t; t++)
                    if (i = e[t], l(i))
                        for (a = i.length, a = 0; i.length > a; a++) n.push(i[a]);
                    else n.push(i);
                return n
            }(e) : [e], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = t || {}, this.split(t)
        },
        f = function(e, t, i) {
            var a = e.nodeType;
            if (1 === a || 9 === a || 11 === a)
                for (e = e.firstChild; e; e = e.nextSibling) f(e, t, i);
            else(3 === a || 4 === a) && (e.nodeValue = e.nodeValue.split(t).join(i))
        },
        g = function(e, t) {
            for (var i = t.length; --i > -1;) e.push(t[i])
        },
        v = function(e, t, i, o, l) {
            h.test(e.innerHTML) && (e.innerHTML = e.innerHTML.replace(h, d));
            var p, u, v, m, w, y, _, b, x, T, k, L, O, S, P = a(e),
                C = t.type || t.split || "chars,words,lines",
                A = -1 !== C.indexOf("lines") ? [] : null,
                z = -1 !== C.indexOf("words"),
                j = -1 !== C.indexOf("chars"),
                M = "absolute" === t.position || !0 === t.absolute,
                I = M ? "&#173; " : " ",
                R = -999,
                D = r(e),
                Q = s(e, "paddingLeft", D),
                F = s(e, "borderBottomWidth", D) + s(e, "borderTopWidth", D),
                H = s(e, "borderLeftWidth", D) + s(e, "borderRightWidth", D),
                E = s(e, "paddingTop", D) + s(e, "paddingBottom", D),
                W = s(e, "paddingLeft", D) + s(e, "paddingRight", D),
                N = s(e, "textAlign", D, !0),
                X = e.clientHeight,
                V = e.clientWidth,
                Y = "</div>",
                B = c(t.wordsClass),
                q = c(t.charsClass),
                U = -1 !== (t.linesClass || "").indexOf("++"),
                G = t.linesClass,
                Z = -1 !== P.indexOf("<"),
                $ = !0,
                K = [],
                J = [],
                ee = [];
            for (U && (G = G.split("++").join("")), Z && (P = P.split("<").join("{{LT}}")), p = P.length, m = B(), w = 0; p > w; w++)
                if (_ = P.charAt(w), ")" === _ && P.substr(w, 20) === d) m += ($ ? Y : "") + "<BR/>", $ = !1, w !== p - 20 && P.substr(w + 20, 20) !== d && (m += " " + B(), $ = !0), w += 19;
                else if (" " === _ && " " !== P.charAt(w - 1) && w !== p - 1 && P.substr(w - 20, 20) !== d) {
                for (m += $ ? Y : "", $ = !1;
                    " " === P.charAt(w + 1);) m += I, w++;
                (")" !== P.charAt(w + 1) || P.substr(w + 1, 20) !== d) && (m += I + B(), $ = !0)
            } else "{" === _ && "{{LT}}" === P.substr(w, 6) ? (m += j ? q() + "{{LT}}</div>" : "{{LT}}", w += 5) : m += j && " " !== _ ? q() + _ + "</div>" : _;
            for (e.innerHTML = m + ($ ? Y : ""), Z && f(e, "{{LT}}", "<"), p = (y = e.getElementsByTagName("*")).length, b = [], w = 0; p > w; w++) b[w] = y[w];
            if (A || M)
                for (w = 0; p > w; w++) x = b[w], v = x.parentNode === e, (v || M || j && !z) && (T = x.offsetTop, A && v && T !== R && "BR" !== x.nodeName && (u = [], A.push(u), R = T), M && (x._x = x.offsetLeft, x._y = T, x._w = x.offsetWidth, x._h = x.offsetHeight), A && (z !== v && j || (u.push(x), x._x -= Q), v && w && (b[w - 1]._wordEnd = !0), "BR" === x.nodeName && x.nextSibling && "BR" === x.nextSibling.nodeName && A.push([])));
            for (w = 0; p > w; w++) x = b[w], v = x.parentNode === e, "BR" !== x.nodeName ? (M && (L = x.style, z || v || (x._x += x.parentNode._x, x._y += x.parentNode._y), L.left = x._x + "px", L.top = x._y + "px", L.position = "absolute", L.display = "block", L.width = x._w + 1 + "px", L.height = x._h + "px"), z ? v && "" !== x.innerHTML ? J.push(x) : j && K.push(x) : v ? (e.removeChild(x), b.splice(w--, 1), p--) : !v && j && (T = !A && !M && x.nextSibling, e.appendChild(x), T || e.appendChild(n.createTextNode(" ")), K.push(x))) : A || M ? (e.removeChild(x), b.splice(w--, 1), p--) : z || e.appendChild(x);
            if (A) {
                for (M && (k = n.createElement("div"), e.appendChild(k), O = k.offsetWidth + "px", T = k.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(k)), L = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
                for (S = !M || !z && !j, w = 0; A.length > w; w++) {
                    for (u = A[w], (k = n.createElement("div")).style.cssText = "display:block;text-align:" + N + ";position:" + (M ? "absolute;" : "relative;"), G && (k.className = G + (U ? w + 1 : "")), ee.push(k), p = u.length, y = 0; p > y; y++) "BR" !== u[y].nodeName && (x = u[y], k.appendChild(x), S && (x._wordEnd || z) && k.appendChild(n.createTextNode(" ")), M && (0 === y && (k.style.top = x._y + "px", k.style.left = Q + T + "px"), x.style.top = "0px", T && (x.style.left = x._x - T + "px")));
                    0 === p && (k.innerHTML = "&nbsp;"), z || j || (k.innerHTML = a(k).split(String.fromCharCode(160)).join(" ")), M && (k.style.width = O, k.style.height = x._h + "px"), e.appendChild(k)
                }
                e.style.cssText = L
            }
            M && (X > e.clientHeight && (e.style.height = X - E + "px", X > e.clientHeight && (e.style.height = X + F + "px")), V > e.clientWidth && (e.style.width = V - W + "px", V > e.clientWidth && (e.style.width = V + H + "px"))), g(i, K), g(o, J), g(l, ee)
        },
        m = u.prototype;
    m.split = function(e) {
        this.isSplit && this.revert(), this.vars = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var t = this.elements.length; --t > -1;) this._originals[t] = this.elements[t].innerHTML, v(this.elements[t], this.vars, this.chars, this.words, this.lines);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, m.revert = function() {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var e = this._originals.length; --e > -1;) this.elements[e].innerHTML = this._originals[e];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, u.selector = e.$ || e.jQuery || function(t) {
        var i = e.$ || e.jQuery;
        return i ? (u.selector = i, i(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
    }, u.version = "0.3.4"
})(_gsScope),
function(e) {
    "use strict";
    var t = function() {
        return (_gsScope.GreenSockGlobals || _gsScope).SplitText
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (module.exports = t())
}();
try {
    window.GreenSockGlobals = null, window._gsQueue = null, window._gsDefine = null, delete window.GreenSockGlobals, delete window._gsQueue, delete window._gsDefine
} catch (e) {}
try {
    window.GreenSockGlobals = oldgs, window._gsQueue = oldgs_queue
} catch (e) {}
if (1 == window.tplogs) try {
        console.groupEnd()
    } catch (e) {}! function(e, t) {
        e.waitForImages = {
            hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
        }, e.expr[":"].uncached = function(t) {
            var i = document.createElement("img");
            return i.src = t.src, e(t).is('img[src!=""]') && !i.complete
        }, e.fn.waitForImages = function(t, i, a) {
            if (e.isPlainObject(arguments[0]) && (i = t.each, a = t.waitForAll, t = t.finished), t = t || e.noop, i = i || e.noop, a = !!a, !e.isFunction(t) || !e.isFunction(i)) throw new TypeError("An invalid callback was supplied.");
            return this.each(function() {
                var n = e(this),
                    r = [];
                if (a) {
                    var o = e.waitForImages.hasImageProperties || [],
                        s = /url\((['"]?)(.*?)\1\)/g;
                    n.find("*").each(function() {
                        var t = e(this);
                        t.is("img:uncached") && r.push({
                            src: t.attr("src"),
                            element: t[0]
                        }), e.each(o, function(e, i) {
                            var a, n = t.css(i);
                            if (!n) return !0;
                            for (; a = s.exec(n);) r.push({
                                src: a[2],
                                element: t[0]
                            })
                        })
                    })
                } else n.find("img:uncached").each(function() {
                    r.push({
                        src: this.src,
                        element: this
                    })
                });
                var l = r.length,
                    d = 0;
                0 == l && t.call(n[0]), e.each(r, function(a, r) {
                    var o = new Image;
                    e(o).bind("load error", function(e) {
                        if (d++, i.call(r.element, d, l, "load" == e.type), d == l) return t.call(n[0]), !1
                    }), o.src = r.src
                })
            })
        }
    }(jQuery),
    function(e, t) {
        "use strict";
        e.fn.extend({
            revolution: function(a) {
                return a = e.extend(!0, {}, {
                    delay: 9e3,
                    responsiveLevels: 4064,
                    visibilityLevels: [2048, 1024, 778, 480],
                    gridwidth: 960,
                    gridheight: 500,
                    minHeight: 0,
                    autoHeight: "off",
                    sliderType: "standard",
                    sliderLayout: "auto",
                    fullScreenAutoWidth: "off",
                    fullScreenAlignForce: "off",
                    fullScreenOffsetContainer: "",
                    fullScreenOffset: "0",
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLimit: 0,
                    hideSliderAtLimit: 0,
                    disableProgressBar: "off",
                    stopAtSlide: -1,
                    stopAfterLoops: -1,
                    shadow: 0,
                    dottedOverlay: "none",
                    startDelay: 0,
                    lazyType: "smart",
                    spinner: "spinner0",
                    shuffle: "off",
                    viewPort: {
                        enable: !1,
                        outof: "wait",
                        visible_area: "60%"
                    },
                    fallbacks: {
                        isJoomla: !1,
                        panZoomDisableOnMobile: "off",
                        simplifyAll: "on",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: !0
                    },
                    parallax: {
                        type: "off",
                        levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                        origo: "enterpoint",
                        speed: 400,
                        bgparallax: "on",
                        opacity: "on",
                        disable_onmobile: "off",
                        ddd_shadow: "on",
                        ddd_bgfreeze: "off",
                        ddd_overflow: "visible",
                        ddd_layer_overflow: "visible",
                        ddd_z_correction: 65,
                        ddd_path: "mouse"
                    },
                    carousel: {
                        horizontal_align: "center",
                        vertical_align: "center",
                        infinity: "on",
                        space: 0,
                        maxVisibleItems: 3,
                        stretch: "off",
                        fadeout: "on",
                        maxRotation: 0,
                        minScale: 0,
                        vary_fade: "off",
                        vary_rotation: "on",
                        vary_scale: "off",
                        border_radius: "0px",
                        padding_top: 0,
                        padding_bottom: 0
                    },
                    navigation: {
                        keyboardNavigation: "on",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        onHoverStop: "on",
                        touch: {
                            touchenabled: "off",
                            swipe_treshold: 75,
                            swipe_min_touches: 1,
                            drag_block_vertical: !1,
                            swipe_direction: "horizontal"
                        },
                        arrows: {
                            style: "",
                            enable: !1,
                            hide_onmobile: !1,
                            hide_onleave: !0,
                            hide_delay: 200,
                            hide_delay_mobile: 1200,
                            hide_under: 0,
                            hide_over: 9999,
                            tmp: "",
                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 20,
                                v_offset: 0
                            },
                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 20,
                                v_offset: 0
                            }
                        },
                        bullets: {
                            style: "",
                            enable: !1,
                            hide_onmobile: !1,
                            hide_onleave: !0,
                            hide_delay: 200,
                            hide_delay_mobile: 1200,
                            hide_under: 0,
                            hide_over: 9999,
                            direction: "horizontal",
                            h_align: "left",
                            v_align: "center",
                            space: 0,
                            h_offset: 20,
                            v_offset: 0,
                            tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
                        },
                        thumbnails: {
                            style: "",
                            enable: !1,
                            width: 100,
                            height: 50,
                            min_width: 100,
                            wrapper_padding: 2,
                            wrapper_color: "#f5f5f5",
                            wrapper_opacity: 1,
                            tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
                            visibleAmount: 5,
                            hide_onmobile: !1,
                            hide_onleave: !0,
                            hide_delay: 200,
                            hide_delay_mobile: 1200,
                            hide_under: 0,
                            hide_over: 9999,
                            direction: "horizontal",
                            span: !1,
                            position: "inner",
                            space: 2,
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        },
                        tabs: {
                            style: "",
                            enable: !1,
                            width: 100,
                            min_width: 100,
                            height: 50,
                            wrapper_padding: 10,
                            wrapper_color: "#f5f5f5",
                            wrapper_opacity: 1,
                            tmp: '<span class="tp-tab-image"></span>',
                            visibleAmount: 5,
                            hide_onmobile: !1,
                            hide_onleave: !0,
                            hide_delay: 200,
                            hide_delay_mobile: 1200,
                            hide_under: 0,
                            hide_over: 9999,
                            direction: "horizontal",
                            span: !1,
                            space: 0,
                            position: "inner",
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        }
                    },
                    extensions: "extensions/",
                    extensions_suffix: ".min.js",
                    debugMode: !1
                }, a), this.each(function() {
                    var n = e(this);
                    "hero" == a.sliderType && n.find(">ul>li").each(function(t) {
                        t > 0 && e(this).remove()
                    }), a.jsFileLocation = a.jsFileLocation || s("themepunch.revolution.min.js"), a.jsFileLocation = a.jsFileLocation + a.extensions, a.scriptsneeded = r(a, n), a.curWinRange = 0, e(this).on("scriptsloaded", function() {
                        return a.modulesfailing ? (n.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.' + a.errorm + "</div>").show(), !1) : (i.migration != t && (a = i.migration(n, a)), punchgs.force3D = !0, "on" !== a.simplifyAll && punchgs.TweenLite.lagSmoothing(1e3, 16), d(n, a), void p(n, a))
                    }), o(n, a.scriptsneeded)
                })
            },
            revaddcallback: function(i) {
                return this.each(function() {
                    var a = e(this);
                    if (a != t && a.length > 0 && e("body").find("#" + a.attr("id")).length > 0) {
                        var n = a.parent().find(".tp-bannertimer").data("opt");
                        n.callBackArray === t && (n.callBackArray = new Array), n.callBackArray.push(i)
                    }
                })
            },
            revgetparallaxproc: function() {
                var i = e(this);
                if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) return i.parent().find(".tp-bannertimer").data("opt").scrollproc
            },
            revdebugmode: function() {
                return this.each(function() {
                    var i = e(this);
                    if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) {
                        var a = i.parent().find(".tp-bannertimer").data("opt");
                        a.debugMode = !0, v(i, a)
                    }
                })
            },
            revscroll: function(i) {
                return this.each(function() {
                    var a = e(this);
                    a != t && a.length > 0 && e("body").find("#" + a.attr("id")).length > 0 && e("body,html").animate({
                        scrollTop: a.offset().top + opt.li[0].height() - i + "px"
                    }, {
                        duration: 400
                    })
                })
            },
            revredraw: function() {
                return this.each(function() {
                    var i = e(this);
                    if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) {
                        var a = i.parent().find(".tp-bannertimer").data("opt");
                        v(i, a)
                    }
                })
            },
            revkill: function() {
                var a = e(this);
                if (punchgs.TweenLite.killDelayedCallsTo(i.showHideNavElements), i.endMoveCaption && punchgs.TweenLite.killDelayedCallsTo(i.endMoveCaption), a != t && a.length > 0 && e("body").find("#" + a.attr("id")).length > 0) {
                    a.data("conthover", 1), a.data("conthover-changed", 1), a.trigger("revolution.slide.onpause");
                    var n = a.parent().find(".tp-bannertimer"),
                        r = n.data("opt");
                    r.tonpause = !0, a.trigger("stoptimer"), punchgs.TweenLite.killTweensOf(a.find("*"), !1), punchgs.TweenLite.killTweensOf(a, !1), a.unbind("hover, mouseover, mouseenter,mouseleave, resize");
                    var o = "resize.revslider-" + a.attr("id");
                    e(window).off(o), a.find("*").each(function() {
                        var i = e(this);
                        i.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), i.off("on, hover, mouseenter,mouseleave,mouseover, resize"), i.data("mySplitText", null), i.data("ctl", null), i.data("tween") != t && i.data("tween").kill(), i.data("kenburn") != t && i.data("kenburn").kill(), i.data("timeline_out") != t && i.data("timeline_out").kill(), i.data("timeline") != t && i.data("timeline").kill(), i.remove(), i.empty(), i = null
                    }), punchgs.TweenLite.killTweensOf(a.find("*"), !1), punchgs.TweenLite.killTweensOf(a, !1), n.remove();
                    try {
                        a.closest(".forcefullwidth_wrapper_tp_banner").remove()
                    } catch (e) {}
                    try {
                        a.closest(".rev_slider_wrapper").remove()
                    } catch (e) {}
                    try {
                        a.remove()
                    } catch (e) {}
                    return a.empty(), a.html(), a = null, r = null, delete this.c, delete this.opt, !0
                }
                return !1
            },
            revpause: function() {
                return this.each(function() {
                    var i = e(this);
                    i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0 && (i.data("conthover", 1), i.data("conthover-changed", 1), i.trigger("revolution.slide.onpause"), i.parent().find(".tp-bannertimer").data("opt").tonpause = !0, i.trigger("stoptimer"))
                })
            },
            revresume: function() {
                return this.each(function() {
                    var i = e(this);
                    i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0 && (i.data("conthover", 0), i.data("conthover-changed", 1), i.trigger("revolution.slide.onresume"), i.parent().find(".tp-bannertimer").data("opt").tonpause = !1, i.trigger("starttimer"))
                })
            },
            revnext: function() {
                return this.each(function() {
                    var a = e(this);
                    if (a != t && a.length > 0 && e("body").find("#" + a.attr("id")).length > 0) {
                        var n = a.parent().find(".tp-bannertimer").data("opt");
                        i.callingNewSlide(n, a, 1)
                    }
                })
            },
            revprev: function() {
                return this.each(function() {
                    var a = e(this);
                    if (a != t && a.length > 0 && e("body").find("#" + a.attr("id")).length > 0) {
                        var n = a.parent().find(".tp-bannertimer").data("opt");
                        i.callingNewSlide(n, a, -1)
                    }
                })
            },
            revmaxslide: function() {
                return e(this).find(".tp-revslider-mainul >li").length
            },
            revcurrentslide: function() {
                var i = e(this);
                if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) {
                    var a = i.parent().find(".tp-bannertimer").data("opt");
                    return parseInt(a.act, 0) + 1
                }
            },
            revlastslide: function() {
                return e(this).find(".tp-revslider-mainul >li").length
            },
            revshowslide: function(a) {
                return this.each(function() {
                    var n = e(this);
                    if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) {
                        var r = n.parent().find(".tp-bannertimer").data("opt");
                        i.callingNewSlide(r, n, "to" + (a - 1))
                    }
                })
            },
            revcallslidewithid: function(a) {
                return this.each(function() {
                    var n = e(this);
                    if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) {
                        var r = n.parent().find(".tp-bannertimer").data("opt");
                        i.callingNewSlide(r, n, a)
                    }
                })
            }
        });
        var i = e.fn.revolution;
        e.extend(!0, i, {
            simp: function(e, t, i) {
                var a = Math.abs(e) - Math.floor(Math.abs(e / t)) * t;
                return i ? a : 0 > e ? -1 * a : a
            },
            iOSVersion: function() {
                var e = !1;
                return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (e = !0) : e = !1, e
            },
            isIE: function(t, i) {
                var a = e('<div style="display:none;"/>').appendTo(e("body"));
                a.html("\x3c!--[if " + (i || "") + " IE " + (t || "") + "]><a>&nbsp;</a><![endif]--\x3e");
                var n = a.find("a").length;
                return a.remove(), n
            },
            is_mobile: function() {
                var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                    t = !1;
                for (var i in e) navigator.userAgent.split(e[i]).length > 1 && (t = !0);
                return t
            },
            callBackHandling: function(t, i, a) {
                try {
                    t.callBackArray && e.each(t.callBackArray, function(e, t) {
                        t && t.inmodule && t.inmodule === i && t.atposition && t.atposition === a && t.callback && t.callback.call()
                    })
                } catch (e) {
                    console.log("Call Back Failed")
                }
            },
            get_browser: function() {
                var e, t = navigator.appName,
                    i = navigator.userAgent,
                    a = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
                return a && null != (e = i.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), (a = a ? [a[1], a[2]] : [t, navigator.appVersion, "-?"])[0]
            },
            get_browser_version: function() {
                var e, t = navigator.appName,
                    i = navigator.userAgent,
                    a = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
                return a && null != (e = i.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), (a = a ? [a[1], a[2]] : [t, navigator.appVersion, "-?"])[1]
            },
            getHorizontalOffset: function(e, t) {
                var i = h(e, ".outer-left"),
                    a = h(e, ".outer-right");
                switch (t) {
                    case "left":
                        return i;
                    case "right":
                        return a;
                    case "both":
                        return i + a
                }
            },
            callingNewSlide: function(t, i, a) {
                var n = i.find(".next-revslide").length > 0 ? i.find(".next-revslide").index() : i.find(".processing-revslide").length > 0 ? i.find(".processing-revslide").index() : i.find(".active-revslide").index(),
                    r = 0;
                i.find(".next-revslide").removeClass("next-revslide"), a && e.isNumeric(a) || a.match(/to/g) ? (1 === a || -1 === a ? r = 0 > (r = n + a) ? t.slideamount - 1 : r >= t.slideamount ? 0 : r : r = 0 > (a = e.isNumeric(a) ? a : parseInt(a.split("to")[1], 0)) ? 0 : a > t.slideamount - 1 ? t.slideamount - 1 : a, i.find(".tp-revslider-slidesli:eq(" + r + ")").addClass("next-revslide")) : a && i.find(".tp-revslider-slidesli").each(function() {
                    var t = e(this);
                    t.data("index") === a && t.addClass("next-revslide")
                }), r = i.find(".next-revslide").index(), i.trigger("revolution.nextslide.waiting"), r !== n && -1 != r ? O(i, t) : i.find(".next-revslide").removeClass("next-revslide")
            },
            slotSize: function(i, a) {
                a.slotw = Math.ceil(a.width / a.slots), a.sloth = Math.ceil("fullscreen" == a.sliderLayout ? e(window).height() / a.slots : a.height / a.slots), "on" == a.autoHeight && i !== t && "" !== i && (a.sloth = Math.ceil(i.height() / a.slots))
            },
            setSize: function(i) {
                var a = (i.top_outer || 0) + (i.bottom_outer || 0),
                    n = parseInt(i.carousel.padding_top || 0, 0),
                    r = parseInt(i.carousel.padding_bottom || 0, 0),
                    o = i.gridheight[i.curWinRange];
                if (o = o < i.minHeight ? i.minHeight : o, "fullwidth" == i.sliderLayout && "off" == i.autoHeight && punchgs.TweenLite.set(i.c, {
                        maxHeight: o + "px"
                    }), i.c.css({
                        marginTop: n,
                        marginBottom: r
                    }), i.width = i.ul.width(), i.height = i.ul.height(), m(i), i.height = Math.round(i.gridheight[i.curWinRange] * (i.width / i.gridwidth[i.curWinRange])), i.height > i.gridheight[i.curWinRange] && "on" != i.autoHeight && (i.height = i.gridheight[i.curWinRange]), "fullscreen" == i.sliderLayout || i.infullscreenmode) {
                    i.height = i.bw * i.gridheight[i.curWinRange];
                    var s = (i.c.parent().width(), e(window).height());
                    if (i.fullScreenOffsetContainer != t) {
                        try {
                            var l = i.fullScreenOffsetContainer.split(",");
                            l && e.each(l, function(t, i) {
                                s = e(i).length > 0 ? s - e(i).outerHeight(!0) : s
                            })
                        } catch (e) {}
                        try {
                            i.fullScreenOffset.split("%").length > 1 && i.fullScreenOffset != t && i.fullScreenOffset.length > 0 ? s -= e(window).height() * parseInt(i.fullScreenOffset, 0) / 100 : i.fullScreenOffset != t && i.fullScreenOffset.length > 0 && (s -= parseInt(i.fullScreenOffset, 0))
                        } catch (e) {}
                    }
                    s = s < i.minHeight ? i.minHeight : s, s -= a, i.c.parent().height(s), i.c.closest(".rev_slider_wrapper").height(s), i.c.css({
                        height: "100%"
                    }), i.height = s, i.minHeight != t && i.height < i.minHeight && (i.height = i.minHeight)
                } else i.minHeight != t && i.height < i.minHeight && (i.height = i.minHeight), i.c.height(i.height);
                var d = {
                    height: n + r + a + i.height
                };
                i.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(d), i.c.closest(".rev_slider_wrapper").css(d), m(i)
            },
            enterInViewPort: function(a) {
                a.waitForCountDown && (C(a.c, a), a.waitForCountDown = !1), a.waitForFirstSlide && (O(a.c, a), a.waitForFirstSlide = !1), ("playing" == a.sliderlaststatus || a.sliderlaststatus == t) && a.c.trigger("starttimer"), a.lastplayedvideos != t && a.lastplayedvideos.length > 0 && e.each(a.lastplayedvideos, function(e, t) {
                    i.playVideo(t, a)
                })
            },
            leaveViewPort: function(a) {
                a.sliderlaststatus = a.sliderstatus, a.c.trigger("stoptimer"), a.playingvideos != t && a.playingvideos.length > 0 && (a.lastplayedvideos = e.extend(!0, [], a.playingvideos), a.playingvideos && e.each(a.playingvideos, function(e, t) {
                    i.stopVideo && i.stopVideo(t, a)
                }))
            }
        });
        var a = i.is_mobile(),
            n = function(i, a) {
                return !e("body").data(i) && (a.filesystem ? (a.errorm === t && (a.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:"), console.warn("Local Filesystem detected !"), a.errorm = a.errorm + '<br>&lt;script type="text/javascript" src="' + a.jsFileLocation + i + a.extensions_suffix + '"&gt;&lt;/script&gt;', console.warn(a.jsFileLocation + i + a.extensions_suffix + " could not be loaded !"), console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."), console.log(" "), a.modulesfailing = !0, !1) : (e.ajax({
                    url: a.jsFileLocation + i + a.extensions_suffix,
                    dataType: "script",
                    cache: !0,
                    error: function(e) {
                        console.warn("Slider Revolution 5.0 Error !"), console.error("Failure at Loading:" + i + a.extensions_suffix + " on Path:" + a.jsFileLocation), console.info(e)
                    }
                }), void e("body").data(i, !0)))
            },
            r = function(a, r) {
                var o = new Object,
                    s = a.navigation;
                return o.kenburns = !1, o.parallax = !1, o.carousel = !1, o.navigation = !1, o.videos = !1, o.actions = !1, o.layeranim = !1, o.migration = !1, r.data("version") && r.data("version").toString().match(/5./gi) ? (r.find("img").each(function() {
                    "on" == e(this).data("kenburns") && (o.kenburns = !0)
                }), ("carousel" == a.sliderType || "on" == s.keyboardNavigation || "on" == s.mouseScrollNavigation || "on" == s.touch.touchenabled || s.arrows.enable || s.bullets.enable || s.thumbnails.enable || s.tabs.enable) && (o.navigation = !0), r.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function() {
                    var i = e(this);
                    (i.data("ytid") != t || i.find("iframe").length > 0 && i.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (o.videos = !0), (i.data("vimeoid") != t || i.find("iframe").length > 0 && i.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (o.videos = !0), i.data("actions") !== t && (o.actions = !0), o.layeranim = !0
                }), r.find("li").each(function() {
                    e(this).data("link") && e(this).data("link") != t && (o.layeranim = !0, o.actions = !0)
                }), !o.videos && (r.find(".rs-background-video-layer").length > 0 || r.find(".tp-videolayer").length > 0 || r.find("iframe").length > 0 || r.find("video").length > 0) && (o.videos = !0), "carousel" == a.sliderType && (o.carousel = !0), ("off" !== a.parallax.type || a.viewPort.enable || "true" == a.viewPort.enable) && (o.parallax = !0)) : (o.kenburns = !0, o.parallax = !0, o.carousel = !1, o.navigation = !0, o.videos = !0, o.actions = !0, o.layeranim = !0, o.migration = !0), "hero" == a.sliderType && (o.carousel = !1, o.navigation = !1), window.location.href.match(/file:/gi) && (o.filesystem = !0, a.filesystem = !0), o.videos && void 0 === i.isVideoPlaying && n("revolution.extension.video", a), o.carousel && void 0 === i.prepareCarousel && n("revolution.extension.carousel", a), o.carousel || void 0 !== i.animateSlide || n("revolution.extension.slideanims", a), o.actions && void 0 === i.checkActions && n("revolution.extension.actions", a), o.layeranim && void 0 === i.handleStaticLayers && n("revolution.extension.layeranimation", a), o.kenburns && void 0 === i.stopKenBurn && n("revolution.extension.kenburn", a), o.navigation && void 0 === i.createNavigation && n("revolution.extension.navigation", a), o.migration && void 0 === i.migration && n("revolution.extension.migration", a), o.parallax && void 0 === i.checkForParallax && n("revolution.extension.parallax", a), o
            },
            o = function(e, t) {
                t.filesystem || void 0 !== punchgs && (!t.kenburns || t.kenburns && void 0 !== i.stopKenBurn) && (!t.navigation || t.navigation && void 0 !== i.createNavigation) && (!t.carousel || t.carousel && void 0 !== i.prepareCarousel) && (!t.videos || t.videos && void 0 !== i.resetVideo) && (!t.actions || t.actions && void 0 !== i.checkActions) && (!t.layeranim || t.layeranim && void 0 !== i.handleStaticLayers) && (!t.migration || t.migration && void 0 !== i.migration) && (!t.parallax || t.parallax && void 0 !== i.checkForParallax) && (t.carousel || !t.carousel && void 0 !== i.animateSlide) ? e.trigger("scriptsloaded") : setTimeout(function() {
                    o(e, t)
                }, 50)
            },
            s = function() {
                var t = new RegExp("themepunch.revolution.min.js", "gi"),
                    i = "";
                return e("script").each(function() {
                    var a = e(this).attr("src");
                    a && a.match(t) && (i = a)
                }), i = (i = (i = i.replace("jquery.themepunch.revolution.min.js", "")).replace("jquery.themepunch.revolution.js", "")).split("?")[0]
            },
            l = function(t, i) {
                var a = 9999,
                    n = 0,
                    r = 0,
                    o = 0,
                    s = e(window).width(),
                    l = i && 9999 == t.responsiveLevels ? t.visibilityLevels : t.responsiveLevels;
                l && l.length && e.each(l, function(e, t) {
                    t > s && (0 == n || n > t) && (a = t, o = e, n = t), s > t && t > n && (n = t, r = e)
                }), a > n && (o = r), i ? t.forcedWinRange = o : t.curWinRange = o
            },
            d = function(e, t) {
                t.carousel.maxVisibleItems = t.carousel.maxVisibleItems < 1 ? 999 : t.carousel.maxVisibleItems, t.carousel.vertical_align = "top" === t.carousel.vertical_align ? "0%" : "bottom" === t.carousel.vertical_align ? "100%" : "50%"
            },
            h = function(t, i) {
                var a = 0;
                return t.find(i).each(function() {
                    var t = e(this);
                    !t.hasClass("tp-forcenotvisible") && a < t.outerWidth() && (a = t.outerWidth())
                }), a
            },
            p = function(n, r) {
                if (n == t) return !1;
                if (n.data("aimg") != t && ("enabled" == n.data("aie8") && i.isIE(8) || "enabled" == n.data("amobile") && a) && n.html('<img class="tp-slider-alternative-image" src="' + n.data("aimg") + '">'), n.find(">ul").addClass("tp-revslider-mainul"), r.c = n, r.ul = n.find(".tp-revslider-mainul"), r.cid = n.attr("id"), r.ul.css({
                        visibility: "visible"
                    }), r.slideamount = r.ul.find(">li").length, r.slayers = n.find(".tp-static-layers"), r.ul.find(">li").each(function(t) {
                        e(this).data("originalindex", t)
                    }), "on" == r.shuffle) {
                    var o = new Object,
                        s = r.ul.find(">li:first-child");
                    o.fstransition = s.data("fstransition"), o.fsmasterspeed = s.data("fsmasterspeed"), o.fsslotamount = s.data("fsslotamount");
                    for (var d = 0; d < r.slideamount; d++) {
                        var h = Math.round(Math.random() * r.slideamount);
                        r.ul.find(">li:eq(" + h + ")").prependTo(r.ul)
                    }
                    var p = r.ul.find(">li:first-child");
                    p.data("fstransition", o.fstransition), p.data("fsmasterspeed", o.fsmasterspeed), p.data("fsslotamount", o.fsslotamount), r.li = r.ul.find(">li")
                }
                if (r.li = r.ul.find(">li"), r.thumbs = new Array, r.slots = 4, r.act = -1, r.firststart = 1, r.loadqueue = new Array, r.syncload = 0, r.conw = n.width(), r.conh = n.height(), r.responsiveLevels.length > 1 ? r.responsiveLevels[0] = 9999 : r.responsiveLevels = 9999, e.each(r.li, function(i, a) {
                        var n = (a = e(a)).find(".rev-slidebg") || a.find("img").first(),
                            o = 0;
                        a.addClass("tp-revslider-slidesli"), a.data("index") === t && a.data("index", "rs-" + Math.round(999999 * Math.random()));
                        var s = new Object;
                        s.params = new Array, s.id = a.data("index"), s.src = a.data("thumb") !== t ? a.data("thumb") : n.data("lazyload") !== t ? n.data("lazyload") : n.attr("src"), a.data("title") !== t && s.params.push({
                            from: RegExp("\\{\\{title\\}\\}", "g"),
                            to: a.data("title")
                        }), a.data("description") !== t && s.params.push({
                            from: RegExp("\\{\\{description\\}\\}", "g"),
                            to: a.data("description")
                        });
                        for (o = 1; 10 >= o; o++) a.data("param" + o) !== t && s.params.push({
                            from: RegExp("\\{\\{param" + o + "\\}\\}", "g"),
                            to: a.data("param" + o)
                        });
                        if (r.thumbs.push(s), a.data("origindex", a.index()), a.data("link") != t) {
                            var l = a.data("link"),
                                d = a.data("target") || "_self",
                                h = "back" === a.data("slideindex") ? 0 : 60,
                                p = a.data("linktoslide"),
                                c = p;
                            p != t && "next" != p && "prev" != p && r.li.each(function() {
                                var t = e(this);
                                t.data("origindex") + 1 == c && (p = t.data("index"))
                            }), "slide" != l && (p = "no");
                            var u = '<div class="tp-caption sft slidelink" style="cursor:pointer;width:100%;height:100%;z-index:' + h + ';" data-x="center" data-y="center" ';
                            u = "no" == p ? u + ' data-start="0">' : u + "data-actions='" + ("scroll_under" === p ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' : "prev" === p ? '[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]' : "next" === p ? '[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]' : '[{"event":"click","action":"jumptoslide","slide":"' + p + '","delay":"0.2"}]') + '\' data-start="0">', u += '<a style="width:100%;height:100%;display:block"', u = "slide" != l ? u + ' target="' + d + '" href="' + l + '"' : u, u += '><span style="width:100%;height:100%;display:block"></span></a></div>', a.append(u)
                        }
                    }), r.rle = r.responsiveLevels.length || 1, r.gridwidth = c(r.gridwidth, r.rle), r.gridheight = c(r.gridheight, r.rle), "on" == r.simplifyAll && (i.isIE(8) || i.iOSVersion()) && (n.find(".tp-caption").each(function() {
                        var t = e(this);
                        t.removeClass("customin customout").addClass("fadein fadeout"), t.data("splitin", ""), t.data("speed", 400)
                    }), r.li.each(function() {
                        var t = e(this);
                        t.data("transition", "fade"), t.data("masterspeed", 500), t.data("slotamount", 1), (t.find(".rev-slidebg") || t.find(">img").first()).data("kenburns", "off")
                    })), r.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), r.autoHeight = "fullscreen" == r.sliderLayout ? "on" : r.autoHeight, "fullwidth" == r.sliderLayout && "off" == r.autoHeight && n.css({
                        maxHeight: r.gridheight[r.curWinRange] + "px"
                    }), "auto" != r.sliderLayout && 0 == n.closest(".forcefullwidth_wrapper_tp_banner").length && ("fullscreen" !== r.sliderLayout || "on" != r.fullScreenAutoWidth)) {
                    var m = n.parent(),
                        y = m.css("marginBottom"),
                        _ = m.css("marginTop");
                    y = y === t ? 0 : y, _ = _ === t ? 0 : _, m.wrap('<div class="forcefullwidth_wrapper_tp_banner" style="position:relative;width:100%;height:auto;margin-top:' + _ + ";margin-bottom:" + y + '"></div>'), n.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + n.height() + 'px"></div>'), n.parent().css({
                        marginTop: "0px",
                        marginBottom: "0px"
                    }), n.parent().css({
                        position: "absolute"
                    })
                }
                if (r.shadow !== t && r.shadow > 0 && (n.parent().addClass("tp-shadow" + r.shadow), n.parent().append('<div class="tp-shadowcover"></div>'), n.parent().find(".tp-shadowcover").css({
                        backgroundColor: n.parent().css("backgroundColor"),
                        backgroundImage: n.parent().css("backgroundImage")
                    })), l(r), l(r, !0), !n.hasClass("revslider-initialised")) {
                    n.addClass("revslider-initialised"), n.addClass("tp-simpleresponsive"), n.attr("id") == t && n.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), r.firefox13 = !1, r.ie = !e.support.opacity, r.ie9 = 9 == document.documentMode, r.origcd = r.delay;
                    var b = e.fn.jquery.split("."),
                        x = parseFloat(b[0]),
                        S = parseFloat(b[1]);
                    parseFloat(b[2] || "0"), 1 == x && 7 > S && n.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + b + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), x > 1 && (r.ie = !1);
                    var P = new Object;
                    P.addedyt = 0, P.addedvim = 0, P.addedvid = 0, n.find(".tp-caption, .rs-background-video-layer").each(function() {
                        var n = e(this),
                            o = n.data("autoplayonlyfirsttime"),
                            s = n.data("autoplay");
                        n.hasClass("tp-static-layer") && i.handleStaticLayers && i.handleStaticLayers(n, r);
                        var l = 0;
                        if (n.find("iframe").each(function() {
                                punchgs.TweenLite.set(e(this), {
                                    autoAlpha: 0
                                }), l++
                            }), l > 0 && n.data("iframes", !0), n.hasClass("tp-caption")) {
                            var d = n.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "";
                            n.wrap('<div class="tp-parallax-wrap" style="' + d + 'position:absolute;visibility:hidden"><div class="tp-loop-wrap" style="' + d + 'position:absolute;"><div class="tp-mask-wrap" style="' + d + 'position:absolute" ></div></div></div>');
                            var h = n.closest(".tp-loop-wrap");
                            e.each(["pendulum", "rotate", "slideloop", "pulse", "wave"], function(e, t) {
                                var i = n.find(".rs-" + t),
                                    a = i.data() || "";
                                "" != a && (h.data(a), h.addClass("rs-" + t), i.children(0).unwrap(), n.data("loopanimation", "on"))
                            }), punchgs.TweenLite.set(n, {
                                visibility: "hidden"
                            })
                        }
                        var p = n.data("actions");
                        p !== t && i.checkActions(n, r, p), u(n, r), i.checkVideoApis && (P = i.checkVideoApis(n, r, P)), a && ((1 == o || "true" == o) && (n.data("autoplayonlyfirsttime", "false"), o = !1), (1 == s || "true" == s || "on" == s || "1sttime" == s) && (n.data("autoplay", "off"), s = "off")), (1 == o || "true" == o || "1sttime" == s) && n.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"), (1 == s || "true" == s || "on" == s || "no1sttime" == s) && n.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always")
                    }), n.hover(function() {
                        n.trigger("tp-mouseenter"), r.overcontainer = !0
                    }, function() {
                        n.trigger("tp-mouseleft"), r.overcontainer = !1
                    }), n.on("mouseover", function() {
                        n.trigger("tp-mouseover"), r.overcontainer = !0
                    }), n.find(".tp-caption video").each(function() {
                        var t = e(this);
                        t.removeClass("video-js vjs-default-skin"), t.attr("preload", ""), t.css({
                            display: "none"
                        })
                    }), "standard" !== r.sliderType && (r.lazyType = "all"), T(n.find(".tp-static-layers"), r, 0), L(n.find(".tp-static-layers img"), r, function() {
                        n.find(".tp-static-layers img").each(function() {
                            var i = e(this),
                                a = i.data("lazyload") != t ? i.data("lazyload") : i.attr("src"),
                                n = k(r, a);
                            i.attr("src", n.src)
                        })
                    }), r.li.each(function(t) {
                        var i = e(this);
                        ("all" == r.lazyType || "smart" == r.lazyType && (0 == t || 1 == t || t == r.slideamount || t == r.slideamount - 1)) && (T(i, r, t), L(i, r, function() {
                            "carousel" == r.sliderType && punchgs.TweenLite.to(i, 1, {
                                autoAlpha: 1,
                                ease: punchgs.Power3.easeInOut
                            })
                        }))
                    });
                    var A = M("#")[0];
                    if (A.length < 9 && A.split("slide").length > 1) {
                        var z = parseInt(A.split("slide")[1], 0);
                        1 > z && (z = 1), z > r.slideamount && (z = r.slideamount), r.startWithSlide = z - 1
                    }
                    n.append('<div class="tp-loader ' + r.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), 0 === n.find(".tp-bannertimer").length && n.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'), n.find(".tp-bannertimer").css({
                        width: "0%"
                    }), n.find(".tp-bannertimer").data("opt", r), r.ul.css({
                        display: "block"
                    }), w(n, r), "off" !== r.parallax.type && i.checkForParallax(n, r), i.setSize(r), "hero" !== r.sliderType && i.createNavigation(n, r), i.resizeThumbsTabs && i.resizeThumbsTabs(r), f(r);
                    var I = r.viewPort;
                    r.inviewport = !1, I != t && I.enable && (I.visible_area = parseFloat(I.visible_area) / 100, I.visible_area = I.visible_area < .001 ? 100 * I.visible_area : I.visible_area, i.scrollTicker && i.scrollTicker(r, n)), setTimeout(function() {
                        "carousel" == r.sliderType && i.prepareCarousel(r), !I.enable || I.enable && r.inviewport || I.enable && !r.inviewport && "wait" == !I.outof ? O(n, r) : r.waitForFirstSlide = !0, i.manageNavigation && i.manageNavigation(r), r.slideamount > 1 && (!I.enable || I.enable && r.inviewport ? C(n, r) : r.waitForCountDown = !0), setTimeout(function() {
                            n.trigger("revolution.slide.onloaded")
                        }, 100)
                    }, r.startDelay), r.startDelay = 0, e("body").data("rs-fullScreenMode", !1), e(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() {
                        e("body").data("rs-fullScreenMode", !e("body").data("rs-fullScreenMode")), e("body").data("rs-fullScreenMode") && setTimeout(function() {
                            e(window).trigger("resize")
                        }, 200)
                    });
                    var R = "resize.revslider-" + n.attr("id");
                    e(window).on(R, function() {
                        return n != t && (0 != e("body").find(n) && f(r), void((n.outerWidth(!0) != r.width || n.is(":hidden") || "fullscreen" == r.sliderLayout && e(window).height() != r.lastwindowheight) && (r.lastwindowheight = e(window).height(), v(n, r))))
                    }), g(n, r), f(r), r.fallbacks.disableFocusListener || "true" == r.fallbacks.disableFocusListener || !0 === r.fallbacks.disableFocusListener || j(n, r)
                }
            },
            c = function(t, i) {
                if (!e.isArray(t)) {
                    var a = t;
                    (t = new Array).push(a)
                }
                if (t.length < i) {
                    a = t[t.length - 1];
                    for (var n = 0; n < i - t.length + 2; n++) t.push(a)
                }
                return t
            },
            u = function(a, n) {
                "sliderenter" === a.data("start") && (n.layersonhover === t && (n.c.on("tp-mouseenter", function() {
                    n.layersonhover && e.each(n.layersonhover, function(e, a) {
                        a.data("animdirection", "in");
                        var r = a.data("timeline_out"),
                            o = "carousel" === n.sliderType ? 0 : n.width / 2 - n.gridwidth[n.curWinRange] * n.bw / 2,
                            s = a.closest(".tp-revslider-slidesli");
                        if (s.hasClass("active-revslide") || s.hasClass("processing-revslide")) {
                            r != t && (r.pause(0), r.kill()), i.animateSingleCaption(a, n, o, 0, 0, !1, !0);
                            var l = a.data("timeline");
                            a.data("triggerstate", "on"), l.play(0)
                        }
                    })
                }), n.c.on("tp-mouseleft", function() {
                    n.layersonhover && e.each(n.layersonhover, function(e, t) {
                        t.data("animdirection", "out"), t.data("triggered", !0), t.data("triggerstate", "off"), i.stopVideo && i.stopVideo(t, n), i.endMoveCaption && i.endMoveCaption(t, null, null, n)
                    })
                }), n.layersonhover = new Array), n.layersonhover.push(a))
            },
            f = function(t) {
                var a = i.getHorizontalOffset(t.c, "left");
                if ("auto" == t.sliderLayout || "fullscreen" === t.sliderLayout && "on" == t.fullScreenAutoWidth) "fullscreen" == t.sliderLayout && "on" == t.fullScreenAutoWidth ? punchgs.TweenLite.set(t.ul, {
                    left: 0,
                    width: t.c.width()
                }) : punchgs.TweenLite.set(t.ul, {
                    left: a,
                    width: t.c.width() - i.getHorizontalOffset(t.c, "both")
                });
                else {
                    var n = Math.ceil(t.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left - a);
                    punchgs.TweenLite.set(t.c.parent(), {
                        left: 0 - n + "px",
                        width: e(window).width() - i.getHorizontalOffset(t.c, "both")
                    })
                }
                t.slayers && "fullwidth" != t.sliderLayout && "fullscreen" != t.sliderLayout && punchgs.TweenLite.set(t.slayers, {
                    left: a
                })
            },
            g = function(a, n, r) {
                var o = a.parent();
                e(window).width() < n.hideSliderAtLimit ? (a.trigger("stoptimer"), "none" != o.css("display") && o.data("olddisplay", o.css("display")), o.css({
                    display: "none"
                })) : a.is(":hidden") && r && (o.css(o.data("olddisplay") != t && "undefined" != o.data("olddisplay") && "none" != o.data("olddisplay") ? {
                    display: o.data("olddisplay")
                } : {
                    display: "block"
                }), a.trigger("restarttimer"), setTimeout(function() {
                    v(a, n)
                }, 150)), i.hideUnHideNav && i.hideUnHideNav(n)
            },
            v = function(a, n) {
                if (1 == n.infullscreenmode && (n.minHeight = e(window).height()), l(n), l(n, !0), !i.resizeThumbsTabs || !0 === i.resizeThumbsTabs(n)) {
                    if (g(a, n, !0), f(n), "carousel" == n.sliderType && i.prepareCarousel(n, !0), a === t) return !1;
                    i.setSize(n), n.conw = n.c.width(), n.conh = n.infullscreenmode ? n.minHeight : n.c.height();
                    var r = a.find(".active-revslide .slotholder"),
                        o = a.find(".processing-revslide .slotholder");
                    y(a, n, a, 2), "standard" === n.sliderType && (punchgs.TweenLite.set(o.find(".defaultimg"), {
                        opacity: 0
                    }), r.find(".defaultimg").css({
                        opacity: 1
                    })), "carousel" == n.sliderType && n.lastconw != n.conw && (clearTimeout(n.pcartimer), n.pcartimer = setTimeout(function() {
                        i.prepareCarousel(n, !0)
                    }, 100), n.lastconw = n.conw), i.manageNavigation && i.manageNavigation(n), i.animateTheCaptions && i.animateTheCaptions(a.find(".active-revslide"), n, !0), "on" == o.data("kenburns") && i.startKenBurn(o, n, o.data("kbtl").progress()), "on" == r.data("kenburns") && i.startKenBurn(r, n, r.data("kbtl").progress()), i.animateTheCaptions && i.animateTheCaptions(o.closest("li"), n, !0), i.manageNavigation && i.manageNavigation(n)
                }
            },
            m = function(e) {
                e.bw = e.width / e.gridwidth[e.curWinRange], e.bh = e.height / e.gridheight[e.curWinRange], e.bh > e.bw ? e.bh = e.bw : e.bw = e.bh, (e.bh > 1 || e.bw > 1) && (e.bw = 1, e.bh = 1)
            },
            w = function(n, r) {
                if (n.find(".tp-caption").each(function() {
                        var i = e(this);
                        i.data("transition") !== t && i.addClass(i.data("transition"))
                    }), r.ul.css({
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        maxHeight: n.parent().css("maxHeight")
                    }), "on" == r.autoHeight && (r.ul.css({
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        maxHeight: "none"
                    }), n.css({
                        maxHeight: "none"
                    }), n.parent().css({
                        maxHeight: "none"
                    })), r.li.each(function(i) {
                        var a = e(this),
                            n = a.data("originalindex");
                        (r.startWithSlide != t && n == r.startWithSlide || r.startWithSlide === t && 0 == i) && a.addClass("next-revslide"), a.css({
                            width: "100%",
                            height: "100%",
                            overflow: "hidden"
                        })
                    }), "carousel" === r.sliderType) {
                    r.ul.css({
                        overflow: "visible"
                    }).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');
                    var o = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';
                    r.c.parent().prepend(o), r.c.parent().append(o), i.prepareCarousel(r)
                }
                n.parent().css({
                    overflow: "visible"
                }), r.li.find(">img").each(function() {
                    var i = e(this),
                        n = i.closest("li").find(".rs-background-video-layer");
                    n.addClass("defaultvid").css({
                        zIndex: 30
                    }), i.addClass("defaultimg"), "on" == r.panZoomDisableOnMobile && a && (i.data("kenburns", "off"), i.data("bgfit", "cover")), i.wrap('<div class="slotholder" style="width:100%;height:100%;"></div>'), n.appendTo(i.closest("li").find(".slotholder"));
                    var o = i.data();
                    i.closest(".slotholder").data(o), n.length > 0 && o.bgparallax != t && n.data("bgparallax", o.bgparallax), "none" != r.dottedOverlay && r.dottedOverlay != t && i.closest(".slotholder").append('<div class="tp-dottedoverlay ' + r.dottedOverlay + '"></div>');
                    var s = i.attr("src");
                    o.src = s, o.bgfit = o.bgfit || "cover", o.bgrepeat = o.bgrepeat || "no-repeat", o.bgposition = o.bgposition || "center center";
                    var l = i.closest(".slotholder");
                    i.parent().append('<div class="tp-bgimg defaultimg" style="background-color:' + i.css("backgroundColor") + ";background-repeat:" + o.bgrepeat + ";background-image:url(" + s + ");background-size:" + o.bgfit + ";background-position:" + o.bgposition + ';width:100%;height:100%;"></div>');
                    var d = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + i.get(0).outerHTML);
                    i.replaceWith(d), (i = l.find(".tp-bgimg")).data(o), i.attr("src", s), ("standard" === r.sliderType || "undefined" === r.sliderType) && i.css({
                        opacity: 0
                    })
                })
            },
            y = function(t, i, a, n) {
                i.removePrepare = i.removePrepare + n, a.find(".slot, .slot-circle-wrapper").each(function() {
                    e(this).remove()
                }), i.transition = 0, i.removePrepare = 0
            },
            _ = function(e) {
                var i = e;
                return e != t && e.length > 0 && (i = e.split("?")[0]), i
            },
            b = function(t, i, a) {
                i.syncload--, i.loadqueue && e.each(i.loadqueue, function(e, i) {
                    var n = i.src.replace(/\.\.\/\.\.\//gi, ""),
                        r = self.location.href,
                        o = document.location.origin,
                        s = r.substring(0, r.length - 1) + "/" + n,
                        l = o + "/" + n,
                        d = function(e, t) {
                            var i = e.split("/"),
                                a = t.split("/");
                            i.pop();
                            for (var n = 0; n < a.length; n++) "." != a[n] && (".." == a[n] ? i.pop() : i.push(a[n]));
                            return i.join("/")
                        }(self.location.href, i.src);
                    r = r.substring(0, r.length - 1) + n, (_(o += n) === _(decodeURIComponent(t.src)) || _(r) === _(decodeURIComponent(t.src)) || _(d) === _(decodeURIComponent(t.src)) || _(l) === _(decodeURIComponent(t.src)) || _(s) === _(decodeURIComponent(t.src)) || _(i.src) === _(decodeURIComponent(t.src)) || _(i.src).replace(/^.*\/\/[^\/]+/, "") === _(decodeURIComponent(t.src)).replace(/^.*\/\/[^\/]+/, "") || "file://" === window.location.origin && _(t.src).match(new RegExp(n))) && (i.progress = a, i.width = t.width, i.height = t.height)
                }), x(i)
            },
            x = function(t) {
                3 != t.syncload && t.loadqueue && e.each(t.loadqueue, function(e, i) {
                    if (i.progress.match(/prepared/g) && t.syncload <= 3) {
                        t.syncload++;
                        var a = new Image;
                        a.onload = function() {
                            b(this, t, "loaded")
                        }, a.onerror = function() {
                            b(this, t, "failed")
                        }, a.src = i.src, i.progress = "inload"
                    }
                })
            },
            T = function(i, a, n) {
                i.find("img,.defaultimg").each(function() {
                    var i = e(this),
                        r = i.data("lazyload") !== t && "undefined" !== i.data("lazyload") ? i.data("lazyload") : i.attr("src");
                    i.data("start-to-load", e.now()),
                        function(t, i, a) {
                            var n = !1;
                            if (i.loadqueue && e.each(i.loadqueue, function(e, i) {
                                    i.src === t && (n = !0)
                                }), !n) {
                                var r = new Object;
                                r.src = t, r.prio = a, r.progress = "prepared", i.loadqueue.push(r)
                            }
                        }(r, a, n)
                }), x(a)
            },
            k = function(t, i) {
                var a = new Object;
                return t.loadqueue && e.each(t.loadqueue, function(e, t) {
                    t.src == i && (a = t)
                }), a
            },
            L = function(a, n, r) {
                var o = !1;
                a.find("img,.defaultimg").each(function() {
                    var r = e(this),
                        s = r.data("lazyload") != t ? r.data("lazyload") : r.attr("src"),
                        l = k(n, s);
                    if (r.data("loaded") === t && l !== t && l.progress && l.progress.match(/loaded/g)) {
                        if (r.attr("src", l.src), r.hasClass("defaultimg")) i.isIE(8) ? defimg.attr("src", l.src) : r.css({
                            backgroundImage: 'url("' + l.src + '")'
                        }), a.data("owidth", l.width), a.data("oheight", l.height), a.find(".slotholder").data("owidth", l.width), a.find(".slotholder").data("oheight", l.height);
                        else {
                            var d = r.data("ww"),
                                h = r.data("hh");
                            r.data("owidth", l.width), r.data("oheight", l.height), d = d == t || "auto" == d || "" == d ? l.width : d, h = h == t || "auto" == h || "" == h ? l.height : h, r.data("ww", d), r.data("hh", h)
                        }
                        r.data("loaded", !0)
                    }
                    if (l && l.progress && l.progress.match(/inprogress|inload|prepared/g) && (e.now() - r.data("start-to-load") < 5e3 ? o = !0 : console.error(s + "  Could not be loaded !")), 1 == n.youtubeapineeded && (!window.YT || YT.Player == t) && (o = !0, e.now() - n.youtubestarttime > 5e3 && 1 != n.youtubewarning)) {
                        n.youtubewarning = !0;
                        var p = "YouTube Api Could not be loaded !";
                        "https:" === location.protocol && (p += " Please Check and Renew SSL Certificate !"), console.error(p), n.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + p + "</strong></div>")
                    }
                    if (1 == n.vimeoapineeded && !window.Froogaloop && (o = !0, e.now() - n.vimeostarttime > 5e3 && 1 != n.vimeowarning)) {
                        n.vimeowarning = !0;
                        p = "Vimeo Froogaloop Api Could not be loaded !";
                        "https:" === location.protocol && (p += " Please Check and Renew SSL Certificate !"), console.error(p), n.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + p + "</strong></div>")
                    }
                }), o ? setTimeout(function() {
                    L(a, n, r)
                }, 19) : r()
            },
            O = function(t, a) {
                if (clearTimeout(a.waitWithSwapSlide), t.find(".processing-revslide").length > 0) return a.waitWithSwapSlide = setTimeout(function() {
                    O(t, a)
                }, 150), !1;
                var n = t.find(".active-revslide"),
                    r = t.find(".next-revslide"),
                    o = r.find(".defaultimg");
                return r.index() === n.index() ? (r.removeClass("next-revslide"), !1) : (r.removeClass("next-revslide").addClass("processing-revslide"), "on" == a.stopLoop && r.index() == a.lastslidetoshow - 1 && (t.find(".tp-bannertimer").css({
                    visibility: "hidden"
                }), t.trigger("revolution.slide.onstop"), a.noloopanymore = 1), r.index() === a.slideamount - 1 && (a.looptogo = a.looptogo - 1, a.looptogo <= 0 && (a.stopLoop = "on")), a.tonpause = !0, t.trigger("stoptimer"), a.cd = 0, t.find(".tp-loader").css({
                    display: "block"
                }), T(r, a, 1), void L(r, a, function() {
                    r.find(".rs-background-video-layer").each(function() {
                        var t = e(this);
                        t.hasClass("HasListener") || (t.data("bgvideo", 1), i.manageVideoLayer(t, a)), t.append('<div class="rs-fullvideo-cover"></div>')
                    }), S(a, o, t)
                }))
            },
            S = function(e, a, n) {
                var r = n.find(".active-revslide"),
                    o = n.find(".processing-revslide"),
                    s = r.find(".slotholder"),
                    l = o.find(".slotholder");
                e.tonpause = !1, e.cd = 0, n.trigger("nulltimer"), n.find(".tp-loader").css({
                    display: "none"
                }), i.setSize(e), i.slotSize(a, e), i.manageNavigation && i.manageNavigation(e);
                var d = {};
                d.nextslide = o, d.currentslide = r, n.trigger("revolution.slide.onbeforeswap", d), e.transition = 1, e.videoplaying = !1, o.data("delay") != t ? (e.cd = 0, e.delay = o.data("delay")) : e.delay = e.origcd;
                var h, p, c = r.index(),
                    u = o.index();
                if (e.sdir = c > u ? 1 : 0, "arrow" == e.sc_indicator && (0 == c && u == e.slideamount - 1 && (e.sdir = 1), c == e.slideamount - 1 && 0 == u && (e.sdir = 0)), e.lsdir = e.lsdir === t ? e.sdir : e.lsdir, e.dirc = e.lsdir != e.sdir, e.lsdir = e.sdir, r.index() != o.index() && 1 != e.firststart && i.removeTheCaptions && i.removeTheCaptions(r, e), o.hasClass("rs-pause-timer-once") || o.hasClass("rs-pause-timer-always") ? e.videoplaying = !0 : n.trigger("restarttimer"), o.removeClass("rs-pause-timer-once"), "carousel" == e.sliderType) p = new punchgs.TimelineLite, i.prepareCarousel(e, p), P(n, e, l, s, o, r, p), e.transition = 0, e.firststart = 0;
                else {
                    (p = new punchgs.TimelineLite({
                        onComplete: function() {
                            P(n, e, l, s, o, r, p)
                        }
                    })).add(punchgs.TweenLite.set(l.find(".defaultimg"), {
                        opacity: 0
                    })), p.pause(), 1 == e.firststart && (punchgs.TweenLite.set(r, {
                        autoAlpha: 0
                    }), e.firststart = 0), punchgs.TweenLite.set(r, {
                        zIndex: 18
                    }), punchgs.TweenLite.set(o, {
                        autoAlpha: 0,
                        zIndex: 20
                    }), "prepared" == o.data("differentissplayed") && (o.data("differentissplayed", "done"), o.data("transition", o.data("savedtransition")), o.data("slotamount", o.data("savedslotamount")), o.data("masterspeed", o.data("savedmasterspeed"))), o.data("fstransition") != t && "done" != o.data("differentissplayed") && (o.data("savedtransition", o.data("transition")), o.data("savedslotamount", o.data("slotamount")), o.data("savedmasterspeed", o.data("masterspeed")), o.data("transition", o.data("fstransition")), o.data("slotamount", o.data("fsslotamount")), o.data("masterspeed", o.data("fsmasterspeed")), o.data("differentissplayed", "prepared")), o.data("transition") == t && o.data("transition", "random"), h = 0;
                    var f = o.data("transition") !== t ? o.data("transition").split(",") : "fade",
                        g = o.data("nexttransid") == t ? -1 : o.data("nexttransid");
                    "on" == o.data("randomtransition") ? g = Math.round(Math.random() * f.length) : g += 1, g == f.length && (g = 0), o.data("nexttransid", g);
                    var v = f[g];
                    e.ie && ("boxfade" == v && (v = "boxslide"), "slotfade-vertical" == v && (v = "slotzoom-vertical"), "slotfade-horizontal" == v && (v = "slotzoom-horizontal")), i.isIE(8) && (v = 11), p = i.animateSlide(h, v, n, e, o, r, l, s, p), "on" == l.data("kenburns") && (i.startKenBurn(l, e), p.add(punchgs.TweenLite.set(l, {
                        autoAlpha: 0
                    }))), p.pause()
                }
                "off" != e.parallax.type && e.parallax.firstgo == t && i.scrollHandling && (e.parallax.firstgo = !0, e.lastscrolltop = -999, i.scrollHandling(e), setTimeout(function() {
                    e.lastscrolltop = -999, i.scrollHandling(e)
                }, 210), setTimeout(function() {
                    e.lastscrolltop = -999, i.scrollHandling(e)
                }, 420)), i.animateTheCaptions ? i.animateTheCaptions(o, e, null, p) : p != t && setTimeout(function() {
                    p.resume()
                }, 30), punchgs.TweenLite.to(o, .001, {
                    autoAlpha: 1
                })
            },
            P = function(n, r, o, s, l, d, h) {
                "carousel" === r.sliderType || (r.removePrepare = 0, punchgs.TweenLite.to(o.find(".defaultimg"), .001, {
                    zIndex: 20,
                    autoAlpha: 1,
                    onComplete: function() {
                        y(n, r, l, 1)
                    }
                }), l.index() != d.index() && punchgs.TweenLite.to(d, .2, {
                    zIndex: 18,
                    autoAlpha: 0,
                    onComplete: function() {
                        y(n, r, d, 1)
                    }
                })), n.find(".active-revslide").removeClass("active-revslide"), n.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"), r.act = l.index(), ("scroll" == r.parallax.type || "scroll+mouse" == r.parallax.type || "mouse+scroll" == r.parallax.type) && (r.lastscrolltop = -999, i.scrollHandling(r)), h.clear(), s.data("kbtl") != t && (s.data("kbtl").reverse(), s.data("kbtl").timeScale(25)), "on" == o.data("kenburns") && (o.data("kbtl") != t ? (o.data("kbtl").timeScale(1), o.data("kbtl").play()) : i.startKenBurn(o, r)), l.find(".rs-background-video-layer").each(function() {
                    if (a) return !1;
                    var t = e(this);
                    i.resetVideo(t, r), punchgs.TweenLite.fromTo(t, 1, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        ease: punchgs.Power3.easeInOut,
                        delay: .2,
                        onComplete: function() {
                            i.animcompleted && i.animcompleted(t, r)
                        }
                    })
                }), d.find(".rs-background-video-layer").each(function() {
                    if (a) return !1;
                    var t = e(this);
                    i.stopVideo && (i.resetVideo(t, r), i.stopVideo(t, r)), punchgs.TweenLite.to(t, 1, {
                        autoAlpha: 0,
                        ease: punchgs.Power3.easeInOut,
                        delay: .2
                    })
                });
                var p = {};
                p.slideIndex = l.index() + 1, p.slideLIIndex = l.index(), p.slide = l, p.currentslide = l, p.prevslide = d, n.trigger("revolution.slide.onchange", p), n.trigger("revolution.slide.onafterswap", p)
            },
            C = function(n, r) {
                r.cd = 0, r.loop = 0, r.looptogo = r.stopAfterLoops != t && r.stopAfterLoops > -1 ? r.stopAfterLoops : 9999999, r.lastslidetoshow = r.stopAtSlide != t && r.stopAtSlide > -1 ? r.stopAtSlide : 999, r.stopLoop = "off", 0 == r.looptogo && (r.stopLoop = "on");
                var o = n.find(".tp-bannertimer");
                n.on("stoptimer", function() {
                    var t = e(this).find(".tp-bannertimer");
                    t.data("tween").pause(), "on" == r.disableProgressBar && t.css({
                        visibility: "hidden"
                    }), r.sliderstatus = "paused"
                }), n.on("starttimer", function() {
                    1 != r.conthover && 1 != r.videoplaying && r.width > r.hideSliderAtLimit && 1 != r.tonpause && 1 != r.overnav && (1 === r.noloopanymore || r.viewPort.enable && !r.inviewport || (o.css({
                        visibility: "visible"
                    }), o.data("tween").resume(), r.sliderstatus = "playing")), "on" == r.disableProgressBar && o.css({
                        visibility: "hidden"
                    })
                }), n.on("restarttimer", function() {
                    var t = e(this).find(".tp-bannertimer");
                    return !(r.mouseoncontainer && "on" == r.navigation.onHoverStop && !a) && (1 === r.noloopanymore || r.viewPort.enable && !r.inviewport || (t.css({
                        visibility: "visible"
                    }), t.data("tween").kill(), t.data("tween", punchgs.TweenLite.fromTo(t, r.delay / 1e3, {
                        width: "0%"
                    }, {
                        force3D: "auto",
                        width: "100%",
                        ease: punchgs.Linear.easeNone,
                        onComplete: s,
                        delay: 1
                    })), r.sliderstatus = "playing"), void("on" == r.disableProgressBar && t.css({
                        visibility: "hidden"
                    })))
                }), n.on("nulltimer", function() {
                    o.data("tween").pause(0), "on" == r.disableProgressBar && o.css({
                        visibility: "hidden"
                    }), r.sliderstatus = "paused"
                });
                var s = function() {
                    0 == e("body").find(n).length && (function(t, i) {
                        t.children().each(function() {
                            try {
                                e(this).die("click")
                            } catch (e) {}
                            try {
                                e(this).die("mouseenter")
                            } catch (e) {}
                            try {
                                e(this).die("mouseleave")
                            } catch (e) {}
                            try {
                                e(this).unbind("hover")
                            } catch (e) {}
                        });
                        try {
                            t.die("click", "mouseenter", "mouseleave")
                        } catch (e) {}
                        clearInterval(i.cdint), t = null
                    }(n, r), clearInterval(r.cdint)), n.trigger("revolution.slide.slideatend"), 1 == n.data("conthover-changed") && (r.conthover = n.data("conthover"), n.data("conthover-changed", 0)), i.callingNewSlide(r, n, 1)
                };
                o.data("tween", punchgs.TweenLite.fromTo(o, r.delay / 1e3, {
                    width: "0%"
                }, {
                    force3D: "auto",
                    width: "100%",
                    ease: punchgs.Linear.easeNone,
                    onComplete: s,
                    delay: 1
                })), o.data("opt", r), r.slideamount > 1 && (0 != r.stopAfterLoops || 1 != r.stopAtSlide) ? n.trigger("starttimer") : (r.noloopanymore = 1, n.trigger("nulltimer")), n.on("tp-mouseenter", function() {
                    r.mouseoncontainer = !0, "on" != r.navigation.onHoverStop || a || (n.trigger("stoptimer"), n.trigger("revolution.slide.onpause"))
                }), n.on("tp-mouseleft", function() {
                    r.mouseoncontainer = !1, 1 != n.data("conthover") && "on" == r.navigation.onHoverStop && (1 == r.viewPort.enable && r.inviewport || 0 == r.viewPort.enable) && (n.trigger("revolution.slide.onresume"), n.trigger("starttimer"))
                })
            },
            A = (function() {
                var e, t, i = {
                    hidden: "visibilitychange",
                    webkitHidden: "webkitvisibilitychange",
                    mozHidden: "mozvisibilitychange",
                    msHidden: "msvisibilitychange"
                };
                for (e in i)
                    if (e in document) {
                        t = i[e];
                        break
                    }
            }(), function(e) {
                return e != t && e.c != t && void(1 != e.windowfocused && (e.windowfocused = !0, punchgs.TweenLite.delayedCall(.3, function() {
                    "on" == e.fallbacks.nextSlideOnWindowFocus && e.c.revnext(), e.c.revredraw(), "playing" == e.lastsliderstatus && e.c.revresume()
                })))
            }),
            z = function(e) {
                e.windowfocused = !1, e.lastsliderstatus = e.sliderstatus, e.c.revpause();
                var t = e.c.find(".active-revslide .slotholder"),
                    a = e.c.find(".processing-revslide .slotholder");
                "on" == a.data("kenburns") && i.stopKenBurn(a, e), "on" == t.data("kenburns") && i.stopKenBurn(t, e)
            },
            j = function(i, a) {
                var n = document.documentMode === t,
                    r = window.chrome;
                n && !r ? e(window).on("focusin", function() {
                    A(a)
                }).on("focusout", function() {
                    z(a)
                }) : window.addEventListener ? (window.addEventListener("focus", function() {
                    A(a)
                }, !1), window.addEventListener("blur", function() {
                    z(a)
                }, !1)) : (window.attachEvent("focus", function() {
                    A(a)
                }), window.attachEvent("blur", function() {
                    z(a)
                }))
            },
            M = function(e) {
                for (var t, i = [], a = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_"), n = 0; n < a.length; n++) a[n] = a[n].replace("%3D", "="), t = a[n].split("="), i.push(t[0]), i[t[0]] = t[1];
                return i
            }
    }(jQuery),
    function($) {
        var _R = jQuery.fn.revolution;
        jQuery.extend(!0, _R, {
            checkActions: function(e, t, i) {
                checkActions_intern(e, t, i)
            }
        });
        var checkActions_intern = function(_nc, opt, as) {
                as && jQuery.each(as, function(i, a) {
                    switch (a.delay = parseInt(a.delay, 0) / 1e3, _nc.addClass("noSwipe"), _nc.on(a.event, function() {
                        var tnc = jQuery("#" + a.layer);
                        if ("stoplayer" == a.action || "togglelayer" == a.action || "startlayer" == a.action) {
                            if (tnc.length > 0)
                                if ("startlayer" == a.action || "togglelayer" == a.action && "in" != tnc.data("animdirection")) {
                                    tnc.data("animdirection", "in");
                                    var otl = tnc.data("timeline_out"),
                                        base_offsetx = "carousel" === opt.sliderType ? 0 : opt.width / 2 - opt.gridwidth[opt.curWinRange] * opt.bw / 2,
                                        base_offsety = 0;
                                    void 0 != otl && otl.pause(0).kill(), _R.animateSingleCaption && _R.animateSingleCaption(tnc, opt, base_offsetx, base_offsety, 0, !1, !0);
                                    var tl = tnc.data("timeline");
                                    tnc.data("triggerstate", "on"), punchgs.TweenLite.delayedCall(a.delay, function() {
                                        tl.play(0)
                                    }, [tl])
                                } else("stoplayer" == a.action || "togglelayer" == a.action && "out" != tnc.data("animdirection")) && (tnc.data("animdirection", "out"), tnc.data("triggered", !0), tnc.data("triggerstate", "off"), _R.stopVideo && _R.stopVideo(tnc, opt), _R.endMoveCaption && punchgs.TweenLite.delayedCall(a.delay, _R.endMoveCaption, [tnc, null, null, opt]))
                        } else punchgs.TweenLite.delayedCall(a.delay, function() {
                            switch (a.action) {
                                case "scrollbelow":
                                    _nc.addClass("tp-scrollbelowslider"), _nc.data("scrolloffset", a.offset), _nc.data("scrolldelay", a.delay);
                                    var off = getOffContH(opt.fullScreenOffsetContainer) || 0,
                                        aof = parseInt(a.offset, 0) || 0;
                                    off = off - aof || 0, jQuery("body,html").animate({
                                        scrollTop: opt.c.offset().top + jQuery(opt.li[0]).height() - off + "px"
                                    }, {
                                        duration: 400
                                    });
                                    break;
                                case "callback":
                                    eval(a.callback);
                                    break;
                                case "jumptoslide":
                                    switch (a.slide.toLowerCase()) {
                                        case "+1":
                                        case "next":
                                            opt.sc_indicator = "arrow", _R.callingNewSlide(opt, opt.c, 1);
                                            break;
                                        case "previous":
                                        case "prev":
                                        case "-1":
                                            opt.sc_indicator = "arrow", _R.callingNewSlide(opt, opt.c, -1);
                                            break;
                                        default:
                                            var ts = jQuery.isNumeric(a.slide) ? parseInt(a.slide, 0) : a.slide;
                                            _R.callingNewSlide(opt, opt.c, ts)
                                    }
                                    break;
                                case "simplelink":
                                    window.open(a.url, a.target);
                                    break;
                                case "toggleslider":
                                    opt.noloopanymore = 0, "playing" == opt.sliderstatus ? opt.c.revpause() : opt.c.revresume();
                                    break;
                                case "pauseslider":
                                    opt.c.revpause();
                                    break;
                                case "playslider":
                                    opt.noloopanymore = 0, opt.c.revresume();
                                    break;
                                case "playvideo":
                                    tnc.length > 0 && _R.playVideo(tnc, opt);
                                    break;
                                case "stopvideo":
                                    tnc.length > 0 && _R.stopVideo && _R.stopVideo(tnc, opt);
                                    break;
                                case "togglevideo":
                                    tnc.length > 0 && (_R.isVideoPlaying(tnc, opt) ? _R.stopVideo && _R.stopVideo(tnc, opt) : _R.playVideo(tnc, opt));
                                    break;
                                case "simulateclick":
                                    tnc.length > 0 && tnc.click();
                                    break;
                                case "toggleclass":
                                    tnc.length > 0 && (tnc.hasClass(a.classname) ? tnc.removeClass(a.classname) : tnc.addClass(a.classname));
                                    break;
                                case "gofullscreen":
                                case "exitfullscreen":
                                case "togglefullscreen":
                                    if (jQuery("#rs-go-fullscreen").length > 0 && ("togglefullscreen" == a.action || "exitfullscreen" == a.action)) {
                                        jQuery("#rs-go-fullscreen").appendTo(jQuery("#rs-was-here"));
                                        var paw = opt.c.closest(opt.c.closest(".forcefullwidth_wrapper_tp_banner").length > 0 ? ".forcefullwidth_wrapper_tp_banner" : ".rev_slider_wrapper");
                                        paw.unwrap(), paw.unwrap(), opt.minHeight = opt.oldminheight, opt.infullscreenmode = !1, opt.c.revredraw(), void 0 != opt.playingvideos && opt.playingvideos.length > 0 && jQuery.each(opt.playingvideos, function(e, t) {
                                            _R.playVideo(t, opt)
                                        })
                                    } else if (0 == jQuery("#rs-go-fullscreen").length && ("togglefullscreen" == a.action || "gofullscreen" == a.action)) {
                                        var paw = opt.c.closest(opt.c.closest(".forcefullwidth_wrapper_tp_banner").length > 0 ? ".forcefullwidth_wrapper_tp_banner" : ".rev_slider_wrapper");
                                        paw.wrap('<div id="rs-was-here"><div id="rs-go-fullscreen"></div></div>');
                                        var gf = jQuery("#rs-go-fullscreen");
                                        gf.appendTo(jQuery("body")), gf.css({
                                            position: "fixed",
                                            width: "100%",
                                            height: "100%",
                                            top: "0px",
                                            left: "0px",
                                            zIndex: "9999999",
                                            background: "#ffffff"
                                        }), opt.oldminheight = opt.minHeight, opt.minHeight = jQuery(window).height(), opt.infullscreenmode = !0, opt.c.revredraw(), void 0 != opt.playingvideos && opt.playingvideos.length > 0 && jQuery.each(opt.playingvideos, function(e, t) {
                                            _R.playVideo(t, opt)
                                        })
                                    }
                            }
                        }, [tnc, opt, a, _nc])
                    }), a.action) {
                        case "togglelayer":
                        case "startlayer":
                        case "playlayer":
                        case "stoplayer":
                            var tnc = jQuery("#" + a.layer);
                            "bytrigger" != tnc.data("start") && (tnc.data("triggerstate", "on"), tnc.data("animdirection", "in"))
                    }
                })
            },
            getOffContH = function(e) {
                if (void 0 == e) return 0;
                if (e.split(",").length > 1) {
                    oc = e.split(",");
                    var t = 0;
                    return oc && jQuery.each(oc, function(e, i) {
                        jQuery(i).length > 0 && (t += jQuery(i).outerHeight(!0))
                    }), t
                }
                return jQuery(e).height()
            }
    }(jQuery),
    function() {
        var e = jQuery.fn.revolution;
        jQuery.extend(!0, e, {
            stopKenBurn: function(e) {
                void 0 != e.data("kbtl") && e.data("kbtl").pause()
            },
            startKenBurn: function(e, t, i) {
                var a = e.data(),
                    n = e.find(".defaultimg"),
                    r = n.data("lazyload") || n.data("src"),
                    o = (a.owidth, a.oheight, "carousel" === t.sliderType ? t.carousel.slide_width : t.ul.width()),
                    s = t.ul.height();
                e.data("kbtl") && e.data("kbtl").kill(), i = i || 0, 0 == e.find(".tp-kbimg").length && (e.append('<div class="tp-kbimg-wrap" style="z-index:2;width:100%;height:100%;top:0px;left:0px;position:absolute;"><img class="tp-kbimg" src="' + r + '" style="position:absolute;" width="' + a.owidth + '" height="' + a.oheight + '"></div>'), e.data("kenburn", e.find(".tp-kbimg")));
                var l = function(e, t, i, a, n, r, o) {
                    var s = e * i,
                        l = t * i,
                        d = Math.abs(a - s),
                        h = Math.abs(n - l),
                        p = new Object;
                    return p.l = (0 - r) * d, p.r = p.l + s, p.t = (0 - o) * h, p.b = p.t + l, p.h = r, p.v = o, p
                };
                void 0 != e.data("kbtl") && (e.data("kbtl").kill(), e.removeData("kbtl"));
                var d = e.data("kenburn"),
                    h = d.parent(),
                    p = function(e, t, i) {
                        var a = i.scalestart / 100,
                            n = i.scaleend / 100,
                            r = void 0 != i.oofsetstart && i.offsetstart.split(" ") || [0, 0],
                            o = void 0 != i.offsetend && i.offsetend.split(" ") || [0, 0];
                        i.bgposition = "center center" == i.bgposition ? "50% 50%" : i.bgposition;
                        var s = new Object;
                        i.owidth, i.oheight;
                        if (i.owidth, i.oheight, s.start = new Object, s.starto = new Object, s.end = new Object, s.endo = new Object, s.start.width = e, s.start.height = s.start.width / i.owidth * i.oheight, s.start.height < t) {
                            var d = t / s.start.height;
                            s.start.height = t, s.start.width = s.start.width * d
                        }
                        s.start.transformOrigin = i.bgposition, s.start.scale = a, s.end.scale = n, s.start.rotation = i.rotatestart + "deg", s.end.rotation = i.rotateend + "deg";
                        var h = function(e, t, i, a, n) {
                            var r = e.bgposition.split(" ") || "center center",
                                o = "center" == r[0] ? "50%" : "left" == r[0] || "left" == r[1] ? "0%" : "right" == r[0] || "right" == r[1] ? "100%" : r[0],
                                s = "center" == r[1] ? "50%" : "top" == r[0] || "top" == r[1] ? "0%" : "bottom" == r[0] || "bottom" == r[1] ? "100%" : r[1];
                            o = parseInt(o, 0) / 100 || 0, s = parseInt(s, 0) / 100 || 0;
                            var d = new Object;
                            return d.start = l(n.start.width, n.start.height, n.start.scale, t, i, o, s), d.end = l(n.start.width, n.start.height, n.end.scale, t, i, o, s), d
                        }(i, e, t, 0, s);
                        r[0] = parseFloat(r[0]) + h.start.l, o[0] = parseFloat(o[0]) + h.end.l, r[1] = parseFloat(r[1]) + h.start.t, o[1] = parseFloat(o[1]) + h.end.t;
                        var p = h.start.r - h.start.l,
                            c = h.start.b - h.start.t,
                            u = h.end.r - h.end.l,
                            f = h.end.b - h.end.t;
                        return r[0] = r[0] > 0 ? 0 : p + r[0] < e ? e - p : r[0], o[0] = o[0] > 0 ? 0 : u + o[0] < e ? e - u : o[0], r[1] = r[1] > 0 ? 0 : c + r[1] < t ? t - c : r[1], o[1] = o[1] > 0 ? 0 : f + o[1] < t ? t - f : o[1], s.starto.x = r[0] + "px", s.starto.y = r[1] + "px", s.endo.x = o[0] + "px", s.endo.y = o[1] + "px", s.end.ease = s.endo.ease = i.ease, s.end.force3D = s.endo.force3D = !0, s
                    }(o, s, a),
                    c = new punchgs.TimelineLite;
                c.pause(), p.start.transformOrigin = "0% 0%", p.starto.transformOrigin = "0% 0%", c.add(punchgs.TweenLite.fromTo(d, a.duration / 1e3, p.start, p.end), 0), c.add(punchgs.TweenLite.fromTo(h, a.duration / 1e3, p.starto, p.endo), 0), c.progress(i), c.play(), e.data("kbtl", c)
            }
        })
    }(jQuery),
    function(e) {
        var t = jQuery.fn.revolution,
            i = t.is_mobile();
        jQuery.extend(!0, t, {
            animcompleted: function(e, i) {
                var a = e.data("videotype"),
                    n = e.data("autoplay"),
                    r = e.data("autoplayonlyfirsttime");
                void 0 != a && "none" != a && (1 == n || "true" == n || "on" == n || "1sttime" == n || r ? (t.playVideo(e, i), (r || "1sttime" == n) && (e.data("autoplayonlyfirsttime", !1), e.data("autoplay", "off"))) : "no1sttime" == n && e.data("autoplay", "on"))
            },
            handleStaticLayers: function(e, t) {
                var i = parseInt(e.data("startslide"), 0),
                    a = parseInt(e.data("endslide"), 0);
                i < 0 && (i = 0), a < 0 && (a = t.slideamount), 0 === i && a === t.slideamount - 1 && (a = t.slideamount + 1), e.data("startslide", i), e.data("endslide", a)
            },
            animateTheCaptions: function(e, i, a, n) {
                var r = "carousel" === i.sliderType ? 0 : i.width / 2 - i.gridwidth[i.curWinRange] * i.bw / 2,
                    o = e.data("index");
                i.layers = i.layers || new Object, i.layers[o] = i.layers[o] || e.find(".tp-caption"), i.layers.static = i.layers.static || i.c.find(".tp-static-layers").find(".tp-caption");
                var s = new Array;
                if (i.conh = i.c.height(), i.conw = i.c.width(), i.ulw = i.ul.width(), i.ulh = i.ul.height(), i.debugMode) {
                    e.addClass("indebugmode"), e.find(".helpgrid").remove(), i.c.find(".hglayerinfo").remove(), e.append('<div class="helpgrid" style="width:' + i.gridwidth[i.curWinRange] * i.bw + "px;height:" + i.gridheight[i.curWinRange] * i.bw + 'px;"></div>');
                    var l = e.find(".helpgrid");
                    l.append('<div class="hginfo">Zoom:' + Math.round(100 * i.bw) + "% &nbsp;&nbsp;&nbsp; Device Level:" + i.curWinRange + "&nbsp;&nbsp;&nbsp; Grid Preset:" + i.gridwidth[i.curWinRange] + "x" + i.gridheight[i.curWinRange] + "</div>"), i.c.append('<div class="hglayerinfo"></div>'), l.append('<div class="tlhg"></div>')
                }
                s && jQuery.each(s, function(e) {
                    var t = jQuery(this);
                    punchgs.TweenLite.set(t.find(".tp-videoposter"), {
                        autoAlpha: 1
                    }), punchgs.TweenLite.set(t.find("iframe"), {
                        autoAlpha: 0
                    })
                }), i.layers[o] && jQuery.each(i.layers[o], function(e, t) {
                    s.push(t)
                }), i.layers.static && jQuery.each(i.layers.static, function(e, t) {
                    s.push(t)
                }), s && jQuery.each(s, function(e) {
                    t.animateSingleCaption(jQuery(this), i, r, 0, e, a)
                }), jQuery("body").find("#" + i.c.attr("id")).find(".tp-bannertimer").data("opt", i), void 0 != n && setTimeout(function() {
                    n.resume()
                }, 30)
            },
            animateSingleCaption: function(e, n, o, v, y, _, b) {
                var x = _,
                    T = c(e, n, "in", !0),
                    k = e.data("_pw") || e.closest(".tp-parallax-wrap"),
                    L = e.data("_lw") || e.closest(".tp-loop-wrap"),
                    O = e.data("_mw") || e.closest(".tp-mask-wrap"),
                    S = e.data("responsive") || "on",
                    P = e.data("responsive_offset") || "on",
                    C = e.data("basealign") || "grid",
                    A = "grid" === C ? n.width : n.ulw,
                    z = "grid" === C ? n.height : n.ulh,
                    j = jQuery("body").hasClass("rtl");
                if (e.data("_pw") || (e.data("_pw", k), e.data("_lw", L), e.data("_mw", O)), "fullscreen" == n.sliderLayout && (v = z / 2 - n.gridheight[n.curWinRange] * n.bh / 2), ("on" == n.autoHeight || void 0 != n.minHeight && n.minHeight > 0) && (v = n.conh / 2 - n.gridheight[n.curWinRange] * n.bh / 2), v < 0 && (v = 0), n.debugMode) {
                    e.closest("li").find(".helpgrid").css({
                        top: v + "px",
                        left: o + "px"
                    });
                    var M = n.c.find(".hglayerinfo");
                    e.on("hover, mouseenter", function() {
                        var t = "";
                        e.data() && jQuery.each(e.data(), function(e, i) {
                            "object" != typeof i && (t = t + '<span style="white-space:nowrap"><span style="color:#27ae60">' + e + ":</span>" + i + "</span>&nbsp; &nbsp; ")
                        }), M.html(t)
                    })
                }
                if ("off" == (h(e.data("visibility"), n)[n.forcedWinRange] || h(e.data("visibility"), n) || "on") || A < n.hideCaptionAtLimit && "on" == e.data("captionhidden") || A < n.hideAllCaptionAtLimit ? e.addClass("tp-hidden-caption") : e.removeClass("tp-hidden-caption"), e.data("layertype", "html"), o < 0 && (o = 0), void 0 != e.data("thumbimage") && void 0 == e.data("videoposter") && e.data("videoposter", e.data("thumbimage")), e.hasClass("tp-videolayer") && void 0 != e.data("videoposter") && ("on" == e.data("posterOnMobile") || "on" == e.data("posteronmobile")) && i) {
                    var I = h(e.data("videowidth"), n)[n.curWinRange] || h(e.data("videowidth"), n),
                        R = h(e.data("videoheight"), n)[n.curWinRange] || h(e.data("videoheight"), n);
                    I = parseFloat(Q), R = parseFloat(F), e.append('<div class="tp-videoposter" style="position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + e.data("videoposter") + '); background-size:cover;background-position:center center;"></div>'), "100%" != I ? e.css({
                        minWidth: I + "px",
                        minHeight: R + "px"
                    }) : e.css({
                        width: "100%",
                        height: "100%"
                    }), e.removeClass("tp-videolayer")
                }
                if (e.find("img").length > 0) {
                    var D = e.find("img");
                    e.data("layertype", "image"), 0 == D.width() && D.css({
                        width: "auto"
                    }), 0 == D.height() && D.css({
                        height: "auto"
                    }), void 0 == D.data("ww") && D.width() > 0 && D.data("ww", D.width()), void 0 == D.data("hh") && D.height() > 0 && D.data("hh", D.height());
                    var Q = D.data("ww"),
                        F = D.data("hh"),
                        H = "slide" == C ? n.ulw : n.gridwidth[n.curWinRange],
                        E = "slide" == C ? n.ulh : n.gridheight[n.curWinRange],
                        W = (Q = h(D.data("ww"), n)[n.curWinRange] || h(D.data("ww"), n) || "auto", F = h(D.data("hh"), n)[n.curWinRange] || h(D.data("hh"), n) || "auto", "full" === Q || "full-proportional" === Q),
                        N = "full" === F || "full-proportional" === F;
                    if ("full-proportional" === Q) {
                        var X = D.data("owidth"),
                            V = D.data("oheight");
                        X / H < V / E ? (Q = H, F = V * (H / X)) : (F = E, Q = X * (E / V))
                    } else Q = W ? H : parseFloat(Q), F = N ? E : parseFloat(F);
                    void 0 == Q && (Q = 0), void 0 == F && (F = 0), "off" !== S ? ("grid" != C && W ? D.width(Q) : D.width(Q * n.bw), "grid" != C && N ? D.height(F) : D.height(F * n.bh)) : (D.width(Q), D.height(F))
                }
                if ("slide" === C && (o = 0, v = 0), e.hasClass("tp-videolayer") || e.find("iframe").length > 0 || e.find("video").length > 0) {
                    if (e.data("layertype", "video"), t.manageVideoLayer(e, n, _, x), !_ && !x) {
                        e.data("videotype");
                        t.resetVideo(e, n)
                    }
                    var Y = e.data("aspectratio");
                    void 0 != Y && Y.split(":").length > 1 && t.prepareCoveredVideo(Y, n, e);
                    D = e.find("iframe") ? e.find("iframe") : D = e.find("video");
                    var B = !e.find("iframe"),
                        q = e.hasClass("coverscreenvideo");
                    D.css({
                        display: "block"
                    }), void 0 == e.data("videowidth") && (e.data("videowidth", D.width()), e.data("videoheight", D.height()));
                    var U;
                    Q = h(e.data("videowidth"), n)[n.curWinRange] || h(e.data("videowidth"), n) || "auto", F = h(e.data("videoheight"), n)[n.curWinRange] || h(e.data("videoheight"), n) || "auto";
                    Q = parseFloat(Q), F = parseFloat(F), void 0 === e.data("cssobj") && (U = f(e, 0), e.data("cssobj", U));
                    var G = g(e.data("cssobj"), n);
                    if ("auto" == G.lineHeight && (G.lineHeight = G.fontSize + 4), e.hasClass("fullscreenvideo") || q) {
                        o = 0, v = 0, e.data("x", 0), e.data("y", 0);
                        var Z = z;
                        "on" == n.autoHeight && (Z = n.conh), e.css({
                            width: A,
                            height: Z
                        })
                    } else punchgs.TweenLite.set(e, {
                        paddingTop: Math.round(G.paddingTop * n.bh) + "px",
                        paddingBottom: Math.round(G.paddingBottom * n.bh) + "px",
                        paddingLeft: Math.round(G.paddingLeft * n.bw) + "px",
                        paddingRight: Math.round(G.paddingRight * n.bw) + "px",
                        marginTop: G.marginTop * n.bh + "px",
                        marginBottom: G.marginBottom * n.bh + "px",
                        marginLeft: G.marginLeft * n.bw + "px",
                        marginRight: G.marginRight * n.bw + "px",
                        borderTopWidth: Math.round(G.borderTopWidth * n.bh) + "px",
                        borderBottomWidth: Math.round(G.borderBottomWidth * n.bh) + "px",
                        borderLeftWidth: Math.round(G.borderLeftWidth * n.bw) + "px",
                        borderRightWidth: Math.round(G.borderRightWidth * n.bw) + "px",
                        width: Q * n.bw + "px",
                        height: F * n.bh + "px"
                    });
                    (0 == B && !q || 1 != e.data("forcecover") && !e.hasClass("fullscreenvideo") && !q) && (D.width(Q * n.bw), D.height(F * n.bh))
                }
                e.find(".tp-resizeme, .tp-resizeme *").each(function() {
                    m(jQuery(this), n, "rekursive", S)
                }), e.hasClass("tp-resizeme") && e.find("*").each(function() {
                    m(jQuery(this), n, "rekursive", S)
                }), m(e, n, 0, S);
                var $, K = e.outerHeight(),
                    J = e.css("backgroundColor");
                (p(e, ".frontcorner", "left", "borderRight", "borderTopColor", K, J), p(e, ".frontcornertop", "left", "borderRight", "borderBottomColor", K, J), p(e, ".backcorner", "right", "borderLeft", "borderBottomColor", K, J), p(e, ".backcornertop", "right", "borderLeft", "borderTopColor", K, J), "on" == n.fullScreenAlignForce && (o = 0, v = 0), void 0 === ($ = e.data("arrobj"))) && (($ = new Object).voa = h(e.data("voffset"), n)[n.curWinRange] || h(e.data("voffset"), n)[0], $.hoa = h(e.data("hoffset"), n)[n.curWinRange] || h(e.data("hoffset"), n)[0], $.elx = h(e.data("x"), n)[n.curWinRange] || h(e.data("x"), n)[0], $.ely = h(e.data("y"), n)[n.curWinRange] || h(e.data("y"), n)[0]);
                var ee = 0 == $.voa.length ? 0 : $.voa,
                    te = 0 == $.hoa.length ? 0 : $.hoa,
                    ie = 0 == $.elx.length ? 0 : $.elx,
                    ae = 0 == $.ely.length ? 0 : $.ely,
                    ne = e.outerWidth(!0),
                    re = e.outerHeight(!0);
                0 == ne && 0 == re && (ne = n.ulw, re = n.ulh);
                var oe = "off" !== P ? parseInt(ee, 0) * n.bw : parseInt(ee, 0),
                    se = "off" !== P ? parseInt(te, 0) * n.bw : parseInt(te, 0),
                    le = "grid" === C ? n.gridwidth[n.curWinRange] * n.bw : A,
                    de = "grid" === C ? n.gridheight[n.curWinRange] * n.bw : z;
                "on" == n.fullScreenAlignForce && (le = n.ulw, de = n.ulh), ie = "center" === ie || "middle" === ie ? le / 2 - ne / 2 + se : "left" === ie ? se : "right" === ie ? le - ne - se : "off" !== P ? ie * n.bw : ie, ae = "center" == ae || "middle" == ae ? de / 2 - re / 2 + oe : "top" == ae ? oe : "bottom" == ae ? de - re - oe : "off" !== P ? ae * n.bw : ae, j && (ie += ne);
                var he = e.data("lasttriggerstate"),
                    pe = e.data("triggerstate"),
                    ce = e.data("start") || 100,
                    ue = e.data("end"),
                    fe = b ? 0 : "bytrigger" === ce || "sliderenter" === ce ? 0 : parseFloat(ce) / 1e3,
                    ge = ie + o,
                    ve = ae + v,
                    me = e.css("z-Index");
                b || ("reset" == he && "bytrigger" != ce ? (e.data("triggerstate", "on"), e.data("animdirection", "in"), pe = "on") : "reset" == he && "bytrigger" == ce && (e.data("triggerstate", "off"), e.data("animdirection", "out"), pe = "off")), punchgs.TweenLite.set(k, {
                    zIndex: me,
                    top: ve,
                    left: ge,
                    overwrite: "auto"
                }), 0 == T && (x = !0), void 0 == e.data("timeline") || x || (2 != T && e.data("timeline").gotoAndPlay(0), x = !0), !_ && e.data("timeline_out") && 2 != T && 0 != T && (e.data("timeline_out").kill(), e.data("outstarted", 0)), b && void 0 != e.data("timeline") && (e.removeData("$anims"), e.data("timeline").pause(0), e.data("timeline").kill(), void 0 != e.data("newhoveranim") && (e.data("newhoveranim").progress(0), e.data("newhoveranim").kill()), e.removeData("timeline"), punchgs.TweenLite.killTweensOf(e), e.unbind("hover"), e.removeClass("rs-hover-ready"), e.removeData("newhoveranim"));
                var we = e.data("timeline") ? e.data("timeline").time() : 0,
                    ye = void 0 !== e.data("timeline") ? e.data("timeline").progress() : 0,
                    _e = e.data("timeline") || new punchgs.TimelineLite({
                        smoothChildTiming: !0
                    });
                if (ye = jQuery.isNumeric(ye) ? ye : 0, _e.pause(), ye < 1 && 1 != e.data("outstarted") || 2 == T || b) {
                    var be = e;
                    if (void 0 != e.data("mySplitText") && e.data("mySplitText").revert(), void 0 != e.data("splitin") && e.data("splitin").match(/chars|words|lines/g) || void 0 != e.data("splitout") && e.data("splitout").match(/chars|words|lines/g)) {
                        var xe = e.find("a").length > 0 ? e.find("a") : e;
                        e.data("mySplitText", new punchgs.SplitText(xe, {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        })), e.addClass("splitted")
                    }
                    void 0 !== e.data("mySplitText") && e.data("splitin") && e.data("splitin").match(/chars|words|lines/g) && (be = e.data("mySplitText")[e.data("splitin")]);
                    var Te = new Object,
                        ke = void 0 != e.data("transform_in") && e.data("transform_in").match(/\(R\)/gi);
                    if (!e.data("$anims") || b || ke) {
                        var Le = a(),
                            Oe = a(),
                            Se = r(),
                            Pe = void 0 !== e.data("transform_hover") || void 0 !== e.data("style_hover");
                        Oe = l(Oe, e.data("transform_idle")), Le = l(Oe, e.data("transform_in"), 1 == n.sdir), Pe && (Se = l(Se, e.data("transform_hover")), Se = u(Se, e.data("style_hover")), e.data("hover", Se)), Le.elemdelay = void 0 == e.data("elementdelay") ? 0 : e.data("elementdelay"), Oe.anim.ease = Le.anim.ease = Le.anim.ease || punchgs.Power1.easeInOut, Pe && !e.hasClass("rs-hover-ready") && (e.addClass("rs-hover-ready"), e.hover(function(e) {
                            var t = jQuery(e.currentTarget),
                                i = t.data("hover"),
                                a = t.data("timeline");
                            a && 1 == a.progress() && (void 0 === t.data("newhoveranim") || "none" === t.data("newhoveranim") ? t.data("newhoveranim", punchgs.TweenLite.to(t, i.speed, i.anim)) : (t.data("newhoveranim").progress(0), t.data("newhoveranim").play()))
                        }, function(e) {
                            var t = jQuery(e.currentTarget),
                                i = t.data("timeline");
                            i && 1 == i.progress() && void 0 != t.data("newhoveranim") && t.data("newhoveranim").reverse()
                        })), (Te = new Object).f = Le, Te.r = Oe, e.data("$anims")
                    } else Te = e.data("$anims");
                    var Ce = d(e.data("mask_in")),
                        Ae = new punchgs.TimelineLite;
                    if (Te.f.anim.x = Te.f.anim.x * n.bw || s(Te.f.anim.x, n, ne, re, ve, ge, "horizontal"), Te.f.anim.y = Te.f.anim.y * n.bw || s(Te.f.anim.y, n, ne, re, ve, ge, "vertical"), 2 != T || b) {
                        if (be != e) {
                            var ze = Te.r.anim.ease;
                            _e.add(punchgs.TweenLite.set(e, Te.r.anim)), Te.r = a(), Te.r.anim.ease = ze
                        }
                        if (Te.f.anim.visibility = "hidden", Ae.eventCallback("onStart", function() {
                                punchgs.TweenLite.set(e, {
                                    visibility: "visible"
                                }), e.data("iframes") && e.find("iframe").each(function() {
                                    punchgs.TweenLite.set(jQuery(this), {
                                        autoAlpha: 1
                                    })
                                }), punchgs.TweenLite.set(k, {
                                    visibility: "visible"
                                });
                                var t = {};
                                t.layer = e, t.eventtype = "enterstage", t.layertype = e.data("layertype"), t.layersettings = e.data(), n.c.trigger("revolution.layeraction", t)
                            }), Ae.eventCallback("onComplete", function() {
                                var i = {};
                                i.layer = e, i.eventtype = "enteredstage", i.layertype = e.data("layertype"), i.layersettings = e.data(), n.c.trigger("revolution.layeraction", i), t.animcompleted(e, n)
                            }), "sliderenter" == ce && n.overcontainer && (fe = .6), _e.add(Ae.staggerFromTo(be, Te.f.speed, Te.f.anim, Te.r.anim, Te.f.elemdelay), fe), Ce) {
                            var je = new Object;
                            je.ease = Te.r.anim.ease, je.overflow = Ce.anim.overflow = "hidden", je.x = je.y = 0, Ce.anim.x = Ce.anim.x * n.bw || s(Ce.anim.x, n, ne, re, ve, ge, "horizontal"), Ce.anim.y = Ce.anim.y * n.bw || s(Ce.anim.y, n, ne, re, ve, ge, "vertical"), _e.add(punchgs.TweenLite.fromTo(O, Te.f.speed, Ce.anim, je, Le.elemdelay), fe)
                        } else _e.add(punchgs.TweenLite.set(O, {
                            overflow: "visible"
                        }, Le.elemdelay), 0)
                    }
                    e.data("timeline", _e), T = c(e, n, "in"), 0 !== ye && 2 != T || "bytrigger" === ue || b || "sliderleave" == ue || (void 0 == ue || -1 != T && 2 != T || "bytriger" === ue ? punchgs.TweenLite.delayedCall(999999, t.endMoveCaption, [e, O, k, n]) : punchgs.TweenLite.delayedCall(parseInt(e.data("end"), 0) / 1e3, t.endMoveCaption, [e, O, k, n])), _e = e.data("timeline"), "on" == e.data("loopanimation") && w(L, n.bw), ("sliderenter" != ce || "sliderenter" == ce && n.overcontainer) && (-1 == T || 1 == T || b || 0 == T && ye < 1 && e.hasClass("rev-static-visbile")) && (ye < 1 && ye > 0 || 0 == ye && "bytrigger" != ce && "keep" != he || 0 == ye && "bytrigger" != ce && "keep" == he && "on" == pe || "bytrigger" == ce && "keep" == he && "on" == pe) && _e.resume(we)
                }
                "on" == e.data("loopanimation") && punchgs.TweenLite.set(L, {
                    minWidth: ne,
                    minHeight: re
                }), 0 == e.data("slidelink") || 1 != e.data("slidelink") && !e.hasClass("slidelink") ? (punchgs.TweenLite.set(O, {
                    width: "auto",
                    height: "auto"
                }), e.data("slidelink", 0)) : (punchgs.TweenLite.set(O, {
                    width: "100%",
                    height: "100%"
                }), e.data("slidelink", 1))
            },
            endMoveCaption: function(e, t, i, r) {
                if (t = t || e.data("_mw"), i = i || e.data("_pw"), e.data("outstarted", 1), e.data("timeline")) e.data("timeline").pause();
                else if (void 0 === e.data("_pw")) return;
                var o = new punchgs.TimelineLite,
                    h = new punchgs.TimelineLite,
                    p = new punchgs.TimelineLite,
                    c = l(a(), e.data("transform_in"), 1 == r.sdir),
                    u = e.data("transform_out") ? l(n(), e.data("transform_out"), 1 == r.sdir) : l(n(), e.data("transform_in"), 1 == r.sdir),
                    f = e.data("splitout") && e.data("splitout").match(/words|chars|lines/g) ? e.data("mySplitText")[e.data("splitout")] : e,
                    g = void 0 == e.data("endelementdelay") ? 0 : e.data("endelementdelay"),
                    v = e.innerWidth(),
                    m = e.innerHeight(),
                    w = i.position();
                e.data("transform_out") && e.data("transform_out").match(/auto:auto/g) && (c.speed = u.speed, c.anim.ease = u.anim.ease, u = c);
                var y = d(e.data("mask_out"));
                u.anim.x = u.anim.x * r.bw || s(u.anim.x, r, v, m, w.top, w.left, "horizontal"), u.anim.y = u.anim.y * r.bw || s(u.anim.y, r, v, m, w.top, w.left, "vertical"), h.eventCallback("onStart", function() {
                    var t = {};
                    t.layer = e, t.eventtype = "leavestage", t.layertype = e.data("layertype"), t.layersettings = e.data(), r.c.trigger("revolution.layeraction", t)
                }), h.eventCallback("onComplete", function() {
                    punchgs.TweenLite.set(e, {
                        visibility: "hidden"
                    }), punchgs.TweenLite.set(i, {
                        visibility: "hidden"
                    });
                    var t = {};
                    t.layer = e, t.eventtype = "leftstage", t.layertype = e.data("layertype"), t.layersettings = e.data(), r.c.trigger("revolution.layeraction", t)
                }), o.add(h.staggerTo(f, u.speed, u.anim, g), 0), y ? (y.anim.ease = u.anim.ease, y.anim.overflow = "hidden", y.anim.x = y.anim.x * r.bw || s(y.anim.x, r, v, m, w.top, w.left, "horizontal"), y.anim.y = y.anim.y * r.bw || s(y.anim.y, r, v, m, w.top, w.left, "vertical"), o.add(p.to(t, u.speed, y.anim, g), 0)) : o.add(p.set(t, {
                    overflow: "visible",
                    overwrite: "auto"
                }, g), 0), e.data("timeline_out", o)
            },
            removeTheCaptions: function(e, i) {
                var a = e.data("index"),
                    n = new Array;
                i.layers[a] && jQuery.each(i.layers[a], function(e, t) {
                    n.push(t)
                }), i.layers.static && jQuery.each(i.layers.static, function(e, t) {
                    n.push(t)
                }), punchgs.TweenLite.killDelayedCallsTo(t.endMoveCaption), n && jQuery.each(n, function(e) {
                    var a = jQuery(this);
                    0 != c(a, i, "out") && (y(a), clearTimeout(a.data("videoplaywait")), t.stopVideo && t.stopVideo(a, i), t.endMoveCaption(a, null, null, i), i.playingvideos = [], i.lastplayedvideos = [])
                })
            }
        });
        var a = function() {
                var e = new Object;
                return e.anim = new Object, e.anim.x = 0, e.anim.y = 0, e.anim.z = 0, e.anim.rotationX = 0, e.anim.rotationY = 0, e.anim.rotationZ = 0, e.anim.scaleX = 1, e.anim.scaleY = 1, e.anim.skewX = 0, e.anim.skewY = 0, e.anim.opacity = 1, e.anim.transformOrigin = "50% 50%", e.anim.transformPerspective = 600, e.anim.rotation = 0, e.anim.ease = punchgs.Power3.easeOut, e.anim.force3D = "auto", e.speed = .3, e.anim.autoAlpha = 1, e.anim.visibility = "visible", e.anim.overwrite = "all", e
            },
            n = function() {
                var e = new Object;
                return e.anim = new Object, e.anim.x = 0, e.anim.y = 0, e.anim.z = 0, e
            },
            r = function() {
                var e = new Object;
                return e.anim = new Object, e.speed = .2, e
            },
            o = function(e, t) {
                if (jQuery.isNumeric(parseFloat(e))) return parseFloat(e);
                if (void 0 === e || "inherit" === e) return t;
                if (e.split("{").length > 1) {
                    var i = e.split(","),
                        a = parseFloat(i[1].split("}")[0]);
                    i = parseFloat(i[0].split("{")[1]), e = Math.random() * (a - i) + i
                }
                return e
            },
            s = function(e, t, i, a, n, r, o) {
                return !jQuery.isNumeric(e) && e.match(/%]/g) ? (e = e.split("[")[1].split("]")[0], "horizontal" == o ? e = (i + 2) * parseInt(e, 0) / 100 : "vertical" == o && (e = (a + 2) * parseInt(e, 0) / 100)) : e = "top" === (e = "left" === (e = "layer_top" === (e = "layer_left" === e ? 0 - i : "layer_right" === e ? i : e) ? 0 - a : "layer_bottom" === e ? a : e) || "stage_left" === e ? 0 - i - r : "right" === e || "stage_right" === e ? t.conw - r : "center" === e || "stage_center" === e ? t.conw / 2 - i / 2 - r : e) || "stage_top" === e ? 0 - a - n : "bottom" === e || "stage_bottom" === e ? t.conh - n : "middle" === e || "stage_middle" === e ? t.conh / 2 - a / 2 - n : e, e
            },
            l = function(e, t, i) {
                var a = new Object;
                if (a = jQuery.extend(!0, {}, a, e), void 0 === t) return a;
                var n = t.split(";");
                return n && jQuery.each(n, function(e, t) {
                    var n = t.split(":"),
                        r = n[0],
                        s = n[1];
                    i && void 0 != s && s.length > 0 && s.match(/\(R\)/) && ("[" === (s = "right" === (s = s.replace("(R)", "")) ? "left" : "left" === s ? "right" : "top" === s ? "bottom" : "bottom" === s ? "top" : s)[0] && "-" === s[1] ? s = s.replace("[-", "[") : "[" === s[0] && "-" !== s[1] ? s = s.replace("[", "[-") : "-" === s[0] ? s = s.replace("-", "") : s[0].match(/[1-9]/) && (s = "-" + s)), void 0 != s && (s = s.replace(/\(R\)/, ""), "rotationX" != r && "rX" != r || (a.anim.rotationX = o(s, a.anim.rotationX) + "deg"), "rotationY" != r && "rY" != r || (a.anim.rotationY = o(s, a.anim.rotationY) + "deg"), "rotationZ" != r && "rZ" != r || (a.anim.rotation = o(s, a.anim.rotationZ) + "deg"), "scaleX" != r && "sX" != r || (a.anim.scaleX = o(s, a.anim.scaleX)), "scaleY" != r && "sY" != r || (a.anim.scaleY = o(s, a.anim.scaleY)), "opacity" != r && "o" != r || (a.anim.opacity = o(s, a.anim.opacity)), "skewX" != r && "skX" != r || (a.anim.skewX = o(s, a.anim.skewX)), "skewY" != r && "skY" != r || (a.anim.skewY = o(s, a.anim.skewY)), "x" == r && (a.anim.x = o(s, a.anim.x)), "y" == r && (a.anim.y = o(s, a.anim.y)), "z" == r && (a.anim.z = o(s, a.anim.z)), "transformOrigin" != r && "tO" != r || (a.anim.transformOrigin = s.toString()), "transformPerspective" != r && "tP" != r || (a.anim.transformPerspective = parseInt(s, 0)), "speed" != r && "s" != r || (a.speed = parseFloat(s) / 1e3), "ease" != r && "e" != r || (a.anim.ease = s))
                }), a
            },
            d = function(e) {
                if (void 0 === e) return !1;
                var t = new Object;
                t.anim = new Object;
                var i = e.split(";");
                return i && jQuery.each(i, function(e, i) {
                    var a = (i = i.split(":"))[0],
                        n = i[1];
                    "x" == a && (t.anim.x = n), "y" == a && (t.anim.y = n), "s" == a && (t.speed = parseFloat(n) / 1e3), "e" != a && "ease" != a || (t.anim.ease = n)
                }), t
            },
            h = function(e, t, i) {
                if (void 0 == e && (e = 0), !jQuery.isArray(e) && "string" === jQuery.type(e) && (e.split(",").length > 1 || e.split("[").length > 1)) {
                    var a = (e = (e = e.replace("[", "")).replace("]", "")).match(/'/g) ? e.split("',") : e.split(",");
                    e = new Array, a && jQuery.each(a, function(t, i) {
                        i = (i = i.replace("'", "")).replace("'", ""), e.push(i)
                    })
                } else {
                    var n = e;
                    jQuery.isArray(e) || (e = new Array).push(n)
                }
                n = e[e.length - 1];
                if (e.length < t.rle)
                    for (var r = 1; r <= t.curWinRange; r++) e.push(n);
                return e
            };

        function p(e, t, i, a, n, r, o) {
            var s = e.find(t);
            s.css("borderWidth", r + "px"), s.css(i, 0 - r + "px"), s.css(a, "0px solid transparent"), s.css(n, o)
        }
        var c = function(e, t, i, a) {
                var n = -1;
                if (e.hasClass("tp-static-layer")) {
                    var r = parseInt(e.data("startslide"), 0),
                        o = parseInt(e.data("endslide"), 0),
                        s = t.c.find(".processing-revslide").index(),
                        l = -1 != s ? s : t.c.find(".active-revslide").index();
                    l = -1 == l ? 0 : l, "in" === i ? e.hasClass("rev-static-visbile") ? n = o == l || r > l || o < l ? 2 : 0 : r <= l && o >= l || r == l || o == l ? (a || (e.addClass("rev-static-visbile"), e.removeClass("rev-static-hidden")), n = 1) : n = 0 : e.hasClass("rev-static-visbile") ? r > l || o < l ? (n = 2, a || (e.removeClass("rev-static-visbile"), e.addClass("rev-static-hidden"))) : n = 0 : n = 2
                }
                return n
            },
            u = function(e, t) {
                if (void 0 === t) return e;
                var i = (t = (t = (t = (t = (t = (t = (t = t.replace("c:", "color:")).replace("bg:", "background-color:")).replace("bw:", "border-width:")).replace("bc:", "border-color:")).replace("br:", "borderRadius:")).replace("bs:", "border-style:")).replace("td:", "text-decoration:")).split(";");
                return i && jQuery.each(i, function(t, i) {
                    var a = i.split(":");
                    a[0].length > 0 && (e.anim[a[0]] = a[1])
                }), e
            },
            f = function(e, t) {
                var i, a = new Object,
                    n = !1;
                if ("rekursive" == t && (i = e.closest(".tp-caption")) && e.css("fontSize") === i.css("fontSize") && (n = !0), a.basealign = e.data("basealign") || "grid", a.fontSize = n ? void 0 === i.data("fontsize") ? parseInt(i.css("fontSize"), 0) || 0 : i.data("fontsize") : void 0 === e.data("fontsize") ? parseInt(e.css("fontSize"), 0) || 0 : e.data("fontsize"), a.fontWeight = n ? void 0 === i.data("fontweight") ? parseInt(i.css("fontWeight"), 0) || 0 : i.data("fontweight") : void 0 === e.data("fontweight") ? parseInt(e.css("fontWeight"), 0) || 0 : e.data("fontweight"), a.whiteSpace = n ? void 0 === i.data("whitespace") ? i.css("whitespace") || "normal" : i.data("whitespace") : void 0 === e.data("whitespace") ? e.css("whitespace") || "normal" : e.data("whitespace"), a.lineHeight = n ? void 0 === i.data("lineheight") ? parseInt(i.css("lineHeight"), 0) || 0 : i.data("lineheight") : void 0 === e.data("lineheight") ? parseInt(e.css("lineHeight"), 0) || 0 : e.data("lineheight"), a.letterSpacing = n ? void 0 === i.data("letterspacing") ? parseFloat(i.css("letterSpacing"), 0) || 0 : i.data("letterspacing") : void 0 === e.data("letterspacing") ? parseFloat(e.css("letterSpacing")) || 0 : e.data("letterspacing"), a.paddingTop = void 0 === e.data("paddingtop") ? parseInt(e.css("paddingTop"), 0) || 0 : e.data("paddingtop"), a.paddingBottom = void 0 === e.data("paddingbottom") ? parseInt(e.css("paddingBottom"), 0) || 0 : e.data("paddingbottom"), a.paddingLeft = void 0 === e.data("paddingleft") ? parseInt(e.css("paddingLeft"), 0) || 0 : e.data("paddingleft"), a.paddingRight = void 0 === e.data("paddingright") ? parseInt(e.css("paddingRight"), 0) || 0 : e.data("paddingright"), a.marginTop = void 0 === e.data("margintop") ? parseInt(e.css("marginTop"), 0) || 0 : e.data("margintop"), a.marginBottom = void 0 === e.data("marginbottom") ? parseInt(e.css("marginBottom"), 0) || 0 : e.data("marginbottom"), a.marginLeft = void 0 === e.data("marginleft") ? parseInt(e.css("marginLeft"), 0) || 0 : e.data("marginleft"), a.marginRight = void 0 === e.data("marginright") ? parseInt(e.css("marginRight"), 0) || 0 : e.data("marginright"), a.borderTopWidth = void 0 === e.data("bordertopwidth") ? parseInt(e.css("borderTopWidth"), 0) || 0 : e.data("bordertopwidth"), a.borderBottomWidth = void 0 === e.data("borderbottomwidth") ? parseInt(e.css("borderBottomWidth"), 0) || 0 : e.data("borderbottomwidth"), a.borderLeftWidth = void 0 === e.data("borderleftwidth") ? parseInt(e.css("borderLeftWidth"), 0) || 0 : e.data("borderleftwidth"), a.borderRightWidth = void 0 === e.data("borderrightwidth") ? parseInt(e.css("borderRightWidth"), 0) || 0 : e.data("borderrightwidth"), "rekursive" != t) {
                    if (a.color = void 0 === e.data("color") ? "nopredefinedcolor" : e.data("color"), a.whiteSpace = n ? void 0 === i.data("whitespace") ? i.css("whiteSpace") || "nowrap" : i.data("whitespace") : void 0 === e.data("whitespace") ? e.css("whiteSpace") || "nowrap" : e.data("whitespace"), a.minWidth = void 0 === e.data("width") ? parseInt(e.css("minWidth"), 0) || 0 : e.data("width"), a.minHeight = void 0 === e.data("height") ? parseInt(e.css("minHeight"), 0) || 0 : e.data("height"), void 0 != e.data("videowidth") && void 0 != e.data("videoheight")) {
                        var r = e.data("videowidth"),
                            o = e.data("videoheight");
                        r = "100%" === r ? "none" : r, o = "100%" === o ? "none" : o, e.data("width", r), e.data("height", o)
                    }
                    a.maxWidth = void 0 === e.data("width") ? parseInt(e.css("maxWidth"), 0) || "none" : e.data("width"), a.maxHeight = void 0 === e.data("height") ? parseInt(e.css("maxHeight"), 0) || "none" : e.data("height"), a.wan = void 0 === e.data("wan") ? parseInt(e.css("-webkit-transition"), 0) || "none" : e.data("wan"), a.moan = void 0 === e.data("moan") ? parseInt(e.css("-moz-animation-transition"), 0) || "none" : e.data("moan"), a.man = void 0 === e.data("man") ? parseInt(e.css("-ms-animation-transition"), 0) || "none" : e.data("man"), a.ani = void 0 === e.data("ani") ? parseInt(e.css("transition"), 0) || "none" : e.data("ani")
                }
                return a.styleProps = e.css(["background-color", "border-top-color", "border-bottom-color", "border-right-color", "border-left-color", "border-top-style", "border-bottom-style", "border-left-style", "border-right-style", "border-left-width", "border-right-width", "border-bottom-width", "border-top-width", "text-decoration", "font-style", "border-radius"]), a
            },
            g = function(e, t) {
                var i = new Object;
                return e && jQuery.each(e, function(a, n) {
                    i[a] = h(n, t)[t.curWinRange] || e[a]
                }), i
            },
            v = function(e, t, i, a) {
                return e = "full" === (e = jQuery.isNumeric(e) ? e * t + "px" : e) ? a : "auto" === e || "none" === e ? i : e
            },
            m = function(e, t, i, a) {
                var n;
                void 0 === e.data("cssobj") ? (n = f(e, i), e.data("cssobj", n)) : n = e.data("cssobj");
                var r = g(n, t),
                    o = t.bw,
                    s = t.bh;
                if ("off" === a && (o = 1, s = 1), "auto" == r.lineHeight && (r.lineHeight = r.fontSize + 4), !e.hasClass("tp-splitted")) {
                    if (e.css("-webkit-transition", "none"), e.css("-moz-transition", "none"), e.css("-ms-transition", "none"), e.css("transition", "none"), (void 0 !== e.data("transform_hover") || void 0 !== e.data("style_hover")) && punchgs.TweenLite.set(e, r.styleProps), punchgs.TweenLite.set(e, {
                            fontSize: Math.round(r.fontSize * o) + "px",
                            fontWeight: r.fontWeight,
                            letterSpacing: Math.floor(r.letterSpacing * o) + "px",
                            paddingTop: Math.round(r.paddingTop * s) + "px",
                            paddingBottom: Math.round(r.paddingBottom * s) + "px",
                            paddingLeft: Math.round(r.paddingLeft * o) + "px",
                            paddingRight: Math.round(r.paddingRight * o) + "px",
                            marginTop: r.marginTop * s + "px",
                            marginBottom: r.marginBottom * s + "px",
                            marginLeft: r.marginLeft * o + "px",
                            marginRight: r.marginRight * o + "px",
                            borderTopWidth: Math.round(r.borderTopWidth * s) + "px",
                            borderBottomWidth: Math.round(r.borderBottomWidth * s) + "px",
                            borderLeftWidth: Math.round(r.borderLeftWidth * o) + "px",
                            borderRightWidth: Math.round(r.borderRightWidth * o) + "px",
                            lineHeight: Math.round(r.lineHeight * s) + "px",
                            overwrite: "auto"
                        }), "rekursive" != i) {
                        var l = "slide" == r.basealign ? t.ulw : t.gridwidth[t.curWinRange],
                            d = "slide" == r.basealign ? t.ulh : t.gridheight[t.curWinRange],
                            h = v(r.maxWidth, o, "none", l),
                            p = v(r.maxHeight, s, "none", d),
                            c = v(r.minWidth, o, "0px", l),
                            u = v(r.minHeight, s, "0px", d);
                        punchgs.TweenLite.set(e, {
                            maxWidth: h,
                            maxHeight: p,
                            minWidth: c,
                            minHeight: u,
                            whiteSpace: r.whiteSpace,
                            overwrite: "auto"
                        }), "nopredefinedcolor" != r.color && punchgs.TweenLite.set(e, {
                            color: r.color,
                            overwrite: "auto"
                        })
                    }
                    setTimeout(function() {
                        e.css("-webkit-transition", e.data("wan")), e.css("-moz-transition", e.data("moan")), e.css("-ms-transition", e.data("man")), e.css("transition", e.data("ani"))
                    }, 30)
                }
            },
            w = function(e, t) {
                if (e.hasClass("rs-pendulum") && void 0 == e.data("loop-timeline")) {
                    e.data("loop-timeline", new punchgs.TimelineLite);
                    var i = void 0 == e.data("startdeg") ? -20 : e.data("startdeg"),
                        a = void 0 == e.data("enddeg") ? 20 : e.data("enddeg"),
                        n = void 0 == e.data("speed") ? 2 : e.data("speed"),
                        r = void 0 == e.data("origin") ? "50% 50%" : e.data("origin"),
                        o = void 0 == e.data("easing") ? punchgs.Power2.easeInOut : e.data("ease");
                    i *= t, a *= t, e.data("loop-timeline").append(new punchgs.TweenLite.fromTo(e, n, {
                        force3D: "auto",
                        rotation: i,
                        transformOrigin: r
                    }, {
                        rotation: a,
                        ease: o
                    })), e.data("loop-timeline").append(new punchgs.TweenLite.fromTo(e, n, {
                        force3D: "auto",
                        rotation: a,
                        transformOrigin: r
                    }, {
                        rotation: i,
                        ease: o,
                        onComplete: function() {
                            e.data("loop-timeline").restart()
                        }
                    }))
                }
                if (e.hasClass("rs-rotate") && void 0 == e.data("loop-timeline")) {
                    e.data("loop-timeline", new punchgs.TimelineLite);
                    i = void 0 == e.data("startdeg") ? 0 : e.data("startdeg"), a = void 0 == e.data("enddeg") ? 360 : e.data("enddeg");
                    n = void 0 == e.data("speed") ? 2 : e.data("speed"), r = void 0 == e.data("origin") ? "50% 50%" : e.data("origin"), o = void 0 == e.data("easing") ? punchgs.Power2.easeInOut : e.data("easing"), i *= t, a *= t, e.data("loop-timeline").append(new punchgs.TweenLite.fromTo(e, n, {
                        force3D: "auto",
                        rotation: i,
                        transformOrigin: r
                    }, {
                        rotation: a,
                        ease: o,
                        onComplete: function() {
                            e.data("loop-timeline").restart()
                        }
                    }))
                }
                if (e.hasClass("rs-slideloop") && void 0 == e.data("loop-timeline")) {
                    e.data("loop-timeline", new punchgs.TimelineLite);
                    var s = void 0 == e.data("xs") ? 0 : e.data("xs"),
                        l = void 0 == e.data("ys") ? 0 : e.data("ys"),
                        d = void 0 == e.data("xe") ? 0 : e.data("xe"),
                        h = void 0 == e.data("ye") ? 0 : e.data("ye");
                    n = void 0 == e.data("speed") ? 2 : e.data("speed"), o = void 0 == e.data("easing") ? punchgs.Power2.easeInOut : e.data("easing");
                    s *= t, l *= t, d *= t, h *= t, e.data("loop-timeline").append(new punchgs.TweenLite.fromTo(e, n, {
                        force3D: "auto",
                        x: s,
                        y: l
                    }, {
                        x: d,
                        y: h,
                        ease: o
                    })), e.data("loop-timeline").append(new punchgs.TweenLite.fromTo(e, n, {
                        force3D: "auto",
                        x: d,
                        y: h
                    }, {
                        x: s,
                        y: l,
                        onComplete: function() {
                            e.data("loop-timeline").restart()
                        }
                    }))
                }
                if (e.hasClass("rs-pulse") && void 0 == e.data("loop-timeline")) {
                    e.data("loop-timeline", new punchgs.TimelineLite);
                    var p = void 0 == e.data("zoomstart") ? 0 : e.data("zoomstart"),
                        c = void 0 == e.data("zoomend") ? 0 : e.data("zoomend");
                    n = void 0 == e.data("speed") ? 2 : e.data("speed"), o = void 0 == e.data("easing") ? punchgs.Power2.easeInOut : e.data("easing");
                    e.data("loop-timeline").append(new punchgs.TweenLite.fromTo(e, n, {
                        force3D: "auto",
                        scale: p
                    }, {
                        scale: c,
                        ease: o
                    })), e.data("loop-timeline").append(new punchgs.TweenLite.fromTo(e, n, {
                        force3D: "auto",
                        scale: c
                    }, {
                        scale: p,
                        onComplete: function() {
                            e.data("loop-timeline").restart()
                        }
                    }))
                }
                if (e.hasClass("rs-wave") && void 0 == e.data("loop-timeline")) {
                    e.data("loop-timeline", new punchgs.TimelineLite);
                    var u = void 0 == e.data("angle") ? 10 : parseInt(e.data("angle"), 0),
                        f = void 0 == e.data("radius") ? 10 : parseInt(e.data("radius"), 0),
                        g = (n = void 0 == e.data("speed") ? -20 : e.data("speed"), (r = void 0 == e.data("origin") ? "50% 50%" : e.data("origin")).split(" ")),
                        v = new Object;
                    g.length >= 1 ? (v.x = g[0], v.y = g[1]) : (v.x = "50%", v.y = "50%"), u *= t, f *= t;
                    var m = 0 - e.height() / 2 + f * (parseInt(v.y, 0) / 100 - 1),
                        w = e.width() * (parseInt(v.x, 0) / 100 - .5),
                        y = {
                            a: 0,
                            ang: u,
                            element: e,
                            unit: f,
                            xoffset: w,
                            yoffset: m
                        };
                    e.data("loop-timeline").append(new punchgs.TweenLite.fromTo(y, n, {
                        a: 360
                    }, {
                        a: 0,
                        force3D: "auto",
                        ease: punchgs.Linear.easeNone,
                        onUpdate: function() {
                            var e = y.a * (Math.PI / 180);
                            punchgs.TweenLite.to(y.element, .1, {
                                force3D: "auto",
                                x: y.xoffset + Math.cos(e) * y.unit,
                                y: y.yoffset + y.unit * (1 - Math.sin(e))
                            })
                        },
                        onComplete: function() {
                            e.data("loop-timeline").restart()
                        }
                    }))
                }
            },
            y = function(e) {
                e.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function() {
                    var e = jQuery(this);
                    void 0 != e.data("loop-timeline") && (e.data("loop-timeline").pause(), e.data("loop-timeline", null))
                })
            }
    }(jQuery),
    function() {
        var e = jQuery.fn.revolution;
        jQuery.extend(!0, e, {
            migration: function(e, a) {
                return a = t(a), i(e, a), a
            }
        });
        var t = function(e) {
                if (e.parallaxLevels || e.parallaxBgFreeze) {
                    var t = new Object;
                    t.type = e.parallax, t.levels = e.parallaxLevels, t.bgparallax = "on" == e.parallaxBgFreeze ? "off" : "on", t.disable_onmobile = e.parallaxDisableOnMobile, e.parallax = t
                }
                if (void 0 === e.disableProgressBar && (e.disableProgressBar = e.hideTimerBar || "off"), (e.startwidth || e.startheight) && (e.gridwidth = e.startwidth, e.gridheight = e.startheight), void 0 === e.sliderType && (e.sliderType = "standard"), "on" === e.fullScreen && (e.sliderLayout = "fullscreen"), "on" === e.fullWidth && (e.sliderLayout = "fullwidth"), void 0 === e.sliderLayout && (e.sliderLayout = "auto"), void 0 === e.navigation) {
                    var i = new Object;
                    if ("solo" == e.navigationArrows || "nextto" == e.navigationArrows) {
                        var a = new Object;
                        a.enable = !0, a.style = e.navigationStyle || "", a.hide_onmobile = "on" === e.hideArrowsOnMobile, a.hide_onleave = e.hideThumbs > 0, a.hide_delay = e.hideThumbs > 0 ? e.hideThumbs : 200, a.hide_delay_mobile = e.hideNavDelayOnMobile || 1500, a.hide_under = 0, a.tmp = "", a.left = {
                            h_align: e.soloArrowLeftHalign,
                            v_align: e.soloArrowLeftValign,
                            h_offset: e.soloArrowLeftHOffset,
                            v_offset: e.soloArrowLeftVOffset
                        }, a.right = {
                            h_align: e.soloArrowRightHalign,
                            v_align: e.soloArrowRightValign,
                            h_offset: e.soloArrowRightHOffset,
                            v_offset: e.soloArrowRightVOffset
                        }, i.arrows = a
                    }
                    if ("bullet" == e.navigationType) {
                        var n = new Object;
                        n.style = e.navigationStyle || "", n.enable = !0, n.hide_onmobile = "on" === e.hideArrowsOnMobile, n.hide_onleave = e.hideThumbs > 0, n.hide_delay = e.hideThumbs > 0 ? e.hideThumbs : 200, n.hide_delay_mobile = e.hideNavDelayOnMobile || 1500, n.hide_under = 0, n.direction = "horizontal", n.h_align = e.navigationHAlign || "center", n.v_align = e.navigationVAlign || "bottom", n.space = 5, n.h_offset = e.navigationHOffset || 0, n.v_offset = e.navigationVOffset || 20, n.tmp = '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>', i.bullets = n
                    }
                    if ("thumb" == e.navigationType) {
                        var r = new Object;
                        r.style = e.navigationStyle || "", r.enable = !0, r.width = e.thumbWidth || 100, r.height = e.thumbHeight || 50, r.min_width = e.thumbWidth || 100, r.wrapper_padding = 2, r.wrapper_color = "#f5f5f5", r.wrapper_opacity = 1, r.visibleAmount = e.thumbAmount || 3, r.hide_onmobile = "on" === e.hideArrowsOnMobile, r.hide_onleave = e.hideThumbs > 0, r.hide_delay = e.hideThumbs > 0 ? e.hideThumbs : 200, r.hide_delay_mobile = e.hideNavDelayOnMobile || 1500, r.hide_under = 0, r.direction = "horizontal", r.span = !1, r.position = "inner", r.space = 2, r.h_align = e.navigationHAlign || "center", r.v_align = e.navigationVAlign || "bottom", r.h_offset = e.navigationHOffset || 0, r.v_offset = e.navigationVOffset || 20, r.tmp = '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>', i.thumbnails = r
                    }
                    e.navigation = i, e.navigation.keyboardNavigation = e.keyboardNavigation || "on", e.navigation.onHoverStop = e.onHoverStop || "on", e.navigation.touch = {
                        touchenabled: e.touchenabled || "on",
                        swipe_treshold: e.swipe_treshold || 75,
                        swipe_min_touches: e.swipe_min_touches || 1,
                        drag_block_vertical: e.drag_block_vertical || !1
                    }
                }
                return e.fallbacks = {
                    isJoomla: e.isJoomla || !1,
                    panZoomDisableOnMobile: e.parallaxDisableOnMobile || "off",
                    simplifyAll: e.simplifyAll || "on",
                    nextSlideOnWindowFocus: e.nextSlideOnWindowFocus || "off",
                    disableFocusListener: e.disableFocusListener || !0
                }, e
            },
            i = function(e) {
                var t = new Object;
                e.width(), e.height();
                t.skewfromleftshort = "x:-50;skX:85;o:0", t.skewfromrightshort = "x:50;skX:-85;o:0", t.sfl = "x:-50;o:0", t.sfr = "x:50;o:0", t.sft = "y:-50;o:0", t.sfb = "y:50;o:0", t.skewfromleft = "x:top;skX:85;o:0", t.skewfromright = "x:bottom;skX:-85;o:0", t.lfl = "x:top;o:0", t.lfr = "x:bottom;o:0", t.lft = "y:left;o:0", t.lfb = "y:right;o:0", t.fade = "o:0", Math.random(), e.find(".tp-caption").each(function() {
                    var e = jQuery(this),
                        i = (Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), e.attr("class"));
                    t.randomrotate = "x:{-400,400};y:{-400,400};sX:{0,2};sY:{0,2};rZ:{-180,180};rX:{-180,180};rY:{-180,180};o:0;", i.match("randomrotate") ? e.data("transform_in", t.randomrotate) : i.match(/\blfl\b/) ? e.data("transform_in", t.lfl) : i.match(/\blfr\b/) ? e.data("transform_in", t.lfr) : i.match(/\blft\b/) ? e.data("transform_in", t.lft) : i.match(/\blfb\b/) ? e.data("transform_in", t.lfb) : i.match(/\bsfl\b/) ? e.data("transform_in", t.sfl) : i.match(/\bsfr\b/) ? e.data("transform_in", t.sfr) : i.match(/\bsft\b/) ? e.data("transform_in", t.sft) : i.match(/\bsfb\b/) ? e.data("transform_in", t.sfb) : i.match(/\bskewfromleftshort\b/) ? e.data("transform_in", t.skewfromleftshort) : i.match(/\bskewfromrightshort\b/) ? e.data("transform_in", t.skewfromrightshort) : i.match(/\bskewfromleft\b/) ? e.data("transform_in", t.skewfromleft) : i.match(/\bskewfromright\b/) ? e.data("transform_in", t.skewfromright) : i.match(/\bfade\b/) && e.data("transform_in", t.fade), i.match(/\brandomrotateout\b/) ? e.data("transform_out", t.randomrotate) : i.match(/\bltl\b/) ? e.data("transform_out", t.lfl) : i.match(/\bltr\b/) ? e.data("transform_out", t.lfr) : i.match(/\bltt\b/) ? e.data("transform_out", t.lft) : i.match(/\bltb\b/) ? e.data("transform_out", t.lfb) : i.match(/\bstl\b/) ? e.data("transform_out", t.sfl) : i.match(/\bstr\b/) ? e.data("transform_out", t.sfr) : i.match(/\bstt\b/) ? e.data("transform_out", t.sft) : i.match(/\bstb\b/) ? e.data("transform_out", t.sfb) : i.match(/\bskewtoleftshortout\b/) ? e.data("transform_out", t.skewfromleftshort) : i.match(/\bskewtorightshortout\b/) ? e.data("transform_out", t.skewfromrightshort) : i.match(/\bskewtoleftout\b/) ? e.data("transform_out", t.skewfromleft) : i.match(/\bskewtorightout\b/) ? e.data("transform_out", t.skewfromright) : i.match(/\bfadeout\b/) && e.data("transform_out", t.fade), void 0 != e.data("customin") && e.data("transform_in", e.data("customin")), void 0 != e.data("customout") && e.data("transform_out", e.data("customout"))
                })
            }
    }(jQuery),
    function() {
        var e = jQuery.fn.revolution,
            t = e.is_mobile();
        jQuery.extend(!0, e, {
            hideUnHideNav: function(e) {
                var t = e.c.width(),
                    i = e.navigation.arrows,
                    a = e.navigation.bullets,
                    n = e.navigation.thumbnails,
                    r = e.navigation.tabs;
                d(i) && _(e.c.find(".tparrows"), i.hide_under, t, i.hide_over), d(a) && _(e.c.find(".tp-bullets"), a.hide_under, t, a.hide_over), d(n) && _(e.c.parent().find(".tp-thumbs"), n.hide_under, t, n.hide_over), d(r) && _(e.c.parent().find(".tp-tabs"), r.hide_under, t, r.hide_over), y(e)
            },
            resizeThumbsTabs: function(e) {
                if (e.navigation && e.navigation.tabs.enable || e.navigation && e.navigation.thumbnails.enable) {
                    var t = (jQuery(window).width() - 480) / 500,
                        i = new punchgs.TimelineLite,
                        n = e.navigation.tabs,
                        r = e.navigation.thumbnails;
                    i.pause(), t = t > 1 ? 1 : 0 > t ? 0 : t, d(n) && n.width > n.min_width && a(t, i, e.c, n, e.slideamount, "tab"), d(r) && r.width > r.min_width && a(t, i, e.c, r, e.slideamount, "thumb"), i.play(), y(e)
                }
                return !0
            },
            manageNavigation: function(t) {
                var a = e.getHorizontalOffset(t.c.parent(), "left"),
                    n = e.getHorizontalOffset(t.c.parent(), "right");
                d(t.navigation.bullets) && ("fullscreen" != t.sliderLayout && "fullwidth" != t.sliderLayout && (t.navigation.bullets.h_offset_old = void 0 === t.navigation.bullets.h_offset_old ? t.navigation.bullets.h_offset : t.navigation.bullets.h_offset_old, t.navigation.bullets.h_offset = "center" === t.navigation.bullets.h_align ? t.navigation.bullets.h_offset_old + a / 2 - n / 2 : t.navigation.bullets.h_offset_old + a - n), v(t.c.find(".tp-bullets"), t.navigation.bullets)), d(t.navigation.thumbnails) && v(t.c.parent().find(".tp-thumbs"), t.navigation.thumbnails), d(t.navigation.tabs) && v(t.c.parent().find(".tp-tabs"), t.navigation.tabs), d(t.navigation.arrows) && ("fullscreen" != t.sliderLayout && "fullwidth" != t.sliderLayout && (t.navigation.arrows.left.h_offset_old = void 0 === t.navigation.arrows.left.h_offset_old ? t.navigation.arrows.left.h_offset : t.navigation.arrows.left.h_offset_old, t.navigation.arrows.left.h_offset = "right" === t.navigation.arrows.left.h_align ? t.navigation.arrows.left.h_offset_old + n : t.navigation.arrows.left.h_offset_old + a, t.navigation.arrows.right.h_offset_old = void 0 === t.navigation.arrows.right.h_offset_old ? t.navigation.arrows.right.h_offset : t.navigation.arrows.right.h_offset_old, t.navigation.arrows.right.h_offset = "right" === t.navigation.arrows.right.h_align ? t.navigation.arrows.right.h_offset_old + n : t.navigation.arrows.right.h_offset_old + a), v(t.c.find(".tp-leftarrow.tparrows"), t.navigation.arrows.left), v(t.c.find(".tp-rightarrow.tparrows"), t.navigation.arrows.right)), d(t.navigation.thumbnails) && i(t.c.parent().find(".tp-thumbs"), t.navigation.thumbnails), d(t.navigation.tabs) && i(t.c.parent().find(".tp-tabs"), t.navigation.tabs)
            },
            createNavigation: function(e, a) {
                var o = e.parent(),
                    h = a.navigation.arrows,
                    f = a.navigation.bullets,
                    g = a.navigation.thumbnails,
                    v = a.navigation.tabs,
                    y = d(h),
                    _ = d(f),
                    b = d(g),
                    x = d(v);
                n(e, a), r(e, a), y && u(e, h, a), a.li.each(function() {
                    var t = jQuery(this);
                    _ && m(e, f, t, a), b && w(e, g, t, "tp-thumb", a), x && w(e, v, t, "tp-tab", a)
                }), e.bind("revolution.slide.onafterswap revolution.nextslide.waiting", function() {
                    var t = 0 == e.find(".next-revslide").length ? e.find(".active-revslide").data("index") : e.find(".next-revslide").data("index");
                    e.find(".tp-bullet").each(function() {
                        var e = jQuery(this);
                        e.data("liref") === t ? e.addClass("selected") : e.removeClass("selected")
                    }), o.find(".tp-thumb, .tp-tab").each(function() {
                        var e = jQuery(this);
                        e.data("liref") === t ? (e.addClass("selected"), e.hasClass("tp-tab") ? i(o.find(".tp-tabs"), v) : i(o.find(".tp-thumbs"), g)) : e.removeClass("selected")
                    });
                    var n = 0,
                        r = !1;
                    a.thumbs && jQuery.each(a.thumbs, function(e, i) {
                        n = !1 === r ? e : n, r = i.id === t || e === t || r
                    });
                    var s = n > 0 ? n - 1 : a.slideamount - 1,
                        l = n + 1 == a.slideamount ? 0 : n + 1;
                    if (!0 === h.enable) {
                        var d = h.tmp;
                        jQuery.each(a.thumbs[s].params, function(e, t) {
                            d = d.replace(t.from, t.to)
                        }), h.left.j.html(d), d = h.tmp, jQuery.each(a.thumbs[l].params, function(e, t) {
                            d = d.replace(t.from, t.to)
                        }), h.right.j.html(d), punchgs.TweenLite.set(h.left.j.find(".tp-arr-imgholder"), {
                            backgroundImage: "url(" + a.thumbs[s].src + ")"
                        }), punchgs.TweenLite.set(h.right.j.find(".tp-arr-imgholder"), {
                            backgroundImage: "url(" + a.thumbs[l].src + ")"
                        })
                    }
                }), l(h), l(f), l(g), l(v), o.on("mouseenter mousemove", function() {
                    o.hasClass("tp-mouseover") || (o.addClass("tp-mouseover"), punchgs.TweenLite.killDelayedCallsTo(c), y && h.hide_onleave && c(o.find(".tparrows"), h, "show"), _ && f.hide_onleave && c(o.find(".tp-bullets"), f, "show"), b && g.hide_onleave && c(o.find(".tp-thumbs"), g, "show"), x && v.hide_onleave && c(o.find(".tp-tabs"), v, "show"), t && (o.removeClass("tp-mouseover"), p(e, a)))
                }), o.on("mouseleave", function() {
                    o.removeClass("tp-mouseover"), p(e, a)
                }), y && h.hide_onleave && c(o.find(".tparrows"), h, "hide", 0), _ && f.hide_onleave && c(o.find(".tp-bullets"), f, "hide", 0), b && g.hide_onleave && c(o.find(".tp-thumbs"), g, "hide", 0), x && v.hide_onleave && c(o.find(".tp-tabs"), v, "hide", 0), b && s(o.find(".tp-thumbs"), a), x && s(o.find(".tp-tabs"), a), "carousel" === a.sliderType && s(e, a, !0), "on" == a.navigation.touch.touchenabled && s(e, a, "swipebased")
            }
        });
        var i = function(e, t) {
                var i = (e.hasClass("tp-thumbs"), e.hasClass("tp-thumbs") ? ".tp-thumb-mask" : ".tp-tab-mask"),
                    a = e.hasClass("tp-thumbs") ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                    n = e.hasClass("tp-thumbs") ? ".tp-thumb" : ".tp-tab",
                    r = e.find(i),
                    o = r.find(a),
                    s = t.direction,
                    l = "vertical" === s ? r.find(n).first().outerHeight(!0) + t.space : r.find(n).first().outerWidth(!0) + t.space,
                    d = "vertical" === s ? r.height() : r.width(),
                    h = parseInt(r.find(n + ".selected").data("liindex"), 0),
                    p = d / l,
                    c = "vertical" === s ? r.height() : r.width(),
                    u = 0 - h * l,
                    f = "vertical" === s ? o.height() : o.width(),
                    g = 0 - (f - c) > u ? 0 - (f - c) : g > 0 ? 0 : u,
                    v = o.data("offset");
                p > 2 && (g = 0 >= u - (v + l) ? 0 - l > u - (v + l) ? v : g + l : g, g = l > u - l + v + d && u + (Math.round(p) - 2) * l < v ? u + (Math.round(p) - 2) * l : g), g = 0 - (f - c) > g ? 0 - (f - c) : g > 0 ? 0 : g, "vertical" !== s && r.width() >= o.width() && (g = 0), "vertical" === s && r.height() >= o.height() && (g = 0), e.hasClass("dragged") || ("vertical" === s ? o.data("tmmove", punchgs.TweenLite.to(o, .5, {
                    top: g + "px",
                    ease: punchgs.Power3.easeInOut
                })) : o.data("tmmove", punchgs.TweenLite.to(o, .5, {
                    left: g + "px",
                    ease: punchgs.Power3.easeInOut
                })), o.data("offset", g))
            },
            a = function(e, t, i, a, n, r) {
                var o = i.parent().find(".tp-" + r + "s"),
                    s = o.find(".tp-" + r + "s-inner-wrapper"),
                    l = o.find(".tp-" + r + "-mask"),
                    d = a.width * e < a.min_width ? a.min_width : Math.round(a.width * e),
                    h = Math.round(d / a.width * a.height),
                    p = "vertical" === a.direction ? d : d * n + a.space * (n - 1),
                    c = "vertical" === a.direction ? h * n + a.space * (n - 1) : h,
                    u = "vertical" === a.direction ? {
                        width: d + "px"
                    } : {
                        height: h + "px"
                    };
                t.add(punchgs.TweenLite.set(o, u)), t.add(punchgs.TweenLite.set(s, {
                    width: p + "px",
                    height: c + "px"
                })), t.add(punchgs.TweenLite.set(l, {
                    width: p + "px",
                    height: c + "px"
                }));
                var f = s.find(".tp-" + r);
                return f && jQuery.each(f, function(e, i) {
                    "vertical" === a.direction ? t.add(punchgs.TweenLite.set(i, {
                        top: e * (h + parseInt(void 0 === a.space ? 0 : a.space, 0)),
                        width: d + "px",
                        height: h + "px"
                    })) : "horizontal" === a.direction && t.add(punchgs.TweenLite.set(i, {
                        left: e * (d + parseInt(void 0 === a.space ? 0 : a.space, 0)),
                        width: d + "px",
                        height: h + "px"
                    }))
                }), t
            },
            n = function(t, i) {
                "on" === i.navigation.keyboardNavigation && jQuery(document).keydown(function(a) {
                    ("horizontal" == i.navigation.keyboard_direction && 39 == a.keyCode || "vertical" == i.navigation.keyboard_direction && 40 == a.keyCode) && (i.sc_indicator = "arrow", i.sc_indicator_dir = 0, e.callingNewSlide(i, t, 1)), ("horizontal" == i.navigation.keyboard_direction && 37 == a.keyCode || "vertical" == i.navigation.keyboard_direction && 38 == a.keyCode) && (i.sc_indicator = "arrow", i.sc_indicator_dir = 1, e.callingNewSlide(i, t, -1))
                })
            },
            r = function(t, i) {
                if ("on" === i.navigation.mouseScrollNavigation) {
                    var a = navigator.userAgent.match(/mozilla/i) ? -29 : -49,
                        n = navigator.userAgent.match(/mozilla/i) ? 29 : 49;
                    t.on("mousewheel DOMMouseScroll", function(r) {
                        var o, s, l, d, h, p = (o = r.originalEvent, s = 0, l = 0, d = 0, h = 0, "detail" in o && (l = o.detail), "wheelDelta" in o && (l = -o.wheelDelta / 120), "wheelDeltaY" in o && (l = -o.wheelDeltaY / 120), "wheelDeltaX" in o && (s = -o.wheelDeltaX / 120), "axis" in o && o.axis === o.HORIZONTAL_AXIS && (s = l, l = 0), d = 1 * s, h = 1 * l, "deltaY" in o && (h = o.deltaY), "deltaX" in o && (d = o.deltaX), (d || h) && o.deltaMode && (o.deltaMode, d *= 1, h *= 1), d && !s && (s = 1 > d ? -1 : 1), h && !l && (l = 1 > h ? -1 : 1), ((h = navigator.userAgent.match(/mozilla/i) ? 10 * h : h) > 300 || -300 > h) && (h /= 10), {
                                spinX: s,
                                spinY: l,
                                pixelX: d,
                                pixelY: h
                            }),
                            c = t.find(".tp-revslider-slidesli.active-revslide").index(),
                            u = t.find(".tp-revslider-slidesli.processing-revslide").index(),
                            f = -1 != c && 0 == c || -1 != u && 0 == u,
                            g = -1 != c && c == i.slideamount - 1 || 1 != u && u == i.slideamount - 1;
                        if (-1 == u) {
                            if (p.pixelY < a) {
                                if (!f) return i.sc_indicator = "arrow", i.sc_indicator_dir = 0, e.callingNewSlide(i, t, -1), !1
                            } else if (p.pixelY > n && !g) return i.sc_indicator = "arrow", i.sc_indicator_dir = 1, e.callingNewSlide(i, t, 1), !1
                        } else if (!g) return !1;
                        r.preventDefault()
                    })
                }
            },
            o = function(e, i, a) {
                return !0 === (e = t ? jQuery(a.target).closest("." + e).length || jQuery(a.srcElement).closest("." + e).length : jQuery(a.toElement).closest("." + e).length || jQuery(a.originalTarget).closest("." + e).length) || 1 === e ? 1 : 0
            },
            s = function(i, a, n) {
                i.data("opt", a);
                var r = a.carousel;
                jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"), r.Limit = "endless";
                var s = (t || e.get_browser(), i),
                    l = "vertical" === a.navigation.thumbnails.direction || "vertical" === a.navigation.tabs.direction ? "none" : "vertical",
                    d = a.navigation.touch.swipe_direction || "horizontal";
                l = "swipebased" == n && "vertical" == d ? "none" : n ? "vertical" : l, jQuery.fn.swipetp || (jQuery.fn.swipetp = jQuery.fn.swipe), jQuery.fn.swipetp.defaults && jQuery.fn.swipetp.defaults.excludedElements || (jQuery.fn.swipetp.defaults || (jQuery.fn.swipetp.defaults = new Object), jQuery.fn.swipetp.defaults.excludedElements = "label, button, input, select, textarea, a, .noSwipe"), s.swipetp({
                    allowPageScroll: l,
                    triggerOnTouchLeave: !0,
                    excludeElements: jQuery.fn.swipetp.defaults.excludedElements,
                    swipeStatus: function(t, n, s, l) {
                        var h = o("rev_slider_wrapper", 0, t),
                            p = o("tp-thumbs", 0, t),
                            c = o("tp-tabs", 0, t),
                            u = !!jQuery(this).attr("class").match(/tp-tabs|tp-thumb/gi);
                        if ("carousel" === a.sliderType && (("move" === n || "end" === n || "cancel" == n) && a.dragStartedOverSlider && !a.dragStartedOverThumbs && !a.dragStartedOverTabs || "start" === n && h > 0 && 0 === p && 0 === c)) switch (a.dragStartedOverSlider = !0, l = s && s.match(/left|up/g) ? Math.round(-1 * l) : l = Math.round(1 * l), n) {
                            case "start":
                                void 0 !== r.positionanim && (r.positionanim.kill(), r.slide_globaloffset = "off" === r.infinity ? r.slide_offset : e.simp(r.slide_offset, r.maxwidth)), r.overpull = "none", r.wrap.addClass("dragged");
                                break;
                            case "move":
                                if (r.slide_offset = "off" === r.infinity ? r.slide_globaloffset + l : e.simp(r.slide_globaloffset + l, r.maxwidth), "off" === r.infinity) {
                                    var f = "center" === r.horizontal_align ? (r.wrapwidth / 2 - r.slide_width / 2 - r.slide_offset) / r.slide_width : (0 - r.slide_offset) / r.slide_width;
                                    "none" !== r.overpull && 0 !== r.overpull || !(0 > f || f > a.slideamount - 1) ? f >= 0 && f <= a.slideamount - 1 && (f >= 0 && l > r.overpull || f <= a.slideamount - 1 && l < r.overpull) && (r.overpull = 0) : r.overpull = l, r.slide_offset = 0 > f ? r.slide_offset + (r.overpull - l) / 1.1 + Math.sqrt(Math.abs((r.overpull - l) / 1.1)) : f > a.slideamount - 1 ? r.slide_offset + (r.overpull - l) / 1.1 - Math.sqrt(Math.abs((r.overpull - l) / 1.1)) : r.slide_offset
                                }
                                e.organiseCarousel(a, s, !0, !0);
                                break;
                            case "end":
                            case "cancel":
                                r.slide_globaloffset = r.slide_offset, r.wrap.removeClass("dragged"), e.carouselToEvalPosition(a, s), a.dragStartedOverSlider = !1, a.dragStartedOverThumbs = !1, a.dragStartedOverTabs = !1
                        } else {
                            if (("move" !== n && "end" !== n && "cancel" != n || a.dragStartedOverSlider || !a.dragStartedOverThumbs && !a.dragStartedOverTabs) && !("start" === n && h > 0 && (p > 0 || c > 0))) {
                                if ("end" == n && !u) {
                                    if (a.sc_indicator = "arrow", "horizontal" == d && "left" == s || "vertical" == d && "up" == s) return a.sc_indicator_dir = 0, e.callingNewSlide(a, a.c, 1), !1;
                                    if ("horizontal" == d && "right" == s || "vertical" == d && "down" == s) return a.sc_indicator_dir = 1, e.callingNewSlide(a, a.c, -1), !1
                                }
                                return a.dragStartedOverSlider = !1, a.dragStartedOverThumbs = !1, a.dragStartedOverTabs = !1, !0
                            }
                            p > 0 && (a.dragStartedOverThumbs = !0), c > 0 && (a.dragStartedOverTabs = !0);
                            var g = a.dragStartedOverThumbs ? ".tp-thumbs" : ".tp-tabs",
                                v = a.dragStartedOverThumbs ? ".tp-thumb-mask" : ".tp-tab-mask",
                                m = a.dragStartedOverThumbs ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                                w = a.dragStartedOverThumbs ? ".tp-thumb" : ".tp-tab",
                                y = a.dragStartedOverThumbs ? a.navigation.thumbnails : a.navigation.tabs;
                            l = s && s.match(/left|up/g) ? Math.round(-1 * l) : l = Math.round(1 * l);
                            var _ = i.parent().find(v),
                                b = _.find(m),
                                x = y.direction,
                                T = "vertical" === x ? b.height() : b.width(),
                                k = "vertical" === x ? _.height() : _.width(),
                                L = "vertical" === x ? _.find(w).first().outerHeight(!0) + y.space : _.find(w).first().outerWidth(!0) + y.space,
                                O = void 0 === b.data("offset") ? 0 : parseInt(b.data("offset"), 0),
                                S = 0;
                            switch (n) {
                                case "start":
                                    i.parent().find(g).addClass("dragged"), O = "vertical" === x ? b.position().top : b.position().left, b.data("offset", O), b.data("tmmove") && b.data("tmmove").pause();
                                    break;
                                case "move":
                                    if (k >= T) return !1;
                                    S = (S = O + l) > 0 ? "horizontal" === x ? S - b.width() * (S / b.width() * S / b.width()) : S - b.height() * (S / b.height() * S / b.height()) : S;
                                    var P = "vertical" === x ? 0 - (b.height() - _.height()) : 0 - (b.width() - _.width());
                                    S = P > S ? "horizontal" === x ? S + b.width() * (S - P) / b.width() * (S - P) / b.width() : S + b.height() * (S - P) / b.height() * (S - P) / b.height() : S, "vertical" === x ? punchgs.TweenLite.set(b, {
                                        top: S + "px"
                                    }) : punchgs.TweenLite.set(b, {
                                        left: S + "px"
                                    });
                                    break;
                                case "end":
                                case "cancel":
                                    if (u) return S = O + l, S = "vertical" === x ? S < 0 - (b.height() - _.height()) ? 0 - (b.height() - _.height()) : S : S < 0 - (b.width() - _.width()) ? 0 - (b.width() - _.width()) : S, S = S > 0 ? 0 : S, S = Math.abs(l) > L / 10 ? 0 >= l ? Math.floor(S / L) * L : Math.ceil(S / L) * L : 0 > l ? Math.ceil(S / L) * L : Math.floor(S / L) * L, S = "vertical" === x ? S < 0 - (b.height() - _.height()) ? 0 - (b.height() - _.height()) : S : S < 0 - (b.width() - _.width()) ? 0 - (b.width() - _.width()) : S, S = S > 0 ? 0 : S, "vertical" === x ? punchgs.TweenLite.to(b, .5, {
                                        top: S + "px",
                                        ease: punchgs.Power3.easeOut
                                    }) : punchgs.TweenLite.to(b, .5, {
                                        left: S + "px",
                                        ease: punchgs.Power3.easeOut
                                    }), S = S || ("vertical" === x ? b.position().top : b.position().left), b.data("offset", S), b.data("distance", l), setTimeout(function() {
                                        a.dragStartedOverSlider = !1, a.dragStartedOverThumbs = !1, a.dragStartedOverTabs = !1
                                    }, 100), i.parent().find(g).removeClass("dragged"), !1
                            }
                        }
                    }
                })
            },
            l = function(e) {
                e.hide_delay = jQuery.isNumeric(parseInt(e.hide_delay, 0)) ? e.hide_delay / 1e3 : .2, e.hide_delay_mobile = jQuery.isNumeric(parseInt(e.hide_delay_mobile, 0)) ? e.hide_delay_mobile / 1e3 : .2
            },
            d = function(e) {
                return e && e.enable
            },
            h = function(e) {
                return e && e.enable && !0 === e.hide_onleave && (void 0 === e.position || !e.position.match(/outer/g))
            },
            p = function(e, i) {
                var a = e.parent();
                h(i.navigation.arrows) && punchgs.TweenLite.delayedCall(t ? i.navigation.arrows.hide_delay_mobile : i.navigation.arrows.hide_delay, c, [a.find(".tparrows"), i.navigation.arrows, "hide"]), h(i.navigation.bullets) && punchgs.TweenLite.delayedCall(t ? i.navigation.bullets.hide_delay_mobile : i.navigation.bullets.hide_delay, c, [a.find(".tp-bullets"), i.navigation.bullets, "hide"]), h(i.navigation.thumbnails) && punchgs.TweenLite.delayedCall(t ? i.navigation.thumbnails.hide_delay_mobile : i.navigation.thumbnails.hide_delay, c, [a.find(".tp-thumbs"), i.navigation.thumbnails, "hide"]), h(i.navigation.tabs) && punchgs.TweenLite.delayedCall(t ? i.navigation.tabs.hide_delay_mobile : i.navigation.tabs.hide_delay, c, [a.find(".tp-tabs"), i.navigation.tabs, "hide"])
            },
            c = function(e, t, i, a) {
                switch (a = void 0 === a ? .5 : a, i) {
                    case "show":
                        punchgs.TweenLite.to(e, a, {
                            autoAlpha: 1,
                            ease: punchgs.Power3.easeInOut,
                            overwrite: "auto"
                        });
                        break;
                    case "hide":
                        punchgs.TweenLite.to(e, a, {
                            autoAlpha: 0,
                            ease: punchgs.Power3.easeInOu,
                            overwrite: "auto"
                        })
                }
            },
            u = function(e, t, i) {
                t.style = void 0 === t.style ? "" : t.style, t.left.style = void 0 === t.left.style ? "" : t.left.style, t.right.style = void 0 === t.right.style ? "" : t.right.style, 0 === e.find(".tp-leftarrow.tparrows").length && e.append('<div class="tp-leftarrow tparrows ' + t.style + " " + t.left.style + '">' + t.tmp + "</div>"), 0 === e.find(".tp-rightarrow.tparrows").length && e.append('<div class="tp-rightarrow tparrows ' + t.style + " " + t.right.style + '">' + t.tmp + "</div>");
                var a = e.find(".tp-leftarrow.tparrows"),
                    n = e.find(".tp-rightarrow.tparrows");
                n.click(function() {
                    i.sc_indicator = "arrow", i.sc_indicator_dir = 0, e.revnext()
                }), a.click(function() {
                    i.sc_indicator = "arrow", i.sc_indicator_dir = 1, e.revprev()
                }), t.right.j = e.find(".tp-rightarrow.tparrows"), t.left.j = e.find(".tp-leftarrow.tparrows"), t.padding_top = parseInt(i.carousel.padding_top || 0, 0), t.padding_bottom = parseInt(i.carousel.padding_bottom || 0, 0), v(a, t.left), v(n, t.right), ("outer-left" == t.position || "outer-right" == t.position) && (i.outernav = !0)
            },
            f = function(e, t) {
                var i = e.outerHeight(!0),
                    a = (e.outerWidth(!0), "top" === t.v_align ? {
                        top: "0px",
                        y: Math.round(t.v_offset) + "px"
                    } : "center" === t.v_align ? {
                        top: "50%",
                        y: Math.round(0 - i / 2 + t.v_offset) + "px"
                    } : {
                        top: "100%",
                        y: Math.round(0 - (i + t.v_offset)) + "px"
                    });
                e.hasClass("outer-bottom") || punchgs.TweenLite.set(e, a)
            },
            g = function(e, t) {
                var i = (e.outerHeight(!0), e.outerWidth(!0)),
                    a = "left" === t.h_align ? {
                        left: "0px",
                        x: Math.round(t.h_offset) + "px"
                    } : "center" === t.h_align ? {
                        left: "50%",
                        x: Math.round(0 - i / 2 + t.h_offset) + "px"
                    } : {
                        left: "100%",
                        x: Math.round(0 - (i + t.h_offset)) + "px"
                    };
                punchgs.TweenLite.set(e, a)
            },
            v = function(e, t) {
                var i = e.closest(".tp-simpleresponsive").length > 0 ? e.closest(".tp-simpleresponsive") : e.closest(".tp-revslider-mainul").length > 0 ? e.closest(".tp-revslider-mainul") : e.closest(".rev_slider_wrapper").length > 0 ? e.closest(".rev_slider_wrapper") : e.parent().find(".tp-revslider-mainul"),
                    a = i.width(),
                    n = i.height();
                if (f(e, t), g(e, t), "outer-left" !== t.position || "fullwidth" != t.sliderLayout && "fullscreen" != t.sliderLayout ? "outer-right" !== t.position || "fullwidth" != t.sliderLayout && "fullscreen" != t.sliderLayout || punchgs.TweenLite.set(e, {
                        right: 0 - e.outerWidth() + "px",
                        x: t.h_offset + "px"
                    }) : punchgs.TweenLite.set(e, {
                        left: 0 - e.outerWidth() + "px",
                        x: t.h_offset + "px"
                    }), e.hasClass("tp-thumbs") || e.hasClass("tp-tabs")) {
                    var r = e.data("wr_padding"),
                        o = e.data("maxw"),
                        s = e.data("maxh"),
                        l = e.find(e.hasClass("tp-thumbs") ? ".tp-thumb-mask" : ".tp-tab-mask"),
                        d = parseInt(t.padding_top || 0, 0),
                        h = parseInt(t.padding_bottom || 0, 0);
                    o > a && "outer-left" !== t.position && "outer-right" !== t.position ? (punchgs.TweenLite.set(e, {
                        left: "0px",
                        x: 0,
                        maxWidth: a - 2 * r + "px"
                    }), punchgs.TweenLite.set(l, {
                        maxWidth: a - 2 * r + "px"
                    })) : (punchgs.TweenLite.set(e, {
                        maxWidth: o + "px"
                    }), punchgs.TweenLite.set(l, {
                        maxWidth: o + "px"
                    })), s + 2 * r > n && "outer-bottom" !== t.position && "outer-top" !== t.position ? (punchgs.TweenLite.set(e, {
                        top: "0px",
                        y: 0,
                        maxHeight: d + h + (n - 2 * r) + "px"
                    }), punchgs.TweenLite.set(l, {
                        maxHeight: d + h + (n - 2 * r) + "px"
                    })) : (punchgs.TweenLite.set(e, {
                        maxHeight: s + "px"
                    }), punchgs.TweenLite.set(l, {
                        maxHeight: s + "px"
                    })), "outer-left" !== t.position && "outer-right" !== t.position && (d = 0, h = 0), !0 === t.span && "vertical" === t.direction ? (punchgs.TweenLite.set(e, {
                        maxHeight: d + h + (n - 2 * r) + "px",
                        height: d + h + (n - 2 * r) + "px",
                        top: 0 - d,
                        y: 0
                    }), f(l, t)) : !0 === t.span && "horizontal" === t.direction && (punchgs.TweenLite.set(e, {
                        maxWidth: "100%",
                        width: a - 2 * r + "px",
                        left: 0,
                        x: 0
                    }), g(l, t))
                }
            },
            m = function(e, t, i, a) {
                0 === e.find(".tp-bullets").length && (t.style = void 0 === t.style ? "" : t.style, e.append('<div class="tp-bullets ' + t.style + " " + t.direction + '"></div>'));
                var n = e.find(".tp-bullets"),
                    r = i.data("index"),
                    o = t.tmp;
                jQuery.each(a.thumbs[i.index()].params, function(e, t) {
                    o = o.replace(t.from, t.to)
                }), n.append('<div class="justaddedbullet tp-bullet">' + o + "</div>");
                var s = e.find(".justaddedbullet"),
                    l = e.find(".tp-bullet").length,
                    d = s.outerWidth() + parseInt(void 0 === t.space ? 0 : t.space, 0),
                    h = s.outerHeight() + parseInt(void 0 === t.space ? 0 : t.space, 0);
                "vertical" === t.direction ? (s.css({
                    top: (l - 1) * h + "px",
                    left: "0px"
                }), n.css({
                    height: (l - 1) * h + s.outerHeight(),
                    width: s.outerWidth()
                })) : (s.css({
                    left: (l - 1) * d + "px",
                    top: "0px"
                }), n.css({
                    width: (l - 1) * d + s.outerWidth(),
                    height: s.outerHeight()
                })), s.find(".tp-bullet-image").css({
                    backgroundImage: "url(" + a.thumbs[i.index()].src + ")"
                }), s.data("liref", r), s.click(function() {
                    a.sc_indicator = "bullet", e.revcallslidewithid(r), e.find(".tp-bullet").removeClass("selected"), jQuery(this).addClass("selected")
                }), s.removeClass("justaddedbullet"), t.padding_top = parseInt(a.carousel.padding_top || 0, 0), t.padding_bottom = parseInt(a.carousel.padding_bottom || 0, 0), ("outer-left" == t.position || "outer-right" == t.position) && (a.outernav = !0), v(n, t)
            },
            w = function(e, t, i, a, n) {
                var r = "tp-thumb" === a ? ".tp-thumbs" : ".tp-tabs",
                    o = "tp-thumb" === a ? ".tp-thumb-mask" : ".tp-tab-mask",
                    s = "tp-thumb" === a ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                    l = "tp-thumb" === a ? ".tp-thumb" : ".tp-tab",
                    d = "tp-thumb" === a ? ".tp-thumb-image" : ".tp-tab-image";
                if (t.visibleAmount = t.visibleAmount > n.slideamount ? n.slideamount : t.visibleAmount, t.sliderLayout = n.sliderLayout, 0 === e.parent().find(r).length) {
                    t.style = void 0 === t.style ? "" : t.style;
                    var h = '<div class="' + a + "s " + (!0 === t.span ? "tp-span-wrapper" : "") + " " + t.position + " " + t.style + '"><div class="' + a + '-mask"><div class="' + a + 's-inner-wrapper" style="position:relative;"></div></div></div>';
                    "outer-top" === t.position ? e.parent().prepend(h) : "outer-bottom" === t.position ? e.after(h) : e.append(h), t.padding_top = parseInt(n.carousel.padding_top || 0, 0), t.padding_bottom = parseInt(n.carousel.padding_bottom || 0, 0), ("outer-left" == t.position || "outer-right" == t.position) && (n.outernav = !0)
                }
                var p = i.data("index"),
                    c = e.parent().find(r),
                    u = c.find(o),
                    f = u.find(s),
                    g = "horizontal" === t.direction ? t.width * t.visibleAmount + t.space * (t.visibleAmount - 1) : t.width,
                    m = "horizontal" === t.direction ? t.height : t.height * t.visibleAmount + t.space * (t.visibleAmount - 1),
                    w = t.tmp;
                jQuery.each(n.thumbs[i.index()].params, function(e, t) {
                    w = w.replace(t.from, t.to)
                }), f.append('<div data-liindex="' + i.index() + '" data-liref="' + p + '" class="justaddedthumb ' + a + '" style="width:' + t.width + "px;height:" + t.height + 'px;">' + w + "</div>");
                var y = c.find(".justaddedthumb"),
                    _ = c.find(l).length,
                    b = y.outerWidth() + parseInt(void 0 === t.space ? 0 : t.space, 0),
                    x = y.outerHeight() + parseInt(void 0 === t.space ? 0 : t.space, 0);
                y.find(d).css({
                    backgroundImage: "url(" + n.thumbs[i.index()].src + ")"
                }), "vertical" === t.direction ? (y.css({
                    top: (_ - 1) * x + "px",
                    left: "0px"
                }), f.css({
                    height: (_ - 1) * x + y.outerHeight(),
                    width: y.outerWidth()
                })) : (y.css({
                    left: (_ - 1) * b + "px",
                    top: "0px"
                }), f.css({
                    width: (_ - 1) * b + y.outerWidth(),
                    height: y.outerHeight()
                })), c.data("maxw", g), c.data("maxh", m), c.data("wr_padding", t.wrapper_padding);
                var T, k, L = "outer-top" === t.position || "outer-bottom" === t.position ? "relative" : "absolute",
                    O = "outer-top" !== t.position && "outer-bottom" !== t.position || "center" !== t.h_align ? "0" : "auto";
                u.css({
                    maxWidth: g + "px",
                    maxHeight: m + "px",
                    overflow: "hidden",
                    position: "relative"
                }), c.css({
                    maxWidth: g + "px",
                    margin: O,
                    maxHeight: m + "px",
                    overflow: "visible",
                    position: L,
                    background: (T = t.wrapper_color, k = t.wrapper_opacity, k = parseFloat(k), T = T.replace("#", ""), "rgba(" + parseInt(T.substring(0, 2), 16) + "," + parseInt(T.substring(2, 4), 16) + "," + parseInt(T.substring(4, 6), 16) + "," + k + ")"),
                    padding: t.wrapper_padding + "px",
                    boxSizing: "contet-box"
                }), y.click(function() {
                    n.sc_indicator = "bullet";
                    var t = e.parent().find(s).data("distance");
                    t = void 0 === t ? 0 : t, Math.abs(t) < 10 && (e.revcallslidewithid(p), e.parent().find(r).removeClass("selected"), jQuery(this).addClass("selected"))
                }), y.removeClass("justaddedthumb"), v(c, t)
            },
            y = function(e) {
                var t = e.c.parent().find(".outer-top"),
                    i = e.c.parent().find(".outer-bottom");
                e.top_outer = t.hasClass("tp-forcenotvisible") ? 0 : t.outerHeight() || 0, e.bottom_outer = i.hasClass("tp-forcenotvisible") ? 0 : i.outerHeight() || 0
            },
            _ = function(e, t, i, a) {
                t > i || i > a ? e.addClass("tp-forcenotvisible") : e.removeClass("tp-forcenotvisible")
            }
    }(jQuery),
    function() {
        var e = jQuery.fn.revolution,
            t = e.is_mobile();
        jQuery.extend(!0, e, {
            checkForParallax: function(i, a) {
                var n = a.parallax;
                return (!t || "on" != n.disable_onmobile) && (("3D" == n.type || "3d" == n.type) && (punchgs.TweenLite.set(a.c, {
                    overflow: n.ddd_overflow
                }), punchgs.TweenLite.set(a.ul, {
                    overflow: n.ddd_overflow
                }), "carousel" != a.sliderType && "on" == n.ddd_shadow && (a.c.prepend('<div class="dddwrappershadow"></div>'), punchgs.TweenLite.set(a.c.find(".dddwrappershadow"), {
                    force3D: "auto",
                    transformPerspective: 1600,
                    transformOrigin: "50% 50%",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 0
                }))), a.li.each(function() {
                    var e = jQuery(this);
                    if ("3D" == n.type || "3d" == n.type) {
                        e.find(".slotholder").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>'), e.find(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layer" style="width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:5;overflow:' + n.ddd_layer_overflow + ';"></div>'), e.find(".rs-parallaxlevel-tobggroup").closest(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');
                        var t = e.find(".dddwrapper"),
                            i = e.find(".dddwrapper-layer");
                        e.find(".dddwrapper-layertobggroup").appendTo(t), "carousel" == a.sliderType && ("on" == n.ddd_shadow && t.addClass("dddwrappershadow"), punchgs.TweenLite.set(t, {
                            borderRadius: a.carousel.border_radius
                        })), punchgs.TweenLite.set(e, {
                            overflow: "visible",
                            transformStyle: "preserve-3d",
                            perspective: 1600
                        }), punchgs.TweenLite.set(t, {
                            force3D: "auto",
                            transformOrigin: "50% 50%"
                        }), punchgs.TweenLite.set(i, {
                            force3D: "auto",
                            transformOrigin: "50% 50%",
                            zIndex: 5
                        }), punchgs.TweenLite.set(a.ul, {
                            transformStyle: "preserve-3d",
                            transformPerspective: 1600
                        })
                    }
                    for (var r = 1; r <= n.levels.length; r++) e.find(".rs-parallaxlevel-" + r).each(function() {
                        var e = jQuery(this).closest(".tp-parallax-wrap");
                        e.data("parallaxlevel", n.levels[r - 1]), e.addClass("tp-parallax-container")
                    })
                }), ("mouse" == n.type || "scroll+mouse" == n.type || "mouse+scroll" == n.type || "3D" == n.type || "3d" == n.type) && (i.mouseenter(function(e) {
                    var t = i.find(".active-revslide"),
                        a = i.offset().top,
                        n = i.offset().left,
                        r = e.pageX - n,
                        o = e.pageY - a;
                    t.data("enterx", r), t.data("entery", o)
                }), i.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath", function(e, t) {
                    var r = t && t.li ? t.li : i.find(".active-revslide");
                    if ("enterpoint" == n.origo) {
                        var o = i.offset().top,
                            s = i.offset().left;
                        void 0 == r.data("enterx") && r.data("enterx", e.pageX - s), void 0 == r.data("entery") && r.data("entery", e.pageY - o);
                        var l = r.data("enterx") || e.pageX - s,
                            d = r.data("entery") || e.pageY - o,
                            h = l - (e.pageX - s),
                            p = d - (e.pageY - o),
                            c = n.speed / 1e3 || .4
                    } else o = i.offset().top, s = i.offset().left, h = a.conw / 2 - (e.pageX - s), p = a.conh / 2 - (e.pageY - o), c = n.speed / 1e3 || 3;
                    if ("mouseleave" == e.type && (h = n.ddd_lasth || 0, p = n.ddd_lastv || 0, c = 1.5), r.find(".tp-parallax-container").each(function() {
                            var e = jQuery(this),
                                t = parseInt(e.data("parallaxlevel"), 0),
                                i = "3D" == n.type || "3d" == n.type ? t / 200 : t / 100,
                                a = h * i,
                                r = p * i;
                            "scroll+mouse" == n.type || "mouse+scroll" == n.type ? punchgs.TweenLite.to(e, c, {
                                force3D: "auto",
                                x: a,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(e, c, {
                                force3D: "auto",
                                x: a,
                                y: r,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            })
                        }), "3D" == n.type || "3d" == n.type) {
                        var u = ".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer";
                        "carousel" === a.sliderType && (u = ".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer"), a.c.find(u).each(function() {
                            var t = jQuery(this),
                                i = n.levels[n.levels.length - 1] / 200,
                                r = h * i,
                                o = p * i,
                                s = 0 == a.conw ? 0 : Math.round(h / a.conw * i * 100) || 0,
                                l = 0 == a.conh ? 0 : Math.round(p / a.conh * i * 100) || 0,
                                d = t.closest("li"),
                                u = 0,
                                f = !1;
                            t.hasClass("dddwrapper-layer") && (u = n.ddd_z_correction || 65, f = !0), t.hasClass("dddwrapper-layer") && (r = 0, o = 0), d.hasClass("active-revslide") || "carousel" != a.sliderType ? "on" != n.ddd_bgfreeze || f ? punchgs.TweenLite.to(t, c, {
                                rotationX: l,
                                rotationY: -s,
                                x: r,
                                z: u,
                                y: o,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(t, .5, {
                                force3D: "auto",
                                rotationY: 0,
                                rotationX: 0,
                                z: 0,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(t, .5, {
                                force3D: "auto",
                                rotationY: 0,
                                z: 0,
                                x: 0,
                                y: 0,
                                rotationX: 0,
                                z: 0,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }), "mouseleave" == e.type && punchgs.TweenLite.to(jQuery(this), 3.8, {
                                z: 0,
                                ease: punchgs.Power3.easeOut
                            })
                        })
                    }
                }), t && (window.ondeviceorientation = function(e) {
                    var t = Math.round(e.beta || 0) - 70,
                        r = Math.round(e.gamma || 0),
                        o = i.find(".active-revslide");
                    if (jQuery(window).width() > jQuery(window).height()) {
                        var s = r;
                        r = t, t = s
                    }
                    var l = 360 / i.width() * r,
                        d = 180 / i.height() * t,
                        h = n.speed / 1e3 || 3;
                    if (o.find(".tp-parallax-container").each(function() {
                            var e = jQuery(this),
                                t = parseInt(e.data("parallaxlevel"), 0) / 100,
                                i = l * t * 2,
                                a = d * t * 4;
                            punchgs.TweenLite.to(e, h, {
                                force3D: "auto",
                                x: i,
                                y: a,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            })
                        }), "3D" == n.type || "3d" == n.type) {
                        var p = ".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer";
                        "carousel" === a.sliderType && (p = ".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer"), a.c.find(p).each(function() {
                            var t = jQuery(this),
                                i = n.levels[n.levels.length - 1] / 200;
                            offsh = l * i, offsv = d * i * 3, offrv = 0 == a.conw ? 0 : Math.round(l / a.conw * i * 500) || 0, offrh = 0 == a.conh ? 0 : Math.round(d / a.conh * i * 700) || 0, li = t.closest("li"), zz = 0, itslayer = !1, t.hasClass("dddwrapper-layer") && (zz = n.ddd_z_correction || 65, itslayer = !0), t.hasClass("dddwrapper-layer") && (offsh = 0, offsv = 0), li.hasClass("active-revslide") || "carousel" != a.sliderType ? "on" != n.ddd_bgfreeze || itslayer ? punchgs.TweenLite.to(t, h, {
                                rotationX: offrh,
                                rotationY: -offrv,
                                x: offsh,
                                z: zz,
                                y: offsv,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(t, .5, {
                                force3D: "auto",
                                rotationY: 0,
                                rotationX: 0,
                                z: 0,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(t, .5, {
                                force3D: "auto",
                                rotationY: 0,
                                z: 0,
                                x: 0,
                                y: 0,
                                rotationX: 0,
                                z: 0,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }), "mouseleave" == e.type && punchgs.TweenLite.to(jQuery(this), 3.8, {
                                z: 0,
                                ease: punchgs.Power3.easeOut
                            })
                        })
                    }
                })), void e.scrollTicker(a, i))
            },
            scrollTicker: function(t, i) {
                1 != t.scrollTicker && (t.scrollTicker = !0, punchgs.TweenLite.ticker.fps(150), punchgs.TweenLite.ticker.addEventListener("tick", function() {
                    e.scrollHandling(t)
                }, i, !0, 1))
            },
            scrollHandling: function(i) {
                i.lastwindowheight = i.lastwindowheight || jQuery(window).height();
                var a = i.c.offset().top,
                    n = jQuery(window).scrollTop(),
                    r = new Object,
                    o = i.viewPort,
                    s = i.parallax;
                if (i.lastscrolltop == n) return !1;
                i.lastscrolltop = n, r.top = a - n, r.h = 0 == i.conh ? i.c.height() : i.conh, r.bottom = a - n + r.h;
                var l = r.top < 0 ? r.top / r.h : r.bottom > i.lastwindowheight ? (r.bottom - i.lastwindowheight) / r.h : 0;
                i.scrollproc = l, e.callBackHandling && e.callBackHandling(i, "parallax", "start");
                var d = 1 - Math.abs(l);
                if (d = 0 > d ? 0 : d, o.enable && (1 - o.visible_area <= d ? i.inviewport || (i.inviewport = !0, e.enterInViewPort(i)) : i.inviewport && (i.inviewport = !1, e.leaveViewPort(i))), t && "on" == i.parallax.disable_onmobile) return !1;
                var h = new punchgs.TimelineLite;
                h.pause(), "3d" != s.type && "3D" != s.type && (("scroll" == s.type || "scroll+mouse" == s.type || "mouse+scroll" == s.type) && i.c.find(".tp-parallax-container").each(function() {
                    var e = jQuery(this),
                        t = parseInt(e.data("parallaxlevel"), 0) / 100,
                        a = l * (-t * i.conh);
                    e.data("parallaxoffset", a), h.add(punchgs.TweenLite.set(e, {
                        force3D: "auto",
                        y: a
                    }), 0)
                }), i.c.find(".tp-revslider-slidesli .slotholder, .tp-revslider-slidesli .rs-background-video-layer").each(function() {
                    var e = jQuery(this),
                        t = e.data("bgparallax") || i.parallax.bgparallax;
                    if (void 0 !== (t = "on" == t ? 1 : t) || "off" !== t) {
                        var a = i.parallax.levels[parseInt(t, 0) - 1] / 100,
                            n = l * (-a * i.conh);
                        jQuery.isNumeric(n) && h.add(punchgs.TweenLite.set(e, {
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            backfaceVisibility: "hidden",
                            force3D: "true",
                            y: n + "px",
                            overwrite: "auto"
                        }), 0)
                    }
                })), e.callBackHandling && e.callBackHandling(i, "parallax", "end"), h.play(0)
            }
        })
    }(jQuery),
    function() {
        var e = jQuery.fn.revolution;
        jQuery.extend(!0, e, {
            animateSlide: function(e, t, i, n, r, o, s, l, d) {
                return a(e, t, i, n, r, o, s, l, d)
            }
        });
        var t = function(t, i, a, n) {
                var r = t,
                    o = r.find(".defaultimg"),
                    s = r.data("zoomstart"),
                    l = r.data("rotationstart");
                void 0 != o.data("currotate") && (l = o.data("currotate")), void 0 != o.data("curscale") && "box" == n ? s = 100 * o.data("curscale") : void 0 != o.data("curscale") && (s = o.data("curscale")), e.slotSize(o, i);
                var d = o.attr("src"),
                    h = o.css("backgroundColor"),
                    p = i.width,
                    c = i.height,
                    u = o.data("fxof");
                "on" == i.autoHeight && (c = i.c.height()), void 0 == u && (u = 0);
                var f = 0,
                    g = o.data("bgfit"),
                    v = o.data("bgrepeat"),
                    m = o.data("bgposition");
                switch (void 0 == g && (g = "cover"), void 0 == v && (v = "no-repeat"), void 0 == m && (m = "center center"), n) {
                    case "box":
                        var w, y = 0,
                            _ = 0;
                        if (w = i.sloth > i.slotw ? i.sloth : i.slotw, !a) f = 0 - w;
                        i.slotw = w, i.sloth = w;
                        y = 0, _ = 0;
                        for (var b = 0; b < i.slots; b++) {
                            _ = 0;
                            for (var x = 0; x < i.slots; x++) r.append('<div class="slot" style="position:absolute;top:' + (0 + _) + "px;left:" + (u + y) + "px;width:" + w + "px;height:" + w + 'px;overflow:hidden;"><div class="slotslide" data-x="' + y + '" data-y="' + _ + '" style="position:absolute;top:0px;left:0px;width:' + w + "px;height:" + w + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - _) + "px;left:" + (0 - y) + "px;width:" + p + "px;height:" + c + "px;background-color:" + h + ";background-image:url(" + d + ");background-repeat:" + v + ";background-size:" + g + ";background-position:" + m + ';"></div></div></div>'), _ += w, void 0 != s && void 0 != l && punchgs.TweenLite.set(r.find(".slot").last(), {
                                rotationZ: l
                            });
                            y += w
                        }
                        break;
                    case "vertical":
                    case "horizontal":
                        if ("horizontal" == n) {
                            if (!a) f = 0 - i.slotw;
                            for (x = 0; x < i.slots; x++) r.append('<div class="slot" style="position:absolute;top:0px;left:' + (u + x * i.slotw) + "px;overflow:hidden;width:" + (i.slotw + .6) + "px;height:" + c + 'px"><div class="slotslide" style="position:absolute;top:0px;left:' + f + "px;width:" + (i.slotw + .6) + "px;height:" + c + 'px;overflow:hidden;"><div style="background-color:' + h + ";position:absolute;top:0px;left:" + (0 - x * i.slotw) + "px;width:" + p + "px;height:" + c + "px;background-image:url(" + d + ");background-repeat:" + v + ";background-size:" + g + ";background-position:" + m + ';"></div></div></div>'), void 0 != s && void 0 != l && punchgs.TweenLite.set(r.find(".slot").last(), {
                                rotationZ: l
                            })
                        } else {
                            if (!a) f = 0 - i.sloth;
                            for (x = 0; x < i.slots + 2; x++) r.append('<div class="slot" style="position:absolute;top:' + (0 + x * i.sloth) + "px;left:" + u + "px;overflow:hidden;width:" + p + "px;height:" + i.sloth + 'px"><div class="slotslide" style="position:absolute;top:' + f + "px;left:0px;width:" + p + "px;height:" + i.sloth + 'px;overflow:hidden;"><div style="background-color:' + h + ";position:absolute;top:" + (0 - x * i.sloth) + "px;left:0px;width:" + p + "px;height:" + c + "px;background-image:url(" + d + ");background-repeat:" + v + ";background-size:" + g + ";background-position:" + m + ';"></div></div></div>'), void 0 != s && void 0 != l && punchgs.TweenLite.set(r.find(".slot").last(), {
                                rotationZ: l
                            })
                        }
                }
            },
            i = function(e, t) {
                return void 0 == t || jQuery.isNumeric(e) ? e : void 0 == e ? e : e.split(",")[t]
            },
            a = function(e, a, n, r, o, s, l, d, h) {
                var p = s.index() > o.index() ? 1 : 0;
                "arrow" == r.sc_indicator && (p = r.sc_indicator_dir);
                var c = function(e, t, i, a, n) {
                        var r = punchgs.Power1.easeIn,
                            o = punchgs.Power1.easeOut,
                            s = punchgs.Power1.easeInOut,
                            l = punchgs.Power2.easeIn,
                            d = punchgs.Power2.easeOut,
                            h = punchgs.Power2.easeInOut,
                            p = (punchgs.Power3.easeIn, punchgs.Power3.easeOut),
                            c = punchgs.Power3.easeInOut,
                            u = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
                            f = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27],
                            g = 0,
                            v = 1,
                            m = 0,
                            w = 0,
                            y = (new Array, [
                                ["boxslide", 0, 1, 10, 0, "box", !1, null, 0, o, o, 500, 6],
                                ["boxfade", 1, 0, 10, 0, "box", !1, null, 1, s, s, 700, 5],
                                ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", !0, !1, 2, h, h, 700, 3],
                                ["slotslide-vertical", 3, 0, 0, 200, "vertical", !0, !1, 3, h, h, 700, 3],
                                ["curtain-1", 4, 3, 0, 0, "horizontal", !0, !0, 4, o, o, 300, 5],
                                ["curtain-2", 5, 3, 0, 0, "horizontal", !0, !0, 5, o, o, 300, 5],
                                ["curtain-3", 6, 3, 25, 0, "horizontal", !0, !0, 6, o, o, 300, 5],
                                ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", !0, !0, 7, o, o, 300, 7],
                                ["slotzoom-vertical", 8, 0, 0, 0, "vertical", !0, !0, 8, d, d, 500, 8],
                                ["slotfade-horizontal", 9, 0, 0, 500, "horizontal", !0, null, 9, d, d, 500, 25],
                                ["slotfade-vertical", 10, 0, 0, 500, "vertical", !0, null, 10, d, d, 500, 25],
                                ["fade", 11, 0, 1, 300, "horizontal", !0, null, 11, h, h, 1e3, 1],
                                ["crossfade", 11, 1, 1, 300, "horizontal", !0, null, 11, h, h, 1e3, 1],
                                ["fadethroughdark", 11, 2, 1, 300, "horizontal", !0, null, 11, h, h, 1e3, 1],
                                ["fadethroughlight", 11, 3, 1, 300, "horizontal", !0, null, 11, h, h, 1e3, 1],
                                ["fadethroughtransparent", 11, 4, 1, 300, "horizontal", !0, null, 11, h, h, 1e3, 1],
                                ["slideleft", 12, 0, 1, 0, "horizontal", !0, !0, 12, c, c, 1e3, 1],
                                ["slideup", 13, 0, 1, 0, "horizontal", !0, !0, 13, c, c, 1e3, 1],
                                ["slidedown", 14, 0, 1, 0, "horizontal", !0, !0, 14, c, c, 1e3, 1],
                                ["slideright", 15, 0, 1, 0, "horizontal", !0, !0, 15, c, c, 1e3, 1],
                                ["slideoverleft", 12, 7, 1, 0, "horizontal", !0, !0, 12, c, c, 1e3, 1],
                                ["slideoverup", 13, 7, 1, 0, "horizontal", !0, !0, 13, c, c, 1e3, 1],
                                ["slideoverdown", 14, 7, 1, 0, "horizontal", !0, !0, 14, c, c, 1e3, 1],
                                ["slideoverright", 15, 7, 1, 0, "horizontal", !0, !0, 15, c, c, 1e3, 1],
                                ["slideremoveleft", 12, 8, 1, 0, "horizontal", !0, !0, 12, c, c, 1e3, 1],
                                ["slideremoveup", 13, 8, 1, 0, "horizontal", !0, !0, 13, c, c, 1e3, 1],
                                ["slideremovedown", 14, 8, 1, 0, "horizontal", !0, !0, 14, c, c, 1e3, 1],
                                ["slideremoveright", 15, 8, 1, 0, "horizontal", !0, !0, 15, c, c, 1e3, 1],
                                ["papercut", 16, 0, 0, 600, "", null, null, 16, c, c, 1e3, 2],
                                ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", !1, !0, 17, s, s, 500, 7],
                                ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", !1, !0, 18, s, s, 500, 5],
                                ["cubic", 19, 0, 20, 600, "horizontal", !1, !0, 19, c, c, 500, 1],
                                ["cube", 19, 0, 20, 600, "horizontal", !1, !0, 20, c, c, 500, 1],
                                ["flyin", 20, 0, 4, 600, "vertical", !1, !0, 21, p, c, 500, 1],
                                ["turnoff", 21, 0, 1, 500, "horizontal", !1, !0, 22, c, c, 500, 1],
                                ["incube", 22, 0, 20, 200, "horizontal", !1, !0, 23, h, h, 500, 1],
                                ["cubic-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 24, d, d, 500, 1],
                                ["cube-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 25, d, d, 500, 1],
                                ["incube-horizontal", 24, 0, 20, 500, "vertical", !1, !0, 26, h, h, 500, 1],
                                ["turnoff-vertical", 25, 0, 1, 200, "horizontal", !1, !0, 27, h, h, 500, 1],
                                ["fadefromright", 12, 1, 1, 0, "horizontal", !0, !0, 28, h, h, 1e3, 1],
                                ["fadefromleft", 15, 1, 1, 0, "horizontal", !0, !0, 29, h, h, 1e3, 1],
                                ["fadefromtop", 14, 1, 1, 0, "horizontal", !0, !0, 30, h, h, 1e3, 1],
                                ["fadefrombottom", 13, 1, 1, 0, "horizontal", !0, !0, 31, h, h, 1e3, 1],
                                ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", !0, !0, 32, h, h, 1e3, 1],
                                ["fadetorightfadefromleft", 15, 2, 1, 0, "horizontal", !0, !0, 33, h, h, 1e3, 1],
                                ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", !0, !0, 34, h, h, 1e3, 1],
                                ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", !0, !0, 35, h, h, 1e3, 1],
                                ["parallaxtoright", 12, 3, 1, 0, "horizontal", !0, !0, 36, h, l, 1500, 1],
                                ["parallaxtoleft", 15, 3, 1, 0, "horizontal", !0, !0, 37, h, l, 1500, 1],
                                ["parallaxtotop", 14, 3, 1, 0, "horizontal", !0, !0, 38, h, r, 1500, 1],
                                ["parallaxtobottom", 13, 3, 1, 0, "horizontal", !0, !0, 39, h, r, 1500, 1],
                                ["scaledownfromright", 12, 4, 1, 0, "horizontal", !0, !0, 40, h, l, 1e3, 1],
                                ["scaledownfromleft", 15, 4, 1, 0, "horizontal", !0, !0, 41, h, l, 1e3, 1],
                                ["scaledownfromtop", 14, 4, 1, 0, "horizontal", !0, !0, 42, h, l, 1e3, 1],
                                ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", !0, !0, 43, h, l, 1e3, 1],
                                ["zoomout", 13, 5, 1, 0, "horizontal", !0, !0, 44, h, l, 1e3, 1],
                                ["zoomin", 13, 6, 1, 0, "horizontal", !0, !0, 45, h, l, 1e3, 1],
                                ["slidingoverlayup", 27, 0, 1, 0, "horizontal", !0, !0, 47, s, o, 2e3, 1],
                                ["slidingoverlaydown", 28, 0, 1, 0, "horizontal", !0, !0, 48, s, o, 2e3, 1],
                                ["slidingoverlayright", 30, 0, 1, 0, "horizontal", !0, !0, 49, s, o, 2e3, 1],
                                ["slidingoverlayleft", 29, 0, 1, 0, "horizontal", !0, !0, 50, s, o, 2e3, 1],
                                ["parallaxcirclesup", 31, 0, 1, 0, "horizontal", !0, !0, 51, h, r, 1500, 1],
                                ["parallaxcirclesdown", 32, 0, 1, 0, "horizontal", !0, !0, 52, h, r, 1500, 1],
                                ["parallaxcirclesright", 33, 0, 1, 0, "horizontal", !0, !0, 53, h, r, 1500, 1],
                                ["parallaxcirclesleft", 34, 0, 1, 0, "horizontal", !0, !0, 54, h, r, 1500, 1],
                                ["notransition", 26, 0, 1, 0, "horizontal", !0, null, 46, h, l, 1e3, 1],
                                ["parallaxright", 12, 3, 1, 0, "horizontal", !0, !0, 55, h, l, 1500, 1],
                                ["parallaxleft", 15, 3, 1, 0, "horizontal", !0, !0, 56, h, l, 1500, 1],
                                ["parallaxup", 14, 3, 1, 0, "horizontal", !0, !0, 57, h, r, 1500, 1],
                                ["parallaxdown", 13, 3, 1, 0, "horizontal", !0, !0, 58, h, r, 1500, 1]
                            ]);
                        t.testanims = !1, 1 == t.testanims && (t.nexttesttransform = void 0 === t.nexttesttransform ? 34 : t.nexttesttransform + 1, t.nexttesttransform = t.nexttesttransform > 70 ? 0 : t.nexttesttransform, i = y[t.nexttesttransform][0], console.log(i + "  " + t.nexttesttransform + "  " + y[t.nexttesttransform][1] + "  " + y[t.nexttesttransform][2])), jQuery.each(["parallaxcircles", "slidingoverlay", "slide", "slideover", "slideremove", "parallax"], function(e, t) {
                            i == t + "horizontal" && (i = 1 != n ? t + "left" : t + "right"), i == t + "vertical" && (i = 1 != n ? t + "up" : t + "down")
                        }), "random" == i && (i = Math.round(Math.random() * y.length - 1)) > y.length - 1 && (i = y.length - 1), "random-static" == i && ((i = Math.round(Math.random() * u.length - 1)) > u.length - 1 && (i = u.length - 1), i = u[i]), "random-premium" == i && ((i = Math.round(Math.random() * f.length - 1)) > f.length - 1 && (i = f.length - 1), i = f[i]);
                        if (1 == t.isJoomla && void 0 != window.MooTools && -1 != [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45].indexOf(i)) {
                            var _ = Math.round(Math.random() * (f.length - 2)) + 1;
                            _ > f.length - 1 && (_ = f.length - 1), 0 == _ && (_ = 1), i = f[_]
                        }
                        jQuery.each(y, function(e, t) {
                            (t[0] == i || t[8] == i) && (g = t[1], v = t[2], m = w), w += 1
                        }), g > 30 && (g = 30), 0 > g && (g = 0);
                        var b = new Object;
                        return b.nexttrans = g, b.STA = y[m], b.specials = v, b
                    }(0, r, a, 0, p),
                    u = c.STA,
                    f = c.specials;
                e = c.nexttrans;
                "on" == l.data("kenburns") && (e = 11);
                var g = o.data("nexttransid") || 0,
                    v = i(o.data("masterspeed"), g);
                v = (v = "default" === v ? u[11] : "random" === v ? Math.round(1e3 * Math.random() + 300) : void 0 != v ? parseInt(v, 0) : u[11]) > r.delay ? r.delay : v, v += u[4], r.slots = i(o.data("slotamount"), g), r.slots = void 0 == r.slots || "default" == r.slots ? u[12] : "random" == r.slots ? Math.round(12 * Math.random() + 4) : u[12], r.slots = r.slots < 1 ? "boxslide" == a ? Math.round(6 * Math.random() + 3) : "flyin" == a ? Math.round(4 * Math.random() + 1) : r.slots : r.slots, r.slots = (4 == e || 5 == e || 6 == e) && r.slots < 3 ? 3 : r.slots, r.slots = 0 != u[3] ? Math.min(r.slots, u[3]) : r.slots, r.slots = 9 == e ? r.width / 20 : 10 == e ? r.height / 20 : r.slots, r.rotate = i(o.data("rotate"), g), r.rotate = void 0 == r.rotate || "default" == r.rotate ? 0 : 999 == r.rotate || "random" == r.rotate ? Math.round(360 * Math.random()) : r.rotate, r.rotate = !jQuery.support.transition || r.ie || r.ie9 ? 0 : r.rotate, 11 != e && (null != u[7] && t(d, r, u[7], u[5]), null != u[6] && t(l, r, u[6], u[5])), h.add(punchgs.TweenLite.set(l.find(".defaultvid"), {
                    y: 0,
                    x: 0,
                    top: 0,
                    left: 0,
                    scale: 1
                }), 0), h.add(punchgs.TweenLite.set(d.find(".defaultvid"), {
                    y: 0,
                    x: 0,
                    top: 0,
                    left: 0,
                    scale: 1
                }), 0), h.add(punchgs.TweenLite.set(l.find(".defaultvid"), {
                    y: "+0%",
                    x: "+0%"
                }), 0), h.add(punchgs.TweenLite.set(d.find(".defaultvid"), {
                    y: "+0%",
                    x: "+0%"
                }), 0), h.add(punchgs.TweenLite.set(l, {
                    autoAlpha: 1,
                    y: "+0%",
                    x: "+0%"
                }), 0), h.add(punchgs.TweenLite.set(d, {
                    autoAlpha: 1,
                    y: "+0%",
                    x: "+0%"
                }), 0), h.add(punchgs.TweenLite.set(l.parent(), {
                    backgroundColor: "transparent"
                }), 0), h.add(punchgs.TweenLite.set(d.parent(), {
                    backgroundColor: "transparent"
                }), 0);
                var m = i(o.data("easein"), g),
                    w = i(o.data("easeout"), g);
                if (m = "default" === m ? u[9] || punchgs.Power2.easeInOut : m || u[9] || punchgs.Power2.easeInOut, w = "default" === w ? u[10] || punchgs.Power2.easeInOut : w || u[10] || punchgs.Power2.easeInOut, 0 == e) {
                    var y = Math.ceil(r.height / r.sloth),
                        _ = 0;
                    l.find(".slotslide").each(function(e) {
                        var t = jQuery(this);
                        (_ += 1) == y && (_ = 0), h.add(punchgs.TweenLite.from(t, v / 600, {
                            opacity: 0,
                            top: 0 - r.sloth,
                            left: 0 - r.slotw,
                            rotation: r.rotate,
                            force3D: "auto",
                            ease: m
                        }), (15 * e + 30 * _) / 1500)
                    })
                }
                if (1 == e) {
                    var b;
                    l.find(".slotslide").each(function(e) {
                        var t = jQuery(this),
                            i = Math.random() * v + 300,
                            a = 500 * Math.random() + 200;
                        i + a > b && (b = a + a, e), h.add(punchgs.TweenLite.from(t, i / 1e3, {
                            autoAlpha: 0,
                            force3D: "auto",
                            rotation: r.rotate,
                            ease: m
                        }), a / 1e3)
                    })
                }
                if (2 == e) {
                    var x = new punchgs.TimelineLite;
                    d.find(".slotslide").each(function() {
                        var e = jQuery(this);
                        x.add(punchgs.TweenLite.to(e, v / 1e3, {
                            left: r.slotw,
                            ease: m,
                            force3D: "auto",
                            rotation: 0 - r.rotate
                        }), 0), h.add(x, 0)
                    }), l.find(".slotslide").each(function() {
                        var e = jQuery(this);
                        x.add(punchgs.TweenLite.from(e, v / 1e3, {
                            left: 0 - r.slotw,
                            ease: m,
                            force3D: "auto",
                            rotation: r.rotate
                        }), 0), h.add(x, 0)
                    })
                }
                if (3 == e) {
                    x = new punchgs.TimelineLite;
                    d.find(".slotslide").each(function() {
                        var e = jQuery(this);
                        x.add(punchgs.TweenLite.to(e, v / 1e3, {
                            top: r.sloth,
                            ease: m,
                            rotation: r.rotate,
                            force3D: "auto",
                            transformPerspective: 600
                        }), 0), h.add(x, 0)
                    }), l.find(".slotslide").each(function() {
                        var e = jQuery(this);
                        x.add(punchgs.TweenLite.from(e, v / 1e3, {
                            top: 0 - r.sloth,
                            rotation: r.rotate,
                            ease: w,
                            force3D: "auto",
                            transformPerspective: 600
                        }), 0), h.add(x, 0)
                    })
                }
                if (4 == e || 5 == e) {
                    setTimeout(function() {
                        d.find(".defaultimg").css({
                            opacity: 0
                        })
                    }, 100);
                    var T = v / 1e3;
                    x = new punchgs.TimelineLite;
                    d.find(".slotslide").each(function(t) {
                        var i = jQuery(this),
                            a = t * T / r.slots;
                        5 == e && (a = (r.slots - t - 1) * T / r.slots / 1.5), x.add(punchgs.TweenLite.to(i, 3 * T, {
                            transformPerspective: 600,
                            force3D: "auto",
                            top: 0 + r.height,
                            opacity: .5,
                            rotation: r.rotate,
                            ease: m,
                            delay: a
                        }), 0), h.add(x, 0)
                    }), l.find(".slotslide").each(function(t) {
                        var i = jQuery(this),
                            a = t * T / r.slots;
                        5 == e && (a = (r.slots - t - 1) * T / r.slots / 1.5), x.add(punchgs.TweenLite.from(i, 3 * T, {
                            top: 0 - r.height,
                            opacity: .5,
                            rotation: r.rotate,
                            force3D: "auto",
                            ease: punchgs.eo,
                            delay: a
                        }), 0), h.add(x, 0)
                    })
                }
                if (6 == e) {
                    r.slots < 2 && (r.slots = 2), r.slots % 2 && (r.slots = r.slots + 1);
                    x = new punchgs.TimelineLite;
                    setTimeout(function() {
                        d.find(".defaultimg").css({
                            opacity: 0
                        })
                    }, 100), d.find(".slotslide").each(function(e) {
                        var t = jQuery(this);
                        if (e + 1 < r.slots / 2) var i = 90 * (e + 2);
                        else i = 90 * (2 + r.slots - e);
                        x.add(punchgs.TweenLite.to(t, (v + i) / 1e3, {
                            top: 0 + r.height,
                            opacity: 1,
                            force3D: "auto",
                            rotation: r.rotate,
                            ease: m
                        }), 0), h.add(x, 0)
                    }), l.find(".slotslide").each(function(e) {
                        var t = jQuery(this);
                        if (e + 1 < r.slots / 2) var i = 90 * (e + 2);
                        else i = 90 * (2 + r.slots - e);
                        x.add(punchgs.TweenLite.from(t, (v + i) / 1e3, {
                            top: 0 - r.height,
                            opacity: 1,
                            force3D: "auto",
                            rotation: r.rotate,
                            ease: w
                        }), 0), h.add(x, 0)
                    })
                }
                if (7 == e) {
                    (v *= 2) > r.delay && (v = r.delay);
                    x = new punchgs.TimelineLite;
                    setTimeout(function() {
                        d.find(".defaultimg").css({
                            opacity: 0
                        })
                    }, 100), d.find(".slotslide").each(function() {
                        var e = jQuery(this).find("div");
                        x.add(punchgs.TweenLite.to(e, v / 1e3, {
                            left: 0 - r.slotw / 2 + "px",
                            top: 0 - r.height / 2 + "px",
                            width: 2 * r.slotw + "px",
                            height: 2 * r.height + "px",
                            opacity: 0,
                            rotation: r.rotate,
                            force3D: "auto",
                            ease: m
                        }), 0), h.add(x, 0)
                    }), l.find(".slotslide").each(function(e) {
                        var t = jQuery(this).find("div");
                        x.add(punchgs.TweenLite.fromTo(t, v / 1e3, {
                            left: 0,
                            top: 0,
                            opacity: 0,
                            transformPerspective: 600
                        }, {
                            left: 0 - e * r.slotw + "px",
                            ease: w,
                            force3D: "auto",
                            top: "0px",
                            width: r.width,
                            height: r.height,
                            opacity: 1,
                            rotation: 0,
                            delay: .1
                        }), 0), h.add(x, 0)
                    })
                }
                if (8 == e) {
                    (v *= 3) > r.delay && (v = r.delay);
                    x = new punchgs.TimelineLite;
                    d.find(".slotslide").each(function() {
                        var e = jQuery(this).find("div");
                        x.add(punchgs.TweenLite.to(e, v / 1e3, {
                            left: 0 - r.width / 2 + "px",
                            top: 0 - r.sloth / 2 + "px",
                            width: 2 * r.width + "px",
                            height: 2 * r.sloth + "px",
                            force3D: "auto",
                            ease: m,
                            opacity: 0,
                            rotation: r.rotate
                        }), 0), h.add(x, 0)
                    }), l.find(".slotslide").each(function(e) {
                        var t = jQuery(this).find("div");
                        x.add(punchgs.TweenLite.fromTo(t, v / 1e3, {
                            left: 0,
                            top: 0,
                            opacity: 0,
                            force3D: "auto"
                        }, {
                            left: "0px",
                            top: 0 - e * r.sloth + "px",
                            width: l.find(".defaultimg").data("neww") + "px",
                            height: l.find(".defaultimg").data("newh") + "px",
                            opacity: 1,
                            ease: w,
                            rotation: 0
                        }), 0), h.add(x, 0)
                    })
                }
                if (9 == e || 10 == e) {
                    l.find(".slotslide").each(function(e) {
                        var t = jQuery(this);
                        0, h.add(punchgs.TweenLite.fromTo(t, v / 1e3, {
                            autoAlpha: 0,
                            force3D: "auto",
                            transformPerspective: 600
                        }, {
                            autoAlpha: 1,
                            ease: m,
                            delay: 5 * e / 1e3
                        }), 0)
                    })
                }
                if (27 == e || 28 == e || 29 == e || 30 == e) {
                    var k = l.find(".slot"),
                        L = 27 == e || 29 == e ? "-100%" : "+100%",
                        O = 27 == e || 29 == e ? "+100%" : "-100%",
                        S = 27 == e || 29 == e ? "-80%" : "80%",
                        P = 27 == e || 29 == e ? "80%" : "-80%",
                        C = 27 == e || 29 == e ? "10%" : "-10%",
                        A = {
                            overwrite: "all"
                        },
                        z = {
                            autoAlpha: 0,
                            zIndex: 1,
                            force3D: "auto",
                            ease: m
                        },
                        j = {
                            position: "inherit",
                            autoAlpha: 0,
                            overwrite: "all",
                            zIndex: 1
                        },
                        M = {
                            autoAlpha: 1,
                            force3D: "auto",
                            ease: w
                        },
                        I = {
                            overwrite: "all",
                            zIndex: 2
                        },
                        R = {
                            autoAlpha: 1,
                            force3D: "auto",
                            overwrite: "all",
                            ease: m
                        },
                        D = {
                            overwrite: "all",
                            zIndex: 2
                        },
                        Q = {
                            autoAlpha: 1,
                            force3D: "auto",
                            ease: m
                        },
                        F = 1 == (27 == e || 28 == e ? 1 : 2) ? "y" : "x";
                    A[F] = "0px", z[F] = L, j[F] = C, M[F] = "0%", I[F] = O, R[F] = L, D[F] = S, Q[F] = P, k.append('<span style="background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;top:0px;left:0px;display:block;z-index:2"></span>'), h.add(punchgs.TweenLite.fromTo(d, v / 1e3, A, z), 0), h.add(punchgs.TweenLite.fromTo(l.find(".defaultimg"), v / 2e3, j, M), v / 2e3), h.add(punchgs.TweenLite.fromTo(k, v / 1e3, I, R), 0), h.add(punchgs.TweenLite.fromTo(k.find(".slotslide div"), v / 1e3, D, Q), 0)
                }
                if (31 == e || 32 == e || 33 == e || 34 == e) {
                    v = 6e3, m = punchgs.Power3.easeInOut;
                    var H = v / 1e3;
                    mas = H - H / 5, _nt = e, fy = 31 == _nt ? "+100%" : 32 == _nt ? "-100%" : "0%", fx = 33 == _nt ? "+100%" : 34 == _nt ? "-100%" : "0%", ty = 31 == _nt ? "-100%" : 32 == _nt ? "+100%" : "0%", tx = 33 == _nt ? "-100%" : 34 == _nt ? "+100%" : "0%", h.add(punchgs.TweenLite.fromTo(d, H - .2 * H, {
                            y: 0,
                            x: 0
                        }, {
                            y: ty,
                            x: tx,
                            ease: w
                        }), .2 * H), h.add(punchgs.TweenLite.fromTo(l, H, {
                            y: fy,
                            x: fx
                        }, {
                            y: "0%",
                            x: "0%",
                            ease: m
                        }), 0), l.find(".slot").remove(), l.find(".defaultimg").clone().appendTo(l).addClass("slot"),
                        function(e, t, i, a, n) {
                            var r = e.find(".slot"),
                                o = [2, 1.2, .9, .7, .55, .42],
                                s = e.width(),
                                d = e.height();
                            r.wrap('<div class="slot-circle-wrapper" style="overflow:hidden;position:absolute;border:1px solid #fff"></div>');
                            for (var p = 0; 6 > p; p++) r.parent().clone(!1).appendTo(l);
                            e.find(".slot-circle-wrapper").each(function(e) {
                                if (6 > e) {
                                    var a = jQuery(this),
                                        r = a.find(".slot"),
                                        l = s > d ? o[e] * s : o[e] * d,
                                        p = l / 2 - s / 2 + 0,
                                        c = l / 2 - d / 2 + 0,
                                        u = {
                                            scale: 1,
                                            transformOrigo: "50% 50%",
                                            width: l + "px",
                                            height: l + "px",
                                            top: d / 2 - l / 2 + "px",
                                            left: (33 == i ? s / 2 - l / 2 : 34 == i ? s - l : s / 2 - l / 2) + "px",
                                            borderRadius: 0 != e ? "50%" : "0"
                                        },
                                        f = {
                                            scale: 1,
                                            top: d / 2 - l / 2,
                                            left: s / 2 - l / 2,
                                            ease: n
                                        },
                                        g = {
                                            width: s,
                                            height: d,
                                            autoAlpha: 1,
                                            top: c + "px",
                                            position: "absolute",
                                            left: (33 == i ? p : 34 == i ? p + s / 2 : p) + "px"
                                        },
                                        v = {
                                            top: c + "px",
                                            left: p + "px",
                                            ease: n
                                        },
                                        m = t;
                                    h.add(punchgs.TweenLite.fromTo(a, m, u, f), 0), h.add(punchgs.TweenLite.fromTo(r, m, g, v), 0), h.add(punchgs.TweenLite.fromTo(a, .001, {
                                        autoAlpha: 0
                                    }, {
                                        autoAlpha: 1
                                    }), 0)
                                }
                            })
                        }(l, H, _nt, 0, m)
                }
                if (11 == e) {
                    f > 4 && (f = 0);
                    var E = 2 == f ? "#000000" : 3 == f ? "#ffffff" : "transparent";
                    switch (f) {
                        case 0:
                            h.add(punchgs.TweenLite.fromTo(l, v / 1e3, {
                                autoAlpha: 0
                            }, {
                                autoAlpha: 1,
                                force3D: "auto",
                                ease: m
                            }), 0);
                            break;
                        case 1:
                            h.add(punchgs.TweenLite.fromTo(l, v / 1e3, {
                                autoAlpha: 0
                            }, {
                                autoAlpha: 1,
                                force3D: "auto",
                                ease: m
                            }), 0), h.add(punchgs.TweenLite.fromTo(d, v / 1e3, {
                                autoAlpha: 1
                            }, {
                                autoAlpha: 0,
                                force3D: "auto",
                                ease: m
                            }), 0);
                            break;
                        case 2:
                        case 3:
                        case 4:
                            h.add(punchgs.TweenLite.set(d.parent(), {
                                backgroundColor: E,
                                force3D: "auto"
                            }), 0), h.add(punchgs.TweenLite.set(l.parent(), {
                                backgroundColor: "transparent",
                                force3D: "auto"
                            }), 0), h.add(punchgs.TweenLite.to(d, v / 2e3, {
                                autoAlpha: 0,
                                force3D: "auto",
                                ease: m
                            }), 0), h.add(punchgs.TweenLite.fromTo(l, v / 2e3, {
                                autoAlpha: 0
                            }, {
                                autoAlpha: 1,
                                force3D: "auto",
                                ease: m
                            }), v / 2e3)
                    }
                    h.add(punchgs.TweenLite.set(l.find(".defaultimg"), {
                        autoAlpha: 1
                    }), 0), h.add(punchgs.TweenLite.set(d.find("defaultimg"), {
                        autoAlpha: 1
                    }), 0)
                }
                if (26 == e) {
                    v = 0, h.add(punchgs.TweenLite.fromTo(l, v / 1e3, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        force3D: "auto",
                        ease: m
                    }), 0), h.add(punchgs.TweenLite.to(d, v / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        ease: m
                    }), 0), h.add(punchgs.TweenLite.set(l.find(".defaultimg"), {
                        autoAlpha: 1
                    }), 0), h.add(punchgs.TweenLite.set(d.find("defaultimg"), {
                        autoAlpha: 1
                    }), 0)
                }
                if (12 == e || 13 == e || 14 == e || 15 == e) {
                    (v = v) > r.delay && (v = r.delay), setTimeout(function() {
                        punchgs.TweenLite.set(d.find(".defaultimg"), {
                            autoAlpha: 0
                        })
                    }, 100);
                    var W = r.width,
                        N = r.height,
                        X = l.find(".slotslide, .defaultvid"),
                        V = 0,
                        Y = 0,
                        B = 1,
                        q = 1,
                        U = 1,
                        G = v / 1e3,
                        Z = G;
                    ("fullwidth" == r.sliderLayout || "fullscreen" == r.sliderLayout) && (W = X.width(), N = X.height()), 12 == e ? V = W : 15 == e ? V = 0 - W : 13 == e ? Y = N : 14 == e && (Y = 0 - N), 1 == f && (B = 0), 2 == f && (B = 0), 3 == f && (G = v / 1300), (4 == f || 5 == f) && (q = .6), 6 == f && (q = 1.4), (5 == f || 6 == f) && (U = 1.4, B = 0, W = 0, N = 0, V = 0, Y = 0), 6 == f && (U = .6), 7 == f && (W = 0, N = 0);
                    var $ = l.find(".slotslide"),
                        K = d.find(".slotslide, .defaultvid");
                    if (h.add(punchgs.TweenLite.set(s, {
                            zIndex: 15
                        }), 0), h.add(punchgs.TweenLite.set(o, {
                            zIndex: 20
                        }), 0), 8 == f ? (h.add(punchgs.TweenLite.set(s, {
                            zIndex: 20
                        }), 0), h.add(punchgs.TweenLite.set(o, {
                            zIndex: 15
                        }), 0), h.add(punchgs.TweenLite.set($, {
                            left: 0,
                            top: 0,
                            scale: 1,
                            opacity: 1,
                            rotation: 0,
                            ease: m,
                            force3D: "auto"
                        }), 0)) : h.add(punchgs.TweenLite.from($, G, {
                            left: V,
                            top: Y,
                            scale: U,
                            opacity: B,
                            rotation: r.rotate,
                            ease: m,
                            force3D: "auto"
                        }), 0), (4 == f || 5 == f) && (W = 0, N = 0), 1 != f) switch (e) {
                        case 12:
                            h.add(punchgs.TweenLite.to(K, Z, {
                                left: 0 - W + "px",
                                force3D: "auto",
                                scale: q,
                                opacity: B,
                                rotation: r.rotate,
                                ease: w
                            }), 0);
                            break;
                        case 15:
                            h.add(punchgs.TweenLite.to(K, Z, {
                                left: W + "px",
                                force3D: "auto",
                                scale: q,
                                opacity: B,
                                rotation: r.rotate,
                                ease: w
                            }), 0);
                            break;
                        case 13:
                            h.add(punchgs.TweenLite.to(K, Z, {
                                top: 0 - N + "px",
                                force3D: "auto",
                                scale: q,
                                opacity: B,
                                rotation: r.rotate,
                                ease: w
                            }), 0);
                            break;
                        case 14:
                            h.add(punchgs.TweenLite.to(K, Z, {
                                top: N + "px",
                                force3D: "auto",
                                scale: q,
                                opacity: B,
                                rotation: r.rotate,
                                ease: w
                            }), 0)
                    }
                }
                if (16 == e) {
                    x = new punchgs.TimelineLite;
                    h.add(punchgs.TweenLite.set(s, {
                        position: "absolute",
                        "z-index": 20
                    }), 0), h.add(punchgs.TweenLite.set(o, {
                        position: "absolute",
                        "z-index": 15
                    }), 0), s.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'), s.find(".tp-half-one").clone(!0).appendTo(s).addClass("tp-half-two"), s.find(".tp-half-two").removeClass("tp-half-one");
                    W = r.width, N = r.height;
                    "on" == r.autoHeight && (N = n.height()), s.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + W + "px;height:" + N + 'px;"></div>'), s.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + W + "px;height:" + N + 'px;"></div>'), s.find(".tp-half-two .defaultimg").css({
                        position: "absolute",
                        top: "-50%"
                    }), s.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'), h.add(punchgs.TweenLite.set(s.find(".tp-half-two"), {
                        width: W,
                        height: N,
                        overflow: "hidden",
                        zIndex: 15,
                        position: "absolute",
                        top: N / 2,
                        left: "0px",
                        transformPerspective: 600,
                        transformOrigin: "center bottom"
                    }), 0), h.add(punchgs.TweenLite.set(s.find(".tp-half-one"), {
                        width: W,
                        height: N / 2,
                        overflow: "visible",
                        zIndex: 10,
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        transformPerspective: 600,
                        transformOrigin: "center top"
                    }), 0);
                    var J = (s.find(".defaultimg"), Math.round(20 * Math.random() - 10)),
                        ee = Math.round(20 * Math.random() - 10),
                        te = Math.round(20 * Math.random() - 10),
                        ie = .4 * Math.random() - .2,
                        ae = .4 * Math.random() - .2,
                        ne = 1 * Math.random() + 1,
                        re = 1 * Math.random() + 1,
                        oe = .3 * Math.random() + .3;
                    h.add(punchgs.TweenLite.set(s.find(".tp-half-one"), {
                        overflow: "hidden"
                    }), 0), h.add(punchgs.TweenLite.fromTo(s.find(".tp-half-one"), v / 800, {
                        width: W,
                        height: N / 2,
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        force3D: "auto",
                        transformOrigin: "center top"
                    }, {
                        scale: ne,
                        rotation: J,
                        y: 0 - N - N / 4,
                        autoAlpha: 0,
                        ease: m
                    }), 0), h.add(punchgs.TweenLite.fromTo(s.find(".tp-half-two"), v / 800, {
                        width: W,
                        height: N,
                        overflow: "hidden",
                        position: "absolute",
                        top: N / 2,
                        left: "0px",
                        force3D: "auto",
                        transformOrigin: "center bottom"
                    }, {
                        scale: re,
                        rotation: ee,
                        y: N + N / 4,
                        ease: m,
                        autoAlpha: 0,
                        onComplete: function() {
                            punchgs.TweenLite.set(s, {
                                position: "absolute",
                                "z-index": 15
                            }), punchgs.TweenLite.set(o, {
                                position: "absolute",
                                "z-index": 20
                            }), s.find(".tp-half-one").length > 0 && (s.find(".tp-half-one .defaultimg").unwrap(), s.find(".tp-half-one .slotholder").unwrap()), s.find(".tp-half-two").remove()
                        }
                    }), 0), x.add(punchgs.TweenLite.set(l.find(".defaultimg"), {
                        autoAlpha: 1
                    }), 0), null != s.html() && h.add(punchgs.TweenLite.fromTo(o, (v - 200) / 1e3, {
                        scale: oe,
                        x: r.width / 4 * ie,
                        y: N / 4 * ae,
                        rotation: te,
                        force3D: "auto",
                        transformOrigin: "center center",
                        ease: w
                    }, {
                        autoAlpha: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        rotation: 0
                    }), 0), h.add(x, 0)
                }
                if (17 == e && l.find(".slotslide").each(function(e) {
                        var t = jQuery(this);
                        h.add(punchgs.TweenLite.fromTo(t, v / 800, {
                            opacity: 0,
                            rotationY: 0,
                            scale: .9,
                            rotationX: -110,
                            force3D: "auto",
                            transformPerspective: 600,
                            transformOrigin: "center center"
                        }, {
                            opacity: 1,
                            top: 0,
                            left: 0,
                            scale: 1,
                            rotation: 0,
                            rotationX: 0,
                            force3D: "auto",
                            rotationY: 0,
                            ease: m,
                            delay: .06 * e
                        }), 0)
                    }), 18 == e && l.find(".slotslide").each(function(e) {
                        var t = jQuery(this);
                        h.add(punchgs.TweenLite.fromTo(t, v / 500, {
                            autoAlpha: 0,
                            rotationY: 110,
                            scale: .9,
                            rotationX: 10,
                            force3D: "auto",
                            transformPerspective: 600,
                            transformOrigin: "center center"
                        }, {
                            autoAlpha: 1,
                            top: 0,
                            left: 0,
                            scale: 1,
                            rotation: 0,
                            rotationX: 0,
                            force3D: "auto",
                            rotationY: 0,
                            ease: m,
                            delay: .06 * e
                        }), 0)
                    }), 19 == e || 22 == e) {
                    x = new punchgs.TimelineLite;
                    h.add(punchgs.TweenLite.set(s, {
                        zIndex: 20
                    }), 0), h.add(punchgs.TweenLite.set(o, {
                        zIndex: 20
                    }), 0), setTimeout(function() {
                        d.find(".defaultimg").css({
                            opacity: 0
                        })
                    }, 100);
                    var se = 90,
                        le = (B = 1, "center center ");
                    1 == p && (se = -90), 19 == e ? (le = le + "-" + r.height / 2, B = 0) : le += r.height / 2, punchgs.TweenLite.set(n, {
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        transformPerspective: 600
                    }), l.find(".slotslide").each(function(e) {
                        var t = jQuery(this);
                        x.add(punchgs.TweenLite.fromTo(t, v / 1e3, {
                            transformStyle: "flat",
                            backfaceVisibility: "hidden",
                            left: 0,
                            rotationY: r.rotate,
                            z: 10,
                            top: 0,
                            scale: 1,
                            force3D: "auto",
                            transformPerspective: 600,
                            transformOrigin: le,
                            rotationX: se
                        }, {
                            left: 0,
                            rotationY: 0,
                            top: 0,
                            z: 0,
                            scale: 1,
                            force3D: "auto",
                            rotationX: 0,
                            delay: 50 * e / 1e3,
                            ease: m
                        }), 0), x.add(punchgs.TweenLite.to(t, .1, {
                            autoAlpha: 1,
                            delay: 50 * e / 1e3
                        }), 0), h.add(x)
                    }), d.find(".slotslide").each(function(e) {
                        var t = jQuery(this),
                            i = -90;
                        1 == p && (i = 90), x.add(punchgs.TweenLite.fromTo(t, v / 1e3, {
                            transformStyle: "flat",
                            backfaceVisibility: "hidden",
                            autoAlpha: 1,
                            rotationY: 0,
                            top: 0,
                            z: 0,
                            scale: 1,
                            force3D: "auto",
                            transformPerspective: 600,
                            transformOrigin: le,
                            rotationX: 0
                        }, {
                            autoAlpha: 1,
                            rotationY: r.rotate,
                            top: 0,
                            z: 10,
                            scale: 1,
                            rotationX: i,
                            delay: 50 * e / 1e3,
                            force3D: "auto",
                            ease: w
                        }), 0), h.add(x)
                    }), h.add(punchgs.TweenLite.set(s, {
                        zIndex: 18
                    }), 0)
                }
                if (20 == e) {
                    if (setTimeout(function() {
                            d.find(".defaultimg").css({
                                opacity: 0
                            })
                        }, 100), 1 == p) {
                        var de = -r.width;
                        se = 80, le = "20% 70% -" + r.height / 2
                    } else de = r.width, se = -80, le = "80% 70% -" + r.height / 2;
                    l.find(".slotslide").each(function(e) {
                        var t = jQuery(this),
                            i = 50 * e / 1e3;
                        h.add(punchgs.TweenLite.fromTo(t, v / 1e3, {
                            left: de,
                            rotationX: 40,
                            z: -600,
                            opacity: B,
                            top: 0,
                            scale: 1,
                            force3D: "auto",
                            transformPerspective: 600,
                            transformOrigin: le,
                            transformStyle: "flat",
                            rotationY: se
                        }, {
                            left: 0,
                            rotationX: 0,
                            opacity: 1,
                            top: 0,
                            z: 0,
                            scale: 1,
                            rotationY: 0,
                            delay: i,
                            ease: m
                        }), 0)
                    }), d.find(".slotslide").each(function(e) {
                        var t = jQuery(this),
                            i = 50 * e / 1e3;
                        if (i = e > 0 ? i + v / 9e3 : 0, 1 != p) var a = -r.width / 2,
                            n = 30,
                            o = "20% 70% -" + r.height / 2;
                        else a = r.width / 2, n = -30, o = "80% 70% -" + r.height / 2;
                        w = punchgs.Power2.easeInOut, h.add(punchgs.TweenLite.fromTo(t, v / 1e3, {
                            opacity: 1,
                            rotationX: 0,
                            top: 0,
                            z: 0,
                            scale: 1,
                            left: 0,
                            force3D: "auto",
                            transformPerspective: 600,
                            transformOrigin: o,
                            transformStyle: "flat",
                            rotationY: 0
                        }, {
                            opacity: 1,
                            rotationX: 20,
                            top: 0,
                            z: -600,
                            left: a,
                            force3D: "auto",
                            rotationY: n,
                            delay: i,
                            ease: w
                        }), 0)
                    })
                }
                if (21 == e || 25 == e) {
                    setTimeout(function() {
                        d.find(".defaultimg").css({
                            opacity: 0
                        })
                    }, 100);
                    se = 90, de = -r.width;
                    var he = -se;
                    if (1 == p)
                        if (25 == e) {
                            le = "center top 0";
                            se = r.rotate
                        } else {
                            le = "left center 0";
                            he = r.rotate
                        }
                    else if (de = r.width, se = -90, 25 == e) {
                        le = "center bottom 0";
                        he = -se, se = r.rotate
                    } else {
                        le = "right center 0";
                        he = r.rotate
                    }
                    l.find(".slotslide").each(function() {
                        var e = jQuery(this),
                            t = v / 1.5 / 3;
                        h.add(punchgs.TweenLite.fromTo(e, 2 * t / 1e3, {
                            left: 0,
                            transformStyle: "flat",
                            rotationX: he,
                            z: 0,
                            autoAlpha: 0,
                            top: 0,
                            scale: 1,
                            force3D: "auto",
                            transformPerspective: 1200,
                            transformOrigin: le,
                            rotationY: se
                        }, {
                            left: 0,
                            rotationX: 0,
                            top: 0,
                            z: 0,
                            autoAlpha: 1,
                            scale: 1,
                            rotationY: 0,
                            force3D: "auto",
                            delay: t / 1e3,
                            ease: m
                        }), 0)
                    }), 1 != p ? (de = -r.width, se = 90, 25 == e ? (le = "center top 0", he = -se, se = r.rotate) : (le = "left center 0", he = r.rotate)) : (de = r.width, se = -90, 25 == e ? (le = "center bottom 0", he = -se, se = r.rotate) : (le = "right center 0", he = r.rotate)), d.find(".slotslide").each(function() {
                        var e = jQuery(this);
                        h.add(punchgs.TweenLite.fromTo(e, v / 1e3, {
                            left: 0,
                            transformStyle: "flat",
                            rotationX: 0,
                            z: 0,
                            autoAlpha: 1,
                            top: 0,
                            scale: 1,
                            force3D: "auto",
                            transformPerspective: 1200,
                            transformOrigin: le,
                            rotationY: 0
                        }, {
                            left: 0,
                            rotationX: he,
                            top: 0,
                            z: 0,
                            autoAlpha: 1,
                            force3D: "auto",
                            scale: 1,
                            rotationY: se,
                            ease: w
                        }), 0)
                    })
                }
                if (23 == e || 24 == e) {
                    setTimeout(function() {
                        d.find(".defaultimg").css({
                            opacity: 0
                        })
                    }, 100);
                    se = -90, B = 1;
                    if (1 == p && (se = 90), 23 == e) {
                        le = "center center -" + r.width / 2;
                        B = 0
                    } else le = "center center " + r.width / 2;
                    punchgs.TweenLite.set(n, {
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        perspective: 2500
                    }), l.find(".slotslide").each(function(e) {
                        var t = jQuery(this);
                        h.add(punchgs.TweenLite.fromTo(t, v / 1e3, {
                            left: 0,
                            rotationX: r.rotate,
                            force3D: "auto",
                            opacity: B,
                            top: 0,
                            scale: 1,
                            transformPerspective: 1200,
                            transformOrigin: le,
                            rotationY: se
                        }, {
                            left: 0,
                            rotationX: 0,
                            autoAlpha: 1,
                            top: 0,
                            z: 0,
                            scale: 1,
                            rotationY: 0,
                            delay: 50 * e / 500,
                            ease: m
                        }), 0)
                    }), se = 90, 1 == p && (se = -90), d.find(".slotslide").each(function(t) {
                        var i = jQuery(this);
                        h.add(punchgs.TweenLite.fromTo(i, v / 1e3, {
                            left: 0,
                            rotationX: 0,
                            top: 0,
                            z: 0,
                            scale: 1,
                            force3D: "auto",
                            transformStyle: "flat",
                            transformPerspective: 1200,
                            transformOrigin: le,
                            rotationY: 0
                        }, {
                            left: 0,
                            rotationX: r.rotate,
                            top: 0,
                            scale: 1,
                            rotationY: se,
                            delay: 50 * t / 500,
                            ease: w
                        }), 0), 23 == e && h.add(punchgs.TweenLite.fromTo(i, v / 2e3, {
                            autoAlpha: 1
                        }, {
                            autoAlpha: 0,
                            delay: 50 * t / 500 + v / 3e3,
                            ease: w
                        }), 0)
                    })
                }
                return h
            }
    }(jQuery),
    function() {
        function e(e) {
            return void 0 == e ? -1 : jQuery.isNumeric(e) ? e : e.split(":").length > 1 ? 60 * parseInt(e.split(":")[0], 0) + parseInt(e.split(":")[1], 0) : e
        }
        var t = jQuery.fn.revolution,
            i = t.is_mobile();
        jQuery.extend(!0, t, {
            resetVideo: function(t) {
                switch (t.data("videotype")) {
                    case "youtube":
                        t.data("player");
                        try {
                            if ("on" == t.data("forcerewind") && !i) o = -1 == (o = e(t.data("videostartat"))) ? 0 : o, t.data("player").seekTo(o), t.data("player").pauseVideo()
                        } catch (e) {}
                        0 == t.find(".tp-videoposter").length && punchgs.TweenLite.to(t.find("iframe"), .3, {
                            autoAlpha: 1,
                            display: "block",
                            ease: punchgs.Power3.easeInOut
                        });
                        break;
                    case "vimeo":
                        var a = $f(t.find("iframe").attr("id"));
                        try {
                            if ("on" == t.data("forcerewind") && !i) o = -1 == (o = e(t.data("videostartat"))) ? 0 : o, a.api("seekTo", o), a.api("pause")
                        } catch (e) {}
                        0 == t.find(".tp-videoposter").length && punchgs.TweenLite.to(t.find("iframe"), .3, {
                            autoAlpha: 1,
                            display: "block",
                            ease: punchgs.Power3.easeInOut
                        });
                        break;
                    case "html5":
                        if (i && 1 == t.data("disablevideoonmobile")) return !1;
                        var n = t.find("video"),
                            r = n[0];
                        if (punchgs.TweenLite.to(n, .3, {
                                autoAlpha: 1,
                                display: "block",
                                ease: punchgs.Power3.easeInOut
                            }), "on" == t.data("forcerewind") && !t.hasClass("videoisplaying")) try {
                            var o = e(t.data("videostartat"));
                            r.currentTime = -1 == o ? 0 : o
                        } catch (e) {}
                        "mute" == t.data("volume") && (r.muted = !0)
                }
            },
            stopVideo: function(e) {
                switch (e.data("videotype")) {
                    case "youtube":
                        try {
                            e.data("player").pauseVideo()
                        } catch (e) {}
                        break;
                    case "vimeo":
                        try {
                            $f(e.find("iframe").attr("id")).api("pause")
                        } catch (e) {}
                        break;
                    case "html5":
                        e.find("video")[0].pause()
                }
            },
            playVideo: function(n, o) {
                switch (clearTimeout(n.data("videoplaywait")), n.data("videotype")) {
                    case "youtube":
                        if (0 == n.find("iframe").length) n.append(n.data("videomarkup")), r(n, o, !0);
                        else if (void 0 != n.data("player").playVideo) {
                            n.data("player").playVideo(), -1 != (d = e(n.data("videostartat"))) && n.data("player").seekTo(d)
                        } else n.data("videoplaywait", setTimeout(function() {
                            t.playVideo(n, o)
                        }, 50));
                        break;
                    case "vimeo":
                        if (0 == n.find("iframe").length) n.append(n.data("videomarkup")), r(n, o, !0);
                        else if (n.hasClass("rs-apiready")) {
                            var s = n.find("iframe").attr("id"),
                                l = $f(s);
                            void 0 == l.api("play") ? n.data("videoplaywait", setTimeout(function() {
                                t.playVideo(n, o)
                            }, 50)) : setTimeout(function() {
                                l.api("play");
                                var t = e(n.data("videostartat")); - 1 != t && l.api("seekTo", t)
                            }, 510)
                        } else n.data("videoplaywait", setTimeout(function() {
                            t.playVideo(n, o)
                        }, 50));
                        break;
                    case "html5":
                        if (i && 1 == n.data("disablevideoonmobile")) return !1;
                        var d, h = n.find("video"),
                            p = h[0];
                        if (1 != h.parent().data("metaloaded")) a(p, "loadedmetadata", function(i) {
                            t.resetVideo(i, o), p.play();
                            var a = e(i.data("videostartat")); - 1 != a && (p.currentTime = a)
                        }(n));
                        else p.play(), -1 != (d = e(n.data("videostartat"))) && (p.currentTime = d)
                }
            },
            isVideoPlaying: function(e, t) {
                var i = !1;
                return void 0 != t.playingvideos && jQuery.each(t.playingvideos, function(t, a) {
                    e.attr("id") == a.attr("id") && (i = !0)
                }), i
            },
            prepareCoveredVideo: function(e, t, i) {
                var a = i.find("iframe, video"),
                    n = e.split(":")[0],
                    r = e.split(":")[1],
                    o = i.closest(".tp-revslider-slidesli"),
                    s = o.width() / o.height(),
                    l = n / r,
                    d = s / l * 100,
                    h = l / s * 100;
                s > l ? punchgs.TweenLite.to(a, .001, {
                    height: d + "%",
                    width: "100%",
                    top: -(d - 100) / 2 + "%",
                    left: "0px",
                    position: "absolute"
                }) : punchgs.TweenLite.to(a, .001, {
                    width: h + "%",
                    height: "100%",
                    left: -(h - 100) / 2 + "%",
                    top: "0px",
                    position: "absolute"
                })
            },
            checkVideoApis: function(e, t, i) {
                var a = "https:" === location.protocol ? "https" : "http";
                if ((void 0 != e.data("ytid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (t.youtubeapineeded = !0), (void 0 != e.data("ytid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && 0 == i.addedyt) {
                    t.youtubestarttime = jQuery.now(), i.addedyt = 1;
                    var n = document.createElement("script");
                    n.src = "https://www.youtube.com/iframe_api";
                    var r = document.getElementsByTagName("script")[0],
                        o = !0;
                    jQuery("head").find("*").each(function() {
                        "https://www.youtube.com/iframe_api" == jQuery(this).attr("src") && (o = !1)
                    }), o && r.parentNode.insertBefore(n, r)
                }
                if ((void 0 != e.data("vimeoid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (t.vimeoapineeded = !0), (void 0 != e.data("vimeoid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && 0 == i.addedvim) {
                    t.vimeostarttime = jQuery.now(), i.addedvim = 1;
                    var s = document.createElement("script");
                    r = document.getElementsByTagName("script")[0], o = !0;
                    s.src = a + "://f.vimeocdn.com/js/froogaloop2.min.js", jQuery("head").find("*").each(function() {
                        jQuery(this).attr("src") == a + "://a.vimeocdn.com/js/froogaloop2.min.js" && (o = !1)
                    }), o && r.parentNode.insertBefore(s, r)
                }
                return i
            },
            manageVideoLayer: function(n, s) {
                var l = n.data("videoattributes"),
                    d = n.data("ytid"),
                    h = n.data("vimeoid"),
                    p = n.data("videpreload"),
                    c = n.data("videomp4"),
                    u = n.data("videowebm"),
                    f = n.data("videoogv"),
                    g = n.data("allowfullscreenvideo"),
                    v = n.data("videocontrols"),
                    m = "http",
                    w = "loop" == n.data("videoloop") ? "loop" : "loopandnoslidestop" == n.data("videoloop") ? "loop" : "",
                    y = void 0 != c || void 0 != u ? "html5" : void 0 != d && String(d).length > 1 ? "youtube" : void 0 != h && String(h).length > 1 ? "vimeo" : "none",
                    _ = "html5" == y && 0 == n.find("video").length ? "html5" : "youtube" == y && 0 == n.find("iframe").length ? "youtube" : "vimeo" == y && 0 == n.find("iframe").length ? "vimeo" : "none";
                switch (n.data("videotype", y), _) {
                    case "html5":
                        "controls" != v && (v = "");
                        var b = '<video style="object-fit:cover;background-size:cover;visible:hidden;width:100%; height:100%" class="" ' + w + ' preload="' + p + '">';
                        void 0 != u && "firefox" == t.get_browser().toLowerCase() && (b = b + '<source src="' + u + '" type="video/webm" />'), void 0 != c && (b = b + '<source src="' + c + '" type="video/mp4" />'), void 0 != f && (b = b + '<source src="' + f + '" type="video/ogg" />'), b += "</video>";
                        var x = "";
                        ("true" === g || !0 === g) && (x = '<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div>'), "controls" == v && (b += '<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div>' + x + "</div>"), n.data("videomarkup", b), n.append(b), (i && 1 == n.data("disablevideoonmobile") || t.isIE(8)) && n.find("video").remove(), n.find("video").each(function() {
                            var e, i = jQuery(this);
                            i.parent().hasClass("html5vid") || i.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>'), 1 != i.parent().data("metaloaded") && a(this, "loadedmetadata", (o(e = n, s), void t.resetVideo(e, s)))
                        });
                        break;
                    case "youtube":
                        m = "http", "https:" === location.protocol && (m = "https"), "none" == v && (-1 == (l = l.replace("controls=1", "controls=0")).toLowerCase().indexOf("controls") && (l += "&controls=0"));
                        var T = e(n.data("videostartat")),
                            k = e(n.data("videoendat")); - 1 != T && (l = l + "&start=" + T), -1 != k && (l = l + "&end=" + k);
                        var L = l.split("origin=" + m + "://"),
                            O = "";
                        L.length > 1 ? (O = L[0] + "origin=" + m + "://", self.location.href.match(/www/gi) && !L[1].match(/www/gi) && (O += "www."), O += L[1]) : O = l;
                        var S = "true" === g || !0 === g ? "allowfullscreen" : "";
                        n.data("videomarkup", '<iframe style="visible:hidden" src="' + m + "://www.youtube.com/embed/" + d + "?" + O + '" ' + S + ' width="100%" height="100%" style="width:100%;height:100%"></iframe>');
                        break;
                    case "vimeo":
                        "https:" === location.protocol && (m = "https"), n.data("videomarkup", '<iframe style="visible:hidden" src="' + m + "://player.vimeo.com/video/" + h + "?" + l + '" width="100%" height="100%" style="100%;height:100%"></iframe>')
                }
                var P = 1 != i && "on" != n.data("posterOnMobile") && "on" != n.data("posteronmobile") || i;
                void 0 != n.data("videoposter") && n.data("videoposter").length > 2 && P ? (0 == n.find(".tp-videoposter").length && n.append('<div class="tp-videoposter noSwipe" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:3;background-image:url(' + n.data("videoposter") + '); background-size:cover;background-position:center center;"></div>'), 0 == n.find("iframe").length && n.find(".tp-videoposter").click(function() {
                    if (t.playVideo(n, s), i) {
                        if (1 == n.data("disablevideoonmobile")) return !1;
                        punchgs.TweenLite.to(n.find(".tp-videoposter"), .3, {
                            autoAlpha: 0,
                            force3D: "auto",
                            ease: punchgs.Power3.easeInOut
                        }), punchgs.TweenLite.to(n.find("iframe"), .3, {
                            autoAlpha: 1,
                            display: "block",
                            ease: punchgs.Power3.easeInOut
                        })
                    }
                })) : 0 != n.find("iframe").length || "youtube" != y && "vimeo" != y || (n.append(n.data("videomarkup")), r(n, s, !1)), "none" != n.data("dottedoverlay") && void 0 != n.data("dottedoverlay") && 1 != n.find(".tp-dottedoverlay").length && n.append('<div class="tp-dottedoverlay ' + n.data("dottedoverlay") + '"></div>'), n.addClass("HasListener"), 1 == n.data("bgvideo") && punchgs.TweenLite.set(n.find("video, iframe"), {
                    autoAlpha: 0
                })
            }
        });
        var a = function(e, t, i) {
                e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent(t, i, !1)
            },
            n = function(e, t, i) {
                var a = {};
                return a.video = e, a.videotype = t, a.settings = i, a
            },
            r = function(a, r, o) {
                var d = a.find("iframe"),
                    h = "iframe" + Math.round(1e5 * Math.random() + 1),
                    p = a.data("videoloop"),
                    c = "loopandnoslidestop" != p;
                if (p = "loop" == p || "loopandnoslidestop" == p, 1 == a.data("forcecover")) {
                    a.removeClass("fullscreenvideo").addClass("coverscreenvideo");
                    var u = a.data("aspectratio");
                    void 0 != u && u.split(":").length > 1 && t.prepareCoveredVideo(u, r, a)
                }
                if (d.attr("id", h), o && a.data("startvideonow", !0), 1 !== a.data("videolistenerexist")) switch (a.data("videotype")) {
                    case "youtube":
                        var f = new YT.Player(h, {
                            events: {
                                onStateChange: function(t) {
                                    var i = t.target.getVideoEmbedCode(),
                                        a = jQuery("#" + i.split('id="')[1].split('"')[0]),
                                        o = a.closest(".tp-simpleresponsive"),
                                        d = a.parent(),
                                        h = a.parent().data("player");
                                    if (t.data == YT.PlayerState.PLAYING) punchgs.TweenLite.to(d.find(".tp-videoposter"), .3, {
                                        autoAlpha: 0,
                                        force3D: "auto",
                                        ease: punchgs.Power3.easeInOut
                                    }), punchgs.TweenLite.to(d.find("iframe"), .3, {
                                        autoAlpha: 1,
                                        display: "block",
                                        ease: punchgs.Power3.easeInOut
                                    }), "mute" == d.data("volume") ? h.mute() : (h.unMute(), h.setVolume(parseInt(d.data("volume"), 0) || 75)), r.videoplaying = !0, s(d, r), o.trigger("stoptimer"), r.c.trigger("revolution.slide.onvideoplay", n(h, "youtube", d.data()));
                                    else {
                                        if (0 == t.data && p) {
                                            var c = e(d.data("videostartat")); - 1 != c && h.seekTo(c), h.playVideo()
                                        }(0 == t.data || 2 == t.data) && "on" == d.data("showcoveronpause") && d.find(".tp-videoposter").length > 0 && (punchgs.TweenLite.to(d.find(".tp-videoposter"), .3, {
                                            autoAlpha: 1,
                                            force3D: "auto",
                                            ease: punchgs.Power3.easeInOut
                                        }), punchgs.TweenLite.to(d.find("iframe"), .3, {
                                            autoAlpha: 0,
                                            ease: punchgs.Power3.easeInOut
                                        })), -1 != t.data && 3 != t.data && (r.videoplaying = !1, l(d, r), o.trigger("starttimer"), r.c.trigger("revolution.slide.onvideostop", n(h, "youtube", d.data()))), 0 == t.data && 1 == d.data("nextslideatend") ? (r.c.revnext(), l(d, r)) : (l(d, r), r.videoplaying = !1, o.trigger("starttimer"), r.c.trigger("revolution.slide.onvideostop", n(h, "youtube", d.data())))
                                    }
                                },
                                onReady: function(t) {
                                    var a = t.target.getVideoEmbedCode(),
                                        n = jQuery("#" + a.split('id="')[1].split('"')[0]).parent(),
                                        r = n.data("videorate");
                                    if (n.data("videostart"), n.addClass("rs-apiready"), void 0 != r && t.target.setPlaybackRate(parseFloat(r)), n.find(".tp-videoposter").unbind("click"), n.find(".tp-videoposter").click(function() {
                                            i || f.playVideo()
                                        }), n.data("startvideonow")) {
                                        n.data("player").playVideo();
                                        var o = e(n.data("videostartat")); - 1 != o && n.data("player").seekTo(o)
                                    }
                                    n.data("videolistenerexist", 1)
                                }
                            }
                        });
                        a.data("player", f);
                        break;
                    case "vimeo":
                        for (var g, v = d.attr("src"), m = {}, w = v, y = /([^&=]+)=([^&]*)/g; g = y.exec(w);) m[decodeURIComponent(g[1])] = decodeURIComponent(g[2]);
                        v = void 0 != m.player_id ? v.replace(m.player_id, h) : v + "&player_id=" + h;
                        try {
                            v = v.replace("api=0", "api=1")
                        } catch (e) {}
                        v += "&api=1", d.attr("src", v);
                        f = a.find("iframe")[0];
                        (b = (jQuery("#" + h), $f(h))).addEvent("ready", function() {
                            if (a.addClass("rs-apiready"), b.addEvent("play", function() {
                                    a.data("nextslidecalled", 0), punchgs.TweenLite.to(a.find(".tp-videoposter"), .3, {
                                        autoAlpha: 0,
                                        force3D: "auto",
                                        ease: punchgs.Power3.easeInOut
                                    }), punchgs.TweenLite.to(a.find("iframe"), .3, {
                                        autoAlpha: 1,
                                        display: "block",
                                        ease: punchgs.Power3.easeInOut
                                    }), r.c.trigger("revolution.slide.onvideoplay", n(b, "vimeo", a.data())), r.videoplaying = !0, s(a, r), c && r.c.trigger("stoptimer"), "mute" == a.data("volume") ? b.api("setVolume", "0") : b.api("setVolume", parseInt(a.data("volume"), 0) / 100 || .75)
                                }), b.addEvent("playProgress", function(t) {
                                    var i = e(a.data("videoendat"));
                                    if (0 != i && Math.abs(i - t.seconds) < .3 && i > t.seconds && 1 != a.data("nextslidecalled"))
                                        if (p) {
                                            b.api("play");
                                            var n = e(a.data("videostartat")); - 1 != n && b.api("seekTo", n)
                                        } else 1 == a.data("nextslideatend") && (a.data("nextslidecalled", 1), r.c.revnext()), b.api("pause")
                                }), b.addEvent("finish", function() {
                                    l(a, r), r.videoplaying = !1, r.c.trigger("starttimer"), r.c.trigger("revolution.slide.onvideostop", n(b, "vimeo", a.data())), 1 == a.data("nextslideatend") && r.c.revnext()
                                }), b.addEvent("pause", function() {
                                    a.find(".tp-videoposter").length > 0 && "on" == a.data("showcoveronpause") && (punchgs.TweenLite.to(a.find(".tp-videoposter"), .3, {
                                        autoAlpha: 1,
                                        force3D: "auto",
                                        ease: punchgs.Power3.easeInOut
                                    }), punchgs.TweenLite.to(a.find("iframe"), .3, {
                                        autoAlpha: 0,
                                        ease: punchgs.Power3.easeInOut
                                    })), r.videoplaying = !1, l(a, r), r.c.trigger("starttimer"), r.c.trigger("revolution.slide.onvideostop", n(b, "vimeo", a.data()))
                                }), a.find(".tp-videoposter").unbind("click"), a.find(".tp-videoposter").click(function() {
                                    return i ? void 0 : (b.api("play"), !1)
                                }), a.data("startvideonow")) {
                                b.api("play");
                                var t = e(a.data("videostartat")); - 1 != t && b.api("seekTo", t)
                            }
                            a.data("videolistenerexist", 1)
                        })
                } else {
                    var _ = e(a.data("videostartat"));
                    switch (a.data("videotype")) {
                        case "youtube":
                            o && (a.data("player").playVideo(), -1 != _ && a.data("player").seekTo());
                            break;
                        case "vimeo":
                            var b;
                            if (o)(b = $f(a.find("iframe").attr("id"))).api("play"), -1 != _ && b.api("seekTo", _)
                    }
                }
            },
            o = function(r, o) {
                if (i && 1 == r.data("disablevideoonmobile")) return !1;
                var d = r.find("video"),
                    h = d[0],
                    p = d.parent(),
                    c = r.data("videoloop"),
                    u = "loopandnoslidestop" != c;
                if (c = "loop" == c || "loopandnoslidestop" == c, p.data("metaloaded", 1), void 0 == d.attr("control") && (0 != r.find(".tp-video-play-button").length || i || r.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'), r.find("video, .tp-poster, .tp-video-play-button").click(function() {
                        r.hasClass("videoisplaying") ? h.pause() : h.play()
                    })), 1 == r.data("forcecover") || r.hasClass("fullscreenvideo"))
                    if (1 == r.data("forcecover")) {
                        p.addClass("fullcoveredvideo");
                        var f = r.data("aspectratio");
                        t.prepareCoveredVideo(f, o, r)
                    } else p.addClass("fullscreenvideo");
                var g = r.find(".tp-vid-play-pause")[0],
                    v = r.find(".tp-vid-mute")[0],
                    m = r.find(".tp-vid-full-screen")[0],
                    w = r.find(".tp-seek-bar")[0],
                    y = r.find(".tp-volume-bar")[0];
                void 0 != g && (a(g, "click", function() {
                    1 == h.paused ? h.play() : h.pause()
                }), a(v, "click", function() {
                    0 == h.muted ? (h.muted = !0, v.innerHTML = "Unmute") : (h.muted = !1, v.innerHTML = "Mute")
                }), m && a(m, "click", function() {
                    h.requestFullscreen ? h.requestFullscreen() : h.mozRequestFullScreen ? h.mozRequestFullScreen() : h.webkitRequestFullscreen && h.webkitRequestFullscreen()
                }), a(w, "change", function() {
                    var e = h.duration * (w.value / 100);
                    h.currentTime = e
                }), a(h, "timeupdate", function() {
                    var t = 100 / h.duration * h.currentTime,
                        i = e(r.data("videoendat")),
                        a = h.currentTime;
                    if (w.value = t, 0 != i && Math.abs(i - a) <= .3 && i > a && 1 != r.data("nextslidecalled"))
                        if (c) {
                            h.play();
                            var n = e(r.data("videostartat")); - 1 != n && (h.currentTime = n)
                        } else 1 == r.data("nextslideatend") && (r.data("nextslidecalled", 1), o.c.revnext()), h.pause()
                }), a(w, "mousedown", function() {
                    r.addClass("seekbardragged"), h.pause()
                }), a(w, "mouseup", function() {
                    r.removeClass("seekbardragged"), h.play()
                }), a(y, "change", function() {
                    h.volume = y.value
                })), a(h, "play", function() {
                    r.data("nextslidecalled", 0), "mute" == r.data("volume") && (h.muted = !0), r.addClass("videoisplaying"), s(r, o), u ? (o.videoplaying = !0, o.c.trigger("stoptimer"), o.c.trigger("revolution.slide.onvideoplay", n(h, "html5", r.data()))) : (o.videoplaying = !1, o.c.trigger("starttimer"), o.c.trigger("revolution.slide.onvideostop", n(h, "html5", r.data()))), punchgs.TweenLite.to(r.find(".tp-videoposter"), .3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        ease: punchgs.Power3.easeInOut
                    }), punchgs.TweenLite.to(r.find("video"), .3, {
                        autoAlpha: 1,
                        display: "block",
                        ease: punchgs.Power3.easeInOut
                    });
                    var e = r.find(".tp-vid-play-pause")[0],
                        t = r.find(".tp-vid-mute")[0];
                    void 0 != e && (e.innerHTML = "Pause"), void 0 != t && h.muted && (t.innerHTML = "Unmute")
                }), a(h, "pause", function() {
                    r.find(".tp-videoposter").length > 0 && "on" == r.data("showcoveronpause") && !r.hasClass("seekbardragged") && (punchgs.TweenLite.to(r.find(".tp-videoposter"), .3, {
                        autoAlpha: 1,
                        force3D: "auto",
                        ease: punchgs.Power3.easeInOut
                    }), punchgs.TweenLite.to(r.find("video"), .3, {
                        autoAlpha: 0,
                        ease: punchgs.Power3.easeInOut
                    })), r.removeClass("videoisplaying"), o.videoplaying = !1, l(r, o), o.c.trigger("starttimer"), o.c.trigger("revolution.slide.onvideostop", n(h, "html5", r.data()));
                    var e = r.find(".tp-vid-play-pause")[0];
                    void 0 != e && (e.innerHTML = "Play")
                }), a(h, "ended", function() {
                    l(r, o), o.videoplaying = !1, l(r, o), o.c.trigger("starttimer"), o.c.trigger("revolution.slide.onvideostop", n(h, "html5", r.data())), 1 == r.data("nextslideatend") && o.c.revnext(), r.removeClass("videoisplaying")
                })
            },
            s = function(e, i) {
                void 0 == i.playingvideos && (i.playingvideos = new Array), e.data("stopallvideos") && void 0 != i.playingvideos && i.playingvideos.length > 0 && (i.lastplayedvideos = jQuery.extend(!0, [], i.playingvideos), jQuery.each(i.playingvideos, function(e, a) {
                    t.stopVideo(a, i)
                })), i.playingvideos.push(e)
            },
            l = function(e, t) {
                void 0 != t.playingvideos && t.playingvideos.splice(jQuery.inArray(e, t.playingvideos), 1)
            }
    }(jQuery);
"use strict";

function cws_touch_events_fix() {
    is_mobile_device() && (jQuery(".container").on("mouseenter", ".hover-effect, .product .pic", function(e) {
        e.preventDefault(), jQuery(this).trigger("hover")
    }), jQuery(".features-tours-item").on("mouseenter", ".features-info-top, .features-info-bot", function(e) {
        e.preventDefault(), jQuery(this).trigger("hover")
    }), jQuery(".main-nav").on("hover", ".mobile_nav .button_open, .mobile_nav li > a", function(e) {
        e.preventDefault(), jQuery(this).trigger("click")
    }), jQuery(".recom-item .recom-media > a").each(function() {
        jQuery(this).on("click", function(e) {
            e.preventDefault()
        })
    }), jQuery(".work-filter ul.magic-line li a").on("mouseenter", function(e) {
        e.preventDefault(), jQuery(this).trigger("click")
    }))
}

function hover_disable() {
    $(".recom-item .recom-media").off("mouseenter mouseleave")
}

function search_open() {
    $(".site-top-panel .top-search").on("click", function() {
        return $(".site-top-panel").addClass("open-search"), !1
    }), $(".site-top-panel .search_menu_cont .search_back_button").on("click", function() {
        $(".site-top-panel").removeClass("open-search")
    }), $(".main-nav .inner-nav .search > a").on("click", function() {
        return $(".main-nav").addClass("open-search"), !1
    }), $(".main-nav .inner-nav .search .close-button").on("click", function() {
        $(".main-nav").removeClass("open-search")
    })
}

function init_classic_menu() {
    var e = $(".mobile_nav .mobile_menu_switcher"),
        i = $(".desktop-nav");
    height_line($(".inner-nav.desktop-nav > ul > li > a"), $(".main-nav")), e.css({
        width: $(".main-nav").height() + "px"
    }), $(".main-nav").hasClass("transparent") && $(".main-nav").addClass("js-transparent");
    $(window).scroll(function() {
        $(".sticky-wrapper").length && ($(".sticky-wrapper").hasClass("is-sticky") ? ($(".js-transparent").removeClass("transparent"), $(".main-nav, .nav-logo-wrap .logo, .mobile-nav").addClass("small-height")) : ($(".js-transparent").addClass("transparent"), $(".main-nav, .nav-logo-wrap .logo, .mobile-nav").removeClass("small-height")))
    }), e.on("click", function() {
        i.hasClass("js-opened") ? (i.slideUp("slow", "easeOutExpo").removeClass("js-opened"), $(this).removeClass("active")) : (i.slideDown("slow", "easeOutQuart").addClass("js-opened"), $(this).addClass("active"), $(".main-nav").hasClass("not-top") && $(window).scrollTo(".main-nav", "slow"))
    }), i.find("a:not(.mn-has-sub)").on("click", function() {
        e.hasClass("active") && (i.slideUp("slow", "easeOutExpo").removeClass("js-opened"), e.removeClass("active"))
    });
    var n, t = $(".mn-has-sub");

    function a() {
        $(".inner-nav").each(function() {
            $(".inner-nav").hasClass(".mobile_nav") || $(".mn-has-sub").parent("li").on({
                mouseenter: function() {
                    $(".main-nav").hasClass("mobile-on") || $(this).find(".mn-sub:first").stop(!0, !0).delay(100).fadeIn("fast")
                },
                mouseleave: function() {
                    $(".main-nav").hasClass("mobile-on") || $(this).find(".mn-sub:first").stop(!0, !0).delay(100).fadeOut("fast")
                }
            })
        })
    }
    $(".mobile-on .mn-has-sub").find(".fa:first").removeClass("fa-angle-right").addClass("fa-angle-down"), t.on("click", function() {
        if ($(".main-nav").hasClass("mobile-on")) return (n = $(this).parent("li:first")).hasClass("js-opened") ? n.find(".mn-sub:first").slideUp(function() {
            n.removeClass("js-opened"), n.find(".mn-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down")
        }) : ($(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up"), n.addClass("js-opened"), n.find(".mn-sub:first").slideDown()), !1
    }), $(window).resize(function() {
        a()
    }), a()
}

function sticky_init() {
    if (jQuery(".main-nav").length) {
        var e = jQuery(".main-nav").clone();
        jQuery("body").prepend('<div class="sticky-container"></div>');
        var i = jQuery(".sticky-container");
        i.html(e);
        var n = 0;
        jQuery(window).scroll(function(e) {
            var t = jQuery(this).scrollTop();
            t > n || t <= 120 ? i.removeClass("sticky-on") : jQuery(window).width() <= 1e3 ? i.removeClass("sticky-on") : i.addClass("sticky-on"), n = t
        })
    }
}

function height_line(e, i) {
    e.height(i.height()), e.css({
        "line-height": i.height() + "px"
    }), $(".inner-nav.desktop-nav").css("opacity", "1")
}

function init_accordion() {
    $(".accordion").each(function() {
        var e = $(this).children(".content").hide();
        e.first().slideDown("easeOutExpo"), $(this).children(".content-title").first().addClass("active"), $(this).children(".content-title").on("click", function() {
            var i = $(this).next(".content");
            return $(this).parent().children(".content-title").removeClass("active"), $(this).addClass("active"), e.not(i).slideUp("easeInExpo"), $(this).next().slideDown("easeOutExpo"), !1
        })
    })
}

function init_toggle() {
    $(".toggle > .content").hide(), $(".toggle > .content-title.active").next().slideDown(), $(".toggle > .content-title").on("click", function() {
        if ($(this).hasClass("active")) $(this).next().slideUp("easeOutExpo"), $(this).removeClass("active");
        else {
            $(this).next(".content");
            $(this).addClass("active"), $(this).next().slideDown("easeOutExpo")
        }
        return !1
    })
}
$(document).ready(function() {
    scroll_top(), sticky_init(), hover_disable(), init_classic_menu(), init_accordion(), init_toggle(), counter(), $(window).on("scroll", progress_bar_loader), cws_page_focus(), progress_bar_loader(), init_twitter_carusel(), init_fancy(), search_open(), $(".cws_prlx_section").length && $(".cws_prlx_section").cws_prlx(), init_rev_slider(), init_add_cart(), init_color_filter(), $(".price_slider_wrapper").length && woocommerce_price_slider($), video_img(), cws_touch_events_fix(), masonry_init(), filter_init(), gridList_init(), popup_login_init(), magicline_main_init(), footer_height(), search_form_height(), search_form_click(), search_tours_form_resize(), slider_info_mob(), scrollTo_init(), flexslider_init(), add_button_menu(), mobile_menu_controller_init(), $(".isotope-grid").length && init_isotop()
}), $(window).resize(function() {
    $(".isotope-grid").length && init_isotop(), masonry_init(), search_form_height(), search_tours_form_resize(), slider_info_mob(), footer_height(), cws_touch_events_fix()
});
var is_count = !0;

function counter() {
    if ($(".counter").length) {
        var e = $(window).scrollTop(),
            i = $(window).height(),
            n = $(".counter").offset().top;
        $(window).on("scroll", function() {
            e = $(window).scrollTop(), i = $(window).height(), n = $(".counter").offset().top, e + i > n && is_count && ($(".counter").each(function() {
                var e, i = $(this).attr("data-count"),
                    n = $(this),
                    t = 0;
                n.text(t);
                var a = setInterval(function() {
                    i - (t += e = i / 70) < e && (t = i), n.text(Math.floor(t)), t == i && clearInterval(a)
                }, 50)
            }), is_count = !1)
        })
    }
}

function progress_bar_loader() {
    is_mobile_device() ? $(".skill-bar-progress").each(function() {
        var e = this,
            i = $(e).attr("data-value"),
            n = $(e).parent().parent().find(".skill-bar-perc");
        $(e).css("width", i + "%"), $(n).text(i + "%")
    }) : $(".skill-bar-progress").each(function() {
        var e = this;
        if (is_visible(e) && "true" != $(e).attr("processed")) {
            $(e).css("width", "0%"), $(e).attr("processed", "true");
            var i = parseInt($(e).attr("data-value"), 10),
                n = 0;
            setInterval(function() {
                if (n < i) {
                    n += 1, $(e).css("width", String(n) + "%");
                    var t = $(e).parent().parent().find(".skill-bar-perc");
                    $(t).text(n + "%")
                }
            }, 10 / (i / 100))
        }
    })
}

function is_visible(e) {
    var i = $(window).height(),
        n = $(e).offset().top - $(window).scrollTop();
    return n > 0 && n < i
}

function is_mobile_device() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

function video_img() {
    if (is_mobile_device()) {
        var e = $(".row_bg_video").attr("data-img-url");
        $(".row_bg_video").css({
            "background-image": "url(" + e + ")"
        }), $(".row_bg_video").children().hide()
    }
}
$(".tabs .tabs-btn").on("click", function() {
    var e = $(this).attr("data-tabs-id"),
        i = $(this).parents(".tabs").find(".container-tabs"),
        n = $(".tabs [data-tabs-id=cont-" + e + "]");
    $(n).addClass("active").siblings(".container-tabs").removeClass("active"), $(i).fadeOut(0), $(n).fadeIn(300), $(this).addClass("active").siblings(".tabs-btn").removeClass("active")
});
var owl_one = $(".owl-one-item");
jQuery(owl_one).each(function() {
    jQuery(this).owlCarousel({
        itemsCustom: [
            [0, 1],
            [479, 1],
            [738, 1],
            [980, 1],
            [1170, 1]
        ],
        navigation: !1,
        pagination: !1
    });
    var e = $(this);
    $(this).parent().parent().find(".carousel-nav .next").on("click", function() {
        e.trigger("owl.next")
    }), jQuery(this).parent().parent().find(".carousel-nav .prev").on("click", function() {
        e.trigger("owl.prev")
    })
});
var owl_two = $(".owl-two-item");
jQuery(owl_two).each(function() {
    jQuery(this).owlCarousel({
        itemsCustom: [
            [0, 1],
            [479, 1],
            [630, 2],
            [980, 2],
            [1170, 2]
        ],
        navigation: !1,
        pagination: !1
    });
    var e = $(this);
    $(this).parent().parent().find(".carousel-nav .next").on("click", function() {
        e.trigger("owl.next")
    }), jQuery(this).parent().parent().find(".carousel-nav .prev").on("click", function() {
        e.trigger("owl.prev")
    })
});
var owl_three = $(".owl-three-item");
jQuery(owl_three).each(function() {
    jQuery(this).owlCarousel({
        itemsCustom: [
            [0, 1],
            [430, 1],
            [767, 2],
            [980, 3],
            [1170, 3]
        ],
        navigation: !0,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: !1
    });
    var e = $(this);
    $(this).parent().parent().find(".carousel-nav .next").on("click", function() {
        e.trigger("owl.next")
    }), jQuery(this).parent().parent().find(".carousel-nav .prev").on("click", function() {
        e.trigger("owl.prev")
    })
});
var owl_three_small = $(".owl-three-item-small");
jQuery(owl_three_small).each(function() {
    jQuery(this).owlCarousel({
        itemsCustom: [
            [0, 1],
            [540, 2],
            [767, 2],
            [980, 3],
            [1170, 3]
        ],
        navigation: !0,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: !1
    });
    var e = $(this);
    $(this).parent().parent().find(".carousel-nav .next").on("click", function() {
        e.trigger("owl.next")
    }), jQuery(this).parent().parent().find(".carousel-nav .prev").on("click", function() {
        e.trigger("owl.prev")
    })
});
var owl_four = $(".owl-four-item");
jQuery(owl_four).each(function() {
    jQuery(this).owlCarousel({
        itemsCustom: [
            [0, 1],
            [479, 2],
            [738, 2],
            [980, 3],
            [1170, 4]
        ],
        navigation: !1,
        pagination: !1
    });
    var e = $(this);
    $(this).parent().parent().find(".carousel-nav .next").on("click", function() {
        e.trigger("owl.next")
    }), jQuery(this).parent().parent().find(".carousel-nav .prev").on("click", function() {
        e.trigger("owl.prev")
    })
});
var owl_single = $(".owl-single-item");

function init_twitter_carusel() {
    if ($(".twitter-1").length) {
        $(".twitter-1").tweet({
            username: "Creative_WS",
            count: 3,
            loading_text: "loading twitter feed...",
            template: "<i class='fa fa-twitter twitt-icon'></i><p><a href='{user_url}'>@{screen_name}</a>{join}{text}<br>{time}</p>"
        }), $(".twitter-1.full-screen .tweet_list").addClass("carousel-pag main-color");
        var e = $(".carousel-pag");
        jQuery(e).each(function() {
            jQuery(this).owlCarousel({
                itemsCustom: [
                    [0, 1],
                    [479, 1],
                    [738, 1],
                    [980, 1],
                    [1170, 1]
                ],
                navigation: !1,
                pagination: !0
            })
        })
    }
    $(".twitter-footer").tweet({
        username: "Creative_WS",
        count: 1,
        loading_text: "loading twitter feed...",
        template: "<i class='fa fa-twitter twitt'></i><p><a class='link-color' href='{user_url}'>@{screen_name}</a>{join}{text}<br>{time}</p>"
    })
}
jQuery(owl_single).each(function() {
    jQuery(this).owlCarousel({
        itemsCustom: [
            [0, 1],
            [479, 1],
            [738, 1],
            [980, 1],
            [1170, 1]
        ],
        autoHeight: !0,
        navigation: !0,
        pagination: !1
    })
});
var owl_pag = $(".carousel-pag");
jQuery(owl_pag).each(function() {
    jQuery(this).owlCarousel({
        itemsCustom: [
            [0, 1],
            [479, 1],
            [738, 1],
            [980, 1],
            [1170, 1]
        ],
        navigation: !1,
        pagination: !0
    })
});
owl_single = $(".owl-two-pag");
jQuery(owl_single).each(function() {
    jQuery(this).owlCarousel({
        itemsCustom: [
            [0, 1],
            [479, 2],
            [585, 1],
            [980, 1],
            [1200, 2]
        ],
        navigation: !1,
        pagination: !0
    })
});
owl_single = $(".owl-three-pag");

function init_fancy() {
    var e = $(".fancy");
    e.length && (e.fancybox(), $(".fancybox").fancybox({
        helpers: {
            media: {}
        }
    }))
}

function masonry_init() {
    $(".masonry").imagesLoaded(function() {})
}

function filter_init() {
    var e, i = 0;
    e = $("#filter-grid").hasClass("masonry") ? "masonry" : "fitRows", $("#filter-grid").imagesLoaded(function() {}), $(".filter").on("click", function() {
        $(".filter").removeClass("active"), $(this).addClass("active"), i = $(this).attr("data-filter"), $("#filter-grid").isotope({
            itemSelector: ".all",
            layoutMode: e,
            filter: i
        })
    })
}

function init_isotop() {
    var e = $(".isotope-grid");
    if ($(".isotope-grid").isotope({
            itemSelector: ".isotope-grid .isotope-item",
            columnWidth: ".isotope-item",
            masonry: {}
        }), jQuery(".filter-buttons a.active").length) {
        var i = jQuery(".filter-buttons a.active").attr("data-filter");
        e.isotope({
            filter: i
        })
    }
    $(".filter-buttons").on("click", "a", function() {
        return $(".isotope-grid").isotope({
            filter: $(this).data("filter")
        }), $(this).addClass("active").siblings().removeClass("active"), !1
    })
}

function init_rev_slider() {
    $(".tp-banner, .tp-banner-slider").on("revolution.slide.onloaded", function(e) {
        $(".tp-banner, .tp-banner-slider").css("opacity", "1")
    }), $(".tp-banner").length && $(".tp-banner").revolution({
        dottedOverlay: "custom",
        delay: 8e3,
        startwidth: 1170,
        startheight: 700,
        lazyLoad: "on",
        responsiveLevels: [4096, 1025, 778, 480],
        hideThumbs: 1e3,
        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 5,
        navigation: {
            arrows: {
                enable: !0
            }
        },
        touchenabled: "on",
        onHoverStop: "on",
        swipe_velocity: .7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: !1,
        keyboardNavigation: "off",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 0,
        navigationVOffset: 20,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,
        shadow: 0,
        fullWidth: "off",
        fullScreen: "on",
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        forceFullWidth: "off",
        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off",
        hideThumbsUnderResolution: 0,
        startWithSlide: 0,
        disableProgressBar: "on"
    }), $(".tp-banner-slider").length && $(".tp-banner-slider").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        navigation: {
            arrows: {
                enable: !0,
                left: {
                    container: "slider",
                    h_align: "left",
                    v_align: "center",
                    h_offset: 0,
                    v_offset: 0
                },
                right: {
                    container: "slider",
                    h_align: "right",
                    v_align: "center",
                    h_offset: 0,
                    v_offset: 0
                }
            }
        },
        gridwidth: 1170,
        gridheight: 700,
        dottedOverlay: "custom",
        lazyLoad: "on",
        responsiveLevels: [4096, 1025, 778, 480],
        delay: 8e3,
        parallax: {
            type: "mouse",
            origo: "slidercenter",
            speed: 2e3,
            levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55]
        },
        touchenabled: "on",
        onHoverStop: "on",
        startWithSlide: 0,
        disableProgressBar: "on",
        hideArrowsOnMobile: "off"
    })
}

function init_add_cart() {
    $(".add-to-cart").on("click", function() {
        return $(this).parents(".price-review").addClass("added"), !1
    })
}

function init_color_filter() {
    $(".color-filter li, .brand-filter li").on("click", function() {
        return $(this).addClass("active").siblings().removeClass("active"), !1
    })
}

function woocommerce_price_slider() {
    var e, i;
    if (window.woocommerce_price_slider_params = {
            currency_pos: "right",
            currency_symbol: "<sup>$</sup>"
        }, "undefined" == typeof woocommerce_price_slider_params) return !1;
    $("input#min_price, input#max_price").hide(), $(".price_slider, .price_label").show();
    var n = $(".price_slider_amount #min_price").data("min"),
        t = $(".price_slider_amount #max_price").data("max");
    e = parseInt(n, 10), i = parseInt(t, 10), woocommerce_price_slider_params.min_price && (e = parseInt(woocommerce_price_slider_params.min_price, 10)), woocommerce_price_slider_params.max_price && (i = parseInt(woocommerce_price_slider_params.max_price, 10)), $("body").on("price_slider_create price_slider_slide", function(e, i, n) {
        var t, a;
        switch (woocommerce_price_slider_params.currency_pos) {
            case "left":
                t = woocommerce_price_slider_params.currency_symbol + i, a = woocommerce_price_slider_params.currency_symbol + n;
                break;
            case "left_space":
                t = woocommerce_price_slider_params.currency_symbol + " " + i, a = woocommerce_price_slider_params.currency_symbol + " " + n;
                break;
            case "right":
                t = i + woocommerce_price_slider_params.currency_symbol, a = n + woocommerce_price_slider_params.currency_symbol;
                break;
            case "right_space":
                t = i + " " + woocommerce_price_slider_params.currency_symbol, a = n + " " + woocommerce_price_slider_params.currency_symbol
        }
        $(".price_slider_amount span.from").html(t), $(".price_slider_amount span.to").html(a), $("body").trigger("price_slider_updated", i, n)
    }), $(".price_slider").slider({
        range: !0,
        animate: !0,
        min: n,
        max: t,
        values: [e, i],
        create: function(n, t) {
            $(".price_slider_amount #min_price").val(e), $(".price_slider_amount #max_price").val(i), $("body").trigger("price_slider_create", [e, i])
        },
        slide: function(e, i) {
            $("input#min_price").val(i.values[0]), $("input#max_price").val(i.values[1]), $("body").trigger("price_slider_slide", [i.values[0], i.values[1]])
        },
        change: function(e, i) {
            $("body").trigger("price_slider_change", [i.values[0], i.values[1]])
        }
    })
}

function show_address() {
    document.getElementById("ship-to-different-address-checkbox").checked ? $(".shipping_address").show() : $(".shipping_address").hide()
}
if (jQuery(owl_single).each(function() {
        jQuery(this).owlCarousel({
            itemsCustom: [
                [0, 1],
                [479, 1],
                [738, 2],
                [980, 2],
                [1170, 3]
            ],
            navigation: !1,
            pagination: !0
        })
    }), $("#calendar").length && $("#calendar").datepicker({
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>',
        firstDay: 1,
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    }), $("#ship-to-different-address-checkbox").length && ($("#ship-to-different-address-checkbox").on("click", show_address), show_address()), $(".woocommerce-checkout").length && $(".input-radio").on("click", function() {
        switch ($(".payment_box.payment_method_paypal").slideUp(400), $(".payment_box.payment_method_bacs").slideUp(400), $(".payment_box.payment_method_cheque").slideUp(400), !0) {
            case document.getElementById("payment_method_bacs").checked:
                $(".payment_box.payment_method_bacs").slideDown(400);
                break;
            case document.getElementById("payment_method_cheque").checked:
                $(".payment_box.payment_method_cheque").slideDown(400);
                break;
            case document.getElementById("payment_method_paypal").checked:
                $(".payment_box.payment_method_paypal").slideDown(400)
        }
    }), $(".contact-form").length) {
    $(".contact-form").each(function() {
        $(this).validate({
            onkeyup: !1,
            onfocusout: !1,
            errorElement: "p",
            errorLabelContainer: $(this).parent().children(".alert.alert-danger").children(".message"),
            rules: {
                name: {
                    required: !0
                },
                email: {
                    required: !0,
                    email: !0
                },
                message: {
                    required: !0
                }
            },
            messages: {
                name: {
                    required: "Please enter your name"
                },
                email: {
                    required: "Please enter your email address",
                    email: "Please enter a VALID email address"
                },
                message: {
                    required: "Please enter your message"
                }
            },
            invalidHandler: function() {
                $(this).parent().children(".alert.alert-danger").slideDown("fast"), $("#feedback-form-success").slideUp("fast")
            },
            submitHandler: function(e) {
                $(e).parent().children(".alert.alert-danger").slideUp("fast");
                var i = $(e).ajaxSubmit();
                submit_handler(i, $(e).parent().children(".email_server_responce"))
            }
        })
    });
    var submit_handler = function(e, i) {
        var n = $(i);
        n.css("display", "block");
        var t = {
            action: "email_server_responce",
            values: $(e).serialize()
        };
        return $.post("php/contacts-process.php", t, function(i) {
            "success" == (i = $.parseJSON(i)).info ? (n.addClass("message message-success").append('<div role="alert" class="alert alert-success alt alert-dismissible fade in"><button type="button" data-dismiss="alert" aria-label="Close" class="close"></button><i class="alert-icon flaticon-suntour-check"></i><strong>Success!</strong><br>Your message was successfully delivered.</div>'), n.delay(5e3).slideUp(300, function() {
                $(this).removeClass("message message-success").text("").fadeOut(500), n.css("display", "none")
            }), $(e)[0].reset()) : (n.addClass("message message-error").append('<div role="alert" class="alert alert-warning alt alert-dismissible fade in"><button type="button" data-dismiss="alert" aria-label="Close" class="close"></button><i class="alert-icon flaticon-warning"></i><strong>Error!</strong><br>Server fail! Please try again later!</div>'), n.delay(5e3).hide(500, function() {
                $(this).removeClass("message message-success").text("").fadeIn(500), n.css("display", "none")
            }))
        }), !1
    };
    $("form.form.contact-form").on("click", function() {
        $(this).find("p.error").remove()
    })
}

function mobile_menu_controller_init() {
    window.mobile_nav = {
        is_mobile_menu: !1,
        nav_obj: jQuery("header .inner-nav>ul").clone(),
        level: 1,
        current_id: !1,
        next_id: !1,
        prev_id: "",
        animation_params: {
            vertical_start: 100,
            vertical_end: 0,
            horizontal_start: 0,
            horizontal_end: 200,
            speed: 300
        }
    }, mobile_menu_controller(), jQuery(window).resize(function() {
        mobile_menu_controller()
    }), mobile_nav_switcher_init()
}

function mobile_nav_switcher_init() {
    var e = jQuery("nav .inner-nav");
    jQuery(document).on("click", "header nav .inner-nav.mobile_nav .mobile_menu_switcher", function() {
        var i = get_current_nav_level(),
            n = "opened";
        e.hasClass(n) ? i.stop().animate({
            "margin-top": window.mobile_nav.animation_params.vertical_start + "px",
            opacity: 0
        }, window.mobile_nav.animation_params.speed, function() {
            e.removeClass(n)
        }) : (e.addClass(n), i.stop().animate({
            "margin-top": window.mobile_nav.animation_params.vertical_end + "px",
            opacity: 1
        }, window.mobile_nav.animation_params.speed))
    })
}

function mobile_nav_handlers_init() {
    jQuery("header nav .inner-nav.mobile_nav .button_open,.PopularAirMenu").on("click", function (e) {
        var i = jQuery(this).closest("li").attr("id"),
            n = get_current_nav_level(),
            t = get_next_nav_level(i);
        n.animate({
            right: window.mobile_nav.animation_params.horizontal_end + "px",
            opacity: 0
        }, window.mobile_nav.animation_params.speed, function() {
            n.remove(), jQuery("header nav .inner-nav").append(t), t.css({
                "margin-top": window.mobile_nav.animation_params.vertical_end + "px",
                right: "-" + window.mobile_nav.animation_params.horizontal_end + "px",
                opacity: 0
            }), t.animate({
                right: window.mobile_nav.animation_params.horizontal_start + "px",
                opacity: 1
            }, window.mobile_nav.animation_params.speed), window.mobile_nav.current_id = i, window.mobile_nav.level++, mobile_nav_handlers_init()
        })
    }), jQuery("header nav .inner-nav.mobile_nav .back>a").on("click", function() {
        $(".mobiledestmenu").hide();
        var e = get_current_nav_level(),
            i = get_prev_nav_level();
        return e.animate({
            right: "-" + window.mobile_nav.animation_params.horizontal_end + "px",
            opacity: 0
        }, window.mobile_nav.animation_params.speed, function() {
            e.remove(), jQuery("header nav .inner-nav").append(i), i.css({
                "margin-top": window.mobile_nav.animation_params.vertical_end + "px",
                right: window.mobile_nav.animation_params.horizontal_end + "px",
                opacity: 0
            }), i.animate({
                right: window.mobile_nav.animation_params.horizontal_start + "px",
                opacity: 1
            }, window.mobile_nav.animation_params.speed), window.mobile_nav.level--, mobile_nav_handlers_init()
        }), !1
    })
}

function get_current_nav_level() {
    var e = window.mobile_nav.level < 2 ? jQuery("header nav .inner-nav>ul") : jQuery("header nav .inner-nav ul");
    return e.find("ul").remove(), e
}

function get_next_nav_level(e) {
    var i = window.mobile_nav.nav_obj.find("#" + e).children("ul").first().clone();
    return i.find("ul").remove(), i
}

function get_prev_nav_level() {
    var e = {};
    return window.mobile_nav.level > 2 ? (e = window.mobile_nav.nav_obj.find("#" + window.mobile_nav.current_id).parent("ul").parent("li"), window.mobile_nav.current_id = e.attr("id"), e = e.children("ul").first()) : (e = window.mobile_nav.nav_obj, window.mobile_nav.current_id = !1), (e = e.clone()).find("ul").remove(), e
}

function mobile_menu_controller() {
    var e = is_mobile();
    e && !window.mobile_nav.is_mobile_menu ? set_mobile_menu() : !e && window.mobile_nav.is_mobile_menu && reset_mobile_menu()
}

function set_mobile_menu() {
    var e = get_current_nav_level();
    $("header nav .inner-nav").addClass("mobile_nav"), $("header .sticky-menu").addClass("mobile"), $("header .inner-nav").removeClass("scrolling, desktop-nav"), e.css({
        "margin-top": window.mobile_nav.animation_params.vertical_start + "px"
    }), window.mobile_nav.is_mobile_menu = !0, mobile_nav_handlers_init()
}

function reset_mobile_menu() {
    var e = get_current_nav_level();
    $("header nav .inner-nav").removeClass("mobile_nav opened").addClass("desktop-nav"), $("header .sticky-menu").removeClass("mobile"), e.removeAttr("style"), window.mobile_nav.is_mobile_menu = !1, e.remove(), reset_mobile_nav_params()
}

function reset_mobile_nav_params() {
    jQuery("header nav .inner-nav").append(window.mobile_nav.nav_obj.clone()), window.mobile_nav.level = 1, window.mobile_nav.current_id = !1, window.mobile_nav.next_id = !1
}

function is_mobile() {
    return $(window).width() < 992 || navigator.userAgent.match(/(Android|iPhone|iPod|iPad)/)
}

function add_button_menu() {
    for (var e = $("header nav .inner-nav>ul").find("li"), i = 0; i < $("header nav .inner-nav>ul").find("li").length; i++) $(e[i]).attr("id", "menu-item-" + i);
    $("header nav .inner-nav").append("<i class='mobile_menu_switcher'></i>"), $("header nav .inner-nav>ul ul").each(function() {
        var e = document.createElement("li");
        $(e).attr("class", "back"), e.innerHTML = "<a href='#'>Back</a>", this.insertBefore(e, this.firstElementChild)
    }), $("header nav .inner-nav li").each(function() {
        $(this).children("ul").length > 0 && $(this).append("<span class='button_open'></span>")
    })
}

function cws_page_focus() {
    document.getElementsByTagName("html")[0].setAttribute("data-focus-chek", "focused"), window.addEventListener("focus", function() {
        document.getElementsByTagName("html")[0].setAttribute("data-focus-chek", "focused")
    }), window.addEventListener("blur", function() {
        document.getElementsByTagName("html")[0].removeAttribute("data-focus-chek")
    })
}

function scroll_top() {
    $("#scroll-top").on("click", function() {
        return $("html, body").animate({
            scrollTop: 0
        }), !1
    }), $(window).scrollTop() > 700 ? $("#scroll-top").fadeIn() : $("#scroll-top").fadeOut(), $(window).scroll(function() {
        $(window).scrollTop() > 700 ? $("#scroll-top").fadeIn() : $("#scroll-top").fadeOut()
    })
}

function gridList_init() {
    $("#list-grid>div").on("click", function() {
        if ($(this).addClass("active").siblings().removeClass("active"), $(this).hasClass("grid-view")) {
            if ($(".list-grid-view .products").hasClass("grid-view")) return !1;
            $(".list-grid-view .products").fadeOut(300, function() {
                $(".list-grid-view .products").addClass("grid-view").removeClass("list-view").fadeIn(300)
            })
        }
        if ($(this).hasClass("list-view")) {
            if ($(".list-grid-view .products").hasClass("list-view")) return !1;
            $(".list-grid-view .products").fadeOut(300, function() {
                $(".list-grid-view .products").addClass("list-view").removeClass("grid-view").fadeIn(300)
            })
        }
    })
}

function popup_login_init() {
    $(".top-login").on("click", function() {
        $(".login-popup").addClass("open")
    }), $(".login-popup .close-button").on("click", function() {
        $(".login-popup").removeClass("open")
    })
}

function magicline_main_init() {
    if ($(".menu-widget").length) {
        $(".magic-line").append("<li id='magic-line'></li>");
        var e = function() {
            var e, i, n, t = $("#magic-line");
            t.width($(".current_item").width()).css("left", $(".current_item a").position().left).data("origLeft", t.position().left).data("origWidth", t.width()), $(".magic-line li").find("a").on({
                mouseenter: function() {
                    e = $(this), i = e.position().left, n = e.parent().width(), t.stop().animate({
                        left: i,
                        width: n
                    })
                },
                mouseleave: function() {
                    t.stop().animate({
                        left: t.data("origLeft"),
                        width: t.data("origWidth")
                    })
                }
            })
        };
        e(), $(".menu-widget").hasClass("with-switch") && $(".menu-widget ul li").on("click", function(i) {
            i.preventDefault(), $(this).siblings().removeClass("current_item"), $(this).addClass("current_item"), e()
        })
    }
}

function footer_height() {
    var e = $(".footer").outerHeight();
    $(window).width() > 992 && $(".footer").hasClass("footer-fixed") ? ($(".footer.footer-fixed").addClass("fixed"), $("body").css("margin-bottom", " " + e + "px")) : ($("body").css("margin-bottom", "0px"), $(".footer.footer-fixed").removeClass("fixed"));
    var i = 1.5 * e;
    $(window).height() < i && ($("body").css("margin-bottom", "0px"), $(".footer.footer-fixed").removeClass("fixed"))
}

function search_form_height() {
    var e = $(".search-tours-wrap .tours-container.active").outerHeight();
    $(".search-tours-content").css({
        height: +e + "px"
    })
}

function search_form_click() {
    $(".tours-tab-btn").each(function() {
        $(this).on("click", function() {
            $(this).siblings().removeClass("active"), $(this).addClass("active");
            var e = $(this).attr("data-tours-cat"),
                i = $(this).parents(".search-tours-wrap").find(".tours-container"),
                n = $(".search-tours-wrap [data-tours-cat=" + e + "]");
            $(n).addClass("active").siblings(".tours-container").removeClass("active"), $(i).fadeOut(0), $(n).fadeIn(600), $(this).addClass("active").siblings(".tours-tab-btn").removeClass("active");
            var t = $(".search-tours-wrap .tours-container.active").outerHeight();
            $(".search-tours-content").css({
                height: +t + "px"
            })
        })
    }), $(document).on("click", ".tours-calendar span", function() {
        $(this).siblings(".calendar-widget").toggleClass("active").fadeToggle("fast"), $(this).parent().siblings(".tours-calendar").find(".calendar-widget").hasClass("active") && $(this).parent().siblings(".tours-calendar").find(".calendar-widget").removeClass("active").css("display", "none")
    })
}

function search_tours_form_resize() {
    $(window).width() <= 991 ? ($(".search-tours-form").addClass("mob-search-form"), $(".search-tours-form .search-tours-wrap").parent().removeClass("container")) : ($(".search-tours-form").removeClass("mob-search-form"), $(".search-tours-form .search-tours-wrap").parent().addClass("container"))
}

function slider_info_mob() {
    $(window).width() <= 980 ? $(".slider-info-item").addClass("mobile-on") : $(".slider-info-item").removeClass("mobile-on").removeClass("active")
}

function scrollTo_init() {
    var e, i;
    $("a.scrollto").on("click", function() {
        return e = jQuery(this).attr("href"), i = jQuery(e).offset().top, $("html:not(:animated),body:not(:animated)").animate({
            scrollTop: i
        }, 500), !1
    })
}

function flexslider_init() {
    $("#flex-carousel").flexslider({
        animation: "slide",
        controlNav: !1,
        animationLoop: !1,
        slideshow: !1,
        itemWidth: 130,
        itemMargin: 5,
        asNavFor: "#flex-slider"
    }), $("#flex-slider").flexslider({
        animation: "slide",
        controlNav: !1,
        animationLoop: !1,
        slideshow: !1,
        sync: "#flex-carousel"
    })
}
$(".slider-info-item").each(function() {
    $(this).on("click", function() {
        $(".slider-info-item").hasClass("mobile-on") && $(this).toggleClass("active").siblings(".slider-info-item").removeClass("active")
    })
}), $(".imgholder").on("click", function () {
    ClearGetInTouch();
    $(".callicon").toggleClass("openform")
}), $(".closeicon").on("click", function (e) {
    ClearGetInTouch();
    $(this).parent().hide();
});
(function(w) {
    "use strict";
    var respond = {};
    w.respond = respond;
    respond.update = function() {};
    var requestQueue = [],
        xmlHttp = (function() {
            var xmlhttpmethod = false;
            try {
                xmlhttpmethod = new w.XMLHttpRequest();
            } catch (e) {
                xmlhttpmethod = new w.ActiveXObject("Microsoft.XMLHTTP");
            }
            return function() {
                return xmlhttpmethod;
            };
        })(),
        ajax = function(url, callback) {
            var req = xmlHttp();
            if (!req) {
                return;
            }
            req.open("GET", url, true);
            req.onreadystatechange = function() {
                if (req.readyState !== 4 || req.status !== 200 && req.status !== 304) {
                    return;
                }
                callback(req.responseText);
            };
            if (req.readyState === 4) {
                return;
            }
            req.send(null);
        },
        isUnsupportedMediaQuery = function(query) {
            return query.replace(respond.regex.minmaxwh, '').match(respond.regex.other);
        };
    respond.ajax = ajax;
    respond.queue = requestQueue;
    respond.unsupportedmq = isUnsupportedMediaQuery;
    respond.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
        other: /\([^\)]*\)/g
    };
    respond.mediaQueriesSupported = w.matchMedia && w.matchMedia("only all") !== null && w.matchMedia("only all").matches;
    if (respond.mediaQueriesSupported) {
        return;
    }
    var doc = w.document,
        docElem = doc.documentElement,
        mediastyles = [],
        rules = [],
        appendedEls = [],
        parsedSheets = {},
        resizeThrottle = 30,
        head = doc.getElementsByTagName("head")[0] || docElem,
        base = doc.getElementsByTagName("base")[0],
        links = head.getElementsByTagName("link"),
        lastCall, resizeDefer, eminpx, getEmValue = function() {
            var ret, div = doc.createElement('div'),
                body = doc.body,
                originalHTMLFontSize = docElem.style.fontSize,
                originalBodyFontSize = body && body.style.fontSize,
                fakeUsed = false;
            div.style.cssText = "position:absolute;font-size:1em;width:1em";
            if (!body) {
                body = fakeUsed = doc.createElement("body");
                body.style.background = "none";
            }
            docElem.style.fontSize = "100%";
            body.style.fontSize = "100%";
            body.appendChild(div);
            if (fakeUsed) {
                docElem.insertBefore(body, docElem.firstChild);
            }
            ret = div.offsetWidth;
            if (fakeUsed) {
                docElem.removeChild(body);
            } else {
                body.removeChild(div);
            }
            docElem.style.fontSize = originalHTMLFontSize;
            if (originalBodyFontSize) {
                body.style.fontSize = originalBodyFontSize;
            }
            ret = eminpx = parseFloat(ret);
            return ret;
        },
        applyMedia = function(fromResize) {
            var name = "clientWidth",
                docElemProp = docElem[name],
                currWidth = doc.compatMode === "CSS1Compat" && docElemProp || doc.body[name] || docElemProp,
                styleBlocks = {},
                lastLink = links[links.length - 1],
                now = (new Date()).getTime();
            if (fromResize && lastCall && now - lastCall < resizeThrottle) {
                w.clearTimeout(resizeDefer);
                resizeDefer = w.setTimeout(applyMedia, resizeThrottle);
                return;
            } else {
                lastCall = now;
            }
            for (var i in mediastyles) {
                if (mediastyles.hasOwnProperty(i)) {
                    var thisstyle = mediastyles[i],
                        min = thisstyle.minw,
                        max = thisstyle.maxw,
                        minnull = min === null,
                        maxnull = max === null,
                        em = "em";
                    if (!!min) {
                        min = parseFloat(min) * (min.indexOf(em) > -1 ? (eminpx || getEmValue()) : 1);
                    }
                    if (!!max) {
                        max = parseFloat(max) * (max.indexOf(em) > -1 ? (eminpx || getEmValue()) : 1);
                    }
                    if (!thisstyle.hasquery || (!minnull || !maxnull) && (minnull || currWidth >= min) && (maxnull || currWidth <= max)) {
                        if (!styleBlocks[thisstyle.media]) {
                            styleBlocks[thisstyle.media] = [];
                        }
                        styleBlocks[thisstyle.media].push(rules[thisstyle.rules]);
                    }
                }
            }
            for (var j in appendedEls) {
                if (appendedEls.hasOwnProperty(j)) {
                    if (appendedEls[j] && appendedEls[j].parentNode === head) {
                        head.removeChild(appendedEls[j]);
                    }
                }
            }
            appendedEls.length = 0;
            for (var k in styleBlocks) {
                if (styleBlocks.hasOwnProperty(k)) {
                    var ss = doc.createElement("style"),
                        css = styleBlocks[k].join("\n");
                    ss.type = "text/css";
                    ss.media = k;
                    head.insertBefore(ss, lastLink.nextSibling);
                    if (ss.styleSheet) {
                        ss.styleSheet.cssText = css;
                    } else {
                        ss.appendChild(doc.createTextNode(css));
                    }
                    appendedEls.push(ss);
                }
            }
        },
        translate = function(styles, href, media) {
            var qs = styles.replace(respond.regex.comments, '').replace(respond.regex.keyframes, '').match(respond.regex.media),
                ql = qs && qs.length || 0;
            href = href.substring(0, href.lastIndexOf("/"));
            var repUrls = function(css) {
                    return css.replace(respond.regex.urls, "$1" + href + "$2$3");
                },
                useMedia = !ql && media;
            if (href.length) {
                href += "/";
            }
            if (useMedia) {
                ql = 1;
            }
            for (var i = 0; i < ql; i++) {
                var fullq, thisq, eachq, eql;
                if (useMedia) {
                    fullq = media;
                    rules.push(repUrls(styles));
                } else {
                    fullq = qs[i].match(respond.regex.findStyles) && RegExp.$1;
                    rules.push(RegExp.$2 && repUrls(RegExp.$2));
                }
                eachq = fullq.split(",");
                eql = eachq.length;
                for (var j = 0; j < eql; j++) {
                    thisq = eachq[j];
                    if (isUnsupportedMediaQuery(thisq)) {
                        continue;
                    }
                    mediastyles.push({
                        media: thisq.split("(")[0].match(respond.regex.only) && RegExp.$2 || "all",
                        rules: rules.length - 1,
                        hasquery: thisq.indexOf("(") > -1,
                        minw: thisq.match(respond.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                        maxw: thisq.match(respond.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                    });
                }
            }
            applyMedia();
        },
        makeRequests = function() {
            if (requestQueue.length) {
                var thisRequest = requestQueue.shift();
                ajax(thisRequest.href, function(styles) {
                    translate(styles, thisRequest.href, thisRequest.media);
                    parsedSheets[thisRequest.href] = true;
                    w.setTimeout(function() {
                        makeRequests();
                    }, 0);
                });
            }
        },
        ripCSS = function() {
            for (var i = 0; i < links.length; i++) {
                var sheet = links[i],
                    href = sheet.href,
                    media = sheet.media,
                    isCSS = sheet.rel && sheet.rel.toLowerCase() === "stylesheet";
                if (!!href && isCSS && !parsedSheets[href]) {
                    if (sheet.styleSheet && sheet.styleSheet.rawCssText) {
                        translate(sheet.styleSheet.rawCssText, href, media);
                        parsedSheets[href] = true;
                    } else {
                        if ((!/^([a-zA-Z:]*\/\/)/.test(href) && !base) || href.replace(RegExp.$1, "").split("/")[0] === w.location.host) {
                            if (href.substring(0, 2) === "//") {
                                href = w.location.protocol + href;
                            }
                            requestQueue.push({
                                href: href,
                                media: media
                            });
                        }
                    }
                }
            }
            makeRequests();
        };
    ripCSS();
    respond.update = ripCSS;
    respond.getEmValue = getEmValue;

    function callMedia() {
        applyMedia(true);
    }
    if (w.addEventListener) {
        w.addEventListener("resize", callMedia, false);
    } else if (w.attachEvent) {
        w.attachEvent("onresize", callMedia);
    }
})(this);
(function(window, document, $, undefined) {
    "use strict";
    var H = $("html"),
        W = $(window),
        D = $(document),
        F = $.fancybox = function() {
            F.open.apply(this, arguments);
        },
        IE = navigator.userAgent.match(/msie/i),
        didUpdate = null,
        isTouch = document.createTouch !== undefined,
        isQuery = function(obj) {
            return obj && obj.hasOwnProperty && obj instanceof $;
        },
        isString = function(str) {
            return str && $.type(str) === "string";
        },
        isPercentage = function(str) {
            return isString(str) && str.indexOf('%') > 0;
        },
        isScrollable = function(el) {
            return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
        },
        getScalar = function(orig, dim) {
            var value = parseInt(orig, 10) || 0;
            if (dim && isPercentage(orig)) {
                value = F.getViewport()[dim] / 100 * value;
            }
            return Math.ceil(value);
        },
        getValue = function(value, dim) {
            return getScalar(value, dim) + 'px';
        };
    $.extend(F, {
        version: '2.1.5',
        defaults: {
            padding: 2,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: true,
            autoHeight: false,
            autoWidth: false,
            autoResize: true,
            autoCenter: !isTouch,
            fitToView: true,
            aspectRatio: false,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: 'auto',
            wrapCSS: '',
            arrows: true,
            closeBtn: true,
            closeClick: false,
            nextClick: false,
            mouseWheel: true,
            autoPlay: false,
            playSpeed: 3000,
            preload: 3,
            modal: false,
            loop: true,
            ajax: {
                dataType: 'html',
                headers: {
                    'X-fancyBox': true
                }
            },
            iframe: {
                scrolling: 'auto',
                preload: true
            },
            swf: {
                wmode: 'transparent',
                allowfullscreen: 'true',
                allowscriptaccess: 'always'
            },
            keys: {
                next: {
                    13: 'left',
                    34: 'up',
                    39: 'left',
                    40: 'up'
                },
                prev: {
                    8: 'right',
                    33: 'down',
                    37: 'right',
                    38: 'down'
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: 'left',
                prev: 'right'
            },
            scrollOutside: true,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: 'fade',
            openSpeed: 250,
            openEasing: 'swing',
            openOpacity: true,
            openMethod: 'zoomIn',
            closeEffect: 'fade',
            closeSpeed: 250,
            closeEasing: 'swing',
            closeOpacity: true,
            closeMethod: 'zoomOut',
            nextEffect: 'elastic',
            nextSpeed: 250,
            nextEasing: 'swing',
            nextMethod: 'changeIn',
            prevEffect: 'elastic',
            prevSpeed: 250,
            prevEasing: 'swing',
            prevMethod: 'changeOut',
            helpers: {
                overlay: true,
                title: true
            },
            onCancel: $.noop,
            beforeLoad: $.noop,
            afterLoad: $.noop,
            beforeShow: $.noop,
            afterShow: $.noop,
            beforeChange: $.noop,
            beforeClose: $.noop,
            afterClose: $.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: false,
        isOpen: false,
        isOpened: false,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: false
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(group, opts) {
            if (!group) {
                return;
            }
            if (!$.isPlainObject(opts)) {
                opts = {};
            }
            if (false === F.close(true)) {
                return;
            }
            if (!$.isArray(group)) {
                group = isQuery(group) ? $(group).get() : [group];
            }
            $.each(group, function(i, element) {
                var obj = {},
                    href, title, content, type, rez, hrefParts, selector;
                if ($.type(element) === "object") {
                    if (element.nodeType) {
                        element = $(element);
                    }
                    if (isQuery(element)) {
                        obj = {
                            href: element.data('fancybox-href') || element.attr('href'),
                            title: element.data('fancybox-title') || element.attr('title'),
                            isDom: true,
                            element: element
                        };
                        if ($.metadata) {
                            $.extend(true, obj, element.metadata());
                        }
                    } else {
                        obj = element;
                    }
                }
                href = opts.href || obj.href || (isString(element) ? element : null);
                title = opts.title !== undefined ? opts.title : obj.title || '';
                content = opts.content || obj.content;
                type = content ? 'html' : (opts.type || obj.type);
                if (!type && obj.isDom) {
                    type = element.data('fancybox-type');
                    if (!type) {
                        rez = element.prop('class').match(/fancybox\.(\w+)/);
                        type = rez ? rez[1] : null;
                    }
                }
                if (isString(href)) {
                    if (!type) {
                        if (F.isImage(href)) {
                            type = 'image';
                        } else if (F.isSWF(href)) {
                            type = 'swf';
                        } else if (href.charAt(0) === '#') {
                            type = 'inline';
                        } else if (isString(element)) {
                            type = 'html';
                            content = element;
                        }
                    }
                    if (type === 'ajax') {
                        hrefParts = href.split(/\s+/, 2);
                        href = hrefParts.shift();
                        selector = hrefParts.shift();
                    }
                }
                if (!content) {
                    if (type === 'inline') {
                        if (href) {
                            content = $(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href);
                        } else if (obj.isDom) {
                            content = element;
                        }
                    } else if (type === 'html') {
                        content = href;
                    } else if (!type && !href && obj.isDom) {
                        type = 'inline';
                        content = element;
                    }
                }
                $.extend(obj, {
                    href: href,
                    type: type,
                    content: content,
                    title: title,
                    selector: selector
                });
                group[i] = obj;
            });
            F.opts = $.extend(true, {}, F.defaults, opts);
            if (opts.keys !== undefined) {
                F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
            }
            F.group = group;
            return F._start(F.opts.index);
        },
        cancel: function() {
            var coming = F.coming;
            if (!coming || false === F.trigger('onCancel')) {
                return;
            }
            F.hideLoading();
            if (F.ajaxLoad) {
                F.ajaxLoad.abort();
            }
            F.ajaxLoad = null;
            if (F.imgPreload) {
                F.imgPreload.onload = F.imgPreload.onerror = null;
            }
            if (coming.wrap) {
                coming.wrap.stop(true, true).trigger('onReset').remove();
            }
            F.coming = null;
            if (!F.current) {
                F._afterZoomOut(coming);
            }
        },
        close: function(event) {
            F.cancel();
            if (false === F.trigger('beforeClose')) {
                return;
            }
            F.unbindEvents();
            if (!F.isActive) {
                return;
            }
            if (!F.isOpen || event === true) {
                $('.fancybox-wrap').stop(true).trigger('onReset').remove();
                F._afterZoomOut();
            } else {
                F.isOpen = F.isOpened = false;
                F.isClosing = true;
                $('.fancybox-item, .fancybox-nav').remove();
                F.wrap.stop(true, true).removeClass('fancybox-opened');
                F.transitions[F.current.closeMethod]();
            }
        },
        play: function(action) {
            var clear = function() {
                    clearTimeout(F.player.timer);
                },
                set = function() {
                    clear();
                    if (F.current && F.player.isActive) {
                        F.player.timer = setTimeout(F.next, F.current.playSpeed);
                    }
                },
                stop = function() {
                    clear();
                    D.unbind('.player');
                    F.player.isActive = false;
                    F.trigger('onPlayEnd');
                },
                start = function() {
                    if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
                        F.player.isActive = true;
                        D.bind({
                            'onCancel.player beforeClose.player': stop,
                            'onUpdate.player': set,
                            'beforeLoad.player': clear
                        });
                        set();
                        F.trigger('onPlayStart');
                    }
                };
            if (action === true || (!F.player.isActive && action !== false)) {
                start();
            } else {
                stop();
            }
        },
        next: function(direction) {
            var current = F.current;
            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.next;
                }
                F.jumpto(current.index + 1, direction, 'next');
            }
        },
        prev: function(direction) {
            var current = F.current;
            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.prev;
                }
                F.jumpto(current.index - 1, direction, 'prev');
            }
        },
        jumpto: function(index, direction, router) {
            var current = F.current;
            if (!current) {
                return;
            }
            index = getScalar(index);
            F.direction = direction || current.direction[(index >= current.index ? 'next' : 'prev')];
            F.router = router || 'jumpto';
            if (current.loop) {
                if (index < 0) {
                    index = current.group.length + (index % current.group.length);
                }
                index = index % current.group.length;
            }
            if (current.group[index] !== undefined) {
                F.cancel();
                F._start(index);
            }
        },
        reposition: function(e, onlyAbsolute) {
            var current = F.current,
                wrap = current ? current.wrap : null,
                pos;
            if (wrap) {
                pos = F._getPosition(onlyAbsolute);
                if (e && e.type === 'scroll') {
                    delete pos.position;
                    wrap.stop(true, true).animate(pos, 200);
                } else {
                    wrap.css(pos);
                    current.pos = $.extend({}, current.dim, pos);
                }
            }
        },
        update: function(e) {
            var type = (e && e.type),
                anyway = !type || type === 'orientationchange';
            if (anyway) {
                clearTimeout(didUpdate);
                didUpdate = null;
            }
            if (!F.isOpen || didUpdate) {
                return;
            }
            didUpdate = setTimeout(function() {
                var current = F.current;
                if (!current || F.isClosing) {
                    return;
                }
                F.wrap.removeClass('fancybox-tmp');
                if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
                    F._setDimension();
                }
                if (!(type === 'scroll' && current.canShrink)) {
                    F.reposition(e);
                }
                F.trigger('onUpdate');
                didUpdate = null;
            }, (anyway && !isTouch ? 0 : 300));
        },
        toggle: function(action) {
            if (F.isOpen) {
                F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;
                if (isTouch) {
                    F.wrap.removeAttr('style').addClass('fancybox-tmp');
                    F.trigger('onUpdate');
                }
                F.update();
            }
        },
        hideLoading: function() {
            D.unbind('.loading');
            $('#fancybox-loading').remove();
        },
        showLoading: function() {
            var el, viewport;
            F.hideLoading();
            el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');
            D.bind('keydown.loading', function(e) {
                if ((e.which || e.keyCode) === 27) {
                    e.preventDefault();
                    F.cancel();
                }
            });
            if (!F.defaults.fixed) {
                viewport = F.getViewport();
                el.css({
                    position: 'absolute',
                    top: (viewport.h * 0.5) + viewport.y,
                    left: (viewport.w * 0.5) + viewport.x
                });
            }
        },
        getViewport: function() {
            var locked = (F.current && F.current.locked) || false,
                rez = {
                    x: W.scrollLeft(),
                    y: W.scrollTop()
                };
            if (locked) {
                rez.w = locked[0].clientWidth;
                rez.h = locked[0].clientHeight;
            } else {
                rez.w = isTouch && window.innerWidth ? window.innerWidth : W.width();
                rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
            }
            return rez;
        },
        unbindEvents: function() {
            if (F.wrap && isQuery(F.wrap)) {
                F.wrap.unbind('.fb');
            }
            D.unbind('.fb');
            W.unbind('.fb');
        },
        bindEvents: function() {
            var current = F.current,
                keys;
            if (!current) {
                return;
            }
            W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);
            keys = current.keys;
            if (keys) {
                D.bind('keydown.fb', function(e) {
                    var code = e.which || e.keyCode,
                        target = e.target || e.srcElement;
                    if (code === 27 && F.coming) {
                        return false;
                    }
                    if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
                        $.each(keys, function(i, val) {
                            if (current.group.length > 1 && val[code] !== undefined) {
                                F[i](val[code]);
                                e.preventDefault();
                                return false;
                            }
                            if ($.inArray(code, val) > -1) {
                                F[i]();
                                e.preventDefault();
                                return false;
                            }
                        });
                    }
                });
            }
            if ($.fn.mousewheel && current.mouseWheel) {
                F.wrap.bind('mousewheel.fb', function(e, delta, deltaX, deltaY) {
                    var target = e.target || null,
                        parent = $(target),
                        canScroll = false;
                    while (parent.length) {
                        if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
                            break;
                        }
                        canScroll = isScrollable(parent[0]);
                        parent = $(parent).parent();
                    }
                    if (delta !== 0 && !canScroll) {
                        if (F.group.length > 1 && !current.canShrink) {
                            if (deltaY > 0 || deltaX > 0) {
                                F.prev(deltaY > 0 ? 'down' : 'left');
                            } else if (deltaY < 0 || deltaX < 0) {
                                F.next(deltaY < 0 ? 'up' : 'right');
                            }
                            e.preventDefault();
                        }
                    }
                });
            }
        },
        trigger: function(event, o) {
            var ret, obj = o || F.coming || F.current;
            if (!obj) {
                return;
            }
            if ($.isFunction(obj[event])) {
                ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
            }
            if (ret === false) {
                return false;
            }
            if (obj.helpers) {
                $.each(obj.helpers, function(helper, opts) {
                    if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
                        F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
                    }
                });
            }
            D.trigger(event);
        },
        isImage: function(str) {
            return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
        },
        isSWF: function(str) {
            return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
        },
        _start: function(index) {
            var coming = {},
                obj, href, type, margin, padding;
            index = getScalar(index);
            obj = F.group[index] || null;
            if (!obj) {
                return false;
            }
            coming = $.extend(true, {}, F.opts, obj);
            margin = coming.margin;
            padding = coming.padding;
            if ($.type(margin) === 'number') {
                coming.margin = [margin, margin, margin, margin];
            }
            if ($.type(padding) === 'number') {
                coming.padding = [padding, padding, padding, padding];
            }
            if (coming.modal) {
                $.extend(true, coming, {
                    closeBtn: false,
                    closeClick: false,
                    nextClick: false,
                    arrows: false,
                    mouseWheel: false,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: false
                        }
                    }
                });
            }
            if (coming.autoSize) {
                coming.autoWidth = coming.autoHeight = true;
            }
            if (coming.width === 'auto') {
                coming.autoWidth = true;
            }
            if (coming.height === 'auto') {
                coming.autoHeight = true;
            }
            coming.group = F.group;
            coming.index = index;
            F.coming = coming;
            if (false === F.trigger('beforeLoad')) {
                F.coming = null;
                return;
            }
            type = coming.type;
            href = coming.href;
            if (!type) {
                F.coming = null;
                if (F.current && F.router && F.router !== 'jumpto') {
                    F.current.index = index;
                    return F[F.router](F.direction);
                }
                return false;
            }
            F.isActive = true;
            if (type === 'image' || type === 'swf') {
                coming.autoHeight = coming.autoWidth = false;
                coming.scrolling = 'visible';
            }
            if (type === 'image') {
                coming.aspectRatio = true;
            }
            if (type === 'iframe' && isTouch) {
                coming.scrolling = 'scroll';
            }
            coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo(coming.parent || 'body');
            $.extend(coming, {
                skin: $('.fancybox-skin', coming.wrap),
                outer: $('.fancybox-outer', coming.wrap),
                inner: $('.fancybox-inner', coming.wrap)
            });
            $.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
                coming.skin.css('padding' + v, getValue(coming.padding[i]));
            });
            F.trigger('onReady');
            if (type === 'inline' || type === 'html') {
                if (!coming.content || !coming.content.length) {
                    return F._error('content');
                }
            } else if (!href) {
                return F._error('href');
            }
            if (type === 'image') {
                F._loadImage();
            } else if (type === 'ajax') {
                F._loadAjax();
            } else if (type === 'iframe') {
                F._loadIframe();
            } else {
                F._afterLoad();
            }
        },
        _error: function(type) {
            $.extend(F.coming, {
                type: 'html',
                autoWidth: true,
                autoHeight: true,
                minWidth: 0,
                minHeight: 0,
                scrolling: 'no',
                hasError: type,
                content: F.coming.tpl.error
            });
            F._afterLoad();
        },
        _loadImage: function() {
            var img = F.imgPreload = new Image();
            img.onload = function() {
                this.onload = this.onerror = null;
                F.coming.width = this.width / F.opts.pixelRatio;
                F.coming.height = this.height / F.opts.pixelRatio;
                F._afterLoad();
            };
            img.onerror = function() {
                this.onload = this.onerror = null;
                F._error('image');
            };
            img.src = F.coming.href;
            if (img.complete !== true) {
                F.showLoading();
            }
        },
        _loadAjax: function() {
            var coming = F.coming;
            F.showLoading();
            F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
                url: coming.href,
                error: function(jqXHR, textStatus) {
                    if (F.coming && textStatus !== 'abort') {
                        F._error('ajax', jqXHR);
                    } else {
                        F.hideLoading();
                    }
                },
                success: function(data, textStatus) {
                    if (textStatus === 'success') {
                        coming.content = data;
                        F._afterLoad();
                    }
                }
            }));
        },
        _loadIframe: function() {
            var coming = F.coming,
                iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling).attr('src', coming.href);
            $(coming.wrap).bind('onReset', function() {
                try {
                    $(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
                } catch (e) {}
            });
            if (coming.iframe.preload) {
                F.showLoading();
                iframe.one('load', function() {
                    $(this).data('ready', 1);
                    if (!isTouch) {
                        $(this).bind('load.fb', F.update);
                    }
                    $(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();
                    F._afterLoad();
                });
            }
            coming.content = iframe.appendTo(coming.inner);
            if (!coming.iframe.preload) {
                F._afterLoad();
            }
        },
        _preloadImages: function() {
            var group = F.group,
                current = F.current,
                len = group.length,
                cnt = current.preload ? Math.min(current.preload, len - 1) : 0,
                item, i;
            for (i = 1; i <= cnt; i += 1) {
                item = group[(current.index + i) % len];
                if (item.type === 'image' && item.href) {
                    new Image().src = item.href;
                }
            }
        },
        _afterLoad: function() {
            var coming = F.coming,
                previous = F.current,
                placeholder = 'fancybox-placeholder',
                current, content, type, scrolling, href, embed;
            F.hideLoading();
            if (!coming || F.isActive === false) {
                return;
            }
            if (false === F.trigger('afterLoad', coming, previous)) {
                coming.wrap.stop(true).trigger('onReset').remove();
                F.coming = null;
                return;
            }
            if (previous) {
                F.trigger('beforeChange', previous);
                previous.wrap.stop(true).removeClass('fancybox-opened').find('.fancybox-item, .fancybox-nav').remove();
            }
            F.unbindEvents();
            current = coming;
            content = coming.content;
            type = coming.type;
            scrolling = coming.scrolling;
            $.extend(F, {
                wrap: current.wrap,
                skin: current.skin,
                outer: current.outer,
                inner: current.inner,
                current: current,
                previous: previous
            });
            href = current.href;
            switch (type) {
                case 'inline':
                case 'ajax':
                case 'html':
                    if (current.selector) {
                        content = $('<div>').html(content).find(current.selector);
                    } else if (isQuery(content)) {
                        if (!content.data(placeholder)) {
                            content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter(content).hide());
                        }
                        content = content.show().detach();
                        current.wrap.bind('onReset', function() {
                            if ($(this).find(content).length) {
                                content.hide().replaceAll(content.data(placeholder)).data(placeholder, false);
                            }
                        });
                    }
                    break;
                case 'image':
                    content = current.tpl.image.replace('{href}', href);
                    break;
                case 'swf':
                    content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
                    embed = '';
                    $.each(current.swf, function(name, val) {
                        content += '<param name="' + name + '" value="' + val + '"></param>';
                        embed += ' ' + name + '="' + val + '"';
                    });
                    content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
                    break;
            }
            if (!(isQuery(content) && content.parent().is(current.inner))) {
                current.inner.append(content);
            }
            F.trigger('beforeShow');
            current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));
            F._setDimension();
            F.reposition();
            F.isOpen = false;
            F.coming = null;
            F.bindEvents();
            if (!F.isOpened) {
                $('.fancybox-wrap').not(current.wrap).stop(true).trigger('onReset').remove();
            } else if (previous.prevMethod) {
                F.transitions[previous.prevMethod]();
            }
            F.transitions[F.isOpened ? current.nextMethod : current.openMethod]();
            F._preloadImages();
        },
        _setDimension: function() {
            var viewport = F.getViewport(),
                steps = 0,
                canShrink = false,
                canExpand = false,
                wrap = F.wrap,
                skin = F.skin,
                inner = F.inner,
                current = F.current,
                width = current.width,
                height = current.height,
                minWidth = current.minWidth,
                minHeight = current.minHeight,
                maxWidth = current.maxWidth,
                maxHeight = current.maxHeight,
                scrolling = current.scrolling,
                scrollOut = current.scrollOutside ? current.scrollbarWidth : 0,
                margin = current.margin,
                wMargin = getScalar(margin[1] + margin[3]),
                hMargin = getScalar(margin[0] + margin[2]),
                wPadding, hPadding, wSpace, hSpace, origWidth, origHeight, origMaxWidth, origMaxHeight, ratio, width_, height_, maxWidth_, maxHeight_, iframe, body;
            wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');
            wPadding = getScalar(skin.outerWidth(true) - skin.width());
            hPadding = getScalar(skin.outerHeight(true) - skin.height());
            wSpace = wMargin + wPadding;
            hSpace = hMargin + hPadding;
            origWidth = isPercentage(width) ? (viewport.w - wSpace) * getScalar(width) / 100 : width;
            origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;
            if (current.type === 'iframe') {
                iframe = current.content;
                if (current.autoHeight && iframe.data('ready') === 1) {
                    try {
                        if (iframe[0].contentWindow.document.location) {
                            inner.width(origWidth).height(9999);
                            body = iframe.contents().find('body');
                            if (scrollOut) {
                                body.css('overflow-x', 'hidden');
                            }
                            origHeight = body.outerHeight(true);
                        }
                    } catch (e) {}
                }
            } else if (current.autoWidth || current.autoHeight) {
                inner.addClass('fancybox-tmp');
                if (!current.autoWidth) {
                    inner.width(origWidth);
                }
                if (!current.autoHeight) {
                    inner.height(origHeight);
                }
                if (current.autoWidth) {
                    origWidth = inner.width();
                }
                if (current.autoHeight) {
                    origHeight = inner.height();
                }
                inner.removeClass('fancybox-tmp');
            }
            width = getScalar(origWidth);
            height = getScalar(origHeight);
            ratio = origWidth / origHeight;
            minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
            maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);
            minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
            maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);
            origMaxWidth = maxWidth;
            origMaxHeight = maxHeight;
            if (current.fitToView) {
                maxWidth = Math.min(viewport.w - wSpace, maxWidth);
                maxHeight = Math.min(viewport.h - hSpace, maxHeight);
            }
            maxWidth_ = viewport.w - wMargin;
            maxHeight_ = viewport.h - hMargin;
            if (current.aspectRatio) {
                if (width > maxWidth) {
                    width = maxWidth;
                    height = getScalar(width / ratio);
                }
                if (height > maxHeight) {
                    height = maxHeight;
                    width = getScalar(height * ratio);
                }
                if (width < minWidth) {
                    width = minWidth;
                    height = getScalar(width / ratio);
                }
                if (height < minHeight) {
                    height = minHeight;
                    width = getScalar(height * ratio);
                }
            } else {
                width = Math.max(minWidth, Math.min(width, maxWidth));
                if (current.autoHeight && current.type !== 'iframe') {
                    inner.width(width);
                    height = inner.height();
                }
                height = Math.max(minHeight, Math.min(height, maxHeight));
            }
            if (current.fitToView) {
                inner.width(width).height(height);
                wrap.width(width + wPadding);
                width_ = wrap.width();
                height_ = wrap.height();
                if (current.aspectRatio) {
                    while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
                        if (steps++ > 19) {
                            break;
                        }
                        height = Math.max(minHeight, Math.min(maxHeight, height - 10));
                        width = getScalar(height * ratio);
                        if (width < minWidth) {
                            width = minWidth;
                            height = getScalar(width / ratio);
                        }
                        if (width > maxWidth) {
                            width = maxWidth;
                            height = getScalar(width / ratio);
                        }
                        inner.width(width).height(height);
                        wrap.width(width + wPadding);
                        width_ = wrap.width();
                        height_ = wrap.height();
                    }
                } else {
                    width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));
                    height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
                }
            }
            if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
                width += scrollOut;
            }
            inner.width(width).height(height);
            wrap.width(width + wPadding);
            width_ = wrap.width();
            height_ = wrap.height();
            canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
            canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));
            $.extend(current, {
                dim: {
                    width: getValue(width_),
                    height: getValue(height_)
                },
                origWidth: origWidth,
                origHeight: origHeight,
                canShrink: canShrink,
                canExpand: canExpand,
                wPadding: wPadding,
                hPadding: hPadding,
                wrapSpace: height_ - skin.outerHeight(true),
                skinSpace: skin.height() - height
            });
            if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
                inner.height('auto');
            }
        },
        _getPosition: function(onlyAbsolute) {
            var current = F.current,
                viewport = F.getViewport(),
                margin = current.margin,
                width = F.wrap.width() + margin[1] + margin[3],
                height = F.wrap.height() + margin[0] + margin[2],
                rez = {
                    position: 'absolute',
                    top: margin[0],
                    left: margin[3]
                };
            if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
                rez.position = 'fixed';
            } else if (!current.locked) {
                rez.top += viewport.y;
                rez.left += viewport.x;
            }
            rez.top = getValue(Math.max(rez.top, rez.top + ((viewport.h - height) * current.topRatio)));
            rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width) * current.leftRatio)));
            return rez;
        },
        _afterZoomIn: function() {
            var current = F.current;
            if (!current) {
                return;
            }
            F.isOpen = F.isOpened = true;
            F.wrap.css('overflow', 'visible').addClass('fancybox-opened');
            F.update();
            if (current.closeClick || (current.nextClick && F.group.length > 1)) {
                F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
                    if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
                        e.preventDefault();
                        F[current.closeClick ? 'close' : 'next']();
                    }
                });
            }
            if (current.closeBtn) {
                $(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
                    e.preventDefault();
                    F.close();
                });
            }
            if (current.arrows && F.group.length > 1) {
                if (current.loop || current.index > 0) {
                    $(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
                }
                if (current.loop || current.index < F.group.length - 1) {
                    $(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
                }
            }
            F.trigger('afterShow');
            if (!current.loop && current.index === current.group.length - 1) {
                F.play(false);
            } else if (F.opts.autoPlay && !F.player.isActive) {
                F.opts.autoPlay = false;
                F.play();
            }
        },
        _afterZoomOut: function(obj) {
            obj = obj || F.current;
            $('.fancybox-wrap').trigger('onReset').remove();
            $.extend(F, {
                group: {},
                opts: {},
                router: false,
                current: null,
                isActive: false,
                isOpened: false,
                isOpen: false,
                isClosing: false,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            F.trigger('afterClose', obj);
        }
    });
    F.transitions = {
        getOrigPosition: function() {
            var current = F.current,
                element = current.element,
                orig = current.orig,
                pos = {},
                width = 50,
                height = 50,
                hPadding = current.hPadding,
                wPadding = current.wPadding,
                viewport = F.getViewport();
            if (!orig && current.isDom && element.is(':visible')) {
                orig = element.find('img:first');
                if (!orig.length) {
                    orig = element;
                }
            }
            if (isQuery(orig)) {
                pos = orig.offset();
                if (orig.is('img')) {
                    width = orig.outerWidth();
                    height = orig.outerHeight();
                }
            } else {
                pos.top = viewport.y + (viewport.h - height) * current.topRatio;
                pos.left = viewport.x + (viewport.w - width) * current.leftRatio;
            }
            if (F.wrap.css('position') === 'fixed' || current.locked) {
                pos.top -= viewport.y;
                pos.left -= viewport.x;
            }
            pos = {
                top: getValue(pos.top - hPadding * current.topRatio),
                left: getValue(pos.left - wPadding * current.leftRatio),
                width: getValue(width + wPadding),
                height: getValue(height + hPadding)
            };
            return pos;
        },
        step: function(now, fx) {
            var ratio, padding, value, prop = fx.prop,
                current = F.current,
                wrapSpace = current.wrapSpace,
                skinSpace = current.skinSpace;
            if (prop === 'width' || prop === 'height') {
                ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);
                if (F.isClosing) {
                    ratio = 1 - ratio;
                }
                padding = prop === 'width' ? current.wPadding : current.hPadding;
                value = now - padding;
                F.skin[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio)));
                F.inner[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio) - (skinSpace * ratio)));
            }
        },
        zoomIn: function() {
            var current = F.current,
                startPos = current.pos,
                effect = current.openEffect,
                elastic = effect === 'elastic',
                endPos = $.extend({
                    opacity: 1
                }, startPos);
            delete endPos.position;
            if (elastic) {
                startPos = this.getOrigPosition();
                if (current.openOpacity) {
                    startPos.opacity = 0.1;
                }
            } else if (effect === 'fade') {
                startPos.opacity = 0.1;
            }
            F.wrap.css(startPos).animate(endPos, {
                duration: effect === 'none' ? 0 : current.openSpeed,
                easing: current.openEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomIn
            });
        },
        zoomOut: function() {
            var current = F.current,
                effect = current.closeEffect,
                elastic = effect === 'elastic',
                endPos = {
                    opacity: 0.1
                };
            if (elastic) {
                endPos = this.getOrigPosition();
                if (current.closeOpacity) {
                    endPos.opacity = 0.1;
                }
            }
            F.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : current.closeSpeed,
                easing: current.closeEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomOut
            });
        },
        changeIn: function() {
            var current = F.current,
                effect = current.nextEffect,
                startPos = current.pos,
                endPos = {
                    opacity: 1
                },
                direction = F.direction,
                distance = 200,
                field;
            startPos.opacity = 0.1;
            if (effect === 'elastic') {
                field = direction === 'down' || direction === 'up' ? 'top' : 'left';
                if (direction === 'down' || direction === 'right') {
                    startPos[field] = getValue(getScalar(startPos[field]) - distance);
                    endPos[field] = '+=' + distance + 'px';
                } else {
                    startPos[field] = getValue(getScalar(startPos[field]) + distance);
                    endPos[field] = '-=' + distance + 'px';
                }
            }
            if (effect === 'none') {
                F._afterZoomIn();
            } else {
                F.wrap.css(startPos).animate(endPos, {
                    duration: current.nextSpeed,
                    easing: current.nextEasing,
                    complete: F._afterZoomIn
                });
            }
        },
        changeOut: function() {
            var previous = F.previous,
                effect = previous.prevEffect,
                endPos = {
                    opacity: 0.1
                },
                direction = F.direction,
                distance = 200;
            if (effect === 'elastic') {
                endPos[direction === 'down' || direction === 'up' ? 'top' : 'left'] = (direction === 'up' || direction === 'left' ? '-' : '+') + '=' + distance + 'px';
            }
            previous.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : previous.prevSpeed,
                easing: previous.prevEasing,
                complete: function() {
                    $(this).trigger('onReset').remove();
                }
            });
        }
    };
    F.helpers.overlay = {
        defaults: {
            closeClick: true,
            speedOut: 200,
            showEarly: true,
            css: {},
            locked: !isTouch,
            fixed: true
        },
        overlay: null,
        fixed: false,
        el: $('html'),
        create: function(opts) {
            opts = $.extend({}, this.defaults, opts);
            if (this.overlay) {
                this.close();
            }
            this.overlay = $('<div class="fancybox-overlay"></div>').appendTo(F.coming ? F.coming.parent : opts.parent);
            this.fixed = false;
            if (opts.fixed && F.defaults.fixed) {
                this.overlay.addClass('fancybox-overlay-fixed');
                this.fixed = true;
            }
        },
        open: function(opts) {
            var that = this;
            opts = $.extend({}, this.defaults, opts);
            if (this.overlay) {
                this.overlay.unbind('.overlay').width('auto').height('auto');
            } else {
                this.create(opts);
            }
            if (!this.fixed) {
                W.bind('resize.overlay', $.proxy(this.update, this));
                this.update();
            }
            if (opts.closeClick) {
                this.overlay.bind('click.overlay', function(e) {
                    if ($(e.target).hasClass('fancybox-overlay')) {
                        if (F.isActive) {
                            F.close();
                        } else {
                            that.close();
                        }
                        return false;
                    }
                });
            }
            this.overlay.css(opts.css).show();
        },
        close: function() {
            var scrollV, scrollH;
            W.unbind('resize.overlay');
            if (this.el.hasClass('fancybox-lock')) {
                $('.fancybox-margin').removeClass('fancybox-margin');
                scrollV = W.scrollTop();
                scrollH = W.scrollLeft();
                this.el.removeClass('fancybox-lock');
                W.scrollTop(scrollV).scrollLeft(scrollH);
            }
            $('.fancybox-overlay').remove().hide();
            $.extend(this, {
                overlay: null,
                fixed: false
            });
        },
        update: function() {
            var width = '100%',
                offsetWidth;
            this.overlay.width(width).height('100%');
            if (IE) {
                offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
                if (D.width() > offsetWidth) {
                    width = D.width();
                }
            } else if (D.width() > W.width()) {
                width = D.width();
            }
            this.overlay.width(width).height(D.height());
        },
        onReady: function(opts, obj) {
            var overlay = this.overlay;
            $('.fancybox-overlay').stop(true, true);
            if (!overlay) {
                this.create(opts);
            }
            if (opts.locked && this.fixed && obj.fixed) {
                if (!overlay) {
                    this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
                }
                obj.locked = this.overlay.append(obj.wrap);
                obj.fixed = false;
            }
            if (opts.showEarly === true) {
                this.beforeShow.apply(this, arguments);
            }
        },
        beforeShow: function(opts, obj) {
            var scrollV, scrollH;
            if (obj.locked) {
                if (this.margin !== false) {
                    $('*').filter(function() {
                        return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap"));
                    }).addClass('fancybox-margin');
                    this.el.addClass('fancybox-margin');
                }
                scrollV = W.scrollTop();
                scrollH = W.scrollLeft();
                this.el.addClass('fancybox-lock');
                W.scrollTop(scrollV).scrollLeft(scrollH);
            }
            this.open(opts);
        },
        onUpdate: function() {
            if (!this.fixed) {
                this.update();
            }
        },
        afterClose: function(opts) {
            if (this.overlay && !F.coming) {
                this.overlay.fadeOut(opts.speedOut, $.proxy(this.close, this));
            }
        }
    };
    F.helpers.title = {
        defaults: {
            type: 'float',
            position: 'bottom'
        },
        beforeShow: function(opts) {
            var current = F.current,
                text = current.title,
                type = opts.type,
                title, target;
            if ($.isFunction(text)) {
                text = text.call(current.element, current);
            }
            if (!isString(text) || $.trim(text) === '') {
                return;
            }
            title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');
            switch (type) {
                case 'inside':
                    target = F.skin;
                    break;
                case 'outside':
                    target = F.wrap;
                    break;
                case 'over':
                    target = F.inner;
                    break;
                default:
                    target = F.skin;
                    title.appendTo('body');
                    if (IE) {
                        title.width(title.width());
                    }
                    title.wrapInner('<span class="child"></span>');
                    F.current.margin[2] += Math.abs(getScalar(title.css('margin-bottom')));
                    break;
            }
            title[(opts.position === 'top' ? 'prependTo' : 'appendTo')](target);
        }
    };
    $.fn.fancybox = function(options) {
        var index, that = $(this),
            selector = this.selector || '',
            run = function(e) {
                var what = $(this).blur(),
                    idx = index,
                    relType, relVal;
                if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
                    relType = options.groupAttr || 'data-fancybox-group';
                    relVal = what.attr(relType);
                    if (!relVal) {
                        relType = 'rel';
                        relVal = what.get(0)[relType];
                    }
                    if (relVal && relVal !== '' && relVal !== 'nofollow') {
                        what = selector.length ? $(selector) : that;
                        what = what.filter('[' + relType + '="' + relVal + '"]');
                        idx = what.index(this);
                    }
                    options.index = idx;
                    if (F.open(what, options) !== false) {
                        e.preventDefault();
                    }
                }
            };
        options = options || {};
        index = options.index || 0;
        if (!selector || options.live === false) {
            that.unbind('click.fb-start').bind('click.fb-start', run);
        } else {
            D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
        }
        this.filter('[data-fancybox-start=1]').trigger('click');
        return this;
    };
    D.ready(function() {
        var w1, w2;
        if ($.scrollbarWidth === undefined) {
            $.scrollbarWidth = function() {
                var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
                    child = parent.children(),
                    width = child.innerWidth() - child.height(99).innerWidth();
                parent.remove();
                return width;
            };
        }
        if ($.support.fixedPosition === undefined) {
            $.support.fixedPosition = (function() {
                var elem = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
                    fixed = (elem[0].offsetTop === 20 || elem[0].offsetTop === 15);
                elem.remove();
                return fixed;
            }());
        }
        $.extend(F.defaults, {
            scrollbarWidth: $.scrollbarWidth(),
            fixed: $.support.fixedPosition,
            parent: $('body')
        });
        w1 = $(window).width();
        H.addClass('fancybox-lock-test');
        w2 = $(window).width();
        H.removeClass('fancybox-lock-test');
        $("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
    });
}(window, document, jQuery));