"use strict";
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [291],
  {
    82247: (e, t, r) => {
      r.d(t, { xA: () => u, yg: () => m });
      var n = r(14041);
      function i(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function p(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      var c = n.createContext({}),
        l = function (e) {
          var t = n.useContext(c),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : a(a({}, t), e)), r;
        },
        u = function (e) {
          var t = l(e.components);
          return n.createElement(c.Provider, { value: t }, e.children);
        },
        d = "mdxType",
        s = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        f = n.forwardRef(function (e, t) {
          var r = e.components,
            i = e.mdxType,
            o = e.originalType,
            c = e.parentName,
            u = p(e, ["components", "mdxType", "originalType", "parentName"]),
            d = l(r),
            f = i,
            m = d["".concat(c, ".").concat(f)] || d[f] || s[f] || o;
          return r
            ? n.createElement(m, a(a({ ref: t }, u), {}, { components: r }))
            : n.createElement(m, a({ ref: t }, u));
        });
      function m(e, t) {
        var r = arguments,
          i = t && t.mdxType;
        if ("string" == typeof e || i) {
          var o = r.length,
            a = new Array(o);
          a[0] = f;
          var p = {};
          for (var c in t) hasOwnProperty.call(t, c) && (p[c] = t[c]);
          (p.originalType = e),
            (p[d] = "string" == typeof e ? e : i),
            (a[1] = p);
          for (var l = 2; l < o; l++) a[l] = r[l];
          return n.createElement.apply(null, a);
        }
        return n.createElement.apply(null, r);
      }
      f.displayName = "MDXCreateElement";
    },
    81759: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => p,
          contentTitle: () => o,
          default: () => d,
          frontMatter: () => i,
          metadata: () => a,
          toc: () => c,
        });
      r(14041);
      var n = r(82247);
      const i = {
          id: "expedition_tutorial1",
          title: "Tutorial 1",
          sidebar_label: "Tutorial",
          hide_title: !0,
          description: "Expedition 2.0 Quickstart",
          keywords: [
            "pan-os",
            "panos",
            "xml",
            "api",
            "expedition",
            "migration",
            "firewall",
            "configuration",
          ],
          image: "/expedition/img/expedition.png",
        },
        o = "Tutorial",
        a = {
          unversionedId: "expedition/docs/expedition_tutorial1",
          id: "expedition/docs/expedition_tutorial1",
          title: "Tutorial 1",
          description: "Expedition 2.0 Quickstart",
          source: "@site/products/expedition/docs/expedition_tutorial1.md",
          sourceDirName: "expedition/docs",
          slug: "/expedition/docs/expedition_tutorial1",
          permalink: "/expedition/docs/expedition_tutorial1",
          draft: !1,
          editUrl:
            "https://github.com/PaloAltoNetworks/pan.dev/tree/master/products/expedition/docs/expedition_tutorial1.md",
          tags: [],
          version: "current",
          frontMatter: {
            id: "expedition_tutorial1",
            title: "Tutorial 1",
            sidebar_label: "Tutorial",
            hide_title: !0,
            description: "Expedition 2.0 Quickstart",
            keywords: [
              "pan-os",
              "panos",
              "xml",
              "api",
              "expedition",
              "migration",
              "firewall",
              "configuration",
            ],
            image: "/expedition/img/expedition.png",
          },
        },
        p = {},
        c = [],
        l = { toc: c },
        u = "wrapper";
      function d({ components: e, ...t }) {
        return (0, n.yg)(
          u,
          { ...l, ...t, components: e, mdxType: "MDXLayout" },
          (0, n.yg)("h1", { id: "tutorial" }, "Tutorial")
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
