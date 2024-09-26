"use strict";
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [366],
  {
    82247: (e, t, n) => {
      n.d(t, { xA: () => u, yg: () => y });
      var r = n(14041);
      function a(e, t, n) {
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
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
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
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var s = r.createContext({}),
        p = function (e) {
          var t = r.useContext(s),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
        },
        u = function (e) {
          var t = p(e.components);
          return r.createElement(s.Provider, { value: t }, e.children);
        },
        c = "mdxType",
        d = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        g = r.forwardRef(function (e, t) {
          var n = e.components,
            a = e.mdxType,
            l = e.originalType,
            s = e.parentName,
            u = o(e, ["components", "mdxType", "originalType", "parentName"]),
            c = p(n),
            g = a,
            y = c["".concat(s, ".").concat(g)] || c[g] || d[g] || l;
          return n
            ? r.createElement(y, i(i({ ref: t }, u), {}, { components: n }))
            : r.createElement(y, i({ ref: t }, u));
        });
      function y(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ("string" == typeof e || a) {
          var l = n.length,
            i = new Array(l);
          i[0] = g;
          var o = {};
          for (var s in t) hasOwnProperty.call(t, s) && (o[s] = t[s]);
          (o.originalType = e),
            (o[c] = "string" == typeof e ? e : a),
            (i[1] = o);
          for (var p = 2; p < l; p++) i[p] = n[p];
          return r.createElement.apply(null, i);
        }
        return r.createElement.apply(null, n);
      }
      g.displayName = "MDXCreateElement";
    },
    31070: (e, t, n) => {
      n.r(t),
        n.d(t, {
          SetLanguage: () => c,
          assets: () => p,
          contentTitle: () => o,
          default: () => y,
          frontMatter: () => i,
          metadata: () => s,
          toc: () => u,
        });
      n(14041);
      var r = n(82247),
        a = n(99813),
        l = n(51801);
      const i = {
          id: "expedition_workflow_searchrule",
          title: "List security rules containing a specific subnet",
          sidebar_label: "List security rules containing a specific subnet",
          hide_title: !1,
          description: "List security rules containing a specific subnet",
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
            "filter",
          ],
          image: "/expedition/img/expedition.png",
        },
        o = void 0,
        s = {
          unversionedId: "expedition/docs/expedition_workflow_searchrule",
          id: "expedition/docs/expedition_workflow_searchrule",
          title: "List security rules containing a specific subnet",
          description: "List security rules containing a specific subnet",
          source:
            "@site/products/expedition/docs/expedition_workflow_searchrule.md",
          sourceDirName: "expedition/docs",
          slug: "/expedition/docs/expedition_workflow_searchrule",
          permalink: "/expedition/docs/expedition_workflow_searchrule",
          draft: !1,
          editUrl:
            "https://github.com/PaloAltoNetworks/pan.dev/tree/master/products/expedition/docs/expedition_workflow_searchrule.md",
          tags: [],
          version: "current",
          frontMatter: {
            id: "expedition_workflow_searchrule",
            title: "List security rules containing a specific subnet",
            sidebar_label: "List security rules containing a specific subnet",
            hide_title: !1,
            description: "List security rules containing a specific subnet",
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
              "filter",
            ],
            image: "/expedition/img/expedition.png",
          },
          sidebar: "expedition",
          previous: {
            title: "Bulk Change to apply SPG",
            permalink: "/expedition/docs/expedition_workflow_bulkchange",
          },
          next: {
            title: "Contact",
            permalink: "/expedition/docs/expedition_contact",
          },
        },
        p = {},
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
            value:
              "Step 7. Create combined filters for security rules contain specific subnet",
            id: "step-7-create-combined-filters-for-security-rules-contain-specific-subnet",
            level: 3,
          },
          { value: "1st Filter", id: "1st-filter", level: 4 },
          { value: "2nd Filter", id: "2nd-filter", level: 4 },
          { value: "3rd Filter", id: "3rd-filter", level: 4 },
          { value: "4th Filter", id: "4th-filter", level: 4 },
          { value: "5th Filter", id: "5th-filter", level: 4 },
          { value: "6th Filter", id: "6th-filter", level: 4 },
          {
            value: "Step 8. Execute the final filter",
            id: "step-8-execute-the-final-filter",
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
        ];
      function c(e) {
        "undefined" != typeof window &&
          (localStorage.setItem("defaultLanguage", e),
          window.location.reload());
      }
      const d = { toc: u, SetLanguage: c },
        g = "wrapper";
      function y({ components: e, ...t }) {
        return (0, r.yg)(
          g,
          { ...d, ...t, components: e, mdxType: "MDXLayout" },
          (0, r.yg)("br", null),
          (0, r.yg)(
            "p",
            null,
            "In this section we present a workflow example for filtering security rules containing a specific subnet in a PAN-OS configuration."
          ),
          (0, r.yg)(
            "p",
            null,
            "Below flowchart demo the workflow and the related API calls in each of the steps:"
          ),
          (0, r.yg)("mermaid", {
            value:
              'flowchart TB\n    A[Obtain the API Keys<br/> POST https://localhost/api/v1/generate_api_key ] --\x3e B[Add PAN-OS device<br/> POST https://localhost/api/v1/device]\n    B[Add PAN-OS device<br/> POST https://localhost/api/v1/device]  --\x3e C["Create an Expedition Project<br/> POST https://localhost/api/v1/project" ]\n    C["Create an Expedition Project<br/> POST https://localhost/api/v1/project" ] --\x3e D["Upload PAN-OS config into device<br/> POST https://localhost/api/v1/{device_id}/upload_config" ]\n    D["Upload PAN-OS config into device<br/> POST https://localhost/api/v1/{device_id}/upload_config"] --\x3e E["Import the PAN-OS configuration of your device to the project<br/> POST https://localhost/api/v1/project/{project_id}/import/device"]\n    E["Import the PAN-OS configuration of your device to the project<br/> POST https://localhost/api/v1/project/{project_id}/import/device"] --\x3e F["Get source ID of the config file<br/> GET https://localhost/api/v1/project/{project_id}/source"]\n    F["Get source ID of the config file<br/> GET https://localhost/api/v1/project/{project_id}/source"]--\x3e G["Create combined filters for filtering security rules contain specific subnets<br/> POST https://localhost/api/v1/project/{project_id}/tools/filter"]\n    G["Create combined filters for filtering security rules contain specific subnets<br/> POST https://localhost/api/v1/project/{project_id}/tools/filter"] --\x3e H["Execute the filter<br/> POST https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/execute"]\n    H["Execute the filter<br/> POST https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/execute"] --\x3e I["Print the Filter Execution Result<br/> GET https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/success"]\n    I["Print the Filter Execution Result<br/> GET https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/success"] --\x3e J["Print the Collection Content<br/> GET https://localhost/api/v1/project/{project_id}/collection/{collection_id}/content"]\n',
          }),
          (0, r.yg)("br", null),
          (0, r.yg)(
            "h3",
            { id: "step-1-obtain-the-api-keys" },
            "Step 1. Obtain the API Keys"
          ),
          (0, r.yg)(
            "p",
            null,
            "Refer to ",
            (0, r.yg)(
              "a",
              {
                parentName: "p",
                href: "/expedition/docs/creating_credentials",
              },
              "Obtaining the API Keys"
            ),
            " section to obtain a valid API key stored in the ",
            (0, r.yg)("inlineCode", { parentName: "p" }, "hed"),
            " variable."
          ),
          (0, r.yg)(
            "h3",
            { id: "step-2-add-pan-os-device" },
            "Step 2. Add PAN-OS Device"
          ),
          (0, r.yg)(
            "p",
            null,
            "Making a POST call to the Device route, we can create a Device with a desired name.\nNotice that we attach the credentials ",
            (0, r.yg)("inlineCode", { parentName: "p" }, "hed"),
            " in the CURL headers to present our credentials and verify we have permission to create a device."
          ),
          (0, r.yg)("p", null, "API syntax for creating a new device :"),
          (0, r.yg)(
            "table",
            null,
            (0, r.yg)(
              "thead",
              { parentName: "table" },
              (0, r.yg)(
                "tr",
                { parentName: "thead" },
                (0, r.yg)("th", { parentName: "tr", align: null }, "Method"),
                (0, r.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, r.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Request Body Parameters"
                )
              )
            ),
            (0, r.yg)(
              "tbody",
              { parentName: "table" },
              (0, r.yg)(
                "tr",
                { parentName: "tbody" },
                (0, r.yg)("td", { parentName: "tr", align: null }, "POST"),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/device"
                    )
                  )
                ),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    "{",
                    (0, r.yg)("strong", { parentName: "td" }, '"name"'),
                    ": devicename, ",
                    (0, r.yg)("strong", { parentName: "td" }, '"serial"'),
                    ": serialnumber,",
                    (0, r.yg)("strong", { parentName: "td" }, '"hostname"'),
                    ": panosip,",
                    (0, r.yg)("strong", { parentName: "td" }, '"type"'),
                    ": devicetype,",
                    (0, r.yg)("strong", { parentName: "td" }, '"description"'),
                    ": pandescription,",
                    (0, r.yg)("br", null),
                    "}"
                  )
                )
              ),
              (0, r.yg)(
                "tr",
                { parentName: "tbody" },
                (0, r.yg)("td", { parentName: "tr", align: null }, "Example"),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/device"
                    )
                  )
                ),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    "{",
                    (0, r.yg)("strong", { parentName: "td" }, '"name"'),
                    ':"mypanorama", ',
                    (0, r.yg)("strong", { parentName: "td" }, '"serial"'),
                    ':"123456789",',
                    (0, r.yg)("strong", { parentName: "td" }, '"hostname"'),
                    ':"pan1",',
                    (0, r.yg)("strong", { parentName: "td" }, '"type"'),
                    ':"vm-panorama"',
                    (0, r.yg)("strong", { parentName: "td" }, '"description"'),
                    ':"Project for testing"}'
                  )
                )
              )
            )
          ),
          (0, r.yg)(
            "admonition",
            { type: "info" },
            (0, r.yg)(
              "p",
              { parentName: "admonition" },
              (0, r.yg)(
                "strong",
                { parentName: "p" },
                'The supported device "type" are below:'
              )
            ),
            (0, r.yg)(
              "pre",
              { parentName: "admonition" },
              (0, r.yg)(
                "code",
                { parentName: "pre" },
                '        "m100",\n        "m500",\n        "m600",\n        "vm-panorama",\n        "pa200",\n        "pa220",\n        "pa500",\n        "pa800",\n        "pa3000",\n        "pa3200",\n        "pa4000",\n        "pa5000",\n        "pa5200",\n        "pa7000",\n        "vm-series"\n'
              )
            )
          ),
          (0, r.yg)(
            a.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, r.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, r.yg)(
                "pre",
                null,
                (0, r.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("*****Add a new PAN-OS device\\n")\npanosip = \'1.1.1.1\'\nserialnumber = \'123412\'\ndevicetype = "pa220"\npandescription = \'test\'\nurl = "https://localhost/api/v1/device"\ndata = {\n    "name": devicename,\n    "serial": serialnumber,\n    "hostname": panosip,\n    "type": devicetype,\n    "description": pandescription,\n    "port":device_port\n}\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\nsuccess = json.dumps(response["success"])\nif success == "true":\n    print("New device created successfully" + " \\n")\n    DeviceId = json.dumps(response[\'data\'][\'id\'])\n    print("Your Device-ID is " + str(DeviceId) + " \\n")\nelse:\n    print("Unable to create the device")\nprint("*****Upload PAN-OS config into device*****\\n")\n'
                )
              )
            )
          ),
          (0, r.yg)(
            "h3",
            { id: "step-3-create-an-expedition-project" },
            "Step 3. Create an Expedition Project"
          ),
          (0, r.yg)(
            "p",
            null,
            "In the large amount of automation cases, we will require having an Expedition project. Making a POST call to the project route, we can create a project with a desired name."
          ),
          (0, r.yg)("p", null, "API syntax for creating a new project:"),
          (0, r.yg)(
            "table",
            null,
            (0, r.yg)(
              "thead",
              { parentName: "table" },
              (0, r.yg)(
                "tr",
                { parentName: "thead" },
                (0, r.yg)("th", { parentName: "tr", align: null }, "Method"),
                (0, r.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, r.yg)("th", { parentName: "tr", align: null }, "Parameters")
              )
            ),
            (0, r.yg)(
              "tbody",
              { parentName: "table" },
              (0, r.yg)(
                "tr",
                { parentName: "tbody" },
                (0, r.yg)("td", { parentName: "tr", align: null }, "POST"),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project"
                    )
                  )
                ),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)("em", { parentName: "td" }, "in url"),
                    (0, r.yg)("br", null),
                    "{ ",
                    (0, r.yg)("strong", { parentName: "td" }, '"project"'),
                    ':"project1", ',
                    (0, r.yg)("strong", { parentName: "td" }, '"description"'),
                    ':"Project for testing" }'
                  )
                )
              ),
              (0, r.yg)(
                "tr",
                { parentName: "tbody" },
                (0, r.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project"
                    )
                  )
                ),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    '{"project":"MyLittleProject", "description":"A migration project"}'
                  )
                )
              )
            )
          ),
          (0, r.yg)(
            a.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, r.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, r.yg)(
                "pre",
                null,
                (0, r.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("***** Create new project *****\\n")\n\nurl = "https://localhost/api/v1/project"\ndata = {\n    "name": PROJECT_NAME,\n    "description": PROJECT_DESCRIPTION,\n    "device_id[0]": DeviceId,\n}\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\nsuccess = json.dumps(response["success"])\nif success == "true":\n    print("New project created successfully" + " \\n")\n    ProjectId = int(json.dumps(response[\'data\'][\'id\']))\n    print("Your Project-ID is " + str(ProjectId) + " \\n")\nelse:\n    print("Unable to create the project")\n\n'
                )
              )
            )
          ),
          (0, r.yg)(
            "h3",
            { id: "step-4-upload-pan-os-config-into-device" },
            "Step 4. Upload PAN-OS config into device"
          ),
          (0, r.yg)(
            "p",
            null,
            "After device has been created , the next step will be uploading your pan-os config to associate with the device."
          ),
          (0, r.yg)(
            "p",
            null,
            "API syntax for upload PAN-OS config into device :"
          ),
          (0, r.yg)(
            "table",
            null,
            (0, r.yg)(
              "thead",
              { parentName: "table" },
              (0, r.yg)(
                "tr",
                { parentName: "thead" },
                (0, r.yg)("th", { parentName: "tr", align: null }, "Method"),
                (0, r.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, r.yg)(
                  "th",
                  { parentName: "tr", align: null },
                  "Path Parameters"
                )
              )
            ),
            (0, r.yg)(
              "tbody",
              { parentName: "table" },
              (0, r.yg)(
                "tr",
                { parentName: "tbody" },
                (0, r.yg)("td", { parentName: "tr", align: null }, "POST"),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    '"https://localhost/api/v1/device/{device_id}/upload_config"'
                  )
                ),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)("strong", { parentName: "td" }, '"device_id"'),
                    ": device_Id"
                  )
                )
              ),
              (0, r.yg)(
                "tr",
                { parentName: "tbody" },
                (0, r.yg)("td", { parentName: "tr", align: null }, "Example"),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    '"https://localhost/api/v1/device/23/upload_config"'
                  )
                ),
                (0, r.yg)("td", { parentName: "tr", align: null })
              )
            )
          ),
          (0, r.yg)(
            a.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, r.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, r.yg)(
                "pre",
                null,
                (0, r.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("*****Upload PAN-OS config into device*****\\n")\nVendorfile = open(PANOS_CONFIG_PATH, \'rb\')\nfiles = {\'config\': Vendorfile}\nurl= \'https://localhost/api/v1/device/\'+str(DeviceId)+\'/upload_config\'\nr = requests.post(url, files=files, data=data, verify=False, headers=hed)\nresponse = r.json()\nsuccess = json.dumps(response["success"])\nif success == "true":\n    print("Upload configuration successfully" + " \\n")\nelse:\n    print("Unable to upload the configuration")\n    print(response)\n'
                )
              )
            )
          ),
          (0, r.yg)(
            "h3",
            {
              id: "step-5-import-the-pan-os-configuration-of-your-device-to-the-project",
            },
            "Step 5. Import the PAN-OS configuration of your device to the project"
          ),
          (0, r.yg)(
            "p",
            null,
            "This step will associate the device with project. The API response will contain a job ID , you can then use API call to check job status. Please refer to checking job status ",
            (0, r.yg)(
              "a",
              {
                parentName: "p",
                href: "/expedition/docs/managing_jobs#checking-job-status",
              },
              "Checking Job Status"
            ),
            " section ."
          ),
          (0, r.yg)("p", null, "API syntax for the step:"),
          (0, r.yg)(
            "table",
            null,
            (0, r.yg)(
              "thead",
              { parentName: "table" },
              (0, r.yg)(
                "tr",
                { parentName: "thead" },
                (0, r.yg)("th", { parentName: "tr", align: null }, "Method"),
                (0, r.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, r.yg)("th", { parentName: "tr", align: null }, "Parameters")
              )
            ),
            (0, r.yg)(
              "tbody",
              { parentName: "table" },
              (0, r.yg)(
                "tr",
                { parentName: "tbody" },
                (0, r.yg)("td", { parentName: "tr", align: null }, "POST"),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/{project_id}/import/device"
                    )
                  )
                ),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)("em", { parentName: "td" }, "in url"),
                    (0, r.yg)("br", null),
                    " ",
                    (0, r.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id",
                    (0, r.yg)("br", null),
                    "in_body",
                    (0, r.yg)("br", null),
                    " {",
                    (0, r.yg)("strong", { parentName: "td" }, '"device_id"'),
                    ":device_Id }"
                  )
                )
              ),
              (0, r.yg)(
                "tr",
                { parentName: "tbody" },
                (0, r.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/import/device"
                    )
                  )
                ),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)("small", null, '{"device_id":"23""}')
                )
              )
            )
          ),
          (0, r.yg)(
            a.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, r.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, r.yg)(
                "pre",
                null,
                (0, r.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("*****Import the PAN-OS configuration of your device to the project\\n")\nurl = \'https://localhost/api/v1/project/\'+str(ProjectId)+\'/import/device\'\ndata = {\n    "device_id": DeviceId,\n}\nr = requests.post(url, verify=False, headers=hed, data=data)\nresponse = r.json()\nsuccess = json.dumps(response["success"])\nif success == "true":\n    jobId =  json.dumps(response[\'data\'][\'job_id\'])\n    print("Job id: "+jobId)\n    print("***** Wait for job to finish *****")\n    wait_for_job(EXPEDITION_URL+"job/" + jobId + "?complete=true", jobId, hed)\n\nelse:\n    print(response)\n    print("Unable to import configuration ")\n\n'
                )
              )
            )
          ),
          (0, r.yg)(
            "h3",
            { id: "step-6-get-source-id-of-the-config-file" },
            "Step 6. Get Source ID of the config file"
          ),
          (0, r.yg)(
            "p",
            null,
            "In this step, we will make a API call to get ",
            (0, r.yg)("strong", { parentName: "p" }, "source_id"),
            " of the config file that's been imported to the project. After this API call, you will parse the response that contains ",
            (0, r.yg)("strong", { parentName: "p" }, "source_id"),
            ". The ",
            (0, r.yg)("strong", { parentName: "p" }, "source_id"),
            " represent the pan-os config file that you would like to work on, and it will be used in the subsequent API calls."
          ),
          (0, r.yg)("p", null, "API syntax for the step:"),
          (0, r.yg)(
            "table",
            null,
            (0, r.yg)(
              "thead",
              { parentName: "table" },
              (0, r.yg)(
                "tr",
                { parentName: "thead" },
                (0, r.yg)("th", { parentName: "tr", align: null }, "Method"),
                (0, r.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, r.yg)("th", { parentName: "tr", align: null }, "Parameters")
              )
            ),
            (0, r.yg)(
              "tbody",
              { parentName: "table" },
              (0, r.yg)(
                "tr",
                { parentName: "tbody" },
                (0, r.yg)("td", { parentName: "tr", align: null }, "GET"),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/{project_id}/source"
                    )
                  )
                ),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)("em", { parentName: "td" }, "in url"),
                    (0, r.yg)("br", null),
                    " ",
                    (0, r.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id",
                    (0, r.yg)("br", null),
                    "in_body",
                    (0, r.yg)("br", null),
                    " {",
                    (0, r.yg)("strong", { parentName: "td" }, '"device_id"'),
                    ":device_Id} "
                  )
                )
              ),
              (0, r.yg)(
                "tr",
                { parentName: "tbody" },
                (0, r.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/source"
                    )
                  )
                ),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    "{",
                    (0, r.yg)("strong", { parentName: "td" }, '"device_id"'),
                    ": 23}"
                  )
                )
              )
            )
          ),
          (0, r.yg)(
            a.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, r.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, r.yg)(
                "pre",
                null,
                (0, r.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  "print(\"Get Source_ID of the config file\")\nurl = 'https://localhost/api/v1/project/'+str(ProjectId)+'/source'\nr = requests.get(url, verify=False, headers=hed)\nresponse = r.json()\nsuccess = json.dumps(response[\"success\"])\nif success == \"true\":\n    sourceId =  json.dumps(response['data']['source'][0]['id'])\n    print(\"Source id: \"+sourceId)\n\nelse:\n    print(\"Unable to get sources \")\n"
                )
              )
            )
          ),
          (0, r.yg)(
            "h3",
            {
              id: "step-7-create-combined-filters-for-security-rules-contain-specific-subnet",
            },
            "Step 7. Create combined filters for security rules contain specific subnet"
          ),
          (0, r.yg)(
            "p",
            null,
            "In this step, we will create total 6 filters to filter all security rules that contain subnet 10.0. Please refer to the ",
            (0, r.yg)(
              "a",
              {
                parentName: "p",
                href: "/expedition/docs/expedition_workflow_filters",
              },
              "Expedition-API Filters "
            ),
            " section for details on filters."
          ),
          (0, r.yg)(
            "p",
            null,
            "Here are the Filter variables used in creating each of the filter:  "
          ),
          (0, r.yg)(
            "pre",
            null,
            (0, r.yg)(
              "code",
              { parentName: "pre", className: "language-json" },
              "# Filter variables\nFILTER_NAME_1 = 'Addressobject_with_specific_subnet'\nFILTER_DESCRIPTION_1 = 'addressobject_with_subnet_10.1.'\nFILTER_OBJECT_1 = \"[address] ipaddress contains \\\"10.1\\\"\"\nFILTER_NAME_2 = 'Addressgroupobject_with_specific_subnet'\nFILTER_DESCRIPTION_2 = 'addressgroupobject_with_subnet_10.1.'\nFILTER_OBJECT_2 = \"[address_group] member contains filter Addressobject_with_specific_subnet.success \"\nFILTER_NAME_3 = 'combinefilter1and2'\nFILTER_DESCRIPTION_3 = 'address/addressgroupobject_with_subnet_10.1.'\nFILTER_OBJECT_3 = \"filter Addressobject_with_specific_subnet.success or filter Addressgroupobject_with_specific_subnet.success\"\nFILTER_NAME_4 = 'securityrule_with_specific_source_subnet'\nFILTER_DESCRIPTION_4 = 'securityrule_with_src_subnet_10.1'\nFILTER_OBJECT_4 = \"[security_rule] source_address contains filter combinefilter1and2.success \"\nFILTER_NAME_5 = 'securityrule_with_specific_dst_subnet'\nFILTER_DESCRIPTION_5 = 'securityrule_with_dst_subnet_10.1'\nFILTER_OBJECT_5 = \"[security_rule] destination_address contains filter combinefilter1and2.success \"\nFILTER_NAME_6 = 'Combinefilter4_5'\nFILTER_DESCRIPTION_6 = 'securityrule_with_source_or_destination_contain_subnet_10.1'\nFILTER_OBJECT_6 = \"filter securityrule_with_specific_source_subnet.success or filter securityrule_with_specific_dst_subnet.success \"\n"
            )
          ),
          (0, r.yg)("h4", { id: "1st-filter" }, "1st Filter"),
          (0, r.yg)(
            "p",
            null,
            'In this specific example, we are going to create the first filter that filter address objects contain ip address "10.1" in the value. Sending the request body contains below data:'
          ),
          (0, r.yg)(
            "pre",
            null,
            (0, r.yg)(
              "code",
              { parentName: "pre", className: "language-json" },
              'data = {\n    "name":FILTER_NAME_1,\n    "reference":FILTER_NAME_1,\n    "description": FILTER_DESCRIPTION_1,\n    "filter": FILTER_OBJECT_1,\n    "source":sourceId\n    }\n'
            )
          ),
          (0, r.yg)("p", null, "API syntax for the step:"),
          (0, r.yg)(
            "table",
            null,
            (0, r.yg)(
              "thead",
              { parentName: "table" },
              (0, r.yg)(
                "tr",
                { parentName: "thead" },
                (0, r.yg)("th", { parentName: "tr", align: null }, "Method"),
                (0, r.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, r.yg)("th", { parentName: "tr", align: null }, "Parameters")
              )
            ),
            (0, r.yg)(
              "tbody",
              { parentName: "table" },
              (0, r.yg)(
                "tr",
                { parentName: "tbody" },
                (0, r.yg)("td", { parentName: "tr", align: null }, "POST"),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/{project_id}/tools/filter"
                    )
                  )
                ),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)("em", { parentName: "td" }, "in url"),
                    (0, r.yg)("br", null),
                    " ",
                    (0, r.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id",
                    (0, r.yg)("br", null),
                    "in_body",
                    (0, r.yg)("br", null),
                    " {",
                    (0, r.yg)("strong", { parentName: "td" }, '"name"'),
                    ":filter_name,",
                    (0, r.yg)("strong", { parentName: "td" }, '"filter"'),
                    ":filter, ",
                    (0, r.yg)("strong", { parentName: "td" }, '"reference"'),
                    ":filter_reference,",
                    (0, r.yg)("strong", { parentName: "td" }, '"source"'),
                    ":sourceId}"
                  )
                )
              ),
              (0, r.yg)(
                "tr",
                { parentName: "tbody" },
                (0, r.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/tools/filter"
                    )
                  )
                ),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    "{",
                    (0, r.yg)("strong", { parentName: "td" }, '"name"'),
                    ': "all allowed rules", ',
                    (0, r.yg)("strong", { parentName: "td" }, '"filter"'),
                    ' : "',
                    "[address]",
                    ' ipaddress contains \\"10.1\\"",',
                    (0, r.yg)("strong", { parentName: "td" }, '"reference"'),
                    ': "all allowed rules", ',
                    (0, r.yg)("strong", { parentName: "td" }, '"source"'),
                    " :4486} "
                  )
                )
              )
            )
          ),
          (0, r.yg)(
            a.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, r.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, r.yg)(
                "pre",
                null,
                (0, r.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("Create filter to search addresses with specific value \\n")\nurl = f"https://localhost/api/v1/project/{str(projectId)}/tools/filter"\ndata = {\n    "name": FILTER_NAME_1,\n    "reference": FILTER_NAME_1,\n    "description": FILTER_DESCRIPTION_1,\n    "filter": FILTER_OBJECT_1,\n    "source": sourceId\n}\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\nprint(response)\nfilter_id_1 = json.dumps(int(response[\'data\'][\'last_history_entry\'][\'filter_id\']))\nprint(\'Your Filter ID is :\' + filter_id_1)\n'
                )
              )
            )
          ),
          (0, r.yg)("h4", { id: "2nd-filter" }, "2nd Filter"),
          (0, r.yg)(
            "p",
            null,
            "In this specific example, we are going to create the 2nd filter that filter address group objects contain member match first filter result.",
            (0, r.yg)("br", { parentName: "p" }),
            "\n",
            "Sending the request body contains below data:"
          ),
          (0, r.yg)(
            "pre",
            null,
            (0, r.yg)(
              "code",
              { parentName: "pre", className: "language-json" },
              'data = {\n    "name":FILTER_NAME_2,\n    "reference":FILTER_NAME_2,\n    "description": FILTER_DESCRIPTION_2,\n    "filter": FILTER_OBJECT_2,\n    "source":sourceId\n    }\n'
            )
          ),
          (0, r.yg)(
            a.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, r.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, r.yg)(
                "pre",
                null,
                (0, r.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  '# Create filter to filter address-group with member contain first filter\nprint("Create filter to filter address-group with member contain first filter\\n")\nurl = f"https://localhost/api/v1/project/{str(projectId)}/tools/filter"\ndata = {\n    "name": FILTER_NAME_2,\n    "reference": FILTER_NAME_2,\n    "description": FILTER_DESCRIPTION_2,\n    "filter": FILTER_OBJECT_2,\n    "source": sourceId\n}\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\nprint(response)\nfilter_id_2 = json.dumps(int(response[\'data\'][\'last_history_entry\'][\'filter_id\']))\nprint(\'Your Filter ID is :\' + filter_id_2)\n'
                )
              )
            )
          ),
          (0, r.yg)("h4", { id: "3rd-filter" }, "3rd Filter"),
          (0, r.yg)(
            "p",
            null,
            "In this specific example, we are going to create the 3rd filter that combine 1st and 2nd filter we created in the previous steps.\nSending the request body contains below data:"
          ),
          (0, r.yg)(
            "pre",
            null,
            (0, r.yg)(
              "code",
              { parentName: "pre", className: "language-json" },
              'data = {\n\n    "name":FILTER_NAME_3,\n    "reference":FILTER_NAME_3,\n    "description": FILTER_DESCRIPTION_3,\n    "filter": FILTER_OBJECT_3,\n    "source":sourceId\n\n    }\n\n'
            )
          ),
          (0, r.yg)(
            "p",
            null,
            "When we combine two single filters , we will use syntax below:"
          ),
          (0, r.yg)(
            "p",
            null,
            (0, r.yg)(
              "strong",
              { parentName: "p" },
              (0, r.yg)("i", null, "filter")
            ),
            " filter_name1.success ",
            (0, r.yg)("strong", { parentName: "p" }, "or"),
            " ",
            (0, r.yg)(
              "strong",
              { parentName: "p" },
              (0, r.yg)("i", null, "filter")
            ),
            " filter_name2.success  "
          ),
          (0, r.yg)(
            a.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, r.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, r.yg)(
                "pre",
                null,
                (0, r.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  '# combinefilter1&2\nprint("Combine filter1 and filter 2\\n")\nurl = f"https://localhost/api/v1/project/{str(projectId)}/tools/filter"\ndata = {\n    "name": FILTER_NAME_3,\n    "reference": FILTER_NAME_3,\n    "description": FILTER_DESCRIPTION_3,\n    "filter": FILTER_OBJECT_3,\n    "source": sourceId\n}\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\nprint(response)\nfilter_id_3 = json.dumps(int(response[\'data\'][\'last_history_entry\'][\'filter_id\']))\nprint(\'Your Filter ID is :\' + filter_id_3)\n\n'
                )
              )
            )
          ),
          (0, r.yg)("h4", { id: "4th-filter" }, "4th Filter"),
          (0, r.yg)(
            "p",
            null,
            "We are going to create the 4th filter to filter any security rules contain source address match 3rd filter"
          ),
          (0, r.yg)("p", null, "Sending the request body contains below data:"),
          (0, r.yg)(
            "pre",
            null,
            (0, r.yg)(
              "code",
              { parentName: "pre", className: "language-json" },
              'data = {\n\n    "name":FILTER_NAME_4,\n    "reference":FILTER_NAME_4,\n    "description": FILTER_DESCRIPTION_4,\n    "filter": FILTER_OBJECT_4,\n    "source":sourceId\n\n    }\n'
            )
          ),
          (0, r.yg)(
            a.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, r.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, r.yg)(
                "pre",
                null,
                (0, r.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  '# Filter security rules source contains filter 3\nprint("Create filter to filter security rules source match filter 3\\n")\nurl = f"https://localhost/api/v1/project/{str(projectId)}/tools/filter"\ndata = {\n    "name": FILTER_NAME_4,\n    "reference": FILTER_NAME_4,\n    "description": FILTER_DESCRIPTION_4,\n    "filter": FILTER_OBJECT_4,\n    "source": sourceId\n}\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\nprint(response)\nfilter_id_4 = json.dumps(int(response[\'data\'][\'last_history_entry\'][\'filter_id\']))\nprint(\'Your Filter ID is :\' + filter_id_4)\n\n'
                )
              )
            )
          ),
          (0, r.yg)("h4", { id: "5th-filter" }, "5th Filter"),
          (0, r.yg)(
            "p",
            null,
            "We are going to create the 5th filter to filter any security rules contain destination address match 3rd filter\nSending the request body contains below data:"
          ),
          (0, r.yg)(
            "pre",
            null,
            (0, r.yg)(
              "code",
              { parentName: "pre", className: "language-json" },
              'data = {\n\n    "name": FILTER_NAME_5,\n    "reference": FILTER_NAME_5,\n    "description": FILTER_DESCRIPTION_5,\n    "filter": FILTER_OBJECT_5,\n    "source": sourceId\n\n    }\n'
            )
          ),
          (0, r.yg)(
            a.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, r.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, r.yg)(
                "pre",
                null,
                (0, r.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  '# Filter security rules destination contains filter 3\nprint("Create filter to filter security rules destination match filter 3\\n")\nurl = f"https://localhost/api/v1/project/{str(projectId)}/tools/filter"\ndata = {\n    "name": FILTER_NAME_5,\n    "reference": FILTER_NAME_5,\n    "description": FILTER_DESCRIPTION_5,\n    "filter": FILTER_OBJECT_5,\n    "source": sourceId\n}\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\nprint(response)\nfilter_id_5 = json.dumps(int(response[\'data\'][\'last_history_entry\'][\'filter_id\']))\nprint(\'Your Filter ID is :\' + filter_id_5)\n\n'
                )
              )
            )
          ),
          (0, r.yg)("h4", { id: "6th-filter" }, "6th Filter"),
          (0, r.yg)(
            "p",
            null,
            "We are going to create our final filter to combine filter 4 & 5, which will filter all security rules contain either source address or destination address that contain 10.1.\nSending the request body contains below data:"
          ),
          (0, r.yg)(
            "pre",
            null,
            (0, r.yg)(
              "code",
              { parentName: "pre", className: "language-json" },
              'data = {  \n\n    "name": FILTER_NAME_6,\n    "reference": FILTER_NAME_6,\n    "description": FILTER_DESCRIPTION_6,\n    "filter": FILTER_OBJECT_6,\n    "source": sourceId\n\n    }\n'
            )
          ),
          (0, r.yg)(
            a.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, r.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, r.yg)(
                "pre",
                null,
                (0, r.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  '# Combine filter4 with filter5\nprint("Combine filter4 and filter 5\\n")\nurl = f"https://localhost/api/v1/project/{str(projectId)}/tools/filter"\ndata = {\n    "name": FILTER_NAME_6,\n    "reference": FILTER_NAME_6,\n    "description": FILTER_DESCRIPTION_6,\n    "filter": FILTER_OBJECT_6,\n    "source": sourceId\n}\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\nprint(response)\nfilter_id_6 = json.dumps(int(response[\'data\'][\'last_history_entry\'][\'filter_id\']))\nprint(\'Your Filter ID is :\' + filter_id_6)\n\n'
                )
              )
            )
          ),
          (0, r.yg)(
            "h3",
            { id: "step-8-execute-the-final-filter" },
            "Step 8. Execute the final filter"
          ),
          (0, r.yg)(
            "p",
            null,
            'After create the final filter, we will execute the filter based on filter_Id ,in our example , filter_Id will be "6" in the request body, you will need to provide "source_id" obtained from the previous step as required parameter.'
          ),
          (0, r.yg)("p", null, "API syntax for the step:"),
          (0, r.yg)(
            "table",
            null,
            (0, r.yg)(
              "thead",
              { parentName: "table" },
              (0, r.yg)(
                "tr",
                { parentName: "thead" },
                (0, r.yg)("th", { parentName: "tr", align: null }, "Method"),
                (0, r.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, r.yg)("th", { parentName: "tr", align: null }, "Parameters")
              )
            ),
            (0, r.yg)(
              "tbody",
              { parentName: "table" },
              (0, r.yg)(
                "tr",
                { parentName: "tbody" },
                (0, r.yg)("td", { parentName: "tr", align: null }, "POST"),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/execute"
                    )
                  )
                ),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)("em", { parentName: "td" }, "in url"),
                    (0, r.yg)("br", null),
                    " ",
                    (0, r.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id, ",
                    (0, r.yg)("strong", { parentName: "td" }, '"filter_id"'),
                    ":filter_Id",
                    (0, r.yg)("br", null),
                    "in_body",
                    (0, r.yg)("br", null),
                    " {",
                    (0, r.yg)("strong", { parentName: "td" }, '"source_id"'),
                    ": source_id of the PAN-OS config file} "
                  )
                )
              ),
              (0, r.yg)(
                "tr",
                { parentName: "tbody" },
                (0, r.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/tools/filter/6/execute"
                    )
                  )
                ),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    "{",
                    (0, r.yg)("strong", { parentName: "td" }, '"source_id"'),
                    ': "23564"} '
                  )
                )
              )
            )
          ),
          (0, r.yg)(
            a.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, r.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, r.yg)(
                "pre",
                null,
                (0, r.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("***** Execute filter 6 ")\nurl = f"https://localhost/api/v1/project/{str(projectId)}/tools/filter/{str(filter_id_6)}/execute"\ndata = {"source_id": sourceId}\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\njobId = json.dumps(response["data"]["job_id"])\nsuccess = json.dumps(response["success"])\nif success == "true":\n    jobId = json.dumps(response[\'data\'][\'job_id\'])\n    print("Job id: " + jobId)\n    print("***** Wait for job to finish *****")\n    wait_for_job(EXPEDITION_URL+"job/" + jobId + "?complete=true", jobId, hed)\nelse:\n    print(response)\n    print("Unable to execute filter ")\n    raise RuntimeError("Unable to execute filter ")\n'
                )
              )
            )
          ),
          (0, r.yg)(
            "h3",
            { id: "step-9-print-the-filter-execution-result" },
            "Step 9. Print the filter execution result"
          ),
          (0, r.yg)(
            "p",
            null,
            "After the filter is executed , we can view the result using below API call. The result should contain all the objects that matches with the filter. From the response, you will parse the ",
            (0, r.yg)("strong", { parentName: "p" }, "collection_Id"),
            " to be used in the subsequent API call."
          ),
          (0, r.yg)("p", null, "API syntax for the step:"),
          (0, r.yg)(
            "table",
            null,
            (0, r.yg)(
              "thead",
              { parentName: "table" },
              (0, r.yg)(
                "tr",
                { parentName: "thead" },
                (0, r.yg)("th", { parentName: "tr", align: null }, "Method"),
                (0, r.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, r.yg)("th", { parentName: "tr", align: null }, "Parameters")
              )
            ),
            (0, r.yg)(
              "tbody",
              { parentName: "table" },
              (0, r.yg)(
                "tr",
                { parentName: "tbody" },
                (0, r.yg)("td", { parentName: "tr", align: null }, "GET"),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/success"
                    )
                  )
                ),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)("em", { parentName: "td" }, "in url"),
                    (0, r.yg)("br", null),
                    " ",
                    (0, r.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id, ",
                    (0, r.yg)("strong", { parentName: "td" }, '"filter_id"'),
                    ":filter_Id"
                  )
                )
              ),
              (0, r.yg)(
                "tr",
                { parentName: "tbody" },
                (0, r.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/tools/filter/6/success"
                    )
                  )
                ),
                (0, r.yg)("td", { parentName: "tr", align: null })
              )
            )
          ),
          (0, r.yg)(
            a.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, r.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, r.yg)(
                "pre",
                null,
                (0, r.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  '# Get filter result\nprint("Print the Filter Execution Result")\nurl = f"https://localhost/api/v1/project/{str(projectId)}/tools/filter/{str(filter_id_6)}/success"\nr = requests.get(url, verify=False, headers=hed)\nresponse = r.json()\nprint(response)\nCollection_ID = json.dumps(response["data"]["id"])\nprint(\'Your Collection ID is :\' + Collection_ID)\n'
                )
              )
            )
          ),
          (0, r.yg)(
            "h3",
            { id: "step-10-print-the-collection-content" },
            "Step 10. Print the Collection Content"
          ),
          (0, r.yg)(
            "p",
            null,
            "After the filter is executed , we can print the collection content using below API call."
          ),
          (0, r.yg)("p", null, "API syntax for the step:"),
          (0, r.yg)(
            "table",
            null,
            (0, r.yg)(
              "thead",
              { parentName: "table" },
              (0, r.yg)(
                "tr",
                { parentName: "thead" },
                (0, r.yg)("th", { parentName: "tr", align: null }, "Method"),
                (0, r.yg)("th", { parentName: "tr", align: null }, "Route"),
                (0, r.yg)("th", { parentName: "tr", align: null }, "Parameters")
              )
            ),
            (0, r.yg)(
              "tbody",
              { parentName: "table" },
              (0, r.yg)(
                "tr",
                { parentName: "tbody" },
                (0, r.yg)("td", { parentName: "tr", align: null }, "GET"),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/{project_id}/collection/{Collection_Id}/content"
                    )
                  )
                ),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)("em", { parentName: "td" }, "in url"),
                    (0, r.yg)("br", null),
                    " ",
                    (0, r.yg)("strong", { parentName: "td" }, '"project_id"'),
                    ":project_Id, ",
                    (0, r.yg)(
                      "strong",
                      { parentName: "td" },
                      '"collection_id"'
                    ),
                    ":collection_Id"
                  )
                )
              ),
              (0, r.yg)(
                "tr",
                { parentName: "tbody" },
                (0, r.yg)("td", { parentName: "tr", align: null }, "example"),
                (0, r.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, r.yg)(
                    "small",
                    null,
                    (0, r.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://localhost/api/v1/project/22/collection/20793/content"
                    )
                  )
                ),
                (0, r.yg)("td", { parentName: "tr", align: null })
              )
            )
          ),
          (0, r.yg)(
            a.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
              mdxType: "Tabs",
            },
            (0, r.yg)(
              l.default,
              { value: "python", mdxType: "TabItem" },
              (0, r.yg)(
                "pre",
                null,
                (0, r.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  '# Print the Collection Content\nprint("***** Print the Collection that contain rules with specific subnets *****")\nurl = f"https://{EXPEDITION_IP}/api/v1/project/{str(projectId)}/collection/{Collection_ID}/content"\nr = requests.get(url, verify=False, headers=hed)\nresponse = r.json()\nprint(response)\n'
                )
              )
            )
          ),
          (0, r.yg)(
            "p",
            null,
            "The response will be similar to below which listed all security rules with source or destination address containing 10.1 ."
          ),
          (0, r.yg)(
            "pre",
            null,
            (0, r.yg)(
              "code",
              { parentName: "pre", className: "language-json" },
              "***** Print the Collection that contain rules with specific subnets *****\n{'data': {'id': 4982, 'editable': False, 'filter_id': 16, 'type': 'filter', 'content': [{'object_id': 4926, 'name': 'Testrule1', 'object_type': 'security_rule', 'vsys_name': 'vsys1', 'vsys': 4802, 'source_name': 'pa220running-config', 'source': 4800}, {'object_id': 4927, 'name': 'Testrule2', 'object_type': 'security_rule', 'vsys_name': 'vsys1', 'vsys': 4802, 'source_name': 'pa220running-config', 'source': 4800}, {'object_id': 4928, 'name': 'Testrule2-1', 'object_type': 'security_rule', 'vsys_name': 'vsys1', 'vsys': 4802, 'source_name': 'pa220running-config', 'source': 4800}], 'name': 'success', 'description': 'Collection to store success objects from task Combinefilter4_5'}, 'messages': [], 'success': True}\n"
            )
          )
        );
      }
      y.isMDXComponent = !0;
    },
    51801: (e, t, n) => {
      n.r(t), n.d(t, { default: () => i });
      var r = n(31085),
        a = (n(14041), n(9546));
      const l = { tabItem: "tabItem_OMyP" };
      function i({ children: e, hidden: t, className: n }) {
        return (0, r.jsx)("div", {
          role: "tabpanel",
          className: (0, a.default)(l.tabItem, n),
          hidden: t,
          children: e,
        });
      }
    },
    99813: (e, t, n) => {
      n.d(t, { A: () => g });
      var r = n(31085),
        a = n(14041),
        l = n(9546),
        i = n(44182),
        o = n(2533),
        s = n(53537);
      const p = { tabList: "tabList_M0Dn", tabItem: "tabItem_ysIP" };
      function u({
        className: e,
        block: t,
        selectedValue: n,
        selectValue: a,
        tabValues: o,
      }) {
        const s = [],
          { blockElementScrollPositionUntilNextRender: u } = (0, i.a_)(),
          c = (e) => {
            const t = e.currentTarget,
              r = s.indexOf(t),
              l = o[r].value;
            l !== n && (u(t), a(l));
          },
          d = (e) => {
            let t = null;
            switch (e.key) {
              case "Enter":
                c(e);
                break;
              case "ArrowRight": {
                const r = s.indexOf(e.currentTarget) + 1;
                var n;
                t = null !== (n = s[r]) && void 0 !== n ? n : s[0];
                break;
              }
              case "ArrowLeft": {
                const n = s.indexOf(e.currentTarget) - 1;
                var r;
                t = null !== (r = s[n]) && void 0 !== r ? r : s[s.length - 1];
                break;
              }
            }
            null == t || t.focus();
          };
        return (0, r.jsx)("ul", {
          role: "tablist",
          "aria-orientation": "horizontal",
          className: (0, l.default)("tabs", { "tabs--block": t }, e),
          children: o.map(({ value: e, label: t, attributes: a }) =>
            (0, r.jsx)(
              "li",
              {
                role: "tab",
                tabIndex: n === e ? 0 : -1,
                "aria-selected": n === e,
                ref: (e) => s.push(e),
                onKeyDown: d,
                onClick: c,
                ...a,
                className: (0, l.default)(
                  "tabs__item",
                  p.tabItem,
                  null == a ? void 0 : a.className,
                  { "tabs__item--active": n === e }
                ),
                children: null != t ? t : e,
              },
              e
            )
          ),
        });
      }
      function c({ lazy: e, children: t, selectedValue: n }) {
        const l = (Array.isArray(t) ? t : [t]).filter(Boolean);
        if (e) {
          const e = l.find((e) => e.props.value === n);
          return e
            ? (0, a.cloneElement)(e, { className: "margin-top--md" })
            : null;
        }
        return (0, r.jsx)("div", {
          className: "margin-top--md",
          children: l.map((e, t) =>
            (0, a.cloneElement)(e, { key: t, hidden: e.props.value !== n })
          ),
        });
      }
      function d(e) {
        const t = (0, o.u)(e);
        return (0, r.jsxs)("div", {
          className: (0, l.default)("tabs-container", p.tabList),
          children: [
            (0, r.jsx)(u, { ...e, ...t }),
            (0, r.jsx)(c, { ...e, ...t }),
          ],
        });
      }
      function g(e) {
        const t = (0, s.default)();
        return (0, r.jsx)(d, { ...e }, String(t));
      }
    },
    2533: (e, t, n) => {
      n.d(t, { u: () => d });
      var r = n(14041),
        a = n(86090),
        l = n(48043),
        i = n(9032),
        o = n(44892);
      function s(e) {
        return (function (e) {
          var t, n;
          return null !==
            (n =
              null ===
                (t = r.Children.map(e, (e) => {
                  if (
                    !e ||
                    ((0, r.isValidElement)(e) &&
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
          ({ props: { value: e, label: t, attributes: n, default: r } }) => ({
            value: e,
            label: t,
            attributes: n,
            default: r,
          })
        );
      }
      function p(e) {
        const { values: t, children: n } = e;
        return (0, r.useMemo)(() => {
          const e = null != t ? t : s(n);
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
      function u({ value: e, tabValues: t }) {
        return t.some((t) => t.value === e);
      }
      function c({ queryString: e = !1, groupId: t }) {
        const n = (0, a.W6)(),
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
          (0, r.useCallback)(
            (e) => {
              if (!i) return;
              const t = new URLSearchParams(n.location.search);
              t.set(i, e), n.replace({ ...n.location, search: t.toString() });
            },
            [i, n]
          ),
        ];
      }
      function d(e) {
        const { defaultValue: t, queryString: n = !1, groupId: a } = e,
          l = p(e),
          [i, s] = (0, r.useState)(() =>
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
              var n;
              const r =
                null !== (n = t.find((e) => e.default)) && void 0 !== n
                  ? n
                  : t[0];
              if (!r) throw new Error("Unexpected error: 0 tabValues");
              return r.value;
            })({ defaultValue: t, tabValues: l })
          ),
          [d, g] = c({ queryString: n, groupId: a }),
          [y, m] = (function ({ groupId: e }) {
            const t = (function (e) {
                return e ? `docusaurus.tab.${e}` : null;
              })(e),
              [n, a] = (0, o.Dv)(t);
            return [
              n,
              (0, r.useCallback)(
                (e) => {
                  t && a.set(e);
                },
                [t, a]
              ),
            ];
          })({ groupId: a }),
          h = (() => {
            const e = null != d ? d : y;
            return u({ value: e, tabValues: l }) ? e : null;
          })();
        (0, r.useLayoutEffect)(() => {
          h && s(h);
        }, [h]);
        return {
          selectedValue: i,
          selectValue: (0, r.useCallback)(
            (e) => {
              if (!u({ value: e, tabValues: l }))
                throw new Error(`Can't select invalid tab value=${e}`);
              s(e), g(e), m(e);
            },
            [g, m, l]
          ),
          tabValues: l,
        };
      }
    },
  },
]);
