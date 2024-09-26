"use strict";
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [205],
  {
    82247: (e, t, n) => {
      n.d(t, { xA: () => c, yg: () => m });
      var a = n(14041);
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
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
      function s(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++)
              (n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            (n = r[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var i = a.createContext({}),
        u = function (e) {
          var t = a.useContext(i),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : l(l({}, t), e)), n;
        },
        c = function (e) {
          var t = u(e.components);
          return a.createElement(i.Provider, { value: t }, e.children);
        },
        p = "mdxType",
        d = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        g = a.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            r = e.originalType,
            i = e.parentName,
            c = s(e, ["components", "mdxType", "originalType", "parentName"]),
            p = u(n),
            g = o,
            m = p["".concat(i, ".").concat(g)] || p[g] || d[g] || r;
          return n
            ? a.createElement(m, l(l({ ref: t }, c), {}, { components: n }))
            : a.createElement(m, l({ ref: t }, c));
        });
      function m(e, t) {
        var n = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var r = n.length,
            l = new Array(r);
          l[0] = g;
          var s = {};
          for (var i in t) hasOwnProperty.call(t, i) && (s[i] = t[i]);
          (s.originalType = e),
            (s[p] = "string" == typeof e ? e : o),
            (l[1] = s);
          for (var u = 2; u < r; u++) l[u] = n[u];
          return a.createElement.apply(null, l);
        }
        return a.createElement.apply(null, n);
      }
      g.displayName = "MDXCreateElement";
    },
    3387: (e, t, n) => {
      n.r(t),
        n.d(t, {
          SetLanguage: () => p,
          assets: () => u,
          contentTitle: () => s,
          default: () => m,
          frontMatter: () => l,
          metadata: () => i,
          toc: () => c,
        });
      n(14041);
      var a = n(82247),
        o = n(99813),
        r = n(51801);
      const l = {
          id: "managing_jobs",
          title: "Managing Jobs",
          sidebar_label: "Managing Jobs",
          hide_title: !1,
          description: "Managing Jobs in Expedition",
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
        s = void 0,
        i = {
          unversionedId: "expedition/docs/managing_jobs",
          id: "expedition/docs/managing_jobs",
          title: "Managing Jobs",
          description: "Managing Jobs in Expedition",
          source: "@site/products/expedition/docs/managing_jobs.mdx",
          sourceDirName: "expedition/docs",
          slug: "/expedition/docs/managing_jobs",
          permalink: "/expedition/docs/managing_jobs",
          draft: !1,
          editUrl:
            "https://github.com/PaloAltoNetworks/pan.dev/tree/master/products/expedition/docs/managing_jobs.mdx",
          tags: [],
          version: "current",
          frontMatter: {
            id: "managing_jobs",
            title: "Managing Jobs",
            sidebar_label: "Managing Jobs",
            hide_title: !1,
            description: "Managing Jobs in Expedition",
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
            title: "Managing Expedition's Agent",
            permalink: "/expedition/docs/managing_expedition_agent",
          },
          next: {
            title: "Expedition-API Filters",
            permalink: "/expedition/docs/expedition_workflow_filters",
          },
        },
        u = {},
        c = [
          { value: "Description", id: "description", level: 3 },
          {
            value: "Example of a Job Creation",
            id: "example-of-a-job-creation",
            level: 3,
          },
          { value: "Checking Job status", id: "checking-job-status", level: 3 },
          { value: "Cancelling a Job", id: "cancelling-a-job", level: 3 },
          {
            value: "Getting the Job result",
            id: "getting-the-job-result",
            level: 3,
          },
        ];
      function p(e) {
        "undefined" != typeof window &&
          (localStorage.setItem("defaultLanguage", e),
          window.location.reload());
      }
      const d = { toc: c, SetLanguage: p },
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
            { className: "button button--primary", onClick: () => p("python") },
            "Python"
          ),
          "\xa0",
          (0, a.yg)(
            "a",
            { className: "button button--info", onClick: () => p("php") },
            "Php"
          ),
          "\xa0",
          (0, a.yg)(
            "a",
            { className: "button button--danger", onClick: () => p("go") },
            "Go"
          ),
          (0, a.yg)("br", null),
          (0, a.yg)("br", null),
          (0, a.yg)(
            "p",
            null,
            "In this section we describe the concept of tasks in Expedition, how to create them, monitor them and cancel them."
          ),
          (0, a.yg)("h3", { id: "description" }, "Description"),
          (0, a.yg)(
            "p",
            null,
            "Some of the background tasks in Expedition 2.0 are better performed within jobs that can be monitored, are non-blocking and in some cases, can be cancelled.\nImporting a configuration is one of such actions as, depending on the configuration size, the required time for importing may be excessive for a blocking code."
          ),
          (0, a.yg)(
            "p",
            null,
            "In general terms, jobs are meant to be handled by an ",
            (0, a.yg)("inlineCode", { parentName: "p" }, "Agent"),
            " in Expedition that should be started in advance. See ",
            (0, a.yg)(
              "a",
              {
                parentName: "p",
                href: "/expedition/docs/managing_expedition_agent",
              },
              "Managing Expedition's Agent"
            ),
            " section for more information.",
            (0, a.yg)("br", { parentName: "p" }),
            "\n",
            "In a general view, jobs are created in Expedition depending on the type of request that it is being submitted. When a request has potential to require a certain amount of time to be completed,\nthis is executed as a job by the Expedition agent."
          ),
          (0, a.yg)(
            "h3",
            { id: "example-of-a-job-creation" },
            "Example of a Job Creation"
          ),
          (0, a.yg)(
            "p",
            null,
            "The process of importing a configuration is an example of a task that is executed by the ",
            (0, a.yg)("inlineCode", { parentName: "p" }, "Agent"),
            " as a ",
            (0, a.yg)("inlineCode", { parentName: "p" }, "job"),
            ".\nAll tasks requests that become executed within jobs will answer back with a job_id that can later be monitored or cancelled (",
            (0, a.yg)(
              "em",
              { parentName: "p" },
              "note: cancelling may not be allowed for all type of tasks"
            ),
            ")."
          ),
          (0, a.yg)(
            o.A,
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
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'print("*****Import the PAN-OS configuration of your device to the project\\n")\nurl = "https://" + ip + "/api/v1/project/{0}/import/device".format(int(projectId))\nprint(url)\ndata = {"device_id": DeviceId}\nr = requests.post(url, data=data, verify=False, headers=hed)\nresponse = r.json()\njobId = json.dumps(response["data"]["job_id"])\n'
                )
              )
            ),
            (0, a.yg)(
              r.default,
              { value: "php", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-php" },
                  "echo  \"START AGENT \\n\";\n$url = 'https://'.$ip.'/api/v1/agent/start';\n\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, $hed);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HEADER, 0);\n\n$response = curl_exec($curl);\n\n$jobId = $response->Contents->response->data->content->system->jobs->jobId\ncurl_close($curl);\n"
                )
              )
            ),
            (0, a.yg)(
              r.default,
              { value: "go", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-go" },
                  "//TODO\n"
                )
              )
            )
          ),
          (0, a.yg)(
            "p",
            null,
            "The following JSON exemplifies the response that a request will generate when a job is created.\nNotice that the response includes the ",
            (0, a.yg)("inlineCode", { parentName: "p" }, "jobId"),
            " (1619 in this case) and a brief description on the job type and its status.\nThe jobId can be collected through the JSON path ",
            (0, a.yg)(
              "inlineCode",
              { parentName: "p" },
              "Contents->response->data->content->system->jobs->jobId"
            )
          ),
          (0, a.yg)(
            "pre",
            null,
            (0, a.yg)(
              "code",
              { parentName: "pre", className: "language-json" },
              '{\n  "Type": "success",\n  "success": true,\n  "Contents-Format": "json",\n  "Contents": {\n    "code": 0,\n    "success": true,\n    "cacheable": false,\n    "metadata": {},\n    "response": {\n      "total": 1,\n      "current-page": 1,\n      "per-page": 10,\n      "total-pages": 1,\n      "state": 0,\n      "response-messages": {\n        "total": 0,\n        "code": 0,\n        "messages": []\n      },\n      "data": {\n        "total-objects": null,\n        "fields": null,\n        "columns": null,\n        "content": {\n          "system": {\n            "jobs": {\n              "jobId": 1619,\n              "description": "Importing Config into Project",\n              "state": 1,\n              "JobMsg": {\n                "statusCode": 1,\n                "statusMessage": "Completed"\n              },\n              "TasksMsg": ["Completed. Filter executed successfully"],\n              "nextStep": []\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'
            )
          ),
          (0, a.yg)("h3", { id: "checking-job-status" }, "Checking Job status"),
          (0, a.yg)(
            "p",
            null,
            "Within an answer of a job status, we can explore the current state of its execution.\nThe ",
            (0, a.yg)("inlineCode", { parentName: "p" }, "state"),
            " field will provide a numeric value that represents the execution percentage (from 0 - 0% to 1 - 100%)."
          ),
          (0, a.yg)(
            "p",
            null,
            "Once the execution is completed, having the state to 1, it would be the moment to request the task response."
          ),
          (0, a.yg)(
            "p",
            null,
            "The calls comply with the following structure:"
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
                      "https://localhost/api/v1/job/status/<jobId>"
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
                    (0, a.yg)("strong", { parentName: "td" }, "jobId"),
                    " : job id value"
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
                      "https://localhost/api/v1/job/status/1619"
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
                    " jobId: 1619"
                  )
                )
              )
            )
          ),
          (0, a.yg)(
            o.A,
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
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  'jobFinished = False\nprint("CHECK configuration upload status...........")\nr = requests.get(\n    "https://" + ip + "/api/v1/job/" + jobId + "?complete=true",\n    verify=False,\n    headers=hed,\n)\nresponse = r.json()\n# print(response)\njobState = json.dumps(response["data"]["state"])\npercentage = float(jobState) * 100\nprint(\n    "Import PAN-OS configuration from devie to Project: "\n    + str(round(percentage, 2))\n    + "%\\n"\n)\n# Wait until job is done\nwhile jobState != "1":\n    sleep(5)\n    r = requests.get(\n        "https://" + ip + "/api/v1/job/" + jobId + "?complete=true",\n        verify=False,\n        headers=hed,\n    )\n    response = r.json()\n    jobState = json.dumps(response["data"]["state"])\n    percentage = float(jobState) * 100\n    print(\n        "PAN-OS configuration has been imported to Project: "\n        + str(round(percentage, 2))\n        + "%\\n"\n    )\nresponse = r.json()\nstatusmessage = json.dumps(response["data"]["task"][0]["statusMessage"])\nprint(statusmessage)\n'
                )
              )
            ),
            (0, a.yg)(
              r.default,
              { value: "go", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-go" },
                  "//TODO\n"
                )
              )
            ),
            (0, a.yg)(
              r.default,
              { value: "php", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-php" },
                  "echo  \"RESTART AGENT \\n\";\n$url = 'https://'.$ip.'/api/v1/job/'.$jobId;\n\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, $hed);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HEADER, 0);\ncurl_setopt($curl, CURLOPT_CUSTOMREQUEST, \"DELETE\");\n\n$response = curl_exec($curl);\n$jobState = $response->Contents->response->data->content->system->jobs->state\n$percentage = float($jobState)*100\necho('Importing configuration: '+ str(round($percentage,2))+ '%')\n\n#Wait until all content is retrieved from device\nwhile($jobState != '1')\n{\n    sleep(0.5)\n    $response = curl_exec($curl);\n    $jobState = $response->Contents->response->data->content->system->jobs->state\n    $percentage = float($jobState)*100\n    echo('Importing configuration: '+ str(round($percentage,2))+ '%')\n}\n\ncurl_close($curl);\n"
                )
              )
            )
          ),
          (0, a.yg)("h3", { id: "cancelling-a-job" }, "Cancelling a Job"),
          (0, a.yg)(
            "p",
            null,
            "Certain jobs can be cancelled on demand if no side consequences would impact on the current project.\nTo request the cancellation of a job, we need to call the folloging URL with the DELETE method with the ",
            (0, a.yg)("inlineCode", { parentName: "p" }, "jobId"),
            " that wants to be cancelled."
          ),
          (0, a.yg)(
            "p",
            null,
            "If a job gets cancelled, its ",
            (0, a.yg)("inlineCode", { parentName: "p" }, "state"),
            " will be modified to ",
            (0, a.yg)("inlineCode", { parentName: "p" }, "-1"),
            ".\nIf a job cannot be cancelled, its execution will continue uninfluenced, its ",
            (0, a.yg)("inlineCode", { parentName: "p" }, "state"),
            " will keep reflecting the current execition percentage\nand a message will inform that the current job cannot be cancelled."
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
                      "https://localhost/api/v1/job/<jobId>"
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
                    (0, a.yg)("strong", { parentName: "td" }, "jobId"),
                    " : job id value"
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
                      "https://localhost/api/v1/job/1619"
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
                    " jobId: 1619"
                  )
                )
              )
            )
          ),
          (0, a.yg)(
            "p",
            null,
            "The calls comply with the following structure:"
          ),
          (0, a.yg)(
            o.A,
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
              r.default,
              { value: "python", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-python" },
                  "\nprint('CANCELLING A JOB')\nr = requests.delete('https://'+ip+'/api/v1/job/'+jobId, verify=False, headers=hed)\nresponse=r.json()\ncancelled = json.dumpsresponse['Contents']['response']['data']['content']['system']['jobs']['state'])\nif(cancelled == -1)\n    print('Job has been cancelled')\n"
                )
              )
            ),
            (0, a.yg)(
              r.default,
              { value: "php", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-php" },
                  'echo  "RESTART AGENT \\n";\n$url = \'https://\'.$ip.\'/api/v1/job/\'.$jobId;\n\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, $hed);\ncurl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HEADER, 0);\ncurl_setopt($curl, CURLOPT_CUSTOMREQUEST, "DELETE");\n\n$response = curl_exec($curl);\n$cancelled = $response->Contents->response->data->content->system->jobs->state\nif($cancelled == -1)\n{\n    echo "The job has been cancelled";\n}\ncurl_close($curl);\n'
                )
              )
            ),
            (0, a.yg)(
              r.default,
              { value: "go", mdxType: "TabItem" },
              (0, a.yg)(
                "pre",
                null,
                (0, a.yg)(
                  "code",
                  { parentName: "pre", className: "language-go" },
                  "//TODO\n"
                )
              )
            )
          ),
          (0, a.yg)(
            "h3",
            { id: "getting-the-job-result" },
            "Getting the Job result"
          ),
          (0, a.yg)(
            "p",
            null,
            "Once a job is completed, it is then possible to continue with the next steps in the user's workflow.\nIn some cases, the job can suggest a next step that it is meaningful given the current completed task.",
            (0, a.yg)("br", { parentName: "p" }),
            "\n",
            "For instance, after a configuration has been imorted to the device, the next step would be assign device with configuration to the project."
          )
        );
      }
      m.isMDXComponent = !0;
    },
    51801: (e, t, n) => {
      n.r(t), n.d(t, { default: () => l });
      var a = n(31085),
        o = (n(14041), n(9546));
      const r = { tabItem: "tabItem_OMyP" };
      function l({ children: e, hidden: t, className: n }) {
        return (0, a.jsx)("div", {
          role: "tabpanel",
          className: (0, o.default)(r.tabItem, n),
          hidden: t,
          children: e,
        });
      }
    },
    99813: (e, t, n) => {
      n.d(t, { A: () => g });
      var a = n(31085),
        o = n(14041),
        r = n(9546),
        l = n(44182),
        s = n(2533),
        i = n(53537);
      const u = { tabList: "tabList_M0Dn", tabItem: "tabItem_ysIP" };
      function c({
        className: e,
        block: t,
        selectedValue: n,
        selectValue: o,
        tabValues: s,
      }) {
        const i = [],
          { blockElementScrollPositionUntilNextRender: c } = (0, l.a_)(),
          p = (e) => {
            const t = e.currentTarget,
              a = i.indexOf(t),
              r = s[a].value;
            r !== n && (c(t), o(r));
          },
          d = (e) => {
            let t = null;
            switch (e.key) {
              case "Enter":
                p(e);
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
          className: (0, r.default)("tabs", { "tabs--block": t }, e),
          children: s.map(({ value: e, label: t, attributes: o }) =>
            (0, a.jsx)(
              "li",
              {
                role: "tab",
                tabIndex: n === e ? 0 : -1,
                "aria-selected": n === e,
                ref: (e) => i.push(e),
                onKeyDown: d,
                onClick: p,
                ...o,
                className: (0, r.default)(
                  "tabs__item",
                  u.tabItem,
                  null == o ? void 0 : o.className,
                  { "tabs__item--active": n === e }
                ),
                children: null != t ? t : e,
              },
              e
            )
          ),
        });
      }
      function p({ lazy: e, children: t, selectedValue: n }) {
        const r = (Array.isArray(t) ? t : [t]).filter(Boolean);
        if (e) {
          const e = r.find((e) => e.props.value === n);
          return e
            ? (0, o.cloneElement)(e, { className: "margin-top--md" })
            : null;
        }
        return (0, a.jsx)("div", {
          className: "margin-top--md",
          children: r.map((e, t) =>
            (0, o.cloneElement)(e, { key: t, hidden: e.props.value !== n })
          ),
        });
      }
      function d(e) {
        const t = (0, s.u)(e);
        return (0, a.jsxs)("div", {
          className: (0, r.default)("tabs-container", u.tabList),
          children: [
            (0, a.jsx)(c, { ...e, ...t }),
            (0, a.jsx)(p, { ...e, ...t }),
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
        o = n(86090),
        r = n(48043),
        l = n(9032),
        s = n(44892);
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
      function u(e) {
        const { values: t, children: n } = e;
        return (0, a.useMemo)(() => {
          const e = null != t ? t : i(n);
          return (
            (function (e) {
              const t = (0, l.X)(e, (e, t) => e.value === t.value);
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
      function p({ queryString: e = !1, groupId: t }) {
        const n = (0, o.W6)(),
          l = (function ({ queryString: e = !1, groupId: t }) {
            if ("string" == typeof e) return e;
            if (!1 === e) return null;
            if (!0 === e && !t)
              throw new Error(
                'Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".'
              );
            return null != t ? t : null;
          })({ queryString: e, groupId: t });
        return [
          (0, r.aZ)(l),
          (0, a.useCallback)(
            (e) => {
              if (!l) return;
              const t = new URLSearchParams(n.location.search);
              t.set(l, e), n.replace({ ...n.location, search: t.toString() });
            },
            [l, n]
          ),
        ];
      }
      function d(e) {
        const { defaultValue: t, queryString: n = !1, groupId: o } = e,
          r = u(e),
          [l, i] = (0, a.useState)(() =>
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
            })({ defaultValue: t, tabValues: r })
          ),
          [d, g] = p({ queryString: n, groupId: o }),
          [m, b] = (function ({ groupId: e }) {
            const t = (function (e) {
                return e ? `docusaurus.tab.${e}` : null;
              })(e),
              [n, o] = (0, s.Dv)(t);
            return [
              n,
              (0, a.useCallback)(
                (e) => {
                  t && o.set(e);
                },
                [t, o]
              ),
            ];
          })({ groupId: o }),
          y = (() => {
            const e = null != d ? d : m;
            return c({ value: e, tabValues: r }) ? e : null;
          })();
        (0, a.useLayoutEffect)(() => {
          y && i(y);
        }, [y]);
        return {
          selectedValue: l,
          selectValue: (0, a.useCallback)(
            (e) => {
              if (!c({ value: e, tabValues: r }))
                throw new Error(`Can't select invalid tab value=${e}`);
              i(e), g(e), b(e);
            },
            [g, b, r]
          ),
          tabValues: r,
        };
      }
    },
  },
]);
