"use strict";
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [802],
  {
    82247: (t, e, n) => {
      n.d(e, { xA: () => s, yg: () => u });
      var a = n(14041);
      function o(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          e &&
            (a = a.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? r(Object(n), !0).forEach(function (e) {
                o(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function i(t, e) {
        if (null == t) return {};
        var n,
          a,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              a,
              o = {},
              r = Object.keys(t);
            for (a = 0; a < r.length; a++)
              (n = r[a]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          for (a = 0; a < r.length; a++)
            (n = r[a]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      var p = a.createContext({}),
        c = function (t) {
          var e = a.useContext(p),
            n = e;
          return t && (n = "function" == typeof t ? t(e) : l(l({}, e), t)), n;
        },
        s = function (t) {
          var e = c(t.components);
          return a.createElement(p.Provider, { value: e }, t.children);
        },
        m = "mdxType",
        g = {
          inlineCode: "code",
          wrapper: function (t) {
            var e = t.children;
            return a.createElement(a.Fragment, {}, e);
          },
        },
        d = a.forwardRef(function (t, e) {
          var n = t.components,
            o = t.mdxType,
            r = t.originalType,
            p = t.parentName,
            s = i(t, ["components", "mdxType", "originalType", "parentName"]),
            m = c(n),
            d = o,
            u = m["".concat(p, ".").concat(d)] || m[d] || g[d] || r;
          return n
            ? a.createElement(u, l(l({ ref: e }, s), {}, { components: n }))
            : a.createElement(u, l({ ref: e }, s));
        });
      function u(t, e) {
        var n = arguments,
          o = e && e.mdxType;
        if ("string" == typeof t || o) {
          var r = n.length,
            l = new Array(r);
          l[0] = d;
          var i = {};
          for (var p in e) hasOwnProperty.call(e, p) && (i[p] = e[p]);
          (i.originalType = t),
            (i[m] = "string" == typeof t ? t : o),
            (l[1] = i);
          for (var c = 2; c < r; c++) l[c] = n[c];
          return a.createElement.apply(null, l);
        }
        return a.createElement.apply(null, n);
      }
      d.displayName = "MDXCreateElement";
    },
    45869: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => i,
          contentTitle: () => r,
          default: () => m,
          frontMatter: () => o,
          metadata: () => l,
          toc: () => p,
        });
      n(14041);
      var a = n(82247);
      const o = {
          id: "expedition_contact",
          title: "Contact",
          sidebar_label: "Contact",
          hide_title: !0,
          description: "Expedition 2.0 Contact",
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
        r = "Contact",
        l = {
          unversionedId: "expedition/docs/expedition_contact",
          id: "expedition/docs/expedition_contact",
          title: "Contact",
          description: "Expedition 2.0 Contact",
          source: "@site/products/expedition/docs/expedition_contact.md",
          sourceDirName: "expedition/docs",
          slug: "/expedition/docs/expedition_contact",
          permalink: "/expedition/docs/expedition_contact",
          draft: !1,
          editUrl:
            "https://github.com/PaloAltoNetworks/pan.dev/tree/master/products/expedition/docs/expedition_contact.md",
          tags: [],
          version: "current",
          frontMatter: {
            id: "expedition_contact",
            title: "Contact",
            sidebar_label: "Contact",
            hide_title: !0,
            description: "Expedition 2.0 Contact",
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
          sidebar: "expedition",
          previous: {
            title: "List security rules containing a specific subnet",
            permalink: "/expedition/docs/expedition_workflow_searchrule",
          },
        },
        i = {},
        p = [],
        c = { toc: p },
        s = "wrapper";
      function m({ components: t, ...e }) {
        return (0, a.yg)(
          s,
          { ...c, ...e, components: t, mdxType: "MDXLayout" },
          (0, a.yg)("h1", { id: "contact" }, "Contact"),
          (0, a.yg)(
            "p",
            null,
            "We want to thank you for using Expedition and to improve the security posture of your organization."
          ),
          (0, a.yg)(
            "p",
            null,
            "Expedition is a ",
            (0, a.yg)("strong", { parentName: "p" }, "Palo Alto Networks\xa9"),
            " community supported tool. Please visit your ",
            (0, a.yg)(
              "a",
              {
                href: "https://live.paloaltonetworks.com/t5/expedition-migration-tool/ct-p/migration_tool",
              },
              (0, a.yg)("strong", { parentName: "p" }, "Live")
            ),
            " site for support and to contribute with your\nexperience assisting others."
          ),
          (0, a.yg)(
            "p",
            null,
            "Access the ",
            (0, a.yg)(
              "a",
              {
                href: "https://live.paloaltonetworks.com/t5/expedition-migration-tool/ct-p/migration_tool",
              },
              " Live Community Site "
            )
          ),
          (0, a.yg)(
            "p",
            null,
            "To report bugs, requests for new features or personal contact, please reach us via the Expedition team email ",
            (0, a.yg)(
              "a",
              {
                parentName: "p",
                href: "mailto:fwmigrate@paloaltonetworks.com",
              },
              "fwmigrate@paloaltonetworks.com"
            )
          ),
          (0, a.yg)(
            "table",
            null,
            (0, a.yg)(
              "thead",
              { parentName: "table" },
              (0, a.yg)(
                "tr",
                { parentName: "thead" },
                (0, a.yg)("th", { parentName: "tr", align: null }, "Role"),
                (0, a.yg)("th", { parentName: "tr", align: null }, "Members"),
                (0, a.yg)("th", { parentName: "tr", align: null }, "e-mail")
              )
            ),
            (0, a.yg)(
              "tbody",
              { parentName: "table" },
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "Senior Manager Solutions Architect")
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "David Puigdomenech")
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)(
                      "a",
                      {
                        parentName: "td",
                        href: "mailto:dpuigdomenec@paloaltonetworks.com",
                      },
                      "dpuigdomenec@paloaltonetworks.com"
                    )
                  )
                )
              ),
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "API development ")
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "Anna Carreras")
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)(
                      "a",
                      {
                        parentName: "td",
                        href: "mailto:abarbany@paloaltonetworks.com",
                      },
                      "abarbany@paloaltonetworks.com"
                    )
                  )
                )
              ),
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "Front-End development ")
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "Janosch Zbick")
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)(
                      "a",
                      {
                        parentName: "td",
                        href: "mailto:jzbick@paloaltonetworks.com",
                      },
                      "jzbick@paloaltonetworks.com"
                    )
                  )
                )
              ),
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "Solution Engineer ")
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "Carles Costas")
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)(
                      "a",
                      {
                        parentName: "td",
                        href: "mailto:ccostas@paloaltonetworks.com",
                      },
                      "ccostas@paloaltonetworks.com"
                    )
                  )
                )
              ),
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "Technical Solution Architect ")
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "Lynn Chiang")
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)(
                      "a",
                      {
                        parentName: "td",
                        href: "mailto:lychiang@paloaltonetworks.com",
                      },
                      "lychiang@paloaltonetworks.com"
                    )
                  )
                )
              )
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
