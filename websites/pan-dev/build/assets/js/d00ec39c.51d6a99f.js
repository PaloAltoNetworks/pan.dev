"use strict";
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [336],
  {
    82247: (e, t, n) => {
      n.d(t, { xA: () => d, yg: () => y });
      var a = n(14041);
      function l(e, t, n) {
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
      function r(e, t) {
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
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                l(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function i(e, t) {
        if (null == e) return {};
        var n,
          a,
          l = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              l = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++)
              (n = r[a]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            (n = r[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (l[n] = e[n]));
        }
        return l;
      }
      var s = a.createContext({}),
        p = function (e) {
          var t = a.useContext(s),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : o(o({}, t), e)), n;
        },
        d = function (e) {
          var t = p(e.components);
          return a.createElement(s.Provider, { value: t }, e.children);
        },
        u = "mdxType",
        c = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        g = a.forwardRef(function (e, t) {
          var n = e.components,
            l = e.mdxType,
            r = e.originalType,
            s = e.parentName,
            d = i(e, ["components", "mdxType", "originalType", "parentName"]),
            u = p(n),
            g = l,
            y = u["".concat(s, ".").concat(g)] || u[g] || c[g] || r;
          return n
            ? a.createElement(y, o(o({ ref: t }, d), {}, { components: n }))
            : a.createElement(y, o({ ref: t }, d));
        });
      function y(e, t) {
        var n = arguments,
          l = t && t.mdxType;
        if ("string" == typeof e || l) {
          var r = n.length,
            o = new Array(r);
          o[0] = g;
          var i = {};
          for (var s in t) hasOwnProperty.call(t, s) && (i[s] = t[s]);
          (i.originalType = e),
            (i[u] = "string" == typeof e ? e : l),
            (o[1] = i);
          for (var p = 2; p < r; p++) o[p] = n[p];
          return a.createElement.apply(null, o);
        }
        return a.createElement.apply(null, n);
      }
      g.displayName = "MDXCreateElement";
    },
    62993: (e, t, n) => {
      n.r(t),
        n.d(t, {
          SetLanguage: () => u,
          assets: () => p,
          contentTitle: () => i,
          default: () => y,
          frontMatter: () => o,
          metadata: () => s,
          toc: () => d,
        });
      n(14041);
      var a = n(82247),
        l = n(99813),
        r = n(51801);
      const o = {
          id: "expedition_workflow_removeunused",
          title: "Remove Unused Objects Workflow",
          sidebar_label: "Remove Unused Objects",
          hide_title: !1,
          description: "Remove Unused Objects Workflow",
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
            "conversion",
          ],
          image: "/expedition/img/expedition.png",
        },
        i = void 0,
        s = {
          unversionedId: "expedition/docs/expedition_workflow_removeunused",
          id: "expedition/docs/expedition_workflow_removeunused",
          title: "Remove Unused Objects Workflow",
          description: "Remove Unused Objects Workflow",
          source:
            "@site/products/expedition/docs/expedition_workflow_removeunusedobject.md",
          sourceDirName: "expedition/docs",
          slug: "/expedition/docs/expedition_workflow_removeunused",
          permalink: "/expedition/docs/expedition_workflow_removeunused",
          draft: !1,
          editUrl:
            "https://github.com/PaloAltoNetworks/pan.dev/tree/master/products/expedition/docs/expedition_workflow_removeunusedobject.md",
          tags: [],
          version: "current",
          frontMatter: {
            id: "expedition_workflow_removeunused",
            title: "Remove Unused Objects Workflow",
            sidebar_label: "Remove Unused Objects",
            hide_title: !1,
            description: "Remove Unused Objects Workflow",
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
              "conversion",
            ],
            image: "/expedition/img/expedition.png",
          },
          sidebar: "expedition",
          previous: {
            title: "3rd party vendor configuration Migration",
            permalink: "/expedition/docs/expedition_workflow_migration",
          },
          next: {
            title: "Bulk Change to apply SPG",
            permalink: "/expedition/docs/expedition_workflow_bulkchange",
          },
        },
        p = {},
        d = [
          {
            value: "Step 1. Obtain the API Keys",
            id: "step-1-obtain-the-api-keys",
            level: 3,
          },
          {
            value: "Step 2. Add PAN-OS Device",
            id: "step-2-add-pan-os-device",
            level: 3,
          },
          {
            value: "Step 3. Create an Expedition Project",
            id: "step-3-create-an-expedition-project",
            level: 3,
          },
          {
            value: "Step 4. Upload PAN-OS config into device",
            id: "step-4-upload-pan-os-config-into-device",
            level: 3,
          },
          {
            value:
              "Step 5. Import the PAN-OS configuration of your device to the project",
            id: "step-5-import-the-pan-os-configuration-of-your-device-to-the-project",
            level: 3,
          },
          {
            value: "Step 6. Get Source ID of the config file",
            id: "step-6-get-source-id-of-the-config-file",
            level: 3,
          },
          {
            value: "Step 7. Generate Predefined Filters",
            id: "step-7-generate-predefined-filters",
            level: 3,
          },
          {
            value: "Step 8. Get Filter_ID from Filters",
            id: "step-8-get-filter_id-from-filters",
            level: 3,
          },
          {
            value: "Step 9. Execute Filter",
            id: "step-9-execute-filter",
            level: 3,
          },
          {
            value: "Step 10. Print the filter result",
            id: "step-10-print-the-filter-result",
            level: 3,
          },
          {
            value: "Step 11. Print the Collection Content",
            id: "step-11-print-the-collection-content",
            level: 3,
          },
          {
            value: "Step 12. Delete the Collection Content",
            id: "step-12-delete-the-collection-content",
            level: 3,
          },
        ];
      function u(e) {
        "undefined" != typeof window &&
          (localStorage.setItem("defaultLanguage", e),
          window.location.reload());
      }
      const c = { toc: d, SetLanguage: u },
        g = "wrapper";
      function y({ components: e, ...t }) {
        return (0, a.yg)(
          g,
          { ...c, ...t, components: e, mdxType: "MDXLayout" },
          (0, a.yg)(
            "p",
            null,
            "In this section we present a workflow example to remove unused address, address group, service and service group objects in a PAN-OS configuration.  In the Expedition API script container, the sample jupyter notebooks are stored in /Filters folder."
          ),
          (0, a.yg)(
            "p",
            null,
            "Below flowchart demo the workflow and the related API calls in each of the steps:"
          ),
          (0, a.yg)("mermaid", {
            value:
              'flowchart TB\nA[Obtain the API Keys<br/> POST https://localhost/api/v1/generate_api_key ] --\x3e C[Add PAN-OS device<br/> POST https://localhost/api/v1/device]\nC[Add PAN-OS device<br/> POST https://localhost/api/v1/device]  --\x3e D[Create an Expedition Project<br/> POST https://localhost/api/v1/project]\nD[Create an Expedition Project<br/> POST https://localhost/api/v1/project]--\x3e E["Upload PAN-OS config into device<br/> POST https://localhost/api/v1/{device_id}/upload_config"]\nE["Upload PAN-OS config into device<br/> POST https://localhost/api/v1/{device_id}/upload_config" ]--\x3e F["Import the PAN-OS configuration of your device to the project<br/> POST https://localhost/api/v1/project/{project_id}/import/device"]\nF["Import the PAN-OS configuration of your device to the project<br/> POST https://localhost/api/v1/project/{project_id}/import/device"] --\x3e G["Get source ID of the config file<br/> GET https://localhost/api/v1/project/{project_id}/source"]\nG["Get source ID of the config file<br/> GET https://localhost/api/v1/project/{project_id}/source"]--\x3eH["Generate Predefined Filters<br/> POST https://localhost/api/v1/project/{project_id}/tools/filter/generate_predefined"]\nH["Generate Predefined Filters<br/> POST https://localhost/api/v1/project/{project_id}/tools/filter/generate_predefined"] --\x3eI["Get Filter_ID from filters<br/> GET https://localhost/api/v1/project/{project_id}/filter?"]\nI["Get Filter_ID from filters<br/> GET https://localhost/api/v1/project/{project_id}/filter?"]--\x3eJ["Execute the filter<br/> POST https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/execute"]\nJ["Execute the filter<br/> POST https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/execute"] --\x3e K["Print the Filter Execution Result<br/> GET https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/success"]\nK["Print the Filter Execution Result<br/> GET https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/success"] --\x3e L["Print the Collection Content<br/> GET https://localhost/api/v1/project/{project_id}/collection/{collection_id}/content"]\nL["Print the Collection Content<br/> GET https://localhost/api/v1/project/{project_id}/collection/{collection_id}/content"] --\x3e M["Delete the Collection Content<br/> DELETE https://localhost/api/v1/{project_id}/collection/{collection_id}/content"]',
          }),
          (0, a.yg)("br", null),
          (0, a.yg)(
            "h3",
            { id: "step-1-obtain-the-api-keys" },
            "Step 1. Obtain the API Keys"
          ),
          (0, a.yg)(
            "p",
            null,
            "Refer to ",
            (0, a.yg)(
              "a",
              {
                parentName: "p",
                href: "/expedition/docs/creating_credentials",
              },
              "Obtaining the API Keys"
            ),
            " section to obtain a valid API key stored in the ",
            (0, a.yg)("inlineCode", { parentName: "p" }, "hed"),
            " variable."
          ),
          (0, a.yg)(
            "h3",
            { id: "step-2-add-pan-os-device" },
            "Step 2. Add PAN-OS Device"
          ),
          (0, a.yg)(
            "p",
            null,
            "Making a POST call to the Device route, we can create a Device with a desired name.\nNotice that we attach the credentials ",
            (0, a.yg)("inlineCode", { parentName: "p" }, "hed"),
            " in the CURL headers to present our credentials and verify we have permission to create a device."
          ),
          (0, a.yg)("p", null, "API syntax for creating a new device :"),
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
                (0, a.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, a.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Request Body Parameters"
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
                      "https://localhost/api/v1/device"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    "{",
                    (0, a.yg)("strong", { parentName: "td" }, '"name"'),
                    ": devicename, ",
                    (0, a.yg)("strong", { parentName: "td" }, '"serial"'),
                    ": serialnumber,",
                    (0, a.yg)("strong", { parentName: "td" }, '"hostname"'),
                    ": panosip,",
                    (0, a.yg)("strong", { parentName: "td" }, '"type"'),
                    ": devicetype,",
                    (0, a.yg)("strong", { parentName: "td" }, '"description"'),
                    ": pandescription,",
                    (0, a.yg)("br", null),
                    "}"
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
                      "https://localhost/api/v1/device"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    "{",
                    (0, a.yg)("strong", { parentName: "td" }, '"name"'),
                    ':"mypanorama", ',
                    (0, a.yg)("strong", { parentName: "td" }, '"serial"'),
                    ':"123456789",',
                    (0, a.yg)("strong", { parentName: "td" }, '"hostname"'),
                    ':"pan1",',
                    (0, a.yg)("strong", { parentName: "td" }, '"type"'),
                    ':"vm-panorama"',
                    (0, a.yg)("strong", { parentName: "td" }, '"description"'),
                    ':"Project for testing"}'
                  )
                )
              )
            )
          ),
          (0, a.yg)(
            "admonition",
            { type: "info" },
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              (0, a.yg)(
                "strong",
                { parentName: "p" },
                'The supported device "type" are below:'
              )
            ),
            (0, a.yg)(
              "pre",
              { parentName: "admonition" },
              (0, a.yg)(
                "code",
                { parentName: "pre" },
                '        "m100",\n        "m500",\n        "m600",\n        "vm-panorama",\n        "pa200",\n        "pa220",\n        "pa500",\n        "pa800",\n        "pa3000",\n        "pa3200",\n        "pa4000",\n        "pa5000",\n        "pa5200",\n        "pa7000",\n        "vm-series"\n'
              )
            )
          ),
          (0, a.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, a.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("*****Add a new PAN-OS device\\n")\npanosip = \'1.1.1.1\'\nserialnumber = \'123412\'\ndevicetype = "pa220"\npandescription = \'test\'\nurl = "https://localhost/api/v1/device"\ndata = {\n    "name": devicename,\n    "serial": serialnumber,\n    "hostname": panosip,\n    "type": devicetype,\n    "description": pandescription,\n    "port":device_port\n}\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\nsuccess = json.dumps(response["success"])\nif success == "true":\n    print("New device created successfully" + " \\n")\n    DeviceId = json.dumps(response[\'data\'][\'id\'])\n    print("Your Device-ID is " + str(DeviceId) + " \\n")\nelse:\n    print("Unable to create the device")\nprint("*****Upload PAN-OS config into device*****\\n")\n'
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            { id: "step-3-create-an-expedition-project" },
            "Step 3. Create an Expedition Project"
          ),
          (0, a.yg)(
            "p",
            null,
            "In the large amount of automation cases, we will require having an Expedition project. Making a POST call to the project route, we can create a project with a desired name."
          ),
          (0, a.yg)("p", null, "API syntax for creating a new project:"),
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
                (0, a.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, a.yg)("th", { parentName: "tr", align: null }, "Parameters")
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
                      "https://localhost/api/v1/project"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)("em", { parentName: "td" }, "in url"),
                    (0, a.yg)("br", null),
                    "{ ",
                    (0, a.yg)("strong", { parentName: "td" }, '"project"'),
                    ':"project1", ',
                    (0, a.yg)("strong", { parentName: "td" }, '"description"'),
                    ':"Project for testing" }'
                  )
                )
              ),
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    '{"project":"MyLittleProject", "description":"A migration project"}'
                  )
                )
              )
            )
          ),
          (0, a.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, a.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("***** Create new project *****\\n")\n\nurl = "https://localhost/api/v1/project"\ndata = {\n    "name": PROJECT_NAME,\n    "description": PROJECT_DESCRIPTION,\n    "device_id[0]": DeviceId,\n}\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\nsuccess = json.dumps(response["success"])\nif success == "true":\n    print("New project created successfully" + " \\n")\n    ProjectId = int(json.dumps(response[\'data\'][\'id\']))\n    print("Your Project-ID is " + str(ProjectId) + " \\n")\nelse:\n    print("Unable to create the project")\n\n'
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            { id: "step-4-upload-pan-os-config-into-device" },
            "Step 4. Upload PAN-OS config into device"
          ),
          (0, a.yg)(
            "p",
            null,
            "After device has been created , the next step will be uploading your pan-os config to associate with the device."
          ),
          (0, a.yg)(
            "p",
            null,
            "API syntax for upload PAN-OS config into device :"
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
                (0, a.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, a.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Path Parameters"
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
                    '"https://localhost/api/v1/device/{device_id}/upload_config"'
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)("strong", { parentName: "td" }, '"device_id"'),
                    ": device_Id"
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
                    '"https://localhost/api/v1/device/23/upload_config"'
                  )
                ),
                (0, a.yg)("td", { parentName: "tr", align: null })
              )
            )
          ),
          (0, a.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, a.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("*****Upload PAN-OS config into device*****\\n")\nVendorfile = open(PANOS_CONFIG_PATH, \'rb\')\nfiles = {\'config\': Vendorfile}\nurl= \'https://localhost/api/v1/device/\'+str(DeviceId)+\'/upload_config\'\nr = requests.post(url, files=files, data=data, verify=False, headers=hed)\nresponse = r.json()\nsuccess = json.dumps(response["success"])\nif success == "true":\n    print("Upload configuration successfully" + " \\n")\nelse:\n    print("Unable to upload the configuration")\n    print(response)\n'
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            {
              id: "step-5-import-the-pan-os-configuration-of-your-device-to-the-project",
            },
            "Step 5. Import the PAN-OS configuration of your device to the project"
          ),
          (0, a.yg)(
            "p",
            null,
            "This step will associate the device with project. The API response will contain a job ID , you can then use API call to check job status. Please refer to checking job status ",
            (0, a.yg)(
              "a",
              {
                parentName: "p",
                href: "/expedition/docs/managing_jobs#checking-job-status",
              },
              "Checking Job Status"
            ),
            " section ."
          ),
          (0, a.yg)("p", null, "API syntax for the step:"),
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
                (0, a.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, a.yg)("th", { parentName: "tr", align: null }, "Parameters")
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
                      "https://localhost/api/v1/project/{project_id}/import/device"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)("em", { parentName: "td" }, "in url"),
                    (0, a.yg)("br", null),
                    " ",
                    (0, a.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id",
                    (0, a.yg)("br", null),
                    "in_body",
                    (0, a.yg)("br", null),
                    " {",
                    (0, a.yg)("strong", { parentName: "td" }, '"device_id"'),
                    ":device_Id }"
                  )
                )
              ),
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/import/device"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, '{"device_id":"23""}')
                )
              )
            )
          ),
          (0, a.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, a.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("*****Import the PAN-OS configuration of your device to the project\\n")\nurl = \'https://localhost/api/v1/project/\'+str(ProjectId)+\'/import/device\'\ndata = {\n    "device_id": DeviceId,\n}\nr = requests.post(url, verify=False, headers=hed, data=data)\nresponse = r.json()\nsuccess = json.dumps(response["success"])\nif success == "true":\n    jobId =  json.dumps(response[\'data\'][\'job_id\'])\n    print("Job id: "+jobId)\n    print("***** Wait for job to finish *****")\n    wait_for_job(EXPEDITION_URL+"job/" + jobId + "?complete=true", jobId, hed)\n\nelse:\n    print(response)\n    print("Unable to import configuration ")\n\n'
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            { id: "step-6-get-source-id-of-the-config-file" },
            "Step 6. Get Source ID of the config file"
          ),
          (0, a.yg)(
            "p",
            null,
            "In this step, we will make a API call to get ",
            (0, a.yg)("strong", { parentName: "p" }, "source_id"),
            " of the config file that's been imported to the project. After this API call, you will parse the response that contains ",
            (0, a.yg)("strong", { parentName: "p" }, "source_id"),
            ". The ",
            (0, a.yg)("strong", { parentName: "p" }, "source_id"),
            " represent the pan-os config file that you would like to work on, and it will be used in the subsequent API calls."
          ),
          (0, a.yg)("p", null, "API syntax for the step:"),
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
                (0, a.yg)("th", { parentName: "tr", align: null }, "Route"),
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
                      "https://localhost/api/v1/project/{project_id}/source"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)("em", { parentName: "td" }, "in url"),
                    (0, a.yg)("br", null),
                    " ",
                    (0, a.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id",
                    (0, a.yg)("br", null),
                    "in_body",
                    (0, a.yg)("br", null),
                    " {",
                    (0, a.yg)("strong", { parentName: "td" }, '"device_id"'),
                    ":device_Id} "
                  )
                )
              ),
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/source"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    "{",
                    (0, a.yg)("strong", { parentName: "td" }, '"device_id"'),
                    ": 23}"
                  )
                )
              )
            )
          ),
          (0, a.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, a.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  "print(\"Get Source_ID of the config file\")\nurl = 'https://localhost/api/v1/project/'+str(ProjectId)+'/source'\nr = requests.get(url, verify=False, headers=hed)\nresponse = r.json()\nsuccess = json.dumps(response[\"success\"])\nif success == \"true\":\n    sourceId =  json.dumps(response['data']['source'][0]['id'])\n    print(\"Source id: \"+sourceId)\n\nelse:\n    print(\"Unable to get sources \")\n"
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            { id: "step-7-generate-predefined-filters" },
            "Step 7. Generate Predefined Filters"
          ),
          (0, a.yg)(
            "p",
            null,
            "In this step, we will generate predefined filters in Expedition . Please refer to the ",
            (0, a.yg)(
              "a",
              {
                parentName: "p",
                href: "/expedition/docs/expedition_workflow_filters",
              },
              "Expedition-API Filters "
            ),
            " section for details on filters."
          ),
          (0, a.yg)("p", null, "API syntax for the step:"),
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
                (0, a.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, a.yg)("th", { parentName: "tr", align: null }, "Parameters")
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
                      "https://localhost/api/v1/project/{project_id}/tools/filter/generate_predefined"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)("em", { parentName: "td" }, "in url"),
                    (0, a.yg)("br", null),
                    " ",
                    (0, a.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id",
                    (0, a.yg)("br", null),
                    "in_body",
                    (0, a.yg)("br", null),
                    " {",
                    (0, a.yg)("strong", { parentName: "td" }, '"type"'),
                    ":filter_type,",
                    (0, a.yg)("strong", { parentName: "td" }, '"source"'),
                    ":sourceId} "
                  )
                )
              ),
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/tools/filter/generate_predefined"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    "{",
                    (0, a.yg)("strong", { parentName: "td" }, '"type"'),
                    ': "basic", ',
                    (0, a.yg)("strong", { parentName: "td" }, '"source"'),
                    " : sourceId} "
                  )
                )
              )
            )
          ),
          (0, a.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, a.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("***** Generate predefined filters *****")\nurl=\'https://localhost/api/v1/project/\'+str(ProjectId)+\'/tools/filter/generate_predefined\'\ndata = {\n     "type": "basic",\n     "source": sourceId\n    }\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\n'
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            { id: "step-8-get-filter_id-from-filters" },
            "Step 8. Get Filter_ID from Filters"
          ),
          (0, a.yg)(
            "p",
            null,
            "After generate the predefined filters, we will search through the predefined filters by query \"unused%20objects' and get the filter_id."
          ),
          (0, a.yg)("p", null, "API syntax for the step:"),
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
                (0, a.yg)("th", { parentName: "tr", align: null }, "Route"),
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
                      "https://localhost/api/v1/project/{project_id}/tools/filter?type={filter_type}&query={string to search}"
                    ),
                    " "
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)("em", { parentName: "td" }, "in url"),
                    (0, a.yg)("br", null),
                    " ",
                    (0, a.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id, ",
                    (0, a.yg)("strong", { parentName: "td" }, '"type"'),
                    ":filter_type,",
                    (0, a.yg)("strong", { parentName: "td" }, '"query"'),
                    ":string to search "
                  )
                )
              ),
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/tools/filter?type=predefined&query=unused%20objects"
                    )
                  )
                ),
                (0, a.yg)("td", { parentName: "tr", align: null })
              )
            )
          ),
          (0, a.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, a.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  "print(\"***** list filters *****\")\nurl=https://localhost/api/v1/project/'+str(ProjectId)+'/tools/filter?type=predefined&query=unused%20objects'\nr = requests.get(url, verify=False, headers=hed)\nresponse = r.json()\nif len(response['data']['filter']) > 1:\n    print(\"Search query results in multiple filter objects. Check the below response to update the query to get a single filter\")\n    print(response)\nelif len(response['data']['filter']) == 1:\n    FILTER_ID=json.dumps(response['data']['filter'][0]['id'])\n    print(FILTER_ID)\nelse:\n    print(\"Cannot find filter based on the specified query\")\n"
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            { id: "step-9-execute-filter" },
            "Step 9. Execute Filter"
          ),
          (0, a.yg)(
            "p",
            null,
            "Once we get the filter_ID, we can then execute the filter. "
          ),
          (0, a.yg)("p", null, "API syntax for the step:"),
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
                (0, a.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, a.yg)("th", { parentName: "tr", align: null }, "Parameters")
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
                      "https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/execute"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)("em", { parentName: "td" }, "in url"),
                    (0, a.yg)("br", null),
                    " ",
                    (0, a.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id, ",
                    (0, a.yg)("strong", { parentName: "td" }, '"filter_id"'),
                    ":FILTER_ID"
                  )
                )
              ),
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/tools/filter/1/execute"
                    )
                  )
                ),
                (0, a.yg)("td", { parentName: "tr", align: null })
              )
            )
          ),
          (0, a.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, a.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("***** Execute a filter *****")\nurl=\'https://localhost/api/v1/project/\'+str(ProjectId)+\'/tools/filter/\'+FILTER_ID+\'/execute\'\ndata={"source_id": sourceId}\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\njobId = json.dumps(response["data"]["job_id"])\nsuccess = json.dumps(response["success"])\nif success == "true":\n    jobId =  json.dumps(response[\'data\'][\'job_id\'])\n    print("Job id: "+jobId)\n    print("***** Wait for job to finish *****")\n    wait_for_job(EXPEDITION_URL+"job/" + jobId + "?complete=true", jobId, hed)\n\nelse:\n    print(response)\n    print("Unable to execute filter ")ta"]["task"][0]["statusMessage"])\n    print(statusmessage)\n'
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            { id: "step-10-print-the-filter-result" },
            "Step 10. Print the filter result"
          ),
          (0, a.yg)(
            "p",
            null,
            "After the filter is executed , we can view the result using below API call. The result should contain all the objects that matches with the filter. From the response, you will parse the ",
            (0, a.yg)("strong", { parentName: "p" }, "collection_Id"),
            " to be used in the next API call."
          ),
          (0, a.yg)("p", null, "API syntax for the step:"),
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
                (0, a.yg)("th", { parentName: "tr", align: null }, "Route"),
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
                      "https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/success"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)("em", { parentName: "td" }, "in url"),
                    (0, a.yg)("br", null),
                    " ",
                    (0, a.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id, ",
                    (0, a.yg)("strong", { parentName: "td" }, '"filter_id"'),
                    ":filter_Id"
                  )
                )
              ),
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/tools/filter/1/success"
                    )
                  )
                ),
                (0, a.yg)("td", { parentName: "tr", align: null })
              )
            )
          ),
          (0, a.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, a.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  "print(\"***** Print the Filter Execution Result *****\")\nurl = 'https://localhost/api/v1/project/'+str(ProjectId)+'/tools/filter/'+FILTER_ID+'/success'\nr = requests.get(url, verify=False, headers=hed)\nresponse = r.json()\n#Print the Collection ID\nCollection_ID = json.dumps(response[\"data\"][\"id\"])\nprint('Your Collection ID is :'+Collection_ID)\n"
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            { id: "step-11-print-the-collection-content" },
            "Step 11. Print the Collection Content"
          ),
          (0, a.yg)(
            "p",
            null,
            "After the filter is executed , we can print the collection content using below API call."
          ),
          (0, a.yg)("p", null, "API syntax for the step:"),
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
                (0, a.yg)("th", { parentName: "tr", align: null }, "Route"),
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
                      "https://localhost/api/v1/project/{project_id}/collection/{Collection_Id}/content"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)("em", { parentName: "td" }, "in url"),
                    (0, a.yg)("br", null),
                    " ",
                    (0, a.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id, ",
                    (0, a.yg)(
                      "strong",
                      { parentName: "td" },
                      '"collection_id"'
                    ),
                    ":collection_Id"
                  )
                )
              ),
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/collection/20793/content"
                    )
                  )
                ),
                (0, a.yg)("td", { parentName: "tr", align: null })
              )
            )
          ),
          (0, a.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, a.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  "print(\"***** Print the Collection that contain unused objects *****\")\nurl = 'https://localhost/api/v1/project/'+str(ProjectId) + '/collection/'+Collection_ID+'/content'\nr = requests.get(url, verify=False, headers=hed)\nresponse=r.json()\nprint(response)\n"
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            { id: "step-12-delete-the-collection-content" },
            "Step 12. Delete the Collection Content"
          ),
          (0, a.yg)(
            "p",
            null,
            "This step we will delete the collection content, which will remove all unused address, address group, service, service group objects in the configuration file."
          ),
          (0, a.yg)("p", null, "API syntax for the step:"),
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
                (0, a.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, a.yg)("th", { parentName: "tr", align: null }, "Parameters")
              )
            ),
            (0, a.yg)(
              "tbody",
              { parentName: "table" },
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)("td", { parentName: "tr", align: null }, "DELETE"),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/{project_id}/collection/{collection_id}/content"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)("em", { parentName: "td" }, "in url"),
                    (0, a.yg)("br", null),
                    " ",
                    (0, a.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id, ",
                    (0, a.yg)(
                      "strong",
                      { parentName: "td" },
                      '"collection_id"'
                    ),
                    ":collection_Id"
                  )
                )
              ),
              (0, a.yg)(
                "tr",
                { parentName: "tbody" },
                (0, a.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/collection/20793/content"
                    )
                  )
                ),
                (0, a.yg)("td", { parentName: "tr", align: null })
              )
            )
          ),
          (0, a.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, a.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  "print(\"***** Delete the Collection that contain unused objects ***** \")\nurl = 'httos://localhost/api/v1/project/'+str(ProjectId) + '/collection/'+Collection_ID+'/content'\nr = requests.delete(url, verify=False, headers=hed)\nresponse=r.json()\nstatusmessage=json.dumps(response[\"messages\"][0][\"message\"])\nprint(statusmessage)\n"
                )
              )
            )
          )
        );
      }
      y.isMDXComponent = !0;
    },
    51801: (e, t, n) => {
      n.r(t), n.d(t, { default: () => o });
      var a = n(31085),
        l = (n(14041), n(9546));
      const r = { tabItem: "tabItem_OMyP" };
      function o({ children: e, hidden: t, className: n }) {
        return (0, a.jsx)("div", {
          role: "tabpanel",
          className: (0, l.default)(r.tabItem, n),
          hidden: t,
          children: e,
        });
      }
    },
    99813: (e, t, n) => {
      n.d(t, { A: () => g });
      var a = n(31085),
        l = n(14041),
        r = n(9546),
        o = n(44182),
        i = n(2533),
        s = n(53537);
      const p = { tabList: "tabList_M0Dn", tabItem: "tabItem_ysIP" };
      function d({
        className: e,
        block: t,
        selectedValue: n,
        selectValue: l,
        tabValues: i,
      }) {
        const s = [],
          { blockElementScrollPositionUntilNextRender: d } = (0, o.a_)(),
          u = (e) => {
            const t = e.currentTarget,
              a = s.indexOf(t),
              r = i[a].value;
            r !== n && (d(t), l(r));
          },
          c = (e) => {
            let t = null;
            switch (e.key) {
              case "Enter":
                u(e);
                break;
              case "ArrowRight": {
                const a = s.indexOf(e.currentTarget) + 1;
                var n;
                t = null !== (n = s[a]) && void 0 !== n ? n : s[0];
                break;
              }
              case "ArrowLeft": {
                const n = s.indexOf(e.currentTarget) - 1;
                var a;
                t = null !== (a = s[n]) && void 0 !== a ? a : s[s.length - 1];
                break;
              }
            }
            null == t || t.focus();
          };
        return (0, a.jsx)("ul", {
          role: "tablist",
          "aria-orientation": "horizontal",
          className: (0, r.default)("tabs", { "tabs--block": t }, e),
          children: i.map(({ value: e, label: t, attributes: l }) =>
            (0, a.jsx)(
              "li",
              {
                role: "tab",
                tabIndex: n === e ? 0 : -1,
                "aria-selected": n === e,
                ref: (e) => s.push(e),
                onKeyDown: c,
                onClick: u,
                ...l,
                className: (0, r.default)(
                  "tabs__item",
                  p.tabItem,
                  null == l ? void 0 : l.className,
                  { "tabs__item--active": n === e }
                ),
                children: null != t ? t : e,
              },
              e
            )
          ),
        });
      }
      function u({ lazy: e, children: t, selectedValue: n }) {
        const r = (Array.isArray(t) ? t : [t]).filter(Boolean);
        if (e) {
          const e = r.find((e) => e.props.value === n);
          return e
            ? (0, l.cloneElement)(e, { className: "margin-top--md" })
            : null;
        }
        return (0, a.jsx)("div", {
          className: "margin-top--md",
          children: r.map((e, t) =>
            (0, l.cloneElement)(e, { key: t, hidden: e.props.value !== n })
          ),
        });
      }
      function c(e) {
        const t = (0, i.u)(e);
        return (0, a.jsxs)("div", {
          className: (0, r.default)("tabs-container", p.tabList),
          children: [
            (0, a.jsx)(d, { ...e, ...t }),
            (0, a.jsx)(u, { ...e, ...t }),
          ],
        });
      }
      function g(e) {
        const t = (0, s.default)();
        return (0, a.jsx)(c, { ...e }, String(t));
      }
    },
    2533: (e, t, n) => {
      n.d(t, { u: () => c });
      var a = n(14041),
        l = n(86090),
        r = n(48043),
        o = n(9032),
        i = n(44892);
      function s(e) {
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
      function p(e) {
        const { values: t, children: n } = e;
        return (0, a.useMemo)(() => {
          const e = null != t ? t : s(n);
          return (
            (function (e) {
              const t = (0, o.X)(e, (e, t) => e.value === t.value);
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
      function d({ value: e, tabValues: t }) {
        return t.some((t) => t.value === e);
      }
      function u({ queryString: e = !1, groupId: t }) {
        const n = (0, l.W6)(),
          o = (function ({ queryString: e = !1, groupId: t }) {
            if ("string" == typeof e) return e;
            if (!1 === e) return null;
            if (!0 === e && !t)
              throw new Error(
                'Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".'
              );
            return null != t ? t : null;
          })({ queryString: e, groupId: t });
        return [
          (0, r.aZ)(o),
          (0, a.useCallback)(
            (e) => {
              if (!o) return;
              const t = new URLSearchParams(n.location.search);
              t.set(o, e), n.replace({ ...n.location, search: t.toString() });
            },
            [o, n]
          ),
        ];
      }
      function c(e) {
        const { defaultValue: t, queryString: n = !1, groupId: l } = e,
          r = p(e),
          [o, s] = (0, a.useState)(() =>
            (function ({ defaultValue: e, tabValues: t }) {
              if (0 === t.length)
                throw new Error(
                  "Docusaurus error: the <Tabs> component requires at least one <TabItem> children component"
                );
              if (e) {
                if (!d({ value: e, tabValues: t }))
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
            })({ defaultValue: t, tabValues: r })
          ),
          [c, g] = u({ queryString: n, groupId: l }),
          [y, m] = (function ({ groupId: e }) {
            const t = (function (e) {
                return e ? `docusaurus.tab.${e}` : null;
              })(e),
              [n, l] = (0, i.Dv)(t);
            return [
              n,
              (0, a.useCallback)(
                (e) => {
                  t && l.set(e);
                },
                [t, l]
              ),
            ];
          })({ groupId: l }),
          h = (() => {
            const e = null != c ? c : y;
            return d({ value: e, tabValues: r }) ? e : null;
          })();
        (0, a.useLayoutEffect)(() => {
          h && s(h);
        }, [h]);
        return {
          selectedValue: o,
          selectValue: (0, a.useCallback)(
            (e) => {
              if (!d({ value: e, tabValues: r }))
                throw new Error(`Can't select invalid tab value=${e}`);
              s(e), g(e), m(e);
            },
            [g, m, r]
          ),
          tabValues: r,
        };
      }
    },
  },
]);
