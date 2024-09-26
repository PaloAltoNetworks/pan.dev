"use strict";
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [555],
  {
    82247: (e, t, a) => {
      a.d(t, { xA: () => u, yg: () => y });
      var n = a(14041);
      function l(e, t, a) {
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
      function r(e, t) {
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
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(a), !0).forEach(function (t) {
                l(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : r(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function i(e, t) {
        if (null == e) return {};
        var a,
          n,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              l = {},
              r = Object.keys(e);
            for (n = 0; n < r.length; n++)
              (a = r[n]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (n = 0; n < r.length; n++)
            (a = r[n]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      var p = n.createContext({}),
        s = function (e) {
          var t = n.useContext(p),
            a = t;
          return e && (a = "function" == typeof e ? e(t) : o(o({}, t), e)), a;
        },
        u = function (e) {
          var t = s(e.components);
          return n.createElement(p.Provider, { value: t }, e.children);
        },
        d = "mdxType",
        c = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        g = n.forwardRef(function (e, t) {
          var a = e.components,
            l = e.mdxType,
            r = e.originalType,
            p = e.parentName,
            u = i(e, ["components", "mdxType", "originalType", "parentName"]),
            d = s(a),
            g = l,
            y = d["".concat(p, ".").concat(g)] || d[g] || c[g] || r;
          return a
            ? n.createElement(y, o(o({ ref: t }, u), {}, { components: a }))
            : n.createElement(y, o({ ref: t }, u));
        });
      function y(e, t) {
        var a = arguments,
          l = t && t.mdxType;
        if ("string" == typeof e || l) {
          var r = a.length,
            o = new Array(r);
          o[0] = g;
          var i = {};
          for (var p in t) hasOwnProperty.call(t, p) && (i[p] = t[p]);
          (i.originalType = e),
            (i[d] = "string" == typeof e ? e : l),
            (o[1] = i);
          for (var s = 2; s < r; s++) o[s] = a[s];
          return n.createElement.apply(null, o);
        }
        return n.createElement.apply(null, a);
      }
      g.displayName = "MDXCreateElement";
    },
    58240: (e, t, a) => {
      a.r(t),
        a.d(t, {
          SetLanguage: () => d,
          assets: () => s,
          contentTitle: () => i,
          default: () => y,
          frontMatter: () => o,
          metadata: () => p,
          toc: () => u,
        });
      a(14041);
      var n = a(82247),
        l = a(99813),
        r = a(51801);
      const o = {
          id: "expedition_workflow_bulkchange",
          title: "Bulk Change to apply SPG Workflow",
          sidebar_label: "Bulk Change to apply SPG",
          hide_title: !1,
          description: "Bulk Change to apply SPG Workflow",
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
        p = {
          unversionedId: "expedition/docs/expedition_workflow_bulkchange",
          id: "expedition/docs/expedition_workflow_bulkchange",
          title: "Bulk Change to apply SPG Workflow",
          description: "Bulk Change to apply SPG Workflow",
          source:
            "@site/products/expedition/docs/expedition_workflow_bulkchange.md",
          sourceDirName: "expedition/docs",
          slug: "/expedition/docs/expedition_workflow_bulkchange",
          permalink: "/expedition/docs/expedition_workflow_bulkchange",
          draft: !1,
          editUrl:
            "https://github.com/PaloAltoNetworks/pan.dev/tree/master/products/expedition/docs/expedition_workflow_bulkchange.md",
          tags: [],
          version: "current",
          frontMatter: {
            id: "expedition_workflow_bulkchange",
            title: "Bulk Change to apply SPG Workflow",
            sidebar_label: "Bulk Change to apply SPG",
            hide_title: !1,
            description: "Bulk Change to apply SPG Workflow",
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
            title: "Remove Unused Objects",
            permalink: "/expedition/docs/expedition_workflow_removeunused",
          },
          next: {
            title: "List security rules containing a specific subnet",
            permalink: "/expedition/docs/expedition_workflow_searchrule",
          },
        },
        s = {},
        u = [
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
            value: "Step 7. Create a filter for all allowed security rules",
            id: "step-7-create-a-filter-for-all-allowed-security-rules",
            level: 3,
          },
          {
            value: "Step 8. Execute the filter",
            id: "step-8-execute-the-filter",
            level: 3,
          },
          {
            value: "Step 9. Print the filter execution result",
            id: "step-9-print-the-filter-execution-result",
            level: 3,
          },
          {
            value: "Step 10. Print the Collection Content",
            id: "step-10-print-the-collection-content",
            level: 3,
          },
          {
            value: "Step 11. Get Security Profile Group ID",
            id: "step-11-get-security-profile-group-id",
            level: 3,
          },
          {
            value: "Step 12. Bulk Change Apply SPG to all allowed rules",
            id: "step-12-bulk-change-apply-spg-to-all-allowed-rules",
            level: 3,
          },
        ];
      function d(e) {
        "undefined" != typeof window &&
          (localStorage.setItem("defaultLanguage", e),
          window.location.reload());
      }
      const c = { toc: u, SetLanguage: d },
        g = "wrapper";
      function y({ components: e, ...t }) {
        return (0, n.yg)(
          g,
          { ...c, ...t, components: e, mdxType: "MDXLayout" },
          (0, n.yg)("br", null),
          (0, n.yg)(
            "p",
            null,
            "In this section we present a workflow example for bulk change apply Security Profile group to all allowed security rules in a PAN-OS configuration. The sample script is stored in /policies folder of the Expedition-API script container. "
          ),
          (0, n.yg)(
            "p",
            null,
            "Below flowchart demo the workflow and the related API calls in each of the steps:"
          ),
          (0, n.yg)("mermaid", {
            value:
              'flowchart TB\n    A[Obtain the API Keys<br/> POST https://localhost/api/v1/generate_api_key ] --\x3e B[Add PAN-OS device<br/> POST https://localhost/api/v1/device]\n    B[Add PAN-OS device<br/> POST https://localhost/api/v1/device]  --\x3e D["Create an Expedition Project<br/> POST https://localhost/api/v1/project" ]\n    D["Create an Expedition Project<br/> POST https://localhost/api/v1/project" ] --\x3e E["Upload PAN-OS config into device<br/> POST https://localhost/api/v1/{device_id}/upload_config" ]\n    E["Upload PAN-OS config into device<br/> POST https://localhost/api/v1/{device_id}/upload_config"] --\x3e F["Import the PAN-OS configuration of your device to the project<br/> POST https://localhost/api/v1/project/{project_id}/import/device"]\n    F["Import the PAN-OS configuration of your device to the project<br/> POST https://localhost/api/v1/project/{project_id}/import/device"] --\x3e G["Get source ID of the config file<br/> GET https://localhost/api/v1/project/{project_id}/source"]\n    G["Get source ID of the config file<br/> GET https://localhost/api/v1/project/{project_id}/source"]--\x3e H["Create a filter for all allowed security rules<br/> POST https://localhost/api/v1/project/{project_id}/tools/filter"]\n    H["Create a filter for all allowed security rules<br/> POST https://localhost/api/v1/project/{project_id}/tools/filter"] --\x3e I["Execute the filter<br/> POST https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/execute"]\n    I["Execute the filter<br/> POST https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/execute"] --\x3e J["Print the Filter Execution Result<br/> GET https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/success"]\n    J["Print the Filter Execution Result<br/> GET https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/success"] --\x3e K["Print the Collection Content<br/> GET https://localhost/api/v1/project/{project_id}/collection/{collection_id}/content"]\n    K["Print the Collection Content<br/> GET https://localhost/api/v1/project/{project_id}/collection/{collection_id}/content"] --\x3e L["Get Security Profile Group ID<br/> GET https://localhost/api/v1/project/{project_id}/object/profile_group"]\n    L["Get Security Profile Group ID<br/> GET https://localhost/api/v1/project/{project_id}/object/profile_group" ] --\x3e M["Bulk Change Apply SPG to all allowed rules<br/> PUT https://localhost/api/v1/project/{project_id}/policy/security"]',
          }),
          (0, n.yg)("br", null),
          (0, n.yg)(
            "h3",
            { id: "step-1-obtain-the-api-keys" },
            "Step 1. Obtain the API Keys"
          ),
          (0, n.yg)(
            "p",
            null,
            "Refer to ",
            (0, n.yg)(
              "a",
              {
                parentName: "p",
                href: "/expedition/docs/creating_credentials",
              },
              "Obtaining the API Keys"
            ),
            " section to obtain a valid API key stored in the ",
            (0, n.yg)("inlineCode", { parentName: "p" }, "hed"),
            " variable."
          ),
          (0, n.yg)(
            "h3",
            { id: "step-2-add-pan-os-device" },
            "Step 2. Add PAN-OS Device"
          ),
          (0, n.yg)(
            "p",
            null,
            "Making a POST call to the Device route, we can create a Device with a desired name.\nNotice that we attach the credentials ",
            (0, n.yg)("inlineCode", { parentName: "p" }, "hed"),
            " in the CURL headers to present our credentials and verify we have permission to create a device."
          ),
          (0, n.yg)("p", null, "API syntax for creating a new device :"),
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
                (0, n.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Request Body Parameters"
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
                      "https://localhost/api/v1/device"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    "{",
                    (0, n.yg)("strong", { parentName: "td" }, '"name"'),
                    ": devicename, ",
                    (0, n.yg)("strong", { parentName: "td" }, '"serial"'),
                    ": serialnumber,",
                    (0, n.yg)("strong", { parentName: "td" }, '"hostname"'),
                    ": panosip,",
                    (0, n.yg)("strong", { parentName: "td" }, '"type"'),
                    ": devicetype,",
                    (0, n.yg)("strong", { parentName: "td" }, '"description"'),
                    ": pandescription,",
                    (0, n.yg)("br", null),
                    "}"
                  )
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "Example"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/device"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    "{",
                    (0, n.yg)("strong", { parentName: "td" }, '"name"'),
                    ':"mypanorama", ',
                    (0, n.yg)("strong", { parentName: "td" }, '"serial"'),
                    ':"123456789",',
                    (0, n.yg)("strong", { parentName: "td" }, '"hostname"'),
                    ':"pan1",',
                    (0, n.yg)("strong", { parentName: "td" }, '"type"'),
                    ':"vm-panorama"',
                    (0, n.yg)("strong", { parentName: "td" }, '"description"'),
                    ':"Project for testing"}'
                  )
                )
              )
            )
          ),
          (0, n.yg)(
            "admonition",
            { type: "info" },
            (0, n.yg)(
              "p",
              { parentName: "admonition" },
              (0, n.yg)(
                "strong",
                { parentName: "p" },
                'The supported device "type" are below:'
              )
            ),
            (0, n.yg)(
              "pre",
              { parentName: "admonition" },
              (0, n.yg)(
                "code",
                { parentName: "pre" },
                '        "m100",\n        "m500",\n        "m600",\n        "vm-panorama",\n        "pa200",\n        "pa220",\n        "pa500",\n        "pa800",\n        "pa3000",\n        "pa3200",\n        "pa4000",\n        "pa5000",\n        "pa5200",\n        "pa7000",\n        "vm-series"\n'
              )
            )
          ),
          (0, n.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, n.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, n.yg)(
                "pre",
                null,
                (0, n.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("*****Add a new PAN-OS device\\n")\npanosip = \'1.1.1.1\'\nserialnumber = \'123412\'\ndevicetype = "pa220"\npandescription = \'test\'\nurl = "https://localhost/api/v1/device"\ndata = {\n    "name": devicename,\n    "serial": serialnumber,\n    "hostname": panosip,\n    "type": devicetype,\n    "description": pandescription,\n    "port":device_port\n}\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\nsuccess = json.dumps(response["success"])\nif success == "true":\n    print("New device created successfully" + " \\n")\n    DeviceId = json.dumps(response[\'data\'][\'id\'])\n    print("Your Device-ID is " + str(DeviceId) + " \\n")\nelse:\n    print("Unable to create the device")\nprint("*****Upload PAN-OS config into device*****\\n")\n'
                )
              )
            )
          ),
          (0, n.yg)(
            "h3",
            { id: "step-3-create-an-expedition-project" },
            "Step 3. Create an Expedition Project"
          ),
          (0, n.yg)(
            "p",
            null,
            "In the large amount of automation cases, we will require having an Expedition project. Making a POST call to the project route, we can create a project with a desired name."
          ),
          (0, n.yg)("p", null, "API syntax for creating a new project:"),
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
                (0, n.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, n.yg)("th", { parentName: "tr", align: null }, "Parameters")
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
                      "https://localhost/api/v1/project"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)("em", { parentName: "td" }, "in url"),
                    (0, n.yg)("br", null),
                    "{ ",
                    (0, n.yg)("strong", { parentName: "td" }, '"project"'),
                    ':"project1", ',
                    (0, n.yg)("strong", { parentName: "td" }, '"description"'),
                    ':"Project for testing" }'
                  )
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    '{"project":"MyLittleProject", "description":"A migration project"}'
                  )
                )
              )
            )
          ),
          (0, n.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, n.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, n.yg)(
                "pre",
                null,
                (0, n.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("***** Create new project *****\\n")\n\nurl = "https://localhost/api/v1/project"\ndata = {\n    "name": PROJECT_NAME,\n    "description": PROJECT_DESCRIPTION,\n    "device_id[0]": DeviceId,\n}\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\nsuccess = json.dumps(response["success"])\nif success == "true":\n    print("New project created successfully" + " \\n")\n    ProjectId = int(json.dumps(response[\'data\'][\'id\']))\n    print("Your Project-ID is " + str(ProjectId) + " \\n")\nelse:\n    print("Unable to create the project")\n\n'
                )
              )
            )
          ),
          (0, n.yg)(
            "h3",
            { id: "step-4-upload-pan-os-config-into-device" },
            "Step 4. Upload PAN-OS config into device"
          ),
          (0, n.yg)(
            "p",
            null,
            "After device has been created , the next step will be uploading your pan-os config to associate with the device."
          ),
          (0, n.yg)(
            "p",
            null,
            "API syntax for upload PAN-OS config into device :"
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
                (0, n.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, n.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Path Parameters"
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
                    '"https://localhost/api/v1/device/{device_id}/upload_config"'
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)("strong", { parentName: "td" }, '"device_id"'),
                    ": device_Id"
                  )
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "Example"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    '"https://localhost/api/v1/device/23/upload_config"'
                  )
                ),
                (0, n.yg)("td", { parentName: "tr", align: null })
              )
            )
          ),
          (0, n.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, n.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, n.yg)(
                "pre",
                null,
                (0, n.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("*****Upload PAN-OS config into device*****\\n")\nVendorfile = open(PANOS_CONFIG_PATH, \'rb\')\nfiles = {\'config\': Vendorfile}\nurl= \'https://localhost/api/v1/device/\'+str(DeviceId)+\'/upload_config\'\nr = requests.post(url, files=files, data=data, verify=False, headers=hed)\nresponse = r.json()\nsuccess = json.dumps(response["success"])\nif success == "true":\n    print("Upload configuration successfully" + " \\n")\nelse:\n    print("Unable to upload the configuration")\n    print(response)\n'
                )
              )
            )
          ),
          (0, n.yg)(
            "h3",
            {
              id: "step-5-import-the-pan-os-configuration-of-your-device-to-the-project",
            },
            "Step 5. Import the PAN-OS configuration of your device to the project"
          ),
          (0, n.yg)(
            "p",
            null,
            "This step will associate the device with project. The API response will contain a job ID , you can then use API call to check job status. Please refer to checking job status ",
            (0, n.yg)(
              "a",
              {
                parentName: "p",
                href: "/expedition/docs/managing_jobs#checking-job-status",
              },
              "Checking Job Status"
            ),
            " section ."
          ),
          (0, n.yg)("p", null, "API syntax for the step:"),
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
                (0, n.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, n.yg)("th", { parentName: "tr", align: null }, "Parameters")
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
                      "https://localhost/api/v1/project/{project_id}/import/device"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)("em", { parentName: "td" }, "in url"),
                    (0, n.yg)("br", null),
                    " ",
                    (0, n.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id",
                    (0, n.yg)("br", null),
                    "in_body",
                    (0, n.yg)("br", null),
                    " {",
                    (0, n.yg)("strong", { parentName: "td" }, '"device_id"'),
                    ":device_Id }"
                  )
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/import/device"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)("small", null, '{"device_id":"23""}')
                )
              )
            )
          ),
          (0, n.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, n.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, n.yg)(
                "pre",
                null,
                (0, n.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("*****Import the PAN-OS configuration of your device to the project\\n")\nurl = \'https://localhost/api/v1/project/\'+str(ProjectId)+\'/import/device\'\ndata = {\n    "device_id": DeviceId,\n}\nr = requests.post(url, verify=False, headers=hed, data=data)\nresponse = r.json()\nsuccess = json.dumps(response["success"])\nif success == "true":\n    jobId =  json.dumps(response[\'data\'][\'job_id\'])\n    print("Job id: "+jobId)\n    print("***** Wait for job to finish *****")\n    wait_for_job(EXPEDITION_URL+"job/" + jobId + "?complete=true", jobId, hed)\n\nelse:\n    print(response)\n    print("Unable to import configuration ")\n\n'
                )
              )
            )
          ),
          (0, n.yg)(
            "h3",
            { id: "step-6-get-source-id-of-the-config-file" },
            "Step 6. Get Source ID of the config file"
          ),
          (0, n.yg)(
            "p",
            null,
            "In this step, we will make a API call to get ",
            (0, n.yg)("strong", { parentName: "p" }, "source_id"),
            " of the config file that's been imported to the project. After this API call, you will parse the response that contains ",
            (0, n.yg)("strong", { parentName: "p" }, "source_id"),
            ". The ",
            (0, n.yg)("strong", { parentName: "p" }, "source_id"),
            " represent the pan-os config file that you would like to work on, and it will be used in the subsequent API calls."
          ),
          (0, n.yg)("p", null, "API syntax for the step:"),
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
                (0, n.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, n.yg)("th", { parentName: "tr", align: null }, "Parameters")
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
                      "https://localhost/api/v1/project/{project_id}/source"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)("em", { parentName: "td" }, "in url"),
                    (0, n.yg)("br", null),
                    " ",
                    (0, n.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id",
                    (0, n.yg)("br", null),
                    "in_body",
                    (0, n.yg)("br", null),
                    " {",
                    (0, n.yg)("strong", { parentName: "td" }, '"device_id"'),
                    ":device_Id} "
                  )
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/source"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    "{",
                    (0, n.yg)("strong", { parentName: "td" }, '"device_id"'),
                    ": 23}"
                  )
                )
              )
            )
          ),
          (0, n.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, n.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, n.yg)(
                "pre",
                null,
                (0, n.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  "print(\"Get Source_ID of the config file\")\nurl = 'https://localhost/api/v1/project/'+str(ProjectId)+'/source'\nr = requests.get(url, verify=False, headers=hed)\nresponse = r.json()\nsuccess = json.dumps(response[\"success\"])\nif success == \"true\":\n    sourceId =  json.dumps(response['data']['source'][0]['id'])\n    print(\"Source id: \"+sourceId)\n\nelse:\n    print(\"Unable to get sources \")\n"
                )
              )
            )
          ),
          (0, n.yg)(
            "h3",
            { id: "step-7-create-a-filter-for-all-allowed-security-rules" },
            "Step 7. Create a filter for all allowed security rules"
          ),
          (0, n.yg)(
            "p",
            null,
            'In this step, we will create a filter for all security rules that have action "allowed" . Please refer to the ',
            (0, n.yg)(
              "a",
              {
                parentName: "p",
                href: "/expedition/docs/expedition_workflow_filters",
              },
              "Expedition-API Filters "
            ),
            " section for details on filters. In this specific example, we are sending the request body contains below data, In the json response, you will get a filter_id , this filter_id will be used in the subsequent steps."
          ),
          (0, n.yg)(
            "pre",
            null,
            (0, n.yg)(
              "code",
              { parentName: "pre", className: "language-json" },
              'data = {\n     "name": "all allowed rules",\n     "reference": "all allowed rules",\n     "filter": "[security_rule] action equals  \\"allow\\"",\n     "source": sourceId\n    }\n'
            )
          ),
          (0, n.yg)("p", null, "API syntax for the step:"),
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
                (0, n.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, n.yg)("th", { parentName: "tr", align: null }, "Parameters")
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
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)("em", { parentName: "td" }, "in url"),
                    (0, n.yg)("br", null),
                    " ",
                    (0, n.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id",
                    (0, n.yg)("br", null),
                    "in_body",
                    (0, n.yg)("br", null),
                    " {",
                    (0, n.yg)("strong", { parentName: "td" }, '"name"'),
                    ":filter_name,",
                    (0, n.yg)("strong", { parentName: "td" }, '"filter"'),
                    ":filter, ",
                    (0, n.yg)("strong", { parentName: "td" }, '"reference"'),
                    ":filter_reference,",
                    (0, n.yg)("strong", { parentName: "td" }, '"source"'),
                    ":sourceId, } "
                  )
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/tools/filter"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    "{",
                    (0, n.yg)("strong", { parentName: "td" }, '"name"'),
                    ': "all allowed rules", ',
                    (0, n.yg)("strong", { parentName: "td" }, '"filter"'),
                    ' : "',
                    "[security_rule]",
                    ' action equals \\"allow\\"",',
                    (0, n.yg)("strong", { parentName: "td" }, '"reference"'),
                    ': "all allowed rules", ',
                    (0, n.yg)("strong", { parentName: "td" }, '"source"'),
                    " :4486 } "
                  )
                )
              )
            )
          ),
          (0, n.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, n.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, n.yg)(
                "pre",
                null,
                (0, n.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("***** create a filter *****")\n#Filter Variables\nFILTER_NAME="allallowedrules"\nFILTER_DESC="All Security Policy with allowed action"\nFILTER_OBJECT="[security_rule] action equals  \\"allow\\""\nurl=\'https://localhost/api/v1/project/\'+str(ProjectId)+\'/tools/filter\'\ndata = {\n     "name": FILTER_NAME,\n     "reference": FILTER_NAME,\n     "description" : FILTER_DESC,   \n     "filter": FILTER_OBJECT,\n     "source":sourceId\n    }\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\nprint(response)\nFILTER_ID = json.dumps(response[\'data\'][\'last_history_entry\'][\'filter_id\'])\nFILTER_ID=FILTER_ID.replace(\'"\', \'\')\nprint(\'Your Filter ID is :\'+FILTER_ID)\n'
                )
              )
            )
          ),
          (0, n.yg)(
            "h3",
            { id: "step-8-execute-the-filter" },
            "Step 8. Execute the filter"
          ),
          (0, n.yg)(
            "p",
            null,
            'After create a filter, we will execute the filter based on filter_Id , in the request body, you will need to provide "source_id" obtained from the previous step as required parameter.'
          ),
          (0, n.yg)("p", null, "API syntax for the step:"),
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
                (0, n.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, n.yg)("th", { parentName: "tr", align: null }, "Parameters")
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
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)("em", { parentName: "td" }, "in url"),
                    (0, n.yg)("br", null),
                    " ",
                    (0, n.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id, ",
                    (0, n.yg)("strong", { parentName: "td" }, '"filter_id"'),
                    ":filter_Id",
                    (0, n.yg)("br", null),
                    "in_body",
                    (0, n.yg)("br", null),
                    " {",
                    (0, n.yg)("strong", { parentName: "td" }, '"source_id"'),
                    ": source_id of the PAN-OS config file} "
                  )
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/tools/filter/1/execute"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    "{",
                    (0, n.yg)("strong", { parentName: "td" }, '"source_id"'),
                    ': "23564"} '
                  )
                )
              )
            )
          ),
          (0, n.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, n.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, n.yg)(
                "pre",
                null,
                (0, n.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("***** Execute a filter *****")\nurl=\'https://localhost/api/v1/project/\'+str(ProjectId)+\'/tools/filter/\'+FILTER_ID+\'/execute\'\ndata={"source_id": sourceId}\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\njobId = json.dumps(response["data"]["job_id"])\nsuccess = json.dumps(response["success"])\nif success == "true":\n    jobId =  json.dumps(response[\'data\'][\'job_id\'])\n    print("Job id: "+jobId)\n    print("***** Wait for job to finish *****")\n    wait_for_job(EXPEDITION_URL+"job/" + jobId + "?complete=true", jobId, hed)\n\nelse:\n    print(response)\n    print("Unable to execute filter ")\n'
                )
              )
            )
          ),
          (0, n.yg)(
            "h3",
            { id: "step-9-print-the-filter-execution-result" },
            "Step 9. Print the filter execution result"
          ),
          (0, n.yg)(
            "p",
            null,
            "After the filter is executed , we can view the result using below API call. The result should contain all the objects that matches with the filter. From the response, you will parse the ",
            (0, n.yg)("strong", { parentName: "p" }, "collection_Id"),
            " to be used in the subsequent API call."
          ),
          (0, n.yg)("p", null, "API syntax for the step:"),
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
                (0, n.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, n.yg)("th", { parentName: "tr", align: null }, "Parameters")
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
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)("em", { parentName: "td" }, "in url"),
                    (0, n.yg)("br", null),
                    " ",
                    (0, n.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id, ",
                    (0, n.yg)("strong", { parentName: "td" }, '"filter_id"'),
                    ":filter_Id"
                  )
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/tools/filter/1/success"
                    )
                  )
                ),
                (0, n.yg)("td", { parentName: "tr", align: null })
              )
            )
          ),
          (0, n.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, n.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, n.yg)(
                "pre",
                null,
                (0, n.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  "print(\"***** Print the Filter Execution Result *****\")\nurl = 'https://localhost/api/v1/project/'+'project/'+str(ProjectId)+'/tools/filter/'+FILTER_ID+'/success'\nr = requests.get(url, verify=False, headers=hed)\nresponse = r.json()\nprint(response)\n#Print the Collection ID\nCollection_ID = json.dumps(response[\"data\"][\"id\"])\nprint('Your Collection ID is :'+Collection_ID)\n"
                )
              )
            )
          ),
          (0, n.yg)(
            "h3",
            { id: "step-10-print-the-collection-content" },
            "Step 10. Print the Collection Content"
          ),
          (0, n.yg)(
            "p",
            null,
            "After the filter is executed , we can print the collection content using below API call."
          ),
          (0, n.yg)("p", null, "API syntax for the step:"),
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
                (0, n.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, n.yg)("th", { parentName: "tr", align: null }, "Parameters")
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
                      "https://localhost/api/v1/project/{project_id}/collection/{Collection_Id}/content"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)("em", { parentName: "td" }, "in url"),
                    (0, n.yg)("br", null),
                    " ",
                    (0, n.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id, ",
                    (0, n.yg)(
                      "strong",
                      { parentName: "td" },
                      '"collection_id"'
                    ),
                    ":collection_Id"
                  )
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/collection/20793/content"
                    )
                  )
                ),
                (0, n.yg)("td", { parentName: "tr", align: null })
              )
            )
          ),
          (0, n.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, n.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, n.yg)(
                "pre",
                null,
                (0, n.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  "print(\"***** Print the Collection that contain unused objects *****\")\nurl = 'https://localhost/api/v1/project/'+str(ProjectId) + '/collection/'+Collection_ID+'/content'\nr = requests.get(url, verify=False, headers=hed)\nresponse=r.json()\nprint(response)\n"
                )
              )
            )
          ),
          (0, n.yg)(
            "h3",
            { id: "step-11-get-security-profile-group-id" },
            "Step 11. Get Security Profile Group ID"
          ),
          (0, n.yg)(
            "p",
            null,
            "In order to apply the security profile group to the security policy, we will need to find out the object ID of the security profile group first. In the example, we will parse the first object ID from the response."
          ),
          (0, n.yg)("p", null, "API syntax for the step:"),
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
                (0, n.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, n.yg)("th", { parentName: "tr", align: null }, "Parameters")
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
                      "https://localhost/api/v1/project/{project_id}/object/profile_group"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)("em", { parentName: "td" }, "in url"),
                    (0, n.yg)("br", null),
                    " ",
                    (0, n.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id "
                  )
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/object/profile_group"
                    )
                  )
                ),
                (0, n.yg)("td", { parentName: "tr", align: null })
              )
            )
          ),
          (0, n.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, n.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, n.yg)(
                "pre",
                null,
                (0, n.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("***** Get Security Profile group ID *****")\nurl = \'https://localhost/api/v1/project/\'+str(ProjectId)+ "/object/profile_group"\nr = requests.get(url,verify=False, headers=hed)\nresponse=r.json()\nSPG_ID=json.dumps(response["data"]["profile_group"][0]["id"])\nprint(SPG_ID)\n'
                )
              )
            )
          ),
          (0, n.yg)(
            "h3",
            { id: "step-12-bulk-change-apply-spg-to-all-allowed-rules" },
            "Step 12. Bulk Change Apply SPG to all allowed rules"
          ),
          (0, n.yg)(
            "p",
            null,
            "The final step we perform a bulk change to apply the security profile group to all allowed rules."
          ),
          (0, n.yg)("p", null, "API syntax for the step:"),
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
                (0, n.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, n.yg)("th", { parentName: "tr", align: null }, "Parameters")
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
                      "https://localhost/api/v1/project/{project_id}/policy/security"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)("em", { parentName: "td" }, "in url"),
                    (0, n.yg)("br", null),
                    " ",
                    (0, n.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id ",
                    (0, n.yg)("br", null),
                    "in_body",
                    (0, n.yg)("br", null),
                    " {",
                    (0, n.yg)(
                      "strong",
                      { parentName: "td" },
                      '"add',
                      "[profile][0]",
                      '"'
                    ),
                    ": object_id of the SPG, ",
                    (0, n.yg)("strong", { parentName: "td" }, '"id"'),
                    ": collection_id} "
                  )
                )
              ),
              (0, n.yg)(
                "tr",
                { parentName: "tbody" },
                (0, n.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    (0, n.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/policy/security"
                    )
                  )
                ),
                (0, n.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, n.yg)(
                    "small",
                    null,
                    "{",
                    (0, n.yg)(
                      "strong",
                      { parentName: "td" },
                      '"add',
                      "[profile][0]",
                      '"'
                    ),
                    ': "11714", ',
                    (0, n.yg)("strong", { parentName: "td" }, '"id"'),
                    ':"20793"} '
                  )
                )
              )
            )
          ),
          (0, n.yg)(
            l.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, n.yg)(
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, n.yg)(
                "pre",
                null,
                (0, n.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("Bulk Change Apply SPG to all allowed rules")\nurl = \'https://localhost/api/v1/project/\'+str(ProjectId)+ "/policy/security"\ndata = {"add[profile][0]": int(SPG_ID), "id": int(Collection_ID)}\nr = requests.put(url, data=data, verify=False, headers=hed)\nresponse = r.json()\nprint(response)\n'
                )
              )
            )
          )
        );
      }
      y.isMDXComponent = !0;
    },
    51801: (e, t, a) => {
      a.r(t), a.d(t, { default: () => o });
      var n = a(31085),
        l = (a(14041), a(9546));
      const r = { tabItem: "tabItem_OMyP" };
      function o({ children: e, hidden: t, className: a }) {
        return (0, n.jsx)("div", {
          role: "tabpanel",
          className: (0, l.default)(r.tabItem, a),
          hidden: t,
          children: e,
        });
      }
    },
    99813: (e, t, a) => {
      a.d(t, { A: () => g });
      var n = a(31085),
        l = a(14041),
        r = a(9546),
        o = a(44182),
        i = a(2533),
        p = a(53537);
      const s = { tabList: "tabList_M0Dn", tabItem: "tabItem_ysIP" };
      function u({
        className: e,
        block: t,
        selectedValue: a,
        selectValue: l,
        tabValues: i,
      }) {
        const p = [],
          { blockElementScrollPositionUntilNextRender: u } = (0, o.a_)(),
          d = (e) => {
            const t = e.currentTarget,
              n = p.indexOf(t),
              r = i[n].value;
            r !== a && (u(t), l(r));
          },
          c = (e) => {
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
          className: (0, r.default)("tabs", { "tabs--block": t }, e),
          children: i.map(({ value: e, label: t, attributes: l }) =>
            (0, n.jsx)(
              "li",
              {
                role: "tab",
                tabIndex: a === e ? 0 : -1,
                "aria-selected": a === e,
                ref: (e) => p.push(e),
                onKeyDown: c,
                onClick: d,
                ...l,
                className: (0, r.default)(
                  "tabs__item",
                  s.tabItem,
                  null == l ? void 0 : l.className,
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
        const r = (Array.isArray(t) ? t : [t]).filter(Boolean);
        if (e) {
          const e = r.find((e) => e.props.value === a);
          return e
            ? (0, l.cloneElement)(e, { className: "margin-top--md" })
            : null;
        }
        return (0, n.jsx)("div", {
          className: "margin-top--md",
          children: r.map((e, t) =>
            (0, l.cloneElement)(e, { key: t, hidden: e.props.value !== a })
          ),
        });
      }
      function c(e) {
        const t = (0, i.u)(e);
        return (0, n.jsxs)("div", {
          className: (0, r.default)("tabs-container", s.tabList),
          children: [
            (0, n.jsx)(u, { ...e, ...t }),
            (0, n.jsx)(d, { ...e, ...t }),
          ],
        });
      }
      function g(e) {
        const t = (0, p.default)();
        return (0, n.jsx)(c, { ...e }, String(t));
      }
    },
    2533: (e, t, a) => {
      a.d(t, { u: () => c });
      var n = a(14041),
        l = a(86090),
        r = a(48043),
        o = a(9032),
        i = a(44892);
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
        }, [t, a]);
      }
      function u({ value: e, tabValues: t }) {
        return t.some((t) => t.value === e);
      }
      function d({ queryString: e = !1, groupId: t }) {
        const a = (0, l.W6)(),
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
          (0, n.useCallback)(
            (e) => {
              if (!o) return;
              const t = new URLSearchParams(a.location.search);
              t.set(o, e), a.replace({ ...a.location, search: t.toString() });
            },
            [o, a]
          ),
        ];
      }
      function c(e) {
        const { defaultValue: t, queryString: a = !1, groupId: l } = e,
          r = s(e),
          [o, p] = (0, n.useState)(() =>
            (function ({ defaultValue: e, tabValues: t }) {
              if (0 === t.length)
                throw new Error(
                  "Docusaurus error: the <Tabs> component requires at least one <TabItem> children component"
                );
              if (e) {
                if (!u({ value: e, tabValues: t }))
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
            })({ defaultValue: t, tabValues: r })
          ),
          [c, g] = d({ queryString: a, groupId: l }),
          [y, m] = (function ({ groupId: e }) {
            const t = (function (e) {
                return e ? `docusaurus.tab.${e}` : null;
              })(e),
              [a, l] = (0, i.Dv)(t);
            return [
              a,
              (0, n.useCallback)(
                (e) => {
                  t && l.set(e);
                },
                [t, l]
              ),
            ];
          })({ groupId: l }),
          h = (() => {
            const e = null != c ? c : y;
            return u({ value: e, tabValues: r }) ? e : null;
          })();
        (0, n.useLayoutEffect)(() => {
          h && p(h);
        }, [h]);
        return {
          selectedValue: o,
          selectValue: (0, n.useCallback)(
            (e) => {
              if (!u({ value: e, tabValues: r }))
                throw new Error(`Can't select invalid tab value=${e}`);
              p(e), g(e), m(e);
            },
            [g, m, r]
          ),
          tabValues: r,
        };
      }
    },
  },
]);
