"use strict";
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [828],
  {
    82247: (e, t, n) => {
      n.d(t, { xA: () => p, yg: () => m });
      var a = n(14041);
      function r(e, t, n) {
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
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function o(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var u = a.createContext({}),
        s = function (e) {
          var t = a.useContext(u),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
        },
        p = function (e) {
          var t = s(e.components);
          return a.createElement(u.Provider, { value: t }, e.children);
        },
        g = "mdxType",
        c = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        d = a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            l = e.originalType,
            u = e.parentName,
            p = o(e, ["components", "mdxType", "originalType", "parentName"]),
            g = s(n),
            d = r,
            m = g["".concat(u, ".").concat(d)] || g[d] || c[d] || l;
          return n
            ? a.createElement(m, i(i({ ref: t }, p), {}, { components: n }))
            : a.createElement(m, i({ ref: t }, p));
        });
      function m(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ("string" == typeof e || r) {
          var l = n.length,
            i = new Array(l);
          i[0] = d;
          var o = {};
          for (var u in t) hasOwnProperty.call(t, u) && (o[u] = t[u]);
          (o.originalType = e),
            (o[g] = "string" == typeof e ? e : r),
            (i[1] = o);
          for (var s = 2; s < l; s++) i[s] = n[s];
          return a.createElement.apply(null, i);
        }
        return a.createElement.apply(null, n);
      }
      d.displayName = "MDXCreateElement";
    },
    85860: (e, t, n) => {
      n.r(t),
        n.d(t, {
          SetLanguage: () => g,
          assets: () => s,
          contentTitle: () => o,
          default: () => m,
          frontMatter: () => i,
          metadata: () => u,
          toc: () => p,
        });
      n(14041);
      var a = n(82247),
        r = n(99813),
        l = n(51801);
      const i = {
          id: "managing_expedition_agent",
          title: "Expedition Agent",
          sidebar_label: "Managing Expedition's Agent",
          hide_title: !1,
          description: "Starting, stopping and restarting Expedition's agent",
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
            "credentials",
            "apikeys",
          ],
          image: "/expedition/img/expedition.png",
        },
        o = void 0,
        u = {
          unversionedId: "expedition/docs/managing_expedition_agent",
          id: "expedition/docs/managing_expedition_agent",
          title: "Expedition Agent",
          description: "Starting, stopping and restarting Expedition's agent",
          source:
            "@site/products/expedition/docs/managing_expedition_agent.mdx",
          sourceDirName: "expedition/docs",
          slug: "/expedition/docs/managing_expedition_agent",
          permalink: "/expedition/docs/managing_expedition_agent",
          draft: !1,
          editUrl:
            "https://github.com/PaloAltoNetworks/pan.dev/tree/master/products/expedition/docs/managing_expedition_agent.mdx",
          tags: [],
          version: "current",
          frontMatter: {
            id: "managing_expedition_agent",
            title: "Expedition Agent",
            sidebar_label: "Managing Expedition's Agent",
            hide_title: !1,
            description: "Starting, stopping and restarting Expedition's agent",
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
              "credentials",
              "apikeys",
            ],
            image: "/expedition/img/expedition.png",
          },
          sidebar: "expedition",
          previous: {
            title: "Obtaining API Keys",
            permalink: "/expedition/docs/creating_credentials",
          },
          next: {
            title: "Managing Jobs",
            permalink: "/expedition/docs/managing_jobs",
          },
        },
        s = {},
        p = [
          { value: "Description", id: "description", level: 3 },
          { value: "Starting the Agent", id: "starting-the-agent", level: 3 },
          { value: "Stopping the Agent", id: "stopping-the-agent", level: 3 },
          {
            value: "Restarting the Agent",
            id: "restarting-the-agent",
            level: 3,
          },
          { value: "The agent logs", id: "the-agent-logs", level: 3 },
        ];
      function g(e) {
        "undefined" != typeof window &&
          (localStorage.setItem("defaultLanguage", e),
          window.location.reload());
      }
      const c = { toc: p, SetLanguage: g },
        d = "wrapper";
      function m({ components: e, ...t }) {
        return (0, a.yg)(
          d,
          { ...c, ...t, components: e, mdxType: "MDXLayout" },
          (0, a.yg)(
            "p",
            null,
            (0, a.yg)(
              "strong",
              { parentName: "p" },
              "Choose language for code snippet"
            )
          ),
          (0, a.yg)(
            "a",
            { className: "button button--primary", onClick: () => g("python") },
            "Python"
          ),
          "\xa0",
          (0, a.yg)(
            "a",
            { className: "button button--info", onClick: () => g("php") },
            "Php"
          ),
          "\xa0",
          (0, a.yg)(
            "a",
            { className: "button button--danger", onClick: () => g("go") },
            "Go"
          ),
          (0, a.yg)("br", null),
          (0, a.yg)("br", null),
          (0, a.yg)(
            "p",
            null,
            "In this section we describe the Expedition's agent and the calls that we can execute to change its status."
          ),
          (0, a.yg)("h3", { id: "description" }, "Description"),
          (0, a.yg)(
            "p",
            null,
            "Some of the background tasks in Expedition 2.0 are better performed within jobs that can be monitored, are non-blocking and in some cases, can be cancelled.\nImporting a configuration is one of such actions as, depending on the configuration size, the required time for importing may be excessive for a blocking code."
          ),
          (0, a.yg)(
            "p",
            null,
            "Those actions are handled by an agent that is expeting for tasks to be executed."
          ),
          (0, a.yg)(
            "p",
            null,
            "The calls comply with the following structure:"
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
                (0, a.yg)("th", { parentName: "tr", align: null }, "Method"),
                (0, a.yg)("th", { parentName: "tr", align: null }, "EndPoint"),
                (0, a.yg)("th", { parentName: "tr", align: null }, "Parameters")
              )
            ),
            (0, a.yg)(
              "tbody",
              { parentName: "table" },
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)("td", { parentName: "tr", align: null }, "GET"),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/agent/<action>"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    "action : { start ",
                    "|",
                    " stop ",
                    "|",
                    " restart }"
                  )
                )
              ),
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)("td", { parentName: "tr", align: null }, "Example"),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/agent/restart"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null)
                )
              )
            )
          ),
          (0, a.yg)("h3", { id: "starting-the-agent" }, "Starting the Agent"),
          (0, a.yg)(
            "p",
            null,
            "Starting the agent would require having an authenticated session. If stopped, the agent will start running, if already started, the request will have no implications.\nIn the provided code, SSL certificate verification is bypassed, so it would run with the defaults Expedition installation in case no SSL certificates have been generated\nto certify the HTTPS service."
          ),
          (0, a.yg)(
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
            (0, a.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  "import requests\nimport urllib3\n\nurllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)\n\nprint('START AGENT')\nurl = 'https://'+ip+'/api/v1/agent/start'\nr = requests.get(url, verify=False, headers=hed)\n"
                )
              )
            ),
            (0, a.yg)(
              l.default,
              { value: "php", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-php" },
                  "echo  \"START AGENT \\n\";\n$url = 'https://'.$ip.'/api/v1/agent/start';\n\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, $hed);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HEADER, 0);\n\n$response = curl_exec($curl);\ncurl_close($curl);\n"
                )
              )
            ),
            (0, a.yg)(
              l.default,
              { value: "go", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-go" },
                  "//TODO\n"
                )
              )
            )
          ),
          (0, a.yg)("h3", { id: "stopping-the-agent" }, "Stopping the Agent"),
          (0, a.yg)(
            "p",
            null,
            "Likewise, stopping the agent is simply done with a validated HTTPS GET request to the ",
            (0, a.yg)("inlineCode", { parentName: "p" }, "stop"),
            " route.\nCurrently, there is no validation on the tasks that an agent may be executing during the stop action, so keep in mind that undergoing execution may become incomplete."
          ),
          (0, a.yg)(
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
            (0, a.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  "import requests\nimport urllib3\n\nurllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)\n\nprint('STOP AGENT')\nurl = 'https://'+ip+'/api/v1/agent/stop'\nr = requests.get(url, verify=False, headers=hed)\n"
                )
              )
            ),
            (0, a.yg)(
              l.default,
              { value: "go", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-go" },
                  "//TODO\n"
                )
              )
            ),
            (0, a.yg)(
              l.default,
              { value: "php", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-php" },
                  "echo  \"STOP AGENT \\n\";\n$url = 'https://'.$ip.'/api/v1/agent/stop';\n\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, $hed);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HEADER, 0);\n\n$response = curl_exec($curl);\ncurl_close($curl);\n"
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            { id: "restarting-the-agent" },
            "Restarting the Agent"
          ),
          (0, a.yg)(
            "p",
            null,
            "And to restart, we will require the ",
            (0, a.yg)("inlineCode", { parentName: "p" }, "restart"),
            " route. If the agent is started, ",
            (0, a.yg)("inlineCode", { parentName: "p" }, "restart"),
            " will stop the agent and start it again. If already stopped, the agent will get started.\nCurrently, there is no validation on the tasks that an agent may be executing during the restart action, so keep in mind that undergoing execution may become incomplete."
          ),
          (0, a.yg)(
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
            (0, a.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  "import requests\nimport urllib3\n\nurllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)\n\nprint('RESTART AGENT')\nurl = 'https://'+ip+'/api/v1/agent/restart'\nr = requests.get(url, verify=False, headers=hed)\n"
                )
              )
            ),
            (0, a.yg)(
              l.default,
              { value: "php", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-php" },
                  "echo  \"RESTART AGENT \\n\";\n$url = 'https://'.$ip.'/api/v1/agent/restart';\n\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, $hed);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HEADER, 0);\n\n$response = curl_exec($curl);\ncurl_close($curl);\n"
                )
              )
            ),
            (0, a.yg)(
              l.default,
              { value: "go", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-go" },
                  "//TODO\n"
                )
              )
            )
          ),
          (0, a.yg)("h3", { id: "the-agent-logs" }, "The agent logs"),
          (0, a.yg)(
            "p",
            null,
            "Multiple code executions will be performed by the agent(s) during the Expedition 2.0 API consumption.\nIf something does not behave as expected, agent logs can be found under the following system path\n",
            (0, a.yg)(
              "inlineCode",
              { parentName: "p" },
              "/home/userSpace/panReadOrders.log"
            )
          ),
          (0, a.yg)(
            "p",
            null,
            "For debugging actions, we could recommend leaving the file open to see agents output execution logs with the following system command:"
          ),
          (0, a.yg)(
            "pre",
            null,
            (0, a.yg)(
              "code",
              { parentName: "pre", className: "language-system" },
              "tail -f /home/userSpace/panReadOrders.log\n"
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
    51801: (e, t, n) => {
      n.r(t), n.d(t, { default: () => i });
      var a = n(31085),
        r = (n(14041), n(9546));
      const l = { tabItem: "tabItem_OMyP" };
      function i({ children: e, hidden: t, className: n }) {
        return (0, a.jsx)("div", {
          role: "tabpanel",
          className: (0, r.default)(l.tabItem, n),
          hidden: t,
          children: e,
        });
      }
    },
    99813: (e, t, n) => {
      n.d(t, { A: () => d });
      var a = n(31085),
        r = n(14041),
        l = n(9546),
        i = n(44182),
        o = n(2533),
        u = n(53537);
      const s = { tabList: "tabList_M0Dn", tabItem: "tabItem_ysIP" };
      function p({
        className: e,
        block: t,
        selectedValue: n,
        selectValue: r,
        tabValues: o,
      }) {
        const u = [],
          { blockElementScrollPositionUntilNextRender: p } = (0, i.a_)(),
          g = (e) => {
            const t = e.currentTarget,
              a = u.indexOf(t),
              l = o[a].value;
            l !== n && (p(t), r(l));
          },
          c = (e) => {
            let t = null;
            switch (e.key) {
              case "Enter":
                g(e);
                break;
              case "ArrowRight": {
                const a = u.indexOf(e.currentTarget) + 1;
                var n;
                t = null !== (n = u[a]) && void 0 !== n ? n : u[0];
                break;
              }
              case "ArrowLeft": {
                const n = u.indexOf(e.currentTarget) - 1;
                var a;
                t = null !== (a = u[n]) && void 0 !== a ? a : u[u.length - 1];
                break;
              }
            }
            null == t || t.focus();
          };
        return (0, a.jsx)("ul", {
          role: "tablist",
          "aria-orientation": "horizontal",
          className: (0, l.default)("tabs", { "tabs--block": t }, e),
          children: o.map(({ value: e, label: t, attributes: r }) =>
            (0, a.jsx)(
              "li",
              {
                role: "tab",
                tabIndex: n === e ? 0 : -1,
                "aria-selected": n === e,
                ref: (e) => u.push(e),
                onKeyDown: c,
                onClick: g,
                ...r,
                className: (0, l.default)(
                  "tabs__item",
                  s.tabItem,
                  null == r ? void 0 : r.className,
                  { "tabs__item--active": n === e }
                ),
                children: null != t ? t : e,
              },
              e
            )
          ),
        });
      }
      function g({ lazy: e, children: t, selectedValue: n }) {
        const l = (Array.isArray(t) ? t : [t]).filter(Boolean);
        if (e) {
          const e = l.find((e) => e.props.value === n);
          return e
            ? (0, r.cloneElement)(e, { className: "margin-top--md" })
            : null;
        }
        return (0, a.jsx)("div", {
          className: "margin-top--md",
          children: l.map((e, t) =>
            (0, r.cloneElement)(e, { key: t, hidden: e.props.value !== n })
          ),
        });
      }
      function c(e) {
        const t = (0, o.u)(e);
        return (0, a.jsxs)("div", {
          className: (0, l.default)("tabs-container", s.tabList),
          children: [
            (0, a.jsx)(p, { ...e, ...t }),
            (0, a.jsx)(g, { ...e, ...t }),
          ],
        });
      }
      function d(e) {
        const t = (0, u.default)();
        return (0, a.jsx)(c, { ...e }, String(t));
      }
    },
    2533: (e, t, n) => {
      n.d(t, { u: () => c });
      var a = n(14041),
        r = n(86090),
        l = n(48043),
        i = n(9032),
        o = n(44892);
      function u(e) {
        return (function (e) {
          var t, n;
          return null !==
            (n =
              null ===
                (t = a.Children.map(e, (e) => {
                  if (
                    !e ||
                    ((0, a.isValidElement)(e) &&
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
                : t.filter(Boolean)) && void 0 !== n
            ? n
            : [];
        })(e).map(
          ({ props: { value: e, label: t, attributes: n, default: a } }) => ({
            value: e,
            label: t,
            attributes: n,
            default: a,
          })
        );
      }
      function s(e) {
        const { values: t, children: n } = e;
        return (0, a.useMemo)(() => {
          const e = null != t ? t : u(n);
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
        }, [t, n]);
      }
      function p({ value: e, tabValues: t }) {
        return t.some((t) => t.value === e);
      }
      function g({ queryString: e = !1, groupId: t }) {
        const n = (0, r.W6)(),
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
          (0, a.useCallback)(
            (e) => {
              if (!i) return;
              const t = new URLSearchParams(n.location.search);
              t.set(i, e), n.replace({ ...n.location, search: t.toString() });
            },
            [i, n]
          ),
        ];
      }
      function c(e) {
        const { defaultValue: t, queryString: n = !1, groupId: r } = e,
          l = s(e),
          [i, u] = (0, a.useState)(() =>
            (function ({ defaultValue: e, tabValues: t }) {
              if (0 === t.length)
                throw new Error(
                  "Docusaurus error: the <Tabs> component requires at least one <TabItem> children component"
                );
              if (e) {
                if (!p({ value: e, tabValues: t }))
                  throw new Error(
                    `Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t
                      .map((e) => e.value)
                      .join(
                        ", "
                      )}. If you intend to show no default tab, use defaultValue={null} instead.`
                  );
                return e;
              }
              var n;
              const a =
                null !== (n = t.find((e) => e.default)) && void 0 !== n
                  ? n
                  : t[0];
              if (!a) throw new Error("Unexpected error: 0 tabValues");
              return a.value;
            })({ defaultValue: t, tabValues: l })
          ),
          [c, d] = g({ queryString: n, groupId: r }),
          [m, y] = (function ({ groupId: e }) {
            const t = (function (e) {
                return e ? `docusaurus.tab.${e}` : null;
              })(e),
              [n, r] = (0, o.Dv)(t);
            return [
              n,
              (0, a.useCallback)(
                (e) => {
                  t && r.set(e);
                },
                [t, r]
              ),
            ];
          })({ groupId: r }),
          h = (() => {
            const e = null != c ? c : m;
            return p({ value: e, tabValues: l }) ? e : null;
          })();
        (0, a.useLayoutEffect)(() => {
          h && u(h);
        }, [h]);
        return {
          selectedValue: i,
          selectValue: (0, a.useCallback)(
            (e) => {
              if (!p({ value: e, tabValues: l }))
                throw new Error(`Can't select invalid tab value=${e}`);
              u(e), d(e), y(e);
            },
            [d, y, l]
          ),
          tabValues: l,
        };
      }
    },
  },
]);
