jQuery(function(f) {
    var e = f("meta[name=csrf-token]").attr("content"),
        g = f("meta[name=csrf-param]").attr("content");
    f.fn.extend({
        triggerAndReturn: function(h, j) {
            var i = new f.Event(h);
            this.trigger(i, j);
            return i.result !== false
        },
        callRemote: function() {
            var j = this,
                l = j.attr("method") || j.attr("data-method") || "GET",
                i = j.attr("action") || j.attr("href"),
                h = j.attr("data-type") || "script";
            if (i === undefined) {
                throw "No URL specified for remote call (action or href must be present)."
            } else {
                if (j.triggerAndReturn("ajax:before")) {
                    var k = j.is("form") ? j.serializeArray() : [];
                    f.ajax({
                        url: i,
                        data: k,
                        dataType: h,
                        type: l.toUpperCase(),
                        beforeSend: function(m) {
                            j.trigger("ajax:loading", m)
                        },
                        success: function(n, m, o) {
                            j.trigger("ajax:success", [n, m, o])
                        },
                        complete: function(m) {
                            j.trigger("ajax:complete", m)
                        },
                        error: function(o, m, n) {
                            j.trigger("ajax:failure", [o, m, n])
                        }
                    })
                }
                j.trigger("ajax:after")
            }
        }
    });
    f("a[data-confirm],input[data-confirm]").live("click", function() {
        var h = f(this);
        if (h.triggerAndReturn("confirm")) {
            if (!confirm(h.attr("data-confirm"))) {
                return false
            }
        }
    });
    f("form[data-remote]").live("submit", function(h) {
        f(this).callRemote();
        h.preventDefault()
    });
    f("a[data-remote],input[data-remote]").live("click", function(h) {
        f(this).callRemote();
        h.preventDefault()
    });
    f("a[data-method]:not([data-remote])").live("click", function(l) {
        var k = f(this),
            i = k.attr("href"),
            m = k.attr("data-method"),
            j = f('<form method="post" action="' + i + '"></form>'),
            h = '<input name="_method" value="' + m + '" type="hidden" />';
        if (g != null && e != null) {
            h += '<input name="' + g + '" value="' + e + '" type="hidden" />'
        }
        j.hide().append(h).appendTo("body");
        l.preventDefault();
        j.submit()
    });
    var c = "input[data-disable-with]";
    var d = "form[data-remote]:has(" + c + ")";
    var b = "form:not([data-remote]):has(" + c + ")";
    var a = function() {
        f(this).find(c).each(function() {
            var h = f(this);
            h.data("enable-with", h.val()).attr("value", h.attr("data-disable-with")).attr("disabled", "disabled")
        })
    };
    f(d).live("ajax:before", a);
    f(b).live("submit", a);
    f(d).live("ajax:complete", function() {
        f(this).find(c).each(function() {
            var h = f(this);
            h.removeAttr("disabled").val(h.data("enable-with"))
        })
    })
});
(function() {
    var u = this;
    var r = u._;
    var b = {};
    var i = Array.prototype,
        B = Object.prototype,
        D = Function.prototype;
    var s = i.slice,
        w = i.unshift,
        v = B.toString,
        o = B.hasOwnProperty;
    var m = i.forEach,
        h = i.map,
        z = i.reduce,
        e = i.reduceRight,
        l = i.filter,
        a = i.every,
        y = i.some,
        t = i.indexOf,
        f = i.lastIndexOf,
        c = Array.isArray,
        A = Object.keys,
        j = D.bind;
    var C = function(E) {
        return new g(E)
    };
    if (typeof module !== "undefined" && module.exports) {
        module.exports = C;
        C._ = C
    } else {
        u._ = C
    }
    C.VERSION = "1.1.7";
    var d = C.each = C.forEach = function(J, I, H) {
        if (J == null) {
            return
        }
        if (m && J.forEach === m) {
            J.forEach(I, H)
        } else {
            if (J.length === +J.length) {
                for (var G = 0, E = J.length; G < E; G++) {
                    if (G in J && I.call(H, J[G], G, J) === b) {
                        return
                    }
                }
            } else {
                for (var F in J) {
                    if (o.call(J, F)) {
                        if (I.call(H, J[F], F, J) === b) {
                            return
                        }
                    }
                }
            }
        }
    };
    C.map = function(H, G, F) {
        var E = [];
        if (H == null) {
            return E
        }
        if (h && H.map === h) {
            return H.map(G, F)
        }
        d(H, function(K, I, J) {
            E[E.length] = G.call(F, K, I, J)
        });
        return E
    };
    C.reduce = C.foldl = C.inject = function(I, H, E, G) {
        var F = E !== void 0;
        if (I == null) {
            I = []
        }
        if (z && I.reduce === z) {
            if (G) {
                H = C.bind(H, G)
            }
            return F ? I.reduce(H, E) : I.reduce(H)
        }
        d(I, function(L, J, K) {
            if (!F) {
                E = L;
                F = true
            } else {
                E = H.call(G, E, L, J, K)
            }
        });
        if (!F) {
            throw new TypeError("Reduce of empty array with no initial value")
        }
        return E
    };
    C.reduceRight = C.foldr = function(H, G, E, F) {
        if (H == null) {
            H = []
        }
        if (e && H.reduceRight === e) {
            if (F) {
                G = C.bind(G, F)
            }
            return E !== void 0 ? H.reduceRight(G, E) : H.reduceRight(G)
        }
        var I = (C.isArray(H) ? H.slice() : C.toArray(H)).reverse();
        return C.reduce(I, G, E, F)
    };
    C.find = C.detect = function(H, G, F) {
        var E;
        p(H, function(K, I, J) {
            if (G.call(F, K, I, J)) {
                E = K;
                return true
            }
        });
        return E
    };
    C.filter = C.select = function(H, G, F) {
        var E = [];
        if (H == null) {
            return E
        }
        if (l && H.filter === l) {
            return H.filter(G, F)
        }
        d(H, function(K, I, J) {
            if (G.call(F, K, I, J)) {
                E[E.length] = K
            }
        });
        return E
    };
    C.reject = function(H, G, F) {
        var E = [];
        if (H == null) {
            return E
        }
        d(H, function(K, I, J) {
            if (!G.call(F, K, I, J)) {
                E[E.length] = K
            }
        });
        return E
    };
    C.every = C.all = function(H, G, F) {
        var E = true;
        if (H == null) {
            return E
        }
        if (a && H.every === a) {
            return H.every(G, F)
        }
        d(H, function(K, I, J) {
            if (!(E = E && G.call(F, K, I, J))) {
                return b
            }
        });
        return E
    };
    var p = C.some = C.any = function(H, G, F) {
        G = G || C.identity;
        var E = false;
        if (H == null) {
            return E
        }
        if (y && H.some === y) {
            return H.some(G, F)
        }
        d(H, function(K, I, J) {
            if (E |= G.call(F, K, I, J)) {
                return b
            }
        });
        return !!E
    };
    C.include = C.contains = function(G, F) {
        var E = false;
        if (G == null) {
            return E
        }
        if (t && G.indexOf === t) {
            return G.indexOf(F) != -1
        }
        p(G, function(H) {
            if (E = H === F) {
                return true
            }
        });
        return E
    };
    C.invoke = function(F, G) {
        var E = s.call(arguments, 2);
        return C.map(F, function(H) {
            return (G.call ? G || H : H[G]).apply(H, E)
        })
    };
    C.pluck = function(F, E) {
        return C.map(F, function(G) {
            return G[E]
        })
    };
    C.max = function(H, G, F) {
        if (!G && C.isArray(H)) {
            return Math.max.apply(Math, H)
        }
        var E = {
            computed: -Infinity
        };
        d(H, function(L, I, K) {
            var J = G ? G.call(F, L, I, K) : L;
            J >= E.computed && (E = {
                value: L,
                computed: J
            })
        });
        return E.value
    };
    C.min = function(H, G, F) {
        if (!G && C.isArray(H)) {
            return Math.min.apply(Math, H)
        }
        var E = {
            computed: Infinity
        };
        d(H, function(L, I, K) {
            var J = G ? G.call(F, L, I, K) : L;
            J < E.computed && (E = {
                value: L,
                computed: J
            })
        });
        return E.value
    };
    C.sortBy = function(G, F, E) {
        return C.pluck(C.map(G, function(J, H, I) {
            return {
                value: J,
                criteria: F.call(E, J, H, I)
            }
        }).sort(function(K, J) {
            var I = K.criteria,
                H = J.criteria;
            return I < H ? -1 : I > H ? 1 : 0
        }), "value")
    };
    C.groupBy = function(G, F) {
        var E = {};
        d(G, function(J, H) {
            var I = F(J, H);
            (E[I] || (E[I] = [])).push(J)
        });
        return E
    };
    C.sortedIndex = function(J, I, G) {
        G || (G = C.identity);
        var E = 0,
            H = J.length;
        while (E < H) {
            var F = (E + H) >> 1;
            G(J[F]) < G(I) ? E = F + 1 : H = F
        }
        return E
    };
    C.toArray = function(E) {
        if (!E) {
            return []
        }
        if (E.toArray) {
            return E.toArray()
        }
        if (C.isArray(E)) {
            return s.call(E)
        }
        if (C.isArguments(E)) {
            return s.call(E)
        }
        return C.values(E)
    };
    C.size = function(E) {
        return C.toArray(E).length
    };
    C.first = C.head = function(G, F, E) {
        return (F != null) && !E ? s.call(G, 0, F) : G[0]
    };
    C.rest = C.tail = function(G, E, F) {
        return s.call(G, (E == null) || F ? 1 : E)
    };
    C.last = function(E) {
        return E[E.length - 1]
    };
    C.compact = function(E) {
        return C.filter(E, function(F) {
            return !!F
        })
    };
    C.flatten = function(E) {
        return C.reduce(E, function(F, G) {
            if (C.isArray(G)) {
                return F.concat(C.flatten(G))
            }
            F[F.length] = G;
            return F
        }, [])
    };
    C.without = function(E) {
        return C.difference(E, s.call(arguments, 1))
    };
    C.uniq = C.unique = function(F, E) {
        return C.reduce(F, function(G, I, H) {
            if (0 == H || (E === true ? C.last(G) != I : !C.include(G, I))) {
                G[G.length] = I
            }
            return G
        }, [])
    };
    C.union = function() {
        return C.uniq(C.flatten(arguments))
    };
    C.intersection = C.intersect = function(F) {
        var E = s.call(arguments, 1);
        return C.filter(C.uniq(F), function(G) {
            return C.every(E, function(H) {
                return C.indexOf(H, G) >= 0
            })
        })
    };
    C.difference = function(F, E) {
        return C.filter(F, function(G) {
            return !C.include(E, G)
        })
    };
    C.zip = function() {
        var E = s.call(arguments);
        var H = C.max(C.pluck(E, "length"));
        var G = new Array(H);
        for (var F = 0; F < H; F++) {
            G[F] = C.pluck(E, "" + F)
        }
        return G
    };
    C.indexOf = function(I, G, H) {
        if (I == null) {
            return -1
        }
        var F, E;
        if (H) {
            F = C.sortedIndex(I, G);
            return I[F] === G ? F : -1
        }
        if (t && I.indexOf === t) {
            return I.indexOf(G)
        }
        for (F = 0, E = I.length; F < E; F++) {
            if (I[F] === G) {
                return F
            }
        }
        return -1
    };
    C.lastIndexOf = function(G, F) {
        if (G == null) {
            return -1
        }
        if (f && G.lastIndexOf === f) {
            return G.lastIndexOf(F)
        }
        var E = G.length;
        while (E--) {
            if (G[E] === F) {
                return E
            }
        }
        return -1
    };
    C.range = function(J, H, I) {
        if (arguments.length <= 1) {
            H = J || 0;
            J = 0
        }
        I = arguments[2] || 1;
        var F = Math.max(Math.ceil((H - J) / I), 0);
        var E = 0;
        var G = new Array(F);
        while (E < F) {
            G[E++] = J;
            J += I
        }
        return G
    };
    C.bind = function(F, G) {
        if (F.bind === j && j) {
            return j.apply(F, s.call(arguments, 1))
        }
        var E = s.call(arguments, 2);
        return function() {
            return F.apply(G, E.concat(s.call(arguments)))
        }
    };
    C.bindAll = function(F) {
        var E = s.call(arguments, 1);
        if (E.length == 0) {
            E = C.functions(F)
        }
        d(E, function(G) {
            F[G] = C.bind(F[G], F)
        });
        return F
    };
    C.memoize = function(G, F) {
        var E = {};
        F || (F = C.identity);
        return function() {
            var H = F.apply(this, arguments);
            return o.call(E, H) ? E[H] : (E[H] = G.apply(this, arguments))
        }
    };
    C.delay = function(F, G) {
        var E = s.call(arguments, 2);
        return setTimeout(function() {
            return F.apply(F, E)
        }, G)
    };
    C.defer = function(E) {
        return C.delay.apply(C, [E, 1].concat(s.call(arguments, 1)))
    };
    var x = function(F, H, E) {
        var G;
        return function() {
            var J = this,
                I = arguments;
            var K = function() {
                G = null;
                F.apply(J, I)
            };
            if (E) {
                clearTimeout(G)
            }
            if (E || !G) {
                G = setTimeout(K, H)
            }
        }
    };
    C.throttle = function(E, F) {
        return x(E, F, false)
    };
    C.debounce = function(E, F) {
        return x(E, F, true)
    };
    C.once = function(G) {
        var E = false,
            F;
        return function() {
            if (E) {
                return F
            }
            E = true;
            return F = G.apply(this, arguments)
        }
    };
    C.wrap = function(E, F) {
        return function() {
            var G = [E].concat(s.call(arguments));
            return F.apply(this, G)
        }
    };
    C.compose = function() {
        var E = s.call(arguments);
        return function() {
            var F = s.call(arguments);
            for (var G = E.length - 1; G >= 0; G--) {
                F = [E[G].apply(this, F)]
            }
            return F[0]
        }
    };
    C.after = function(F, E) {
        return function() {
            if (--F < 1) {
                return E.apply(this, arguments)
            }
        }
    };
    C.keys = A ||
    function(G) {
        if (G !== Object(G)) {
            throw new TypeError("Invalid object")
        }
        var F = [];
        for (var E in G) {
            if (o.call(G, E)) {
                F[F.length] = E
            }
        }
        return F
    };
    C.values = function(E) {
        return C.map(E, C.identity)
    };
    C.functions = C.methods = function(G) {
        var F = [];
        for (var E in G) {
            if (C.isFunction(G[E])) {
                F.push(E)
            }
        }
        return F.sort()
    };
    C.extend = function(E) {
        d(s.call(arguments, 1), function(F) {
            for (var G in F) {
                if (F[G] !== void 0) {
                    E[G] = F[G]
                }
            }
        });
        return E
    };
    C.defaults = function(E) {
        d(s.call(arguments, 1), function(F) {
            for (var G in F) {
                if (E[G] == null) {
                    E[G] = F[G]
                }
            }
        });
        return E
    };
    C.clone = function(E) {
        return C.isArray(E) ? E.slice() : C.extend({}, E)
    };
    C.tap = function(F, E) {
        E(F);
        return F
    };
    C.isEqual = function(F, E) {
        if (F === E) {
            return true
        }
        var I = typeof(F),
            K = typeof(E);
        if (I != K) {
            return false
        }
        if (F == E) {
            return true
        }
        if ((!F && E) || (F && !E)) {
            return false
        }
        if (F._chain) {
            F = F._wrapped
        }
        if (E._chain) {
            E = E._wrapped
        }
        if (F.isEqual) {
            return F.isEqual(E)
        }
        if (E.isEqual) {
            return E.isEqual(F)
        }
        if (C.isDate(F) && C.isDate(E)) {
            return F.getTime() === E.getTime()
        }
        if (C.isNaN(F) && C.isNaN(E)) {
            return false
        }
        if (C.isRegExp(F) && C.isRegExp(E)) {
            return F.source === E.source && F.global === E.global && F.ignoreCase === E.ignoreCase && F.multiline === E.multiline
        }
        if (I !== "object") {
            return false
        }
        if (F.length && (F.length !== E.length)) {
            return false
        }
        var G = C.keys(F),
            J = C.keys(E);
        if (G.length != J.length) {
            return false
        }
        for (var H in F) {
            if (!(H in E) || !C.isEqual(F[H], E[H])) {
                return false
            }
        }
        return true
    };
    C.isEmpty = function(F) {
        if (C.isArray(F) || C.isString(F)) {
            return F.length === 0
        }
        for (var E in F) {
            if (o.call(F, E)) {
                return false
            }
        }
        return true
    };
    C.isElement = function(E) {
        return !!(E && E.nodeType == 1)
    };
    C.isArray = c ||
    function(E) {
        return v.call(E) === "[object Array]"
    };
    C.isObject = function(E) {
        return E === Object(E)
    };
    C.isArguments = function(E) {
        return !!(E && o.call(E, "callee"))
    };
    C.isFunction = function(E) {
        return !!(E && E.constructor && E.call && E.apply)
    };
    C.isString = function(E) {
        return !!(E === "" || (E && E.charCodeAt && E.substr))
    };
    C.isNumber = function(E) {
        return !!(E === 0 || (E && E.toExponential && E.toFixed))
    };
    C.isNaN = function(E) {
        return E !== E
    };
    C.isBoolean = function(E) {
        return E === true || E === false
    };
    C.isDate = function(E) {
        return !!(E && E.getTimezoneOffset && E.setUTCFullYear)
    };
    C.isRegExp = function(E) {
        return !!(E && E.test && E.exec && (E.ignoreCase || E.ignoreCase === false))
    };
    C.isNull = function(E) {
        return E === null
    };
    C.isUndefined = function(E) {
        return E === void 0
    };
    C.noConflict = function() {
        u._ = r;
        return this
    };
    C.identity = function(E) {
        return E
    };
    C.times = function(H, G, F) {
        for (var E = 0; E < H; E++) {
            G.call(F, E)
        }
    };
    C.mixin = function(E) {
        d(C.functions(E), function(F) {
            q(F, C[F] = E[F])
        })
    };
    var k = 0;
    C.uniqueId = function(E) {
        var F = k++;
        return E ? E + F : F
    };
    C.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g
    };
    C.template = function(H, G) {
        var I = C.templateSettings;
        var E = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + H.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(I.interpolate, function(J, K) {
            return "'," + K.replace(/\\'/g, "'") + ",'"
        }).replace(I.evaluate || null, function(J, K) {
            return "');" + K.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ") + "__p.push('"
        }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');";
        var F = new Function("obj", E);
        return G ? F(G) : F
    };
    var g = function(E) {
        this._wrapped = E
    };
    C.prototype = g.prototype;
    var n = function(F, E) {
        return E ? C(F).chain() : F
    };
    var q = function(E, F) {
        g.prototype[E] = function() {
            var G = s.call(arguments);
            w.call(G, this._wrapped);
            return n(F.apply(C, G), this._chain)
        }
    };
    C.mixin(C);
    d(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(E) {
        var F = i[E];
        g.prototype[E] = function() {
            F.apply(this._wrapped, arguments);
            return n(this._wrapped, this._chain)
        }
    });
    d(["concat", "join", "slice"], function(E) {
        var F = i[E];
        g.prototype[E] = function() {
            return n(F.apply(this._wrapped, arguments), this._chain)
        }
    });
    g.prototype.chain = function() {
        this._chain = true;
        return this
    };
    g.prototype.value = function() {
        return this._wrapped
    }
})();
(function() {
    $(document).ready(function() {
        var a;
        a = window.mpmetrics || (window.mpq && window.mpq.metrics);
        if (a) {
            $(".trending-stories .share_button").click(function() {
                return a.track("Share button clicked", {
                    unit: "Trending Stories"
                })
            });
            $("article.post.full .share_button").click(function() {
                return a.track("Share button clicked", {
                    unit: "Full Article"
                })
            });
            $(".more-in .share_button").click(function() {
                return a.track("Share button clicked", {
                    unit: "More Stories (after post)"
                })
            });
            $("article.post.short .share_button").click(function() {
                return a.track("Share button clicked", {
                    unit: "Short Post (Homepage, Follow, etc)"
                })
            });
            $("#google_plus_bar .add-mashable").click(function() {
                return a.track("Google Plus Alert", {
                    action: "View Profile"
                })
            });
            $("#google_plus_bar .close").click(function() {
                return a.track("Google Plus Alert", {
                    action: "Close"
                })
            });
            $(".user_feed .activity .share_button").click(function() {
                return a.track("Share button clicked", {
                    unit: "Activity Feed"
                })
            });
            return $("a.popup").live("click", function() {
                var b;
                b = $(this).attr("href").split("/").pop().split("&").shift();
                return a.track("Click Login Button", {
                    service: b
                })
            })
        }
    })
}).call(this);
(function() {
    var a;
    window || (window = this);
    document || (document = window.document);
    a = null;
    this.flash = function(j, c) {
        var b, d, f, g, e, h;
        if (!(j instanceof Array)) {
            j = [j]
        }
        if (j.length === 0) {
            return
        }
        f = "";
        for (g = 0, h = j.length - 1; 0 <= h ? g <= h : g >= h; 0 <= h ? g++ : g--) {
            if (c) {
                e = c[g]
            }
            f += "<div class='flash-content " + e + "'>" + j[g] + "</div>"
        }
        b = $(".flash");
        d = $(".flash-wrap");
        b.css({
            opacity: 0
        }).show();
        d.html(f);
        return setTimeout(function() {
            var i;
            d.css({
                opacity: 0
            });
            b.removeClass("hidden").css({
                opacity: 0
            }).show().animate({
                opacity: 1
            }, 250, function() {
                return d.animate({
                    opacity: 1
                }, 250)
            });
            i = b.data("timeout");
            if (i) {
                return clearTimeout(i)
            }
        }, 350)
    };
    this.popupCenter = function(d, e, b, c) {
        var g, f;
        g = (screen.width / 2) - (e / 2);
        f = (screen.height / 2) - (b / 2);
        return window.open(d, c, "menubar=no,toolbar=no,status=no,width=" + e + ",height=" + b + ",toolbar=no,left=" + g + ",top=" + f)
    };
    this.checkChildClosed = function() {
        if (checkWin && checkWin.closed) {
            $.simpleDialog.close();
            return clearInterval(checkInterval)
        }
    };
    this.invokeLogin = function(c, e) {
        var b, d;
        if (c) {
            $.simpleDialogManual({
                duration: 130,
                easing: "swing",
                opacity: 0.5,
                containerClass: "sd_loading_container",
                content: " "
            });
            d = e;
            return b = setInterval(checkChildClosed, 50)
        } else {
            return $.simpleDialogManualAjax({
                duration: 130,
                easing: "swing",
                opacity: 0.5
            }, "/follow/login?" + new Date().getTime(), {}, "GET")
        }
    };
    this.returnFromPopup = function(b) {
        var g, d, e, c;
        if (b) {
            e = [];
            c = [];
            for (d in b) {
                g = b[d];
                e.push(g);
                c.push(d)
            }
            if (e.length > 0) {
                flash(e, c)
            }
        }
        if (window.checkInterval) {
            clearInterval(window.checkInterval)
        }
        $.simpleDialogManual({
            duration: 130,
            easing: "swing",
            opacity: 0.5,
            content: "<h1 style='width: 320px;'><span class='ajax_loader'></span> Refreshing, please wait...</h1>"
        });
        window.location.reload(true);
        return true
    };
    this.dfpt = function(c) {
        var e, d, f, b;
        b = [];
        for (d in c) {
            e = c[d];
            b.push((function() {
                var i, g, h;
                h = [];
                for (i = 0, g = e.length; i < g; i++) {
                    f = e[i];
                    h.push(GA_googleAddAttr(d, f))
                }
                return h
            })())
        }
        return b
    };
    jQuery(document).ready(function(d) {
        var c, e, h, g, i, f, b, j;
        d("#follow-teaser .close").click(function() {
            d("#follow-teaser").hide();
            d.cookie("teaser", "hide", {
                path: "/"
            });
            return false
        });
        d("#google_plus_bar .close").click(function() {
            d("#google_plus_bar").animate({
                height: "hide",
                200: 200
            });
            d.cookie("gplusbar", "hide", {
                path: "/",
                expires: 14
            });
            return false
        });
        d(document).bind("ajaxError", function(m, n, k, l) {
            if (n.status === 401) {
                return window.invokeLogin()
            }
        });
        d(document).bind("ajaxSend", function(m, n, k) {
            var l;
            l = d("meta[name='csrf-token']").attr("content");
            if (l !== "") {
                return n.setRequestHeader("X-CSRF-Token", l)
            }
        });
        d(".share_networks").hide().removeClass("hidden");
        d(".share_button").hoverIntent(function() {
            return d(this).addClass("hovered").find(".share_networks:hidden").css({
                opacity: 0
            }).show().animate({
                opacity: 1
            }, 150)
        }, function() {
            return d(this).removeClass("hovered").find(".share_networks:visible").hide()
        });
        b = d("#follow_share_form");
        h = b.find(".title");
        g = b.find(".url");
        e = b.find("textarea");
        c = b.find(".share_charct");
        j = function() {
            var k, m;
            m = 140;
            m -= h.val().length + g.text().length + 15;
            k = m;
            if (!e.hasClass("defaultText")) {
                k -= e.val().length
            }
            if (k < 0) {
                c.addClass("too-many-chars")
            } else {
                c.removeClass("too-many-chars")
            }
            return c.text(k)
        };
        d(".share_button").click(function(l) {
            var q, n, k, t, p, s, m, o;
            q = d(this);
            b = d("#follow_share_form");
            if (q.find("#follow_share_form:visible").length === 0) {
                d(".share_networks").hide();
                q.append(b.css({
                    left: "0px"
                }).hide().detach());
                n = q.offset();
                t = n.left + b.width();
                o = d(window).width();
                if (t > o) {
                    b.css({
                        left: -(t - o + 50) + "px"
                    })
                }
                s = q.data("title");
                m = q.data("uri");
                p = q.attr("href");
                b.find(".title").val(s);
                b.find(".url").text(m);
                b.find("textarea").val("").blur();
                b.find(".thumb img").attr("src", q.data("thumb"));
                b.find("form").css({
                    opacity: 0
                }).attr("action", p);
                b.show(180, function() {
                    return q.find("form").animate({
                        opacity: 1
                    }, 200)
                });
                j();
                k = false
            }
            l.stopPropagation();
            return k
        });
        d("#follow_share_form form").submit(function() {
            var m, q, l, p, o, k, n;
            m = d(this);
            n = m.find("span.network_connection.checked input");
            for (o = 0, k = n.length; o < k; o++) {
                l = n[o];
                p = d(l).attr("id").match(/share_network_(.*)/);
                if (p && p.length > 0 && window.dcsMultiTrack) {
                    switch (p[1]) {
                    case "facebook":
                        dcsMultiTrack("DCS.dcsuri", "/Like", "WT.ti", "Link: Facebook Like", "WT.dl", "1");
                        break;
                    case "twitter":
                        dcsMultiTrack("DCS.dcsuri", "/Tweet", "WT.ti", "Link: Tweet", "WT.dl", "1");
                        break;
                    case "digg":
                        dcsMultiTrack("DCS.dcsuri", "/Digg", "WT.ti", "Link: Digg Share", "WT.dl", "1");
                        break;
                    case "linked_in":
                        dcsMultiTrack("DCS.dcsuri", "/LinkedIn", "WT.ti", "Link: LinkedIn Share", "WT.dl", "1");
                        break;
                    case "google_buzz":
                        dcsMultiTrack("DCS.dcsuri", "/GoogleBuzz", "WT.ti", "Link: Google Buzz Share", "WT.dl", "1");
                        break;
                    case "tumblr":
                        dcsMultiTrack("DCS.dcsuri", "/Tumblr", "WT.ti", "Link: Tumblr Share", "WT.dl", "1")
                    }
                }
            }
            if (m.parents(".share_button").length === 0) {
                return true
            }
            e = m.find("textarea");
            if (e.val() === e.attr("title")) {
                e.val("")
            }
            q = m.serialize();
            d.ajax({
                type: "post",
                url: m.closest(".share_button").find(".share_link").attr("href"),
                data: q,
                dataType: "script"
            });
            return false
        });
        d("a.popup").live("click", function() {
            var o, l, n, k, m;
            if (navigator.userAgent.match(/iPad/i) !== null) {
                return true
            } else {
                o = d(this);
                k = o.attr("class").match(/popup-(\d+)x(\d+)/);
                m = 450;
                l = 300;
                if (k && k.length === 3) {
                    m = parseInt(k[1], 10);
                    l = parseInt(k[2], 10)
                }
                n = popupCenter(o.attr("href") + "?r=" + window.location.pathname, m, l, "FollowLogin");
                invokeLogin(true, n);
                return false
            }
        });
        d(document).click(function() {
            var k;
            k = d(".share_button #follow_share_form:visible");
            k.find("form").animate({
                opacity: 0
            }, 250, function() {
                return k.hide("fast")
            });
            return d("a#follow-anchor").removeClass("active")
        });
        d("#follow_share_form textarea").focus(function() {
            var k;
            k = d(this);
            if (k.val() === k.attr("title")) {
                return k.removeClass("defaultText").val("")
            }
        }).blur(function() {
            var k;
            k = d(this);
            if (k.val() === "") {
                return k.addClass("defaultText").val(k.attr("title"))
            }
        }).blur().keydown(j).keyup(j);
        d("#follow_share_form input").keydown(j).keyup(j);
        d("#follow_share_form .close").click(function() {
            d(document).click();
            return false
        });
        i = function() {
            var l, k, m;
            l = d(this);
            if (d("#share_network_twitter").attr("checked")) {
                d("#follow_share_form .share_charct").show()
            } else {
                d("#follow_share_form .share_charct").hide()
            }
            m = l.closest(".network_connection");
            if (m.hasClass("connected")) {
                return m.toggleClass("checked")
            } else {
                k = m.find(".network").attr("class").match(/network_([a-z_]+)/);
                if (k.length > 1) {
                    popupCenter("/follow/login/oauth/" + k[1], 850, 730, "FollowLogin-" + k[1])
                }
                l.attr("checked", m.hasClass("checked"));
                return false
            }
        };
        d(".shareToButtons .network_connection input").change(i);
        d("nav #user #name-hover").hoverIntent(function() {
            var k;
            k = d(this);
            k.find(".name").addClass("name-active");
            return k.find(".menu").removeClass("hidden").show()
        }, function() {
            var k;
            k = d(this);
            k.find(".name").removeClass("name-active");
            return k.find(".menu").hide()
        });
        if (!(d.browser.webkit || d.browser.opera || d.browser.mozilla)) {
            d("input[type='search']").focus(function() {
                var k;
                k = d(this);
                if (k.val() === k.attr("placeholder")) {
                    return k.val("")
                }
            }).blur(function() {
                var k;
                k = d(this);
                if (k.val() === "") {
                    return k.val(k.attr("placeholder"))
                }
            }).blur()
        }
        d(".with_default").focus(function() {
            var k;
            k = d(this);
            if (k.val() === k.data("default")) {
                return k.removeClass("defaultText").val("")
            }
        }).blur(function() {
            var k;
            k = d(this);
            if (k.val() === "") {
                return k.addClass("defaultText").val(k.data("default"))
            }
        }).blur();
        f = function(l) {
            var k;
            k = d(this);
            d.ajax({
                url: k.prop("href"),
                type: "put",
                dataType: "json",
                beforeSend: function() {
                    return k.addClass("xhr")
                },
                complete: function() {
                    return k.removeClass("xhr")
                },
                success: function(m, o, n) {
                    return k.fadeOut(150, function() {
                        if (m.follow) {
                            k.removeClass("follow_obj_link").addClass("following_obj_link")
                        } else {
                            k.removeClass("following_obj_link").addClass("follow_obj_link")
                        }
                        k.prop("href", m.link);
                        k.text(m.title);
                        if (k.closest(".hide_on_accept").length > 0) {
                            k.closest(".user_row").hide("fast");
                            if (k.closest(".user_rows").find(".user_row:visible").length <= 1) {
                                return k.closest(".user_rows").find(".emptymsg").removeClass("hidden").show("fast")
                            }
                        } else {
                            return k.fadeIn(150)
                        }
                    })
                }
            });
            l.stopPropagation();
            return false
        };
        d(".follow_link, .comment .follow_button").click(f);
        d(".flash-wrap").delegate(".topic a.follow_link", "click", f);
        d(".flash").delegate("a", "click", function(l) {
            var k;
            k = d(this);
            if (k.hasClass("fallthru")) {
                d.ajax({
                    url: k.attr("href"),
                    type: "post"
                });
                return false
            } else {
                if (k.hasClass("fallthru")) {
                    return true
                } else {
                    l.stopPropagation();
                    return false
                }
            }
        });
        d(".flash").click(function() {
            return d(this).hide()
        });
        return true
    })
}).call(this);
(function() {
    var d, b, c, a;
    window || (window = this);
    document || (document = window.document);
    jQuery || (jQuery = window.jQuery);
    this.authenticate = function(e) {
        return $.extend({
            authenticity_token: AUTH_TOKEN
        }, e)
    };
    this.relatizeDates = function() {
        return $("time").relatizeDate()
    };
    this.closeOrBack = function() {
        if (window.name === "FollowLogin") {
            self.close()
        } else {
            history.go(-1)
        }
        return false
    };
    if (jQuery.browser.msie && parseFloat(jQuery.browser.version) < 9) {
        d = "abbr,article,aside,audio,canvas,datalist,details,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video".split(",");
        for (c = 0, a = d.length; c < a; c++) {
            b = d[c];
            document.createElement(d)
        }
    }
    $.extend($.fn.disableTextSelect = function() {
        return this.each(function() {
            if ($.browser.mozilla) {
                return $(this).css("MozUserSelect", "none")
            } else {
                if ($.browser.msie) {
                    return $(this).bind("selectstart", function() {
                        return false
                    })
                } else {
                    return $(this).mousedown(function() {
                        return false
                    })
                }
            }
        })
    });
    jQuery(document).ready(function(h) {
        var g, f, e;
        h("article.post").one("mouseover", function() {
            return window.gapi.plusone.go(this)
        });
        h("a[data-xhr]").simpleDialog({
            duration: 130
        });
        h("#logout_with_fb").click(function() {
            if (!FB.Connect.get_loggedInUser()) {
                return true
            }
            FB.Connect.logout(function() {
                window.location = "/follow/logout";
                return false
            });
            return false
        });
        h(".runner-close").click(function() {
            h(this).parent().animate({
                height: "hide",
                opacity: "hide"
            }, 700);
            document.cookie = "fbbanner=hide; expires=Sun, 1 May 2050 12:00:00 UTC; path=/";
            return false
        });
        h(".toggleLabel input[type='radio']").live("change", function() {
            var i, j;
            i = h(this);
            j = i.attr("name");
            if (i.is(":checked")) {
                h("input[name='" + j + "']").closest(".toggleLabel").removeClass("checked");
                return i.closest(".toggleLabel").addClass("checked")
            }
        }).change();
        h(".jsvalidate").change(function() {
            var k, i, j;
            k = h(this);
            j = k.attr("id").split("_", 2);
            i = {};
            i[j[1]] = k.val();
            return h.ajax({
                url: k.attr("rel"),
                data: i,
                dataType: "script",
                type: "GET"
            })
        });
        g = function() {
            var i, j;
            j = h(this);
            j.hide();
            i = j.parents(".transient").find(".ajax_loader");
            i.show();
            h.ajax({
                dataType: "script",
                type: "POST",
                url: j.attr("action"),
                data: j.serialize(),
                complete: function() {
                    i.hide();
                    return j.parents(".transient").detach()
                }
            });
            j.find("textarea").val("").blur();
            return false
        };
        f = function() {
            var i;
            i = h(".feed_commentform.transient");
            if (i.length === 0) {
                i = h('<div class="feed_commentform transient" />');
                h(".user_feed").append(i);
                i.html('<form method="post" action="dummy">\n<input type="hidden" name="_method" value="post" /><input type="hidden" name="respond" /><div class="entry">\n<textarea name="comment" rows="1" class="comment_textarea"></textarea>\n<input type="submit" value="Add comment" /></div></form><div class="ajax_loader"></div>');
                i.click(function(j) {
                    j.stopPropagation();
                    return false
                }).find("textarea").elastic();
                i.find("input").click(function() {
                    h(this).parents("form").submit();
                    return false
                });
                i.submit(g);
                h(".feed_commentform.transient form").bind("submit", g)
            }
            return i
        };
        h(".activity a.new-comment").live("click", function() {
            var j, i;
            j = f();
            i = h(this).closest(".activity");
            h(".comment-body").show();
            if (i.find(".comments > .feed_commentform").length > 0) {
                j.hide();
                j.detach();
                h(this).show()
            } else {
                j.detach();
                j.find(".ajax_loader").hide();
                j.find("textarea").val("");
                j.find("input[name='_method']").val("post");
                j.find("input[type='submit']").val("Add comment");
                j.find("input[name='respond']").val(h(this).data("update"));
                i.find(".comments").append(j);
                j.find("form").show().attr("action", h(this).attr("href"));
                j.show("fast");
                j.find("textarea").focus()
            }
            return false
        });
        h(".activity .edit-comment").click(function() {
            var k, j, i;
            j = f();
            i = h(this).closest(".comment");
            h(".comment-body").show();
            if (i.find(".feed_commentform").length > 0) {
                j.hide();
                j.detach();
                h(this).show()
            } else {
                j.detach();
                j.find(".ajax_loader").hide();
                j.find("input[name='_method']").val("put");
                j.find("input[type='submit']").val("Save changes");
                j.find("input[name='respond']").val(h(this).data("update"));
                k = i.find(".comment-body");
                k.after(j);
                k.hide();
                j.find("form").show().attr("action", h(this).attr("href"));
                j.find("textarea").focus().val(h.trim(k.text()));
                j.show("fast")
            }
            return false
        });
        h(".feed_commentform form").unbind("submit").bind("submit", g);
        h(".activity .actions .delcomment").live("click", function() {
            var i;
            if (confirm("Delete this comment?")) {
                i = h(this).parents("form");
                h.ajax({
                    dataType: "script",
                    type: "POST",
                    url: i.attr("action"),
                    data: i.serialize()
                });
                return false
            }
        });
        h("body").click(function() {
            h(".commenting").removeClass("commenting");
            return h("#feed_commentform.transient").hide()
        });
        h(".logout").click(function() {
            var j, i;
            j = h(this);
            i = j.attr("href");
            return FB.logout(function() {
                window.location = i;
                return false
            })
        });
        h(".defaultText").bind("focus", function() {
            var i;
            i = h(this);
            i.removeClass("defaultText");
            if (i.val() === i.attr("title")) {
                return i.val("")
            }
        });
        h(".defaultText").bind("blur", function() {
            var i;
            i = h(this);
            if (i.val() === "" || i.val() === i.attr("title")) {
                i.addClass("defaultText");
                return i.val(i.attr("title"))
            } else {
                return i.removeClass("defaultText")
            }
        }).blur();
        h(".tooltip").poshytip({
            className: "tip-twitter",
            showTimeout: 1,
            alignTo: "target",
            alignX: "center",
            offsetY: 8,
            allowTipHover: false,
            fade: true,
            slide: false,
            showAniDuration: 150,
            hideAniDuration: 50
        });
        h(".post .more .add-comment").click(function() {
            return h(this).closest(".post").find(".commentform:hidden").hide().removeClass("hidden").show("fast")
        });
        (function() {
            var i;
            i = h('<div class="loading_more"></div>');
            return h(".load-more").click(function() {
                var j, k;
                j = h(this);
                k = h(j.data("stream"));
                if (j.hasClass("disabled")) {
                    return false
                }
                i.hide();
                k.append(i);
                i.fadeIn("normal");
                j.hide();
                h.getJSON(window.location.pathname + "?tc=" + k.data("last-id"), function(m) {
                    var l;
                    i.detach();
                    j.show();
                    if (!m.last_id) {
                        j.html("End of feed.").addClass("disabled")
                    }
                    k.data("last-id", m.last_id);
                    l = h("<div>" + m.content + "</div>").hide();
                    k.append(l);
                    return l.animate({
                        height: "show"
                    }, 1000)
                });
                return false
            })
        })();
        if (h("header #session .avatar").length > 0) {
            h(".page-hint .hint-inner").append("<a href='#' class='close-hint'>Close</a>")
        }
        h(".page-hint .close-hint").click(function() {
            var j, i;
            i = h(this).closest(".page-hint");
            j = i.attr("id");
            i.animate({
                height: "hide",
                opacity: "hide"
            }, "normal");
            h.post("/follow/home/pref", {
                box: j
            });
            return false
        });
        h(".post .comment_count").click(function() {
            var i;
            i = h(this).closest(".post").find(".commentform");
            if (i.hasClass("hidden")) {
                i.hide().removeClass("hidden")
            }
            i.animate({
                height: "toggle",
                opacity: "toggle"
            }, 200, function() {
                return h(this).find("textarea").focus()
            });
            return false
        });
        h(".tab_content").hide();
        h("ul.tabs").each(function() {
            var i, m, l, j, k;
            m = h(this);
            i = h(".tab_container[data-tabset='" + m.data("tabset") + "']");
            if (window.location.hash !== "") {
                k = i.find(window.location.hash.replace("tab.", ""));
                console.log(k)
            }
            if (k && k.length !== 0) {
                k.show()
            } else {
                l = m.data("active");
                if (!l) {
                    l = 0
                }
                h(i.find(".tab_content").get(l)).show()
            }
            j = i.find(".tab_content:visible").prop("id");
            return m.find("li a[href='#" + j + "']").parent().addClass("active")
        });
        h("ul.tabs li").click(function(n) {
            var k, j, m, i, l;
            m = h(this);
            k = m.closest("ul.tabs");
            j = h(".tab_container[data-tabset='" + k.data("tabset") + "']");
            k.find("li").removeClass("active");
            m.addClass("active");
            i = h(m.find("a").attr("href")).hide();
            l = j.find(".tab_content:visible").not(i);
            l.animate({
                opacity: "hide"
            }, "fast", function() {
                return i.animate({
                    opacity: "show"
                }, "fast")
            });
            if (l.length === 0) {
                i.animate({
                    opacity: "show"
                }, "fast")
            }
            n.stopPropagation();
            return false
        });
        relatizeDates();
        e = function(j, l, i) {
            var k;
            k = h(j + " .validation_response");
            if (k.length === 0) {
                h(j).append("<span class='validation_response' />");
                k = h(j + " .validation_response")
            }
            h(j + " input").removeClass("validation_response_bad").removeClass("validation_response_good").addClass("validation_response_" + i);
            k.removeClass().addClass("validation_response").addClass("validation_response_" + i).hide();
            return k.text(l).animate({
                opacity: "show"
            }, 300)
        };
        window.validation_response = e;
        h("a.switch").click(function(i) {
            h("#" + h(this).data("toggle")).toggle("fast");
            i.stopPropagation();
            return false
        });
        return h(".email-option input[type='checkbox'], .email-option-bare input[type='checkbox']").change(function() {
            var j, i;
            j = h(this);
            i = j.parents("span").find(".frequency");
            if (j.is(":checked")) {
                return i.show("fast")
            } else {
                return i.hide("fast")
            }
        })
    })
}).call(this);
(function() {
    this.initSubMenu = function(e) {
        var i, h, a, c, f, b, k, d, g, j;
        k = window.location.origin || (window.location.protocol + "//" + window.location.host);
        if (!e) {
            e = k
        }
        a = {};
        f = {};
        g = _.map($("nav .sub"), function(l) {
            return l.parentNode
        });
        i = 60 * 1000;
        h = "1";
        j = function() {
            if (window.localStorage && JSON.stringify) {
                if (!a.timestamp) {
                    a.timestamp = (new Date()).getTime()
                }
                a.v = h;
                return window.localStorage.nmcache = JSON.stringify(a)
            }
        };
        if (window.localStorage && JSON.stringify && window.localStorage.nmcache) {
            c = JSON.parse(window.localStorage.nmcache);
            b = (new Date()).getTime();
            f = c;
            if (b - c.timestamp < i && c.v === h) {
                a = c
            }
        }
        d = function(n) {
            var m, o, l;
            l = e + ("/follow/stories/top/?tag=" + (n.data("tag")));
            m = n.closest(".fl").find(".content");
            o = n.parent().find("li.highlighted");
            if (a[l]) {
                m.html(a[l]);
                o.removeClass("highlighted");
                return n.addClass("highlighted")
            } else {
                if (!a[l]) {
                    n.find("a").addClass("waiting");
                    if (f[l]) {
                        m.html(f[l])
                    }
                    if (e !== k) {
                        return $.ajax({
                            url: l + "&format=json",
                            dataType: "jsonp",
                            success: function(q, r, p) {
                                a[l] = q.html;
                                m.html(q.html);
                                j();
                                n.find("a").removeClass("waiting");
                                o.removeClass("highlighted");
                                return n.addClass("highlighted")
                            }
                        })
                    } else {
                        return m.load(l, function(p) {
                            a[l] = p;
                            j();
                            n.find("a").removeClass("waiting");
                            o.removeClass("highlighted");
                            return n.addClass("highlighted")
                        })
                    }
                }
            }
        };
        $("#local-subnav li.fl .menu li").hoverIntent({
            over: function() {
                return d($(this))
            },
            out: function() {},
            timeout: 125,
            interval: 40
        });
        return $(g).removeClass("ch").hoverIntent({
            over: function() {
                var l;
                l = $(this);
                l.parents("nav").find(".visible").removeClass("visible");
                l.addClass("visible");
                return d(l.find(".menu li:first-child"))
            },
            out: function() {
                var l;
                l = $(this);
                return l.removeClass("visible")
            },
            timeout: 125,
            interval: 10
        })
    }
}).call(this);
(function(a) {
    a.fn.hoverIntent = function(k, j) {
        var l = {
            sensitivity: 7,
            interval: 100,
            timeout: 0
        };
        l = a.extend(l, j ? {
            over: k,
            out: j
        } : k);
        var n, m, h, d;
        var e = function(f) {
            n = f.pageX;
            m = f.pageY
        };
        var c = function(g, f) {
            f.hoverIntent_t = clearTimeout(f.hoverIntent_t);
            if ((Math.abs(h - n) + Math.abs(d - m)) < l.sensitivity) {
                a(f).unbind("mousemove", e);
                f.hoverIntent_s = 1;
                return l.over.apply(f, [g])
            } else {
                h = n;
                d = m;
                f.hoverIntent_t = setTimeout(function() {
                    c(g, f)
                }, l.interval)
            }
        };
        var i = function(g, f) {
            f.hoverIntent_t = clearTimeout(f.hoverIntent_t);
            f.hoverIntent_s = 0;
            return l.out.apply(f, [g])
        };
        var b = function(q) {
            var o = (q.type == "mouseover" ? q.fromElement : q.toElement) || q.relatedTarget;
            while (o && o != this) {
                try {
                    o = o.parentNode
                } catch (q) {
                    o = this
                }
            }
            if (o == this) {
                return false
            }
            var g = jQuery.extend({}, q);
            var f = this;
            if (f.hoverIntent_t) {
                f.hoverIntent_t = clearTimeout(f.hoverIntent_t)
            }
            if (q.type == "mouseover") {
                h = g.pageX;
                d = g.pageY;
                a(f).bind("mousemove", e);
                if (f.hoverIntent_s != 1) {
                    f.hoverIntent_t = setTimeout(function() {
                        c(g, f)
                    }, l.interval)
                }
            } else {
                a(f).unbind("mousemove", e);
                if (f.hoverIntent_s == 1) {
                    f.hoverIntent_t = setTimeout(function() {
                        i(g, f)
                    }, l.timeout)
                }
            }
        };
        return this.mouseover(b).mouseout(b)
    }
})(jQuery);
(function(e) {
    var a = [],
        d = /^url\(["']?([^"'\)]*)["']?\);?$/i,
        c = /\.png$/i,
        b = e.browser.msie && e.browser.version == 6;

    function f() {
        e.each(a, function() {
            this.refresh(true)
        })
    }
    e(window).resize(f);
    e.Poshytip = function(h, g) {
        this.$elm = e(h);
        this.opts = e.extend({}, e.fn.poshytip.defaults, g);
        this.$tip = e(['<div class="', this.opts.className, '">', '<div class="tip-inner tip-bg-image"></div>', '<div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>', "</div>"].join("")).appendTo(document.body);
        this.$arrow = this.$tip.find("div.tip-arrow");
        this.$inner = this.$tip.find("div.tip-inner");
        this.disabled = false;
        this.content = null;
        this.init()
    };
    e.Poshytip.prototype = {
        init: function() {
            a.push(this);
            var g = this.$elm.attr("title");
            this.$elm.data("title.poshytip", g !== undefined ? g : null).data("poshytip", this);
            if (this.opts.showOn != "none") {
                this.$elm.bind({
                    "mouseenter.poshytip": e.proxy(this.mouseenter, this),
                    "mouseleave.poshytip": e.proxy(this.mouseleave, this)
                });
                switch (this.opts.showOn) {
                case "hover":
                    if (this.opts.alignTo == "cursor") {
                        this.$elm.bind("mousemove.poshytip", e.proxy(this.mousemove, this))
                    }
                    if (this.opts.allowTipHover) {
                        this.$tip.hover(e.proxy(this.clearTimeouts, this), e.proxy(this.mouseleave, this))
                    }
                    break;
                case "focus":
                    this.$elm.bind({
                        "focus.poshytip": e.proxy(this.show, this),
                        "blur.poshytip": e.proxy(this.hide, this)
                    });
                    break
                }
            }
        },
        mouseenter: function(g) {
            if (this.disabled) {
                return true
            }
            this.$elm.attr("title", "");
            if (this.opts.showOn == "focus") {
                return true
            }
            this.clearTimeouts();
            this.showTimeout = setTimeout(e.proxy(this.show, this), this.opts.showTimeout)
        },
        mouseleave: function(g) {
            if (this.disabled || this.asyncAnimating && (this.$tip[0] === g.relatedTarget || jQuery.contains(this.$tip[0], g.relatedTarget))) {
                return true
            }
            var h = this.$elm.data("title.poshytip");
            if (h !== null) {
                this.$elm.attr("title", h)
            }
            if (this.opts.showOn == "focus") {
                return true
            }
            this.clearTimeouts();
            this.hideTimeout = setTimeout(e.proxy(this.hide, this), this.opts.hideTimeout)
        },
        mousemove: function(g) {
            if (this.disabled) {
                return true
            }
            this.eventX = g.pageX;
            this.eventY = g.pageY;
            if (this.opts.followCursor && this.$tip.data("active")) {
                this.calcPos();
                this.$tip.css({
                    left: this.pos.l,
                    top: this.pos.t
                });
                if (this.pos.arrow) {
                    this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow
                }
            }
        },
        show: function() {
            if (this.disabled || this.$tip.data("active")) {
                return
            }
            this.reset();
            this.update();
            this.display();
            if (this.opts.timeOnScreen) {
                setTimeout(e.proxy(this.hide, this), this.opts.timeOnScreen)
            }
        },
        hide: function() {
            if (this.disabled || !this.$tip.data("active")) {
                return
            }
            this.display(true)
        },
        reset: function() {
            this.$tip.queue([]).detach().css("visibility", "hidden").data("active", false);
            this.$inner.find("*").poshytip("hide");
            if (this.opts.fade) {
                this.$tip.css("opacity", this.opacity)
            }
            this.$arrow[0].className = "tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left";
            this.asyncAnimating = false
        },
        update: function(j, k) {
            if (this.disabled) {
                return
            }
            var i = j !== undefined;
            if (i) {
                if (!k) {
                    this.opts.content = j
                }
                if (!this.$tip.data("active")) {
                    return
                }
            } else {
                j = this.opts.content
            }
            var h = this,
                g = typeof j == "function" ? j.call(this.$elm[0], function(l) {
                    h.update(l)
                }) : j == "[title]" ? this.$elm.data("title.poshytip") : j;
            if (this.content !== g) {
                this.$inner.empty().append(g);
                this.content = g
            }
            this.refresh(i)
        },
        refresh: function(h) {
            if (this.disabled) {
                return
            }
            if (h) {
                if (!this.$tip.data("active")) {
                    return
                }
                var k = {
                    left: this.$tip.css("left"),
                    top: this.$tip.css("top")
                }
            }
            this.$tip.css({
                left: 0,
                top: 0
            }).appendTo(document.body);
            if (this.opacity === undefined) {
                this.opacity = this.$tip.css("opacity")
            }
            var l = this.$tip.css("background-image").match(d),
                m = this.$arrow.css("background-image").match(d);
            if (l) {
                var i = c.test(l[1]);
                if (b && i) {
                    this.$tip.css("background-image", "none");
                    this.$inner.css({
                        margin: 0,
                        border: 0,
                        padding: 0
                    });
                    l = i = false
                } else {
                    this.$tip.prepend('<table border="0" cellpadding="0" cellspacing="0"><tr><td class="tip-top tip-bg-image" colspan="2"><span></span></td><td class="tip-right tip-bg-image" rowspan="2"><span></span></td></tr><tr><td class="tip-left tip-bg-image" rowspan="2"><span></span></td><td></td></tr><tr><td class="tip-bottom tip-bg-image" colspan="2"><span></span></td></tr></table>').css({
                        border: 0,
                        padding: 0,
                        "background-image": "none",
                        "background-color": "transparent"
                    }).find(".tip-bg-image").css("background-image", 'url("' + l[1] + '")').end().find("td").eq(3).append(this.$inner)
                }
                if (i && !e.support.opacity) {
                    this.opts.fade = false
                }
            }
            if (m && !e.support.opacity) {
                if (b && c.test(m[1])) {
                    m = false;
                    this.$arrow.css("background-image", "none")
                }
                this.opts.fade = false
            }
            var o = this.$tip.find("table");
            if (b) {
                this.$tip[0].style.width = "";
                o.width("auto").find("td").eq(3).width("auto");
                var n = this.$tip.width(),
                    j = parseInt(this.$tip.css("min-width")),
                    g = parseInt(this.$tip.css("max-width"));
                if (!isNaN(j) && n < j) {
                    n = j
                } else {
                    if (!isNaN(g) && n > g) {
                        n = g
                    }
                }
                this.$tip.add(o).width(n).eq(0).find("td").eq(3).width("100%")
            } else {
                if (o[0]) {
                    o.width("auto").find("td").eq(3).width("auto").end().end().width(document.defaultView && document.defaultView.getComputedStyle && parseFloat(document.defaultView.getComputedStyle(this.$tip[0], null).width) || this.$tip.width()).find("td").eq(3).width("100%")
                }
            }
            this.tipOuterW = this.$tip.outerWidth();
            this.tipOuterH = this.$tip.outerHeight();
            this.calcPos();
            if (m && this.pos.arrow) {
                this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow;
                this.$arrow.css("visibility", "inherit")
            }
            if (h) {
                this.asyncAnimating = true;
                var p = this;
                this.$tip.css(k).animate({
                    left: this.pos.l,
                    top: this.pos.t
                }, 200, function() {
                    p.asyncAnimating = false
                })
            } else {
                this.$tip.css({
                    left: this.pos.l,
                    top: this.pos.t
                })
            }
        },
        display: function(h) {
            var i = this.$tip.data("active");
            if (i && !h || !i && h) {
                return
            }
            this.$tip.stop();
            if ((this.opts.slide && this.pos.arrow || this.opts.fade) && (h && this.opts.hideAniDuration || !h && this.opts.showAniDuration)) {
                var m = {},
                    l = {};
                if (this.opts.slide && this.pos.arrow) {
                    var k, g;
                    if (this.pos.arrow == "bottom" || this.pos.arrow == "top") {
                        k = "top";
                        g = "bottom"
                    } else {
                        k = "left";
                        g = "right"
                    }
                    var j = parseInt(this.$tip.css(k));
                    m[k] = j + (h ? 0 : (this.pos.arrow == g ? -this.opts.slideOffset : this.opts.slideOffset));
                    l[k] = j + (h ? (this.pos.arrow == g ? this.opts.slideOffset : -this.opts.slideOffset) : 0) + "px"
                }
                if (this.opts.fade) {
                    m.opacity = h ? this.$tip.css("opacity") : 0;
                    l.opacity = h ? 0 : this.opacity
                }
                this.$tip.css(m).animate(l, this.opts[h ? "hideAniDuration" : "showAniDuration"])
            }
            h ? this.$tip.queue(e.proxy(this.reset, this)) : this.$tip.css("visibility", "inherit");
            this.$tip.data("active", !i)
        },
        disable: function() {
            this.reset();
            this.disabled = true
        },
        enable: function() {
            this.disabled = false
        },
        destroy: function() {
            this.reset();
            this.$tip.remove();
            delete this.$tip;
            this.content = null;
            this.$elm.unbind(".poshytip").removeData("title.poshytip").removeData("poshytip");
            a.splice(e.inArray(this, a), 1)
        },
        clearTimeouts: function() {
            if (this.showTimeout) {
                clearTimeout(this.showTimeout);
                this.showTimeout = 0
            }
            if (this.hideTimeout) {
                clearTimeout(this.hideTimeout);
                this.hideTimeout = 0
            }
        },
        calcPos: function() {
            var n = {
                l: 0,
                t: 0,
                arrow: ""
            },
                h = e(window),
                k = {
                    l: h.scrollLeft(),
                    t: h.scrollTop(),
                    w: h.width(),
                    h: h.height()
                },
                p, j, m, i, q, g;
            if (this.opts.alignTo == "cursor") {
                p = j = m = this.eventX;
                i = q = g = this.eventY
            } else {
                var o = this.$elm.offset(),
                    l = {
                        l: o.left,
                        t: o.top,
                        w: this.$elm.outerWidth(),
                        h: this.$elm.outerHeight()
                    };
                p = l.l + (this.opts.alignX != "inner-right" ? 0 : l.w);
                j = p + Math.floor(l.w / 2);
                m = p + (this.opts.alignX != "inner-left" ? l.w : 0);
                i = l.t + (this.opts.alignY != "inner-bottom" ? 0 : l.h);
                q = i + Math.floor(l.h / 2);
                g = i + (this.opts.alignY != "inner-top" ? l.h : 0)
            }
            switch (this.opts.alignX) {
            case "right":
            case "inner-left":
                n.l = m + this.opts.offsetX;
                if (n.l + this.tipOuterW > k.l + k.w) {
                    n.l = k.l + k.w - this.tipOuterW
                }
                if (this.opts.alignX == "right" || this.opts.alignY == "center") {
                    n.arrow = "left"
                }
                break;
            case "center":
                n.l = j - Math.floor(this.tipOuterW / 2);
                if (n.l + this.tipOuterW > k.l + k.w) {
                    n.l = k.l + k.w - this.tipOuterW
                } else {
                    if (n.l < k.l) {
                        n.l = k.l
                    }
                }
                break;
            default:
                n.l = p - this.tipOuterW - this.opts.offsetX;
                if (n.l < k.l) {
                    n.l = k.l
                }
                if (this.opts.alignX == "left" || this.opts.alignY == "center") {
                    n.arrow = "right"
                }
            }
            switch (this.opts.alignY) {
            case "bottom":
            case "inner-top":
                n.t = g + this.opts.offsetY;
                if (!n.arrow || this.opts.alignTo == "cursor") {
                    n.arrow = "top"
                }
                if (n.t + this.tipOuterH > k.t + k.h) {
                    n.t = i - this.tipOuterH - this.opts.offsetY;
                    if (n.arrow == "top") {
                        n.arrow = "bottom"
                    }
                }
                break;
            case "center":
                n.t = q - Math.floor(this.tipOuterH / 2);
                if (n.t + this.tipOuterH > k.t + k.h) {
                    n.t = k.t + k.h - this.tipOuterH
                } else {
                    if (n.t < k.t) {
                        n.t = k.t
                    }
                }
                break;
            default:
                n.t = i - this.tipOuterH - this.opts.offsetY;
                if (!n.arrow || this.opts.alignTo == "cursor") {
                    n.arrow = "bottom"
                }
                if (n.t < k.t) {
                    n.t = g + this.opts.offsetY;
                    if (n.arrow == "bottom") {
                        n.arrow = "top"
                    }
                }
            }
            this.pos = n
        }
    };
    e.fn.poshytip = function(h) {
        if (typeof h == "string") {
            var g = arguments,
                k = h;
            Array.prototype.shift.call(g);
            if (k == "destroy") {
                this.die("mouseenter.poshytip").die("focus.poshytip")
            }
            return this.each(function() {
                var l = e(this).data("poshytip");
                if (l && l[k]) {
                    l[k].apply(l, g)
                }
            })
        }
        var i = e.extend({}, e.fn.poshytip.defaults, h);
        if (!e("#poshytip-css-" + i.className)[0]) {
            e(['<style id="poshytip-css-', i.className, '" type="text/css">', "div.", i.className, "{visibility:hidden;position:absolute;top:0;left:0;}", "div.", i.className, " table, div.", i.className, " td{margin:0;font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;font-variant:inherit;}", "div.", i.className, " td.tip-bg-image span{display:block;font:1px/1px sans-serif;height:", i.bgImageFrameSize, "px;width:", i.bgImageFrameSize, "px;overflow:hidden;}", "div.", i.className, " td.tip-right{background-position:100% 0;}", "div.", i.className, " td.tip-bottom{background-position:100% 100%;}", "div.", i.className, " td.tip-left{background-position:0 100%;}", "div.", i.className, " div.tip-inner{background-position:-", i.bgImageFrameSize, "px -", i.bgImageFrameSize, "px;}", "div.", i.className, " div.tip-arrow{visibility:hidden;position:absolute;overflow:hidden;font:1px/1px sans-serif;}", "</style>"].join("")).appendTo("head")
        }
        if (i.liveEvents && i.showOn != "none") {
            var j = e.extend({}, i, {
                liveEvents: false
            });
            switch (i.showOn) {
            case "hover":
                this.live("mouseenter.poshytip", function() {
                    var l = e(this);
                    if (!l.data("poshytip")) {
                        l.poshytip(j).poshytip("mouseenter")
                    }
                });
                break;
            case "focus":
                this.live("focus.poshytip", function() {
                    var l = e(this);
                    if (!l.data("poshytip")) {
                        l.poshytip(j).poshytip("show")
                    }
                });
                break
            }
            return this
        }
        return this.each(function() {
            new e.Poshytip(this, i)
        })
    };
    e.fn.poshytip.defaults = {
        content: "[title]",
        className: "tip-yellow",
        bgImageFrameSize: 10,
        showTimeout: 500,
        hideTimeout: 100,
        timeOnScreen: 0,
        showOn: "hover",
        liveEvents: false,
        alignTo: "cursor",
        alignX: "right",
        alignY: "top",
        offsetX: -22,
        offsetY: 18,
        allowTipHover: true,
        followCursor: false,
        fade: true,
        slide: true,
        slideOffset: 8,
        showAniDuration: 300,
        hideAniDuration: 300
    }
})(jQuery);
(function(a) {
    jQuery.cookie = function(c, k, n) {
        if (typeof k != "undefined") {
            n = n || {};
            if (k === null) {
                k = "";
                n.expires = -1
            }
            var f = "";
            if (n.expires && (typeof n.expires == "number" || n.expires.toUTCString)) {
                var g;
                if (typeof n.expires == "number") {
                    g = new Date();
                    g.setTime(g.getTime() + (n.expires * 24 * 60 * 60 * 1000))
                } else {
                    g = n.expires
                }
                f = "; expires=" + g.toUTCString()
            }
            var m = n.path ? "; path=" + (n.path) : "";
            var h = n.domain ? "; domain=" + (n.domain) : "";
            var b = n.secure ? "; secure" : "";
            document.cookie = [c, "=", encodeURIComponent(k), f, m, h, b].join("")
        } else {
            var e = null;
            if (document.cookie && document.cookie != "") {
                var l = document.cookie.split(";");
                for (var j = 0; j < l.length; j++) {
                    var d = jQuery.trim(l[j]);
                    if (d.substring(0, c.length + 1) == (c + "=")) {
                        e = decodeURIComponent(d.substring(c.length + 1));
                        break
                    }
                }
            }
            return e
        }
    }
})(jQuery);
(function(e) {
    var c = null,
        k = null,
        b = 0,
        l = 0,
        r = 0,
        s = null,
        h = null,
        j = null,
        a = "",
        p = "",
        g = "",
        i = null,
        d = null;
    validMethods = {
        put: true,
        post: true,
        "delete": true
    };
    e.fn.simpleDialog = function(v) {
        var w = e.extend({}, e.fn.simpleDialog.defaults, v);
        return this.each(function(x, A) {
            if (A._sd) {
                return
            }
            A._sd = true;
            var z = e(A);
            var y = (z.is("form")) ? "submit" : "click";
            A.clickBinding = y;
            z.bind(y + ".simpledialog", function(D) {
                D.preventDefault();
                s = this;
                s.opts = w;
                h = D;
                t();
                o();
                var H = e(this);
                if (s.opts.title != "") {
                    p = s.opts.title
                }
                if (H.is("a")) {
                    if (s.opts.useTitleAttr) {
                        var F = H.attr("title");
                        if (typeof F != "undefined" && F != "") {
                            p = F
                        }
                    }
                    var C = H.attr("href");
                    if (C.match(/^#/)) {
                        var G = e("#" + H.attr("rel"));
                        if (G.length == 0) {
                            return false
                        }
                        j = G;
                        a = j.clone().html();
                        j.empty();
                        n(a)
                    } else {
                        if (H.find("img").length > 0) {
                            if (s.opts.showCaption) {
                                g = H.find("img").attr("title")
                            }
                            u(C)
                        } else {
                            var B = H.attr("rel");
                            if (typeof(B) != "undefined") {
                                B = B.toLowerCase()
                            }
                            if (validMethods[B]) {
                                q(C, {}, B)
                            } else {
                                q(C, {})
                            }
                        }
                    }
                } else {
                    if (H.is(":submit", ":button")) {
                        var E = H.parents("form");
                        q(E.attr("action"), E.serialize(), E.attr("method"))
                    } else {
                        if (H.is("form")) {
                            q(H.attr("action"), H.serialize(), H.attr("method"))
                        } else {
                            e.simpleDialog.close(D)
                        }
                    }
                }
                return false
            })
        })
    };
    e.fn.simpleDialog.defaults = {
        title: "",
        useTitleAttr: true,
        containerId: "sd_container",
        containerClass: "sd_container",
        overlayId: "sd_overlay",
        overlayClass: "sd_overlay",
        loadingClass: "sd_loading",
        closeLabelClass: "sd_closelabel",
        showCloseLabel: true,
        closeLabel: "Close",
        opacity: 0.6,
        duration: 400,
        closeDuration: 250,
        easing: "linear",
        zIndex: 1000,
        width: null,
        height: null,
        showCaption: true,
        open: null,
        close: null,
        closeSelector: ".close",
        ajaxOptions: {},
        showOverlay: true
    };
    e.simpleDialog = {
        close: function(w, v) {
            if (!s) {
                return
            }
            if (j != null) {
                j.html(a)
            }
            if (e.isFunction(s.opts.close)) {
                s.opts.close.apply(this, [(typeof w == "undefined") ? null : w, s])
            }
            if (!v) {
                if (i != null) {
                    i.remove()
                }
                e("#" + s.opts.overlayId).animate({
                    opacity: 0
                }, s.opts.closeDuration, null, function() {
                    e(this).remove()
                })
            }
            return false
        }
    };
    var t = function() {
        c = c || e(document);
        k = k || e(window);
        b = c.height();
        l = k.height();
        r = k.width();
        p = "";
        g = ""
    };
    var n = function(A) {
        var v = "";
        if (p != "") {
            v += '<div class="sd_header">' + p + "</div>"
        }
        v += '<div class="sd_content">' + A + "</div>";
        if (g != "" && typeof g != "undefined") {
            v += ' <div class="sd_footer">' + g + "</div>"
        }
        var y = e("<div />").addClass(s.opts.containerClass).hide().css({
            position: "absolute",
            height: "auto"
        }).html(v).appendTo(document.body);
        var x = (s.opts.width) ? parseInt(s.opts.width) : y.width();
        var z = (s.opts.height) ? parseInt(s.opts.height) : y.height();
        var B = f(x, z);
        i.removeClass(s.opts.loadingClass).animate({
            width: x + "px",
            left: parseInt(B[0]) + "px"
        }, s.opts.duration, s.opts.easing, function() {
            e(this).animate({
                height: z + "px",
                top: parseInt(B[1]) + "px"
            }, s.opts.duration, s.opts.easing, function() {
                e(this).css({
                    height: "auto"
                });
                y.removeClass(s.opts.containerClass).css({
                    position: "relative"
                }).appendTo(i).show();
                i.find(s.opts.closeSelector).bind("click.simpledialog", e.simpleDialog.close);
                if (s.opts.showCloseLabel) {
                    var w = '<div id="sd_closelabel" class="' + s.opts.closeLabelClass + '"><a href="#">' + s.opts.closeLabel + "</a></div>";
                    i.append(w);
                    i.find("#sd_closelabel a").bind("click.simpledialog", e.simpleDialog.close)
                }
                if (e.isFunction(s.opts.open)) {
                    s.opts.open.apply(i, [h, s])
                }
            })
        })
    };
    e.simpleDialogManual = function(v) {
        var w = e.extend({}, e.fn.simpleDialog.defaults, v);
        s = {
            opts: w
        };
        t();
        o();
        p = "";
        if (v.content) {
            n(v.content)
        }
    };
    var q = function(v, w, x) {
        e.ajax(e.extend(s.opts.ajaxOptions || {}, {
            type: (typeof x == "undefined") ? "GET" : x,
            url: v,
            data: w,
            cache: false,
            dataType: "html",
            success: n
        }))
    };
    e.simpleDialogManualAjax = function(w, v, y, z) {
        var x = e.extend({}, e.fn.simpleDialog.defaults, w);
        s = {
            opts: x
        };
        t();
        o();
        q(v, y, z)
    };
    var u = function(v) {
        e(document.body).append('<div id="sd_tmp_image" style="display:none;"><img src="' + v + '" alt="" /></div>');
        var w = e("#sd_tmp_image");
        w.find("img").load(function() {
            var x = w.html();
            w.remove();
            n(x)
        }).error(function(x) {
            e.simpleDialog.close(x);
            w.remove()
        })
    };
    var m = function(y, C) {
        var B = e(C);
        var x = B.width();
        var A = B.height();
        B.empty().css({
            width: null,
            height: null
        }).removeClass().addClass(s.opts.loadingClass).addClass(s.opts.containerClass);
        var v = B.width();
        var z = B.height();
        var D = f(v, z);
        B.css({
            width: x,
            height: A
        }).animate({
            left: D[0] + "px",
            top: D[1] + "px",
            width: v + "px",
            height: z + "px"
        }, s.opts.duration)
    };
    var o = function() {
        e.simpleDialog.close(null, true);
        if (s.opts.showOverlay) {
            var x = e("#" + s.opts.overlayClass);
            if (x.length == 0) {
                e("<div />").attr("id", s.opts.overlayId).addClass(s.opts.overlayClass).css({
                    position: "absolute",
                    width: r,
                    height: b,
                    opacity: s.opts.opacity,
                    zIndex: s.opts.zIndex
                }).bind("click.simpledialog", e.simpleDialog.close).appendTo(document.body)
            }
        }
        var z = e("#" + s.opts.containerId);
        if (z.length == 0) {
            i = e("<div />").attr("id", s.opts.containerId).addClass(s.opts.loadingClass).addClass(s.opts.containerClass).hide().appendTo(document.body);
            var v = i.width();
            var y = i.height();
            var A = f(v, y);
            i.css({
                position: "absolute",
                left: A[0] + "px",
                top: A[1] + "px",
                width: v + "px",
                height: y + "px",
                zIndex: s.opts.zIndex + 1000
            }).show()
        } else {
            z.each(m)
        }
    };
    var f = function(v, x) {
        return [(b > l) ? r / 2 - v / 2 - 18 : r / 2 - v / 2, c.scrollTop() + l / 2 - x / 2]
    }
})(jQuery);
(function(a) {
    a.fn.relatizeDate = function() {
        return a(this).each(function() {
            a(this).text(a.relatizeDate(this))
        })
    };
    a.relatizeDate = function(d) {
        var c;
        var b = a(d);
        if (b.attr("datetime") !== undefined) {
            c = new Date(b.attr("datetime"))
        } else {
            if (b.attr("rel") !== undefined) {
                c = new Date(b.attr("rel"))
            } else {
                c = new Date(b.text())
            }
        }
        return a.relatizeDate.timeAgoInWords(c)
    };
    $r = a.relatizeDate;
    a.extend(a.relatizeDate, {
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        strftime: function(d, h) {
            var c = d.getDay(),
                g = d.getMonth();
            var b = d.getHours(),
                e = d.getMinutes();
            var f = function(j) {
                var i = j.toString(10);
                return new Array((2 - i.length) + 1).join("0") + i
            };
            return h.replace(/\%([aAbBcdHImMpSwyY])/g, function(i) {
                switch (i[1]) {
                case "a":
                    return $r.shortDays[c];
                    break;
                case "A":
                    return $r.days[c];
                    break;
                case "b":
                    return $r.shortMonths[g];
                    break;
                case "B":
                    return $r.months[g];
                    break;
                case "c":
                    return d.toString();
                    break;
                case "d":
                    return f(d.getDate());
                    break;
                case "H":
                    return f(b);
                    break;
                case "I":
                    return f((b + 12) % 12);
                    break;
                case "m":
                    return f(g + 1);
                    break;
                case "M":
                    return f(e);
                    break;
                case "p":
                    return b > 12 ? "PM" : "AM";
                    break;
                case "S":
                    return f(d.getSeconds());
                    break;
                case "w":
                    return c;
                    break;
                case "y":
                    return f(d.getFullYear() % 100);
                    break;
                case "Y":
                    return d.getFullYear().toString();
                    break
                }
            })
        },
        timeAgoInWords: function(b, c) {
            return $r.distanceOfTimeInWords(b, new Date(), c)
        },
        distanceOfTimeInWords: function(e, c, d) {
            var g = parseInt((c.getTime() - e.getTime()) / 1000);
            if (g < 60) {
                return "less than a minute ago"
            } else {
                if (g < 120) {
                    return "about a minute ago"
                } else {
                    if (g < (45 * 60)) {
                        return (parseInt(g / 60)).toString() + " minutes ago"
                    } else {
                        if (g < (120 * 60)) {
                            return "about an hour ago"
                        } else {
                            if (g < (24 * 60 * 60)) {
                                return "about " + (parseInt(g / 3600)).toString() + " hours ago"
                            } else {
                                if (g < (48 * 60 * 60)) {
                                    return "1 day ago"
                                } else {
                                    var f = (parseInt(g / 86400)).toString();
                                    if (f > 5) {
                                        var b = "%B %d, %Y";
                                        if (d) {
                                            b += " %I:%M %p"
                                        }
                                        return $r.strftime(e, b)
                                    } else {
                                        return f + " days ago"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })
})(jQuery);