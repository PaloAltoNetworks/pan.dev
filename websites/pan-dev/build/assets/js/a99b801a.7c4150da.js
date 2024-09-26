"use strict";
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [154],
  {
    82247: (e, n, t) => {
      t.d(n, { xA: () => p, yg: () => y });
      var a = t(14041);
      function r(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function o(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n &&
            (a = a.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, a);
        }
        return t;
      }
      function i(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? o(Object(t), !0).forEach(function (n) {
                r(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function l(e, n) {
        if (null == e) return {};
        var t,
          a,
          r = (function (e, n) {
            if (null == e) return {};
            var t,
              a,
              r = {},
              o = Object.keys(e);
            for (a = 0; a < o.length; a++)
              (t = o[a]), n.indexOf(t) >= 0 || (r[t] = e[t]);
            return r;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (a = 0; a < o.length; a++)
            (t = o[a]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (r[t] = e[t]));
        }
        return r;
      }
      var s = a.createContext({}),
        u = function (e) {
          var n = a.useContext(s),
            t = n;
          return e && (t = "function" == typeof e ? e(n) : i(i({}, n), e)), t;
        },
        p = function (e) {
          var n = u(e.components);
          return a.createElement(s.Provider, { value: n }, e.children);
        },
        c = "mdxType",
        d = {
          inlineCode: "code",
          wrapper: function (e) {
            var n = e.children;
            return a.createElement(a.Fragment, {}, n);
          },
        },
        g = a.forwardRef(function (e, n) {
          var t = e.components,
            r = e.mdxType,
            o = e.originalType,
            s = e.parentName,
            p = l(e, ["components", "mdxType", "originalType", "parentName"]),
            c = u(t),
            g = r,
            y = c["".concat(s, ".").concat(g)] || c[g] || d[g] || o;
          return t
            ? a.createElement(y, i(i({ ref: n }, p), {}, { components: t }))
            : a.createElement(y, i({ ref: n }, p));
        });
      function y(e, n) {
        var t = arguments,
          r = n && n.mdxType;
        if ("string" == typeof e || r) {
          var o = t.length,
            i = new Array(o);
          i[0] = g;
          var l = {};
          for (var s in n) hasOwnProperty.call(n, s) && (l[s] = n[s]);
          (l.originalType = e),
            (l[c] = "string" == typeof e ? e : r),
            (i[1] = l);
          for (var u = 2; u < o; u++) i[u] = t[u];
          return a.createElement.apply(null, i);
        }
        return a.createElement.apply(null, t);
      }
      g.displayName = "MDXCreateElement";
    },
    1288: (e, n, t) => {
      t.r(n),
        t.d(n, {
          SetLanguage: () => c,
          assets: () => u,
          contentTitle: () => l,
          default: () => y,
          frontMatter: () => i,
          metadata: () => s,
          toc: () => p,
        });
      t(14041);
      var a = t(82247),
        r = t(99813),
        o = t(51801);
      const i = {
          id: "creating_credentials",
          title: "API Keys",
          sidebar_label: "Obtaining API Keys",
          hide_title: !1,
          description: "Obtaining API Keys",
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
        l = void 0,
        s = {
          unversionedId: "expedition/docs/creating_credentials",
          id: "expedition/docs/creating_credentials",
          title: "API Keys",
          description: "Obtaining API Keys",
          source: "@site/products/expedition/docs/creating_credentials.mdx",
          sourceDirName: "expedition/docs",
          slug: "/expedition/docs/creating_credentials",
          permalink: "/expedition/docs/creating_credentials",
          draft: !1,
          editUrl:
            "https://github.com/PaloAltoNetworks/pan.dev/tree/master/products/expedition/docs/creating_credentials.mdx",
          tags: [],
          version: "current",
          frontMatter: {
            id: "creating_credentials",
            title: "API Keys",
            sidebar_label: "Obtaining API Keys",
            hide_title: !1,
            description: "Obtaining API Keys",
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
            title: "Introduction",
            permalink: "/expedition/docs/expedition_apiint",
          },
          next: {
            title: "Managing Expedition's Agent",
            permalink: "/expedition/docs/managing_expedition_agent",
          },
        },
        u = {},
        p = [
          {
            value: "Generating Expedition API Keys",
            id: "generating-expedition-api-keys",
            level: 3,
          },
        ];
      function c(e) {
        "undefined" != typeof window &&
          (localStorage.setItem("defaultLanguage", e),
          window.location.reload());
      }
      const d = { toc: p, SetLanguage: c },
        g = "wrapper";
      function y({ components: e, ...n }) {
        return (0, a.yg)(
          g,
          { ...d, ...n, components: e, mdxType: "MDXLayout" },
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
            { className: "button button--primary", onClick: () => c("python") },
            "Python"
          ),
          "\xa0",
          (0, a.yg)(
            "a",
            { className: "button button--info", onClick: () => c("php") },
            "Php"
          ),
          "\xa0",
          (0, a.yg)(
            "a",
            { className: "button button--danger", onClick: () => c("go") },
            "Go"
          ),
          (0, a.yg)("br", null),
          (0, a.yg)("br", null),
          (0, a.yg)(
            "p",
            null,
            "In this section we present a workflow example to migrate a third party vendor configuration into a PANOS configuration."
          ),
          (0, a.yg)(
            "h3",
            { id: "generating-expedition-api-keys" },
            "Generating Expedition API Keys"
          ),
          (0, a.yg)(
            "p",
            null,
            "In general, all the API calls to Expedition require user authentication, in order to validate the level of user rights to perform specific API calls.\nThis is done through the use of API keys.\nThe first step is to log into Expedition and retrieve an API key that would offer us access to later API calls."
          ),
          (0, a.yg)(
            "p",
            null,
            "As shown in Snippet 1, defines the Expedition IP to connect (",
            (0, a.yg)("inlineCode", { parentName: "p" }, "ip"),
            ' variable),if you are using the container , the ip will be "localhost", credentials to be used for authentication (',
            (0, a.yg)("inlineCode", { parentName: "p" }, "credentials"),
            ") and the URL to access the login route (",
            (0, a.yg)("inlineCode", { parentName: "p" }, "url"),
            ")."
          ),
          (0, a.yg)(
            "p",
            null,
            "Once those variables have been provided, creates and establishes an SSL connection (",
            (0, a.yg)("inlineCode", { parentName: "p" }, "curl"),
            ") to Expedition to make a\nrequest to the login URL with the specified credentials, and collects the response from the server into the ",
            (0, a.yg)("inlineCode", { parentName: "p" }, "response"),
            " variable."
          ),
          (0, a.yg)(
            "p",
            null,
            "Expedition API responses are in JSON format. In the case of a generate_api_key API call, in the content section we will obtain an API key (",
            (0, a.yg)("inlineCode", { parentName: "p" }, "apikey"),
            ") and a CSRF Token (",
            (0, a.yg)("inlineCode", { parentName: "p" }, "csrfToken"),
            ").\nThe first can be used for API consumption in scripts, while the second is intended for HTTPS Web UI requests.\nWhile the API key has an expiration time of 1 month and extends its validity time on every login (it may change in the future),\na CSRF Token has a shorter validity and gets regenerated for each login call."
          ),
          (0, a.yg)(
            "p",
            null,
            "We collect the ",
            (0, a.yg)("inlineCode", { parentName: "p" }, "api_key"),
            " by accessing the corresponding JSON element and remove the surrounding quotes to access the API key string and format it for future authenticated API calls."
          ),
          (0, a.yg)(
            "admonition",
            { type: "info" },
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              "This authentication credentials are later prepared in a ",
              (0, a.yg)("inlineCode", { parentName: "p" }, "hed"),
              " variable that we will attach into the headers of the API calls we send in the future."
            )
          ),
          (0, a.yg)("p", null, "API syntax for generate API key:"),
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
                (0, a.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Parameters"
                ),
                (0, a.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Example Value"
                )
              )
            ),
            (0, a.yg)(
              "tbody",
              { parentName: "table" },
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)("td", { parentName: "tr", align: null }, "POST"),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/generate_api_key"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "username, password")
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    "{",
                    (0, a.yg)("strong", { parentName: "td" }, '"username"'),
                    ':"admin", ',
                    (0, a.yg)("strong", { parentName: "td" }, '"password"'),
                    ':"paloalto"}'
                  )
                )
              )
            )
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
              o.default,
              { value: "python", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  "import json\nimport sys\nimport argparse\nimport requests\nfrom time import sleep\nimport urllib3\n\nurllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)\n\nprint('Generate_API_key')\n\nip=\"localhost\" #your Expedition IP reachable from the Script execution machine\nuser=\"admin\"\npassword=\"paloalto\"\n\nurl = 'https://'+ip+'/api/v1/generate_api_key'\ncredentials = {\"username\":user, \"password\":password}\n\nr = requests.post(url, data=credentials, verify=False)\nresponse=r.json()\napiKey = json.dumps(response['Contents']['response']['data']['content']['api_key'])\nauth_token = apiKey[1:-1]\nprint(auth_token)\nprint('')\n\nhed = {'Authorization': 'Bearer ' + auth_token}\n"
                )
              )
            ),
            (0, a.yg)(
              o.default,
              { value: "php", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-php" },
                  'echo  "Generate API Key \\n";\n\n$ip = "localhost"; //your Expedition IP reachable from the Script execution machine\n$user = "admin";\n$password = "paloalto";\n\n$url = \'https://\'.$ip.\'/api/v1/generate_api_key\';\n$credentials =  array(\n    "username" => $user,\n    "password" => $password\n);\n\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);\ncurl_setopt($curl,CURLOPT_POST, TRUE);\ncurl_setopt($curl,CURLOPT_POSTFIELDS, $credentials);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);\n$response = curl_exec($curl);\n\n$jsonResponse = json_decode($response);\nprint_r($jsonResponse->Contents->response->{\'response-messages\'}->messages[0]->message);\n$apiKey = $jsonResponse->Contents->response->data->content->api_key;\n$auth_token = trim($apiKey,"\'");\n\necho "\\n";\n$hed = array(\n    \'Authorization: Bearer \' . $auth_token,\n);\n'
                )
              )
            ),
            (0, a.yg)(
              o.default,
              { value: "go", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-go" },
                  'package main\nimport "fmt"\n\n//TODO\n//chech https://dev.to/m7shapan/golang-how-to-unmarshal-a-subset-of-nested-json-data-d84\ntype Response struct {\n    Status string\n    ApiKey string\n}\n\nfunc main() {\n    fmt.Println("Generate API Key")\n\n    var ip  := "localhost" //your Expedition IP reachable from the Script execution machine\n    var user := "admin"\n    var password := "paloalto"\n\n    var url := "https://"+ip+"/api/v1/generate_api_key"\n\n    payloadBytes, err := json.Marshal(map|string|string{\n        "name": user,\n        "password": password\n    })\n\n    if err != nil {\n        log.Fatalln(err)\n    }\n    body := bytes.NewReader(payloadBytes)\n\n    req, err := http.Post(url, "application/json", bytes.NewBuffer(requestBody))\n    if err != nil {\n        log.Fatalln(err)\n    }\n\n    defer resp.Body.Close()\n\n    jsonResponse := Response{}\n\n    err := json.Unmarshal([]byte(resp), &jsonResponse)\n    if err != nil {\n        log.Fatalln(err)\n    }\n\n    var auth_token := jsonResponse.ApiKey\n\n    var hed := {\'Authorization: Bearer \' + auth_token}\n}\n'
                )
              )
            )
          )
        );
      }
      y.isMDXComponent = !0;
    },
    51801: (e, n, t) => {
      t.r(n), t.d(n, { default: () => i });
      var a = t(31085),
        r = (t(14041), t(9546));
      const o = { tabItem: "tabItem_OMyP" };
      function i({ children: e, hidden: n, className: t }) {
        return (0, a.jsx)("div", {
          role: "tabpanel",
          className: (0, r.default)(o.tabItem, t),
          hidden: n,
          children: e,
        });
      }
    },
    99813: (e, n, t) => {
      t.d(n, { A: () => g });
      var a = t(31085),
        r = t(14041),
        o = t(9546),
        i = t(44182),
        l = t(2533),
        s = t(53537);
      const u = { tabList: "tabList_M0Dn", tabItem: "tabItem_ysIP" };
      function p({
        className: e,
        block: n,
        selectedValue: t,
        selectValue: r,
        tabValues: l,
      }) {
        const s = [],
          { blockElementScrollPositionUntilNextRender: p } = (0, i.a_)(),
          c = (e) => {
            const n = e.currentTarget,
              a = s.indexOf(n),
              o = l[a].value;
            o !== t && (p(n), r(o));
          },
          d = (e) => {
            let n = null;
            switch (e.key) {
              case "Enter":
                c(e);
                break;
              case "ArrowRight": {
                const a = s.indexOf(e.currentTarget) + 1;
                var t;
                n = null !== (t = s[a]) && void 0 !== t ? t : s[0];
                break;
              }
              case "ArrowLeft": {
                const t = s.indexOf(e.currentTarget) - 1;
                var a;
                n = null !== (a = s[t]) && void 0 !== a ? a : s[s.length - 1];
                break;
              }
            }
            null == n || n.focus();
          };
        return (0, a.jsx)("ul", {
          role: "tablist",
          "aria-orientation": "horizontal",
          className: (0, o.default)("tabs", { "tabs--block": n }, e),
          children: l.map(({ value: e, label: n, attributes: r }) =>
            (0, a.jsx)(
              "li",
              {
                role: "tab",
                tabIndex: t === e ? 0 : -1,
                "aria-selected": t === e,
                ref: (e) => s.push(e),
                onKeyDown: d,
                onClick: c,
                ...r,
                className: (0, o.default)(
                  "tabs__item",
                  u.tabItem,
                  null == r ? void 0 : r.className,
                  { "tabs__item--active": t === e }
                ),
                children: null != n ? n : e,
              },
              e
            )
          ),
        });
      }
      function c({ lazy: e, children: n, selectedValue: t }) {
        const o = (Array.isArray(n) ? n : [n]).filter(Boolean);
        if (e) {
          const e = o.find((e) => e.props.value === t);
          return e
            ? (0, r.cloneElement)(e, { className: "margin-top--md" })
            : null;
        }
        return (0, a.jsx)("div", {
          className: "margin-top--md",
          children: o.map((e, n) =>
            (0, r.cloneElement)(e, { key: n, hidden: e.props.value !== t })
          ),
        });
      }
      function d(e) {
        const n = (0, l.u)(e);
        return (0, a.jsxs)("div", {
          className: (0, o.default)("tabs-container", u.tabList),
          children: [
            (0, a.jsx)(p, { ...e, ...n }),
            (0, a.jsx)(c, { ...e, ...n }),
          ],
        });
      }
      function g(e) {
        const n = (0, s.default)();
        return (0, a.jsx)(d, { ...e }, String(n));
      }
    },
    2533: (e, n, t) => {
      t.d(n, { u: () => d });
      var a = t(14041),
        r = t(86090),
        o = t(48043),
        i = t(9032),
        l = t(44892);
      function s(e) {
        return (function (e) {
          var n, t;
          return null !==
            (t =
              null ===
                (n = a.Children.map(e, (e) => {
                  if (
                    !e ||
                    ((0, a.isValidElement)(e) &&
                      (function (e) {
                        const { props: n } = e;
                        return !!n && "object" == typeof n && "value" in n;
                      })(e))
                  )
                    return e;
                  throw new Error(
                    `Docusaurus error: Bad <Tabs> child <${
                      "string" == typeof e.type ? e.type : e.type.name
                    }>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`
                  );
                })) || void 0 === n
                ? void 0
                : n.filter(Boolean)) && void 0 !== t
            ? t
            : [];
        })(e).map(
          ({ props: { value: e, label: n, attributes: t, default: a } }) => ({
            value: e,
            label: n,
            attributes: t,
            default: a,
          })
        );
      }
      function u(e) {
        const { values: n, children: t } = e;
        return (0, a.useMemo)(() => {
          const e = null != n ? n : s(t);
          return (
            (function (e) {
              const n = (0, i.X)(e, (e, n) => e.value === n.value);
              if (n.length > 0)
                throw new Error(
                  `Docusaurus error: Duplicate values "${n
                    .map((e) => e.value)
                    .join(
                      ", "
                    )}" found in <Tabs>. Every value needs to be unique.`
                );
            })(e),
            e
          );
        }, [n, t]);
      }
      function p({ value: e, tabValues: n }) {
        return n.some((n) => n.value === e);
      }
      function c({ queryString: e = !1, groupId: n }) {
        const t = (0, r.W6)(),
          i = (function ({ queryString: e = !1, groupId: n }) {
            if ("string" == typeof e) return e;
            if (!1 === e) return null;
            if (!0 === e && !n)
              throw new Error(
                'Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".'
              );
            return null != n ? n : null;
          })({ queryString: e, groupId: n });
        return [
          (0, o.aZ)(i),
          (0, a.useCallback)(
            (e) => {
              if (!i) return;
              const n = new URLSearchParams(t.location.search);
              n.set(i, e), t.replace({ ...t.location, search: n.toString() });
            },
            [i, t]
          ),
        ];
      }
      function d(e) {
        const { defaultValue: n, queryString: t = !1, groupId: r } = e,
          o = u(e),
          [i, s] = (0, a.useState)(() =>
            (function ({ defaultValue: e, tabValues: n }) {
              if (0 === n.length)
                throw new Error(
                  "Docusaurus error: the <Tabs> component requires at least one <TabItem> children component"
                );
              if (e) {
                if (!p({ value: e, tabValues: n }))
                  throw new Error(
                    `Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n
                      .map((e) => e.value)
                      .join(
                        ", "
                      )}. If you intend to show no default tab, use defaultValue={null} instead.`
                  );
                return e;
              }
              var t;
              const a =
                null !== (t = n.find((e) => e.default)) && void 0 !== t
                  ? t
                  : n[0];
              if (!a) throw new Error("Unexpected error: 0 tabValues");
              return a.value;
            })({ defaultValue: n, tabValues: o })
          ),
          [d, g] = c({ queryString: t, groupId: r }),
          [y, m] = (function ({ groupId: e }) {
            const n = (function (e) {
                return e ? `docusaurus.tab.${e}` : null;
              })(e),
              [t, r] = (0, l.Dv)(n);
            return [
              t,
              (0, a.useCallback)(
                (e) => {
                  n && r.set(e);
                },
                [n, r]
              ),
            ];
          })({ groupId: r }),
          h = (() => {
            const e = null != d ? d : y;
            return p({ value: e, tabValues: o }) ? e : null;
          })();
        (0, a.useLayoutEffect)(() => {
          h && s(h);
        }, [h]);
        return {
          selectedValue: i,
          selectValue: (0, a.useCallback)(
            (e) => {
              if (!p({ value: e, tabValues: o }))
                throw new Error(`Can't select invalid tab value=${e}`);
              s(e), g(e), m(e);
            },
            [g, m, o]
          ),
          tabValues: o,
        };
      }
    },
  },
]);
