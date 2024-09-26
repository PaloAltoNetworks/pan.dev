"use strict";
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [174],
  {
    82247: (e, t, n) => {
      n.d(t, { xA: () => d, yg: () => m });
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
      function a(e, t) {
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
      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        if (null == e) return {};
        var n,
          i,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              o = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++)
              (n = a[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (n = a[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var p = i.createContext({}),
        l = function (e) {
          var t = i.useContext(p),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : r(r({}, t), e)), n;
        },
        d = function (e) {
          var t = l(e.components);
          return i.createElement(p.Provider, { value: t }, e.children);
        },
        c = "mdxType",
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return i.createElement(i.Fragment, {}, t);
          },
        },
        g = i.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            a = e.originalType,
            p = e.parentName,
            d = s(e, ["components", "mdxType", "originalType", "parentName"]),
            c = l(n),
            g = o,
            m = c["".concat(p, ".").concat(g)] || c[g] || u[g] || a;
          return n
            ? i.createElement(m, r(r({ ref: t }, d), {}, { components: n }))
            : i.createElement(m, r({ ref: t }, d));
        });
      function m(e, t) {
        var n = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var a = n.length,
            r = new Array(a);
          r[0] = g;
          var s = {};
          for (var p in t) hasOwnProperty.call(t, p) && (s[p] = t[p]);
          (s.originalType = e),
            (s[c] = "string" == typeof e ? e : o),
            (r[1] = s);
          for (var l = 2; l < a; l++) r[l] = n[l];
          return i.createElement.apply(null, r);
        }
        return i.createElement.apply(null, n);
      }
      g.displayName = "MDXCreateElement";
    },
    59121: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => s,
          contentTitle: () => a,
          default: () => c,
          frontMatter: () => o,
          metadata: () => r,
          toc: () => p,
        });
      n(14041);
      var i = n(82247);
      const o = {
          id: "expedition_apiint",
          title: "Expedition-API Introduction",
          sidebar_label: "Introduction",
          hide_title: !0,
          description: "Expedition-API Introduction",
          keywords: [
            "pan-os",
            "panos",
            "automation",
            "xml",
            "api",
            "expedition",
            "migration",
            "firewall",
            "configuration",
          ],
          image: "/expedition/img/expedition.png",
        },
        a = void 0,
        r = {
          unversionedId: "expedition/docs/expedition_apiint",
          id: "expedition/docs/expedition_apiint",
          title: "Expedition-API Introduction",
          description: "Expedition-API Introduction",
          source: "@site/products/expedition/docs/expedition_apiInt.md",
          sourceDirName: "expedition/docs",
          slug: "/expedition/docs/expedition_apiint",
          permalink: "/expedition/docs/expedition_apiint",
          draft: !1,
          editUrl:
            "https://github.com/PaloAltoNetworks/pan.dev/tree/master/products/expedition/docs/expedition_apiInt.md",
          tags: [],
          version: "current",
          frontMatter: {
            id: "expedition_apiint",
            title: "Expedition-API Introduction",
            sidebar_label: "Introduction",
            hide_title: !0,
            description: "Expedition-API Introduction",
            keywords: [
              "pan-os",
              "panos",
              "automation",
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
            title: "Export Vendor Configuration",
            permalink: "/expedition/docs/expedition_export",
          },
          next: {
            title: "Obtaining API Keys",
            permalink: "/expedition/docs/creating_credentials",
          },
        },
        s = {},
        p = [
          { value: "Introduction", id: "introduction", level: 2 },
          {
            value: "Expedition-API Documentation &amp; Testing",
            id: "expedition-api-documentation--testing",
            level: 2,
          },
        ],
        l = { toc: p },
        d = "wrapper";
      function c({ components: e, ...t }) {
        return (0, i.yg)(
          d,
          { ...l, ...t, components: e, mdxType: "MDXLayout" },
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
          (0, i.yg)("h2", { id: "introduction" }, "Introduction"),
          (0, i.yg)(
            "p",
            null,
            "The Expedition 2.0 tool aims at facilitating the consumption of PANOS features and assisting on the correct application of good practices in on NGFW devices.\nFor instance, the tool can assist on the implementation of security policies using Applications, Users and Regions,\nthe reduction of number of address and service objects to increase policy administration\nand advising on potential configuration inconsistencies and deficiencies to help placing the focus on those relevant points, among other features.",
            (0, i.yg)("br", { parentName: "p" }),
            "\n",
            "To achieve the above-mentioned features and more, the Expedition tool has been structured as a set of modules where each of them covers a role.\nThis separation of concerns, allows each module to evolve and improve the overall functionality, increase reusability and reliability.",
            (0, i.yg)("br", { parentName: "p" }),
            "\n",
            "The modules are:"
          ),
          (0, i.yg)(
            "ul",
            null,
            (0, i.yg)(
              "li",
              { parentName: "ul" },
              (0, i.yg)("strong", { parentName: "li" }, "Expedition Web API"),
              ": Exposes all the Expedition functionalities via an Application Program Interface that offers high level of scripting and automation"
            ),
            (0, i.yg)(
              "li",
              { parentName: "ul" },
              (0, i.yg)("strong", { parentName: "li" }, "Expedition Web UI"),
              ": Provides a web interface that offers access to all Expedition functionalities with a low learning curve"
            ),
            (0, i.yg)(
              "li",
              { parentName: "ul" },
              (0, i.yg)("strong", { parentName: "li" }, "Expedition Parser"),
              ": In charge of parsing and translating third party vendors' configurations into PANOS firewalls and Panoramas"
            ),
            (0, i.yg)(
              "li",
              { parentName: "ul" },
              (0, i.yg)("strong", { parentName: "li" }, "Expedition Analytics"),
              ': Offers functionalities for traffic log analytics, rule improvement suggestions, and other "data analytics"-related tasks'
            )
          ),
          (0, i.yg)(
            "p",
            null,
            "As most of the Web APIs, Expedition has exposed the functionalities making use of routes and HTTP verbs.\nThe routes (URL paths), indicate the object or objects that are targets for an action,\nwhile the HTTP verbs (GET, POST, PUT, DELETE) indicate the action to be applied on such object."
          ),
          (0, i.yg)(
            "p",
            null,
            "For example, the following request describes a request to list (",
            (0, i.yg)("em", { parentName: "p" }, "GET"),
            ") existing ",
            (0, i.yg)("em", { parentName: "p" }, "address"),
            " objects in MyProject."
          ),
          (0, i.yg)(
            "pre",
            null,
            (0, i.yg)(
              "code",
              { parentName: "pre", className: "language-console" },
              "GET https://localhost/api/v1/project/{project_id}/object/address\n"
            )
          ),
          (0, i.yg)(
            "p",
            null,
            "Note that, even we are in the first version of the API, we have already started applying versioning strategies to support future modifications of the API\nand allow the coexistence of more than one version on the same Expedition and future support backwards compatibility."
          ),
          (0, i.yg)(
            "p",
            null,
            "The different verbs that we can use translate to"
          ),
          (0, i.yg)(
            "p",
            null,
            (0, i.yg)("strong", { parentName: "p" }, "GET"),
            ": List one or more entries",
            (0, i.yg)("br", { parentName: "p" }),
            "\n",
            (0, i.yg)("strong", { parentName: "p" }, "POST"),
            ": Create a new entry",
            (0, i.yg)("br", { parentName: "p" }),
            "\n",
            (0, i.yg)("strong", { parentName: "p" }, "PUT"),
            ": Modify one or more existing entries",
            (0, i.yg)("br", { parentName: "p" }),
            "\n",
            (0, i.yg)("strong", { parentName: "p" }, "DELETE"),
            ": Delete one or more entries"
          ),
          (0, i.yg)(
            "admonition",
            { type: "note" },
            (0, i.yg)(
              "p",
              { parentName: "admonition" },
              "Depending on the user\u2019s permissions and the requested routes, the responses may differ, as some users may have more or\nless privileges to list/create/modify/delete existing objects in Expedition."
            )
          ),
          (0, i.yg)(
            "h2",
            { id: "expedition-api-documentation--testing" },
            "Expedition-API Documentation & Testing"
          ),
          (0, i.yg)(
            "p",
            null,
            "Expedition offers a web resource for documenting the Expedition API and trying it out to learn how to use it.\nThe documentation is based on the Swagger framework, and is provided in each Expedition VM under the following URL:"
          ),
          (0, i.yg)(
            "pre",
            null,
            (0, i.yg)(
              "code",
              { parentName: "pre", className: "language-Console" },
              "   https://localhost/api/<version>/documentation\n"
            )
          ),
          (0, i.yg)(
            "p",
            null,
            "In order to be able to consume the different API methods, it is necessary to have a valid session (for authentication and authorization).\nThis can be performed in Swagger by making a first request to the /api/v1/generate_api_key route.\nA request is made by clicking on the selected route to call, activate the interactive mode via the button ",
            (0, i.yg)("inlineCode", { parentName: "p" }, "Try it out"),
            ",\nentering the required parameters and clicking on ",
            (0, i.yg)("inlineCode", { parentName: "p" }, "Execute"),
            ".\nExpedition provides an initial administrator user that can be also used for testing.\nThe defaults are login: ",
            (0, i.yg)("strong", { parentName: "p" }, "admin"),
            " and password: ",
            (0, i.yg)("strong", { parentName: "p" }, "paloalto"),
            " and are already presented in Swagger."
          ),
          (0, i.yg)(
            "p",
            null,
            "In this case, we will get a response containing an ",
            (0, i.yg)("inlineCode", { parentName: "p" }, "api_key"),
            " that can be attached to future requests to validate the user\u2019s session and permissions."
          ),
          (0, i.yg)(
            "p",
            null,
            (0, i.yg)("img", {
              alt: "Authresponse",
              src: n(93550).A,
              title: "Authresponse",
              width: "2730",
              height: "454",
            })
          ),
          (0, i.yg)(
            "p",
            null,
            "Copy the ",
            (0, i.yg)("inlineCode", { parentName: "p" }, "api_key"),
            " and paste it in Swagger under the ",
            (0, i.yg)("inlineCode", { parentName: "p" }, "Authorize"),
            " button that you will find on the top of the site.\nAfter this login activity, all future requests will be authenticated using the provided ",
            (0, i.yg)("inlineCode", { parentName: "p" }, "api_key"),
            "."
          ),
          (0, i.yg)(
            "p",
            null,
            (0, i.yg)("img", {
              alt: "Authorize",
              src: n(81860).A,
              title: "Authorize",
              width: "2828",
              height: "534",
            })
          ),
          (0, i.yg)(
            "p",
            null,
            (0, i.yg)("img", {
              alt: "APIpaste",
              src: n(60112).A,
              title: "APIpaste",
              width: "1288",
              height: "530",
            })
          ),
          (0, i.yg)(
            "p",
            null,
            "Alternatively , you could also do it via your script:"
          ),
          (0, i.yg)(
            "p",
            null,
            "Make a ",
            (0, i.yg)("inlineCode", { parentName: "p" }, "POST"),
            " request to the Expedition\u2019s hostname or IP address using the administrative credentials, where you will have to replace the fields ",
            (0, i.yg)("em", { parentName: "p" }, "YourExpeditionIP"),
            ", ",
            (0, i.yg)("em", { parentName: "p" }, "username"),
            " and ",
            (0, i.yg)("em", { parentName: "p" }, "password"),
            " with your actual values. Refer to the ",
            (0, i.yg)(
              "a",
              {
                parentName: "p",
                href: "/expedition/docs/creating_credentials",
              },
              "Obtaining the API Keys"
            ),
            " section to obtain a valid API key stored in the ",
            (0, i.yg)("inlineCode", { parentName: "p" }, "hed"),
            " variable.  "
          ),
          (0, i.yg)(
            "p",
            null,
            "A successful API call returns, within the Contents section, ",
            (0, i.yg)("inlineCode", { parentName: "p" }, 'status="success"'),
            " along with the API key within the ",
            (0, i.yg)("inlineCode", { parentName: "p" }, "api_key"),
            " element, found under ",
            (0, i.yg)(
              "inlineCode",
              { parentName: "p" },
              "Contents->response->data->content"
            ),
            ":"
          ),
          (0, i.yg)(
            "pre",
            null,
            (0, i.yg)(
              "code",
              { parentName: "pre", className: "language-json" },
              '{\n  "Type": "success",\n  "success": true,\n  "Contents-Format": "json",\n  "Contents": {\n    "code": 0,\n    "success": true,\n    "cacheable": false,\n    "metadata": {\n      "execution-info": {\n        "execution-time": 0,\n        "execution-memory": 0,\n        "execution-disk-consumption": 0\n      },\n      "request-info": {\n        "request-method": "",\n        "request-query": "",\n        "request-time": "",\n        "request-client-user": "",\n        "request-client-ip": "",\n        "request-client-agent": ""\n      }\n    },\n    "response": {\n      "total": 3,\n      "current-page": 1,\n      "per-page": 10,\n      "total-pages": 1,\n      "state": 0,\n      "job-id": 0,\n      "response-messages": {\n        "total": 1,\n        "code": 0,\n        "messages": [\n          {\n            "message": "Authentication successful",\n            "details": {\n              "type": "success",\n              "causes": {\n                "module": "expedition-api",\n                "code": 0,\n                "description": ""\n              }\n            }\n          }\n        ]\n      },\n      "data": {\n        "fields": null,\n        "columns": null,\n        "content": {\n          "api_key": "lyEg5P87DMjLm8dAUm2PZbpYtxLBp9aW7VDldkVjOzcYuE5QscqlUAspchkOIVQQCAYSbbGK3NKKhJFpEj80X44nAZzVO1zA8p87Fs1PfluN8Gg8p20q57fSI43v9H1Z",\n          "csrfToken": "MTU5OTg1Nzk2ODE4V3p4WDdtV3BSSldSMFVjSmM0Ykd2YkFqc1cydlJR",\n          "id": 1\n        }\n      }\n    }\n  }\n}\n'
            )
          )
        );
      }
      c.isMDXComponent = !0;
    },
    60112: (e, t, n) => {
      n.d(t, { A: () => i });
      const i =
        n.p + "assets/images/APIpaste-9e0a9480f17ec42bba3f59e3afaca99c.png";
    },
    81860: (e, t, n) => {
      n.d(t, { A: () => i });
      const i =
        n.p + "assets/images/authorize-5f4ca35ed0279f1a7c91c0b1be915aa5.png";
    },
    93550: (e, t, n) => {
      n.d(t, { A: () => i });
      const i =
        n.p + "assets/images/authresponse-cebf30a620d8d1b00cbfd4c3a4c0cc8b.png";
    },
  },
]);
