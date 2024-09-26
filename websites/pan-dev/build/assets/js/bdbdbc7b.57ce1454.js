"use strict";
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [157],
  {
    82247: (e, t, a) => {
      a.d(t, { xA: () => g, yg: () => m });
      var n = a(14041);
      function r(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function l(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(a), !0).forEach(function (t) {
                r(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : l(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function o(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (a = l[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (a = l[n]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (r[a] = e[a]));
        }
        return r;
      }
      var p = n.createContext({}),
        s = function (e) {
          var t = n.useContext(p),
            a = t;
          return e && (a = "function" == typeof e ? e(t) : i(i({}, t), e)), a;
        },
        g = function (e) {
          var t = s(e.components);
          return n.createElement(p.Provider, { value: t }, e.children);
        },
        d = "mdxType",
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        y = n.forwardRef(function (e, t) {
          var a = e.components,
            r = e.mdxType,
            l = e.originalType,
            p = e.parentName,
            g = o(e, ["components", "mdxType", "originalType", "parentName"]),
            d = s(a),
            y = r,
            m = d["".concat(p, ".").concat(y)] || d[y] || u[y] || l;
          return a
            ? n.createElement(m, i(i({ ref: t }, g), {}, { components: a }))
            : n.createElement(m, i({ ref: t }, g));
        });
      function m(e, t) {
        var a = arguments,
          r = t && t.mdxType;
        if ("string" == typeof e || r) {
          var l = a.length,
            i = new Array(l);
          i[0] = y;
          var o = {};
          for (var p in t) hasOwnProperty.call(t, p) && (o[p] = t[p]);
          (o.originalType = e),
            (o[d] = "string" == typeof e ? e : r),
            (i[1] = o);
          for (var s = 2; s < l; s++) i[s] = a[s];
          return n.createElement.apply(null, i);
        }
        return n.createElement.apply(null, a);
      }
      y.displayName = "MDXCreateElement";
    },
    81197: (e, t, a) => {
      a.r(t),
        a.d(t, {
          SetLanguage: () => d,
          assets: () => s,
          contentTitle: () => o,
          default: () => m,
          frontMatter: () => i,
          metadata: () => p,
          toc: () => g,
        });
      a(14041);
      var n = a(82247),
        r = a(99813),
        l = a(51801);
      const i = {
          id: "expedition_workflow_filters",
          title: "Expedition-API Filters",
          sidebar_label: "Expedition-API Filters",
          hide_title: !1,
          description: "Using Filters Workflow",
          keywords: [
            "pan-os",
            "panos",
            "xml",
            "api",
            "expedition",
            "migration",
            "firewall",
            "configuration",
            "automation",
            "migration",
            "conversion",
            "filter",
          ],
          image: "/expedition/img/expedition.png",
        },
        o = void 0,
        p = {
          unversionedId: "expedition/docs/expedition_workflow_filters",
          id: "expedition/docs/expedition_workflow_filters",
          title: "Expedition-API Filters",
          description: "Using Filters Workflow",
          source:
            "@site/products/expedition/docs/expedition_workflow_filters.md",
          sourceDirName: "expedition/docs",
          slug: "/expedition/docs/expedition_workflow_filters",
          permalink: "/expedition/docs/expedition_workflow_filters",
          draft: !1,
          editUrl:
            "https://github.com/PaloAltoNetworks/pan.dev/tree/master/products/expedition/docs/expedition_workflow_filters.md",
          tags: [],
          version: "current",
          frontMatter: {
            id: "expedition_workflow_filters",
            title: "Expedition-API Filters",
            sidebar_label: "Expedition-API Filters",
            hide_title: !1,
            description: "Using Filters Workflow",
            keywords: [
              "pan-os",
              "panos",
              "xml",
              "api",
              "expedition",
              "migration",
              "firewall",
              "configuration",
              "automation",
              "migration",
              "conversion",
              "filter",
            ],
            image: "/expedition/img/expedition.png",
          },
          sidebar: "expedition",
          previous: {
            title: "Managing Jobs",
            permalink: "/expedition/docs/managing_jobs",
          },
          next: {
            title: "3rd party vendor configuration Migration",
            permalink: "/expedition/docs/expedition_workflow_migration",
          },
        },
        s = {},
        g = [
          {
            value: "Filter Characteristics",
            id: "filter-characteristics",
            level: 2,
          },
          { value: "Filters Types", id: "filters-types", level: 2 },
          { value: "Predefined Filters", id: "predefined-filters", level: 3 },
          { value: "Single Filter", id: "single-filter", level: 3 },
          { value: "Combination Filter", id: "combination-filter", level: 3 },
          { value: "Operation filters", id: "operation-filters", level: 3 },
          {
            value: "Filter related API Calls",
            id: "filter-related-api-calls",
            level: 2,
          },
          { value: "Create Filter", id: "create-filter", level: 3 },
          { value: "Update Filter", id: "update-filter", level: 3 },
          { value: "Delete Filter", id: "delete-filter", level: 3 },
          { value: "List Filter", id: "list-filter", level: 3 },
          { value: "List All Filters", id: "list-all-filters", level: 3 },
          { value: "Execute Filter", id: "execute-filter", level: 3 },
          { value: "List Filter Results", id: "list-filter-results", level: 3 },
          { value: "Get Filter History", id: "get-filter-history", level: 3 },
        ];
      function d(e) {
        "undefined" != typeof window &&
          (localStorage.setItem("defaultLanguage", e),
          window.location.reload());
      }
      const u = { toc: g, SetLanguage: d },
        y = "wrapper";
      function m({ components: e, ...t }) {
        return (0, n.yg)(
          y,
          { ...u, ...t, components: e, mdxType: "MDXLayout" },
          (0, n.yg)(
            "p",
            null,
            "In this section we will learn on the usage of ",
            (0, n.yg)("inlineCode", { parentName: "p" }, "predefined filters"),
            ", ",
            (0, n.yg)("inlineCode", { parentName: "p" }, "simple filters"),
            ",\n",
            (0, n.yg)("inlineCode", { parentName: "p" }, "complex filters"),
            " and ",
            (0, n.yg)("inlineCode", { parentName: "p" }, "combination filters"),
            "; as well on the task related to their creation, monitoring on their execution state and collection of filtered results."
          ),
          (0, n.yg)(
            "h2",
            { id: "filter-characteristics" },
            "Filter Characteristics"
          ),
          (0, n.yg)(
            "p",
            null,
            "Expedition 2 allows creating filters on the different objects that a configuration contains.\nrestrict the target of actions, specifying the objects that should appear in reports, identifying objects\nthat should be deleted, etc.\nOne filters may be desirable for multiple goals, therefore, the filters have been designed for\nsharing and reuse."
          ),
          (0, n.yg)(
            "p",
            null,
            "As main characteristics, we can state that filters are"
          ),
          (0, n.yg)(
            "ul",
            null,
            (0, n.yg)(
              "li",
              { parentName: "ul" },
              (0, n.yg)("strong", { parentName: "li" }, "named"),
              ", so we can identify them and refer to them"
            ),
            (0, n.yg)(
              "li",
              { parentName: "ul" },
              (0, n.yg)(
                "strong",
                { parentName: "li" },
                "executed in background"
              ),
              ", as tasks that can be monitored and are non-blocking"
            ),
            (0, n.yg)(
              "li",
              { parentName: "ul" },
              (0, n.yg)("strong", { parentName: "li" }, "stored"),
              ", so we can get back to the results of a filter at any given point"
            ),
            (0, n.yg)(
              "li",
              { parentName: "ul" },
              (0, n.yg)("strong", { parentName: "li" }, "reusable"),
              ", in order to combine them in other filters"
            ),
            (0, n.yg)(
              "li",
              { parentName: "ul" },
              (0, n.yg)("strong", { parentName: "li" }, "exportable"),
              " between projects and between Expeditions, to be shared in the community or applied to multiple projects in an easy manner"
            )
          ),
          (0, n.yg)("h2", { id: "filters-types" }, "Filters Types"),
          (0, n.yg)(
            "table",
            null,
            (0, n.yg)(
              "thead",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "thead" },
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Filter Type"
                ),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Description"
                ),
                (0, n.yg)("th", { parentName: "tr", align: null }, "Example")
              )
            ),
            (0, n.yg)(
              "tbody",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)("strong", { parentName: "td" }, "Predefined")
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "Predefined filters. This do not require parameters as the logic is intrinsic to the filter"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)("inlineCode", { parentName: "td" }, "fi1"),
                    ": ",
                    "[address]",
                    " is ipv4 "
                  )
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)("strong", { parentName: "td" }, "Simple")
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "This is the basic filter where you can ask for a specific property of one or multiple object types"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)("inlineCode", { parentName: "td" }, "fi2"),
                    ": ",
                    "[address,addressGroup]",
                    " name contains 'DNS' "
                  )
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)("strong", { parentName: "td" }, "Combination")
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "Filters that use other filters' results to evaluate the filter logic"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)("inlineCode", { parentName: "td" }, "fi3"),
                    ": ",
                    "[securityRule]",
                    " source contains filter ",
                    (0, n.yg)("inlineCode", { parentName: "td" }, "'fi2'"),
                    " "
                  )
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)("strong", { parentName: "td" }, "Operation")
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "Filters that perform boolean logic operations on other defined filters"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)("inlineCode", { parentName: "td" }, "fi4"),
                    ": (filter ",
                    (0, n.yg)("inlineCode", { parentName: "td" }, "'fi1'"),
                    " and filter ",
                    (0, n.yg)("inlineCode", { parentName: "td" }, "'fi2'"),
                    ") or filter ",
                    (0, n.yg)("inlineCode", { parentName: "td" }, "'fi3'")
                  )
                )
              )
            )
          ),
          (0, n.yg)("h3", { id: "predefined-filters" }, "Predefined Filters"),
          (0, n.yg)(
            "p",
            null,
            "These are a type of single filter.\nSyntax\n",
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              (0, n.yg)("i", null, "[object_types]")
            ),
            " is (not) ",
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              "predefined_filter.success"
            )
          ),
          (0, n.yg)(
            "p",
            null,
            "Example: ",
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              (0, n.yg)("i", null, "[address]")
            ),
            " is ",
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              (0, n.yg)("i", null, "not used.success")
            ),
            " . Will return all unused addresses"
          ),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)("strong", { parentName: "p" }, "Valid predefined filters")
          ),
          (0, n.yg)(
            "table",
            null,
            (0, n.yg)(
              "thead",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "thead" },
                (0, n.yg)("th", { parentName: "tr", align: null }, "Filter"),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Object Types possibles"
                )
              )
            ),
            (0, n.yg)(
              "tbody",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "used"),
                (0, n.yg)("td", { parentName: "tr", align: null }, "all")
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "invalid"),
                (0, n.yg)("td", { parentName: "tr", align: null }, "all")
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "valid"),
                (0, n.yg)("td", { parentName: "tr", align: null }, "all")
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "without-description"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }, "all")
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "ipv4"),
                (0, n.yg)("td", { parentName: "tr", align: null }, "address")
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "ipv6"),
                (0, n.yg)("td", { parentName: "tr", align: null }, "address")
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "fqdn"),
                (0, n.yg)("td", { parentName: "tr", align: null }, "address")
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "name-is-ip"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }, "address")
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "trashed"),
                (0, n.yg)("td", { parentName: "tr", align: null }, "all")
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "pre-rule"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "security_rule, nat_rule, app_override_rule"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "post-rule"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "security_rule, nat_rule, app_override_rule"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "static-ip"),
                (0, n.yg)("td", { parentName: "tr", align: null }, "nat_rule")
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "dynamic-ip-and-port"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }, "nat_rule")
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "dynamic-ip"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }, "nat_rule")
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "bidirectional"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }, "nat_rule")
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "no-nat"),
                (0, n.yg)("td", { parentName: "tr", align: null }, "nat_rule")
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "log-start"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "security_rule"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "log-end"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "security_rule"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "ml-enabled"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "security_rule"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "re-enabled"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "security_rule"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "dsri-enabled"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "security_rule"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "layer-4"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "security_rule"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "layer-7"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "security_rule"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "has-user"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "security_rule"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "without-tag"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "security_rule"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "without-service"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "security_rule"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "service-any"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "security_rule"
                )
              )
            )
          ),
          (0, n.yg)("h3", { id: "single-filter" }, "Single Filter"),
          (0, n.yg)(
            "p",
            null,
            "This is the basic filter where you can ask for a specific property of one or multiple object types."
          ),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)("strong", { parentName: "p" }, "Example:")
          ),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)("strong", { parentName: "p" }, "Filter"),
            ": ",
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              (0, n.yg)("i", null, "[address, address_group]")
            ),
            " ",
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              "name contains \u201coffice\u201d"
            )
          ),
          (0, n.yg)(
            "p",
            null,
            "This filter would return all addresses and groups where the name contains the word \u201coffice\u201d."
          ),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)("strong", { parentName: "p" }, "Syntax:")
          ),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              (0, n.yg)("i", null, "[object_types]")
            ),
            " ",
            (0, n.yg)("strong", { parentName: "p" }, "property"),
            " (not) ",
            (0, n.yg)("strong", { parentName: "p" }, "operator"),
            " \u201cvalue\u201d"
          ),
          (0, n.yg)(
            "ul",
            null,
            (0, n.yg)(
              "li",
              { parentName: "ul" },
              (0, n.yg)(
                "p",
                { parentName: "li" },
                (0, n.yg)(
                  "strong",
                  { parentName: "p" },
                  (0, n.yg)(
                    "inlineCode",
                    { parentName: "strong" },
                    "[object_types]"
                  )
                ),
                " : Indicates which object types apply the filter between brackets and separated by commas."
              )
            ),
            (0, n.yg)(
              "li",
              { parentName: "ul" },
              (0, n.yg)(
                "p",
                { parentName: "li" },
                (0, n.yg)(
                  "strong",
                  { parentName: "p" },
                  (0, n.yg)("inlineCode", { parentName: "strong" }, "property")
                ),
                ": Property of the object type to search"
              )
            ),
            (0, n.yg)(
              "li",
              { parentName: "ul" },
              (0, n.yg)(
                "p",
                { parentName: "li" },
                (0, n.yg)(
                  "strong",
                  { parentName: "p" },
                  (0, n.yg)("inlineCode", { parentName: "strong" }, "operator")
                ),
                ": Operator. The operators can also be negated with a ",
                (0, n.yg)("strong", { parentName: "p" }, "not"),
                " before the operator. Available Operators:"
              ),
              (0, n.yg)(
                "ul",
                { parentName: "li" },
                (0, n.yg)(
                  "li",
                  { parentName: "ul" },
                  (0, n.yg)("strong", { parentName: "li" }, "contains"),
                  ": The value contains the one provided"
                ),
                (0, n.yg)(
                  "li",
                  { parentName: "ul" },
                  (0, n.yg)("strong", { parentName: "li" }, "equals"),
                  ": The value must be exactly the one provided"
                )
              )
            ),
            (0, n.yg)(
              "li",
              { parentName: "ul" },
              (0, n.yg)(
                "p",
                { parentName: "li" },
                (0, n.yg)(
                  "strong",
                  { parentName: "p" },
                  (0, n.yg)(
                    "inlineCode",
                    { parentName: "strong" },
                    "\u201cvalue\u201d"
                  )
                ),
                ": Value to search, always between quotes"
              )
            )
          ),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              "The valid Object Types are:"
            )
          ),
          (0, n.yg)(
            "table",
            null,
            (0, n.yg)(
              "thead",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "thead" },
                (0, n.yg)("th", { parentName: "tr", align: null }, "OBJECT"),
                (0, n.yg)("th", { parentName: "tr", align: null }, "NETWORK"),
                (0, n.yg)("th", { parentName: "tr", align: null }, "POLICY"),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "SERVER PROFILES"
                )
              )
            ),
            (0, n.yg)(
              "tbody",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "address"),
                (0, n.yg)("td", { parentName: "tr", align: null }, "monitor"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "security_rule"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "email_profile"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "address_group"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "interface_management"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "app_override_rule"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "http_profile"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "tag"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "gp_ipsec_crypto"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "authentication_rule"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "kerberos_profile"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "service"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "ipsec_crypto"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "decryption_rule"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "snmp_trap_profile"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "service_group"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "ike_crypto"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }, "dos_rule"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "saml_profile"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "application"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "virtual_router"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "tunnel_inspection_rule"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "radius_profile"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "application_filter"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }, "zone"),
                (0, n.yg)("td", { parentName: "tr", align: null }, "pbf_rule"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "syslog_profile"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "application_group"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "ike_gateway"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }, "nat_rule"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "tacacs_profile"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "external_list"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "virtual_wire"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }, "qos_rule"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "netflow_profile"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "log_setting"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "ipsec_tunnel"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "sdwan_rule"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "ldap_profile"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "schedule"),
                (0, n.yg)("td", { parentName: "tr", align: null }, "vlan"),
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)("td", { parentName: "tr", align: null })
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "profile"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "zone_protection_profile"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)("td", { parentName: "tr", align: null })
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "profile_group"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "qos_profile"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)("td", { parentName: "tr", align: null })
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "region"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "bfd_profile"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)("td", { parentName: "tr", align: null })
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "report"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "lldp_profile"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)("td", { parentName: "tr", align: null })
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "report_group"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }, "gp_portal"),
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)("td", { parentName: "tr", align: null })
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "error_correction_profile"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }, "gp_mdm"),
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)("td", { parentName: "tr", align: null })
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "traffic_distribution_profile"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "gp_gateway"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)("td", { parentName: "tr", align: null })
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "path_quality_profile"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "clientless_app"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)("td", { parentName: "tr", align: null })
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "saas_quality_profile"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "clientless_app_group"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)("td", { parentName: "tr", align: null })
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "email_scheduler"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "application_status"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)("td", { parentName: "tr", align: null })
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "pdf_summary_report"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "sdwan_interface_profile"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)("td", { parentName: "tr", align: null })
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "scep"),
                (0, n.yg)("td", { parentName: "tr", align: null }, "lldp"),
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)("td", { parentName: "tr", align: null })
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "ssl_tls_profile"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "ethernet_interface"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)("td", { parentName: "tr", align: null })
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "certificate"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "ethernet_subinterface"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)("td", { parentName: "tr", align: null })
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "vlan_interface"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)("td", { parentName: "tr", align: null })
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "loopback_interface"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)("td", { parentName: "tr", align: null })
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "sdwan_interface"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)("td", { parentName: "tr", align: null })
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "tunnel_interface"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }),
                (0, n.yg)("td", { parentName: "tr", align: null })
              )
            )
          ),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              "The valid properties are:"
            )
          ),
          (0, n.yg)(
            "p",
            null,
            "The table below presents the valid properties for each object type, based on the configuration objects in the Palo Alto Networks:\nAll object types can filter by properties: name, description"
          ),
          (0, n.yg)(
            "table",
            null,
            (0, n.yg)(
              "thead",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "thead" },
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Object Type"
                ),
                (0, n.yg)("th", { parentName: "tr", align: null }, "Properties")
              )
            ),
            (0, n.yg)(
              "tbody",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "address"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "type ip_type ipaddress netmask Id"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "address_group"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "type filter expression id"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "service"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "id type protocol src_port dst_port timeout tcp_half_closed_timeout tcp_time_wait_timeout' timeout_override"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "service_group"
                ),
                (0, n.yg)("td", { parentName: "tr", align: null }, "id type")
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "application"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "id application_container parent_app technology category subcategory risk evasive_behavior consume_big_bandwidth prone_to_misuse able_to_transfer_file tunnel_other_application used_by_malware has_known_vulnerability pervasive_use tunnel_applications file_type_ident virus_ident data_ident default_type value timeout tcp_timeout tcp_half_closed_timeout tcp_time_wait_timeout udp_timeout spyware_ident vtype alg_disable_capability no_appid_caching"
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "application_filter"
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "evasive_behavior consume_big_bandwidth prone_to_misuse able_to_transfer_file tunnel_other_application used_by_malware has_known_vulnerability pervasive_use saas_certifications saas_risk type category subcategory technology risk characteristic"
                )
              )
            )
          ),
          (0, n.yg)("h3", { id: "combination-filter" }, "Combination Filter"),
          (0, n.yg)(
            "p",
            null,
            "The combined filters are the ones that require subfilters. For example a security rule that contains some specific addresses in its source.\nFor example, if we want all security rules that have the \u201coffice\u201d addresses from the previous example in its source the filter would be:\n",
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              (0, n.yg)("i", null, "[security_rule]")
            ),
            " ",
            (0, n.yg)("strong", { parentName: "p" }, "source_address"),
            " contains filter ",
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              (0, n.yg)("i", null, "office_address.success")
            )
          ),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)("strong", { parentName: "p" }, "Syntax")
          ),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              (0, n.yg)("i", null, "[object_types]")
            ),
            " ",
            (0, n.yg)("strong", { parentName: "p" }, "property"),
            " (not) ",
            (0, n.yg)("strong", { parentName: "p" }, "operator filter"),
            " ",
            (0, n.yg)("i", null, "filter_reference.success")
          ),
          (0, n.yg)(
            "ul",
            null,
            (0, n.yg)(
              "li",
              { parentName: "ul" },
              (0, n.yg)(
                "strong",
                { parentName: "li" },
                (0, n.yg)(
                  "inlineCode",
                  { parentName: "strong" },
                  "[object_types]"
                )
              ),
              " : indicates which object types apply the filter between brackets and separated by commas."
            ),
            (0, n.yg)(
              "li",
              { parentName: "ul" },
              (0, n.yg)(
                "strong",
                { parentName: "li" },
                (0, n.yg)("inlineCode", { parentName: "strong" }, "property")
              ),
              ": Property of the object type to search"
            ),
            (0, n.yg)(
              "li",
              { parentName: "ul" },
              (0, n.yg)(
                "strong",
                { parentName: "li" },
                (0, n.yg)("inlineCode", { parentName: "strong" }, "operator")
              ),
              ": The operators can also be negated with a not before the operator"
            ),
            (0, n.yg)(
              "li",
              { parentName: "ul" },
              (0, n.yg)(
                "strong",
                { parentName: "li" },
                (0, n.yg)("inlineCode", { parentName: "strong" }, "filter")
              ),
              ": It is necessary to indicate that after it will come the name of a filter"
            ),
            (0, n.yg)(
              "li",
              { parentName: "ul" },
              (0, n.yg)(
                "strong",
                { parentName: "li" },
                (0, n.yg)(
                  "inlineCode",
                  { parentName: "strong" },
                  "filter_reference"
                )
              ),
              ": Name of the filter to act as subfilter. In this example, the filter_reference is ",
              (0, n.yg)(
                "strong",
                { parentName: "li" },
                (0, n.yg)("i", null, "office_address.success")
              ),
              "  "
            )
          ),
          (0, n.yg)("h3", { id: "operation-filters" }, "Operation filters"),
          (0, n.yg)(
            "p",
            null,
            "The operations filters allow combining filters making unions and intersections.",
            (0, n.yg)("br", { parentName: "p" }),
            "\n",
            "There are two different operators allowed: ",
            (0, n.yg)("strong", { parentName: "p" }, "or"),
            " (unions) and ",
            (0, n.yg)("strong", { parentName: "p" }, "and"),
            "(intersections). These operators can also be negated with a ",
            (0, n.yg)("strong", { parentName: "p" }, "not"),
            "."
          ),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)("strong", { parentName: "p" }, "Example"),
            ": ",
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              (0, n.yg)("i", null, "filter")
            ),
            " office_address ",
            (0, n.yg)("strong", { parentName: "p" }, "and not"),
            " ",
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              (0, n.yg)("i", null, "filter")
            ),
            " home_address"
          ),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)("strong", { parentName: "p" }, "Syntax"),
            (0, n.yg)("br", { parentName: "p" }),
            "\n",
            "Defining a syntax here is not that simple since multiple combinations can be done using the operators and parentheses. An example can be:"
          ),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              (0, n.yg)("i", null, "filter")
            ),
            " filter_name1 ",
            (0, n.yg)("strong", { parentName: "p" }, "and"),
            " (",
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              (0, n.yg)("i", null, "filter")
            ),
            " filter_name2.success ",
            (0, n.yg)("strong", { parentName: "p" }, "or"),
            " ",
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              (0, n.yg)("i", null, "filter")
            ),
            " filter_name4.success)"
          ),
          (0, n.yg)(
            "ul",
            null,
            (0, n.yg)(
              "li",
              { parentName: "ul" },
              (0, n.yg)(
                "strong",
                { parentName: "li" },
                (0, n.yg)("inlineCode", { parentName: "strong" }, "filter")
              ),
              ": it is necessary to indicate that after it will come the name of a filter"
            ),
            (0, n.yg)(
              "li",
              { parentName: "ul" },
              (0, n.yg)(
                "strong",
                { parentName: "li" },
                (0, n.yg)(
                  "inlineCode",
                  { parentName: "strong" },
                  "filter_nameX"
                )
              ),
              " : Name of the filter"
            ),
            (0, n.yg)(
              "li",
              { parentName: "ul" },
              (0, n.yg)(
                "strong",
                { parentName: "li" },
                (0, n.yg)("inlineCode", { parentName: "strong" }, "and")
              ),
              ": Operator that indicates intersection between filter results"
            ),
            (0, n.yg)(
              "li",
              { parentName: "ul" },
              (0, n.yg)(
                "strong",
                { parentName: "li" },
                (0, n.yg)("inlineCode", { parentName: "strong" }, "or")
              ),
              ": Operator that indicates union of filter results"
            ),
            (0, n.yg)(
              "li",
              { parentName: "ul" },
              (0, n.yg)(
                "strong",
                { parentName: "li" },
                (0, n.yg)("inlineCode", { parentName: "strong" }, "()")
              ),
              ": The parentheses can be used to make preference to some operations over others",
              (0, n.yg)("br", { parentName: "li" }),
              "For operations content the ",
              (0, n.yg)(
                "strong",
                { parentName: "li" },
                (0, n.yg)("inlineCode", { parentName: "strong" }, "not")
              ),
              " operator is not available.  "
            )
          ),
          (0, n.yg)(
            "h2",
            { id: "filter-related-api-calls" },
            "Filter related API Calls"
          ),
          (0, n.yg)("h3", { id: "create-filter" }, "Create Filter"),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)("strong", { parentName: "p" }, "Description:"),
            " Creates a new filter and returns the filter created",
            (0, n.yg)("br", { parentName: "p" }),
            "\n",
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              "API syntax for creating a filter:"
            )
          ),
          (0, n.yg)(
            "table",
            null,
            (0, n.yg)(
              "thead",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "thead" },
                (0, n.yg)("th", { parentName: "tr", align: null }, "Method"),
                (0, n.yg)("th", { parentName: "tr", align: null }, "API Route"),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Request Body Parameters"
                ),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Example Value"
                )
              )
            ),
            (0, n.yg)(
              "tbody",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "POST"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/{project_id}/tools/filter"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)("small", null, "name, filter")
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    "{",
                    (0, n.yg)("strong", { parentName: "td" }, '"name"'),
                    ':"filter_name", ',
                    (0, n.yg)("strong", { parentName: "td" }, '"filter"'),
                    ":",
                    (0, n.yg)(
                      "strong",
                      { parentName: "td" },
                      '"',
                      "[address, address_group]",
                      ' name contains \\"office\\""}'
                    )
                  )
                )
              )
            )
          ),
          (0, n.yg)(
            r.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, n.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, n.yg)(
                "pre",
                null,
                (0, n.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'def CreateFilter():\n    print("Create a filter for address & address group objects contain "office"")\n    url = "https://localhost/api/v1/project/" + projectId + "/tools/filter"\n    data = {\n     "name": "officeobject",\n     "description":"filter example",\n     "filter": "[address, address_group] name not contains \\"office\\"",\n    }\n    r = requests.post(url, data=data, verify=False, headers=hed)\n    response = r.json()\n    print(response)\n    global filterID\n    filterID = json.dumps(response["data"]["last_history_entry"]["filter_id"])\n    print("your filter ID is " + filterID)\n\n'
                )
              )
            )
          ),
          "The successful Json response will be similar to the following:",
          (0, n.yg)(
            "pre",
            null,
            (0, n.yg)(
              "code",
              { parentName: "pre", className: "language-json" },
              '{\n  "data": {\n    "id": 21,\n    "status": "potentially_invalid",\n    "type": "single",\n    "warnings": [],\n    "created_at": "2021-07-15 06:18:28",\n    "updated_at": "2021-07-15 06:18:28",\n    "last_history_entry": {\n      "filter_id": 21,\n      "description": "new filter",\n      "updated_at": "2021-07-15 06:18:28"\n    },\n    "name": "officeobject",\n    "description": "filter example",\n    "filter": "[address, address_group] name contains \\"office\\""\n  },\n  "metadata": [],\n  "pagination": {\n    "total": 1,\n    "current_page": 1,\n    "per_page": 25,\n    "total_pages": 1\n  },\n  "success": true\n}\n'
            )
          ),
          (0, n.yg)(
            "admonition",
            { type: "note" },
            (0, n.yg)(
              "p",
              { parentName: "admonition" },
              "When a new filter is created it is marked as potentially invalid, since creating a filter means store it but not execute it. Once the filter is executed then the warning of invalid filter disappears."
            )
          ),
          (0, n.yg)("h3", { id: "update-filter" }, "Update Filter"),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)("strong", { parentName: "p" }, "Description:"),
            "\nUpdates the parameters of a specific filter"
          ),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              "API syntax for updating a filter:"
            )
          ),
          (0, n.yg)(
            "table",
            null,
            (0, n.yg)(
              "thead",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "thead" },
                (0, n.yg)("th", { parentName: "tr", align: null }, "Method"),
                (0, n.yg)("th", { parentName: "tr", align: null }, "API Route"),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Request Body Parameters"
                ),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Example Value"
                )
              )
            ),
            (0, n.yg)(
              "tbody",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "PUT"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)("small", null, "name, filter")
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    "{",
                    (0, n.yg)("strong", { parentName: "td" }, '"name"'),
                    ':"filter_name", ',
                    (0, n.yg)("strong", { parentName: "td" }, '"filter"'),
                    ":",
                    (0, n.yg)(
                      "strong",
                      { parentName: "td" },
                      '"',
                      "[address, address_group]",
                      ' name contains \\"office\\""}'
                    )
                  )
                )
              )
            )
          ),
          (0, n.yg)(
            r.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, n.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, n.yg)(
                "pre",
                null,
                (0, n.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'def UpdateFilter():\n    print("Update the filter for address & address group objects does not contain "office"")\n    url = "https://localhost/api/v1/project/" + projectId + "/tools/filter" + filterID\n    data = {\n     "name": "officeobject",\n     "description":"filter example",\n     "filter": "[address, address_group] name contains \\"office\\"",\n    }\n    r = requests.put(url, data=data, verify=False, headers=hed)\n    response = r.json()\n    print(response)\n\n'
                )
              )
            )
          ),
          "The successful Json response will be similar to the following:",
          (0, n.yg)(
            "pre",
            null,
            (0, n.yg)(
              "code",
              { parentName: "pre", className: "language-json" },
              '{\n  "data": {\n    "id": 18,\n    "status": "potentially_invalid",\n    "type": "single",\n    "warnings": 1,\n    "created_at": "2021-07-14 06:32:42",\n    "updated_at": "2021-07-15 08:46:49",\n    "matches": 0,\n    "last_history_entry": {\n      "filter_id": 18,\n      "description": "modified filter",\n      "updated_at": "2021-07-15 08:46:49"\n    },\n    "name": "officeobject",\n    "description": "filter example",\n    "filter": "[address, address_group] name contains \\"office\\""\n  },\n  "metadata": [],\n  "pagination": {\n    "total": 1,\n    "current_page": 1,\n    "per_page": 25,\n    "total_pages": 1\n  },\n  "success": true\n}\n'
            )
          ),
          (0, n.yg)(
            "admonition",
            { type: "note" },
            (0, n.yg)(
              "p",
              { parentName: "admonition" },
              "Everytime a filter is modified, it will be marked as potentially_invalid, since the modification could affect the result calculated."
            )
          ),
          (0, n.yg)("h3", { id: "delete-filter" }, "Delete Filter"),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)("strong", { parentName: "p" }, "Description:"),
            " Deletes a filter",
            (0, n.yg)("br", { parentName: "p" }),
            "\n",
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              "API syntax for deleting a filter:"
            )
          ),
          (0, n.yg)(
            "table",
            null,
            (0, n.yg)(
              "thead",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "thead" },
                (0, n.yg)("th", { parentName: "tr", align: null }, "Method"),
                (0, n.yg)("th", { parentName: "tr", align: null }, "API Route"),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Path Parameters"
                ),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Example Path"
                )
              )
            ),
            (0, n.yg)(
              "tbody",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "DELETE"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)("small", null, "{project_id}, {filter_id}")
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/48/tools/filter/22"
                    )
                  )
                )
              )
            )
          ),
          (0, n.yg)(
            r.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, n.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, n.yg)(
                "pre",
                null,
                (0, n.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'def DeleteFilter():\n    print("Delete the filter for address & address group objects does not contain "office"")\n    url = "https://localhost/api/v1/project/" + projectId + "/tools/filter" + filterID\n    r = requests.delete(url, verify=False, headers=hed)\n    response = r.json()\n    print(response)\n\n'
                )
              )
            )
          ),
          "The successful Json response will be similar to the following:",
          (0, n.yg)(
            "pre",
            null,
            (0, n.yg)(
              "code",
              { parentName: "pre", className: "language-json" },
              '{\n  "data": {\n    "id": 22,\n    "status": "executed",\n    "type": "single",\n    "warnings": 0,\n    "created_at": "2021-07-15 06:27:54",\n    "updated_at": "2021-07-15 06:27:54",\n    "matches": 0,\n    "last_history_entry": {\n      "filter_id": 22,\n      "description": "new filter",\n      "updated_at": "2021-07-15 06:27:54"\n    },\n    "name": "used",\n    "description": "all used addresses",\n    "filter": "[address] is used"\n  },\n  "metadata": [],\n  "pagination": {\n    "total": 1,\n    "current_page": 1,\n    "per_page": 25,\n    "total_pages": 1\n  },\n  "success": true\n}\n'
            )
          ),
          (0, n.yg)("h3", { id: "list-filter" }, "List Filter"),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)("strong", { parentName: "p" }, "Description: "),
            " Lists information of one specific filter",
            (0, n.yg)("br", { parentName: "p" }),
            "\n",
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              "API syntax for listing information of one specific filter:"
            )
          ),
          (0, n.yg)(
            "table",
            null,
            (0, n.yg)(
              "thead",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "thead" },
                (0, n.yg)("th", { parentName: "tr", align: null }, "Method"),
                (0, n.yg)("th", { parentName: "tr", align: null }, "API Route"),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Path Parameters"
                ),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Example Path"
                )
              )
            ),
            (0, n.yg)(
              "tbody",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "GET"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)("small", null, "{project_id}, {filter_id}")
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/48/tools/filter/23/success"
                    )
                  )
                )
              )
            )
          ),
          (0, n.yg)(
            r.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, n.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, n.yg)(
                "pre",
                null,
                (0, n.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'def ListFilter():\n    print("List the filter for all used addresses")\n    url = "https://localhost/api/v1/project/" + projectId + "/tools/filter" + filterID\n    r = requests.get(url, verify=False, headers=hed)\n    response = r.json()\n    print(response)\n\n'
                )
              )
            )
          ),
          "The successful Json response will be similar to the following:",
          (0, n.yg)(
            "pre",
            null,
            (0, n.yg)(
              "code",
              { parentName: "pre", className: "language-json" },
              '{\n  "data": {\n    "id": 23,\n    "status": "executed",\n    "type": "single",\n    "warnings": 0,\n    "created_at": "2021-07-15 06:28:08",\n    "updated_at": "2021-07-15 06:29:04",\n    "matches": 94,\n    "last_history_entry": {\n      "filter_id": 23,\n      "description": "new filter",\n      "updated_at": "2021-07-15 06:28:08"\n    },\n    "name": "used2",\n    "description": "all used addresses",\n    "filter": "[address] is used"\n  },\n  "metadata": [],\n  "pagination": {\n    "total": 1,\n    "current_page": 1,\n    "per_page": 25,\n    "total_pages": 1\n  },\n  "success": true\n}\n'
            )
          ),
          (0, n.yg)("h3", { id: "list-all-filters" }, "List All Filters"),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)("strong", { parentName: "p" }, "Description: "),
            " Lists information of all filters"
          ),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              "API syntax for listing information of all filter:"
            )
          ),
          (0, n.yg)(
            "table",
            null,
            (0, n.yg)(
              "thead",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "thead" },
                (0, n.yg)("th", { parentName: "tr", align: null }, "Method"),
                (0, n.yg)("th", { parentName: "tr", align: null }, "API Route"),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Path Parameters"
                ),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Example Path"
                )
              )
            ),
            (0, n.yg)(
              "tbody",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "GET"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/{project_id}/tools/filter/"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)("small", null, "{project_id}")
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/48/tools/filter"
                    )
                  )
                )
              )
            )
          ),
          (0, n.yg)(
            r.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, n.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, n.yg)(
                "pre",
                null,
                (0, n.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'def ListFilter():\n    print("List all filters")\n    url = "https://localhost/api/v1/project/" + projectId + "/tools/filter"\n    r = requests.get(url, verify=False, headers=hed)\n    response = r.json()\n    print(response)\n\n'
                )
              )
            )
          ),
          "The successful Json response will be similar to the following:",
          (0, n.yg)(
            "pre",
            null,
            (0, n.yg)(
              "code",
              { parentName: "pre", className: "language-json" },
              '{\n  "data": {\n    "filter": [\n      {\n        "id": 23,\n        "name": "used2",\n        "description": "all used addresses",\n        "filter": "[address] is used",\n        "warnings": 0,\n        "type": "single",\n        "status": "executed",\n        "created_at": "2021-07-15 06:28:08",\n        "updated_at": "2021-07-15 06:29:04",\n        "last_history_entry": {\n          "filter_id": 23,\n          "description": "new filter",\n          "updated_at": "2021-07-15 06:28:08"\n        },\n        "matches": 94\n      }\n    ]\n  },\n  "metadata": [],\n\n  "pagination": {\n    "total": 6,\n    "current_page": 1,\n    "per_page": 6,\n    "total_pages": 1\n  },\n  "success": true\n}\n'
            )
          ),
          (0, n.yg)("h3", { id: "execute-filter" }, "Execute Filter"),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)("strong", { parentName: "p" }, "Description: "),
            " Executes a filter and stores the result",
            (0, n.yg)("br", { parentName: "p" }),
            "\n",
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              "API syntax for execute a specific filter:"
            )
          ),
          (0, n.yg)(
            "table",
            null,
            (0, n.yg)(
              "thead",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "thead" },
                (0, n.yg)("th", { parentName: "tr", align: null }, "Method"),
                (0, n.yg)("th", { parentName: "tr", align: null }, "API Route"),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Path Parameters"
                ),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Example Path"
                )
              )
            ),
            (0, n.yg)(
              "tbody",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "POST"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/execute"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)("small", null, "{project_id}, {filter_id}")
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/48/tools/filter/23/execute"
                    )
                  )
                )
              )
            )
          ),
          (0, n.yg)(
            r.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, n.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, n.yg)(
                "pre",
                null,
                (0, n.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'def ExecuteFilter():\n    print("Execute the filter")\n    url = "https://localhost/api/v1/project/" + projectId + "/tools/filter" + filterID\n    r = requests.post(url, verify=False, headers=hed)\n    response = r.json()\n    print(response)\n'
                )
              )
            )
          ),
          "The successful Json response will return a job id:",
          (0, n.yg)(
            "pre",
            null,
            (0, n.yg)(
              "code",
              { parentName: "pre", className: "language-json" },
              '{\n  "data": {\n    "job_id": 6421\n  },\n  "metadata": {},\n  "pagination": {\n    "total": 1,\n    "current_page": 1,\n    "per_page": 25,\n    "total_pages": 1\n  },\n  "success": true\n}\n'
            )
          ),
          (0, n.yg)("h3", { id: "list-filter-results" }, "List Filter Results"),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)("strong", { parentName: "p" }, "Description: "),
            " List the results of a filter. The result will return the schema of the collection containing the result of a filter",
            (0, n.yg)("br", { parentName: "p" }),
            "\n",
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              "API syntax for listing filter results:"
            )
          ),
          (0, n.yg)(
            "table",
            null,
            (0, n.yg)(
              "thead",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "thead" },
                (0, n.yg)("th", { parentName: "tr", align: null }, "Method"),
                (0, n.yg)("th", { parentName: "tr", align: null }, "API Route"),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Path Parameters"
                ),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Example Path"
                )
              )
            ),
            (0, n.yg)(
              "tbody",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "GET"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/success"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)("small", null, "{project_id}, {filter_id}")
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/48/tools/filter/8/success"
                    )
                  )
                )
              )
            )
          ),
          (0, n.yg)(
            r.A,
            {
              defaultValue:
                "undefined" != typeof window &&
                localStorage.getItem("defaultLanguage")
                  ? localStorage.getItem("defaultLanguage")
                  : "python",
              values: [
                { label: "Python", value: "python" },
                { label: "Php", value: "php" },
                { label: "Go", value: "go" },
              ],
              mdxType: "Tabs",
            },
            (0, n.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, n.yg)(
                "pre",
                null,
                (0, n.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'def ExecuteFilter():\n    print("List the filter results")\n    url = "https://localhost/api/v1/project/" + projectId + "/tools/filter" + filterID + "/success"\n    r = requests.get(url, verify=False, headers=hed)\n    response = r.json()\n    print(response)\n'
                )
              )
            )
          ),
          "The successful Json response will be similar to the following:",
          (0, n.yg)(
            "pre",
            null,
            (0, n.yg)(
              "code",
              { parentName: "pre", className: "language-json" },
              '{\n  "data": {\n    "id": 8,\n    "editable": false,\n    "content": [\n      {\n        "object_id": 2976,\n        "name": "myAddress",\n        "object_type": "address",\n        "vsys_name": "predefined",\n        "vsys": 2,\n        "source_name": "predefined",\n        "source": 1\n      },\n      {\n        "object_id": 2977,\n        "name": "rule_3",\n        "object_type": "security_rule",\n        "vsys_name": "predefined",\n        "vsys": 2,\n        "source_name": "predefined",\n        "source": 1\n      }\n    ],\n    "name": "collection_filter_7",\n    "description": "Collection for filter testingF1"\n  },\n  "success": true\n}\n'
            )
          ),
          (0, n.yg)("h3", { id: "get-filter-history" }, "Get Filter History"),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)("strong", { parentName: "p" }, "Description:"),
            " Return the history of a filter"
          ),
          (0, n.yg)(
            "p",
            null,
            (0, n.yg)(
              "strong",
              { parentName: "p" },
              "API syntax for returning the history of a filter:"
            )
          ),
          (0, n.yg)(
            "table",
            null,
            (0, n.yg)(
              "thead",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "thead" },
                (0, n.yg)("th", { parentName: "tr", align: null }, "Method"),
                (0, n.yg)("th", { parentName: "tr", align: null }, "API Route"),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Path Parameters"
                ),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Example Path"
                )
              )
            ),
            (0, n.yg)(
              "tbody",
              { parentName: "table" },
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "GET"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/history"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)("small", null, "{project_id}, {filter_id}")
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/48/tools/filter/23/history"
                    )
                  )
                )
              )
            )
          ),
          (0, n.yg)(
            r.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, n.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, n.yg)(
                "pre",
                null,
                (0, n.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'def ListFilter():\n    print("Get a history of the filter")\n    url = "https://localhost/api/v1/project/" + projectId + "/tools/filter" + filter_ID +"/history"\n    r = requests.get(url, verify=False, headers=hed)\n    response = r.json()\n    print(response)\n\n'
                )
              )
            )
          ),
          "The successful Json response will be similar to the following:",
          (0, n.yg)(
            "pre",
            null,
            (0, n.yg)(
              "code",
              { parentName: "pre", className: "language-json" },
              '{\n  "data": {\n    "filter_history": [\n      {\n        "id": 65,\n        "filter_id": 23,\n        "description": "new filter",\n        "updated_at": "2021-07-15 06:28:08"\n      },\n      {\n        "id": 67,\n        "filter_id": 23,\n        "description": "executed",\n        "updated_at": "2021-07-15 09:13:43"\n      }\n    ]\n  },\n  "success": true\n}\n'
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
    51801: (e, t, a) => {
      a.r(t), a.d(t, { default: () => i });
      var n = a(31085),
        r = (a(14041), a(9546));
      const l = { tabItem: "tabItem_OMyP" };
      function i({ children: e, hidden: t, className: a }) {
        return (0, n.jsx)("div", {
          role: "tabpanel",
          className: (0, r.default)(l.tabItem, a),
          hidden: t,
          children: e,
        });
      }
    },
    99813: (e, t, a) => {
      a.d(t, { A: () => y });
      var n = a(31085),
        r = a(14041),
        l = a(9546),
        i = a(44182),
        o = a(2533),
        p = a(53537);
      const s = { tabList: "tabList_M0Dn", tabItem: "tabItem_ysIP" };
      function g({
        className: e,
        block: t,
        selectedValue: a,
        selectValue: r,
        tabValues: o,
      }) {
        const p = [],
          { blockElementScrollPositionUntilNextRender: g } = (0, i.a_)(),
          d = (e) => {
            const t = e.currentTarget,
              n = p.indexOf(t),
              l = o[n].value;
            l !== a && (g(t), r(l));
          },
          u = (e) => {
            let t = null;
            switch (e.key) {
              case "Enter":
                d(e);
                break;
              case "ArrowRight": {
                const n = p.indexOf(e.currentTarget) + 1;
                var a;
                t = null !== (a = p[n]) && void 0 !== a ? a : p[0];
                break;
              }
              case "ArrowLeft": {
                const a = p.indexOf(e.currentTarget) - 1;
                var n;
                t = null !== (n = p[a]) && void 0 !== n ? n : p[p.length - 1];
                break;
              }
            }
            null == t || t.focus();
          };
        return (0, n.jsx)("ul", {
          role: "tablist",
          "aria-orientation": "horizontal",
          className: (0, l.default)("tabs", { "tabs--block": t }, e),
          children: o.map(({ value: e, label: t, attributes: r }) =>
            (0, n.jsx)(
              "li",
              {
                role: "tab",
                tabIndex: a === e ? 0 : -1,
                "aria-selected": a === e,
                ref: (e) => p.push(e),
                onKeyDown: u,
                onClick: d,
                ...r,
                className: (0, l.default)(
                  "tabs__item",
                  s.tabItem,
                  null == r ? void 0 : r.className,
                  { "tabs__item--active": a === e }
                ),
                children: null != t ? t : e,
              },
              e
            )
          ),
        });
      }
      function d({ lazy: e, children: t, selectedValue: a }) {
        const l = (Array.isArray(t) ? t : [t]).filter(Boolean);
        if (e) {
          const e = l.find((e) => e.props.value === a);
          return e
            ? (0, r.cloneElement)(e, { className: "margin-top--md" })
            : null;
        }
        return (0, n.jsx)("div", {
          className: "margin-top--md",
          children: l.map((e, t) =>
            (0, r.cloneElement)(e, { key: t, hidden: e.props.value !== a })
          ),
        });
      }
      function u(e) {
        const t = (0, o.u)(e);
        return (0, n.jsxs)("div", {
          className: (0, l.default)("tabs-container", s.tabList),
          children: [
            (0, n.jsx)(g, { ...e, ...t }),
            (0, n.jsx)(d, { ...e, ...t }),
          ],
        });
      }
      function y(e) {
        const t = (0, p.default)();
        return (0, n.jsx)(u, { ...e }, String(t));
      }
    },
    2533: (e, t, a) => {
      a.d(t, { u: () => u });
      var n = a(14041),
        r = a(86090),
        l = a(48043),
        i = a(9032),
        o = a(44892);
      function p(e) {
        return (function (e) {
          var t, a;
          return null !==
            (a =
              null ===
                (t = n.Children.map(e, (e) => {
                  if (
                    !e ||
                    ((0, n.isValidElement)(e) &&
                      (function (e) {
                        const { props: t } = e;
                        return !!t && "object" == typeof t && "value" in t;
                      })(e))
                  )
                    return e;
                  throw new Error(
                    `Docusaurus error: Bad <Tabs> child <${
                      "string" == typeof e.type ? e.type : e.type.name
                    }>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`
                  );
                })) || void 0 === t
                ? void 0
                : t.filter(Boolean)) && void 0 !== a
            ? a
            : [];
        })(e).map(
          ({ props: { value: e, label: t, attributes: a, default: n } }) => ({
            value: e,
            label: t,
            attributes: a,
            default: n,
          })
        );
      }
      function s(e) {
        const { values: t, children: a } = e;
        return (0, n.useMemo)(() => {
          const e = null != t ? t : p(a);
          return (
            (function (e) {
              const t = (0, i.X)(e, (e, t) => e.value === t.value);
              if (t.length > 0)
                throw new Error(
                  `Docusaurus error: Duplicate values "${t
                    .map((e) => e.value)
                    .join(
                      ", "
                    )}" found in <Tabs>. Every value needs to be unique.`
                );
            })(e),
            e
          );
        }, [t, a]);
      }
      function g({ value: e, tabValues: t }) {
        return t.some((t) => t.value === e);
      }
      function d({ queryString: e = !1, groupId: t }) {
        const a = (0, r.W6)(),
          i = (function ({ queryString: e = !1, groupId: t }) {
            if ("string" == typeof e) return e;
            if (!1 === e) return null;
            if (!0 === e && !t)
              throw new Error(
                'Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".'
              );
            return null != t ? t : null;
          })({ queryString: e, groupId: t });
        return [
          (0, l.aZ)(i),
          (0, n.useCallback)(
            (e) => {
              if (!i) return;
              const t = new URLSearchParams(a.location.search);
              t.set(i, e), a.replace({ ...a.location, search: t.toString() });
            },
            [i, a]
          ),
        ];
      }
      function u(e) {
        const { defaultValue: t, queryString: a = !1, groupId: r } = e,
          l = s(e),
          [i, p] = (0, n.useState)(() =>
            (function ({ defaultValue: e, tabValues: t }) {
              if (0 === t.length)
                throw new Error(
                  "Docusaurus error: the <Tabs> component requires at least one <TabItem> children component"
                );
              if (e) {
                if (!g({ value: e, tabValues: t }))
                  throw new Error(
                    `Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t
                      .map((e) => e.value)
                      .join(
                        ", "
                      )}. If you intend to show no default tab, use defaultValue={null} instead.`
                  );
                return e;
              }
              var a;
              const n =
                null !== (a = t.find((e) => e.default)) && void 0 !== a
                  ? a
                  : t[0];
              if (!n) throw new Error("Unexpected error: 0 tabValues");
              return n.value;
            })({ defaultValue: t, tabValues: l })
          ),
          [u, y] = d({ queryString: a, groupId: r }),
          [m, c] = (function ({ groupId: e }) {
            const t = (function (e) {
                return e ? `docusaurus.tab.${e}` : null;
              })(e),
              [a, r] = (0, o.Dv)(t);
            return [
              a,
              (0, n.useCallback)(
                (e) => {
                  t && r.set(e);
                },
                [t, r]
              ),
            ];
          })({ groupId: r }),
          N = (() => {
            const e = null != u ? u : m;
            return g({ value: e, tabValues: l }) ? e : null;
          })();
        (0, n.useLayoutEffect)(() => {
          N && p(N);
        }, [N]);
        return {
          selectedValue: i,
          selectValue: (0, n.useCallback)(
            (e) => {
              if (!g({ value: e, tabValues: l }))
                throw new Error(`Can't select invalid tab value=${e}`);
              p(e), y(e), c(e);
            },
            [y, c, l]
          ),
          tabValues: l,
        };
      }
    },
  },
]);
