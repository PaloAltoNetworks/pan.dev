"use strict";
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [750],
  {
    82247: (e, t, n) => {
      n.d(t, { xA: () => g, yg: () => c });
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
      var p = a.createContext({}),
        s = function (e) {
          var t = a.useContext(p),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
        },
        g = function (e) {
          var t = s(e.components);
          return a.createElement(p.Provider, { value: t }, e.children);
        },
        d = "mdxType",
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        m = a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            l = e.originalType,
            p = e.parentName,
            g = o(e, ["components", "mdxType", "originalType", "parentName"]),
            d = s(n),
            m = r,
            c = d["".concat(p, ".").concat(m)] || d[m] || u[m] || l;
          return n
            ? a.createElement(c, i(i({ ref: t }, g), {}, { components: n }))
            : a.createElement(c, i({ ref: t }, g));
        });
      function c(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ("string" == typeof e || r) {
          var l = n.length,
            i = new Array(l);
          i[0] = m;
          var o = {};
          for (var p in t) hasOwnProperty.call(t, p) && (o[p] = t[p]);
          (o.originalType = e),
            (o[d] = "string" == typeof e ? e : r),
            (i[1] = o);
          for (var s = 2; s < l; s++) i[s] = n[s];
          return a.createElement.apply(null, i);
        }
        return a.createElement.apply(null, n);
      }
      m.displayName = "MDXCreateElement";
    },
    5537: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => o,
          contentTitle: () => l,
          default: () => d,
          frontMatter: () => r,
          metadata: () => i,
          toc: () => p,
        });
      n(14041);
      var a = n(82247);
      const r = {
          id: "home",
          title: "Expedition 2.0",
          sidebar_label: "Overview",
          hide_title: !0,
          description: "Overview of Expedition 2.0",
          slug: "/expedition/docs",
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
        l = void 0,
        i = {
          unversionedId: "expedition/docs/home",
          id: "expedition/docs/home",
          title: "Expedition 2.0",
          description: "Overview of Expedition 2.0",
          source: "@site/products/expedition/docs/expedition.md",
          sourceDirName: "expedition/docs",
          slug: "/expedition/docs",
          permalink: "/expedition/docs",
          draft: !1,
          editUrl:
            "https://github.com/PaloAltoNetworks/pan.dev/tree/master/products/expedition/docs/expedition.md",
          tags: [],
          version: "current",
          frontMatter: {
            id: "home",
            title: "Expedition 2.0",
            sidebar_label: "Overview",
            hide_title: !0,
            description: "Overview of Expedition 2.0",
            slug: "/expedition/docs",
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
          next: {
            title: "Installation",
            permalink: "/expedition/docs/expedition_qs",
          },
        },
        o = {},
        p = [
          { value: "What is Expedition?", id: "what-is-expedition", level: 2 },
          {
            value: "Expedition 2.0 Architecture",
            id: "expedition-20-architecture",
            level: 2,
          },
          {
            value: "Supported Vendor Matrix",
            id: "supported-vendor-matrix",
            level: 2,
          },
        ],
        s = { toc: p },
        g = "wrapper";
      function d({ components: e, ...t }) {
        return (0, a.yg)(
          g,
          { ...s, ...t, components: e, mdxType: "MDXLayout" },
          (0, a.yg)(
            "admonition",
            { type: "note" },
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              (0, a.yg)(
                "strong",
                { parentName: "p" },
                "End of Life Announcement for Palo Alto Networks Expedition"
              )
            ),
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              "We are excited to share some great news with you, as a valued user of Expedition functionalities. We are currently in the process of transferring the core functionalities of the tool into new products. This strategic move aligns with our commitment to meet the evolving needs of our customers and enhance our range of product offerings.  "
            ),
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              "Starting from January 2025, Palo Alto Networks will no longer support the Expedition tool, including all versions of both Expedition1 and Expedition2 branches. We believe this transition will bring even more value and improved capabilities to our users. For more details, please refer to ",
              (0, a.yg)(
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
          (0, a.yg)("h2", { id: "what-is-expedition" }, "What is Expedition?"),
          (0, a.yg)(
            "p",
            null,
            (0, a.yg)("strong", { parentName: "p" }, "Expedition"),
            " is the fifth evolution of the Palo Alto Networks Migration Tool. The original main purpose of this tool was to help reduce the time and effort to migrate a configuration from one of the supported vendors to Palo Alto Networks."
          ),
          (0, a.yg)(
            "p",
            null,
            "By using the Migration Tool, everyone can convert a configuration from Checkpoint or Cisco or any other vendor to a PAN-OS and give you more time to improve the results. Migration Tool 3 added some functionalities to allow our customers to enforce security policies based on App-ID and User-ID as well."
          ),
          (0, a.yg)(
            "p",
            null,
            "With Expedition 1.X, we went one step further, not only because we want to continue helping to facilitate the transition of a security policy from others vendors to PAN-OS but we want to ensure the outcome makes use of the most advanced features of the platform to get you closer to the best of the possible configurations. For this reason, we added a Machine Learning module, which can help you to generate new security policies based on real log traffic, and we have introduced the Best Practices Assessment Tool, which checks whether the configuration complies with the Best Practices recommended by our security experts."
          ),
          (0, a.yg)(
            "p",
            null,
            "With Expedition 2.0, we had two main goals on mind:"
          ),
          (0, a.yg)(
            "ul",
            null,
            (0, a.yg)(
              "li",
              { parentName: "ul" },
              "Improve the tool performance and reliability"
            ),
            (0, a.yg)("li", { parentName: "ul" }, "Provide automation features")
          ),
          (0, a.yg)(
            "p",
            null,
            "With all these huge improvements, we expect the next time you use Expedition the journey to excellence will be easier."
          ),
          (0, a.yg)(
            "h2",
            { id: "expedition-20-architecture" },
            "Expedition 2.0 Architecture"
          ),
          (0, a.yg)(
            "p",
            null,
            "The Expedition 2 container image consists of a set of individual containers (see Figure 1) that interact between each other, being the expedition-api the orchestrator for all workflow interactions. In the current version Expedition 2.0, the following packages, services and version should be found:"
          ),
          (0, a.yg)(
            "p",
            null,
            (0, a.yg)("strong", { parentName: "p" }, "Expedition-API"),
            ":"
          ),
          (0, a.yg)(
            "p",
            null,
            "Container is intended to provide a RESTful API that can be consumed by your scripting language of choice and to present the UI (HTML/JS). The back-end API is developed using the Laravel PHP framework and served via Apache 2. Also running one or more PHP Agent(s) to support asynchronous requests that help with the execution of automated tasks and multi-processing actions. The agents also consume the API and communications with them are performed via RabbitMQ."
          ),
          (0, a.yg)(
            "ul",
            null,
            (0, a.yg)(
              "li",
              { parentName: "ul" },
              "Services installed:",
              (0, a.yg)(
                "ul",
                { parentName: "li" },
                (0, a.yg)("li", { parentName: "ul" }, "Apache/2.4.53"),
                (0, a.yg)("li", { parentName: "ul" }, "PHP/7.4.29")
              )
            ),
            (0, a.yg)(
              "li",
              { parentName: "ul" },
              "API (Laravel) logs path:",
              (0, a.yg)(
                "ul",
                { parentName: "li" },
                (0, a.yg)(
                  "li",
                  { parentName: "ul" },
                  "/var/www/html/expedition-api/storage/logs"
                )
              )
            ),
            (0, a.yg)(
              "li",
              { parentName: "ul" },
              "Some configuration files are stored in volumes on the host."
            )
          ),
          (0, a.yg)(
            "p",
            null,
            (0, a.yg)("strong", { parentName: "p" }, "RabbitMQ"),
            ":"
          ),
          (0, a.yg)(
            "p",
            null,
            "Container to provide the RabbitMQ service for asynchronous requests. Communications are performed between web service API calls and PHP agents. Stopping this service will prevent agents from receiving messages for the execution of blocking or long lasting tasks, such as downloading configuration files from a PANOS device, doing reverse DNS resolutions, autoprocessing CSV traffic log files, among others."
          ),
          (0, a.yg)(
            "ul",
            null,
            (0, a.yg)(
              "li",
              { parentName: "ul" },
              "Services installed:",
              (0, a.yg)(
                "ul",
                { parentName: "li" },
                (0, a.yg)("li", { parentName: "ul" }, "RabbitMQ/3.8")
              )
            )
          ),
          (0, a.yg)(
            "p",
            null,
            (0, a.yg)("strong", { parentName: "p" }, "Expedition-db"),
            ":"
          ),
          (0, a.yg)(
            "p",
            null,
            "Container intended to provide a RDBMS as storage for the application data. Stopping this container will block all Expedition\u2019s functionalities, as it would interrupt authentication, access to project information, or auditing."
          ),
          (0, a.yg)(
            "ul",
            null,
            (0, a.yg)(
              "li",
              { parentName: "ul" },
              "DB files are stored as volumes on the host."
            ),
            (0, a.yg)(
              "li",
              { parentName: "ul" },
              "Services installed:",
              (0, a.yg)(
                "ul",
                { parentName: "li" },
                (0, a.yg)("li", { parentName: "ul" }, "Maria DB ver. 10.8.2")
              )
            ),
            (0, a.yg)(
              "li",
              { parentName: "ul" },
              "Databases:",
              (0, a.yg)(
                "ul",
                { parentName: "li" },
                (0, a.yg)(
                  "li",
                  { parentName: "ul" },
                  "Projects databases (as exp_XX). A project is a collection of information related to a specific migration to a device. Each project is stored on a dedicated database within the same RDBMS."
                ),
                (0, a.yg)(
                  "li",
                  { parentName: "ul" },
                  "Authentication and authorization database (as pandbRBAC). Database to store application information such as users, grants and others."
                ),
                (0, a.yg)(
                  "li",
                  { parentName: "ul" },
                  "Other databases. Additional databases that may be used to contain global values, such as device capacities, etc."
                )
              )
            )
          ),
          (0, a.yg)(
            "p",
            null,
            (0, a.yg)("strong", { parentName: "p" }, "Expedition-parsers"),
            ":"
          ),
          (0, a.yg)(
            "p",
            null,
            "Container intended to provide the parser library and workflows to migrate from third party vendors to Palo Alto Networks configurations. This container includes mappings for specific service to configuration conversions when those are not TCP or UDP protocols.\nNot directly available to be consumed by the user, but by the Expedition-API container when migrations are being requested. This container does not expose an API.\nThis container does not have persistence, therefore all data generated is only available during the container lifecycle."
          ),
          (0, a.yg)(
            "ul",
            null,
            (0, a.yg)(
              "li",
              { parentName: "ul" },
              "Services installed:",
              (0, a.yg)(
                "ul",
                { parentName: "li" },
                (0, a.yg)("li", { parentName: "ul" }, "Apache/2.x"),
                (0, a.yg)("li", { parentName: "ul" }, "PHP/7.0")
              )
            )
          ),
          (0, a.yg)(
            "p",
            null,
            (0, a.yg)("strong", { parentName: "p" }, "Expedition-parsers-db"),
            ":"
          ),
          (0, a.yg)(
            "p",
            null,
            "Helper container for the expedition-parser container to store temporal data needed for parsing vendor configs. After a migration, the databases are wiped."
          ),
          (0, a.yg)(
            "ul",
            null,
            (0, a.yg)(
              "li",
              { parentName: "ul" },
              "Without persistence so all data generated is available during the container lifecycle."
            ),
            (0, a.yg)(
              "li",
              { parentName: "ul" },
              "Services installed:",
              (0, a.yg)(
                "ul",
                { parentName: "li" },
                (0, a.yg)("li", { parentName: "ul" }, "Maria DB ver. 10.2")
              )
            ),
            (0, a.yg)(
              "li",
              { parentName: "ul" },
              "Databases:",
              (0, a.yg)(
                "ul",
                { parentName: "li" },
                (0, a.yg)(
                  "li",
                  { parentName: "ul" },
                  "Projects DB. A project is a collection of information related to a specific migration to a device. Each project is stored on a dedicated database within the same RDBMS. The databases resemble the structure used by parsers in Expedition 1."
                ),
                (0, a.yg)(
                  "li",
                  { parentName: "ul" },
                  "PANDBRAC DB. Database to store information required for the migration scripts, such as name of the project under migration, version of the PANOS target device, and user controls."
                )
              )
            )
          ),
          (0, a.yg)(
            "admonition",
            { type: "note" },
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              "In order to persist users\u2019 projects and devices\u2019 information, some data is stored in shared volumes with the host (your computer). These shared space can be found in the /volumes folder, containing the following subfolders:"
            ),
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              "/volumes/user_space",
              (0, a.yg)("br", { parentName: "p" }),
              "\n",
              "/volumes/mysql_files  "
            )
          ),
          (0, a.yg)(
            "p",
            null,
            (0, a.yg)("img", {
              alt: "Architecture",
              src: n(64102).A,
              title: "Architecture",
              width: "960",
              height: "540",
            })
          ),
          (0, a.yg)(
            "h2",
            { id: "supported-vendor-matrix" },
            "Supported Vendor Matrix"
          ),
          (0, a.yg)(
            "p",
            null,
            "The below table listed the supported Vendor in current beta release, there will be more supported vendors in future releases."
          ),
          (0, a.yg)(
            "p",
            null,
            "For more specific inquiries, please contact ",
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
                (0, a.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "Vendor")
                ),
                (0, a.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "Supported Vendor OS")
                ),
                (0, a.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "Global Addr. Obj.")
                ),
                (0, a.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "Addr. Group Obj.")
                ),
                (0, a.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "Serv. Obj")
                ),
                (0, a.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "Serv. Group Obj.")
                ),
                (0, a.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "Sec. Pol")
                ),
                (0, a.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "NAT Pol.")
                ),
                (0, a.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "Net. Int. (L3)")
                ),
                (0, a.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "Static routes")
                ),
                (0, a.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "VPN")
                )
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
                  (0, a.yg)("small", null, "Checkpoint")
                ),
                (0, a.yg)("td", { parentName: "tr", align: null }, "R75, R77"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null })
              ),
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)("td", { parentName: "tr", align: null }),
                (0, a.yg)("td", { parentName: "tr", align: null }, ">R80"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null })
              ),
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "Cisco")
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "ASA 9.0,9.1,9.2, 9.6,8.2,8.4"
                ),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705")
              ),
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)("td", { parentName: "tr", align: null }),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "FirePower(only in ASA syntax)"
                ),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null })
              ),
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "Fortinet")
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "Fortigate 4.0,5.0,6.0"
                ),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null })
              ),
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, "Juniper")
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "All Netscreen Firewalls(ScreenOS)"
                ),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null })
              ),
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)("td", { parentName: "tr", align: null }),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "Junos 11.4,12.1,12.3"
                ),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null }, "\u2705"),
                (0, a.yg)("td", { parentName: "tr", align: null })
              )
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
    64102: (e, t, n) => {
      n.d(t, { A: () => a });
      const a =
        n.p +
        "assets/images/expedition2_arc-201f07230defcc7fbf866adf8556a8fe.svg";
    },
  },
]);
