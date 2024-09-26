"use strict";
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [542],
  {
    82247: (e, t, n) => {
      n.d(t, { xA: () => c, yg: () => m });
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
      function s(e) {
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
      var i = a.createContext({}),
        p = function (e) {
          var t = a.useContext(i),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : s(s({}, t), e)), n;
        },
        c = function (e) {
          var t = p(e.components);
          return a.createElement(i.Provider, { value: t }, e.children);
        },
        u = "mdxType",
        d = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        g = a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            o = e.originalType,
            i = e.parentName,
            c = l(e, ["components", "mdxType", "originalType", "parentName"]),
            u = p(n),
            g = r,
            m = u["".concat(i, ".").concat(g)] || u[g] || d[g] || o;
          return n
            ? a.createElement(m, s(s({ ref: t }, c), {}, { components: n }))
            : a.createElement(m, s({ ref: t }, c));
        });
      function m(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ("string" == typeof e || r) {
          var o = n.length,
            s = new Array(o);
          s[0] = g;
          var l = {};
          for (var i in t) hasOwnProperty.call(t, i) && (l[i] = t[i]);
          (l.originalType = e),
            (l[u] = "string" == typeof e ? e : r),
            (s[1] = l);
          for (var p = 2; p < o; p++) s[p] = n[p];
          return a.createElement.apply(null, s);
        }
        return a.createElement.apply(null, n);
      }
      g.displayName = "MDXCreateElement";
    },
    93573: (e, t, n) => {
      n.r(t),
        n.d(t, {
          SetLanguage: () => u,
          assets: () => p,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => s,
          metadata: () => i,
          toc: () => c,
        });
      n(14041);
      var a = n(82247),
        r = n(99813),
        o = n(51801);
      const s = {
          id: "workflow",
          title: "Expedition Automation Workflows",
          sidebar_label: "Workflows Examples",
          hide_title: !1,
          description: "Expedition Automation Workflows",
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
          ],
          image: "/expedition/img/expedition.png",
        },
        l = void 0,
        i = {
          unversionedId: "expedition/docs/workflow",
          id: "expedition/docs/workflow",
          title: "Expedition Automation Workflows",
          description: "Expedition Automation Workflows",
          source: "@site/products/expedition/docs/workflow.mdx",
          sourceDirName: "expedition/docs",
          slug: "/expedition/docs/workflow",
          permalink: "/expedition/docs/workflow",
          draft: !1,
          editUrl:
            "https://github.com/PaloAltoNetworks/pan.dev/tree/master/products/expedition/docs/workflow.mdx",
          tags: [],
          version: "current",
          frontMatter: {
            id: "workflow",
            title: "Expedition Automation Workflows",
            sidebar_label: "Workflows Examples",
            hide_title: !1,
            description: "Expedition Automation Workflows",
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
            ],
            image: "/expedition/img/expedition.png",
          },
        },
        p = {},
        c = [
          {
            value: "Converting a 3rd party vendor firewall configuration",
            id: "converting-a-3rd-party-vendor-firewall-configuration",
            level: 2,
          },
          {
            value: "Step 1. Generating Expedition API Keys",
            id: "step-1-generating-expedition-api-keys",
            level: 3,
          },
          {
            value: "Step 2. Creating an Expedition project",
            id: "step-2-creating-an-expedition-project",
            level: 3,
          },
          {
            value:
              "Step 3. Upload the 3rd party vendor (source) configuration into Expedition",
            id: "step-3-upload-the-3rd-party-vendor-source-configuration-into-expedition",
            level: 3,
          },
          {
            value:
              "Step 4. Converting the source configuration to a PAN-OS configuration",
            id: "step-4-converting-the-source-configuration-to-a-pan-os-configuration",
            level: 3,
          },
          {
            value: "Step 3. Retrieve Device\u2019s content",
            id: "step-3-retrieve-devices-content",
            level: 3,
          },
          {
            value: "Step 4. Attach device to the Expedition Project",
            id: "step-4-attach-device-to-the-expedition-project",
            level: 3,
          },
          {
            value: "Push configuration to a PAN-OS device",
            id: "push-configuration-to-a-pan-os-device",
            level: 2,
          },
          {
            value: "Step 1. Generating PAN-OS API calls",
            id: "step-1-generating-pan-os-api-calls",
            level: 3,
          },
          {
            value: "Step 2. Sending API calls to the PAN-OS Device",
            id: "step-2-sending-api-calls-to-the-pan-os-device",
            level: 3,
          },
          {
            value: "Export PAN-OS configuration from Expedition",
            id: "export-pan-os-configuration-from-expedition",
            level: 2,
          },
        ];
      function u(e) {
        "undefined" != typeof window &&
          (localStorage.setItem("defaultLanguage", e),
          window.location.reload());
      }
      const d = { toc: c, SetLanguage: u },
        g = "wrapper";
      function m({ components: e, ...t }) {
        return (0, a.yg)(
          g,
          { ...d, ...t, components: e, mdxType: "MDXLayout" },
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
            { className: "button button--primary", onClick: () => u("python") },
            "Python"
          ),
          "\xa0",
          (0, a.yg)(
            "a",
            { className: "button button--info", onClick: () => u("php") },
            "Php"
          ),
          "\xa0",
          (0, a.yg)(
            "a",
            { className: "button button--danger", onClick: () => u("go") },
            "Go"
          ),
          (0, a.yg)("br", null),
          (0, a.yg)("br", null),
          (0, a.yg)(
            "p",
            null,
            "In this section we present some workflow examples to demonstrate how to consume the Expedition-APIs. The example scripts presented here can be found under the following URL:"
          ),
          (0, a.yg)(
            "p",
            null,
            (0, a.yg)(
              "a",
              {
                parentName: "p",
                href: "https://conversionupdates.paloaltonetworks.com/expedition2/examples/workflows.zip",
              },
              "https://conversionupdates.paloaltonetworks.com/expedition2/examples/workflows.zip"
            )
          ),
          (0, a.yg)(
            "h2",
            { id: "converting-a-3rd-party-vendor-firewall-configuration" },
            "Converting a 3rd party vendor firewall configuration"
          ),
          (0, a.yg)(
            "h3",
            { id: "step-1-generating-expedition-api-keys" },
            "Step 1. Generating Expedition API Keys"
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
            " variable), credentials to be used for authentication (",
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
            ") to Expedition to make a request to the login URL with the specified credentials, and collects the response from the server into the $response variable."
          ),
          (0, a.yg)(
            "p",
            null,
            "Expedition API responses are in JSON format In the case of a login API call, in the content section we will obtain an API key and a csrfToken.\nThe first can be used for API consumption in scripts, while the second is intended for HTTPS Web UI requests.\nWhile the API key has an expiration time of 1 month and extends its validity time on every login (it may change in the future),\na csrfToken has a shorter validity and gets regenerated for each login call."
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
              (0, a.yg)("strong", { parentName: "p" }, "$hed"),
              " variable that we will attach into the headers of the API calls we send in the future."
            )
          ),
          (0, a.yg)("p", null, "API syntax for Login to Expedition:"),
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
                    "inlineCode",
                    { parentName: "td" },
                    "https://<YourExpeditionIP>/api/v1/login"
                  )
                ),
                (0, a.yg)("td", { parentName: "tr", align: null }),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "{ ",
                  (0, a.yg)("strong", { parentName: "td" }, '"username"'),
                  ' : "admin" , ',
                  (0, a.yg)("strong", { parentName: "td" }, '"password"'),
                  ' : "paloalto" }'
                )
              )
            )
          ),
          (0, a.yg)(
            r.A,
            {
              defaultValue:
                "undefined" != typeof window &&
                localStorage.getItem("defaultLanguage") &&
                "go" != localStorage.getItem("defaultLanguage")
                  ? localStorage.getItem("defaultLanguage")
                  : "python",
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
                  "import json\nimport sys\nimport argparse\nimport requests\nfrom time import sleep\nimport urllib3\n\nurllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)\n\nprint('LOGIN')\n\nip=\"{YourExpeditionIP}\"\ncredentials = {\"username\":\"admin\", \"password\":\"paloalto\"}\n\nr = requests.post('https://'+ip+'/api/v1/login', data=credentials, verify=False)\nresponse=r.json()\napiKey = json.dumps(response['Contents']['response']['data']['content']['api_key'])\nauth_token = apiKey[1:-1]\nprint(auth_token)\nprint('')\n\nhed = {'Authorization': 'Bearer ' + auth_token}\n"
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
                  'echo  "LOGIN \\n";\n\n$ip="127.0.0.1"; //Enter here your Expedition IP reachable from the Script execution machine\n$url = \'https://\'.$ip.\'/api/v1/login\';\n$credentials =  array(\n    "username" => "admin",\n    "password" => "paloalto"\n);\n\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);\ncurl_setopt($curl,CURLOPT_POST, TRUE);\ncurl_setopt($curl,CURLOPT_POSTFIELDS, $credentials);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);\n$response = curl_exec($curl);\n\n$jsonResponse = json_decode($response);\nprint_r($jsonResponse->Contents->response->{\'response-messages\'}->messages[0]->message);\n$apiKey = $jsonResponse->Contents->response->data->content->api_key;\n$auth_token = trim($apiKey,"\'");\n\necho "\\n";\n$hed = array(\n    \'Authorization: Bearer \' . $auth_token,\n);\n'
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            { id: "step-2-creating-an-expedition-project" },
            "Step 2. Creating an Expedition project"
          ),
          (0, a.yg)(
            "p",
            null,
            "In the large amount of automation cases, we will require having an Expedition project. Making a POST call to the projects route, we can create a project with a desired name.\nBy default, the creator of a project is as well one of the project administrators.\nNotice that this time we attach the credentials $hed in the curl headers to demonstrate we have permission to create a project."
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
                    "inlineCode",
                    { parentName: "td" },
                    "https://<YourExpeditionIP>/api/v1/projects"
                  )
                ),
                (0, a.yg)("td", { parentName: "tr", align: null }),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "{ ",
                  (0, a.yg)("strong", { parentName: "td" }, '"project"'),
                  ': "project1", ',
                  (0, a.yg)("strong", { parentName: "td" }, '"description"'),
                  ': "Project for testing" }'
                )
              )
            )
          ),
          (0, a.yg)(
            r.A,
            {
              defaultValue:
                "undefined" != typeof window &&
                localStorage.getItem("defaultLanguage") &&
                "go" != localStorage.getItem("defaultLanguage")
                  ? localStorage.getItem("defaultLanguage")
                  : "python",
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
                  "print('CREATE NEW PROJECT')\ndata = {\"project\":projectName}\nr = requests.post('https://'+ip+'/api/v1/projects', data=data, verify=False, headers=hed)\nresponse=r.json()\nsuccess = json.dumps(response['Contents']['success'])\nif success=='true':\n    #print('New project created successfully')\n    projectId = json.dumps(response['Contents']['response']['data']['content']['id'])\n    print(json.dumps(response['Contents']['response']['response-messages']['messages'][0]['message']))\nprint('')\n"
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
                  "\necho \"\\n\";\necho \"CREATE NEW PROJECT\\n\";\n$data = [\"project\"=> $projectName];\n$url = 'https://'.$ip.'/api/v1/projects';\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);\ncurl_setopt($curl, CURLOPT_HTTPHEADER,$hed);\ncurl_setopt($curl,CURLOPT_POST, TRUE);\ncurl_setopt($curl,CURLOPT_POSTFIELDS, $data);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);\n$response = curl_exec($curl);\n$jsonResponse = json_decode($response);\n$success = $jsonResponse->Contents->success;\nif ($success=='true'){\n    print_r($response);\n    $projectId = $jsonResponse->Contents->response->data->content->id;\n    print_r($jsonResponse->Contents->response->{'response-messages'}->messages[0]->message);\n}\necho \"\\n\";\n"
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            {
              id: "step-3-upload-the-3rd-party-vendor-source-configuration-into-expedition",
            },
            "Step 3. Upload the 3rd party vendor (source) configuration into Expedition"
          ),
          (0, a.yg)(
            "p",
            null,
            "The migration process would require to upload one of more configuration files to be migrated. A minimum one would be the original vendor configuration file, and we plan to support bringing also routing table files to support dynamic routing tables which values are not specified in the firewall configuration."
          ),
          (0, a.yg)(
            "p",
            null,
            'For example, you can upload the cisco configuration "cisco.asa.txt" within the folder:'
          ),
          (0, a.yg)(
            "pre",
            null,
            (0, a.yg)(
              "code",
              { parentName: "pre", className: "language-console" },
              "/var/www/html/expedition-api/contents/configSamples/CiscoCase/\n"
            )
          ),
          (0, a.yg)(
            "p",
            null,
            "This folder should be reachable by the ",
            (0, a.yg)("inlineCode", { parentName: "p" }, "www-data"),
            " user and its content should be readable by the user as well."
          ),
          (0, a.yg)(
            "h3",
            {
              id: "step-4-converting-the-source-configuration-to-a-pan-os-configuration",
            },
            "Step 4. Converting the source configuration to a PAN-OS configuration"
          ),
          (0, a.yg)(
            "p",
            null,
            "The migration process takes an original configuration folder (",
            (0, a.yg)(
              "strong",
              { parentName: "p" },
              "$originalConfigFolderPath"
            ),
            ") contains one or more files required for the conversion, a path for the resulting PANOS XML config (",
            (0, a.yg)("strong", { parentName: "p" }, "$panosConfigPath"),
            ") and the vendor selection (",
            (0, a.yg)("strong", { parentName: "p" }, "$vendor"),
            ") to determine the conversion logic to be applied."
          ),
          (0, a.yg)(
            "p",
            null,
            "API syntax for Converting 3rd party vendor's configuration:"
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
                    "inlineCode",
                    { parentName: "td" },
                    "https://<YourExpeditionIP>/api/v1/external-tools/convert"
                  )
                ),
                (0, a.yg)("td", { parentName: "tr", align: null }),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "{",
                  (0, a.yg)("strong", { parentName: "td" }, '"file"'),
                  ': "/var/www/html/expedition-api/contents/configSamples/CiscoCase/ciscoasa.txt",',
                  (0, a.yg)("br", null),
                  " ",
                  (0, a.yg)("strong", { parentName: "td" }, '"out"'),
                  ': "/tmp/cisco.xml"',
                  (0, a.yg)("br", null),
                  ",",
                  (0, a.yg)("strong", { parentName: "td" }, '"vendor"'),
                  ': "ciscoasa" }'
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
                'Replace "vendor" value with the corresponding supported vendor value'
              ),
              ":"
            ),
            (0, a.yg)(
              "ul",
              { parentName: "admonition" },
              (0, a.yg)(
                "li",
                { parentName: "ul" },
                (0, a.yg)("strong", { parentName: "li" }, "ciscoasa"),
                " Cisco ASA"
              ),
              (0, a.yg)(
                "li",
                { parentName: "ul" },
                (0, a.yg)("strong", { parentName: "li" }, "pfsense"),
                " Pfsense"
              ),
              (0, a.yg)(
                "li",
                { parentName: "ul" },
                (0, a.yg)("strong", { parentName: "li" }, "sophos"),
                " Sophos"
              ),
              (0, a.yg)(
                "li",
                { parentName: "ul" },
                (0, a.yg)("strong", { parentName: "li" }, "sonicwall"),
                " Sonicwall"
              ),
              (0, a.yg)(
                "li",
                { parentName: "ul" },
                (0, a.yg)("strong", { parentName: "li" }, "netscreen"),
                " Juniper Netscreen"
              ),
              (0, a.yg)(
                "li",
                { parentName: "ul" },
                (0, a.yg)("strong", { parentName: "li" }, "fortinet"),
                " Fortinet Fortigate"
              ),
              (0, a.yg)(
                "li",
                { parentName: "ul" },
                (0, a.yg)("strong", { parentName: "li" }, "srx"),
                " Juniper Junos"
              ),
              (0, a.yg)(
                "li",
                { parentName: "ul" },
                (0, a.yg)("strong", { parentName: "li" }, "cp-r80"),
                " Checkpoint > R80"
              ),
              (0, a.yg)(
                "li",
                { parentName: "ul" },
                (0, a.yg)("strong", { parentName: "li" }, "ciscoswitch"),
                " Cisco Switch"
              ),
              (0, a.yg)(
                "li",
                { parentName: "ul" },
                (0, a.yg)("strong", { parentName: "li" }, "ciscoisr"),
                " Cisco ISR\n:::"
              )
            ),
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              "In the case we have already imported a PAN-OS device into Expedition, it is also possible to provide that device\u2019s identification to use the devices configuration as a base config on which to make the conversion."
            ),
            (0, a.yg)(
              r.A,
              {
                defaultValue:
                  "undefined" != typeof window &&
                  localStorage.getItem("defaultLanguage") &&
                  "go" != localStorage.getItem("defaultLanguage")
                    ? localStorage.getItem("defaultLanguage")
                    : "python",
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
                  { parentName: "admonition" },
                  (0, a.yg)(
                    "code",
                    { parentName: "pre", className: "language-python" },
                    "print('CONVERT FORTINET CONFIGURATION TO PALO ALTO')\ndata = {\"file\":originalConfigPath,\"out\":panosConfigPath,\"vendor\":vendor, \"serial\":serial}\nprint(data)\nr = requests.post('https://'+ip+'/api/v1/external-tools/convert', data=data, verify=False, headers=hed)\nresponse=r.json()\nsuccess = json.dumps(response['Contents']['success'])\nif success=='true':\n    #print('Config converted successfully')\n    print(json.dumps(response['Contents']['response']['response-messages']['messages'][0]['message']))\nprint('')\n"
                  )
                )
              ),
              (0, a.yg)(
                o.default,
                { value: "php", mdxType: "TabItem" },
                (0, a.yg)(
                  "pre",
                  { parentName: "admonition" },
                  (0, a.yg)(
                    "code",
                    { parentName: "pre", className: "language-php" },
                    'echo "\\n";\necho "CONVERT CISCO CONFIGURATION TO PALO ALTO\\n";\n\n$originalConfigFolderPath="/var/www/html/expedition-api/contents/configSamples/CiscoCase/";\n$panosConfigPath="/tmp/cisco.xml";\n$vendor="ciscoasa";\n\n$data = ["folder"=>$originalConfigFolderPath, "out"=>$panosConfigPath, "vendor"=>$vendor];\n$url = \'https://\'.$ip.\'/api/v1/external-tools/convert\';\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_HTTPHEADER,$hed);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);\ncurl_setopt($curl,CURLOPT_POST, TRUE);\ncurl_setopt($curl,CURLOPT_POSTFIELDS, $data);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);\n$response = curl_exec($curl);\n\n$jsonResponse = json_decode($response);\n$success = $jsonResponse->Contents->success;\n\nif ($success==\'true\'){\n    print_r($jsonResponse->Contents->response->{\'response-messages\'}->messages[0]->message);\n}\n'
                  )
                )
              )
            ),
            (0, a.yg)(
              "h3",
              {
                parentName: "admonition",
                id: "step-5-importing-the-configuration-into-the-project",
              },
              "Step 5. Importing the configuration into the Project"
            ),
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              "Once the conversion has done, we can import the resulting XML config file into an existing project for later configuration manipulations, such as delete unused objects, rename zones, etc. Snipt below shows imporitng the converted configuration into the project."
            ),
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              "API syntax for Importing the PAN-OS Configuration into the project:"
            ),
            (0, a.yg)(
              "table",
              { parentName: "admonition" },
              (0, a.yg)(
                "thead",
                { parentName: "table" },
                (0, a.yg)(
                  "tr",
                  { parentName: "thead" },
                  (0, a.yg)("th", { parentName: "tr", align: null }, "Method"),
                  (0, a.yg)(
                    "th",
                    { parentName: "tr", align: null },
                    "EndPoint"
                  ),
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
                      "inlineCode",
                      { parentName: "td" },
                      "https://<YourExpeditionIP>/api/v1/projects/{projectId}/importConfig"
                    ),
                    (0, a.yg)("br", null),
                    (0, a.yg)("br", null),
                    "With sample template value ",
                    (0, a.yg)("strong", { parentName: "td" }, '"project"'),
                    ': "1"',
                    (0, a.yg)("br", null),
                    (0, a.yg)("br", null),
                    "The full API EndPoint will become: ",
                    (0, a.yg)("br", null),
                    (0, a.yg)("br", null),
                    (0, a.yg)(
                      "inlineCode",
                      { parentName: "td" },
                      "https://<YourExpeditionIP>/api/v1/projects/1/importConfig"
                    )
                  ),
                  (0, a.yg)(
                    "td",
                    { parentName: "tr", align: null },
                    (0, a.yg)("strong", { parentName: "td" }, '"project"'),
                    ': "$projectID"'
                  ),
                  (0, a.yg)(
                    "td",
                    { parentName: "tr", align: null },
                    "{",
                    (0, a.yg)("strong", { parentName: "td" }, '"config"'),
                    ': "/tmp/cisco.xml" }'
                  )
                )
              )
            ),
            (0, a.yg)(
              r.A,
              {
                defaultValue:
                  "undefined" != typeof window &&
                  localStorage.getItem("defaultLanguage") &&
                  "go" != localStorage.getItem("defaultLanguage")
                    ? localStorage.getItem("defaultLanguage")
                    : "python",
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
                  { parentName: "admonition" },
                  (0, a.yg)(
                    "code",
                    { parentName: "pre", className: "language-python" },
                    "print('IMPORT CONFIGURATION')\ndata = {\"config\":panosConfigPath}\nr = requests.post('https://'+ip+'/api/v1/projects/'+projectId+'importConfig', data=data, verify=False, headers=hed)\nresponse=r.json()\nsuccess = json.dumps(response['Contents']['success'])\nif success=='true':\n    print('Config imported successfully')\n    #print(json.dumps(response['Contents']['response']['response-messages']['messages'][0]['message']))\nprint('')\n"
                  )
                )
              ),
              (0, a.yg)(
                o.default,
                { value: "php", mdxType: "TabItem" },
                (0, a.yg)(
                  "pre",
                  { parentName: "admonition" },
                  (0, a.yg)(
                    "code",
                    { parentName: "pre", className: "language-php" },
                    "echo \"\\n\";\necho \"IMPORT CONFIGURATION\\n\";\n$data = [\"config\" => $panosConfigPath];\n$url = 'https://'.$ip.'/api/v1/projects/'.$projectId.'/importConfig';\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_HTTPHEADER,$hed);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);\ncurl_setopt($curl,CURLOPT_POST, TRUE);\ncurl_setopt($curl,CURLOPT_POSTFIELDS, $data);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);\n$response = curl_exec($curl);\n\n$jsonResponse = json_decode($response);\n$success = $jsonResponse->Contents->success;\n\nif ($success=='true'){\n    echo 'Config imported successfully';\n}\n"
                  )
                )
              )
            ),
            (0, a.yg)(
              "h2",
              {
                parentName: "admonition",
                id: "assign-pan-os-device-to-the-expedition-project",
              },
              "Assign PAN-OS Device to the Expedition project"
            ),
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              "If we want to interact with a device for being able to retrieve it\u2019s configuration, push a new configuration or learn from the traffic logs that the device has generated (this feature will come in future releases), we need to declare a Panos Device in Expedition."
            ),
            (0, a.yg)(
              "h3",
              {
                parentName: "admonition",
                id: "step-1-add-a-pan-os-device-firewall-or-panorama",
              },
              "Step 1. Add a PAN-OS device (Firewall or Panorama)"
            ),
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              "The first action is to generate an API call to Expedition to declare the new device. Some initial information regarding the device is necessary, including the serial number, device name, IP address or hostname to be able to reach the device and the device model."
            ),
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              "API syntax for adding a PAN-OS device into the project:"
            ),
            (0, a.yg)(
              "table",
              { parentName: "admonition" },
              (0, a.yg)(
                "thead",
                { parentName: "table" },
                (0, a.yg)(
                  "tr",
                  { parentName: "thead" },
                  (0, a.yg)("th", { parentName: "tr", align: null }, "Method"),
                  (0, a.yg)(
                    "th",
                    { parentName: "tr", align: null },
                    "EndPoint"
                  ),
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
                      "inlineCode",
                      { parentName: "td" },
                      "https://<YourExpeditionIP>/api/v1/devices"
                    )
                  ),
                  (0, a.yg)("td", { parentName: "tr", align: null }),
                  (0, a.yg)(
                    "td",
                    { parentName: "tr", align: null },
                    "{",
                    (0, a.yg)("strong", { parentName: "td" }, '"serial"'),
                    ': "serial#ofyourFW",',
                    (0, a.yg)("br", null),
                    (0, a.yg)("strong", { parentName: "td" }, '"device_name"'),
                    ': "myFW2",',
                    (0, a.yg)("br", null),
                    " ",
                    (0, a.yg)("strong", { parentName: "td" }, '"hostname"'),
                    ': "myFWhostnameorIP", ',
                    (0, a.yg)("br", null),
                    (0, a.yg)("strong", { parentName: "td" }, '"type"'),
                    ':"pa220"}'
                  )
                )
              )
            ),
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              "The API response will provide us an internal Expedition identificator for the newly generated device."
            ),
            (0, a.yg)(
              r.A,
              {
                defaultValue:
                  "undefined" != typeof window &&
                  localStorage.getItem("defaultLanguage") &&
                  "go" != localStorage.getItem("defaultLanguage")
                    ? localStorage.getItem("defaultLanguage")
                    : "python",
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
                  { parentName: "admonition" },
                  (0, a.yg)(
                    "code",
                    { parentName: "pre", className: "language-python" },
                    "print('CREATE NEW DEVICE')\ndata = {\n    \"device_name\": device_name,\n    \"serial\": serial,\n    \"hostname\": hostname,\n    \"vsys\": vsys,\n    \"type\": type\n}\nr = requests.post('https://'+ip+'/api/v1/devices', data=data, verify=False, headers=hed)\nresponse=r.json()\nsuccess = json.dumps(response['Contents']['success'])\nif success=='true':\n    deviceId = json.dumps(response['Contents']['response']['data']['content']['id'])\n\n    #print('New device created successfully')\n    print(json.dumps(response['Contents']['response']['response-messages']['messages'][0]['message'][0]))\nprint('')\n"
                  )
                )
              ),
              (0, a.yg)(
                o.default,
                { value: "php", mdxType: "TabItem" },
                (0, a.yg)(
                  "pre",
                  { parentName: "admonition" },
                  (0, a.yg)(
                    "code",
                    { parentName: "pre", className: "language-php" },
                    "echo \"CREATE NEW DEVICE\\n\";\n$data = array(\n    \"device_name\"   => $device_name,\n    \"serial\"        => $serial,\n    \"hostname\"      => $hostname,\n    \"type\"          => $type\n);\n$url = 'https://'.$ip.'/api/v1/devices';\nprint_r($data);\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_HTTPHEADER,$hed);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER,TRUE);\ncurl_setopt($curl, CURLOPT_POST,TRUE);\ncurl_setopt($curl,CURLOPT_POSTFIELDS, $data);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYHOST,FALSE);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER,FALSE);\n\n$response = curl_exec($curl);\n$info = curl_getinfo($curl);\n//print_r($info);\ncurl_close($curl);\n//echo $response;\n$jsonResponse = json_decode($response);\n//print_r($jsonResponse);\n$success = $jsonResponse->Contents->success;\nif ($success=='true'){\n    $deviceId = $jsonResponse->Contents->response->data->content->id;\n    print('New device created successfully');\n    #print_r($jsonResponse->Contents->response->{'response-messages'} ->messages[0]->details->causes\n            ->description);\n}\n"
                  )
                )
              )
            ),
            (0, a.yg)(
              "h3",
              {
                parentName: "admonition",
                id: "step-2-retrieve-device-api-keys",
              },
              "Step 2. Retrieve Device API Keys"
            ),
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              "Once the device is created, if we need to retrieve its content or make future configuration pushes to the device, it will be necessary to have a device API Key."
            ),
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              "API syntax for retrieve PAN-OS device API key:"
            ),
            (0, a.yg)(
              "table",
              { parentName: "admonition" },
              (0, a.yg)(
                "thead",
                { parentName: "table" },
                (0, a.yg)(
                  "tr",
                  { parentName: "thead" },
                  (0, a.yg)("th", { parentName: "tr", align: null }, "Method"),
                  (0, a.yg)(
                    "th",
                    { parentName: "tr", align: null },
                    "EndPoint"
                  ),
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
                      "inlineCode",
                      { parentName: "td" },
                      "https://<YourExpeditionIP>/api/v1/device/keys"
                    )
                  ),
                  (0, a.yg)("td", { parentName: "tr", align: null }),
                  (0, a.yg)(
                    "td",
                    { parentName: "tr", align: null },
                    "{",
                    (0, a.yg)("strong", { parentName: "td" }, '"id"'),
                    ': "deviceID",',
                    (0, a.yg)("br", null),
                    (0, a.yg)("strong", { parentName: "td" }, '"role"'),
                    ': "admin",',
                    (0, a.yg)("br", null),
                    " ",
                    (0, a.yg)("strong", { parentName: "td" }, '"username"'),
                    ": ",
                    (0, a.yg)(
                      "em",
                      { parentName: "td" },
                      '"YourPAN-OSdeviceLoginusername"'
                    ),
                    ", ",
                    (0, a.yg)("br", null),
                    (0, a.yg)("strong", { parentName: "td" }, '"password"'),
                    ":",
                    (0, a.yg)(
                      "em",
                      { parentName: "td" },
                      '"YourPAN-OSdeviceLoginPassword"'
                    ),
                    "}"
                  )
                )
              )
            ),
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              "Notice that to be able to retrieve the API keys, we need to provide the login and password that we use to connect with the PANOS device."
            ),
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              "When creating and registering the API key, we should provide the role that can make use of it."
            ),
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              "There are 4 different options: ",
              (0, a.yg)(
                "strong",
                { parentName: "p" },
                "Admin, User, Viewer, Personal"
              ),
              ".  "
            )
          ),
          (0, a.yg)(
            "p",
            null,
            (0, a.yg)("strong", { parentName: "p" }, ".admin"),
            " (project related): all admin users in a given project will use this API key to interact with the device. In the device audit logs, there will be no unique identification of the user that has submitted the API calls to the device, as it could have been done by any of the project administrators."
          ),
          (0, a.yg)(
            "p",
            null,
            (0, a.yg)("strong", { parentName: "p" }, ".user"),
            " (project related): all users users in a given project will use this API key to interact with the device. In the device audit logs, there will be no unique identification of the user that has submitted the API calls to the device, as it could have been done by any of the project users."
          ),
          (0, a.yg)(
            "p",
            null,
            (0, a.yg)("strong", { parentName: "p" }, ".viewer"),
            " (project related): all viewer users in a given project will use this API key to interact with the device. In the device audit logs, there will be no unique identification of the user that has submitted the API calls to the device, as it could have been done by any of the project viewers."
          ),
          (0, a.yg)(
            "p",
            null,
            (0, a.yg)("strong", { parentName: "p" }, ".personal"),
            " (user related): this API key is private to the user that has requested it, and it will be used when this user requires interactions with the Panos Device. A benefit of this key is that in the device audit logs, the user will be identified as having sent the API calls to the device.",
            (0, a.yg)("br", { parentName: "p" }),
            "\n",
            ":::"
          ),
          (0, a.yg)(
            "p",
            null,
            "The following snippet shows how to consume the Expedition API to retrieve PAN-OS Device API keys and register these API keys into the defined device."
          ),
          (0, a.yg)(
            r.A,
            {
              defaultValue:
                "undefined" != typeof window &&
                localStorage.getItem("defaultLanguage") &&
                "go" != localStorage.getItem("defaultLanguage")
                  ? localStorage.getItem("defaultLanguage")
                  : "python",
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
                  "print('ADD DEVICE KEYS')\ndata = {\n    \"id\":deviceId,\n    \"role\":device_roles,\n    \"auth_type\":device_auth,\n    \"username\":device_username,\n    \"password\":device_pwd\n}\nr = requests.post('https://'+ip+'/api/v1/device/keys', data=data, verify=False, headers=hed)\nresponse=r.json()\nsuccess = json.dumps(response['Contents']['success'])\nif success=='true':\n    #print('Device keys added')\n    print(json.dumps(response['Contents']['response']['response-messages']['messages'][0]['message']))\nprint('')\n"
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
                  'echo "\\n";\necho "ADD DEVICE KEYS\\n";\n\n$device_roles = \'personal\';\n\n$data = [\n    "id" => $deviceId,\n    "role" => $device_roles,\n    "auth_type" => $device_auth,\n    "username" => $device_username,\n    "password" => $device_pwd\n];\n$url = \'https://\'.$ip.\'/api/v1/device/keys\';\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);\ncurl_setopt($curl,CURLOPT_POST, TRUE);\ncurl_setopt($curl, CURLOPT_HTTPHEADER,$hed);\ncurl_setopt($curl,CURLOPT_POSTFIELDS, $data);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);\n$response = curl_exec($curl);\nprint_r($response);\n$jsonResponse = json_decode($response);\n$success = $jsonResponse->Contents->success;\nif ($success==\'true\'){\n    #print(\'Device keys added\')\n    print_r($jsonResponse->Contents->response->{\'response-messages\'}->messages[0]->message);\n}\n'
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            { id: "step-3-retrieve-devices-content" },
            "Step 3. Retrieve Device\u2019s content"
          ),
          (0, a.yg)(
            "p",
            null,
            "We can retrieve the config from a device by specify the value either ",
            (0, a.yg)(
              "strong",
              { parentName: "p" },
              (0, a.yg)("inlineCode", { parentName: "strong" }, "candidate")
            ),
            " or ",
            (0, a.yg)(
              "strong",
              { parentName: "p" },
              (0, a.yg)("inlineCode", { parentName: "strong" }, "running")
            ),
            " in the ",
            (0, a.yg)("strong", { parentName: "p" }, "{config}"),
            " parameter when consuming API call."
          ),
          (0, a.yg)(
            "p",
            null,
            "API syntax for retrieve PAN-OS device contents:"
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
                (0, a.yg)("td", { parentName: "tr", align: null }, "GET"),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "inlineCode",
                    { parentName: "td" },
                    "https://<YourExpeditionIP>/api/v1/device/{deviceId}/retrieveContent/{config}"
                  ),
                  (0, a.yg)("br", null),
                  (0, a.yg)("br", null),
                  " With ",
                  (0, a.yg)("strong", { parentName: "td" }, "{deviceID}"),
                  ':"1" ',
                  (0, a.yg)("strong", { parentName: "td" }, "{config}"),
                  ':"running"',
                  (0, a.yg)("br", null),
                  (0, a.yg)("br", null),
                  "API EndPoint Full path will become: ",
                  (0, a.yg)("br", null),
                  (0, a.yg)("br", null),
                  (0, a.yg)(
                    "em",
                    { parentName: "td" },
                    (0, a.yg)(
                      "inlineCode",
                      { parentName: "em" },
                      "https://<YourExpeditionIP>/api/v1/device/1/retrieveContent/running"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)("strong", { parentName: "td" }, '"deviceID"'),
                  "-> PAN-OS device ID,",
                  (0, a.yg)("br", null),
                  (0, a.yg)("strong", { parentName: "td" }, '"config"'),
                  '-> "running"or "candidate"'
                ),
                (0, a.yg)("td", { parentName: "tr", align: null })
              )
            )
          ),
          (0, a.yg)(
            "p",
            null,
            "This is a task that, depending on the configuration size and the connection speed with the Pan-OS Device, may take a reasonable amount of time."
          ),
          (0, a.yg)(
            "p",
            null,
            "Therefore, this task (as several other tasks that require long processing time) is executed as a background task so it does not block the whole script execution."
          ),
          (0, a.yg)(
            "p",
            null,
            "So, the API call will respond with a job identified ",
            (0, a.yg)("strong", { parentName: "p" }, "$jobId"),
            " that can be checked to identify when the assigned task is completed."
          ),
          (0, a.yg)(
            "p",
            null,
            "In the second part of the code, we present one approach to monitor the execution state of the download config process, which is informed in the status element within the JSON content response."
          ),
          (0, a.yg)(
            r.A,
            {
              defaultValue:
                "undefined" != typeof window &&
                localStorage.getItem("defaultLanguage") &&
                "go" != localStorage.getItem("defaultLanguage")
                  ? localStorage.getItem("defaultLanguage")
                  : "python",
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
                  "print('RETRIEVE DEVICE CONTENT')\nr = requests.get('https://'+ip+'/api/v1/device/'+deviceId+'/retrieveContent/candidate', verify=False, headers=hed)\nresponse=r.json()\njobId = json.dumps(response['Contents']['response']['data']['content']['jobId'])\nprint('Job id: '+jobId)\n#print(json.dumps(response['Contents']['response']['response-messages']['messages']))\nprint('')\n\nprint('CHECK IF DEVICE CONTENT IS DOWNLOADED')\nr = requests.get('https://'+ip+'/api/v1/job/status/'+jobId, verify=False, headers=hed)\nresponse=r.json()\njobState = json.dumps(response['Contents']['response']['data']['content']['msg']['state'])\npercentage = float(jobState) * 100\nprint('Retrieving content from device: '+ str(percentage)+ '%')\n\n#Wait until all content is retrieved from device\nwhile(jobState != '1'):\n    sleep(5)\n    r = requests.get('https://'+ip+'/api/v1/job/status/'+jobId, verify=False,headers=hed)\n    response = r.json()\n    jobState = json.dumps(response['Contents']['response']['data']['content']['msg']['state'])\n    percentage = float(jobState)*100\n    print('Retrieving content from device: '+ str(round(percentage,2))+ '%')\n\nprint('')\n"
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
                  "echo \"RETRIEVE DEVICE CONTENT\\n\";\n\n$configType = \"candidate\";\n\n$url = 'https://'.$ip.'/api/v1/device/'.$deviceId.'/retrieveContent/'.$configType;\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_HTTPHEADER,$hed);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);\n$response = curl_exec($curl);\n$jsonResponse = json_decode($response);\n$jobId = $jsonResponse->Contents->response->data->content->jobId;\necho ('Job id: '.$jobId);\n#print(json.dumps(response['Contents']['response']['response-messages']['messages']))\n\n// ------\n// Other tasks can be performed here while the configuration is being downloaded\n// ------\n\necho \"\\n\";\necho \"CHECK IF DEVICE CONTENT IS DOWNLOADED\\n\";\n$url = 'https://'.$ip.'/api/v1/job/status/'.$jobId;\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_HTTPHEADER,$hed);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);\n$response = curl_exec($curl);\n$jsonResponse = json_decode($response);\n$jobState = $jsonResponse->Contents->response->data->content->msg->state;\n$percentage = (float)$jobState * 100;\necho ('Retrieving content from device: '. (string)$percentage. '%');\necho \"\\n\";\n\n#Wait until all content is retrieved from device\nwhile($jobState != '1'){\n    sleep(5);\n    $response = curl_exec($curl);\n    $jsonResponse = json_decode($response);\n    $jobState = $jsonResponse->Contents->response->data->content->msg->state;\n    $percentage = (float)$jobState * 100;\n    echo ('Retrieving content from device: '. (string)round($percentage). '%');\n    echo \"\\n\";\n}\n"
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            { id: "step-4-attach-device-to-the-expedition-project" },
            "Step 4. Attach device to the Expedition Project"
          ),
          (0, a.yg)(
            "p",
            null,
            "While a configuration is being downloaded, for instance, it would be possible to attach the device to an existing project, so we have the chance to import the device configuration into the project or so we can send the resulting project configuration back to the device."
          ),
          (0, a.yg)(
            "p",
            null,
            "API syntax for attach device to the Expedition project:"
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
                (0, a.yg)("td", { parentName: "tr", align: null }, "PUT"),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)(
                    "inlineCode",
                    { parentName: "td" },
                    "https://<YourExpeditionIP>/api/v1/projects/"
                  )
                ),
                (0, a.yg)("td", { parentName: "tr", align: null }),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "{",
                  (0, a.yg)("strong", { parentName: "td" }, '"devices"'),
                  ':"deviceID", ',
                  (0, a.yg)("br", null),
                  (0, a.yg)("strong", { parentName: "td" }, '"id"'),
                  ':"projectID"}'
                )
              )
            )
          ),
          (0, a.yg)(
            "p",
            null,
            "In the snippet below, we show how the device created above which id we prior stored in the ",
            (0, a.yg)("strong", { parentName: "p" }, "$deviceId"),
            " variable, is attached to the newly created project.\nThis call is making a modification on the project settings, therefore we are sending a PUT request to the project route."
          ),
          (0, a.yg)(
            r.A,
            {
              defaultValue:
                "undefined" != typeof window &&
                localStorage.getItem("defaultLanguage") &&
                "go" != localStorage.getItem("defaultLanguage")
                  ? localStorage.getItem("defaultLanguage")
                  : "python",
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
                  "print('ASSIGN DEVICE TO PROJECT')\ndata = {\"devices\":[deviceId],\"id\":projectId}\nr = requests.put('https://'+ip+'/api/v1/projects', data=data, verify=False, headers=hed)\nresponse=r.json()\nsuccess = json.dumps(response['Contents']['success'])\nif success=='true':\n    #print('Device assigned to project')\n    print(json.dumps(response['Contents']['response']['response-messages']['messages'][0]['message']))\nprint('')\n"
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
                  "echo \"ASSIGN DEVICE TO PROJECT\\n\";\n$data = [\"devices\"=>[$deviceId],\n        \"id\"=>$projectId];\n\n$url = 'https://'.$ip.'/api/v1/projects';\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_HTTPHEADER,$hed);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);\ncurl_setopt($curl, CURLOPT_CUSTOMREQUEST, \"PUT\");\ncurl_setopt($curl,CURLOPT_POSTFIELDS, http_build_query($data));\ncurl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);\n$response = curl_exec($curl);\n\n$jsonResponse = json_decode($response);\n$success = $jsonResponse->Contents->success;\n\nif ($success=='true'){\n    print_r($jsonResponse->Contents->response->{'response-messages'}->messages[0]->message);\n}\n"
                )
              )
            )
          ),
          (0, a.yg)(
            "h2",
            { id: "push-configuration-to-a-pan-os-device" },
            "Push configuration to a PAN-OS device"
          ),
          (0, a.yg)(
            "p",
            null,
            "Pushing a project configuration to a device requires having a project created, a device declared and having credentials (Device API keys) to interact with such device.",
            (0, a.yg)("br", { parentName: "p" }),
            "\n",
            "Once we have those, what would remain is the generation of the different API calls to a PAN-OS device that will receive the configuration, and executing those calls to apply the changes on the device\u2019s candidate configuration."
          ),
          (0, a.yg)(
            "h3",
            { id: "step-1-generating-pan-os-api-calls" },
            "Step 1. Generating PAN-OS API calls"
          ),
          (0, a.yg)(
            "p",
            null,
            "Once we have a project completed and we desire to submit all or part of the configuration to a PAN-OS device, we will have to generate the API calls.\nWe can create ",
            (0, a.yg)(
              "strong",
              { parentName: "p" },
              "mega, atomic, subatomic and clear"
            ),
            " API calls.  "
          ),
          (0, a.yg)(
            "admonition",
            { type: "info" },
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              (0, a.yg)("strong", { parentName: "p" }, "mega"),
              ": generates one single API call containing the complete XML configuration."
            ),
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              (0, a.yg)("strong", { parentName: "p" }, "atomic"),
              ": would generate one API call for each section in the configuration, such as address objects section, service object section, etc. In case of multiple DGs, we may obtain one API call for each section in the DG."
            ),
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              (0, a.yg)("strong", { parentName: "p" }, "subatomic"),
              ": would generate an API call for every element in a configuration. For instance, one API call for each address object in a configuration. This may be required when only certain objects should be submitted to the device."
            ),
            (0, a.yg)(
              "p",
              { parentName: "admonition" },
              (0, a.yg)("strong", { parentName: "p" }, "clear"),
              ": would generate API calls to delete the content of the desired section  "
            )
          ),
          (0, a.yg)("p", null, "API syntax for generating PAN-OS API calls:"),
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
                    "inlineCode",
                    { parentName: "td" },
                    "https://<YourExpeditionIP>/api/v1/projects/{projectId}/apiCalls/{type}"
                  ),
                  (0, a.yg)("br", null),
                  (0, a.yg)("br", null),
                  " With sample parameter value: ",
                  (0, a.yg)("strong", { parentName: "td" }, "{projectID}"),
                  ':"1", ',
                  (0, a.yg)("strong", { parentName: "td" }, "{type} "),
                  ':"atomic"',
                  (0, a.yg)("br", null),
                  (0, a.yg)("br", null),
                  " API EndPoint Full path will become: ",
                  (0, a.yg)("br", null),
                  (0, a.yg)("br", null),
                  (0, a.yg)(
                    "em",
                    { parentName: "td" },
                    (0, a.yg)(
                      "inlineCode",
                      { parentName: "em" },
                      "https://<YourExpeditionIP>/api/v1/projects/1/apiCalls/atomic"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)("strong", { parentName: "td" }, '"projectId"'),
                  "-> Expedition Project ID,",
                  (0, a.yg)("br", null),
                  (0, a.yg)("br", null),
                  (0, a.yg)("strong", { parentName: "td" }, '"type"'),
                  '-> "mega" or "atomic" or "subatomic" or "clear"'
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "{",
                  (0, a.yg)("strong", { parentName: "td" }, '"serial"'),
                  ': serial#ofyourFW",',
                  (0, a.yg)("br", null),
                  (0, a.yg)("strong", { parentName: "td" }, '"role"'),
                  ': "admin",',
                  (0, a.yg)("br", null),
                  (0, a.yg)("strong", { parentName: "td" }, '"auth_type"'),
                  ': "UserPassword",',
                  (0, a.yg)("br", null),
                  (0, a.yg)("strong", { parentName: "td" }, '"username"'),
                  ": ",
                  (0, a.yg)(
                    "em",
                    { parentName: "td" },
                    '"YourPAN-OSdeviceLoginusername"'
                  ),
                  ",",
                  (0, a.yg)("br", null),
                  (0, a.yg)("strong", { parentName: "td" }, '"password"'),
                  ": ",
                  (0, a.yg)(
                    "em",
                    { parentName: "td" },
                    '"YourPAN-OSdeviceLoginpassword"'
                  ),
                  ",",
                  (0, a.yg)("br", null),
                  (0, a.yg)("strong", { parentName: "td" }, '"sourceId"'),
                  ": 0,",
                  (0, a.yg)("br", null),
                  (0, a.yg)("strong", { parentName: "td" }, '"action"'),
                  ': "set"',
                  (0, a.yg)("br", null),
                  "}"
                )
              )
            )
          ),
          (0, a.yg)(
            "p",
            null,
            "The response will provide us a list of the generated API calls with their corresponding ids and types and order of execution."
          ),
          (0, a.yg)(
            r.A,
            {
              defaultValue:
                "undefined" != typeof window &&
                localStorage.getItem("defaultLanguage") &&
                "go" != localStorage.getItem("defaultLanguage")
                  ? localStorage.getItem("defaultLanguage")
                  : "python",
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
                  "print('PUSH CONFIG TO DEVICE')\ndata = {\"source\":source}\nr = requests.post('https://'+ip+'/api/v1/projects/'+projectId+'apiCalls/atomic', data=data, verify=False, headers=hed)\nresponse=r.json()\nsuccess = json.dumps(response['Contents']['success'])\nif success=='true':\n    #print('Api calls created')\n    print(json.dumps(response['Contents']['response']['response-messages']['messages'][0]['message']))\nprint('')\n"
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
                  "echo \"\\n\";\necho \"PUSH CONFIG TO DEVICE\\n\";\n$data = [\n    \"sourceId\"=>$source\n  ];\n$url = 'https://'.$ip.'/api/v1/projects/'.$projectId.'/apiCalls/atomic';\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_HTTPHEADER,$hed);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);\ncurl_setopt($curl,CURLOPT_POST, TRUE);\ncurl_setopt($curl,CURLOPT_POSTFIELDS, $data);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);\n$response = curl_exec($curl);\n$jsonResponse = json_decode($response);\n$success = $jsonResponse->Contents->success;\n\nif ($success=='true'){\n    print_r($jsonResponse->Contents->response->{'response-messages'}->messages[0]->message);\n}\n"
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            { id: "step-2-sending-api-calls-to-the-pan-os-device" },
            "Step 2. Sending API calls to the PAN-OS Device"
          ),
          (0, a.yg)(
            "p",
            null,
            "Once generated the API calls, we can submit them to a device, either a Firewall or a Panorama. We can provide the device identification via its serial number. In the case a device is managed by a Panorama, this will be used as a proxy to submit the API calls.\nThe Device API key that we have assigned will be used for the submission of the calls. If a personal API key has been registered in Expedition, this will take precedence over an admin/user/viewer API key."
          ),
          (0, a.yg)(
            "p",
            null,
            "API syntax for sending APIcalls to the PAN-OS Device:"
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
                    "inlineCode",
                    { parentName: "td" },
                    "https://<YourExpeditionIP>/api/v1/projects/{projectId}/device/push"
                  ),
                  (0, a.yg)("br", null),
                  (0, a.yg)("br", null),
                  " With sample parameter value: ",
                  (0, a.yg)("strong", { parentName: "td" }, "{projectID}"),
                  ':"1"',
                  (0, a.yg)("br", null),
                  (0, a.yg)("br", null),
                  " API EndPoint Full path will become: ",
                  (0, a.yg)("br", null),
                  (0, a.yg)("br", null),
                  (0, a.yg)(
                    "em",
                    { parentName: "td" },
                    (0, a.yg)(
                      "inlineCode",
                      { parentName: "em" },
                      "https://<YourExpeditionIP>/api/v1/projects/1/device/push"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, a.yg)("strong", { parentName: "td" }, '"projectId"'),
                  "-> Expedition Project ID",
                  (0, a.yg)("br", null)
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "{",
                  (0, a.yg)("strong", { parentName: "td" }, '"serial"'),
                  ': serial#ofyourFW",',
                  (0, a.yg)("br", null),
                  (0, a.yg)("strong", { parentName: "td" }, '"source"'),
                  ": PAN-OSconfigfile",
                  (0, a.yg)("br", null),
                  "}"
                )
              )
            )
          ),
          (0, a.yg)(
            "p",
            null,
            "When submitting the API calls, we can enumerate those ones that we want to submit or, if none is specified, all the generated API calls will be submitted to the device in the order of execution."
          ),
          (0, a.yg)(
            "p",
            null,
            "Submitting the API calls is executed as a set of tasks in a job. We can monitor the status of the tasks by checking the job status. Once the process is complete, we can request the result of the execution by checking the complete information of the job."
          ),
          (0, a.yg)(
            "p",
            null,
            "For instance, in the below snippet, we request information regarding possible errors faced during the submission of the API calls."
          ),
          (0, a.yg)(
            r.A,
            {
              defaultValue:
                "undefined" != typeof window &&
                localStorage.getItem("defaultLanguage") &&
                "go" != localStorage.getItem("defaultLanguage")
                  ? localStorage.getItem("defaultLanguage")
                  : "python",
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
                  "data = {\"serial\":serial,\"source\":source}\nr = requests.post('https://'+ip+'/api/v1/projects/'+projectID+'/device/push', data=data, verify=False, headers=hed)\nresponse=r.json()\nsuccess = json.dumps(response['Contents']['success'])\nif success=='true':\n    print('Sending api calls')\n    print('')\njobId = json.dumps(response['Contents']['response']['data']['content']['jobId'])\n\nprint('API CALLS STATUS')\nr = requests.get('https://'+ip+'/api/v1/job/status/'+jobId, verify=False, headers=hed)\nresponse=r.json()\njobState = json.dumps(response['Contents']['response']['data']['content']['msg']['state'])\npercentage = float(jobState)*100\nprint('Pushing config to device: '+ str(round(percentage,2))+ '%')\n\n#Wait until all content is retrieved from device\nwhile(jobState != '1'):\n    sleep(5)\n    r = requests.get('https://'+ip+'/api/v1/job/status/'+jobId, verify=False,headers=hed)\n    response = r.json()\n    jobState = json.dumps(response['Contents']['response']['data']['content']['msg']['state'])\n    percentage = float(jobState)*100\n    print('Pushing config device: '+ str(round(percentage,2))+ '%')\n\nr = requests.get('https://'+ip+'/api/v1/job/status/'+jobId+'/complete', verify=False, headers=hed)\nresponse=r.json()\njobState = json.dumps(response['Contents']['response']['data']['content']['msg']['state'])\ntaskCode = json.dumps(response['Contents']['response']['data']['content']['msg']['TasksMsg'][0]['statusCode'])\nif (int(taskCode)==-1):\n    taskStatus = json.dumps(response['Contents']['response']['data']['content']['msg']['TasksMsg'][0]['statusMessage'])\n    taskMessage = json.dumps(response['Contents']['response']['data']['content']['msg']['TasksMsg'][0]['resultCode'])\nprint('Config pushed successfully')\n"
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
                  "$data = [\n     \"serial\"=>$serial,\n     \"source\"=>$source\n   ];\n$url = 'https://'.$ip.'/api/v1/projects/'.$projectId.'/device/push';\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_HTTPHEADER,$hed);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);\ncurl_setopt($curl,CURLOPT_POST, TRUE);\ncurl_setopt($curl,CURLOPT_POSTFIELDS, $data);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);\n$response = curl_exec($curl);\n$jsonResponse = json_decode($response);\n$success = $jsonResponse->Contents->success;\nif ($success=='true'){\n    echo 'Sending api calls';\n}\n$jobId = $jsonResponse->Contents->response->data->content->jobId;\n\necho \"\\n\";\necho \"API CALLS STATUS\\n\";\n$url = 'https://'.$ip.'/api/v1/job/status/'.$jobId;\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_HTTPHEADER,$hed);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);\n$response = curl_exec($curl);\n$jsonResponse = json_decode($response);\n$jobState = $jsonResponse->Contents->response->data->content->msg->state;\n$percentage = (float)$jobState * 100;\necho \"\\n\";\necho ('Pushing config to device: '. (string)round($percentage) . '%');\n\n#Wait until all content is retrieved from device\nwhile($jobState != '1'){\n    sleep(5);\n    $response = curl_exec($curl);\n    $jsonResponse = json_decode($response);\n    $jobState = $jsonResponse->Contents->response->data->content->msg->state;\n    $percentage = (float)$jobState * 100;\n    echo \"\\n\";\n    echo ('Pushing config to device: '. (string)round($percentage) . '%');\n}\n\n\nif($percentage == \u2018100\u2019)\n   echo 'Config pushed successfully';\nelse\n   echo 'There have been errors submitting the API calls';\n\n$url = \"https://'.$ip.'/api/v1/job/status/'.$jobId.'/complete\\n\";\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_HTTPHEADER,$hed);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);\ncurl_setopt($curl, CURLOPT_HEADER, 0);\n$response = curl_exec($curl);\n$jsonResponse = json_decode($response);\nprint_r($jsonResponse);\n\n$callResultErrors = $jsonResponse->Contents->response->data->content->msg->errors;\necho \"The following API errors have been encountered:\";\nprint_r($callResultErrors);\n"
                )
              )
            )
          ),
          (0, a.yg)(
            "h2",
            { id: "export-pan-os-configuration-from-expedition" },
            "Export PAN-OS configuration from Expedition"
          ),
          (0, a.yg)(
            "p",
            null,
            "Instead of making API calls from Expedition as stated in previous section, you can export the PAN-OS configuration from Expedition and manually loaded the configuraiton back to PAN-OS device."
          ),
          (0, a.yg)(
            "p",
            null,
            "The output file path needs to be writable by the www-data user, therefore we recommend to place those files in the project directory."
          ),
          (0, a.yg)(
            "p",
            null,
            "API syntax for export PAN-OS configuration from Expedition:"
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
                    "inlineCode",
                    { parentName: "td" },
                    "https://<YourExpeditionIP>/api/v1/projects/{projectId}/export"
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "{",
                  (0, a.yg)("strong", { parentName: "td" }, '"projectId"'),
                  ':"$projectId"}',
                  (0, a.yg)("br", null),
                  (0, a.yg)("br", null),
                  " With sample parameter value: ",
                  (0, a.yg)("strong", { parentName: "td" }, "{projectID}"),
                  ':"1" ',
                  (0, a.yg)("br", null),
                  (0, a.yg)("br", null),
                  "API EndPoint Full path will become: ",
                  (0, a.yg)("br", null),
                  (0, a.yg)("br", null),
                  (0, a.yg)(
                    "em",
                    { parentName: "td" },
                    (0, a.yg)(
                      "inlineCode",
                      { parentName: "em" },
                      "https://<YourExpeditionIP>/api/v1/projects/1/export"
                    )
                  )
                ),
                (0, a.yg)(
                  "td",
                  { parentName: "tr", align: null },
                  "{",
                  (0, a.yg)("strong", { parentName: "td" }, '"out:"'),
                  "-> PAN-OS configuration file ,",
                  (0, a.yg)("br", null),
                  (0, a.yg)("br", null),
                  (0, a.yg)("strong", { parentName: "td" }, '"sourceID:"'),
                  "-> you can get the source id with the sources given in the previous api call",
                  (0, a.yg)("br", null),
                  "}"
                )
              )
            )
          ),
          (0, a.yg)(
            r.A,
            {
              defaultValue:
                "undefined" != typeof window &&
                localStorage.getItem("defaultLanguage") &&
                "go" != localStorage.getItem("defaultLanguage")
                  ? localStorage.getItem("defaultLanguage")
                  : "python",
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
                  "\nprint('EXPORT API CALL AS XML') #you can use it to get the final xml and then upload it manually to the firewall\noutPath = '/home/userSpace/projects/fortinetDemo'\nsourceId = 1 #you can get the source id with the sources given in the previous api call\ndata = {\"out\":outPath,\"sourceId\":sourceId}\nr = requests.post('https://'+ip+'/api/v1/'+projectId+'/export', data=data, verify=False, headers=hed)\nresponse=r.json()\nsuccess = json.dumps(response['Contents']['success'])\nif success=='true':\n    print(json.dumps(response['Contents']['response']['response-messages']['messages'][0]['message']))\nprint('')\n\n"
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
                  "$data = [\n     \"sourceId\"=>$source,\n     \"out\"=>\"/home/userSpace/projects/$projectId/panos.xml\"\n   ];\n$url = 'https://'.$ip.'/api/v1/projects/'.$projectId.'/export';\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_HTTPHEADER,$hed);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);\ncurl_setopt($curl,CURLOPT_POST, TRUE);\ncurl_setopt($curl,CURLOPT_POSTFIELDS, $data);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);\n$response = curl_exec($curl);\n$jsonResponse = json_decode($response);\n$success = $jsonResponse->Contents->success;\nif ($success=='true'){\n    echo 'Configuration export process initiated;\n}\n$jobId = $jsonResponse->Contents->response->data->content->jobId;\n\necho \"\\n\";\necho \"Export Status\\n\";\n$url = 'https://'.$ip.'/api/v1/job/status/'.$jobId;\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_HTTPHEADER,$hed);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);\n$response = curl_exec($curl);\n$jsonResponse = json_decode($response);\n$jobState = $jsonResponse->Contents->response->data->content->msg->state;\n$percentage = (float)$jobState * 100;\necho \"\\n\";\necho ('Configuration exported to '. (string)round($percentage) . '%');\n\n#Wait until all content is retrieved from device\nwhile($jobState != '1'){\n    sleep(5);\n    $response = curl_exec($curl);\n    $jsonResponse = json_decode($response);\n    $jobState = $jsonResponse->Contents->response->data->content->msg->state;\n    $percentage = (float)$jobState * 100;\n    echo \"\\n\";\n    echo ('Configuration exported to '. (string)round($percentage) . '%');\n}\nif($percentage == '100')\n   echo 'Config exported successfully to path '.$out.'/n';\nelse\n   echo 'There have been errors generating the XML output file';\n\n$url = \"https://'.$ip.'/api/v1/job/status/'.$jobId.'/complete\\n\";\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_HTTPHEADER,$hed);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);\ncurl_setopt($curl, CURLOPT_HEADER, 0);\n$response = curl_exec($curl);\n$jsonResponse = json_decode($response);\nprint_r($jsonResponse);\n\n$callResultErrors = $jsonResponse->Contents->response->data->content->msg->errors;\necho \"The following errors have been encountered during Config generation:\";\nprint_r($callResultErrors);\n"
                )
              )
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
    51801: (e, t, n) => {
      n.r(t), n.d(t, { default: () => s });
      var a = n(31085),
        r = (n(14041), n(9546));
      const o = { tabItem: "tabItem_OMyP" };
      function s({ children: e, hidden: t, className: n }) {
        return (0, a.jsx)("div", {
          role: "tabpanel",
          className: (0, r.default)(o.tabItem, n),
          hidden: t,
          children: e,
        });
      }
    },
    99813: (e, t, n) => {
      n.d(t, { A: () => g });
      var a = n(31085),
        r = n(14041),
        o = n(9546),
        s = n(44182),
        l = n(2533),
        i = n(53537);
      const p = { tabList: "tabList_M0Dn", tabItem: "tabItem_ysIP" };
      function c({
        className: e,
        block: t,
        selectedValue: n,
        selectValue: r,
        tabValues: l,
      }) {
        const i = [],
          { blockElementScrollPositionUntilNextRender: c } = (0, s.a_)(),
          u = (e) => {
            const t = e.currentTarget,
              a = i.indexOf(t),
              o = l[a].value;
            o !== n && (c(t), r(o));
          },
          d = (e) => {
            let t = null;
            switch (e.key) {
              case "Enter":
                u(e);
                break;
              case "ArrowRight": {
                const a = i.indexOf(e.currentTarget) + 1;
                var n;
                t = null !== (n = i[a]) && void 0 !== n ? n : i[0];
                break;
              }
              case "ArrowLeft": {
                const n = i.indexOf(e.currentTarget) - 1;
                var a;
                t = null !== (a = i[n]) && void 0 !== a ? a : i[i.length - 1];
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
                ref: (e) => i.push(e),
                onKeyDown: d,
                onClick: u,
                ...r,
                className: (0, o.default)(
                  "tabs__item",
                  p.tabItem,
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
      function u({ lazy: e, children: t, selectedValue: n }) {
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
      function d(e) {
        const t = (0, l.u)(e);
        return (0, a.jsxs)("div", {
          className: (0, o.default)("tabs-container", p.tabList),
          children: [
            (0, a.jsx)(c, { ...e, ...t }),
            (0, a.jsx)(u, { ...e, ...t }),
          ],
        });
      }
      function g(e) {
        const t = (0, i.default)();
        return (0, a.jsx)(d, { ...e }, String(t));
      }
    },
    2533: (e, t, n) => {
      n.d(t, { u: () => d });
      var a = n(14041),
        r = n(86090),
        o = n(48043),
        s = n(9032),
        l = n(44892);
      function i(e) {
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
          const e = null != t ? t : i(n);
          return (
            (function (e) {
              const t = (0, s.X)(e, (e, t) => e.value === t.value);
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
      function c({ value: e, tabValues: t }) {
        return t.some((t) => t.value === e);
      }
      function u({ queryString: e = !1, groupId: t }) {
        const n = (0, r.W6)(),
          s = (function ({ queryString: e = !1, groupId: t }) {
            if ("string" == typeof e) return e;
            if (!1 === e) return null;
            if (!0 === e && !t)
              throw new Error(
                'Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".'
              );
            return null != t ? t : null;
          })({ queryString: e, groupId: t });
        return [
          (0, o.aZ)(s),
          (0, a.useCallback)(
            (e) => {
              if (!s) return;
              const t = new URLSearchParams(n.location.search);
              t.set(s, e), n.replace({ ...n.location, search: t.toString() });
            },
            [s, n]
          ),
        ];
      }
      function d(e) {
        const { defaultValue: t, queryString: n = !1, groupId: r } = e,
          o = p(e),
          [s, i] = (0, a.useState)(() =>
            (function ({ defaultValue: e, tabValues: t }) {
              if (0 === t.length)
                throw new Error(
                  "Docusaurus error: the <Tabs> component requires at least one <TabItem> children component"
                );
              if (e) {
                if (!c({ value: e, tabValues: t }))
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
          [d, g] = u({ queryString: n, groupId: r }),
          [m, h] = (function ({ groupId: e }) {
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
          y = (() => {
            const e = null != d ? d : m;
            return c({ value: e, tabValues: o }) ? e : null;
          })();
        (0, a.useLayoutEffect)(() => {
          y && i(y);
        }, [y]);
        return {
          selectedValue: s,
          selectValue: (0, a.useCallback)(
            (e) => {
              if (!c({ value: e, tabValues: o }))
                throw new Error(`Can't select invalid tab value=${e}`);
              i(e), g(e), h(e);
            },
            [g, h, o]
          ),
          tabValues: o,
        };
      }
    },
  },
]);
