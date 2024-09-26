"use strict";
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [494],
  {
    82247: (e, t, n) => {
      n.d(t, { xA: () => g, yg: () => m });
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
      function o(e, t) {
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
            ? o(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              o = Object.keys(e);
            for (a = 0; a < o.length; a++)
              (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (a = 0; a < o.length; a++)
            (n = o[a]),
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
        c = a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            o = e.originalType,
            p = e.parentName,
            g = l(e, ["components", "mdxType", "originalType", "parentName"]),
            d = s(n),
            c = r,
            m = d["".concat(p, ".").concat(c)] || d[c] || u[c] || o;
          return n
            ? a.createElement(m, i(i({ ref: t }, g), {}, { components: n }))
            : a.createElement(m, i({ ref: t }, g));
        });
      function m(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ("string" == typeof e || r) {
          var o = n.length,
            i = new Array(o);
          i[0] = c;
          var l = {};
          for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
          (l.originalType = e),
            (l[d] = "string" == typeof e ? e : r),
            (i[1] = l);
          for (var s = 2; s < o; s++) i[s] = n[s];
          return a.createElement.apply(null, i);
        }
        return a.createElement.apply(null, n);
      }
      c.displayName = "MDXCreateElement";
    },
    22994: (e, t, n) => {
      n.r(t),
        n.d(t, {
          SetLanguage: () => d,
          assets: () => s,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => i,
          metadata: () => p,
          toc: () => g,
        });
      n(14041);
      var a = n(82247),
        r = n(99813),
        o = n(51801);
      const i = {
          id: "expedition_workflow_migration",
          title: "Migration Workflow",
          sidebar_label: "3rd party vendor configuration Migration",
          hide_title: !1,
          description: "Migration Workflow",
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
          ],
          image: "/expedition/img/expedition.png",
        },
        l = void 0,
        p = {
          unversionedId: "expedition/docs/expedition_workflow_migration",
          id: "expedition/docs/expedition_workflow_migration",
          title: "Migration Workflow",
          description: "Migration Workflow",
          source:
            "@site/products/expedition/docs/expedition_workflow_migration.md",
          sourceDirName: "expedition/docs",
          slug: "/expedition/docs/expedition_workflow_migration",
          permalink: "/expedition/docs/expedition_workflow_migration",
          draft: !1,
          editUrl:
            "https://github.com/PaloAltoNetworks/pan.dev/tree/master/products/expedition/docs/expedition_workflow_migration.md",
          tags: [],
          version: "current",
          frontMatter: {
            id: "expedition_workflow_migration",
            title: "Migration Workflow",
            sidebar_label: "3rd party vendor configuration Migration",
            hide_title: !1,
            description: "Migration Workflow",
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
            ],
            image: "/expedition/img/expedition.png",
          },
          sidebar: "expedition",
          previous: {
            title: "Expedition-API Filters",
            permalink: "/expedition/docs/expedition_workflow_filters",
          },
          next: {
            title: "Remove Unused Objects",
            permalink: "/expedition/docs/expedition_workflow_removeunused",
          },
        },
        s = {},
        g = [
          {
            value: "Step 1. Obtain the API Keys",
            id: "step-1-obtain-the-api-keys",
            level: 3,
          },
          {
            value: "Step 2. Create an Expedition project",
            id: "step-2-create-an-expedition-project",
            level: 3,
          },
          {
            value: "Step 3. Create a new migration in the project",
            id: "step-3-create-a-new-migration-in-the-project",
            level: 3,
          },
          {
            value:
              "Step 4. Upload the 3rd party vendor (source) configuration to migration",
            id: "step-4-upload-the-3rd-party-vendor-source-configuration-to-migration",
            level: 3,
          },
          {
            value:
              "Step 5. Discovery the configuration if there are multiple policies in the vendor configuration (Optional)",
            id: "step-5-discovery-the-configuration-if-there-are-multiple-policies-in-the-vendor-configuration-optional",
            level: 3,
          },
          {
            value: "Step 6. Config mapping to map policy and route(optional)",
            id: "step-6-config-mapping-to-map-policy-and-routeoptional",
            level: 3,
          },
          {
            value:
              "Step 7. Convert the 3rd party configuration to a PAN-OS configuration",
            id: "step-7-convert-the-3rd-party-configuration-to-a-pan-os-configuration",
            level: 3,
          },
          {
            value: "Step 8. Import the Converted Configuration into project",
            id: "step-8-import-the-converted-configuration-into-project",
            level: 3,
          },
        ];
      function d(e) {
        "undefined" != typeof window &&
          (localStorage.setItem("defaultLanguage", e),
          window.location.reload());
      }
      const u = { toc: g, SetLanguage: d },
        c = "wrapper";
      function m({ components: e, ...t }) {
        return (0, a.yg)(
          c,
          { ...u, ...t, components: e, mdxType: "MDXLayout" },
          (0, a.yg)(
            "p",
            null,
            "In this section we present a workflow example to migrate a third party vendor configuration into a PAN-OS configuration. In the Expedition API script container, the sample migration jupyter notebooks are stored in /migration folder."
          ),
          (0, a.yg)(
            "p",
            null,
            "Below flowchart demo the workflow and the related API calls in each of the steps:"
          ),
          (0, a.yg)("mermaid", {
            value:
              'flowchart TB\n    A[Obtain the API Keys<br/> POST https://localhost/api/v1/generate_api_key ] --\x3e B[Create an Expedition Project<br/> POST https://localhost/api/v1/project]\n    B[Create an Expedition Project<br/> POST https://localhost/api/v1/project] --\x3e C["Create a new migration in the project<br/>  POST https://localhost/api/v1/project/{project_id}/migration"]\n    C["Create a new migration in the project<br/>  POST https://localhost/api/v1/project/{project_id}/migration"] --\x3e D["Upload the 3rd party vendor config to migration<br/>  POST https://localhost/api/v1/project/{project_id}/migration/{migration_id}/upload/{vendorname}"]\n    D["Upload the 3rd party vendor config to migration<br/>  POST https://localhost/api/v1/project/{project_id}/migration/{migration_id}/upload/{vendorname}"] --\x3e E["Discover the config when there are multiple policies in the vendor config(optional)<br/>POST https://localhost/api/v1/project/{project_id}/migration/{migration_id}/source/{resource_Id}/discover"]\n    E["Discover the config when there are multiple policies in the vendor config(optional)<br/>POST https://localhost/api/v1/project/{project_id}/migration/{migration_id}/source/{resource_Id}/discover"]--\x3e F["Config Mapping to map policy and route<br/>POST https://localhost/api/v1/project/{project_id}/migration/{migration_id}/resource/{resource_id}/map"]\n    F["Config Mapping to map policy and route<br/>POST https://localhost/api/v1/project/{project_id}/migration/{migration_id}/resource/{resource_id}/map"]--\x3e G["Convert the 3rd party vendor config to a PAN-OS config<br/>POST https://localhost/api/v1/project/{project_id}/migration/{migration_id}/convert"]\n    G["Convert the 3rd party vendor config to a PAN-OS config<br/>POST https://localhost/api/v1/project/{project_id}/migration/{migration_id}/convert"] --\x3e H["Import the Converted Configuration into project<br/>POST https://localhost/api/v1/project/{project_id}/import/device"]\n',
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
            " variable.  "
          ),
          (0, a.yg)(
            "h3",
            { id: "step-2-create-an-expedition-project" },
            "Step 2. Create an Expedition project"
          ),
          (0, a.yg)(
            "p",
            null,
            "In the large amount of automation cases, we will require having an Expedition project. Making a POST call to the project route, we can create a project with a desired name.\nBy default, the creator of a project is as well one of the project administrators.\nNotice that this time we attach the credentials ",
            (0, a.yg)("inlineCode", { parentName: "p" }, "hed"),
            " in the CURL headers to present our credentials and verify we have permission to create a project."
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
                    ":Name of the project, ",
                    (0, a.yg)("strong", { parentName: "td" }, '"description"'),
                    ":Description of the project }"
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
            r.A,
            {
              defaultValue: null,
              values: [
                { label: "Python", value: "python" },
                { label: "Php", value: "php" },
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
                  'print("*****Create a new Expedition Project*****\\n")\nprojectName = "vendormigration"\nprint(" \\n")\ndata = {"name": projectName}\nr = requests.post(\n    "https://" + ip + "/api/v1/project", data=data, verify=False, headers=hed\n)\nresponse = r.json()\nsuccess = json.dumps(response["success"])\nif success == "true":\n    print("New project created successfully" + " \\n")\n    projectId = json.dumps(response[\'data\'][\'id\'])\n    print("Your project-ID is", str(projectId) + " \\n")\nprint("\\n")\n'
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
                  "\necho \"\\n\";\necho \"CREATE NEW PROJECT\\n\";\n$data = [\"project\"=> $projectName];\n$url = 'https://'.$ip.'/api/v1/project';\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);\ncurl_setopt($curl, CURLOPT_HTTPHEADER,$hed);\ncurl_setopt($curl,CURLOPT_POST, TRUE);\ncurl_setopt($curl,CURLOPT_POSTFIELDS, $data);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);\n$response = curl_exec($curl);\n$jsonResponse = json_decode($response);\n$success = $jsonResponse->Contents->success;\nif ($success=='true'){\n    print_r($response);\n    $projectId = $jsonResponse->Contents->response->data->content->id;\n    print_r($jsonResponse->Contents->response->{'response-messages'}->messages[0]->message);\n}\necho \"\\n\";\n"
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            { id: "step-3-create-a-new-migration-in-the-project" },
            "Step 3. Create a new migration in the project"
          ),
          (0, a.yg)(
            "p",
            null,
            "This step will create a new migration in the project. In the request body parameters, you will need to specify ",
            (0, a.yg)("strong", { parentName: "p" }, "projectID"),
            " from previous step , and the PAN-OS device type you want to merge the source file with. There are two options:"
          ),
          (0, a.yg)(
            "p",
            null,
            (0, a.yg)("strong", { parentName: "p" }, "1. panorama"),
            (0, a.yg)("br", { parentName: "p" }),
            "\n",
            (0, a.yg)("strong", { parentName: "p" }, "2. firewall")
          ),
          (0, a.yg)(
            "p",
            null,
            "The API response will contain ",
            (0, a.yg)("strong", { parentName: "p" }, "migration_id"),
            " and ",
            (0, a.yg)("strong", { parentName: "p" }, "device_id"),
            ". Those IDs will be used in the subsequent API calls throughout the workflow."
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
                      "https://localhost/api/v1/project/{project_id}/migration"
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
                    ':"ProjectId"',
                    (0, a.yg)("br", null),
                    "in_body",
                    (0, a.yg)("br", null),
                    " {",
                    (0, a.yg)("strong", { parentName: "td" }, '"device_type"'),
                    ':"panorama or firewall" }'
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
                      "https://localhost/api/v1/project/22/migration"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)("small", null, '{"device_type":"panorama"}')
                )
              )
            )
          ),
          (0, a.yg)(
            r.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
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
                  'print("*****Create a new migration in the project*****\\n")\nurl = "https://localhost/api/v1/project/{0}/migration".format(int(projectId))\nprint(url)\ndata = {"name": "my first migration","device_type": "panorama"}\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\nmigrationId = json.dumps(response["data"]["id"])\ndeviceId = json.dumps(response["data"]["device_id"][0])\n'
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            {
              id: "step-4-upload-the-3rd-party-vendor-source-configuration-to-migration",
            },
            "Step 4. Upload the 3rd party vendor (source) configuration to migration"
          ),
          (0, a.yg)(
            "p",
            null,
            'The migration process would require to upload one of more configuration files to be migrated.\nA minimum one would be the original vendor configuration file. In below example, we use a sample config called "ciscoasa.txt" stored in the user\'s local drive path "/Users/username/Downloads/ciscoasa.txt"'
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
                      "https://localhost/api/v1/project/{project_id}/migration/{migration_id}/upload/{vendorname}"
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
                    ':"projectId"',
                    (0, a.yg)("br", null),
                    " ",
                    (0, a.yg)("strong", { parentName: "td" }, '"migration_id"'),
                    ':"migrationId"',
                    (0, a.yg)("br", null),
                    " ",
                    (0, a.yg)("strong", { parentName: "td" }, '"vendorname"'),
                    ':"vendorname"',
                    (0, a.yg)("br", null),
                    "in_body",
                    (0, a.yg)("br", null),
                    " {",
                    (0, a.yg)("strong", { parentName: "td" }, '"name"'),
                    ':"configname",',
                    (0, a.yg)("strong", { parentName: "td" }, '"config"'),
                    ':"configfile" }'
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
                      "https://localhost/api/v1/project/22/migration/25/cisco_asa"
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
                    ':"cisco",',
                    (0, a.yg)("strong", { parentName: "td" }, '"config"'),
                    ":cisco_config}"
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
              "Available vendorname parameter can be used in the path are below:"
            ),
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              (0, a.yg)("strong", { parentName: "p" }, "cisco_asa"),
              (0, a.yg)("br", { parentName: "p" }),
              "\n",
              (0, a.yg)("strong", { parentName: "p" }, "checkpoint"),
              " (For checkpoint config < v. R80)",
              (0, a.yg)("br", { parentName: "p" }),
              "\n",
              (0, a.yg)("strong", { parentName: "p" }, "checkpoint_r80"),
              " (For checkpoint config >= v. R80)",
              (0, a.yg)("br", { parentName: "p" }),
              "\n",
              (0, a.yg)("strong", { parentName: "p" }, "fortinet"),
              (0, a.yg)("br", { parentName: "p" }),
              "\n",
              (0, a.yg)("strong", { parentName: "p" }, "srx"),
              (0, a.yg)("br", { parentName: "p" }),
              "\n",
              (0, a.yg)("strong", { parentName: "p" }, "netscreen"),
              (0, a.yg)("br", { parentName: "p" }),
              "\n",
              (0, a.yg)("strong", { parentName: "p" }, "stonesoft"),
              (0, a.yg)("br", { parentName: "p" }),
              "\n",
              (0, a.yg)("strong", { parentName: "p" }, "sonicwall"),
              " (Require Panser container )"
            )
          ),
          (0, a.yg)(
            r.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
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
                  '\nprint("*****Upload CISCO config to migration*****\\n")\nurl = "https://localhost/api/v1/project/"+projectId+"/migration/"+migrationId+"/upload/cisco_asa"\nprint(url)\nfile = \'/Users/username/Downloads/ciscoasa.txt\'\ncisco_config = open(file, "rb")\nfiles = {"config": cisco_config}\ndata = {"name": "cisco"}\nr = requests.post(url, data=data, verify=False, files=files, headers=hed)\nresponse = r.json()\n'
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            {
              id: "step-5-discovery-the-configuration-if-there-are-multiple-policies-in-the-vendor-configuration-optional",
            },
            "Step 5. Discovery the configuration if there are multiple policies in the vendor configuration (Optional)"
          ),
          (0, a.yg)(
            "p",
            null,
            "This step is optional for some vendor configuration required discovery and mapping , for example: checkpoint R77, stonesoft configuration.  The successfully response will contain a ",
            (0, a.yg)("strong", { parentName: "p" }, "job_id"),
            " for you to track the status , please refer to the checking job status ",
            (0, a.yg)(
              "a",
              {
                parentName: "p",
                href: "/expedition/docs/managing_jobs#checking-job-status",
              },
              "Checking Job Status"
            ),
            " section"
          ),
          (0, a.yg)(
            "p",
            null,
            "API syntax for discovery 3rd party vendors' configurations:"
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
                (0, a.yg)("th", { parentName: "tr", align: null }, "URL"),
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
                      "https://localhost/api/v1/project/{project_id}/migration/{migration_Id}/resource/{resource_Id}/discover"
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
                    ":projectId",
                    (0, a.yg)("br", null),
                    " ",
                    (0, a.yg)("strong", { parentName: "td" }, '"migration_id"'),
                    ":migrationId",
                    (0, a.yg)("br", null),
                    (0, a.yg)("strong", { parentName: "td" }, '"resource_id"'),
                    ":resourceId",
                    (0, a.yg)("br", null)
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
                      "https://localhost/api/v1/project/22/migration/25/resource/35/discovery"
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
                    (0, a.yg)("strong", { parentName: "td" }, '"project_Id"'),
                    ": 22,",
                    (0, a.yg)("br", null),
                    " ",
                    (0, a.yg)("strong", { parentName: "td" }, '"migration_id"'),
                    ": 25, ",
                    (0, a.yg)("br", null),
                    " ",
                    (0, a.yg)("strong", { parentName: "td" }, '"resource_id"'),
                    ": 35"
                  )
                )
              )
            )
          ),
          (0, a.yg)(
            r.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
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
                  '\nprint("*****Discovery 3rd party configuration*****\\n")\nurl="https://localhost/api/v1/project/"+ str(ProjectId) + "/migration/"+ str(MigrationID)+ "/resource/"+ str(ResourceID) + "/discover"\nprint(url)\nr = requests.post(url,data=data,verify=False, headers=hed)\nresponse = r.json()\nif success == "true":\n    jobId =  json.dumps(response[\'data\'][\'job_id\'])\n    print("Job id: "+jobId)\n    print("***** Wait for job to finish *****")\n    wait_for_job(EXPEDITION_URL+"job/" + jobId + "?complete=true", jobId, hed)\n    \n    r = requests.get(url, data=data, verify=False, headers=hed)\n    response = r.json()\n    print("Discover response: ")\n    print(response)\n    policy =json.dumps(response[\'data\'][\'policy\'])\n    print(policy)\n    policyname = json.loads(policy)\n    for i in range(len(policyname)):\n        globals()[\'policy{}\'.format(i+1)]= policyname[i]\n    for i in range(len(policyname)):\n        print(globals()[\'policy{}\'.format(i+1)])\n    route=(response[\'data\'][\'route\'][0])\n    MAPPING_ROUTE = route.replace("", \'\' )  \n    print(MAPPING_ROUTE)\nelse:\n    print(response)\n    print("Unable to discover the configuration")  \n'
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            { id: "step-6-config-mapping-to-map-policy-and-routeoptional" },
            "Step 6. Config mapping to map policy and route(optional)"
          ),
          (0, a.yg)(
            "p",
            null,
            "This step is optional for some vendor configuration required policy mapping , for example: checkpoint R77, stonesoft configuration.  The successfully response will contain a ",
            (0, a.yg)("strong", { parentName: "p" }, "job_id"),
            " for you to track the status , please refer to the checking job status ",
            (0, a.yg)(
              "a",
              {
                parentName: "p",
                href: "/expedition/docs/managing_jobs#checking-job-status",
              },
              "Checking Job Status"
            ),
            " section"
          ),
          (0, a.yg)(
            "p",
            null,
            "API syntax for mapping 3rd party vendors' configurations:"
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
                (0, a.yg)("th", { parentName: "tr", align: null }, "URL"),
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
                      "https://localhost/api/v1/project/{project_id}/migration/{migration_Id}/resource/{resource_Id}/map"
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
                    ":projectId",
                    (0, a.yg)("br", null),
                    " ",
                    (0, a.yg)("strong", { parentName: "td" }, '"migration_id"'),
                    ":migrationId",
                    (0, a.yg)("br", null),
                    (0, a.yg)("strong", { parentName: "td" }, '"resource_id"'),
                    ":resourceId",
                    (0, a.yg)("br", null)
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
                      "https://localhost/api/v1/project/22/migration/25/resource/35/map"
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
                    (0, a.yg)("strong", { parentName: "td" }, '"project_Id"'),
                    ": 22,",
                    (0, a.yg)("br", null),
                    " ",
                    (0, a.yg)("strong", { parentName: "td" }, '"migration_id"'),
                    ": 25, ",
                    (0, a.yg)("br", null),
                    " ",
                    (0, a.yg)("strong", { parentName: "td" }, '"resource_id"'),
                    ": 35"
                  )
                )
              )
            )
          ),
          (0, a.yg)(
            r.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
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
                  'url = "https://localhost/api/v1/project/" + "project/" + str(ProjectId) + "/migration/"+ str(MigrationID)+ "/resource/"+ str(ResourceID) + "/map"\nmapping_list =[]\nfor i in range(len(policyname)):\n    mapping_list.append({\n        "policy": globals()[\'policy{}\'.format(i+1)],\n        "route": MAPPING_ROUTE\n    })\n\nmapping = {"mapping": mapping_list}    \ndata = json.dumps(mapping, indent=4)    \nprint(data) \nhed[\'Content-Type\']=\'application/json\'\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\nprint(response)\nsuccess = json.dumps(response["success"])\nif success == "true":\n    print("New migration mapping created successfully" + " \\n")\n    r = requests.get(url, verify=False, headers=hed)\n    response=r.json()\n    print(response)\nelse:\n    print("Unable to create the migration mapping")  \n'
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            {
              id: "step-7-convert-the-3rd-party-configuration-to-a-pan-os-configuration",
            },
            "Step 7. Convert the 3rd party configuration to a PAN-OS configuration"
          ),
          (0, a.yg)(
            "p",
            null,
            "This step will convert the 3rd party configuration that you uploaded from previous step to a PAN-OS config. The successfully response will contain a ",
            (0, a.yg)("strong", { parentName: "p" }, "job_id"),
            " for you to track the status , please refer to the checking job status ",
            (0, a.yg)(
              "a",
              {
                parentName: "p",
                href: "/expedition/docs/managing_jobs#checking-job-status",
              },
              "Checking Job Status"
            ),
            " section"
          ),
          (0, a.yg)(
            "p",
            null,
            "API syntax for Converting 3rd party vendors' configurations:"
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
                (0, a.yg)("th", { parentName: "tr", align: null }, "URL"),
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
                      "https://localhost/api/v1/project/{project_id}/migration/{migration_Id}/convert"
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
                    ":projectId",
                    (0, a.yg)("br", null),
                    " ",
                    (0, a.yg)("strong", { parentName: "td" }, '"migration_id"'),
                    ":migrationId"
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
                      "https://localhost/api/v1/project/22/migration/25/convert"
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
                    (0, a.yg)("strong", { parentName: "td" }, '"project_Id"'),
                    ": 22,",
                    (0, a.yg)("br", null),
                    " ",
                    (0, a.yg)("strong", { parentName: "td" }, '"migration_id"'),
                    ": 25 "
                  )
                )
              )
            )
          ),
          (0, a.yg)(
            r.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
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
                  'print("*****Converting the 3rd party vendor config to a PAN-OS config*****\\n")\nurl = "https://localhost/api/v1/project/"+projectId+"/migration/"+migrationId+"/convert"\nprint(url)\nr = requests.post(url, data=data, verify=False, files=files, headers=hed)\nresponse = r.json()\nprint("CHECK migration status...........")\njobId = json.dumps(response["data"]["job_id"])\nwait_for_job(jobId)\n'
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            { id: "step-8-import-the-converted-configuration-into-project" },
            "Step 8. Import the Converted Configuration into project"
          ),
          (0, a.yg)(
            "p",
            null,
            "Once the conversion has done, we can import the resulting XML config file into an existing project for later configuration manipulations, such as delete unused objects, rename zones, etc."
          ),
          (0, a.yg)(
            "p",
            null,
            "The API syntax for Importing the converted PAN-OS Configuration into the project:"
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
                    (0, a.yg)("strong", { parentName: "td" }, '"project"'),
                    ': "projectID"',
                    (0, a.yg)("br", null),
                    (0, a.yg)("br", null),
                    (0, a.yg)("em", { parentName: "td" }, "in body"),
                    (0, a.yg)("br", null),
                    "{ ",
                    (0, a.yg)("strong", { parentName: "td" }, '"device_id"'),
                    ': "deviceId" }'
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
                  (0, a.yg)(
                    "small",
                    null,
                    (0, a.yg)("em", { parentName: "td" }, "in url"),
                    (0, a.yg)("br", null),
                    "project=22",
                    (0, a.yg)("br", null),
                    (0, a.yg)("br", null),
                    (0, a.yg)("em", { parentName: "td" }, "in body"),
                    (0, a.yg)("br", null),
                    '{ "device_id": "23" }'
                  )
                )
              )
            )
          ),
          (0, a.yg)(
            r.A,
            {
              defaultValue: null,
              values: [{ label: "Python", value: "python" }],
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
                  'print("*****Import Configuration to project*****")\nurl = "https://localhost/api/v1/project/{0}/import/device".format(int(projectId))\nprint(url)\ndata = {"device_id": deviceId}\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\njobId = json.dumps(response["data"]["job_id"])\nprint("CHECK configuration upload status...........")\nwait_for_job(jobId)\n'
                )
              )
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
      const o = { tabItem: "tabItem_OMyP" };
      function i({ children: e, hidden: t, className: n }) {
        return (0, a.jsx)("div", {
          role: "tabpanel",
          className: (0, r.default)(o.tabItem, n),
          hidden: t,
          children: e,
        });
      }
    },
    99813: (e, t, n) => {
      n.d(t, { A: () => c });
      var a = n(31085),
        r = n(14041),
        o = n(9546),
        i = n(44182),
        l = n(2533),
        p = n(53537);
      const s = { tabList: "tabList_M0Dn", tabItem: "tabItem_ysIP" };
      function g({
        className: e,
        block: t,
        selectedValue: n,
        selectValue: r,
        tabValues: l,
      }) {
        const p = [],
          { blockElementScrollPositionUntilNextRender: g } = (0, i.a_)(),
          d = (e) => {
            const t = e.currentTarget,
              a = p.indexOf(t),
              o = l[a].value;
            o !== n && (g(t), r(o));
          },
          u = (e) => {
            let t = null;
            switch (e.key) {
              case "Enter":
                d(e);
                break;
              case "ArrowRight": {
                const a = p.indexOf(e.currentTarget) + 1;
                var n;
                t = null !== (n = p[a]) && void 0 !== n ? n : p[0];
                break;
              }
              case "ArrowLeft": {
                const n = p.indexOf(e.currentTarget) - 1;
                var a;
                t = null !== (a = p[n]) && void 0 !== a ? a : p[p.length - 1];
                break;
              }
            }
            null == t || t.focus();
          };
        return (0, a.jsx)("ul", {
          role: "tablist",
          "aria-orientation": "horizontal",
          className: (0, o.default)("tabs", { "tabs--block": t }, e),
          children: l.map(({ value: e, label: t, attributes: r }) =>
            (0, a.jsx)(
              "li",
              {
                role: "tab",
                tabIndex: n === e ? 0 : -1,
                "aria-selected": n === e,
                ref: (e) => p.push(e),
                onKeyDown: u,
                onClick: d,
                ...r,
                className: (0, o.default)(
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
      function d({ lazy: e, children: t, selectedValue: n }) {
        const o = (Array.isArray(t) ? t : [t]).filter(Boolean);
        if (e) {
          const e = o.find((e) => e.props.value === n);
          return e
            ? (0, r.cloneElement)(e, { className: "margin-top--md" })
            : null;
        }
        return (0, a.jsx)("div", {
          className: "margin-top--md",
          children: o.map((e, t) =>
            (0, r.cloneElement)(e, { key: t, hidden: e.props.value !== n })
          ),
        });
      }
      function u(e) {
        const t = (0, l.u)(e);
        return (0, a.jsxs)("div", {
          className: (0, o.default)("tabs-container", s.tabList),
          children: [
            (0, a.jsx)(g, { ...e, ...t }),
            (0, a.jsx)(d, { ...e, ...t }),
          ],
        });
      }
      function c(e) {
        const t = (0, p.default)();
        return (0, a.jsx)(u, { ...e }, String(t));
      }
    },
    2533: (e, t, n) => {
      n.d(t, { u: () => u });
      var a = n(14041),
        r = n(86090),
        o = n(48043),
        i = n(9032),
        l = n(44892);
      function p(e) {
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
          const e = null != t ? t : p(n);
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
      function g({ value: e, tabValues: t }) {
        return t.some((t) => t.value === e);
      }
      function d({ queryString: e = !1, groupId: t }) {
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
          (0, o.aZ)(i),
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
      function u(e) {
        const { defaultValue: t, queryString: n = !1, groupId: r } = e,
          o = s(e),
          [i, p] = (0, a.useState)(() =>
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
              var n;
              const a =
                null !== (n = t.find((e) => e.default)) && void 0 !== n
                  ? n
                  : t[0];
              if (!a) throw new Error("Unexpected error: 0 tabValues");
              return a.value;
            })({ defaultValue: t, tabValues: o })
          ),
          [u, c] = d({ queryString: n, groupId: r }),
          [m, y] = (function ({ groupId: e }) {
            const t = (function (e) {
                return e ? `docusaurus.tab.${e}` : null;
              })(e),
              [n, r] = (0, l.Dv)(t);
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
            const e = null != u ? u : m;
            return g({ value: e, tabValues: o }) ? e : null;
          })();
        (0, a.useLayoutEffect)(() => {
          h && p(h);
        }, [h]);
        return {
          selectedValue: i,
          selectValue: (0, a.useCallback)(
            (e) => {
              if (!g({ value: e, tabValues: o }))
                throw new Error(`Can't select invalid tab value=${e}`);
              p(e), c(e), y(e);
            },
            [c, y, o]
          ),
          tabValues: o,
        };
      }
    },
  },
]);
