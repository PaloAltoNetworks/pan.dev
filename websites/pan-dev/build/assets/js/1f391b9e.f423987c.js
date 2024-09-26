"use strict";
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [61],
  {
    3337: (e, a, l) => {
      l.r(a), l.d(a, { default: () => m });
      var n = l(31085),
        s = (l(14041), l(9546)),
        t = l(11171),
        c = l(28637),
        r = l(28407),
        d = l(40546),
        i = l(21407);
      const o = { mdxPageWrapper: "mdxPageWrapper_SLvB" };
      function m(e) {
        const { content: a } = e,
          {
            metadata: { title: l, description: m, frontMatter: p },
          } = a,
          { wrapperClassName: x, hide_table_of_contents: h } = p;
        return (0, n.jsxs)(t.e3, {
          className: (0, s.default)(
            null != x ? x : c.G.wrapper.mdxPages,
            c.G.page.mdxPage
          ),
          children: [
            (0, n.jsx)(t.be, { title: l, description: m }),
            (0, n.jsx)(r.A, {
              children: (0, n.jsx)("main", {
                className: "container container--fluid margin-vert--lg",
                children: (0, n.jsxs)("div", {
                  className: (0, s.default)("row", o.mdxPageWrapper),
                  children: [
                    (0, n.jsx)("div", {
                      className: (0, s.default)("col", !h && "col--8"),
                      children: (0, n.jsx)("article", {
                        children: (0, n.jsx)(d.A, {
                          children: (0, n.jsx)(a, {}),
                        }),
                      }),
                    }),
                    !h &&
                      a.toc.length > 0 &&
                      (0, n.jsx)("div", {
                        className: "col col--2",
                        children: (0, n.jsx)(i.A, {
                          toc: a.toc,
                          minHeadingLevel: p.toc_min_heading_level,
                          maxHeadingLevel: p.toc_max_heading_level,
                        }),
                      }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
  },
]);
