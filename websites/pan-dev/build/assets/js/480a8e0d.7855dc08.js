"use strict";
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [443],
  {
    82247: (e, n, t) => {
      t.d(n, { xA: () => g, yg: () => m });
      var o = t(14041);
      function i(e, n, t) {
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
      function a(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function r(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? a(Object(t), !0).forEach(function (n) {
                i(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
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
          o,
          i = (function (e, n) {
            if (null == e) return {};
            var t,
              o,
              i = {},
              a = Object.keys(e);
            for (o = 0; o < a.length; o++)
              (t = a[o]), n.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (o = 0; o < a.length; o++)
            (t = a[o]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (i[t] = e[t]));
        }
        return i;
      }
      var p = o.createContext({}),
        s = function (e) {
          var n = o.useContext(p),
            t = n;
          return e && (t = "function" == typeof e ? e(n) : r(r({}, n), e)), t;
        },
        g = function (e) {
          var n = s(e.components);
          return o.createElement(p.Provider, { value: n }, e.children);
        },
        c = "mdxType",
        d = {
          inlineCode: "code",
          wrapper: function (e) {
            var n = e.children;
            return o.createElement(o.Fragment, {}, n);
          },
        },
        u = o.forwardRef(function (e, n) {
          var t = e.components,
            i = e.mdxType,
            a = e.originalType,
            p = e.parentName,
            g = l(e, ["components", "mdxType", "originalType", "parentName"]),
            c = s(t),
            u = i,
            m = c["".concat(p, ".").concat(u)] || c[u] || d[u] || a;
          return t
            ? o.createElement(m, r(r({ ref: n }, g), {}, { components: t }))
            : o.createElement(m, r({ ref: n }, g));
        });
      function m(e, n) {
        var t = arguments,
          i = n && n.mdxType;
        if ("string" == typeof e || i) {
          var a = t.length,
            r = new Array(a);
          r[0] = u;
          var l = {};
          for (var p in n) hasOwnProperty.call(n, p) && (l[p] = n[p]);
          (l.originalType = e),
            (l[c] = "string" == typeof e ? e : i),
            (r[1] = l);
          for (var s = 2; s < a; s++) r[s] = t[s];
          return o.createElement.apply(null, r);
        }
        return o.createElement.apply(null, t);
      }
      u.displayName = "MDXCreateElement";
    },
    23786: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => l,
          contentTitle: () => a,
          default: () => c,
          frontMatter: () => i,
          metadata: () => r,
          toc: () => p,
        });
      t(14041);
      var o = t(82247);
      const i = {
          id: "expedition_export",
          title: "Expedition 2.0 Export",
          sidebar_label: "Export Vendor Configuration",
          hide_title: !0,
          description: "Export 3rd party vendor configuration",
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
        a = void 0,
        r = {
          unversionedId: "expedition/docs/expedition_export",
          id: "expedition/docs/expedition_export",
          title: "Expedition 2.0 Export",
          description: "Export 3rd party vendor configuration",
          source: "@site/products/expedition/docs/expedition_export.md",
          sourceDirName: "expedition/docs",
          slug: "/expedition/docs/expedition_export",
          permalink: "/expedition/docs/expedition_export",
          draft: !1,
          editUrl:
            "https://github.com/PaloAltoNetworks/pan.dev/tree/master/products/expedition/docs/expedition_export.md",
          tags: [],
          version: "current",
          frontMatter: {
            id: "expedition_export",
            title: "Expedition 2.0 Export",
            sidebar_label: "Export Vendor Configuration",
            hide_title: !0,
            description: "Export 3rd party vendor configuration",
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
          previous: {
            title: "Installation",
            permalink: "/expedition/docs/expedition_qs",
          },
          next: {
            title: "Introduction",
            permalink: "/expedition/docs/expedition_apiint",
          },
        },
        l = {},
        p = [
          {
            value: "Export Vendor Configuration",
            id: "export-vendor-configuration",
            level: 2,
          },
          { value: "Fortinet", id: "fortinet", level: 2 },
          { value: "Juniper", id: "juniper", level: 2 },
          { value: "Juniper SRX(Junos)", id: "juniper-srxjunos", level: 3 },
          { value: "Juniper ScreenOS", id: "juniper-screenos", level: 3 },
          { value: "Checkpoint", id: "checkpoint", level: 2 },
          { value: "Checkpoint &gt;= R80.X", id: "checkpoint--r80x", level: 3 },
          {
            value: "4. Obtain route file using below command:",
            id: "4-obtain-route-file-using-below-command",
            level: 4,
          },
          {
            value: "Checkpoint &lt; R80.X",
            id: "checkpoint--r80x-1",
            level: 3,
          },
          { value: "Cisco", id: "cisco", level: 2 },
          { value: "SonicWall", id: "sonicwall", level: 2 },
          { value: "Forcepoint", id: "forcepoint", level: 2 },
          { value: "SideWinder", id: "sidewinder", level: 3 },
          { value: "StoneSoft", id: "stonesoft", level: 3 },
        ],
        s = { toc: p },
        g = "wrapper";
      function c({ components: e, ...n }) {
        return (0, o.yg)(
          g,
          { ...s, ...n, components: e, mdxType: "MDXLayout" },
          (0, o.yg)(
            "h2",
            { id: "export-vendor-configuration" },
            "Export Vendor Configuration"
          ),
          (0, o.yg)(
            "p",
            null,
            "Please refer to the individual vendor sections for instructions on how to export the configuration. For quick vendor navigation, use the table of contents to the right"
          ),
          (0, o.yg)("h2", { id: "fortinet" }, "Fortinet"),
          (0, o.yg)("p", null, "Export Configuration from GUI:"),
          (0, o.yg)(
            "p",
            null,
            "The configuration can be exported directly from the FortiGate firewalls."
          ),
          (0, o.yg)(
            "p",
            null,
            (0, o.yg)("strong", { parentName: "p" }, "1. Using the Web UI")
          ),
          (0, o.yg)(
            "p",
            null,
            "\u2022 Go to ",
            (0, o.yg)("strong", { parentName: "p" }, "Admin"),
            " -> ",
            (0, o.yg)("strong", { parentName: "p" }, "Configuration"),
            " -> ",
            (0, o.yg)("strong", { parentName: "p" }, "Backup"),
            "-> Select to backup to your ",
            (0, o.yg)("strong", { parentName: "p" }, "Local PC"),
            " or to a ",
            (0, o.yg)("strong", { parentName: "p" }, "USB Disk"),
            "."
          ),
          (0, o.yg)(
            "p",
            null,
            "\u2022 If VDOMs are enabled, select ",
            (0, o.yg)(
              "strong",
              { parentName: "p" },
              "VDOM configuration (VDOM Config)"
            ),
            " and then select the VDOM name that you want to migrate from the list."
          ),
          (0, o.yg)(
            "p",
            null,
            (0, o.yg)("img", {
              alt: "Fortinet",
              src: t(72289).A,
              title: "Fortinet",
              width: "1382",
              height: "446",
            })
          ),
          (0, o.yg)(
            "p",
            null,
            (0, o.yg)("img", {
              alt: "Fortinet2",
              src: t(41706).A,
              title: "Fortinet2",
              width: "1374",
              height: "256",
            })
          ),
          (0, o.yg)(
            "p",
            null,
            (0, o.yg)("strong", { parentName: "p" }, "2. Using the CLI")
          ),
          (0, o.yg)(
            "pre",
            null,
            (0, o.yg)(
              "code",
              { parentName: "pre", className: "language-console" },
              "execute backup config management-station <comment>\n"
            )
          ),
          (0, o.yg)(
            "p",
            null,
            "Use the same command to backup a VDOM configuration by first entering the commands:"
          ),
          (0, o.yg)(
            "pre",
            null,
            (0, o.yg)(
              "code",
              { parentName: "pre", className: "language-console" },
              "config vdom\n  edit <vdom_name>\n"
            )
          ),
          (0, o.yg)(
            "admonition",
            { type: "note" },
            (0, o.yg)(
              "p",
              { parentName: "admonition" },
              "The configuration is exported as a \u201c.conf\u201d file and is readable using a text file editor like notepad."
            )
          ),
          (0, o.yg)("h2", { id: "juniper" }, "Juniper"),
          (0, o.yg)("h3", { id: "juniper-srxjunos" }, "Juniper SRX(Junos)"),
          (0, o.yg)(
            "p",
            null,
            (0, o.yg)(
              "strong",
              { parentName: "p" },
              "1. Export the configuration file"
            )
          ),
          (0, o.yg)(
            "p",
            null,
            "Juniper SRX (Junos) configuration files are similar to PAN-OS configuration files in that they can be exported in either Set or XML formats. In order to use Expedition to perform the migration, we need the Juniper configuration file in XML format. We actually need to export the configuration from the Juniper device in the XML format by running the following command from the SRX CLI:"
          ),
          (0, o.yg)(
            "pre",
            null,
            (0, o.yg)(
              "code",
              { parentName: "pre", className: "language-console" },
              "show config | display xml | no-more\n"
            )
          ),
          (0, o.yg)(
            "p",
            null,
            (0, o.yg)(
              "strong",
              { parentName: "p" },
              "2. Modify the configuration file"
            )
          ),
          (0, o.yg)(
            "p",
            null,
            "The file has to start with XML tag ",
            (0, o.yg)("inlineCode", { parentName: "p" }, "<configuration>"),
            " without attributes and end with the closing\n",
            (0, o.yg)("inlineCode", { parentName: "p" }, "</configuration>"),
            " tag. Failure to remove the unneeded attributes is the leading cause of failure during the import into Expedition. The first line of the XML file should look like the following:"
          ),
          (0, o.yg)(
            "p",
            null,
            (0, o.yg)("img", {
              alt: "SRX1",
              src: t(33859).A,
              title: "SRX1",
              width: "926",
              height: "164",
            })
          ),
          (0, o.yg)(
            "p",
            null,
            "The last line of the XML file should end with ",
            (0, o.yg)("inlineCode", { parentName: "p" }, "</configuration>"),
            " and is shown below:"
          ),
          (0, o.yg)(
            "p",
            null,
            (0, o.yg)("img", {
              alt: "SRX2",
              src: t(97e3).A,
              title: "SRX2",
              width: "882",
              height: "94",
            })
          ),
          (0, o.yg)(
            "admonition",
            { type: "note" },
            (0, o.yg)(
              "p",
              { parentName: "admonition" },
              "The configuration is exported as a ",
              (0, o.yg)("strong", { parentName: "p" }, ".xml"),
              " file and is readable using a xml editor."
            )
          ),
          (0, o.yg)("h3", { id: "juniper-screenos" }, "Juniper ScreenOS"),
          (0, o.yg)("p", null, "To Backup or Save a Config File"),
          (0, o.yg)(
            "p",
            null,
            (0, o.yg)("strong", { parentName: "p" }, "1. Using the WebUI:")
          ),
          (0, o.yg)(
            "p",
            null,
            "Select ",
            (0, o.yg)("strong", { parentName: "p" }, "Configuration"),
            " -> ",
            (0, o.yg)("strong", { parentName: "p" }, "Update"),
            " -> ",
            (0, o.yg)("strong", { parentName: "p" }, "Config File")
          ),
          (0, o.yg)(
            "p",
            null,
            "In the ",
            (0, o.yg)(
              "strong",
              { parentName: "p" },
              "Download Configuration from Device"
            ),
            " section, select ",
            (0, o.yg)("strong", { parentName: "p" }, "Save to File"),
            "\nThen in the File Download dialog box, click ",
            (0, o.yg)("strong", { parentName: "p" }, "Save"),
            ". Navigate to the location where you want to save the configuration file (cfg.txt), then click Save."
          ),
          (0, o.yg)(
            "p",
            null,
            (0, o.yg)("strong", { parentName: "p" }, "2. Using the CLI:")
          ),
          (0, o.yg)("p", null, "Save the output with below commands:"),
          (0, o.yg)(
            "pre",
            null,
            (0, o.yg)(
              "code",
              { parentName: "pre", className: "language-console" },
              "set console page 0\nget config\n"
            )
          ),
          (0, o.yg)(
            "admonition",
            { type: "note" },
            (0, o.yg)(
              "p",
              { parentName: "admonition" },
              "if Screenos is managed by NSM; rule description is only visible in NSM not directly on FW"
            )
          ),
          (0, o.yg)("h2", { id: "checkpoint" }, "Checkpoint"),
          (0, o.yg)("h3", { id: "checkpoint--r80x" }, "Checkpoint >= R80.X"),
          (0, o.yg)(
            "ol",
            null,
            (0, o.yg)(
              "li",
              { parentName: "ol" },
              (0, o.yg)(
                "p",
                { parentName: "li" },
                "Obtain the newest Checkpoint ShowPolicy package via ",
                (0, o.yg)(
                  "a",
                  {
                    href: "https://github.com/CheckPointSW/ShowPolicyPackage/",
                  },
                  (0, o.yg)(
                    "strong",
                    { parentName: "p" },
                    "Checkpoint ShowPolicy Package"
                  )
                ),
                " . Please make sure you obtain the latest version which is v2.0.6."
              )
            ),
            (0, o.yg)(
              "li",
              { parentName: "ol" },
              (0, o.yg)(
                "p",
                { parentName: "li" },
                "Following below commands to create SCP user on Checkpoint Security Management Server , the scp user will be used to transfer the checkpoint configurations from checkpoint management server to your local machine."
              )
            )
          ),
          (0, o.yg)(
            "p",
            null,
            (0, o.yg)("strong", { parentName: "p" }, "R80.X")
          ),
          (0, o.yg)(
            "pre",
            null,
            (0, o.yg)(
              "code",
              { parentName: "pre", className: "language-console" },
              "add user scpuser uid 2600 homedir /home/scpuser\nset user scpuser realname Scpuser\nadd rba role scpRole domain-type System readwrite-features expert\nadd rba user scpuser roles scpRole\nset user scpuser gid 100 shell /usr/bin/scponly\nset user scpuser password\nsave config\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\n"
            )
          ),
          (0, o.yg)(
            "ol",
            { start: 3 },
            (0, o.yg)(
              "li",
              { parentName: "ol" },
              "Go into expert mode to run ",
              (0, o.yg)(
                "strong",
                { parentName: "li" },
                "\u201cjava -jar web_api_show_package-jar-with-dependencies.jar -option\u201d"
              ),
              " command. Please refer the ",
              (0, o.yg)(
                "a",
                { href: "https://github.com/CheckPointSW/ShowPolicyPackage/" },
                (0, o.yg)(
                  "strong",
                  { parentName: "li" },
                  "Checkpoint ShowPolicy Package"
                )
              ),
              " for the command options"
            )
          ),
          (0, o.yg)("p", null, "Examples:"),
          (0, o.yg)(
            "p",
            null,
            "Running the tool on a Checkpoint Security Management server:"
          ),
          (0, o.yg)(
            "pre",
            null,
            (0, o.yg)(
              "code",
              { parentName: "pre", className: "language-console" },
              "java -jar web_api_show_package-jar-with-dependencies.jar\n"
            )
          ),
          (0, o.yg)(
            "p",
            null,
            "\u2022 Running the tool on a Checkpoint Security Management server for a specific policy package:"
          ),
          (0, o.yg)(
            "pre",
            null,
            (0, o.yg)(
              "code",
              { parentName: "pre", className: "language-console" },
              "java -jar web_api_show_package-jar-with-dependencies.jar -k <PACKAGE NAME>\n"
            )
          ),
          (0, o.yg)(
            "p",
            null,
            "\u2022 Running the tool on a Checkpoint Multi-Domain Server for specific domain and a specific policy package:"
          ),
          (0, o.yg)(
            "pre",
            null,
            (0, o.yg)(
              "code",
              { parentName: "pre", className: "language-console" },
              "java -jar web_api_show_package-jar-with-dependencies.jar -k <PACKAGE NAME> -d <DOMAIN NAME>\n"
            )
          ),
          (0, o.yg)(
            "admonition",
            { type: "note" },
            (0, o.yg)(
              "p",
              { parentName: "admonition" },
              "This tool is already installed on CheckPoint Security Management servers running version R80 with Jumbo-HF and above. Please make sure you update the tool to the latest version which is v2.0.6."
            ),
            (0, o.yg)(
              "p",
              { parentName: "admonition" },
              "The Check Point Management Server also has a wrapper script so the tool can be run as",
              (0, o.yg)("br", { parentName: "p" }),
              "\n",
              "$MDS_FWDIR/scripts/web_api_show_package.sh which in turn executes",
              (0, o.yg)("br", { parentName: "p" }),
              "\n",
              "java -jar $MDS_FWDIR/api/samples/lib/web_api_show_package-jar-with-dependencies.jar"
            )
          ),
          (0, o.yg)(
            "p",
            null,
            "If you already have tool on CheckPoint Security Management Server, you can follow below steps to export the configuration:"
          ),
          (0, o.yg)(
            "pre",
            null,
            (0, o.yg)(
              "code",
              { parentName: "pre", className: "language-console" },
              "$MDS_FWDIR/scripts/web_api_show_package.sh\n"
            )
          ),
          (0, o.yg)(
            "p",
            null,
            "Running the tool on a Security Management server for a specific policy package:"
          ),
          (0, o.yg)(
            "pre",
            null,
            (0, o.yg)(
              "code",
              { parentName: "pre", className: "language-console" },
              "$MDS_FWDIR/scripts/web_api_show_package.sh -k <PACKAGE NAME>\n"
            )
          ),
          (0, o.yg)(
            "p",
            null,
            "Running the tool on a Multi-Domain Server for specific domain and a specific policy package:"
          ),
          (0, o.yg)(
            "pre",
            null,
            (0, o.yg)(
              "code",
              { parentName: "pre", className: "language-console" },
              "$MDS_FWDIR/scripts/web_api_show_package.sh -k <PACKAGE NAME> -d <DOMAIN NAME>\n"
            )
          ),
          (0, o.yg)(
            "admonition",
            { type: "note" },
            (0, o.yg)(
              "p",
              { parentName: "admonition" },
              "Use of CMA Name is not supported. Only use the Domain name or the CMA IP."
            )
          ),
          (0, o.yg)(
            "p",
            null,
            "Finally after doing all this you should be able to transfer the output over SCP.\nPLEASE NOTE THIS IS ALL ARBITRARY DEPENDING ON WHAT YOU HAVE SET UP AND WHERE YOU WOULD LIKE TO SAVE IT."
          ),
          (0, o.yg)(
            "admonition",
            { type: "note" },
            (0, o.yg)(
              "p",
              { parentName: "admonition" },
              "The configuration is exported as a ",
              (0, o.yg)("strong", { parentName: "p" }, ".tar.gz"),
              " file."
            )
          ),
          (0, o.yg)(
            "h4",
            { id: "4-obtain-route-file-using-below-command" },
            "4. Obtain route file using below command:"
          ),
          (0, o.yg)(
            "pre",
            null,
            (0, o.yg)(
              "code",
              { parentName: "pre", className: "language-console" },
              "netstat -nr\n"
            )
          ),
          (0, o.yg)("p", null, "\xa0", " ", "\xa0", " or"),
          (0, o.yg)(
            "pre",
            null,
            (0, o.yg)(
              "code",
              { parentName: "pre", className: "language-console" },
              "show route all\n"
            )
          ),
          (0, o.yg)(
            "admonition",
            { type: "note" },
            (0, o.yg)(
              "p",
              { parentName: "admonition" },
              "The route file is needed for Expedition to do zone calculations"
            )
          ),
          (0, o.yg)("h3", { id: "checkpoint--r80x-1" }, "Checkpoint < R80.X"),
          (0, o.yg)(
            "admonition",
            { type: "info" },
            (0, o.yg)(
              "p",
              { parentName: "admonition" },
              "Both Checkpoint Management server and Gateway with version lower than R80.x , below are the required files:"
            ),
            (0, o.yg)(
              "p",
              { parentName: "admonition" },
              (0, o.yg)("strong", { parentName: "p" }, "\u2212 Objects_5_0.C"),
              (0, o.yg)("br", { parentName: "p" }),
              "\n",
              (0, o.yg)("strong", { parentName: "p" }, "\u2212 Policy.W"),
              (0, o.yg)("br", { parentName: "p" }),
              "\n",
              (0, o.yg)(
                "strong",
                { parentName: "p" },
                "\u2212 Rulebases_5_0.fws"
              ),
              (0, o.yg)("br", { parentName: "p" }),
              "\n",
              (0, o.yg)("strong", { parentName: "p" }, "\u2212 RouteFile")
            )
          ),
          (0, o.yg)(
            "p",
            null,
            "Please refer corresponding section based on your checkpoint management tool:"
          ),
          (0, o.yg)(
            "p",
            null,
            (0, o.yg)("strong", { parentName: "p" }, "Smart Center")
          ),
          (0, o.yg)(
            "p",
            null,
            "Obtain below configuration files from ",
            (0, o.yg)("strong", { parentName: "p" }, "'$FWDIR/conf'"),
            ":"
          ),
          (0, o.yg)(
            "ol",
            null,
            (0, o.yg)(
              "li",
              { parentName: "ol" },
              "Objects \u2013 ",
              (0, o.yg)("strong", { parentName: "li" }, "objects_5_0.C"),
              " (Check Point NG/NGX) or ",
              (0, o.yg)("strong", { parentName: "li" }, "objects.C"),
              " (Check Point 4.x) contains the firewall's object definitions."
            ),
            (0, o.yg)(
              "li",
              { parentName: "ol" },
              "Policy rulebases \u2013 ",
              (0, o.yg)("strong", { parentName: "li" }, "*", ".w"),
              " or ",
              (0, o.yg)("strong", { parentName: "li" }, "rulebases_5_0.fws"),
              ". The file name is ",
              (0, o.yg)(
                "inlineCode",
                { parentName: "li" },
                '"<package name>.W"'
              ),
              ' (default "Standard.W") or "rulebases_5_0.fws".'
            ),
            (0, o.yg)(
              "li",
              { parentName: "ol" },
              "Route File, please refer to the ",
              (0, o.yg)(
                "a",
                {
                  parentName: "li",
                  href: "#4-obtain-route-file-using-below-command",
                },
                "previous section step 4"
              )
            )
          ),
          (0, o.yg)(
            "p",
            null,
            (0, o.yg)("strong", { parentName: "p" }, "MDS/Provider-1")
          ),
          (0, o.yg)(
            "p",
            null,
            (0, o.yg)(
              "strong",
              { parentName: "p" },
              "Global Policies and Objects"
            )
          ),
          (0, o.yg)(
            "p",
            null,
            "The files necessary to migrate the global policies and objects are located in the ",
            (0, o.yg)(
              "inlineCode",
              { parentName: "p" },
              "opt/<cpversion>/conf"
            ),
            " directory of the MDS. Although these files are synchronized between MDS systems in a multi-MDS environment, it is suggested to pull them from the master MDS, which is authoritative for the database."
          ),
          (0, o.yg)(
            "ol",
            null,
            (0, o.yg)(
              "li",
              { parentName: "ol" },
              "From expert mode CLI on the Provider-1 server, cd to ",
              (0, o.yg)(
                "strong",
                { parentName: "li" },
                "\u201c$MDSDIR/conf\u201d"
              )
            ),
            (0, o.yg)(
              "li",
              { parentName: "ol" },
              "Export the Objects_5_0.C, Rulebases_5_0.fws, and Policy.W files"
            )
          ),
          (0, o.yg)(
            "p",
            null,
            (0, o.yg)("strong", { parentName: "p" }, "CMA Policies and Objects")
          ),
          (0, o.yg)(
            "p",
            null,
            "Individual CMA object databases are contained in unique subdirectories underneath the ",
            (0, o.yg)("strong", { parentName: "p" }, "\u201ccustomers\u201d"),
            " directory on the MDS:"
          ),
          (0, o.yg)(
            "p",
            null,
            "If the customer is using CMA redundancy, it is suggested to pull the files from the \u201cprimary\u201d CMA.\nTo retrieve the files required by the migration tool:"
          ),
          (0, o.yg)(
            "ol",
            null,
            (0, o.yg)(
              "li",
              { parentName: "ol" },
              "From the MDS/Provider-1 CLI, switch \u201ccontext\u201d to the relevant CMA"
            ),
            (0, o.yg)(
              "li",
              { parentName: "ol" },
              "Navigate to the ",
              (0, o.yg)("strong", { parentName: "li" }, "/conf"),
              " directory within that CMA"
            ),
            (0, o.yg)(
              "li",
              { parentName: "ol" },
              "Export the Objects_5_0.C , Rulebases_5_0.fws and Policy.W files"
            ),
            (0, o.yg)(
              "li",
              { parentName: "ol" },
              "Route file, please refer to the ",
              (0, o.yg)(
                "a",
                {
                  parentName: "li",
                  href: "#4-obtain-route-file-using-below-command",
                },
                "previous section step 4"
              )
            )
          ),
          (0, o.yg)("h2", { id: "cisco" }, "Cisco"),
          (0, o.yg)("p", null, "Issue below commands in the CLI:"),
          (0, o.yg)(
            "pre",
            null,
            (0, o.yg)(
              "code",
              { parentName: "pre", className: "language-console" },
              "terminal pager 0\nmore system:running-config / show running\n"
            )
          ),
          (0, o.yg)(
            "p",
            null,
            (0, o.yg)("img", {
              alt: "cisco",
              src: t(53560).A,
              title: "cisco",
              width: "1360",
              height: "388",
            })
          ),
          (0, o.yg)(
            "p",
            null,
            "If it's multi-context , you will need to issue below commands to get into each of the context before you issue above two commands:"
          ),
          (0, o.yg)(
            "pre",
            null,
            (0, o.yg)(
              "code",
              { parentName: "pre", className: "language-console" },
              "changeto context <name>\nchangeto system\n"
            )
          ),
          (0, o.yg)(
            "admonition",
            { type: "note" },
            (0, o.yg)(
              "p",
              { parentName: "admonition" },
              "The configuration is exported as a ",
              (0, o.yg)("strong", { parentName: "p" }, ".txt"),
              " file and is readable using any text editor."
            )
          ),
          (0, o.yg)("h2", { id: "sonicwall" }, "SonicWall"),
          (0, o.yg)(
            "p",
            null,
            "In collaboration with the Expedition Team, Migration Factory team has committed to redesigning all the converters present in the Expedition2 tool with the goal of pushing their capabilities further and increasing maintainability. The team also develops a tool called ",
            (0, o.yg)("strong", { parentName: "p" }, "PANser"),
            ", a parser for PAN-OS configuration files that is designed to be flexible and extensible, making it a valuable tool for a wide range of use cases.   "
          ),
          (0, o.yg)(
            "p",
            null,
            "By using PANser as an external parser on your Expedition2 environment, you can enhance the number and variety of 3rd party parsers."
          ),
          (0, o.yg)(
            "p",
            null,
            "Please fulfil and follow instructions on the form to download the ",
            (0, o.yg)(
              "a",
              { href: "https://forms.gle/zXGWh9cNgNaHSFBW6" },
              (0, o.yg)("strong", { parentName: "p" }, "PANser docker image")
            ),
            "  "
          ),
          (0, o.yg)(
            "p",
            null,
            "For more details, please reach out to the Migration Factory team at\n",
            (0, o.yg)(
              "a",
              {
                parentName: "p",
                href: "mailto:pso-migration-factory@paloaltonetworks.com",
              },
              "pso-migration-factory@paloaltonetworks.com"
            ),
            "  "
          ),
          (0, o.yg)(
            "p",
            null,
            "To export the configuration of a SonicWall firewall, you can follow these general steps:"
          ),
          (0, o.yg)(
            "ol",
            null,
            (0, o.yg)(
              "li",
              { parentName: "ol" },
              "Log in to the SonicWall firewall management interface using a web browser."
            ),
            (0, o.yg)(
              "li",
              { parentName: "ol" },
              'Navigate to the "System" or "Administration" section of the interface.'
            ),
            (0, o.yg)(
              "li",
              { parentName: "ol" },
              'Look for an option like "Export Settings" or "Backup Configuration."'
            ),
            (0, o.yg)(
              "li",
              { parentName: "ol" },
              "Select the option to export the configuration."
            ),
            (0, o.yg)(
              "li",
              { parentName: "ol" },
              "Choose a location to save the configuration file on your local machine."
            ),
            (0, o.yg)(
              "li",
              { parentName: "ol" },
              "Save the configuration file with a ",
              (0, o.yg)("strong", { parentName: "li" }, ".EXP"),
              " format."
            )
          ),
          (0, o.yg)("h2", { id: "forcepoint" }, "Forcepoint"),
          (0, o.yg)("h3", { id: "sidewinder" }, "SideWinder"),
          (0, o.yg)(
            "p",
            null,
            "Add all your Sidewinder rules into a single file and upload it or use the Copy from Clipboard. Depending on the version some of this commands will fail but others will get same information with the new command"
          ),
          (0, o.yg)(
            "pre",
            null,
            (0, o.yg)(
              "code",
              { parentName: "pre", className: "language-console" },
              "cf interface q > config_sidewinder.txt\ncf service q >> config_sidewinder.txt\ncf servicegroup q >> config_sidewinder.txt\ncf policy q >> config_sidewinder.txt\ncf route q >> config_sidewinder.txt\ncf ipaddr q >> config_sidewinder.txt\ncf iprange q >> config_sidewinder.txt\ncf subnet q >> config_sidewinder.txt\ncf netmap q >> config_sidewinder.txt\ncf domain q >> config_sidewinder.txt\ncf static q >> config_sidewinder.txt\ncf netgroup q >> config_sidewinder.txt\ncf application q >> config_sidewinder.txt\ncf appgroup q >> config_sidewinder.txt\ncf host q >> config_sidewinder.txt\n"
            )
          ),
          (0, o.yg)("h3", { id: "stonesoft" }, "StoneSoft"),
          (0, o.yg)(
            "p",
            null,
            "Please follow the below instructions to export the StoneSoft configuration:"
          ),
          (0, o.yg)(
            "ol",
            null,
            (0, o.yg)(
              "li",
              { parentName: "ol" },
              "Select Menu > File > Export > Export All Elements."
            ),
            (0, o.yg)(
              "li",
              { parentName: "ol" },
              "Select an option:\nEnter a file name for the export file.\nClick Browse to select the location where you want to create the file."
            ),
            (0, o.yg)("li", { parentName: "ol" }, "Click Export.")
          )
        );
      }
      c.isMDXComponent = !0;
    },
    53560: (e, n, t) => {
      t.d(n, { A: () => o });
      const o =
        t.p + "assets/images/cisco-55a51676b426383e33f515d099b22441.png";
    },
    72289: (e, n, t) => {
      t.d(n, { A: () => o });
      const o =
        t.p +
        "assets/images/fortinetexport1-0210b8ce6cddb7d0008a124ec5abbbf7.png";
    },
    41706: (e, n, t) => {
      t.d(n, { A: () => o });
      const o =
        t.p +
        "assets/images/fortinetexport2-173edeb9692033a55f8d33fccc63528a.png";
    },
    33859: (e, n, t) => {
      t.d(n, { A: () => o });
      const o = t.p + "assets/images/srx1-91e9b8120e766a30a3fbceef7eaef2e4.png";
    },
    97e3: (e, n, t) => {
      t.d(n, { A: () => o });
      const o = t.p + "assets/images/srx2-607e85f1e8bcbc682b123a82c401639a.png";
    },
  },
]);
