"use strict";
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [714],
  {
    27945: (e, s, l) => {
      l.r(s), l.d(s, { default: () => v });
      var i = l(31085),
        a = l(14041),
        r = l(28407),
        n = l(90780),
        c = l(89436),
        o = l(26058),
        d = l.n(o),
        t = l(15323),
        h = l(28512),
        m = l(11171),
        x = l(86090);
      function v() {
        const {
            siteConfig: { themeConfig: e },
          } = (0, h.default)(),
          {
            algolia: { appId: s, apiKey: l, indexName: o, externalUrlRegex: v },
          } = e,
          [j, u] = (0, a.useState)([]),
          f = (0, x.zy)().pathname.split("/").join(" "),
          g = d()(s, l).initIndex(o);
        return (
          (0, a.useEffect)(() => {
            !(async function () {
              const e = await Promise.resolve(
                g.search(f, {
                  distinct: 1,
                  hitsPerPage: 5,
                  facetFilters: [["tags:pandev"]],
                })
              );
              u(e.hits);
            })();
          }, []),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(m.be, { title: "Page Not Found" }),
              (0, i.jsx)(r.A, {
                children: (0, i.jsxs)("main", {
                  children: [
                    (0, i.jsx)("div", {
                      className: "container hero-container",
                      children: (0, i.jsx)("div", {
                        className: "hero-content-container",
                        style: { paddingBottom: "1rem" },
                        children: (0, i.jsx)("div", {
                          className: "container",
                          children: (0, i.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, i.jsx)("div", {
                                className: "col col--4",
                                children: (0, i.jsx)("img", {
                                  src: "/img/404_Page.svg",
                                  alt: "Page not found",
                                }),
                              }),
                              (0, i.jsxs)("div", {
                                className: "col col--8",
                                children: [
                                  (0, i.jsx)("h1", {
                                    className: "hero__title",
                                    children:
                                      "Sorry, we have a broken link or this URL doesn't exist.",
                                  }),
                                  (0, i.jsx)("p", {
                                    className: "hero__subtitle",
                                    children:
                                      "Our team has been notified of this error.",
                                  }),
                                  (0, i.jsxs)("h3", {
                                    className: "padding-vert--md",
                                    children: [
                                      (0, i.jsx)(n.default, {
                                        uppercase: "false",
                                        href: (0, t.A)(
                                          "/#developer-docs-section"
                                        ),
                                        children: "EXPLORE OUR DEVELOPER DOCS",
                                      }),
                                      " ",
                                      "or use our",
                                      " ",
                                      (0, i.jsx)("span", {
                                        className: "dummy-search",
                                        style: { display: "inline-block" },
                                        children: (0, i.jsx)(c.A, {}),
                                      }),
                                      " ",
                                      "to find what you're looking for.",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    j.length > 0 &&
                      (0, i.jsxs)("div", {
                        className: "padding-vert--lg padding--lg",
                        children: [
                          (0, i.jsx)("hr", {}),
                          (0, i.jsx)("div", {
                            className: "row",
                            children: (0, i.jsxs)("div", {
                              className: "col col--12 col--offset-1",
                              children: [
                                (0, i.jsxs)("h2", {
                                  children: [
                                    "We found some pages that might match what you're looking for:",
                                    " ",
                                  ],
                                }),
                                j.map((e) => {
                                  var s, l, a;
                                  return (0, i.jsx)(
                                    "div",
                                    {
                                      className: "row",
                                      children: (0, i.jsx)("div", {
                                        className: "result",
                                        children: (0, i.jsxs)("a", {
                                          href: e.url,
                                          children: [
                                            e.hierarchy.lvl0,
                                            " > ",
                                            null !==
                                              (a =
                                                null !==
                                                  (l =
                                                    null !==
                                                      (s = e.hierarchy.lvl1) &&
                                                    void 0 !== s
                                                      ? s
                                                      : e.hierarchy.lvl2) &&
                                                void 0 !== l
                                                  ? l
                                                  : e.hierarchy.lvl3) &&
                                            void 0 !== a
                                              ? a
                                              : e.hierarchy.lvl4,
                                          ],
                                        }),
                                      }),
                                    },
                                    e.objectID
                                  );
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    (0, i.jsx)("div", {
                      className: "padding-vert--lg padding--lg",
                      children: (0, i.jsx)("div", {
                        className: "row",
                        children: (0, i.jsxs)("div", {
                          className: "col col--12 col--offset-1",
                          children: [
                            (0, i.jsx)("h2", {
                              children:
                                "Still not finding what you're looking for?",
                            }),
                            (0, i.jsxs)("p", {
                              children: [
                                "Visit our",
                                " ",
                                (0, i.jsx)("a", {
                                  href: "https://docs.paloaltonetworks.com",
                                  children: "TechDocs",
                                }),
                                " site for additional API and product documentation.",
                                " ",
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
  },
]);
