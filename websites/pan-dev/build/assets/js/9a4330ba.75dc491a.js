"use strict";
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [628],
  {
    82247: (e, t, n) => {
      n.d(t, { xA: () => d, yg: () => f });
      var i = n(14041);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function p(e, t) {
        if (null == e) return {};
        var n,
          i,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              o = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (n = r[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var l = i.createContext({}),
        s = function (e) {
          var t = i.useContext(l),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
        },
        d = function (e) {
          var t = s(e.components);
          return i.createElement(l.Provider, { value: t }, e.children);
        },
        c = "mdxType",
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return i.createElement(i.Fragment, {}, t);
          },
        },
        m = i.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            r = e.originalType,
            l = e.parentName,
            d = p(e, ["components", "mdxType", "originalType", "parentName"]),
            c = s(n),
            m = o,
            f = c["".concat(l, ".").concat(m)] || c[m] || u[m] || r;
          return n
            ? i.createElement(f, a(a({ ref: t }, d), {}, { components: n }))
            : i.createElement(f, a({ ref: t }, d));
        });
      function f(e, t) {
        var n = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var r = n.length,
            a = new Array(r);
          a[0] = m;
          var p = {};
          for (var l in t) hasOwnProperty.call(t, l) && (p[l] = t[l]);
          (p.originalType = e),
            (p[c] = "string" == typeof e ? e : o),
            (a[1] = p);
          for (var s = 2; s < r; s++) a[s] = n[s];
          return i.createElement.apply(null, a);
        }
        return i.createElement.apply(null, n);
      }
      m.displayName = "MDXCreateElement";
    },
    38888: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => r,
          default: () => c,
          frontMatter: () => o,
          metadata: () => a,
          toc: () => l,
        });
      n(14041);
      var i = n(82247);
      const o = {
          id: "expedition_qs",
          title: "Expedition 2.0 Installation",
          sidebar_label: "Installation",
          hide_title: !0,
          description: "Expedition 2.0 Installation",
          keywords: [
            "pan-os",
            "panos",
            "xml",
            "api",
            "expedition",
            "migration",
            "firewall",
            "configuration",
            "expedition",
          ],
          image: "/expedition/img/expedition.png",
        },
        r = void 0,
        a = {
          unversionedId: "expedition/docs/expedition_qs",
          id: "expedition/docs/expedition_qs",
          title: "Expedition 2.0 Installation",
          description: "Expedition 2.0 Installation",
          source: "@site/products/expedition/docs/expedition_qs.md",
          sourceDirName: "expedition/docs",
          slug: "/expedition/docs/expedition_qs",
          permalink: "/expedition/docs/expedition_qs",
          draft: !1,
          editUrl:
            "https://github.com/PaloAltoNetworks/pan.dev/tree/master/products/expedition/docs/expedition_qs.md",
          tags: [],
          version: "current",
          frontMatter: {
            id: "expedition_qs",
            title: "Expedition 2.0 Installation",
            sidebar_label: "Installation",
            hide_title: !0,
            description: "Expedition 2.0 Installation",
            keywords: [
              "pan-os",
              "panos",
              "xml",
              "api",
              "expedition",
              "migration",
              "firewall",
              "configuration",
              "expedition",
            ],
            image: "/expedition/img/expedition.png",
          },
          sidebar: "expedition",
          previous: { title: "Overview", permalink: "/expedition/docs" },
          next: {
            title: "Export Vendor Configuration",
            permalink: "/expedition/docs/expedition_export",
          },
        },
        p = {},
        l = [
          { value: "Install Expedition", id: "install-expedition", level: 2 },
          {
            value: "Accessing the Expedition GUI",
            id: "accessing-the-expedition-gui",
            level: 2,
          },
        ],
        s = { toc: l },
        d = "wrapper";
      function c({ components: e, ...t }) {
        return (0, i.yg)(
          d,
          { ...s, ...t, components: e, mdxType: "MDXLayout" },
          (0, i.yg)(
            "admonition",
            { type: "note" },
            (0, i.yg)(
              "p",
              { parentName: "admonition" },
              (0, i.yg)(
                "strong",
                { parentName: "p" },
                "End of Life Announcement for Palo Alto Networks Expedition"
              )
            ),
            (0, i.yg)(
              "p",
              { parentName: "admonition" },
              "We are excited to share some great news with you, as a valued user of Expedition functionalities. We are currently in the process of transferring the core functionalities of the tool into new products. This strategic move aligns with our commitment to meet the evolving needs of our customers and enhance our range of product offerings.  "
            ),
            (0, i.yg)(
              "p",
              { parentName: "admonition" },
              "Starting from January 2025, Palo Alto Networks will no longer support the Expedition tool, including all versions of both Expedition1 and Expedition2 branches. We believe this transition will bring even more value and improved capabilities to our users. For more details, please refer to ",
              (0, i.yg)(
                "a",
                {
                  parentName: "p",
                  href: "https://live.paloaltonetworks.com/t5/expedition-articles/important-update-end-of-life-announcement-for-palo-alto-networks/ta-p/589642",
                },
                "Live Community"
              ),
              " site."
            )
          ),
          (0, i.yg)("h2", { id: "install-expedition" }, "Install Expedition"),
          (0, i.yg)(
            "p",
            null,
            "Expedition 2.0 is in constant development to cover new functionalities available in the market and to correct implementation issues that are identified in the code. Installation steps are stated in the readme of Expedition2-release Beta drive.  "
          ),
          (0, i.yg)(
            "admonition",
            { type: "note" },
            (0, i.yg)(
              "p",
              { parentName: "admonition" },
              "The installation process does not support migrating Expedition 1 instances to Expedition 2.0  "
            )
          ),
          (0, i.yg)(
            "h2",
            { id: "accessing-the-expedition-gui" },
            "Accessing the Expedition GUI"
          ),
          (0, i.yg)(
            "p",
            null,
            "After the installation is complete, reach your web browser to navigate to the front-end."
          ),
          (0, i.yg)(
            "pre",
            null,
            (0, i.yg)(
              "code",
              { parentName: "pre", className: "language-console" },
              "https://localhost\n"
            )
          )
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
