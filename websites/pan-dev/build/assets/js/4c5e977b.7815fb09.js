(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [473],
  {
    89711: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { default: () => g });
      var r = t(31085),
        s = (t(14041), t(9546)),
        i = t(28637),
        o = t(23552),
        c = t(60915),
        n = t(90780),
        l = t(15323),
        d = t(69120),
        u = t(6437);
      const m = {
          breadcrumbsContainer: "breadcrumbsContainer_Alpn",
          breadcrumbHomeIcon: "breadcrumbHomeIcon_SLhD",
        },
        p = t(76292);
      function f({ children: e, href: a, isLast: t }) {
        const s = "breadcrumbs__link";
        return t
          ? (0, r.jsx)("span", { className: s, itemProp: "name", children: e })
          : a
          ? (0, r.jsx)(n.default, {
              className: s,
              href: a,
              itemProp: "item",
              children: (0, r.jsx)("span", { itemProp: "name", children: e }),
            })
          : (0, r.jsx)("span", { className: s, children: e });
      }
      function h({ children: e, active: a, index: t, addMicrodata: i }) {
        return (0, r.jsxs)("li", {
          ...(i && {
            itemScope: !0,
            itemProp: "itemListElement",
            itemType: "https://schema.org/ListItem",
          }),
          className: (0, s.default)("breadcrumbs__item", {
            "breadcrumbs__item--active": a,
          }),
          children: [
            e,
            (0, r.jsx)("meta", {
              itemProp: "position",
              content: String(t + 1),
            }),
          ],
        });
      }
      function b() {
        const e = (0, l.A)("/");
        return (0, r.jsx)("li", {
          className: "breadcrumbs__item",
          children: (0, r.jsx)(n.default, {
            "aria-label": (0, d.T)({
              id: "theme.docs.breadcrumbs.home",
              message: "Home page",
              description:
                "The ARIA label for the home page in the breadcrumbs",
            }),
            className: (0, s.default)(
              "breadcrumbs__link",
              m.breadcrumbsItemLink
            ),
            href: e,
            children: (0, r.jsx)(u.A, { className: m.breadcrumbHomeIcon }),
          }),
        });
      }
      function A(e) {
        return e.make_link ? e.href : void 0;
      }
      function P(e) {
        return { ...e, href: A(e) };
      }
      function v(e, a) {
        if (!e) return [];
        for (const t of Object.values(a))
          if (t.children)
            for (const a of t.children)
              if (
                e.startsWith(a.match) ||
                (a.add_crumb && e.startsWith(a.href))
              )
                return a.add_crumb && e !== a.href ? [P(t), a] : [P(t)];
        for (const t of Object.values(a))
          if (e.startsWith(t.href)) return [P(t)];
        return [];
      }
      function g() {
        var e;
        const a = (0, o.OF)() || [],
          t = [
            ...v(
              null === (e = a[a.length - 1]) || void 0 === e ? void 0 : e.href,
              p
            ),
            ...a,
          ],
          n = (0, c.Dt)();
        return t
          ? (0, r.jsx)("nav", {
              className: (0, s.default)(
                i.G.docs.docBreadcrumbs,
                m.breadcrumbsContainer
              ),
              "aria-label": (0, d.T)({
                id: "theme.docs.breadcrumbs.navAriaLabel",
                message: "Breadcrumbs",
                description: "The ARIA label for the breadcrumbs",
              }),
              children: (0, r.jsxs)("ul", {
                className: "breadcrumbs",
                itemScope: !0,
                itemType: "https://schema.org/BreadcrumbList",
                children: [
                  n && (0, r.jsx)(b, {}),
                  t.map((e, a) => {
                    const s = a === t.length - 1;
                    return (0, r.jsx)(
                      h,
                      {
                        active: s,
                        index: a,
                        addMicrodata: !!e.href,
                        children: (0, r.jsx)(f, {
                          href: e.href,
                          isLast: s,
                          children: e.label,
                        }),
                      },
                      a
                    );
                  }),
                ],
              }),
            })
          : null;
      }
    },
    25955: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { default: () => G });
      var r = t(31085),
        s = t(14041),
        i = t(9546),
        o = t(28637),
        c = t(45357),
        n = t(4719),
        l = t(50269);
      const d = {
        lastUpdated: "lastUpdated_VsjB",
        docFooterEditMetaRowItemRight: "docFooterEditMetaRowItemRight_IeN3",
        docFooterEditMetaRowItem: "docFooterEditMetaRowItem_Vumq",
      };
      var u,
        m = t(90263);
      function p() {
        return (
          (p = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var a = 1; a < arguments.length; a++) {
                  var t = arguments[a];
                  for (var r in t)
                    ({}.hasOwnProperty.call(t, r) && (e[r] = t[r]));
                }
                return e;
              }),
          p.apply(null, arguments)
        );
      }
      const f = (e) => {
        let { title: a, titleId: t, ...r } = e;
        return s.createElement(
          "svg",
          p(
            {
              width: 25,
              height: 25,
              viewBox: "0 0 25 25",
              "aria-label": "clap",
              "aria-labelledby": t,
            },
            r
          ),
          a ? s.createElement("title", { id: t }, a) : null,
          u ||
            (u = s.createElement("path", {
              d: "m11.74 0 .76 2.97.76-2.97zm3.07 3.78 1.84-2.56-1.42-.47zM8.38 1.22l1.84 2.56L9.8.75zm12 20.4a5.11 5.11 0 0 1-3.16 1.61l.49-.45c2.88-2.89 3.45-5.98 1.69-9.21l-1.1-1.94-.96-2.02c-.31-.67-.23-1.18.25-1.55a.84.84 0 0 1 .66-.16c.34.05.66.28.88.6l2.85 5.02c1.18 1.97 1.38 5.12-1.6 8.1M7.1 21.1l-5.02-5.02a1 1 0 0 1 .7-1.7 1 1 0 0 1 .72.3l2.6 2.6a.44.44 0 0 0 .63-.62L4.1 14.04l-1.75-1.75a1 1 0 1 1 1.41-1.41l4.15 4.15a.44.44 0 0 0 .63 0 .44.44 0 0 0 0-.62L4.4 10.26 3.22 9.08a1 1 0 0 1 0-1.4 1.02 1.02 0 0 1 1.41 0l1.18 1.16L9.96 13a.44.44 0 0 0 .62 0 .44.44 0 0 0 0-.63L6.43 8.22a.99.99 0 0 1-.3-.7.99.99 0 0 1 .3-.7 1 1 0 0 1 1.41 0l7 6.98a.44.44 0 0 0 .7-.5l-1.35-2.85c-.31-.68-.23-1.19.25-1.56a.85.85 0 0 1 .66-.16c.34.06.66.28.88.6L18.63 14c1.57 2.88 1.07 5.54-1.55 8.16a5.62 5.62 0 0 1-5.06 1.65 9.35 9.35 0 0 1-4.93-2.72zM11 5.98l2.56 2.56c-.5.6-.56 1.41-.15 2.28l.26.56-4.25-4.25a.98.98 0 0 1-.12-.45 1 1 0 0 1 .29-.7 1.02 1.02 0 0 1 1.41 0zm8.89 2.06c-.38-.56-.9-.92-1.49-1.01a1.74 1.74 0 0 0-1.34.33c-.38.29-.61.65-.71 1.06a2.1 2.1 0 0 0-1.1-.56 1.78 1.78 0 0 0-.99.13l-2.64-2.64a1.88 1.88 0 0 0-2.65 0 1.86 1.86 0 0 0-.48.85 1.89 1.89 0 0 0-2.67-.01 1.87 1.87 0 0 0-.5.9c-.76-.75-2-.75-2.7-.04a1.88 1.88 0 0 0 0 2.66c-.3.12-.61.29-.87.55a1.88 1.88 0 0 0 0 2.66l.62.62a1.88 1.88 0 0 0-.9 3.16l5.01 5.02c1.6 1.6 3.52 2.64 5.4 2.96a7.16 7.16 0 0 0 1.18.1c1.03 0 2-.25 2.9-.7A5.9 5.9 0 0 0 21 22.24c3.34-3.34 3.08-6.93 1.74-9.17l-2.87-5.04z",
              fillRule: "evenodd",
            }))
        );
      };
      var h;
      function b() {
        return (
          (b = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var a = 1; a < arguments.length; a++) {
                  var t = arguments[a];
                  for (var r in t)
                    ({}.hasOwnProperty.call(t, r) && (e[r] = t[r]));
                }
                return e;
              }),
          b.apply(null, arguments)
        );
      }
      const A = (e) => {
        let { title: a, titleId: t, ...r } = e;
        return s.createElement(
          "svg",
          b(
            {
              width: 29,
              height: 29,
              "aria-label": "clap",
              "aria-labelledby": t,
            },
            r
          ),
          a ? s.createElement("title", { id: t }, a) : null,
          h ||
            (h = s.createElement(
              "g",
              { fillRule: "evenodd" },
              s.createElement("path", {
                d: "m13.74 1 .76 2.97.76-2.97zm4.89 1.22-1.43-.47-.4 3.03zm-6.84-.47-1.43.47 1.84 2.56zM24.47 14.3 21.45 9c-.29-.43-.69-.7-1.12-.78a1.16 1.16 0 0 0-.91.22c-.3.23-.48.52-.54.84l.05.07 2.85 5c1.95 3.56 1.32 6.97-1.85 10.14a8.46 8.46 0 0 1-.55.5 5.75 5.75 0 0 0 3.36-1.76c3.26-3.27 3.04-6.75 1.73-8.91m-9.89-3.43c-.16-.83.1-1.57.7-2.15l-2.5-2.49c-.5-.5-1.38-.5-1.88 0-.18.18-.27.4-.33.63l4.01 4z",
              }),
              s.createElement("path", {
                d: "M17.81 10.04a1.37 1.37 0 0 0-.88-.6.81.81 0 0 0-.64.15c-.18.13-.71.55-.24 1.56l1.43 3.03a.54.54 0 1 1-.87.61L9.2 7.38a.99.99 0 1 0-1.4 1.4l4.4 4.4a.54.54 0 1 1-.76.76l-4.4-4.4L5.8 8.3a.99.99 0 0 0-1.4 0 .98.98 0 0 0 0 1.39l1.25 1.24 4.4 4.4a.54.54 0 0 1 0 .76.54.54 0 0 1-.76 0l-4.4-4.4a1 1 0 0 0-1.4 0 .98.98 0 0 0 0 1.4l1.86 1.85 2.76 2.77a.54.54 0 0 1-.76.76L4.58 15.7a.98.98 0 0 0-1.4 0 .99.99 0 0 0 0 1.4l5.33 5.32c3.37 3.37 6.64 4.98 10.49 1.12 2.74-2.74 3.27-5.54 1.62-8.56l-2.8-4.94z",
              })
            ))
        );
      };
      var P, v;
      function g() {
        return (
          (g = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var a = 1; a < arguments.length; a++) {
                  var t = arguments[a];
                  for (var r in t)
                    ({}.hasOwnProperty.call(t, r) && (e[r] = t[r]));
                }
                return e;
              }),
          g.apply(null, arguments)
        );
      }
      const I = (e) => {
        let { title: a, titleId: t, ...r } = e;
        return s.createElement(
          "svg",
          g(
            {
              width: 46,
              height: 43,
              viewBox: "0 0 46 43",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              "aria-labelledby": t,
            },
            r
          ),
          a ? s.createElement("title", { id: t }, a) : null,
          P ||
            (P = s.createElement("path", {
              d: "m23.5 12-2.165-9h4.33L23.5 12ZM12.24 19.665 3.365 17.04l2.165-3.75 6.712 6.375ZM34.25 19.665l6.712-6.375 2.165 3.75-8.877 2.625ZM30.602 32.92l8.297 4.104-2.775 3.325-5.522-7.43ZM16.118 32.92l-5.522 7.428-2.775-3.324 8.297-4.105Z",
              fill: "var(--ifm-font-color-base)",
            })),
          v ||
            (v = s.createElement("path", {
              fill: "var(--ifm-color-emphasis-500)",
              d: "M34 14h2v2h-2zM18 9h2v2h-2zM8 22h2v2H8zM18 35h2v2h-2zM34 29h2v2h-2z",
            }))
        );
      };
      var S = t(32813),
        _ = t(90826),
        w = t(86090),
        N = t(28512),
        x = t(1048).Buffer,
        y = t(4364);
      const { initializeAppCheck: C, ReCaptchaEnterpriseProvider: D } =
        t(96979);
      const j = function () {
        const {
            siteConfig: { customFields: e },
          } = (0, N.default)(),
          a = {
            apiKey: e.firebaseApiKey,
            projectId: "pan-dev-f1b58",
            appId: "1:899146127396:web:26d634304c08ea1d0860b1",
          },
          t = (0, w.zy)(),
          o = x.from(t.pathname).toString("base64");
        let c, n, l, d;
        e.recaptchaApiKey &&
          m.default.canUseDOM &&
          ((c = (0, _.Wp)(a)),
          (d = C(c, {
            provider: new D(e.recaptchaApiKey),
            isTokenAutoRefreshEnabled: !0,
          })),
          (n = (0, S.aU)(c)),
          (l = (0, S.H9)(n, "_feedback_", o)));
        let u = (0, s.useRef)(null),
          p = (0, s.useRef)(null);
        const h = Math.random() < 0.5 ? "left" : "right",
          [b, P] = (0, s.useState)(0),
          [v, g] = (0, s.useState)(!1),
          [j, E] = (0, s.useState)(!1),
          [M, k] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            if (e.recaptchaApiKey)
              try {
                (0, S.x7)(l).then((e) =>
                  e.exists() ? P(e.get("claps")) : P(0)
                );
              } catch (a) {
                return (
                  y.error(
                    `Error while fetching feedback for doc at '${t.pathname}':`,
                    a
                  ),
                  P(0)
                );
              }
            return () => P(0);
          }, []),
          (0, s.useEffect)(
            () => (
              v &&
                ((u.current = setTimeout(() => g(!1), 1e3)),
                (p.current = setTimeout(() => E(!1), 250))),
              () => {
                clearTimeout(u.current), clearTimeout(p.current);
              }
            ),
            [b, v]
          ),
          (0, r.jsxs)("button", {
            type: "button",
            className: (0, i.default)("applause-button", {
              active: v,
              inactive: !v,
              clicked: j,
              interacted: M,
            }),
            onClick: () => {
              g(!0),
                E(!0),
                k(!0),
                P((e) => e + 1),
                l &&
                  (0, S.BN)(
                    l,
                    { claps: (0, S.GV)(1), path: t.pathname },
                    { merge: !0 }
                  );
            },
            disabled: b >= 1e5,
            children: [
              M
                ? (0, r.jsx)(A, { className: "hands" })
                : (0, r.jsx)(f, { className: "hands" }),
              (0, r.jsx)("div", {
                className: (0, i.default)("spark-container", h),
                children: (0, r.jsx)(I, { className: "spark" }),
              }),
              (0, r.jsx)("span", { className: "bubble", children: `+${b}` }),
              (0, r.jsx)("span", {
                className: "counter",
                children: b ? b + 0 : 0,
              }),
            ],
          })
        );
      };
      var E = t(63199);
      function M() {
        const { metadata: e } = (0, c.u)(),
          { editUrl: a } = e;
        return (0, r.jsx)("a", {
          href: a,
          target: "_blank",
          rel: "noreferrer noopener",
          className: "edit-button",
          children: (0, r.jsx)(E.A, {}),
        });
      }
      function k() {
        const { metadata: e } = (0, c.u)(),
          { title: a } = e,
          t = `https://github.com/PaloAltoNetworks/pan.dev/issues/new?labels=documentation&title=${`Issue/Help with "${a}"`}&template=documentation_problem.md`;
        return (0, r.jsx)("a", {
          href: t,
          target: "_blank",
          rel: "noreferrer noopener",
          className: "issue-button",
          children: (0, r.jsx)("i", { className: "fa-solid fa-bug" }),
        });
      }
      function R() {
        const { metadata: e } = (0, c.u)(),
          { title: a } = e,
          t = `https://github.com/PaloAltoNetworks/pan.dev/issues/new?labels=documentation&title=${`Issue/Help with "${a}"`}&template=documentation_problem.md`;
        return (0, r.jsx)("a", {
          href: t,
          target: "_blank",
          rel: "noreferrer noopener",
          className: "issue-button",
          children: (0, r.jsxs)("span", {
            children: [
              (0, r.jsx)("i", { className: "fa-solid fa-bug" }),
              " Report an Issue",
            ],
          }),
        });
      }
      function O() {
        return (0, r.jsx)("div", { className: "floating-island-divider" });
      }
      const T = function () {
        const { metadata: e } = (0, c.u)(),
          { editUrl: a, frontMatter: t } = e,
          { hide_applause: i, hide_issue: o } = t,
          n = (0, s.useRef)(null),
          l =
            !m.default.canUseDOM ||
            (function (e) {
              const [a, t] = (0, s.useState)(!0),
                r = (0, s.useMemo)(
                  () => new IntersectionObserver(([e]) => t(e.isIntersecting)),
                  []
                );
              return (
                (0, s.useEffect)(
                  () => (
                    r.observe(e.current),
                    () => {
                      r.disconnect();
                    }
                  ),
                  [e, r]
                ),
                a
              );
            })(n),
          d = !(!a || i || o),
          u = !!((a && !i) || (a && !o) || (!i && !o));
        return (0, r.jsx)("div", {
          ref: n,
          children: (0, r.jsxs)("div", {
            className:
              !l && d
                ? "floating-island-container"
                : !l && u
                ? "floating-island-container-double"
                : l || d || u
                ? void 0
                : "floating-island-container-single",
            children: [
              !l && !i && (0, r.jsx)(j, {}),
              !l && !i && (d || u) && (0, r.jsx)(O, {}),
              !l && a && (0, r.jsx)(M, {}),
              !l && a && !o && (d || u) && (0, r.jsx)(O, {}),
              !l && !o && (0, r.jsx)(k, {}),
            ],
          }),
        });
      };
      function L(e) {
        return (0, r.jsx)("div", {
          className: (0, i.default)(
            o.G.docs.docFooterTagsRow,
            "row margin-bottom--sm"
          ),
          children: (0, r.jsx)("div", {
            className: "col",
            children: (0, r.jsx)(l.A, { ...e }),
          }),
        });
      }
      function W({
        editUrl: e,
        lastUpdatedAt: a,
        lastUpdatedBy: t,
        formattedLastUpdatedAt: s,
        hide_applause: c,
        hide_issue: l,
      }) {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("hr", {}),
            (0, r.jsxs)("div", {
              className: (0, i.default)(o.G.docs.docFooterEditMetaRow, "row"),
              children: [
                (0, r.jsx)("div", {
                  className: (0, i.default)("col", d.docFooterEditMetaRowItem),
                  children: !c && (0, r.jsx)(j, {}),
                }),
                (0, r.jsxs)("div", {
                  className: d.docFooterEditMetaRowItemRight,
                  children: [
                    e && (0, r.jsx)(n.A, { editUrl: e }),
                    !l && (0, r.jsx)(R, {}),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function G() {
        const { metadata: e } = (0, c.u)(),
          {
            editUrl: a,
            lastUpdatedAt: t,
            formattedLastUpdatedAt: s,
            lastUpdatedBy: n,
            tags: l,
            frontMatter: d,
          } = e,
          { hide_applause: u, hide_issue: m } = d,
          p = l.length > 0,
          f = !(!(a || t || n) && u && m);
        return p || f
          ? (0, r.jsxs)("footer", {
              className: (0, i.default)(o.G.docs.docFooter, "docusaurus-mt-lg"),
              children: [
                p && (0, r.jsx)(L, { tags: l }),
                f && (0, r.jsx)(T, {}),
                f &&
                  (0, r.jsx)(W, {
                    editUrl: a,
                    lastUpdatedAt: t,
                    lastUpdatedBy: n,
                    formattedLastUpdatedAt: s,
                    hide_applause: u,
                    hide_issue: m,
                  }),
              ],
            })
          : null;
      }
    },
    25156: () => {},
    82840: () => {},
    86973: () => {},
    29853: () => {},
    89750: () => {},
    17003: () => {},
    63011: () => {},
    43951: () => {},
    76292: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"cdss":{"href":"/cdss","label":"Cloud-Delivered Security Services","sitemap_informationtype":["Developer"],"sitemap_productcategory":["Cloud-Delivered Security Services"],"children":[{"href":"/cdss/docs","label":"Cloud-Delivered Security Services","description":"CDSS Developer\'s Documentation","sitemap_feature-category":["Threat Prevention","IoT","DNS Security"]}]},"iot":{"href":"/iot","label":"IoT","sitemap_productcategory":["Cloud-Delivered Security Services","IoT"],"children":[{"href":"/iot/api","label":"IoT API","description":"IoT API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"]}]},"threat-vault":{"href":"/threat-vault","label":"Threat Vault","sitemap_productcategory":["Cloud-Delivered Security Services"],"sitemap_feature-category":["Threat Prevention"],"children":[{"href":"/threat-vault/docs","label":"Threat Vault Dev Docs","description":"Threat Vault Developer\'s Documentation","sitemap_feature":["API"]},{"href":"/threat-vault/api","label":"Threat Vault API | Reference Guide","description":"Describes the various API operation parameters, authentication methods, and usage details.","icon":"\u2699\ufe0f","sitemap_feature":["API"]}]},"dns-security":{"href":"/dns-security","label":"DNS Security","sitemap_productcategory":["Cloud-Delivered Security Services"],"sitemap_feature-category":["DNS Security"],"children":[{"href":"/dns-security/api","label":"DNS Security API | Reference Guide","description":"Describes the various API operation parameters, authentication methods, and usage details.","sitemap_feature-category":["DNS Security"],"icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/dns-security/docs","label":"DNS Security Dev Docs","description":"Describes the various API operation parameters, authentication methods, and usage details.","sitemap_feature-category":["DNS Security"],"icon":"\u2699\ufe0f","sitemap_feature":["API"]}]},"cloudngfw":{"href":"/cloudngfw","label":"Cloud NGFW","children":[{"href":"/cloudngfw/docs","label":"Cloud NGFW Docs","description":"Cloud Next Generation Firewall Docs"},{"href":"/cloudngfw/aws/api","label":"Cloud NGFW AWS API","description":"Cloud NGFW AWS API Reference","icon":"\u2699\ufe0f"}]},"prisma-cloud":{"href":"/prisma-cloud","sitemap_productcategory":["Prisma","Prisma Cloud","Cloud-Native Security"],"sitemap_informationtype":"Developer","children":[{"href":"/prisma-cloud/docs","label":"Prisma Cloud Workflows","description":"Prisma Cloud Workflows","sitemap_osversion":["Prisma Cloud Enterprise Edition"]},{"href":"/prisma-cloud/api","label":"Prisma Cloud API","description":"Prisma Cloud API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"],"sitemap_osversion":["Prisma Cloud Enterprise Edition"],"children":[{"href":"/prisma-cloud/api/cspm","label":"CSPM API","description":"Prisma Cloud CSPM API Reference"},{"href":"/prisma-cloud/api/cwpp","label":"CWPP API","description":"Prisma Cloud CWPP API Reference"},{"href":"/prisma-cloud/api/code","label":"Code API","description":"Prisma Cloud Code API Reference"}]}]},"compute":{"href":"/compute","sitemap_productcategory":["Prisma","Prisma Cloud","Prisma Cloud Compute Edition","Cloud-Native Security"],"sitemap_informationtype":"Developer","children":[{"href":"/compute/api/22-12","label":"Prisma Cloud API v22.12","description":"Prisma Cloud API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"],"sitemap_osversion":["Self-Hosted 22.12"]},{"href":"/compute/api/30-03","label":"Prisma Cloud API v30.03","description":"Prisma Cloud API Reference ","icon":"\u2699\ufe0f","sitemap_feature":["API"],"sitemap_osversion":["Self-Hosted 30.03"]},{"href":"/compute/api/","label":"Prisma Cloud API v31.02","description":"Prisma Cloud API Reference ","icon":"\u2699\ufe0f","sitemap_feature":["API"],"sitemap_osversion":["Self-Hosted 31.02"]}]},"sase":{"href":"/sase","label":"Prisma SASE","sitemap_productcategory":["Prisma","Prisma SASE"],"sitemap_feature":["Prisma","Prisma SASE","SASE"],"children":[{"href":"/sase/docs","label":"Prisma SASE Docs","description":"Prisma SASE Developer Guide"},{"href":"/sase/api/tenancy","label":"Tenancy Service API","description":"Tenancy Service API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/sase/api/iam","label":"IAM API","description":"IAM API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/sase/api/auth","label":"Authentication Service API","description":"Authentication Service API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/sase/api/subscription","label":"Subscription Service API","description":"Subscription Service API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/sase/api/mt-monitor","label":"Aggregate Monitoring APIs","description":"Aggregate Monitoring API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"]}]},"sdwan":{"href":"/sdwan","label":"Prisma SD-WAN","sitemap_productcategory":["Prisma","Prisma SD-WAN"],"sitemap_feature":["Prisma SD-WAN"],"children":[{"href":"/sdwan/docs","label":"Prisma SD-WAN Docs","description":"Prisma SD-WAN Developer Guide"},{"href":"/sdwan/api/unified","label":"Unified SASE SD-WAN APIs","description":"Unified SASE SD-WAN APIs","icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/sdwan/api/legacy","label":"Legacy Prisma SD-WAN APIs","description":"Legacy Prisma SD-WAN APIs","icon":"\u2699\ufe0f","sitemap_feature":["API"]}]},"access":{"href":"/access","label":"Prisma Access","sitemap_productcategory":["Prisma","Prisma Access"],"sitemap_feature":["Prisma","Prisma Access"],"children":[{"href":"/access/docs","label":"Prisma Access Docs","description":"Prisma Access Developer Guide"},{"href":"/access/api/prisma-access-config","label":"Prisma Access Configuration API","description":"Prisma Access Configuration API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/access/api/ztna","label":"ZTNA Connector API","description":"ZTNA Connector API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/access/api/adem","label":"Autonomous DEM APIs","description":"Autonomous DEM APIs","icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/access/api/insights/1.0","label":"Prisma Access Insights 1.0 APIs","description":"Prisma Access Insights 1.0 APIs","icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/access/api/insights","label":"Prisma Access Insights 2.0 APIs","description":"Prisma Access Insights 2.0 APIs","icon":"\u2699\ufe0f","sitemap_feature":["API"]}]},"panos":{"href":"/panos","label":"PAN-OS","sitemap_productcategory":["PAN-OS"],"children":[{"href":"/panos/docs/apis","label":"PAN-OS APIs and SDKs","description":"Guides to use PAN-OS APIs and SDKs","icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/panos/docs/automation","label":"PAN-OS Automation","description":"Guides to use PAN-OS APIs and SDKs","icon":"\u2699\ufe0f"}]},"expedition":{"href":"/expedition","label":"Expedition","sitemap_productcategory":["PAN-OS"],"children":[{"href":"/expedition/docs/","label":"Expedition Docs","description":"Guides to use Expedition","icon":"\u2699\ufe0f"}]},"cdl":{"href":"/cdl","label":"Cortex Data Lake","sitemap_productcategory":["Cortex Data Lake"],"children":[{"href":"/cdl/docs/","label":"Cortex Data Lake Docs","description":"Guides to use Cortex Data Lake","icon":"\u2699\ufe0f"},{"href":"/cdl/api/","label":"Cortex Data Lake APIs","description":"CDL API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"]}]},"terraform-panos":{"href":"/terraform","make_link":true,"label":"Terraform","sitemap_feature":["Automation"],"children":[{"href":"/terraform/docs/panos","label":"Terraform for PAN-OS","description":"Guides to use Terraform for PAN-OS","icon":"\u2699\ufe0f","sitemap_productcategory":["PAN-OS"]}]},"swfw":{"href":"/swfw","make_link":true,"label":"Software NGFW Automation","sitemap_feature":["Automation"],"children":[{"add_crumb":true,"match":"/terraform/docs/swfw/aws/vmseries","href":"/terraform/docs/swfw/aws/vmseries/overview","label":"AWS - VM-Series"},{"add_crumb":true,"match":"/terraform/docs/swfw/aws/cloudngfw","href":"/terraform/docs/swfw/aws/cloudngfw/overview","label":"AWS - CloudNGFW"},{"add_crumb":true,"match":"/terraform/docs/swfw/azure/vmseries","href":"/terraform/docs/swfw/azure/vmseries/overview","label":"Azure - VM-Series"},{"add_crumb":true,"match":"/terraform/docs/swfw/azure/cloudngfw","href":"/terraform/docs/swfw/azure/cloudngfw/overview","label":"Azure - CloudNGFW"},{"add_crumb":true,"match":"/terraform/docs/swfw/gcp/vmseries","href":"/terraform/docs/swfw/gcp/vmseries/overview","label":"GCP - VM-Series"},{"add_crumb":true,"match":"/terraform/docs/swfw/gcp/cloudngfw","href":"/terraform/docs/swfw/gcp/cloudngfw/overview","label":"GCP - CloudNGFW"}]},"ansible-panos":{"href":"/ansible","label":"Ansible","sitemap_feature":["Automation"],"children":[{"href":"/ansible/docs/panos","label":"Ansible for PAN-OS","description":"Guides to use Ansible for PAN-OS","icon":"\u2699\ufe0f","sitemap_productcategory":["PAN-OS"]}]},"splunk":{"href":"/splunk","label":"Splunk","sitemap_feature":["SIEM"],"children":[{"href":"/splunk/docs/","label":"Palo Alto Networks Splunk App/Add-on","description":"Documentation on Splunk integration.","icon":"\u2699\ufe0f","sitemap_productcategory":["PAN-OS"]}]}}'
      );
    },
  },
]);
