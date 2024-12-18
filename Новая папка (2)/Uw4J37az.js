var Za = Object.defineProperty;
var ef = (t, e, r) => e in t ? Za(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[e] = r;
var le = (t, e, r) => ef(t, typeof e != "symbol" ? e + "" : e, r);
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
    new MutationObserver(s => {
        for (const a of s)
            if (a.type === "childList")
                for (const f of a.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && i(f)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(s) {
        const a = {};
        return s.integrity && (a.integrity = s.integrity), s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? a.credentials = "include" : s.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
    }

    function i(s) {
        if (s.ep) return;
        s.ep = !0;
        const a = r(s);
        fetch(s.href, a)
    }
})();
var ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function tf(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Ie = {
        DEBUG: !1,
        LIB_VERSION: "2.53.0"
    },
    O;
if (typeof window > "u") {
    var ti = {
        hostname: ""
    };
    O = {
        navigator: {
            userAgent: ""
        },
        document: {
            location: ti,
            referrer: ""
        },
        screen: {
            width: 0,
            height: 0
        },
        location: ti
    }
} else O = window;
var rf = 24 * 60 * 60 * 1e3,
    br = Array.prototype,
    nf = Function.prototype,
    As = Object.prototype,
    $e = br.slice,
    Xt = As.toString,
    Lr = As.hasOwnProperty,
    ne = O.console,
    je = O.navigator,
    j = O.document,
    Wt = O.opera,
    sr = O.screen,
    ve = je.userAgent,
    kr = nf.bind,
    ri = br.forEach,
    ni = br.indexOf,
    ii = br.map,
    sf = Array.isArray,
    Hr = {},
    l = {
        trim: function(t) {
            return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }
    },
    X = {
        log: function() {
            if (Ie.DEBUG && !l.isUndefined(ne) && ne) try {
                ne.log.apply(ne, arguments)
            } catch {
                l.each(arguments, function(e) {
                    ne.log(e)
                })
            }
        },
        warn: function() {
            if (Ie.DEBUG && !l.isUndefined(ne) && ne) {
                var t = ["Mixpanel warning:"].concat(l.toArray(arguments));
                try {
                    ne.warn.apply(ne, t)
                } catch {
                    l.each(t, function(r) {
                        ne.warn(r)
                    })
                }
            }
        },
        error: function() {
            if (Ie.DEBUG && !l.isUndefined(ne) && ne) {
                var t = ["Mixpanel error:"].concat(l.toArray(arguments));
                try {
                    ne.error.apply(ne, t)
                } catch {
                    l.each(t, function(r) {
                        ne.error(r)
                    })
                }
            }
        },
        critical: function() {
            if (!l.isUndefined(ne) && ne) {
                var t = ["Mixpanel error:"].concat(l.toArray(arguments));
                try {
                    ne.error.apply(ne, t)
                } catch {
                    l.each(t, function(r) {
                        ne.error(r)
                    })
                }
            }
        }
    },
    Mr = function(t, e) {
        return function() {
            return arguments[0] = "[" + e + "] " + arguments[0], t.apply(X, arguments)
        }
    },
    cn = function(t) {
        return {
            log: Mr(X.log, t),
            error: Mr(X.error, t),
            critical: Mr(X.critical, t)
        }
    };
l.bind = function(t, e) {
    var r, i;
    if (kr && t.bind === kr) return kr.apply(t, $e.call(arguments, 1));
    if (!l.isFunction(t)) throw new TypeError;
    return r = $e.call(arguments, 2), i = function() {
        if (!(this instanceof i)) return t.apply(e, r.concat($e.call(arguments)));
        var s = {};
        s.prototype = t.prototype;
        var a = new s;
        s.prototype = null;
        var f = t.apply(a, r.concat($e.call(arguments)));
        return Object(f) === f ? f : a
    }, i
};
l.each = function(t, e, r) {
    if (t != null) {
        if (ri && t.forEach === ri) t.forEach(e, r);
        else if (t.length === +t.length) {
            for (var i = 0, s = t.length; i < s; i++)
                if (i in t && e.call(r, t[i], i, t) === Hr) return
        } else
            for (var a in t)
                if (Lr.call(t, a) && e.call(r, t[a], a, t) === Hr) return
    }
};
l.extend = function(t) {
    return l.each($e.call(arguments, 1), function(e) {
        for (var r in e) e[r] !== void 0 && (t[r] = e[r])
    }), t
};
l.isArray = sf || function(t) {
    return Xt.call(t) === "[object Array]"
};
l.isFunction = function(t) {
    try {
        return /^\s*\bfunction\b/.test(t)
    } catch {
        return !1
    }
};
l.isArguments = function(t) {
    return !!(t && Lr.call(t, "callee"))
};
l.toArray = function(t) {
    return t ? t.toArray ? t.toArray() : l.isArray(t) || l.isArguments(t) ? $e.call(t) : l.values(t) : []
};
l.map = function(t, e, r) {
    if (ii && t.map === ii) return t.map(e, r);
    var i = [];
    return l.each(t, function(s) {
        i.push(e.call(r, s))
    }), i
};
l.keys = function(t) {
    var e = [];
    return t === null || l.each(t, function(r, i) {
        e[e.length] = i
    }), e
};
l.values = function(t) {
    var e = [];
    return t === null || l.each(t, function(r) {
        e[e.length] = r
    }), e
};
l.include = function(t, e) {
    var r = !1;
    return t === null ? r : ni && t.indexOf === ni ? t.indexOf(e) != -1 : (l.each(t, function(i) {
        if (r || (r = i === e)) return Hr
    }), r)
};
l.includes = function(t, e) {
    return t.indexOf(e) !== -1
};
l.inherit = function(t, e) {
    return t.prototype = new e, t.prototype.constructor = t, t.superclass = e.prototype, t
};
l.isObject = function(t) {
    return t === Object(t) && !l.isArray(t)
};
l.isEmptyObject = function(t) {
    if (l.isObject(t)) {
        for (var e in t)
            if (Lr.call(t, e)) return !1;
        return !0
    }
    return !1
};
l.isUndefined = function(t) {
    return t === void 0
};
l.isString = function(t) {
    return Xt.call(t) == "[object String]"
};
l.isDate = function(t) {
    return Xt.call(t) == "[object Date]"
};
l.isNumber = function(t) {
    return Xt.call(t) == "[object Number]"
};
l.isElement = function(t) {
    return !!(t && t.nodeType === 1)
};
l.encodeDates = function(t) {
    return l.each(t, function(e, r) {
        l.isDate(e) ? t[r] = l.formatDate(e) : l.isObject(e) && (t[r] = l.encodeDates(e))
    }), t
};
l.timestamp = function() {
    return Date.now = Date.now || function() {
        return +new Date
    }, Date.now()
};
l.formatDate = function(t) {
    function e(r) {
        return r < 10 ? "0" + r : r
    }
    return t.getUTCFullYear() + "-" + e(t.getUTCMonth() + 1) + "-" + e(t.getUTCDate()) + "T" + e(t.getUTCHours()) + ":" + e(t.getUTCMinutes()) + ":" + e(t.getUTCSeconds())
};
l.strip_empty_properties = function(t) {
    var e = {};
    return l.each(t, function(r, i) {
        l.isString(r) && r.length > 0 && (e[i] = r)
    }), e
};
l.truncate = function(t, e) {
    var r;
    return typeof t == "string" ? r = t.slice(0, e) : l.isArray(t) ? (r = [], l.each(t, function(i) {
        r.push(l.truncate(i, e))
    })) : l.isObject(t) ? (r = {}, l.each(t, function(i, s) {
        r[s] = l.truncate(i, e)
    })) : r = t, r
};
l.JSONEncode = function() {
    return function(t) {
        var e = t,
            r = function(s) {
                var a = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    f = {
                        "\b": "\\b",
                        "	": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    };
                return a.lastIndex = 0, a.test(s) ? '"' + s.replace(a, function(u) {
                    var o = f[u];
                    return typeof o == "string" ? o : "\\u" + ("0000" + u.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + s + '"'
            },
            i = function(s, a) {
                var f = "",
                    u = "    ",
                    o = 0,
                    E = "",
                    _ = "",
                    b = 0,
                    T = f,
                    g = [],
                    A = a[s];
                switch (A && typeof A == "object" && typeof A.toJSON == "function" && (A = A.toJSON(s)), typeof A) {
                    case "string":
                        return r(A);
                    case "number":
                        return isFinite(A) ? String(A) : "null";
                    case "boolean":
                    case "null":
                        return String(A);
                    case "object":
                        if (!A) return "null";
                        if (f += u, g = [], Xt.apply(A) === "[object Array]") {
                            for (b = A.length, o = 0; o < b; o += 1) g[o] = i(o, A) || "null";
                            return _ = g.length === 0 ? "[]" : f ? `[
` + f + g.join(`,
` + f) + `
` + T + "]" : "[" + g.join(",") + "]", f = T, _
                        }
                        for (E in A) Lr.call(A, E) && (_ = i(E, A), _ && g.push(r(E) + (f ? ": " : ":") + _));
                        return _ = g.length === 0 ? "{}" : f ? "{" + g.join(",") + T + "}" : "{" + g.join(",") + "}", f = T, _
                }
            };
        return i("", {
            "": e
        })
    }
}();
l.JSONDecode = function() {
    var t, e, r = {
            '"': '"',
            "\\": "\\",
            "/": "/",
            b: "\b",
            f: "\f",
            n: `
`,
            r: "\r",
            t: "	"
        },
        i, s = function(g) {
            var A = new SyntaxError(g);
            throw A.at = t, A.text = i, A
        },
        a = function(g) {
            return g && g !== e && s("Expected '" + g + "' instead of '" + e + "'"), e = i.charAt(t), t += 1, e
        },
        f = function() {
            var g, A = "";
            for (e === "-" && (A = "-", a("-")); e >= "0" && e <= "9";) A += e, a();
            if (e === ".")
                for (A += "."; a() && e >= "0" && e <= "9";) A += e;
            if (e === "e" || e === "E")
                for (A += e, a(), (e === "-" || e === "+") && (A += e, a()); e >= "0" && e <= "9";) A += e, a();
            if (g = +A, !isFinite(g)) s("Bad number");
            else return g
        },
        u = function() {
            var g, A, B = "",
                U;
            if (e === '"')
                for (; a();) {
                    if (e === '"') return a(), B;
                    if (e === "\\")
                        if (a(), e === "u") {
                            for (U = 0, A = 0; A < 4 && (g = parseInt(a(), 16), !!isFinite(g)); A += 1) U = U * 16 + g;
                            B += String.fromCharCode(U)
                        } else if (typeof r[e] == "string") B += r[e];
                    else break;
                    else B += e
                }
            s("Bad string")
        },
        o = function() {
            for (; e && e <= " ";) a()
        },
        E = function() {
            switch (e) {
                case "t":
                    return a("t"), a("r"), a("u"), a("e"), !0;
                case "f":
                    return a("f"), a("a"), a("l"), a("s"), a("e"), !1;
                case "n":
                    return a("n"), a("u"), a("l"), a("l"), null
            }
            s('Unexpected "' + e + '"')
        },
        _, b = function() {
            var g = [];
            if (e === "[") {
                if (a("["), o(), e === "]") return a("]"), g;
                for (; e;) {
                    if (g.push(_()), o(), e === "]") return a("]"), g;
                    a(","), o()
                }
            }
            s("Bad array")
        },
        T = function() {
            var g, A = {};
            if (e === "{") {
                if (a("{"), o(), e === "}") return a("}"), A;
                for (; e;) {
                    if (g = u(), o(), a(":"), Object.hasOwnProperty.call(A, g) && s('Duplicate key "' + g + '"'), A[g] = _(), o(), e === "}") return a("}"), A;
                    a(","), o()
                }
            }
            s("Bad object")
        };
    return _ = function() {
            switch (o(), e) {
                case "{":
                    return T();
                case "[":
                    return b();
                case '"':
                    return u();
                case "-":
                    return f();
                default:
                    return e >= "0" && e <= "9" ? f() : E()
            }
        },
        function(g) {
            var A;
            return i = g, t = 0, e = " ", A = _(), o(), e && s("Syntax error"), A
        }
}();
l.base64Encode = function(t) {
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        r, i, s, a, f, u, o, E, _ = 0,
        b = 0,
        T = "",
        g = [];
    if (!t) return t;
    t = l.utf8Encode(t);
    do r = t.charCodeAt(_++), i = t.charCodeAt(_++), s = t.charCodeAt(_++), E = r << 16 | i << 8 | s, a = E >> 18 & 63, f = E >> 12 & 63, u = E >> 6 & 63, o = E & 63, g[b++] = e.charAt(a) + e.charAt(f) + e.charAt(u) + e.charAt(o); while (_ < t.length);
    switch (T = g.join(""), t.length % 3) {
        case 1:
            T = T.slice(0, -2) + "==";
            break;
        case 2:
            T = T.slice(0, -1) + "=";
            break
    }
    return T
};
l.utf8Encode = function(t) {
    t = (t + "").replace(/\r\n/g, `
`).replace(/\r/g, `
`);
    var e = "",
        r, i, s = 0,
        a;
    for (r = i = 0, s = t.length, a = 0; a < s; a++) {
        var f = t.charCodeAt(a),
            u = null;
        f < 128 ? i++ : f > 127 && f < 2048 ? u = String.fromCharCode(f >> 6 | 192, f & 63 | 128) : u = String.fromCharCode(f >> 12 | 224, f >> 6 & 63 | 128, f & 63 | 128), u !== null && (i > r && (e += t.substring(r, i)), e += u, r = i = a + 1)
    }
    return i > r && (e += t.substring(r, t.length)), e
};
l.UUID = function() {
    var t = function() {
            var i = 1 * new Date,
                s;
            if (O.performance && O.performance.now) s = O.performance.now();
            else
                for (s = 0; i == 1 * new Date;) s++;
            return i.toString(16) + Math.floor(s).toString(16)
        },
        e = function() {
            return Math.random().toString(16).replace(".", "")
        },
        r = function() {
            var i = ve,
                s, a, f = [],
                u = 0;

            function o(E, _) {
                var b, T = 0;
                for (b = 0; b < _.length; b++) T |= f[b] << b * 8;
                return E ^ T
            }
            for (s = 0; s < i.length; s++) a = i.charCodeAt(s), f.unshift(a & 255), f.length >= 4 && (u = o(u, f), f = []);
            return f.length > 0 && (u = o(u, f)), u.toString(16)
        };
    return function() {
        var i = (sr.height * sr.width).toString(16);
        return t() + "-" + e() + "-" + r() + "-" + i + "-" + t()
    }
}();
var si = ["ahrefsbot", "ahrefssiteaudit", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "facebookexternal", "petalbot", "pinterest", "screaming frog", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"];
l.isBlockedUA = function(t) {
    var e;
    for (t = t.toLowerCase(), e = 0; e < si.length; e++)
        if (t.indexOf(si[e]) !== -1) return !0;
    return !1
};
l.HTTPBuildQuery = function(t, e) {
    var r, i, s = [];
    return l.isUndefined(e) && (e = "&"), l.each(t, function(a, f) {
        r = encodeURIComponent(a.toString()), i = encodeURIComponent(f), s[s.length] = i + "=" + r
    }), s.join(e)
};
l.getQueryParam = function(t, e) {
    e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var r = "[\\?&]" + e + "=([^&#]*)",
        i = new RegExp(r),
        s = i.exec(t);
    if (s === null || s && typeof s[1] != "string" && s[1].length) return "";
    var a = s[1];
    try {
        a = decodeURIComponent(a)
    } catch {
        X.error("Skipping decoding for malformed query param: " + a)
    }
    return a.replace(/\+/g, " ")
};
l.cookie = {
    get: function(t) {
        for (var e = t + "=", r = j.cookie.split(";"), i = 0; i < r.length; i++) {
            for (var s = r[i]; s.charAt(0) == " ";) s = s.substring(1, s.length);
            if (s.indexOf(e) === 0) return decodeURIComponent(s.substring(e.length, s.length))
        }
        return null
    },
    parse: function(t) {
        var e;
        try {
            e = l.JSONDecode(l.cookie.get(t)) || {}
        } catch {}
        return e
    },
    set_seconds: function(t, e, r, i, s, a, f) {
        var u = "",
            o = "",
            E = "";
        if (f) u = "; domain=" + f;
        else if (i) {
            var _ = ai(j.location.hostname);
            u = _ ? "; domain=." + _ : ""
        }
        if (r) {
            var b = new Date;
            b.setTime(b.getTime() + r * 1e3), o = "; expires=" + b.toGMTString()
        }
        a && (s = !0, E = "; SameSite=None"), s && (E += "; secure"), j.cookie = t + "=" + encodeURIComponent(e) + o + "; path=/" + u + E
    },
    set: function(t, e, r, i, s, a, f) {
        var u = "",
            o = "",
            E = "";
        if (f) u = "; domain=" + f;
        else if (i) {
            var _ = ai(j.location.hostname);
            u = _ ? "; domain=." + _ : ""
        }
        if (r) {
            var b = new Date;
            b.setTime(b.getTime() + r * 24 * 60 * 60 * 1e3), o = "; expires=" + b.toGMTString()
        }
        a && (s = !0, E = "; SameSite=None"), s && (E += "; secure");
        var T = t + "=" + encodeURIComponent(e) + o + "; path=/" + u + E;
        return j.cookie = T, T
    },
    remove: function(t, e, r) {
        l.cookie.set(t, "", -1, e, !1, !1, r)
    }
};
var Xr = null,
    ar = function(t, e) {
        if (Xr !== null && !e) return Xr;
        var r = !0;
        try {
            t = t || window.localStorage;
            var i = "__mplss_" + xn(8),
                s = "xyz";
            t.setItem(i, s), t.getItem(i) !== s && (r = !1), t.removeItem(i)
        } catch {
            r = !1
        }
        return Xr = r, r
    };
l.localStorage = {
    is_supported: function(t) {
        var e = ar(null, t);
        return e || X.error("localStorage unsupported; falling back to cookie store"), e
    },
    error: function(t) {
        X.error("localStorage error: " + t)
    },
    get: function(t) {
        try {
            return window.localStorage.getItem(t)
        } catch (e) {
            l.localStorage.error(e)
        }
        return null
    },
    parse: function(t) {
        try {
            return l.JSONDecode(l.localStorage.get(t)) || {}
        } catch {}
        return null
    },
    set: function(t, e) {
        try {
            window.localStorage.setItem(t, e)
        } catch (r) {
            l.localStorage.error(r)
        }
    },
    remove: function(t) {
        try {
            window.localStorage.removeItem(t)
        } catch (e) {
            l.localStorage.error(e)
        }
    }
};
l.register_event = function() {
    var t = function(i, s, a, f, u) {
        if (!i) {
            X.error("No valid element provided to register_event");
            return
        }
        if (i.addEventListener && !f) i.addEventListener(s, a, !!u);
        else {
            var o = "on" + s,
                E = i[o];
            i[o] = e(i, a, E)
        }
    };

    function e(i, s, a) {
        var f = function(u) {
            if (u = u || r(window.event), !!u) {
                var o = !0,
                    E, _;
                return l.isFunction(a) && (E = a(u)), _ = s.call(i, u), (E === !1 || _ === !1) && (o = !1), o
            }
        };
        return f
    }

    function r(i) {
        return i && (i.preventDefault = r.preventDefault, i.stopPropagation = r.stopPropagation), i
    }
    return r.preventDefault = function() {
        this.returnValue = !1
    }, r.stopPropagation = function() {
        this.cancelBubble = !0
    }, t
}();
var af = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
l.dom_query = function() {
    function t(s) {
        return s.all ? s.all : s.getElementsByTagName("*")
    }
    var e = /[\t\r\n]/g;

    function r(s, a) {
        var f = " " + a + " ";
        return (" " + s.className + " ").replace(e, " ").indexOf(f) >= 0
    }

    function i(s) {
        if (!j.getElementsByTagName) return [];
        var a = s.split(" "),
            f, u, o, E, _, b, T, g, A, B, U = [j];
        for (b = 0; b < a.length; b++) {
            if (f = a[b].replace(/^\s+/, "").replace(/\s+$/, ""), f.indexOf("#") > -1) {
                u = f.split("#"), o = u[0];
                var q = u[1],
                    F = j.getElementById(q);
                if (!F || o && F.nodeName.toLowerCase() != o) return [];
                U = [F];
                continue
            }
            if (f.indexOf(".") > -1) {
                u = f.split("."), o = u[0];
                var Ee = u[1];
                for (o || (o = "*"), E = [], _ = 0, T = 0; T < U.length; T++)
                    for (o == "*" ? A = t(U[T]) : A = U[T].getElementsByTagName(o), g = 0; g < A.length; g++) E[_++] = A[g];
                for (U = [], B = 0, T = 0; T < E.length; T++) E[T].className && l.isString(E[T].className) && r(E[T], Ee) && (U[B++] = E[T]);
                continue
            }
            var Se = f.match(af);
            if (Se) {
                o = Se[1];
                var pe = Se[2],
                    Ye = Se[3],
                    te = Se[4];
                for (o || (o = "*"), E = [], _ = 0, T = 0; T < U.length; T++)
                    for (o == "*" ? A = t(U[T]) : A = U[T].getElementsByTagName(o), g = 0; g < A.length; g++) E[_++] = A[g];
                U = [], B = 0;
                var xe;
                switch (Ye) {
                    case "=":
                        xe = function(Y) {
                            return Y.getAttribute(pe) == te
                        };
                        break;
                    case "~":
                        xe = function(Y) {
                            return Y.getAttribute(pe).match(new RegExp("\\b" + te + "\\b"))
                        };
                        break;
                    case "|":
                        xe = function(Y) {
                            return Y.getAttribute(pe).match(new RegExp("^" + te + "-?"))
                        };
                        break;
                    case "^":
                        xe = function(Y) {
                            return Y.getAttribute(pe).indexOf(te) === 0
                        };
                        break;
                    case "$":
                        xe = function(Y) {
                            return Y.getAttribute(pe).lastIndexOf(te) == Y.getAttribute(pe).length - te.length
                        };
                        break;
                    case "*":
                        xe = function(Y) {
                            return Y.getAttribute(pe).indexOf(te) > -1
                        };
                        break;
                    default:
                        xe = function(Y) {
                            return Y.getAttribute(pe)
                        }
                }
                for (U = [], B = 0, T = 0; T < E.length; T++) xe(E[T]) && (U[B++] = E[T]);
                continue
            }
            for (o = f, E = [], _ = 0, T = 0; T < U.length; T++)
                for (A = U[T].getElementsByTagName(o), g = 0; g < A.length; g++) E[_++] = A[g];
            U = E
        }
        return U
    }
    return function(s) {
        return l.isElement(s) ? [s] : l.isObject(s) && !l.isUndefined(s.length) ? s : i.call(this, s)
    }
}();
var ff = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"],
    uf = ["dclid", "fbclid", "gclid", "ko_click_id", "li_fat_id", "msclkid", "ttclid", "twclid", "wbraid"];
l.info = {
    campaignParams: function(t) {
        var e = "",
            r = {};
        return l.each(ff, function(i) {
            e = l.getQueryParam(j.URL, i), e.length ? r[i] = e : t !== void 0 && (r[i] = t)
        }), r
    },
    clickParams: function() {
        var t = "",
            e = {};
        return l.each(uf, function(r) {
            t = l.getQueryParam(j.URL, r), t.length && (e[r] = t)
        }), e
    },
    marketingParams: function() {
        return l.extend(l.info.campaignParams(), l.info.clickParams())
    },
    searchEngine: function(t) {
        return t.search("https?://(.*)google.([^/?]*)") === 0 ? "google" : t.search("https?://(.*)bing.com") === 0 ? "bing" : t.search("https?://(.*)yahoo.com") === 0 ? "yahoo" : t.search("https?://(.*)duckduckgo.com") === 0 ? "duckduckgo" : null
    },
    searchInfo: function(t) {
        var e = l.info.searchEngine(t),
            r = e != "yahoo" ? "q" : "p",
            i = {};
        if (e !== null) {
            i.$search_engine = e;
            var s = l.getQueryParam(t, r);
            s.length && (i.mp_keyword = s)
        }
        return i
    },
    browser: function(t, e, r) {
        return e = e || "", r || l.includes(t, " OPR/") ? l.includes(t, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : l.includes(t, "IEMobile") || l.includes(t, "WPDesktop") ? "Internet Explorer Mobile" : l.includes(t, "SamsungBrowser/") ? "Samsung Internet" : l.includes(t, "Edge") || l.includes(t, "Edg/") ? "Microsoft Edge" : l.includes(t, "FBIOS") ? "Facebook Mobile" : l.includes(t, "Chrome") ? "Chrome" : l.includes(t, "CriOS") ? "Chrome iOS" : l.includes(t, "UCWEB") || l.includes(t, "UCBrowser") ? "UC Browser" : l.includes(t, "FxiOS") ? "Firefox iOS" : l.includes(e, "Apple") ? l.includes(t, "Mobile") ? "Mobile Safari" : "Safari" : l.includes(t, "Android") ? "Android Mobile" : l.includes(t, "Konqueror") ? "Konqueror" : l.includes(t, "Firefox") ? "Firefox" : l.includes(t, "MSIE") || l.includes(t, "Trident/") ? "Internet Explorer" : l.includes(t, "Gecko") ? "Mozilla" : ""
    },
    browserVersion: function(t, e, r) {
        var i = l.info.browser(t, e, r),
            s = {
                "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
                "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
                Chrome: /Chrome\/(\d+(\.\d+)?)/,
                "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
                "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
                Safari: /Version\/(\d+(\.\d+)?)/,
                "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
                Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                Firefox: /Firefox\/(\d+(\.\d+)?)/,
                "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
                Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                "Android Mobile": /android\s(\d+(\.\d+)?)/,
                "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
                "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
                Mozilla: /rv:(\d+(\.\d+)?)/
            },
            a = s[i];
        if (a === void 0) return null;
        var f = t.match(a);
        return f ? parseFloat(f[f.length - 2]) : null
    },
    os: function() {
        var t = ve;
        return /Windows/i.test(t) ? /Phone/.test(t) || /WPDesktop/.test(t) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(t) ? "iOS" : /Android/.test(t) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : /Mac/i.test(t) ? "Mac OS X" : /Linux/.test(t) ? "Linux" : /CrOS/.test(t) ? "Chrome OS" : ""
    },
    device: function(t) {
        return /Windows Phone/i.test(t) || /WPDesktop/.test(t) ? "Windows Phone" : /iPad/.test(t) ? "iPad" : /iPod/.test(t) ? "iPod Touch" : /iPhone/.test(t) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : /Android/.test(t) ? "Android" : ""
    },
    referringDomain: function(t) {
        var e = t.split("/");
        return e.length >= 3 ? e[2] : ""
    },
    currentUrl: function() {
        return O.location.href
    },
    properties: function(t) {
        return typeof t != "object" && (t = {}), l.extend(l.strip_empty_properties({
            $os: l.info.os(),
            $browser: l.info.browser(ve, je.vendor, Wt),
            $referrer: j.referrer,
            $referring_domain: l.info.referringDomain(j.referrer),
            $device: l.info.device(ve)
        }), {
            $current_url: l.info.currentUrl(),
            $browser_version: l.info.browserVersion(ve, je.vendor, Wt),
            $screen_height: sr.height,
            $screen_width: sr.width,
            mp_lib: "web",
            $lib_version: Ie.LIB_VERSION,
            $insert_id: xn(),
            time: l.timestamp() / 1e3
        }, l.strip_empty_properties(t))
    },
    people_properties: function() {
        return l.extend(l.strip_empty_properties({
            $os: l.info.os(),
            $browser: l.info.browser(ve, je.vendor, Wt)
        }), {
            $browser_version: l.info.browserVersion(ve, je.vendor, Wt)
        })
    },
    mpPageViewProperties: function() {
        return l.strip_empty_properties({
            current_page_title: j.title,
            current_domain: O.location.hostname,
            current_url_path: O.location.pathname,
            current_url_protocol: O.location.protocol,
            current_url_search: O.location.search
        })
    }
};
var xn = function(t) {
        var e = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
        return t ? e.substring(0, t) : e
    },
    lf = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
    of = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
    ai = function(t) {
        var e = of,
            r = t.split("."),
            i = r[r.length - 1];
        (i.length > 4 || i === "com" || i === "org") && (e = lf);
        var s = t.match(e);
        return s ? s[0] : ""
    },
    fr = null,
    ur = null;
typeof JSON < "u" && (fr = JSON.stringify, ur = JSON.parse);
fr = fr || l.JSONEncode;
ur = ur || l.JSONDecode;
l.toArray = l.toArray;
l.isObject = l.isObject;
l.JSONEncode = l.JSONEncode;
l.JSONDecode = l.JSONDecode;
l.isBlockedUA = l.isBlockedUA;
l.isEmptyObject = l.isEmptyObject;
l.info = l.info;
l.info.device = l.info.device;
l.info.browser = l.info.browser;
l.info.browserVersion = l.info.browserVersion;
l.info.properties = l.info.properties;
var ke = function() {};
ke.prototype.create_properties = function() {};
ke.prototype.event_handler = function() {};
ke.prototype.after_track_handler = function() {};
ke.prototype.init = function(t) {
    return this.mp = t, this
};
ke.prototype.track = function(t, e, r, i) {
    var s = this,
        a = l.dom_query(t);
    if (a.length === 0) {
        X.error("The DOM query (" + t + ") returned 0 elements");
        return
    }
    return l.each(a, function(f) {
        l.register_event(f, this.override_event, function(u) {
            var o = {},
                E = s.create_properties(r, this),
                _ = s.mp.get_config("track_links_timeout");
            s.event_handler(u, this, o), window.setTimeout(s.track_callback(i, E, o, !0), _), s.mp.track(e, E, s.track_callback(i, E, o))
        })
    }, this), !0
};
ke.prototype.track_callback = function(t, e, r, i) {
    i = i || !1;
    var s = this;
    return function() {
        r.callback_fired || (r.callback_fired = !0, !(t && t(i, e) === !1) && s.after_track_handler(e, r, i))
    }
};
ke.prototype.create_properties = function(t, e) {
    var r;
    return typeof t == "function" ? r = t(e) : r = l.extend({}, t), r
};
var Rt = function() {
    this.override_event = "click"
};
l.inherit(Rt, ke);
Rt.prototype.create_properties = function(t, e) {
    var r = Rt.superclass.create_properties.apply(this, arguments);
    return e.href && (r.url = e.href), r
};
Rt.prototype.event_handler = function(t, e, r) {
    r.new_tab = t.which === 2 || t.metaKey || t.ctrlKey || e.target === "_blank", r.href = e.href, r.new_tab || t.preventDefault()
};
Rt.prototype.after_track_handler = function(t, e) {
    e.new_tab || setTimeout(function() {
        window.location = e.href
    }, 0)
};
var gr = function() {
    this.override_event = "submit"
};
l.inherit(gr, ke);
gr.prototype.event_handler = function(t, e, r) {
    r.element = e, t.preventDefault()
};
gr.prototype.after_track_handler = function(t, e) {
    setTimeout(function() {
        e.element.submit()
    }, 0)
};
var Ef = cn("lock"),
    ms = function(t, e) {
        e = e || {}, this.storageKey = t, this.storage = e.storage || window.localStorage, this.pollIntervalMS = e.pollIntervalMS || 100, this.timeoutMS = e.timeoutMS || 2e3
    };
ms.prototype.withLock = function(t, e, r) {
    !r && typeof e != "function" && (r = e, e = null);
    var i = r || new Date().getTime() + "|" + Math.random(),
        s = new Date().getTime(),
        a = this.storageKey,
        f = this.pollIntervalMS,
        u = this.timeoutMS,
        o = this.storage,
        E = a + ":X",
        _ = a + ":Y",
        b = a + ":Z",
        T = function(F) {
            e && e(F)
        },
        g = function(F) {
            if (new Date().getTime() - s > u) {
                Ef.error("Timeout waiting for mutex on " + a + "; clearing lock. [" + i + "]"), o.removeItem(b), o.removeItem(_), U();
                return
            }
            setTimeout(function() {
                try {
                    F()
                } catch (Ee) {
                    T(Ee)
                }
            }, f * (Math.random() + .1))
        },
        A = function(F, Ee) {
            F() ? Ee() : g(function() {
                A(F, Ee)
            })
        },
        B = function() {
            var F = o.getItem(_);
            if (F && F !== i) return !1;
            if (o.setItem(_, i), o.getItem(_) === i) return !0;
            if (!ar(o, !0)) throw new Error("localStorage support dropped while acquiring lock");
            return !1
        },
        U = function() {
            o.setItem(E, i), A(B, function() {
                if (o.getItem(E) === i) {
                    q();
                    return
                }
                g(function() {
                    if (o.getItem(_) !== i) {
                        U();
                        return
                    }
                    A(function() {
                        return !o.getItem(b)
                    }, q)
                })
            })
        },
        q = function() {
            o.setItem(b, "1");
            try {
                t()
            } finally {
                o.removeItem(b), o.getItem(_) === i && o.removeItem(_), o.getItem(E) === i && o.removeItem(E)
            }
        };
    try {
        if (ar(o, !0)) U();
        else throw new Error("localStorage support check failed")
    } catch (F) {
        T(F)
    }
};
var fi = cn("batch"),
    We = function(t, e) {
        e = e || {}, this.storageKey = t, this.storage = e.storage || window.localStorage, this.reportError = e.errorReporter || l.bind(fi.error, fi), this.lock = new ms(t, {
            storage: this.storage
        }), this.pid = e.pid || null, this.memQueue = []
    };
We.prototype.enqueue = function(t, e, r) {
    var i = {
        id: xn(),
        flushAfter: new Date().getTime() + e * 2,
        payload: t
    };
    this.lock.withLock(l.bind(function() {
        var a;
        try {
            var f = this.readFromStorage();
            f.push(i), a = this.saveToStorage(f), a && this.memQueue.push(i)
        } catch {
            this.reportError("Error enqueueing item", t), a = !1
        }
        r && r(a)
    }, this), l.bind(function(a) {
        this.reportError("Error acquiring storage lock", a), r && r(!1)
    }, this), this.pid)
};
We.prototype.fillBatch = function(t) {
    var e = this.memQueue.slice(0, t);
    if (e.length < t) {
        var r = this.readFromStorage();
        if (r.length) {
            var i = {};
            l.each(e, function(f) {
                i[f.id] = !0
            });
            for (var s = 0; s < r.length; s++) {
                var a = r[s];
                if (new Date().getTime() > a.flushAfter && !i[a.id] && (a.orphaned = !0, e.push(a), e.length >= t)) break
            }
        }
    }
    return e
};
var ui = function(t, e) {
    var r = [];
    return l.each(t, function(i) {
        i.id && !e[i.id] && r.push(i)
    }), r
};
We.prototype.removeItemsByID = function(t, e) {
    var r = {};
    l.each(t, function(s) {
        r[s] = !0
    }), this.memQueue = ui(this.memQueue, r);
    var i = l.bind(function() {
        var s;
        try {
            var a = this.readFromStorage();
            if (a = ui(a, r), s = this.saveToStorage(a), s) {
                a = this.readFromStorage();
                for (var f = 0; f < a.length; f++) {
                    var u = a[f];
                    if (u.id && r[u.id]) return this.reportError("Item not removed from storage"), !1
                }
            }
        } catch {
            this.reportError("Error removing items", t), s = !1
        }
        return s
    }, this);
    this.lock.withLock(function() {
        var a = i();
        e && e(a)
    }, l.bind(function(a) {
        var f = !1;
        if (this.reportError("Error acquiring storage lock", a), !ar(this.storage, !0) && (f = i(), !f)) try {
            this.storage.removeItem(this.storageKey)
        } catch (u) {
            this.reportError("Error clearing queue", u)
        }
        e && e(f)
    }, this), this.pid)
};
var li = function(t, e) {
    var r = [];
    return l.each(t, function(i) {
        var s = i.id;
        if (s in e) {
            var a = e[s];
            a !== null && (i.payload = a, r.push(i))
        } else r.push(i)
    }), r
};
We.prototype.updatePayloads = function(t, e) {
    this.memQueue = li(this.memQueue, t), this.lock.withLock(l.bind(function() {
        var i;
        try {
            var s = this.readFromStorage();
            s = li(s, t), i = this.saveToStorage(s)
        } catch {
            this.reportError("Error updating items", t), i = !1
        }
        e && e(i)
    }, this), l.bind(function(i) {
        this.reportError("Error acquiring storage lock", i), e && e(!1)
    }, this), this.pid)
};
We.prototype.readFromStorage = function() {
    var t;
    try {
        t = this.storage.getItem(this.storageKey), t && (t = ur(t), l.isArray(t) || (this.reportError("Invalid storage entry:", t), t = null))
    } catch (e) {
        this.reportError("Error retrieving queue", e), t = null
    }
    return t || []
};
We.prototype.saveToStorage = function(t) {
    try {
        return this.storage.setItem(this.storageKey, fr(t)), !0
    } catch (e) {
        return this.reportError("Error saving queue", e), !1
    }
};
We.prototype.clear = function() {
    this.memQueue = [], this.storage.removeItem(this.storageKey)
};
var pf = 10 * 60 * 1e3,
    Pt = cn("batch"),
    Ke = function(t, e) {
        this.errorReporter = e.errorReporter, this.queue = new We(t, {
            errorReporter: l.bind(this.reportError, this),
            storage: e.storage
        }), this.libConfig = e.libConfig, this.sendRequest = e.sendRequestFunc, this.beforeSendHook = e.beforeSendHook, this.stopAllBatching = e.stopAllBatchingFunc, this.batchSize = this.libConfig.batch_size, this.flushInterval = this.libConfig.batch_flush_interval_ms, this.stopped = !this.libConfig.batch_autostart, this.consecutiveRemovalFailures = 0, this.itemIdsSentSuccessfully = {}
    };
Ke.prototype.enqueue = function(t, e) {
    this.queue.enqueue(t, this.flushInterval, e)
};
Ke.prototype.start = function() {
    this.stopped = !1, this.consecutiveRemovalFailures = 0, this.flush()
};
Ke.prototype.stop = function() {
    this.stopped = !0, this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null)
};
Ke.prototype.clear = function() {
    this.queue.clear()
};
Ke.prototype.resetBatchSize = function() {
    this.batchSize = this.libConfig.batch_size
};
Ke.prototype.resetFlush = function() {
    this.scheduleFlush(this.libConfig.batch_flush_interval_ms)
};
Ke.prototype.scheduleFlush = function(t) {
    this.flushInterval = t, this.stopped || (this.timeoutID = setTimeout(l.bind(this.flush, this), this.flushInterval))
};
Ke.prototype.flush = function(t) {
    try {
        if (this.requestInProgress) {
            Pt.log("Flush: Request already in progress");
            return
        }
        t = t || {};
        var e = this.libConfig.batch_request_timeout_ms,
            r = new Date().getTime(),
            i = this.batchSize,
            s = this.queue.fillBatch(i),
            a = [],
            f = {};
        if (l.each(s, function(E) {
                var _ = E.payload;
                if (this.beforeSendHook && !E.orphaned && (_ = this.beforeSendHook(_)), _) {
                    _.event && _.properties && (_.properties = l.extend({}, _.properties, {
                        mp_sent_by_lib_version: Ie.LIB_VERSION
                    }));
                    var b = !0,
                        T = E.id;
                    T ? (this.itemIdsSentSuccessfully[T] || 0) > 5 && (this.reportError("[dupe] item ID sent too many times, not sending", {
                        item: E,
                        batchSize: s.length,
                        timesSent: this.itemIdsSentSuccessfully[T]
                    }), b = !1) : this.reportError("[dupe] found item with no ID", {
                        item: E
                    }), b && a.push(_)
                }
                f[E.id] = _
            }, this), a.length < 1) {
            this.resetFlush();
            return
        }
        this.requestInProgress = !0;
        var u = l.bind(function(E) {
                this.requestInProgress = !1;
                try {
                    var _ = !1;
                    if (t.unloading) this.queue.updatePayloads(f);
                    else if (l.isObject(E) && E.error === "timeout" && new Date().getTime() - r >= e) this.reportError("Network timeout; retrying"), this.flush();
                    else if (l.isObject(E) && E.xhr_req && (E.xhr_req.status >= 500 || E.xhr_req.status === 429 || E.error === "timeout")) {
                        var b = this.flushInterval * 2,
                            T = E.xhr_req.responseHeaders;
                        if (T) {
                            var g = T["Retry-After"];
                            g && (b = parseInt(g, 10) * 1e3 || b)
                        }
                        b = Math.min(pf, b), this.reportError("Error; retry in " + b + " ms"), this.scheduleFlush(b)
                    } else if (l.isObject(E) && E.xhr_req && E.xhr_req.status === 413)
                        if (s.length > 1) {
                            var A = Math.max(1, Math.floor(i / 2));
                            this.batchSize = Math.min(this.batchSize, A, s.length - 1), this.reportError("413 response; reducing batch size to " + this.batchSize), this.resetFlush()
                        } else this.reportError("Single-event request too large; dropping", s), this.resetBatchSize(), _ = !0;
                    else _ = !0;
                    _ && (this.queue.removeItemsByID(l.map(s, function(B) {
                        return B.id
                    }), l.bind(function(B) {
                        B ? (this.consecutiveRemovalFailures = 0, this.flush()) : (this.reportError("Failed to remove items from queue"), ++this.consecutiveRemovalFailures > 5 ? (this.reportError("Too many queue failures; disabling batching system."), this.stopAllBatching()) : this.resetFlush())
                    }, this)), l.each(s, l.bind(function(B) {
                        var U = B.id;
                        U ? (this.itemIdsSentSuccessfully[U] = this.itemIdsSentSuccessfully[U] || 0, this.itemIdsSentSuccessfully[U]++, this.itemIdsSentSuccessfully[U] > 5 && this.reportError("[dupe] item ID sent too many times", {
                            item: B,
                            batchSize: s.length,
                            timesSent: this.itemIdsSentSuccessfully[U]
                        })) : this.reportError("[dupe] found item with no ID while removing", {
                            item: B
                        })
                    }, this)))
                } catch (B) {
                    this.reportError("Error handling API response", B), this.resetFlush()
                }
            }, this),
            o = {
                method: "POST",
                verbose: !0,
                ignore_json_errors: !0,
                timeout_ms: e
            };
        t.unloading && (o.transport = "sendBeacon"), Pt.log("MIXPANEL REQUEST:", a), this.sendRequest(a, o, u)
    } catch (E) {
        this.reportError("Error flushing request queue", E), this.resetFlush()
    }
};
Ke.prototype.reportError = function(t, e) {
    if (Pt.error.apply(Pt.error, arguments), this.errorReporter) try {
        e instanceof Error || (e = new Error(t)), this.errorReporter(t, e)
    } catch (r) {
        Pt.error(r)
    }
};
var cf = "__mp_opt_in_out_";

function xf(t, e) {
    vs(!0, t, e)
}

function _f(t, e) {
    vs(!1, t, e)
}

function hf(t, e) {
    return ys(t, e) === "1"
}

function Cs(t, e) {
    if (Tf(e)) return X.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'), !0;
    var r = ys(t, e) === "0";
    return r && X.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."), r
}

function at(t) {
    return Rn(t, function(e) {
        return this.get_config(e)
    })
}

function ze(t) {
    return Rn(t, function(e) {
        return this._get_config(e)
    })
}

function At(t) {
    return Rn(t, function(e) {
        return this._get_config(e)
    })
}

function Rf(t, e) {
    e = e || {}, _n(e).remove(hn(t, e), !!e.crossSubdomainCookie, e.cookieDomain)
}

function _n(t) {
    return t = t || {}, t.persistenceType === "localStorage" ? l.localStorage : l.cookie
}

function hn(t, e) {
    return e = e || {}, (e.persistencePrefix || cf) + t
}

function ys(t, e) {
    return _n(e).get(hn(t, e))
}

function Tf(t) {
    if (t && t.ignoreDnt) return !1;
    var e = t && t.window || O,
        r = e.navigator || {},
        i = !1;
    return l.each([r.doNotTrack, r.msDoNotTrack, e.doNotTrack], function(s) {
        l.includes([!0, 1, "1", "yes"], s) && (i = !0)
    }), i
}

function vs(t, e, r) {
    if (!l.isString(e) || !e.length) {
        X.error("gdpr." + (t ? "optIn" : "optOut") + " called with an invalid token");
        return
    }
    r = r || {}, _n(r).set(hn(e, r), t ? 1 : 0, l.isNumber(r.cookieExpiration) ? r.cookieExpiration : null, !!r.crossSubdomainCookie, !!r.secureCookie, !!r.crossSiteCookie, r.cookieDomain), r.track && t && r.track(r.trackEventName || "$opt_in", r.trackProperties, {
        send_immediately: !0
    })
}

function Rn(t, e) {
    return function() {
        var r = !1;
        try {
            var i = e.call(this, "token"),
                s = e.call(this, "ignore_dnt"),
                a = e.call(this, "opt_out_tracking_persistence_type"),
                f = e.call(this, "opt_out_tracking_cookie_prefix"),
                u = e.call(this, "window");
            i && (r = Cs(i, {
                ignoreDnt: s,
                persistenceType: a,
                persistencePrefix: f,
                window: u
            }))
        } catch (E) {
            X.error("Unexpected error when checking tracking opt-out status: " + E)
        }
        if (!r) return t.apply(this, arguments);
        var o = arguments[arguments.length - 1];
        typeof o == "function" && o(0)
    }
}
var Fe = "$set",
    Tt = "$set_once",
    Ce = "$unset",
    Qe = "$add",
    Be = "$append",
    Ze = "$union",
    Oe = "$remove",
    bf = "$delete",
    Us = {
        set_action: function(t, e) {
            var r = {},
                i = {};
            return l.isObject(t) ? l.each(t, function(s, a) {
                this._is_reserved_property(a) || (i[a] = s)
            }, this) : i[t] = e, r[Fe] = i, r
        },
        unset_action: function(t) {
            var e = {},
                r = [];
            return l.isArray(t) || (t = [t]), l.each(t, function(i) {
                this._is_reserved_property(i) || r.push(i)
            }, this), e[Ce] = r, e
        },
        set_once_action: function(t, e) {
            var r = {},
                i = {};
            return l.isObject(t) ? l.each(t, function(s, a) {
                this._is_reserved_property(a) || (i[a] = s)
            }, this) : i[t] = e, r[Tt] = i, r
        },
        union_action: function(t, e) {
            var r = {},
                i = {};
            return l.isObject(t) ? l.each(t, function(s, a) {
                this._is_reserved_property(a) || (i[a] = l.isArray(s) ? s : [s])
            }, this) : i[t] = l.isArray(e) ? e : [e], r[Ze] = i, r
        },
        append_action: function(t, e) {
            var r = {},
                i = {};
            return l.isObject(t) ? l.each(t, function(s, a) {
                this._is_reserved_property(a) || (i[a] = s)
            }, this) : i[t] = e, r[Be] = i, r
        },
        remove_action: function(t, e) {
            var r = {},
                i = {};
            return l.isObject(t) ? l.each(t, function(s, a) {
                this._is_reserved_property(a) || (i[a] = s)
            }, this) : i[t] = e, r[Oe] = i, r
        },
        delete_action: function() {
            var t = {};
            return t[bf] = "", t
        }
    },
    Z = function() {};
l.extend(Z.prototype, Us);
Z.prototype._init = function(t, e, r) {
    this._mixpanel = t, this._group_key = e, this._group_id = r
};
Z.prototype.set = At(function(t, e, r) {
    var i = this.set_action(t, e);
    return l.isObject(t) && (r = e), this._send_request(i, r)
});
Z.prototype.set_once = At(function(t, e, r) {
    var i = this.set_once_action(t, e);
    return l.isObject(t) && (r = e), this._send_request(i, r)
});
Z.prototype.unset = At(function(t, e) {
    var r = this.unset_action(t);
    return this._send_request(r, e)
});
Z.prototype.union = At(function(t, e, r) {
    l.isObject(t) && (r = e);
    var i = this.union_action(t, e);
    return this._send_request(i, r)
});
Z.prototype.delete = At(function(t) {
    var e = this.delete_action();
    return this._send_request(e, t)
});
Z.prototype.remove = At(function(t, e, r) {
    var i = this.remove_action(t, e);
    return this._send_request(i, r)
});
Z.prototype._send_request = function(t, e) {
    t.$group_key = this._group_key, t.$group_id = this._group_id, t.$token = this._get_config("token");
    var r = l.encodeDates(t);
    return this._mixpanel._track_or_batch({
        type: "groups",
        data: r,
        endpoint: this._get_config("api_host") + "/" + this._get_config("api_routes").groups,
        batcher: this._mixpanel.request_batchers.groups
    }, e)
};
Z.prototype._is_reserved_property = function(t) {
    return t === "$group_key" || t === "$group_id"
};
Z.prototype._get_config = function(t) {
    return this._mixpanel.get_config(t)
};
Z.prototype.toString = function() {
    return this._mixpanel.toString() + ".group." + this._group_key + "." + this._group_id
};
Z.prototype.remove = Z.prototype.remove;
Z.prototype.set = Z.prototype.set;
Z.prototype.set_once = Z.prototype.set_once;
Z.prototype.union = Z.prototype.union;
Z.prototype.unset = Z.prototype.unset;
Z.prototype.toString = Z.prototype.toString;
var D = function() {};
l.extend(D.prototype, Us);
D.prototype._init = function(t) {
    this._mixpanel = t
};
D.prototype.set = ze(function(t, e, r) {
    var i = this.set_action(t, e);
    return l.isObject(t) && (r = e), this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer), i[Fe] = l.extend({}, l.info.people_properties(), i[Fe]), this._send_request(i, r)
});
D.prototype.set_once = ze(function(t, e, r) {
    var i = this.set_once_action(t, e);
    return l.isObject(t) && (r = e), this._send_request(i, r)
});
D.prototype.unset = ze(function(t, e) {
    var r = this.unset_action(t);
    return this._send_request(r, e)
});
D.prototype.increment = ze(function(t, e, r) {
    var i = {},
        s = {};
    return l.isObject(t) ? (l.each(t, function(a, f) {
        if (!this._is_reserved_property(f))
            if (isNaN(parseFloat(a))) {
                X.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
                return
            } else s[f] = a
    }, this), r = e) : (l.isUndefined(e) && (e = 1), s[t] = e), i[Qe] = s, this._send_request(i, r)
});
D.prototype.append = ze(function(t, e, r) {
    l.isObject(t) && (r = e);
    var i = this.append_action(t, e);
    return this._send_request(i, r)
});
D.prototype.remove = ze(function(t, e, r) {
    l.isObject(t) && (r = e);
    var i = this.remove_action(t, e);
    return this._send_request(i, r)
});
D.prototype.union = ze(function(t, e, r) {
    l.isObject(t) && (r = e);
    var i = this.union_action(t, e);
    return this._send_request(i, r)
});
D.prototype.track_charge = ze(function(t, e, r) {
    if (!l.isNumber(t) && (t = parseFloat(t), isNaN(t))) {
        X.error("Invalid value passed to mixpanel.people.track_charge - must be a number");
        return
    }
    return this.append("$transactions", l.extend({
        $amount: t
    }, e), r)
});
D.prototype.clear_charges = function(t) {
    return this.set("$transactions", [], t)
};
D.prototype.delete_user = function() {
    if (!this._identify_called()) {
        X.error("mixpanel.people.delete_user() requires you to call identify() first");
        return
    }
    var t = {
        $delete: this._mixpanel.get_distinct_id()
    };
    return this._send_request(t)
};
D.prototype.toString = function() {
    return this._mixpanel.toString() + ".people"
};
D.prototype._send_request = function(t, e) {
    t.$token = this._get_config("token"), t.$distinct_id = this._mixpanel.get_distinct_id();
    var r = this._mixpanel.get_property("$device_id"),
        i = this._mixpanel.get_property("$user_id"),
        s = this._mixpanel.get_property("$had_persisted_distinct_id");
    r && (t.$device_id = r), i && (t.$user_id = i), s && (t.$had_persisted_distinct_id = s);
    var a = l.encodeDates(t);
    return this._identify_called() ? this._mixpanel._track_or_batch({
        type: "people",
        data: a,
        endpoint: this._get_config("api_host") + "/" + this._get_config("api_routes").engage,
        batcher: this._mixpanel.request_batchers.people
    }, e) : (this._enqueue(t), l.isUndefined(e) || (this._get_config("verbose") ? e({
        status: -1,
        error: null
    }) : e(-1)), l.truncate(a, 255))
};
D.prototype._get_config = function(t) {
    return this._mixpanel.get_config(t)
};
D.prototype._identify_called = function() {
    return this._mixpanel._flags.identify_called === !0
};
D.prototype._enqueue = function(t) {
    Fe in t ? this._mixpanel.persistence._add_to_people_queue(Fe, t) : Tt in t ? this._mixpanel.persistence._add_to_people_queue(Tt, t) : Ce in t ? this._mixpanel.persistence._add_to_people_queue(Ce, t) : Qe in t ? this._mixpanel.persistence._add_to_people_queue(Qe, t) : Be in t ? this._mixpanel.persistence._add_to_people_queue(Be, t) : Oe in t ? this._mixpanel.persistence._add_to_people_queue(Oe, t) : Ze in t ? this._mixpanel.persistence._add_to_people_queue(Ze, t) : X.error("Invalid call to _enqueue():", t)
};
D.prototype._flush_one_queue = function(t, e, r, i) {
    var s = this,
        a = l.extend({}, this._mixpanel.persistence.load_queue(t)),
        f = a;
    !l.isUndefined(a) && l.isObject(a) && !l.isEmptyObject(a) && (s._mixpanel.persistence._pop_from_people_queue(t, a), s._mixpanel.persistence.save(), i && (f = i(a)), e.call(s, f, function(u, o) {
        u === 0 && s._mixpanel.persistence._add_to_people_queue(t, a), l.isUndefined(r) || r(u, o)
    }))
};
D.prototype._flush = function(t, e, r, i, s, a, f) {
    var u = this;
    this._flush_one_queue(Fe, this.set, t), this._flush_one_queue(Tt, this.set_once, i), this._flush_one_queue(Ce, this.unset, a, function(U) {
        return l.keys(U)
    }), this._flush_one_queue(Qe, this.increment, e), this._flush_one_queue(Ze, this.union, s);
    var o = this._mixpanel.persistence.load_queue(Be);
    if (!l.isUndefined(o) && l.isArray(o) && o.length)
        for (var E, _ = function(U, q) {
                U === 0 && u._mixpanel.persistence._add_to_people_queue(Be, E), l.isUndefined(r) || r(U, q)
            }, b = o.length - 1; b >= 0; b--) o = this._mixpanel.persistence.load_queue(Be), E = o.pop(), u._mixpanel.persistence.save(), l.isEmptyObject(E) || u.append(E, _);
    var T = this._mixpanel.persistence.load_queue(Oe);
    if (!l.isUndefined(T) && l.isArray(T) && T.length)
        for (var g, A = function(U, q) {
                U === 0 && u._mixpanel.persistence._add_to_people_queue(Oe, g), l.isUndefined(f) || f(U, q)
            }, B = T.length - 1; B >= 0; B--) T = this._mixpanel.persistence.load_queue(Oe), g = T.pop(), u._mixpanel.persistence.save(), l.isEmptyObject(g) || u.remove(g, A)
};
D.prototype._is_reserved_property = function(t) {
    return t === "$distinct_id" || t === "$token" || t === "$device_id" || t === "$user_id" || t === "$had_persisted_distinct_id"
};
D.prototype.set = D.prototype.set;
D.prototype.set_once = D.prototype.set_once;
D.prototype.unset = D.prototype.unset;
D.prototype.increment = D.prototype.increment;
D.prototype.append = D.prototype.append;
D.prototype.remove = D.prototype.remove;
D.prototype.union = D.prototype.union;
D.prototype.track_charge = D.prototype.track_charge;
D.prototype.clear_charges = D.prototype.clear_charges;
D.prototype.delete_user = D.prototype.delete_user;
D.prototype.toString = D.prototype.toString;
var Tn = "__mps",
    bn = "__mpso",
    Ln = "__mpus",
    gn = "__mpa",
    Sn = "__mpap",
    An = "__mpr",
    mn = "__mpu",
    Bs = "$people_distinct_id",
    lr = "__alias",
    Vt = "__timers",
    Lf = [Tn, bn, Ln, gn, Sn, An, mn, Bs, lr, Vt],
    P = function(t) {
        this.props = {}, this.campaign_params_saved = !1, t.persistence_name ? this.name = "mp_" + t.persistence_name : this.name = "mp_" + t.token + "_mixpanel";
        var e = t.persistence;
        e !== "cookie" && e !== "localStorage" && (X.critical("Unknown persistence type " + e + "; falling back to cookie"), e = t.persistence = "cookie"), e === "localStorage" && l.localStorage.is_supported() ? this.storage = l.localStorage : this.storage = l.cookie, this.load(), this.update_config(t), this.upgrade(), this.save()
    };
P.prototype.properties = function() {
    var t = {};
    return this.load(), l.each(this.props, function(e, r) {
        l.include(Lf, r) || (t[r] = e)
    }), t
};
P.prototype.load = function() {
    if (!this.disabled) {
        var t = this.storage.parse(this.name);
        t && (this.props = l.extend({}, t))
    }
};
P.prototype.upgrade = function() {
    var t, e;
    this.storage === l.localStorage ? (t = l.cookie.parse(this.name), l.cookie.remove(this.name), l.cookie.remove(this.name, !0), t && this.register_once(t)) : this.storage === l.cookie && (e = l.localStorage.parse(this.name), l.localStorage.remove(this.name), e && this.register_once(e))
};
P.prototype.save = function() {
    this.disabled || this.storage.set(this.name, l.JSONEncode(this.props), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain)
};
P.prototype.load_prop = function(t) {
    return this.load(), this.props[t]
};
P.prototype.remove = function() {
    this.storage.remove(this.name, !1, this.cookie_domain), this.storage.remove(this.name, !0, this.cookie_domain)
};
P.prototype.clear = function() {
    this.remove(), this.props = {}
};
P.prototype.register_once = function(t, e, r) {
    return l.isObject(t) ? (typeof e > "u" && (e = "None"), this.expire_days = typeof r > "u" ? this.default_expiry : r, this.load(), l.each(t, function(i, s) {
        (!this.props.hasOwnProperty(s) || this.props[s] === e) && (this.props[s] = i)
    }, this), this.save(), !0) : !1
};
P.prototype.register = function(t, e) {
    return l.isObject(t) ? (this.expire_days = typeof e > "u" ? this.default_expiry : e, this.load(), l.extend(this.props, t), this.save(), !0) : !1
};
P.prototype.unregister = function(t) {
    this.load(), t in this.props && (delete this.props[t], this.save())
};
P.prototype.update_search_keyword = function(t) {
    this.register(l.info.searchInfo(t))
};
P.prototype.update_referrer_info = function(t) {
    this.register_once({
        $initial_referrer: t || "$direct",
        $initial_referring_domain: l.info.referringDomain(t) || "$direct"
    }, "")
};
P.prototype.get_referrer_info = function() {
    return l.strip_empty_properties({
        $initial_referrer: this.props.$initial_referrer,
        $initial_referring_domain: this.props.$initial_referring_domain
    })
};
P.prototype.update_config = function(t) {
    this.default_expiry = this.expire_days = t.cookie_expiration, this.set_disabled(t.disable_persistence), this.set_cookie_domain(t.cookie_domain), this.set_cross_site(t.cross_site_cookie), this.set_cross_subdomain(t.cross_subdomain_cookie), this.set_secure(t.secure_cookie)
};
P.prototype.set_disabled = function(t) {
    this.disabled = t, this.disabled ? this.remove() : this.save()
};
P.prototype.set_cookie_domain = function(t) {
    t !== this.cookie_domain && (this.remove(), this.cookie_domain = t, this.save())
};
P.prototype.set_cross_site = function(t) {
    t !== this.cross_site && (this.cross_site = t, this.remove(), this.save())
};
P.prototype.set_cross_subdomain = function(t) {
    t !== this.cross_subdomain && (this.cross_subdomain = t, this.remove(), this.save())
};
P.prototype.get_cross_subdomain = function() {
    return this.cross_subdomain
};
P.prototype.set_secure = function(t) {
    t !== this.secure && (this.secure = !!t, this.remove(), this.save())
};
P.prototype._add_to_people_queue = function(t, e) {
    var r = this._get_queue_key(t),
        i = e[t],
        s = this._get_or_create_queue(Fe),
        a = this._get_or_create_queue(Tt),
        f = this._get_or_create_queue(Ce),
        u = this._get_or_create_queue(Qe),
        o = this._get_or_create_queue(Ze),
        E = this._get_or_create_queue(Oe, []),
        _ = this._get_or_create_queue(Be, []);
    r === Tn ? (l.extend(s, i), this._pop_from_people_queue(Qe, i), this._pop_from_people_queue(Ze, i), this._pop_from_people_queue(Ce, i)) : r === bn ? (l.each(i, function(b, T) {
        T in a || (a[T] = b)
    }), this._pop_from_people_queue(Ce, i)) : r === Ln ? l.each(i, function(b) {
        l.each([s, a, u, o], function(T) {
            b in T && delete T[b]
        }), l.each(_, function(T) {
            b in T && delete T[b]
        }), f[b] = !0
    }) : r === gn ? (l.each(i, function(b, T) {
        T in s ? s[T] += b : (T in u || (u[T] = 0), u[T] += b)
    }, this), this._pop_from_people_queue(Ce, i)) : r === mn ? (l.each(i, function(b, T) {
        l.isArray(b) && (T in o || (o[T] = []), o[T] = o[T].concat(b))
    }), this._pop_from_people_queue(Ce, i)) : r === An ? (E.push(i), this._pop_from_people_queue(Be, i)) : r === Sn && (_.push(i), this._pop_from_people_queue(Ce, i)), X.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"), X.log(e), this.save()
};
P.prototype._pop_from_people_queue = function(t, e) {
    var r = this.props[this._get_queue_key(t)];
    l.isUndefined(r) || l.each(e, function(i, s) {
        t === Be || t === Oe ? l.each(r, function(a) {
            a[s] === i && delete a[s]
        }) : delete r[s]
    }, this)
};
P.prototype.load_queue = function(t) {
    return this.load_prop(this._get_queue_key(t))
};
P.prototype._get_queue_key = function(t) {
    if (t === Fe) return Tn;
    if (t === Tt) return bn;
    if (t === Ce) return Ln;
    if (t === Qe) return gn;
    if (t === Be) return Sn;
    if (t === Oe) return An;
    if (t === Ze) return mn;
    X.error("Invalid queue:", t)
};
P.prototype._get_or_create_queue = function(t, e) {
    var r = this._get_queue_key(t);
    return e = l.isUndefined(e) ? {} : e, this.props[r] || (this.props[r] = e)
};
P.prototype.set_event_timer = function(t, e) {
    var r = this.load_prop(Vt) || {};
    r[t] = e, this.props[Vt] = r, this.save()
};
P.prototype.remove_event_timer = function(t) {
    var e = this.load_prop(Vt) || {},
        r = e[t];
    return l.isUndefined(r) || (delete this.props[Vt][t], this.save()), r
};
var Cn, fe, Ks = 0,
    gf = 1,
    Sf = function(t) {
        return t
    },
    kt = function() {},
    be = "mixpanel",
    ds = "base64",
    Af = "json",
    yn = "$device:",
    xt = O.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
    Ns = !xt && ve.indexOf("MSIE") === -1 && ve.indexOf("Mozilla") === -1,
    or = null;
je.sendBeacon && (or = function() {
    return je.sendBeacon.apply(je, arguments)
});
var Ds = {
        track: "track/",
        engage: "engage/",
        groups: "groups/",
        record: "record/"
    },
    oi = {
        api_host: "https://api-js.mixpanel.com",
        api_routes: Ds,
        api_method: "POST",
        api_transport: "XHR",
        api_payload_format: ds,
        app_host: "https://mixpanel.com",
        cdn: "https://cdn.mxpnl.com",
        cross_site_cookie: !1,
        cross_subdomain_cookie: !0,
        error_reporter: kt,
        persistence: "cookie",
        persistence_name: "",
        cookie_domain: "",
        cookie_name: "",
        loaded: kt,
        mp_loader: null,
        track_marketing: !0,
        track_pageview: !1,
        skip_first_touch_marketing: !1,
        store_google: !0,
        stop_utm_persistence: !1,
        save_referrer: !0,
        test: !1,
        verbose: !1,
        img: !1,
        debug: !1,
        track_links_timeout: 300,
        cookie_expiration: 365,
        upgrade: !1,
        disable_persistence: !1,
        disable_cookie: !1,
        secure_cookie: !1,
        ip: !0,
        opt_out_tracking_by_default: !1,
        opt_out_persistence_by_default: !1,
        opt_out_tracking_persistence_type: "localStorage",
        opt_out_tracking_cookie_prefix: null,
        property_blacklist: [],
        xhr_headers: {},
        ignore_dnt: !1,
        batch_requests: !0,
        batch_size: 50,
        batch_flush_interval_ms: 5e3,
        batch_request_timeout_ms: 9e4,
        batch_autostart: !0,
        hooks: {},
        record_block_class: new RegExp("^(mp-block|fs-exclude|amp-block|rr-block|ph-no-capture)$"),
        record_block_selector: "img, video",
        record_idle_timeout_ms: 30 * 60 * 1e3,
        record_mask_text_class: new RegExp("^(mp-mask|fs-mask|amp-mask|rr-mask|ph-mask)$"),
        record_mask_text_selector: "*",
        record_max_ms: rf,
        record_sessions_percent: 0,
        recorder_src: "https://cdn.mxpnl.com/libs/mixpanel-recorder.min.js"
    },
    ws = !1,
    S = function() {},
    Wr = function(t, e, r) {
        var i, s = r === be ? fe : fe[r];
        if (s && Cn === Ks) i = s;
        else {
            if (s && !l.isArray(s)) {
                X.error("You have already initialized " + r);
                return
            }
            i = new S
        }
        if (i._cached_groups = {}, i._init(t, e, r), i.people = new D, i.people._init(i), !i.get_config("skip_first_touch_marketing")) {
            var a = l.info.campaignParams(null),
                f = {},
                u = !1;
            l.each(a, function(o, E) {
                f["initial_" + E] = o, o && (u = !0)
            }), u && i.people.set_once(f)
        }
        return Ie.DEBUG = Ie.DEBUG || i.get_config("debug"), !l.isUndefined(s) && l.isArray(s) && (i._execute_array.call(i.people, s.people), i._execute_array(s)), i
    };
S.prototype.init = function(t, e, r) {
    if (l.isUndefined(r)) {
        this.report_error("You must name your new library: init(token, config, name)");
        return
    }
    if (r === be) {
        this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
        return
    }
    var i = Wr(t, e, r);
    return fe[r] = i, i._loaded(), i
};
S.prototype._init = function(t, e, r) {
    e = e || {}, this.__loaded = !0, this.config = {};
    var i = {};
    if (!("api_payload_format" in e)) {
        var s = e.api_host || oi.api_host;
        s.match(/\.mixpanel\.com/) && (i.api_payload_format = Af)
    }
    if (this.set_config(l.extend({}, oi, i, e, {
            name: r,
            token: t,
            callback_fn: (r === be ? r : be + "." + r) + "._jsc"
        })), this._jsc = kt, this.__dom_loaded_queue = [], this.__request_queue = [], this.__disabled_events = [], this._flags = {
            disable_all_events: !1,
            identify_called: !1
        }, this.request_batchers = {}, this._batch_requests = this.get_config("batch_requests"), this._batch_requests) {
        if (!l.localStorage.is_supported(!0) || !xt) this._batch_requests = !1, X.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support"), l.each(this.get_batcher_configs(), function(o) {
            X.log("Clearing batch queue " + o.queue_key), l.localStorage.remove(o.queue_key)
        });
        else if (this.init_batchers(), or && O.addEventListener) {
            var a = l.bind(function() {
                this.request_batchers.events.stopped || this.request_batchers.events.flush({
                    unloading: !0
                })
            }, this);
            O.addEventListener("pagehide", function(o) {
                o.persisted && a()
            }), O.addEventListener("visibilitychange", function() {
                j.visibilityState === "hidden" && a()
            })
        }
    }
    this.persistence = this.cookie = new P(this.config), this.unpersisted_superprops = {}, this._gdpr_init();
    var f = l.UUID();
    this.get_distinct_id() || this.register_once({
        distinct_id: yn + f,
        $device_id: f
    }, "");
    var u = this.get_config("track_pageview");
    u && this._init_url_change_tracking(u), this.get_config("record_sessions_percent") > 0 && Math.random() * 100 <= this.get_config("record_sessions_percent") && this.start_session_recording()
};
S.prototype.start_session_recording = at(function() {
    if (!O.MutationObserver) {
        X.critical("Browser does not support MutationObserver; skipping session recording");
        return
    }
    var t = l.bind(function() {
        this._recorder = this._recorder || new O.__mp_recorder(this), this._recorder.startRecording()
    }, this);
    if (l.isUndefined(O.__mp_recorder)) {
        var e = j.createElement("script");
        e.type = "text/javascript", e.async = !0, e.onload = t, e.src = this.get_config("recorder_src"), j.head.appendChild(e)
    } else t()
});
S.prototype.stop_session_recording = function() {
    this._recorder ? this._recorder.stopRecording() : X.critical("Session recorder module not loaded")
};
S.prototype.get_session_recording_properties = function() {
    var t = {};
    if (this._recorder) {
        var e = this._recorder.replayId;
        e && (t.$mp_replay_id = e)
    }
    return t
};
S.prototype._loaded = function() {
    if (this.get_config("loaded")(this), this._set_default_superprops(), this.people.set_once(this.persistence.get_referrer_info()), this.get_config("store_google") && this.get_config("stop_utm_persistence")) {
        var t = l.info.campaignParams(null);
        l.each(t, (function(e, r) {
            this.unregister(r)
        }).bind(this))
    }
};
S.prototype._set_default_superprops = function() {
    this.persistence.update_search_keyword(j.referrer), this.get_config("store_google") && !this.get_config("stop_utm_persistence") && this.register(l.info.campaignParams()), this.get_config("save_referrer") && this.persistence.update_referrer_info(j.referrer)
};
S.prototype._dom_loaded = function() {
    l.each(this.__dom_loaded_queue, function(t) {
        this._track_dom.apply(this, t)
    }, this), this.has_opted_out_tracking() || l.each(this.__request_queue, function(t) {
        this._send_request.apply(this, t)
    }, this), delete this.__dom_loaded_queue, delete this.__request_queue
};
S.prototype._track_dom = function(t, e) {
    if (this.get_config("img")) return this.report_error("You can't use DOM tracking functions with img = true."), !1;
    if (!ws) return this.__dom_loaded_queue.push([t, e]), !1;
    var r = new t().init(this);
    return r.track.apply(r, e)
};
S.prototype._init_url_change_tracking = function(t) {
    var e = "",
        r = this.track_pageview();
    if (r && (e = l.info.currentUrl()), l.include(["full-url", "url-with-path-and-query-string", "url-with-path"], t)) {
        O.addEventListener("popstate", function() {
            O.dispatchEvent(new Event("mp_locationchange"))
        }), O.addEventListener("hashchange", function() {
            O.dispatchEvent(new Event("mp_locationchange"))
        });
        var i = O.history.pushState;
        typeof i == "function" && (O.history.pushState = function(a, f, u) {
            i.call(O.history, a, f, u), O.dispatchEvent(new Event("mp_locationchange"))
        });
        var s = O.history.replaceState;
        typeof s == "function" && (O.history.replaceState = function(a, f, u) {
            s.call(O.history, a, f, u), O.dispatchEvent(new Event("mp_locationchange"))
        }), O.addEventListener("mp_locationchange", (function() {
            var a = l.info.currentUrl(),
                f = !1;
            if (t === "full-url" ? f = a !== e : t === "url-with-path-and-query-string" ? f = a.split("#")[0] !== e.split("#")[0] : t === "url-with-path" && (f = a.split("#")[0].split("?")[0] !== e.split("#")[0].split("?")[0]), f) {
                var u = this.track_pageview();
                u && (e = a)
            }
        }).bind(this))
    }
};
S.prototype._prepare_callback = function(t, e) {
    if (l.isUndefined(t)) return null;
    if (xt) {
        var r = function(f) {
            t(f, e)
        };
        return r
    } else {
        var i = this._jsc,
            s = "" + Math.floor(Math.random() * 1e8),
            a = this.get_config("callback_fn") + "[" + s + "]";
        return i[s] = function(f) {
            delete i[s], t(f, e)
        }, a
    }
};
S.prototype._send_request = function(t, e, r, i) {
    var s = !0;
    if (Ns) return this.__request_queue.push(arguments), s;
    var a = {
            method: this.get_config("api_method"),
            transport: this.get_config("api_transport"),
            verbose: this.get_config("verbose")
        },
        f = null;
    !i && (l.isFunction(r) || typeof r == "string") && (i = r, r = null), r = l.extend(a, r || {}), xt || (r.method = "GET");
    var u = r.method === "POST",
        o = or && u && r.transport.toLowerCase() === "sendbeacon",
        E = r.verbose;
    e.verbose && (E = !0), this.get_config("test") && (e.test = 1), E && (e.verbose = 1), this.get_config("img") && (e.img = 1), xt || (i ? e.callback = i : (E || this.get_config("test")) && (e.callback = "(function(){})")), e.ip = this.get_config("ip") ? 1 : 0, e._ = new Date().getTime().toString(), u && (f = "data=" + encodeURIComponent(e.data), delete e.data), t += "?" + l.HTTPBuildQuery(e);
    var _ = this;
    if ("img" in e) {
        var b = j.createElement("img");
        b.src = t, j.body.appendChild(b)
    } else if (o) {
        try {
            s = or(t, f)
        } catch (q) {
            _.report_error(q), s = !1
        }
        try {
            i && i(s ? 1 : 0)
        } catch (q) {
            _.report_error(q)
        }
    } else if (xt) try {
        var T = new XMLHttpRequest;
        T.open(r.method, t, !0);
        var g = this.get_config("xhr_headers");
        if (u && (g["Content-Type"] = "application/x-www-form-urlencoded"), l.each(g, function(q, F) {
                T.setRequestHeader(F, q)
            }), r.timeout_ms && typeof T.timeout < "u") {
            T.timeout = r.timeout_ms;
            var A = new Date().getTime()
        }
        T.withCredentials = !0, T.onreadystatechange = function() {
            if (T.readyState === 4)
                if (T.status === 200) {
                    if (i)
                        if (E) {
                            var q;
                            try {
                                q = l.JSONDecode(T.responseText)
                            } catch (Ee) {
                                if (_.report_error(Ee), r.ignore_json_errors) q = T.responseText;
                                else return
                            }
                            i(q)
                        } else i(Number(T.responseText))
                } else {
                    var F;
                    T.timeout && !T.status && new Date().getTime() - A >= T.timeout ? F = "timeout" : F = "Bad HTTP status: " + T.status + " " + T.statusText, _.report_error(F), i && i(E ? {
                        status: 0,
                        error: F,
                        xhr_req: T
                    } : 0)
                }
        }, T.send(f)
    } catch (q) {
        _.report_error(q), s = !1
    } else {
        var B = j.createElement("script");
        B.type = "text/javascript", B.async = !0, B.defer = !0, B.src = t;
        var U = j.getElementsByTagName("script")[0];
        U.parentNode.insertBefore(B, U)
    }
    return s
};
S.prototype._execute_array = function(t) {
    var e, r = [],
        i = [],
        s = [];
    l.each(t, function(f) {
        f && (e = f[0], l.isArray(e) ? s.push(f) : typeof f == "function" ? f.call(this) : l.isArray(f) && e === "alias" ? r.push(f) : l.isArray(f) && e.indexOf("track") !== -1 && typeof this[e] == "function" ? s.push(f) : i.push(f))
    }, this);
    var a = function(f, u) {
        l.each(f, function(o) {
            if (l.isArray(o[0])) {
                var E = u;
                l.each(o, function(_) {
                    E = E[_[0]].apply(E, _.slice(1))
                })
            } else this[o[0]].apply(this, o.slice(1))
        }, u)
    };
    a(r, this), a(i, this), a(s, this)
};
S.prototype.are_batchers_initialized = function() {
    return !!this.request_batchers.events
};
S.prototype.get_batcher_configs = function() {
    var t = "__mpq_" + this.get_config("token"),
        e = this.get_config("api_routes");
    return this._batcher_configs = this._batcher_configs || {
        events: {
            type: "events",
            endpoint: "/" + e.track,
            queue_key: t + "_ev"
        },
        people: {
            type: "people",
            endpoint: "/" + e.engage,
            queue_key: t + "_pp"
        },
        groups: {
            type: "groups",
            endpoint: "/" + e.groups,
            queue_key: t + "_gr"
        }
    }, this._batcher_configs
};
S.prototype.init_batchers = function() {
    if (!this.are_batchers_initialized()) {
        var t = l.bind(function(r) {
                return new Ke(r.queue_key, {
                    libConfig: this.config,
                    sendRequestFunc: l.bind(function(i, s, a) {
                        this._send_request(this.get_config("api_host") + r.endpoint, this._encode_data_for_request(i), s, this._prepare_callback(a, i))
                    }, this),
                    beforeSendHook: l.bind(function(i) {
                        return this._run_hook("before_send_" + r.type, i)
                    }, this),
                    errorReporter: this.get_config("error_reporter"),
                    stopAllBatchingFunc: l.bind(this.stop_batch_senders, this)
                })
            }, this),
            e = this.get_batcher_configs();
        this.request_batchers = {
            events: t(e.events),
            people: t(e.people),
            groups: t(e.groups)
        }
    }
    this.get_config("batch_autostart") && this.start_batch_senders()
};
S.prototype.start_batch_senders = function() {
    this._batchers_were_started = !0, this.are_batchers_initialized() && (this._batch_requests = !0, l.each(this.request_batchers, function(t) {
        t.start()
    }))
};
S.prototype.stop_batch_senders = function() {
    this._batch_requests = !1, l.each(this.request_batchers, function(t) {
        t.stop(), t.clear()
    })
};
S.prototype.push = function(t) {
    this._execute_array([t])
};
S.prototype.disable = function(t) {
    typeof t > "u" ? this._flags.disable_all_events = !0 : this.__disabled_events = this.__disabled_events.concat(t)
};
S.prototype._encode_data_for_request = function(t) {
    var e = l.JSONEncode(t);
    return this.get_config("api_payload_format") === ds && (e = l.base64Encode(e)), {
        data: e
    }
};
S.prototype._track_or_batch = function(t, e) {
    var r = l.truncate(t.data, 255),
        i = t.endpoint,
        s = t.batcher,
        a = t.should_send_immediately,
        f = t.send_request_options || {};
    e = e || kt;
    var u = !0,
        o = l.bind(function() {
            return f.skip_hooks || (r = this._run_hook("before_send_" + t.type, r)), r ? (X.log("MIXPANEL REQUEST:"), X.log(r), this._send_request(i, this._encode_data_for_request(r), f, this._prepare_callback(e, r))) : null
        }, this);
    return this._batch_requests && !a ? s.enqueue(r, function(E) {
        E ? e(1, r) : o()
    }) : u = o(), u && r
};
S.prototype.track = at(function(t, e, r, i) {
    !i && typeof r == "function" && (i = r, r = null), r = r || {};
    var s = r.transport;
    s && (r.transport = s);
    var a = r.send_immediately;
    if (typeof i != "function" && (i = kt), l.isUndefined(t)) {
        this.report_error("No event name provided to mixpanel.track");
        return
    }
    if (this._event_is_disabled(t)) {
        i(0);
        return
    }
    e = l.extend({}, e), e.token = this.get_config("token");
    var f = this.persistence.remove_event_timer(t);
    if (!l.isUndefined(f)) {
        var u = new Date().getTime() - f;
        e.$duration = parseFloat((u / 1e3).toFixed(3))
    }
    this._set_default_superprops();
    var o = this.get_config("track_marketing") ? l.info.marketingParams() : {};
    e = l.extend({}, l.info.properties({
        mp_loader: this.get_config("mp_loader")
    }), o, this.persistence.properties(), this.unpersisted_superprops, this.get_session_recording_properties(), e);
    var E = this.get_config("property_blacklist");
    l.isArray(E) ? l.each(E, function(T) {
        delete e[T]
    }) : this.report_error("Invalid value for property_blacklist config: " + E);
    var _ = {
            event: t,
            properties: e
        },
        b = this._track_or_batch({
            type: "events",
            data: _,
            endpoint: this.get_config("api_host") + "/" + this.get_config("api_routes").track,
            batcher: this.request_batchers.events,
            should_send_immediately: a,
            send_request_options: r
        }, i);
    return b
});
S.prototype.set_group = at(function(t, e, r) {
    l.isArray(e) || (e = [e]);
    var i = {};
    return i[t] = e, this.register(i), this.people.set(t, e, r)
});
S.prototype.add_group = at(function(t, e, r) {
    var i = this.get_property(t),
        s = {};
    return i === void 0 ? (s[t] = [e], this.register(s)) : i.indexOf(e) === -1 && (i.push(e), s[t] = i, this.register(s)), this.people.union(t, e, r)
});
S.prototype.remove_group = at(function(t, e, r) {
    var i = this.get_property(t);
    if (i !== void 0) {
        var s = i.indexOf(e);
        s > -1 && (i.splice(s, 1), this.register({
            group_key: i
        })), i.length === 0 && this.unregister(t)
    }
    return this.people.remove(t, e, r)
});
S.prototype.track_with_groups = at(function(t, e, r, i) {
    var s = l.extend({}, e || {});
    return l.each(r, function(a, f) {
        a != null && (s[f] = a)
    }), this.track(t, s, i)
});
S.prototype._create_map_key = function(t, e) {
    return t + "_" + JSON.stringify(e)
};
S.prototype._remove_group_from_cache = function(t, e) {
    delete this._cached_groups[this._create_map_key(t, e)]
};
S.prototype.get_group = function(t, e) {
    var r = this._create_map_key(t, e),
        i = this._cached_groups[r];
    return (i === void 0 || i._group_key !== t || i._group_id !== e) && (i = new Z, i._init(this, t, e), this._cached_groups[r] = i), i
};
S.prototype.track_pageview = at(function(t, e) {
    typeof t != "object" && (t = {}), e = e || {};
    var r = e.event_name || "$mp_web_page_view",
        i = l.extend(l.info.mpPageViewProperties(), l.info.campaignParams(), l.info.clickParams()),
        s = l.extend({}, i, t);
    return this.track(r, s)
});
S.prototype.track_links = function() {
    return this._track_dom.call(this, Rt, arguments)
};
S.prototype.track_forms = function() {
    return this._track_dom.call(this, gr, arguments)
};
S.prototype.time_event = function(t) {
    if (l.isUndefined(t)) {
        this.report_error("No event name provided to mixpanel.time_event");
        return
    }
    this._event_is_disabled(t) || this.persistence.set_event_timer(t, new Date().getTime())
};
var mf = {
        persistent: !0
    },
    vn = function(t) {
        var e;
        return l.isObject(t) ? e = t : l.isUndefined(t) ? e = {} : e = {
            days: t
        }, l.extend({}, mf, e)
    };
S.prototype.register = function(t, e) {
    var r = vn(e);
    r.persistent ? this.persistence.register(t, r.days) : l.extend(this.unpersisted_superprops, t)
};
S.prototype.register_once = function(t, e, r) {
    var i = vn(r);
    i.persistent ? this.persistence.register_once(t, e, i.days) : (typeof e > "u" && (e = "None"), l.each(t, function(s, a) {
        (!this.unpersisted_superprops.hasOwnProperty(a) || this.unpersisted_superprops[a] === e) && (this.unpersisted_superprops[a] = s)
    }, this))
};
S.prototype.unregister = function(t, e) {
    e = vn(e), e.persistent ? this.persistence.unregister(t) : delete this.unpersisted_superprops[t]
};
S.prototype._register_single = function(t, e) {
    var r = {};
    r[t] = e, this.register(r)
};
S.prototype.identify = function(t, e, r, i, s, a, f, u) {
    var o = this.get_distinct_id();
    if (t && o !== t) {
        if (typeof t == "string" && t.indexOf(yn) === 0) return this.report_error("distinct_id cannot have $device: prefix"), -1;
        this.register({
            $user_id: t
        })
    }
    if (!this.get_property("$device_id")) {
        var E = o;
        this.register_once({
            $had_persisted_distinct_id: !0,
            $device_id: E
        }, "")
    }
    t !== o && t !== this.get_property(lr) && (this.unregister(lr), this.register({
        distinct_id: t
    })), this._flags.identify_called = !0, this.people._flush(e, r, i, s, a, f, u), t !== o && this.track("$identify", {
        distinct_id: t,
        $anon_distinct_id: o
    }, {
        skip_hooks: !0
    })
};
S.prototype.reset = function() {
    this.persistence.clear(), this._flags.identify_called = !1;
    var t = l.UUID();
    this.register_once({
        distinct_id: yn + t,
        $device_id: t
    }, "")
};
S.prototype.get_distinct_id = function() {
    return this.get_property("distinct_id")
};
S.prototype.alias = function(t, e) {
    if (t === this.get_property(Bs)) return this.report_error("Attempting to create alias for existing People user - aborting."), -2;
    var r = this;
    return l.isUndefined(e) && (e = this.get_distinct_id()), t !== e ? (this._register_single(lr, t), this.track("$create_alias", {
        alias: t,
        distinct_id: e
    }, {
        skip_hooks: !0
    }, function() {
        r.identify(t)
    })) : (this.report_error("alias matches current distinct_id - skipping api call."), this.identify(t), -1)
};
S.prototype.name_tag = function(t) {
    this._register_single("mp_name_tag", t)
};
S.prototype.set_config = function(t) {
    if (l.isObject(t)) {
        l.extend(this.config, t);
        var e = t.batch_size;
        e && l.each(this.request_batchers, function(r) {
            r.resetBatchSize()
        }), this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), Ie.DEBUG = Ie.DEBUG || this.get_config("debug")
    }
};
S.prototype.get_config = function(t) {
    return this.config[t]
};
S.prototype._run_hook = function(t) {
    var e = (this.config.hooks[t] || Sf).apply(this, $e.call(arguments, 1));
    return typeof e > "u" && (this.report_error(t + " hook did not return a value"), e = null), e
};
S.prototype.get_property = function(t) {
    return this.persistence.load_prop([t])
};
S.prototype.toString = function() {
    var t = this.get_config("name");
    return t !== be && (t = be + "." + t), t
};
S.prototype._event_is_disabled = function(t) {
    return l.isBlockedUA(ve) || this._flags.disable_all_events || l.include(this.__disabled_events, t)
};
S.prototype._gdpr_init = function() {
    var t = this.get_config("opt_out_tracking_persistence_type") === "localStorage";
    t && l.localStorage.is_supported() && (!this.has_opted_in_tracking() && this.has_opted_in_tracking({
        persistence_type: "cookie"
    }) && this.opt_in_tracking({
        enable_persistence: !1
    }), !this.has_opted_out_tracking() && this.has_opted_out_tracking({
        persistence_type: "cookie"
    }) && this.opt_out_tracking({
        clear_persistence: !1
    }), this.clear_opt_in_out_tracking({
        persistence_type: "cookie",
        enable_persistence: !1
    })), this.has_opted_out_tracking() ? this._gdpr_update_persistence({
        clear_persistence: !0
    }) : !this.has_opted_in_tracking() && (this.get_config("opt_out_tracking_by_default") || l.cookie.get("mp_optout")) && (l.cookie.remove("mp_optout"), this.opt_out_tracking({
        clear_persistence: this.get_config("opt_out_persistence_by_default")
    }))
};
S.prototype._gdpr_update_persistence = function(t) {
    var e;
    if (t && t.clear_persistence) e = !0;
    else if (t && t.enable_persistence) e = !1;
    else return;
    !this.get_config("disable_persistence") && this.persistence.disabled !== e && this.persistence.set_disabled(e), e ? this.stop_batch_senders() : this._batchers_were_started && this.start_batch_senders()
};
S.prototype._gdpr_call_func = function(t, e) {
    return e = l.extend({
        track: l.bind(this.track, this),
        persistence_type: this.get_config("opt_out_tracking_persistence_type"),
        cookie_prefix: this.get_config("opt_out_tracking_cookie_prefix"),
        cookie_expiration: this.get_config("cookie_expiration"),
        cross_site_cookie: this.get_config("cross_site_cookie"),
        cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
        cookie_domain: this.get_config("cookie_domain"),
        secure_cookie: this.get_config("secure_cookie"),
        ignore_dnt: this.get_config("ignore_dnt")
    }, e), l.localStorage.is_supported() || (e.persistence_type = "cookie"), t(this.get_config("token"), {
        track: e.track,
        trackEventName: e.track_event_name,
        trackProperties: e.track_properties,
        persistenceType: e.persistence_type,
        persistencePrefix: e.cookie_prefix,
        cookieDomain: e.cookie_domain,
        cookieExpiration: e.cookie_expiration,
        crossSiteCookie: e.cross_site_cookie,
        crossSubdomainCookie: e.cross_subdomain_cookie,
        secureCookie: e.secure_cookie,
        ignoreDnt: e.ignore_dnt
    })
};
S.prototype.opt_in_tracking = function(t) {
    t = l.extend({
        enable_persistence: !0
    }, t), this._gdpr_call_func(xf, t), this._gdpr_update_persistence(t)
};
S.prototype.opt_out_tracking = function(t) {
    t = l.extend({
        clear_persistence: !0,
        delete_user: !0
    }, t), t.delete_user && this.people && this.people._identify_called() && (this.people.delete_user(), this.people.clear_charges()), this._gdpr_call_func(_f, t), this._gdpr_update_persistence(t)
};
S.prototype.has_opted_in_tracking = function(t) {
    return this._gdpr_call_func(hf, t)
};
S.prototype.has_opted_out_tracking = function(t) {
    return this._gdpr_call_func(Cs, t)
};
S.prototype.clear_opt_in_out_tracking = function(t) {
    t = l.extend({
        enable_persistence: !0
    }, t), this._gdpr_call_func(Rf, t), this._gdpr_update_persistence(t)
};
S.prototype.report_error = function(t, e) {
    X.error.apply(X.error, arguments);
    try {
        !e && !(t instanceof Error) && (t = new Error(t)), this.get_config("error_reporter")(t, e)
    } catch (r) {
        X.error(r)
    }
};
S.prototype.init = S.prototype.init;
S.prototype.reset = S.prototype.reset;
S.prototype.disable = S.prototype.disable;
S.prototype.time_event = S.prototype.time_event;
S.prototype.track = S.prototype.track;
S.prototype.track_links = S.prototype.track_links;
S.prototype.track_forms = S.prototype.track_forms;
S.prototype.track_pageview = S.prototype.track_pageview;
S.prototype.register = S.prototype.register;
S.prototype.register_once = S.prototype.register_once;
S.prototype.unregister = S.prototype.unregister;
S.prototype.identify = S.prototype.identify;
S.prototype.alias = S.prototype.alias;
S.prototype.name_tag = S.prototype.name_tag;
S.prototype.set_config = S.prototype.set_config;
S.prototype.get_config = S.prototype.get_config;
S.prototype.get_property = S.prototype.get_property;
S.prototype.get_distinct_id = S.prototype.get_distinct_id;
S.prototype.toString = S.prototype.toString;
S.prototype.opt_out_tracking = S.prototype.opt_out_tracking;
S.prototype.opt_in_tracking = S.prototype.opt_in_tracking;
S.prototype.has_opted_out_tracking = S.prototype.has_opted_out_tracking;
S.prototype.has_opted_in_tracking = S.prototype.has_opted_in_tracking;
S.prototype.clear_opt_in_out_tracking = S.prototype.clear_opt_in_out_tracking;
S.prototype.get_group = S.prototype.get_group;
S.prototype.set_group = S.prototype.set_group;
S.prototype.add_group = S.prototype.add_group;
S.prototype.remove_group = S.prototype.remove_group;
S.prototype.track_with_groups = S.prototype.track_with_groups;
S.prototype.start_batch_senders = S.prototype.start_batch_senders;
S.prototype.stop_batch_senders = S.prototype.stop_batch_senders;
S.prototype.start_session_recording = S.prototype.start_session_recording;
S.prototype.stop_session_recording = S.prototype.stop_session_recording;
S.prototype.get_session_recording_properties = S.prototype.get_session_recording_properties;
S.prototype.DEFAULT_API_ROUTES = Ds;
P.prototype.properties = P.prototype.properties;
P.prototype.update_search_keyword = P.prototype.update_search_keyword;
P.prototype.update_referrer_info = P.prototype.update_referrer_info;
P.prototype.get_cross_subdomain = P.prototype.get_cross_subdomain;
P.prototype.clear = P.prototype.clear;
var Et = {},
    Cf = function() {
        l.each(Et, function(t, e) {
            e !== be && (fe[e] = t)
        }), fe._ = l
    },
    yf = function() {
        fe.init = function(t, e, r) {
            if (r) return fe[r] || (fe[r] = Et[r] = Wr(t, e, r), fe[r]._loaded()), fe[r];
            var i = fe;
            Et[be] ? i = Et[be] : t && (i = Wr(t, e, be), i._loaded(), Et[be] = i), fe = i, Cn === gf && (O[be] = fe), Cf()
        }
    },
    vf = function() {
        function t() {
            t.done || (t.done = !0, ws = !0, Ns = !1, l.each(Et, function(i) {
                i._dom_loaded()
            }))
        }

        function e() {
            try {
                j.documentElement.doScroll("left")
            } catch {
                setTimeout(e, 1);
                return
            }
            t()
        }
        if (j.addEventListener) j.readyState === "complete" ? t() : j.addEventListener("DOMContentLoaded", t, !1);
        else if (j.attachEvent) {
            j.attachEvent("onreadystatechange", t);
            var r = !1;
            try {
                r = O.frameElement === null
            } catch {}
            j.documentElement.doScroll && r && e()
        }
        l.register_event(O, "load", t, !0)
    };

function Uf() {
    return Cn = Ks, fe = new S, yf(), fe.init(), vf(), fe
}
var Bf = Uf(),
    Kf = Bf;
const Ei = tf(Kf);
class Un {
    static setup() {
        this.isSetup = !0, gtag("config", "G-V1QJVQMYF1", {
            send_page_view: !1
        }), Ei.init("2e284873b7269f13b850ac994abfd848", {
            debug: "false"
        })
    }
    static ga(e, r) {
        this.isSetup || this.setup(), gtag("event", e, r)
    }
    static mp(e, r) {
        this.isSetup || this.setup(), Ei.track(e, r)
    }
    static pageView(e) {
        this.ga("page_view", {
            page_title: e,
            page_location: `https://jackbox.tv/${e}`
        })
    }
    static gameStarted(e, r) {
        const i = {
            tag: e
        };
        r.isUGC !== void 0 && (i.is_ugc = r.isUGC), r.isSequel !== void 0 && (i.is_sequel = r.isSequel), r.locale !== void 0 && (i.locale = r.locale), r.mode !== void 0 && (i.mode = r.mode), r.numberOfPlayer !== void 0 && (i.number_of_players = r.numberOfPlayer), this.ga("game_start", i)
    }
    static gameJoined(e, r) {
        this.mp("Game Joined", {
            tag: e,
            ...r
        })
    }
    static bannerClick(e, r) {
        this.ga("banner_click", {
            url: e,
            location: r
        })
    }
    static externalLinkClick(e, r) {
        this.ga("external_link_click", {
            url: e,
            location: r
        })
    }
    static moderatorConnected(e) {
        this.ga("moderator_connected", {
            tag: e
        }), this.mp("Moderator Connected", {
            tag: e
        })
    }
    static itemModerated(e, r) {
        this.ga("item_moderated", {
            tag: e,
            was_rejected: r
        }), this.mp("Moderator Item", {
            tag: e,
            wasRejected: r
        })
    }
    static playerKicked(e, r) {
        this.ga("player_kicked", {
            tag: e,
            is_lobby: r
        }), this.mp("Moderator Kick", {
            tag: e,
            isLobby: r
        })
    }
    static galleryImpression(e, r) {
        this.ga("gallery_impression", {
            category_id: e,
            location: r
        })
    }
    static galleryClick(e, r) {
        this.ga("gallery_click", {
            category_id: e,
            location: r
        }), this.mp("Gallery Click", {
            categoryId: e,
            location: r
        })
    }
    static galleryAddToCart(e, r) {
        this.mp("Gallery Add To Cart", {
            categoryId: e,
            ...r
        })
    }
    static galleryCheckout(e, r) {
        this.mp("Gallery Checkout", {
            categoryId: e,
            ...r
        })
    }
    static galleryShare(e, r) {
        this.mp("Gallery Share", {
            categoryId: e,
            ...r
        })
    }
    static galleryWatch(e, r) {
        this.mp("Gallery Watch", {
            categoryId: e,
            ...r
        })
    }
    static galleryDownload(e, r) {
        this.mp("Gallery Download", {
            categoryId: e,
            ...r
        })
    }
}
le(Un, "isSetup", !1);
const df = [{
    name: "Prototype",
    tag: "prototype",
    wrapper: "vue",
    isPublic: !0,
    directory: "internal/prototype"
}, {
    name: "EcastTestClient",
    tag: "ecast-test-client",
    wrapper: "marionette",
    isPublic: !0,
    directory: "internal/ecast-test-client"
}, {
    name: "Quiplash 2 InterLASHional",
    tag: "quiplash2-international",
    wrapper: "marionette",
    isPublic: !0,
    directory: "standalone/quiplash2-international",
    categoryId: "quiplash2-internationalGame"
}, {
    name: "Guesspionage Crowdplay",
    tag: "guesspionage-crowdplay",
    wrapper: "marionette",
    isPublic: !0,
    directory: "standalone/guesspionage-crowdplay"
}, {
    name: "Drawful 2",
    tag: "drawful2",
    wrapper: "marionette",
    isPublic: !0,
    directory: "standalone/drawful2",
    categoryId: "DrawfulGame",
    shopItems: ["shirts"]
}, {
    name: "Drawful 2",
    tag: "drawful2international",
    wrapper: "marionette",
    isPublic: !0,
    directory: "standalone/drawful2-international",
    features: ["moderation"]
}, {
    name: "Acquisitions, Inc.",
    tag: "acquisitions-inc",
    wrapper: "marionette",
    isPublic: !0,
    directory: "standalone/acquisitions-inc"
}, {
    name: "You Don't Know Jack 2015",
    tag: "ydkj2015",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp1/ydkj2015"
}, {
    name: "Drawful",
    tag: "drawful",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp1/drawful"
}, {
    name: "Word Spud",
    tag: "wordspud",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp1/wordspud"
}, {
    name: "Lie Swatter",
    tag: "lieswatter",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp1/lieswatter"
}, {
    name: "Fibbage",
    tag: "fibbage",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp1/fibbage"
}, {
    name: "Fibbage 2",
    tag: "fibbage2",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp2/fibbage2"
}, {
    name: "MP3-БРЕД",
    tag: "earwax",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp2/earwax"
}, {
    name: "Bidiots",
    tag: "auction",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp2/auction"
}, {
    name: "Bomb Corp",
    tag: "bombintern",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp2/bombintern"
}, {
    name: "Quiplash",
    tag: "quiplash",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp2/quiplash"
}, {
    name: "Fakin' It",
    tag: "fakinit",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp3/fakinit"
}, {
    name: "ФутболK.O.",
    tag: "awshirt",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp3/awshirt",
    categoryId: "TeeKOGame",
    shopItems: ["shirts"]
}, {
    name: "Quiplash 2",
    tag: "quiplash2",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp3/quiplash2",
    categoryId: "Quiplash2Game"
}, {
    name: "Trivia Murder Party",
    tag: "triviadeath",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp3/triviadeath",
    categoryId: "TriviaDeathResults"
}, {
    name: "Guesspionage",
    tag: "pollposition",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp3/pollposition"
}, {
    name: "Fibbage 3",
    tag: "fibbage3",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp4/fibbage3"
}, {
    name: "Survive the Internet",
    tag: "survivetheinternet",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp4/survivetheinternet",
    categoryId: "STIGame"
}, {
    name: "Monster Seeking Monster",
    tag: "monstermingle",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp4/monstermingle",
    categoryId: "MonsterMingleGame"
}, {
    name: "Bracketeering",
    tag: "bracketeering",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp4/bracketeering",
    categoryId: "BRKGame"
}, {
    name: "Civic Doodle",
    tag: "overdrawn",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp4/overdrawn",
    categoryId: "OverdrawnGame",
    shopItems: ["shirts"]
}, {
    name: "You Don't Know Jack: Full Stream",
    tag: "ydkj2018",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp5/ydkj2018",
    categoryId: "YDKJ2018Game"
}, {
    name: "Split the Room",
    tag: "splittheroom",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp5/splittheroom",
    categoryId: "SplitTheRoomGame"
}, {
    name: "Mad Verse City",
    tag: "rapbattle",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp5/rapbattle",
    categoryId: "RapBattleGame"
}, {
    name: "Zeeple Dome",
    tag: "slingshoot",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp5/slingshoot",
    categoryId: "SlingShootGame"
}, {
    name: "Patently Stupid",
    tag: "patentlystupid",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp5/patentlystupid",
    categoryId: "PatentlyStupidGame",
    shopItems: ["mugs"]
}, {
    name: "Trivia Murder Party 2",
    tag: "triviadeath2",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp6/triviadeath2",
    categoryId: "TriviaDeath2Game"
}, {
    name: "Role Models",
    tag: "rolemodels",
    wrapper: "marionette",
    isPublic: !0,
    features: ["camera"],
    directory: "pp6/rolemodels",
    categoryId: "RoleModelsGame",
    shopItems: ["shirts"]
}, {
    name: "Joke Boat",
    tag: "jokeboat",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp6/jokeboat",
    categoryId: "JokeboatGame"
}, {
    name: "Dictionarium",
    tag: "ridictionary",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp6/ridictionary",
    categoryId: "RidictionaryGame"
}, {
    name: "Push the Button",
    tag: "pushthebutton",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp6/pushthebutton",
    categoryId: "PushTheButtonGame"
}, {
    name: "Talking Points",
    tag: "jackbox-talks",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp7/jackboxtalks",
    features: ["camera", "moderation"],
    categoryId: "JackboxTalksGame"
}, {
    name: "Quiplash 3",
    tag: "quiplash3",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp7/quiplash3",
    features: ["moderation"],
    categoryId: "quiplash3Game"
}, {
    name: "The Devils and the Details",
    tag: "everyday",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp7/everyday",
    categoryId: "EverydayGame",
    shopItems: ["mugs"]
}, {
    name: "Champ'd Up",
    tag: "worldchamps",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp7/worldchamps",
    features: ["moderation"],
    categoryId: "WorldChampionsGame",
    shopItems: ["cards"]
}, {
    name: "Blather 'Round",
    tag: "blanky-blank",
    wrapper: "marionette",
    isPublic: !0,
    directory: "pp7/blanky-blank",
    categoryId: "BlankyBlankGame"
}, {
    name: "Job Job",
    tag: "apply-yourself",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp8/apply-yourself",
    categoryId: "JobGameGame",
    features: ["moderation", "previews"]
}, {
    name: "Drawful Animate",
    tag: "drawful-animate",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp8/drawful-animate",
    categoryId: "DrawfulAnimateGame",
    features: ["moderation"]
}, {
    name: "The Wheel of Enormous Proportions",
    tag: "the-wheel",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp8/the-wheel",
    categoryId: "TheWheelGame"
}, {
    name: "The Poll Mine",
    tag: "survey-bomb",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp8/survey-bomb",
    categoryId: "SurveyBombGame"
}, {
    name: "Weapons Drawn",
    tag: "murder-detectives",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp8/murder-detectives",
    categoryId: "MurderDetectivesGame",
    features: ["moderation"]
}, {
    name: "Quiplash 3",
    tag: "quiplash3-tjsp",
    wrapper: "vue",
    isPublic: !0,
    directory: "tjsp/quiplash3",
    features: ["moderation"],
    categoryId: "quiplash3Game"
}, {
    name: "ФутболK.O.",
    tag: "awshirt-tjsp",
    wrapper: "vue",
    isPublic: !0,
    directory: "tjsp/awshirt",
    features: ["moderation"],
    shopItems: ["shirts"],
    categoryId: "TeeKOGame"
}, {
    name: "Trivia Murder Party 2",
    tag: "triviadeath2-tjsp",
    wrapper: "vue",
    isPublic: !0,
    directory: "tjsp/triviadeath2",
    categoryId: "TriviaMurderParty2Game"
}, {
    name: "Fibbage 4",
    tag: "fourbage",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp9/fourbage",
    features: ["moderation", "kicking"],
    categoryId: "Fibbage4Game"
}, {
    name: "Румеранг",
    tag: "htmf",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp9/htmf",
    features: ["moderation", "kicking"],
    categoryId: "MakeFriendsGame"
}, {
    name: "Хламополис",
    tag: "antique-freak",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp9/antique-freak",
    features: ["moderation", "kicking"],
    categoryId: "AntiqueGameGame"
}, {
    name: "Безмыслица",
    tag: "range-game",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp9/range-game",
    features: ["moderation", "kicking"],
    categoryId: "RangeGameGame"
}, {
    name: "Скортировка",
    tag: "lineup",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp9/lineup",
    features: ["kicking", "previews"],
    categoryId: "LineupGame"
}, {
    name: "ФутболK.O. 2",
    tag: "awshirt2",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp10/awshirt2",
    features: ["moderation", "kicking"],
    shopItems: ["shirts"],
    categoryId: "TeeKO2Game",
    galleryId: "teeko2"
}, {
    name: "Додо Ре Ми",
    tag: "nopus-opus",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp10/nopus-opus",
    features: ["dropInDropOut", "kicking"],
    categoryId: "NopusOpusGame",
    galleryId: "dodo-re-mi"
}, {
    name: "ТекстоПрав",
    tag: "risky-text",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp10/risky-text",
    features: ["moderation", "kicking"],
    categoryId: "FixyTextGame",
    galleryId: "fixytext"
}, {
    name: "Часовпал",
    tag: "time-trivia",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp10/time-trivia",
    features: ["kicking"],
    categoryId: "TimeTriviaGame",
    galleryId: "timejinx"
}, {
    name: "Гипноториум",
    tag: "us-them",
    wrapper: "vue",
    isPublic: !0,
    directory: "pp10/us-them",
    features: ["moderation", "kicking"],
    categoryId: "StrangersGame",
    galleryId: "hypnotorious"
}, {
    name: "Обмани меня: Всю ночь напролёт",
    tag: "fakinit2",
    wrapper: "vue",
    isPublic: true,
    directory: "ppad/fakinit2",
    categoryId: "FakinIt2Game",
    features: ["moderation", "kicking"],
    galleryId: "fakin-it-all-night-long"
  }, {
    name: "Грязный Рисыч",
    tag: "drawful3",
    wrapper: "vue",
    isPublic: true,
    directory: "ppad/drawful3",
    categoryId: "Drawful3Game",
    features: ["moderation", "kicking"],
    galleryId: "dirty-drawful"
  }, {
    name: "Дай мне кончить",
    tag: "captcha",
    wrapper: "vue",
    isPublic: true,
    directory: "ppad/captcha",
    categoryId: "CAPTCHAGame",
    features: ["moderation", "kicking"],
    galleryId: "let-me-finish"
  }, {
    name: "Jackbox Борьба Опросов",
    tag: "bigsurvey",
    wrapper: "vue",
    isPublic: true,
    directory: "standalone/bigsurvey",
    features: ["moderation", "kicking", "dropInDropOut"],
    categoryId: "BigSurveyGame",
    galleryId: "survey-scramble"
}];
let Nf = [];
const Is = [...df, ...Nf],
    pi = t => {
        var r;
        return (((r = window == null ? void 0 : window.tv) == null ? void 0 : r.games) || Is).find(i => i.tag === t || i.galleryId === t || i.categoryId === t)
    };

function Df() {
    this.__data__ = [], this.size = 0
}
var wf = Df;

function If(t, e) {
    return t === e || t !== t && e !== e
}
var Sr = If,
    Of = Sr;

function Pf(t, e) {
    for (var r = t.length; r--;)
        if (Of(t[r][0], e)) return r;
    return -1
}
var Ar = Pf,
    Vf = Ar,
    kf = Array.prototype,
    Mf = kf.splice;

function Xf(t) {
    var e = this.__data__,
        r = Vf(e, t);
    if (r < 0) return !1;
    var i = e.length - 1;
    return r == i ? e.pop() : Mf.call(e, r, 1), --this.size, !0
}
var Gf = Xf,
    $f = Ar;

function jf(t) {
    var e = this.__data__,
        r = $f(e, t);
    return r < 0 ? void 0 : e[r][1]
}
var qf = jf,
    Ff = Ar;

function Hf(t) {
    return Ff(this.__data__, t) > -1
}
var Wf = Hf,
    zf = Ar;

function Yf(t, e) {
    var r = this.__data__,
        i = zf(r, t);
    return i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e, this
}
var Jf = Yf,
    Qf = wf,
    Zf = Gf,
    eu = qf,
    tu = Wf,
    ru = Jf;

function mt(t) {
    var e = -1,
        r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
mt.prototype.clear = Qf;
mt.prototype.delete = Zf;
mt.prototype.get = eu;
mt.prototype.has = tu;
mt.prototype.set = ru;
var mr = mt,
    nu = mr;

function iu() {
    this.__data__ = new nu, this.size = 0
}
var su = iu;

function au(t) {
    var e = this.__data__,
        r = e.delete(t);
    return this.size = e.size, r
}
var fu = au;

function uu(t) {
    return this.__data__.get(t)
}
var lu = uu;

function ou(t) {
    return this.__data__.has(t)
}
var Eu = ou,
    pu = typeof ie == "object" && ie && ie.Object === Object && ie,
    Os = pu,
    cu = Os,
    xu = typeof self == "object" && self && self.Object === Object && self,
    _u = cu || xu || Function("return this")(),
    Ct = _u,
    hu = Ct,
    Ru = hu.Symbol,
    Ps = Ru,
    ci = Ps,
    Vs = Object.prototype,
    Tu = Vs.hasOwnProperty,
    bu = Vs.toString,
    Dt = ci ? ci.toStringTag : void 0;

function Lu(t) {
    var e = Tu.call(t, Dt),
        r = t[Dt];
    try {
        t[Dt] = void 0;
        var i = !0
    } catch {}
    var s = bu.call(t);
    return i && (e ? t[Dt] = r : delete t[Dt]), s
}
var gu = Lu,
    Su = Object.prototype,
    Au = Su.toString;

function mu(t) {
    return Au.call(t)
}
var Cu = mu,
    xi = Ps,
    yu = gu,
    vu = Cu,
    Uu = "[object Null]",
    Bu = "[object Undefined]",
    _i = xi ? xi.toStringTag : void 0;

function Ku(t) {
    return t == null ? t === void 0 ? Bu : Uu : _i && _i in Object(t) ? yu(t) : vu(t)
}
var Cr = Ku;

function du(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function")
}
var ft = du,
    Nu = Cr,
    Du = ft,
    wu = "[object AsyncFunction]",
    Iu = "[object Function]",
    Ou = "[object GeneratorFunction]",
    Pu = "[object Proxy]";

function Vu(t) {
    if (!Du(t)) return !1;
    var e = Nu(t);
    return e == Iu || e == Ou || e == wu || e == Pu
}
var Bn = Vu,
    ku = Ct,
    Mu = ku["__core-js_shared__"],
    Xu = Mu,
    Gr = Xu,
    hi = function() {
        var t = /[^.]+$/.exec(Gr && Gr.keys && Gr.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
    }();

function Gu(t) {
    return !!hi && hi in t
}
var $u = Gu,
    ju = Function.prototype,
    qu = ju.toString;

function Fu(t) {
    if (t != null) {
        try {
            return qu.call(t)
        } catch {}
        try {
            return t + ""
        } catch {}
    }
    return ""
}
var Hu = Fu,
    Wu = Bn,
    zu = $u,
    Yu = ft,
    Ju = Hu,
    Qu = /[\\^$.*+?()[\]{}|]/g,
    Zu = /^\[object .+?Constructor\]$/,
    el = Function.prototype,
    tl = Object.prototype,
    rl = el.toString,
    nl = tl.hasOwnProperty,
    il = RegExp("^" + rl.call(nl).replace(Qu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function sl(t) {
    if (!Yu(t) || zu(t)) return !1;
    var e = Wu(t) ? il : Zu;
    return e.test(Ju(t))
}
var al = sl;

function fl(t, e) {
    return t == null ? void 0 : t[e]
}
var ul = fl,
    ll = al,
    ol = ul;

function El(t, e) {
    var r = ol(t, e);
    return ll(r) ? r : void 0
}
var Kn = El,
    pl = Kn,
    cl = Ct,
    xl = pl(cl, "Map"),
    ks = xl,
    _l = Kn,
    hl = _l(Object, "create"),
    yr = hl,
    Ri = yr;

function Rl() {
    this.__data__ = Ri ? Ri(null) : {}, this.size = 0
}
var Tl = Rl;

function bl(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
}
var Ll = bl,
    gl = yr,
    Sl = "__lodash_hash_undefined__",
    Al = Object.prototype,
    ml = Al.hasOwnProperty;

function Cl(t) {
    var e = this.__data__;
    if (gl) {
        var r = e[t];
        return r === Sl ? void 0 : r
    }
    return ml.call(e, t) ? e[t] : void 0
}
var yl = Cl,
    vl = yr,
    Ul = Object.prototype,
    Bl = Ul.hasOwnProperty;

function Kl(t) {
    var e = this.__data__;
    return vl ? e[t] !== void 0 : Bl.call(e, t)
}
var dl = Kl,
    Nl = yr,
    Dl = "__lodash_hash_undefined__";

function wl(t, e) {
    var r = this.__data__;
    return this.size += this.has(t) ? 0 : 1, r[t] = Nl && e === void 0 ? Dl : e, this
}
var Il = wl,
    Ol = Tl,
    Pl = Ll,
    Vl = yl,
    kl = dl,
    Ml = Il;

function yt(t) {
    var e = -1,
        r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
yt.prototype.clear = Ol;
yt.prototype.delete = Pl;
yt.prototype.get = Vl;
yt.prototype.has = kl;
yt.prototype.set = Ml;
var Xl = yt,
    Ti = Xl,
    Gl = mr,
    $l = ks;

function jl() {
    this.size = 0, this.__data__ = {
        hash: new Ti,
        map: new($l || Gl),
        string: new Ti
    }
}
var ql = jl;

function Fl(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
}
var Hl = Fl,
    Wl = Hl;

function zl(t, e) {
    var r = t.__data__;
    return Wl(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map
}
var vr = zl,
    Yl = vr;

function Jl(t) {
    var e = Yl(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
}
var Ql = Jl,
    Zl = vr;

function eo(t) {
    return Zl(this, t).get(t)
}
var to = eo,
    ro = vr;

function no(t) {
    return ro(this, t).has(t)
}
var io = no,
    so = vr;

function ao(t, e) {
    var r = so(this, t),
        i = r.size;
    return r.set(t, e), this.size += r.size == i ? 0 : 1, this
}
var fo = ao,
    uo = ql,
    lo = Ql,
    oo = to,
    Eo = io,
    po = fo;

function vt(t) {
    var e = -1,
        r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
vt.prototype.clear = uo;
vt.prototype.delete = lo;
vt.prototype.get = oo;
vt.prototype.has = Eo;
vt.prototype.set = po;
var co = vt,
    xo = mr,
    _o = ks,
    ho = co,
    Ro = 200;

function To(t, e) {
    var r = this.__data__;
    if (r instanceof xo) {
        var i = r.__data__;
        if (!_o || i.length < Ro - 1) return i.push([t, e]), this.size = ++r.size, this;
        r = this.__data__ = new ho(i)
    }
    return r.set(t, e), this.size = r.size, this
}
var bo = To,
    Lo = mr,
    go = su,
    So = fu,
    Ao = lu,
    mo = Eu,
    Co = bo;

function Ut(t) {
    var e = this.__data__ = new Lo(t);
    this.size = e.size
}
Ut.prototype.clear = go;
Ut.prototype.delete = So;
Ut.prototype.get = Ao;
Ut.prototype.has = mo;
Ut.prototype.set = Co;
var yo = Ut,
    vo = Kn,
    Uo = function() {
        try {
            var t = vo(Object, "defineProperty");
            return t({}, "", {}), t
        } catch {}
    }(),
    Ms = Uo,
    bi = Ms;

function Bo(t, e, r) {
    e == "__proto__" && bi ? bi(t, e, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
    }) : t[e] = r
}
var dn = Bo,
    Ko = dn,
    No = Sr;

function Do(t, e, r) {
    (r !== void 0 && !No(t[e], r) || r === void 0 && !(e in t)) && Ko(t, e, r)
}
var Xs = Do;

function wo(t) {
    return function(e, r, i) {
        for (var s = -1, a = Object(e), f = i(e), u = f.length; u--;) {
            var o = f[t ? u : ++s];
            if (r(a[o], o, a) === !1) break
        }
        return e
    }
}
var Io = wo,
    Oo = Io,
    Po = Oo(),
    Vo = Po,
    Er = {
        exports: {}
    };
Er.exports;
(function(t, e) {
    var r = Ct,
        i = e && !e.nodeType && e,
        s = i && !0 && t && !t.nodeType && t,
        a = s && s.exports === i,
        f = a ? r.Buffer : void 0,
        u = f ? f.allocUnsafe : void 0;

    function o(E, _) {
        if (_) return E.slice();
        var b = E.length,
            T = u ? u(b) : new E.constructor(b);
        return E.copy(T), T
    }
    t.exports = o
})(Er, Er.exports);
var ko = Er.exports,
    Mo = Ct,
    Xo = Mo.Uint8Array,
    Go = Xo,
    Li = Go;

function $o(t) {
    var e = new t.constructor(t.byteLength);
    return new Li(e).set(new Li(t)), e
}
var jo = $o,
    qo = jo;

function Fo(t, e) {
    var r = e ? qo(t.buffer) : t.buffer;
    return new t.constructor(r, t.byteOffset, t.length)
}
var Ho = Fo;

function Wo(t, e) {
    var r = -1,
        i = t.length;
    for (e || (e = Array(i)); ++r < i;) e[r] = t[r];
    return e
}
var zo = Wo,
    Yo = ft,
    gi = Object.create,
    Jo = function() {
        function t() {}
        return function(e) {
            if (!Yo(e)) return {};
            if (gi) return gi(e);
            t.prototype = e;
            var r = new t;
            return t.prototype = void 0, r
        }
    }(),
    Qo = Jo;

function Zo(t, e) {
    return function(r) {
        return t(e(r))
    }
}
var e0 = Zo,
    t0 = e0,
    r0 = t0(Object.getPrototypeOf, Object),
    Gs = r0,
    n0 = Object.prototype;

function i0(t) {
    var e = t && t.constructor,
        r = typeof e == "function" && e.prototype || n0;
    return t === r
}
var $s = i0,
    s0 = Qo,
    a0 = Gs,
    f0 = $s;

function u0(t) {
    return typeof t.constructor == "function" && !f0(t) ? s0(a0(t)) : {}
}
var l0 = u0;

function o0(t) {
    return t != null && typeof t == "object"
}
var Gt = o0,
    E0 = Cr,
    p0 = Gt,
    c0 = "[object Arguments]";

function x0(t) {
    return p0(t) && E0(t) == c0
}
var _0 = x0,
    Si = _0,
    h0 = Gt,
    js = Object.prototype,
    R0 = js.hasOwnProperty,
    T0 = js.propertyIsEnumerable,
    b0 = Si(function() {
        return arguments
    }()) ? Si : function(t) {
        return h0(t) && R0.call(t, "callee") && !T0.call(t, "callee")
    },
    qs = b0,
    L0 = Array.isArray,
    Fs = L0,
    g0 = 9007199254740991;

function S0(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= g0
}
var Hs = S0,
    A0 = Bn,
    m0 = Hs;

function C0(t) {
    return t != null && m0(t.length) && !A0(t)
}
var Nn = C0,
    y0 = Nn,
    v0 = Gt;

function U0(t) {
    return v0(t) && y0(t)
}
var B0 = U0,
    pr = {
        exports: {}
    };

function K0() {
    return !1
}
var d0 = K0;
pr.exports;
(function(t, e) {
    var r = Ct,
        i = d0,
        s = e && !e.nodeType && e,
        a = s && !0 && t && !t.nodeType && t,
        f = a && a.exports === s,
        u = f ? r.Buffer : void 0,
        o = u ? u.isBuffer : void 0,
        E = o || i;
    t.exports = E
})(pr, pr.exports);
var Ws = pr.exports,
    N0 = Cr,
    D0 = Gs,
    w0 = Gt,
    I0 = "[object Object]",
    O0 = Function.prototype,
    P0 = Object.prototype,
    zs = O0.toString,
    V0 = P0.hasOwnProperty,
    k0 = zs.call(Object);

function M0(t) {
    if (!w0(t) || N0(t) != I0) return !1;
    var e = D0(t);
    if (e === null) return !0;
    var r = V0.call(e, "constructor") && e.constructor;
    return typeof r == "function" && r instanceof r && zs.call(r) == k0
}
var X0 = M0,
    G0 = Cr,
    $0 = Hs,
    j0 = Gt,
    q0 = "[object Arguments]",
    F0 = "[object Array]",
    H0 = "[object Boolean]",
    W0 = "[object Date]",
    z0 = "[object Error]",
    Y0 = "[object Function]",
    J0 = "[object Map]",
    Q0 = "[object Number]",
    Z0 = "[object Object]",
    eE = "[object RegExp]",
    tE = "[object Set]",
    rE = "[object String]",
    nE = "[object WeakMap]",
    iE = "[object ArrayBuffer]",
    sE = "[object DataView]",
    aE = "[object Float32Array]",
    fE = "[object Float64Array]",
    uE = "[object Int8Array]",
    lE = "[object Int16Array]",
    oE = "[object Int32Array]",
    EE = "[object Uint8Array]",
    pE = "[object Uint8ClampedArray]",
    cE = "[object Uint16Array]",
    xE = "[object Uint32Array]",
    Q = {};
Q[aE] = Q[fE] = Q[uE] = Q[lE] = Q[oE] = Q[EE] = Q[pE] = Q[cE] = Q[xE] = !0;
Q[q0] = Q[F0] = Q[iE] = Q[H0] = Q[sE] = Q[W0] = Q[z0] = Q[Y0] = Q[J0] = Q[Q0] = Q[Z0] = Q[eE] = Q[tE] = Q[rE] = Q[nE] = !1;

function _E(t) {
    return j0(t) && $0(t.length) && !!Q[G0(t)]
}
var hE = _E;

function RE(t) {
    return function(e) {
        return t(e)
    }
}
var TE = RE,
    cr = {
        exports: {}
    };
cr.exports;
(function(t, e) {
    var r = Os,
        i = e && !e.nodeType && e,
        s = i && !0 && t && !t.nodeType && t,
        a = s && s.exports === i,
        f = a && r.process,
        u = function() {
            try {
                var o = s && s.require && s.require("util").types;
                return o || f && f.binding && f.binding("util")
            } catch {}
        }();
    t.exports = u
})(cr, cr.exports);
var bE = cr.exports,
    LE = hE,
    gE = TE,
    Ai = bE,
    mi = Ai && Ai.isTypedArray,
    SE = mi ? gE(mi) : LE,
    Ys = SE;

function AE(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
}
var Js = AE,
    mE = dn,
    CE = Sr,
    yE = Object.prototype,
    vE = yE.hasOwnProperty;

function UE(t, e, r) {
    var i = t[e];
    (!(vE.call(t, e) && CE(i, r)) || r === void 0 && !(e in t)) && mE(t, e, r)
}
var BE = UE,
    KE = BE,
    dE = dn;

function NE(t, e, r, i) {
    var s = !r;
    r || (r = {});
    for (var a = -1, f = e.length; ++a < f;) {
        var u = e[a],
            o = i ? i(r[u], t[u], u, r, t) : void 0;
        o === void 0 && (o = t[u]), s ? dE(r, u, o) : KE(r, u, o)
    }
    return r
}
var DE = NE;

function wE(t, e) {
    for (var r = -1, i = Array(t); ++r < t;) i[r] = e(r);
    return i
}
var IE = wE,
    OE = 9007199254740991,
    PE = /^(?:0|[1-9]\d*)$/;

function VE(t, e) {
    var r = typeof t;
    return e = e ?? OE, !!e && (r == "number" || r != "symbol" && PE.test(t)) && t > -1 && t % 1 == 0 && t < e
}
var Qs = VE,
    kE = IE,
    ME = qs,
    XE = Fs,
    GE = Ws,
    $E = Qs,
    jE = Ys,
    qE = Object.prototype,
    FE = qE.hasOwnProperty;

function HE(t, e) {
    var r = XE(t),
        i = !r && ME(t),
        s = !r && !i && GE(t),
        a = !r && !i && !s && jE(t),
        f = r || i || s || a,
        u = f ? kE(t.length, String) : [],
        o = u.length;
    for (var E in t)(e || FE.call(t, E)) && !(f && (E == "length" || s && (E == "offset" || E == "parent") || a && (E == "buffer" || E == "byteLength" || E == "byteOffset") || $E(E, o))) && u.push(E);
    return u
}
var WE = HE;

function zE(t) {
    var e = [];
    if (t != null)
        for (var r in Object(t)) e.push(r);
    return e
}
var YE = zE,
    JE = ft,
    QE = $s,
    ZE = YE,
    ep = Object.prototype,
    tp = ep.hasOwnProperty;

function rp(t) {
    if (!JE(t)) return ZE(t);
    var e = QE(t),
        r = [];
    for (var i in t) i == "constructor" && (e || !tp.call(t, i)) || r.push(i);
    return r
}
var np = rp,
    ip = WE,
    sp = np,
    ap = Nn;

function fp(t) {
    return ap(t) ? ip(t, !0) : sp(t)
}
var Zs = fp,
    up = DE,
    lp = Zs;

function op(t) {
    return up(t, lp(t))
}
var Ep = op,
    Ci = Xs,
    pp = ko,
    cp = Ho,
    xp = zo,
    _p = l0,
    yi = qs,
    vi = Fs,
    hp = B0,
    Rp = Ws,
    Tp = Bn,
    bp = ft,
    Lp = X0,
    gp = Ys,
    Ui = Js,
    Sp = Ep;

function Ap(t, e, r, i, s, a, f) {
    var u = Ui(t, r),
        o = Ui(e, r),
        E = f.get(o);
    if (E) {
        Ci(t, r, E);
        return
    }
    var _ = a ? a(u, o, r + "", t, e, f) : void 0,
        b = _ === void 0;
    if (b) {
        var T = vi(o),
            g = !T && Rp(o),
            A = !T && !g && gp(o);
        _ = o, T || g || A ? vi(u) ? _ = u : hp(u) ? _ = xp(u) : g ? (b = !1, _ = pp(o, !0)) : A ? (b = !1, _ = cp(o, !0)) : _ = [] : Lp(o) || yi(o) ? (_ = u, yi(u) ? _ = Sp(u) : (!bp(u) || Tp(u)) && (_ = _p(o))) : b = !1
    }
    b && (f.set(o, _), s(_, o, i, a, f), f.delete(o)), Ci(t, r, _)
}
var mp = Ap,
    Cp = yo,
    yp = Xs,
    vp = Vo,
    Up = mp,
    Bp = ft,
    Kp = Zs,
    dp = Js;

function ea(t, e, r, i, s) {
    t !== e && vp(e, function(a, f) {
        if (s || (s = new Cp), Bp(a)) Up(t, e, f, r, ea, i, s);
        else {
            var u = i ? i(dp(t, f), a, f + "", t, e, s) : void 0;
            u === void 0 && (u = a), yp(t, f, u)
        }
    }, Kp)
}
var Np = ea;

function Dp(t) {
    return t
}
var ta = Dp;

function wp(t, e, r) {
    switch (r.length) {
        case 0:
            return t.call(e);
        case 1:
            return t.call(e, r[0]);
        case 2:
            return t.call(e, r[0], r[1]);
        case 3:
            return t.call(e, r[0], r[1], r[2])
    }
    return t.apply(e, r)
}
var Ip = wp,
    Op = Ip,
    Bi = Math.max;

function Pp(t, e, r) {
    return e = Bi(e === void 0 ? t.length - 1 : e, 0),
        function() {
            for (var i = arguments, s = -1, a = Bi(i.length - e, 0), f = Array(a); ++s < a;) f[s] = i[e + s];
            s = -1;
            for (var u = Array(e + 1); ++s < e;) u[s] = i[s];
            return u[e] = r(f), Op(t, this, u)
        }
}
var Vp = Pp;

function kp(t) {
    return function() {
        return t
    }
}
var Mp = kp,
    Xp = Mp,
    Ki = Ms,
    Gp = ta,
    $p = Ki ? function(t, e) {
        return Ki(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Xp(e),
            writable: !0
        })
    } : Gp,
    jp = $p,
    qp = 800,
    Fp = 16,
    Hp = Date.now;

function Wp(t) {
    var e = 0,
        r = 0;
    return function() {
        var i = Hp(),
            s = Fp - (i - r);
        if (r = i, s > 0) {
            if (++e >= qp) return arguments[0]
        } else e = 0;
        return t.apply(void 0, arguments)
    }
}
var zp = Wp,
    Yp = jp,
    Jp = zp,
    Qp = Jp(Yp),
    Zp = Qp,
    ec = ta,
    tc = Vp,
    rc = Zp;

function nc(t, e) {
    return rc(tc(t, e, ec), t + "")
}
var ic = nc,
    sc = Sr,
    ac = Nn,
    fc = Qs,
    uc = ft;

function lc(t, e, r) {
    if (!uc(r)) return !1;
    var i = typeof e;
    return (i == "number" ? ac(r) && fc(e, r.length) : i == "string" && e in r) ? sc(r[e], t) : !1
}
var oc = lc,
    Ec = ic,
    pc = oc;

function cc(t) {
    return Ec(function(e, r) {
        var i = -1,
            s = r.length,
            a = s > 1 ? r[s - 1] : void 0,
            f = s > 2 ? r[2] : void 0;
        for (a = t.length > 3 && typeof a == "function" ? (s--, a) : void 0, f && pc(r[0], r[1], f) && (a = s < 3 ? void 0 : a, s = 1), e = Object(e); ++i < s;) {
            var u = r[i];
            u && t(e, u, i, a)
        }
        return e
    })
}
var xc = cc,
    _c = Np,
    hc = xc;
hc(function(t, e, r) {
    _c(t, e, r)
});
const ct = class ct {
    static get serverUrl() {
        const e = this.getQueryParam("server") ?? this.getQueryParam("s");
        return !e || e === "live" ? "ecast.jackboxgames.com" : e === "local" ? "https://localhost" : e.includes("localhost") ? e : `${e}.jackboxgames.com`
    }
    static isDevelopment() {
        return window.location.hostname === "dev.jackbox.tv" || window.location.hostname === "localhost"
    }
    static isProduction() {
        return window.location.hostname === "jackbox.tv"
    }
    static get isCanvasSupported() {
        const e = document.createElement("canvas");
        return !!(e.getContext && e.getContext("2d"))
    }
    static htmlUnescape(e) {
        return String(e).replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&")
    }
    static htmlEscape(e) {
        return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    static sanitize(e) {
        const r = this.sanitizeInput(e).replace(/'/g, "’");
        return this.htmlEscape(r).trim()
    }
    static sanitizeName(e) {
        return e.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF\u2026!?*$+\-'_ .,]/gi, "").replace(/'/g, "’")
    }
    static sanitizeInput(e) {
        return e = e.replace("…", "..."), e.replace(/[^\u00A1\u0020-\u007E\u00BF-\u00FF’]/gi, "")
    }
    static sanitizeEmoji(e) {
        return e.replace(/(\u00a9|\u00ae|[\u2000-\u2017]|[\u2020-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/, "")
    }
    static safeText(e) {
        const r = document.createElement("div");
        return r.textContent = e, r.innerHTML
    }
    static htmlTagsToBBCode(e, r) {
        if (!r.length) throw new Error("[Utils.htmlTagsToBBCode] No tag pairs were passed in");
        return r.reduce((i, s) => (i.replaceAll(`<${s[0]}>`, `[${s[1]}]`), i.replaceAll(`</${s[0]}>`, `</${s[1]}>`), i), e)
    }
    static hexToRgb(e) {
        const r = new ArrayBuffer(4);
        new DataView(r).setUint32(0, parseInt(e.replace("#", ""), 16), !1);
        const s = new Uint8Array(r);
        return `${s[1]},${s[2]},${s[3]}`
    }
    static adjustColor(e, r) {
        let i = !1,
            s = e;
        s[0] === "#" && (s = s.slice(1), i = !0);
        const a = parseInt(s, 16),
            f = Math.min(Math.max(0, (a >> 16) * r), 255),
            u = Math.min(Math.max(0, (a >> 8 & 255) * r), 255);
        let E = (Math.min(Math.max(0, (a & 255) * r), 255) | u << 8 | f << 16).toString(16);
        for (; E.length < s.length;) E = `0${E}`;
        return (i ? "#" : "") + E
    }
    static isInTolerance(e, r, i) {
        return !(Math.abs(e.x - r.x) < i || Math.abs(e.y - r.y) > i)
    }
    static getDistanceBetweenPoints(e, r) {
        const i = [e.x - r.x, e.y - r.y],
            s = Math.hypot(...i);
        return Math.round(s * 100) / 100
    }
    static getMidpoint(e, r) {
        return {
            x: (e.x + r.x) / 2,
            y: (e.y + r.y) / 2
        }
    }
    static getAngleBetweenPoints(e, r) {
        let s = Math.atan2(r.y - e.y, r.x - e.x) * (180 / Math.PI);
        return s < 0 && (s += 360), 360 - s
    }
    static getAngularDistance(e, r) {
        let i = (r - e) % 360;
        const s = i < 0 ? 1 : -1;
        return i = Math.abs(i), i > 180 ? s * (360 - i) : s * i
    }
    static getVelocity(e, r, i, s) {
        return this.getDistanceBetweenPoints(e, i) / (s - r)
    }
    static isInsideElement(e, r) {
        const i = r.getBoundingClientRect();
        return !(e.x < i.left || e.x > i.left + i.width || e.y < i.top || e.y > i.top + i.height)
    }
    static cyrb128(e) {
        let r = 1779033703,
            i = 3144134277,
            s = 1013904242,
            a = 2773480762;
        for (let f = 0, u; f < e.length; f++) u = e.charCodeAt(f), r = i ^ Math.imul(r ^ u, 597399067), i = s ^ Math.imul(i ^ u, 2869860233), s = a ^ Math.imul(s ^ u, 951274213), a = r ^ Math.imul(a ^ u, 2716044179);
        return r = Math.imul(s ^ r >>> 18, 597399067), i = Math.imul(a ^ i >>> 22, 2869860233), s = Math.imul(r ^ s >>> 17, 951274213), a = Math.imul(i ^ a >>> 19, 2716044179), [(r ^ i ^ s ^ a) >>> 0, (i ^ r) >>> 0, (s ^ r) >>> 0, (a ^ r) >>> 0]
    }
    static sfc32(e, r, i, s) {
        return function() {
            e >>>= 0, r >>>= 0, i >>>= 0, s >>>= 0;
            let f = e + r | 0;
            return e = r ^ r >>> 9, r = i + (i << 3) | 0, i = i << 21 | i >>> 11, s = s + 1 | 0, f = f + s | 0, i = i + f | 0, (f >>> 0) / 4294967296
        }
    }
};
le(ct, "queryParams", new URLSearchParams(window.location.search)), le(ct, "getQueryParam", e => ct.queryParams.get(e)), le(ct, "sleep", e => new Promise(r => {
    window.setTimeout(r, e)
}));
let pt = ct;
class xr {
    static get namespace() {
        var e;
        return ((e = window.tv.storage) == null ? void 0 : e.namespace) ?? this.defaultNamespace
    }
    static get isDisabled() {
        var e;
        return ((e = window.tv.storage) == null ? void 0 : e.isDisabled) ?? !1
    }
    static get tag() {
        var e;
        return (e = window.tv.storage) == null ? void 0 : e.tag
    }
    static get code() {
        var e;
        return (e = window.tv.storage) == null ? void 0 : e.code
    }
    static get isSupported() {
        if (this.isDisabled) return !1;
        try {
            return window.localStorage ? (window.localStorage.setItem("support-check", "1"), window.localStorage.removeItem("support-check"), !0) : !1
        } catch {
            return !1
        }
    }
    static setup(e, r) {
        delete window.tv.storage, window.tv.storage = {
            namespace: pt.getQueryParam("namespace") ?? pt.getQueryParam("ns") ?? this.defaultNamespace,
            isDisabled: pt.queryParams.has("incognito") || pt.queryParams.has("nc")
        }, e && (window.tv.storage.tag = e), r && (window.tv.storage.code = r.toLowerCase(), this.clearCodeScopedKeys(window.tv.storage.code))
    }
    static get(e, r) {
        return this.isSupported ? window.localStorage.getItem(this.getScopedKey(e, r)) : null
    }
    static set(e, r, i = "none") {
        if (this.isSupported) return window.localStorage.setItem(this.getScopedSetKey(e, i), r)
    }
    static remove(e, r) {
        if (this.isSupported) return window.localStorage.removeItem(this.getScopedKey(e, r))
    }
    static setTag(e) {
        const r = e.toLowerCase(),
            i = this.get("tags") ?? "[]",
            s = r.split("-")[0];
        let a = JSON.parse(i);
        a = a.filter(f => {
            const u = f.split("-")[0];
            return s !== u
        }), a.push(r), this.set("tags", JSON.stringify(a))
    }
    static getScopedKey(e, r) {
        const i = `${this.namespace}:${e}`,
            s = this.tag ? `${this.namespace}:${e}:tag:${this.tag}` : null,
            a = this.code ? `${this.namespace}:${e}:code:${this.code}` : null;
        if (r === "none") return i;
        if (r === "tag") {
            if (!s) throw new Error('[Storage] requested "tag" scope but tv.storage.tag is undefined');
            return s
        }
        if (r === "code") {
            if (!a) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
            return a
        }
        return a && window.localStorage.getItem(a) !== null ? a : s && window.localStorage.getItem(s) !== null ? s : i
    }
    static getScopedSetKey(e, r = "none") {
        if (r === "tag") {
            if (!this.tag) throw new Error('[Storage] requested "room" scope but tv.storage.tag is undefined');
            return `${this.namespace}:${e}:tag:${this.tag}`
        }
        if (r === "code") {
            if (!this.code) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
            return `${this.namespace}:${e}:code:${this.code}`
        }
        return `${this.namespace}:${e}`
    }
    static clearCodeScopedKeys(e) {
        this.isSupported && Object.keys(window.localStorage).forEach(r => {
            const i = r.split(":code:");
            i.length <= 1 || i[1] !== e && window.localStorage.removeItem(r)
        })
    }
}
le(xr, "defaultNamespace", "tv");
var di = {
    exports: {}
};
(function(t, e) {
    var r = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof ie < "u" && ie,
        i = function() {
            function a() {
                this.fetch = !1, this.DOMException = r.DOMException
            }
            return a.prototype = r, new a
        }();
    (function(a) {
        (function(f) {
            var u = typeof a < "u" && a || typeof self < "u" && self || typeof u < "u" && u,
                o = {
                    searchParams: "URLSearchParams" in u,
                    iterable: "Symbol" in u && "iterator" in Symbol,
                    blob: "FileReader" in u && "Blob" in u && function() {
                        try {
                            return new Blob, !0
                        } catch {
                            return !1
                        }
                    }(),
                    formData: "FormData" in u,
                    arrayBuffer: "ArrayBuffer" in u
                };

            function E(L) {
                return L && DataView.prototype.isPrototypeOf(L)
            }
            if (o.arrayBuffer) var _ = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                b = ArrayBuffer.isView || function(L) {
                    return L && _.indexOf(Object.prototype.toString.call(L)) > -1
                };

            function T(L) {
                if (typeof L != "string" && (L = String(L)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(L) || L === "") throw new TypeError('Invalid character in header field name: "' + L + '"');
                return L.toLowerCase()
            }

            function g(L) {
                return typeof L != "string" && (L = String(L)), L
            }

            function A(L) {
                var y = {
                    next: function() {
                        var w = L.shift();
                        return {
                            done: w === void 0,
                            value: w
                        }
                    }
                };
                return o.iterable && (y[Symbol.iterator] = function() {
                    return y
                }), y
            }

            function B(L) {
                this.map = {}, L instanceof B ? L.forEach(function(y, w) {
                    this.append(w, y)
                }, this) : Array.isArray(L) ? L.forEach(function(y) {
                    this.append(y[0], y[1])
                }, this) : L && Object.getOwnPropertyNames(L).forEach(function(y) {
                    this.append(y, L[y])
                }, this)
            }
            B.prototype.append = function(L, y) {
                L = T(L), y = g(y);
                var w = this.map[L];
                this.map[L] = w ? w + ", " + y : y
            }, B.prototype.delete = function(L) {
                delete this.map[T(L)]
            }, B.prototype.get = function(L) {
                return L = T(L), this.has(L) ? this.map[L] : null
            }, B.prototype.has = function(L) {
                return this.map.hasOwnProperty(T(L))
            }, B.prototype.set = function(L, y) {
                this.map[T(L)] = g(y)
            }, B.prototype.forEach = function(L, y) {
                for (var w in this.map) this.map.hasOwnProperty(w) && L.call(y, this.map[w], w, this)
            }, B.prototype.keys = function() {
                var L = [];
                return this.forEach(function(y, w) {
                    L.push(w)
                }), A(L)
            }, B.prototype.values = function() {
                var L = [];
                return this.forEach(function(y) {
                    L.push(y)
                }), A(L)
            }, B.prototype.entries = function() {
                var L = [];
                return this.forEach(function(y, w) {
                    L.push([w, y])
                }), A(L)
            }, o.iterable && (B.prototype[Symbol.iterator] = B.prototype.entries);

            function U(L) {
                if (L.bodyUsed) return Promise.reject(new TypeError("Already read"));
                L.bodyUsed = !0
            }

            function q(L) {
                return new Promise(function(y, w) {
                    L.onload = function() {
                        y(L.result)
                    }, L.onerror = function() {
                        w(L.error)
                    }
                })
            }

            function F(L) {
                var y = new FileReader,
                    w = q(y);
                return y.readAsArrayBuffer(L), w
            }

            function Ee(L) {
                var y = new FileReader,
                    w = q(y);
                return y.readAsText(L), w
            }

            function Se(L) {
                for (var y = new Uint8Array(L), w = new Array(y.length), k = 0; k < y.length; k++) w[k] = String.fromCharCode(y[k]);
                return w.join("")
            }

            function pe(L) {
                if (L.slice) return L.slice(0);
                var y = new Uint8Array(L.byteLength);
                return y.set(new Uint8Array(L)), y.buffer
            }

            function Ye() {
                return this.bodyUsed = !1, this._initBody = function(L) {
                    this.bodyUsed = this.bodyUsed, this._bodyInit = L, L ? typeof L == "string" ? this._bodyText = L : o.blob && Blob.prototype.isPrototypeOf(L) ? this._bodyBlob = L : o.formData && FormData.prototype.isPrototypeOf(L) ? this._bodyFormData = L : o.searchParams && URLSearchParams.prototype.isPrototypeOf(L) ? this._bodyText = L.toString() : o.arrayBuffer && o.blob && E(L) ? (this._bodyArrayBuffer = pe(L.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : o.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(L) || b(L)) ? this._bodyArrayBuffer = pe(L) : this._bodyText = L = Object.prototype.toString.call(L) : this._bodyText = "", this.headers.get("content-type") || (typeof L == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o.searchParams && URLSearchParams.prototype.isPrototypeOf(L) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, o.blob && (this.blob = function() {
                    var L = U(this);
                    if (L) return L;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    if (this._bodyArrayBuffer) {
                        var L = U(this);
                        return L || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                    } else return this.blob().then(F)
                }), this.text = function() {
                    var L = U(this);
                    if (L) return L;
                    if (this._bodyBlob) return Ee(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(Se(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, o.formData && (this.formData = function() {
                    return this.text().then(he)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            var te = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function xe(L) {
                var y = L.toUpperCase();
                return te.indexOf(y) > -1 ? y : L
            }

            function Y(L, y) {
                if (!(this instanceof Y)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                y = y || {};
                var w = y.body;
                if (L instanceof Y) {
                    if (L.bodyUsed) throw new TypeError("Already read");
                    this.url = L.url, this.credentials = L.credentials, y.headers || (this.headers = new B(L.headers)), this.method = L.method, this.mode = L.mode, this.signal = L.signal, !w && L._bodyInit != null && (w = L._bodyInit, L.bodyUsed = !0)
                } else this.url = String(L);
                if (this.credentials = y.credentials || this.credentials || "same-origin", (y.headers || !this.headers) && (this.headers = new B(y.headers)), this.method = xe(y.method || this.method || "GET"), this.mode = y.mode || this.mode || null, this.signal = y.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && w) throw new TypeError("Body not allowed for GET or HEAD requests");
                if (this._initBody(w), (this.method === "GET" || this.method === "HEAD") && (y.cache === "no-store" || y.cache === "no-cache")) {
                    var k = /([?&])_=[^&]*/;
                    if (k.test(this.url)) this.url = this.url.replace(k, "$1_=" + new Date().getTime());
                    else {
                        var G = /\?/;
                        this.url += (G.test(this.url) ? "&" : "?") + "_=" + new Date().getTime()
                    }
                }
            }
            Y.prototype.clone = function() {
                return new Y(this, {
                    body: this._bodyInit
                })
            };

            function he(L) {
                var y = new FormData;
                return L.trim().split("&").forEach(function(w) {
                    if (w) {
                        var k = w.split("="),
                            G = k.shift().replace(/\+/g, " "),
                            I = k.join("=").replace(/\+/g, " ");
                        y.append(decodeURIComponent(G), decodeURIComponent(I))
                    }
                }), y
            }

            function wr(L) {
                var y = new B,
                    w = L.replace(/\r?\n[\t ]+/g, " ");
                return w.split("\r").map(function(k) {
                    return k.indexOf(`
`) === 0 ? k.substr(1, k.length) : k
                }).forEach(function(k) {
                    var G = k.split(":"),
                        I = G.shift().trim();
                    if (I) {
                        var $ = G.join(":").trim();
                        y.append(I, $)
                    }
                }), y
            }
            Ye.call(Y.prototype);

            function _e(L, y) {
                if (!(this instanceof _e)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                y || (y = {}), this.type = "default", this.status = y.status === void 0 ? 200 : y.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = y.statusText === void 0 ? "" : "" + y.statusText, this.headers = new B(y.headers), this.url = y.url || "", this._initBody(L)
            }
            Ye.call(_e.prototype), _e.prototype.clone = function() {
                return new _e(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new B(this.headers),
                    url: this.url
                })
            }, _e.error = function() {
                var L = new _e(null, {
                    status: 0,
                    statusText: ""
                });
                return L.type = "error", L
            };
            var dt = [301, 302, 303, 307, 308];
            _e.redirect = function(L, y) {
                if (dt.indexOf(y) === -1) throw new RangeError("Invalid status code");
                return new _e(null, {
                    status: y,
                    headers: {
                        location: L
                    }
                })
            }, f.DOMException = u.DOMException;
            try {
                new f.DOMException
            } catch {
                f.DOMException = function(y, w) {
                    this.message = y, this.name = w;
                    var k = Error(y);
                    this.stack = k.stack
                }, f.DOMException.prototype = Object.create(Error.prototype), f.DOMException.prototype.constructor = f.DOMException
            }

            function de(L, y) {
                return new Promise(function(w, k) {
                    var G = new Y(L, y);
                    if (G.signal && G.signal.aborted) return k(new f.DOMException("Aborted", "AbortError"));
                    var I = new XMLHttpRequest;

                    function $() {
                        I.abort()
                    }
                    I.onload = function() {
                        var W = {
                            status: I.status,
                            statusText: I.statusText,
                            headers: wr(I.getAllResponseHeaders() || "")
                        };
                        W.url = "responseURL" in I ? I.responseURL : W.headers.get("X-Request-URL");
                        var Ae = "response" in I ? I.response : I.responseText;
                        setTimeout(function() {
                            w(new _e(Ae, W))
                        }, 0)
                    }, I.onerror = function() {
                        setTimeout(function() {
                            k(new TypeError("Network request failed"))
                        }, 0)
                    }, I.ontimeout = function() {
                        setTimeout(function() {
                            k(new TypeError("Network request failed"))
                        }, 0)
                    }, I.onabort = function() {
                        setTimeout(function() {
                            k(new f.DOMException("Aborted", "AbortError"))
                        }, 0)
                    };

                    function ce(W) {
                        try {
                            return W === "" && u.location.href ? u.location.href : W
                        } catch {
                            return W
                        }
                    }
                    I.open(G.method, ce(G.url), !0), G.credentials === "include" ? I.withCredentials = !0 : G.credentials === "omit" && (I.withCredentials = !1), "responseType" in I && (o.blob ? I.responseType = "blob" : o.arrayBuffer && G.headers.get("Content-Type") && G.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (I.responseType = "arraybuffer")), y && typeof y.headers == "object" && !(y.headers instanceof B) ? Object.getOwnPropertyNames(y.headers).forEach(function(W) {
                        I.setRequestHeader(W, g(y.headers[W]))
                    }) : G.headers.forEach(function(W, Ae) {
                        I.setRequestHeader(Ae, W)
                    }), G.signal && (G.signal.addEventListener("abort", $), I.onreadystatechange = function() {
                        I.readyState === 4 && G.signal.removeEventListener("abort", $)
                    }), I.send(typeof G._bodyInit > "u" ? null : G._bodyInit)
                })
            }
            return de.polyfill = !0, u.fetch || (u.fetch = de, u.Headers = B, u.Request = Y, u.Response = _e), f.Headers = B, f.Request = Y, f.Response = _e, f.fetch = de, f
        })({})
    })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
    var s = r.fetch ? r : i;
    e = s.fetch, e.default = s.fetch, e.fetch = s.fetch, e.Headers = s.Headers, e.Request = s.Request, e.Response = s.Response, t.exports = e
})(di, di.exports);
typeof WebSocket < "u" || (typeof MozWebSocket < "u" ? MozWebSocket : typeof ie < "u" && (ie.WebSocket || ie.MozWebSocket));
var ra = {
        exports: {}
    },
    _t = typeof Reflect == "object" ? Reflect : null,
    Ni = _t && typeof _t.apply == "function" ? _t.apply : function(e, r, i) {
        return Function.prototype.apply.call(e, r, i)
    },
    rr;
_t && typeof _t.ownKeys == "function" ? rr = _t.ownKeys : Object.getOwnPropertySymbols ? rr = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : rr = function(e) {
    return Object.getOwnPropertyNames(e)
};

function Rc(t) {
    console && console.warn && console.warn(t)
}
var na = Number.isNaN || function(e) {
    return e !== e
};

function H() {
    H.init.call(this)
}
ra.exports = H;
ra.exports.once = gc;
H.EventEmitter = H;
H.prototype._events = void 0;
H.prototype._eventsCount = 0;
H.prototype._maxListeners = void 0;
var Di = 10;

function Ur(t) {
    if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
}
Object.defineProperty(H, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return Di
    },
    set: function(t) {
        if (typeof t != "number" || t < 0 || na(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        Di = t
    }
});
H.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
H.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || na(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this
};

function ia(t) {
    return t._maxListeners === void 0 ? H.defaultMaxListeners : t._maxListeners
}
H.prototype.getMaxListeners = function() {
    return ia(this)
};
H.prototype.emit = function(e) {
    for (var r = [], i = 1; i < arguments.length; i++) r.push(arguments[i]);
    var s = e === "error",
        a = this._events;
    if (a !== void 0) s = s && a.error === void 0;
    else if (!s) return !1;
    if (s) {
        var f;
        if (r.length > 0 && (f = r[0]), f instanceof Error) throw f;
        var u = new Error("Unhandled error." + (f ? " (" + f.message + ")" : ""));
        throw u.context = f, u
    }
    var o = a[e];
    if (o === void 0) return !1;
    if (typeof o == "function") Ni(o, this, r);
    else
        for (var E = o.length, _ = la(o, E), i = 0; i < E; ++i) Ni(_[i], this, r);
    return !0
};

function sa(t, e, r, i) {
    var s, a, f;
    if (Ur(r), a = t._events, a === void 0 ? (a = t._events = Object.create(null), t._eventsCount = 0) : (a.newListener !== void 0 && (t.emit("newListener", e, r.listener ? r.listener : r), a = t._events), f = a[e]), f === void 0) f = a[e] = r, ++t._eventsCount;
    else if (typeof f == "function" ? f = a[e] = i ? [r, f] : [f, r] : i ? f.unshift(r) : f.push(r), s = ia(t), s > 0 && f.length > s && !f.warned) {
        f.warned = !0;
        var u = new Error("Possible EventEmitter memory leak detected. " + f.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = e, u.count = f.length, Rc(u)
    }
    return t
}
H.prototype.addListener = function(e, r) {
    return sa(this, e, r, !1)
};
H.prototype.on = H.prototype.addListener;
H.prototype.prependListener = function(e, r) {
    return sa(this, e, r, !0)
};

function Tc() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function aa(t, e, r) {
    var i = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: r
        },
        s = Tc.bind(i);
    return s.listener = r, i.wrapFn = s, s
}
H.prototype.once = function(e, r) {
    return Ur(r), this.on(e, aa(this, e, r)), this
};
H.prototype.prependOnceListener = function(e, r) {
    return Ur(r), this.prependListener(e, aa(this, e, r)), this
};
H.prototype.removeListener = function(e, r) {
    var i, s, a, f, u;
    if (Ur(r), s = this._events, s === void 0) return this;
    if (i = s[e], i === void 0) return this;
    if (i === r || i.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[e], s.removeListener && this.emit("removeListener", e, i.listener || r));
    else if (typeof i != "function") {
        for (a = -1, f = i.length - 1; f >= 0; f--)
            if (i[f] === r || i[f].listener === r) {
                u = i[f].listener, a = f;
                break
            } if (a < 0) return this;
        a === 0 ? i.shift() : bc(i, a), i.length === 1 && (s[e] = i[0]), s.removeListener !== void 0 && this.emit("removeListener", e, u || r)
    }
    return this
};
H.prototype.off = H.prototype.removeListener;
H.prototype.removeAllListeners = function(e) {
    var r, i, s;
    if (i = this._events, i === void 0) return this;
    if (i.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : i[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete i[e]), this;
    if (arguments.length === 0) {
        var a = Object.keys(i),
            f;
        for (s = 0; s < a.length; ++s) f = a[s], f !== "removeListener" && this.removeAllListeners(f);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
    }
    if (r = i[e], typeof r == "function") this.removeListener(e, r);
    else if (r !== void 0)
        for (s = r.length - 1; s >= 0; s--) this.removeListener(e, r[s]);
    return this
};

function fa(t, e, r) {
    var i = t._events;
    if (i === void 0) return [];
    var s = i[e];
    return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? Lc(s) : la(s, s.length)
}
H.prototype.listeners = function(e) {
    return fa(this, e, !0)
};
H.prototype.rawListeners = function(e) {
    return fa(this, e, !1)
};
H.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : ua.call(t, e)
};
H.prototype.listenerCount = ua;

function ua(t) {
    var e = this._events;
    if (e !== void 0) {
        var r = e[t];
        if (typeof r == "function") return 1;
        if (r !== void 0) return r.length
    }
    return 0
}
H.prototype.eventNames = function() {
    return this._eventsCount > 0 ? rr(this._events) : []
};

function la(t, e) {
    for (var r = new Array(e), i = 0; i < e; ++i) r[i] = t[i];
    return r
}

function bc(t, e) {
    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
    t.pop()
}

function Lc(t) {
    for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
    return e
}

function gc(t, e) {
    return new Promise(function(r, i) {
        function s(f) {
            t.removeListener(e, a), i(f)
        }

        function a() {
            typeof t.removeListener == "function" && t.removeListener("error", s), r([].slice.call(arguments))
        }
        oa(t, e, a, {
            once: !0
        }), e !== "error" && Sc(t, s, {
            once: !0
        })
    })
}

function Sc(t, e, r) {
    typeof t.on == "function" && oa(t, "error", e, r)
}

function oa(t, e, r, i) {
    if (typeof t.on == "function") i.once ? t.once(e, r) : t.on(e, r);
    else if (typeof t.addEventListener == "function") t.addEventListener(e, function s(a) {
        i.once && t.removeEventListener(e, s), r(a)
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
}

function Ac(...t) {
    console.log(...t)
}

function mc(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var wi = {
    exports: {}
};
(function(t, e) {
    (function(r, i) {
        i(e)
    })(ie, function(r) {
        var i = typeof window < "u" ? window : typeof ie < "u" ? ie : typeof self < "u" ? self : {},
            s = function(c, R) {
                if (R = R.split(":")[0], c = +c, !c) return !1;
                switch (R) {
                    case "http":
                    case "ws":
                        return c !== 80;
                    case "https":
                    case "wss":
                        return c !== 443;
                    case "ftp":
                        return c !== 21;
                    case "gopher":
                        return c !== 70;
                    case "file":
                        return !1
                }
                return c !== 0
            },
            a = Object.prototype.hasOwnProperty,
            f;

        function u(x) {
            try {
                return decodeURIComponent(x.replace(/\+/g, " "))
            } catch {
                return null
            }
        }

        function o(x) {
            try {
                return encodeURIComponent(x)
            } catch {
                return null
            }
        }

        function E(x) {
            for (var c = /([^=?#&]+)=?([^&]*)/g, R = {}, p; p = c.exec(x);) {
                var h = u(p[1]),
                    m = u(p[2]);
                h === null || m === null || h in R || (R[h] = m)
            }
            return R
        }

        function _(x, c) {
            c = c || "";
            var R = [],
                p, h;
            typeof c != "string" && (c = "?");
            for (h in x)
                if (a.call(x, h)) {
                    if (p = x[h], !p && (p === null || p === f || isNaN(p)) && (p = ""), h = o(h), p = o(p), h === null || p === null) continue;
                    R.push(h + "=" + p)
                } return R.length ? c + R.join("&") : ""
        }
        var b = _,
            T = E,
            g = {
                stringify: b,
                parse: T
            },
            A = /[\n\r\t]/g,
            B = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            U = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            q = /^[a-zA-Z]:/,
            F = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;

        function Ee(x) {
            return (x || "").toString().replace(F, "")
        }
        var Se = [
                ["#", "hash"],
                ["?", "query"],
                function(c, R) {
                    return te(R.protocol) ? c.replace(/\\/g, "/") : c
                },
                ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/:(\d*)$/, "port", void 0, 1],
                [NaN, "hostname", void 0, 1, 1]
            ],
            pe = {
                hash: 1,
                query: 1
            };

        function Ye(x) {
            var c;
            typeof window < "u" ? c = window : typeof i < "u" ? c = i : typeof self < "u" ? c = self : c = {};
            var R = c.location || {};
            x = x || R;
            var p = {},
                h = typeof x,
                m;
            if (x.protocol === "blob:") p = new he(unescape(x.pathname), {});
            else if (h === "string") {
                p = new he(x, {});
                for (m in pe) delete p[m]
            } else if (h === "object") {
                for (m in x) m in pe || (p[m] = x[m]);
                p.slashes === void 0 && (p.slashes = B.test(x.href))
            }
            return p
        }

        function te(x) {
            return x === "file:" || x === "ftp:" || x === "http:" || x === "https:" || x === "ws:" || x === "wss:"
        }

        function xe(x, c) {
            x = Ee(x), x = x.replace(A, ""), c = c || {};
            var R = U.exec(x),
                p = R[1] ? R[1].toLowerCase() : "",
                h = !!R[2],
                m = !!R[3],
                C = 0,
                v;
            return h ? m ? (v = R[2] + R[3] + R[4], C = R[2].length + R[3].length) : (v = R[2] + R[4], C = R[2].length) : m ? (v = R[3] + R[4], C = R[3].length) : v = R[4], p === "file:" ? C >= 2 && (v = v.slice(2)) : te(p) ? v = R[4] : p ? h && (v = v.slice(2)) : C >= 2 && te(c.protocol) && (v = R[4]), {
                protocol: p,
                slashes: h || te(p),
                slashesCount: C,
                rest: v
            }
        }

        function Y(x, c) {
            if (x === "") return c;
            for (var R = (c || "/").split("/").slice(0, -1).concat(x.split("/")), p = R.length, h = R[p - 1], m = !1, C = 0; p--;) R[p] === "." ? R.splice(p, 1) : R[p] === ".." ? (R.splice(p, 1), C++) : C && (p === 0 && (m = !0), R.splice(p, 1), C--);
            return m && R.unshift(""), (h === "." || h === "..") && R.push(""), R.join("/")
        }

        function he(x, c, R) {
            if (x = Ee(x), x = x.replace(A, ""), !(this instanceof he)) return new he(x, c, R);
            var p, h, m, C, v, d, J = Se.slice(),
                ae = typeof c,
                K = this,
                Vr = 0;
            for (ae !== "object" && ae !== "string" && (R = c, c = null), R && typeof R != "function" && (R = g.parse), c = Ye(c), h = xe(x || "", c), p = !h.protocol && !h.slashes, K.slashes = h.slashes || p && c.slashes, K.protocol = h.protocol || c.protocol || "", x = h.rest, (h.protocol === "file:" && (h.slashesCount !== 2 || q.test(x)) || !h.slashes && (h.protocol || h.slashesCount < 2 || !te(K.protocol))) && (J[3] = [/(.*)/, "pathname"]); Vr < J.length; Vr++) {
                if (C = J[Vr], typeof C == "function") {
                    x = C(x, K);
                    continue
                }
                m = C[0], d = C[1], m !== m ? K[d] = x : typeof m == "string" ? (v = m === "@" ? x.lastIndexOf(m) : x.indexOf(m), ~v && (typeof C[2] == "number" ? (K[d] = x.slice(0, v), x = x.slice(v + C[2])) : (K[d] = x.slice(v), x = x.slice(0, v)))) : (v = m.exec(x)) && (K[d] = v[1], x = x.slice(0, v.index)), K[d] = K[d] || p && C[3] && c[d] || "", C[4] && (K[d] = K[d].toLowerCase())
            }
            R && (K.query = R(K.query)), p && c.slashes && K.pathname.charAt(0) !== "/" && (K.pathname !== "" || c.pathname !== "") && (K.pathname = Y(K.pathname, c.pathname)), K.pathname.charAt(0) !== "/" && te(K.protocol) && (K.pathname = "/" + K.pathname), s(K.port, K.protocol) || (K.host = K.hostname, K.port = ""), K.username = K.password = "", K.auth && (v = K.auth.indexOf(":"), ~v ? (K.username = K.auth.slice(0, v), K.username = encodeURIComponent(decodeURIComponent(K.username)), K.password = K.auth.slice(v + 1), K.password = encodeURIComponent(decodeURIComponent(K.password))) : K.username = encodeURIComponent(decodeURIComponent(K.auth)), K.auth = K.password ? K.username + ":" + K.password : K.username), K.origin = K.protocol !== "file:" && te(K.protocol) && K.host ? K.protocol + "//" + K.host : "null", K.href = K.toString()
        }

        function wr(x, c, R) {
            var p = this;
            switch (x) {
                case "query":
                    typeof c == "string" && c.length && (c = (R || g.parse)(c)), p[x] = c;
                    break;
                case "port":
                    p[x] = c, s(c, p.protocol) ? c && (p.host = p.hostname + ":" + c) : (p.host = p.hostname, p[x] = "");
                    break;
                case "hostname":
                    p[x] = c, p.port && (c += ":" + p.port), p.host = c;
                    break;
                case "host":
                    p[x] = c, /:\d+$/.test(c) ? (c = c.split(":"), p.port = c.pop(), p.hostname = c.join(":")) : (p.hostname = c, p.port = "");
                    break;
                case "protocol":
                    p.protocol = c.toLowerCase(), p.slashes = !R;
                    break;
                case "pathname":
                case "hash":
                    if (c) {
                        var h = x === "pathname" ? "/" : "#";
                        p[x] = c.charAt(0) !== h ? h + c : c
                    } else p[x] = c;
                    break;
                case "username":
                case "password":
                    p[x] = encodeURIComponent(c);
                    break;
                case "auth":
                    var m = c.indexOf(":");
                    ~m ? (p.username = c.slice(0, m), p.username = encodeURIComponent(decodeURIComponent(p.username)), p.password = c.slice(m + 1), p.password = encodeURIComponent(decodeURIComponent(p.password))) : p.username = encodeURIComponent(decodeURIComponent(c))
            }
            for (var C = 0; C < Se.length; C++) {
                var v = Se[C];
                v[4] && (p[v[1]] = p[v[1]].toLowerCase())
            }
            return p.auth = p.password ? p.username + ":" + p.password : p.username, p.origin = p.protocol !== "file:" && te(p.protocol) && p.host ? p.protocol + "//" + p.host : "null", p.href = p.toString(), p
        }

        function _e(x) {
            (!x || typeof x != "function") && (x = g.stringify);
            var c, R = this,
                p = R.host,
                h = R.protocol;
            h && h.charAt(h.length - 1) !== ":" && (h += ":");
            var m = h + (R.protocol && R.slashes || te(R.protocol) ? "//" : "");
            return R.username ? (m += R.username, R.password && (m += ":" + R.password), m += "@") : R.password ? (m += ":" + R.password, m += "@") : R.protocol !== "file:" && te(R.protocol) && !p && R.pathname !== "/" && (m += "@"), p[p.length - 1] === ":" && (p += ":"), m += p + R.pathname, c = typeof R.query == "object" ? x(R.query) : R.query, c && (m += c.charAt(0) !== "?" ? "?" + c : c), R.hash && (m += R.hash), m
        }
        he.prototype = {
            set: wr,
            toString: _e
        }, he.extractProtocol = xe, he.location = Ye, he.trimLeft = Ee, he.qs = g;
        var dt = he;

        function de(x, c) {
            setTimeout(function(R) {
                return x.call(R)
            }, 4, c)
        }

        function L(x, c) {
            typeof process < "u" && console[x].call(null, c)
        }

        function y(x, c) {
            x === void 0 && (x = []);
            var R = [];
            return x.forEach(function(p) {
                c(p) || R.push(p)
            }), R
        }

        function w(x, c) {
            x === void 0 && (x = []);
            var R = [];
            return x.forEach(function(p) {
                c(p) && R.push(p)
            }), R
        }
        var k = function() {
            this.listeners = {}
        };
        k.prototype.addEventListener = function(c, R) {
            typeof R == "function" && (Array.isArray(this.listeners[c]) || (this.listeners[c] = []), w(this.listeners[c], function(p) {
                return p === R
            }).length === 0 && this.listeners[c].push(R))
        }, k.prototype.removeEventListener = function(c, R) {
            var p = this.listeners[c];
            this.listeners[c] = y(p, function(h) {
                return h === R
            })
        }, k.prototype.dispatchEvent = function(c) {
            for (var R = this, p = [], h = arguments.length - 1; h-- > 0;) p[h] = arguments[h + 1];
            var m = c.type,
                C = this.listeners[m];
            return Array.isArray(C) ? (C.forEach(function(v) {
                p.length > 0 ? v.apply(R, p) : v.call(R, c)
            }), !0) : !1
        };

        function G(x) {
            var c = x.indexOf("?");
            return c >= 0 ? x.slice(0, c) : x
        }
        var I = function() {
            this.urlMap = {}
        };
        I.prototype.attachWebSocket = function(c, R) {
            var p = G(R),
                h = this.urlMap[p];
            if (h && h.server && h.websockets.indexOf(c) === -1) return h.websockets.push(c), h.server
        }, I.prototype.addMembershipToRoom = function(c, R) {
            var p = this.urlMap[G(c.url)];
            p && p.server && p.websockets.indexOf(c) !== -1 && (p.roomMemberships[R] || (p.roomMemberships[R] = []), p.roomMemberships[R].push(c))
        }, I.prototype.attachServer = function(c, R) {
            var p = G(R),
                h = this.urlMap[p];
            if (!h) return this.urlMap[p] = {
                server: c,
                websockets: [],
                roomMemberships: {}
            }, c
        }, I.prototype.serverLookup = function(c) {
            var R = G(c),
                p = this.urlMap[R];
            if (p) return p.server
        }, I.prototype.websocketsLookup = function(c, R, p) {
            var h = G(c),
                m, C = this.urlMap[h];
            if (m = C ? C.websockets : [], R) {
                var v = C.roomMemberships[R];
                m = v || []
            }
            return p ? m.filter(function(d) {
                return d !== p
            }) : m
        }, I.prototype.removeServer = function(c) {
            delete this.urlMap[G(c)]
        }, I.prototype.removeWebSocket = function(c, R) {
            var p = G(R),
                h = this.urlMap[p];
            h && (h.websockets = y(h.websockets, function(m) {
                return m === c
            }))
        }, I.prototype.removeMembershipFromRoom = function(c, R) {
            var p = this.urlMap[G(c.url)],
                h = p.roomMemberships[R];
            p && h !== null && (p.roomMemberships[R] = y(h, function(m) {
                return m === c
            }))
        };
        var $ = new I,
            ce = {
                CLOSE_NORMAL: 1e3,
                CLOSE_GOING_AWAY: 1001,
                CLOSE_PROTOCOL_ERROR: 1002,
                CLOSE_UNSUPPORTED: 1003,
                CLOSE_NO_STATUS: 1005,
                CLOSE_ABNORMAL: 1006,
                UNSUPPORTED_DATA: 1007,
                POLICY_VIOLATION: 1008,
                CLOSE_TOO_LARGE: 1009,
                MISSING_EXTENSION: 1010,
                INTERNAL_ERROR: 1011,
                SERVICE_RESTART: 1012,
                TRY_AGAIN_LATER: 1013,
                TLS_HANDSHAKE: 1015
            },
            W = {
                CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                EVENT: {
                    CONSTRUCT: "Failed to construct 'Event':",
                    MESSAGE: "Failed to construct 'MessageEvent':",
                    CLOSE: "Failed to construct 'CloseEvent':"
                }
            },
            Ae = function() {};
        Ae.prototype.stopPropagation = function() {}, Ae.prototype.stopImmediatePropagation = function() {}, Ae.prototype.initEvent = function(c, R, p) {
            c === void 0 && (c = "undefined"), R === void 0 && (R = !1), p === void 0 && (p = !1), this.type = "" + c, this.bubbles = !!R, this.cancelable = !!p
        };
        var Ga = function(x) {
                function c(R, p) {
                    if (p === void 0 && (p = {}), x.call(this), !R) throw new TypeError(W.EVENT_ERROR + " 1 argument required, but only 0 present.");
                    if (typeof p != "object") throw new TypeError(W.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                    var h = p.bubbles,
                        m = p.cancelable;
                    this.type = "" + R, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = m ? !!m : !1, this.cancelBubble = !1, this.bubbles = h ? !!h : !1
                }
                return x && (c.__proto__ = x), c.prototype = Object.create(x && x.prototype), c.prototype.constructor = c, c
            }(Ae),
            $a = function(x) {
                function c(R, p) {
                    if (p === void 0 && (p = {}), x.call(this), !R) throw new TypeError(W.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                    if (typeof p != "object") throw new TypeError(W.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                    var h = p.bubbles,
                        m = p.cancelable,
                        C = p.data,
                        v = p.origin,
                        d = p.lastEventId,
                        J = p.ports;
                    this.type = "" + R, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = m ? !!m : !1, this.canncelBubble = !1, this.bubbles = h ? !!h : !1, this.origin = "" + v, this.ports = typeof J > "u" ? null : J, this.data = typeof C > "u" ? null : C, this.lastEventId = "" + (d || "")
                }
                return x && (c.__proto__ = x), c.prototype = Object.create(x && x.prototype), c.prototype.constructor = c, c
            }(Ae),
            ja = function(x) {
                function c(R, p) {
                    if (p === void 0 && (p = {}), x.call(this), !R) throw new TypeError(W.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                    if (typeof p != "object") throw new TypeError(W.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                    var h = p.bubbles,
                        m = p.cancelable,
                        C = p.code,
                        v = p.reason,
                        d = p.wasClean;
                    this.type = "" + R, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = m ? !!m : !1, this.cancelBubble = !1, this.bubbles = h ? !!h : !1, this.code = typeof C == "number" ? parseInt(C, 10) : 0, this.reason = "" + (v || ""), this.wasClean = d ? !!d : !1
                }
                return x && (c.__proto__ = x), c.prototype = Object.create(x && x.prototype), c.prototype.constructor = c, c
            }(Ae);

        function Re(x) {
            var c = x.type,
                R = x.target,
                p = new Ga(c);
            return R && (p.target = R, p.srcElement = R, p.currentTarget = R), p
        }

        function Nt(x) {
            var c = x.type,
                R = x.origin,
                p = x.data,
                h = x.target,
                m = new $a(c, {
                    data: p,
                    origin: R
                });
            return h && (m.target = h, m.srcElement = h, m.currentTarget = h), m
        }

        function me(x) {
            var c = x.code,
                R = x.reason,
                p = x.type,
                h = x.target,
                m = x.wasClean;
            m || (m = c === ce.CLOSE_NORMAL || c === ce.CLOSE_NO_STATUS);
            var C = new ja(p, {
                code: c,
                reason: R,
                wasClean: m
            });
            return h && (C.target = h, C.srcElement = h, C.currentTarget = h), C
        }

        function Jn(x, c, R) {
            x.readyState = re.CLOSING;
            var p = $.serverLookup(x.url),
                h = me({
                    type: "close",
                    target: x.target,
                    code: c,
                    reason: R
                });
            de(function() {
                $.removeWebSocket(x, x.url), x.readyState = re.CLOSED, x.dispatchEvent(h), p && p.dispatchEvent(h, p)
            }, x)
        }

        function qa(x, c, R) {
            x.readyState = re.CLOSING;
            var p = $.serverLookup(x.url),
                h = me({
                    type: "close",
                    target: x.target,
                    code: c,
                    reason: R,
                    wasClean: !1
                }),
                m = Re({
                    type: "error",
                    target: x.target
                });
            de(function() {
                $.removeWebSocket(x, x.url), x.readyState = re.CLOSED, x.dispatchEvent(m), x.dispatchEvent(h), p && p.dispatchEvent(h, p)
            }, x)
        }

        function Ht(x) {
            return Object.prototype.toString.call(x) !== "[object Blob]" && !(x instanceof ArrayBuffer) && (x = String(x)), x
        }
        var Ir = new WeakMap;

        function Qn(x) {
            if (Ir.has(x)) return Ir.get(x);
            var c = new Proxy(x, {
                get: function(p, h) {
                    if (h === "close") return function(v) {
                        v === void 0 && (v = {});
                        var d = v.code || ce.CLOSE_NORMAL,
                            J = v.reason || "";
                        Jn(c, d, J)
                    };
                    if (h === "send") return function(v) {
                        v = Ht(v), x.dispatchEvent(Nt({
                            type: "message",
                            data: v,
                            origin: this.url,
                            target: x
                        }))
                    };
                    var m = function(C) {
                        return C === "message" ? "server::" + C : C
                    };
                    return h === "on" ? function(v, d) {
                        x.addEventListener(m(v), d)
                    } : h === "off" ? function(v, d) {
                        x.removeEventListener(m(v), d)
                    } : h === "target" ? x : p[h]
                }
            });
            return Ir.set(x, c), c
        }

        function Fa(x) {
            var c = encodeURIComponent(x).match(/%[89ABab]/g);
            return x.length + (c ? c.length : 0)
        }

        function Ha(x) {
            var c = new dt(x),
                R = c.pathname,
                p = c.protocol,
                h = c.hash;
            if (!x) throw new TypeError(W.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
            if (R || (c.pathname = "/"), p === "") throw new SyntaxError(W.CONSTRUCTOR_ERROR + " The URL '" + c.toString() + "' is invalid.");
            if (p !== "ws:" && p !== "wss:") throw new SyntaxError(W.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + p + "' is not allowed.");
            if (h !== "") throw new SyntaxError(W.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + h + "'). Fragment identifiers are not allowed in WebSocket URLs.");
            return c.toString()
        }

        function Wa(x) {
            if (x === void 0 && (x = []), !Array.isArray(x) && typeof x != "string") throw new SyntaxError(W.CONSTRUCTOR_ERROR + " The subprotocol '" + x.toString() + "' is invalid.");
            typeof x == "string" && (x = [x]);
            var c = x.map(function(p) {
                    return {
                        count: 1,
                        protocol: p
                    }
                }).reduce(function(p, h) {
                    return p[h.protocol] = (p[h.protocol] || 0) + h.count, p
                }, {}),
                R = Object.keys(c).filter(function(p) {
                    return c[p] > 1
                });
            if (R.length > 0) throw new SyntaxError(W.CONSTRUCTOR_ERROR + " The subprotocol '" + R[0] + "' is duplicated.");
            return x
        }
        var re = function(x) {
            function c(p, h) {
                x.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = Ha(p), h = Wa(h), this.protocol = h[0] || "", this.binaryType = "blob", this.readyState = c.CONNECTING;
                var m = Qn(this),
                    C = $.attachWebSocket(m, this.url);
                de(function() {
                    if (this.readyState === c.CONNECTING)
                        if (C)
                            if (C.options.verifyClient && typeof C.options.verifyClient == "function" && !C.options.verifyClient()) this.readyState = c.CLOSED, L("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), $.removeWebSocket(m, this.url), this.dispatchEvent(Re({
                                type: "error",
                                target: this
                            })), this.dispatchEvent(me({
                                type: "close",
                                target: this,
                                code: ce.CLOSE_NORMAL
                            }));
                            else {
                                if (C.options.selectProtocol && typeof C.options.selectProtocol == "function") {
                                    var d = C.options.selectProtocol(h),
                                        J = d !== "",
                                        ae = h.indexOf(d) !== -1;
                                    if (J && !ae) {
                                        this.readyState = c.CLOSED, L("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), $.removeWebSocket(m, this.url), this.dispatchEvent(Re({
                                            type: "error",
                                            target: this
                                        })), this.dispatchEvent(me({
                                            type: "close",
                                            target: this,
                                            code: ce.CLOSE_NORMAL
                                        }));
                                        return
                                    }
                                    this.protocol = d
                                }
                                this.readyState = c.OPEN, this.dispatchEvent(Re({
                                    type: "open",
                                    target: this
                                })), C.dispatchEvent(Re({
                                    type: "connection"
                                }), m)
                            }
                    else this.readyState = c.CLOSED, this.dispatchEvent(Re({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(me({
                        type: "close",
                        target: this,
                        code: ce.CLOSE_NORMAL
                    })), L("error", "WebSocket connection to '" + this.url + "' failed")
                }, this)
            }
            x && (c.__proto__ = x), c.prototype = Object.create(x && x.prototype), c.prototype.constructor = c;
            var R = {
                onopen: {},
                onmessage: {},
                onclose: {},
                onerror: {}
            };
            return R.onopen.get = function() {
                return this._onopen
            }, R.onmessage.get = function() {
                return this._onmessage
            }, R.onclose.get = function() {
                return this._onclose
            }, R.onerror.get = function() {
                return this._onerror
            }, R.onopen.set = function(p) {
                this.removeEventListener("open", this._onopen), this._onopen = p, this.addEventListener("open", p)
            }, R.onmessage.set = function(p) {
                this.removeEventListener("message", this._onmessage), this._onmessage = p, this.addEventListener("message", p)
            }, R.onclose.set = function(p) {
                this.removeEventListener("close", this._onclose), this._onclose = p, this.addEventListener("close", p)
            }, R.onerror.set = function(p) {
                this.removeEventListener("error", this._onerror), this._onerror = p, this.addEventListener("error", p)
            }, c.prototype.send = function(h) {
                var m = this;
                if (this.readyState === c.CONNECTING) throw new Error("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state");
                var C = Nt({
                        type: "server::message",
                        origin: this.url,
                        data: Ht(h)
                    }),
                    v = $.serverLookup(this.url);
                v && de(function() {
                    m.dispatchEvent(C, h)
                }, v)
            }, c.prototype.close = function(h, m) {
                if (h !== void 0 && (typeof h != "number" || h !== 1e3 && (h < 3e3 || h > 4999))) throw new TypeError(W.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + h + " is neither.");
                if (m !== void 0) {
                    var C = Fa(m);
                    if (C > 123) throw new SyntaxError(W.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                }
                if (!(this.readyState === c.CLOSING || this.readyState === c.CLOSED)) {
                    var v = Qn(this);
                    this.readyState === c.CONNECTING ? qa(v, h || ce.CLOSE_ABNORMAL, m) : Jn(v, h || ce.CLOSE_NO_STATUS, m)
                }
            }, Object.defineProperties(c.prototype, R), c
        }(k);
        re.CONNECTING = 0, re.prototype.CONNECTING = re.CONNECTING, re.OPEN = 1, re.prototype.OPEN = re.OPEN, re.CLOSING = 2, re.prototype.CLOSING = re.CLOSING, re.CLOSED = 3, re.prototype.CLOSED = re.CLOSED;
        var ot = function(x) {
            function c(p, h) {
                var m = this;
                p === void 0 && (p = "socket.io"), h === void 0 && (h = ""), x.call(this), this.binaryType = "blob";
                var C = new dt(p);
                C.pathname || (C.pathname = "/"), this.url = C.toString(), this.readyState = c.CONNECTING, this.protocol = "", this.target = this, typeof h == "string" || typeof h == "object" && h !== null ? this.protocol = h : Array.isArray(h) && h.length > 0 && (this.protocol = h[0]);
                var v = $.attachWebSocket(this, this.url);
                de(function() {
                    v ? (this.readyState = c.OPEN, v.dispatchEvent(Re({
                        type: "connection"
                    }), v, this), v.dispatchEvent(Re({
                        type: "connect"
                    }), v, this), this.dispatchEvent(Re({
                        type: "connect",
                        target: this
                    }))) : (this.readyState = c.CLOSED, this.dispatchEvent(Re({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(me({
                        type: "close",
                        target: this,
                        code: ce.CLOSE_NORMAL
                    })), L("error", "Socket.io connection to '" + this.url + "' failed"))
                }, this), this.addEventListener("close", function(d) {
                    m.dispatchEvent(me({
                        type: "disconnect",
                        target: d.target,
                        code: d.code
                    }))
                })
            }
            x && (c.__proto__ = x), c.prototype = Object.create(x && x.prototype), c.prototype.constructor = c;
            var R = {
                broadcast: {}
            };
            return c.prototype.close = function() {
                if (this.readyState === c.OPEN) {
                    var h = $.serverLookup(this.url);
                    return $.removeWebSocket(this, this.url), this.readyState = c.CLOSED, this.dispatchEvent(me({
                        type: "close",
                        target: this,
                        code: ce.CLOSE_NORMAL
                    })), h && h.dispatchEvent(me({
                        type: "disconnect",
                        target: this,
                        code: ce.CLOSE_NORMAL
                    }), h), this
                }
            }, c.prototype.disconnect = function() {
                return this.close()
            }, c.prototype.emit = function(h) {
                for (var m = [], C = arguments.length - 1; C-- > 0;) m[C] = arguments[C + 1];
                if (this.readyState !== c.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var v = Nt({
                        type: h,
                        origin: this.url,
                        data: m
                    }),
                    d = $.serverLookup(this.url);
                return d && d.dispatchEvent.apply(d, [v].concat(m)), this
            }, c.prototype.send = function(h) {
                return this.emit("message", h), this
            }, R.broadcast.get = function() {
                if (this.readyState !== c.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var p = this,
                    h = $.serverLookup(this.url);
                if (!h) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                return {
                    emit: function(C, v) {
                        return h.emit(C, v, {
                            websockets: $.websocketsLookup(p.url, null, p)
                        }), p
                    },
                    to: function(C) {
                        return h.to(C, p)
                    },
                    in: function(C) {
                        return h.in(C, p)
                    }
                }
            }, c.prototype.on = function(h, m) {
                return this.addEventListener(h, m), this
            }, c.prototype.off = function(h, m) {
                this.removeEventListener(h, m)
            }, c.prototype.hasListeners = function(h) {
                var m = this.listeners[h];
                return Array.isArray(m) ? !!m.length : !1
            }, c.prototype.join = function(h) {
                $.addMembershipToRoom(this, h)
            }, c.prototype.leave = function(h) {
                $.removeMembershipFromRoom(this, h)
            }, c.prototype.to = function(h) {
                return this.broadcast.to(h)
            }, c.prototype.in = function() {
                return this.to.apply(null, arguments)
            }, c.prototype.dispatchEvent = function(h) {
                for (var m = this, C = [], v = arguments.length - 1; v-- > 0;) C[v] = arguments[v + 1];
                var d = h.type,
                    J = this.listeners[d];
                if (!Array.isArray(J)) return !1;
                J.forEach(function(ae) {
                    C.length > 0 ? ae.apply(m, C) : ae.call(m, h.data ? h.data : h)
                })
            }, Object.defineProperties(c.prototype, R), c
        }(k);
        ot.CONNECTING = 0, ot.OPEN = 1, ot.CLOSING = 2, ot.CLOSED = 3;
        var Or = function(c, R) {
            return new ot(c, R)
        };
        Or.connect = function(c, R) {
            return Or(c, R)
        };
        var za = function(x) {
            return x.reduce(function(c, R) {
                return c.indexOf(R) > -1 ? c : c.concat(R)
            }, [])
        };

        function Zn() {
            return typeof window < "u" ? window : typeof process == "object" && typeof mc == "function" && typeof ie == "object" ? ie : this
        }
        var ei = {
                mock: !0,
                verifyClient: null,
                selectProtocol: null
            },
            Pr = function(x) {
                function c(R, p) {
                    p === void 0 && (p = ei), x.call(this);
                    var h = new dt(R);
                    h.pathname || (h.pathname = "/"), this.url = h.toString(), this.originalWebSocket = null;
                    var m = $.attachServer(this, this.url);
                    if (!m) throw this.dispatchEvent(Re({
                        type: "error"
                    })), new Error("A mock server is already listening on this url");
                    this.options = Object.assign({}, ei, p), this.options.mock && this.mockWebsocket()
                }
                return x && (c.__proto__ = x), c.prototype = Object.create(x && x.prototype), c.prototype.constructor = c, c.prototype.mockWebsocket = function() {
                    var p = Zn();
                    this.originalWebSocket = p.WebSocket, p.WebSocket = re
                }, c.prototype.restoreWebsocket = function() {
                    var p = Zn();
                    this.originalWebSocket !== null && (p.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                }, c.prototype.stop = function(p) {
                    p === void 0 && (p = function() {}), this.options.mock && this.restoreWebsocket(), $.removeServer(this.url), typeof p == "function" && p()
                }, c.prototype.on = function(p, h) {
                    this.addEventListener(p, h)
                }, c.prototype.off = function(p, h) {
                    this.removeEventListener(p, h)
                }, c.prototype.close = function(p) {
                    p === void 0 && (p = {});
                    var h = p.code,
                        m = p.reason,
                        C = p.wasClean,
                        v = $.websocketsLookup(this.url);
                    $.removeServer(this.url), v.forEach(function(d) {
                        d.readyState = re.CLOSED, d.dispatchEvent(me({
                            type: "close",
                            target: d.target,
                            code: h || ce.CLOSE_NORMAL,
                            reason: m || "",
                            wasClean: C
                        }))
                    }), this.dispatchEvent(me({
                        type: "close"
                    }), this)
                }, c.prototype.emit = function(p, h, m) {
                    var C = this;
                    m === void 0 && (m = {});
                    var v = m.websockets;
                    v || (v = $.websocketsLookup(this.url));
                    var d;
                    typeof m != "object" || arguments.length > 3 ? (h = Array.prototype.slice.call(arguments, 1, arguments.length), d = h.map(function(J) {
                        return Ht(J)
                    })) : d = Ht(h), v.forEach(function(J) {
                        var ae = J instanceof ot ? h : d;
                        Array.isArray(ae) ? J.dispatchEvent.apply(J, [Nt({
                            type: p,
                            data: ae,
                            origin: C.url,
                            target: J.target
                        })].concat(ae)) : J.dispatchEvent(Nt({
                            type: p,
                            data: ae,
                            origin: C.url,
                            target: J.target
                        }))
                    })
                }, c.prototype.clients = function() {
                    return $.websocketsLookup(this.url)
                }, c.prototype.to = function(p, h, m) {
                    var C = this;
                    m === void 0 && (m = []);
                    var v = this,
                        d = za(m.concat($.websocketsLookup(this.url, p, h)));
                    return {
                        to: function(J, ae) {
                            return C.to.call(C, J, ae, d)
                        },
                        emit: function(ae, K) {
                            v.emit(ae, K, {
                                websockets: d
                            })
                        }
                    }
                }, c.prototype.in = function() {
                    for (var p = [], h = arguments.length; h--;) p[h] = arguments[h];
                    return this.to.apply(null, p)
                }, c.prototype.simulate = function(p) {
                    var h = $.websocketsLookup(this.url);
                    p === "error" && h.forEach(function(m) {
                        m.readyState = re.CLOSED, m.dispatchEvent(Re({
                            type: "error",
                            target: m.target
                        }))
                    })
                }, c
            }(k);
        Pr.of = function(c) {
            return new Pr(c)
        };
        var Ya = Pr,
            Ja = re,
            Qa = Or;
        r.Server = Ya, r.WebSocket = Ja, r.SocketIO = Qa, Object.defineProperty(r, "__esModule", {
            value: !0
        })
    })
})(wi, wi.exports);
var Cc = {
    exports: {}
};
(function(t) {
    (function() {
        function e(u, o) {
            var E = u.x - o.x,
                _ = u.y - o.y;
            return E * E + _ * _
        }

        function r(u, o, E) {
            var _ = o.x,
                b = o.y,
                T = E.x - _,
                g = E.y - b;
            if (T !== 0 || g !== 0) {
                var A = ((u.x - _) * T + (u.y - b) * g) / (T * T + g * g);
                A > 1 ? (_ = E.x, b = E.y) : A > 0 && (_ += T * A, b += g * A)
            }
            return T = u.x - _, g = u.y - b, T * T + g * g
        }

        function i(u, o) {
            for (var E = u[0], _ = [E], b, T = 1, g = u.length; T < g; T++) b = u[T], e(b, E) > o && (_.push(b), E = b);
            return E !== b && _.push(b), _
        }

        function s(u, o, E, _, b) {
            for (var T = _, g, A = o + 1; A < E; A++) {
                var B = r(u[A], u[o], u[E]);
                B > T && (g = A, T = B)
            }
            T > _ && (g - o > 1 && s(u, o, g, _, b), b.push(u[g]), E - g > 1 && s(u, g, E, _, b))
        }

        function a(u, o) {
            var E = u.length - 1,
                _ = [u[0]];
            return s(u, 0, E, o, _), _.push(u[E]), _
        }

        function f(u, o, E) {
            if (u.length <= 2) return u;
            var _ = o !== void 0 ? o * o : 1;
            return u = E ? u : i(u, _), u = a(u, _), u
        }
        t.exports = f, t.exports.default = f
    })()
})(Cc);
var Ea = {},
    Dn = {},
    wn = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.EXTENDED_PICTOGRAPHIC = t.CLUSTER_BREAK = void 0,
        function(e) {
            e[e.CR = 0] = "CR", e[e.LF = 1] = "LF", e[e.CONTROL = 2] = "CONTROL", e[e.EXTEND = 3] = "EXTEND", e[e.REGIONAL_INDICATOR = 4] = "REGIONAL_INDICATOR", e[e.SPACINGMARK = 5] = "SPACINGMARK", e[e.L = 6] = "L", e[e.V = 7] = "V", e[e.T = 8] = "T", e[e.LV = 9] = "LV", e[e.LVT = 10] = "LVT", e[e.OTHER = 11] = "OTHER", e[e.PREPEND = 12] = "PREPEND", e[e.E_BASE = 13] = "E_BASE", e[e.E_MODIFIER = 14] = "E_MODIFIER", e[e.ZWJ = 15] = "ZWJ", e[e.GLUE_AFTER_ZWJ = 16] = "GLUE_AFTER_ZWJ", e[e.E_BASE_GAZ = 17] = "E_BASE_GAZ"
        }(t.CLUSTER_BREAK || (t.CLUSTER_BREAK = {})), t.EXTENDED_PICTOGRAPHIC = 101
})(wn);
var In = {};
Object.defineProperty(In, "__esModule", {
    value: !0
});
const V = wn,
    Ne = 0,
    $r = 1,
    yc = 2,
    vc = 3,
    Uc = 4;
class Bc {
    static isSurrogate(e, r) {
        return 55296 <= e.charCodeAt(r) && e.charCodeAt(r) <= 56319 && 56320 <= e.charCodeAt(r + 1) && e.charCodeAt(r + 1) <= 57343
    }
    static codePointAt(e, r) {
        r === void 0 && (r = 0);
        const i = e.charCodeAt(r);
        if (55296 <= i && i <= 56319 && r < e.length - 1) {
            const s = i,
                a = e.charCodeAt(r + 1);
            return 56320 <= a && a <= 57343 ? (s - 55296) * 1024 + (a - 56320) + 65536 : s
        }
        if (56320 <= i && i <= 57343 && r >= 1) {
            const s = e.charCodeAt(r - 1),
                a = i;
            return 55296 <= s && s <= 56319 ? (s - 55296) * 1024 + (a - 56320) + 65536 : a
        }
        return i
    }
    static shouldBreak(e, r, i, s, a, f) {
        const u = [e].concat(r).concat([i]),
            o = [s].concat(a).concat([f]),
            E = u[u.length - 2],
            _ = i,
            b = f,
            T = u.lastIndexOf(V.CLUSTER_BREAK.REGIONAL_INDICATOR);
        if (T > 0 && u.slice(1, T).every(function(A) {
                return A === V.CLUSTER_BREAK.REGIONAL_INDICATOR
            }) && [V.CLUSTER_BREAK.PREPEND, V.CLUSTER_BREAK.REGIONAL_INDICATOR].indexOf(E) === -1) return u.filter(function(A) {
            return A === V.CLUSTER_BREAK.REGIONAL_INDICATOR
        }).length % 2 === 1 ? vc : Uc;
        if (E === V.CLUSTER_BREAK.CR && _ === V.CLUSTER_BREAK.LF) return Ne;
        if (E === V.CLUSTER_BREAK.CONTROL || E === V.CLUSTER_BREAK.CR || E === V.CLUSTER_BREAK.LF) return $r;
        if (_ === V.CLUSTER_BREAK.CONTROL || _ === V.CLUSTER_BREAK.CR || _ === V.CLUSTER_BREAK.LF) return $r;
        if (E === V.CLUSTER_BREAK.L && (_ === V.CLUSTER_BREAK.L || _ === V.CLUSTER_BREAK.V || _ === V.CLUSTER_BREAK.LV || _ === V.CLUSTER_BREAK.LVT)) return Ne;
        if ((E === V.CLUSTER_BREAK.LV || E === V.CLUSTER_BREAK.V) && (_ === V.CLUSTER_BREAK.V || _ === V.CLUSTER_BREAK.T)) return Ne;
        if ((E === V.CLUSTER_BREAK.LVT || E === V.CLUSTER_BREAK.T) && _ === V.CLUSTER_BREAK.T) return Ne;
        if (_ === V.CLUSTER_BREAK.EXTEND || _ === V.CLUSTER_BREAK.ZWJ) return Ne;
        if (_ === V.CLUSTER_BREAK.SPACINGMARK) return Ne;
        if (E === V.CLUSTER_BREAK.PREPEND) return Ne;
        const g = o.slice(0, -1).lastIndexOf(V.EXTENDED_PICTOGRAPHIC);
        return g !== -1 && o[g] === V.EXTENDED_PICTOGRAPHIC && u.slice(g + 1, -2).every(function(A) {
            return A === V.CLUSTER_BREAK.EXTEND
        }) && E === V.CLUSTER_BREAK.ZWJ && b === V.EXTENDED_PICTOGRAPHIC ? Ne : r.indexOf(V.CLUSTER_BREAK.REGIONAL_INDICATOR) !== -1 ? yc : E === V.CLUSTER_BREAK.REGIONAL_INDICATOR && _ === V.CLUSTER_BREAK.REGIONAL_INDICATOR ? Ne : $r
    }
}
In.default = Bc;
var On = {};
Object.defineProperty(On, "__esModule", {
    value: !0
});
class Kc {
    constructor(e, r) {
        this._index = 0, this._str = e, this._nextBreak = r
    } [Symbol.iterator]() {
        return this
    }
    next() {
        let e;
        if ((e = this._nextBreak(this._str, this._index)) < this._str.length) {
            const r = this._str.slice(this._index, e);
            return this._index = e, {
                value: r,
                done: !1
            }
        }
        if (this._index < this._str.length) {
            const r = this._str.slice(this._index);
            return this._index = this._str.length, {
                value: r,
                done: !1
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }
}
On.default = Kc;
var pa = ie && ie.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
};
Object.defineProperty(Dn, "__esModule", {
    value: !0
});
const n = wn,
    zt = pa(In),
    dc = pa(On);
class De {
    static nextBreak(e, r) {
        if (r === void 0 && (r = 0), r < 0) return 0;
        if (r >= e.length - 1) return e.length;
        const i = zt.default.codePointAt(e, r),
            s = De.getGraphemeBreakProperty(i),
            a = De.getEmojiProperty(i),
            f = [],
            u = [];
        for (let o = r + 1; o < e.length; o++) {
            if (zt.default.isSurrogate(e, o - 1)) continue;
            const E = zt.default.codePointAt(e, o),
                _ = De.getGraphemeBreakProperty(E),
                b = De.getEmojiProperty(E);
            if (zt.default.shouldBreak(s, f, _, a, u, b)) return o;
            f.push(_), u.push(b)
        }
        return e.length
    }
    splitGraphemes(e) {
        const r = [];
        let i = 0,
            s;
        for (;
            (s = De.nextBreak(e, i)) < e.length;) r.push(e.slice(i, s)), i = s;
        return i < e.length && r.push(e.slice(i)), r
    }
    iterateGraphemes(e) {
        return new dc.default(e, De.nextBreak)
    }
    countGraphemes(e) {
        let r = 0,
            i = 0,
            s;
        for (;
            (s = De.nextBreak(e, i)) < e.length;) i = s, r++;
        return i < e.length && r++, r
    }
    static getGraphemeBreakProperty(e) {
        if (e < 48905) {
            if (e < 44116) {
                if (e < 4141) {
                    if (e < 2818) {
                        if (e < 2363)
                            if (e < 1759) {
                                if (e < 1471) {
                                    if (e < 127) {
                                        if (e < 11) {
                                            if (e < 10) {
                                                if (0 <= e && e <= 9) return n.CLUSTER_BREAK.CONTROL
                                            } else if (e === 10) return n.CLUSTER_BREAK.LF
                                        } else if (e < 13) {
                                            if (11 <= e && e <= 12) return n.CLUSTER_BREAK.CONTROL
                                        } else if (e < 14) {
                                            if (e === 13) return n.CLUSTER_BREAK.CR
                                        } else if (14 <= e && e <= 31) return n.CLUSTER_BREAK.CONTROL
                                    } else if (e < 768) {
                                        if (e < 173) {
                                            if (127 <= e && e <= 159) return n.CLUSTER_BREAK.CONTROL
                                        } else if (e === 173) return n.CLUSTER_BREAK.CONTROL
                                    } else if (e < 1155) {
                                        if (768 <= e && e <= 879) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 1425) {
                                        if (1155 <= e && e <= 1161) return n.CLUSTER_BREAK.EXTEND
                                    } else if (1425 <= e && e <= 1469) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 1552) {
                                    if (e < 1476) {
                                        if (e < 1473) {
                                            if (e === 1471) return n.CLUSTER_BREAK.EXTEND
                                        } else if (1473 <= e && e <= 1474) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 1479) {
                                        if (1476 <= e && e <= 1477) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 1536) {
                                        if (e === 1479) return n.CLUSTER_BREAK.EXTEND
                                    } else if (1536 <= e && e <= 1541) return n.CLUSTER_BREAK.PREPEND
                                } else if (e < 1648) {
                                    if (e < 1564) {
                                        if (1552 <= e && e <= 1562) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 1611) {
                                        if (e === 1564) return n.CLUSTER_BREAK.CONTROL
                                    } else if (1611 <= e && e <= 1631) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 1750) {
                                    if (e === 1648) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 1757) {
                                    if (1750 <= e && e <= 1756) return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 1757) return n.CLUSTER_BREAK.PREPEND
                            } else if (e < 2075) {
                            if (e < 1840)
                                if (e < 1770) {
                                    if (e < 1767) {
                                        if (1759 <= e && e <= 1764) return n.CLUSTER_BREAK.EXTEND
                                    } else if (1767 <= e && e <= 1768) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 1807) {
                                if (1770 <= e && e <= 1773) return n.CLUSTER_BREAK.EXTEND
                            } else {
                                if (e === 1807) return n.CLUSTER_BREAK.PREPEND;
                                if (e === 1809) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2027) {
                                if (e < 1958) {
                                    if (1840 <= e && e <= 1866) return n.CLUSTER_BREAK.EXTEND
                                } else if (1958 <= e && e <= 1968) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2045) {
                                if (2027 <= e && e <= 2035) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2070) {
                                if (e === 2045) return n.CLUSTER_BREAK.EXTEND
                            } else if (2070 <= e && e <= 2073) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 2200) {
                            if (e < 2089) {
                                if (e < 2085) {
                                    if (2075 <= e && e <= 2083) return n.CLUSTER_BREAK.EXTEND
                                } else if (2085 <= e && e <= 2087) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2137) {
                                if (2089 <= e && e <= 2093) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2192) {
                                if (2137 <= e && e <= 2139) return n.CLUSTER_BREAK.EXTEND
                            } else if (2192 <= e && e <= 2193) return n.CLUSTER_BREAK.PREPEND
                        } else if (e < 2275) {
                            if (e < 2250) {
                                if (2200 <= e && e <= 2207) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2274) {
                                if (2250 <= e && e <= 2273) return n.CLUSTER_BREAK.EXTEND
                            } else if (e === 2274) return n.CLUSTER_BREAK.PREPEND
                        } else if (e < 2307) {
                            if (2275 <= e && e <= 2306) return n.CLUSTER_BREAK.EXTEND
                        } else {
                            if (e === 2307) return n.CLUSTER_BREAK.SPACINGMARK;
                            if (e === 2362) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 2561) {
                            if (e < 2434) {
                                if (e < 2381) {
                                    if (e < 2366) {
                                        if (e === 2363) return n.CLUSTER_BREAK.SPACINGMARK;
                                        if (e === 2364) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 2369) {
                                        if (2366 <= e && e <= 2368) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e < 2377) {
                                        if (2369 <= e && e <= 2376) return n.CLUSTER_BREAK.EXTEND
                                    } else if (2377 <= e && e <= 2380) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 2385) {
                                    if (e < 2382) {
                                        if (e === 2381) return n.CLUSTER_BREAK.EXTEND
                                    } else if (2382 <= e && e <= 2383) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 2402) {
                                    if (2385 <= e && e <= 2391) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2433) {
                                    if (2402 <= e && e <= 2403) return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 2433) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2503) {
                                if (e < 2494) {
                                    if (e < 2492) {
                                        if (2434 <= e && e <= 2435) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e === 2492) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2495) {
                                    if (e === 2494) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2497) {
                                    if (2495 <= e && e <= 2496) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (2497 <= e && e <= 2500) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2519) {
                                if (e < 2507) {
                                    if (2503 <= e && e <= 2504) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 2509) {
                                    if (2507 <= e && e <= 2508) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e === 2509) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2530) {
                                if (e === 2519) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2558) {
                                if (2530 <= e && e <= 2531) return n.CLUSTER_BREAK.EXTEND
                            } else if (e === 2558) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 2691) {
                            if (e < 2631) {
                                if (e < 2620) {
                                    if (e < 2563) {
                                        if (2561 <= e && e <= 2562) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e === 2563) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 2622) {
                                    if (e === 2620) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2625) {
                                    if (2622 <= e && e <= 2624) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (2625 <= e && e <= 2626) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2672) {
                                if (e < 2635) {
                                    if (2631 <= e && e <= 2632) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2641) {
                                    if (2635 <= e && e <= 2637) return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 2641) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2677) {
                                if (2672 <= e && e <= 2673) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2689) {
                                if (e === 2677) return n.CLUSTER_BREAK.EXTEND
                            } else if (2689 <= e && e <= 2690) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 2761) {
                            if (e < 2750) {
                                if (e === 2691) return n.CLUSTER_BREAK.SPACINGMARK;
                                if (e === 2748) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2753) {
                                if (2750 <= e && e <= 2752) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 2759) {
                                if (2753 <= e && e <= 2757) return n.CLUSTER_BREAK.EXTEND
                            } else if (2759 <= e && e <= 2760) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 2786) {
                            if (e < 2763) {
                                if (e === 2761) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 2765) {
                                if (2763 <= e && e <= 2764) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e === 2765) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 2810) {
                            if (2786 <= e && e <= 2787) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 2817) {
                            if (2810 <= e && e <= 2815) return n.CLUSTER_BREAK.EXTEND
                        } else if (e === 2817) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 3315) {
                        if (e < 3076) {
                            if (e < 2946) {
                                if (e < 2887) {
                                    if (e < 2878) {
                                        if (e < 2876) {
                                            if (2818 <= e && e <= 2819) return n.CLUSTER_BREAK.SPACINGMARK
                                        } else if (e === 2876) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 2880) {
                                        if (2878 <= e && e <= 2879) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 2881) {
                                        if (e === 2880) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (2881 <= e && e <= 2884) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2893) {
                                    if (e < 2891) {
                                        if (2887 <= e && e <= 2888) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (2891 <= e && e <= 2892) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 2901) {
                                    if (e === 2893) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2914) {
                                    if (2901 <= e && e <= 2903) return n.CLUSTER_BREAK.EXTEND
                                } else if (2914 <= e && e <= 2915) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3014) {
                                if (e < 3007) {
                                    if (e === 2946 || e === 3006) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3008) {
                                    if (e === 3007) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 3009) {
                                    if (e === 3008) return n.CLUSTER_BREAK.EXTEND
                                } else if (3009 <= e && e <= 3010) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 3031) {
                                if (e < 3018) {
                                    if (3014 <= e && e <= 3016) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 3021) {
                                    if (3018 <= e && e <= 3020) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e === 3021) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3072) {
                                if (e === 3031) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3073) {
                                if (e === 3072) return n.CLUSTER_BREAK.EXTEND
                            } else if (3073 <= e && e <= 3075) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 3262) {
                            if (e < 3146) {
                                if (e < 3134) {
                                    if (e === 3076 || e === 3132) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3137) {
                                    if (3134 <= e && e <= 3136) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3142) {
                                    if (3137 <= e && e <= 3140) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (3142 <= e && e <= 3144) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3201) {
                                if (e < 3157) {
                                    if (3146 <= e && e <= 3149) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3170) {
                                    if (3157 <= e && e <= 3158) return n.CLUSTER_BREAK.EXTEND
                                } else if (3170 <= e && e <= 3171) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3202) {
                                if (e === 3201) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3260) {
                                if (3202 <= e && e <= 3203) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e === 3260) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3270) {
                            if (e < 3264) {
                                if (e === 3262) return n.CLUSTER_BREAK.SPACINGMARK;
                                if (e === 3263) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3266) {
                                if (3264 <= e && e <= 3265) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 3267) {
                                if (e === 3266) return n.CLUSTER_BREAK.EXTEND
                            } else if (3267 <= e && e <= 3268) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 3276) {
                            if (e < 3271) {
                                if (e === 3270) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3274) {
                                if (3271 <= e && e <= 3272) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (3274 <= e && e <= 3275) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 3285) {
                            if (3276 <= e && e <= 3277) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3298) {
                            if (3285 <= e && e <= 3286) return n.CLUSTER_BREAK.EXTEND
                        } else if (3298 <= e && e <= 3299) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 3551) {
                        if (e < 3406) {
                            if (e < 3391) {
                                if (e < 3330) {
                                    if (e < 3328) {
                                        if (e === 3315) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (3328 <= e && e <= 3329) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3387) {
                                    if (3330 <= e && e <= 3331) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 3390) {
                                    if (3387 <= e && e <= 3388) return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 3390) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3398) {
                                if (e < 3393) {
                                    if (3391 <= e && e <= 3392) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (3393 <= e && e <= 3396) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3402) {
                                if (3398 <= e && e <= 3400) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 3405) {
                                if (3402 <= e && e <= 3404) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e === 3405) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3530) {
                            if (e < 3426) {
                                if (e === 3406) return n.CLUSTER_BREAK.PREPEND;
                                if (e === 3415) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3457) {
                                if (3426 <= e && e <= 3427) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3458) {
                                if (e === 3457) return n.CLUSTER_BREAK.EXTEND
                            } else if (3458 <= e && e <= 3459) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 3538) {
                            if (e < 3535) {
                                if (e === 3530) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3536) {
                                if (e === 3535) return n.CLUSTER_BREAK.EXTEND
                            } else if (3536 <= e && e <= 3537) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 3542) {
                            if (3538 <= e && e <= 3540) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3544) {
                            if (e === 3542) return n.CLUSTER_BREAK.EXTEND
                        } else if (3544 <= e && e <= 3550) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 3893) {
                        if (e < 3655) {
                            if (e < 3633) {
                                if (e < 3570) {
                                    if (e === 3551) return n.CLUSTER_BREAK.EXTEND
                                } else if (3570 <= e && e <= 3571) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 3635) {
                                if (e === 3633) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3636) {
                                if (e === 3635) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (3636 <= e && e <= 3642) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3764)
                            if (e < 3761) {
                                if (3655 <= e && e <= 3662) return n.CLUSTER_BREAK.EXTEND
                            } else {
                                if (e === 3761) return n.CLUSTER_BREAK.EXTEND;
                                if (e === 3763) return n.CLUSTER_BREAK.SPACINGMARK
                            }
                        else if (e < 3784) {
                            if (3764 <= e && e <= 3772) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3864) {
                            if (3784 <= e && e <= 3790) return n.CLUSTER_BREAK.EXTEND
                        } else if (3864 <= e && e <= 3865) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 3967) {
                        if (e < 3897) {
                            if (e === 3893 || e === 3895) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3902) {
                            if (e === 3897) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3953) {
                            if (3902 <= e && e <= 3903) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (3953 <= e && e <= 3966) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 3981) {
                        if (e < 3968) {
                            if (e === 3967) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 3974) {
                            if (3968 <= e && e <= 3972) return n.CLUSTER_BREAK.EXTEND
                        } else if (3974 <= e && e <= 3975) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 3993) {
                        if (3981 <= e && e <= 3991) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 4038) {
                        if (3993 <= e && e <= 4028) return n.CLUSTER_BREAK.EXTEND
                    } else if (e === 4038) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 7204) {
                    if (e < 6448) {
                        if (e < 5938) {
                            if (e < 4226) {
                                if (e < 4157) {
                                    if (e < 4146) {
                                        if (e < 4145) {
                                            if (4141 <= e && e <= 4144) return n.CLUSTER_BREAK.EXTEND
                                        } else if (e === 4145) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e < 4153) {
                                        if (4146 <= e && e <= 4151) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 4155) {
                                        if (4153 <= e && e <= 4154) return n.CLUSTER_BREAK.EXTEND
                                    } else if (4155 <= e && e <= 4156) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 4184) {
                                    if (e < 4182) {
                                        if (4157 <= e && e <= 4158) return n.CLUSTER_BREAK.EXTEND
                                    } else if (4182 <= e && e <= 4183) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 4190) {
                                    if (4184 <= e && e <= 4185) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 4209) {
                                    if (4190 <= e && e <= 4192) return n.CLUSTER_BREAK.EXTEND
                                } else if (4209 <= e && e <= 4212) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 4352) {
                                if (e < 4229) {
                                    if (e === 4226) return n.CLUSTER_BREAK.EXTEND;
                                    if (e === 4228) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 4237) {
                                    if (4229 <= e && e <= 4230) return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 4237 || e === 4253) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 4957) {
                                if (e < 4448) {
                                    if (4352 <= e && e <= 4447) return n.CLUSTER_BREAK.L
                                } else if (e < 4520) {
                                    if (4448 <= e && e <= 4519) return n.CLUSTER_BREAK.V
                                } else if (4520 <= e && e <= 4607) return n.CLUSTER_BREAK.T
                            } else if (e < 5906) {
                                if (4957 <= e && e <= 4959) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 5909) {
                                if (5906 <= e && e <= 5908) return n.CLUSTER_BREAK.EXTEND
                            } else if (e === 5909) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 6089) {
                            if (e < 6070) {
                                if (e < 5970) {
                                    if (e < 5940) {
                                        if (5938 <= e && e <= 5939) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e === 5940) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 6002) {
                                    if (5970 <= e && e <= 5971) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 6068) {
                                    if (6002 <= e && e <= 6003) return n.CLUSTER_BREAK.EXTEND
                                } else if (6068 <= e && e <= 6069) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6078) {
                                if (e < 6071) {
                                    if (e === 6070) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (6071 <= e && e <= 6077) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6086) {
                                if (6078 <= e && e <= 6085) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 6087) {
                                if (e === 6086) return n.CLUSTER_BREAK.EXTEND
                            } else if (6087 <= e && e <= 6088) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 6277)
                            if (e < 6155) {
                                if (e < 6109) {
                                    if (6089 <= e && e <= 6099) return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 6109) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6158) {
                            if (6155 <= e && e <= 6157) return n.CLUSTER_BREAK.EXTEND
                        } else {
                            if (e === 6158) return n.CLUSTER_BREAK.CONTROL;
                            if (e === 6159) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 6435) {
                            if (e < 6313) {
                                if (6277 <= e && e <= 6278) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6432) {
                                if (e === 6313) return n.CLUSTER_BREAK.EXTEND
                            } else if (6432 <= e && e <= 6434) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 6439) {
                            if (6435 <= e && e <= 6438) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 6441) {
                            if (6439 <= e && e <= 6440) return n.CLUSTER_BREAK.EXTEND
                        } else if (6441 <= e && e <= 6443) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 6971) {
                        if (e < 6744)
                            if (e < 6681) {
                                if (e < 6451) {
                                    if (e < 6450) {
                                        if (6448 <= e && e <= 6449) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e === 6450) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 6457) {
                                    if (6451 <= e && e <= 6456) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 6679) {
                                    if (6457 <= e && e <= 6459) return n.CLUSTER_BREAK.EXTEND
                                } else if (6679 <= e && e <= 6680) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6741) {
                            if (e < 6683) {
                                if (6681 <= e && e <= 6682) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e === 6683) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 6742) {
                            if (e === 6741) return n.CLUSTER_BREAK.SPACINGMARK
                        } else {
                            if (e === 6742) return n.CLUSTER_BREAK.EXTEND;
                            if (e === 6743) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 6771) {
                            if (e < 6754) {
                                if (e < 6752) {
                                    if (6744 <= e && e <= 6750) return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 6752) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6757) {
                                if (e === 6754) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6765) {
                                if (6757 <= e && e <= 6764) return n.CLUSTER_BREAK.EXTEND
                            } else if (6765 <= e && e <= 6770) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 6912) {
                            if (e < 6783) {
                                if (6771 <= e && e <= 6780) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6832) {
                                if (e === 6783) return n.CLUSTER_BREAK.EXTEND
                            } else if (6832 <= e && e <= 6862) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 6916) {
                            if (6912 <= e && e <= 6915) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 6964) {
                            if (e === 6916) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (6964 <= e && e <= 6970) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 7080) {
                        if (e < 7019) {
                            if (e < 6973) {
                                if (e === 6971) return n.CLUSTER_BREAK.SPACINGMARK;
                                if (e === 6972) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6978) {
                                if (6973 <= e && e <= 6977) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 6979) {
                                if (e === 6978) return n.CLUSTER_BREAK.EXTEND
                            } else if (6979 <= e && e <= 6980) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 7073) {
                            if (e < 7040) {
                                if (7019 <= e && e <= 7027) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 7042) {
                                if (7040 <= e && e <= 7041) return n.CLUSTER_BREAK.EXTEND
                            } else if (e === 7042) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 7074) {
                            if (e === 7073) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 7078) {
                            if (7074 <= e && e <= 7077) return n.CLUSTER_BREAK.EXTEND
                        } else if (7078 <= e && e <= 7079) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 7144)
                        if (e < 7083) {
                            if (e < 7082) {
                                if (7080 <= e && e <= 7081) return n.CLUSTER_BREAK.EXTEND
                            } else if (e === 7082) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 7142) {
                        if (7083 <= e && e <= 7085) return n.CLUSTER_BREAK.EXTEND
                    } else {
                        if (e === 7142) return n.CLUSTER_BREAK.EXTEND;
                        if (e === 7143) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 7150) {
                        if (e < 7146) {
                            if (7144 <= e && e <= 7145) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 7149) {
                            if (7146 <= e && e <= 7148) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e === 7149) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 7151) {
                        if (e === 7150) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 7154) {
                        if (7151 <= e && e <= 7153) return n.CLUSTER_BREAK.EXTEND
                    } else if (7154 <= e && e <= 7155) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 43346) {
                    if (e < 11647) {
                        if (e < 7415) {
                            if (e < 7380) {
                                if (e < 7220) {
                                    if (e < 7212) {
                                        if (7204 <= e && e <= 7211) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (7212 <= e && e <= 7219) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 7222) {
                                    if (7220 <= e && e <= 7221) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 7376) {
                                    if (7222 <= e && e <= 7223) return n.CLUSTER_BREAK.EXTEND
                                } else if (7376 <= e && e <= 7378) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 7394) {
                                if (e < 7393) {
                                    if (7380 <= e && e <= 7392) return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 7393) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 7405) {
                                if (7394 <= e && e <= 7400) return n.CLUSTER_BREAK.EXTEND
                            } else if (e === 7405 || e === 7412) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 8205)
                            if (e < 7616) {
                                if (e < 7416) {
                                    if (e === 7415) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (7416 <= e && e <= 7417) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 8203) {
                            if (7616 <= e && e <= 7679) return n.CLUSTER_BREAK.EXTEND
                        } else {
                            if (e === 8203) return n.CLUSTER_BREAK.CONTROL;
                            if (e === 8204) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 8288) {
                            if (e < 8206) {
                                if (e === 8205) return n.CLUSTER_BREAK.ZWJ
                            } else if (e < 8232) {
                                if (8206 <= e && e <= 8207) return n.CLUSTER_BREAK.CONTROL
                            } else if (8232 <= e && e <= 8238) return n.CLUSTER_BREAK.CONTROL
                        } else if (e < 8400) {
                            if (8288 <= e && e <= 8303) return n.CLUSTER_BREAK.CONTROL
                        } else if (e < 11503) {
                            if (8400 <= e && e <= 8432) return n.CLUSTER_BREAK.EXTEND
                        } else if (11503 <= e && e <= 11505) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 43043) {
                        if (e < 42612) {
                            if (e < 12330) {
                                if (e < 11744) {
                                    if (e === 11647) return n.CLUSTER_BREAK.EXTEND
                                } else if (11744 <= e && e <= 11775) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 12441) {
                                if (12330 <= e && e <= 12335) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 42607) {
                                if (12441 <= e && e <= 12442) return n.CLUSTER_BREAK.EXTEND
                            } else if (42607 <= e && e <= 42610) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 43010) {
                            if (e < 42654) {
                                if (42612 <= e && e <= 42621) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 42736) {
                                if (42654 <= e && e <= 42655) return n.CLUSTER_BREAK.EXTEND
                            } else if (42736 <= e && e <= 42737) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 43014) {
                            if (e === 43010) return n.CLUSTER_BREAK.EXTEND
                        } else if (e === 43014 || e === 43019) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 43188) {
                        if (e < 43047) {
                            if (e < 43045) {
                                if (43043 <= e && e <= 43044) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (43045 <= e && e <= 43046) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 43052) {
                            if (e === 43047) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 43136) {
                            if (e === 43052) return n.CLUSTER_BREAK.EXTEND
                        } else if (43136 <= e && e <= 43137) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 43263) {
                        if (e < 43204) {
                            if (43188 <= e && e <= 43203) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 43232) {
                            if (43204 <= e && e <= 43205) return n.CLUSTER_BREAK.EXTEND
                        } else if (43232 <= e && e <= 43249) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 43302) {
                        if (e === 43263) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 43335) {
                        if (43302 <= e && e <= 43309) return n.CLUSTER_BREAK.EXTEND
                    } else if (43335 <= e && e <= 43345) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 43698) {
                    if (e < 43493) {
                        if (e < 43444)
                            if (e < 43392) {
                                if (e < 43360) {
                                    if (43346 <= e && e <= 43347) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (43360 <= e && e <= 43388) return n.CLUSTER_BREAK.L
                            } else if (e < 43395) {
                            if (43392 <= e && e <= 43394) return n.CLUSTER_BREAK.EXTEND
                        } else {
                            if (e === 43395) return n.CLUSTER_BREAK.SPACINGMARK;
                            if (e === 43443) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 43450) {
                            if (e < 43446) {
                                if (43444 <= e && e <= 43445) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (43446 <= e && e <= 43449) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 43452) {
                            if (43450 <= e && e <= 43451) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 43454) {
                            if (43452 <= e && e <= 43453) return n.CLUSTER_BREAK.EXTEND
                        } else if (43454 <= e && e <= 43456) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 43573) {
                        if (e < 43567) {
                            if (e < 43561) {
                                if (e === 43493) return n.CLUSTER_BREAK.EXTEND
                            } else if (43561 <= e && e <= 43566) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 43569) {
                            if (43567 <= e && e <= 43568) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 43571) {
                            if (43569 <= e && e <= 43570) return n.CLUSTER_BREAK.EXTEND
                        } else if (43571 <= e && e <= 43572) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 43597) {
                        if (e < 43587) {
                            if (43573 <= e && e <= 43574) return n.CLUSTER_BREAK.EXTEND
                        } else if (e === 43587 || e === 43596) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 43644) {
                        if (e === 43597) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e === 43644 || e === 43696) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 44006) {
                    if (e < 43756)
                        if (e < 43710) {
                            if (e < 43703) {
                                if (43698 <= e && e <= 43700) return n.CLUSTER_BREAK.EXTEND
                            } else if (43703 <= e && e <= 43704) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 43713) {
                        if (43710 <= e && e <= 43711) return n.CLUSTER_BREAK.EXTEND
                    } else {
                        if (e === 43713) return n.CLUSTER_BREAK.EXTEND;
                        if (e === 43755) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 43766) {
                        if (e < 43758) {
                            if (43756 <= e && e <= 43757) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 43765) {
                            if (43758 <= e && e <= 43759) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e === 43765) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 44003) {
                        if (e === 43766) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 44005) {
                        if (44003 <= e && e <= 44004) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e === 44005) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 44032)
                    if (e < 44009) {
                        if (e < 44008) {
                            if (44006 <= e && e <= 44007) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e === 44008) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 44012) {
                    if (44009 <= e && e <= 44010) return n.CLUSTER_BREAK.SPACINGMARK
                } else {
                    if (e === 44012) return n.CLUSTER_BREAK.SPACINGMARK;
                    if (e === 44013) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 44061) {
                    if (e < 44033) {
                        if (e === 44032) return n.CLUSTER_BREAK.LV
                    } else if (e < 44060) {
                        if (44033 <= e && e <= 44059) return n.CLUSTER_BREAK.LVT
                    } else if (e === 44060) return n.CLUSTER_BREAK.LV
                } else if (e < 44088) {
                    if (44061 <= e && e <= 44087) return n.CLUSTER_BREAK.LVT
                } else if (e < 44089) {
                    if (e === 44088) return n.CLUSTER_BREAK.LV
                } else if (44089 <= e && e <= 44115) return n.CLUSTER_BREAK.LVT
            } else if (e < 46497) {
                if (e < 45293) {
                    if (e < 44704) {
                        if (e < 44397) {
                            if (e < 44256) {
                                if (e < 44173) {
                                    if (e < 44144) {
                                        if (e < 44117) {
                                            if (e === 44116) return n.CLUSTER_BREAK.LV
                                        } else if (44117 <= e && e <= 44143) return n.CLUSTER_BREAK.LVT
                                    } else if (e < 44145) {
                                        if (e === 44144) return n.CLUSTER_BREAK.LV
                                    } else if (e < 44172) {
                                        if (44145 <= e && e <= 44171) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 44172) return n.CLUSTER_BREAK.LV
                                } else if (e < 44201) {
                                    if (e < 44200) {
                                        if (44173 <= e && e <= 44199) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 44200) return n.CLUSTER_BREAK.LV
                                } else if (e < 44228) {
                                    if (44201 <= e && e <= 44227) return n.CLUSTER_BREAK.LVT
                                } else if (e < 44229) {
                                    if (e === 44228) return n.CLUSTER_BREAK.LV
                                } else if (44229 <= e && e <= 44255) return n.CLUSTER_BREAK.LVT
                            } else if (e < 44313) {
                                if (e < 44284) {
                                    if (e < 44257) {
                                        if (e === 44256) return n.CLUSTER_BREAK.LV
                                    } else if (44257 <= e && e <= 44283) return n.CLUSTER_BREAK.LVT
                                } else if (e < 44285) {
                                    if (e === 44284) return n.CLUSTER_BREAK.LV
                                } else if (e < 44312) {
                                    if (44285 <= e && e <= 44311) return n.CLUSTER_BREAK.LVT
                                } else if (e === 44312) return n.CLUSTER_BREAK.LV
                            } else if (e < 44368) {
                                if (e < 44340) {
                                    if (44313 <= e && e <= 44339) return n.CLUSTER_BREAK.LVT
                                } else if (e < 44341) {
                                    if (e === 44340) return n.CLUSTER_BREAK.LV
                                } else if (44341 <= e && e <= 44367) return n.CLUSTER_BREAK.LVT
                            } else if (e < 44369) {
                                if (e === 44368) return n.CLUSTER_BREAK.LV
                            } else if (e < 44396) {
                                if (44369 <= e && e <= 44395) return n.CLUSTER_BREAK.LVT
                            } else if (e === 44396) return n.CLUSTER_BREAK.LV
                        } else if (e < 44537) {
                            if (e < 44480) {
                                if (e < 44425) {
                                    if (e < 44424) {
                                        if (44397 <= e && e <= 44423) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 44424) return n.CLUSTER_BREAK.LV
                                } else if (e < 44452) {
                                    if (44425 <= e && e <= 44451) return n.CLUSTER_BREAK.LVT
                                } else if (e < 44453) {
                                    if (e === 44452) return n.CLUSTER_BREAK.LV
                                } else if (44453 <= e && e <= 44479) return n.CLUSTER_BREAK.LVT
                            } else if (e < 44508) {
                                if (e < 44481) {
                                    if (e === 44480) return n.CLUSTER_BREAK.LV
                                } else if (44481 <= e && e <= 44507) return n.CLUSTER_BREAK.LVT
                            } else if (e < 44509) {
                                if (e === 44508) return n.CLUSTER_BREAK.LV
                            } else if (e < 44536) {
                                if (44509 <= e && e <= 44535) return n.CLUSTER_BREAK.LVT
                            } else if (e === 44536) return n.CLUSTER_BREAK.LV
                        } else if (e < 44620) {
                            if (e < 44565) {
                                if (e < 44564) {
                                    if (44537 <= e && e <= 44563) return n.CLUSTER_BREAK.LVT
                                } else if (e === 44564) return n.CLUSTER_BREAK.LV
                            } else if (e < 44592) {
                                if (44565 <= e && e <= 44591) return n.CLUSTER_BREAK.LVT
                            } else if (e < 44593) {
                                if (e === 44592) return n.CLUSTER_BREAK.LV
                            } else if (44593 <= e && e <= 44619) return n.CLUSTER_BREAK.LVT
                        } else if (e < 44649) {
                            if (e < 44621) {
                                if (e === 44620) return n.CLUSTER_BREAK.LV
                            } else if (e < 44648) {
                                if (44621 <= e && e <= 44647) return n.CLUSTER_BREAK.LVT
                            } else if (e === 44648) return n.CLUSTER_BREAK.LV
                        } else if (e < 44676) {
                            if (44649 <= e && e <= 44675) return n.CLUSTER_BREAK.LVT
                        } else if (e < 44677) {
                            if (e === 44676) return n.CLUSTER_BREAK.LV
                        } else if (44677 <= e && e <= 44703) return n.CLUSTER_BREAK.LVT
                    } else if (e < 44985) {
                        if (e < 44844) {
                            if (e < 44761) {
                                if (e < 44732) {
                                    if (e < 44705) {
                                        if (e === 44704) return n.CLUSTER_BREAK.LV
                                    } else if (44705 <= e && e <= 44731) return n.CLUSTER_BREAK.LVT
                                } else if (e < 44733) {
                                    if (e === 44732) return n.CLUSTER_BREAK.LV
                                } else if (e < 44760) {
                                    if (44733 <= e && e <= 44759) return n.CLUSTER_BREAK.LVT
                                } else if (e === 44760) return n.CLUSTER_BREAK.LV
                            } else if (e < 44789) {
                                if (e < 44788) {
                                    if (44761 <= e && e <= 44787) return n.CLUSTER_BREAK.LVT
                                } else if (e === 44788) return n.CLUSTER_BREAK.LV
                            } else if (e < 44816) {
                                if (44789 <= e && e <= 44815) return n.CLUSTER_BREAK.LVT
                            } else if (e < 44817) {
                                if (e === 44816) return n.CLUSTER_BREAK.LV
                            } else if (44817 <= e && e <= 44843) return n.CLUSTER_BREAK.LVT
                        } else if (e < 44901) {
                            if (e < 44872) {
                                if (e < 44845) {
                                    if (e === 44844) return n.CLUSTER_BREAK.LV
                                } else if (44845 <= e && e <= 44871) return n.CLUSTER_BREAK.LVT
                            } else if (e < 44873) {
                                if (e === 44872) return n.CLUSTER_BREAK.LV
                            } else if (e < 44900) {
                                if (44873 <= e && e <= 44899) return n.CLUSTER_BREAK.LVT
                            } else if (e === 44900) return n.CLUSTER_BREAK.LV
                        } else if (e < 44956) {
                            if (e < 44928) {
                                if (44901 <= e && e <= 44927) return n.CLUSTER_BREAK.LVT
                            } else if (e < 44929) {
                                if (e === 44928) return n.CLUSTER_BREAK.LV
                            } else if (44929 <= e && e <= 44955) return n.CLUSTER_BREAK.LVT
                        } else if (e < 44957) {
                            if (e === 44956) return n.CLUSTER_BREAK.LV
                        } else if (e < 44984) {
                            if (44957 <= e && e <= 44983) return n.CLUSTER_BREAK.LVT
                        } else if (e === 44984) return n.CLUSTER_BREAK.LV
                    } else if (e < 45152) {
                        if (e < 45068) {
                            if (e < 45013) {
                                if (e < 45012) {
                                    if (44985 <= e && e <= 45011) return n.CLUSTER_BREAK.LVT
                                } else if (e === 45012) return n.CLUSTER_BREAK.LV
                            } else if (e < 45040) {
                                if (45013 <= e && e <= 45039) return n.CLUSTER_BREAK.LVT
                            } else if (e < 45041) {
                                if (e === 45040) return n.CLUSTER_BREAK.LV
                            } else if (45041 <= e && e <= 45067) return n.CLUSTER_BREAK.LVT
                        } else if (e < 45097) {
                            if (e < 45069) {
                                if (e === 45068) return n.CLUSTER_BREAK.LV
                            } else if (e < 45096) {
                                if (45069 <= e && e <= 45095) return n.CLUSTER_BREAK.LVT
                            } else if (e === 45096) return n.CLUSTER_BREAK.LV
                        } else if (e < 45124) {
                            if (45097 <= e && e <= 45123) return n.CLUSTER_BREAK.LVT
                        } else if (e < 45125) {
                            if (e === 45124) return n.CLUSTER_BREAK.LV
                        } else if (45125 <= e && e <= 45151) return n.CLUSTER_BREAK.LVT
                    } else if (e < 45209) {
                        if (e < 45180) {
                            if (e < 45153) {
                                if (e === 45152) return n.CLUSTER_BREAK.LV
                            } else if (45153 <= e && e <= 45179) return n.CLUSTER_BREAK.LVT
                        } else if (e < 45181) {
                            if (e === 45180) return n.CLUSTER_BREAK.LV
                        } else if (e < 45208) {
                            if (45181 <= e && e <= 45207) return n.CLUSTER_BREAK.LVT
                        } else if (e === 45208) return n.CLUSTER_BREAK.LV
                    } else if (e < 45264) {
                        if (e < 45236) {
                            if (45209 <= e && e <= 45235) return n.CLUSTER_BREAK.LVT
                        } else if (e < 45237) {
                            if (e === 45236) return n.CLUSTER_BREAK.LV
                        } else if (45237 <= e && e <= 45263) return n.CLUSTER_BREAK.LVT
                    } else if (e < 45265) {
                        if (e === 45264) return n.CLUSTER_BREAK.LV
                    } else if (e < 45292) {
                        if (45265 <= e && e <= 45291) return n.CLUSTER_BREAK.LVT
                    } else if (e === 45292) return n.CLUSTER_BREAK.LV
                } else if (e < 45908) {
                    if (e < 45600) {
                        if (e < 45433) {
                            if (e < 45376) {
                                if (e < 45321) {
                                    if (e < 45320) {
                                        if (45293 <= e && e <= 45319) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 45320) return n.CLUSTER_BREAK.LV
                                } else if (e < 45348) {
                                    if (45321 <= e && e <= 45347) return n.CLUSTER_BREAK.LVT
                                } else if (e < 45349) {
                                    if (e === 45348) return n.CLUSTER_BREAK.LV
                                } else if (45349 <= e && e <= 45375) return n.CLUSTER_BREAK.LVT
                            } else if (e < 45404) {
                                if (e < 45377) {
                                    if (e === 45376) return n.CLUSTER_BREAK.LV
                                } else if (45377 <= e && e <= 45403) return n.CLUSTER_BREAK.LVT
                            } else if (e < 45405) {
                                if (e === 45404) return n.CLUSTER_BREAK.LV
                            } else if (e < 45432) {
                                if (45405 <= e && e <= 45431) return n.CLUSTER_BREAK.LVT
                            } else if (e === 45432) return n.CLUSTER_BREAK.LV
                        } else if (e < 45516) {
                            if (e < 45461) {
                                if (e < 45460) {
                                    if (45433 <= e && e <= 45459) return n.CLUSTER_BREAK.LVT
                                } else if (e === 45460) return n.CLUSTER_BREAK.LV
                            } else if (e < 45488) {
                                if (45461 <= e && e <= 45487) return n.CLUSTER_BREAK.LVT
                            } else if (e < 45489) {
                                if (e === 45488) return n.CLUSTER_BREAK.LV
                            } else if (45489 <= e && e <= 45515) return n.CLUSTER_BREAK.LVT
                        } else if (e < 45545) {
                            if (e < 45517) {
                                if (e === 45516) return n.CLUSTER_BREAK.LV
                            } else if (e < 45544) {
                                if (45517 <= e && e <= 45543) return n.CLUSTER_BREAK.LVT
                            } else if (e === 45544) return n.CLUSTER_BREAK.LV
                        } else if (e < 45572) {
                            if (45545 <= e && e <= 45571) return n.CLUSTER_BREAK.LVT
                        } else if (e < 45573) {
                            if (e === 45572) return n.CLUSTER_BREAK.LV
                        } else if (45573 <= e && e <= 45599) return n.CLUSTER_BREAK.LVT
                    } else if (e < 45741) {
                        if (e < 45657) {
                            if (e < 45628) {
                                if (e < 45601) {
                                    if (e === 45600) return n.CLUSTER_BREAK.LV
                                } else if (45601 <= e && e <= 45627) return n.CLUSTER_BREAK.LVT
                            } else if (e < 45629) {
                                if (e === 45628) return n.CLUSTER_BREAK.LV
                            } else if (e < 45656) {
                                if (45629 <= e && e <= 45655) return n.CLUSTER_BREAK.LVT
                            } else if (e === 45656) return n.CLUSTER_BREAK.LV
                        } else if (e < 45712) {
                            if (e < 45684) {
                                if (45657 <= e && e <= 45683) return n.CLUSTER_BREAK.LVT
                            } else if (e < 45685) {
                                if (e === 45684) return n.CLUSTER_BREAK.LV
                            } else if (45685 <= e && e <= 45711) return n.CLUSTER_BREAK.LVT
                        } else if (e < 45713) {
                            if (e === 45712) return n.CLUSTER_BREAK.LV
                        } else if (e < 45740) {
                            if (45713 <= e && e <= 45739) return n.CLUSTER_BREAK.LVT
                        } else if (e === 45740) return n.CLUSTER_BREAK.LV
                    } else if (e < 45824) {
                        if (e < 45769) {
                            if (e < 45768) {
                                if (45741 <= e && e <= 45767) return n.CLUSTER_BREAK.LVT
                            } else if (e === 45768) return n.CLUSTER_BREAK.LV
                        } else if (e < 45796) {
                            if (45769 <= e && e <= 45795) return n.CLUSTER_BREAK.LVT
                        } else if (e < 45797) {
                            if (e === 45796) return n.CLUSTER_BREAK.LV
                        } else if (45797 <= e && e <= 45823) return n.CLUSTER_BREAK.LVT
                    } else if (e < 45853) {
                        if (e < 45825) {
                            if (e === 45824) return n.CLUSTER_BREAK.LV
                        } else if (e < 45852) {
                            if (45825 <= e && e <= 45851) return n.CLUSTER_BREAK.LVT
                        } else if (e === 45852) return n.CLUSTER_BREAK.LV
                    } else if (e < 45880) {
                        if (45853 <= e && e <= 45879) return n.CLUSTER_BREAK.LVT
                    } else if (e < 45881) {
                        if (e === 45880) return n.CLUSTER_BREAK.LV
                    } else if (45881 <= e && e <= 45907) return n.CLUSTER_BREAK.LVT
                } else if (e < 46189) {
                    if (e < 46048) {
                        if (e < 45965) {
                            if (e < 45936) {
                                if (e < 45909) {
                                    if (e === 45908) return n.CLUSTER_BREAK.LV
                                } else if (45909 <= e && e <= 45935) return n.CLUSTER_BREAK.LVT
                            } else if (e < 45937) {
                                if (e === 45936) return n.CLUSTER_BREAK.LV
                            } else if (e < 45964) {
                                if (45937 <= e && e <= 45963) return n.CLUSTER_BREAK.LVT
                            } else if (e === 45964) return n.CLUSTER_BREAK.LV
                        } else if (e < 45993) {
                            if (e < 45992) {
                                if (45965 <= e && e <= 45991) return n.CLUSTER_BREAK.LVT
                            } else if (e === 45992) return n.CLUSTER_BREAK.LV
                        } else if (e < 46020) {
                            if (45993 <= e && e <= 46019) return n.CLUSTER_BREAK.LVT
                        } else if (e < 46021) {
                            if (e === 46020) return n.CLUSTER_BREAK.LV
                        } else if (46021 <= e && e <= 46047) return n.CLUSTER_BREAK.LVT
                    } else if (e < 46105) {
                        if (e < 46076) {
                            if (e < 46049) {
                                if (e === 46048) return n.CLUSTER_BREAK.LV
                            } else if (46049 <= e && e <= 46075) return n.CLUSTER_BREAK.LVT
                        } else if (e < 46077) {
                            if (e === 46076) return n.CLUSTER_BREAK.LV
                        } else if (e < 46104) {
                            if (46077 <= e && e <= 46103) return n.CLUSTER_BREAK.LVT
                        } else if (e === 46104) return n.CLUSTER_BREAK.LV
                    } else if (e < 46160) {
                        if (e < 46132) {
                            if (46105 <= e && e <= 46131) return n.CLUSTER_BREAK.LVT
                        } else if (e < 46133) {
                            if (e === 46132) return n.CLUSTER_BREAK.LV
                        } else if (46133 <= e && e <= 46159) return n.CLUSTER_BREAK.LVT
                    } else if (e < 46161) {
                        if (e === 46160) return n.CLUSTER_BREAK.LV
                    } else if (e < 46188) {
                        if (46161 <= e && e <= 46187) return n.CLUSTER_BREAK.LVT
                    } else if (e === 46188) return n.CLUSTER_BREAK.LV
                } else if (e < 46356) {
                    if (e < 46272) {
                        if (e < 46217) {
                            if (e < 46216) {
                                if (46189 <= e && e <= 46215) return n.CLUSTER_BREAK.LVT
                            } else if (e === 46216) return n.CLUSTER_BREAK.LV
                        } else if (e < 46244) {
                            if (46217 <= e && e <= 46243) return n.CLUSTER_BREAK.LVT
                        } else if (e < 46245) {
                            if (e === 46244) return n.CLUSTER_BREAK.LV
                        } else if (46245 <= e && e <= 46271) return n.CLUSTER_BREAK.LVT
                    } else if (e < 46301) {
                        if (e < 46273) {
                            if (e === 46272) return n.CLUSTER_BREAK.LV
                        } else if (e < 46300) {
                            if (46273 <= e && e <= 46299) return n.CLUSTER_BREAK.LVT
                        } else if (e === 46300) return n.CLUSTER_BREAK.LV
                    } else if (e < 46328) {
                        if (46301 <= e && e <= 46327) return n.CLUSTER_BREAK.LVT
                    } else if (e < 46329) {
                        if (e === 46328) return n.CLUSTER_BREAK.LV
                    } else if (46329 <= e && e <= 46355) return n.CLUSTER_BREAK.LVT
                } else if (e < 46413) {
                    if (e < 46384) {
                        if (e < 46357) {
                            if (e === 46356) return n.CLUSTER_BREAK.LV
                        } else if (46357 <= e && e <= 46383) return n.CLUSTER_BREAK.LVT
                    } else if (e < 46385) {
                        if (e === 46384) return n.CLUSTER_BREAK.LV
                    } else if (e < 46412) {
                        if (46385 <= e && e <= 46411) return n.CLUSTER_BREAK.LVT
                    } else if (e === 46412) return n.CLUSTER_BREAK.LV
                } else if (e < 46468) {
                    if (e < 46440) {
                        if (46413 <= e && e <= 46439) return n.CLUSTER_BREAK.LVT
                    } else if (e < 46441) {
                        if (e === 46440) return n.CLUSTER_BREAK.LV
                    } else if (46441 <= e && e <= 46467) return n.CLUSTER_BREAK.LVT
                } else if (e < 46469) {
                    if (e === 46468) return n.CLUSTER_BREAK.LV
                } else if (e < 46496) {
                    if (46469 <= e && e <= 46495) return n.CLUSTER_BREAK.LVT
                } else if (e === 46496) return n.CLUSTER_BREAK.LV
            } else if (e < 47701) {
                if (e < 47112) {
                    if (e < 46804) {
                        if (e < 46637) {
                            if (e < 46580) {
                                if (e < 46525) {
                                    if (e < 46524) {
                                        if (46497 <= e && e <= 46523) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 46524) return n.CLUSTER_BREAK.LV
                                } else if (e < 46552) {
                                    if (46525 <= e && e <= 46551) return n.CLUSTER_BREAK.LVT
                                } else if (e < 46553) {
                                    if (e === 46552) return n.CLUSTER_BREAK.LV
                                } else if (46553 <= e && e <= 46579) return n.CLUSTER_BREAK.LVT
                            } else if (e < 46608) {
                                if (e < 46581) {
                                    if (e === 46580) return n.CLUSTER_BREAK.LV
                                } else if (46581 <= e && e <= 46607) return n.CLUSTER_BREAK.LVT
                            } else if (e < 46609) {
                                if (e === 46608) return n.CLUSTER_BREAK.LV
                            } else if (e < 46636) {
                                if (46609 <= e && e <= 46635) return n.CLUSTER_BREAK.LVT
                            } else if (e === 46636) return n.CLUSTER_BREAK.LV
                        } else if (e < 46720) {
                            if (e < 46665) {
                                if (e < 46664) {
                                    if (46637 <= e && e <= 46663) return n.CLUSTER_BREAK.LVT
                                } else if (e === 46664) return n.CLUSTER_BREAK.LV
                            } else if (e < 46692) {
                                if (46665 <= e && e <= 46691) return n.CLUSTER_BREAK.LVT
                            } else if (e < 46693) {
                                if (e === 46692) return n.CLUSTER_BREAK.LV
                            } else if (46693 <= e && e <= 46719) return n.CLUSTER_BREAK.LVT
                        } else if (e < 46749) {
                            if (e < 46721) {
                                if (e === 46720) return n.CLUSTER_BREAK.LV
                            } else if (e < 46748) {
                                if (46721 <= e && e <= 46747) return n.CLUSTER_BREAK.LVT
                            } else if (e === 46748) return n.CLUSTER_BREAK.LV
                        } else if (e < 46776) {
                            if (46749 <= e && e <= 46775) return n.CLUSTER_BREAK.LVT
                        } else if (e < 46777) {
                            if (e === 46776) return n.CLUSTER_BREAK.LV
                        } else if (46777 <= e && e <= 46803) return n.CLUSTER_BREAK.LVT
                    } else if (e < 46945) {
                        if (e < 46861) {
                            if (e < 46832) {
                                if (e < 46805) {
                                    if (e === 46804) return n.CLUSTER_BREAK.LV
                                } else if (46805 <= e && e <= 46831) return n.CLUSTER_BREAK.LVT
                            } else if (e < 46833) {
                                if (e === 46832) return n.CLUSTER_BREAK.LV
                            } else if (e < 46860) {
                                if (46833 <= e && e <= 46859) return n.CLUSTER_BREAK.LVT
                            } else if (e === 46860) return n.CLUSTER_BREAK.LV
                        } else if (e < 46916) {
                            if (e < 46888) {
                                if (46861 <= e && e <= 46887) return n.CLUSTER_BREAK.LVT
                            } else if (e < 46889) {
                                if (e === 46888) return n.CLUSTER_BREAK.LV
                            } else if (46889 <= e && e <= 46915) return n.CLUSTER_BREAK.LVT
                        } else if (e < 46917) {
                            if (e === 46916) return n.CLUSTER_BREAK.LV
                        } else if (e < 46944) {
                            if (46917 <= e && e <= 46943) return n.CLUSTER_BREAK.LVT
                        } else if (e === 46944) return n.CLUSTER_BREAK.LV
                    } else if (e < 47028) {
                        if (e < 46973) {
                            if (e < 46972) {
                                if (46945 <= e && e <= 46971) return n.CLUSTER_BREAK.LVT
                            } else if (e === 46972) return n.CLUSTER_BREAK.LV
                        } else if (e < 47e3) {
                            if (46973 <= e && e <= 46999) return n.CLUSTER_BREAK.LVT
                        } else if (e < 47001) {
                            if (e === 47e3) return n.CLUSTER_BREAK.LV
                        } else if (47001 <= e && e <= 47027) return n.CLUSTER_BREAK.LVT
                    } else if (e < 47057) {
                        if (e < 47029) {
                            if (e === 47028) return n.CLUSTER_BREAK.LV
                        } else if (e < 47056) {
                            if (47029 <= e && e <= 47055) return n.CLUSTER_BREAK.LVT
                        } else if (e === 47056) return n.CLUSTER_BREAK.LV
                    } else if (e < 47084) {
                        if (47057 <= e && e <= 47083) return n.CLUSTER_BREAK.LVT
                    } else if (e < 47085) {
                        if (e === 47084) return n.CLUSTER_BREAK.LV
                    } else if (47085 <= e && e <= 47111) return n.CLUSTER_BREAK.LVT
                } else if (e < 47393) {
                    if (e < 47252) {
                        if (e < 47169) {
                            if (e < 47140) {
                                if (e < 47113) {
                                    if (e === 47112) return n.CLUSTER_BREAK.LV
                                } else if (47113 <= e && e <= 47139) return n.CLUSTER_BREAK.LVT
                            } else if (e < 47141) {
                                if (e === 47140) return n.CLUSTER_BREAK.LV
                            } else if (e < 47168) {
                                if (47141 <= e && e <= 47167) return n.CLUSTER_BREAK.LVT
                            } else if (e === 47168) return n.CLUSTER_BREAK.LV
                        } else if (e < 47197) {
                            if (e < 47196) {
                                if (47169 <= e && e <= 47195) return n.CLUSTER_BREAK.LVT
                            } else if (e === 47196) return n.CLUSTER_BREAK.LV
                        } else if (e < 47224) {
                            if (47197 <= e && e <= 47223) return n.CLUSTER_BREAK.LVT
                        } else if (e < 47225) {
                            if (e === 47224) return n.CLUSTER_BREAK.LV
                        } else if (47225 <= e && e <= 47251) return n.CLUSTER_BREAK.LVT
                    } else if (e < 47309) {
                        if (e < 47280) {
                            if (e < 47253) {
                                if (e === 47252) return n.CLUSTER_BREAK.LV
                            } else if (47253 <= e && e <= 47279) return n.CLUSTER_BREAK.LVT
                        } else if (e < 47281) {
                            if (e === 47280) return n.CLUSTER_BREAK.LV
                        } else if (e < 47308) {
                            if (47281 <= e && e <= 47307) return n.CLUSTER_BREAK.LVT
                        } else if (e === 47308) return n.CLUSTER_BREAK.LV
                    } else if (e < 47364) {
                        if (e < 47336) {
                            if (47309 <= e && e <= 47335) return n.CLUSTER_BREAK.LVT
                        } else if (e < 47337) {
                            if (e === 47336) return n.CLUSTER_BREAK.LV
                        } else if (47337 <= e && e <= 47363) return n.CLUSTER_BREAK.LVT
                    } else if (e < 47365) {
                        if (e === 47364) return n.CLUSTER_BREAK.LV
                    } else if (e < 47392) {
                        if (47365 <= e && e <= 47391) return n.CLUSTER_BREAK.LVT
                    } else if (e === 47392) return n.CLUSTER_BREAK.LV
                } else if (e < 47560) {
                    if (e < 47476) {
                        if (e < 47421) {
                            if (e < 47420) {
                                if (47393 <= e && e <= 47419) return n.CLUSTER_BREAK.LVT
                            } else if (e === 47420) return n.CLUSTER_BREAK.LV
                        } else if (e < 47448) {
                            if (47421 <= e && e <= 47447) return n.CLUSTER_BREAK.LVT
                        } else if (e < 47449) {
                            if (e === 47448) return n.CLUSTER_BREAK.LV
                        } else if (47449 <= e && e <= 47475) return n.CLUSTER_BREAK.LVT
                    } else if (e < 47505) {
                        if (e < 47477) {
                            if (e === 47476) return n.CLUSTER_BREAK.LV
                        } else if (e < 47504) {
                            if (47477 <= e && e <= 47503) return n.CLUSTER_BREAK.LVT
                        } else if (e === 47504) return n.CLUSTER_BREAK.LV
                    } else if (e < 47532) {
                        if (47505 <= e && e <= 47531) return n.CLUSTER_BREAK.LVT
                    } else if (e < 47533) {
                        if (e === 47532) return n.CLUSTER_BREAK.LV
                    } else if (47533 <= e && e <= 47559) return n.CLUSTER_BREAK.LVT
                } else if (e < 47617) {
                    if (e < 47588) {
                        if (e < 47561) {
                            if (e === 47560) return n.CLUSTER_BREAK.LV
                        } else if (47561 <= e && e <= 47587) return n.CLUSTER_BREAK.LVT
                    } else if (e < 47589) {
                        if (e === 47588) return n.CLUSTER_BREAK.LV
                    } else if (e < 47616) {
                        if (47589 <= e && e <= 47615) return n.CLUSTER_BREAK.LVT
                    } else if (e === 47616) return n.CLUSTER_BREAK.LV
                } else if (e < 47672) {
                    if (e < 47644) {
                        if (47617 <= e && e <= 47643) return n.CLUSTER_BREAK.LVT
                    } else if (e < 47645) {
                        if (e === 47644) return n.CLUSTER_BREAK.LV
                    } else if (47645 <= e && e <= 47671) return n.CLUSTER_BREAK.LVT
                } else if (e < 47673) {
                    if (e === 47672) return n.CLUSTER_BREAK.LV
                } else if (e < 47700) {
                    if (47673 <= e && e <= 47699) return n.CLUSTER_BREAK.LVT
                } else if (e === 47700) return n.CLUSTER_BREAK.LV
            } else if (e < 48316) {
                if (e < 48008) {
                    if (e < 47841) {
                        if (e < 47784) {
                            if (e < 47729) {
                                if (e < 47728) {
                                    if (47701 <= e && e <= 47727) return n.CLUSTER_BREAK.LVT
                                } else if (e === 47728) return n.CLUSTER_BREAK.LV
                            } else if (e < 47756) {
                                if (47729 <= e && e <= 47755) return n.CLUSTER_BREAK.LVT
                            } else if (e < 47757) {
                                if (e === 47756) return n.CLUSTER_BREAK.LV
                            } else if (47757 <= e && e <= 47783) return n.CLUSTER_BREAK.LVT
                        } else if (e < 47812) {
                            if (e < 47785) {
                                if (e === 47784) return n.CLUSTER_BREAK.LV
                            } else if (47785 <= e && e <= 47811) return n.CLUSTER_BREAK.LVT
                        } else if (e < 47813) {
                            if (e === 47812) return n.CLUSTER_BREAK.LV
                        } else if (e < 47840) {
                            if (47813 <= e && e <= 47839) return n.CLUSTER_BREAK.LVT
                        } else if (e === 47840) return n.CLUSTER_BREAK.LV
                    } else if (e < 47924) {
                        if (e < 47869) {
                            if (e < 47868) {
                                if (47841 <= e && e <= 47867) return n.CLUSTER_BREAK.LVT
                            } else if (e === 47868) return n.CLUSTER_BREAK.LV
                        } else if (e < 47896) {
                            if (47869 <= e && e <= 47895) return n.CLUSTER_BREAK.LVT
                        } else if (e < 47897) {
                            if (e === 47896) return n.CLUSTER_BREAK.LV
                        } else if (47897 <= e && e <= 47923) return n.CLUSTER_BREAK.LVT
                    } else if (e < 47953) {
                        if (e < 47925) {
                            if (e === 47924) return n.CLUSTER_BREAK.LV
                        } else if (e < 47952) {
                            if (47925 <= e && e <= 47951) return n.CLUSTER_BREAK.LVT
                        } else if (e === 47952) return n.CLUSTER_BREAK.LV
                    } else if (e < 47980) {
                        if (47953 <= e && e <= 47979) return n.CLUSTER_BREAK.LVT
                    } else if (e < 47981) {
                        if (e === 47980) return n.CLUSTER_BREAK.LV
                    } else if (47981 <= e && e <= 48007) return n.CLUSTER_BREAK.LVT
                } else if (e < 48149) {
                    if (e < 48065) {
                        if (e < 48036) {
                            if (e < 48009) {
                                if (e === 48008) return n.CLUSTER_BREAK.LV
                            } else if (48009 <= e && e <= 48035) return n.CLUSTER_BREAK.LVT
                        } else if (e < 48037) {
                            if (e === 48036) return n.CLUSTER_BREAK.LV
                        } else if (e < 48064) {
                            if (48037 <= e && e <= 48063) return n.CLUSTER_BREAK.LVT
                        } else if (e === 48064) return n.CLUSTER_BREAK.LV
                    } else if (e < 48120) {
                        if (e < 48092) {
                            if (48065 <= e && e <= 48091) return n.CLUSTER_BREAK.LVT
                        } else if (e < 48093) {
                            if (e === 48092) return n.CLUSTER_BREAK.LV
                        } else if (48093 <= e && e <= 48119) return n.CLUSTER_BREAK.LVT
                    } else if (e < 48121) {
                        if (e === 48120) return n.CLUSTER_BREAK.LV
                    } else if (e < 48148) {
                        if (48121 <= e && e <= 48147) return n.CLUSTER_BREAK.LVT
                    } else if (e === 48148) return n.CLUSTER_BREAK.LV
                } else if (e < 48232) {
                    if (e < 48177) {
                        if (e < 48176) {
                            if (48149 <= e && e <= 48175) return n.CLUSTER_BREAK.LVT
                        } else if (e === 48176) return n.CLUSTER_BREAK.LV
                    } else if (e < 48204) {
                        if (48177 <= e && e <= 48203) return n.CLUSTER_BREAK.LVT
                    } else if (e < 48205) {
                        if (e === 48204) return n.CLUSTER_BREAK.LV
                    } else if (48205 <= e && e <= 48231) return n.CLUSTER_BREAK.LVT
                } else if (e < 48261) {
                    if (e < 48233) {
                        if (e === 48232) return n.CLUSTER_BREAK.LV
                    } else if (e < 48260) {
                        if (48233 <= e && e <= 48259) return n.CLUSTER_BREAK.LVT
                    } else if (e === 48260) return n.CLUSTER_BREAK.LV
                } else if (e < 48288) {
                    if (48261 <= e && e <= 48287) return n.CLUSTER_BREAK.LVT
                } else if (e < 48289) {
                    if (e === 48288) return n.CLUSTER_BREAK.LV
                } else if (48289 <= e && e <= 48315) return n.CLUSTER_BREAK.LVT
            } else if (e < 48597) {
                if (e < 48456) {
                    if (e < 48373) {
                        if (e < 48344) {
                            if (e < 48317) {
                                if (e === 48316) return n.CLUSTER_BREAK.LV
                            } else if (48317 <= e && e <= 48343) return n.CLUSTER_BREAK.LVT
                        } else if (e < 48345) {
                            if (e === 48344) return n.CLUSTER_BREAK.LV
                        } else if (e < 48372) {
                            if (48345 <= e && e <= 48371) return n.CLUSTER_BREAK.LVT
                        } else if (e === 48372) return n.CLUSTER_BREAK.LV
                    } else if (e < 48401) {
                        if (e < 48400) {
                            if (48373 <= e && e <= 48399) return n.CLUSTER_BREAK.LVT
                        } else if (e === 48400) return n.CLUSTER_BREAK.LV
                    } else if (e < 48428) {
                        if (48401 <= e && e <= 48427) return n.CLUSTER_BREAK.LVT
                    } else if (e < 48429) {
                        if (e === 48428) return n.CLUSTER_BREAK.LV
                    } else if (48429 <= e && e <= 48455) return n.CLUSTER_BREAK.LVT
                } else if (e < 48513) {
                    if (e < 48484) {
                        if (e < 48457) {
                            if (e === 48456) return n.CLUSTER_BREAK.LV
                        } else if (48457 <= e && e <= 48483) return n.CLUSTER_BREAK.LVT
                    } else if (e < 48485) {
                        if (e === 48484) return n.CLUSTER_BREAK.LV
                    } else if (e < 48512) {
                        if (48485 <= e && e <= 48511) return n.CLUSTER_BREAK.LVT
                    } else if (e === 48512) return n.CLUSTER_BREAK.LV
                } else if (e < 48568) {
                    if (e < 48540) {
                        if (48513 <= e && e <= 48539) return n.CLUSTER_BREAK.LVT
                    } else if (e < 48541) {
                        if (e === 48540) return n.CLUSTER_BREAK.LV
                    } else if (48541 <= e && e <= 48567) return n.CLUSTER_BREAK.LVT
                } else if (e < 48569) {
                    if (e === 48568) return n.CLUSTER_BREAK.LV
                } else if (e < 48596) {
                    if (48569 <= e && e <= 48595) return n.CLUSTER_BREAK.LVT
                } else if (e === 48596) return n.CLUSTER_BREAK.LV
            } else if (e < 48764) {
                if (e < 48680) {
                    if (e < 48625) {
                        if (e < 48624) {
                            if (48597 <= e && e <= 48623) return n.CLUSTER_BREAK.LVT
                        } else if (e === 48624) return n.CLUSTER_BREAK.LV
                    } else if (e < 48652) {
                        if (48625 <= e && e <= 48651) return n.CLUSTER_BREAK.LVT
                    } else if (e < 48653) {
                        if (e === 48652) return n.CLUSTER_BREAK.LV
                    } else if (48653 <= e && e <= 48679) return n.CLUSTER_BREAK.LVT
                } else if (e < 48709) {
                    if (e < 48681) {
                        if (e === 48680) return n.CLUSTER_BREAK.LV
                    } else if (e < 48708) {
                        if (48681 <= e && e <= 48707) return n.CLUSTER_BREAK.LVT
                    } else if (e === 48708) return n.CLUSTER_BREAK.LV
                } else if (e < 48736) {
                    if (48709 <= e && e <= 48735) return n.CLUSTER_BREAK.LVT
                } else if (e < 48737) {
                    if (e === 48736) return n.CLUSTER_BREAK.LV
                } else if (48737 <= e && e <= 48763) return n.CLUSTER_BREAK.LVT
            } else if (e < 48821) {
                if (e < 48792) {
                    if (e < 48765) {
                        if (e === 48764) return n.CLUSTER_BREAK.LV
                    } else if (48765 <= e && e <= 48791) return n.CLUSTER_BREAK.LVT
                } else if (e < 48793) {
                    if (e === 48792) return n.CLUSTER_BREAK.LV
                } else if (e < 48820) {
                    if (48793 <= e && e <= 48819) return n.CLUSTER_BREAK.LVT
                } else if (e === 48820) return n.CLUSTER_BREAK.LV
            } else if (e < 48876) {
                if (e < 48848) {
                    if (48821 <= e && e <= 48847) return n.CLUSTER_BREAK.LVT
                } else if (e < 48849) {
                    if (e === 48848) return n.CLUSTER_BREAK.LV
                } else if (48849 <= e && e <= 48875) return n.CLUSTER_BREAK.LVT
            } else if (e < 48877) {
                if (e === 48876) return n.CLUSTER_BREAK.LV
            } else if (e < 48904) {
                if (48877 <= e && e <= 48903) return n.CLUSTER_BREAK.LVT
            } else if (e === 48904) return n.CLUSTER_BREAK.LV
        } else if (e < 53720) {
            if (e < 51312) {
                if (e < 50108) {
                    if (e < 49493) {
                        if (e < 49212) {
                            if (e < 49045) {
                                if (e < 48988) {
                                    if (e < 48933) {
                                        if (e < 48932) {
                                            if (48905 <= e && e <= 48931) return n.CLUSTER_BREAK.LVT
                                        } else if (e === 48932) return n.CLUSTER_BREAK.LV
                                    } else if (e < 48960) {
                                        if (48933 <= e && e <= 48959) return n.CLUSTER_BREAK.LVT
                                    } else if (e < 48961) {
                                        if (e === 48960) return n.CLUSTER_BREAK.LV
                                    } else if (48961 <= e && e <= 48987) return n.CLUSTER_BREAK.LVT
                                } else if (e < 49016) {
                                    if (e < 48989) {
                                        if (e === 48988) return n.CLUSTER_BREAK.LV
                                    } else if (48989 <= e && e <= 49015) return n.CLUSTER_BREAK.LVT
                                } else if (e < 49017) {
                                    if (e === 49016) return n.CLUSTER_BREAK.LV
                                } else if (e < 49044) {
                                    if (49017 <= e && e <= 49043) return n.CLUSTER_BREAK.LVT
                                } else if (e === 49044) return n.CLUSTER_BREAK.LV
                            } else if (e < 49128) {
                                if (e < 49073) {
                                    if (e < 49072) {
                                        if (49045 <= e && e <= 49071) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 49072) return n.CLUSTER_BREAK.LV
                                } else if (e < 49100) {
                                    if (49073 <= e && e <= 49099) return n.CLUSTER_BREAK.LVT
                                } else if (e < 49101) {
                                    if (e === 49100) return n.CLUSTER_BREAK.LV
                                } else if (49101 <= e && e <= 49127) return n.CLUSTER_BREAK.LVT
                            } else if (e < 49157) {
                                if (e < 49129) {
                                    if (e === 49128) return n.CLUSTER_BREAK.LV
                                } else if (e < 49156) {
                                    if (49129 <= e && e <= 49155) return n.CLUSTER_BREAK.LVT
                                } else if (e === 49156) return n.CLUSTER_BREAK.LV
                            } else if (e < 49184) {
                                if (49157 <= e && e <= 49183) return n.CLUSTER_BREAK.LVT
                            } else if (e < 49185) {
                                if (e === 49184) return n.CLUSTER_BREAK.LV
                            } else if (49185 <= e && e <= 49211) return n.CLUSTER_BREAK.LVT
                        } else if (e < 49352) {
                            if (e < 49269) {
                                if (e < 49240) {
                                    if (e < 49213) {
                                        if (e === 49212) return n.CLUSTER_BREAK.LV
                                    } else if (49213 <= e && e <= 49239) return n.CLUSTER_BREAK.LVT
                                } else if (e < 49241) {
                                    if (e === 49240) return n.CLUSTER_BREAK.LV
                                } else if (e < 49268) {
                                    if (49241 <= e && e <= 49267) return n.CLUSTER_BREAK.LVT
                                } else if (e === 49268) return n.CLUSTER_BREAK.LV
                            } else if (e < 49297) {
                                if (e < 49296) {
                                    if (49269 <= e && e <= 49295) return n.CLUSTER_BREAK.LVT
                                } else if (e === 49296) return n.CLUSTER_BREAK.LV
                            } else if (e < 49324) {
                                if (49297 <= e && e <= 49323) return n.CLUSTER_BREAK.LVT
                            } else if (e < 49325) {
                                if (e === 49324) return n.CLUSTER_BREAK.LV
                            } else if (49325 <= e && e <= 49351) return n.CLUSTER_BREAK.LVT
                        } else if (e < 49409) {
                            if (e < 49380) {
                                if (e < 49353) {
                                    if (e === 49352) return n.CLUSTER_BREAK.LV
                                } else if (49353 <= e && e <= 49379) return n.CLUSTER_BREAK.LVT
                            } else if (e < 49381) {
                                if (e === 49380) return n.CLUSTER_BREAK.LV
                            } else if (e < 49408) {
                                if (49381 <= e && e <= 49407) return n.CLUSTER_BREAK.LVT
                            } else if (e === 49408) return n.CLUSTER_BREAK.LV
                        } else if (e < 49464) {
                            if (e < 49436) {
                                if (49409 <= e && e <= 49435) return n.CLUSTER_BREAK.LVT
                            } else if (e < 49437) {
                                if (e === 49436) return n.CLUSTER_BREAK.LV
                            } else if (49437 <= e && e <= 49463) return n.CLUSTER_BREAK.LVT
                        } else if (e < 49465) {
                            if (e === 49464) return n.CLUSTER_BREAK.LV
                        } else if (e < 49492) {
                            if (49465 <= e && e <= 49491) return n.CLUSTER_BREAK.LVT
                        } else if (e === 49492) return n.CLUSTER_BREAK.LV
                    } else if (e < 49800) {
                        if (e < 49633) {
                            if (e < 49576) {
                                if (e < 49521) {
                                    if (e < 49520) {
                                        if (49493 <= e && e <= 49519) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 49520) return n.CLUSTER_BREAK.LV
                                } else if (e < 49548) {
                                    if (49521 <= e && e <= 49547) return n.CLUSTER_BREAK.LVT
                                } else if (e < 49549) {
                                    if (e === 49548) return n.CLUSTER_BREAK.LV
                                } else if (49549 <= e && e <= 49575) return n.CLUSTER_BREAK.LVT
                            } else if (e < 49604) {
                                if (e < 49577) {
                                    if (e === 49576) return n.CLUSTER_BREAK.LV
                                } else if (49577 <= e && e <= 49603) return n.CLUSTER_BREAK.LVT
                            } else if (e < 49605) {
                                if (e === 49604) return n.CLUSTER_BREAK.LV
                            } else if (e < 49632) {
                                if (49605 <= e && e <= 49631) return n.CLUSTER_BREAK.LVT
                            } else if (e === 49632) return n.CLUSTER_BREAK.LV
                        } else if (e < 49716) {
                            if (e < 49661) {
                                if (e < 49660) {
                                    if (49633 <= e && e <= 49659) return n.CLUSTER_BREAK.LVT
                                } else if (e === 49660) return n.CLUSTER_BREAK.LV
                            } else if (e < 49688) {
                                if (49661 <= e && e <= 49687) return n.CLUSTER_BREAK.LVT
                            } else if (e < 49689) {
                                if (e === 49688) return n.CLUSTER_BREAK.LV
                            } else if (49689 <= e && e <= 49715) return n.CLUSTER_BREAK.LVT
                        } else if (e < 49745) {
                            if (e < 49717) {
                                if (e === 49716) return n.CLUSTER_BREAK.LV
                            } else if (e < 49744) {
                                if (49717 <= e && e <= 49743) return n.CLUSTER_BREAK.LVT
                            } else if (e === 49744) return n.CLUSTER_BREAK.LV
                        } else if (e < 49772) {
                            if (49745 <= e && e <= 49771) return n.CLUSTER_BREAK.LVT
                        } else if (e < 49773) {
                            if (e === 49772) return n.CLUSTER_BREAK.LV
                        } else if (49773 <= e && e <= 49799) return n.CLUSTER_BREAK.LVT
                    } else if (e < 49941) {
                        if (e < 49857) {
                            if (e < 49828) {
                                if (e < 49801) {
                                    if (e === 49800) return n.CLUSTER_BREAK.LV
                                } else if (49801 <= e && e <= 49827) return n.CLUSTER_BREAK.LVT
                            } else if (e < 49829) {
                                if (e === 49828) return n.CLUSTER_BREAK.LV
                            } else if (e < 49856) {
                                if (49829 <= e && e <= 49855) return n.CLUSTER_BREAK.LVT
                            } else if (e === 49856) return n.CLUSTER_BREAK.LV
                        } else if (e < 49912) {
                            if (e < 49884) {
                                if (49857 <= e && e <= 49883) return n.CLUSTER_BREAK.LVT
                            } else if (e < 49885) {
                                if (e === 49884) return n.CLUSTER_BREAK.LV
                            } else if (49885 <= e && e <= 49911) return n.CLUSTER_BREAK.LVT
                        } else if (e < 49913) {
                            if (e === 49912) return n.CLUSTER_BREAK.LV
                        } else if (e < 49940) {
                            if (49913 <= e && e <= 49939) return n.CLUSTER_BREAK.LVT
                        } else if (e === 49940) return n.CLUSTER_BREAK.LV
                    } else if (e < 50024) {
                        if (e < 49969) {
                            if (e < 49968) {
                                if (49941 <= e && e <= 49967) return n.CLUSTER_BREAK.LVT
                            } else if (e === 49968) return n.CLUSTER_BREAK.LV
                        } else if (e < 49996) {
                            if (49969 <= e && e <= 49995) return n.CLUSTER_BREAK.LVT
                        } else if (e < 49997) {
                            if (e === 49996) return n.CLUSTER_BREAK.LV
                        } else if (49997 <= e && e <= 50023) return n.CLUSTER_BREAK.LVT
                    } else if (e < 50053) {
                        if (e < 50025) {
                            if (e === 50024) return n.CLUSTER_BREAK.LV
                        } else if (e < 50052) {
                            if (50025 <= e && e <= 50051) return n.CLUSTER_BREAK.LVT
                        } else if (e === 50052) return n.CLUSTER_BREAK.LV
                    } else if (e < 50080) {
                        if (50053 <= e && e <= 50079) return n.CLUSTER_BREAK.LVT
                    } else if (e < 50081) {
                        if (e === 50080) return n.CLUSTER_BREAK.LV
                    } else if (50081 <= e && e <= 50107) return n.CLUSTER_BREAK.LVT
                } else if (e < 50697) {
                    if (e < 50389) {
                        if (e < 50248) {
                            if (e < 50165) {
                                if (e < 50136) {
                                    if (e < 50109) {
                                        if (e === 50108) return n.CLUSTER_BREAK.LV
                                    } else if (50109 <= e && e <= 50135) return n.CLUSTER_BREAK.LVT
                                } else if (e < 50137) {
                                    if (e === 50136) return n.CLUSTER_BREAK.LV
                                } else if (e < 50164) {
                                    if (50137 <= e && e <= 50163) return n.CLUSTER_BREAK.LVT
                                } else if (e === 50164) return n.CLUSTER_BREAK.LV
                            } else if (e < 50193) {
                                if (e < 50192) {
                                    if (50165 <= e && e <= 50191) return n.CLUSTER_BREAK.LVT
                                } else if (e === 50192) return n.CLUSTER_BREAK.LV
                            } else if (e < 50220) {
                                if (50193 <= e && e <= 50219) return n.CLUSTER_BREAK.LVT
                            } else if (e < 50221) {
                                if (e === 50220) return n.CLUSTER_BREAK.LV
                            } else if (50221 <= e && e <= 50247) return n.CLUSTER_BREAK.LVT
                        } else if (e < 50305) {
                            if (e < 50276) {
                                if (e < 50249) {
                                    if (e === 50248) return n.CLUSTER_BREAK.LV
                                } else if (50249 <= e && e <= 50275) return n.CLUSTER_BREAK.LVT
                            } else if (e < 50277) {
                                if (e === 50276) return n.CLUSTER_BREAK.LV
                            } else if (e < 50304) {
                                if (50277 <= e && e <= 50303) return n.CLUSTER_BREAK.LVT
                            } else if (e === 50304) return n.CLUSTER_BREAK.LV
                        } else if (e < 50360) {
                            if (e < 50332) {
                                if (50305 <= e && e <= 50331) return n.CLUSTER_BREAK.LVT
                            } else if (e < 50333) {
                                if (e === 50332) return n.CLUSTER_BREAK.LV
                            } else if (50333 <= e && e <= 50359) return n.CLUSTER_BREAK.LVT
                        } else if (e < 50361) {
                            if (e === 50360) return n.CLUSTER_BREAK.LV
                        } else if (e < 50388) {
                            if (50361 <= e && e <= 50387) return n.CLUSTER_BREAK.LVT
                        } else if (e === 50388) return n.CLUSTER_BREAK.LV
                    } else if (e < 50556) {
                        if (e < 50472) {
                            if (e < 50417) {
                                if (e < 50416) {
                                    if (50389 <= e && e <= 50415) return n.CLUSTER_BREAK.LVT
                                } else if (e === 50416) return n.CLUSTER_BREAK.LV
                            } else if (e < 50444) {
                                if (50417 <= e && e <= 50443) return n.CLUSTER_BREAK.LVT
                            } else if (e < 50445) {
                                if (e === 50444) return n.CLUSTER_BREAK.LV
                            } else if (50445 <= e && e <= 50471) return n.CLUSTER_BREAK.LVT
                        } else if (e < 50501) {
                            if (e < 50473) {
                                if (e === 50472) return n.CLUSTER_BREAK.LV
                            } else if (e < 50500) {
                                if (50473 <= e && e <= 50499) return n.CLUSTER_BREAK.LVT
                            } else if (e === 50500) return n.CLUSTER_BREAK.LV
                        } else if (e < 50528) {
                            if (50501 <= e && e <= 50527) return n.CLUSTER_BREAK.LVT
                        } else if (e < 50529) {
                            if (e === 50528) return n.CLUSTER_BREAK.LV
                        } else if (50529 <= e && e <= 50555) return n.CLUSTER_BREAK.LVT
                    } else if (e < 50613) {
                        if (e < 50584) {
                            if (e < 50557) {
                                if (e === 50556) return n.CLUSTER_BREAK.LV
                            } else if (50557 <= e && e <= 50583) return n.CLUSTER_BREAK.LVT
                        } else if (e < 50585) {
                            if (e === 50584) return n.CLUSTER_BREAK.LV
                        } else if (e < 50612) {
                            if (50585 <= e && e <= 50611) return n.CLUSTER_BREAK.LVT
                        } else if (e === 50612) return n.CLUSTER_BREAK.LV
                    } else if (e < 50668) {
                        if (e < 50640) {
                            if (50613 <= e && e <= 50639) return n.CLUSTER_BREAK.LVT
                        } else if (e < 50641) {
                            if (e === 50640) return n.CLUSTER_BREAK.LV
                        } else if (50641 <= e && e <= 50667) return n.CLUSTER_BREAK.LVT
                    } else if (e < 50669) {
                        if (e === 50668) return n.CLUSTER_BREAK.LV
                    } else if (e < 50696) {
                        if (50669 <= e && e <= 50695) return n.CLUSTER_BREAK.LVT
                    } else if (e === 50696) return n.CLUSTER_BREAK.LV
                } else if (e < 51004) {
                    if (e < 50837) {
                        if (e < 50780) {
                            if (e < 50725) {
                                if (e < 50724) {
                                    if (50697 <= e && e <= 50723) return n.CLUSTER_BREAK.LVT
                                } else if (e === 50724) return n.CLUSTER_BREAK.LV
                            } else if (e < 50752) {
                                if (50725 <= e && e <= 50751) return n.CLUSTER_BREAK.LVT
                            } else if (e < 50753) {
                                if (e === 50752) return n.CLUSTER_BREAK.LV
                            } else if (50753 <= e && e <= 50779) return n.CLUSTER_BREAK.LVT
                        } else if (e < 50808) {
                            if (e < 50781) {
                                if (e === 50780) return n.CLUSTER_BREAK.LV
                            } else if (50781 <= e && e <= 50807) return n.CLUSTER_BREAK.LVT
                        } else if (e < 50809) {
                            if (e === 50808) return n.CLUSTER_BREAK.LV
                        } else if (e < 50836) {
                            if (50809 <= e && e <= 50835) return n.CLUSTER_BREAK.LVT
                        } else if (e === 50836) return n.CLUSTER_BREAK.LV
                    } else if (e < 50920) {
                        if (e < 50865) {
                            if (e < 50864) {
                                if (50837 <= e && e <= 50863) return n.CLUSTER_BREAK.LVT
                            } else if (e === 50864) return n.CLUSTER_BREAK.LV
                        } else if (e < 50892) {
                            if (50865 <= e && e <= 50891) return n.CLUSTER_BREAK.LVT
                        } else if (e < 50893) {
                            if (e === 50892) return n.CLUSTER_BREAK.LV
                        } else if (50893 <= e && e <= 50919) return n.CLUSTER_BREAK.LVT
                    } else if (e < 50949) {
                        if (e < 50921) {
                            if (e === 50920) return n.CLUSTER_BREAK.LV
                        } else if (e < 50948) {
                            if (50921 <= e && e <= 50947) return n.CLUSTER_BREAK.LVT
                        } else if (e === 50948) return n.CLUSTER_BREAK.LV
                    } else if (e < 50976) {
                        if (50949 <= e && e <= 50975) return n.CLUSTER_BREAK.LVT
                    } else if (e < 50977) {
                        if (e === 50976) return n.CLUSTER_BREAK.LV
                    } else if (50977 <= e && e <= 51003) return n.CLUSTER_BREAK.LVT
                } else if (e < 51145) {
                    if (e < 51061) {
                        if (e < 51032) {
                            if (e < 51005) {
                                if (e === 51004) return n.CLUSTER_BREAK.LV
                            } else if (51005 <= e && e <= 51031) return n.CLUSTER_BREAK.LVT
                        } else if (e < 51033) {
                            if (e === 51032) return n.CLUSTER_BREAK.LV
                        } else if (e < 51060) {
                            if (51033 <= e && e <= 51059) return n.CLUSTER_BREAK.LVT
                        } else if (e === 51060) return n.CLUSTER_BREAK.LV
                    } else if (e < 51116) {
                        if (e < 51088) {
                            if (51061 <= e && e <= 51087) return n.CLUSTER_BREAK.LVT
                        } else if (e < 51089) {
                            if (e === 51088) return n.CLUSTER_BREAK.LV
                        } else if (51089 <= e && e <= 51115) return n.CLUSTER_BREAK.LVT
                    } else if (e < 51117) {
                        if (e === 51116) return n.CLUSTER_BREAK.LV
                    } else if (e < 51144) {
                        if (51117 <= e && e <= 51143) return n.CLUSTER_BREAK.LVT
                    } else if (e === 51144) return n.CLUSTER_BREAK.LV
                } else if (e < 51228) {
                    if (e < 51173) {
                        if (e < 51172) {
                            if (51145 <= e && e <= 51171) return n.CLUSTER_BREAK.LVT
                        } else if (e === 51172) return n.CLUSTER_BREAK.LV
                    } else if (e < 51200) {
                        if (51173 <= e && e <= 51199) return n.CLUSTER_BREAK.LVT
                    } else if (e < 51201) {
                        if (e === 51200) return n.CLUSTER_BREAK.LV
                    } else if (51201 <= e && e <= 51227) return n.CLUSTER_BREAK.LVT
                } else if (e < 51257) {
                    if (e < 51229) {
                        if (e === 51228) return n.CLUSTER_BREAK.LV
                    } else if (e < 51256) {
                        if (51229 <= e && e <= 51255) return n.CLUSTER_BREAK.LVT
                    } else if (e === 51256) return n.CLUSTER_BREAK.LV
                } else if (e < 51284) {
                    if (51257 <= e && e <= 51283) return n.CLUSTER_BREAK.LVT
                } else if (e < 51285) {
                    if (e === 51284) return n.CLUSTER_BREAK.LV
                } else if (51285 <= e && e <= 51311) return n.CLUSTER_BREAK.LVT
            } else if (e < 52516) {
                if (e < 51901) {
                    if (e < 51593) {
                        if (e < 51452) {
                            if (e < 51369) {
                                if (e < 51340) {
                                    if (e < 51313) {
                                        if (e === 51312) return n.CLUSTER_BREAK.LV
                                    } else if (51313 <= e && e <= 51339) return n.CLUSTER_BREAK.LVT
                                } else if (e < 51341) {
                                    if (e === 51340) return n.CLUSTER_BREAK.LV
                                } else if (e < 51368) {
                                    if (51341 <= e && e <= 51367) return n.CLUSTER_BREAK.LVT
                                } else if (e === 51368) return n.CLUSTER_BREAK.LV
                            } else if (e < 51397) {
                                if (e < 51396) {
                                    if (51369 <= e && e <= 51395) return n.CLUSTER_BREAK.LVT
                                } else if (e === 51396) return n.CLUSTER_BREAK.LV
                            } else if (e < 51424) {
                                if (51397 <= e && e <= 51423) return n.CLUSTER_BREAK.LVT
                            } else if (e < 51425) {
                                if (e === 51424) return n.CLUSTER_BREAK.LV
                            } else if (51425 <= e && e <= 51451) return n.CLUSTER_BREAK.LVT
                        } else if (e < 51509) {
                            if (e < 51480) {
                                if (e < 51453) {
                                    if (e === 51452) return n.CLUSTER_BREAK.LV
                                } else if (51453 <= e && e <= 51479) return n.CLUSTER_BREAK.LVT
                            } else if (e < 51481) {
                                if (e === 51480) return n.CLUSTER_BREAK.LV
                            } else if (e < 51508) {
                                if (51481 <= e && e <= 51507) return n.CLUSTER_BREAK.LVT
                            } else if (e === 51508) return n.CLUSTER_BREAK.LV
                        } else if (e < 51564) {
                            if (e < 51536) {
                                if (51509 <= e && e <= 51535) return n.CLUSTER_BREAK.LVT
                            } else if (e < 51537) {
                                if (e === 51536) return n.CLUSTER_BREAK.LV
                            } else if (51537 <= e && e <= 51563) return n.CLUSTER_BREAK.LVT
                        } else if (e < 51565) {
                            if (e === 51564) return n.CLUSTER_BREAK.LV
                        } else if (e < 51592) {
                            if (51565 <= e && e <= 51591) return n.CLUSTER_BREAK.LVT
                        } else if (e === 51592) return n.CLUSTER_BREAK.LV
                    } else if (e < 51760) {
                        if (e < 51676) {
                            if (e < 51621) {
                                if (e < 51620) {
                                    if (51593 <= e && e <= 51619) return n.CLUSTER_BREAK.LVT
                                } else if (e === 51620) return n.CLUSTER_BREAK.LV
                            } else if (e < 51648) {
                                if (51621 <= e && e <= 51647) return n.CLUSTER_BREAK.LVT
                            } else if (e < 51649) {
                                if (e === 51648) return n.CLUSTER_BREAK.LV
                            } else if (51649 <= e && e <= 51675) return n.CLUSTER_BREAK.LVT
                        } else if (e < 51705) {
                            if (e < 51677) {
                                if (e === 51676) return n.CLUSTER_BREAK.LV
                            } else if (e < 51704) {
                                if (51677 <= e && e <= 51703) return n.CLUSTER_BREAK.LVT
                            } else if (e === 51704) return n.CLUSTER_BREAK.LV
                        } else if (e < 51732) {
                            if (51705 <= e && e <= 51731) return n.CLUSTER_BREAK.LVT
                        } else if (e < 51733) {
                            if (e === 51732) return n.CLUSTER_BREAK.LV
                        } else if (51733 <= e && e <= 51759) return n.CLUSTER_BREAK.LVT
                    } else if (e < 51817) {
                        if (e < 51788) {
                            if (e < 51761) {
                                if (e === 51760) return n.CLUSTER_BREAK.LV
                            } else if (51761 <= e && e <= 51787) return n.CLUSTER_BREAK.LVT
                        } else if (e < 51789) {
                            if (e === 51788) return n.CLUSTER_BREAK.LV
                        } else if (e < 51816) {
                            if (51789 <= e && e <= 51815) return n.CLUSTER_BREAK.LVT
                        } else if (e === 51816) return n.CLUSTER_BREAK.LV
                    } else if (e < 51872) {
                        if (e < 51844) {
                            if (51817 <= e && e <= 51843) return n.CLUSTER_BREAK.LVT
                        } else if (e < 51845) {
                            if (e === 51844) return n.CLUSTER_BREAK.LV
                        } else if (51845 <= e && e <= 51871) return n.CLUSTER_BREAK.LVT
                    } else if (e < 51873) {
                        if (e === 51872) return n.CLUSTER_BREAK.LV
                    } else if (e < 51900) {
                        if (51873 <= e && e <= 51899) return n.CLUSTER_BREAK.LVT
                    } else if (e === 51900) return n.CLUSTER_BREAK.LV
                } else if (e < 52208) {
                    if (e < 52041) {
                        if (e < 51984) {
                            if (e < 51929) {
                                if (e < 51928) {
                                    if (51901 <= e && e <= 51927) return n.CLUSTER_BREAK.LVT
                                } else if (e === 51928) return n.CLUSTER_BREAK.LV
                            } else if (e < 51956) {
                                if (51929 <= e && e <= 51955) return n.CLUSTER_BREAK.LVT
                            } else if (e < 51957) {
                                if (e === 51956) return n.CLUSTER_BREAK.LV
                            } else if (51957 <= e && e <= 51983) return n.CLUSTER_BREAK.LVT
                        } else if (e < 52012) {
                            if (e < 51985) {
                                if (e === 51984) return n.CLUSTER_BREAK.LV
                            } else if (51985 <= e && e <= 52011) return n.CLUSTER_BREAK.LVT
                        } else if (e < 52013) {
                            if (e === 52012) return n.CLUSTER_BREAK.LV
                        } else if (e < 52040) {
                            if (52013 <= e && e <= 52039) return n.CLUSTER_BREAK.LVT
                        } else if (e === 52040) return n.CLUSTER_BREAK.LV
                    } else if (e < 52124) {
                        if (e < 52069) {
                            if (e < 52068) {
                                if (52041 <= e && e <= 52067) return n.CLUSTER_BREAK.LVT
                            } else if (e === 52068) return n.CLUSTER_BREAK.LV
                        } else if (e < 52096) {
                            if (52069 <= e && e <= 52095) return n.CLUSTER_BREAK.LVT
                        } else if (e < 52097) {
                            if (e === 52096) return n.CLUSTER_BREAK.LV
                        } else if (52097 <= e && e <= 52123) return n.CLUSTER_BREAK.LVT
                    } else if (e < 52153) {
                        if (e < 52125) {
                            if (e === 52124) return n.CLUSTER_BREAK.LV
                        } else if (e < 52152) {
                            if (52125 <= e && e <= 52151) return n.CLUSTER_BREAK.LVT
                        } else if (e === 52152) return n.CLUSTER_BREAK.LV
                    } else if (e < 52180) {
                        if (52153 <= e && e <= 52179) return n.CLUSTER_BREAK.LVT
                    } else if (e < 52181) {
                        if (e === 52180) return n.CLUSTER_BREAK.LV
                    } else if (52181 <= e && e <= 52207) return n.CLUSTER_BREAK.LVT
                } else if (e < 52349) {
                    if (e < 52265) {
                        if (e < 52236) {
                            if (e < 52209) {
                                if (e === 52208) return n.CLUSTER_BREAK.LV
                            } else if (52209 <= e && e <= 52235) return n.CLUSTER_BREAK.LVT
                        } else if (e < 52237) {
                            if (e === 52236) return n.CLUSTER_BREAK.LV
                        } else if (e < 52264) {
                            if (52237 <= e && e <= 52263) return n.CLUSTER_BREAK.LVT
                        } else if (e === 52264) return n.CLUSTER_BREAK.LV
                    } else if (e < 52320) {
                        if (e < 52292) {
                            if (52265 <= e && e <= 52291) return n.CLUSTER_BREAK.LVT
                        } else if (e < 52293) {
                            if (e === 52292) return n.CLUSTER_BREAK.LV
                        } else if (52293 <= e && e <= 52319) return n.CLUSTER_BREAK.LVT
                    } else if (e < 52321) {
                        if (e === 52320) return n.CLUSTER_BREAK.LV
                    } else if (e < 52348) {
                        if (52321 <= e && e <= 52347) return n.CLUSTER_BREAK.LVT
                    } else if (e === 52348) return n.CLUSTER_BREAK.LV
                } else if (e < 52432) {
                    if (e < 52377) {
                        if (e < 52376) {
                            if (52349 <= e && e <= 52375) return n.CLUSTER_BREAK.LVT
                        } else if (e === 52376) return n.CLUSTER_BREAK.LV
                    } else if (e < 52404) {
                        if (52377 <= e && e <= 52403) return n.CLUSTER_BREAK.LVT
                    } else if (e < 52405) {
                        if (e === 52404) return n.CLUSTER_BREAK.LV
                    } else if (52405 <= e && e <= 52431) return n.CLUSTER_BREAK.LVT
                } else if (e < 52461) {
                    if (e < 52433) {
                        if (e === 52432) return n.CLUSTER_BREAK.LV
                    } else if (e < 52460) {
                        if (52433 <= e && e <= 52459) return n.CLUSTER_BREAK.LVT
                    } else if (e === 52460) return n.CLUSTER_BREAK.LV
                } else if (e < 52488) {
                    if (52461 <= e && e <= 52487) return n.CLUSTER_BREAK.LVT
                } else if (e < 52489) {
                    if (e === 52488) return n.CLUSTER_BREAK.LV
                } else if (52489 <= e && e <= 52515) return n.CLUSTER_BREAK.LVT
            } else if (e < 53105) {
                if (e < 52797) {
                    if (e < 52656) {
                        if (e < 52573) {
                            if (e < 52544) {
                                if (e < 52517) {
                                    if (e === 52516) return n.CLUSTER_BREAK.LV
                                } else if (52517 <= e && e <= 52543) return n.CLUSTER_BREAK.LVT
                            } else if (e < 52545) {
                                if (e === 52544) return n.CLUSTER_BREAK.LV
                            } else if (e < 52572) {
                                if (52545 <= e && e <= 52571) return n.CLUSTER_BREAK.LVT
                            } else if (e === 52572) return n.CLUSTER_BREAK.LV
                        } else if (e < 52601) {
                            if (e < 52600) {
                                if (52573 <= e && e <= 52599) return n.CLUSTER_BREAK.LVT
                            } else if (e === 52600) return n.CLUSTER_BREAK.LV
                        } else if (e < 52628) {
                            if (52601 <= e && e <= 52627) return n.CLUSTER_BREAK.LVT
                        } else if (e < 52629) {
                            if (e === 52628) return n.CLUSTER_BREAK.LV
                        } else if (52629 <= e && e <= 52655) return n.CLUSTER_BREAK.LVT
                    } else if (e < 52713) {
                        if (e < 52684) {
                            if (e < 52657) {
                                if (e === 52656) return n.CLUSTER_BREAK.LV
                            } else if (52657 <= e && e <= 52683) return n.CLUSTER_BREAK.LVT
                        } else if (e < 52685) {
                            if (e === 52684) return n.CLUSTER_BREAK.LV
                        } else if (e < 52712) {
                            if (52685 <= e && e <= 52711) return n.CLUSTER_BREAK.LVT
                        } else if (e === 52712) return n.CLUSTER_BREAK.LV
                    } else if (e < 52768) {
                        if (e < 52740) {
                            if (52713 <= e && e <= 52739) return n.CLUSTER_BREAK.LVT
                        } else if (e < 52741) {
                            if (e === 52740) return n.CLUSTER_BREAK.LV
                        } else if (52741 <= e && e <= 52767) return n.CLUSTER_BREAK.LVT
                    } else if (e < 52769) {
                        if (e === 52768) return n.CLUSTER_BREAK.LV
                    } else if (e < 52796) {
                        if (52769 <= e && e <= 52795) return n.CLUSTER_BREAK.LVT
                    } else if (e === 52796) return n.CLUSTER_BREAK.LV
                } else if (e < 52964) {
                    if (e < 52880) {
                        if (e < 52825) {
                            if (e < 52824) {
                                if (52797 <= e && e <= 52823) return n.CLUSTER_BREAK.LVT
                            } else if (e === 52824) return n.CLUSTER_BREAK.LV
                        } else if (e < 52852) {
                            if (52825 <= e && e <= 52851) return n.CLUSTER_BREAK.LVT
                        } else if (e < 52853) {
                            if (e === 52852) return n.CLUSTER_BREAK.LV
                        } else if (52853 <= e && e <= 52879) return n.CLUSTER_BREAK.LVT
                    } else if (e < 52909) {
                        if (e < 52881) {
                            if (e === 52880) return n.CLUSTER_BREAK.LV
                        } else if (e < 52908) {
                            if (52881 <= e && e <= 52907) return n.CLUSTER_BREAK.LVT
                        } else if (e === 52908) return n.CLUSTER_BREAK.LV
                    } else if (e < 52936) {
                        if (52909 <= e && e <= 52935) return n.CLUSTER_BREAK.LVT
                    } else if (e < 52937) {
                        if (e === 52936) return n.CLUSTER_BREAK.LV
                    } else if (52937 <= e && e <= 52963) return n.CLUSTER_BREAK.LVT
                } else if (e < 53021) {
                    if (e < 52992) {
                        if (e < 52965) {
                            if (e === 52964) return n.CLUSTER_BREAK.LV
                        } else if (52965 <= e && e <= 52991) return n.CLUSTER_BREAK.LVT
                    } else if (e < 52993) {
                        if (e === 52992) return n.CLUSTER_BREAK.LV
                    } else if (e < 53020) {
                        if (52993 <= e && e <= 53019) return n.CLUSTER_BREAK.LVT
                    } else if (e === 53020) return n.CLUSTER_BREAK.LV
                } else if (e < 53076) {
                    if (e < 53048) {
                        if (53021 <= e && e <= 53047) return n.CLUSTER_BREAK.LVT
                    } else if (e < 53049) {
                        if (e === 53048) return n.CLUSTER_BREAK.LV
                    } else if (53049 <= e && e <= 53075) return n.CLUSTER_BREAK.LVT
                } else if (e < 53077) {
                    if (e === 53076) return n.CLUSTER_BREAK.LV
                } else if (e < 53104) {
                    if (53077 <= e && e <= 53103) return n.CLUSTER_BREAK.LVT
                } else if (e === 53104) return n.CLUSTER_BREAK.LV
            } else if (e < 53412) {
                if (e < 53245) {
                    if (e < 53188) {
                        if (e < 53133) {
                            if (e < 53132) {
                                if (53105 <= e && e <= 53131) return n.CLUSTER_BREAK.LVT
                            } else if (e === 53132) return n.CLUSTER_BREAK.LV
                        } else if (e < 53160) {
                            if (53133 <= e && e <= 53159) return n.CLUSTER_BREAK.LVT
                        } else if (e < 53161) {
                            if (e === 53160) return n.CLUSTER_BREAK.LV
                        } else if (53161 <= e && e <= 53187) return n.CLUSTER_BREAK.LVT
                    } else if (e < 53216) {
                        if (e < 53189) {
                            if (e === 53188) return n.CLUSTER_BREAK.LV
                        } else if (53189 <= e && e <= 53215) return n.CLUSTER_BREAK.LVT
                    } else if (e < 53217) {
                        if (e === 53216) return n.CLUSTER_BREAK.LV
                    } else if (e < 53244) {
                        if (53217 <= e && e <= 53243) return n.CLUSTER_BREAK.LVT
                    } else if (e === 53244) return n.CLUSTER_BREAK.LV
                } else if (e < 53328) {
                    if (e < 53273) {
                        if (e < 53272) {
                            if (53245 <= e && e <= 53271) return n.CLUSTER_BREAK.LVT
                        } else if (e === 53272) return n.CLUSTER_BREAK.LV
                    } else if (e < 53300) {
                        if (53273 <= e && e <= 53299) return n.CLUSTER_BREAK.LVT
                    } else if (e < 53301) {
                        if (e === 53300) return n.CLUSTER_BREAK.LV
                    } else if (53301 <= e && e <= 53327) return n.CLUSTER_BREAK.LVT
                } else if (e < 53357) {
                    if (e < 53329) {
                        if (e === 53328) return n.CLUSTER_BREAK.LV
                    } else if (e < 53356) {
                        if (53329 <= e && e <= 53355) return n.CLUSTER_BREAK.LVT
                    } else if (e === 53356) return n.CLUSTER_BREAK.LV
                } else if (e < 53384) {
                    if (53357 <= e && e <= 53383) return n.CLUSTER_BREAK.LVT
                } else if (e < 53385) {
                    if (e === 53384) return n.CLUSTER_BREAK.LV
                } else if (53385 <= e && e <= 53411) return n.CLUSTER_BREAK.LVT
            } else if (e < 53553) {
                if (e < 53469) {
                    if (e < 53440) {
                        if (e < 53413) {
                            if (e === 53412) return n.CLUSTER_BREAK.LV
                        } else if (53413 <= e && e <= 53439) return n.CLUSTER_BREAK.LVT
                    } else if (e < 53441) {
                        if (e === 53440) return n.CLUSTER_BREAK.LV
                    } else if (e < 53468) {
                        if (53441 <= e && e <= 53467) return n.CLUSTER_BREAK.LVT
                    } else if (e === 53468) return n.CLUSTER_BREAK.LV
                } else if (e < 53524) {
                    if (e < 53496) {
                        if (53469 <= e && e <= 53495) return n.CLUSTER_BREAK.LVT
                    } else if (e < 53497) {
                        if (e === 53496) return n.CLUSTER_BREAK.LV
                    } else if (53497 <= e && e <= 53523) return n.CLUSTER_BREAK.LVT
                } else if (e < 53525) {
                    if (e === 53524) return n.CLUSTER_BREAK.LV
                } else if (e < 53552) {
                    if (53525 <= e && e <= 53551) return n.CLUSTER_BREAK.LVT
                } else if (e === 53552) return n.CLUSTER_BREAK.LV
            } else if (e < 53636) {
                if (e < 53581) {
                    if (e < 53580) {
                        if (53553 <= e && e <= 53579) return n.CLUSTER_BREAK.LVT
                    } else if (e === 53580) return n.CLUSTER_BREAK.LV
                } else if (e < 53608) {
                    if (53581 <= e && e <= 53607) return n.CLUSTER_BREAK.LVT
                } else if (e < 53609) {
                    if (e === 53608) return n.CLUSTER_BREAK.LV
                } else if (53609 <= e && e <= 53635) return n.CLUSTER_BREAK.LVT
            } else if (e < 53665) {
                if (e < 53637) {
                    if (e === 53636) return n.CLUSTER_BREAK.LV
                } else if (e < 53664) {
                    if (53637 <= e && e <= 53663) return n.CLUSTER_BREAK.LVT
                } else if (e === 53664) return n.CLUSTER_BREAK.LV
            } else if (e < 53692) {
                if (53665 <= e && e <= 53691) return n.CLUSTER_BREAK.LVT
            } else if (e < 53693) {
                if (e === 53692) return n.CLUSTER_BREAK.LV
            } else if (53693 <= e && e <= 53719) return n.CLUSTER_BREAK.LVT
        } else if (e < 70459) {
            if (e < 54897) {
                if (e < 54308) {
                    if (e < 54001) {
                        if (e < 53860) {
                            if (e < 53777) {
                                if (e < 53748) {
                                    if (e < 53721) {
                                        if (e === 53720) return n.CLUSTER_BREAK.LV
                                    } else if (53721 <= e && e <= 53747) return n.CLUSTER_BREAK.LVT
                                } else if (e < 53749) {
                                    if (e === 53748) return n.CLUSTER_BREAK.LV
                                } else if (e < 53776) {
                                    if (53749 <= e && e <= 53775) return n.CLUSTER_BREAK.LVT
                                } else if (e === 53776) return n.CLUSTER_BREAK.LV
                            } else if (e < 53805) {
                                if (e < 53804) {
                                    if (53777 <= e && e <= 53803) return n.CLUSTER_BREAK.LVT
                                } else if (e === 53804) return n.CLUSTER_BREAK.LV
                            } else if (e < 53832) {
                                if (53805 <= e && e <= 53831) return n.CLUSTER_BREAK.LVT
                            } else if (e < 53833) {
                                if (e === 53832) return n.CLUSTER_BREAK.LV
                            } else if (53833 <= e && e <= 53859) return n.CLUSTER_BREAK.LVT
                        } else if (e < 53917) {
                            if (e < 53888) {
                                if (e < 53861) {
                                    if (e === 53860) return n.CLUSTER_BREAK.LV
                                } else if (53861 <= e && e <= 53887) return n.CLUSTER_BREAK.LVT
                            } else if (e < 53889) {
                                if (e === 53888) return n.CLUSTER_BREAK.LV
                            } else if (e < 53916) {
                                if (53889 <= e && e <= 53915) return n.CLUSTER_BREAK.LVT
                            } else if (e === 53916) return n.CLUSTER_BREAK.LV
                        } else if (e < 53972) {
                            if (e < 53944) {
                                if (53917 <= e && e <= 53943) return n.CLUSTER_BREAK.LVT
                            } else if (e < 53945) {
                                if (e === 53944) return n.CLUSTER_BREAK.LV
                            } else if (53945 <= e && e <= 53971) return n.CLUSTER_BREAK.LVT
                        } else if (e < 53973) {
                            if (e === 53972) return n.CLUSTER_BREAK.LV
                        } else if (e < 54e3) {
                            if (53973 <= e && e <= 53999) return n.CLUSTER_BREAK.LVT
                        } else if (e === 54e3) return n.CLUSTER_BREAK.LV
                    } else if (e < 54141) {
                        if (e < 54084) {
                            if (e < 54029) {
                                if (e < 54028) {
                                    if (54001 <= e && e <= 54027) return n.CLUSTER_BREAK.LVT
                                } else if (e === 54028) return n.CLUSTER_BREAK.LV
                            } else if (e < 54056) {
                                if (54029 <= e && e <= 54055) return n.CLUSTER_BREAK.LVT
                            } else if (e < 54057) {
                                if (e === 54056) return n.CLUSTER_BREAK.LV
                            } else if (54057 <= e && e <= 54083) return n.CLUSTER_BREAK.LVT
                        } else if (e < 54112) {
                            if (e < 54085) {
                                if (e === 54084) return n.CLUSTER_BREAK.LV
                            } else if (54085 <= e && e <= 54111) return n.CLUSTER_BREAK.LVT
                        } else if (e < 54113) {
                            if (e === 54112) return n.CLUSTER_BREAK.LV
                        } else if (e < 54140) {
                            if (54113 <= e && e <= 54139) return n.CLUSTER_BREAK.LVT
                        } else if (e === 54140) return n.CLUSTER_BREAK.LV
                    } else if (e < 54224) {
                        if (e < 54169) {
                            if (e < 54168) {
                                if (54141 <= e && e <= 54167) return n.CLUSTER_BREAK.LVT
                            } else if (e === 54168) return n.CLUSTER_BREAK.LV
                        } else if (e < 54196) {
                            if (54169 <= e && e <= 54195) return n.CLUSTER_BREAK.LVT
                        } else if (e < 54197) {
                            if (e === 54196) return n.CLUSTER_BREAK.LV
                        } else if (54197 <= e && e <= 54223) return n.CLUSTER_BREAK.LVT
                    } else if (e < 54253) {
                        if (e < 54225) {
                            if (e === 54224) return n.CLUSTER_BREAK.LV
                        } else if (e < 54252) {
                            if (54225 <= e && e <= 54251) return n.CLUSTER_BREAK.LVT
                        } else if (e === 54252) return n.CLUSTER_BREAK.LV
                    } else if (e < 54280) {
                        if (54253 <= e && e <= 54279) return n.CLUSTER_BREAK.LVT
                    } else if (e < 54281) {
                        if (e === 54280) return n.CLUSTER_BREAK.LV
                    } else if (54281 <= e && e <= 54307) return n.CLUSTER_BREAK.LVT
                } else if (e < 54589) {
                    if (e < 54448) {
                        if (e < 54365) {
                            if (e < 54336) {
                                if (e < 54309) {
                                    if (e === 54308) return n.CLUSTER_BREAK.LV
                                } else if (54309 <= e && e <= 54335) return n.CLUSTER_BREAK.LVT
                            } else if (e < 54337) {
                                if (e === 54336) return n.CLUSTER_BREAK.LV
                            } else if (e < 54364) {
                                if (54337 <= e && e <= 54363) return n.CLUSTER_BREAK.LVT
                            } else if (e === 54364) return n.CLUSTER_BREAK.LV
                        } else if (e < 54393) {
                            if (e < 54392) {
                                if (54365 <= e && e <= 54391) return n.CLUSTER_BREAK.LVT
                            } else if (e === 54392) return n.CLUSTER_BREAK.LV
                        } else if (e < 54420) {
                            if (54393 <= e && e <= 54419) return n.CLUSTER_BREAK.LVT
                        } else if (e < 54421) {
                            if (e === 54420) return n.CLUSTER_BREAK.LV
                        } else if (54421 <= e && e <= 54447) return n.CLUSTER_BREAK.LVT
                    } else if (e < 54505) {
                        if (e < 54476) {
                            if (e < 54449) {
                                if (e === 54448) return n.CLUSTER_BREAK.LV
                            } else if (54449 <= e && e <= 54475) return n.CLUSTER_BREAK.LVT
                        } else if (e < 54477) {
                            if (e === 54476) return n.CLUSTER_BREAK.LV
                        } else if (e < 54504) {
                            if (54477 <= e && e <= 54503) return n.CLUSTER_BREAK.LVT
                        } else if (e === 54504) return n.CLUSTER_BREAK.LV
                    } else if (e < 54560) {
                        if (e < 54532) {
                            if (54505 <= e && e <= 54531) return n.CLUSTER_BREAK.LVT
                        } else if (e < 54533) {
                            if (e === 54532) return n.CLUSTER_BREAK.LV
                        } else if (54533 <= e && e <= 54559) return n.CLUSTER_BREAK.LVT
                    } else if (e < 54561) {
                        if (e === 54560) return n.CLUSTER_BREAK.LV
                    } else if (e < 54588) {
                        if (54561 <= e && e <= 54587) return n.CLUSTER_BREAK.LVT
                    } else if (e === 54588) return n.CLUSTER_BREAK.LV
                } else if (e < 54756) {
                    if (e < 54672) {
                        if (e < 54617) {
                            if (e < 54616) {
                                if (54589 <= e && e <= 54615) return n.CLUSTER_BREAK.LVT
                            } else if (e === 54616) return n.CLUSTER_BREAK.LV
                        } else if (e < 54644) {
                            if (54617 <= e && e <= 54643) return n.CLUSTER_BREAK.LVT
                        } else if (e < 54645) {
                            if (e === 54644) return n.CLUSTER_BREAK.LV
                        } else if (54645 <= e && e <= 54671) return n.CLUSTER_BREAK.LVT
                    } else if (e < 54701) {
                        if (e < 54673) {
                            if (e === 54672) return n.CLUSTER_BREAK.LV
                        } else if (e < 54700) {
                            if (54673 <= e && e <= 54699) return n.CLUSTER_BREAK.LVT
                        } else if (e === 54700) return n.CLUSTER_BREAK.LV
                    } else if (e < 54728) {
                        if (54701 <= e && e <= 54727) return n.CLUSTER_BREAK.LVT
                    } else if (e < 54729) {
                        if (e === 54728) return n.CLUSTER_BREAK.LV
                    } else if (54729 <= e && e <= 54755) return n.CLUSTER_BREAK.LVT
                } else if (e < 54813) {
                    if (e < 54784) {
                        if (e < 54757) {
                            if (e === 54756) return n.CLUSTER_BREAK.LV
                        } else if (54757 <= e && e <= 54783) return n.CLUSTER_BREAK.LVT
                    } else if (e < 54785) {
                        if (e === 54784) return n.CLUSTER_BREAK.LV
                    } else if (e < 54812) {
                        if (54785 <= e && e <= 54811) return n.CLUSTER_BREAK.LVT
                    } else if (e === 54812) return n.CLUSTER_BREAK.LV
                } else if (e < 54868) {
                    if (e < 54840) {
                        if (54813 <= e && e <= 54839) return n.CLUSTER_BREAK.LVT
                    } else if (e < 54841) {
                        if (e === 54840) return n.CLUSTER_BREAK.LV
                    } else if (54841 <= e && e <= 54867) return n.CLUSTER_BREAK.LVT
                } else if (e < 54869) {
                    if (e === 54868) return n.CLUSTER_BREAK.LV
                } else if (e < 54896) {
                    if (54869 <= e && e <= 54895) return n.CLUSTER_BREAK.LVT
                } else if (e === 54896) return n.CLUSTER_BREAK.LV
            } else if (e < 69632) {
                if (e < 55216) {
                    if (e < 55037) {
                        if (e < 54980) {
                            if (e < 54925) {
                                if (e < 54924) {
                                    if (54897 <= e && e <= 54923) return n.CLUSTER_BREAK.LVT
                                } else if (e === 54924) return n.CLUSTER_BREAK.LV
                            } else if (e < 54952) {
                                if (54925 <= e && e <= 54951) return n.CLUSTER_BREAK.LVT
                            } else if (e < 54953) {
                                if (e === 54952) return n.CLUSTER_BREAK.LV
                            } else if (54953 <= e && e <= 54979) return n.CLUSTER_BREAK.LVT
                        } else if (e < 55008) {
                            if (e < 54981) {
                                if (e === 54980) return n.CLUSTER_BREAK.LV
                            } else if (54981 <= e && e <= 55007) return n.CLUSTER_BREAK.LVT
                        } else if (e < 55009) {
                            if (e === 55008) return n.CLUSTER_BREAK.LV
                        } else if (e < 55036) {
                            if (55009 <= e && e <= 55035) return n.CLUSTER_BREAK.LVT
                        } else if (e === 55036) return n.CLUSTER_BREAK.LV
                    } else if (e < 55120) {
                        if (e < 55065) {
                            if (e < 55064) {
                                if (55037 <= e && e <= 55063) return n.CLUSTER_BREAK.LVT
                            } else if (e === 55064) return n.CLUSTER_BREAK.LV
                        } else if (e < 55092) {
                            if (55065 <= e && e <= 55091) return n.CLUSTER_BREAK.LVT
                        } else if (e < 55093) {
                            if (e === 55092) return n.CLUSTER_BREAK.LV
                        } else if (55093 <= e && e <= 55119) return n.CLUSTER_BREAK.LVT
                    } else if (e < 55149) {
                        if (e < 55121) {
                            if (e === 55120) return n.CLUSTER_BREAK.LV
                        } else if (e < 55148) {
                            if (55121 <= e && e <= 55147) return n.CLUSTER_BREAK.LVT
                        } else if (e === 55148) return n.CLUSTER_BREAK.LV
                    } else if (e < 55176) {
                        if (55149 <= e && e <= 55175) return n.CLUSTER_BREAK.LVT
                    } else if (e < 55177) {
                        if (e === 55176) return n.CLUSTER_BREAK.LV
                    } else if (55177 <= e && e <= 55203) return n.CLUSTER_BREAK.LVT
                } else if (e < 68097) {
                    if (e < 65279) {
                        if (e < 64286) {
                            if (e < 55243) {
                                if (55216 <= e && e <= 55238) return n.CLUSTER_BREAK.V
                            } else if (55243 <= e && e <= 55291) return n.CLUSTER_BREAK.T
                        } else if (e < 65024) {
                            if (e === 64286) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 65056) {
                            if (65024 <= e && e <= 65039) return n.CLUSTER_BREAK.EXTEND
                        } else if (65056 <= e && e <= 65071) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 66045) {
                        if (e < 65438) {
                            if (e === 65279) return n.CLUSTER_BREAK.CONTROL
                        } else if (e < 65520) {
                            if (65438 <= e && e <= 65439) return n.CLUSTER_BREAK.EXTEND
                        } else if (65520 <= e && e <= 65531) return n.CLUSTER_BREAK.CONTROL
                    } else if (e < 66272) {
                        if (e === 66045) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 66422) {
                        if (e === 66272) return n.CLUSTER_BREAK.EXTEND
                    } else if (66422 <= e && e <= 66426) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 68325) {
                    if (e < 68108) {
                        if (e < 68101) {
                            if (68097 <= e && e <= 68099) return n.CLUSTER_BREAK.EXTEND
                        } else if (68101 <= e && e <= 68102) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 68152) {
                        if (68108 <= e && e <= 68111) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 68159) {
                        if (68152 <= e && e <= 68154) return n.CLUSTER_BREAK.EXTEND
                    } else if (e === 68159) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 69373) {
                    if (e < 68900) {
                        if (68325 <= e && e <= 68326) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 69291) {
                        if (68900 <= e && e <= 68903) return n.CLUSTER_BREAK.EXTEND
                    } else if (69291 <= e && e <= 69292) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 69446) {
                    if (69373 <= e && e <= 69375) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 69506) {
                    if (69446 <= e && e <= 69456) return n.CLUSTER_BREAK.EXTEND
                } else if (69506 <= e && e <= 69509) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 70016) {
                if (e < 69815) {
                    if (e < 69747) {
                        if (e < 69634) {
                            if (e === 69632) return n.CLUSTER_BREAK.SPACINGMARK;
                            if (e === 69633) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 69688) {
                            if (e === 69634) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 69744) {
                            if (69688 <= e && e <= 69702) return n.CLUSTER_BREAK.EXTEND
                        } else if (e === 69744) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 69762) {
                        if (e < 69759) {
                            if (69747 <= e && e <= 69748) return n.CLUSTER_BREAK.EXTEND
                        } else if (69759 <= e && e <= 69761) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 69808) {
                        if (e === 69762) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 69811) {
                        if (69808 <= e && e <= 69810) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (69811 <= e && e <= 69814) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 69888)
                    if (e < 69821) {
                        if (e < 69817) {
                            if (69815 <= e && e <= 69816) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (69817 <= e && e <= 69818) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 69826) {
                    if (e === 69821) return n.CLUSTER_BREAK.PREPEND
                } else {
                    if (e === 69826) return n.CLUSTER_BREAK.EXTEND;
                    if (e === 69837) return n.CLUSTER_BREAK.PREPEND
                } else if (e < 69933) {
                    if (e < 69927) {
                        if (69888 <= e && e <= 69890) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 69932) {
                        if (69927 <= e && e <= 69931) return n.CLUSTER_BREAK.EXTEND
                    } else if (e === 69932) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 69957) {
                    if (69933 <= e && e <= 69940) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 70003) {
                    if (69957 <= e && e <= 69958) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e === 70003) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 70194) {
                if (e < 70082) {
                    if (e < 70067) {
                        if (e < 70018) {
                            if (70016 <= e && e <= 70017) return n.CLUSTER_BREAK.EXTEND
                        } else if (e === 70018) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 70070) {
                        if (70067 <= e && e <= 70069) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 70079) {
                        if (70070 <= e && e <= 70078) return n.CLUSTER_BREAK.EXTEND
                    } else if (70079 <= e && e <= 70080) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 70095) {
                    if (e < 70089) {
                        if (70082 <= e && e <= 70083) return n.CLUSTER_BREAK.PREPEND
                    } else if (e < 70094) {
                        if (70089 <= e && e <= 70092) return n.CLUSTER_BREAK.EXTEND
                    } else if (e === 70094) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 70188) {
                    if (e === 70095) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 70191) {
                    if (70188 <= e && e <= 70190) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (70191 <= e && e <= 70193) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 70209) {
                if (e < 70197) {
                    if (e < 70196) {
                        if (70194 <= e && e <= 70195) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e === 70196) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 70198) {
                    if (e === 70197) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 70206) {
                    if (70198 <= e && e <= 70199) return n.CLUSTER_BREAK.EXTEND
                } else if (e === 70206) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 70371) {
                if (e < 70367) {
                    if (e === 70209) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 70368) {
                    if (e === 70367) return n.CLUSTER_BREAK.EXTEND
                } else if (70368 <= e && e <= 70370) return n.CLUSTER_BREAK.SPACINGMARK
            } else if (e < 70400) {
                if (70371 <= e && e <= 70378) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 70402) {
                if (70400 <= e && e <= 70401) return n.CLUSTER_BREAK.EXTEND
            } else if (70402 <= e && e <= 70403) return n.CLUSTER_BREAK.SPACINGMARK
        } else if (e < 72343) {
            if (e < 71339) {
                if (e < 70841) {
                    if (e < 70512) {
                        if (e < 70471) {
                            if (e < 70463) {
                                if (e < 70462) {
                                    if (70459 <= e && e <= 70460) return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 70462) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 70464) {
                                if (e === 70463) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 70465) {
                                if (e === 70464) return n.CLUSTER_BREAK.EXTEND
                            } else if (70465 <= e && e <= 70468) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 70487) {
                            if (e < 70475) {
                                if (70471 <= e && e <= 70472) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (70475 <= e && e <= 70477) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 70498) {
                            if (e === 70487) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 70502) {
                            if (70498 <= e && e <= 70499) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (70502 <= e && e <= 70508) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 70725) {
                        if (e < 70712) {
                            if (e < 70709) {
                                if (70512 <= e && e <= 70516) return n.CLUSTER_BREAK.EXTEND
                            } else if (70709 <= e && e <= 70711) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 70720) {
                            if (70712 <= e && e <= 70719) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 70722) {
                            if (70720 <= e && e <= 70721) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (70722 <= e && e <= 70724) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 70832) {
                        if (e < 70726) {
                            if (e === 70725) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e === 70726 || e === 70750) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 70833) {
                        if (e === 70832) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 70835) {
                        if (70833 <= e && e <= 70834) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (70835 <= e && e <= 70840) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 71096) {
                    if (e < 70847)
                        if (e < 70843) {
                            if (e === 70841) return n.CLUSTER_BREAK.SPACINGMARK;
                            if (e === 70842) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 70845) {
                        if (70843 <= e && e <= 70844) return n.CLUSTER_BREAK.SPACINGMARK
                    } else {
                        if (e === 70845) return n.CLUSTER_BREAK.EXTEND;
                        if (e === 70846) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 71087) {
                        if (e < 70849) {
                            if (70847 <= e && e <= 70848) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 70850) {
                            if (e === 70849) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (70850 <= e && e <= 70851) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 71088) {
                        if (e === 71087) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 71090) {
                        if (71088 <= e && e <= 71089) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (71090 <= e && e <= 71093) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 71216) {
                    if (e < 71102) {
                        if (e < 71100) {
                            if (71096 <= e && e <= 71099) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (71100 <= e && e <= 71101) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 71103) {
                        if (e === 71102) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 71132) {
                        if (71103 <= e && e <= 71104) return n.CLUSTER_BREAK.EXTEND
                    } else if (71132 <= e && e <= 71133) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 71229) {
                    if (e < 71219) {
                        if (71216 <= e && e <= 71218) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 71227) {
                        if (71219 <= e && e <= 71226) return n.CLUSTER_BREAK.EXTEND
                    } else if (71227 <= e && e <= 71228) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 71230) {
                    if (e === 71229) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 71231) {
                    if (e === 71230) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (71231 <= e && e <= 71232) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 71999)
                if (e < 71463) {
                    if (e < 71350) {
                        if (e < 71341) {
                            if (e === 71339) return n.CLUSTER_BREAK.EXTEND;
                            if (e === 71340) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 71342) {
                            if (e === 71341) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 71344) {
                            if (71342 <= e && e <= 71343) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (71344 <= e && e <= 71349) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 71453) {
                        if (e === 71350) return n.CLUSTER_BREAK.SPACINGMARK;
                        if (e === 71351) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 71458) {
                        if (71453 <= e && e <= 71455) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 71462) {
                        if (71458 <= e && e <= 71461) return n.CLUSTER_BREAK.EXTEND
                    } else if (e === 71462) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 71984) {
                if (e < 71727) {
                    if (e < 71724) {
                        if (71463 <= e && e <= 71467) return n.CLUSTER_BREAK.EXTEND
                    } else if (71724 <= e && e <= 71726) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 71736) {
                    if (71727 <= e && e <= 71735) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 71737) {
                    if (e === 71736) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (71737 <= e && e <= 71738) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 71995) {
                if (e < 71985) {
                    if (e === 71984) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 71991) {
                    if (71985 <= e && e <= 71989) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (71991 <= e && e <= 71992) return n.CLUSTER_BREAK.SPACINGMARK
            } else if (e < 71997) {
                if (71995 <= e && e <= 71996) return n.CLUSTER_BREAK.EXTEND
            } else {
                if (e === 71997) return n.CLUSTER_BREAK.SPACINGMARK;
                if (e === 71998) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 72193)
                if (e < 72145)
                    if (e < 72001) {
                        if (e === 71999) return n.CLUSTER_BREAK.PREPEND;
                        if (e === 72e3) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 72002) {
                if (e === 72001) return n.CLUSTER_BREAK.PREPEND
            } else {
                if (e === 72002) return n.CLUSTER_BREAK.SPACINGMARK;
                if (e === 72003) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 72156) {
                if (e < 72148) {
                    if (72145 <= e && e <= 72147) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 72154) {
                    if (72148 <= e && e <= 72151) return n.CLUSTER_BREAK.EXTEND
                } else if (72154 <= e && e <= 72155) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 72160) {
                if (72156 <= e && e <= 72159) return n.CLUSTER_BREAK.SPACINGMARK
            } else {
                if (e === 72160) return n.CLUSTER_BREAK.EXTEND;
                if (e === 72164) return n.CLUSTER_BREAK.SPACINGMARK
            } else if (e < 72263) {
                if (e < 72249) {
                    if (e < 72243) {
                        if (72193 <= e && e <= 72202) return n.CLUSTER_BREAK.EXTEND
                    } else if (72243 <= e && e <= 72248) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 72250) {
                    if (e === 72249) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 72251) {
                    if (e === 72250) return n.CLUSTER_BREAK.PREPEND
                } else if (72251 <= e && e <= 72254) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 72281) {
                if (e < 72273) {
                    if (e === 72263) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 72279) {
                    if (72273 <= e && e <= 72278) return n.CLUSTER_BREAK.EXTEND
                } else if (72279 <= e && e <= 72280) return n.CLUSTER_BREAK.SPACINGMARK
            } else if (e < 72324) {
                if (72281 <= e && e <= 72283) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 72330) {
                if (72324 <= e && e <= 72329) return n.CLUSTER_BREAK.PREPEND
            } else if (72330 <= e && e <= 72342) return n.CLUSTER_BREAK.EXTEND
        } else if (e < 94033) {
            if (e < 73104) {
                if (e < 72881) {
                    if (e < 72766) {
                        if (e < 72751) {
                            if (e < 72344) {
                                if (e === 72343) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (72344 <= e && e <= 72345) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 72752) {
                            if (e === 72751) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 72760) {
                            if (72752 <= e && e <= 72758) return n.CLUSTER_BREAK.EXTEND
                        } else if (72760 <= e && e <= 72765) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 72850) {
                        if (e === 72766) return n.CLUSTER_BREAK.SPACINGMARK;
                        if (e === 72767) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 72873) {
                        if (72850 <= e && e <= 72871) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 72874) {
                        if (e === 72873) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (72874 <= e && e <= 72880) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 73018) {
                    if (e < 72884) {
                        if (e < 72882) {
                            if (e === 72881) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (72882 <= e && e <= 72883) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 72885) {
                        if (e === 72884) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 73009) {
                        if (72885 <= e && e <= 72886) return n.CLUSTER_BREAK.EXTEND
                    } else if (73009 <= e && e <= 73014) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 73030) {
                    if (e < 73020) {
                        if (e === 73018) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 73023) {
                        if (73020 <= e && e <= 73021) return n.CLUSTER_BREAK.EXTEND
                    } else if (73023 <= e && e <= 73029) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 73031) {
                    if (e === 73030) return n.CLUSTER_BREAK.PREPEND
                } else if (e < 73098) {
                    if (e === 73031) return n.CLUSTER_BREAK.EXTEND
                } else if (73098 <= e && e <= 73102) return n.CLUSTER_BREAK.SPACINGMARK
            } else if (e < 73526) {
                if (e < 73459)
                    if (e < 73109) {
                        if (e < 73107) {
                            if (73104 <= e && e <= 73105) return n.CLUSTER_BREAK.EXTEND
                        } else if (73107 <= e && e <= 73108) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 73110) {
                    if (e === 73109) return n.CLUSTER_BREAK.EXTEND
                } else {
                    if (e === 73110) return n.CLUSTER_BREAK.SPACINGMARK;
                    if (e === 73111) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 73474) {
                    if (e < 73461) {
                        if (73459 <= e && e <= 73460) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 73472) {
                        if (73461 <= e && e <= 73462) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (73472 <= e && e <= 73473) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 73475) {
                    if (e === 73474) return n.CLUSTER_BREAK.PREPEND
                } else if (e < 73524) {
                    if (e === 73475) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (73524 <= e && e <= 73525) return n.CLUSTER_BREAK.SPACINGMARK
            } else if (e < 78896)
                if (e < 73536) {
                    if (e < 73534) {
                        if (73526 <= e && e <= 73530) return n.CLUSTER_BREAK.EXTEND
                    } else if (73534 <= e && e <= 73535) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 73537) {
                if (e === 73536) return n.CLUSTER_BREAK.EXTEND
            } else {
                if (e === 73537) return n.CLUSTER_BREAK.SPACINGMARK;
                if (e === 73538) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 92912) {
                if (e < 78912) {
                    if (78896 <= e && e <= 78911) return n.CLUSTER_BREAK.CONTROL
                } else if (e < 78919) {
                    if (e === 78912) return n.CLUSTER_BREAK.EXTEND
                } else if (78919 <= e && e <= 78933) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 92976) {
                if (92912 <= e && e <= 92916) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 94031) {
                if (92976 <= e && e <= 92982) return n.CLUSTER_BREAK.EXTEND
            } else if (e === 94031) return n.CLUSTER_BREAK.EXTEND
        } else if (e < 121476) {
            if (e < 119143)
                if (e < 113824) {
                    if (e < 94180) {
                        if (e < 94095) {
                            if (94033 <= e && e <= 94087) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (94095 <= e && e <= 94098) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 94192) {
                        if (e === 94180) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 113821) {
                        if (94192 <= e && e <= 94193) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (113821 <= e && e <= 113822) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 118576) {
                if (e < 118528) {
                    if (113824 <= e && e <= 113827) return n.CLUSTER_BREAK.CONTROL
                } else if (118528 <= e && e <= 118573) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 119141) {
                if (118576 <= e && e <= 118598) return n.CLUSTER_BREAK.EXTEND
            } else {
                if (e === 119141) return n.CLUSTER_BREAK.EXTEND;
                if (e === 119142) return n.CLUSTER_BREAK.SPACINGMARK
            } else if (e < 119173) {
                if (e < 119150) {
                    if (e < 119149) {
                        if (119143 <= e && e <= 119145) return n.CLUSTER_BREAK.EXTEND
                    } else if (e === 119149) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 119155) {
                    if (119150 <= e && e <= 119154) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 119163) {
                    if (119155 <= e && e <= 119162) return n.CLUSTER_BREAK.CONTROL
                } else if (119163 <= e && e <= 119170) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 121344) {
                if (e < 119210) {
                    if (119173 <= e && e <= 119179) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 119362) {
                    if (119210 <= e && e <= 119213) return n.CLUSTER_BREAK.EXTEND
                } else if (119362 <= e && e <= 119364) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 121403) {
                if (121344 <= e && e <= 121398) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 121461) {
                if (121403 <= e && e <= 121452) return n.CLUSTER_BREAK.EXTEND
            } else if (e === 121461) return n.CLUSTER_BREAK.EXTEND
        } else if (e < 123628) {
            if (e < 122907) {
                if (e < 121505) {
                    if (e < 121499) {
                        if (e === 121476) return n.CLUSTER_BREAK.EXTEND
                    } else if (121499 <= e && e <= 121503) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 122880) {
                    if (121505 <= e && e <= 121519) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 122888) {
                    if (122880 <= e && e <= 122886) return n.CLUSTER_BREAK.EXTEND
                } else if (122888 <= e && e <= 122904) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 123023) {
                if (e < 122915) {
                    if (122907 <= e && e <= 122913) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 122918) {
                    if (122915 <= e && e <= 122916) return n.CLUSTER_BREAK.EXTEND
                } else if (122918 <= e && e <= 122922) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 123184) {
                if (e === 123023) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 123566) {
                if (123184 <= e && e <= 123190) return n.CLUSTER_BREAK.EXTEND
            } else if (e === 123566) return n.CLUSTER_BREAK.EXTEND
        } else if (e < 127995) {
            if (e < 125136) {
                if (e < 124140) {
                    if (123628 <= e && e <= 123631) return n.CLUSTER_BREAK.EXTEND
                } else if (124140 <= e && e <= 124143) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 125252) {
                if (125136 <= e && e <= 125142) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 127462) {
                if (125252 <= e && e <= 125258) return n.CLUSTER_BREAK.EXTEND
            } else if (127462 <= e && e <= 127487) return n.CLUSTER_BREAK.REGIONAL_INDICATOR
        } else if (e < 917632) {
            if (e < 917504) {
                if (127995 <= e && e <= 127999) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 917536) {
                if (917504 <= e && e <= 917535) return n.CLUSTER_BREAK.CONTROL
            } else if (917536 <= e && e <= 917631) return n.CLUSTER_BREAK.EXTEND
        } else if (e < 917760) {
            if (917632 <= e && e <= 917759) return n.CLUSTER_BREAK.CONTROL
        } else if (e < 918e3) {
            if (917760 <= e && e <= 917999) return n.CLUSTER_BREAK.EXTEND
        } else if (918e3 <= e && e <= 921599) return n.CLUSTER_BREAK.CONTROL;
        return n.CLUSTER_BREAK.OTHER
    }
    static getEmojiProperty(e) {
        if (e < 10160) {
            if (e < 9728) {
                if (e < 9e3) {
                    if (e < 8482) {
                        if (e < 8252) {
                            if (e === 169 || e === 174) return n.EXTENDED_PICTOGRAPHIC
                        } else if (e === 8252 || e === 8265) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 8596) {
                        if (e === 8482 || e === 8505) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 8617) {
                        if (8596 <= e && e <= 8601) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 8986) {
                        if (8617 <= e && e <= 8618) return n.EXTENDED_PICTOGRAPHIC
                    } else if (8986 <= e && e <= 8987) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 9410) {
                    if (e < 9167) {
                        if (e === 9e3 || e === 9096) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 9193) {
                        if (e === 9167) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 9208) {
                        if (9193 <= e && e <= 9203) return n.EXTENDED_PICTOGRAPHIC
                    } else if (9208 <= e && e <= 9210) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 9654) {
                    if (e < 9642) {
                        if (e === 9410) return n.EXTENDED_PICTOGRAPHIC
                    } else if (9642 <= e && e <= 9643) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 9664) {
                    if (e === 9654) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 9723) {
                    if (e === 9664) return n.EXTENDED_PICTOGRAPHIC
                } else if (9723 <= e && e <= 9726) return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 10035) {
                if (e < 10004) {
                    if (e < 9748) {
                        if (e < 9735) {
                            if (9728 <= e && e <= 9733) return n.EXTENDED_PICTOGRAPHIC
                        } else if (9735 <= e && e <= 9746) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 9872) {
                        if (9748 <= e && e <= 9861) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 9992) {
                        if (9872 <= e && e <= 9989) return n.EXTENDED_PICTOGRAPHIC
                    } else if (9992 <= e && e <= 10002) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 10013) {
                    if (e === 10004 || e === 10006) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 10017) {
                    if (e === 10013) return n.EXTENDED_PICTOGRAPHIC
                } else if (e === 10017 || e === 10024) return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 10067) {
                if (e < 10055) {
                    if (e < 10052) {
                        if (10035 <= e && e <= 10036) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e === 10052) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 10060) {
                    if (e === 10055) return n.EXTENDED_PICTOGRAPHIC
                } else if (e === 10060 || e === 10062) return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 10083) {
                if (e < 10071) {
                    if (10067 <= e && e <= 10069) return n.EXTENDED_PICTOGRAPHIC
                } else if (e === 10071) return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 10133) {
                if (10083 <= e && e <= 10087) return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 10145) {
                if (10133 <= e && e <= 10135) return n.EXTENDED_PICTOGRAPHIC
            } else if (e === 10145) return n.EXTENDED_PICTOGRAPHIC
        } else if (e < 127489) {
            if (e < 12951) {
                if (e < 11035) {
                    if (e < 10548) {
                        if (e === 10160 || e === 10175) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 11013) {
                        if (10548 <= e && e <= 10549) return n.EXTENDED_PICTOGRAPHIC
                    } else if (11013 <= e && e <= 11015) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 11093) {
                    if (e < 11088) {
                        if (11035 <= e && e <= 11036) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e === 11088) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 12336) {
                    if (e === 11093) return n.EXTENDED_PICTOGRAPHIC
                } else if (e === 12336 || e === 12349) return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 127340) {
                if (e < 126976) {
                    if (e === 12951 || e === 12953) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 127245) {
                    if (126976 <= e && e <= 127231) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 127279) {
                    if (127245 <= e && e <= 127247) return n.EXTENDED_PICTOGRAPHIC
                } else if (e === 127279) return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 127374) {
                if (e < 127358) {
                    if (127340 <= e && e <= 127345) return n.EXTENDED_PICTOGRAPHIC
                } else if (127358 <= e && e <= 127359) return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 127377) {
                if (e === 127374) return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 127405) {
                if (127377 <= e && e <= 127386) return n.EXTENDED_PICTOGRAPHIC
            } else if (127405 <= e && e <= 127461) return n.EXTENDED_PICTOGRAPHIC
        } else if (e < 128981) {
            if (e < 127561) {
                if (e < 127535) {
                    if (e < 127514) {
                        if (127489 <= e && e <= 127503) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e === 127514) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 127538) {
                    if (e === 127535) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 127548) {
                    if (127538 <= e && e <= 127546) return n.EXTENDED_PICTOGRAPHIC
                } else if (127548 <= e && e <= 127551) return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 128326) {
                if (e < 128e3) {
                    if (127561 <= e && e <= 127994) return n.EXTENDED_PICTOGRAPHIC
                } else if (128e3 <= e && e <= 128317) return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 128640) {
                if (128326 <= e && e <= 128591) return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 128884) {
                if (128640 <= e && e <= 128767) return n.EXTENDED_PICTOGRAPHIC
            } else if (128884 <= e && e <= 128895) return n.EXTENDED_PICTOGRAPHIC
        } else if (e < 129198) {
            if (e < 129096) {
                if (e < 129036) {
                    if (128981 <= e && e <= 129023) return n.EXTENDED_PICTOGRAPHIC
                } else if (129036 <= e && e <= 129039) return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 129114) {
                if (129096 <= e && e <= 129103) return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 129160) {
                if (129114 <= e && e <= 129119) return n.EXTENDED_PICTOGRAPHIC
            } else if (129160 <= e && e <= 129167) return n.EXTENDED_PICTOGRAPHIC
        } else if (e < 129340) {
            if (e < 129292) {
                if (129198 <= e && e <= 129279) return n.EXTENDED_PICTOGRAPHIC
            } else if (129292 <= e && e <= 129338) return n.EXTENDED_PICTOGRAPHIC
        } else if (e < 129351) {
            if (129340 <= e && e <= 129349) return n.EXTENDED_PICTOGRAPHIC
        } else if (e < 130048) {
            if (129351 <= e && e <= 129791) return n.EXTENDED_PICTOGRAPHIC
        } else if (130048 <= e && e <= 131069) return n.EXTENDED_PICTOGRAPHIC;
        return n.CLUSTER_BREAK.OTHER
    }
}
Dn.default = De;
var Nc = ie && ie.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
};
Object.defineProperty(Ea, "__esModule", {
    value: !0
});
const Dc = Nc(Dn);
var wc = Ea.default = Dc.default;
new wc;
const Ic = [{
    name: "Loader",
    tag: "@loader",
    directory: "loader",
    isPublic: !0
}, {
    name: "Connect",
    tag: "@connect",
    directory: "connect",
    isPublic: !0
}, {
    name: "Moderator",
    tag: "@moderator",
    directory: "moderator",
    isPublic: !0
}, {
    name: "ФутболK.O. Web",
    tag: "@teeko-web",
    directory: "teeko-web",
    isPublic: !0
}];
let Oc = [];
const Pc = [...Ic, ...Oc],
    ca = Object.prototype.toString;

function Pn(t) {
    switch (ca.call(t)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return !0;
        default:
            return et(t, Error)
    }
}

function Bt(t, e) {
    return ca.call(t) === `[object ${e}]`
}

function xa(t) {
    return Bt(t, "ErrorEvent")
}

function Ii(t) {
    return Bt(t, "DOMError")
}

function Vc(t) {
    return Bt(t, "DOMException")
}

function Pe(t) {
    return Bt(t, "String")
}

function Vn(t) {
    return typeof t == "object" && t !== null && "__sentry_template_string__" in t && "__sentry_template_values__" in t
}

function kn(t) {
    return t === null || Vn(t) || typeof t != "object" && typeof t != "function"
}

function bt(t) {
    return Bt(t, "Object")
}

function Br(t) {
    return typeof Event < "u" && et(t, Event)
}

function kc(t) {
    return typeof Element < "u" && et(t, Element)
}

function Mc(t) {
    return Bt(t, "RegExp")
}

function Kr(t) {
    return !!(t && t.then && typeof t.then == "function")
}

function Xc(t) {
    return bt(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
}

function et(t, e) {
    try {
        return t instanceof e
    } catch {
        return !1
    }
}

function _a(t) {
    return !!(typeof t == "object" && t !== null && (t.__isVue || t._isVue))
}

function ht(t, e = 0) {
    return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0,e)}...`
}

function Oi(t, e) {
    if (!Array.isArray(t)) return "";
    const r = [];
    for (let i = 0; i < t.length; i++) {
        const s = t[i];
        try {
            _a(s) ? r.push("[VueViewModel]") : r.push(String(s))
        } catch {
            r.push("[value cannot be serialized]")
        }
    }
    return r.join(e)
}

function Gc(t, e, r = !1) {
    return Pe(t) ? Mc(e) ? e.test(t) : Pe(e) ? r ? t === e : t.includes(e) : !1 : !1
}

function dr(t, e = [], r = !1) {
    return e.some(i => Gc(t, i, r))
}

function $c(t, e, r = 250, i, s, a, f) {
    if (!a.exception || !a.exception.values || !f || !et(f.originalException, Error)) return;
    const u = a.exception.values.length > 0 ? a.exception.values[a.exception.values.length - 1] : void 0;
    u && (a.exception.values = jc(zr(t, e, s, f.originalException, i, a.exception.values, u, 0), r))
}

function zr(t, e, r, i, s, a, f, u) {
    if (a.length >= r + 1) return a;
    let o = [...a];
    if (et(i[s], Error)) {
        Pi(f, u);
        const E = t(e, i[s]),
            _ = o.length;
        Vi(E, s, _, u), o = zr(t, e, r, i[s], s, [E, ...o], E, _)
    }
    return Array.isArray(i.errors) && i.errors.forEach((E, _) => {
        if (et(E, Error)) {
            Pi(f, u);
            const b = t(e, E),
                T = o.length;
            Vi(b, `errors[${_}]`, T, u), o = zr(t, e, r, E, s, [b, ...o], b, T)
        }
    }), o
}

function Pi(t, e) {
    t.mechanism = t.mechanism || {
        type: "generic",
        handled: !0
    }, t.mechanism = {
        ...t.mechanism,
        ...t.type === "AggregateError" && {
            is_exception_group: !0
        },
        exception_id: e
    }
}

function Vi(t, e, r, i) {
    t.mechanism = t.mechanism || {
        type: "generic",
        handled: !0
    }, t.mechanism = {
        ...t.mechanism,
        type: "chained",
        source: e,
        exception_id: r,
        parent_id: i
    }
}

function jc(t, e) {
    return t.map(r => (r.value && (r.value = ht(r.value, e)), r))
}
const Je = "8.15.0",
    M = globalThis;

function Mn(t, e, r) {
    const i = M,
        s = i.__SENTRY__ = i.__SENTRY__ || {},
        a = s[Je] = s[Je] || {};
    return a[t] || (a[t] = e())
}
const Xn = M,
    qc = 80;

function ha(t, e = {}) {
    if (!t) return "<unknown>";
    try {
        let r = t;
        const i = 5,
            s = [];
        let a = 0,
            f = 0;
        const u = " > ",
            o = u.length;
        let E;
        const _ = Array.isArray(e) ? e : e.keyAttrs,
            b = !Array.isArray(e) && e.maxStringLength || qc;
        for (; r && a++ < i && (E = Fc(r, _), !(E === "html" || a > 1 && f + s.length * o + E.length >= b));) s.push(E), f += E.length, r = r.parentNode;
        return s.reverse().join(u)
    } catch {
        return "<unknown>"
    }
}

function Fc(t, e) {
    const r = t,
        i = [];
    if (!r || !r.tagName) return "";
    if (Xn.HTMLElement && r instanceof HTMLElement && r.dataset) {
        if (r.dataset.sentryComponent) return r.dataset.sentryComponent;
        if (r.dataset.sentryElement) return r.dataset.sentryElement
    }
    i.push(r.tagName.toLowerCase());
    const s = e && e.length ? e.filter(f => r.getAttribute(f)).map(f => [f, r.getAttribute(f)]) : null;
    if (s && s.length) s.forEach(f => {
        i.push(`[${f[0]}="${f[1]}"]`)
    });
    else {
        r.id && i.push(`#${r.id}`);
        const f = r.className;
        if (f && Pe(f)) {
            const u = f.split(/\s+/);
            for (const o of u) i.push(`.${o}`)
        }
    }
    const a = ["aria-label", "type", "name", "title", "alt"];
    for (const f of a) {
        const u = r.getAttribute(f);
        u && i.push(`[${f}="${u}"]`)
    }
    return i.join("")
}

function Hc() {
    try {
        return Xn.document.location.href
    } catch {
        return ""
    }
}

function Wc(t) {
    if (!Xn.HTMLElement) return null;
    let e = t;
    const r = 5;
    for (let i = 0; i < r; i++) {
        if (!e) return null;
        if (e instanceof HTMLElement) {
            if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
            if (e.dataset.sentryElement) return e.dataset.sentryElement
        }
        e = e.parentNode
    }
    return null
}
const $t = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
    zc = "Sentry Logger ",
    Yr = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    _r = {};

function jt(t) {
    if (!("console" in M)) return t();
    const e = M.console,
        r = {},
        i = Object.keys(_r);
    i.forEach(s => {
        const a = _r[s];
        r[s] = e[s], e[s] = a
    });
    try {
        return t()
    } finally {
        i.forEach(s => {
            e[s] = r[s]
        })
    }
}

function Yc() {
    let t = !1;
    const e = {
        enable: () => {
            t = !0
        },
        disable: () => {
            t = !1
        },
        isEnabled: () => t
    };
    return $t ? Yr.forEach(r => {
        e[r] = (...i) => {
            t && jt(() => {
                M.console[r](`${zc}[${r}]:`, ...i)
            })
        }
    }) : Yr.forEach(r => {
        e[r] = () => {}
    }), e
}
const N = Yc(),
    Jc = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

function Qc(t) {
    return t === "http" || t === "https"
}

function Nr(t, e = !1) {
    const {
        host: r,
        path: i,
        pass: s,
        port: a,
        projectId: f,
        protocol: u,
        publicKey: o
    } = t;
    return `${u}://${o}${e&&s?`:${s}`:""}@${r}${a?`:${a}`:""}/${i&&`${i}/`}${f}`
}

function Zc(t) {
    const e = Jc.exec(t);
    if (!e) {
        jt(() => {
            console.error(`Invalid Sentry Dsn: ${t}`)
        });
        return
    }
    const [r, i, s = "", a = "", f = "", u = ""] = e.slice(1);
    let o = "",
        E = u;
    const _ = E.split("/");
    if (_.length > 1 && (o = _.slice(0, -1).join("/"), E = _.pop()), E) {
        const b = E.match(/^\d+/);
        b && (E = b[0])
    }
    return Ra({
        host: a,
        pass: s,
        path: o,
        projectId: E,
        port: f,
        protocol: r,
        publicKey: i
    })
}

function Ra(t) {
    return {
        protocol: t.protocol,
        publicKey: t.publicKey || "",
        pass: t.pass || "",
        host: t.host,
        port: t.port || "",
        path: t.path || "",
        projectId: t.projectId
    }
}

function ex(t) {
    if (!$t) return !0;
    const {
        port: e,
        projectId: r,
        protocol: i
    } = t;
    return ["protocol", "publicKey", "host", "projectId"].find(f => t[f] ? !1 : (N.error(`Invalid Sentry Dsn: ${f} missing`), !0)) ? !1 : r.match(/^\d+$/) ? Qc(i) ? e && isNaN(parseInt(e, 10)) ? (N.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1) : !0 : (N.error(`Invalid Sentry Dsn: Invalid protocol ${i}`), !1) : (N.error(`Invalid Sentry Dsn: Invalid projectId ${r}`), !1)
}

function tx(t) {
    const e = typeof t == "string" ? Zc(t) : Ra(t);
    if (!(!e || !ex(e))) return e
}
class Ue extends Error {
    constructor(e, r = "warn") {
        super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = r
    }
}

function se(t, e, r) {
    if (!(e in t)) return;
    const i = t[e],
        s = r(i);
    typeof s == "function" && Ta(s, i), t[e] = s
}

function tt(t, e, r) {
    try {
        Object.defineProperty(t, e, {
            value: r,
            writable: !0,
            configurable: !0
        })
    } catch {
        $t && N.log(`Failed to add non-enumerable property "${e}" to object`, t)
    }
}

function Ta(t, e) {
    try {
        const r = e.prototype || {};
        t.prototype = e.prototype = r, tt(t, "__sentry_original__", e)
    } catch {}
}

function Gn(t) {
    return t.__sentry_original__
}

function rx(t) {
    return Object.keys(t).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&")
}

function ba(t) {
    if (Pn(t)) return {
        message: t.message,
        name: t.name,
        stack: t.stack,
        ...Mi(t)
    };
    if (Br(t)) {
        const e = {
            type: t.type,
            target: ki(t.target),
            currentTarget: ki(t.currentTarget),
            ...Mi(t)
        };
        return typeof CustomEvent < "u" && et(t, CustomEvent) && (e.detail = t.detail), e
    } else return t
}

function ki(t) {
    try {
        return kc(t) ? ha(t) : Object.prototype.toString.call(t)
    } catch {
        return "<unknown>"
    }
}

function Mi(t) {
    if (typeof t == "object" && t !== null) {
        const e = {};
        for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e
    } else return {}
}

function nx(t, e = 40) {
    const r = Object.keys(ba(t));
    r.sort();
    const i = r[0];
    if (!i) return "[object has no keys]";
    if (i.length >= e) return ht(i, e);
    for (let s = r.length; s > 0; s--) {
        const a = r.slice(0, s).join(", ");
        if (!(a.length > e)) return s === r.length ? a : ht(a, e)
    }
    return ""
}

function Le(t) {
    return Jr(t, new Map)
}

function Jr(t, e) {
    if (ix(t)) {
        const r = e.get(t);
        if (r !== void 0) return r;
        const i = {};
        e.set(t, i);
        for (const s of Object.keys(t)) typeof t[s] < "u" && (i[s] = Jr(t[s], e));
        return i
    }
    if (Array.isArray(t)) {
        const r = e.get(t);
        if (r !== void 0) return r;
        const i = [];
        return e.set(t, i), t.forEach(s => {
            i.push(Jr(s, e))
        }), i
    }
    return t
}

function ix(t) {
    if (!bt(t)) return !1;
    try {
        const e = Object.getPrototypeOf(t).constructor.name;
        return !e || e === "Object"
    } catch {
        return !0
    }
}
const La = 50,
    rt = "?",
    Xi = /\(error: (.*)\)/,
    Gi = /captureMessage|captureException/;

function ga(...t) {
    const e = t.sort((r, i) => r[0] - i[0]).map(r => r[1]);
    return (r, i = 0, s = 0) => {
        const a = [],
            f = r.split(`
`);
        for (let u = i; u < f.length; u++) {
            const o = f[u];
            if (o.length > 1024) continue;
            const E = Xi.test(o) ? o.replace(Xi, "$1") : o;
            if (!E.match(/\S*Error: /)) {
                for (const _ of e) {
                    const b = _(E);
                    if (b) {
                        a.push(b);
                        break
                    }
                }
                if (a.length >= La + s) break
            }
        }
        return ax(a.slice(s))
    }
}

function sx(t) {
    return Array.isArray(t) ? ga(...t) : t
}

function ax(t) {
    if (!t.length) return [];
    const e = Array.from(t);
    return /sentryWrapped/.test(Yt(e).function || "") && e.pop(), e.reverse(), Gi.test(Yt(e).function || "") && (e.pop(), Gi.test(Yt(e).function || "") && e.pop()), e.slice(0, La).map(r => ({
        ...r,
        filename: r.filename || Yt(e).filename,
        function: r.function || rt
    }))
}

function Yt(t) {
    return t[t.length - 1] || {}
}
const jr = "<anonymous>";

function He(t) {
    try {
        return !t || typeof t != "function" ? jr : t.name || jr
    } catch {
        return jr
    }
}

function $i(t) {
    const e = t.exception;
    if (e) {
        const r = [];
        try {
            return e.values.forEach(i => {
                i.stacktrace.frames && r.push(...i.stacktrace.frames)
            }), r
        } catch {
            return
        }
    }
}
const nr = {},
    ji = {};

function ut(t, e) {
    nr[t] = nr[t] || [], nr[t].push(e)
}

function lt(t, e) {
    ji[t] || (e(), ji[t] = !0)
}

function ye(t, e) {
    const r = t && nr[t];
    if (r)
        for (const i of r) try {
            i(e)
        } catch (s) {
            $t && N.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${He(i)}
Error:`, s)
        }
}

function fx(t) {
    const e = "console";
    ut(e, t), lt(e, ux)
}

function ux() {
    "console" in M && Yr.forEach(function(t) {
        t in M.console && se(M.console, t, function(e) {
            return _r[t] = e,
                function(...r) {
                    ye("console", {
                        args: r,
                        level: t
                    });
                    const s = _r[t];
                    s && s.apply(M.console, r)
                }
        })
    })
}
const Qr = M;

function Sa() {
    if (!("fetch" in Qr)) return !1;
    try {
        return new Headers, new Request("http://www.example.com"), new Response, !0
    } catch {
        return !1
    }
}

function Zr(t) {
    return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
}

function lx() {
    if (typeof EdgeRuntime == "string") return !0;
    if (!Sa()) return !1;
    if (Zr(Qr.fetch)) return !0;
    let t = !1;
    const e = Qr.document;
    if (e && typeof e.createElement == "function") try {
        const r = e.createElement("iframe");
        r.hidden = !0, e.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (t = Zr(r.contentWindow.fetch)), e.head.removeChild(r)
    } catch (r) {
        $t && N.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", r)
    }
    return t
}
const Aa = 1e3;

function qt() {
    return Date.now() / Aa
}

function ox() {
    const {
        performance: t
    } = M;
    if (!t || !t.now) return qt;
    const e = Date.now() - t.now(),
        r = t.timeOrigin == null ? e : t.timeOrigin;
    return () => (r + t.now()) / Aa
}
const Ve = ox();
(() => {
    const {
        performance: t
    } = M;
    if (!t || !t.now) return;
    const e = 3600 * 1e3,
        r = t.now(),
        i = Date.now(),
        s = t.timeOrigin ? Math.abs(t.timeOrigin + r - i) : e,
        a = s < e,
        f = t.timing && t.timing.navigationStart,
        o = typeof f == "number" ? Math.abs(f + r - i) : e,
        E = o < e;
    return a || E ? s <= o ? t.timeOrigin : f : i
})();

function Ex(t) {
    const e = "fetch";
    ut(e, t), lt(e, px)
}

function px() {
    lx() && se(M, "fetch", function(t) {
        return function(...e) {
            const {
                method: r,
                url: i
            } = cx(e), s = {
                args: e,
                fetchData: {
                    method: r,
                    url: i
                },
                startTimestamp: Ve() * 1e3
            };
            ye("fetch", {
                ...s
            });
            const a = new Error().stack;
            return t.apply(M, e).then(f => {
                const u = {
                    ...s,
                    endTimestamp: Ve() * 1e3,
                    response: f
                };
                return ye("fetch", u), f
            }, f => {
                const u = {
                    ...s,
                    endTimestamp: Ve() * 1e3,
                    error: f
                };
                throw ye("fetch", u), Pn(f) && f.stack === void 0 && (f.stack = a, tt(f, "framesToPop", 1)), f
            })
        }
    })
}

function en(t, e) {
    return !!t && typeof t == "object" && !!t[e]
}

function qi(t) {
    return typeof t == "string" ? t : t ? en(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
}

function cx(t) {
    if (t.length === 0) return {
        method: "GET",
        url: ""
    };
    if (t.length === 2) {
        const [r, i] = t;
        return {
            url: qi(r),
            method: en(i, "method") ? String(i.method).toUpperCase() : "GET"
        }
    }
    const e = t[0];
    return {
        url: qi(e),
        method: en(e, "method") ? String(e.method).toUpperCase() : "GET"
    }
}
let Jt = null;

function xx(t) {
    const e = "error";
    ut(e, t), lt(e, _x)
}

function _x() {
    Jt = M.onerror, M.onerror = function(t, e, r, i, s) {
        return ye("error", {
            column: i,
            error: s,
            line: r,
            msg: t,
            url: e
        }), Jt && !Jt.__SENTRY_LOADER__ ? Jt.apply(this, arguments) : !1
    }, M.onerror.__SENTRY_INSTRUMENTED__ = !0
}
let Qt = null;

function hx(t) {
    const e = "unhandledrejection";
    ut(e, t), lt(e, Rx)
}

function Rx() {
    Qt = M.onunhandledrejection, M.onunhandledrejection = function(t) {
        return ye("unhandledrejection", t), Qt && !Qt.__SENTRY_LOADER__ ? Qt.apply(this, arguments) : !0
    }, M.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
}

function Tx() {
    return "npm"
}

function bx() {
    const t = typeof WeakSet == "function",
        e = t ? new WeakSet : [];

    function r(s) {
        if (t) return e.has(s) ? !0 : (e.add(s), !1);
        for (let a = 0; a < e.length; a++)
            if (e[a] === s) return !0;
        return e.push(s), !1
    }

    function i(s) {
        if (t) e.delete(s);
        else
            for (let a = 0; a < e.length; a++)
                if (e[a] === s) {
                    e.splice(a, 1);
                    break
                }
    }
    return [r, i]
}

function ge() {
    const t = M,
        e = t.crypto || t.msCrypto;
    let r = () => Math.random() * 16;
    try {
        if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
        e && e.getRandomValues && (r = () => {
            const i = new Uint8Array(1);
            return e.getRandomValues(i), i[0]
        })
    } catch {}
    return ("10000000100040008000" + 1e11).replace(/[018]/g, i => (i ^ (r() & 15) >> i / 4).toString(16))
}

function ma(t) {
    return t.exception && t.exception.values ? t.exception.values[0] : void 0
}

function Xe(t) {
    const {
        message: e,
        event_id: r
    } = t;
    if (e) return e;
    const i = ma(t);
    return i ? i.type && i.value ? `${i.type}: ${i.value}` : i.type || i.value || r || "<unknown>" : r || "<unknown>"
}

function tn(t, e, r) {
    const i = t.exception = t.exception || {},
        s = i.values = i.values || [],
        a = s[0] = s[0] || {};
    a.value || (a.value = e || ""), a.type || (a.type = "Error")
}

function Mt(t, e) {
    const r = ma(t);
    if (!r) return;
    const i = {
            type: "generic",
            handled: !0
        },
        s = r.mechanism;
    if (r.mechanism = {
            ...i,
            ...s,
            ...e
        }, e && "data" in e) {
        const a = {
            ...s && s.data,
            ...e.data
        };
        r.mechanism.data = a
    }
}

function Fi(t) {
    if (t && t.__sentry_captured__) return !0;
    try {
        tt(t, "__sentry_captured__", !0)
    } catch {}
    return !1
}

function Ca(t) {
    return Array.isArray(t) ? t : [t]
}

function Ge(t, e = 100, r = 1 / 0) {
    try {
        return rn("", t, e, r)
    } catch (i) {
        return {
            ERROR: `**non-serializable** (${i})`
        }
    }
}

function ya(t, e = 3, r = 100 * 1024) {
    const i = Ge(t, e);
    return Ax(i) > r ? ya(t, e - 1, r) : i
}

function rn(t, e, r = 1 / 0, i = 1 / 0, s = bx()) {
    const [a, f] = s;
    if (e == null || ["number", "boolean", "string"].includes(typeof e) && !Number.isNaN(e)) return e;
    const u = Lx(t, e);
    if (!u.startsWith("[object ")) return u;
    if (e.__sentry_skip_normalization__) return e;
    const o = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : r;
    if (o === 0) return u.replace("object ", "");
    if (a(e)) return "[Circular ~]";
    const E = e;
    if (E && typeof E.toJSON == "function") try {
        const g = E.toJSON();
        return rn("", g, o - 1, i, s)
    } catch {}
    const _ = Array.isArray(e) ? [] : {};
    let b = 0;
    const T = ba(e);
    for (const g in T) {
        if (!Object.prototype.hasOwnProperty.call(T, g)) continue;
        if (b >= i) {
            _[g] = "[MaxProperties ~]";
            break
        }
        const A = T[g];
        _[g] = rn(g, A, o - 1, i, s), b++
    }
    return f(e), _
}

function Lx(t, e) {
    try {
        if (t === "domain" && e && typeof e == "object" && e._events) return "[Domain]";
        if (t === "domainEmitter") return "[DomainEmitter]";
        if (typeof global < "u" && e === global) return "[Global]";
        if (typeof window < "u" && e === window) return "[Window]";
        if (typeof document < "u" && e === document) return "[Document]";
        if (_a(e)) return "[VueViewModel]";
        if (Xc(e)) return "[SyntheticEvent]";
        if (typeof e == "number" && e !== e) return "[NaN]";
        if (typeof e == "function") return `[Function: ${He(e)}]`;
        if (typeof e == "symbol") return `[${String(e)}]`;
        if (typeof e == "bigint") return `[BigInt: ${String(e)}]`;
        const r = gx(e);
        return /^HTML(\w*)Element$/.test(r) ? `[HTMLElement: ${r}]` : `[object ${r}]`
    } catch (r) {
        return `**non-serializable** (${r})`
    }
}

function gx(t) {
    const e = Object.getPrototypeOf(t);
    return e ? e.constructor.name : "null prototype"
}

function Sx(t) {
    return ~-encodeURI(t).split(/%..|./).length
}

function Ax(t) {
    return Sx(JSON.stringify(t))
}
var we;
(function(t) {
    t[t.PENDING = 0] = "PENDING";
    const r = 1;
    t[t.RESOLVED = r] = "RESOLVED";
    const i = 2;
    t[t.REJECTED = i] = "REJECTED"
})(we || (we = {}));

function nt(t) {
    return new Te(e => {
        e(t)
    })
}

function hr(t) {
    return new Te((e, r) => {
        r(t)
    })
}
class Te {
    constructor(e) {
        Te.prototype.__init.call(this), Te.prototype.__init2.call(this), Te.prototype.__init3.call(this), Te.prototype.__init4.call(this), this._state = we.PENDING, this._handlers = [];
        try {
            e(this._resolve, this._reject)
        } catch (r) {
            this._reject(r)
        }
    }
    then(e, r) {
        return new Te((i, s) => {
            this._handlers.push([!1, a => {
                if (!e) i(a);
                else try {
                    i(e(a))
                } catch (f) {
                    s(f)
                }
            }, a => {
                if (!r) s(a);
                else try {
                    i(r(a))
                } catch (f) {
                    s(f)
                }
            }]), this._executeHandlers()
        })
    } catch (e) {
        return this.then(r => r, e)
    } finally(e) {
        return new Te((r, i) => {
            let s, a;
            return this.then(f => {
                a = !1, s = f, e && e()
            }, f => {
                a = !0, s = f, e && e()
            }).then(() => {
                if (a) {
                    i(s);
                    return
                }
                r(s)
            })
        })
    }
    __init() {
        this._resolve = e => {
            this._setResult(we.RESOLVED, e)
        }
    }
    __init2() {
        this._reject = e => {
            this._setResult(we.REJECTED, e)
        }
    }
    __init3() {
        this._setResult = (e, r) => {
            if (this._state === we.PENDING) {
                if (Kr(r)) {
                    r.then(this._resolve, this._reject);
                    return
                }
                this._state = e, this._value = r, this._executeHandlers()
            }
        }
    }
    __init4() {
        this._executeHandlers = () => {
            if (this._state === we.PENDING) return;
            const e = this._handlers.slice();
            this._handlers = [], e.forEach(r => {
                r[0] || (this._state === we.RESOLVED && r[1](this._value), this._state === we.REJECTED && r[2](this._value), r[0] = !0)
            })
        }
    }
}

function mx(t) {
    const e = [];

    function r() {
        return t === void 0 || e.length < t
    }

    function i(f) {
        return e.splice(e.indexOf(f), 1)[0] || Promise.resolve(void 0)
    }

    function s(f) {
        if (!r()) return hr(new Ue("Not adding Promise because buffer limit was reached."));
        const u = f();
        return e.indexOf(u) === -1 && e.push(u), u.then(() => i(u)).then(null, () => i(u).then(null, () => {})), u
    }

    function a(f) {
        return new Te((u, o) => {
            let E = e.length;
            if (!E) return u(!0);
            const _ = setTimeout(() => {
                f && f > 0 && u(!1)
            }, f);
            e.forEach(b => {
                nt(b).then(() => {
                    --E || (clearTimeout(_), u(!0))
                }, o)
            })
        })
    }
    return {
        $: e,
        add: s,
        drain: a
    }
}

function qr(t) {
    if (!t) return {};
    const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!e) return {};
    const r = e[6] || "",
        i = e[8] || "";
    return {
        host: e[4],
        path: e[5],
        protocol: e[2],
        search: r,
        hash: i,
        relative: e[5] + r + i
    }
}
const Cx = ["fatal", "error", "warning", "log", "info", "debug"];

function yx(t) {
    return t === "warn" ? "warning" : Cx.includes(t) ? t : "log"
}
const vx = "sentry-",
    Ux = /^sentry-/;

function Bx(t) {
    const e = Kx(t);
    if (!e) return;
    const r = Object.entries(e).reduce((i, [s, a]) => {
        if (s.match(Ux)) {
            const f = s.slice(vx.length);
            i[f] = a
        }
        return i
    }, {});
    if (Object.keys(r).length > 0) return r
}

function Kx(t) {
    if (!(!t || !Pe(t) && !Array.isArray(t))) return Array.isArray(t) ? t.reduce((e, r) => {
        const i = Hi(r);
        return Object.entries(i).forEach(([s, a]) => {
            e[s] = a
        }), e
    }, {}) : Hi(t)
}

function Hi(t) {
    return t.split(",").map(e => e.split("=").map(r => decodeURIComponent(r.trim()))).reduce((e, [r, i]) => (r && i && (e[r] = i), e), {})
}

function Ft(t, e = []) {
    return [t, e]
}

function dx(t, e) {
    const [r, i] = t;
    return [r, [...i, e]]
}

function Wi(t, e) {
    const r = t[1];
    for (const i of r) {
        const s = i[0].type;
        if (e(i, s)) return !0
    }
    return !1
}

function nn(t) {
    return M.__SENTRY__ && M.__SENTRY__.encodePolyfill ? M.__SENTRY__.encodePolyfill(t) : new TextEncoder().encode(t)
}

function Nx(t) {
    const [e, r] = t;
    let i = JSON.stringify(e);

    function s(a) {
        typeof i == "string" ? i = typeof a == "string" ? i + a : [nn(i), a] : i.push(typeof a == "string" ? nn(a) : a)
    }
    for (const a of r) {
        const [f, u] = a;
        if (s(`
${JSON.stringify(f)}
`), typeof u == "string" || u instanceof Uint8Array) s(u);
        else {
            let o;
            try {
                o = JSON.stringify(u)
            } catch {
                o = JSON.stringify(Ge(u))
            }
            s(o)
        }
    }
    return typeof i == "string" ? i : Dx(i)
}

function Dx(t) {
    const e = t.reduce((s, a) => s + a.length, 0),
        r = new Uint8Array(e);
    let i = 0;
    for (const s of t) r.set(s, i), i += s.length;
    return r
}

function wx(t) {
    const e = typeof t.data == "string" ? nn(t.data) : t.data;
    return [Le({
        type: "attachment",
        length: e.length,
        filename: t.filename,
        content_type: t.contentType,
        attachment_type: t.attachmentType
    }), e]
}
const Ix = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    feedback: "feedback",
    span: "span",
    statsd: "metric_bucket"
};

function zi(t) {
    return Ix[t]
}

function va(t) {
    if (!t || !t.sdk) return;
    const {
        name: e,
        version: r
    } = t.sdk;
    return {
        name: e,
        version: r
    }
}

function Ox(t, e, r, i) {
    const s = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
    return {
        event_id: t.event_id,
        sent_at: new Date().toISOString(),
        ...e && {
            sdk: e
        },
        ...!!r && i && {
            dsn: Nr(i)
        },
        ...s && {
            trace: Le({
                ...s
            })
        }
    }
}

function Px(t, e, r) {
    const i = [{
        type: "client_report"
    }, {
        timestamp: qt(),
        discarded_events: t
    }];
    return Ft(e ? {
        dsn: e
    } : {}, [i])
}
const Vx = 60 * 1e3;

function kx(t, e = Date.now()) {
    const r = parseInt(`${t}`, 10);
    if (!isNaN(r)) return r * 1e3;
    const i = Date.parse(`${t}`);
    return isNaN(i) ? Vx : i - e
}

function Mx(t, e) {
    return t[e] || t.all || 0
}

function Xx(t, e, r = Date.now()) {
    return Mx(t, e) > r
}

function Gx(t, {
    statusCode: e,
    headers: r
}, i = Date.now()) {
    const s = {
            ...t
        },
        a = r && r["x-sentry-rate-limits"],
        f = r && r["retry-after"];
    if (a)
        for (const u of a.trim().split(",")) {
            const [o, E, , , _] = u.split(":", 5), b = parseInt(o, 10), T = (isNaN(b) ? 60 : b) * 1e3;
            if (!E) s.all = i + T;
            else
                for (const g of E.split(";")) g === "metric_bucket" ? (!_ || _.split(";").includes("custom")) && (s[g] = i + T) : s[g] = i + T
        } else f ? s.all = i + kx(f, i) : e === 429 && (s.all = i + 60 * 1e3);
    return s
}

function Yi() {
    return {
        traceId: ge(),
        spanId: ge().substring(16)
    }
}
const Zt = M;

function $x() {
    const t = Zt.chrome,
        e = t && t.app && t.app.runtime,
        r = "history" in Zt && !!Zt.history.pushState && !!Zt.history.replaceState;
    return !e && r
}
const ee = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;

function Dr() {
    return $n(M), M
}

function $n(t) {
    const e = t.__SENTRY__ = t.__SENTRY__ || {};
    return e.version = e.version || Je, e[Je] = e[Je] || {}
}

function jx(t) {
    const e = Ve(),
        r = {
            sid: ge(),
            init: !0,
            timestamp: e,
            started: e,
            duration: 0,
            status: "ok",
            errors: 0,
            ignoreDuration: !1,
            toJSON: () => Fx(r)
        };
    return t && Lt(r, t), r
}

function Lt(t, e = {}) {
    if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || Ve(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : ge()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
    else if (typeof e.duration == "number") t.duration = e.duration;
    else {
        const r = t.timestamp - t.started;
        t.duration = r >= 0 ? r : 0
    }
    e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), typeof e.errors == "number" && (t.errors = e.errors), e.status && (t.status = e.status)
}

function qx(t, e) {
    let r = {};
    t.status === "ok" && (r = {
        status: "exited"
    }), Lt(t, r)
}

function Fx(t) {
    return Le({
        sid: `${t.sid}`,
        init: t.init,
        started: new Date(t.started * 1e3).toISOString(),
        timestamp: new Date(t.timestamp * 1e3).toISOString(),
        status: t.status,
        errors: t.errors,
        did: typeof t.did == "number" || typeof t.did == "string" ? `${t.did}` : void 0,
        duration: t.duration,
        abnormal_mechanism: t.abnormal_mechanism,
        attrs: {
            release: t.release,
            environment: t.environment,
            ip_address: t.ipAddress,
            user_agent: t.userAgent
        }
    })
}
const sn = "_sentrySpan";

function Ji(t, e) {
    e ? tt(t, sn, e) : delete t[sn]
}

function Qi(t) {
    return t[sn]
}
const Hx = 100;
class jn {
    constructor() {
        this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = Yi()
    }
    clone() {
        const e = new jn;
        return e._breadcrumbs = [...this._breadcrumbs], e._tags = {
            ...this._tags
        }, e._extra = {
            ...this._extra
        }, e._contexts = {
            ...this._contexts
        }, e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._requestSession = this._requestSession, e._attachments = [...this._attachments], e._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata
        }, e._propagationContext = {
            ...this._propagationContext
        }, e._client = this._client, e._lastEventId = this._lastEventId, Ji(e, Qi(this)), e
    }
    setClient(e) {
        this._client = e
    }
    setLastEventId(e) {
        this._lastEventId = e
    }
    getClient() {
        return this._client
    }
    lastEventId() {
        return this._lastEventId
    }
    addScopeListener(e) {
        this._scopeListeners.push(e)
    }
    addEventProcessor(e) {
        return this._eventProcessors.push(e), this
    }
    setUser(e) {
        return this._user = e || {
            email: void 0,
            id: void 0,
            ip_address: void 0,
            username: void 0
        }, this._session && Lt(this._session, {
            user: e
        }), this._notifyScopeListeners(), this
    }
    getUser() {
        return this._user
    }
    getRequestSession() {
        return this._requestSession
    }
    setRequestSession(e) {
        return this._requestSession = e, this
    }
    setTags(e) {
        return this._tags = {
            ...this._tags,
            ...e
        }, this._notifyScopeListeners(), this
    }
    setTag(e, r) {
        return this._tags = {
            ...this._tags,
            [e]: r
        }, this._notifyScopeListeners(), this
    }
    setExtras(e) {
        return this._extra = {
            ...this._extra,
            ...e
        }, this._notifyScopeListeners(), this
    }
    setExtra(e, r) {
        return this._extra = {
            ...this._extra,
            [e]: r
        }, this._notifyScopeListeners(), this
    }
    setFingerprint(e) {
        return this._fingerprint = e, this._notifyScopeListeners(), this
    }
    setLevel(e) {
        return this._level = e, this._notifyScopeListeners(), this
    }
    setTransactionName(e) {
        return this._transactionName = e, this._notifyScopeListeners(), this
    }
    setContext(e, r) {
        return r === null ? delete this._contexts[e] : this._contexts[e] = r, this._notifyScopeListeners(), this
    }
    setSession(e) {
        return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
    }
    getSession() {
        return this._session
    }
    update(e) {
        if (!e) return this;
        const r = typeof e == "function" ? e(this) : e,
            [i, s] = r instanceof it ? [r.getScopeData(), r.getRequestSession()] : bt(r) ? [e, e.requestSession] : [],
            {
                tags: a,
                extra: f,
                user: u,
                contexts: o,
                level: E,
                fingerprint: _ = [],
                propagationContext: b
            } = i || {};
        return this._tags = {
            ...this._tags,
            ...a
        }, this._extra = {
            ...this._extra,
            ...f
        }, this._contexts = {
            ...this._contexts,
            ...o
        }, u && Object.keys(u).length && (this._user = u), E && (this._level = E), _.length && (this._fingerprint = _), b && (this._propagationContext = b), s && (this._requestSession = s), this
    }
    clear() {
        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._session = void 0, Ji(this, void 0), this._attachments = [], this._propagationContext = Yi(), this._notifyScopeListeners(), this
    }
    addBreadcrumb(e, r) {
        const i = typeof r == "number" ? r : Hx;
        if (i <= 0) return this;
        const s = {
                timestamp: qt(),
                ...e
            },
            a = this._breadcrumbs;
        return a.push(s), this._breadcrumbs = a.length > i ? a.slice(-i) : a, this._notifyScopeListeners(), this
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1]
    }
    clearBreadcrumbs() {
        return this._breadcrumbs = [], this._notifyScopeListeners(), this
    }
    addAttachment(e) {
        return this._attachments.push(e), this
    }
    clearAttachments() {
        return this._attachments = [], this
    }
    getScopeData() {
        return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: Qi(this)
        }
    }
    setSDKProcessingMetadata(e) {
        return this._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata,
            ...e
        }, this
    }
    setPropagationContext(e) {
        return this._propagationContext = e, this
    }
    getPropagationContext() {
        return this._propagationContext
    }
    captureException(e, r) {
        const i = r && r.event_id ? r.event_id : ge();
        if (!this._client) return N.warn("No client configured on scope - will not capture exception!"), i;
        const s = new Error("Sentry syntheticException");
        return this._client.captureException(e, {
            originalException: e,
            syntheticException: s,
            ...r,
            event_id: i
        }, this), i
    }
    captureMessage(e, r, i) {
        const s = i && i.event_id ? i.event_id : ge();
        if (!this._client) return N.warn("No client configured on scope - will not capture message!"), s;
        const a = new Error(e);
        return this._client.captureMessage(e, r, {
            originalException: e,
            syntheticException: a,
            ...i,
            event_id: s
        }, this), s
    }
    captureEvent(e, r) {
        const i = r && r.event_id ? r.event_id : ge();
        return this._client ? (this._client.captureEvent(e, {
            ...r,
            event_id: i
        }, this), i) : (N.warn("No client configured on scope - will not capture event!"), i)
    }
    _notifyScopeListeners() {
        this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
            e(this)
        }), this._notifyingListeners = !1)
    }
}
const it = jn;

function Wx() {
    return Mn("defaultCurrentScope", () => new it)
}

function zx() {
    return Mn("defaultIsolationScope", () => new it)
}
class Yx {
    constructor(e, r) {
        let i;
        e ? i = e : i = new it;
        let s;
        r ? s = r : s = new it, this._stack = [{
            scope: i
        }], this._isolationScope = s
    }
    withScope(e) {
        const r = this._pushScope();
        let i;
        try {
            i = e(r)
        } catch (s) {
            throw this._popScope(), s
        }
        return Kr(i) ? i.then(s => (this._popScope(), s), s => {
            throw this._popScope(), s
        }) : (this._popScope(), i)
    }
    getClient() {
        return this.getStackTop().client
    }
    getScope() {
        return this.getStackTop().scope
    }
    getIsolationScope() {
        return this._isolationScope
    }
    getStackTop() {
        return this._stack[this._stack.length - 1]
    }
    _pushScope() {
        const e = this.getScope().clone();
        return this._stack.push({
            client: this.getClient(),
            scope: e
        }), e
    }
    _popScope() {
        return this._stack.length <= 1 ? !1 : !!this._stack.pop()
    }
}

function gt() {
    const t = Dr(),
        e = $n(t);
    return e.stack = e.stack || new Yx(Wx(), zx())
}

function Jx(t) {
    return gt().withScope(t)
}

function Qx(t, e) {
    const r = gt();
    return r.withScope(() => (r.getStackTop().scope = t, e(t)))
}

function Zi(t) {
    return gt().withScope(() => t(gt().getIsolationScope()))
}

function Zx() {
    return {
        withIsolationScope: Zi,
        withScope: Jx,
        withSetScope: Qx,
        withSetIsolationScope: (t, e) => Zi(e),
        getCurrentScope: () => gt().getScope(),
        getIsolationScope: () => gt().getIsolationScope()
    }
}

function qn(t) {
    const e = $n(t);
    return e.acs ? e.acs : Zx()
}

function Me() {
    const t = Dr();
    return qn(t).getCurrentScope()
}

function Kt() {
    const t = Dr();
    return qn(t).getIsolationScope()
}

function e_() {
    return Mn("globalScope", () => new it)
}

function t_(...t) {
    const e = Dr(),
        r = qn(e);
    if (t.length === 2) {
        const [i, s] = t;
        return i ? r.withSetScope(i, s) : r.withScope(s)
    }
    return r.withScope(t[0])
}

function oe() {
    return Me().getClient()
}
const r_ = "_sentryMetrics";

function n_(t) {
    const e = t[r_];
    if (!e) return;
    const r = {};
    for (const [, [i, s]] of e)(r[i] || (r[i] = [])).push(Le(s));
    return r
}
const i_ = "sentry.source",
    s_ = "sentry.sample_rate",
    a_ = "sentry.op",
    f_ = "sentry.origin",
    u_ = 0,
    l_ = 1,
    o_ = 1;

function E_(t) {
    const {
        spanId: e,
        traceId: r
    } = t.spanContext(), {
        parent_span_id: i
    } = Rr(t);
    return Le({
        parent_span_id: i,
        span_id: e,
        trace_id: r
    })
}

function es(t) {
    return typeof t == "number" ? ts(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? ts(t.getTime()) : Ve()
}

function ts(t) {
    return t > 9999999999 ? t / 1e3 : t
}

function Rr(t) {
    if (c_(t)) return t.getSpanJSON();
    try {
        const {
            spanId: e,
            traceId: r
        } = t.spanContext();
        if (p_(t)) {
            const {
                attributes: i,
                startTime: s,
                name: a,
                endTime: f,
                parentSpanId: u,
                status: o
            } = t;
            return Le({
                span_id: e,
                trace_id: r,
                data: i,
                description: a,
                parent_span_id: u,
                start_timestamp: es(s),
                timestamp: es(f) || void 0,
                status: __(o),
                op: i[a_],
                origin: i[f_],
                _metrics_summary: n_(t)
            })
        }
        return {
            span_id: e,
            trace_id: r
        }
    } catch {
        return {}
    }
}

function p_(t) {
    const e = t;
    return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status
}

function c_(t) {
    return typeof t.getSpanJSON == "function"
}

function x_(t) {
    const {
        traceFlags: e
    } = t.spanContext();
    return e === o_
}

function __(t) {
    if (!(!t || t.code === u_)) return t.code === l_ ? "ok" : t.message || "unknown_error"
}
const h_ = "_sentryRootSpan";

function Ua(t) {
    return t[h_] || t
}
const Fn = "production",
    R_ = "_frozenDsc";

function Ba(t, e) {
    const r = e.getOptions(),
        {
            publicKey: i
        } = e.getDsn() || {},
        s = Le({
            environment: r.environment || Fn,
            release: r.release,
            public_key: i,
            trace_id: t
        });
    return e.emit("createDsc", s), s
}

function T_(t) {
    const e = oe();
    if (!e) return {};
    const r = Ba(Rr(t).trace_id || "", e),
        i = Ua(t),
        s = i[R_];
    if (s) return s;
    const a = i.spanContext().traceState,
        f = a && a.get("sentry.dsc"),
        u = f && Bx(f);
    if (u) return u;
    const o = Rr(i),
        E = o.data || {},
        _ = E[s_];
    _ != null && (r.sample_rate = `${_}`);
    const b = E[i_],
        T = o.description;
    return b !== "url" && T && (r.transaction = T), r.sampled = String(x_(i)), e.emit("createDsc", r, i), r
}

function b_(t) {
    if (typeof t == "boolean") return Number(t);
    const e = typeof t == "string" ? parseFloat(t) : t;
    if (typeof e != "number" || isNaN(e) || e < 0 || e > 1) {
        ee && N.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`);
        return
    }
    return e
}

function L_(t, e) {
    return e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []], t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []]), t
}

function g_(t, e, r, i) {
    const s = va(r),
        a = {
            sent_at: new Date().toISOString(),
            ...s && {
                sdk: s
            },
            ...!!i && e && {
                dsn: Nr(e)
            }
        },
        f = "aggregates" in t ? [{
            type: "sessions"
        }, t] : [{
            type: "session"
        }, t.toJSON()];
    return Ft(a, [f])
}

function S_(t, e, r, i) {
    const s = va(r),
        a = t.type && t.type !== "replay_event" ? t.type : "event";
    L_(t, r && r.sdk);
    const f = Ox(t, s, i, e);
    return delete t.sdkProcessingMetadata, Ft(f, [
        [{
            type: a
        }, t]
    ])
}

function an(t, e, r, i = 0) {
    return new Te((s, a) => {
        const f = t[i];
        if (e === null || typeof f != "function") s(e);
        else {
            const u = f({
                ...e
            }, r);
            ee && f.id && u === null && N.log(`Event processor "${f.id}" dropped event`), Kr(u) ? u.then(o => an(t, o, r, i + 1).then(s)).then(null, a) : an(t, u, r, i + 1).then(s).then(null, a)
        }
    })
}

function A_(t, e) {
    const {
        fingerprint: r,
        span: i,
        breadcrumbs: s,
        sdkProcessingMetadata: a
    } = e;
    m_(t, e), i && v_(t, i), U_(t, r), C_(t, s), y_(t, a)
}

function rs(t, e) {
    const {
        extra: r,
        tags: i,
        user: s,
        contexts: a,
        level: f,
        sdkProcessingMetadata: u,
        breadcrumbs: o,
        fingerprint: E,
        eventProcessors: _,
        attachments: b,
        propagationContext: T,
        transactionName: g,
        span: A
    } = e;
    wt(t, "extra", r), wt(t, "tags", i), wt(t, "user", s), wt(t, "contexts", a), wt(t, "sdkProcessingMetadata", u), f && (t.level = f), g && (t.transactionName = g), A && (t.span = A), o.length && (t.breadcrumbs = [...t.breadcrumbs, ...o]), E.length && (t.fingerprint = [...t.fingerprint, ...E]), _.length && (t.eventProcessors = [...t.eventProcessors, ..._]), b.length && (t.attachments = [...t.attachments, ...b]), t.propagationContext = {
        ...t.propagationContext,
        ...T
    }
}

function wt(t, e, r) {
    if (r && Object.keys(r).length) {
        t[e] = {
            ...t[e]
        };
        for (const i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[e][i] = r[i])
    }
}

function m_(t, e) {
    const {
        extra: r,
        tags: i,
        user: s,
        contexts: a,
        level: f,
        transactionName: u
    } = e, o = Le(r);
    o && Object.keys(o).length && (t.extra = {
        ...o,
        ...t.extra
    });
    const E = Le(i);
    E && Object.keys(E).length && (t.tags = {
        ...E,
        ...t.tags
    });
    const _ = Le(s);
    _ && Object.keys(_).length && (t.user = {
        ..._,
        ...t.user
    });
    const b = Le(a);
    b && Object.keys(b).length && (t.contexts = {
        ...b,
        ...t.contexts
    }), f && (t.level = f), u && t.type !== "transaction" && (t.transaction = u)
}

function C_(t, e) {
    const r = [...t.breadcrumbs || [], ...e];
    t.breadcrumbs = r.length ? r : void 0
}

function y_(t, e) {
    t.sdkProcessingMetadata = {
        ...t.sdkProcessingMetadata,
        ...e
    }
}

function v_(t, e) {
    t.contexts = {
        trace: E_(e),
        ...t.contexts
    }, t.sdkProcessingMetadata = {
        dynamicSamplingContext: T_(e),
        ...t.sdkProcessingMetadata
    };
    const r = Ua(e),
        i = Rr(r).description;
    i && !t.transaction && t.type === "transaction" && (t.transaction = i)
}

function U_(t, e) {
    t.fingerprint = t.fingerprint ? Ca(t.fingerprint) : [], e && (t.fingerprint = t.fingerprint.concat(e)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
}

function B_(t, e, r, i, s, a) {
    const {
        normalizeDepth: f = 3,
        normalizeMaxBreadth: u = 1e3
    } = t, o = {
        ...e,
        event_id: e.event_id || r.event_id || ge(),
        timestamp: e.timestamp || qt()
    }, E = r.integrations || t.integrations.map(U => U.name);
    K_(o, t), D_(o, E), e.type === void 0 && d_(o, t.stackParser);
    const _ = I_(i, r.captureContext);
    r.mechanism && Mt(o, r.mechanism);
    const b = s ? s.getEventProcessors() : [],
        T = e_().getScopeData();
    if (a) {
        const U = a.getScopeData();
        rs(T, U)
    }
    if (_) {
        const U = _.getScopeData();
        rs(T, U)
    }
    const g = [...r.attachments || [], ...T.attachments];
    g.length && (r.attachments = g), A_(o, T);
    const A = [...b, ...T.eventProcessors];
    return an(A, o, r).then(U => (U && N_(U), typeof f == "number" && f > 0 ? w_(U, f, u) : U))
}

function K_(t, e) {
    const {
        environment: r,
        release: i,
        dist: s,
        maxValueLength: a = 250
    } = e;
    "environment" in t || (t.environment = "environment" in e ? r : Fn), t.release === void 0 && i !== void 0 && (t.release = i), t.dist === void 0 && s !== void 0 && (t.dist = s), t.message && (t.message = ht(t.message, a));
    const f = t.exception && t.exception.values && t.exception.values[0];
    f && f.value && (f.value = ht(f.value, a));
    const u = t.request;
    u && u.url && (u.url = ht(u.url, a))
}
const ns = new WeakMap;

function d_(t, e) {
    const r = M._sentryDebugIds;
    if (!r) return;
    let i;
    const s = ns.get(e);
    s ? i = s : (i = new Map, ns.set(e, i));
    const a = Object.entries(r).reduce((f, [u, o]) => {
        let E;
        const _ = i.get(u);
        _ ? E = _ : (E = e(u), i.set(u, E));
        for (let b = E.length - 1; b >= 0; b--) {
            const T = E[b];
            if (T.filename) {
                f[T.filename] = o;
                break
            }
        }
        return f
    }, {});
    try {
        t.exception.values.forEach(f => {
            f.stacktrace.frames.forEach(u => {
                u.filename && (u.debug_id = a[u.filename])
            })
        })
    } catch {}
}

function N_(t) {
    const e = {};
    try {
        t.exception.values.forEach(i => {
            i.stacktrace.frames.forEach(s => {
                s.debug_id && (s.abs_path ? e[s.abs_path] = s.debug_id : s.filename && (e[s.filename] = s.debug_id), delete s.debug_id)
            })
        })
    } catch {}
    if (Object.keys(e).length === 0) return;
    t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
    const r = t.debug_meta.images;
    Object.entries(e).forEach(([i, s]) => {
        r.push({
            type: "sourcemap",
            code_file: i,
            debug_id: s
        })
    })
}

function D_(t, e) {
    e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
}

function w_(t, e, r) {
    if (!t) return null;
    const i = {
        ...t,
        ...t.breadcrumbs && {
            breadcrumbs: t.breadcrumbs.map(s => ({
                ...s,
                ...s.data && {
                    data: Ge(s.data, e, r)
                }
            }))
        },
        ...t.user && {
            user: Ge(t.user, e, r)
        },
        ...t.contexts && {
            contexts: Ge(t.contexts, e, r)
        },
        ...t.extra && {
            extra: Ge(t.extra, e, r)
        }
    };
    return t.contexts && t.contexts.trace && i.contexts && (i.contexts.trace = t.contexts.trace, t.contexts.trace.data && (i.contexts.trace.data = Ge(t.contexts.trace.data, e, r))), t.spans && (i.spans = t.spans.map(s => ({
        ...s,
        ...s.data && {
            data: Ge(s.data, e, r)
        }
    }))), i
}

function I_(t, e) {
    if (!e) return t;
    const r = t ? t.clone() : new it;
    return r.update(e), r
}

function O_(t, e) {
    return Me().captureException(t, void 0)
}

function P_(t, e) {
    const r = typeof e == "string" ? e : void 0,
        i = typeof e != "string" ? {
            captureContext: e
        } : void 0;
    return Me().captureMessage(t, r, i)
}

function Ka(t, e) {
    return Me().captureEvent(t, e)
}

function da(t) {
    Kt().setTags(t)
}

function is(t) {
    const e = oe(),
        r = Kt(),
        i = Me(),
        {
            release: s,
            environment: a = Fn
        } = e && e.getOptions() || {},
        {
            userAgent: f
        } = M.navigator || {},
        u = jx({
            release: s,
            environment: a,
            user: i.getUser() || r.getUser(),
            ...f && {
                userAgent: f
            },
            ...t
        }),
        o = r.getSession();
    return o && o.status === "ok" && Lt(o, {
        status: "exited"
    }), Na(), r.setSession(u), i.setSession(u), u
}

function Na() {
    const t = Kt(),
        e = Me(),
        r = e.getSession() || t.getSession();
    r && qx(r), Da(), t.setSession(), e.setSession()
}

function Da() {
    const t = Kt(),
        e = Me(),
        r = oe(),
        i = e.getSession() || t.getSession();
    i && r && r.captureSession(i)
}

function ss(t = !1) {
    if (t) {
        Na();
        return
    }
    Da()
}
const V_ = "7";

function k_(t) {
    const e = t.protocol ? `${t.protocol}:` : "",
        r = t.port ? `:${t.port}` : "";
    return `${e}//${t.host}${r}${t.path?`/${t.path}`:""}/api/`
}

function M_(t) {
    return `${k_(t)}${t.projectId}/envelope/`
}

function X_(t, e) {
    return rx({
        sentry_key: t.publicKey,
        sentry_version: V_,
        ...e && {
            sentry_client: `${e.name}/${e.version}`
        }
    })
}

function G_(t, e, r) {
    return e || `${M_(t)}?${X_(t,r)}`
}
const as = [];

function $_(t) {
    const e = {};
    return t.forEach(r => {
        const {
            name: i
        } = r, s = e[i];
        s && !s.isDefaultInstance && r.isDefaultInstance || (e[i] = r)
    }), Object.values(e)
}

function j_(t) {
    const e = t.defaultIntegrations || [],
        r = t.integrations;
    e.forEach(f => {
        f.isDefaultInstance = !0
    });
    let i;
    Array.isArray(r) ? i = [...e, ...r] : typeof r == "function" ? i = Ca(r(e)) : i = e;
    const s = $_(i),
        a = s.findIndex(f => f.name === "Debug");
    if (a > -1) {
        const [f] = s.splice(a, 1);
        s.push(f)
    }
    return s
}

function q_(t, e) {
    const r = {};
    return e.forEach(i => {
        i && wa(t, i, r)
    }), r
}

function fs(t, e) {
    for (const r of e) r && r.afterAllSetup && r.afterAllSetup(t)
}

function wa(t, e, r) {
    if (r[e.name]) {
        ee && N.log(`Integration skipped because it was already installed: ${e.name}`);
        return
    }
    if (r[e.name] = e, as.indexOf(e.name) === -1 && typeof e.setupOnce == "function" && (e.setupOnce(), as.push(e.name)), e.setup && typeof e.setup == "function" && e.setup(t), typeof e.preprocessEvent == "function") {
        const i = e.preprocessEvent.bind(e);
        t.on("preprocessEvent", (s, a) => i(s, a, t))
    }
    if (typeof e.processEvent == "function") {
        const i = e.processEvent.bind(e),
            s = Object.assign((a, f) => i(a, f, t), {
                id: e.name
            });
        t.addEventProcessor(s)
    }
    ee && N.log(`Integration installed: ${e.name}`)
}
const us = "Not capturing exception because it's already been captured.";
class F_ {
    constructor(e) {
        if (this._options = e, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], e.dsn ? this._dsn = tx(e.dsn) : ee && N.warn("No DSN provided, client will not send events."), this._dsn) {
            const r = G_(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
            this._transport = e.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...e.transportOptions,
                url: r
            })
        }
    }
    captureException(e, r, i) {
        const s = ge();
        if (Fi(e)) return ee && N.log(us), s;
        const a = {
            event_id: s,
            ...r
        };
        return this._process(this.eventFromException(e, a).then(f => this._captureEvent(f, a, i))), a.event_id
    }
    captureMessage(e, r, i, s) {
        const a = {
                event_id: ge(),
                ...i
            },
            f = Vn(e) ? e : String(e),
            u = kn(e) ? this.eventFromMessage(f, r, a) : this.eventFromException(e, a);
        return this._process(u.then(o => this._captureEvent(o, a, s))), a.event_id
    }
    captureEvent(e, r, i) {
        const s = ge();
        if (r && r.originalException && Fi(r.originalException)) return ee && N.log(us), s;
        const a = {
                event_id: s,
                ...r
            },
            u = (e.sdkProcessingMetadata || {}).capturedSpanScope;
        return this._process(this._captureEvent(e, a, u || i)), a.event_id
    }
    captureSession(e) {
        typeof e.release != "string" ? ee && N.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), Lt(e, {
            init: !1
        }))
    }
    getDsn() {
        return this._dsn
    }
    getOptions() {
        return this._options
    }
    getSdkMetadata() {
        return this._options._metadata
    }
    getTransport() {
        return this._transport
    }
    flush(e) {
        const r = this._transport;
        return r ? (this.emit("flush"), this._isClientDoneProcessing(e).then(i => r.flush(e).then(s => i && s))) : nt(!0)
    }
    close(e) {
        return this.flush(e).then(r => (this.getOptions().enabled = !1, this.emit("close"), r))
    }
    getEventProcessors() {
        return this._eventProcessors
    }
    addEventProcessor(e) {
        this._eventProcessors.push(e)
    }
    init() {
        this._isEnabled() && this._setupIntegrations()
    }
    getIntegrationByName(e) {
        return this._integrations[e]
    }
    addIntegration(e) {
        const r = this._integrations[e.name];
        wa(this, e, this._integrations), r || fs(this, [e])
    }
    sendEvent(e, r = {}) {
        this.emit("beforeSendEvent", e, r);
        let i = S_(e, this._dsn, this._options._metadata, this._options.tunnel);
        for (const a of r.attachments || []) i = dx(i, wx(a));
        const s = this.sendEnvelope(i);
        s && s.then(a => this.emit("afterSendEvent", e, a), null)
    }
    sendSession(e) {
        const r = g_(e, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(r)
    }
    recordDroppedEvent(e, r, i) {
        if (this._options.sendClientReports) {
            const s = `${e}:${r}`;
            ee && N.log(`Adding outcome: "${s}"`), this._outcomes[s] = (this._outcomes[s] || 0) + 1
        }
    }
    on(e, r) {
        return this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(r), () => {
            const i = this._hooks[e];
            if (i) {
                const s = i.indexOf(r);
                i.splice(s, 1)
            }
        }
    }
    emit(e, ...r) {
        const i = this._hooks[e];
        i && i.forEach(s => s(...r))
    }
    sendEnvelope(e) {
        return this.emit("beforeEnvelope", e), this._isEnabled() && this._transport ? this._transport.send(e).then(null, r => (ee && N.error("Error while sending event:", r), r)) : (ee && N.error("Transport disabled"), nt({}))
    }
    _setupIntegrations() {
        const {
            integrations: e
        } = this._options;
        this._integrations = q_(this, e), fs(this, e)
    }
    _updateSessionFromEvent(e, r) {
        let i = !1,
            s = !1;
        const a = r.exception && r.exception.values;
        if (a) {
            s = !0;
            for (const o of a) {
                const E = o.mechanism;
                if (E && E.handled === !1) {
                    i = !0;
                    break
                }
            }
        }
        const f = e.status === "ok";
        (f && e.errors === 0 || f && i) && (Lt(e, {
            ...i && {
                status: "crashed"
            },
            errors: e.errors || Number(s || i)
        }), this.captureSession(e))
    }
    _isClientDoneProcessing(e) {
        return new Te(r => {
            let i = 0;
            const s = 1,
                a = setInterval(() => {
                    this._numProcessing == 0 ? (clearInterval(a), r(!0)) : (i += s, e && i >= e && (clearInterval(a), r(!1)))
                }, s)
        })
    }
    _isEnabled() {
        return this.getOptions().enabled !== !1 && this._transport !== void 0
    }
    _prepareEvent(e, r, i, s = Kt()) {
        const a = this.getOptions(),
            f = Object.keys(this._integrations);
        return !r.integrations && f.length > 0 && (r.integrations = f), this.emit("preprocessEvent", e, r), e.type || s.setLastEventId(e.event_id || r.event_id), B_(a, e, r, i, this, s).then(u => {
            if (u === null) return u;
            const o = {
                ...s.getPropagationContext(),
                ...i ? i.getPropagationContext() : void 0
            };
            if (!(u.contexts && u.contexts.trace) && o) {
                const {
                    traceId: _,
                    spanId: b,
                    parentSpanId: T,
                    dsc: g
                } = o;
                u.contexts = {
                    trace: Le({
                        trace_id: _,
                        span_id: b,
                        parent_span_id: T
                    }),
                    ...u.contexts
                };
                const A = g || Ba(_, this);
                u.sdkProcessingMetadata = {
                    dynamicSamplingContext: A,
                    ...u.sdkProcessingMetadata
                }
            }
            return u
        })
    }
    _captureEvent(e, r = {}, i) {
        return this._processEvent(e, r, i).then(s => s.event_id, s => {
            if (ee) {
                const a = s;
                a.logLevel === "log" ? N.log(a.message) : N.warn(a)
            }
        })
    }
    _processEvent(e, r, i) {
        const s = this.getOptions(),
            {
                sampleRate: a
            } = s,
            f = fn(e),
            u = Ia(e),
            o = e.type || "error",
            E = `before send for type \`${o}\``,
            _ = typeof a > "u" ? void 0 : b_(a);
        if (u && typeof _ == "number" && Math.random() > _) return this.recordDroppedEvent("sample_rate", "error", e), hr(new Ue(`Discarding event because it's not included in the random sample (sampling rate = ${a})`, "log"));
        const b = o === "replay_event" ? "replay" : o,
            g = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
        return this._prepareEvent(e, r, i, g).then(A => {
            if (A === null) throw this.recordDroppedEvent("event_processor", b, e), new Ue("An event processor returned `null`, will not send event.", "log");
            if (r.data && r.data.__sentry__ === !0) return A;
            const U = W_(this, s, A, r);
            return H_(U, E)
        }).then(A => {
            if (A === null) {
                if (this.recordDroppedEvent("before_send", b, e), fn(e)) {
                    const F = 1 + (e.spans || []).length;
                    this._outcomes.span = (this._outcomes.span || 0) + F
                }
                throw new Ue(`${E} returned \`null\`, will not send event.`, "log")
            }
            const B = i && i.getSession();
            !f && B && this._updateSessionFromEvent(B, A);
            const U = A.transaction_info;
            if (f && U && A.transaction !== e.transaction) {
                const q = "custom";
                A.transaction_info = {
                    ...U,
                    source: q
                }
            }
            return this.sendEvent(A, r), A
        }).then(null, A => {
            throw A instanceof Ue ? A : (this.captureException(A, {
                data: {
                    __sentry__: !0
                },
                originalException: A
            }), new Ue(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${A}`))
        })
    }
    _process(e) {
        this._numProcessing++, e.then(r => (this._numProcessing--, r), r => (this._numProcessing--, r))
    }
    _clearOutcomes() {
        const e = this._outcomes;
        return this._outcomes = {}, Object.entries(e).map(([r, i]) => {
            const [s, a] = r.split(":");
            return {
                reason: s,
                category: a,
                quantity: i
            }
        })
    }
}

function H_(t, e) {
    const r = `${e} must return \`null\` or a valid event.`;
    if (Kr(t)) return t.then(i => {
        if (!bt(i) && i !== null) throw new Ue(r);
        return i
    }, i => {
        throw new Ue(`${e} rejected with ${i}`)
    });
    if (!bt(t) && t !== null) throw new Ue(r);
    return t
}

function W_(t, e, r, i) {
    const {
        beforeSend: s,
        beforeSendTransaction: a,
        beforeSendSpan: f
    } = e;
    if (Ia(r) && s) return s(r, i);
    if (fn(r)) {
        if (r.spans && f) {
            const u = [];
            for (const o of r.spans) {
                const E = f(o);
                E ? u.push(E) : t.recordDroppedEvent("before_send", "span")
            }
            r.spans = u
        }
        if (a) return a(r, i)
    }
    return r
}

function Ia(t) {
    return t.type === void 0
}

function fn(t) {
    return t.type === "transaction"
}

function z_(t, e) {
    e.debug === !0 && (ee ? N.enable() : jt(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
    })), Me().update(e.initialScope);
    const i = new t(e);
    return Y_(i), i.init(), i
}

function Y_(t) {
    Me().setClient(t)
}
const J_ = 64;

function Q_(t, e, r = mx(t.bufferSize || J_)) {
    let i = {};
    const s = f => r.drain(f);

    function a(f) {
        const u = [];
        if (Wi(f, (b, T) => {
                const g = zi(T);
                if (Xx(i, g)) {
                    const A = ls(b, T);
                    t.recordDroppedEvent("ratelimit_backoff", g, A)
                } else u.push(b)
            }), u.length === 0) return nt({});
        const o = Ft(f[0], u),
            E = b => {
                Wi(o, (T, g) => {
                    const A = ls(T, g);
                    t.recordDroppedEvent(b, zi(g), A)
                })
            },
            _ = () => e({
                body: Nx(o)
            }).then(b => (b.statusCode !== void 0 && (b.statusCode < 200 || b.statusCode >= 300) && ee && N.warn(`Sentry responded with status code ${b.statusCode} to sent event.`), i = Gx(i, b), b), b => {
                throw E("network_error"), b
            });
        return r.add(_).then(b => b, b => {
            if (b instanceof Ue) return ee && N.error("Skipped sending event because buffer is full."), E("queue_overflow"), nt({});
            throw b
        })
    }
    return {
        send: a,
        flush: s
    }
}

function ls(t, e) {
    if (!(e !== "event" && e !== "transaction")) return Array.isArray(t) ? t[1] : void 0
}

function Z_(t, e, r = [e], i = "npm") {
    const s = t._metadata || {};
    s.sdk || (s.sdk = {
        name: `sentry.javascript.${e}`,
        packages: r.map(a => ({
            name: `${i}:@sentry/${a}`,
            version: Je
        })),
        version: Je
    }), t._metadata = s
}
const eh = 100;

function st(t, e) {
    const r = oe(),
        i = Kt();
    if (!r) return;
    const {
        beforeBreadcrumb: s = null,
        maxBreadcrumbs: a = eh
    } = r.getOptions();
    if (a <= 0) return;
    const u = {
            timestamp: qt(),
            ...t
        },
        o = s ? jt(() => s(u, e)) : u;
    o !== null && (r.emit && r.emit("beforeAddBreadcrumb", o, e), i.addBreadcrumb(o, a))
}
let os;
const th = "FunctionToString",
    Es = new WeakMap,
    rh = () => ({
        name: th,
        setupOnce() {
            os = Function.prototype.toString;
            try {
                Function.prototype.toString = function(...t) {
                    const e = Gn(this),
                        r = Es.has(oe()) && e !== void 0 ? e : this;
                    return os.apply(r, t)
                }
            } catch {}
        },
        setup(t) {
            Es.set(t, !0)
        }
    }),
    nh = rh,
    ih = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler"],
    sh = "InboundFilters",
    ah = (t = {}) => ({
        name: sh,
        processEvent(e, r, i) {
            const s = i.getOptions(),
                a = uh(t, s);
            return lh(e, a) ? null : e
        }
    }),
    fh = ah;

function uh(t = {}, e = {}) {
    return {
        allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
        denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
        ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...t.disableErrorDefaults ? [] : ih],
        ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || []],
        ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0
    }
}

function lh(t, e) {
    return e.ignoreInternal && _h(t) ? (ee && N.warn(`Event dropped due to being internal Sentry Error.
Event: ${Xe(t)}`), !0) : oh(t, e.ignoreErrors) ? (ee && N.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Xe(t)}`), !0) : Rh(t) ? (ee && N.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${Xe(t)}`), !0) : Eh(t, e.ignoreTransactions) ? (ee && N.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Xe(t)}`), !0) : ph(t, e.denyUrls) ? (ee && N.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Xe(t)}.
Url: ${Tr(t)}`), !0) : ch(t, e.allowUrls) ? !1 : (ee && N.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Xe(t)}.
Url: ${Tr(t)}`), !0)
}

function oh(t, e) {
    return t.type || !e || !e.length ? !1 : xh(t).some(r => dr(r, e))
}

function Eh(t, e) {
    if (t.type !== "transaction" || !e || !e.length) return !1;
    const r = t.transaction;
    return r ? dr(r, e) : !1
}

function ph(t, e) {
    if (!e || !e.length) return !1;
    const r = Tr(t);
    return r ? dr(r, e) : !1
}

function ch(t, e) {
    if (!e || !e.length) return !0;
    const r = Tr(t);
    return r ? dr(r, e) : !0
}

function xh(t) {
    const e = [];
    t.message && e.push(t.message);
    let r;
    try {
        r = t.exception.values[t.exception.values.length - 1]
    } catch {}
    return r && r.value && (e.push(r.value), r.type && e.push(`${r.type}: ${r.value}`)), e
}

function _h(t) {
    try {
        return t.exception.values[0].type === "SentryError"
    } catch {}
    return !1
}

function hh(t = []) {
    for (let e = t.length - 1; e >= 0; e--) {
        const r = t[e];
        if (r && r.filename !== "<anonymous>" && r.filename !== "[native code]") return r.filename || null
    }
    return null
}

function Tr(t) {
    try {
        let e;
        try {
            e = t.exception.values[0].stacktrace.frames
        } catch {}
        return e ? hh(e) : null
    } catch {
        return ee && N.error(`Cannot extract url for event ${Xe(t)}`), null
    }
}

function Rh(t) {
    return t.type || !t.exception || !t.exception.values || t.exception.values.length === 0 ? !1 : !t.message && !t.exception.values.some(e => e.stacktrace || e.type && e.type !== "Error" || e.value)
}
const Th = "Dedupe",
    bh = () => {
        let t;
        return {
            name: Th,
            processEvent(e) {
                if (e.type) return e;
                try {
                    if (gh(e, t)) return ee && N.warn("Event dropped due to being a duplicate of previously captured event."), null
                } catch {}
                return t = e
            }
        }
    },
    Lh = bh;

function gh(t, e) {
    return e ? !!(Sh(t, e) || Ah(t, e)) : !1
}

function Sh(t, e) {
    const r = t.message,
        i = e.message;
    return !(!r && !i || r && !i || !r && i || r !== i || !Pa(t, e) || !Oa(t, e))
}

function Ah(t, e) {
    const r = ps(e),
        i = ps(t);
    return !(!r || !i || r.type !== i.type || r.value !== i.value || !Pa(t, e) || !Oa(t, e))
}

function Oa(t, e) {
    let r = $i(t),
        i = $i(e);
    if (!r && !i) return !0;
    if (r && !i || !r && i || (r = r, i = i, i.length !== r.length)) return !1;
    for (let s = 0; s < i.length; s++) {
        const a = i[s],
            f = r[s];
        if (a.filename !== f.filename || a.lineno !== f.lineno || a.colno !== f.colno || a.function !== f.function) return !1
    }
    return !0
}

function Pa(t, e) {
    let r = t.fingerprint,
        i = e.fingerprint;
    if (!r && !i) return !0;
    if (r && !i || !r && i) return !1;
    r = r, i = i;
    try {
        return r.join("") === i.join("")
    } catch {
        return !1
    }
}

function ps(t) {
    return t.exception && t.exception.values && t.exception.values[0]
}
const z = M;
let un = 0;

function Va() {
    return un > 0
}

function mh() {
    un++, setTimeout(() => {
        un--
    })
}

function St(t, e = {}, r) {
    if (typeof t != "function") return t;
    try {
        const s = t.__sentry_wrapped__;
        if (s) return s;
        if (Gn(t)) return t
    } catch {
        return t
    }
    const i = function() {
        const s = Array.prototype.slice.call(arguments);
        try {
            const a = s.map(f => St(f, e));
            return t.apply(this, a)
        } catch (a) {
            throw mh(), t_(f => {
                f.addEventProcessor(u => (e.mechanism && (tn(u, void 0), Mt(u, e.mechanism)), u.extra = {
                    ...u.extra,
                    arguments: s
                }, u)), O_(a)
            }), a
        }
    };
    try {
        for (const s in t) Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s])
    } catch {}
    Ta(i, t), tt(t, "__sentry_wrapped__", i);
    try {
        Object.getOwnPropertyDescriptor(i, "name").configurable && Object.defineProperty(i, "name", {
            get() {
                return t.name
            }
        })
    } catch {}
    return i
}
const qe = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;

function Hn(t, e) {
    const r = Wn(t, e),
        i = {
            type: e && e.name,
            value: Bh(e)
        };
    return r.length && (i.stacktrace = {
        frames: r
    }), i.type === void 0 && i.value === "" && (i.value = "Unrecoverable error caught"), i
}

function Ch(t, e, r, i) {
    const s = oe(),
        a = s && s.getOptions().normalizeDepth,
        f = wh(e),
        u = {
            __serialized__: ya(e, a)
        };
    if (f) return {
        exception: {
            values: [Hn(t, f)]
        },
        extra: u
    };
    const o = {
        exception: {
            values: [{
                type: Br(e) ? e.constructor.name : i ? "UnhandledRejection" : "Error",
                value: Nh(e, {
                    isUnhandledRejection: i
                })
            }]
        },
        extra: u
    };
    if (r) {
        const E = Wn(t, r);
        E.length && (o.exception.values[0].stacktrace = {
            frames: E
        })
    }
    return o
}

function Fr(t, e) {
    return {
        exception: {
            values: [Hn(t, e)]
        }
    }
}

function Wn(t, e) {
    const r = e.stacktrace || e.stack || "",
        i = vh(e),
        s = Uh(e);
    try {
        return t(r, i, s)
    } catch {}
    return []
}
const yh = /Minified React error #\d+;/i;

function vh(t) {
    return t && yh.test(t.message) ? 1 : 0
}

function Uh(t) {
    return typeof t.framesToPop == "number" ? t.framesToPop : 0
}

function Bh(t) {
    const e = t && t.message;
    return e ? e.error && typeof e.error.message == "string" ? e.error.message : e : "No error message"
}

function Kh(t, e, r, i) {
    const s = r && r.syntheticException || void 0,
        a = zn(t, e, s, i);
    return Mt(a), a.level = "error", r && r.event_id && (a.event_id = r.event_id), nt(a)
}

function dh(t, e, r = "info", i, s) {
    const a = i && i.syntheticException || void 0,
        f = ln(t, e, a, s);
    return f.level = r, i && i.event_id && (f.event_id = i.event_id), nt(f)
}

function zn(t, e, r, i, s) {
    let a;
    if (xa(e) && e.error) return Fr(t, e.error);
    if (Ii(e) || Vc(e)) {
        const f = e;
        if ("stack" in e) a = Fr(t, e);
        else {
            const u = f.name || (Ii(f) ? "DOMError" : "DOMException"),
                o = f.message ? `${u}: ${f.message}` : u;
            a = ln(t, o, r, i), tn(a, o)
        }
        return "code" in f && (a.tags = {
            ...a.tags,
            "DOMException.code": `${f.code}`
        }), a
    }
    return Pn(e) ? Fr(t, e) : bt(e) || Br(e) ? (a = Ch(t, e, r, s), Mt(a, {
        synthetic: !0
    }), a) : (a = ln(t, e, r, i), tn(a, `${e}`), Mt(a, {
        synthetic: !0
    }), a)
}

function ln(t, e, r, i) {
    const s = {};
    if (i && r) {
        const a = Wn(t, r);
        a.length && (s.exception = {
            values: [{
                value: e,
                stacktrace: {
                    frames: a
                }
            }]
        })
    }
    if (Vn(e)) {
        const {
            __sentry_template_string__: a,
            __sentry_template_values__: f
        } = e;
        return s.logentry = {
            message: a,
            params: f
        }, s
    }
    return s.message = e, s
}

function Nh(t, {
    isUnhandledRejection: e
}) {
    const r = nx(t),
        i = e ? "promise rejection" : "exception";
    return xa(t) ? `Event \`ErrorEvent\` captured as ${i} with message \`${t.message}\`` : Br(t) ? `Event \`${Dh(t)}\` (type=${t.type}) captured as ${i}` : `Object captured as ${i} with keys: ${r}`
}

function Dh(t) {
    try {
        const e = Object.getPrototypeOf(t);
        return e ? e.constructor.name : void 0
    } catch {}
}

function wh(t) {
    for (const e in t)
        if (Object.prototype.hasOwnProperty.call(t, e)) {
            const r = t[e];
            if (r instanceof Error) return r
        }
}

function Ih(t, {
    metadata: e,
    tunnel: r,
    dsn: i
}) {
    const s = {
            event_id: t.event_id,
            sent_at: new Date().toISOString(),
            ...e && e.sdk && {
                sdk: {
                    name: e.sdk.name,
                    version: e.sdk.version
                }
            },
            ...!!r && !!i && {
                dsn: Nr(i)
            }
        },
        a = Oh(t);
    return Ft(s, [a])
}

function Oh(t) {
    return [{
        type: "user_report"
    }, t]
}
class Ph extends F_ {
    constructor(e) {
        const r = {
                parentSpanIsAlwaysRootSpan: !0,
                ...e
            },
            i = z.SENTRY_SDK_SOURCE || Tx();
        Z_(r, "browser", ["browser"], i), super(r), r.sendClientReports && z.document && z.document.addEventListener("visibilitychange", () => {
            z.document.visibilityState === "hidden" && this._flushOutcomes()
        })
    }
    eventFromException(e, r) {
        return Kh(this._options.stackParser, e, r, this._options.attachStacktrace)
    }
    eventFromMessage(e, r = "info", i) {
        return dh(this._options.stackParser, e, r, i, this._options.attachStacktrace)
    }
    captureUserFeedback(e) {
        if (!this._isEnabled()) {
            qe && N.warn("SDK not enabled, will not capture user feedback.");
            return
        }
        const r = Ih(e, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel
        });
        this.sendEnvelope(r)
    }
    _prepareEvent(e, r, i) {
        return e.platform = e.platform || "javascript", super._prepareEvent(e, r, i)
    }
    _flushOutcomes() {
        const e = this._clearOutcomes();
        if (e.length === 0) {
            qe && N.log("No outcomes to send");
            return
        }
        if (!this._dsn) {
            qe && N.log("No dsn provided, will not send outcomes");
            return
        }
        qe && N.log("Sending outcomes:", e);
        const r = Px(e, this._options.tunnel && Nr(this._dsn));
        this.sendEnvelope(r)
    }
}
const Vh = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
    ue = M,
    kh = 1e3;
let cs, on, En;

function Mh(t) {
    const e = "dom";
    ut(e, t), lt(e, Xh)
}

function Xh() {
    if (!ue.document) return;
    const t = ye.bind(null, "dom"),
        e = xs(t, !0);
    ue.document.addEventListener("click", e, !1), ue.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(r => {
        const i = ue[r] && ue[r].prototype;
        !i || !i.hasOwnProperty || !i.hasOwnProperty("addEventListener") || (se(i, "addEventListener", function(s) {
            return function(a, f, u) {
                if (a === "click" || a == "keypress") try {
                    const o = this,
                        E = o.__sentry_instrumentation_handlers__ = o.__sentry_instrumentation_handlers__ || {},
                        _ = E[a] = E[a] || {
                            refCount: 0
                        };
                    if (!_.handler) {
                        const b = xs(t);
                        _.handler = b, s.call(this, a, b, u)
                    }
                    _.refCount++
                } catch {}
                return s.call(this, a, f, u)
            }
        }), se(i, "removeEventListener", function(s) {
            return function(a, f, u) {
                if (a === "click" || a == "keypress") try {
                    const o = this,
                        E = o.__sentry_instrumentation_handlers__ || {},
                        _ = E[a];
                    _ && (_.refCount--, _.refCount <= 0 && (s.call(this, a, _.handler, u), _.handler = void 0, delete E[a]), Object.keys(E).length === 0 && delete o.__sentry_instrumentation_handlers__)
                } catch {}
                return s.call(this, a, f, u)
            }
        }))
    })
}

function Gh(t) {
    if (t.type !== on) return !1;
    try {
        if (!t.target || t.target._sentryId !== En) return !1
    } catch {}
    return !0
}

function $h(t, e) {
    return t !== "keypress" ? !1 : !e || !e.tagName ? !0 : !(e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable)
}

function xs(t, e = !1) {
    return r => {
        if (!r || r._sentryCaptured) return;
        const i = jh(r);
        if ($h(r.type, i)) return;
        tt(r, "_sentryCaptured", !0), i && !i._sentryId && tt(i, "_sentryId", ge());
        const s = r.type === "keypress" ? "input" : r.type;
        Gh(r) || (t({
            event: r,
            name: s,
            global: e
        }), on = r.type, En = i ? i._sentryId : void 0), clearTimeout(cs), cs = ue.setTimeout(() => {
            En = void 0, on = void 0
        }, kh)
    }
}

function jh(t) {
    try {
        return t.target
    } catch {
        return null
    }
}
let er;

function ka(t) {
    const e = "history";
    ut(e, t), lt(e, qh)
}

function qh() {
    if (!$x()) return;
    const t = ue.onpopstate;
    ue.onpopstate = function(...r) {
        const i = ue.location.href,
            s = er;
        if (er = i, ye("history", {
                from: s,
                to: i
            }), t) try {
            return t.apply(this, r)
        } catch {}
    };

    function e(r) {
        return function(...i) {
            const s = i.length > 2 ? i[2] : void 0;
            if (s) {
                const a = er,
                    f = String(s);
                er = f, ye("history", {
                    from: a,
                    to: f
                })
            }
            return r.apply(this, i)
        }
    }
    se(ue.history, "pushState", e), se(ue.history, "replaceState", e)
}
const ir = {};

function Fh(t) {
    const e = ir[t];
    if (e) return e;
    let r = ue[t];
    if (Zr(r)) return ir[t] = r.bind(ue);
    const i = ue.document;
    if (i && typeof i.createElement == "function") try {
        const s = i.createElement("iframe");
        s.hidden = !0, i.head.appendChild(s);
        const a = s.contentWindow;
        a && a[t] && (r = a[t]), i.head.removeChild(s)
    } catch (s) {
        Vh && N.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, s)
    }
    return r && (ir[t] = r.bind(ue))
}

function _s(t) {
    ir[t] = void 0
}
const Ot = "__sentry_xhr_v3__";

function Hh(t) {
    const e = "xhr";
    ut(e, t), lt(e, Wh)
}

function Wh() {
    if (!ue.XMLHttpRequest) return;
    const t = XMLHttpRequest.prototype;
    se(t, "open", function(e) {
        return function(...r) {
            const i = Ve() * 1e3,
                s = Pe(r[0]) ? r[0].toUpperCase() : void 0,
                a = zh(r[1]);
            if (!s || !a) return e.apply(this, r);
            this[Ot] = {
                method: s,
                url: a,
                request_headers: {}
            }, s === "POST" && a.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
            const f = () => {
                const u = this[Ot];
                if (u && this.readyState === 4) {
                    try {
                        u.status_code = this.status
                    } catch {}
                    const o = {
                        endTimestamp: Ve() * 1e3,
                        startTimestamp: i,
                        xhr: this
                    };
                    ye("xhr", o)
                }
            };
            return "onreadystatechange" in this && typeof this.onreadystatechange == "function" ? se(this, "onreadystatechange", function(u) {
                return function(...o) {
                    return f(), u.apply(this, o)
                }
            }) : this.addEventListener("readystatechange", f), se(this, "setRequestHeader", function(u) {
                return function(...o) {
                    const [E, _] = o, b = this[Ot];
                    return b && Pe(E) && Pe(_) && (b.request_headers[E.toLowerCase()] = _), u.apply(this, o)
                }
            }), e.apply(this, r)
        }
    }), se(t, "send", function(e) {
        return function(...r) {
            const i = this[Ot];
            if (!i) return e.apply(this, r);
            r[0] !== void 0 && (i.body = r[0]);
            const s = {
                startTimestamp: Ve() * 1e3,
                xhr: this
            };
            return ye("xhr", s), e.apply(this, r)
        }
    })
}

function zh(t) {
    if (Pe(t)) return t;
    try {
        return t.toString()
    } catch {}
}

function Yh(t, e = Fh("fetch")) {
    let r = 0,
        i = 0;

    function s(a) {
        const f = a.body.length;
        r += f, i++;
        const u = {
            body: a.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: t.headers,
            keepalive: r <= 6e4 && i < 15,
            ...t.fetchOptions
        };
        if (!e) return _s("fetch"), hr("No fetch implementation available");
        try {
            return e(t.url, u).then(o => (r -= f, i--, {
                statusCode: o.status,
                headers: {
                    "x-sentry-rate-limits": o.headers.get("X-Sentry-Rate-Limits"),
                    "retry-after": o.headers.get("Retry-After")
                }
            }))
        } catch (o) {
            return _s("fetch"), r -= f, i--, hr(o)
        }
    }
    return Q_(t, s)
}
const Jh = 30,
    Qh = 50;

function pn(t, e, r, i) {
    const s = {
        filename: t,
        function: e === "<anonymous>" ? rt : e,
        in_app: !0
    };
    return r !== void 0 && (s.lineno = r), i !== void 0 && (s.colno = i), s
}
const Zh = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    eR = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    tR = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    rR = t => {
        const e = Zh.exec(t);
        if (e) {
            const [, i, s, a] = e;
            return pn(i, rt, +s, +a)
        }
        const r = eR.exec(t);
        if (r) {
            if (r[2] && r[2].indexOf("eval") === 0) {
                const f = tR.exec(r[2]);
                f && (r[2] = f[1], r[3] = f[2], r[4] = f[3])
            }
            const [s, a] = Ma(r[1] || rt, r[2]);
            return pn(a, s, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0)
        }
    },
    nR = [Jh, rR],
    iR = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    sR = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    aR = t => {
        const e = iR.exec(t);
        if (e) {
            if (e[3] && e[3].indexOf(" > eval") > -1) {
                const a = sR.exec(e[3]);
                a && (e[1] = e[1] || "eval", e[3] = a[1], e[4] = a[2], e[5] = "")
            }
            let i = e[3],
                s = e[1] || rt;
            return [s, i] = Ma(s, i), pn(i, s, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
        }
    },
    fR = [Qh, aR],
    uR = [nR, fR],
    lR = ga(...uR),
    Ma = (t, e) => {
        const r = t.indexOf("safari-extension") !== -1,
            i = t.indexOf("safari-web-extension") !== -1;
        return r || i ? [t.indexOf("@") !== -1 ? t.split("@")[0] : rt, r ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
    },
    tr = 1024,
    oR = "Breadcrumbs",
    ER = (t = {}) => {
        const e = {
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0,
            ...t
        };
        return {
            name: oR,
            setup(r) {
                e.console && fx(_R(r)), e.dom && Mh(xR(r, e.dom)), e.xhr && Hh(hR(r)), e.fetch && Ex(RR(r)), e.history && ka(TR(r)), e.sentry && r.on("beforeSendEvent", cR(r))
            }
        }
    },
    pR = ER;

function cR(t) {
    return function(r) {
        oe() === t && st({
            category: `sentry.${r.type==="transaction"?"transaction":"event"}`,
            event_id: r.event_id,
            level: r.level,
            message: Xe(r)
        }, {
            event: r
        })
    }
}

function xR(t, e) {
    return function(i) {
        if (oe() !== t) return;
        let s, a, f = typeof e == "object" ? e.serializeAttribute : void 0,
            u = typeof e == "object" && typeof e.maxStringLength == "number" ? e.maxStringLength : void 0;
        u && u > tr && (qe && N.warn(`\`dom.maxStringLength\` cannot exceed ${tr}, but a value of ${u} was configured. Sentry will use ${tr} instead.`), u = tr), typeof f == "string" && (f = [f]);
        try {
            const E = i.event,
                _ = bR(E) ? E.target : E;
            s = ha(_, {
                keyAttrs: f,
                maxStringLength: u
            }), a = Wc(_)
        } catch {
            s = "<unknown>"
        }
        if (s.length === 0) return;
        const o = {
            category: `ui.${i.name}`,
            message: s
        };
        a && (o.data = {
            "ui.component_name": a
        }), st(o, {
            event: i.event,
            name: i.name,
            global: i.global
        })
    }
}

function _R(t) {
    return function(r) {
        if (oe() !== t) return;
        const i = {
            category: "console",
            data: {
                arguments: r.args,
                logger: "console"
            },
            level: yx(r.level),
            message: Oi(r.args, " ")
        };
        if (r.level === "assert")
            if (r.args[0] === !1) i.message = `Assertion failed: ${Oi(r.args.slice(1)," ")||"console.assert"}`, i.data.arguments = r.args.slice(1);
            else return;
        st(i, {
            input: r.args,
            level: r.level
        })
    }
}

function hR(t) {
    return function(r) {
        if (oe() !== t) return;
        const {
            startTimestamp: i,
            endTimestamp: s
        } = r, a = r.xhr[Ot];
        if (!i || !s || !a) return;
        const {
            method: f,
            url: u,
            status_code: o,
            body: E
        } = a, _ = {
            method: f,
            url: u,
            status_code: o
        }, b = {
            xhr: r.xhr,
            input: E,
            startTimestamp: i,
            endTimestamp: s
        };
        st({
            category: "xhr",
            data: _,
            type: "http"
        }, b)
    }
}

function RR(t) {
    return function(r) {
        if (oe() !== t) return;
        const {
            startTimestamp: i,
            endTimestamp: s
        } = r;
        if (s && !(r.fetchData.url.match(/sentry_key/) && r.fetchData.method === "POST"))
            if (r.error) {
                const a = r.fetchData,
                    f = {
                        data: r.error,
                        input: r.args,
                        startTimestamp: i,
                        endTimestamp: s
                    };
                st({
                    category: "fetch",
                    data: a,
                    level: "error",
                    type: "http"
                }, f)
            } else {
                const a = r.response,
                    f = {
                        ...r.fetchData,
                        status_code: a && a.status
                    },
                    u = {
                        input: r.args,
                        response: a,
                        startTimestamp: i,
                        endTimestamp: s
                    };
                st({
                    category: "fetch",
                    data: f,
                    type: "http"
                }, u)
            }
    }
}

function TR(t) {
    return function(r) {
        if (oe() !== t) return;
        let i = r.from,
            s = r.to;
        const a = qr(z.location.href);
        let f = i ? qr(i) : void 0;
        const u = qr(s);
        (!f || !f.path) && (f = a), a.protocol === u.protocol && a.host === u.host && (s = u.relative), a.protocol === f.protocol && a.host === f.host && (i = f.relative), st({
            category: "navigation",
            data: {
                from: i,
                to: s
            }
        })
    }
}

function bR(t) {
    return !!t && !!t.target
}
const LR = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
    gR = "BrowserApiErrors",
    SR = (t = {}) => {
        const e = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            ...t
        };
        return {
            name: gR,
            setupOnce() {
                e.setTimeout && se(z, "setTimeout", hs), e.setInterval && se(z, "setInterval", hs), e.requestAnimationFrame && se(z, "requestAnimationFrame", mR), e.XMLHttpRequest && "XMLHttpRequest" in z && se(XMLHttpRequest.prototype, "send", CR);
                const r = e.eventTarget;
                r && (Array.isArray(r) ? r : LR).forEach(yR)
            }
        }
    },
    AR = SR;

function hs(t) {
    return function(...e) {
        const r = e[0];
        return e[0] = St(r, {
            mechanism: {
                data: {
                    function: He(t)
                },
                handled: !1,
                type: "instrument"
            }
        }), t.apply(this, e)
    }
}

function mR(t) {
    return function(e) {
        return t.apply(this, [St(e, {
            mechanism: {
                data: {
                    function: "requestAnimationFrame",
                    handler: He(t)
                },
                handled: !1,
                type: "instrument"
            }
        })])
    }
}

function CR(t) {
    return function(...e) {
        const r = this;
        return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(s => {
            s in r && typeof r[s] == "function" && se(r, s, function(a) {
                const f = {
                        mechanism: {
                            data: {
                                function: s,
                                handler: He(a)
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    },
                    u = Gn(a);
                return u && (f.mechanism.data.handler = He(u)), St(a, f)
            })
        }), t.apply(this, e)
    }
}

function yR(t) {
    const e = z,
        r = e[t] && e[t].prototype;
    !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (se(r, "addEventListener", function(i) {
        return function(s, a, f) {
            try {
                typeof a.handleEvent == "function" && (a.handleEvent = St(a.handleEvent, {
                    mechanism: {
                        data: {
                            function: "handleEvent",
                            handler: He(a),
                            target: t
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }))
            } catch {}
            return i.apply(this, [s, St(a, {
                mechanism: {
                    data: {
                        function: "addEventListener",
                        handler: He(a),
                        target: t
                    },
                    handled: !1,
                    type: "instrument"
                }
            }), f])
        }
    }), se(r, "removeEventListener", function(i) {
        return function(s, a, f) {
            const u = a;
            try {
                const o = u && u.__sentry_wrapped__;
                o && i.call(this, s, o, f)
            } catch {}
            return i.call(this, s, u, f)
        }
    }))
}
const vR = "GlobalHandlers",
    UR = (t = {}) => {
        const e = {
            onerror: !0,
            onunhandledrejection: !0,
            ...t
        };
        return {
            name: vR,
            setupOnce() {
                Error.stackTraceLimit = 50
            },
            setup(r) {
                e.onerror && (KR(r), Rs("onerror")), e.onunhandledrejection && (dR(r), Rs("onunhandledrejection"))
            }
        }
    },
    BR = UR;

function KR(t) {
    xx(e => {
        const {
            stackParser: r,
            attachStacktrace: i
        } = Xa();
        if (oe() !== t || Va()) return;
        const {
            msg: s,
            url: a,
            line: f,
            column: u,
            error: o
        } = e, E = wR(zn(r, o || s, void 0, i, !1), a, f, u);
        E.level = "error", Ka(E, {
            originalException: o,
            mechanism: {
                handled: !1,
                type: "onerror"
            }
        })
    })
}

function dR(t) {
    hx(e => {
        const {
            stackParser: r,
            attachStacktrace: i
        } = Xa();
        if (oe() !== t || Va()) return;
        const s = NR(e),
            a = kn(s) ? DR(s) : zn(r, s, void 0, i, !0);
        a.level = "error", Ka(a, {
            originalException: s,
            mechanism: {
                handled: !1,
                type: "onunhandledrejection"
            }
        })
    })
}

function NR(t) {
    if (kn(t)) return t;
    try {
        if ("reason" in t) return t.reason;
        if ("detail" in t && "reason" in t.detail) return t.detail.reason
    } catch {}
    return t
}

function DR(t) {
    return {
        exception: {
            values: [{
                type: "UnhandledRejection",
                value: `Non-Error promise rejection captured with value: ${String(t)}`
            }]
        }
    }
}

function wR(t, e, r, i) {
    const s = t.exception = t.exception || {},
        a = s.values = s.values || [],
        f = a[0] = a[0] || {},
        u = f.stacktrace = f.stacktrace || {},
        o = u.frames = u.frames || [],
        E = isNaN(parseInt(i, 10)) ? void 0 : i,
        _ = isNaN(parseInt(r, 10)) ? void 0 : r,
        b = Pe(e) && e.length > 0 ? e : Hc();
    return o.length === 0 && o.push({
        colno: E,
        filename: b,
        function: rt,
        in_app: !0,
        lineno: _
    }), t
}

function Rs(t) {
    qe && N.log(`Global Handler attached: ${t}`)
}

function Xa() {
    const t = oe();
    return t && t.getOptions() || {
        stackParser: () => [],
        attachStacktrace: !1
    }
}
const IR = () => ({
        name: "HttpContext",
        preprocessEvent(t) {
            if (!z.navigator && !z.location && !z.document) return;
            const e = t.request && t.request.url || z.location && z.location.href,
                {
                    referrer: r
                } = z.document || {},
                {
                    userAgent: i
                } = z.navigator || {},
                s = {
                    ...t.request && t.request.headers,
                    ...r && {
                        Referer: r
                    },
                    ...i && {
                        "User-Agent": i
                    }
                },
                a = {
                    ...t.request,
                    ...e && {
                        url: e
                    },
                    headers: s
                };
            t.request = a
        }
    }),
    OR = "cause",
    PR = 5,
    VR = "LinkedErrors",
    kR = (t = {}) => {
        const e = t.limit || PR,
            r = t.key || OR;
        return {
            name: VR,
            preprocessEvent(i, s, a) {
                const f = a.getOptions();
                $c(Hn, f.stackParser, f.maxValueLength, r, e, i, s)
            }
        }
    },
    MR = kR;

function XR(t) {
    return [fh(), nh(), AR(), pR(), BR(), MR(), Lh(), IR()]
}

function GR(t = {}) {
    return {
        ...{
            defaultIntegrations: XR(),
            release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : z.SENTRY_RELEASE && z.SENTRY_RELEASE.id ? z.SENTRY_RELEASE.id : void 0,
            autoSessionTracking: !0,
            sendClientReports: !0
        },
        ...t
    }
}

function $R() {
    const t = z,
        e = t.chrome ? "chrome" : "browser",
        r = t[e],
        i = r && r.runtime && r.runtime.id,
        s = z.location && z.location.href || "",
        a = ["chrome-extension:", "moz-extension:", "ms-browser-extension:"],
        f = !!i && z === z.top && a.some(u => s.startsWith(`${u}//`));
    return !!i && !f
}

function jR(t = {}) {
    const e = GR(t);
    if ($R()) {
        jt(() => {
            console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
        });
        return
    }
    qe && (Sa() || N.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill."));
    const r = {
            ...e,
            stackParser: sx(e.stackParser || lR),
            integrations: j_(e),
            transport: e.transport || Yh
        },
        i = z_(Ph, r);
    return e.autoSessionTracking && qR(), i
}

function qR() {
    if (typeof z.document > "u") {
        qe && N.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
        return
    }
    is({
        ignoreDuration: !0
    }), ss(), ka(({
        from: t,
        to: e
    }) => {
        t !== void 0 && t !== e && (is({
            ignoreDuration: !0
        }), ss())
    })
}
const FR = "UNABLE TO LOAD. TAP TO TRY AGAIN.",
    HR = {
        RETRY: FR
    },
    WR = "CHARGEMENT IMPOSSIBLE. APPUYEZ POUR RÉESSAYER.",
    zR = {
        RETRY: WR
    },
    YR = "IMPOSSIBILE CARICARE. CLICCA PER RIPROVARE.",
    JR = {
        RETRY: YR
    },
    QR = "LADEN FEHLGESCHLAGEN. DRÜCKEN ZUM ERNEUT VERSUCHEN.",
    ZR = {
        RETRY: QR
    },
    eT = "CARGA FALLIDA. TOCA PARA VOLVER A INTENTARLO.",
    tT = {
        RETRY: eT
    },
    rT = "NO SE PUEDE CARGAR. TOCA PARA VOLVER A INTENTARLO.",
    nT = {
        RETRY: rT
    },
    iT = "NÃO FOI POSSÍVEL CARREGAR. TOQUE PARA TENTAR DE NOVO.",
    sT = {
        RETRY: iT
    },
    Ts = {
        en: HR,
        fr: zR,
        it: JR,
        de: ZR,
        es: tT,
        "es-XL": nT,
        "pt-BR": sT
    };
let aT = class {
    constructor(e) {
        le(this, "manifest");
        le(this, "registered", {});
        le(this, "register", e => {
            this.registered.connect = e.connect, this.registered.mount = e.mount, this.registered.info = e.info
        });
        le(this, "load", async e => {
            document.querySelectorAll("[data-tv-prefetch]").forEach(u => u.remove());
            const i = this.getBranchName(e),
                s = window.tv.manifest.branches[i];
            if (!s) throw new Error(`[loader] Unknown branch "${i}" can not be found in manifest`);
            const a = s.bundles[e.app];
            if (!a) throw new Error(`[loader] Unknown app "${e.app}" can not be loaded from branch "${i}"`);
            try {
                i === "** hmr **" ? await this.loadHMRBundle(a) : i === "** dist **" ? await this.loadDistBundle(a) : await this.loadS3Bundle(a)
            } catch (u) {
                console.error(`[loader] Unable to load "${e.app}" from branch "${i}":`, u), this.showLoaderError();
                return
            }
            if (Ac("[loader] load success", {
                    app: e.app,
                    appVersion: a.version ?? s.version,
                    loaderVersion: window.tv.manifest.loader.version,
                    branch: i
                }), !e.autoMount) return;
            const f = e;
            f.version = a.version ?? s.version, this.mount(f)
        });
        le(this, "connect", (e, r) => {
            if (!this.registered.connect) throw new Error("[loader] There is not a registered connect function");
            return this.registered.connect(e, r)
        });
        le(this, "mount", e => {
            var f, u;
            if (!this.registered.mount) {
                console.error("[loader] There is not a registered app to mount"), this.showLoaderError();
                return
            }
            const r = document.getElementsByClassName("loader-status")[0];
            if (r && r.remove(), this.registered.unmount && this.registered.unmount(), this.registered.info) {
                const o = this.registered.info(e);
                da({
                    branch: o.branch,
                    "app.tag": o.tag,
                    "app.type": o.type,
                    "app.version": o.version,
                    "app.wrapper": o.wrapper
                }), Un.pageView(o.tag)
            }
            xr.setup(e.app, ((f = e.room) == null ? void 0 : f.code) ?? ((u = e.client) == null ? void 0 : u.code));
            const i = document.querySelectorAll("[data-tv-style]"),
                a = Array.from(document.querySelectorAll("[data-tv-prefetch]")).map(o => {
                    const E = document.createElement("link");
                    return E.rel = "stylesheet", E.href = o.href, E.setAttribute("data-tv-style", ""), E
                });
            document.head.append(...a), i.forEach(o => o.remove()), this.registered.unmount = this.registered.mount(e) ?? void 0, delete this.registered.connect, delete this.registered.mount, delete this.registered.info
        });
        le(this, "debugLoad", async (e, r) => {
            throw new Error("[Loader] Debug controllers are not available in production builds")
        });
        this.manifest = e
    }
    getBranchName(e) {
        var a, f, u, o, E;
        const r = (f = (a = e.match) == null ? void 0 : a.params) == null ? void 0 : f.branch,
            i = xr.get("preference:branch"),
            s = this.manifest.branches;
        if (r) return r === "hmr" ? "** hmr **" : r === "dist" ? "** dist **" : r;
        if (e.branch) return e.branch;
        if ((u = s["** hmr **"]) != null && u.bundles[e.app]) return "** hmr **";
        if (i && ((o = s[i]) != null && o.bundles[e.app])) return i;
        if ((E = s["** dist **"]) != null && E.bundles[e.app]) return "** dist **";
        if (s.main) return "main";
        throw new Error("[loader] Could not resolve a branch name and main is not available")
    }
    getS3Url(e, r) {
        return `https://jack.trgu.ru/${r}/${e}`
    }
    async loadHMRBundle(e) {
        const r = e.file;
        await r()
    }
    loadScript(e) {
        return new Promise((r, i) => {
            const s = document.createElement("script");
            s.src = e, s.async = !0, s.type = "module", s.crossOrigin = "", s.onerror = i, s.onload = r, s.setAttribute("data-tv-script", ""), document.head.append(s)
        })
    }
    async fetchBundle(e, r, i) {
        r.forEach(a => {
            const f = i ? this.getS3Url(a, i) : a,
                u = document.createElement("link");
            i ? u.rel = "prefetch" : (u.rel = "preload", u.as = "style"), u.href = f, u.setAttribute("data-tv-prefetch", ""), document.head.append(u)
        });
        const s = i ? this.getS3Url(e, i) : e;
        await this.loadScript(s)
    }
    async loadDistBundle(e) {
        return this.fetchBundle(`/@fs/${e.file}`, e.css)
    }
    async loadS3Bundle(e) {
        return this.fetchBundle(e.file, e.css, e.base)
    }
    showLoaderError() {
        const e = document.getElementsByClassName("loader-status")[0];
        if (!e) return;
        const r = document.createElement("p"),
            i = navigator.languages[0],
            s = Ts[i] ?? Ts.en;
        e.classList.add("error"), r.textContent = s.RETRY, e.append(r), e.addEventListener("click", () => window.location.reload())
    }
};
const bs = {
        EcastEntityNotFound: 2005,
        EcastFilterError: 2021
    },
    fT = ["ceCurrentVideo.currentTime", "chrome-extension", "ResizeObserver", "webkitExitFullScreen", "window.webkit.messageHandlers.selectedTextHandler.postMessage", "promiseResolveThenableJob", "Cannot read property 'then' of undefined", "null is not an object (evaluating 't.scrollHeight')", "Cannot read properties of null (reading 'removeEventListener')"],
    uT = t => {
        jR({
            dsn: "https://bb026273d98c4b99ab11c1de369f521f@o420318.ingest.sentry.io/6387933",
            debug: "false",
            environment: t.environment,
            release: `tv-mono@${t.loader.version}`,
            ignoreErrors: fT,
            beforeSend: async (e, r) => {
                if (r.originalException) {
                    const i = r.originalException;
                    if (i.code === bs.EcastEntityNotFound) return P_("no entity found having key", {
                        extra: {
                            exception: r.originalException
                        }
                    }), null;
                    if (i.code === bs.EcastFilterError) return null
                }
                if (window.tv.onError) try {
                    const i = await window.tv.onError(e, r);
                    i && (e.contexts = e.contexts || {}, e.contexts.debug = i)
                } catch (i) {
                    console.error("failed to send states to ecast", i)
                }
                return e
            }
        }), da({
            "app.tag": "@loader",
            "app.version": t.loader.version,
            "app.type": t.loader.type,
            branch: t.loader.branch
        })
    };
let Ls;
async function gs() {
    if (!Ls) try {
        Ls = await navigator.wakeLock.request("screen")
    } catch (t) {
        console.warn(t)
    }
}
const lT = async () => {
    navigator.wakeLock && (await gs(), document.addEventListener("visibilitychange", () => {
        document.visibilityState === "visible" && gs()
    }))
};

function oT(t) {
    let e = "<div>";
    return t ? (e += `   <h1>Debug JSON Index : ${t}</h1>`, Object.keys(window.tv.debugMap[t]).forEach(r => {
        e += `    <a href="/${window.tv.debugMap[t][r]}" target="_blank">${r}</a>`
    })) : (e += "   <h1>Debug JSON Index</h1>", Object.keys(window.tv.debugMap).sort().forEach(r => {
        e += "    <details>", e += `        <summary>${r}</summary>`, Object.keys(window.tv.debugMap[r]).forEach(i => {
            e += `        <a href="/${window.tv.debugMap[r][i]}" target="_blank">${i}</a>`
        }), e += "    </details>"
    })), e += "</div>", e
}

function ET() {
    return `
    html {
        padding: 30px;
        background: #4254f4;
        color: #fff;
    }

    body {
        background: #4254f4;
    }

    body .loader-status {
        display: none;
    }

    h1 {
        font-size: 24px;
        padding-bottom: 15px;
    }

    details {
        width: 200px;
    }
    
    a {
        display: block;
        padding-left: 20px;
        color: #d4d8ff;
    }
    `
}

function Ss(t) {
    if (!window.tv.debugMap) return;
    const e = document.createElement("style");
    e.innerHTML = ET(), document.getElementsByTagName("html")[0].append(e);
    const i = document.getElementById("app");
    i.innerHTML = oT(t)
}

function pT() {
    const t = window.tv.manifest;
    let e = "<div>";
    e += `   <h1>Current Manifest : ${t.environment}</h1>`;
    const r = new Date(t.loader.lastUpdated);
    return e += "   <h2>Loader</h2>", e += `   <p>last deployed: <strong>${r.toLocaleDateString()} ${r.toLocaleTimeString()}</strong></p>`, e += `   <p>branch: <strong>${t.loader.branch}</strong></p>`, e += `   <p>version: <strong>${t.loader.version}</strong></p>`, e += `   <p>type: <strong>${t.loader.type}</strong></p>`, e += "   <h2>Branches</h2>", Object.keys(t.branches).sort().forEach(i => {
        const s = t.branches[i],
            a = new Date(s.lastUpdated);
        e += "    <details>", e += "        <summary>", e += `            <span class="name">${i}</span>`, e += `            <span class="version">${s.version}</span>`, e += `            <span class="date">${a.toLocaleDateString()} ${a.toLocaleTimeString()}</span>`, e += `            <span class="type">${s.type}</span>`, e += `            <span class="type">${Object.keys(s.bundles).length} Apps</span>`, e += "        </summary>", Object.keys(s.bundles).forEach(f => {
            const u = s.bundles[f];
            u.version ? e += `        <p><span class="name">${f}</span> <span class="version">${u.version}</span></p>` : e += `        <p><span class="name">${f}</span> <span class="version">${s.version}</span></p>`
        }), e += "    </details>"
    }), e += "</div>", e
}

function cT() {
    return `
    html {
        padding: 30px;
        background: #4254f4;
        color: #fff;
    }

    body {
        background: #4254f4;
    }

    body .loader-status {
        display: none;
    }

    h1 {
        font-size: 24px;
    }

    h2 {
        padding-top: 30px;
    }

    details {
        padding: 3px 0;
        border-bottom: 1px solid #a4adfa;
    }

    details span {
        font-size: 14px;
        display: inline-block;
    }

    span.name {
        width: 175px;
    }

    span.version {
        width: 225px;
    }

    span.date {
        width: 225px;
        font-style: italic;
    }

    span.type {
        color: #4254F4;
        font-size: 11px;
        padding: 2px 10px 0px;
        background: #fff;
        border-radius: 10px;
    }
    
    details p {
        padding: 3px 0;
        padding-left: 30px;
        font-size: 14px;
    }

    details p:nth-child(odd) {
        background: rgba(255, 255, 255, 0.1);
    }
    `
}

function xT() {
    if (!window.tv.manifest) return;
    const t = document.createElement("style");
    t.innerHTML = cT(), document.getElementsByTagName("html")[0].append(t);
    const r = document.getElementById("app");
    r.innerHTML = pT()
}
const _T = {
        routes: [{
            path: "/",
            load: "@connect"
        }, {
            path: ["/past-games", "/past-games/:galleryId"],
            load: "@connect"
        }, {
            path: "/gallery",
            redirect: "/past-games"
        }, {
            path: "/gallery/:galleryId",
            handler: t => ({
                redirect: `/past-games/${t.data.galleryId}`
            })
        }, {
            path: ["/gallery/:galleryId/:artifactId", "/gallery/:galleryId/:artifactId/:itemId"],
            handler: t => {
                const e = pi(t.data.galleryId);
                return !e || !e.categoryId ? {
                    redirect: "/"
                } : (t.data.categoryId = e.categoryId, {
                    load: e.tag
                })
            }
        }, {
            path: "/render/:galleryId/:artifactId/:renderer",
            handler: t => {
                const e = pi(t.data.galleryId);
                return !e || !e.categoryId ? {
                    redirect: "/"
                } : {
                    load: e.tag
                }
            }
        }, {
            path: "/moderator",
            load: "@moderator"
        }, {
            path: ["/moderate", "/moderation", "/moderador", "/moderateur", "/moderatore"],
            redirect: "/moderator"
        }, {
            path: "/manifest",
            handler: () => {
                xT()
            }
        }, {
            path: "/debug",
            handler: () => {
                Ss()
            }
        }, {
            path: ["/debug/:app", "/debug/local/:app"],
            handler: t => {
                Ss(t.data.app)
            }
        }, {
            path: ["/debug/local/:app/:file", "/debug/local/:app/:file/:marker"],
            debugLoad: "local"
        }, {
            path: ["/debug/cloud/:app/:file", "/debug/cloud/:app/:file/:marker"],
            debugLoad: "cloud"
        }]
    },
    hT = {
        hmrApps: ["teeko-web"],
        hostnames: ["teeko.jackboxgames.com"],
        routes: [{
            path: ["/", "/event"],
            load: "@teeko-web"
        }]
    };
class RT {
    constructor(e) {
        le(this, "hmrApp", "loader");
        le(this, "sites");
        this.sites = e;
        const r = this.getMatch(window.location.pathname);
        this.executeMatch(r)
    }
    executeMatch(e) {
        var i, s;
        const r = ((s = e == null ? void 0 : (i = e.route).handler) == null ? void 0 : s.call(i, e)) ?? (e == null ? void 0 : e.route);
        if (!e || !r) {
            this.redirect("/", e);
            return
        }
        if (r.debugLoad) {
            window.tv.debugLoad(r.debugLoad, e);
            return
        }
        if (r.load) {
            window.tv.load({
                app: r.load,
                match: e,
                autoMount: e.route.autoMount ?? !0
            });
            return
        }
        if (e.route.redirect) {
            this.redirect(e.route.redirect, e);
            return
        }
        if (!e.route.handler) throw console.error(e), new Error("[Router] Unable to execute match")
    }
    redirect(e, r) {
        const i = this.getMatch(e);
        if (!i) throw new Error("[Router] Redirecting to an unexpected path causes an infinite redirect loop");
        r && (i.hashString || (i.hashString = r.hashString), i.params || (i.params = r.params), i.queryString || (i.queryString = r.queryString)), window.history.replaceState(null, "", e), this.executeMatch(i)
    }
    getSite() {
        const e = document.location.hostname;
        return (e === "localhost" || e === "127.0.0.1" ? this.sites.find(i => {
            var s;
            return (s = i.hmrApps) == null ? void 0 : s.includes(this.hmrApp)
        }) : this.sites.find(i => {
            var s;
            return (s = i.hostnames) == null ? void 0 : s.includes(e)
        })) ?? this.sites[0]
    }
    splitPath(e) {
        return e.replace(/^\s*\/*\s*|\s*\/*\s*$/g, "").split("/")
    }
    matchRouteToPath(e, r) {
        if (e.length !== r.length) return !1;
        for (let i = 0; i < e.length; i++)
            if (e[i][0] !== ":" && e[i] !== r[i]) return !1;
        return !0
    }
    getRoute(e, r) {
        const i = this.splitPath(e);
        for (let s = 0; s < r.length; s++) {
            const a = Array.isArray(r[s].path) ? r[s].path : [r[s].path];
            for (let f = 0; f < a.length; f++) {
                const u = this.splitPath(a[f]);
                if (this.matchRouteToPath(u, i)) return {
                    route: r[s],
                    parts: u
                }
            }
        }
        return null
    }
    parseData(e, r) {
        const i = {},
            s = this.splitPath(e);
        for (let a = 0; a < r.parts.length; a++) r.parts[a][0] === ":" && (i[r.parts[a].substring(1)] = s[a]);
        return i
    }
    parseParams() {
        if (!document.location.search) return {};
        const e = new URLSearchParams(document.location.search);
        return Object.fromEntries(e)
    }
    getMatch(e) {
        const r = this.getSite(),
            i = this.getRoute(e, r.routes);
        if (!i) return null;
        const s = {
            url: document.location.href,
            route: i.route,
            path: i.parts.join("/"),
            parts: i.parts,
            data: this.parseData(e, i),
            params: this.parseParams()
        };
        if (document.location.hash) {
            let a = document.location.hash;
            document.location.hash[0] === "#" && (a = a.substring(1)), s.hashString = a
        }
        return document.location.search && (s.queryString = document.location.search), s
    }
}
const TT = "production",
    bT = 1,
    LT = {
        branch: "main",
        sha: "786b1c2f871d1ce76e7443c688a1395600a408e5",
        lastUpdated: 1727192487560,
        version: "5.619.297",
        type: "production"
    },
    gT = {
        main: {
            sha: "786b1c2f871d1ce76e7443c688a1395600a408e5",
            lastUpdated: 1727192487560,
            version: "5.619.297",
            type: "production",
            bundles: {
                "@connect": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/@connect",
                    version: "5.42.0"
                },
                "the-wheel": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp8/the-wheel",
                    version: "5.12.0"
                },
                "drawful-animate": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp8/drawful-animate",
                    version: "5.28.0"
                },
                "@moderator": {
                    file: "DEtEn-QT.js",
                    css: ["assets/BwcRbXZd.css"],
                    base: "main/@moderator",
                    version: "5.42.0"
                },
                "awshirt-tjsp": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/tjsp/awshirt",
                    version: "5.20.0"
                },
                "ecast-test-client": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/internal/ecast-test-client",
                    version: "5.0.0"
                },
                drawful: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp1/drawful",
                    version: "5.0.0"
                },
                fibbage: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp1/fibbage",
                    version: "5.0.0"
                },
                lieswatter: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp1/lieswatter",
                    version: "5.0.0"
                },
                wordspud: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp1/wordspud",
                    version: "5.0.0"
                },
                ydkj2015: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp1/ydkj2015",
                    version: "5.0.0"
                },
                auction: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp2/auction",
                    version: "5.11.0"
                },
                bombintern: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp2/bombintern",
                    version: "5.10.0"
                },
                earwax: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp2-earwax",
                    version: "5.23.0"
                },
                fibbage2: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp2/fibbage2",
                    version: "5.3.0"
                },
                quiplash: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp2/quiplash",
                    version: "5.10.0"
                },
                awshirt: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp3/awshirt",
                    version: "5.10.0"
                },
                fakinit: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp3/fakinit",
                    version: "5.3.0"
                },
                pollposition: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp3/pollposition",
                    version: "5.3.0"
                },
                quiplash2: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp3/quiplash2",
                    version: "5.10.0"
                },
                triviadeath: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp3/triviadeath",
                    version: "5.10.0"
                },
                bracketeering: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp4/bracketeering",
                    version: "5.3.0"
                },
                fibbage3: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp4/fibbage3",
                    version: "5.3.0"
                },
                monstermingle: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp4/monstermingle",
                    version: "5.3.0"
                },
                overdrawn: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp4/overdrawn",
                    version: "5.3.0"
                },
                survivetheinternet: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp4/survivetheinternet",
                    version: "5.3.0"
                },
                patentlystupid: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp5/patentlystupid",
                    version: "5.3.0"
                },
                rapbattle: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp5/rapbattle",
                    version: "5.3.0"
                },
                slingshoot: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp5/slingshoot",
                    version: "5.3.0"
                },
                splittheroom: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp5/splittheroom",
                    version: "5.3.0"
                },
                ydkj2018: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp5/ydkj2018",
                    version: "5.3.0"
                },
                jokeboat: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp6/jokeboat",
                    version: "5.3.0"
                },
                pushthebutton: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp6/pushthebutton",
                    version: "5.0.0"
                },
                ridictionary: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp6/ridictionary",
                    version: "5.3.0"
                },
                rolemodels: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp6/rolemodels",
                    version: "5.25.0"
                },
                triviadeath2: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp6/triviadeath2",
                    version: "5.3.0"
                },
                "blanky-blank": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp7/blanky-blank",
                    version: "5.3.0"
                },
                everyday: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp7/everyday",
                    version: "5.3.0"
                },
                "jackbox-talks": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp7/jackboxtalks",
                    version: "5.25.0"
                },
                quiplash3: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp7/quiplash3",
                    version: "5.18.0"
                },
                worldchamps: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp7/worldchampions",
                    version: "5.3.0"
                },
                "acquisitions-inc": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/standalone/acquisitions-inc",
                    version: "5.3.0"
                },
                drawful2international: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/standalone/drawful2-international",
                    version: "5.3.0"
                },
                drawful2: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/standalone/drawful2",
                    version: "5.10.0"
                },
                "guesspionage-crowdplay": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/standalone/guesspionage-crowdplay",
                    version: "5.0.0"
                },
                "quiplash2-international": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/standalone/quiplash2-international",
                    version: "5.3.0"
                },
                "survey-bomb": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp8/survey-bomb",
                    version: "5.0.0"
                },
                "triviadeath2-tjsp": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/tjsp/triviadeath2",
                    version: "5.30.0"
                },
                "murder-detectives": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp8/murder-detectives",
                    version: "5.0.0"
                },
                "quiplash3-tjsp": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/tjsp/quiplash3",
                    version: "5.0.0"
                },
                "apply-yourself": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp8/apply-yourself",
                    version: "5.0.0"
                },
                "antique-freak": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp9/antique-freak",
                    version: "5.35.0"
                },
                fourbage: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp9/fourbage",
                    version: "5.41.0"
                },
                htmf: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp9/htmf",
                    version: "5.39.0"
                },
                lineup: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp9/lineup",
                    version: "5.42.0"
                },
                "range-game": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp9/range-game",
                    version: "5.42.0"
                },
                "risky-text": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp10/risky-text",
                    feature: "",
                    version: "5.247.119 | jackbox.tv"
                },
                "nopus-opus": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp10/nopus-opus",
                    feature: "",
                    version: "5.247.119 | jackbox.tv"
                },
                awshirt2: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp10/awshirt2",
                    version: "5.253.119"
                },
                "us-them": {
                    file: "script.js",
                    css: ["assets/a3244aaa.css"],
                    base: "main/pp10/us-them",
                    version: "5.348.128"
                },
                captcha: {
                  file: "CERp_1mn.js",
                  css: ["assets/BWdyAkp8.css"],
                  base: "main/ppad-captcha",
                  version: "5.576.281"
                },
                drawful3: {
                  file: "Ls7WO3NW.js",
                  css: ["assets/DI0HFLl5.css"],
                  base: "main/ppad-drawful3",
                  version: "5.575.281"
                },
                fakinit2: {
                  file: "CfMq9O92.js",
                  css: ["assets/BT6yZ-Xa.css"],
                  base: "main/ppad-fakinit2",
                  version: "5.578.281"
                },
                bigsurvey: {
                    file: "D4nF_wAD.js",
                    css: ["assets/DDQDvQQg.css"],
                    base: "main/standalone-bigsurvey",
                    version: "5.640.297"
                }
            }
        }
    },
    ST = {
        environment: TT,
        version: bT,
        loader: LT,
        branches: gT
    },
    Yn = ST;
let AT = aT;
const It = new AT(Yn);
window.tv = {
    apps: Pc,
    debugLoad: It.debugLoad,
    load: It.load,
    games: Is,
    register: It.register,
    mount: It.mount,
    connect: It.connect,
    manifest: Yn
};
uT(Yn);
Un.setup();
xr.setup();
lT();
new RT([_T, hT]);
//# sourceMappingURL=Uw4J37az.js.map