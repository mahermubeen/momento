function init2() {
  0 == window.animacioncontacto &&
    ((window.animacioncontacto = 1),
    new RevealFx(document.querySelector(".rev-5"), {
      revealSettings: {
        bgcolor: "black",
        delay: 250,
        direction: "rl",
        onCover: function (t, e) {
          t.style.opacity = 1;
        },
      },
    }).reveal(),
    new RevealFx(document.querySelector(".rev-6"), {
      revealSettings: {
        bgcolor: "black",
        delay: 500,
        direction: "rl",
        onCover: function (t, e) {
          t.style.opacity = 1;
        },
      },
    }).reveal(),
    setTimeout(function () {
      $("#bloquecontacto").css("right", "0"),
        $("#bloquecontacto").css("opacity", "1");
    }, 1200));
}
!(function (f, _) {
  var e,
    o,
    b = typeof _,
    m = f.document,
    t = f.location,
    n = f.jQuery,
    i = f.$,
    r = {},
    d = [],
    s = "1.9.1",
    $ = d.concat,
    a = d.push,
    u = d.slice,
    c = d.indexOf,
    l = r.toString,
    w = r.hasOwnProperty,
    p = s.trim,
    wt = function (t, e) {
      return new wt.fn.init(t, e, o);
    },
    h = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    k = /\S+/g,
    g = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    y = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    x = /^[\],:{}\s]*$/,
    T = /(?:^|:|,)(?:\s*\[)+/g,
    j = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    S = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    C = /^-ms-/,
    N = /-([\da-z])/gi,
    E = function (t, e) {
      return e.toUpperCase();
    },
    A = function (t) {
      (m.addEventListener ||
        "load" === t.type ||
        "complete" === m.readyState) &&
        (L(), wt.ready());
    },
    L = function () {
      m.addEventListener
        ? (m.removeEventListener("DOMContentLoaded", A, !1),
          f.removeEventListener("load", A, !1))
        : (m.detachEvent("onreadystatechange", A), f.detachEvent("onload", A));
    };
  function P(t) {
    var e = t.length,
      o = wt.type(t);
    return (
      !wt.isWindow(t) &&
      (!(1 !== t.nodeType || !e) ||
        "array" === o ||
        ("function" !== o &&
          (0 === e || ("number" == typeof e && 0 < e && e - 1 in t))))
    );
  }
  (wt.fn = wt.prototype =
    {
      jquery: s,
      constructor: wt,
      init: function (t, e, o) {
        var n, i;
        if (!t) return this;
        if ("string" == typeof t) {
          if (
            !(n =
              "<" === t.charAt(0) &&
              ">" === t.charAt(t.length - 1) &&
              3 <= t.length
                ? [null, t, null]
                : y.exec(t)) ||
            (!n[1] && e)
          )
            return !e || e.jquery
              ? (e || o).find(t)
              : this.constructor(e).find(t);
          if (n[1]) {
            if (
              ((e = e instanceof wt ? e[0] : e),
              wt.merge(
                this,
                wt.parseHTML(
                  n[1],
                  e && e.nodeType ? e.ownerDocument || e : m,
                  !0
                )
              ),
              v.test(n[1]) && wt.isPlainObject(e))
            )
              for (n in e)
                wt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
            return this;
          }
          if ((i = m.getElementById(n[2])) && i.parentNode) {
            if (i.id !== n[2]) return o.find(t);
            (this.length = 1), (this[0] = i);
          }
          return (this.context = m), (this.selector = t), this;
        }
        return t.nodeType
          ? ((this.context = this[0] = t), (this.length = 1), this)
          : wt.isFunction(t)
          ? o.ready(t)
          : (t.selector !== _ &&
              ((this.selector = t.selector), (this.context = t.context)),
            wt.makeArray(t, this));
      },
      selector: "",
      length: 0,
      size: function () {
        return this.length;
      },
      toArray: function () {
        return u.call(this);
      },
      get: function (t) {
        return null == t
          ? this.toArray()
          : t < 0
          ? this[this.length + t]
          : this[t];
      },
      pushStack: function (t) {
        var e = wt.merge(this.constructor(), t);
        return (e.prevObject = this), (e.context = this.context), e;
      },
      each: function (t, e) {
        return wt.each(this, t, e);
      },
      ready: function (t) {
        return wt.ready.promise().done(t), this;
      },
      slice: function () {
        return this.pushStack(u.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (t) {
        var e = this.length,
          o = +t + (t < 0 ? e : 0);
        return this.pushStack(0 <= o && o < e ? [this[o]] : []);
      },
      map: function (o) {
        return this.pushStack(
          wt.map(this, function (t, e) {
            return o.call(t, e, t);
          })
        );
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: a,
      sort: [].sort,
      splice: [].splice,
    }),
    (wt.fn.init.prototype = wt.fn),
    (wt.extend = wt.fn.extend =
      function () {
        var t,
          e,
          o,
          n,
          i,
          r,
          s = arguments[0] || {},
          a = 1,
          c = arguments.length,
          l = !1;
        for (
          "boolean" == typeof s && ((l = s), (s = arguments[1] || {}), (a = 2)),
            "object" == typeof s || wt.isFunction(s) || (s = {}),
            c === a && ((s = this), --a);
          a < c;
          a++
        )
          if (null != (i = arguments[a]))
            for (n in i)
              (t = s[n]),
                s !== (o = i[n]) &&
                  (l && o && (wt.isPlainObject(o) || (e = wt.isArray(o)))
                    ? (e
                        ? ((e = !1), (r = t && wt.isArray(t) ? t : []))
                        : (r = t && wt.isPlainObject(t) ? t : {}),
                      (s[n] = wt.extend(l, r, o)))
                    : o !== _ && (s[n] = o));
        return s;
      }),
    wt.extend({
      noConflict: function (t) {
        return (
          f.$ === wt && (f.$ = i), t && f.jQuery === wt && (f.jQuery = n), wt
        );
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function (t) {
        t ? wt.readyWait++ : wt.ready(!0);
      },
      ready: function (t) {
        if (!0 === t ? !--wt.readyWait : !wt.isReady) {
          if (!m.body) return setTimeout(wt.ready);
          ((wt.isReady = !0) !== t && 0 < --wt.readyWait) ||
            (e.resolveWith(m, [wt]),
            wt.fn.trigger && wt(m).trigger("ready").off("ready"));
        }
      },
      isFunction: function (t) {
        return "function" === wt.type(t);
      },
      isArray:
        Array.isArray ||
        function (t) {
          return "array" === wt.type(t);
        },
      isWindow: function (t) {
        return null != t && t == t.window;
      },
      isNumeric: function (t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      },
      type: function (t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? r[l.call(t)] || "object"
          : typeof t;
      },
      isPlainObject: function (t) {
        if (!t || "object" !== wt.type(t) || t.nodeType || wt.isWindow(t))
          return !1;
        try {
          if (
            t.constructor &&
            !w.call(t, "constructor") &&
            !w.call(t.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (t) {
          return !1;
        }
        var e;
        for (e in t);
        return e === _ || w.call(t, e);
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0;
      },
      error: function (t) {
        throw Error(t);
      },
      parseHTML: function (t, e, o) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && ((o = e), (e = !1)), (e = e || m);
        var n = v.exec(t),
          i = !o && [];
        return n
          ? [e.createElement(n[1])]
          : ((n = wt.buildFragment([t], e, i)),
            i && wt(i).remove(),
            wt.merge([], n.childNodes));
      },
      parseJSON: function (t) {
        return f.JSON && f.JSON.parse
          ? f.JSON.parse(t)
          : null === t
          ? t
          : "string" == typeof t &&
            (t = wt.trim(t)) &&
            x.test(t.replace(j, "@").replace(S, "]").replace(T, ""))
          ? Function("return " + t)()
          : (wt.error("Invalid JSON: " + t), _);
      },
      parseXML: function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
          f.DOMParser
            ? (e = new DOMParser().parseFromString(t, "text/xml"))
            : (((e = new ActiveXObject("Microsoft.XMLDOM")).async = "false"),
              e.loadXML(t));
        } catch (t) {
          e = _;
        }
        return (
          (e &&
            e.documentElement &&
            !e.getElementsByTagName("parsererror").length) ||
            wt.error("Invalid XML: " + t),
          e
        );
      },
      noop: function () {},
      globalEval: function (t) {
        t &&
          wt.trim(t) &&
          (
            f.execScript ||
            function (t) {
              f.eval.call(f, t);
            }
          )(t);
      },
      camelCase: function (t) {
        return t.replace(C, "ms-").replace(N, E);
      },
      nodeName: function (t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      },
      each: function (t, e, o) {
        var n = 0,
          i = t.length,
          r = P(t);
        if (o) {
          if (r) for (; n < i && !1 !== e.apply(t[n], o); n++);
          else for (n in t) if (!1 === e.apply(t[n], o)) break;
        } else if (r) for (; n < i && !1 !== e.call(t[n], n, t[n]); n++);
        else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
        return t;
      },
      trim:
        p && !p.call("\ufeff ")
          ? function (t) {
              return null == t ? "" : p.call(t);
            }
          : function (t) {
              return null == t ? "" : (t + "").replace(g, "");
            },
      makeArray: function (t, e) {
        var o = e || [];
        return (
          null != t &&
            (P(Object(t))
              ? wt.merge(o, "string" == typeof t ? [t] : t)
              : a.call(o, t)),
          o
        );
      },
      inArray: function (t, e, o) {
        var n;
        if (e) {
          if (c) return c.call(e, t, o);
          for (
            n = e.length, o = o ? (o < 0 ? Math.max(0, n + o) : o) : 0;
            o < n;
            o++
          )
            if (o in e && e[o] === t) return o;
        }
        return -1;
      },
      merge: function (t, e) {
        var o = e.length,
          n = t.length,
          i = 0;
        if ("number" == typeof o) for (; i < o; i++) t[n++] = e[i];
        else for (; e[i] !== _; ) t[n++] = e[i++];
        return (t.length = n), t;
      },
      grep: function (t, e, o) {
        var n = [],
          i = 0,
          r = t.length;
        for (o = !!o; i < r; i++) o !== !!e(t[i], i) && n.push(t[i]);
        return n;
      },
      map: function (t, e, o) {
        var n,
          i = 0,
          r = t.length,
          s = [];
        if (P(t))
          for (; i < r; i++) null != (n = e(t[i], i, o)) && (s[s.length] = n);
        else for (i in t) null != (n = e(t[i], i, o)) && (s[s.length] = n);
        return $.apply([], s);
      },
      guid: 1,
      proxy: function (t, e) {
        var o, n, i;
        return (
          "string" == typeof e && ((i = t[e]), (e = t), (t = i)),
          wt.isFunction(t)
            ? ((o = u.call(arguments, 2)),
              ((n = function () {
                return t.apply(e || this, o.concat(u.call(arguments)));
              }).guid = t.guid =
                t.guid || wt.guid++),
              n)
            : _
        );
      },
      access: function (t, e, o, n, i, r, s) {
        var a = 0,
          c = t.length,
          l = null == o;
        if ("object" === wt.type(o))
          for (a in ((i = !0), o)) wt.access(t, e, a, o[a], !0, r, s);
        else if (
          n !== _ &&
          ((i = !0),
          wt.isFunction(n) || (s = !0),
          l &&
            (s
              ? (e.call(t, n), (e = null))
              : ((l = e),
                (e = function (t, e, o) {
                  return l.call(wt(t), o);
                }))),
          e)
        )
          for (; a < c; a++) e(t[a], o, s ? n : n.call(t[a], a, e(t[a], o)));
        return i ? t : l ? e.call(t) : c ? e(t[0], o) : r;
      },
      now: function () {
        return new Date().getTime();
      },
    }),
    (wt.ready.promise = function (t) {
      if (!e)
        if (((e = wt.Deferred()), "complete" === m.readyState))
          setTimeout(wt.ready);
        else if (m.addEventListener)
          m.addEventListener("DOMContentLoaded", A, !1),
            f.addEventListener("load", A, !1);
        else {
          m.attachEvent("onreadystatechange", A), f.attachEvent("onload", A);
          var o = !1;
          try {
            o = null == f.frameElement && m.documentElement;
          } catch (t) {}
          o &&
            o.doScroll &&
            (function e() {
              if (!wt.isReady) {
                try {
                  o.doScroll("left");
                } catch (t) {
                  return setTimeout(e, 50);
                }
                L(), wt.ready();
              }
            })();
        }
      return e.promise(t);
    }),
    wt.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (t, e) {
        r["[object " + e + "]"] = e.toLowerCase();
      }
    ),
    (o = wt(m));
  var M = {};
  (wt.Callbacks = function (i) {
    var t, o;
    i =
      "string" == typeof i
        ? M[i] ||
          ((o = M[(t = i)] = {}),
          wt.each(t.match(k) || [], function (t, e) {
            o[e] = !0;
          }),
          o)
        : wt.extend({}, i);
    var n,
      e,
      r,
      s,
      a,
      c,
      l = [],
      u = !i.once && [],
      d = function (t) {
        for (
          e = i.memory && t, r = !0, a = c || 0, c = 0, s = l.length, n = !0;
          l && a < s;
          a++
        )
          if (!1 === l[a].apply(t[0], t[1]) && i.stopOnFalse) {
            e = !1;
            break;
          }
        (n = !1),
          l && (u ? u.length && d(u.shift()) : e ? (l = []) : p.disable());
      },
      p = {
        add: function () {
          if (l) {
            var t = l.length;
            (function n(t) {
              wt.each(t, function (t, e) {
                var o = wt.type(e);
                "function" === o
                  ? (i.unique && p.has(e)) || l.push(e)
                  : e && e.length && "string" !== o && n(e);
              });
            })(arguments),
              n ? (s = l.length) : e && ((c = t), d(e));
          }
          return this;
        },
        remove: function () {
          return (
            l &&
              wt.each(arguments, function (t, e) {
                for (var o; -1 < (o = wt.inArray(e, l, o)); )
                  l.splice(o, 1), n && (o <= s && s--, o <= a && a--);
              }),
            this
          );
        },
        has: function (t) {
          return t ? -1 < wt.inArray(t, l) : !(!l || !l.length);
        },
        empty: function () {
          return (l = []), this;
        },
        disable: function () {
          return (l = u = e = _), this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return (u = _), e || p.disable(), this;
        },
        locked: function () {
          return !u;
        },
        fireWith: function (t, e) {
          return (
            (e = [t, (e = e || []).slice ? e.slice() : e]),
            !l || (r && !u) || (n ? u.push(e) : d(e)),
            this
          );
        },
        fire: function () {
          return p.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return p;
  }),
    wt.extend({
      Deferred: function (t) {
        var s = [
            ["resolve", "done", wt.Callbacks("once memory"), "resolved"],
            ["reject", "fail", wt.Callbacks("once memory"), "rejected"],
            ["notify", "progress", wt.Callbacks("memory")],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return c.done(arguments).fail(arguments), this;
            },
            then: function () {
              var r = arguments;
              return wt
                .Deferred(function (i) {
                  wt.each(s, function (t, e) {
                    var o = e[0],
                      n = wt.isFunction(r[t]) && r[t];
                    c[e[1]](function () {
                      var t = n && n.apply(this, arguments);
                      t && wt.isFunction(t.promise)
                        ? t
                            .promise()
                            .done(i.resolve)
                            .fail(i.reject)
                            .progress(i.notify)
                        : i[o + "With"](
                            this === a ? i.promise() : this,
                            n ? [t] : arguments
                          );
                    });
                  }),
                    (r = null);
                })
                .promise();
            },
            promise: function (t) {
              return null != t ? wt.extend(t, a) : a;
            },
          },
          c = {};
        return (
          (a.pipe = a.then),
          wt.each(s, function (t, e) {
            var o = e[2],
              n = e[3];
            (a[e[1]] = o.add),
              n &&
                o.add(
                  function () {
                    i = n;
                  },
                  s[1 ^ t][2].disable,
                  s[2][2].lock
                ),
              (c[e[0]] = function () {
                return c[e[0] + "With"](this === c ? a : this, arguments), this;
              }),
              (c[e[0] + "With"] = o.fireWith);
          }),
          a.promise(c),
          t && t.call(c, c),
          c
        );
      },
      when: function (t) {
        var i,
          e,
          o,
          n = 0,
          r = u.call(arguments),
          s = r.length,
          a = 1 !== s || (t && wt.isFunction(t.promise)) ? s : 0,
          c = 1 === a ? t : wt.Deferred(),
          l = function (e, o, n) {
            return function (t) {
              (o[e] = this),
                (n[e] = 1 < arguments.length ? u.call(arguments) : t),
                n === i ? c.notifyWith(o, n) : --a || c.resolveWith(o, n);
            };
          };
        if (1 < s)
          for (i = Array(s), e = Array(s), o = Array(s); n < s; n++)
            r[n] && wt.isFunction(r[n].promise)
              ? r[n]
                  .promise()
                  .done(l(n, o, r))
                  .fail(c.reject)
                  .progress(l(n, e, i))
              : --a;
        return a || c.resolveWith(o, r), c.promise();
      },
    }),
    (wt.support = (function () {
      var r,
        t,
        e,
        o,
        n,
        i,
        s,
        a,
        c,
        l,
        u = m.createElement("div");
      if (
        (u.setAttribute("className", "t"),
        (u.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (t = u.getElementsByTagName("*")),
        (e = u.getElementsByTagName("a")[0]),
        !t || !e || !t.length)
      )
        return {};
      (s = (n = m.createElement("select")).appendChild(
        m.createElement("option")
      )),
        (o = u.getElementsByTagName("input")[0]),
        (e.style.cssText = "top:1px;float:left;opacity:.5"),
        (r = {
          getSetAttribute: "t" !== u.className,
          leadingWhitespace: 3 === u.firstChild.nodeType,
          tbody: !u.getElementsByTagName("tbody").length,
          htmlSerialize: !!u.getElementsByTagName("link").length,
          style: /top/.test(e.getAttribute("style")),
          hrefNormalized: "/a" === e.getAttribute("href"),
          opacity: /^0.5/.test(e.style.opacity),
          cssFloat: !!e.style.cssFloat,
          checkOn: !!o.value,
          optSelected: s.selected,
          enctype: !!m.createElement("form").enctype,
          html5Clone:
            "<:nav></:nav>" !== m.createElement("nav").cloneNode(!0).outerHTML,
          boxModel: "CSS1Compat" === m.compatMode,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
          boxSizingReliable: !0,
          pixelPosition: !1,
        }),
        (o.checked = !0),
        (r.noCloneChecked = o.cloneNode(!0).checked),
        (n.disabled = !0),
        (r.optDisabled = !s.disabled);
      try {
        delete u.test;
      } catch (t) {
        r.deleteExpando = !1;
      }
      for (l in ((o = m.createElement("input")).setAttribute("value", ""),
      (r.input = "" === o.getAttribute("value")),
      (o.value = "t"),
      o.setAttribute("type", "radio"),
      (r.radioValue = "t" === o.value),
      o.setAttribute("checked", "t"),
      o.setAttribute("name", "t"),
      (i = m.createDocumentFragment()).appendChild(o),
      (r.appendChecked = o.checked),
      (r.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked),
      u.attachEvent &&
        (u.attachEvent("onclick", function () {
          r.noCloneEvent = !1;
        }),
        u.cloneNode(!0).click()),
      { submit: !0, change: !0, focusin: !0 }))
        u.setAttribute((a = "on" + l), "t"),
          (r[l + "Bubbles"] = a in f || !1 === u.attributes[a].expando);
      return (
        (u.style.backgroundClip = "content-box"),
        (u.cloneNode(!0).style.backgroundClip = ""),
        (r.clearCloneStyle = "content-box" === u.style.backgroundClip),
        wt(function () {
          var t,
            e,
            o,
            n =
              "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            i = m.getElementsByTagName("body")[0];
          i &&
            (((t = m.createElement("div")).style.cssText =
              "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
            i.appendChild(t).appendChild(u),
            (u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            ((o = u.getElementsByTagName("td"))[0].style.cssText =
              "padding:0;margin:0;border:0;display:none"),
            (c = 0 === o[0].offsetHeight),
            (o[0].style.display = ""),
            (o[1].style.display = "none"),
            (r.reliableHiddenOffsets = c && 0 === o[0].offsetHeight),
            (u.innerHTML = ""),
            (u.style.cssText =
              "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
            (r.boxSizing = 4 === u.offsetWidth),
            (r.doesNotIncludeMarginInBodyOffset = 1 !== i.offsetTop),
            f.getComputedStyle &&
              ((r.pixelPosition =
                "1%" !== (f.getComputedStyle(u, null) || {}).top),
              (r.boxSizingReliable =
                "4px" ===
                (f.getComputedStyle(u, null) || { width: "4px" }).width),
              ((e = u.appendChild(m.createElement("div"))).style.cssText =
                u.style.cssText =
                  n),
              (e.style.marginRight = e.style.width = "0"),
              (u.style.width = "1px"),
              (r.reliableMarginRight = !parseFloat(
                (f.getComputedStyle(e, null) || {}).marginRight
              ))),
            typeof u.style.zoom !== b &&
              ((u.innerHTML = ""),
              (u.style.cssText =
                n + "width:1px;padding:1px;display:inline;zoom:1"),
              (r.inlineBlockNeedsLayout = 3 === u.offsetWidth),
              (u.style.display = "block"),
              (u.innerHTML = "<div></div>"),
              (u.firstChild.style.width = "5px"),
              (r.shrinkWrapBlocks = 3 !== u.offsetWidth),
              r.inlineBlockNeedsLayout && (i.style.zoom = 1)),
            i.removeChild(t),
            (t = u = o = e = null));
        }),
        (t = n = i = s = e = o = null),
        r
      );
    })());
  var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    D = /([A-Z])/g;
  function O(t, e, o, n) {
    if (wt.acceptData(t)) {
      var i,
        r,
        s = wt.expando,
        a = "string" == typeof e,
        c = t.nodeType,
        l = c ? wt.cache : t,
        u = c ? t[s] : t[s] && s;
      if ((u && l[u] && (n || l[u].data)) || !a || o !== _)
        return (
          u || (c ? (t[s] = u = d.pop() || wt.guid++) : (u = s)),
          l[u] || ((l[u] = {}), c || (l[u].toJSON = wt.noop)),
          ("object" == typeof e || "function" == typeof e) &&
            (n
              ? (l[u] = wt.extend(l[u], e))
              : (l[u].data = wt.extend(l[u].data, e))),
          (i = l[u]),
          n || (i.data || (i.data = {}), (i = i.data)),
          o !== _ && (i[wt.camelCase(e)] = o),
          a ? null == (r = i[e]) && (r = i[wt.camelCase(e)]) : (r = i),
          r
        );
    }
  }
  function q(t, e, o) {
    if (wt.acceptData(t)) {
      var n,
        i,
        r,
        s = t.nodeType,
        a = s ? wt.cache : t,
        c = s ? t[wt.expando] : wt.expando;
      if (a[c]) {
        if (e && (r = o ? a[c] : a[c].data)) {
          wt.isArray(e)
            ? (e = e.concat(wt.map(e, wt.camelCase)))
            : e in r
            ? (e = [e])
            : (e = (e = wt.camelCase(e)) in r ? [e] : e.split(" "));
          for (n = 0, i = e.length; n < i; n++) delete r[e[n]];
          if (!(o ? X : wt.isEmptyObject)(r)) return;
        }
        (o || (delete a[c].data, X(a[c]))) &&
          (s
            ? wt.cleanData([t], !0)
            : wt.support.deleteExpando || a != a.window
            ? delete a[c]
            : (a[c] = null));
      }
    }
  }
  function F(t, e, o) {
    if (o === _ && 1 === t.nodeType) {
      var n = "data-" + e.replace(D, "-$1").toLowerCase();
      if ("string" == typeof (o = t.getAttribute(n))) {
        try {
          o =
            "true" === o ||
            ("false" !== o &&
              ("null" === o
                ? null
                : +o + "" === o
                ? +o
                : H.test(o)
                ? wt.parseJSON(o)
                : o));
        } catch (t) {}
        wt.data(t, e, o);
      } else o = _;
    }
    return o;
  }
  function X(t) {
    var e;
    for (e in t)
      if (("data" !== e || !wt.isEmptyObject(t[e])) && "toJSON" !== e)
        return !1;
    return !0;
  }
  wt.extend({
    cache: {},
    expando: "jQuery" + (s + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0,
    },
    hasData: function (t) {
      return (
        !!(t = t.nodeType ? wt.cache[t[wt.expando]] : t[wt.expando]) && !X(t)
      );
    },
    data: function (t, e, o) {
      return O(t, e, o);
    },
    removeData: function (t, e) {
      return q(t, e);
    },
    _data: function (t, e, o) {
      return O(t, e, o, !0);
    },
    _removeData: function (t, e) {
      return q(t, e, !0);
    },
    acceptData: function (t) {
      if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
      var e = t.nodeName && wt.noData[t.nodeName.toLowerCase()];
      return !e || (!0 !== e && t.getAttribute("classid") === e);
    },
  }),
    wt.fn.extend({
      data: function (e, t) {
        var o,
          n,
          i = this[0],
          r = 0,
          s = null;
        if (e === _) {
          if (
            this.length &&
            ((s = wt.data(i)), 1 === i.nodeType && !wt._data(i, "parsedAttrs"))
          ) {
            for (o = i.attributes; o.length > r; r++)
              (n = o[r].name).indexOf("data-") ||
                ((n = wt.camelCase(n.slice(5))), F(i, n, s[n]));
            wt._data(i, "parsedAttrs", !0);
          }
          return s;
        }
        return "object" == typeof e
          ? this.each(function () {
              wt.data(this, e);
            })
          : wt.access(
              this,
              function (t) {
                return t === _
                  ? i
                    ? F(i, e, wt.data(i, e))
                    : null
                  : (this.each(function () {
                      wt.data(this, e, t);
                    }),
                    _);
              },
              null,
              t,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (t) {
        return this.each(function () {
          wt.removeData(this, t);
        });
      },
    }),
    wt.extend({
      queue: function (t, e, o) {
        var n;
        return t
          ? ((e = (e || "fx") + "queue"),
            (n = wt._data(t, e)),
            o &&
              (!n || wt.isArray(o)
                ? (n = wt._data(t, e, wt.makeArray(o)))
                : n.push(o)),
            n || [])
          : _;
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var o = wt.queue(t, e),
          n = o.length,
          i = o.shift(),
          r = wt._queueHooks(t, e);
        "inprogress" === i && ((i = o.shift()), n--),
          (r.cur = i) &&
            ("fx" === e && o.unshift("inprogress"),
            delete r.stop,
            i.call(
              t,
              function () {
                wt.dequeue(t, e);
              },
              r
            )),
          !n && r && r.empty.fire();
      },
      _queueHooks: function (t, e) {
        var o = e + "queueHooks";
        return (
          wt._data(t, o) ||
          wt._data(t, o, {
            empty: wt.Callbacks("once memory").add(function () {
              wt._removeData(t, e + "queue"), wt._removeData(t, o);
            }),
          })
        );
      },
    }),
    wt.fn.extend({
      queue: function (e, o) {
        var t = 2;
        return (
          "string" != typeof e && ((o = e), (e = "fx"), t--),
          t > arguments.length
            ? wt.queue(this[0], e)
            : o === _
            ? this
            : this.each(function () {
                var t = wt.queue(this, e, o);
                wt._queueHooks(this, e),
                  "fx" === e && "inprogress" !== t[0] && wt.dequeue(this, e);
              })
        );
      },
      dequeue: function (t) {
        return this.each(function () {
          wt.dequeue(this, t);
        });
      },
      delay: function (n, t) {
        return (
          (n = (wt.fx && wt.fx.speeds[n]) || n),
          (t = t || "fx"),
          this.queue(t, function (t, e) {
            var o = setTimeout(t, n);
            e.stop = function () {
              clearTimeout(o);
            };
          })
        );
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", []);
      },
      promise: function (t, e) {
        var o,
          n = 1,
          i = wt.Deferred(),
          r = this,
          s = this.length,
          a = function () {
            --n || i.resolveWith(r, [r]);
          };
        for ("string" != typeof t && ((e = t), (t = _)), t = t || "fx"; s--; )
          (o = wt._data(r[s], t + "queueHooks")) &&
            o.empty &&
            (n++, o.empty.add(a));
        return a(), i.promise(e);
      },
    });
  var B,
    I,
    z = /[\t\r\n]/g,
    R = /\r/g,
    W = /^(?:input|select|textarea|button|object)$/i,
    Y = /^(?:a|area)$/i,
    Q =
      /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
    V = /^(?:checked|selected)$/i,
    U = wt.support.getSetAttribute,
    J = wt.support.input;
  wt.fn.extend({
    attr: function (t, e) {
      return wt.access(this, wt.attr, t, e, 1 < arguments.length);
    },
    removeAttr: function (t) {
      return this.each(function () {
        wt.removeAttr(this, t);
      });
    },
    prop: function (t, e) {
      return wt.access(this, wt.prop, t, e, 1 < arguments.length);
    },
    removeProp: function (t) {
      return (
        (t = wt.propFix[t] || t),
        this.each(function () {
          try {
            (this[t] = _), delete this[t];
          } catch (t) {}
        })
      );
    },
    addClass: function (e) {
      var t,
        o,
        n,
        i,
        r,
        s = 0,
        a = this.length,
        c = "string" == typeof e && e;
      if (wt.isFunction(e))
        return this.each(function (t) {
          wt(this).addClass(e.call(this, t, this.className));
        });
      if (c)
        for (t = (e || "").match(k) || []; s < a; s++)
          if (
            (n =
              1 === (o = this[s]).nodeType &&
              (o.className ? (" " + o.className + " ").replace(z, " ") : " "))
          ) {
            for (r = 0; (i = t[r++]); )
              n.indexOf(" " + i + " ") < 0 && (n += i + " ");
            o.className = wt.trim(n);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        o,
        n,
        i,
        r,
        s = 0,
        a = this.length,
        c = 0 === arguments.length || ("string" == typeof e && e);
      if (wt.isFunction(e))
        return this.each(function (t) {
          wt(this).removeClass(e.call(this, t, this.className));
        });
      if (c)
        for (t = (e || "").match(k) || []; s < a; s++)
          if (
            (n =
              1 === (o = this[s]).nodeType &&
              (o.className ? (" " + o.className + " ").replace(z, " ") : ""))
          ) {
            for (r = 0; (i = t[r++]); )
              for (; 0 <= n.indexOf(" " + i + " "); )
                n = n.replace(" " + i + " ", " ");
            o.className = e ? wt.trim(n) : "";
          }
      return this;
    },
    toggleClass: function (r, s) {
      var a = typeof r,
        c = "boolean" == typeof s;
      return wt.isFunction(r)
        ? this.each(function (t) {
            wt(this).toggleClass(r.call(this, t, this.className, s), s);
          })
        : this.each(function () {
            if ("string" === a)
              for (
                var t, e = 0, o = wt(this), n = s, i = r.match(k) || [];
                (t = i[e++]);

              )
                (n = c ? n : !o.hasClass(t)),
                  o[n ? "addClass" : "removeClass"](t);
            else
              (a === b || "boolean" === a) &&
                (this.className &&
                  wt._data(this, "__className__", this.className),
                (this.className =
                  this.className || !1 === r
                    ? ""
                    : wt._data(this, "__className__") || ""));
          });
    },
    hasClass: function (t) {
      for (var e = " " + t + " ", o = 0, n = this.length; o < n; o++)
        if (
          1 === this[o].nodeType &&
          0 <= (" " + this[o].className + " ").replace(z, " ").indexOf(e)
        )
          return !0;
      return !1;
    },
    val: function (n) {
      var t,
        i,
        r,
        e = this[0];
      return arguments.length
        ? ((r = wt.isFunction(n)),
          this.each(function (t) {
            var e,
              o = wt(this);
            1 === this.nodeType &&
              (null == (e = r ? n.call(this, t, o.val()) : n)
                ? (e = "")
                : "number" == typeof e
                ? (e += "")
                : wt.isArray(e) &&
                  (e = wt.map(e, function (t) {
                    return null == t ? "" : t + "";
                  })),
              ((i =
                wt.valHooks[this.type] ||
                wt.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in i &&
                i.set(this, e, "value") !== _) ||
                (this.value = e));
          }))
        : e
        ? (i = wt.valHooks[e.type] || wt.valHooks[e.nodeName.toLowerCase()]) &&
          "get" in i &&
          (t = i.get(e, "value")) !== _
          ? t
          : "string" == typeof (t = e.value)
          ? t.replace(R, "")
          : null == t
          ? ""
          : t
        : void 0;
    },
  }),
    wt.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = t.attributes.value;
            return !e || e.specified ? t.value : t.text;
          },
        },
        select: {
          get: function (t) {
            for (
              var e,
                o,
                n = t.options,
                i = t.selectedIndex,
                r = "select-one" === t.type || i < 0,
                s = r ? null : [],
                a = r ? i + 1 : n.length,
                c = i < 0 ? a : r ? i : 0;
              c < a;
              c++
            )
              if (
                !(
                  (!(o = n[c]).selected && c !== i) ||
                  (wt.support.optDisabled
                    ? o.disabled
                    : null !== o.getAttribute("disabled")) ||
                  (o.parentNode.disabled &&
                    wt.nodeName(o.parentNode, "optgroup"))
                )
              ) {
                if (((e = wt(o).val()), r)) return e;
                s.push(e);
              }
            return s;
          },
          set: function (t, e) {
            var o = wt.makeArray(e);
            return (
              wt(t)
                .find("option")
                .each(function () {
                  this.selected = 0 <= wt.inArray(wt(this).val(), o);
                }),
              o.length || (t.selectedIndex = -1),
              o
            );
          },
        },
      },
      attr: function (t, e, o) {
        var n,
          i,
          r,
          s = t.nodeType;
        if (t && 3 !== s && 8 !== s && 2 !== s)
          return typeof t.getAttribute === b
            ? wt.prop(t, e, o)
            : ((i = 1 !== s || !wt.isXMLDoc(t)) &&
                ((e = e.toLowerCase()),
                (n = wt.attrHooks[e] || (Q.test(e) ? I : B))),
              o === _
                ? n && i && "get" in n && null !== (r = n.get(t, e))
                  ? r
                  : (typeof t.getAttribute !== b && (r = t.getAttribute(e)),
                    null == r ? _ : r)
                : null !== o
                ? n && i && "set" in n && (r = n.set(t, o, e)) !== _
                  ? r
                  : (t.setAttribute(e, o + ""), o)
                : (wt.removeAttr(t, e), _));
      },
      removeAttr: function (t, e) {
        var o,
          n,
          i = 0,
          r = e && e.match(k);
        if (r && 1 === t.nodeType)
          for (; (o = r[i++]); )
            (n = wt.propFix[o] || o),
              Q.test(o)
                ? !U && V.test(o)
                  ? (t[wt.camelCase("default-" + o)] = t[n] = !1)
                  : (t[n] = !1)
                : wt.attr(t, o, ""),
              t.removeAttribute(U ? o : n);
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (
              !wt.support.radioValue &&
              "radio" === e &&
              wt.nodeName(t, "input")
            ) {
              var o = t.value;
              return t.setAttribute("type", e), o && (t.value = o), e;
            }
          },
        },
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        for: "htmlFor",
        class: "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable",
      },
      prop: function (t, e, o) {
        var n,
          i,
          r = t.nodeType;
        if (t && 3 !== r && 8 !== r && 2 !== r)
          return (
            (1 !== r || !wt.isXMLDoc(t)) &&
              ((e = wt.propFix[e] || e), (i = wt.propHooks[e])),
            o !== _
              ? i && "set" in i && (n = i.set(t, o, e)) !== _
                ? n
                : (t[e] = o)
              : i && "get" in i && null !== (n = i.get(t, e))
              ? n
              : t[e]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = t.getAttributeNode("tabindex");
            return e && e.specified
              ? parseInt(e.value, 10)
              : W.test(t.nodeName) || (Y.test(t.nodeName) && t.href)
              ? 0
              : _;
          },
        },
      },
    }),
    (I = {
      get: function (t, e) {
        var o = wt.prop(t, e),
          n = "boolean" == typeof o && t.getAttribute(e),
          i =
            "boolean" == typeof o
              ? J && U
                ? null != n
                : V.test(e)
                ? t[wt.camelCase("default-" + e)]
                : !!n
              : t.getAttributeNode(e);
        return i && !1 !== i.value ? e.toLowerCase() : _;
      },
      set: function (t, e, o) {
        return (
          !1 === e
            ? wt.removeAttr(t, o)
            : (J && U) || !V.test(o)
            ? t.setAttribute((!U && wt.propFix[o]) || o, o)
            : (t[wt.camelCase("default-" + o)] = t[o] = !0),
          o
        );
      },
    }),
    (J && U) ||
      (wt.attrHooks.value = {
        get: function (t, e) {
          var o = t.getAttributeNode(e);
          return wt.nodeName(t, "input")
            ? t.defaultValue
            : o && o.specified
            ? o.value
            : _;
        },
        set: function (t, e, o) {
          return wt.nodeName(t, "input")
            ? ((t.defaultValue = e), _)
            : B && B.set(t, e, o);
        },
      }),
    U ||
      ((B = wt.valHooks.button =
        {
          get: function (t, e) {
            var o = t.getAttributeNode(e);
            return o &&
              ("id" === e || "name" === e || "coords" === e
                ? "" !== o.value
                : o.specified)
              ? o.value
              : _;
          },
          set: function (t, e, o) {
            var n = t.getAttributeNode(o);
            return (
              n || t.setAttributeNode((n = t.ownerDocument.createAttribute(o))),
              (n.value = e += ""),
              "value" === o || e === t.getAttribute(o) ? e : _
            );
          },
        }),
      (wt.attrHooks.contenteditable = {
        get: B.get,
        set: function (t, e, o) {
          B.set(t, "" !== e && e, o);
        },
      }),
      wt.each(["width", "height"], function (t, o) {
        wt.attrHooks[o] = wt.extend(wt.attrHooks[o], {
          set: function (t, e) {
            return "" === e ? (t.setAttribute(o, "auto"), e) : _;
          },
        });
      })),
    wt.support.hrefNormalized ||
      (wt.each(["href", "src", "width", "height"], function (t, o) {
        wt.attrHooks[o] = wt.extend(wt.attrHooks[o], {
          get: function (t) {
            var e = t.getAttribute(o, 2);
            return null == e ? _ : e;
          },
        });
      }),
      wt.each(["href", "src"], function (t, e) {
        wt.propHooks[e] = {
          get: function (t) {
            return t.getAttribute(e, 4);
          },
        };
      })),
    wt.support.style ||
      (wt.attrHooks.style = {
        get: function (t) {
          return t.style.cssText || _;
        },
        set: function (t, e) {
          return (t.style.cssText = e + "");
        },
      }),
    wt.support.optSelected ||
      (wt.propHooks.selected = wt.extend(wt.propHooks.selected, {
        get: function (t) {
          var e = t.parentNode;
          return (
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
            null
          );
        },
      })),
    wt.support.enctype || (wt.propFix.enctype = "encoding"),
    wt.support.checkOn ||
      wt.each(["radio", "checkbox"], function () {
        wt.valHooks[this] = {
          get: function (t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          },
        };
      }),
    wt.each(["radio", "checkbox"], function () {
      wt.valHooks[this] = wt.extend(wt.valHooks[this], {
        set: function (t, e) {
          return wt.isArray(e)
            ? (t.checked = 0 <= wt.inArray(wt(t).val(), e))
            : _;
        },
      });
    });
  var G = /^(?:input|select|textarea)$/i,
    Z = /^key/,
    K = /^(?:mouse|contextmenu)|click/,
    tt = /^(?:focusinfocus|focusoutblur)$/,
    et = /^([^.]*)(?:\.(.+)|)$/;
  function ot() {
    return !0;
  }
  function nt() {
    return !1;
  }
  (wt.event = {
    global: {},
    add: function (t, e, o, n, i) {
      var r,
        s,
        a,
        c,
        l,
        u,
        d,
        p,
        h,
        f,
        m,
        w = wt._data(t);
      if (w) {
        for (
          o.handler && ((o = (c = o).handler), (i = c.selector)),
            o.guid || (o.guid = wt.guid++),
            (s = w.events) || (s = w.events = {}),
            (u = w.handle) ||
              ((u = w.handle =
                function (t) {
                  return typeof wt === b || (t && wt.event.triggered === t.type)
                    ? _
                    : wt.event.dispatch.apply(u.elem, arguments);
                }).elem = t),
            a = (e = (e || "").match(k) || [""]).length;
          a--;

        )
          (h = m = (r = et.exec(e[a]) || [])[1]),
            (f = (r[2] || "").split(".").sort()),
            (l = wt.event.special[h] || {}),
            (h = (i ? l.delegateType : l.bindType) || h),
            (l = wt.event.special[h] || {}),
            (d = wt.extend(
              {
                type: h,
                origType: m,
                data: n,
                handler: o,
                guid: o.guid,
                selector: i,
                needsContext: i && wt.expr.match.needsContext.test(i),
                namespace: f.join("."),
              },
              c
            )),
            (p = s[h]) ||
              (((p = s[h] = []).delegateCount = 0),
              (l.setup && !1 !== l.setup.call(t, n, f, u)) ||
                (t.addEventListener
                  ? t.addEventListener(h, u, !1)
                  : t.attachEvent && t.attachEvent("on" + h, u))),
            l.add &&
              (l.add.call(t, d), d.handler.guid || (d.handler.guid = o.guid)),
            i ? p.splice(p.delegateCount++, 0, d) : p.push(d),
            (wt.event.global[h] = !0);
        t = null;
      }
    },
    remove: function (t, e, o, n, i) {
      var r,
        s,
        a,
        c,
        l,
        u,
        d,
        p,
        h,
        f,
        m,
        w = wt.hasData(t) && wt._data(t);
      if (w && (u = w.events)) {
        for (l = (e = (e || "").match(k) || [""]).length; l--; )
          if (
            ((h = m = (a = et.exec(e[l]) || [])[1]),
            (f = (a[2] || "").split(".").sort()),
            h)
          ) {
            for (
              d = wt.event.special[h] || {},
                p = u[(h = (n ? d.delegateType : d.bindType) || h)] || [],
                a =
                  a[2] &&
                  RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                c = r = p.length;
              r--;

            )
              (s = p[r]),
                (!i && m !== s.origType) ||
                  (o && o.guid !== s.guid) ||
                  (a && !a.test(s.namespace)) ||
                  (n && n !== s.selector && ("**" !== n || !s.selector)) ||
                  (p.splice(r, 1),
                  s.selector && p.delegateCount--,
                  d.remove && d.remove.call(t, s));
            c &&
              !p.length &&
              ((d.teardown && !1 !== d.teardown.call(t, f, w.handle)) ||
                wt.removeEvent(t, h, w.handle),
              delete u[h]);
          } else for (h in u) wt.event.remove(t, h + e[l], o, n, !0);
        wt.isEmptyObject(u) && (delete w.handle, wt._removeData(t, "events"));
      }
    },
    trigger: function (t, e, o, n) {
      var i,
        r,
        s,
        a,
        c,
        l,
        u,
        d = [o || m],
        p = w.call(t, "type") ? t.type : t,
        h = w.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = l = o = o || m),
        3 !== o.nodeType &&
          8 !== o.nodeType &&
          !tt.test(p + wt.event.triggered) &&
          (0 <= p.indexOf(".") && ((p = (h = p.split(".")).shift()), h.sort()),
          (r = p.indexOf(":") < 0 && "on" + p),
          ((t = t[wt.expando]
            ? t
            : new wt.Event(p, "object" == typeof t && t)).isTrigger = !0),
          (t.namespace = h.join(".")),
          (t.namespace_re = t.namespace
            ? RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = _),
          t.target || (t.target = o),
          (e = null == e ? [t] : wt.makeArray(e, [t])),
          (c = wt.event.special[p] || {}),
          n || !c.trigger || !1 !== c.trigger.apply(o, e)))
      ) {
        if (!n && !c.noBubble && !wt.isWindow(o)) {
          for (
            a = c.delegateType || p, tt.test(a + p) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            d.push(s), (l = s);
          l === (o.ownerDocument || m) &&
            d.push(l.defaultView || l.parentWindow || f);
        }
        for (u = 0; (s = d[u++]) && !t.isPropagationStopped(); )
          (t.type = 1 < u ? a : c.bindType || p),
            (i =
              (wt._data(s, "events") || {})[t.type] && wt._data(s, "handle")) &&
              i.apply(s, e),
            (i = r && s[r]) &&
              wt.acceptData(s) &&
              i.apply &&
              !1 === i.apply(s, e) &&
              t.preventDefault();
        if (
          ((t.type = p),
          !(
            n ||
            t.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(o.ownerDocument, e)) ||
            ("click" === p && wt.nodeName(o, "a"))
          ) &&
            wt.acceptData(o) &&
            r &&
            o[p] &&
            !wt.isWindow(o))
        ) {
          (l = o[r]) && (o[r] = null), (wt.event.triggered = p);
          try {
            o[p]();
          } catch (t) {}
          (wt.event.triggered = _), l && (o[r] = l);
        }
        return t.result;
      }
    },
    dispatch: function (t) {
      t = wt.event.fix(t);
      var e,
        o,
        n,
        i,
        r,
        s = [],
        a = u.call(arguments),
        c = (wt._data(this, "events") || {})[t.type] || [],
        l = wt.event.special[t.type] || {};
      if (
        (((a[0] = t).delegateTarget = this),
        !l.preDispatch || !1 !== l.preDispatch.call(this, t))
      ) {
        for (
          s = wt.event.handlers.call(this, t, c), e = 0;
          (i = s[e++]) && !t.isPropagationStopped();

        )
          for (
            t.currentTarget = i.elem, r = 0;
            (n = i.handlers[r++]) && !t.isImmediatePropagationStopped();

          )
            (!t.namespace_re || t.namespace_re.test(n.namespace)) &&
              ((t.handleObj = n),
              (t.data = n.data),
              (o = (
                (wt.event.special[n.origType] || {}).handle || n.handler
              ).apply(i.elem, a)) !== _ &&
                !1 === (t.result = o) &&
                (t.preventDefault(), t.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (t, e) {
      var o,
        n,
        i,
        r,
        s = [],
        a = e.delegateCount,
        c = t.target;
      if (a && c.nodeType && (!t.button || "click" !== t.type))
        for (; c != this; c = c.parentNode || this)
          if (1 === c.nodeType && (!0 !== c.disabled || "click" !== t.type)) {
            for (i = [], r = 0; r < a; r++)
              i[(o = (n = e[r]).selector + " ")] === _ &&
                (i[o] = n.needsContext
                  ? 0 <= wt(o, this).index(c)
                  : wt.find(o, this, null, [c]).length),
                i[o] && i.push(n);
            i.length && s.push({ elem: c, handlers: i });
          }
      return e.length > a && s.push({ elem: this, handlers: e.slice(a) }), s;
    },
    fix: function (t) {
      if (t[wt.expando]) return t;
      var e,
        o,
        n,
        i = t.type,
        r = t,
        s = this.fixHooks[i];
      for (
        s ||
          (this.fixHooks[i] = s =
            K.test(i) ? this.mouseHooks : Z.test(i) ? this.keyHooks : {}),
          n = s.props ? this.props.concat(s.props) : this.props,
          t = new wt.Event(r),
          e = n.length;
        e--;

      )
        t[(o = n[e])] = r[o];
      return (
        t.target || (t.target = r.srcElement || m),
        3 === t.target.nodeType && (t.target = t.target.parentNode),
        (t.metaKey = !!t.metaKey),
        s.filter ? s.filter(t, r) : t
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (t, e) {
        return (
          null == t.which &&
            (t.which = null != e.charCode ? e.charCode : e.keyCode),
          t
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (t, e) {
        var o,
          n,
          i,
          r = e.button,
          s = e.fromElement;
        return (
          null == t.pageX &&
            null != e.clientX &&
            ((i = (n = t.target.ownerDocument || m).documentElement),
            (o = n.body),
            (t.pageX =
              e.clientX +
              ((i && i.scrollLeft) || (o && o.scrollLeft) || 0) -
              ((i && i.clientLeft) || (o && o.clientLeft) || 0)),
            (t.pageY =
              e.clientY +
              ((i && i.scrollTop) || (o && o.scrollTop) || 0) -
              ((i && i.clientTop) || (o && o.clientTop) || 0))),
          !t.relatedTarget &&
            s &&
            (t.relatedTarget = s === t.target ? e.toElement : s),
          t.which ||
            r === _ ||
            (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
          t
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      click: {
        trigger: function () {
          return wt.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : _;
        },
      },
      focus: {
        trigger: function () {
          if (this !== m.activeElement && this.focus)
            try {
              return this.focus(), !1;
            } catch (t) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === m.activeElement && this.blur ? (this.blur(), !1) : _;
        },
        delegateType: "focusout",
      },
      beforeunload: {
        postDispatch: function (t) {
          t.result !== _ && (t.originalEvent.returnValue = t.result);
        },
      },
    },
    simulate: function (t, e, o, n) {
      var i = wt.extend(new wt.Event(), o, {
        type: t,
        isSimulated: !0,
        originalEvent: {},
      });
      n ? wt.event.trigger(i, null, e) : wt.event.dispatch.call(e, i),
        i.isDefaultPrevented() && o.preventDefault();
    },
  }),
    (wt.removeEvent = m.removeEventListener
      ? function (t, e, o) {
          t.removeEventListener && t.removeEventListener(e, o, !1);
        }
      : function (t, e, o) {
          var n = "on" + e;
          t.detachEvent &&
            (typeof t[n] === b && (t[n] = null), t.detachEvent(n, o));
        }),
    (wt.Event = function (t, e) {
      return this instanceof wt.Event
        ? (t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                !1 === t.returnValue ||
                (t.getPreventDefault && t.getPreventDefault())
                  ? ot
                  : nt))
            : (this.type = t),
          e && wt.extend(this, e),
          (this.timeStamp = (t && t.timeStamp) || wt.now()),
          (this[wt.expando] = !0),
          _)
        : new wt.Event(t, e);
    }),
    (wt.Event.prototype = {
      isDefaultPrevented: nt,
      isPropagationStopped: nt,
      isImmediatePropagationStopped: nt,
      preventDefault: function () {
        var t = this.originalEvent;
        (this.isDefaultPrevented = ot),
          t && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        (this.isPropagationStopped = ot),
          t &&
            (t.stopPropagation && t.stopPropagation(), (t.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = ot), this.stopPropagation();
      },
    }),
    wt.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (t, i) {
        wt.event.special[t] = {
          delegateType: i,
          bindType: i,
          handle: function (t) {
            var e,
              o = t.relatedTarget,
              n = t.handleObj;
            return (
              (!o || (o !== this && !wt.contains(this, o))) &&
                ((t.type = n.origType),
                (e = n.handler.apply(this, arguments)),
                (t.type = i)),
              e
            );
          },
        };
      }
    ),
    wt.support.submitBubbles ||
      (wt.event.special.submit = {
        setup: function () {
          return (
            !wt.nodeName(this, "form") &&
            (wt.event.add(this, "click._submit keypress._submit", function (t) {
              var e = t.target,
                o =
                  wt.nodeName(e, "input") || wt.nodeName(e, "button")
                    ? e.form
                    : _;
              o &&
                !wt._data(o, "submitBubbles") &&
                (wt.event.add(o, "submit._submit", function (t) {
                  t._submit_bubble = !0;
                }),
                wt._data(o, "submitBubbles", !0));
            }),
            _)
          );
        },
        postDispatch: function (t) {
          t._submit_bubble &&
            (delete t._submit_bubble,
            this.parentNode &&
              !t.isTrigger &&
              wt.event.simulate("submit", this.parentNode, t, !0));
        },
        teardown: function () {
          return (
            !wt.nodeName(this, "form") && (wt.event.remove(this, "._submit"), _)
          );
        },
      }),
    wt.support.changeBubbles ||
      (wt.event.special.change = {
        setup: function () {
          return G.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (wt.event.add(this, "propertychange._change", function (t) {
                  "checked" === t.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                wt.event.add(this, "click._change", function (t) {
                  this._just_changed &&
                    !t.isTrigger &&
                    (this._just_changed = !1),
                    wt.event.simulate("change", this, t, !0);
                })),
              !1)
            : (wt.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                G.test(e.nodeName) &&
                  !wt._data(e, "changeBubbles") &&
                  (wt.event.add(e, "change._change", function (t) {
                    !this.parentNode ||
                      t.isSimulated ||
                      t.isTrigger ||
                      wt.event.simulate("change", this.parentNode, t, !0);
                  }),
                  wt._data(e, "changeBubbles", !0));
              }),
              _);
        },
        handle: function (t) {
          var e = t.target;
          return this !== e ||
            t.isSimulated ||
            t.isTrigger ||
            ("radio" !== e.type && "checkbox" !== e.type)
            ? t.handleObj.handler.apply(this, arguments)
            : _;
        },
        teardown: function () {
          return wt.event.remove(this, "._change"), !G.test(this.nodeName);
        },
      }),
    wt.support.focusinBubbles ||
      wt.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
        var o = 0,
          n = function (t) {
            wt.event.simulate(e, t.target, wt.event.fix(t), !0);
          };
        wt.event.special[e] = {
          setup: function () {
            0 == o++ && m.addEventListener(t, n, !0);
          },
          teardown: function () {
            0 == --o && m.removeEventListener(t, n, !0);
          },
        };
      }),
    wt.fn.extend({
      on: function (t, e, o, n, i) {
        var r, s;
        if ("object" == typeof t) {
          for (r in ("string" != typeof e && ((o = o || e), (e = _)), t))
            this.on(r, e, o, t[r], i);
          return this;
        }
        if (
          (null == o && null == n
            ? ((n = e), (o = e = _))
            : null == n &&
              ("string" == typeof e
                ? ((n = o), (o = _))
                : ((n = o), (o = e), (e = _))),
          !1 === n)
        )
          n = nt;
        else if (!n) return this;
        return (
          1 === i &&
            ((s = n),
            ((n = function (t) {
              return wt().off(t), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = wt.guid++))),
          this.each(function () {
            wt.event.add(this, t, n, o, e);
          })
        );
      },
      one: function (t, e, o, n) {
        return this.on(t, e, o, n, 1);
      },
      off: function (t, e, o) {
        var n, i;
        if (t && t.preventDefault && t.handleObj)
          return (
            (n = t.handleObj),
            wt(t.delegateTarget).off(
              n.namespace ? n.origType + "." + n.namespace : n.origType,
              n.selector,
              n.handler
            ),
            this
          );
        if ("object" == typeof t) {
          for (i in t) this.off(i, e, t[i]);
          return this;
        }
        return (
          (!1 === e || "function" == typeof e) && ((o = e), (e = _)),
          !1 === o && (o = nt),
          this.each(function () {
            wt.event.remove(this, t, o, e);
          })
        );
      },
      bind: function (t, e, o) {
        return this.on(t, null, e, o);
      },
      unbind: function (t, e) {
        return this.off(t, null, e);
      },
      delegate: function (t, e, o, n) {
        return this.on(e, t, o, n);
      },
      undelegate: function (t, e, o) {
        return 1 === arguments.length
          ? this.off(t, "**")
          : this.off(e, t || "**", o);
      },
      trigger: function (t, e) {
        return this.each(function () {
          wt.event.trigger(t, e, this);
        });
      },
      triggerHandler: function (t, e) {
        var o = this[0];
        return o ? wt.event.trigger(t, e, o, !0) : _;
      },
    }),
    (function (o, n) {
      var t,
        v,
        x,
        r,
        e,
        f,
        l,
        _,
        m,
        k,
        i,
        w,
        b,
        s,
        a,
        $,
        u,
        T = "sizzle" + -new Date(),
        g = o.document,
        y = {},
        j = 0,
        d = 0,
        c = tt(),
        p = tt(),
        h = tt(),
        S = typeof n,
        C = [],
        N = C.pop,
        E = C.push,
        A = C.slice,
        L =
          C.indexOf ||
          function (t) {
            for (var e = 0, o = this.length; e < o; e++)
              if (this[e] === t) return e;
            return -1;
          },
        P = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        H = M.replace("w", "w#"),
        D =
          "\\[" +
          P +
          "*(" +
          M +
          ")" +
          P +
          "*(?:([*^$|!~]?=)" +
          P +
          "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
          H +
          ")|)|)" +
          P +
          "*\\]",
        O =
          ":(" +
          M +
          ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
          D.replace(3, 8) +
          ")*)|.*)\\)|)",
        q = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
        F = RegExp("^" + P + "*," + P + "*"),
        X = RegExp("^" + P + "*([\\x20\\t\\r\\n\\f>+~])" + P + "*"),
        B = RegExp(O),
        I = RegExp("^" + H + "$"),
        z = {
          ID: RegExp("^#(" + M + ")"),
          CLASS: RegExp("^\\.(" + M + ")"),
          NAME: RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
          TAG: RegExp("^(" + M.replace("w", "w*") + ")"),
          ATTR: RegExp("^" + D),
          PSEUDO: RegExp("^" + O),
          CHILD: RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              P +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              P +
              "*(?:([+-]|)" +
              P +
              "*(\\d+)|))" +
              P +
              "*\\)|)",
            "i"
          ),
          needsContext: RegExp(
            "^" +
              P +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              P +
              "*((?:-\\d)?\\d*)" +
              P +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        R = /[\x20\t\r\n\f]*[+~]/,
        W = /^[^{]+\{\s*\[native code/,
        Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Q = /^(?:input|select|textarea|button)$/i,
        V = /^h\d$/i,
        U = /'|\\/g,
        J = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
        G = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
        Z = function (t, e) {
          var o = "0x" + e - 65536;
          return o != o
            ? e
            : o < 0
            ? String.fromCharCode(o + 65536)
            : String.fromCharCode(55296 | (o >> 10), 56320 | (1023 & o));
        };
      try {
        A.call(g.documentElement.childNodes, 0)[0].nodeType;
      } catch (t) {
        A = function (t) {
          for (var e, o = []; (e = this[t++]); ) o.push(e);
          return o;
        };
      }
      function K(t) {
        return W.test(t + "");
      }
      function tt() {
        var o,
          n = [];
        return (o = function (t, e) {
          return (
            n.push((t += " ")) > x.cacheLength && delete o[n.shift()],
            (o[t] = e)
          );
        });
      }
      function et(t) {
        return (t[T] = !0), t;
      }
      function ot(t) {
        var e = k.createElement("div");
        try {
          return t(e);
        } catch (t) {
          return !1;
        } finally {
          e = null;
        }
      }
      function nt(t, e, o, n) {
        var i, r, s, a, c, l, u, d, p, h;
        if (
          ((e ? e.ownerDocument || e : g) !== k && m(e),
          (o = o || []),
          !t || "string" != typeof t)
        )
          return o;
        if (1 !== (a = (e = e || k).nodeType) && 9 !== a) return [];
        if (!w && !n) {
          if ((i = Y.exec(t)))
            if ((s = i[1])) {
              if (9 === a) {
                if (!(r = e.getElementById(s)) || !r.parentNode) return o;
                if (r.id === s) return o.push(r), o;
              } else if (
                e.ownerDocument &&
                (r = e.ownerDocument.getElementById(s)) &&
                $(e, r) &&
                r.id === s
              )
                return o.push(r), o;
            } else {
              if (i[2])
                return E.apply(o, A.call(e.getElementsByTagName(t), 0)), o;
              if ((s = i[3]) && y.getByClassName && e.getElementsByClassName)
                return E.apply(o, A.call(e.getElementsByClassName(s), 0)), o;
            }
          if (y.qsa && !b.test(t)) {
            if (
              ((u = !0),
              (d = T),
              (p = e),
              (h = 9 === a && t),
              1 === a && "object" !== e.nodeName.toLowerCase())
            ) {
              for (
                l = ct(t),
                  (u = e.getAttribute("id"))
                    ? (d = u.replace(U, "\\$&"))
                    : e.setAttribute("id", d),
                  d = "[id='" + d + "'] ",
                  c = l.length;
                c--;

              )
                l[c] = d + lt(l[c]);
              (p = (R.test(t) && e.parentNode) || e), (h = l.join(","));
            }
            if (h)
              try {
                return E.apply(o, A.call(p.querySelectorAll(h), 0)), o;
              } catch (t) {
              } finally {
                u || e.removeAttribute("id");
              }
          }
        }
        return (function (t, e, o, n) {
          var i,
            r,
            s,
            a,
            c,
            l = ct(t);
          if (!n && 1 === l.length) {
            if (
              2 < (r = l[0] = l[0].slice(0)).length &&
              "ID" === (s = r[0]).type &&
              9 === e.nodeType &&
              !w &&
              x.relative[r[1].type]
            ) {
              if (!(e = x.find.ID(s.matches[0].replace(G, Z), e)[0])) return o;
              t = t.slice(r.shift().value.length);
            }
            for (
              i = z.needsContext.test(t) ? 0 : r.length;
              i-- && ((s = r[i]), !x.relative[(a = s.type)]);

            )
              if (
                (c = x.find[a]) &&
                (n = c(
                  s.matches[0].replace(G, Z),
                  (R.test(r[0].type) && e.parentNode) || e
                ))
              ) {
                if ((r.splice(i, 1), !(t = n.length && lt(r))))
                  return E.apply(o, A.call(n, 0)), o;
                break;
              }
          }
          return f(t, l)(n, e, w, o, R.test(t)), o;
        })(t.replace(q, "$1"), e, o, n);
      }
      function it(t, e) {
        var o = e && t,
          n = o && (~e.sourceIndex || 1 << 31) - (~t.sourceIndex || 1 << 31);
        if (n) return n;
        if (o) for (; (o = o.nextSibling); ) if (o === e) return -1;
        return t ? 1 : -1;
      }
      function rt(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }
      function st(o) {
        return function (t) {
          var e = t.nodeName.toLowerCase();
          return ("input" === e || "button" === e) && t.type === o;
        };
      }
      function at(s) {
        return et(function (r) {
          return (
            (r = +r),
            et(function (t, e) {
              for (var o, n = s([], t.length, r), i = n.length; i--; )
                t[(o = n[i])] && (t[o] = !(e[o] = t[o]));
            })
          );
        });
      }
      for (t in ((e = nt.isXML =
        function (t) {
          var e = t && (t.ownerDocument || t).documentElement;
          return !!e && "HTML" !== e.nodeName;
        }),
      (m = nt.setDocument =
        function (t) {
          var c = t ? t.ownerDocument || t : g;
          return (
            c !== k &&
              9 === c.nodeType &&
              c.documentElement &&
              ((i = (k = c).documentElement),
              (w = e(c)),
              (y.tagNameNoComments = ot(function (t) {
                return (
                  t.appendChild(c.createComment("")),
                  !t.getElementsByTagName("*").length
                );
              })),
              (y.attributes = ot(function (t) {
                t.innerHTML = "<select></select>";
                var e = typeof t.lastChild.getAttribute("multiple");
                return "boolean" !== e && "string" !== e;
              })),
              (y.getByClassName = ot(function (t) {
                return (
                  (t.innerHTML =
                    "<div class='hidden e'></div><div class='hidden'></div>"),
                  !(
                    !t.getElementsByClassName ||
                    !t.getElementsByClassName("e").length
                  ) &&
                    ((t.lastChild.className = "e"),
                    2 === t.getElementsByClassName("e").length)
                );
              })),
              (y.getByName = ot(function (t) {
                (t.id = T + 0),
                  (t.innerHTML =
                    "<a name='" + T + "'></a><div name='" + T + "'></div>"),
                  i.insertBefore(t, i.firstChild);
                var e =
                  c.getElementsByName &&
                  c.getElementsByName(T).length ===
                    2 + c.getElementsByName(T + 0).length;
                return (
                  (y.getIdNotName = !c.getElementById(T)), i.removeChild(t), e
                );
              })),
              (x.attrHandle = ot(function (t) {
                return (
                  (t.innerHTML = "<a href='#'></a>"),
                  t.firstChild &&
                    typeof t.firstChild.getAttribute !== S &&
                    "#" === t.firstChild.getAttribute("href")
                );
              })
                ? {}
                : {
                    href: function (t) {
                      return t.getAttribute("href", 2);
                    },
                    type: function (t) {
                      return t.getAttribute("type");
                    },
                  }),
              y.getIdNotName
                ? ((x.find.ID = function (t, e) {
                    if (typeof e.getElementById !== S && !w) {
                      var o = e.getElementById(t);
                      return o && o.parentNode ? [o] : [];
                    }
                  }),
                  (x.filter.ID = function (t) {
                    var e = t.replace(G, Z);
                    return function (t) {
                      return t.getAttribute("id") === e;
                    };
                  }))
                : ((x.find.ID = function (t, e) {
                    if (typeof e.getElementById !== S && !w) {
                      var o = e.getElementById(t);
                      return o
                        ? o.id === t ||
                          (typeof o.getAttributeNode !== S &&
                            o.getAttributeNode("id").value === t)
                          ? [o]
                          : n
                        : [];
                    }
                  }),
                  (x.filter.ID = function (t) {
                    var o = t.replace(G, Z);
                    return function (t) {
                      var e =
                        typeof t.getAttributeNode !== S &&
                        t.getAttributeNode("id");
                      return e && e.value === o;
                    };
                  })),
              (x.find.TAG = y.tagNameNoComments
                ? function (t, e) {
                    return typeof e.getElementsByTagName !== S
                      ? e.getElementsByTagName(t)
                      : n;
                  }
                : function (t, e) {
                    var o,
                      n = [],
                      i = 0,
                      r = e.getElementsByTagName(t);
                    if ("*" === t) {
                      for (; (o = r[i++]); ) 1 === o.nodeType && n.push(o);
                      return n;
                    }
                    return r;
                  }),
              (x.find.NAME =
                y.getByName &&
                function (t, e) {
                  return typeof e.getElementsByName !== S
                    ? e.getElementsByName(name)
                    : n;
                }),
              (x.find.CLASS =
                y.getByClassName &&
                function (t, e) {
                  return typeof e.getElementsByClassName === S || w
                    ? n
                    : e.getElementsByClassName(t);
                }),
              (s = []),
              (b = [":focus"]),
              (y.qsa = K(c.querySelectorAll)) &&
                (ot(function (t) {
                  (t.innerHTML =
                    "<select><option selected=''></option></select>"),
                    t.querySelectorAll("[selected]").length ||
                      b.push(
                        "\\[" +
                          P +
                          "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"
                      ),
                    t.querySelectorAll(":checked").length || b.push(":checked");
                }),
                ot(function (t) {
                  (t.innerHTML = "<input type='hidden' i=''/>"),
                    t.querySelectorAll("[i^='']").length &&
                      b.push("[*^$]=" + P + "*(?:\"\"|'')"),
                    t.querySelectorAll(":enabled").length ||
                      b.push(":enabled", ":disabled"),
                    t.querySelectorAll("*,:x"),
                    b.push(",.*:");
                })),
              (y.matchesSelector = K(
                (a =
                  i.matchesSelector ||
                  i.mozMatchesSelector ||
                  i.webkitMatchesSelector ||
                  i.oMatchesSelector ||
                  i.msMatchesSelector)
              )) &&
                ot(function (t) {
                  (y.disconnectedMatch = a.call(t, "div")),
                    a.call(t, "[s!='']:x"),
                    s.push("!=", O);
                }),
              (b = RegExp(b.join("|"))),
              (s = RegExp(s.join("|"))),
              ($ =
                K(i.contains) || i.compareDocumentPosition
                  ? function (t, e) {
                      var o = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                      return (
                        t === n ||
                        !(
                          !n ||
                          1 !== n.nodeType ||
                          !(o.contains
                            ? o.contains(n)
                            : t.compareDocumentPosition &&
                              16 & t.compareDocumentPosition(n))
                        )
                      );
                    }
                  : function (t, e) {
                      if (e)
                        for (; (e = e.parentNode); ) if (e === t) return !0;
                      return !1;
                    }),
              (u = i.compareDocumentPosition
                ? function (t, e) {
                    var o;
                    return t === e
                      ? ((l = !0), 0)
                      : (o =
                          e.compareDocumentPosition &&
                          t.compareDocumentPosition &&
                          t.compareDocumentPosition(e))
                      ? 1 & o || (t.parentNode && 11 === t.parentNode.nodeType)
                        ? t === c || $(g, t)
                          ? -1
                          : e === c || $(g, e)
                          ? 1
                          : 0
                        : 4 & o
                        ? -1
                        : 1
                      : t.compareDocumentPosition
                      ? -1
                      : 1;
                  }
                : function (t, e) {
                    var o,
                      n = 0,
                      i = t.parentNode,
                      r = e.parentNode,
                      s = [t],
                      a = [e];
                    if (t === e) return (l = !0), 0;
                    if (!i || !r)
                      return t === c ? -1 : e === c ? 1 : i ? -1 : r ? 1 : 0;
                    if (i === r) return it(t, e);
                    for (o = t; (o = o.parentNode); ) s.unshift(o);
                    for (o = e; (o = o.parentNode); ) a.unshift(o);
                    for (; s[n] === a[n]; ) n++;
                    return n
                      ? it(s[n], a[n])
                      : s[n] === g
                      ? -1
                      : a[n] === g
                      ? 1
                      : 0;
                  }),
              (l = !1),
              [0, 0].sort(u),
              (y.detectDuplicates = l)),
            k
          );
        }),
      (nt.matches = function (t, e) {
        return nt(t, null, null, e);
      }),
      (nt.matchesSelector = function (t, e) {
        if (
          ((t.ownerDocument || t) !== k && m(t),
          (e = e.replace(J, "='$1']")),
          !(!y.matchesSelector || w || (s && s.test(e)) || b.test(e)))
        )
          try {
            var o = a.call(t, e);
            if (
              o ||
              y.disconnectedMatch ||
              (t.document && 11 !== t.document.nodeType)
            )
              return o;
          } catch (t) {}
        return 0 < nt(e, k, null, [t]).length;
      }),
      (nt.contains = function (t, e) {
        return (t.ownerDocument || t) !== k && m(t), $(t, e);
      }),
      (nt.attr = function (t, e) {
        var o;
        return (
          (t.ownerDocument || t) !== k && m(t),
          w || (e = e.toLowerCase()),
          (o = x.attrHandle[e])
            ? o(t)
            : w || y.attributes
            ? t.getAttribute(e)
            : ((o = t.getAttributeNode(e)) || t.getAttribute(e)) && !0 === t[e]
            ? e
            : o && o.specified
            ? o.value
            : null
        );
      }),
      (nt.error = function (t) {
        throw Error("Syntax error, unrecognized expression: " + t);
      }),
      (nt.uniqueSort = function (t) {
        var e,
          o = [],
          n = 1,
          i = 0;
        if (((l = !y.detectDuplicates), t.sort(u), l)) {
          for (; (e = t[n]); n++) e === t[n - 1] && (i = o.push(n));
          for (; i--; ) t.splice(o[i], 1);
        }
        return t;
      }),
      (r = nt.getText =
        function (t) {
          var e,
            o = "",
            n = 0,
            i = t.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof t.textContent) return t.textContent;
              for (t = t.firstChild; t; t = t.nextSibling) o += r(t);
            } else if (3 === i || 4 === i) return t.nodeValue;
          } else for (; (e = t[n]); n++) o += r(e);
          return o;
        }),
      (x = nt.selectors =
        {
          cacheLength: 50,
          createPseudo: et,
          match: z,
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (t) {
              return (
                (t[1] = t[1].replace(G, Z)),
                (t[3] = (t[4] || t[5] || "").replace(G, Z)),
                "~=" === t[2] && (t[3] = " " + t[3] + " "),
                t.slice(0, 4)
              );
            },
            CHILD: function (t) {
              return (
                (t[1] = t[1].toLowerCase()),
                "nth" === t[1].slice(0, 3)
                  ? (t[3] || nt.error(t[0]),
                    (t[4] = +(t[4]
                      ? t[5] + (t[6] || 1)
                      : 2 * ("even" === t[3] || "odd" === t[3]))),
                    (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                  : t[3] && nt.error(t[0]),
                t
              );
            },
            PSEUDO: function (t) {
              var e,
                o = !t[5] && t[2];
              return z.CHILD.test(t[0])
                ? null
                : (t[4]
                    ? (t[2] = t[4])
                    : o &&
                      B.test(o) &&
                      (e = ct(o, !0)) &&
                      (e = o.indexOf(")", o.length - e) - o.length) &&
                      ((t[0] = t[0].slice(0, e)), (t[2] = o.slice(0, e))),
                  t.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              return "*" === e
                ? function () {
                    return !0;
                  }
                : ((e = e.replace(G, Z).toLowerCase()),
                  function (t) {
                    return t.nodeName && t.nodeName.toLowerCase() === e;
                  });
            },
            CLASS: function (t) {
              var e = c[t + " "];
              return (
                e ||
                ((e = RegExp("(^|" + P + ")" + t + "(" + P + "|$)")) &&
                  c(t, function (t) {
                    return e.test(
                      t.className ||
                        (typeof t.getAttribute !== S &&
                          t.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (o, n, i) {
              return function (t) {
                var e = nt.attr(t, o);
                return null == e
                  ? "!=" === n
                  : !n ||
                      ((e += ""),
                      "=" === n
                        ? e === i
                        : "!=" === n
                        ? e !== i
                        : "^=" === n
                        ? i && 0 === e.indexOf(i)
                        : "*=" === n
                        ? i && -1 < e.indexOf(i)
                        : "$=" === n
                        ? i && e.slice(-i.length) === i
                        : "~=" === n
                        ? -1 < (" " + e + " ").indexOf(i)
                        : "|=" === n &&
                          (e === i || e.slice(0, i.length + 1) === i + "-"));
              };
            },
            CHILD: function (h, t, e, f, m) {
              var w = "nth" !== h.slice(0, 3),
                b = "last" !== h.slice(-4),
                $ = "of-type" === t;
              return 1 === f && 0 === m
                ? function (t) {
                    return !!t.parentNode;
                  }
                : function (t, e, o) {
                    var n,
                      i,
                      r,
                      s,
                      a,
                      c,
                      l = w !== b ? "nextSibling" : "previousSibling",
                      u = t.parentNode,
                      d = $ && t.nodeName.toLowerCase(),
                      p = !o && !$;
                    if (u) {
                      if (w) {
                        for (; l; ) {
                          for (r = t; (r = r[l]); )
                            if (
                              $
                                ? r.nodeName.toLowerCase() === d
                                : 1 === r.nodeType
                            )
                              return !1;
                          c = l = "only" === h && !c && "nextSibling";
                        }
                        return !0;
                      }
                      if (((c = [b ? u.firstChild : u.lastChild]), b && p)) {
                        for (
                          a =
                            (n = (i = u[T] || (u[T] = {}))[h] || [])[0] === j &&
                            n[1],
                            s = n[0] === j && n[2],
                            r = a && u.childNodes[a];
                          (r = (++a && r && r[l]) || (s = a = 0) || c.pop());

                        )
                          if (1 === r.nodeType && ++s && r === t) {
                            i[h] = [j, a, s];
                            break;
                          }
                      } else if (
                        p &&
                        (n = (t[T] || (t[T] = {}))[h]) &&
                        n[0] === j
                      )
                        s = n[1];
                      else
                        for (
                          ;
                          (r = (++a && r && r[l]) || (s = a = 0) || c.pop()) &&
                          (($
                            ? r.nodeName.toLowerCase() !== d
                            : 1 !== r.nodeType) ||
                            !++s ||
                            (p && ((r[T] || (r[T] = {}))[h] = [j, s]),
                            r !== t));

                        );
                      return (s -= m) === f || (0 == s % f && 0 <= s / f);
                    }
                  };
            },
            PSEUDO: function (t, r) {
              var e,
                s =
                  x.pseudos[t] ||
                  x.setFilters[t.toLowerCase()] ||
                  nt.error("unsupported pseudo: " + t);
              return s[T]
                ? s(r)
                : 1 < s.length
                ? ((e = [t, t, "", r]),
                  x.setFilters.hasOwnProperty(t.toLowerCase())
                    ? et(function (t, e) {
                        for (var o, n = s(t, r), i = n.length; i--; )
                          t[(o = L.call(t, n[i]))] = !(e[o] = n[i]);
                      })
                    : function (t) {
                        return s(t, 0, e);
                      })
                : s;
            },
          },
          pseudos: {
            not: et(function (t) {
              var n = [],
                i = [],
                a = f(t.replace(q, "$1"));
              return a[T]
                ? et(function (t, e, o, n) {
                    for (var i, r = a(t, null, n, []), s = t.length; s--; )
                      (i = r[s]) && (t[s] = !(e[s] = i));
                  })
                : function (t, e, o) {
                    return (n[0] = t), a(n, null, o, i), !i.pop();
                  };
            }),
            has: et(function (e) {
              return function (t) {
                return 0 < nt(e, t).length;
              };
            }),
            contains: et(function (e) {
              return function (t) {
                return -1 < (t.textContent || t.innerText || r(t)).indexOf(e);
              };
            }),
            lang: et(function (o) {
              return (
                I.test(o || "") || nt.error("unsupported lang: " + o),
                (o = o.replace(G, Z).toLowerCase()),
                function (t) {
                  var e;
                  do {
                    if (
                      (e = w
                        ? t.getAttribute("xml:lang") || t.getAttribute("lang")
                        : t.lang)
                    )
                      return (
                        (e = e.toLowerCase()) === o || 0 === e.indexOf(o + "-")
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var e = o.location && o.location.hash;
              return e && e.slice(1) === t.id;
            },
            root: function (t) {
              return t === i;
            },
            focus: function (t) {
              return (
                t === k.activeElement &&
                (!k.hasFocus || k.hasFocus()) &&
                !!(t.type || t.href || ~t.tabIndex)
              );
            },
            enabled: function (t) {
              return !1 === t.disabled;
            },
            disabled: function (t) {
              return !0 === t.disabled;
            },
            checked: function (t) {
              var e = t.nodeName.toLowerCase();
              return (
                ("input" === e && !!t.checked) ||
                ("option" === e && !!t.selected)
              );
            },
            selected: function (t) {
              return (
                t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
              );
            },
            empty: function (t) {
              for (t = t.firstChild; t; t = t.nextSibling)
                if ("@" < t.nodeName || 3 === t.nodeType || 4 === t.nodeType)
                  return !1;
              return !0;
            },
            parent: function (t) {
              return !x.pseudos.empty(t);
            },
            header: function (t) {
              return V.test(t.nodeName);
            },
            input: function (t) {
              return Q.test(t.nodeName);
            },
            button: function (t) {
              var e = t.nodeName.toLowerCase();
              return ("input" === e && "button" === t.type) || "button" === e;
            },
            text: function (t) {
              var e;
              return (
                "input" === t.nodeName.toLowerCase() &&
                "text" === t.type &&
                (null == (e = t.getAttribute("type")) ||
                  e.toLowerCase() === t.type)
              );
            },
            first: at(function () {
              return [0];
            }),
            last: at(function (t, e) {
              return [e - 1];
            }),
            eq: at(function (t, e, o) {
              return [o < 0 ? o + e : o];
            }),
            even: at(function (t, e) {
              for (var o = 0; o < e; o += 2) t.push(o);
              return t;
            }),
            odd: at(function (t, e) {
              for (var o = 1; o < e; o += 2) t.push(o);
              return t;
            }),
            lt: at(function (t, e, o) {
              for (var n = o < 0 ? o + e : o; 0 <= --n; ) t.push(n);
              return t;
            }),
            gt: at(function (t, e, o) {
              for (var n = o < 0 ? o + e : o; e > ++n; ) t.push(n);
              return t;
            }),
          },
        }),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        x.pseudos[t] = rt(t);
      for (t in { submit: !0, reset: !0 }) x.pseudos[t] = st(t);
      function ct(t, e) {
        var o,
          n,
          i,
          r,
          s,
          a,
          c,
          l = p[t + " "];
        if (l) return e ? 0 : l.slice(0);
        for (s = t, a = [], c = x.preFilter; s; ) {
          for (r in ((!o || (n = F.exec(s))) &&
            (n && (s = s.slice(n[0].length) || s), a.push((i = []))),
          (o = !1),
          (n = X.exec(s)) &&
            ((o = n.shift()),
            i.push({ value: o, type: n[0].replace(q, " ") }),
            (s = s.slice(o.length))),
          x.filter))
            !(n = z[r].exec(s)) ||
              (c[r] && !(n = c[r](n))) ||
              ((o = n.shift()),
              i.push({ value: o, type: r, matches: n }),
              (s = s.slice(o.length)));
          if (!o) break;
        }
        return e ? s.length : s ? nt.error(t) : p(t, a).slice(0);
      }
      function lt(t) {
        for (var e = 0, o = t.length, n = ""; e < o; e++) n += t[e].value;
        return n;
      }
      function ut(a, t, e) {
        var c = t.dir,
          l = e && "parentNode" === c,
          u = d++;
        return t.first
          ? function (t, e, o) {
              for (; (t = t[c]); ) if (1 === t.nodeType || l) return a(t, e, o);
            }
          : function (t, e, o) {
              var n,
                i,
                r,
                s = j + " " + u;
              if (o) {
                for (; (t = t[c]); )
                  if ((1 === t.nodeType || l) && a(t, e, o)) return !0;
              } else
                for (; (t = t[c]); )
                  if (1 === t.nodeType || l)
                    if ((i = (r = t[T] || (t[T] = {}))[c]) && i[0] === s) {
                      if (!0 === (n = i[1]) || n === v) return !0 === n;
                    } else if (
                      (((i = r[c] = [s])[1] = a(t, e, o) || v), !0 === i[1])
                    )
                      return !0;
            };
      }
      function dt(i) {
        return 1 < i.length
          ? function (t, e, o) {
              for (var n = i.length; n--; ) if (!i[n](t, e, o)) return !1;
              return !0;
            }
          : i[0];
      }
      function pt(t, e, o, n, i) {
        for (var r, s = [], a = 0, c = t.length, l = null != e; a < c; a++)
          (r = t[a]) && (!o || o(r, n, i)) && (s.push(r), l && e.push(a));
        return s;
      }
      function ht(h, f, m, w, b, t) {
        return (
          w && !w[T] && (w = ht(w)),
          b && !b[T] && (b = ht(b, t)),
          et(function (t, e, o, n) {
            var i,
              r,
              s,
              a = [],
              c = [],
              l = e.length,
              u =
                t ||
                (function (t, e, o) {
                  for (var n = 0, i = e.length; n < i; n++) nt(t, e[n], o);
                  return o;
                })(f || "*", o.nodeType ? [o] : o, []),
              d = !h || (!t && f) ? u : pt(u, a, h, o, n),
              p = m ? (b || (t ? h : l || w) ? [] : e) : d;
            if ((m && m(d, p, o, n), w))
              for (i = pt(p, c), w(i, [], o, n), r = i.length; r--; )
                (s = i[r]) && (p[c[r]] = !(d[c[r]] = s));
            if (t) {
              if (b || h) {
                if (b) {
                  for (i = [], r = p.length; r--; )
                    (s = p[r]) && i.push((d[r] = s));
                  b(null, (p = []), i, n);
                }
                for (r = p.length; r--; )
                  (s = p[r]) &&
                    -1 < (i = b ? L.call(t, s) : a[r]) &&
                    (t[i] = !(e[i] = s));
              }
            } else (p = pt(p === e ? p.splice(l, p.length) : p)), b ? b(null, e, p, n) : E.apply(e, p);
          })
        );
      }
      function ft(t) {
        for (
          var n,
            e,
            o,
            i = t.length,
            r = x.relative[t[0].type],
            s = r || x.relative[" "],
            a = r ? 1 : 0,
            c = ut(
              function (t) {
                return t === n;
              },
              s,
              !0
            ),
            l = ut(
              function (t) {
                return -1 < L.call(n, t);
              },
              s,
              !0
            ),
            u = [
              function (t, e, o) {
                return (
                  (!r && (o || e !== _)) ||
                  ((n = e).nodeType ? c(t, e, o) : l(t, e, o))
                );
              },
            ];
          a < i;
          a++
        )
          if ((e = x.relative[t[a].type])) u = [ut(dt(u), e)];
          else {
            if ((e = x.filter[t[a].type].apply(null, t[a].matches))[T]) {
              for (o = ++a; o < i && !x.relative[t[o].type]; o++);
              return ht(
                1 < a && dt(u),
                1 < a && lt(t.slice(0, a - 1)).replace(q, "$1"),
                e,
                a < o && ft(t.slice(a, o)),
                o < i && ft((t = t.slice(o))),
                o < i && lt(t)
              );
            }
            u.push(e);
          }
        return dt(u);
      }
      function mt() {}
      (f = nt.compile =
        function (t, e) {
          var o,
            w,
            b,
            $,
            g,
            y,
            n,
            i = [],
            r = [],
            s = h[t + " "];
          if (!s) {
            for (e || (e = ct(t)), o = e.length; o--; )
              (s = ft(e[o]))[T] ? i.push(s) : r.push(s);
            s = h(
              t,
              ((w = r),
              (g = ($ = 0) < (b = i).length),
              (y = 0 < w.length),
              (n = function (t, e, o, n, i) {
                var r,
                  s,
                  a,
                  c = [],
                  l = 0,
                  u = "0",
                  d = t && [],
                  p = null != i,
                  h = _,
                  f = t || (y && x.find.TAG("*", (i && e.parentNode) || e)),
                  m = (j += null == h ? 1 : Math.random() || 0.1);
                for (
                  p && ((_ = e !== k && e), (v = $));
                  null != (r = f[u]);
                  u++
                ) {
                  if (y && r) {
                    for (s = 0; (a = w[s++]); )
                      if (a(r, e, o)) {
                        n.push(r);
                        break;
                      }
                    p && ((j = m), (v = ++$));
                  }
                  g && ((r = !a && r) && l--, t && d.push(r));
                }
                if (((l += u), g && u !== l)) {
                  for (s = 0; (a = b[s++]); ) a(d, c, e, o);
                  if (t) {
                    if (0 < l) for (; u--; ) d[u] || c[u] || (c[u] = N.call(n));
                    c = pt(c);
                  }
                  E.apply(n, c),
                    p &&
                      !t &&
                      0 < c.length &&
                      1 < l + b.length &&
                      nt.uniqueSort(n);
                }
                return p && ((j = m), (_ = h)), d;
              }),
              g ? et(n) : n)
            );
          }
          return s;
        }),
        (x.pseudos.nth = x.pseudos.eq),
        (x.filters = mt.prototype = x.pseudos),
        (x.setFilters = new mt()),
        m(),
        (nt.attr = wt.attr),
        (wt.find = nt),
        (wt.expr = nt.selectors),
        (wt.expr[":"] = wt.expr.pseudos),
        (wt.unique = nt.uniqueSort),
        (wt.text = nt.getText),
        (wt.isXMLDoc = nt.isXML),
        (wt.contains = nt.contains);
    })(f);
  var it = /Until$/,
    rt = /^(?:parents|prev(?:Until|All))/,
    st = /^.[^:#\[\.,]*$/,
    at = wt.expr.match.needsContext,
    ct = { children: !0, contents: !0, next: !0, prev: !0 };
  function lt(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; );
    return t;
  }
  function ut(t, o, n) {
    if (((o = o || 0), wt.isFunction(o)))
      return wt.grep(t, function (t, e) {
        return !!o.call(t, e, t) === n;
      });
    if (o.nodeType)
      return wt.grep(t, function (t) {
        return (t === o) === n;
      });
    if ("string" == typeof o) {
      var e = wt.grep(t, function (t) {
        return 1 === t.nodeType;
      });
      if (st.test(o)) return wt.filter(o, e, !n);
      o = wt.filter(o, e);
    }
    return wt.grep(t, function (t) {
      return 0 <= wt.inArray(t, o) === n;
    });
  }
  function dt(t) {
    var e = pt.split("|"),
      o = t.createDocumentFragment();
    if (o.createElement) for (; e.length; ) o.createElement(e.pop());
    return o;
  }
  wt.fn.extend({
    find: function (t) {
      var e,
        o,
        n,
        i = this.length;
      if ("string" != typeof t)
        return (n = this).pushStack(
          wt(t).filter(function () {
            for (e = 0; e < i; e++) if (wt.contains(n[e], this)) return !0;
          })
        );
      for (o = [], e = 0; e < i; e++) wt.find(t, this[e], o);
      return (
        ((o = this.pushStack(1 < i ? wt.unique(o) : o)).selector =
          (this.selector ? this.selector + " " : "") + t),
        o
      );
    },
    has: function (t) {
      var e,
        o = wt(t, this),
        n = o.length;
      return this.filter(function () {
        for (e = 0; e < n; e++) if (wt.contains(this, o[e])) return !0;
      });
    },
    not: function (t) {
      return this.pushStack(ut(this, t, !1));
    },
    filter: function (t) {
      return this.pushStack(ut(this, t, !0));
    },
    is: function (t) {
      return (
        !!t &&
        ("string" == typeof t
          ? at.test(t)
            ? 0 <= wt(t, this.context).index(this[0])
            : 0 < wt.filter(t, this).length
          : 0 < this.filter(t).length)
      );
    },
    closest: function (t, e) {
      for (
        var o,
          n = 0,
          i = this.length,
          r = [],
          s = at.test(t) || "string" != typeof t ? wt(t, e || this.context) : 0;
        n < i;
        n++
      )
        for (
          o = this[n];
          o && o.ownerDocument && o !== e && 11 !== o.nodeType;

        ) {
          if (s ? -1 < s.index(o) : wt.find.matchesSelector(o, t)) {
            r.push(o);
            break;
          }
          o = o.parentNode;
        }
      return this.pushStack(1 < r.length ? wt.unique(r) : r);
    },
    index: function (t) {
      return t
        ? "string" == typeof t
          ? wt.inArray(this[0], wt(t))
          : wt.inArray(t.jquery ? t[0] : t, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (t, e) {
      var o =
          "string" == typeof t
            ? wt(t, e)
            : wt.makeArray(t && t.nodeType ? [t] : t),
        n = wt.merge(this.get(), o);
      return this.pushStack(wt.unique(n));
    },
    addBack: function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    },
  }),
    (wt.fn.andSelf = wt.fn.addBack),
    wt.each(
      {
        parent: function (t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (t) {
          return wt.dir(t, "parentNode");
        },
        parentsUntil: function (t, e, o) {
          return wt.dir(t, "parentNode", o);
        },
        next: function (t) {
          return lt(t, "nextSibling");
        },
        prev: function (t) {
          return lt(t, "previousSibling");
        },
        nextAll: function (t) {
          return wt.dir(t, "nextSibling");
        },
        prevAll: function (t) {
          return wt.dir(t, "previousSibling");
        },
        nextUntil: function (t, e, o) {
          return wt.dir(t, "nextSibling", o);
        },
        prevUntil: function (t, e, o) {
          return wt.dir(t, "previousSibling", o);
        },
        siblings: function (t) {
          return wt.sibling((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return wt.sibling(t.firstChild);
        },
        contents: function (t) {
          return wt.nodeName(t, "iframe")
            ? t.contentDocument || t.contentWindow.document
            : wt.merge([], t.childNodes);
        },
      },
      function (n, i) {
        wt.fn[n] = function (t, e) {
          var o = wt.map(this, i, t);
          return (
            it.test(n) || (e = t),
            e && "string" == typeof e && (o = wt.filter(e, o)),
            (o = 1 < this.length && !ct[n] ? wt.unique(o) : o),
            1 < this.length && rt.test(n) && (o = o.reverse()),
            this.pushStack(o)
          );
        };
      }
    ),
    wt.extend({
      filter: function (t, e, o) {
        return (
          o && (t = ":not(" + t + ")"),
          1 === e.length
            ? wt.find.matchesSelector(e[0], t)
              ? [e[0]]
              : []
            : wt.find.matches(t, e)
        );
      },
      dir: function (t, e, o) {
        for (
          var n = [], i = t[e];
          i &&
          9 !== i.nodeType &&
          (o === _ || 1 !== i.nodeType || !wt(i).is(o));

        )
          1 === i.nodeType && n.push(i), (i = i[e]);
        return n;
      },
      sibling: function (t, e) {
        for (var o = []; t; t = t.nextSibling)
          1 === t.nodeType && t !== e && o.push(t);
        return o;
      },
    });
  var pt =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    ht = / jQuery\d+="(?:null|\d+)"/g,
    ft = RegExp("<(?:" + pt + ")[\\s/>]", "i"),
    mt = /^\s+/,
    bt =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    $t = /<([\w:]+)/,
    gt = /<tbody/i,
    yt = /<|&#?\w+;/,
    vt = /<(?:script|style|link)/i,
    xt = /^(?:checkbox|radio)$/i,
    _t = /checked\s*(?:[^=]|=\s*.checked.)/i,
    kt = /^$|\/(?:java|ecma)script/i,
    Tt = /^true\/(.*)/,
    jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    St = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: wt.support.htmlSerialize
        ? [0, "", ""]
        : [1, "X<div>", "</div>"],
    },
    Ct = dt(m).appendChild(m.createElement("div"));
  function Nt(t) {
    var e = t.getAttributeNode("type");
    return (t.type = (e && e.specified) + "/" + t.type), t;
  }
  function Et(t) {
    var e = Tt.exec(t.type);
    return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
  }
  function At(t, e) {
    for (var o, n = 0; null != (o = t[n]); n++)
      wt._data(o, "globalEval", !e || wt._data(e[n], "globalEval"));
  }
  function Lt(t, e) {
    if (1 === e.nodeType && wt.hasData(t)) {
      var o,
        n,
        i,
        r = wt._data(t),
        s = wt._data(e, r),
        a = r.events;
      if (a)
        for (o in (delete s.handle, (s.events = {}), a))
          for (n = 0, i = a[o].length; n < i; n++) wt.event.add(e, o, a[o][n]);
      s.data && (s.data = wt.extend({}, s.data));
    }
  }
  function Pt(t, e) {
    var o, n, i;
    if (1 === e.nodeType) {
      if (
        ((o = e.nodeName.toLowerCase()),
        !wt.support.noCloneEvent && e[wt.expando])
      ) {
        for (n in (i = wt._data(e)).events) wt.removeEvent(e, n, i.handle);
        e.removeAttribute(wt.expando);
      }
      "script" === o && e.text !== t.text
        ? ((Nt(e).text = t.text), Et(e))
        : "object" === o
        ? (e.parentNode && (e.outerHTML = t.outerHTML),
          wt.support.html5Clone &&
            t.innerHTML &&
            !wt.trim(e.innerHTML) &&
            (e.innerHTML = t.innerHTML))
        : "input" === o && xt.test(t.type)
        ? ((e.defaultChecked = e.checked = t.checked),
          e.value !== t.value && (e.value = t.value))
        : "option" === o
        ? (e.defaultSelected = e.selected = t.defaultSelected)
        : ("input" === o || "textarea" === o) &&
          (e.defaultValue = t.defaultValue);
    }
  }
  function Mt(t, e) {
    var o,
      n,
      i = 0,
      r =
        typeof t.getElementsByTagName !== b
          ? t.getElementsByTagName(e || "*")
          : typeof t.querySelectorAll !== b
          ? t.querySelectorAll(e || "*")
          : _;
    if (!r)
      for (r = [], o = t.childNodes || t; null != (n = o[i]); i++)
        !e || wt.nodeName(n, e) ? r.push(n) : wt.merge(r, Mt(n, e));
    return e === _ || (e && wt.nodeName(t, e)) ? wt.merge([t], r) : r;
  }
  function Ht(t) {
    xt.test(t.type) && (t.defaultChecked = t.checked);
  }
  (St.optgroup = St.option),
    (St.tbody = St.tfoot = St.colgroup = St.caption = St.thead),
    (St.th = St.td),
    wt.fn.extend({
      text: function (t) {
        return wt.access(
          this,
          function (t) {
            return t === _
              ? wt.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || m).createTextNode(t)
                );
          },
          null,
          t,
          arguments.length
        );
      },
      wrapAll: function (e) {
        if (wt.isFunction(e))
          return this.each(function (t) {
            wt(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = wt(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (
                  var t = this;
                  t.firstChild && 1 === t.firstChild.nodeType;

                )
                  t = t.firstChild;
                return t;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (o) {
        return wt.isFunction(o)
          ? this.each(function (t) {
              wt(this).wrapInner(o.call(this, t));
            })
          : this.each(function () {
              var t = wt(this),
                e = t.contents();
              e.length ? e.wrapAll(o) : t.append(o);
            });
      },
      wrap: function (e) {
        var o = wt.isFunction(e);
        return this.each(function (t) {
          wt(this).wrapAll(o ? e.call(this, t) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            wt.nodeName(this, "body") || wt(this).replaceWith(this.childNodes);
          })
          .end();
      },
      append: function () {
        return this.domManip(arguments, !0, function (t) {
          (1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType) &&
            this.appendChild(t);
        });
      },
      prepend: function () {
        return this.domManip(arguments, !0, function (t) {
          (1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType) &&
            this.insertBefore(t, this.firstChild);
        });
      },
      before: function () {
        return this.domManip(arguments, !1, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function () {
        return this.domManip(arguments, !1, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      remove: function (t, e) {
        for (var o, n = 0; null != (o = this[n]); n++)
          (!t || 0 < wt.filter(t, [o]).length) &&
            (e || 1 !== o.nodeType || wt.cleanData(Mt(o)),
            o.parentNode &&
              (e && wt.contains(o.ownerDocument, o) && At(Mt(o, "script")),
              o.parentNode.removeChild(o)));
        return this;
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++) {
          for (1 === t.nodeType && wt.cleanData(Mt(t, !1)); t.firstChild; )
            t.removeChild(t.firstChild);
          t.options && wt.nodeName(t, "select") && (t.options.length = 0);
        }
        return this;
      },
      clone: function (t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function () {
            return wt.clone(this, t, e);
          })
        );
      },
      html: function (t) {
        return wt.access(
          this,
          function (t) {
            var e = this[0] || {},
              o = 0,
              n = this.length;
            if (t === _)
              return 1 === e.nodeType ? e.innerHTML.replace(ht, "") : _;
            if (
              !(
                "string" != typeof t ||
                vt.test(t) ||
                (!wt.support.htmlSerialize && ft.test(t)) ||
                (!wt.support.leadingWhitespace && mt.test(t)) ||
                St[($t.exec(t) || ["", ""])[1].toLowerCase()]
              )
            ) {
              t = t.replace(bt, "<$1></$2>");
              try {
                for (; o < n; o++)
                  1 === (e = this[o] || {}).nodeType &&
                    (wt.cleanData(Mt(e, !1)), (e.innerHTML = t));
                e = 0;
              } catch (t) {}
            }
            e && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function (t) {
        return (
          wt.isFunction(t) ||
            "string" == typeof t ||
            (t = wt(t).not(this).detach()),
          this.domManip([t], !0, function (t) {
            var e = this.nextSibling,
              o = this.parentNode;
            o && (wt(this).remove(), o.insertBefore(t, e));
          })
        );
      },
      detach: function (t) {
        return this.remove(t, !0);
      },
      domManip: function (o, n, i) {
        o = $.apply([], o);
        var t,
          e,
          r,
          s,
          a,
          c,
          l,
          u,
          d = 0,
          p = this.length,
          h = this,
          f = p - 1,
          m = o[0],
          w = wt.isFunction(m);
        if (
          w ||
          (!(p <= 1 || "string" != typeof m || wt.support.checkClone) &&
            _t.test(m))
        )
          return this.each(function (t) {
            var e = h.eq(t);
            w && (o[0] = m.call(this, t, n ? e.html() : _)),
              e.domManip(o, n, i);
          });
        if (
          p &&
          ((t = (c = wt.buildFragment(o, this[0].ownerDocument, !1, this))
            .firstChild),
          1 === c.childNodes.length && (c = t),
          t)
        ) {
          for (
            n = n && wt.nodeName(t, "tr"),
              r = (s = wt.map(Mt(c, "script"), Nt)).length;
            d < p;
            d++
          )
            (e = c),
              d !== f &&
                ((e = wt.clone(e, !0, !0)), r && wt.merge(s, Mt(e, "script"))),
              i.call(
                n && wt.nodeName(this[d], "table")
                  ? ((l = this[d]),
                    (u = "tbody"),
                    l.getElementsByTagName(u)[0] ||
                      l.appendChild(l.ownerDocument.createElement(u)))
                  : this[d],
                e,
                d
              );
          if (r)
            for (
              a = s[s.length - 1].ownerDocument, wt.map(s, Et), d = 0;
              d < r;
              d++
            )
              (e = s[d]),
                kt.test(e.type || "") &&
                  !wt._data(e, "globalEval") &&
                  wt.contains(a, e) &&
                  (e.src
                    ? wt.ajax({
                        url: e.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0,
                      })
                    : wt.globalEval(
                        (e.text || e.textContent || e.innerHTML || "").replace(
                          jt,
                          ""
                        )
                      ));
          c = t = null;
        }
        return this;
      },
    }),
    wt.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (t, s) {
        wt.fn[t] = function (t) {
          for (var e, o = 0, n = [], i = wt(t), r = i.length - 1; o <= r; o++)
            (e = o === r ? this : this.clone(!0)),
              wt(i[o])[s](e),
              a.apply(n, e.get());
          return this.pushStack(n);
        };
      }
    ),
    wt.extend({
      clone: function (t, e, o) {
        var n,
          i,
          r,
          s,
          a,
          c = wt.contains(t.ownerDocument, t);
        if (
          (wt.support.html5Clone ||
          wt.isXMLDoc(t) ||
          !ft.test("<" + t.nodeName + ">")
            ? (r = t.cloneNode(!0))
            : ((Ct.innerHTML = t.outerHTML),
              Ct.removeChild((r = Ct.firstChild))),
          !(
            (wt.support.noCloneEvent && wt.support.noCloneChecked) ||
            (1 !== t.nodeType && 11 !== t.nodeType) ||
            wt.isXMLDoc(t)
          ))
        )
          for (n = Mt(r), a = Mt(t), s = 0; null != (i = a[s]); ++s)
            n[s] && Pt(i, n[s]);
        if (e)
          if (o)
            for (a = a || Mt(t), n = n || Mt(r), s = 0; null != (i = a[s]); s++)
              Lt(i, n[s]);
          else Lt(t, r);
        return (
          0 < (n = Mt(r, "script")).length && At(n, !c && Mt(t, "script")),
          (n = a = i = null),
          r
        );
      },
      buildFragment: function (t, e, o, n) {
        for (
          var i, r, s, a, c, l, u, d = t.length, p = dt(e), h = [], f = 0;
          f < d;
          f++
        )
          if ((r = t[f]) || 0 === r)
            if ("object" === wt.type(r)) wt.merge(h, r.nodeType ? [r] : r);
            else if (yt.test(r)) {
              for (
                a = a || p.appendChild(e.createElement("div")),
                  c = ($t.exec(r) || ["", ""])[1].toLowerCase(),
                  u = St[c] || St._default,
                  a.innerHTML = u[1] + r.replace(bt, "<$1></$2>") + u[2],
                  i = u[0];
                i--;

              )
                a = a.lastChild;
              if (
                (!wt.support.leadingWhitespace &&
                  mt.test(r) &&
                  h.push(e.createTextNode(mt.exec(r)[0])),
                !wt.support.tbody)
              )
                for (
                  i =
                    (r =
                      "table" !== c || gt.test(r)
                        ? "<table>" !== u[1] || gt.test(r)
                          ? 0
                          : a
                        : a.firstChild) && r.childNodes.length;
                  i--;

                )
                  wt.nodeName((l = r.childNodes[i]), "tbody") &&
                    !l.childNodes.length &&
                    r.removeChild(l);
              for (
                wt.merge(h, a.childNodes), a.textContent = "";
                a.firstChild;

              )
                a.removeChild(a.firstChild);
              a = p.lastChild;
            } else h.push(e.createTextNode(r));
        for (
          a && p.removeChild(a),
            wt.support.appendChecked || wt.grep(Mt(h, "input"), Ht),
            f = 0;
          (r = h[f++]);

        )
          if (
            (!n || -1 === wt.inArray(r, n)) &&
            ((s = wt.contains(r.ownerDocument, r)),
            (a = Mt(p.appendChild(r), "script")),
            s && At(a),
            o)
          )
            for (i = 0; (r = a[i++]); ) kt.test(r.type || "") && o.push(r);
        return (a = null), p;
      },
      cleanData: function (t, e) {
        for (
          var o,
            n,
            i,
            r,
            s = 0,
            a = wt.expando,
            c = wt.cache,
            l = wt.support.deleteExpando,
            u = wt.event.special;
          null != (o = t[s]);
          s++
        )
          if ((e || wt.acceptData(o)) && (r = (i = o[a]) && c[i])) {
            if (r.events)
              for (n in r.events)
                u[n] ? wt.event.remove(o, n) : wt.removeEvent(o, n, r.handle);
            c[i] &&
              (delete c[i],
              l
                ? delete o[a]
                : typeof o.removeAttribute !== b
                ? o.removeAttribute(a)
                : (o[a] = null),
              d.push(i));
          }
      },
    });
  var Dt,
    Ot,
    qt,
    Ft = /alpha\([^)]*\)/i,
    Xt = /opacity\s*=\s*([^)]*)/,
    Bt = /^(top|right|bottom|left)$/,
    It = /^(none|table(?!-c[ea]).+)/,
    zt = /^margin/,
    Rt = RegExp("^(" + h + ")(.*)$", "i"),
    Wt = RegExp("^(" + h + ")(?!px)[a-z%]+$", "i"),
    Yt = RegExp("^([+-])=(" + h + ")", "i"),
    Qt = { BODY: "block" },
    Vt = { position: "absolute", visibility: "hidden", display: "block" },
    Ut = { letterSpacing: 0, fontWeight: 400 },
    Jt = ["Top", "Right", "Bottom", "Left"],
    Gt = ["Webkit", "O", "Moz", "ms"];
  function Zt(t, e) {
    if (e in t) return e;
    for (
      var o = e.charAt(0).toUpperCase() + e.slice(1), n = e, i = Gt.length;
      i--;

    )
      if ((e = Gt[i] + o) in t) return e;
    return n;
  }
  function Kt(t, e) {
    return (
      (t = e || t),
      "none" === wt.css(t, "display") || !wt.contains(t.ownerDocument, t)
    );
  }
  function te(t, e) {
    for (var o, n, i, r = [], s = 0, a = t.length; s < a; s++)
      (n = t[s]).style &&
        ((r[s] = wt._data(n, "olddisplay")),
        (o = n.style.display),
        e
          ? (r[s] || "none" !== o || (n.style.display = ""),
            "" === n.style.display &&
              Kt(n) &&
              (r[s] = wt._data(n, "olddisplay", ie(n.nodeName))))
          : r[s] ||
            ((i = Kt(n)),
            ((o && "none" !== o) || !i) &&
              wt._data(n, "olddisplay", i ? o : wt.css(n, "display"))));
    for (s = 0; s < a; s++)
      (n = t[s]).style &&
        ((e && "none" !== n.style.display && "" !== n.style.display) ||
          (n.style.display = e ? r[s] || "" : "none"));
    return t;
  }
  function ee(t, e, o) {
    var n = Rt.exec(e);
    return n ? Math.max(0, n[1] - (o || 0)) + (n[2] || "px") : e;
  }
  function oe(t, e, o, n, i) {
    for (
      var r = o === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
        s = 0;
      r < 4;
      r += 2
    )
      "margin" === o && (s += wt.css(t, o + Jt[r], !0, i)),
        n
          ? ("content" === o && (s -= wt.css(t, "padding" + Jt[r], !0, i)),
            "margin" !== o &&
              (s -= wt.css(t, "border" + Jt[r] + "Width", !0, i)))
          : ((s += wt.css(t, "padding" + Jt[r], !0, i)),
            "padding" !== o &&
              (s += wt.css(t, "border" + Jt[r] + "Width", !0, i)));
    return s;
  }
  function ne(t, e, o) {
    var n = !0,
      i = "width" === e ? t.offsetWidth : t.offsetHeight,
      r = Ot(t),
      s =
        wt.support.boxSizing && "border-box" === wt.css(t, "boxSizing", !1, r);
    if (i <= 0 || null == i) {
      if (
        (((i = qt(t, e, r)) < 0 || null == i) && (i = t.style[e]), Wt.test(i))
      )
        return i;
      (n = s && (wt.support.boxSizingReliable || i === t.style[e])),
        (i = parseFloat(i) || 0);
    }
    return i + oe(t, e, o || (s ? "border" : "content"), n, r) + "px";
  }
  function ie(t) {
    var e = m,
      o = Qt[t];
    return (
      o ||
        (("none" !== (o = re(t, e)) && o) ||
          ((e = (
            (Dt = (
              Dt ||
              wt("<iframe frameborder='0' width='0' height='0'/>").css(
                "cssText",
                "display:block !important"
              )
            ).appendTo(e.documentElement))[0].contentWindow ||
            Dt[0].contentDocument
          ).document).write("<!doctype html><html><body>"),
          e.close(),
          (o = re(t, e)),
          Dt.detach()),
        (Qt[t] = o)),
      o
    );
  }
  function re(t, e) {
    var o = wt(e.createElement(t)).appendTo(e.body),
      n = wt.css(o[0], "display");
    return o.remove(), n;
  }
  wt.fn.extend({
    css: function (t, e) {
      return wt.access(
        this,
        function (t, e, o) {
          var n,
            i,
            r = {},
            s = 0;
          if (wt.isArray(e)) {
            for (i = Ot(t), n = e.length; s < n; s++)
              r[e[s]] = wt.css(t, e[s], !1, i);
            return r;
          }
          return o !== _ ? wt.style(t, e, o) : wt.css(t, e);
        },
        t,
        e,
        1 < arguments.length
      );
    },
    show: function () {
      return te(this, !0);
    },
    hide: function () {
      return te(this);
    },
    toggle: function (t) {
      var e = "boolean" == typeof t;
      return this.each(function () {
        (e ? t : Kt(this)) ? wt(this).show() : wt(this).hide();
      });
    },
  }),
    wt.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var o = qt(t, "opacity");
              return "" === o ? "1" : o;
            }
          },
        },
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: wt.support.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (t, e, o, n) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var i,
            r,
            s,
            a = wt.camelCase(e),
            c = t.style;
          if (
            ((e = wt.cssProps[a] || (wt.cssProps[a] = Zt(c, a))),
            (s = wt.cssHooks[e] || wt.cssHooks[a]),
            o === _)
          )
            return s && "get" in s && (i = s.get(t, !1, n)) !== _ ? i : c[e];
          if (
            ("string" === (r = typeof o) &&
              (i = Yt.exec(o)) &&
              ((o = (i[1] + 1) * i[2] + parseFloat(wt.css(t, e))),
              (r = "number")),
            !(
              null == o ||
              ("number" === r && isNaN(o)) ||
              ("number" !== r || wt.cssNumber[a] || (o += "px"),
              wt.support.clearCloneStyle ||
                "" !== o ||
                0 !== e.indexOf("background") ||
                (c[e] = "inherit"),
              s && "set" in s && (o = s.set(t, o, n)) === _)
            ))
          )
            try {
              c[e] = o;
            } catch (t) {}
        }
      },
      css: function (t, e, o, n) {
        var i,
          r,
          s,
          a = wt.camelCase(e);
        return (
          (e = wt.cssProps[a] || (wt.cssProps[a] = Zt(t.style, a))),
          (s = wt.cssHooks[e] || wt.cssHooks[a]) &&
            "get" in s &&
            (r = s.get(t, !0, o)),
          r === _ && (r = qt(t, e, n)),
          "normal" === r && e in Ut && (r = Ut[e]),
          "" === o || o
            ? ((i = parseFloat(r)), !0 === o || wt.isNumeric(i) ? i || 0 : r)
            : r
        );
      },
      swap: function (t, e, o, n) {
        var i,
          r,
          s = {};
        for (r in e) (s[r] = t.style[r]), (t.style[r] = e[r]);
        for (r in ((i = o.apply(t, n || [])), e)) t.style[r] = s[r];
        return i;
      },
    }),
    f.getComputedStyle
      ? ((Ot = function (t) {
          return f.getComputedStyle(t, null);
        }),
        (qt = function (t, e, o) {
          var n,
            i,
            r,
            s = o || Ot(t),
            a = s ? s.getPropertyValue(e) || s[e] : _,
            c = t.style;
          return (
            s &&
              ("" !== a ||
                wt.contains(t.ownerDocument, t) ||
                (a = wt.style(t, e)),
              Wt.test(a) &&
                zt.test(e) &&
                ((n = c.width),
                (i = c.minWidth),
                (r = c.maxWidth),
                (c.minWidth = c.maxWidth = c.width = a),
                (a = s.width),
                (c.width = n),
                (c.minWidth = i),
                (c.maxWidth = r))),
            a
          );
        }))
      : m.documentElement.currentStyle &&
        ((Ot = function (t) {
          return t.currentStyle;
        }),
        (qt = function (t, e, o) {
          var n,
            i,
            r,
            s = o || Ot(t),
            a = s ? s[e] : _,
            c = t.style;
          return (
            null == a && c && c[e] && (a = c[e]),
            Wt.test(a) &&
              !Bt.test(e) &&
              ((n = c.left),
              (r = (i = t.runtimeStyle) && i.left) &&
                (i.left = t.currentStyle.left),
              (c.left = "fontSize" === e ? "1em" : a),
              (a = c.pixelLeft + "px"),
              (c.left = n),
              r && (i.left = r)),
            "" === a ? "auto" : a
          );
        })),
    wt.each(["height", "width"], function (t, i) {
      wt.cssHooks[i] = {
        get: function (t, e, o) {
          return e
            ? 0 === t.offsetWidth && It.test(wt.css(t, "display"))
              ? wt.swap(t, Vt, function () {
                  return ne(t, i, o);
                })
              : ne(t, i, o)
            : _;
        },
        set: function (t, e, o) {
          var n = o && Ot(t);
          return ee(
            0,
            e,
            o
              ? oe(
                  t,
                  i,
                  o,
                  wt.support.boxSizing &&
                    "border-box" === wt.css(t, "boxSizing", !1, n),
                  n
                )
              : 0
          );
        },
      };
    }),
    wt.support.opacity ||
      (wt.cssHooks.opacity = {
        get: function (t, e) {
          return Xt.test(
            (e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : e
            ? "1"
            : "";
        },
        set: function (t, e) {
          var o = t.style,
            n = t.currentStyle,
            i = wt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
            r = (n && n.filter) || o.filter || "";
          (((o.zoom = 1) <= e || "" === e) &&
            "" === wt.trim(r.replace(Ft, "")) &&
            o.removeAttribute &&
            (o.removeAttribute("filter"), "" === e || (n && !n.filter))) ||
            (o.filter = Ft.test(r) ? r.replace(Ft, i) : r + " " + i);
        },
      }),
    wt(function () {
      wt.support.reliableMarginRight ||
        (wt.cssHooks.marginRight = {
          get: function (t, e) {
            return e
              ? wt.swap(t, { display: "inline-block" }, qt, [t, "marginRight"])
              : _;
          },
        }),
        !wt.support.pixelPosition &&
          wt.fn.position &&
          wt.each(["top", "left"], function (t, o) {
            wt.cssHooks[o] = {
              get: function (t, e) {
                return e
                  ? ((e = qt(t, o)),
                    Wt.test(e) ? wt(t).position()[o] + "px" : e)
                  : _;
              },
            };
          });
    }),
    wt.expr &&
      wt.expr.filters &&
      ((wt.expr.filters.hidden = function (t) {
        return (
          (t.offsetWidth <= 0 && t.offsetHeight <= 0) ||
          (!wt.support.reliableHiddenOffsets &&
            "none" === ((t.style && t.style.display) || wt.css(t, "display")))
        );
      }),
      (wt.expr.filters.visible = function (t) {
        return !wt.expr.filters.hidden(t);
      })),
    wt.each({ margin: "", padding: "", border: "Width" }, function (i, r) {
      (wt.cssHooks[i + r] = {
        expand: function (t) {
          for (
            var e = 0, o = {}, n = "string" == typeof t ? t.split(" ") : [t];
            e < 4;
            e++
          )
            o[i + Jt[e] + r] = n[e] || n[e - 2] || n[0];
          return o;
        },
      }),
        zt.test(i) || (wt.cssHooks[i + r].set = ee);
    });
  var se = /%20/g,
    ae = /\[\]$/,
    ce = /\r?\n/g,
    le = /^(?:submit|button|image|reset|file)$/i,
    ue = /^(?:input|select|textarea|keygen)/i;
  function de(o, t, n, i) {
    var e;
    if (wt.isArray(t))
      wt.each(t, function (t, e) {
        n || ae.test(o)
          ? i(o, e)
          : de(o + "[" + ("object" == typeof e ? t : "") + "]", e, n, i);
      });
    else if (n || "object" !== wt.type(t)) i(o, t);
    else for (e in t) de(o + "[" + e + "]", t[e], n, i);
  }
  wt.fn.extend({
    serialize: function () {
      return wt.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var t = wt.prop(this, "elements");
        return t ? wt.makeArray(t) : this;
      })
        .filter(function () {
          var t = this.type;
          return (
            this.name &&
            !wt(this).is(":disabled") &&
            ue.test(this.nodeName) &&
            !le.test(t) &&
            (this.checked || !xt.test(t))
          );
        })
        .map(function (t, e) {
          var o = wt(this).val();
          return null == o
            ? null
            : wt.isArray(o)
            ? wt.map(o, function (t) {
                return { name: e.name, value: t.replace(ce, "\r\n") };
              })
            : { name: e.name, value: o.replace(ce, "\r\n") };
        })
        .get();
    },
  }),
    (wt.param = function (t, e) {
      var o,
        n = [],
        i = function (t, e) {
          (e = wt.isFunction(e) ? e() : null == e ? "" : e),
            (n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
        };
      if (
        (e === _ && (e = wt.ajaxSettings && wt.ajaxSettings.traditional),
        wt.isArray(t) || (t.jquery && !wt.isPlainObject(t)))
      )
        wt.each(t, function () {
          i(this.name, this.value);
        });
      else for (o in t) de(o, t[o], e, i);
      return n.join("&").replace(se, "+");
    }),
    wt.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (t, o) {
        wt.fn[o] = function (t, e) {
          return 0 < arguments.length
            ? this.on(o, null, t, e)
            : this.trigger(o);
        };
      }
    ),
    (wt.fn.hover = function (t, e) {
      return this.mouseenter(t).mouseleave(e || t);
    });
  var pe,
    he,
    fe = wt.now(),
    me = /\?/,
    we = /#.*$/,
    be = /([?&])_=[^&]*/,
    $e = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    ge = /^(?:GET|HEAD)$/,
    ye = /^\/\//,
    ve = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    xe = wt.fn.load,
    _e = {},
    ke = {},
    Te = "*/".concat("*");
  try {
    he = t.href;
  } catch (t) {
    ((he = m.createElement("a")).href = ""), (he = he.href);
  }
  function je(r) {
    return function (t, e) {
      "string" != typeof t && ((e = t), (t = "*"));
      var o,
        n = 0,
        i = t.toLowerCase().match(k) || [];
      if (wt.isFunction(e))
        for (; (o = i[n++]); )
          "+" === o[0]
            ? ((o = o.slice(1) || "*"), (r[o] = r[o] || []).unshift(e))
            : (r[o] = r[o] || []).push(e);
    };
  }
  function Se(e, i, r, s) {
    var a = {},
      c = e === ke;
    function l(t) {
      var n;
      return (
        (a[t] = !0),
        wt.each(e[t] || [], function (t, e) {
          var o = e(i, r, s);
          return "string" != typeof o || c || a[o]
            ? c
              ? !(n = o)
              : _
            : (i.dataTypes.unshift(o), l(o), !1);
        }),
        n
      );
    }
    return l(i.dataTypes[0]) || (!a["*"] && l("*"));
  }
  function Ce(t, e) {
    var o,
      n,
      i = wt.ajaxSettings.flatOptions || {};
    for (n in e) e[n] !== _ && ((i[n] ? t : o || (o = {}))[n] = e[n]);
    return o && wt.extend(!0, t, o), t;
  }
  (pe = ve.exec(he.toLowerCase()) || []),
    (wt.fn.load = function (t, e, o) {
      if ("string" != typeof t && xe) return xe.apply(this, arguments);
      var n,
        i,
        r,
        s = this,
        a = t.indexOf(" ");
      return (
        0 <= a && ((n = t.slice(a, t.length)), (t = t.slice(0, a))),
        wt.isFunction(e)
          ? ((o = e), (e = _))
          : e && "object" == typeof e && (r = "POST"),
        0 < s.length &&
          wt
            .ajax({ url: t, type: r, dataType: "html", data: e })
            .done(function (t) {
              (i = arguments),
                s.html(n ? wt("<div>").append(wt.parseHTML(t)).find(n) : t);
            })
            .complete(
              o &&
                function (t, e) {
                  s.each(o, i || [t.responseText, e, t]);
                }
            ),
        this
      );
    }),
    wt.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (t, e) {
        wt.fn[e] = function (t) {
          return this.on(e, t);
        };
      }
    ),
    wt.each(["get", "post"], function (t, i) {
      wt[i] = function (t, e, o, n) {
        return (
          wt.isFunction(e) && ((n = n || o), (o = e), (e = _)),
          wt.ajax({ url: t, type: i, dataType: n, data: e, success: o })
        );
      };
    }),
    wt.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: he,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            pe[1]
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Te,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: "responseXML", text: "responseText" },
        converters: {
          "* text": f.String,
          "text html": !0,
          "text json": wt.parseJSON,
          "text xml": wt.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (t, e) {
        return e ? Ce(Ce(t, wt.ajaxSettings), e) : Ce(wt.ajaxSettings, t);
      },
      ajaxPrefilter: je(_e),
      ajaxTransport: je(ke),
      ajax: function (t, e) {
        "object" == typeof t && ((e = t), (t = _)), (e = e || {});
        var o,
          n,
          u,
          d,
          p,
          h,
          f,
          i,
          m = wt.ajaxSetup({}, e),
          w = m.context || m,
          b = m.context && (w.nodeType || w.jquery) ? wt(w) : wt.event,
          $ = wt.Deferred(),
          g = wt.Callbacks("once memory"),
          y = m.statusCode || {},
          r = {},
          s = {},
          v = 0,
          a = "canceled",
          x = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (2 === v) {
                if (!i)
                  for (i = {}; (e = $e.exec(d)); ) i[e[1].toLowerCase()] = e[2];
                e = i[t.toLowerCase()];
              }
              return null == e ? null : e;
            },
            getAllResponseHeaders: function () {
              return 2 === v ? d : null;
            },
            setRequestHeader: function (t, e) {
              var o = t.toLowerCase();
              return v || ((t = s[o] = s[o] || t), (r[t] = e)), this;
            },
            overrideMimeType: function (t) {
              return v || (m.mimeType = t), this;
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (v < 2) for (e in t) y[e] = [y[e], t[e]];
                else x.always(t[x.status]);
              return this;
            },
            abort: function (t) {
              var e = t || a;
              return f && f.abort(e), c(0, e), this;
            },
          };
        if (
          (($.promise(x).complete = g.add),
          (x.success = x.done),
          (x.error = x.fail),
          (m.url = ((t || m.url || he) + "")
            .replace(we, "")
            .replace(ye, pe[1] + "//")),
          (m.type = e.method || e.type || m.method || m.type),
          (m.dataTypes = wt
            .trim(m.dataType || "*")
            .toLowerCase()
            .match(k) || [""]),
          null == m.crossDomain &&
            ((o = ve.exec(m.url.toLowerCase())),
            (m.crossDomain = !(
              !o ||
              (o[1] === pe[1] &&
                o[2] === pe[2] &&
                (o[3] || ("http:" === o[1] ? 80 : 443)) ==
                  (pe[3] || ("http:" === pe[1] ? 80 : 443)))
            ))),
          m.data &&
            m.processData &&
            "string" != typeof m.data &&
            (m.data = wt.param(m.data, m.traditional)),
          Se(_e, m, e, x),
          2 === v)
        )
          return x;
        for (n in ((h = m.global) &&
          0 == wt.active++ &&
          wt.event.trigger("ajaxStart"),
        (m.type = m.type.toUpperCase()),
        (m.hasContent = !ge.test(m.type)),
        (u = m.url),
        m.hasContent ||
          (m.data &&
            ((u = m.url += (me.test(u) ? "&" : "?") + m.data), delete m.data),
          !1 === m.cache &&
            (m.url = be.test(u)
              ? u.replace(be, "$1_=" + fe++)
              : u + (me.test(u) ? "&" : "?") + "_=" + fe++)),
        m.ifModified &&
          (wt.lastModified[u] &&
            x.setRequestHeader("If-Modified-Since", wt.lastModified[u]),
          wt.etag[u] && x.setRequestHeader("If-None-Match", wt.etag[u])),
        ((m.data && m.hasContent && !1 !== m.contentType) || e.contentType) &&
          x.setRequestHeader("Content-Type", m.contentType),
        x.setRequestHeader(
          "Accept",
          m.dataTypes[0] && m.accepts[m.dataTypes[0]]
            ? m.accepts[m.dataTypes[0]] +
                ("*" !== m.dataTypes[0] ? ", " + Te + "; q=0.01" : "")
            : m.accepts["*"]
        ),
        m.headers))
          x.setRequestHeader(n, m.headers[n]);
        if (m.beforeSend && (!1 === m.beforeSend.call(w, x, m) || 2 === v))
          return x.abort();
        for (n in ((a = "abort"), { success: 1, error: 1, complete: 1 }))
          x[n](m[n]);
        if ((f = Se(ke, m, e, x))) {
          (x.readyState = 1),
            h && b.trigger("ajaxSend", [x, m]),
            m.async &&
              0 < m.timeout &&
              (p = setTimeout(function () {
                x.abort("timeout");
              }, m.timeout));
          try {
            (v = 1), f.send(r, c);
          } catch (t) {
            if (!(v < 2)) throw t;
            c(-1, t);
          }
        } else c(-1, "No Transport");
        function c(t, e, o, n) {
          var i,
            r,
            s,
            a,
            c,
            l = e;
          2 !== v &&
            ((v = 2),
            p && clearTimeout(p),
            (f = _),
            (d = n || ""),
            (x.readyState = 0 < t ? 4 : 0),
            o &&
              (a = (function (t, e, o) {
                var n,
                  i,
                  r,
                  s,
                  a = t.contents,
                  c = t.dataTypes,
                  l = t.responseFields;
                for (s in l) s in o && (e[l[s]] = o[s]);
                for (; "*" === c[0]; )
                  c.shift(),
                    i === _ &&
                      (i = t.mimeType || e.getResponseHeader("Content-Type"));
                if (i)
                  for (s in a)
                    if (a[s] && a[s].test(i)) {
                      c.unshift(s);
                      break;
                    }
                if (c[0] in o) r = c[0];
                else {
                  for (s in o) {
                    if (!c[0] || t.converters[s + " " + c[0]]) {
                      r = s;
                      break;
                    }
                    n || (n = s);
                  }
                  r = r || n;
                }
                return r ? (r !== c[0] && c.unshift(r), o[r]) : _;
              })(m, x, o)),
            (200 <= t && t < 300) || 304 === t
              ? (m.ifModified &&
                  ((c = x.getResponseHeader("Last-Modified")) &&
                    (wt.lastModified[u] = c),
                  (c = x.getResponseHeader("etag")) && (wt.etag[u] = c)),
                204 === t
                  ? ((i = !0), (l = "nocontent"))
                  : 304 === t
                  ? ((i = !0), (l = "notmodified"))
                  : ((l = (i = (function (t, e) {
                      var o,
                        n,
                        i,
                        r,
                        s = {},
                        a = 0,
                        c = t.dataTypes.slice(),
                        l = c[0];
                      if (
                        (t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                        c[1])
                      )
                        for (i in t.converters)
                          s[i.toLowerCase()] = t.converters[i];
                      for (; (n = c[++a]); )
                        if ("*" !== n) {
                          if ("*" !== l && l !== n) {
                            if (!(i = s[l + " " + n] || s["* " + n]))
                              for (o in s)
                                if (
                                  (r = o.split(" "))[1] === n &&
                                  (i = s[l + " " + r[0]] || s["* " + r[0]])
                                ) {
                                  !0 === i
                                    ? (i = s[o])
                                    : !0 !== s[o] &&
                                      ((n = r[0]), c.splice(a--, 0, n));
                                  break;
                                }
                            if (!0 !== i)
                              if (i && t.throws) e = i(e);
                              else
                                try {
                                  e = i(e);
                                } catch (t) {
                                  return {
                                    state: "parsererror",
                                    error: i
                                      ? t
                                      : "No conversion from " + l + " to " + n,
                                  };
                                }
                          }
                          l = n;
                        }
                      return { state: "success", data: e };
                    })(m, a)).state),
                    (r = i.data),
                    (i = !(s = i.error))))
              : ((s = l), (t || !l) && ((l = "error"), t < 0 && (t = 0))),
            (x.status = t),
            (x.statusText = (e || l) + ""),
            i ? $.resolveWith(w, [r, l, x]) : $.rejectWith(w, [x, l, s]),
            x.statusCode(y),
            (y = _),
            h && b.trigger(i ? "ajaxSuccess" : "ajaxError", [x, m, i ? r : s]),
            g.fireWith(w, [x, l]),
            h &&
              (b.trigger("ajaxComplete", [x, m]),
              --wt.active || wt.event.trigger("ajaxStop")));
        }
        return x;
      },
      getScript: function (t, e) {
        return wt.get(t, _, e, "script");
      },
      getJSON: function (t, e, o) {
        return wt.get(t, e, o, "json");
      },
    }),
    wt.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (t) {
          return wt.globalEval(t), t;
        },
      },
    }),
    wt.ajaxPrefilter("script", function (t) {
      t.cache === _ && (t.cache = !1),
        t.crossDomain && ((t.type = "GET"), (t.global = !1));
    }),
    wt.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var n,
          i = m.head || wt("head")[0] || m.documentElement;
        return {
          send: function (t, o) {
            ((n = m.createElement("script")).async = !0),
              e.scriptCharset && (n.charset = e.scriptCharset),
              (n.src = e.url),
              (n.onload = n.onreadystatechange =
                function (t, e) {
                  (e ||
                    !n.readyState ||
                    /loaded|complete/.test(n.readyState)) &&
                    ((n.onload = n.onreadystatechange = null),
                    n.parentNode && n.parentNode.removeChild(n),
                    (n = null),
                    e || o(200, "success"));
                }),
              i.insertBefore(n, i.firstChild);
          },
          abort: function () {
            n && n.onload(_, !0);
          },
        };
      }
    });
  var Ne = [],
    Ee = /(=)\?(?=&|$)|\?\?/;
  wt.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var t = Ne.pop() || wt.expando + "_" + fe++;
      return (this[t] = !0), t;
    },
  }),
    wt.ajaxPrefilter("json jsonp", function (t, e, o) {
      var n,
        i,
        r,
        s =
          !1 !== t.jsonp &&
          (Ee.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              !(t.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Ee.test(t.data) &&
              "data");
      return s || "jsonp" === t.dataTypes[0]
        ? ((n = t.jsonpCallback =
            wt.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Ee, "$1" + n))
            : !1 !== t.jsonp &&
              (t.url += (me.test(t.url) ? "&" : "?") + t.jsonp + "=" + n),
          (t.converters["script json"] = function () {
            return r || wt.error(n + " was not called"), r[0];
          }),
          (t.dataTypes[0] = "json"),
          (i = f[n]),
          (f[n] = function () {
            r = arguments;
          }),
          o.always(function () {
            (f[n] = i),
              t[n] && ((t.jsonpCallback = e.jsonpCallback), Ne.push(n)),
              r && wt.isFunction(i) && i(r[0]),
              (r = i = _);
          }),
          "script")
        : _;
    });
  var Ae,
    Le,
    Pe = 0,
    Me =
      f.ActiveXObject &&
      function () {
        var t;
        for (t in Ae) Ae[t](_, !0);
      };
  function He() {
    try {
      return new f.XMLHttpRequest();
    } catch (t) {}
  }
  (wt.ajaxSettings.xhr = f.ActiveXObject
    ? function () {
        return (
          (!this.isLocal && He()) ||
          (function () {
            try {
              return new f.ActiveXObject("Microsoft.XMLHTTP");
            } catch (t) {}
          })()
        );
      }
    : He),
    (Le = wt.ajaxSettings.xhr()),
    (wt.support.cors = !!Le && "withCredentials" in Le),
    (Le = wt.support.ajax = !!Le) &&
      wt.ajaxTransport(function (l) {
        var u;
        if (!l.crossDomain || wt.support.cors)
          return {
            send: function (t, s) {
              var a,
                e,
                c = l.xhr();
              if (
                (l.username
                  ? c.open(l.type, l.url, l.async, l.username, l.password)
                  : c.open(l.type, l.url, l.async),
                l.xhrFields)
              )
                for (e in l.xhrFields) c[e] = l.xhrFields[e];
              l.mimeType &&
                c.overrideMimeType &&
                c.overrideMimeType(l.mimeType),
                l.crossDomain ||
                  t["X-Requested-With"] ||
                  (t["X-Requested-With"] = "XMLHttpRequest");
              try {
                for (e in t) c.setRequestHeader(e, t[e]);
              } catch (t) {}
              c.send((l.hasContent && l.data) || null),
                (u = function (t, e) {
                  var o, n, i, r;
                  try {
                    if (u && (e || 4 === c.readyState))
                      if (
                        ((u = _),
                        a &&
                          ((c.onreadystatechange = wt.noop),
                          Me && delete Ae[a]),
                        e)
                      )
                        4 !== c.readyState && c.abort();
                      else {
                        (r = {}),
                          (o = c.status),
                          (n = c.getAllResponseHeaders()),
                          "string" == typeof c.responseText &&
                            (r.text = c.responseText);
                        try {
                          i = c.statusText;
                        } catch (t) {
                          i = "";
                        }
                        o || !l.isLocal || l.crossDomain
                          ? 1223 === o && (o = 204)
                          : (o = r.text ? 200 : 404);
                      }
                  } catch (t) {
                    e || s(-1, t);
                  }
                  r && s(o, i, r, n);
                }),
                l.async
                  ? 4 === c.readyState
                    ? setTimeout(u)
                    : ((a = ++Pe),
                      Me && (Ae || ((Ae = {}), wt(f).unload(Me)), (Ae[a] = u)),
                      (c.onreadystatechange = u))
                  : u();
            },
            abort: function () {
              u && u(_, !0);
            },
          };
      });
  var De,
    Oe,
    qe = /^(?:toggle|show|hide)$/,
    Fe = RegExp("^(?:([+-])=|)(" + h + ")([a-z%]*)$", "i"),
    Xe = /queueHooks$/,
    Be = [
      function (e, t, o) {
        var n,
          i,
          r,
          s,
          a,
          c,
          l,
          u,
          d,
          p = this,
          h = e.style,
          f = {},
          m = [],
          w = e.nodeType && Kt(e);
        for (i in (o.queue ||
          (null == (u = wt._queueHooks(e, "fx")).unqueued &&
            ((u.unqueued = 0),
            (d = u.empty.fire),
            (u.empty.fire = function () {
              u.unqueued || d();
            })),
          u.unqueued++,
          p.always(function () {
            p.always(function () {
              u.unqueued--, wt.queue(e, "fx").length || u.empty.fire();
            });
          })),
        1 === e.nodeType &&
          ("height" in t || "width" in t) &&
          ((o.overflow = [h.overflow, h.overflowX, h.overflowY]),
          "inline" === wt.css(e, "display") &&
            "none" === wt.css(e, "float") &&
            (wt.support.inlineBlockNeedsLayout && "inline" !== ie(e.nodeName)
              ? (h.zoom = 1)
              : (h.display = "inline-block"))),
        o.overflow &&
          ((h.overflow = "hidden"),
          wt.support.shrinkWrapBlocks ||
            p.always(function () {
              (h.overflow = o.overflow[0]),
                (h.overflowX = o.overflow[1]),
                (h.overflowY = o.overflow[2]);
            })),
        t))
          if (((s = t[i]), qe.exec(s))) {
            if (
              (delete t[i],
              (c = c || "toggle" === s),
              s === (w ? "hide" : "show"))
            )
              continue;
            m.push(i);
          }
        if ((r = m.length)) {
          "hidden" in
            (a = wt._data(e, "fxshow") || wt._data(e, "fxshow", {})) &&
            (w = a.hidden),
            c && (a.hidden = !w),
            w
              ? wt(e).show()
              : p.done(function () {
                  wt(e).hide();
                }),
            p.done(function () {
              var t;
              for (t in (wt._removeData(e, "fxshow"), f)) wt.style(e, t, f[t]);
            });
          for (i = 0; i < r; i++)
            (n = m[i]),
              (l = p.createTween(n, w ? a[n] : 0)),
              (f[n] = a[n] || wt.style(e, n)),
              n in a ||
                ((a[n] = l.start),
                w &&
                  ((l.end = l.start),
                  (l.start = "width" === n || "height" === n ? 1 : 0)));
        }
      },
    ],
    Ie = {
      "*": [
        function (t, e) {
          var o,
            n,
            i = this.createTween(t, e),
            r = Fe.exec(e),
            s = i.cur(),
            a = +s || 0,
            c = 1,
            l = 20;
          if (r) {
            if (
              ((o = +r[2]),
              "px" !== (n = r[3] || (wt.cssNumber[t] ? "" : "px")) && a)
            )
              for (
                a = wt.css(i.elem, t, !0) || o || 1;
                (a /= c = c || ".5"),
                  wt.style(i.elem, t, a + n),
                  c !== (c = i.cur() / s) && 1 !== c && --l;

              );
            (i.unit = n),
              (i.start = a),
              (i.end = r[1] ? a + (r[1] + 1) * o : o);
          }
          return i;
        },
      ],
    };
  function ze() {
    return (
      setTimeout(function () {
        De = _;
      }),
      (De = wt.now())
    );
  }
  function Re(r, t, e) {
    var o,
      s,
      a,
      n,
      i = 0,
      c = Be.length,
      l = wt.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (s) return !1;
        for (
          var t = De || ze(),
            e = Math.max(0, d.startTime + d.duration - t),
            o = 1 - (e / d.duration || 0),
            n = 0,
            i = d.tweens.length;
          n < i;
          n++
        )
          d.tweens[n].run(o);
        return (
          l.notifyWith(r, [d, o, e]),
          o < 1 && i ? e : (l.resolveWith(r, [d]), !1)
        );
      },
      d = l.promise({
        elem: r,
        props: wt.extend({}, t),
        opts: wt.extend(!0, { specialEasing: {} }, e),
        originalProperties: t,
        originalOptions: e,
        startTime: De || ze(),
        duration: e.duration,
        tweens: [],
        createTween: function (t, e) {
          var o = wt.Tween(
            r,
            d.opts,
            t,
            e,
            d.opts.specialEasing[t] || d.opts.easing
          );
          return d.tweens.push(o), o;
        },
        stop: function (t) {
          var e = 0,
            o = t ? d.tweens.length : 0;
          if (s) return this;
          for (s = !0; e < o; e++) d.tweens[e].run(1);
          return t ? l.resolveWith(r, [d, t]) : l.rejectWith(r, [d, t]), this;
        },
      }),
      p = d.props;
    for (
      (function (t, e) {
        var o, n, i, r, s;
        for (i in t)
          if (
            ((n = wt.camelCase(i)),
            (r = e[n]),
            (o = t[i]),
            wt.isArray(o) && ((r = o[1]), (o = t[i] = o[0])),
            i !== n && ((t[n] = o), delete t[i]),
            (s = wt.cssHooks[n]) && ("expand" in s))
          )
            for (i in ((o = s.expand(o)), delete t[n], o))
              (i in t) || ((t[i] = o[i]), (e[i] = r));
          else e[n] = r;
      })(p, d.opts.specialEasing);
      i < c;
      i++
    )
      if ((o = Be[i].call(d, r, p, d.opts))) return o;
    return (
      (a = d),
      (n = p),
      wt.each(n, function (t, e) {
        for (
          var o = (Ie[t] || []).concat(Ie["*"]), n = 0, i = o.length;
          n < i;
          n++
        )
          if (o[n].call(a, t, e)) return;
      }),
      wt.isFunction(d.opts.start) && d.opts.start.call(r, d),
      wt.fx.timer(wt.extend(u, { elem: r, anim: d, queue: d.opts.queue })),
      d
        .progress(d.opts.progress)
        .done(d.opts.done, d.opts.complete)
        .fail(d.opts.fail)
        .always(d.opts.always)
    );
  }
  function We(t, e, o, n, i) {
    return new We.prototype.init(t, e, o, n, i);
  }
  function Ye(t, e) {
    var o,
      n = { height: t },
      i = 0;
    for (e = e ? 1 : 0; i < 4; i += 2 - e)
      n["margin" + (o = Jt[i])] = n["padding" + o] = t;
    return e && (n.opacity = n.width = t), n;
  }
  function Qe(t) {
    return wt.isWindow(t)
      ? t
      : 9 === t.nodeType && (t.defaultView || t.parentWindow);
  }
  (wt.Animation = wt.extend(Re, {
    tweener: function (t, e) {
      wt.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.split(" "));
      for (var o, n = 0, i = t.length; n < i; n++)
        (o = t[n]), (Ie[o] = Ie[o] || []), Ie[o].unshift(e);
    },
    prefilter: function (t, e) {
      e ? Be.unshift(t) : Be.push(t);
    },
  })),
    (((wt.Tween = We).prototype = {
      constructor: We,
      init: function (t, e, o, n, i, r) {
        (this.elem = t),
          (this.prop = o),
          (this.easing = i || "swing"),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = n),
          (this.unit = r || (wt.cssNumber[o] ? "" : "px"));
      },
      cur: function () {
        var t = We.propHooks[this.prop];
        return t && t.get ? t.get(this) : We.propHooks._default.get(this);
      },
      run: function (t) {
        var e,
          o = We.propHooks[this.prop];
        return (
          (this.pos = e =
            this.options.duration
              ? wt.easing[this.easing](
                  t,
                  this.options.duration * t,
                  0,
                  1,
                  this.options.duration
                )
              : t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          o && o.set ? o.set(this) : We.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = We.prototype),
    ((We.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return null == t.elem[t.prop] ||
            (t.elem.style && null != t.elem.style[t.prop])
            ? (e = wt.css(t.elem, t.prop, "")) && "auto" !== e
              ? e
              : 0
            : t.elem[t.prop];
        },
        set: function (t) {
          wt.fx.step[t.prop]
            ? wt.fx.step[t.prop](t)
            : t.elem.style &&
              (null != t.elem.style[wt.cssProps[t.prop]] || wt.cssHooks[t.prop])
            ? wt.style(t.elem, t.prop, t.now + t.unit)
            : (t.elem[t.prop] = t.now);
        },
      },
    }).scrollTop = We.propHooks.scrollLeft =
      {
        set: function (t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        },
      }),
    wt.each(["toggle", "show", "hide"], function (t, n) {
      var i = wt.fn[n];
      wt.fn[n] = function (t, e, o) {
        return null == t || "boolean" == typeof t
          ? i.apply(this, arguments)
          : this.animate(Ye(n, !0), t, e, o);
      };
    }),
    wt.fn.extend({
      fadeTo: function (t, e, o, n) {
        return this.filter(Kt)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: e }, t, o, n);
      },
      animate: function (e, t, o, n) {
        var i = wt.isEmptyObject(e),
          r = wt.speed(t, o, n),
          s = function () {
            var t = Re(this, wt.extend({}, e), r);
            (s.finish = function () {
              t.stop(!0);
            }),
              (i || wt._data(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          i || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        );
      },
      stop: function (i, t, r) {
        var s = function (t) {
          var e = t.stop;
          delete t.stop, e(r);
        };
        return (
          "string" != typeof i && ((r = t), (t = i), (i = _)),
          t && !1 !== i && this.queue(i || "fx", []),
          this.each(function () {
            var t = !0,
              e = null != i && i + "queueHooks",
              o = wt.timers,
              n = wt._data(this);
            if (e) n[e] && n[e].stop && s(n[e]);
            else for (e in n) n[e] && n[e].stop && Xe.test(e) && s(n[e]);
            for (e = o.length; e--; )
              o[e].elem !== this ||
                (null != i && o[e].queue !== i) ||
                (o[e].anim.stop(r), (t = !1), o.splice(e, 1));
            (t || !r) && wt.dequeue(this, i);
          })
        );
      },
      finish: function (s) {
        return (
          !1 !== s && (s = s || "fx"),
          this.each(function () {
            var t,
              e = wt._data(this),
              o = e[s + "queue"],
              n = e[s + "queueHooks"],
              i = wt.timers,
              r = o ? o.length : 0;
            for (
              e.finish = !0,
                wt.queue(this, s, []),
                n && n.cur && n.cur.finish && n.cur.finish.call(this),
                t = i.length;
              t--;

            )
              i[t].elem === this &&
                i[t].queue === s &&
                (i[t].anim.stop(!0), i.splice(t, 1));
            for (t = 0; t < r; t++)
              o[t] && o[t].finish && o[t].finish.call(this);
            delete e.finish;
          })
        );
      },
    }),
    wt.each(
      {
        slideDown: Ye("show"),
        slideUp: Ye("hide"),
        slideToggle: Ye("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (t, n) {
        wt.fn[t] = function (t, e, o) {
          return this.animate(n, t, e, o);
        };
      }
    ),
    (wt.speed = function (t, e, o) {
      var n =
        t && "object" == typeof t
          ? wt.extend({}, t)
          : {
              complete: o || (!o && e) || (wt.isFunction(t) && t),
              duration: t,
              easing: (o && e) || (e && !wt.isFunction(e) && e),
            };
      return (
        (n.duration = wt.fx.off
          ? 0
          : "number" == typeof n.duration
          ? n.duration
          : n.duration in wt.fx.speeds
          ? wt.fx.speeds[n.duration]
          : wt.fx.speeds._default),
        (null == n.queue || !0 === n.queue) && (n.queue = "fx"),
        (n.old = n.complete),
        (n.complete = function () {
          wt.isFunction(n.old) && n.old.call(this),
            n.queue && wt.dequeue(this, n.queue);
        }),
        n
      );
    }),
    (wt.easing = {
      linear: function (t) {
        return t;
      },
      swing: function (t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
    }),
    (wt.timers = []),
    (wt.fx = We.prototype.init),
    (wt.fx.tick = function () {
      var t,
        e = wt.timers,
        o = 0;
      for (De = wt.now(); e.length > o; o++)
        (t = e[o])() || e[o] !== t || e.splice(o--, 1);
      e.length || wt.fx.stop(), (De = _);
    }),
    (wt.fx.timer = function (t) {
      t() && wt.timers.push(t) && wt.fx.start();
    }),
    (wt.fx.interval = 13),
    (wt.fx.start = function () {
      Oe || (Oe = setInterval(wt.fx.tick, wt.fx.interval));
    }),
    (wt.fx.stop = function () {
      clearInterval(Oe), (Oe = null);
    }),
    (wt.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (wt.fx.step = {}),
    wt.expr &&
      wt.expr.filters &&
      (wt.expr.filters.animated = function (e) {
        return wt.grep(wt.timers, function (t) {
          return e === t.elem;
        }).length;
      }),
    (wt.fn.offset = function (e) {
      if (arguments.length)
        return e === _
          ? this
          : this.each(function (t) {
              wt.offset.setOffset(this, e, t);
            });
      var t,
        o,
        n = { top: 0, left: 0 },
        i = this[0],
        r = i && i.ownerDocument;
      return r
        ? ((t = r.documentElement),
          wt.contains(t, i)
            ? (typeof i.getBoundingClientRect !== b &&
                (n = i.getBoundingClientRect()),
              (o = Qe(r)),
              {
                top:
                  n.top + (o.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left:
                  n.left +
                  (o.pageXOffset || t.scrollLeft) -
                  (t.clientLeft || 0),
              })
            : n)
        : void 0;
    }),
    (wt.offset = {
      setOffset: function (t, e, o) {
        var n = wt.css(t, "position");
        "static" === n && (t.style.position = "relative");
        var i,
          r,
          s = wt(t),
          a = s.offset(),
          c = wt.css(t, "top"),
          l = wt.css(t, "left"),
          u = {},
          d = {};
        ("absolute" === n || "fixed" === n) && -1 < wt.inArray("auto", [c, l])
          ? ((i = (d = s.position()).top), (r = d.left))
          : ((i = parseFloat(c) || 0), (r = parseFloat(l) || 0)),
          wt.isFunction(e) && (e = e.call(t, o, a)),
          null != e.top && (u.top = e.top - a.top + i),
          null != e.left && (u.left = e.left - a.left + r),
          "using" in e ? e.using.call(t, u) : s.css(u);
      },
    }),
    wt.fn.extend({
      position: function () {
        if (this[0]) {
          var t,
            e,
            o = { top: 0, left: 0 },
            n = this[0];
          return (
            "fixed" === wt.css(n, "position")
              ? (e = n.getBoundingClientRect())
              : ((t = this.offsetParent()),
                (e = this.offset()),
                wt.nodeName(t[0], "html") || (o = t.offset()),
                (o.top += wt.css(t[0], "borderTopWidth", !0)),
                (o.left += wt.css(t[0], "borderLeftWidth", !0))),
            {
              top: e.top - o.top - wt.css(n, "marginTop", !0),
              left: e.left - o.left - wt.css(n, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var t = this.offsetParent || m.documentElement;
            t && !wt.nodeName(t, "html") && "static" === wt.css(t, "position");

          )
            t = t.offsetParent;
          return t || m.documentElement;
        });
      },
    }),
    wt.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, i) {
        var r = /Y/.test(i);
        wt.fn[e] = function (t) {
          return wt.access(
            this,
            function (t, e, o) {
              var n = Qe(t);
              return o === _
                ? n
                  ? i in n
                    ? n[i]
                    : n.document.documentElement[e]
                  : t[e]
                : (n
                    ? n.scrollTo(
                        r ? wt(n).scrollLeft() : o,
                        r ? o : wt(n).scrollTop()
                      )
                    : (t[e] = o),
                  _);
            },
            e,
            t,
            arguments.length,
            null
          );
        };
      }
    ),
    wt.each({ Height: "height", Width: "width" }, function (r, s) {
      wt.each(
        { padding: "inner" + r, content: s, "": "outer" + r },
        function (n, t) {
          wt.fn[t] = function (t, e) {
            var o = arguments.length && (n || "boolean" != typeof t),
              i = n || (!0 === t || !0 === e ? "margin" : "border");
            return wt.access(
              this,
              function (t, e, o) {
                var n;
                return wt.isWindow(t)
                  ? t.document.documentElement["client" + r]
                  : 9 === t.nodeType
                  ? ((n = t.documentElement),
                    Math.max(
                      t.body["scroll" + r],
                      n["scroll" + r],
                      t.body["offset" + r],
                      n["offset" + r],
                      n["client" + r]
                    ))
                  : o === _
                  ? wt.css(t, e, i)
                  : wt.style(t, e, o, i);
              },
              s,
              o ? t : _,
              o,
              null
            );
          };
        }
      );
    }),
    (f.jQuery = f.$ = wt),
    "function" == typeof define &&
      define.amd &&
      define.amd.jQuery &&
      define("jquery", [], function () {
        return wt;
      });
})(window),
  (function (d) {
    function t(t) {
      if (t in r.style) return t;
      var e = ["Moz", "Webkit", "O", "ms"],
        o = t.charAt(0).toUpperCase() + t.substr(1);
      if (t in r.style) return t;
      for (var n = 0; n < e.length; ++n) {
        var i = e[n] + o;
        if (i in r.style) return i;
      }
    }
    function n(t) {
      return "string" == typeof t && this.parse(t), this;
    }
    function p(t, e, o) {
      !0 === e ? t.queue(o) : e ? t.queue(e, o) : o();
    }
    function h(t, e, o, n) {
      var i,
        r,
        s =
          ((i = t),
          (r = []),
          d.each(i, function (t) {
            (t = d.camelCase(t)),
              (t = (t = d.transit.propertyMap[t] || d.cssProps[t] || t).replace(
                /([A-Z])/g,
                function (t) {
                  return "-" + t.toLowerCase();
                }
              )),
              -1 === d.inArray(t, r) && r.push(t);
          }),
          r);
      d.cssEase[o] && (o = d.cssEase[o]);
      var a = f(e) + " " + o;
      0 < parseInt(n, 10) && (a += " " + f(n));
      var c = [];
      return (
        d.each(s, function (t, e) {
          c.push(e + " " + a);
        }),
        c.join(", ")
      );
    }
    function e(n, t) {
      t || (d.cssNumber[n] = !0),
        (d.transit.propertyMap[n] = m.transform),
        (d.cssHooks[n] = {
          get: function (t) {
            return d(t).css("transit:transform").get(n);
          },
          set: function (t, e) {
            var o = d(t).css("transit:transform");
            o.setFromString(n, e), d(t).css({ "transit:transform": o });
          },
        });
    }
    function o(t, e) {
      return "string" != typeof t || t.match(/^[\-0-9\.]+$/) ? "" + t + e : t;
    }
    function f(t) {
      var e = t;
      return (
        "string" != typeof e ||
          e.match(/^[\-0-9\.]+/) ||
          (e = d.fx.speeds[e] || d.fx.speeds._default),
        o(e, "ms")
      );
    }
    d.transit = {
      version: "0.9.9",
      propertyMap: {
        marginLeft: "margin",
        marginRight: "margin",
        marginBottom: "margin",
        marginTop: "margin",
        paddingLeft: "padding",
        paddingRight: "padding",
        paddingBottom: "padding",
        paddingTop: "padding",
      },
      enabled: !0,
      useTransitionEnd: !1,
    };
    var r = document.createElement("div"),
      m = {},
      i = -1 < navigator.userAgent.toLowerCase().indexOf("chrome");
    (m.transition = t("transition")),
      (m.transitionDelay = t("transitionDelay")),
      (m.transform = t("transform")),
      (m.transformOrigin = t("transformOrigin")),
      (m.transform3d =
        ((r.style[m.transform] = ""),
        (r.style[m.transform] = "rotateY(90deg)"),
        "" !== r.style[m.transform]));
    var w = (m.transitionEnd =
      {
        transition: "transitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        WebkitTransition: "webkitTransitionEnd",
        msTransition: "MSTransitionEnd",
      }[m.transition] || null);
    for (var s in m)
      m.hasOwnProperty(s) && void 0 === d.support[s] && (d.support[s] = m[s]);
    (r = null),
      (d.cssEase = {
        _default: "ease",
        in: "ease-in",
        out: "ease-out",
        "in-out": "ease-in-out",
        snap: "cubic-bezier(0,1,.5,1)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)",
      }),
      (d.cssHooks["transit:transform"] = {
        get: function (t) {
          return d(t).data("transform") || new n();
        },
        set: function (t, e) {
          var o = e;
          o instanceof n || (o = new n(o)),
            "WebkitTransform" !== m.transform || i
              ? (t.style[m.transform] = o.toString())
              : (t.style[m.transform] = o.toString(!0)),
            d(t).data("transform", o);
        },
      }),
      (d.cssHooks.transform = { set: d.cssHooks["transit:transform"].set }),
      d.fn.jquery < "1.8" &&
        ((d.cssHooks.transformOrigin = {
          get: function (t) {
            return t.style[m.transformOrigin];
          },
          set: function (t, e) {
            t.style[m.transformOrigin] = e;
          },
        }),
        (d.cssHooks.transition = {
          get: function (t) {
            return t.style[m.transition];
          },
          set: function (t, e) {
            t.style[m.transition] = e;
          },
        })),
      e("scale"),
      e("translate"),
      e("rotate"),
      e("rotateX"),
      e("rotateY"),
      e("rotate3d"),
      e("perspective"),
      e("skewX"),
      e("skewY"),
      e("x", !0),
      e("y", !0),
      (n.prototype = {
        setFromString: function (t, e) {
          var o =
            "string" == typeof e
              ? e.split(",")
              : e.constructor === Array
              ? e
              : [e];
          o.unshift(t), n.prototype.set.apply(this, o);
        },
        set: function (t) {
          var e = Array.prototype.slice.apply(arguments, [1]);
          this.setter[t]
            ? this.setter[t].apply(this, e)
            : (this[t] = e.join(","));
        },
        get: function (t) {
          return this.getter[t] ? this.getter[t].apply(this) : this[t] || 0;
        },
        setter: {
          rotate: function (t) {
            this.rotate = o(t, "deg");
          },
          rotateX: function (t) {
            this.rotateX = o(t, "deg");
          },
          rotateY: function (t) {
            this.rotateY = o(t, "deg");
          },
          scale: function (t, e) {
            void 0 === e && (e = t), (this.scale = t + "," + e);
          },
          skewX: function (t) {
            this.skewX = o(t, "deg");
          },
          skewY: function (t) {
            this.skewY = o(t, "deg");
          },
          perspective: function (t) {
            this.perspective = o(t, "px");
          },
          x: function (t) {
            this.set("translate", t, null);
          },
          y: function (t) {
            this.set("translate", null, t);
          },
          translate: function (t, e) {
            void 0 === this._translateX && (this._translateX = 0),
              void 0 === this._translateY && (this._translateY = 0),
              null != t && (this._translateX = o(t, "px")),
              null != e && (this._translateY = o(e, "px")),
              (this.translate = this._translateX + "," + this._translateY);
          },
        },
        getter: {
          x: function () {
            return this._translateX || 0;
          },
          y: function () {
            return this._translateY || 0;
          },
          scale: function () {
            var t = (this.scale || "1,1").split(",");
            return (
              t[0] && (t[0] = parseFloat(t[0])),
              t[1] && (t[1] = parseFloat(t[1])),
              t[0] === t[1] ? t[0] : t
            );
          },
          rotate3d: function () {
            for (
              var t = (this.rotate3d || "0,0,0,0deg").split(","), e = 0;
              e <= 3;
              ++e
            )
              t[e] && (t[e] = parseFloat(t[e]));
            return t[3] && (t[3] = o(t[3], "deg")), t;
          },
        },
        parse: function (t) {
          var n = this;
          t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function (t, e, o) {
            n.setFromString(e, o);
          });
        },
        toString: function (t) {
          var e = [];
          for (var o in this)
            if (this.hasOwnProperty(o)) {
              if (
                !m.transform3d &&
                ("rotateX" === o ||
                  "rotateY" === o ||
                  "perspective" === o ||
                  "transformOrigin" === o)
              )
                continue;
              "_" !== o[0] &&
                (t && "scale" === o
                  ? e.push(o + "3d(" + this[o] + ",1)")
                  : t && "translate" === o
                  ? e.push(o + "3d(" + this[o] + ",0)")
                  : e.push(o + "(" + this[o] + ")"));
            }
          return e.join(" ");
        },
      }),
      (d.fn.transition = d.fn.transit =
        function (i, t, e, r) {
          var s = this,
            o = 0,
            n = !0,
            a = jQuery.extend(!0, {}, i);
          "function" == typeof t && ((r = t), (t = void 0)),
            "object" == typeof t &&
              ((e = t.easing),
              (o = t.delay || 0),
              (n = t.queue || !0),
              (r = t.complete),
              (t = t.duration)),
            "function" == typeof e && ((r = e), (e = void 0)),
            void 0 !== a.easing && ((e = a.easing), delete a.easing),
            void 0 !== a.duration && ((t = a.duration), delete a.duration),
            void 0 !== a.complete && ((r = a.complete), delete a.complete),
            void 0 !== a.queue && ((n = a.queue), delete a.queue),
            void 0 !== a.delay && ((o = a.delay), delete a.delay),
            void 0 === t && (t = d.fx.speeds._default),
            void 0 === e && (e = d.cssEase._default),
            (t = f(t));
          var c = h(a, t, e, o),
            l =
              d.transit.enabled && m.transition
                ? parseInt(t, 10) + parseInt(o, 10)
                : 0;
          if (0 === l) {
            return (
              p(s, n, function (t) {
                s.css(a), r && r.apply(s), t && t();
              }),
              s
            );
          }
          var u = {};
          return (
            p(s, n, function (t) {
              var e, o, n;
              this.offsetWidth,
                (e = t),
                (o = !1),
                (n = function () {
                  o && s.unbind(w, n),
                    0 < l &&
                      s.each(function () {
                        this.style[m.transition] = u[this] || null;
                      }),
                    "function" == typeof r && r.apply(s),
                    "function" == typeof e && e();
                }),
                0 < l && w && d.transit.useTransitionEnd
                  ? ((o = !0), s.bind(w, n))
                  : window.setTimeout(n, l),
                s.each(function () {
                  0 < l && (this.style[m.transition] = c), d(this).css(i);
                });
            }),
            this
          );
        }),
      (d.transit.getTransitionValue = h);
  })(jQuery),
  (function (e) {
    var s,
      a,
      o = "ytLoad";
    function c() {
      var t = e("#" + s.progressBarId);
      return (
        0 == t.length &&
          (e("body").append(
            '<div id="' +
              s.progressBarId +
              '" class="' +
              s.progressBarId +
              '"><dt></dt><dd></dd></div>'
          ),
          (t = e("#" + s.progressBarId))),
        t
      );
    }
    var n = {
      init: function (t) {
        !1,
          (progress = 0),
          (s = e.extend(
            {
              registerAjaxHandlers: !0,
              startPercentage: 30,
              startDuration: 200,
              completeDuration: 50,
              fadeDelay: 200,
              fadeDuration: 200,
              progressBarId: o,
              durationSeed: 8,
              onStart: function () {},
              onComplete: function () {},
              onError: function () {},
            },
            t
          )).registerAjaxHandlers &&
            (e(document).on("ajaxStart." + o, function () {
              n.start();
            }),
            e(document).on("ajaxComplete." + o, function () {
              e.active < 2 && n.complete();
            }),
            e(document).on("ajaxError." + o, function () {
              n.error();
            }));
      },
      progress: function (t, e, o) {
        if (!t) return a;
        !(function (t, e, o) {
          var n = c();
          e || (e = (t - a) * s.durationSeed);
          var i = 1.01 * (a = t);
          i = Math.round(100 * i) / 100;
          var r = !1;
          n.transit({
            width: i + "%",
            duration: e,
            complete: function () {
              r
                ? (99 < i &&
                    (n.delay(s.fadeDelay),
                    n.fadeOut({
                      duration: s.fadeDuration,
                      complete: function () {
                        n.remove();
                      },
                    }),
                    s.onComplete()),
                  o && o())
                : (r = !0);
            },
          });
        })(t, e, o);
      },
      start: function () {
        c();
        !1, n.progress(s.startPercentage, s.startDuration), s.onStart();
      },
      complete: function () {
        c();
        n.progress(100, s.completeDuration);
      },
      error: function () {
        e("#" + s.progressBarId).addClass("error"), s.onError();
      },
      destroy: function () {
        s.registerAjaxHandlers &&
          (e(document).off("ajaxStart." + o),
          e(document).off("ajaxComplete." + o),
          e(document).off("ajaxError." + o));
        var t = e("#" + s.progressBarId);
        0 != t.length && t.remove();
      },
    };
    e.ytLoad = function (t) {
      return n[t]
        ? n[t].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof t && t
        ? void e.error("Method " + method + " does not exist on jQuery." + o)
        : n.init.apply(this, arguments);
    };
  })(jQuery),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.anime = e());
  })(this, function () {
    var u,
      o,
      t,
      e,
      n,
      a = {
        duration: 1e3,
        delay: 0,
        loop: !1,
        autoplay: !0,
        direction: "normal",
        easing: "easeOutElastic",
        elasticity: 400,
        round: !1,
        begin: void 0,
        update: void 0,
        complete: void 0,
      },
      i =
        "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(
          " "
        ),
      l = {
        arr: function (t) {
          return Array.isArray(t);
        },
        obj: function (t) {
          return -1 < Object.prototype.toString.call(t).indexOf("Object");
        },
        svg: function (t) {
          return t instanceof SVGElement;
        },
        dom: function (t) {
          return t.nodeType || l.svg(t);
        },
        num: function (t) {
          return !isNaN(parseInt(t));
        },
        str: function (t) {
          return "string" == typeof t;
        },
        fnc: function (t) {
          return "function" == typeof t;
        },
        und: function (t) {
          return void 0 === t;
        },
        nul: function (t) {
          return "null" == typeof t;
        },
        hex: function (t) {
          return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
        },
        rgb: function (t) {
          return /^rgb/.test(t);
        },
        hsl: function (t) {
          return /^hsl/.test(t);
        },
        col: function (t) {
          return l.hex(t) || l.rgb(t) || l.hsl(t);
        },
      },
      c =
        ((e = {}),
        (n = {
          Sine: function (t) {
            return 1 - Math.cos((t * Math.PI) / 2);
          },
          Circ: function (t) {
            return 1 - Math.sqrt(1 - t * t);
          },
          Elastic: function (t, e) {
            if (0 === t || 1 === t) return t;
            var o = 1 - Math.min(e, 998) / 1e3,
              n = t / 1 - 1;
            return (
              -Math.pow(2, 10 * n) *
              Math.sin(
                (2 * (n - (o / (2 * Math.PI)) * Math.asin(1)) * Math.PI) / o
              )
            );
          },
          Back: function (t) {
            return t * t * (3 * t - 2);
          },
          Bounce: function (t) {
            for (var e, o = 4; t < ((e = Math.pow(2, --o)) - 1) / 11; );
            return (
              1 / Math.pow(4, 3 - o) -
              7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            );
          },
        }),
        ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (t, e) {
          n[t] = function (t) {
            return Math.pow(t, e + 2);
          };
        }),
        Object.keys(n).forEach(function (t) {
          var o = n[t];
          (e["easeIn" + t] = o),
            (e["easeOut" + t] = function (t, e) {
              return 1 - o(1 - t, e);
            }),
            (e["easeInOut" + t] = function (t, e) {
              return t < 0.5 ? o(2 * t, e) / 2 : 1 - o(-2 * t + 2, e) / 2;
            }),
            (e["easeOutIn" + t] = function (t, e) {
              return t < 0.5
                ? (1 - o(1 - 2 * t, e)) / 2
                : (o(2 * t - 1, e) + 1) / 2;
            });
        }),
        (e.linear = function (t) {
          return t;
        }),
        e),
      r = function (t) {
        return l.str(t) ? t : t + "";
      },
      s = function (t) {
        return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      },
      d = function (t) {
        if (l.col(t)) return !1;
        try {
          return document.querySelectorAll(t);
        } catch (t) {
          return !1;
        }
      },
      p = function (t) {
        return t.reduce(function (t, e) {
          return t.concat(l.arr(e) ? p(e) : e);
        }, []);
      },
      h = function (t) {
        return l.arr(t)
          ? t
          : (l.str(t) && (t = d(t) || t),
            t instanceof NodeList || t instanceof HTMLCollection
              ? [].slice.call(t)
              : [t]);
      },
      f = function (t, e) {
        return t.some(function (t) {
          return t === e;
        });
      },
      m = function (t) {
        return t.filter(function (t, e, o) {
          return o.indexOf(t) === e;
        });
      },
      w = function (t) {
        var e,
          o = {};
        for (e in t) o[e] = t[e];
        return o;
      },
      b = function (t, e) {
        for (var o in e) t[o] = l.und(t[o]) ? e[o] : t[o];
        return t;
      },
      $ = function (t) {
        return /([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(
          t
        )[2];
      },
      g = function (t, e, o) {
        return $(e)
          ? e
          : -1 < t.indexOf("translate")
          ? $(o)
            ? e + $(o)
            : e + "px"
          : -1 < t.indexOf("rotate") || -1 < t.indexOf("skew")
          ? e + "deg"
          : e;
      },
      y = function (t, e) {
        if (e in t.style)
          return getComputedStyle(t).getPropertyValue(s(e)) || "0";
      },
      v = function (t, e) {
        return l.dom(t) && f(i, e)
          ? "transform"
          : l.dom(t) && (t.getAttribute(e) || (l.svg(t) && t[e]))
          ? "attribute"
          : l.dom(t) && "transform" !== e && y(t, e)
          ? "css"
          : l.nul(t[e]) || l.und(t[e])
          ? void 0
          : "object";
      },
      x = function (t, e) {
        switch (v(t, e)) {
          case "transform":
            return (function (t, o) {
              var e = -1 < o.indexOf("scale") ? 1 : 0,
                n = t.style.transform;
              if (!n) return e;
              for (
                var i = /(\w+)\((.+?)\)/g, r = [], s = [], a = [];
                (r = i.exec(n));

              )
                s.push(r[1]), a.push(r[2]);
              return (n = a.filter(function (t, e) {
                return s[e] === o;
              })).length
                ? n[0]
                : e;
            })(t, e);
          case "css":
            return y(t, e);
          case "attribute":
            return t.getAttribute(e);
        }
        return t[e] || 0;
      },
      _ = function (t, e, o) {
        return l.col(e)
          ? (e = l.rgb(e)
              ? e
              : l.hex(e)
              ? (function (t) {
                  t = t.replace(
                    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                    function (t, e, o, n) {
                      return e + e + o + o + n + n;
                    }
                  );
                  var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                  return (
                    "rgb(" +
                    (t = parseInt(e[1], 16)) +
                    "," +
                    parseInt(e[2], 16) +
                    "," +
                    (e = parseInt(e[3], 16)) +
                    ")"
                  );
                })(e)
              : l.hsl(e)
              ? (function (t) {
                  t = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t);
                  var e = parseInt(t[1]) / 360,
                    o = parseInt(t[2]) / 100,
                    n = parseInt(t[3]) / 100;
                  if (
                    ((t = function (t, e, o) {
                      return (
                        o < 0 && (o += 1),
                        1 < o && --o,
                        o < 1 / 6
                          ? t + 6 * (e - t) * o
                          : o < 0.5
                          ? e
                          : o < 2 / 3
                          ? t + (e - t) * (2 / 3 - o) * 6
                          : t
                      );
                    }),
                    0 == o)
                  )
                    o = n = e = n;
                  else {
                    var i = n < 0.5 ? n * (1 + o) : n + o - n * o,
                      r = 2 * n - i;
                    (o = t(r, i, e + 1 / 3)),
                      (n = t(r, i, e)),
                      (e = t(r, i, e - 1 / 3));
                  }
                  return "rgb(" + 255 * o + "," + 255 * n + "," + 255 * e + ")";
                })(e)
              : void 0)
          : $(e)
          ? e
          : (!(t = $(t.to) ? $(t.to) : $(t.from)) && o && (t = $(o)),
            t ? e + t : e);
      },
      k = function (t) {
        var e = /-?\d*\.?\d+/g;
        return {
          original: t,
          numbers: r(t).match(e) ? r(t).match(e).map(Number) : [0],
          strings: r(t).split(e),
        };
      },
      T = function (t, e, o, n) {
        return (
          "transform" === o
            ? ((o = t + "(" + g(t, e.from, e.to) + ")"),
              (e = t + "(" + g(t, e.to) + ")"))
            : ((t = "css" === o ? y(n, t) : void 0),
              (o = _(e, e.from, t)),
              (e = _(e, e.to, t))),
          { from: k(o), to: k(e) }
        );
      },
      j = function (t, e) {
        var a,
          o,
          c,
          n,
          i,
          r,
          s =
            ((o = e),
            (c = []),
            (a = t).forEach(function (i, r) {
              var s = i.target;
              return o.forEach(function (t) {
                var e = v(s, t.name);
                if (e) {
                  var o;
                  o = t.name;
                  var n = t.value;
                  (o = {
                    from:
                      1 < (n = h(l.fnc(n) ? n(s, r) : n)).length
                        ? n[0]
                        : x(s, o),
                    to: 1 < n.length ? n[1] : n[0],
                  }),
                    ((n = w(t)).animatables = i),
                    (n.type = e),
                    (n.from = T(t.name, o, n.type, s).from),
                    (n.to = T(t.name, o, n.type, s).to),
                    (n.round = l.col(o.from) || n.round ? 1 : 0),
                    (n.delay =
                      (l.fnc(n.delay) ? n.delay(s, r, a.length) : n.delay) /
                      H.speed),
                    (n.duration =
                      (l.fnc(n.duration)
                        ? n.duration(s, r, a.length)
                        : n.duration) / H.speed),
                    c.push(n);
                }
              });
            }),
            c);
        return ((n = s),
        (i = ["name", "from", "to", "delay", "duration"]),
        (r = {}),
        n.forEach(function (e) {
          var t = JSON.stringify(
            i.map(function (t) {
              return e[t];
            })
          );
          (r[t] = r[t] || []), r[t].push(e);
        }),
        Object.keys(r).map(function (t) {
          return r[t];
        })).map(function (t) {
          var e = w(t[0]);
          return (
            (e.animatables = t.map(function (t) {
              return t.animatables;
            })),
            (e.totalDuration = e.delay + e.duration),
            e
          );
        });
      },
      S = function (n, i) {
        n.tweens.forEach(function (t) {
          var e = t.from,
            o = n.duration - (t.delay + t.duration);
          (t.from = t.to), (t.to = e), i && (t.delay = o);
        }),
          (n.reversed = !n.reversed);
      },
      C = function (t) {
        var e = [],
          o = [];
        return (
          t.tweens.forEach(function (t) {
            ("css" !== t.type && "transform" !== t.type) ||
              (e.push("css" === t.type ? s(t.name) : "transform"),
              t.animatables.forEach(function (t) {
                o.push(t.target);
              }));
          }),
          { properties: m(e).join(", "), elements: m(o) }
        );
      },
      N = function (i, t) {
        var n,
          e,
          r,
          s = Math.min(Math.max(t - i.delay, 0), i.duration) / i.duration,
          o = i.to.numbers.map(function (t, e) {
            var o = i.from.numbers[e],
              n = c[i.easing](s, i.elasticity);
            o = i.path
              ? (function (e, o) {
                  var n = e.path,
                    i = e.value * o,
                    t = (s = function (t) {
                      return (
                        (t = t || 0),
                        n.getPointAtLength(1 < o ? e.value + t : i + t)
                      );
                    })(),
                    r = s(-1),
                    s = s(1);
                  switch (e.name) {
                    case "translateX":
                      return t.x;
                    case "translateY":
                      return t.y;
                    case "rotate":
                      return (180 * Math.atan2(s.y - r.y, s.x - r.x)) / Math.PI;
                  }
                })(i, n)
              : o + n * (t - o);
            return i.round ? Math.round(o * i.round) / i.round : o;
          });
        return (
          (n = o),
          (e = i.to.strings),
          (r = i.from.strings),
          e.reduce(function (t, e, o) {
            return (e = e || r[o - 1]), t + n[o - 1] + e;
          })
        );
      },
      E = function (t, e) {
        var o;
        (t.currentTime = e), (t.progress = (e / t.duration) * 100);
        for (var n = 0; n < t.tweens.length; n++) {
          var i = t.tweens[n];
          i.currentValue = N(i, e);
          for (var r = i.currentValue, s = 0; s < i.animatables.length; s++) {
            var a = (c = i.animatables[s]).id,
              c = c.target,
              l = i.name;
            switch (i.type) {
              case "css":
                c.style[l] = r;
                break;
              case "attribute":
                c.setAttribute(l, r);
                break;
              case "object":
                c[l] = r;
                break;
              case "transform":
                o || (o = {}), o[a] || (o[a] = []), o[a].push(r);
            }
          }
        }
        if (o)
          for (n in (u ||
            (u =
              (y(document.body, "transform") ? "" : "-webkit-") + "transform"),
          o))
            t.animatables[n].target.style[u] = o[n].join(" ");
        t.settings.update && t.settings.update(t);
      },
      A = function (t) {
        var e,
          o = {};
        (o.animatables = (e = (e = t.targets)
          ? p(l.arr(e) ? e.map(h) : h(e))
          : []).map(function (t, e) {
          return { target: t, id: e };
        })),
          (o.settings = b(t, a));
        var n,
          i = o.settings,
          r = [];
        for (n in t)
          if (!a.hasOwnProperty(n) && "targets" !== n) {
            var s = l.obj(t[n]) ? w(t[n]) : { value: t[n] };
            (s.name = n), r.push(b(s, i));
          }
        return (
          (o.properties = r),
          (o.tweens = j(o.animatables, o.properties)),
          (o.duration =
            (function (t) {
              if (t.length)
                return Math.max.apply(
                  Math,
                  t.map(function (t) {
                    return t.totalDuration;
                  })
                );
            })(o.tweens) || t.duration),
          (o.currentTime = 0),
          (o.progress = 0),
          (o.ended = !1),
          o
        );
      },
      L = [],
      P = 0,
      M =
        ((o = function () {
          P = requestAnimationFrame(t);
        }),
        (t = function (t) {
          if (L.length) {
            for (var e = 0; e < L.length; e++) L[e].tick(t);
            o();
          } else cancelAnimationFrame(P), (P = 0);
        }),
        o),
      H = function (t) {
        var o = A(t),
          n = {};
        return (
          (o.tick = function (t) {
            (o.ended = !1),
              n.start || (n.start = t),
              (n.current = Math.min(
                Math.max(n.last + t - n.start, 0),
                o.duration
              )),
              E(o, n.current);
            var e = o.settings;
            e.begin && n.current >= e.delay && (e.begin(o), (e.begin = void 0)),
              n.current >= o.duration &&
                (e.loop
                  ? ((n.start = t),
                    "alternate" === e.direction && S(o, !0),
                    l.num(e.loop) && e.loop--)
                  : ((o.ended = !0), o.pause(), e.complete && e.complete(o)),
                (n.last = 0));
          }),
          (o.seek = function (t) {
            E(o, (t / 100) * o.duration);
          }),
          (o.pause = function () {
            C(o).elements.forEach(function (t) {
              t.style.removeProperty("will-change");
            });
            var t = L.indexOf(o);
            -1 < t && L.splice(t, 1);
          }),
          (o.play = function (t) {
            var e;
            o.pause(),
              t && (o = b(A(b(t, o.settings)), o)),
              (n.start = 0),
              (n.last = o.ended ? 0 : o.currentTime),
              "reverse" === (t = o.settings).direction && S(o),
              "alternate" !== t.direction || t.loop || (t.loop = 1),
              (e = C(o)).elements.forEach(function (t) {
                t.style.willChange = e.properties;
              }),
              L.push(o),
              P || M();
          }),
          (o.restart = function () {
            o.reversed && S(o), o.pause(), o.seek(0), o.play();
          }),
          o.settings.autoplay && o.play(),
          o
        );
      };
    return (
      (H.version = "1.1.1"),
      (H.speed = 1),
      (H.list = L),
      (H.remove = function (t) {
        t = p(l.arr(t) ? t.map(h) : h(t));
        for (var e = L.length - 1; 0 <= e; e--)
          for (var o = L[e], n = o.tweens, i = n.length - 1; 0 <= i; i--)
            for (var r = n[i].animatables, s = r.length - 1; 0 <= s; s--)
              f(t, r[s].target) &&
                (r.splice(s, 1),
                r.length || n.splice(i, 1),
                n.length || o.pause());
      }),
      (H.easings = c),
      (H.getValue = x),
      (H.path = function (t) {
        return {
          path: (t = l.str(t) ? d(t)[0] : t),
          value: t.getTotalLength(),
        };
      }),
      (H.random = function (t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t;
      }),
      H
    );
  }),
  (function (t) {
    "use strict";
    function o(t, e) {
      for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
      return t;
    }
    function e(t, e, o) {
      var n = document.createElement(t);
      return (n.className = e || ""), (n.innerHTML = o || ""), n;
    }
    function n(t, e) {
      (this.el = t),
        (this.options = o({}, this.options)),
        o(this.options, e),
        this._init();
    }
    (n.prototype.options = {
      isContentHidden: !0,
      revealSettings: {
        direction: "lr",
        bgcolor: "#f0f0f0",
        duration: 500,
        easing: "easeInOutQuint",
        coverArea: 0,
        onCover: function (t, e) {
          return !1;
        },
        onStart: function (t, e) {
          return !1;
        },
        onComplete: function (t, e) {
          return !1;
        },
      },
    }),
      (n.prototype._init = function () {
        this._layout();
      }),
      (n.prototype._layout = function () {
        var t = getComputedStyle(this.el).position;
        "fixed" !== t &&
          "absolute" !== t &&
          "relative" !== t &&
          (this.el.style.position = "relative"),
          (this.content = e(
            "div",
            "block-revealer__content",
            this.el.innerHTML
          )),
          this.options.isContentHidden && (this.content.style.opacity = 0),
          (this.revealer = e("div", "block-revealer__element")),
          this.el.classList.add("block-revealer"),
          (this.el.innerHTML = ""),
          this.el.appendChild(this.content),
          this.el.appendChild(this.revealer);
      }),
      (n.prototype._getTransformSettings = function (t) {
        var e, o, n;
        switch (t) {
          case "lr":
            (e = "scale3d(0,1,1)"), (o = "0 50%"), (n = "100% 50%");
            break;
          case "rl":
            (e = "scale3d(0,1,1)"), (o = "100% 50%"), (n = "0 50%");
            break;
          case "tb":
            (e = "scale3d(1,0,1)"), (o = "50% 0"), (n = "50% 100%");
            break;
          case "bt":
            (e = "scale3d(1,0,1)"), (o = "50% 100%"), (n = "50% 0");
            break;
          default:
            (e = "scale3d(0,1,1)"), (o = "0 50%"), (n = "100% 50%");
        }
        return { val: e, origin: { initial: o, halfway: n } };
      }),
      (n.prototype.reveal = function (t) {
        if (this.isAnimating) return !1;
        this.isAnimating = !0;
        var e = (t = t || this.options.revealSettings).direction || "lr",
          o = this._getTransformSettings(e);
        (this.revealer.style.WebkitTransform = this.revealer.style.transform =
          o.val),
          (this.revealer.style.WebkitTransformOrigin =
            this.revealer.style.transformOrigin =
              o.origin.initial),
          (this.revealer.style.backgroundColor = t.bgcolor || "#f0f0f0"),
          (this.revealer.style.opacity = 1);
        var n = this,
          i = {
            complete: function () {
              (n.isAnimating = !1),
                "function" == typeof t.onComplete &&
                  t.onComplete(n.content, n.revealer);
            },
          },
          r = {
            delay: t.delay || 0,
            complete: function () {
              (n.revealer.style.WebkitTransformOrigin =
                n.revealer.style.transformOrigin =
                  o.origin.halfway),
                "function" == typeof t.onCover &&
                  t.onCover(n.content, n.revealer),
                anime(i);
            },
          };
        (r.targets = i.targets = this.revealer),
          (r.duration = i.duration = t.duration || 500),
          (r.easing = i.easing = t.easing || "easeInOutQuint");
        var s = t.coverArea || 0;
        "lr" === e || "rl" === e
          ? ((r.scaleX = [0, 1]), (i.scaleX = [1, s / 100]))
          : ((r.scaleY = [0, 1]), (i.scaleY = [1, s / 100])),
          "function" == typeof t.onStart && t.onStart(n.content, n.revealer),
          anime(r);
      }),
      (t.RevealFx = n);
  })(window),
  $("#hideall").css("opacity", "1"),
  $(document).ready(function () {
    setTimeout(function () {
      $("#hideall").css("opacity", "0"), $(window).scrollTop(0);
    }, 1e3),
      setTimeout(function () {
        $("#hideall").css("display", "none");
      }, 1500);
  }),
  $(document).ready(function () {}),
  $.ytLoad(),
  history.pushState("", document.title, window.location.pathname),
  $(window).scroll(function (t) {
    window.tempScrollTop = $(window).scrollTop();
  }),
  (window.interna = 0),
  $(document).ready(function () {
    $("#falsocontenido").css(
      "height",
      2 * $("#home").width() + window.innerHeight + "px"
    ),
      $(window).scroll(function (t) {
        (positionscroll = window.pageYOffset),
          $("#paneles_home").css("left", -positionscroll + "px");
      }),
      $(window).resize(function () {
        0 == window.interna &&
          ((positionscroll = window.pageYOffset),
          $("#falsocontenido").css(
            "height",
            2 * $("#home").width() + window.innerHeight + "px"
          ),
          $("#paneles_home").css("height", window.innerHeight + "px"));
      });
  }),
  $(window).bind("scroll", function () {
    0 == window.interna
      ? $(window).scrollTop() < 0.3 * $("#intro").width()
        ? ($(".titulo_thumbs").css("opacity", "0"),
          $("#link_studio").css(
            "border-bottom",
            "2px solid rgba(0, 0, 0, 0.2)"
          ),
          $("#link_works").css("border-bottom", "2px solid transparent"),
          $("#link_contact").css("border-bottom", "2px solid transparent"))
        : $(window).scrollTop() >
          $("#falsocontenido").height() -
            window.innerHeight -
            $("#contacto").height() / 2
        ? ($(".titulo_thumbs").css("opacity", "0"),
          $("#link_studio").css("border-bottom", "2px solid transparent"),
          $("#link_works").css("border-bottom", "2px solid transparent"),
          $("#link_contact").css(
            "border-bottom",
            "2px solid rgba(0, 0, 0, 0.2)"
          ),
          $("#contacto h1").css("opacity", "1"),
          init2())
        : ($(".titulo_thumbs").css("opacity", "1"),
          $("#link_studio").css("border-bottom", "2px solid transparent"),
          $("#link_works").css("border-bottom", "2px solid rgba(0, 0, 0, 0.2)"),
          $("#link_contact").css("border-bottom", "2px solid transparent"))
      : ($("#link_studio").css("border-bottom", "2px solid transparent"),
        $("#link_works").css("border-bottom", "2px solid transparent"),
        $("#link_contact").css("border-bottom", "2px solid transparent"));
  }),
  $(function () {
    $("#paneles_home").scroll(function (t) {
      0 == window.interna
        ? $("#paneles_home").scrollLeft() < $("#intro").width() / 2
          ? ($(".titulo_thumbs").css("opacity", "0"),
            $("#link_studio").css(
              "border-bottom",
              "2px solid rgba(0, 0, 0, 0.2)"
            ),
            $("#link_works").css("border-bottom", "2px solid transparent"),
            $("#link_contact").css("border-bottom", "2px solid transparent"))
          : $("#paneles_home").scrollLeft() >
            $("#intro").width() +
              $("#trabajos").width() -
              $("#contacto").width()
          ? ($(".titulo_thumbs").css("opacity", "0"),
            $("#link_studio").css("border-bottom", "2px solid transparent"),
            $("#link_works").css("border-bottom", "2px solid transparent"),
            $("#link_contact").css(
              "border-bottom",
              "2px solid rgba(0, 0, 0, 0.2)"
            ),
            $("#contacto h1").css("opacity", "1"),
            init2())
          : ($(".titulo_thumbs").css("opacity", "1"),
            $("#link_studio").css("border-bottom", "2px solid transparent"),
            $("#link_works").css(
              "border-bottom",
              "2px solid rgba(0, 0, 0, 0.2)"
            ),
            $("#link_contact").css("border-bottom", "2px solid transparent"))
        : ($("#link_studio").css("border-bottom", "2px solid transparent"),
          $("#link_works").css("border-bottom", "2px solid transparent"),
          $("#link_contact").css("border-bottom", "2px solid transparent"));
    });
  }),
  $(document).ready(function () {
    0 == window.interna
      ? ($(window).scrollTop() < 0.3 * $("#intro").width()
          ? ($(".titulo_thumbs").css("opacity", "0"),
            $("#link_studio").css(
              "border-bottom",
              "2px solid rgba(0, 0, 0, 0.2)"
            ),
            $("#link_works").css("border-bottom", "2px solid transparent"),
            $("#link_contact").css("border-bottom", "2px solid transparent"))
          : $(window).scrollTop() >
            $("#falsocontenido").height() -
              window.innerHeight -
              $("#contacto").height() / 2
          ? ($(".titulo_thumbs").css("opacity", "0"),
            $("#link_studio").css("border-bottom", "2px solid transparent"),
            $("#link_works").css("border-bottom", "2px solid transparent"),
            $("#link_contact").css(
              "border-bottom",
              "2px solid rgba(0, 0, 0, 0.2)"
            ),
            $("#contacto h1").css("opacity", "1"),
            init2())
          : ($(".titulo_thumbs").css("opacity", "1"),
            $("#link_studio").css("border-bottom", "2px solid transparent"),
            $("#link_works").css(
              "border-bottom",
              "2px solid rgba(0, 0, 0, 0.2)"
            ),
            $("#link_contact").css("border-bottom", "2px solid transparent")),
        $("#paneles_home").scrollLeft() < $("#intro").width() / 2
          ? ($(".titulo_thumbs").css("opacity", "0"),
            $("#link_studio").css(
              "border-bottom",
              "2px solid rgba(0, 0, 0, 0.2)"
            ),
            $("#link_works").css("border-bottom", "2px solid transparent"),
            $("#link_contact").css("border-bottom", "2px solid transparent"))
          : $("#paneles_home").scrollLeft() >
            $("#intro").width() +
              $("#trabajos").width() -
              $("#contacto").width()
          ? ($(".titulo_thumbs").css("opacity", "0"),
            $("#link_studio").css("border-bottom", "2px solid transparent"),
            $("#link_works").css("border-bottom", "2px solid transparent"),
            $("#link_contact").css(
              "border-bottom",
              "2px solid rgba(0, 0, 0, 0.2)"
            ),
            $("#contacto h1").css("opacity", "1"),
            init2())
          : ($(".titulo_thumbs").css("opacity", "1"),
            $("#link_studio").css("border-bottom", "2px solid transparent"),
            $("#link_works").css(
              "border-bottom",
              "2px solid rgba(0, 0, 0, 0.2)"
            ),
            $("#link_contact").css("border-bottom", "2px solid transparent")))
      : ($("#link_studio").css("border-bottom", "2px solid transparent"),
        $("#link_works").css("border-bottom", "2px solid transparent"),
        $("#link_contact").css("border-bottom", "2px solid transparent"));
  }),
  $(window).resize(function () {
    0 == window.interna
      ? ($(window).scrollTop() < 0.3 * $("#intro").width()
          ? ($(".titulo_thumbs").css("opacity", "0"),
            $("#link_studio").css(
              "border-bottom",
              "2px solid rgba(0, 0, 0, 0.2)"
            ),
            $("#link_works").css("border-bottom", "2px solid transparent"),
            $("#link_contact").css("border-bottom", "2px solid transparent"))
          : $(window).scrollTop() >
            $("#falsocontenido").height() -
              window.innerHeight -
              $("#contacto").height() / 2
          ? ($(".titulo_thumbs").css("opacity", "0"),
            $("#link_studio").css("border-bottom", "2px solid transparent"),
            $("#link_works").css("border-bottom", "2px solid transparent"),
            $("#link_contact").css(
              "border-bottom",
              "2px solid rgba(0, 0, 0, 0.2)"
            ),
            $("#contacto h1").css("opacity", "1"),
            init2())
          : ($(".titulo_thumbs").css("opacity", "1"),
            $("#link_studio").css("border-bottom", "2px solid transparent"),
            $("#link_works").css(
              "border-bottom",
              "2px solid rgba(0, 0, 0, 0.2)"
            ),
            $("#link_contact").css("border-bottom", "2px solid transparent")),
        $("#paneles_home").scrollLeft() < $("#intro").width() / 2
          ? ($(".titulo_thumbs").css("opacity", "0"),
            $("#link_studio").css(
              "border-bottom",
              "2px solid rgba(0, 0, 0, 0.2)"
            ),
            $("#link_works").css("border-bottom", "2px solid transparent"),
            $("#link_contact").css("border-bottom", "2px solid transparent"))
          : $("#paneles_home").scrollLeft() >
            $("#intro").width() +
              $("#trabajos").width() -
              $("#contacto").width()
          ? ($(".titulo_thumbs").css("opacity", "0"),
            $("#link_studio").css("border-bottom", "2px solid transparent"),
            $("#link_works").css("border-bottom", "2px solid transparent"),
            $("#link_contact").css(
              "border-bottom",
              "2px solid rgba(0, 0, 0, 0.2)"
            ),
            $("#contacto h1").css("opacity", "1"),
            init2())
          : ($(".titulo_thumbs").css("opacity", "1"),
            $("#link_studio").css("border-bottom", "2px solid transparent"),
            $("#link_works").css(
              "border-bottom",
              "2px solid rgba(0, 0, 0, 0.2)"
            ),
            $("#link_contact").css("border-bottom", "2px solid transparent")))
      : ($("#link_studio").css("border-bottom", "2px solid transparent"),
        $("#link_works").css("border-bottom", "2px solid transparent"),
        $("#link_contact").css("border-bottom", "2px solid transparent"));
  }),
  1e3 < $(window).width() &&
    $("#menu_links div").hover(
      function () {
        $(this).addClass("linksmenuhover");
      },
      function () {
        $(this).removeClass("linksmenuhover");
      }
    ),
  $(window).bind("scroll", function () {
    0 == window.interna &&
      (20 < $(window).scrollTop()
        ? $("#logo1").css("opacity", "0")
        : $("#logo1").css("opacity", "1 "));
  }),
  $(document).ready(function () {
    0 == window.interna &&
      (20 < $(window).scrollTop()
        ? $("#logo1").css("opacity", "0")
        : $("#logo1").css("opacity", "1 "));
  }),
  $(function () {
    $("#paneles_home").scroll(function (t) {
      0 == window.interna &&
        (50 < $("#paneles_home").scrollLeft()
          ? $("#logo1").css("opacity", "0")
          : $("#logo1").css("opacity", "1"));
    });
  }),
  $(document).on("click", "#link_studio, #logo", function () {
    0 == window.interna &&
      ($(window).width() < 1e3
        ? $("#paneles_home").animate({ scrollLeft: 0 }, 1e3)
        : $("html, body").animate({ scrollTop: 0 }, 1e3)),
      1 == window.interna &&
        ((window.ultimo = !1),
        history.pushState("", document.title, window.location.pathname),
        $(window).scrollTop(window.tempScrollTop),
        $("html, body").animate({ scrollTop: 0 }, 500),
        setTimeout(function () {
          $(".interna_headernext .titulo_thumbs").css({ opacity: "0" }),
            $("#ocultable").css({ opacity: "0" }),
            $(".hover_black").css({ opacity: ".1" });
        }, 250),
        setTimeout(function () {
          $("#content").load("index.html #content"),
            $("#falsocontenido").css(
              "height",
              2 * $("#home").width() + window.innerHeight + "px"
            ),
            1e3 < $(window).width()
              ? $(window).scrollTop(window.oldScrollPos)
              : $("#paneles_home").scrollLeft(window.oldScrollPosM),
            $(".trabajo").removeAttr("style"),
            $("#paneles_home").removeAttr("style"),
            setTimeout(function () {
              $(".trabajo_cont").removeAttr("style");
            }, 500),
            $("#intro").css({ opacity: "1" }),
            $("#contacto").css({ opacity: "1" }),
            $("#trabajo1").css({ opacity: "1" }),
            $("#trabajo2").css({ opacity: "1" }),
            $("#trabajo3").css({ opacity: "1" }),
            $("#trabajo4").css({ opacity: "1" }),
            $("#trabajo5").css({ opacity: "1" }),
            setTimeout(function () {
              $(".grupotitulo").css({ opacity: "1" }),
                $(".thumbs_titulo").css({ opacity: "0" }),
                $(".hover_black").removeAttr("style");
            }, 1e3),
            (window.interna = 0),
            $(window).scrollTop() < 0.3 * $("#intro").width()
              ? ($(".titulo_thumbs").css("opacity", "0"),
                $("#link_studio").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                ))
              : $(window).scrollTop() >
                $("#falsocontenido").height() -
                  window.innerHeight -
                  $("#contacto").height() / 2
              ? ($(".titulo_thumbs").css("opacity", "0"),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ))
              : ($(".titulo_thumbs").css("opacity", "1"),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                )),
            $("#paneles_home").scrollLeft() < $("#intro").width() / 2
              ? ($(".titulo_thumbs").css("opacity", "0"),
                $("#link_studio").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                ))
              : $("#paneles_home").scrollLeft() >
                $("#intro").width() +
                  $("#trabajos").width() -
                  $("#contacto").width()
              ? ($(".titulo_thumbs").css("opacity", "0"),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ))
              : ($(".titulo_thumbs").css("opacity", "1"),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                )),
            20 < $(window).scrollTop()
              ? $("#logo1").css("opacity", "0 ")
              : $("#logo1").css("opacity", "1 "),
            50 < $("#paneles_home").scrollLeft()
              ? $("#logo1").css("opacity", "0")
              : $("#logo1").css("opacity", "1"),
            1e3 < $(window).width() &&
              setTimeout(function () {
                if (
                  (100 * $(window).scrollTop()) /
                    ($(document).height() - $(window).height()) <=
                  50
                ) {
                  var t =
                    (200 * $(window).scrollTop()) /
                    ($(document).height() - $(window).height());
                  $(".titulo_thumbs").css("right", "auto"),
                    $(".titulo_thumbs").css("left", "4.5rem"),
                    $(".titulo_thumbs.a1").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b1").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c1").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a2").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b2").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c2").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a3").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b3").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c3").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a4").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b4").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c4").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a5").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b5").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c5").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    );
                } else {
                  t =
                    (200 * $(window).scrollTop()) /
                    ($(document).height() - $(window).height());
                  $(".titulo_thumbs").css("right", "4.5rem"),
                    $(".titulo_thumbs").css("left", "auto"),
                    $(".titulo_thumbs.a1").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b1").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c1").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a2").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b2").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c2").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a3").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b3").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c3").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a4").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b4").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c4").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a5").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b5").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c5").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    );
                }
              }, 1e3),
            1e3 < $(window).width() &&
              setTimeout(function () {
                (window.oldScrollPos1 =
                  $("#intro").width() +
                  0 * $("#trabajo1").width() -
                  ($("#paneles_home").width() / 2 -
                    $("#trabajo1").width() / 2)),
                  (window.oldScrollPosM1 =
                    ($("#logo2").height() / 4.5) * 3 +
                    $("#intro").width() +
                    0 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPos2 =
                    $("#intro").width() +
                    1 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPosM2 =
                    ($("#logo2").height() / 4.5) * 3 +
                    $("#intro").width() +
                    1 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPos3 =
                    $("#intro").width() +
                    2 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPosM3 =
                    ($("#logo2").height() / 4.5) * 3 +
                    $("#intro").width() +
                    2 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPos4 =
                    $("#intro").width() +
                    3 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPosM4 =
                    ($("#logo2").height() / 4.5) * 3 +
                    $("#intro").width() +
                    3 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPos5 =
                    $("#intro").width() +
                    4 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPosM5 =
                    ($("#logo2").height() / 4.5) * 3 +
                    $("#intro").width() +
                    4 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2));
              }, 1e3),
            setTimeout(function () {
              $(window).width() < 1e3
                ? $("#paneles_home").animate({ scrollLeft: 0 }, 1e3)
                : $("html, body").animate({ scrollTop: 0 }, 1e3);
            }, 1e3);
        }, 1e3));
  }),
  $(document).on("click", "#link_works, #btn_vertrabajos", function () {
    0 == window.interna &&
      ($(window).width() < 1e3
        ? $("#paneles_home").animate({ scrollLeft: $("#intro").width() }, 1e3)
        : $("html, body").animate({ scrollTop: $("#intro").height() }, 1e3)),
      1 == window.interna &&
        (history.pushState("", document.title, window.location.pathname),
        $(window).scrollTop(window.tempScrollTop),
        $("html, body").animate({ scrollTop: 0 }, 500),
        setTimeout(function () {
          $(".interna_headernext .titulo_thumbs").css({ opacity: "0" }),
            $("#ocultable").css({ opacity: "0" }),
            $(".hover_black").css({ opacity: ".1" });
        }, 250),
        setTimeout(function () {
          $("#content").load("index.html #content"),
            $("#falsocontenido").css(
              "height",
              2 * $("#home").width() + window.innerHeight + "px"
            ),
            1e3 < $(window).width()
              ? $(window).scrollTop(window.oldScrollPos)
              : $("#paneles_home").scrollLeft(window.oldScrollPosM),
            $(".trabajo").removeAttr("style"),
            $("#paneles_home").removeAttr("style"),
            setTimeout(function () {
              $(".trabajo_cont").removeAttr("style");
            }, 500),
            $("#intro").css({ opacity: "1" }),
            $("#contacto").css({ opacity: "1" }),
            $("#trabajo1").css({ opacity: "1" }),
            $("#trabajo2").css({ opacity: "1" }),
            $("#trabajo3").css({ opacity: "1" }),
            $("#trabajo4").css({ opacity: "1" }),
            $("#trabajo5").css({ opacity: "1" }),
            setTimeout(function () {
              $(".grupotitulo").css({ opacity: "1" }),
                $(".thumbs_titulo").css({ opacity: "0" }),
                $(".hover_black").removeAttr("style");
            }, 1e3),
            (window.interna = 0),
            $(window).scrollTop() < 0.3 * $("#intro").width()
              ? ($(".titulo_thumbs").css("opacity", "0"),
                $("#link_studio").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                ))
              : $(window).scrollTop() >
                $("#falsocontenido").height() -
                  window.innerHeight -
                  $("#contacto").height() / 2
              ? ($(".titulo_thumbs").css("opacity", "0"),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ))
              : ($(".titulo_thumbs").css("opacity", "1"),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                )),
            $("#paneles_home").scrollLeft() < $("#intro").width() / 2
              ? ($(".titulo_thumbs").css("opacity", "0"),
                $("#link_studio").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                ))
              : $("#paneles_home").scrollLeft() >
                $("#intro").width() +
                  $("#trabajos").width() -
                  $("#contacto").width()
              ? ($(".titulo_thumbs").css("opacity", "0"),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ))
              : ($(".titulo_thumbs").css("opacity", "1"),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                )),
            20 < $(window).scrollTop()
              ? $("#logo1").css("opacity", "0 ")
              : $("#logo1").css("opacity", "1 "),
            50 < $("#paneles_home").scrollLeft()
              ? $("#logo1").css("opacity", "0")
              : $("#logo1").css("opacity", "1"),
            1e3 < $(window).width() &&
              setTimeout(function () {
                if (
                  (100 * $(window).scrollTop()) /
                    ($(document).height() - $(window).height()) <=
                  50
                ) {
                  var t =
                    (200 * $(window).scrollTop()) /
                    ($(document).height() - $(window).height());
                  $(".titulo_thumbs").css("right", "auto"),
                    $(".titulo_thumbs").css("left", "4.5rem"),
                    $(".titulo_thumbs.a1").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b1").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c1").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a2").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b2").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c2").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a3").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b3").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c3").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a4").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b4").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c4").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a5").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b5").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c5").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    );
                } else {
                  t =
                    (200 * $(window).scrollTop()) /
                    ($(document).height() - $(window).height());
                  $(".titulo_thumbs").css("right", "4.5rem"),
                    $(".titulo_thumbs").css("left", "auto"),
                    $(".titulo_thumbs.a1").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b1").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c1").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a2").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b2").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c2").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a3").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b3").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c3").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a4").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b4").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c4").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a5").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b5").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c5").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    );
                }
              }, 1e3),
            1e3 < $(window).width() &&
              setTimeout(function () {
                (window.oldScrollPos1 =
                  $("#intro").width() +
                  0 * $("#trabajo1").width() -
                  ($("#paneles_home").width() / 2 -
                    $("#trabajo1").width() / 2)),
                  (window.oldScrollPosM1 =
                    ($("#logo2").height() / 4.5) * 3 +
                    $("#intro").width() +
                    0 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPos2 =
                    $("#intro").width() +
                    1 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPosM2 =
                    ($("#logo2").height() / 4.5) * 3 +
                    $("#intro").width() +
                    1 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPos3 =
                    $("#intro").width() +
                    2 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPosM3 =
                    ($("#logo2").height() / 4.5) * 3 +
                    $("#intro").width() +
                    2 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPos4 =
                    $("#intro").width() +
                    3 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPosM4 =
                    ($("#logo2").height() / 4.5) * 3 +
                    $("#intro").width() +
                    3 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPos5 =
                    $("#intro").width() +
                    4 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPosM5 =
                    ($("#logo2").height() / 4.5) * 3 +
                    $("#intro").width() +
                    4 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2));
              }, 1e3),
            setTimeout(function () {
              $(window).width() < 1e3 &&
                1 == window.ultimo &&
                $("#paneles_home").animate(
                  {
                    scrollLeft:
                      $("#paneles_home").scrollLeft() -
                      ($("#logo2").height() / 4.5) * 6,
                  },
                  500
                ),
                (window.ultimo = !1);
            }, 500);
        }, 1e3));
  }),
  $(document).on("click", "#link_contact, #btn_contactointerna", function () {
    0 == window.interna &&
      ($(window).width() < 1e3
        ? $("#paneles_home").animate(
            { scrollLeft: $("#intro").width() + $("#trabajos").width() },
            1e3
          )
        : $("html, body").animate(
            { scrollTop: $("#intro").height() + $("#trabajos").height() },
            1e3
          )),
      1 == window.interna &&
        ((window.ultimo = !1),
        history.pushState("", document.title, window.location.pathname),
        $(window).scrollTop(window.tempScrollTop),
        $("html, body").animate({ scrollTop: 0 }, 500),
        setTimeout(function () {
          $(".interna_headernext .titulo_thumbs").css({ opacity: "0" }),
            $("#ocultable").css({ opacity: "0" }),
            $(".hover_black").css({ opacity: ".1" });
        }, 250),
        setTimeout(function () {
          $("#content").load("index.html #content"),
            $("#falsocontenido").css(
              "height",
              2 * $("#home").width() + window.innerHeight + "px"
            ),
            1e3 < $(window).width()
              ? $(window).scrollTop(window.oldScrollPos)
              : $("#paneles_home").scrollLeft(window.oldScrollPosM),
            $(".trabajo").removeAttr("style"),
            $("#paneles_home").removeAttr("style"),
            setTimeout(function () {
              $(".trabajo_cont").removeAttr("style");
            }, 500),
            $("#intro").css({ opacity: "1" }),
            $("#contacto").css({ opacity: "1" }),
            $("#trabajo1").css({ opacity: "1" }),
            $("#trabajo2").css({ opacity: "1" }),
            $("#trabajo3").css({ opacity: "1" }),
            $("#trabajo4").css({ opacity: "1" }),
            $("#trabajo5").css({ opacity: "1" }),
            setTimeout(function () {
              $(".grupotitulo").css({ opacity: "1" }),
                $(".thumbs_titulo").css({ opacity: "0" }),
                $(".hover_black").removeAttr("style");
            }, 1e3),
            (window.interna = 0),
            $(window).scrollTop() < 0.3 * $("#intro").width()
              ? ($(".titulo_thumbs").css("opacity", "0"),
                $("#link_studio").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                ))
              : $(window).scrollTop() >
                $("#falsocontenido").height() -
                  window.innerHeight -
                  $("#contacto").height() / 2
              ? ($(".titulo_thumbs").css("opacity", "0"),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ))
              : ($(".titulo_thumbs").css("opacity", "1"),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                )),
            $("#paneles_home").scrollLeft() < $("#intro").width() / 2
              ? ($(".titulo_thumbs").css("opacity", "0"),
                $("#link_studio").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                ))
              : $("#paneles_home").scrollLeft() >
                $("#intro").width() +
                  $("#trabajos").width() -
                  $("#contacto").width()
              ? ($(".titulo_thumbs").css("opacity", "0"),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ))
              : ($(".titulo_thumbs").css("opacity", "1"),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                )),
            20 < $(window).scrollTop()
              ? $("#logo1").css("opacity", "0 ")
              : $("#logo1").css("opacity", "1 "),
            50 < $("#paneles_home").scrollLeft()
              ? $("#logo1").css("opacity", "0")
              : $("#logo1").css("opacity", "1"),
            1e3 < $(window).width() &&
              setTimeout(function () {
                if (
                  (100 * $(window).scrollTop()) /
                    ($(document).height() - $(window).height()) <=
                  50
                ) {
                  var t =
                    (200 * $(window).scrollTop()) /
                    ($(document).height() - $(window).height());
                  $(".titulo_thumbs").css("right", "auto"),
                    $(".titulo_thumbs").css("left", "4.5rem"),
                    $(".titulo_thumbs.a1").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b1").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c1").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a2").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b2").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c2").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a3").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b3").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c3").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a4").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b4").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c4").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a5").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b5").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c5").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    );
                } else {
                  t =
                    (200 * $(window).scrollTop()) /
                    ($(document).height() - $(window).height());
                  $(".titulo_thumbs").css("right", "4.5rem"),
                    $(".titulo_thumbs").css("left", "auto"),
                    $(".titulo_thumbs.a1").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b1").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c1").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a2").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b2").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c2").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a3").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b3").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c3").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a4").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b4").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c4").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a5").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b5").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c5").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    );
                }
              }, 1e3),
            1e3 < $(window).width() &&
              setTimeout(function () {
                (window.oldScrollPos1 =
                  $("#intro").width() +
                  0 * $("#trabajo1").width() -
                  ($("#paneles_home").width() / 2 -
                    $("#trabajo1").width() / 2)),
                  (window.oldScrollPosM1 =
                    ($("#logo2").height() / 4.5) * 3 +
                    $("#intro").width() +
                    0 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPos2 =
                    $("#intro").width() +
                    1 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPosM2 =
                    ($("#logo2").height() / 4.5) * 3 +
                    $("#intro").width() +
                    1 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPos3 =
                    $("#intro").width() +
                    2 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPosM3 =
                    ($("#logo2").height() / 4.5) * 3 +
                    $("#intro").width() +
                    2 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPos4 =
                    $("#intro").width() +
                    3 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPosM4 =
                    ($("#logo2").height() / 4.5) * 3 +
                    $("#intro").width() +
                    3 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPos5 =
                    $("#intro").width() +
                    4 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2)),
                  (window.oldScrollPosM5 =
                    ($("#logo2").height() / 4.5) * 3 +
                    $("#intro").width() +
                    4 * $("#trabajo1").width() -
                    ($("#paneles_home").width() / 2 -
                      $("#trabajo1").width() / 2));
              }, 1e3),
            setTimeout(function () {
              $(window).width() < 1e3
                ? $("#paneles_home").animate(
                    {
                      scrollLeft: $("#intro").width() + $("#trabajos").width(),
                    },
                    1e3
                  )
                : $("html, body").animate(
                    { scrollTop: $("#intro").width() + $("#trabajos").width() },
                    1e3
                  );
            }, 1e3);
        }, 1e3));
  }),
  $(document).ready(function () {
    (window.animacioncontacto = 0),
      new RevealFx(document.querySelector(".rev-1"), {
        revealSettings: {
          bgcolor: "black",
          delay: 1250,
          onCover: function (t, e) {
            t.style.opacity = 1;
          },
        },
      }).reveal(),
      new RevealFx(document.querySelector(".rev-2"), {
        revealSettings: {
          bgcolor: "black",
          delay: 1500,
          onCover: function (t, e) {
            t.style.opacity = 1;
          },
        },
      }).reveal(),
      new RevealFx(document.querySelector(".rev-3"), {
        revealSettings: {
          bgcolor: "black",
          delay: 1750,
          onCover: function (t, e) {
            t.style.opacity = 1;
          },
        },
      }).reveal(),
      new RevealFx(document.querySelector(".rev-4"), {
        revealSettings: {
          bgcolor: "black",
          delay: 2e3,
          onCover: function (t, e) {
            t.style.opacity = 1;
          },
        },
      }).reveal(),
      setTimeout(function () {
        $("#bloqueabout").css("left", "0"),
          $("#bloqueabout").css("opacity", "1");
      }, 2700),
      setTimeout(function () {
        $("#menu_links").css("opacity", "1"),
          $("#trabajos").css("opacity", "1");
      }, 3e3);
  }),
  $(document).ready(function () {
    $(".titulo_thumbs.a1").css(
      "min-width",
      $(".titulo_thumbs.a1").width() + "px"
    ),
      $(".titulo_thumbs.b1").css(
        "min-width",
        $(".titulo_thumbs.b1").width() + "px"
      ),
      $(".titulo_thumbs.c1").css(
        "min-width",
        $(".titulo_thumbs.c1").width() + "px"
      ),
      $(".titulo_thumbs.a2").css(
        "min-width",
        $(".titulo_thumbs.a2").width() + "px"
      ),
      $(".titulo_thumbs.b2").css(
        "min-width",
        $(".titulo_thumbs.b2").width() + "px"
      ),
      $(".titulo_thumbs.c2").css(
        "min-width",
        $(".titulo_thumbs.c2").width() + "px"
      ),
      $(".titulo_thumbs.a3").css(
        "min-width",
        $(".titulo_thumbs.a3").width() + "px"
      ),
      $(".titulo_thumbs.b3").css(
        "min-width",
        $(".titulo_thumbs.b3").width() + "px"
      ),
      $(".titulo_thumbs.c3").css(
        "min-width",
        $(".titulo_thumbs.c3").width() + "px"
      ),
      $(".titulo_thumbs.a4").css(
        "min-width",
        $(".titulo_thumbs.a4").width() + "px"
      ),
      $(".titulo_thumbs.b4").css(
        "min-width",
        $(".titulo_thumbs.b4").width() + "px"
      ),
      $(".titulo_thumbs.c4").css(
        "min-width",
        $(".titulo_thumbs.c4").width() + "px"
      ),
      $(".titulo_thumbs.a5").css(
        "min-width",
        $(".titulo_thumbs.a5").width() + "px"
      ),
      $(".titulo_thumbs.b5").css(
        "min-width",
        $(".titulo_thumbs.b5").width() + "px"
      ),
      $(".titulo_thumbs.c5").css(
        "min-width",
        $(".titulo_thumbs.c5").width() + "px"
      );
  }),
  $(window).resize(function () {
    1e3 < $(window).width() &&
      0 == interna &&
      ($(window).scrollTop(0),
      setTimeout(function () {
        $(".titulo_thumbs.a").removeAttr("style"),
          $(".titulo_thumbs.b").removeAttr("style"),
          $(".titulo_thumbs.c").removeAttr("style"),
          $(".titulo_thumbs.a1").css(
            "min-width",
            $(".titulo_thumbs.a1").width() + "px"
          ),
          $(".titulo_thumbs.b1").css(
            "min-width",
            $(".titulo_thumbs.b1").width() + "px"
          ),
          $(".titulo_thumbs.c1").css(
            "min-width",
            $(".titulo_thumbs.c1").width() + "px"
          ),
          $(".titulo_thumbs.a2").css(
            "min-width",
            $(".titulo_thumbs.a2").width() + "px"
          ),
          $(".titulo_thumbs.b2").css(
            "min-width",
            $(".titulo_thumbs.b2").width() + "px"
          ),
          $(".titulo_thumbs.c2").css(
            "min-width",
            $(".titulo_thumbs.c2").width() + "px"
          ),
          $(".titulo_thumbs.a3").css(
            "min-width",
            $(".titulo_thumbs.a3").width() + "px"
          ),
          $(".titulo_thumbs.b3").css(
            "min-width",
            $(".titulo_thumbs.b3").width() + "px"
          ),
          $(".titulo_thumbs.c3").css(
            "min-width",
            $(".titulo_thumbs.c3").width() + "px"
          ),
          $(".titulo_thumbs.a4").css(
            "min-width",
            $(".titulo_thumbs.a4").width() + "px"
          ),
          $(".titulo_thumbs.b4").css(
            "min-width",
            $(".titulo_thumbs.b4").width() + "px"
          ),
          $(".titulo_thumbs.c4").css(
            "min-width",
            $(".titulo_thumbs.c4").width() + "px"
          ),
          $(".titulo_thumbs.a5").css(
            "min-width",
            $(".titulo_thumbs.a5").width() + "px"
          ),
          $(".titulo_thumbs.b5").css(
            "min-width",
            $(".titulo_thumbs.b5").width() + "px"
          ),
          $(".titulo_thumbs.c5").css(
            "min-width",
            $(".titulo_thumbs.c5").width() + "px"
          );
        $(window).scrollTop(), $(document).height(), $(window).height();
      }, 300));
  }),
  $(window).bind("scroll", function () {
    if (1e3 < $(window).width() && 0 == interna)
      if (
        (100 * $(window).scrollTop()) /
          ($(document).height() - $(window).height()) <=
        50
      ) {
        var t =
          (200 * $(window).scrollTop()) /
          ($(document).height() - $(window).height());
        $(".titulo_thumbs").css("right", "auto"),
          $(".titulo_thumbs").css("left", "4.5rem"),
          $(".titulo_thumbs.a1").css("width", "calc(" + t + "% + 0px)"),
          $(".titulo_thumbs.b1").css("width", "calc(" + t + "% + 0px)"),
          $(".titulo_thumbs.c1").css("width", "calc(" + t + "% + 0px)"),
          $(".titulo_thumbs.a2").css("width", "calc(" + t + "% + 0px)"),
          $(".titulo_thumbs.b2").css("width", "calc(" + t + "% + 0px)"),
          $(".titulo_thumbs.c2").css("width", "calc(" + t + "% + 0px)"),
          $(".titulo_thumbs.a3").css("width", "calc(" + t + "% + 0px)"),
          $(".titulo_thumbs.b3").css("width", "calc(" + t + "% + 0px)"),
          $(".titulo_thumbs.c3").css("width", "calc(" + t + "% + 0px)"),
          $(".titulo_thumbs.a4").css("width", "calc(" + t + "% + 0px)"),
          $(".titulo_thumbs.b4").css("width", "calc(" + t + "% + 0px)"),
          $(".titulo_thumbs.c4").css("width", "calc(" + t + "% + 0px)"),
          $(".titulo_thumbs.a5").css("width", "calc(" + t + "% + 0px)"),
          $(".titulo_thumbs.b5").css("width", "calc(" + t + "% + 0px)"),
          $(".titulo_thumbs.c5").css("width", "calc(" + t + "% + 0px)");
      } else {
        t =
          (200 * $(window).scrollTop()) /
          ($(document).height() - $(window).height());
        $(".titulo_thumbs").css("right", "4.5rem"),
          $(".titulo_thumbs").css("left", "auto"),
          $(".titulo_thumbs.a1").css("width", "calc(200% - " + t + "% + 0px)"),
          $(".titulo_thumbs.b1").css("width", "calc(200% - " + t + "% + 0px)"),
          $(".titulo_thumbs.c1").css("width", "calc(200% - " + t + "% + 0px)"),
          $(".titulo_thumbs.a2").css("width", "calc(200% - " + t + "% + 0px)"),
          $(".titulo_thumbs.b2").css("width", "calc(200% - " + t + "% + 0px)"),
          $(".titulo_thumbs.c2").css("width", "calc(200% - " + t + "% + 0px)"),
          $(".titulo_thumbs.a3").css("width", "calc(200% - " + t + "% + 0px)"),
          $(".titulo_thumbs.b3").css("width", "calc(200% - " + t + "% + 0px)"),
          $(".titulo_thumbs.c3").css("width", "calc(200% - " + t + "% + 0px)"),
          $(".titulo_thumbs.a4").css("width", "calc(200% - " + t + "% + 0px)"),
          $(".titulo_thumbs.b4").css("width", "calc(200% - " + t + "% + 0px)"),
          $(".titulo_thumbs.c4").css("width", "calc(200% - " + t + "% + 0px)"),
          $(".titulo_thumbs.a5").css("width", "calc(200% - " + t + "% + 0px)"),
          $(".titulo_thumbs.b5").css("width", "calc(200% - " + t + "% + 0px)"),
          $(".titulo_thumbs.c5").css("width", "calc(200% - " + t + "% + 0px)");
      }
  });
var transicionvar = new RevealFx(document.querySelector("#transicion"));
function volverplanner() {
  $("#transicion").css("display", "block"),
    $("#planner").css("opacity", "0"),
    $("#planner").css("transform", "translateX(0rem)"),
    $("#menuplanner").css("transform", "translateX(0rem)"),
    $("#menuplanner").css("opacity", "0"),
    transicionvar.reveal({
      bgcolor: "black",
      delay: 0,
      onCover: function (t, e) {
        (t.style.opacity = 1),
          $("#planner").css("display", "none"),
          $("#falsocontenido").css(
            "height",
            2 * $("#home").width() +
              window.innerHeight -
              ($("#logo").height() / 4.5) * 3 +
              "px"
          ),
          $("#menuplanner").css("display", "none"),
          (window.interna = 0),
          $(window).scrollTop(0),
          $("#paneles_home").scrollLeft(0),
          $(window).width() < 1e3
            ? $("#paneles_home").animate(
                { scrollLeft: $("#intro").width() + $("#trabajos").width() },
                0
              )
            : $("html, body").animate(
                { scrollTop: $("#intro").width() + $("#trabajos").width() },
                0
              ),
          history.pushState("", document.title, window.location.pathname),
          setTimeout(function () {
            $("#menu").css("transform", "translateX(0rem)"),
              $("#paneles_home").css("transform", "translateX(0rem)"),
              $("#menu").css("opacity", "1"),
              $("#paneles_home").css("opacity", "1");
          }, 300),
          setTimeout(function () {
            $("#transicion").css("display", "none");
          }, 500);
      },
    });
}
function volverabout() {
  $("#transicion").css("display", "block"),
    $("#aboutinterna").css("opacity", "0"),
    $("#aboutinterna").css("transform", "translateX(0rem)"),
    $("#menuabout").css("transform", "translateX(0rem)"),
    $("#menuabout").css("opacity", "0"),
    transicionvar.reveal({
      bgcolor: "black",
      direction: "rl",
      delay: 0,
      onCover: function (t, e) {
        (t.style.opacity = 1),
          $("#aboutinterna").css("display", "none"),
          $("#falsocontenido").css(
            "height",
            2 * $("#home").width() +
              window.innerHeight -
              ($("#logo").height() / 4.5) * 3 +
              "px"
          ),
          $("#menuabout").css("display", "none"),
          (window.interna = 0),
          history.pushState("", document.title, window.location.pathname),
          setTimeout(function () {
            $("#menu").css("transform", "translateX(0rem)"),
              $("#paneles_home").css("transform", "translateX(0rem)"),
              $("#menu").css("opacity", "1"),
              $("#paneles_home").css("opacity", "1"),
              $(window).scrollTop(0),
              $("#paneles_home").scrollLeft(0);
          }, 300),
          setTimeout(function () {
            $("#transicion").css("display", "none");
          }, 500);
      },
    });
}
(trigger1 = document.getElementById("btn_sabermas")),
  trigger1.addEventListener("click", function () {
    gtag("event", "About", { event_category: "About" }),
      $("#transicion").css("display", "block"),
      1e3 < $(window).width()
        ? ($("#menu").css("transform", "translateX(6rem)"),
          $("#paneles_home").css("transform", "translateX(6rem)"))
        : ($("#menu").css("transform", "translateX(3rem)"),
          $("#paneles_home").css("transform", "translateX(3rem)")),
      $("#menu").css("opacity", "0"),
      $("#paneles_home").css("opacity", "0"),
      transicionvar.reveal({
        bgcolor: "black",
        delay: 0,
        onCover: function (t, e) {
          (t.style.opacity = 1),
            (window.interna = 2),
            $("#aboutinterna").css("display", "block"),
            $("#aboutinterna").css("opacity", "1"),
            $("#menuabout").css("display", "block"),
            $("#menuabout").css("opacity", "1"),
            $(window).scrollTop(0),
            $("#paneles_home").scrollLeft(0),
            setTimeout(function () {
              1e3 < $(window).width()
                ? ($("#aboutinterna").css("transform", "translateX(6rem)"),
                  $("#menuabout").css("transform", "translateX(6rem)"))
                : ($("#aboutinterna").css("transform", "translateX(3rem)"),
                  $("#menuabout").css("transform", "translateX(3rem)"));
            }, 100),
            $("#falsocontenido").css("height", "0"),
            setTimeout(function () {
              $("#transicion").css("display", "none");
            }, 1e3);
        },
      });
  }),
  (trigger2 = document.getElementById("volver_about1")),
  trigger2.addEventListener("click", function () {
    $("#transicion").css("display", "block"),
      $("#aboutinterna").css("opacity", "0"),
      $("#aboutinterna").css("transform", "translateX(0rem)"),
      $("#menuabout").css("transform", "translateX(0rem)"),
      $("#menuabout").css("opacity", "0"),
      transicionvar.reveal({
        bgcolor: "black",
        direction: "rl",
        delay: 0,
        onCover: function (t, e) {
          (t.style.opacity = 1),
            $("#aboutinterna").css("display", "none"),
            $("#falsocontenido").css(
              "height",
              2 * $("#home").width() +
                window.innerHeight -
                ($("#logo").height() / 4.5) * 3 +
                "px"
            ),
            $("#menuabout").css("display", "none"),
            (window.interna = 0),
            history.pushState("", document.title, window.location.pathname),
            setTimeout(function () {
              $("#menu").css("transform", "translateX(0rem)"),
                $("#paneles_home").css("transform", "translateX(0rem)"),
                $("#menu").css("opacity", "1"),
                $("#paneles_home").css("opacity", "1"),
                $(window).scrollTop(0),
                $("#paneles_home").scrollLeft(0);
            }, 300),
            setTimeout(function () {
              $("#transicion").css("display", "none"),
                $(window).width() < 1e3
                  ? $("#paneles_home").animate(
                      { scrollLeft: $("#intro").width() },
                      1e3
                    )
                  : $("html, body").animate(
                      { scrollTop: $("#intro").width() },
                      1e3
                    );
            }, 500);
        },
      });
  }),
  (trigger2b = document.getElementById("volver_about2")),
  trigger2b.addEventListener("click", function () {
    $("#transicion").css("display", "block"),
      $("#aboutinterna").css("opacity", "0"),
      $("#aboutinterna").css("transform", "translateX(0rem)"),
      $("#menuabout").css("transform", "translateX(0rem)"),
      $("#menuabout").css("opacity", "0"),
      transicionvar.reveal({
        bgcolor: "black",
        direction: "rl",
        delay: 0,
        onCover: function (t, e) {
          (t.style.opacity = 1),
            $("#aboutinterna").css("display", "none"),
            $("#falsocontenido").css(
              "height",
              2 * $("#home").width() +
                window.innerHeight -
                ($("#logo").height() / 4.5) * 3 +
                "px"
            ),
            $("#menuabout").css("display", "none"),
            (window.interna = 0),
            history.pushState("", document.title, window.location.pathname),
            setTimeout(function () {
              $("#menu").css("transform", "translateX(0rem)"),
                $("#paneles_home").css("transform", "translateX(0rem)"),
                $("#menu").css("opacity", "1"),
                $("#paneles_home").css("opacity", "1"),
                $(window).scrollTop(0),
                $("#paneles_home").scrollLeft(0);
            }, 300),
            setTimeout(function () {
              $("#transicion").css("display", "none"),
                $(window).width() < 1e3
                  ? $("#paneles_home").animate(
                      {
                        scrollLeft:
                          $("#intro").width() + $("#trabajos").width(),
                      },
                      1e3
                    )
                  : $("html, body").animate(
                      {
                        scrollTop: $("#intro").width() + $("#trabajos").width(),
                      },
                      1e3
                    );
            }, 500);
        },
      });
  }),
  (trigger2c = document.getElementById("volver_about0")),
  trigger2c.addEventListener("click", function () {
    $("#transicion").css("display", "block"),
      $("#aboutinterna").css("opacity", "0"),
      $("#aboutinterna").css("transform", "translateX(0rem)"),
      $("#menuabout").css("transform", "translateX(0rem)"),
      $("#menuabout").css("opacity", "0"),
      transicionvar.reveal({
        bgcolor: "black",
        direction: "rl",
        delay: 0,
        onCover: function (t, e) {
          (t.style.opacity = 1),
            $("#aboutinterna").css("display", "none"),
            $("#falsocontenido").css(
              "height",
              2 * $("#home").width() +
                window.innerHeight -
                ($("#logo").height() / 4.5) * 3 +
                "px"
            ),
            $("#menuabout").css("display", "none"),
            (window.interna = 0),
            history.pushState("", document.title, window.location.pathname),
            setTimeout(function () {
              $("#menu").css("transform", "translateX(0rem)"),
                $("#paneles_home").css("transform", "translateX(0rem)"),
                $("#menu").css("opacity", "1"),
                $("#paneles_home").css("opacity", "1"),
                $(window).scrollTop(0),
                $("#paneles_home").scrollLeft(0);
            }, 300),
            setTimeout(function () {
              $("#transicion").css("display", "none"),
                $(window).width() < 1e3
                  ? $("#paneles_home").animate({ scrollLeft: 0 }, 1e3)
                  : $("html, body").animate({ scrollLeft: 0 }, 1e3);
            }, 500);
        },
      });
  }),
  (trigger3 = document.getElementById("btn_planner")),
  trigger3.addEventListener("click", function () {
    gtag("event", "Planner", { event_category: "Planner" }),
      $("#transicion").css("display", "block"),
      1e3 < $(window).width()
        ? ($("#menu").css("transform", "translateX(-6rem)"),
          $("#paneles_home").css("transform", "translateX(-6rem)"))
        : ($("#menu").css("transform", "translateX(-3rem)"),
          $("#paneles_home").css("transform", "translateX(-3rem)")),
      $("#menu").css("opacity", "0"),
      $("#paneles_home").css("opacity", "0"),
      transicionvar.reveal({
        bgcolor: "black",
        delay: 0,
        direction: "rl",
        onCover: function (t, e) {
          (t.style.opacity = 1),
            $("#planner").css("display", "block"),
            $("#planner").css("opacity", "1"),
            $("#menuplanner").css("display", "block"),
            $("#menuplanner").css("opacity", "1"),
            (window.interna = 3),
            setTimeout(function () {
              1e3 < $(window).width()
                ? ($("#planner").css("transform", "translateX(-6rem)"),
                  $("#menuplanner").css("transform", "translateX(-6rem)"))
                : ($("#planner").css("transform", "translateX(-3rem)"),
                  $("#menuplanner").css("transform", "translateX(-3rem)"));
            }, 100),
            $(window).scrollTop(0),
            $("#falsocontenido").css("height", "0"),
            setTimeout(function () {
              $("#transicion").css("display", "none");
            }, 1e3);
        },
      });
  }),
  (trigger4 = document.getElementById("volver_planner1")),
  trigger4.addEventListener("click", function () {
    $("#transicion").css("display", "block"),
      $("#planner").css("opacity", "0"),
      $("#planner").css("transform", "translateX(0rem)"),
      $("#menuplanner").css("transform", "translateX(0rem)"),
      $("#menuplanner").css("opacity", "0"),
      transicionvar.reveal({
        bgcolor: "black",
        delay: 0,
        onCover: function (t, e) {
          (t.style.opacity = 1),
            $("#planner").css("display", "none"),
            $("#falsocontenido").css(
              "height",
              2 * $("#home").width() +
                window.innerHeight -
                ($("#logo").height() / 4.5) * 3 +
                "px"
            ),
            $("#menuplanner").css("display", "none"),
            (window.interna = 0),
            $(window).scrollTop(0),
            $("#paneles_home").scrollLeft(0),
            $(window).width() < 1e3
              ? $("#paneles_home").animate(
                  { scrollLeft: $("#intro").width() + $("#trabajos").width() },
                  0
                )
              : $("html, body").animate(
                  { scrollTop: $("#intro").width() + $("#trabajos").width() },
                  0
                ),
            history.pushState("", document.title, window.location.pathname),
            setTimeout(function () {
              $("#menu").css("transform", "translateX(0rem)"),
                $("#paneles_home").css("transform", "translateX(0rem)"),
                $("#menu").css("opacity", "1"),
                $("#paneles_home").css("opacity", "1");
            }, 300),
            setTimeout(function () {
              $("#transicion").css("display", "none"),
                $(window).width() < 1e3
                  ? $("#paneles_home").animate({ scrollLeft: 0 }, 1e3)
                  : $("html, body").animate({ scrollTop: 0 }, 1e3);
            }, 500);
        },
      });
  }),
  (trigger4b = document.getElementById("volver_planner0")),
  trigger4b.addEventListener("click", function () {
    $("#transicion").css("display", "block"),
      $("#planner").css("opacity", "0"),
      $("#planner").css("transform", "translateX(0rem)"),
      $("#menuplanner").css("transform", "translateX(0rem)"),
      $("#menuplanner").css("opacity", "0"),
      transicionvar.reveal({
        bgcolor: "black",
        delay: 0,
        onCover: function (t, e) {
          (t.style.opacity = 1),
            $("#planner").css("display", "none"),
            $("#falsocontenido").css(
              "height",
              2 * $("#home").width() +
                window.innerHeight -
                ($("#logo").height() / 4.5) * 3 +
                "px"
            ),
            $("#menuplanner").css("display", "none"),
            (window.interna = 0),
            $(window).scrollTop(0),
            $("#paneles_home").scrollLeft(0),
            $(window).width() < 1e3
              ? $("#paneles_home").animate(
                  { scrollLeft: $("#intro").width() + $("#trabajos").width() },
                  0
                )
              : $("html, body").animate(
                  { scrollTop: $("#intro").width() + $("#trabajos").width() },
                  0
                ),
            history.pushState("", document.title, window.location.pathname),
            setTimeout(function () {
              $("#menu").css("transform", "translateX(0rem)"),
                $("#paneles_home").css("transform", "translateX(0rem)"),
                $("#menu").css("opacity", "1"),
                $("#paneles_home").css("opacity", "1");
            }, 300),
            setTimeout(function () {
              $("#transicion").css("display", "none"),
                $(window).width() < 1e3
                  ? $("#paneles_home").animate({ scrollLeft: 0 }, 1e3)
                  : $("html, body").animate({ scrollTop: 0 }, 1e3);
            }, 500);
        },
      });
  }),
  (trigger5 = document.getElementById("volver_planner2")),
  trigger5.addEventListener("click", function () {
    $("#transicion").css("display", "block"),
      $("#planner").css("opacity", "0"),
      $("#planner").css("transform", "translateX(0rem)"),
      $("#menuplanner").css("transform", "translateX(0rem)"),
      $("#menuplanner").css("opacity", "0"),
      transicionvar.reveal({
        bgcolor: "black",
        delay: 0,
        onCover: function (t, e) {
          (t.style.opacity = 1),
            $("#planner").css("display", "none"),
            $("#falsocontenido").css(
              "height",
              2 * $("#home").width() +
                window.innerHeight -
                ($("#logo").height() / 4.5) * 3 +
                "px"
            ),
            $("#menuplanner").css("display", "none"),
            (window.interna = 0),
            $(window).scrollTop(0),
            $("#paneles_home").scrollLeft(0),
            $(window).width() < 1e3
              ? $("#paneles_home").animate(
                  { scrollLeft: $("#intro").width() + $("#trabajos").width() },
                  0
                )
              : $("html, body").animate(
                  { scrollTop: $("#intro").width() + $("#trabajos").width() },
                  0
                ),
            history.pushState("", document.title, window.location.pathname),
            setTimeout(function () {
              $("#menu").css("transform", "translateX(0rem)"),
                $("#paneles_home").css("transform", "translateX(0rem)"),
                $("#menu").css("opacity", "1"),
                $("#paneles_home").css("opacity", "1");
            }, 300),
            setTimeout(function () {
              $("#transicion").css("display", "none"),
                $(window).width() < 1e3
                  ? $("#paneles_home").animate(
                      {
                        scrollLeft:
                          $("#intro").width() +
                          $("#trabajos").width() -
                          $(window).width(),
                      },
                      1e3
                    )
                  : $("html, body").animate(
                      {
                        scrollTop:
                          $("#intro").width() +
                          $("#trabajos").width() -
                          $(window).width(),
                      },
                      1e3
                    );
            }, 500);
        },
      });
  }),
  $(window).on("hashchange", function () {
    2 == window.interna &&
      "" == window.location.hash &&
      ($(window).scrollTop(window.tempScrollTop), volverabout()),
      3 == window.interna &&
        "" == window.location.hash &&
        ($(window).scrollTop(window.tempScrollTop), volverplanner()),
      1 == window.interna &&
        "" == window.location.hash &&
        ($(window).scrollTop(window.tempScrollTop),
        $("html, body").animate({ scrollTop: 0 }, 500),
        setTimeout(function () {
          $(".interna_headernext .titulo_thumbs").css({ opacity: "0" }),
            $("#ocultable").css({ opacity: "0" }),
            $(".hover_black").css({ opacity: ".1" });
        }, 250),
        setTimeout(function () {
          $("#content").load("index.html #content"),
            $("#falsocontenido").css(
              "height",
              2 * $("#home").width() + window.innerHeight + "px"
            ),
            1e3 < $(window).width()
              ? $(window).scrollTop(window.oldScrollPos)
              : $("#paneles_home").scrollLeft(window.oldScrollPosM),
            $(".trabajo").removeAttr("style"),
            $("#paneles_home").removeAttr("style"),
            setTimeout(function () {
              $(".trabajo_cont").removeAttr("style");
            }, 500),
            $("#intro").css({ opacity: "1" }),
            $("#contacto").css({ opacity: "1" }),
            $("#trabajo1").css({ opacity: "1" }),
            $("#trabajo2").css({ opacity: "1" }),
            $("#trabajo3").css({ opacity: "1" }),
            $("#trabajo4").css({ opacity: "1" }),
            $("#trabajo5").css({ opacity: "1" }),
            setTimeout(function () {
              $(".grupotitulo").css({ opacity: "1" }),
                $(".thumbs_titulo").css({ opacity: "0" }),
                $(".hover_black").removeAttr("style");
            }, 1e3),
            (window.interna = 0),
            $(window).scrollTop() < 0.3 * $("#intro").width()
              ? ($(".titulo_thumbs").css("opacity", "0"),
                $("#link_studio").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                ))
              : $(window).scrollTop() >
                $("#falsocontenido").height() -
                  window.innerHeight -
                  $("#contacto").height() / 2
              ? ($(".titulo_thumbs").css("opacity", "0"),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ))
              : ($(".titulo_thumbs").css("opacity", "1"),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                )),
            $("#paneles_home").scrollLeft() < $("#intro").width() / 2
              ? ($(".titulo_thumbs").css("opacity", "0"),
                $("#link_studio").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                ))
              : $("#paneles_home").scrollLeft() >
                $("#intro").width() +
                  $("#trabajos").width() -
                  $("#contacto").width()
              ? ($(".titulo_thumbs").css("opacity", "0"),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ))
              : ($(".titulo_thumbs").css("opacity", "1"),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css(
                  "border-bottom",
                  "2px solid rgba(0, 0, 0, 0.2)"
                ),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                )),
            20 < $(window).scrollTop()
              ? $("#logo1").css("opacity", "0 ")
              : $("#logo1").css("opacity", "1 "),
            50 < $("#paneles_home").scrollLeft()
              ? $("#logo1").css("opacity", "0")
              : $("#logo1").css("opacity", "1"),
            1e3 < $(window).width() &&
              setTimeout(function () {
                if (
                  (100 * $(window).scrollTop()) /
                    ($(document).height() - $(window).height()) <=
                  50
                ) {
                  var t =
                    (200 * $(window).scrollTop()) /
                    ($(document).height() - $(window).height());
                  $(".titulo_thumbs").css("right", "auto"),
                    $(".titulo_thumbs").css("left", "4.5rem"),
                    $(".titulo_thumbs.a1").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b1").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c1").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a2").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b2").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c2").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a3").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b3").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c3").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a4").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b4").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c4").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a5").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b5").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c5").css(
                      "width",
                      "calc(" + t + "% + 0px)"
                    );
                } else {
                  t =
                    (200 * $(window).scrollTop()) /
                    ($(document).height() - $(window).height());
                  $(".titulo_thumbs").css("right", "4.5rem"),
                    $(".titulo_thumbs").css("left", "auto"),
                    $(".titulo_thumbs.a1").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b1").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c1").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a2").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b2").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c2").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a3").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b3").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c3").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a4").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b4").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c4").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.a5").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.b5").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    ),
                    $(".titulo_thumbs.c5").css(
                      "width",
                      "calc(200% - " + t + "% + 0px)"
                    );
                }
              }, 1e3),
            setTimeout(function () {
              $(window).width() < 1e3 &&
                1 == window.ultimo &&
                $("#paneles_home").animate(
                  {
                    scrollLeft:
                      $("#paneles_home").scrollLeft() -
                      ($("#logo2").height() / 4.5) * 6,
                  },
                  250
                ),
                (window.ultimo = !1);
            }, 0);
        }, 1e3)),
      "#1" == window.location.hash &&
        (gtag("event", "1", { event_category: "Click trabajos" }),
        (window.interna = 1),
        
        $("#trabajo_padding").css({"height", "0px"}),
        $("#logo1").css("opacity", "0"),
        $("#intro").css({ opacity: "0" }),
        $("#contacto").css({ opacity: "0" }),
        $("#trabajo1").css({ opacity: "1" }),
        $("#trabajo2").css({ opacity: "0" }),
        $("#trabajo3").css({ opacity: "0" }),
        $("#trabajo4").css({ opacity: "0" }),
        $("#trabajo5").css({ opacity: "0" }),
        $(".grupotitulo").css({ opacity: "0" }),
        $(".hover_black").css({ opacity: ".1" }),
        $(window).width() < 1e3
          ? $("#paneles_home").animate(
              {
                scrollLeft:
                  ($("#logo2").height() / 4.5) * 3 +
                  $("#intro").width() +
                  0 * $("#trabajo1").width() -
                  ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2),
              },
              500
            )
          : $("html, body").animate(
              {
                scrollTop:
                  $("#intro").width() +
                  0 * $("#trabajo1").width() -
                  ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2),
              },
              500
            ),
        setTimeout(function () {
          (window.oldScrollPos = $(window).scrollTop()),
            (window.oldScrollPosM = $("#paneles_home").scrollLeft()),
            $(window).on("scroll.scrolldisabler", function (t) {
              $(window).scrollTop(window.oldScrollPos), t.preventDefault();
            });
        }, 1e3),
        setTimeout(function () {
          var t = 0 * $("#trabajo1").width();
          1e3 < $(window).width()
            ? (positionscroll = -$("#intro").width() + window.pageYOffset - t)
            : (positionscroll = 0 + ($("#logo2").height() / 4.5) * 3),
            (window.positionvar = positionscroll),
            1e3 < $(window).width()
              ? $("#trabajo1").css({
                  width: $("#home").width() + "px",
                  "-webkit-transform":
                    "translate(" + positionscroll + "px , 0)",
                })
              : $("#trabajo1").css({
                  width: $("#home").width() + "px",
                  "-webkit-transform":
                    "translate(calc(" + positionscroll + "px - 3rem) , 0)",
                }),
            setTimeout(function () {
              $("#trabajo1 .trabajo").css({ height: "30rem" });
            }, 500);
        }, 750),
        setTimeout(function () {
          $("#content_wrapper").load(
            "works/trabajos.html #content",
            function () {
              $("#falsocontenido").css("height", "0"),
                $("#paneles_home").css("height", "0"),
                $(window).off("scroll.scrolldisabler"),
                $(window).scrollTop(0),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                ),
                $(".titulo_thumbs").css({ opacity: "1" }),
                $(".hover_black").removeAttr("style"),
                $("#header_interna .hover_black").css({ opacity: ".1" }),
                setTimeout(function () {
                  $("#ocultable").css("opacity", "1");
                }, 100);
            }
          );
        }, 2e3)),
      "#2" == window.location.hash &&
        (gtag("event", "2", { event_category: "Click trabajos" }),
        (window.interna = 1),
        $("#trabajo_padding").css({"height", "0px"}),

        $("#logo1").css("opacity", "0"),
        $("#intro").css({ opacity: "0" }),
        $("#contacto").css({ opacity: "0" }),
        $("#trabajo1").css({ opacity: "0" }),
        $("#trabajo2").css({ opacity: "1" }),
        $("#trabajo3").css({ opacity: "0" }),
        $("#trabajo4").css({ opacity: "0" }),
        $("#trabajo5").css({ opacity: "0" }),
        $(".grupotitulo").css({ opacity: "0" }),
        $(".hover_black").css({ opacity: ".1" }),
        $(window).width() < 1e3
          ? $("#paneles_home").animate(
              {
                scrollLeft:
                  ($("#logo2").height() / 4.5) * 3 +
                  $("#intro").width() +
                  1 * $("#trabajo1").width() -
                  ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2),
              },
              500
            )
          : $("html, body").animate(
              {
                scrollTop:
                  $("#intro").width() +
                  1 * $("#trabajo1").width() -
                  ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2),
              },
              500
            ),
        setTimeout(function () {
          (window.oldScrollPos = $(window).scrollTop()),
            (window.oldScrollPosM = $("#paneles_home").scrollLeft()),
            $(window).on("scroll.scrolldisabler", function (t) {
              $(window).scrollTop(window.oldScrollPos), t.preventDefault();
            });
        }, 1e3),
        setTimeout(function () {
          var t = 1 * $("#trabajo2").width();
          1e3 < $(window).width()
            ? (positionscroll = -$("#intro").width() + window.pageYOffset - t)
            : (positionscroll = 0 + ($("#logo2").height() / 4.5) * 3),
            (window.positionvar = positionscroll),
            1e3 < $(window).width()
              ? $("#trabajo2").css({
                  width: $("#home").width() + "px",
                  "-webkit-transform":
                    "translate(" + positionscroll + "px , 0)",
                })
              : $("#trabajo2").css({
                  width: $("#home").width() + "px",
                  "-webkit-transform":
                    "translate(calc(" + positionscroll + "px - 3rem) , 0)",
                }),
            setTimeout(function () {
              $("#trabajo2 .trabajo").css({ height: "30rem" });
            }, 500);
        }, 750),
        setTimeout(function () {
          $("#content_wrapper").load(
            "works/trabajos2.html #content",
            function () {
              $("#falsocontenido").css("height", "0"),
                $("#paneles_home").css("height", "0"),
                $(window).off("scroll.scrolldisabler"),
                $(window).scrollTop(0),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                ),
                $(".titulo_thumbs").css({ opacity: "1" }),
                $(".hover_black").removeAttr("style"),
                $("#header_interna .hover_black").css({ opacity: ".1" }),
                setTimeout(function () {
                  $("#ocultable").css("opacity", "1");
                }, 100);
            }
          );
        }, 2e3)),
      "#3" == window.location.hash &&
        (gtag("event", "3", { event_category: "Click trabajos" }),
        (window.interna = 1),
        $("#trabajo_padding").css("height", "0"),

        $("#logo1").css("opacity", "0"),
        $("#intro").css({ opacity: "0" }),
        $("#contacto").css({ opacity: "0" }),
        $("#trabajo1").css({ opacity: "0" }),
        $("#trabajo2").css({ opacity: "0" }),
        $("#trabajo3").css({ opacity: "1" }),
        $("#trabajo4").css({ opacity: "0" }),
        $("#trabajo5").css({ opacity: "0" }),
        $(".grupotitulo").css({ opacity: "0" }),
        $(".hover_black").css({ opacity: ".1" }),
        $(window).width() < 1e3
          ? $("#paneles_home").animate(
              {
                scrollLeft:
                  ($("#logo2").height() / 4.5) * 3 +
                  $("#intro").width() +
                  2 * $("#trabajo1").width() -
                  ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2),
              },
              500
            )
          : $("html, body").animate(
              {
                scrollTop:
                  $("#intro").width() +
                  2 * $("#trabajo1").width() -
                  ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2),
              },
              500
            ),
        setTimeout(function () {
          (window.oldScrollPos = $(window).scrollTop()),
            (window.oldScrollPosM = $("#paneles_home").scrollLeft()),
            $(window).on("scroll.scrolldisabler", function (t) {
              $(window).scrollTop(window.oldScrollPos), t.preventDefault();
            });
        }, 1e3),
        setTimeout(function () {
          var t = 2 * $("#trabajo3").width();
          1e3 < $(window).width()
            ? (positionscroll = -$("#intro").width() + window.pageYOffset - t)
            : (positionscroll = 0 + ($("#logo2").height() / 4.5) * 3),
            (window.positionvar = positionscroll),
            1e3 < $(window).width()
              ? $("#trabajo3").css({
                  width: $("#home").width() + "px",
                  "-webkit-transform":
                    "translate(" + positionscroll + "px , 0)",
                })
              : $("#trabajo3").css({
                  width: $("#home").width() + "px",
                  "-webkit-transform":
                    "translate(calc(" + positionscroll + "px - 3rem) , 0)",
                }),
            setTimeout(function () {
              $("#trabajo3 .trabajo").css({ height: "30rem" });
            }, 500);
        }, 750),
        setTimeout(function () {
          $("#content_wrapper").load(
            "works/trabajos3.html #content",
            function () {
              $("#falsocontenido").css("height", "0"),
                $("#paneles_home").css("height", "0"),
                $(window).off("scroll.scrolldisabler"),
                $(window).scrollTop(0),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                ),
                $(".titulo_thumbs").css({ opacity: "1" }),
                $(".hover_black").removeAttr("style"),
                $("#header_interna .hover_black").css({ opacity: ".1" }),
                setTimeout(function () {
                  $("#ocultable").css("opacity", "1");
                }, 100);
            }
          );
        }, 2e3)),
      "#4" == window.location.hash &&
        (gtag("event", "4", { event_category: "Click trabajos" }),
        (window.interna = 1),
        $("#trabajo_padding").css("height", "0"),

        $("#logo1").css("opacity", "0"),
        $("#intro").css({ opacity: "0" }),
        $("#contacto").css({ opacity: "0" }),
        $("#trabajo1").css({ opacity: "0" }),
        $("#trabajo2").css({ opacity: "0" }),
        $("#trabajo3").css({ opacity: "0" }),
        $("#trabajo4").css({ opacity: "1" }),
        $("#trabajo5").css({ opacity: "0" }),
        $(".grupotitulo").css({ opacity: "0" }),
        $(".hover_black").css({ opacity: ".1" }),
        $(window).width() < 1e3
          ? $("#paneles_home").animate(
              {
                scrollLeft:
                  ($("#logo2").height() / 4.5) * 3 +
                  $("#intro").width() +
                  3 * $("#trabajo1").width() -
                  ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2),
              },
              500
            )
          : $("html, body").animate(
              {
                scrollTop:
                  $("#intro").width() +
                  3 * $("#trabajo1").width() -
                  ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2),
              },
              500
            ),
        setTimeout(function () {
          (window.oldScrollPos = $(window).scrollTop()),
            (window.oldScrollPosM = $("#paneles_home").scrollLeft()),
            $(window).on("scroll.scrolldisabler", function (t) {
              $(window).scrollTop(window.oldScrollPos), t.preventDefault();
            });
        }, 1e3),
        setTimeout(function () {
          var t = 3 * $("#trabajo4").width();
          1e3 < $(window).width()
            ? (positionscroll = -$("#intro").width() + window.pageYOffset - t)
            : (positionscroll = 0 + ($("#logo2").height() / 4.5) * 3),
            (window.positionvar = positionscroll),
            1e3 < $(window).width()
              ? $("#trabajo4").css({
                  width: $("#home").width() + "px",
                  "-webkit-transform":
                    "translate(" + positionscroll + "px , 0)",
                })
              : $("#trabajo4").css({
                  width: $("#home").width() + "px",
                  "-webkit-transform":
                    "translate(calc(" + positionscroll + "px - 3rem) , 0)",
                }),
            setTimeout(function () {
              $("#trabajo4 .trabajo").css({ height: "30rem" });
            }, 500);
        }, 750),
        setTimeout(function () {
          $("#content_wrapper").load(
            "works/trabajos4.html #content",
            function () {
              $("#falsocontenido").css("height", "0"),
                $("#paneles_home").css("height", "0"),
                $(window).off("scroll.scrolldisabler"),
                $(window).scrollTop(0),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                ),
                $(".titulo_thumbs").css({ opacity: "1" }),
                $(".hover_black").removeAttr("style"),
                $("#header_interna .hover_black").css({ opacity: ".1" }),
                setTimeout(function () {
                  $("#ocultable").css("opacity", "1");
                }, 100);
            }
          );
        }, 2e3)),
      "#5" == window.location.hash &&
        (gtag("event", "5", { event_category: "Click trabajos" }),
        (window.ultimo = !0),
        (window.interna = 1),
        $("#trabajo_padding").css("height", "0"),

        $("#logo1").css("opacity", "0"),
        $("#intro").css({ opacity: "0" }),
        $("#contacto").css({ opacity: "0" }),
        $("#trabajo1").css({ opacity: "0" }),
        $("#trabajo2").css({ opacity: "0" }),
        $("#trabajo3").css({ opacity: "0" }),
        $("#trabajo4").css({ opacity: "0" }),
        $("#trabajo5").css({ opacity: "1" }),
        $(".grupotitulo").css({ opacity: "0" }),
        $(".hover_black").css({ opacity: ".1" }),
        $(window).width() < 1e3
          ? $("#paneles_home").animate(
              {
                scrollLeft:
                  ($("#logo2").height() / 4.5) * 3 +
                  $("#intro").width() +
                  4 * $("#trabajo1").width() -
                  ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2),
              },
              500
            )
          : $("html, body").animate(
              {
                scrollTop:
                  $("#intro").width() +
                  4 * $("#trabajo1").width() -
                  ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2),
              },
              500
            ),
        setTimeout(function () {
          (window.oldScrollPos = $(window).scrollTop()),
            (window.oldScrollPosM = $("#paneles_home").scrollLeft()),
            $(window).on("scroll.scrolldisabler", function (t) {
              $(window).scrollTop(window.oldScrollPos), t.preventDefault();
            });
        }, 1e3),
        setTimeout(function () {
          var t = 4 * $("#trabajo5").width();
          1e3 < $(window).width()
            ? (positionscroll = -$("#intro").width() + window.pageYOffset - t)
            : (positionscroll = 0 + ($("#logo2").height() / 4.5) * 3),
            (window.positionvar = positionscroll),
            1e3 < $(window).width()
              ? $("#trabajo5").css({
                  width: $("#home").width() + "px",
                  "-webkit-transform":
                    "translate(" + positionscroll + "px , 0)",
                })
              : $("#trabajo5").css({
                  width: $("#home").width() + "px",
                  "-webkit-transform":
                    "translate(calc(" + positionscroll + "px - 3rem) , 0)",
                }),
            setTimeout(function () {
              $("#trabajo5 .trabajo").css({ height: "30rem" });
            }, 500);
        }, 750),
        setTimeout(function () {
          $("#content_wrapper").load(
            "works/trabajos5.html #content",
            function () {
              $("#falsocontenido").css("height", "0"),
                $("#paneles_home").css("height", "0"),
                $(window).off("scroll.scrolldisabler"),
                $(window).scrollTop(0),
                $("#link_studio").css("border-bottom", "2px solid transparent"),
                $("#link_works").css("border-bottom", "2px solid transparent"),
                $("#link_contact").css(
                  "border-bottom",
                  "2px solid transparent"
                ),
                $(".titulo_thumbs").css({ opacity: "1" }),
                $(".hover_black").removeAttr("style"),
                $("#header_interna .hover_black").css({ opacity: ".1" }),
                setTimeout(function () {
                  $("#ocultable").css("opacity", "1");
                }, 100);
            }
          );
        }, 2e3));
  }),
  $(document).ready(function () {
    (window.oldScrollPos1 =
      $("#intro").width() +
      0 * $("#trabajo1").width() -
      ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2)),
      (window.oldScrollPosM1 =
        ($("#logo2").height() / 4.5) * 3 +
        $("#intro").width() +
        0 * $("#trabajo1").width() -
        ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2)),
      (window.oldScrollPos2 =
        $("#intro").width() +
        1 * $("#trabajo1").width() -
        ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2)),
      (window.oldScrollPosM2 =
        ($("#logo2").height() / 4.5) * 3 +
        $("#intro").width() +
        1 * $("#trabajo1").width() -
        ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2)),
      (window.oldScrollPos3 =
        $("#intro").width() +
        2 * $("#trabajo1").width() -
        ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2)),
      (window.oldScrollPosM3 =
        ($("#logo2").height() / 4.5) * 3 +
        $("#intro").width() +
        2 * $("#trabajo1").width() -
        ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2)),
      (window.oldScrollPos4 =
        $("#intro").width() +
        3 * $("#trabajo1").width() -
        ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2)),
      (window.oldScrollPosM4 =
        ($("#logo2").height() / 4.5) * 3 +
        $("#intro").width() +
        3 * $("#trabajo1").width() -
        ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2)),
      (window.oldScrollPos5 =
        $("#intro").width() +
        4 * $("#trabajo1").width() -
        ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2)),
      (window.oldScrollPosM5 =
        ($("#logo2").height() / 4.5) * 3 +
        $("#intro").width() +
        4 * $("#trabajo1").width() -
        ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2));
  }),
  $(window).resize(function () {
    0 == window.interna &&
      setTimeout(function () {
        (window.oldScrollPos1 =
          $("#intro").width() +
          0 * $("#trabajo1").width() -
          ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2)),
          (window.oldScrollPosM1 =
            ($("#logo2").height() / 4.5) * 3 +
            $("#intro").width() +
            0 * $("#trabajo1").width() -
            ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2)),
          (window.oldScrollPos2 =
            $("#intro").width() +
            1 * $("#trabajo1").width() -
            ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2)),
          (window.oldScrollPosM2 =
            ($("#logo2").height() / 4.5) * 3 +
            $("#intro").width() +
            1 * $("#trabajo1").width() -
            ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2)),
          (window.oldScrollPos3 =
            $("#intro").width() +
            2 * $("#trabajo1").width() -
            ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2)),
          (window.oldScrollPosM3 =
            ($("#logo2").height() / 4.5) * 3 +
            $("#intro").width() +
            2 * $("#trabajo1").width() -
            ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2)),
          (window.oldScrollPos4 =
            $("#intro").width() +
            3 * $("#trabajo1").width() -
            ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2)),
          (window.oldScrollPosM4 =
            ($("#logo2").height() / 4.5) * 3 +
            $("#intro").width() +
            3 * $("#trabajo1").width() -
            ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2)),
          (window.oldScrollPos5 =
            $("#intro").width() +
            4 * $("#trabajo1").width() -
            ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2)),
          (window.oldScrollPosM5 =
            ($("#logo2").height() / 4.5) * 3 +
            $("#intro").width() +
            4 * $("#trabajo1").width() -
            ($("#paneles_home").width() / 2 - $("#trabajo1").width() / 2));
      }, 1e3);
  }),
  $("#content_wrapper").on("click", "#next_interna1, #next_link1", function () {
    $("html, body").animate({ scrollTop: document.body.scrollHeight }, 800),
      $(".hover_black").css({ opacity: ".1" }),
      $(".trabajo_cont").removeAttr("style"),
      $(".trabajo").removeAttr("style"),
      $("#paneles_home").removeAttr("style"),
      $("#intro").css({ opacity: "0" }),
      $("#contacto").css({ opacity: "0" }),
      $("#trabajo1").css({ opacity: "0" }),
      $("#trabajo2").css({ opacity: "1" }),
      $("#trabajo3").css({ opacity: "0" }),
      $("#trabajo4").css({ opacity: "0" }),
      $("#trabajo5").css({ opacity: "0" }),
      $(".interna_headernext .titulo_thumbs").css({ opacity: "0" }),
      1e3 < $(window).width()
        ? $("#trabajo2").css({
            width: $("#home").width() + "px",
            "-webkit-transform": "translate(" + window.positionvar + "px , 0)",
          })
        : $("#trabajo2").css({
            width: $("#home").width() + "px",
            "-webkit-transform":
              "translate(calc(" + window.positionvar + "px - 3rem) , 0)",
          }),
      $("#trabajo2 .trabajo").css({ height: "30rem" }),
      $("#ocultable").css("opacity", "0"),
      setTimeout(function () {
        (difinterna = -window.innerHeight + $("#next_interna1").height()),
          (difinternam =
            -$("#paneles_home").height() + $("#next_interna1").height()),
          1e3 < $(window).width()
            ? $("#next_interna1").css({
                "-webkit-transform":
                  "translate(0, calc(" + difinterna + "px + 21rem))",
              })
            : ((difinterna =
                -$(window).height() + $("#next_interna1").height()),
              $("#next_interna1").css({
                "-webkit-transform":
                  "translate(0, calc(" + difinternam + "px + 12rem))",
              }));
      }, 800),
      setTimeout(function () {
        $("#content_wrapper").load(
          "works/trabajos2.html #content",
          function () {
            $(window).scrollTop(0),
              (window.oldScrollPos = window.oldScrollPos2),
              (window.oldScrollPosM = window.oldScrollPosM2),
              $("#ocultable").css("opacity", "1"),
              $(".interna_headernext .titulo_thumbs").css({ opacity: "1" }),
              $("#header_interna .hover_black").css({ opacity: ".1" });
          }
        );
      }, 1500);
  }),
  $("#content_wrapper").on("click", "#next_interna2, #next_link2", function () {
    $("html, body").animate({ scrollTop: document.body.scrollHeight }, 800),
      $(".hover_black").css({ opacity: ".1" }),
      $(".trabajo_cont").removeAttr("style"),
      $(".trabajo").removeAttr("style"),
      $("#paneles_home").removeAttr("style"),
      $("#intro").css({ opacity: "0" }),
      $("#contacto").css({ opacity: "0" }),
      $("#trabajo1").css({ opacity: "0" }),
      $("#trabajo2").css({ opacity: "0" }),
      $("#trabajo3").css({ opacity: "1" }),
      $("#trabajo4").css({ opacity: "0" }),
      $("#trabajo5").css({ opacity: "0" }),
      $(".interna_headernext .titulo_thumbs").css({ opacity: "0" }),
      1e3 < $(window).width()
        ? $("#trabajo3").css({
            width: $("#home").width() + "px",
            "-webkit-transform": "translate(" + window.positionvar + "px , 0)",
          })
        : $("#trabajo3").css({
            width: $("#home").width() + "px",
            "-webkit-transform":
              "translate(calc(" + window.positionvar + "px - 3rem) , 0)",
          }),
      $("#trabajo3 .trabajo").css({ height: "30rem" }),
      $("#ocultable").css("opacity", "0"),
      setTimeout(function () {
        (difinterna = -window.innerHeight + $("#next_interna2").height()),
          (difinternam =
            -$("#paneles_home").height() + $("#next_interna2").height()),
          1e3 < $(window).width()
            ? $("#next_interna2").css({
                "-webkit-transform":
                  "translate(0, calc(" + difinterna + "px + 21rem))",
              })
            : ((difinterna =
                -$(window).height() + $("#next_interna2").height()),
              $("#next_interna2").css({
                "-webkit-transform":
                  "translate(0, calc(" + difinternam + "px + 12rem))",
              }));
      }, 800),
      setTimeout(function () {
        $("#content_wrapper").load(
          "works/trabajos3.html #content",
          function () {
            $(window).scrollTop(0),
              (window.oldScrollPos = window.oldScrollPos3),
              (window.oldScrollPosM = window.oldScrollPosM3),
              $("#ocultable").css("opacity", "1"),
              $(".interna_headernext .titulo_thumbs").css({ opacity: "1" }),
              $("#header_interna .hover_black").css({ opacity: ".1" });
          }
        );
      }, 1500);
  }),
  $("#content_wrapper").on("click", "#next_interna3, #next_link3", function () {
    $("html, body").animate({ scrollTop: document.body.scrollHeight }, 800),
      $(".hover_black").css({ opacity: ".1" }),
      $(".trabajo_cont").removeAttr("style"),
      $(".trabajo").removeAttr("style"),
      $("#paneles_home").removeAttr("style"),
      $("#intro").css({ opacity: "0" }),
      $("#contacto").css({ opacity: "0" }),
      $("#trabajo1").css({ opacity: "0" }),
      $("#trabajo2").css({ opacity: "0" }),
      $("#trabajo3").css({ opacity: "0" }),
      $("#trabajo4").css({ opacity: "1" }),
      $("#trabajo5").css({ opacity: "0" }),
      $(".interna_headernext .titulo_thumbs").css({ opacity: "0" }),
      1e3 < $(window).width()
        ? $("#trabajo4").css({
            width: $("#home").width() + "px",
            "-webkit-transform": "translate(" + window.positionvar + "px , 0)",
          })
        : $("#trabajo4").css({
            width: $("#home").width() + "px",
            "-webkit-transform":
              "translate(calc(" + window.positionvar + "px - 3rem) , 0)",
          }),
      $("#trabajo4 .trabajo").css({ height: "30rem" }),
      $("#ocultable").css("opacity", "0"),
      setTimeout(function () {
        (difinterna = -window.innerHeight + $("#next_interna3").height()),
          (difinternam =
            -$("#paneles_home").height() + $("#next_interna3").height()),
          1e3 < $(window).width()
            ? $("#next_interna3").css({
                "-webkit-transform":
                  "translate(0, calc(" + difinterna + "px + 21rem))",
              })
            : ((difinterna =
                -$(window).height() + $("#next_interna3").height()),
              $("#next_interna3").css({
                "-webkit-transform":
                  "translate(0, calc(" + difinternam + "px + 12rem))",
              }));
      }, 800),
      setTimeout(function () {
        $("#content_wrapper").load(
          "works/trabajos4.html #content",
          function () {
            $(window).scrollTop(0),
              (window.oldScrollPos = window.oldScrollPos4),
              (window.oldScrollPosM = window.oldScrollPosM4),
              $("#ocultable").css("opacity", "1"),
              $(".interna_headernext .titulo_thumbs").css({ opacity: "1" }),
              $("#header_interna .hover_black").css({ opacity: ".1" });
          }
        );
      }, 1500);
  }),
  $("#content_wrapper").on("click", "#next_interna4, #next_link4", function () {
    (window.ultimo = !0),
      $("html, body").animate({ scrollTop: document.body.scrollHeight }, 800),
      $(".hover_black").css({ opacity: ".1" }),
      $(".trabajo_cont").removeAttr("style"),
      $(".trabajo").removeAttr("style"),
      $("#paneles_home").removeAttr("style"),
      $("#intro").css({ opacity: "0" }),
      $("#contacto").css({ opacity: "0" }),
      $("#trabajo1").css({ opacity: "0" }),
      $("#trabajo2").css({ opacity: "0" }),
      $("#trabajo3").css({ opacity: "0" }),
      $("#trabajo4").css({ opacity: "0" }),
      $("#trabajo5").css({ opacity: "1" }),
      $(".interna_headernext .titulo_thumbs").css({ opacity: "0" }),
      1e3 < $(window).width()
        ? $("#trabajo5").css({
            width: $("#home").width() + "px",
            "-webkit-transform": "translate(" + window.positionvar + "px , 0)",
          })
        : $("#trabajo5").css({
            width: $("#home").width() + "px",
            "-webkit-transform":
              "translate(calc(" + window.positionvar + "px - 3rem) , 0)",
          }),
      $("#trabajo5 .trabajo").css({ height: "30rem" }),
      $("#ocultable").css("opacity", "0"),
      setTimeout(function () {
        (difinterna = -window.innerHeight + $("#next_interna4").height()),
          (difinternam =
            -$("#paneles_home").height() + $("#next_interna4").height()),
          1e3 < $(window).width()
            ? $("#next_interna4").css({
                "-webkit-transform":
                  "translate(0, calc(" + difinterna + "px + 21rem))",
              })
            : ((difinterna =
                -$(window).height() + $("#next_interna4").height()),
              $("#next_interna4").css({
                "-webkit-transform":
                  "translate(0, calc(" + difinternam + "px + 12rem))",
              }));
      }, 800),
      setTimeout(function () {
        $("#content_wrapper").load(
          "works/trabajos5.html #content",
          function () {
            $(window).scrollTop(0),
              (window.oldScrollPos = window.oldScrollPos5),
              (window.oldScrollPosM = window.oldScrollPosM5),
              $("#ocultable").css("opacity", "1"),
              $(".interna_headernext .titulo_thumbs").css({ opacity: "1" }),
              $("#header_interna .hover_black").css({ opacity: ".1" });
          }
        );
      }, 1500);
  }),
  $("#content_wrapper").on("click", "#next_interna5, #next_link5", function () {
    (window.ultimo = !1),
      $("html, body").animate({ scrollTop: document.body.scrollHeight }, 800),
      $(".hover_black").css({ opacity: ".1" }),
      $(".trabajo_cont").removeAttr("style"),
      $(".trabajo").removeAttr("style"),
      $("#paneles_home").removeAttr("style"),
      $("#intro").css({ opacity: "0" }),
      $("#contacto").css({ opacity: "0" }),
      $("#trabajo1").css({ opacity: "1" }),
      $("#trabajo2").css({ opacity: "0" }),
      $("#trabajo3").css({ opacity: "0" }),
      $("#trabajo4").css({ opacity: "0" }),
      $("#trabajo5").css({ opacity: "0" }),
      $(".interna_headernext .titulo_thumbs").css({ opacity: "0" }),
      1e3 < $(window).width()
        ? $("#trabajo1").css({
            width: $("#home").width() + "px",
            "-webkit-transform": "translate(" + window.positionvar + "px , 0)",
          })
        : $("#trabajo1").css({
            width: $("#home").width() + "px",
            "-webkit-transform":
              "translate(calc(" + window.positionvar + "px - 3rem) , 0)",
          }),
      $("#trabajo1 .trabajo").css({ height: "30rem" }),
      $("#ocultable").css("opacity", "0"),
      setTimeout(function () {
        (difinterna = -window.innerHeight + $("#next_interna5").height()),
          (difinternam =
            -$("#paneles_home").height() + $("#next_interna5").height()),
          1e3 < $(window).width()
            ? $("#next_interna5").css({
                "-webkit-transform":
                  "translate(0, calc(" + difinterna + "px + 21rem))",
              })
            : ((difinterna =
                -$(window).height() + $("#next_interna5").height()),
              $("#next_interna5").css({
                "-webkit-transform":
                  "translate(0, calc(" + difinternam + "px + 12rem))",
              }));
      }, 800),
      setTimeout(function () {
        $("#content_wrapper").load("works/trabajos.html #content", function () {
          $(window).scrollTop(0),
            (window.oldScrollPos = window.oldScrollPos1),
            (window.oldScrollPosM = window.oldScrollPosM1),
            $("#ocultable").css("opacity", "1"),
            $(".interna_headernext .titulo_thumbs").css({ opacity: "1" }),
            $("#header_interna .hover_black").css({ opacity: ".1" });
        });
      }, 1500);
  }),
  $(document).on("click", ".checktipo .check", function () {
    $("#tipolabel").css("color", "#ccc");
  }),
  $(document).on("click", ".radiotiempo .check", function () {
    $("#tiempolabel").css("color", "#ccc");
  }),
  $(document).on("click", ".checkpresu .check", function () {
    $("#presulabel").css("color", "#ccc");
  }),
  $(document).ready(function () {
    $("#btn_form").click(function () {
      var t = $("#nombre").val(),
        e = $("#email").val(),
        o = $("#comentarios").val(),
        n = $("input[name=categoria1]:checked").val(),
        i = $("input[name=categoria2]:checked").val(),
        r = $("input[name=categoria3]:checked").val(),
        s = $("input[name=tiempo]:checked").val(),
        a = $("input[name=presupuesto]:checked").val();
      $("#returnmessage").empty(),
        "" == t || "" == e || null == s || null == a
          ? ($("#returnmessage").css("display", "block"),
            $("#returnmessage").html("Please fill in all the fields"))
          : $.post(
              "form.php",
              {
                nombre_var: t,
                email_var: e,
                comentarios_var: o,
                categoria1_var: n,
                categoria2_var: i,
                categoria3_var: r,
                tiempo_var: s,
                presupuesto_var: a,
              },
              function (t) {
                $("#returnmessage").css("display", "block"),
                  $("#returnmessage").append(t),
                  "Enviado correctamente" == t &&
                    ($("#form")[0].reset(),
                    $("#tipolabel").removeAttr("style"),
                    $("#tiempolabel").removeAttr("style"),
                    $("#presulabel").removeAttr("style"),
                    $("#returnmessage").css("display", "block"),
                    $("#returnmessage").html(
                      "Your email was sent successfully. Thank you!"
                    ));
              }
            );
    });
  }),
  jQuery.each(jQuery("textarea[data-autoresize]"), function () {
    var e = this.offsetHeight - this.clientHeight;
    jQuery(this)
      .on("keyup input", function () {
        var t;
        (t = this),
          jQuery(t)
            .css("height", "auto")
            .css("height", t.scrollHeight + e);
      })
      .removeAttr("data-autoresize");
  });
