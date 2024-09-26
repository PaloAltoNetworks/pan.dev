"use strict";
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [930],
  {
    82247: (e, r, t) => {
      t.d(r, { xA: () => d, yg: () => m });
      var i = t(14041);
      function o(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function a(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          r &&
            (i = i.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, i);
        }
        return t;
      }
      function s(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? a(Object(t), !0).forEach(function (r) {
                o(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      function c(e, r) {
        if (null == e) return {};
        var t,
          i,
          o = (function (e, r) {
            if (null == e) return {};
            var t,
              i,
              o = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++)
              (t = a[i]), r.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (t = a[i]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      var n = i.createContext({}),
        l = function (e) {
          var r = i.useContext(n),
            t = r;
          return e && (t = "function" == typeof e ? e(r) : s(s({}, r), e)), t;
        },
        d = function (e) {
          var r = l(e.components);
          return i.createElement(n.Provider, { value: r }, e.children);
        },
        u = "mdxType",
        p = {
          inlineCode: "code",
          wrapper: function (e) {
            var r = e.children;
            return i.createElement(i.Fragment, {}, r);
          },
        },
        f = i.forwardRef(function (e, r) {
          var t = e.components,
            o = e.mdxType,
            a = e.originalType,
            n = e.parentName,
            d = c(e, ["components", "mdxType", "originalType", "parentName"]),
            u = l(t),
            f = o,
            m = u["".concat(n, ".").concat(f)] || u[f] || p[f] || a;
          return t
            ? i.createElement(m, s(s({ ref: r }, d), {}, { components: t }))
            : i.createElement(m, s({ ref: r }, d));
        });
      function m(e, r) {
        var t = arguments,
          o = r && r.mdxType;
        if ("string" == typeof e || o) {
          var a = t.length,
            s = new Array(a);
          s[0] = f;
          var c = {};
          for (var n in r) hasOwnProperty.call(r, n) && (c[n] = r[n]);
          (c.originalType = e),
            (c[u] = "string" == typeof e ? e : o),
            (s[1] = c);
          for (var l = 2; l < a; l++) s[l] = t[l];
          return i.createElement.apply(null, s);
        }
        return i.createElement.apply(null, t);
      }
      f.displayName = "MDXCreateElement";
    },
    8074: (e, r, t) => {
      t.r(r),
        t.d(r, {
          contentTitle: () => S,
          default: () => _,
          frontMatter: () => y,
          metadata: () => b,
          toc: () => g,
        });
      t(14041);
      var i = t(82247),
        o = t(31085),
        a = t(9546),
        s = t(90780),
        c = t(23552),
        n = t(72032);
      const l = {
        cardContainer: "cardContainer_m_Rq",
        cardContainerLink: "cardContainerLink_t0nR",
        cardTitle: "cardTitle_jUca",
        cardDescription: "cardDescription_cDnT",
      };
      function d({ href: e, children: r }) {
        return (0, o.jsx)(s.default, {
          href: e,
          className: (0, a.default)("card padding--lg", l.cardContainer),
          children: r,
        });
      }
      function u({ href: e, icon: r, title: t, description: i }) {
        return (0, o.jsxs)(d, {
          href: e,
          children: [
            (0, o.jsxs)("h2", {
              className: (0, a.default)(l.cardTitle),
              title: t,
              children: [r, " ", t],
            }),
            i &&
              (0, o.jsx)("p", {
                className: (0, a.default)(l.cardDescription),
                title: i,
                children: i,
              }),
          ],
        });
      }
      function p({ item: e }) {
        const r = (0, c._o)(e);
        return (0, o.jsx)(u, {
          href: r,
          icon: "\ud83d\uddc3\ufe0f",
          title: e.label,
          description: e.description,
        });
      }
      function f({ item: e }) {
        const r = (0, n.A)(e.href) ? "\ud83d\udcc4\ufe0f" : "\ud83d\udd17";
        var t;
        const i = (0, c.cC)(
          null !== (t = e.docId) && void 0 !== t ? t : void 0
        );
        var a;
        return (0, o.jsx)(u, {
          href: e.href,
          icon: r,
          title: null !== (a = e.label) && void 0 !== a ? a : i.title,
          description: null == i ? void 0 : i.description,
        });
      }
      function m({ item: e }) {
        const r = e.icon ? e.icon : "\ud83d\udcc4\ufe0f";
        var t;
        const i = null !== (t = e.href) && void 0 !== t ? t : e.path,
          a = (0, c.cC)(e.id);
        var s;
        const n =
          null !== (s = null == a ? void 0 : a.description) && void 0 !== s
            ? s
            : e.description;
        var l;
        return (0, o.jsx)(u, {
          href: i,
          icon: r,
          title: null !== (l = e.label) && void 0 !== l ? l : a.title,
          description: n,
        });
      }
      function P({ item: e }) {
        var r, t;
        return (0, o.jsx)(u, {
          href: e.href,
          icon: "\ud83d\udcc4\ufe0f",
          title: null !== (r = e.label) && void 0 !== r ? r : " ",
          description: null !== (t = e.description) && void 0 !== t ? t : " ",
        });
      }
      function h({ item: e }) {
        switch (e.type ? e.type : "product") {
          case "link":
            return (0, o.jsx)(f, { item: e });
          case "category":
            return (0, o.jsx)(p, { item: e });
          case "doc":
            return (0, o.jsx)(m, { item: e });
          case "product":
            return (0, o.jsx)(P, { item: e });
          default:
            throw new Error(`unknown item type ${JSON.stringify(e)}`);
        }
      }
      function A({ items: e }) {
        return (0, o.jsx)("div", {
          className: "row",
          children: e.map((e, r) =>
            (0, o.jsx)(
              "article",
              {
                className: "col col--6 padding--sm",
                children: (0, o.jsx)(h, { item: e }),
              },
              r
            )
          ),
        });
      }
      function v({ product: e }) {
        const r = t(76292)[e].children;
        return (0, o.jsx)(A, { items: r });
      }
      const y = {
          id: "network-security.mdx",
          slug: "/network-security",
          title: "Network Security Developer Docs",
          hide_table_of_contents: !0,
        },
        S = void 0,
        b = {
          type: "mdx",
          permalink: "/network-security",
          source: "@site/src/pages/network-security.mdx",
          title: "Network Security Developer Docs",
          description: "Cloud-Delivered Security Services",
          frontMatter: {
            id: "network-security.mdx",
            slug: "/network-security",
            title: "Network Security Developer Docs",
            hide_table_of_contents: !0,
          },
        },
        g = [
          {
            value: "Cloud-Delivered Security Services",
            id: "cloud-delivered-security-services",
            level: 2,
          },
          { value: "PAN-OS", id: "pan-os", level: 2 },
          { value: "Expedition", id: "expedition", level: 2 },
          { value: "Cloud NGFW", id: "cloud-ngfw", level: 2 },
        ],
        I = { toc: g },
        w = "wrapper";
      function _({ components: e, ...r }) {
        return (0, i.yg)(
          w,
          { ...I, ...r, components: e, mdxType: "MDXLayout" },
          (0, i.yg)(
            "h2",
            { id: "cloud-delivered-security-services" },
            "Cloud-Delivered Security Services"
          ),
          (0, i.yg)(v, { product: "cdss", mdxType: "ProductIndex" }),
          (0, i.yg)(v, { product: "threat-vault", mdxType: "ProductIndex" }),
          (0, i.yg)(v, { product: "dns-security", mdxType: "ProductIndex" }),
          (0, i.yg)(v, { product: "iot", mdxType: "ProductIndex" }),
          (0, i.yg)("h2", { id: "pan-os" }, "PAN-OS"),
          (0, i.yg)(v, { product: "panos", mdxType: "ProductIndex" }),
          (0, i.yg)("h2", { id: "expedition" }, "Expedition"),
          (0, i.yg)(v, { product: "expedition", mdxType: "ProductIndex" }),
          (0, i.yg)("h2", { id: "cloud-ngfw" }, "Cloud NGFW"),
          (0, i.yg)(v, { product: "cloudngfw", mdxType: "ProductIndex" })
        );
      }
      _.isMDXComponent = !0;
    },
    76292: (e) => {
      e.exports = JSON.parse(
        '{"cdss":{"href":"/cdss","label":"Cloud-Delivered Security Services","sitemap_informationtype":["Developer"],"sitemap_productcategory":["Cloud-Delivered Security Services"],"children":[{"href":"/cdss/docs","label":"Cloud-Delivered Security Services","description":"CDSS Developer\'s Documentation","sitemap_feature-category":["Threat Prevention","IoT","DNS Security"]}]},"iot":{"href":"/iot","label":"IoT","sitemap_productcategory":["Cloud-Delivered Security Services","IoT"],"children":[{"href":"/iot/api","label":"IoT API","description":"IoT API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"]}]},"threat-vault":{"href":"/threat-vault","label":"Threat Vault","sitemap_productcategory":["Cloud-Delivered Security Services"],"sitemap_feature-category":["Threat Prevention"],"children":[{"href":"/threat-vault/docs","label":"Threat Vault Dev Docs","description":"Threat Vault Developer\'s Documentation","sitemap_feature":["API"]},{"href":"/threat-vault/api","label":"Threat Vault API | Reference Guide","description":"Describes the various API operation parameters, authentication methods, and usage details.","icon":"\u2699\ufe0f","sitemap_feature":["API"]}]},"dns-security":{"href":"/dns-security","label":"DNS Security","sitemap_productcategory":["Cloud-Delivered Security Services"],"sitemap_feature-category":["DNS Security"],"children":[{"href":"/dns-security/api","label":"DNS Security API | Reference Guide","description":"Describes the various API operation parameters, authentication methods, and usage details.","sitemap_feature-category":["DNS Security"],"icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/dns-security/docs","label":"DNS Security Dev Docs","description":"Describes the various API operation parameters, authentication methods, and usage details.","sitemap_feature-category":["DNS Security"],"icon":"\u2699\ufe0f","sitemap_feature":["API"]}]},"cloudngfw":{"href":"/cloudngfw","label":"Cloud NGFW","children":[{"href":"/cloudngfw/docs","label":"Cloud NGFW Docs","description":"Cloud Next Generation Firewall Docs"},{"href":"/cloudngfw/aws/api","label":"Cloud NGFW AWS API","description":"Cloud NGFW AWS API Reference","icon":"\u2699\ufe0f"}]},"prisma-cloud":{"href":"/prisma-cloud","sitemap_productcategory":["Prisma","Prisma Cloud","Cloud-Native Security"],"sitemap_informationtype":"Developer","children":[{"href":"/prisma-cloud/docs","label":"Prisma Cloud Workflows","description":"Prisma Cloud Workflows","sitemap_osversion":["Prisma Cloud Enterprise Edition"]},{"href":"/prisma-cloud/api","label":"Prisma Cloud API","description":"Prisma Cloud API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"],"sitemap_osversion":["Prisma Cloud Enterprise Edition"],"children":[{"href":"/prisma-cloud/api/cspm","label":"CSPM API","description":"Prisma Cloud CSPM API Reference"},{"href":"/prisma-cloud/api/cwpp","label":"CWPP API","description":"Prisma Cloud CWPP API Reference"},{"href":"/prisma-cloud/api/code","label":"Code API","description":"Prisma Cloud Code API Reference"}]}]},"compute":{"href":"/compute","sitemap_productcategory":["Prisma","Prisma Cloud","Prisma Cloud Compute Edition","Cloud-Native Security"],"sitemap_informationtype":"Developer","children":[{"href":"/compute/api/22-12","label":"Prisma Cloud API v22.12","description":"Prisma Cloud API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"],"sitemap_osversion":["Self-Hosted 22.12"]},{"href":"/compute/api/30-03","label":"Prisma Cloud API v30.03","description":"Prisma Cloud API Reference ","icon":"\u2699\ufe0f","sitemap_feature":["API"],"sitemap_osversion":["Self-Hosted 30.03"]},{"href":"/compute/api/","label":"Prisma Cloud API v31.02","description":"Prisma Cloud API Reference ","icon":"\u2699\ufe0f","sitemap_feature":["API"],"sitemap_osversion":["Self-Hosted 31.02"]}]},"sase":{"href":"/sase","label":"Prisma SASE","sitemap_productcategory":["Prisma","Prisma SASE"],"sitemap_feature":["Prisma","Prisma SASE","SASE"],"children":[{"href":"/sase/docs","label":"Prisma SASE Docs","description":"Prisma SASE Developer Guide"},{"href":"/sase/api/tenancy","label":"Tenancy Service API","description":"Tenancy Service API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/sase/api/iam","label":"IAM API","description":"IAM API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/sase/api/auth","label":"Authentication Service API","description":"Authentication Service API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/sase/api/subscription","label":"Subscription Service API","description":"Subscription Service API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/sase/api/mt-monitor","label":"Aggregate Monitoring APIs","description":"Aggregate Monitoring API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"]}]},"sdwan":{"href":"/sdwan","label":"Prisma SD-WAN","sitemap_productcategory":["Prisma","Prisma SD-WAN"],"sitemap_feature":["Prisma SD-WAN"],"children":[{"href":"/sdwan/docs","label":"Prisma SD-WAN Docs","description":"Prisma SD-WAN Developer Guide"},{"href":"/sdwan/api/unified","label":"Unified SASE SD-WAN APIs","description":"Unified SASE SD-WAN APIs","icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/sdwan/api/legacy","label":"Legacy Prisma SD-WAN APIs","description":"Legacy Prisma SD-WAN APIs","icon":"\u2699\ufe0f","sitemap_feature":["API"]}]},"access":{"href":"/access","label":"Prisma Access","sitemap_productcategory":["Prisma","Prisma Access"],"sitemap_feature":["Prisma","Prisma Access"],"children":[{"href":"/access/docs","label":"Prisma Access Docs","description":"Prisma Access Developer Guide"},{"href":"/access/api/prisma-access-config","label":"Prisma Access Configuration API","description":"Prisma Access Configuration API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/access/api/ztna","label":"ZTNA Connector API","description":"ZTNA Connector API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/access/api/adem","label":"Autonomous DEM APIs","description":"Autonomous DEM APIs","icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/access/api/insights/1.0","label":"Prisma Access Insights 1.0 APIs","description":"Prisma Access Insights 1.0 APIs","icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/access/api/insights","label":"Prisma Access Insights 2.0 APIs","description":"Prisma Access Insights 2.0 APIs","icon":"\u2699\ufe0f","sitemap_feature":["API"]}]},"panos":{"href":"/panos","label":"PAN-OS","sitemap_productcategory":["PAN-OS"],"children":[{"href":"/panos/docs/apis","label":"PAN-OS APIs and SDKs","description":"Guides to use PAN-OS APIs and SDKs","icon":"\u2699\ufe0f","sitemap_feature":["API"]},{"href":"/panos/docs/automation","label":"PAN-OS Automation","description":"Guides to use PAN-OS APIs and SDKs","icon":"\u2699\ufe0f"}]},"expedition":{"href":"/expedition","label":"Expedition","sitemap_productcategory":["PAN-OS"],"children":[{"href":"/expedition/docs/","label":"Expedition Docs","description":"Guides to use Expedition","icon":"\u2699\ufe0f"}]},"cdl":{"href":"/cdl","label":"Cortex Data Lake","sitemap_productcategory":["Cortex Data Lake"],"children":[{"href":"/cdl/docs/","label":"Cortex Data Lake Docs","description":"Guides to use Cortex Data Lake","icon":"\u2699\ufe0f"},{"href":"/cdl/api/","label":"Cortex Data Lake APIs","description":"CDL API Reference","icon":"\u2699\ufe0f","sitemap_feature":["API"]}]},"terraform-panos":{"href":"/terraform","make_link":true,"label":"Terraform","sitemap_feature":["Automation"],"children":[{"href":"/terraform/docs/panos","label":"Terraform for PAN-OS","description":"Guides to use Terraform for PAN-OS","icon":"\u2699\ufe0f","sitemap_productcategory":["PAN-OS"]}]},"swfw":{"href":"/swfw","make_link":true,"label":"Software NGFW Automation","sitemap_feature":["Automation"],"children":[{"add_crumb":true,"match":"/terraform/docs/swfw/aws/vmseries","href":"/terraform/docs/swfw/aws/vmseries/overview","label":"AWS - VM-Series"},{"add_crumb":true,"match":"/terraform/docs/swfw/aws/cloudngfw","href":"/terraform/docs/swfw/aws/cloudngfw/overview","label":"AWS - CloudNGFW"},{"add_crumb":true,"match":"/terraform/docs/swfw/azure/vmseries","href":"/terraform/docs/swfw/azure/vmseries/overview","label":"Azure - VM-Series"},{"add_crumb":true,"match":"/terraform/docs/swfw/azure/cloudngfw","href":"/terraform/docs/swfw/azure/cloudngfw/overview","label":"Azure - CloudNGFW"},{"add_crumb":true,"match":"/terraform/docs/swfw/gcp/vmseries","href":"/terraform/docs/swfw/gcp/vmseries/overview","label":"GCP - VM-Series"},{"add_crumb":true,"match":"/terraform/docs/swfw/gcp/cloudngfw","href":"/terraform/docs/swfw/gcp/cloudngfw/overview","label":"GCP - CloudNGFW"}]},"ansible-panos":{"href":"/ansible","label":"Ansible","sitemap_feature":["Automation"],"children":[{"href":"/ansible/docs/panos","label":"Ansible for PAN-OS","description":"Guides to use Ansible for PAN-OS","icon":"\u2699\ufe0f","sitemap_productcategory":["PAN-OS"]}]},"splunk":{"href":"/splunk","label":"Splunk","sitemap_feature":["SIEM"],"children":[{"href":"/splunk/docs/","label":"Palo Alto Networks Splunk App/Add-on","description":"Documentation on Splunk integration.","icon":"\u2699\ufe0f","sitemap_productcategory":["PAN-OS"]}]}}'
      );
    },
  },
]);
