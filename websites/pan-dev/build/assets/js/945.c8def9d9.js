/*! For license information please see 945.c8def9d9.js.LICENSE.txt */
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [945, 714],
  {
    26058: function (e, t, r) {
      var n = r(4364);
      e.exports = (function () {
        "use strict";
        function e(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }
        function t(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function r(r) {
          for (var n = 1; n < arguments.length; n++) {
            var a = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? t(Object(a), !0).forEach(function (t) {
                  e(r, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
              : t(Object(a)).forEach(function (e) {
                  Object.defineProperty(
                    r,
                    e,
                    Object.getOwnPropertyDescriptor(a, e)
                  );
                });
          }
          return r;
        }
        function a(e, t) {
          if (null == e) return {};
          var r,
            n,
            a = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                a = {},
                o = Object.keys(e);
              for (n = 0; n < o.length; n++)
                (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
              return a;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]),
                t.indexOf(r) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (a[r] = e[r]));
          }
          return a;
        }
        function o(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              if (
                Symbol.iterator in Object(e) ||
                "[object Arguments]" === Object.prototype.toString.call(e)
              ) {
                var r = [],
                  n = !0,
                  a = !1,
                  o = void 0;
                try {
                  for (
                    var i, s = e[Symbol.iterator]();
                    !(n = (i = s.next()).done) &&
                    (r.push(i.value), !t || r.length !== t);
                    n = !0
                  );
                } catch (e) {
                  (a = !0), (o = e);
                } finally {
                  try {
                    n || null == s.return || s.return();
                  } finally {
                    if (a) throw o;
                  }
                }
                return r;
              }
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            })()
          );
        }
        function i(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, r = new Array(e.length); t < e.length; t++)
                  r[t] = e[t];
                return r;
              }
            })(e) ||
            (function (e) {
              if (
                Symbol.iterator in Object(e) ||
                "[object Arguments]" === Object.prototype.toString.call(e)
              )
                return Array.from(e);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance"
              );
            })()
          );
        }
        function s(e) {
          var t,
            r = "algoliasearch-client-js-".concat(e.key),
            n = function () {
              return (
                void 0 === t && (t = e.localStorage || window.localStorage), t
              );
            },
            a = function () {
              return JSON.parse(n().getItem(r) || "{}");
            },
            i = function (e) {
              n().setItem(r, JSON.stringify(e));
            },
            s = function () {
              var t = e.timeToLive ? 1e3 * e.timeToLive : null,
                r = a(),
                n = Object.fromEntries(
                  Object.entries(r).filter(function (e) {
                    return void 0 !== o(e, 2)[1].timestamp;
                  })
                );
              if ((i(n), t)) {
                var s = Object.fromEntries(
                  Object.entries(n).filter(function (e) {
                    var r = o(e, 2)[1],
                      n = new Date().getTime();
                    return !(r.timestamp + t < n);
                  })
                );
                i(s);
              }
            };
          return {
            get: function (e, t) {
              var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {
                      miss: function () {
                        return Promise.resolve();
                      },
                    };
              return Promise.resolve()
                .then(function () {
                  s();
                  var t = JSON.stringify(e);
                  return a()[t];
                })
                .then(function (e) {
                  return Promise.all([e ? e.value : t(), void 0 !== e]);
                })
                .then(function (e) {
                  var t = o(e, 2),
                    n = t[0],
                    a = t[1];
                  return Promise.all([n, a || r.miss(n)]);
                })
                .then(function (e) {
                  return o(e, 1)[0];
                });
            },
            set: function (e, t) {
              return Promise.resolve().then(function () {
                var o = a();
                return (
                  (o[JSON.stringify(e)] = {
                    timestamp: new Date().getTime(),
                    value: t,
                  }),
                  n().setItem(r, JSON.stringify(o)),
                  t
                );
              });
            },
            delete: function (e) {
              return Promise.resolve().then(function () {
                var t = a();
                delete t[JSON.stringify(e)], n().setItem(r, JSON.stringify(t));
              });
            },
            clear: function () {
              return Promise.resolve().then(function () {
                n().removeItem(r);
              });
            },
          };
        }
        function c(e) {
          var t = i(e.caches),
            r = t.shift();
          return void 0 === r
            ? {
                get: function (e, t) {
                  var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {
                          miss: function () {
                            return Promise.resolve();
                          },
                        };
                  return t()
                    .then(function (e) {
                      return Promise.all([e, r.miss(e)]);
                    })
                    .then(function (e) {
                      return o(e, 1)[0];
                    });
                },
                set: function (e, t) {
                  return Promise.resolve(t);
                },
                delete: function (e) {
                  return Promise.resolve();
                },
                clear: function () {
                  return Promise.resolve();
                },
              }
            : {
                get: function (e, n) {
                  var a =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {
                          miss: function () {
                            return Promise.resolve();
                          },
                        };
                  return r.get(e, n, a).catch(function () {
                    return c({ caches: t }).get(e, n, a);
                  });
                },
                set: function (e, n) {
                  return r.set(e, n).catch(function () {
                    return c({ caches: t }).set(e, n);
                  });
                },
                delete: function (e) {
                  return r.delete(e).catch(function () {
                    return c({ caches: t }).delete(e);
                  });
                },
                clear: function () {
                  return r.clear().catch(function () {
                    return c({ caches: t }).clear();
                  });
                },
              };
        }
        function u() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { serializable: !0 },
            t = {};
          return {
            get: function (r, n) {
              var a =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {
                        miss: function () {
                          return Promise.resolve();
                        },
                      },
                o = JSON.stringify(r);
              if (o in t)
                return Promise.resolve(
                  e.serializable ? JSON.parse(t[o]) : t[o]
                );
              var i = n(),
                s =
                  (a && a.miss) ||
                  function () {
                    return Promise.resolve();
                  };
              return i
                .then(function (e) {
                  return s(e);
                })
                .then(function () {
                  return i;
                });
            },
            set: function (r, n) {
              return (
                (t[JSON.stringify(r)] = e.serializable ? JSON.stringify(n) : n),
                Promise.resolve(n)
              );
            },
            delete: function (e) {
              return delete t[JSON.stringify(e)], Promise.resolve();
            },
            clear: function () {
              return (t = {}), Promise.resolve();
            },
          };
        }
        function l(e) {
          for (var t = e.length - 1; t > 0; t--) {
            var r = Math.floor(Math.random() * (t + 1)),
              n = e[t];
            (e[t] = e[r]), (e[r] = n);
          }
          return e;
        }
        function f(e, t) {
          return t
            ? (Object.keys(t).forEach(function (r) {
                e[r] = t[r](e);
              }),
              e)
            : e;
        }
        function d(e) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            r[n - 1] = arguments[n];
          var a = 0;
          return e.replace(/%s/g, function () {
            return encodeURIComponent(r[a++]);
          });
        }
        var h = { WithinQueryParameters: 0, WithinHeaders: 1 };
        function m(e, t) {
          var r = e || {},
            n = r.data || {};
          return (
            Object.keys(r).forEach(function (e) {
              -1 ===
                [
                  "timeout",
                  "headers",
                  "queryParameters",
                  "data",
                  "cacheable",
                ].indexOf(e) && (n[e] = r[e]);
            }),
            {
              data: Object.entries(n).length > 0 ? n : void 0,
              timeout: r.timeout || t,
              headers: r.headers || {},
              queryParameters: r.queryParameters || {},
              cacheable: r.cacheable,
            }
          );
        }
        var p = { Read: 1, Write: 2, Any: 3 },
          v = 1,
          g = 2,
          y = 3;
        function b(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v;
          return r(r({}, e), {}, { status: t, lastUpdate: Date.now() });
        }
        function O(e) {
          return "string" == typeof e
            ? { protocol: "https", url: e, accept: p.Any }
            : {
                protocol: e.protocol || "https",
                url: e.url,
                accept: e.accept || p.Any,
              };
        }
        var j = "GET",
          P = "POST";
        function x(e, t) {
          return Promise.all(
            t.map(function (t) {
              return e.get(t, function () {
                return Promise.resolve(b(t));
              });
            })
          ).then(function (e) {
            var r = e.filter(function (e) {
                return (function (e) {
                  return e.status === v || Date.now() - e.lastUpdate > 12e4;
                })(e);
              }),
              n = e.filter(function (e) {
                return (function (e) {
                  return e.status === y && Date.now() - e.lastUpdate <= 12e4;
                })(e);
              }),
              a = [].concat(i(r), i(n));
            return {
              getTimeout: function (e, t) {
                return (0 === n.length && 0 === e ? 1 : n.length + 3 + e) * t;
              },
              statelessHosts:
                a.length > 0
                  ? a.map(function (e) {
                      return O(e);
                    })
                  : t,
            };
          });
        }
        function w(e, t, n, a) {
          var o = [],
            s = (function (e, t) {
              if (e.method !== j && (void 0 !== e.data || void 0 !== t.data)) {
                var n = Array.isArray(e.data)
                  ? e.data
                  : r(r({}, e.data), t.data);
                return JSON.stringify(n);
              }
            })(n, a),
            c = (function (e, t) {
              var n = r(r({}, e.headers), t.headers),
                a = {};
              return (
                Object.keys(n).forEach(function (e) {
                  var t = n[e];
                  a[e.toLowerCase()] = t;
                }),
                a
              );
            })(e, a),
            u = n.method,
            l = n.method !== j ? {} : r(r({}, n.data), a.data),
            f = r(
              r(
                r({ "x-algolia-agent": e.userAgent.value }, e.queryParameters),
                l
              ),
              a.queryParameters
            ),
            d = 0,
            h = function t(r, i) {
              var l = r.pop();
              if (void 0 === l)
                throw {
                  name: "RetryError",
                  message:
                    "Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support .",
                  transporterStackTrace: T(o),
                };
              var h = {
                  data: s,
                  headers: c,
                  method: u,
                  url: q(l, n.path, f),
                  connectTimeout: i(d, e.timeouts.connect),
                  responseTimeout: i(d, a.timeout),
                },
                m = function (e) {
                  var t = {
                    request: h,
                    response: e,
                    host: l,
                    triesLeft: r.length,
                  };
                  return o.push(t), t;
                },
                p = {
                  onSuccess: function (e) {
                    return (function (e) {
                      try {
                        return JSON.parse(e.content);
                      } catch (t) {
                        throw (function (e, t) {
                          return {
                            name: "DeserializationError",
                            message: e,
                            response: t,
                          };
                        })(t.message, e);
                      }
                    })(e);
                  },
                  onRetry: function (n) {
                    var a = m(n);
                    return (
                      n.isTimedOut && d++,
                      Promise.all([
                        e.logger.info("Retryable failure", A(a)),
                        e.hostsCache.set(l, b(l, n.isTimedOut ? y : g)),
                      ]).then(function () {
                        return t(r, i);
                      })
                    );
                  },
                  onFail: function (e) {
                    throw (
                      (m(e),
                      (function (e, t) {
                        var r = e.content,
                          n = e.status,
                          a = r;
                        try {
                          a = JSON.parse(r).message;
                        } catch (e) {}
                        return (function (e, t, r) {
                          return {
                            name: "ApiError",
                            message: e,
                            status: t,
                            transporterStackTrace: r,
                          };
                        })(a, n, t);
                      })(e, T(o)))
                    );
                  },
                };
              return e.requester.send(h).then(function (e) {
                return (function (e, t) {
                  return (function (e) {
                    var t = e.status;
                    return (
                      e.isTimedOut ||
                      (function (e) {
                        var t = e.isTimedOut,
                          r = e.status;
                        return !t && !~~r;
                      })(e) ||
                      (2 != ~~(t / 100) && 4 != ~~(t / 100))
                    );
                  })(e)
                    ? t.onRetry(e)
                    : 2 == ~~(e.status / 100)
                    ? t.onSuccess(e)
                    : t.onFail(e);
                })(e, p);
              });
            };
          return x(e.hostsCache, t).then(function (e) {
            return h(i(e.statelessHosts).reverse(), e.getTimeout);
          });
        }
        function N(e) {
          var t = {
            value: "Algolia for JavaScript (".concat(e, ")"),
            add: function (e) {
              var r = "; "
                .concat(e.segment)
                .concat(
                  void 0 !== e.version ? " (".concat(e.version, ")") : ""
                );
              return (
                -1 === t.value.indexOf(r) &&
                  (t.value = "".concat(t.value).concat(r)),
                t
              );
            },
          };
          return t;
        }
        function q(e, t, r) {
          var n = S(r),
            a = ""
              .concat(e.protocol, "://")
              .concat(e.url, "/")
              .concat("/" === t.charAt(0) ? t.substr(1) : t);
          return n.length && (a += "?".concat(n)), a;
        }
        function S(e) {
          return Object.keys(e)
            .map(function (t) {
              return d(
                "%s=%s",
                t,
                ((r = e[t]),
                "[object Object]" === Object.prototype.toString.call(r) ||
                "[object Array]" === Object.prototype.toString.call(r)
                  ? JSON.stringify(e[t])
                  : e[t])
              );
              var r;
            })
            .join("&");
        }
        function T(e) {
          return e.map(function (e) {
            return A(e);
          });
        }
        function A(e) {
          var t = e.request.headers["x-algolia-api-key"]
            ? { "x-algolia-api-key": "*****" }
            : {};
          return r(
            r({}, e),
            {},
            {
              request: r(
                r({}, e.request),
                {},
                { headers: r(r({}, e.request.headers), t) }
              ),
            }
          );
        }
        var C = function (e) {
            var t = e.appId,
              n = (function (e, t, r) {
                var n = {
                  "x-algolia-api-key": r,
                  "x-algolia-application-id": t,
                };
                return {
                  headers: function () {
                    return e === h.WithinHeaders ? n : {};
                  },
                  queryParameters: function () {
                    return e === h.WithinQueryParameters ? n : {};
                  },
                };
              })(
                void 0 !== e.authMode ? e.authMode : h.WithinHeaders,
                t,
                e.apiKey
              ),
              a = (function (e) {
                var t = e.hostsCache,
                  r = e.logger,
                  n = e.requester,
                  a = e.requestsCache,
                  i = e.responsesCache,
                  s = e.timeouts,
                  c = e.userAgent,
                  u = e.hosts,
                  l = e.queryParameters,
                  f = {
                    hostsCache: t,
                    logger: r,
                    requester: n,
                    requestsCache: a,
                    responsesCache: i,
                    timeouts: s,
                    userAgent: c,
                    headers: e.headers,
                    queryParameters: l,
                    hosts: u.map(function (e) {
                      return O(e);
                    }),
                    read: function (e, t) {
                      var r = m(t, f.timeouts.read),
                        n = function () {
                          return w(
                            f,
                            f.hosts.filter(function (e) {
                              return !!(e.accept & p.Read);
                            }),
                            e,
                            r
                          );
                        };
                      if (
                        !0 !==
                        (void 0 !== r.cacheable ? r.cacheable : e.cacheable)
                      )
                        return n();
                      var a = {
                        request: e,
                        mappedRequestOptions: r,
                        transporter: {
                          queryParameters: f.queryParameters,
                          headers: f.headers,
                        },
                      };
                      return f.responsesCache.get(
                        a,
                        function () {
                          return f.requestsCache.get(a, function () {
                            return f.requestsCache
                              .set(a, n())
                              .then(
                                function (e) {
                                  return Promise.all([
                                    f.requestsCache.delete(a),
                                    e,
                                  ]);
                                },
                                function (e) {
                                  return Promise.all([
                                    f.requestsCache.delete(a),
                                    Promise.reject(e),
                                  ]);
                                }
                              )
                              .then(function (e) {
                                var t = o(e, 2);
                                return t[0], t[1];
                              });
                          });
                        },
                        {
                          miss: function (e) {
                            return f.responsesCache.set(a, e);
                          },
                        }
                      );
                    },
                    write: function (e, t) {
                      return w(
                        f,
                        f.hosts.filter(function (e) {
                          return !!(e.accept & p.Write);
                        }),
                        e,
                        m(t, f.timeouts.write)
                      );
                    },
                  };
                return f;
              })(
                r(
                  r(
                    {
                      hosts: [
                        {
                          url: "".concat(t, "-dsn.algolia.net"),
                          accept: p.Read,
                        },
                        { url: "".concat(t, ".algolia.net"), accept: p.Write },
                      ].concat(
                        l([
                          { url: "".concat(t, "-1.algolianet.com") },
                          { url: "".concat(t, "-2.algolianet.com") },
                          { url: "".concat(t, "-3.algolianet.com") },
                        ])
                      ),
                    },
                    e
                  ),
                  {},
                  {
                    headers: r(
                      r(r({}, n.headers()), {
                        "content-type": "application/x-www-form-urlencoded",
                      }),
                      e.headers
                    ),
                    queryParameters: r(
                      r({}, n.queryParameters()),
                      e.queryParameters
                    ),
                  }
                )
              );
            return f(
              {
                transporter: a,
                appId: t,
                addAlgoliaAgent: function (e, t) {
                  a.userAgent.add({ segment: e, version: t });
                },
                clearCache: function () {
                  return Promise.all([
                    a.requestsCache.clear(),
                    a.responsesCache.clear(),
                  ]).then(function () {});
                },
              },
              e.methods
            );
          },
          k = function (e) {
            return function (t, r) {
              return t.method === j
                ? e.transporter.read(t, r)
                : e.transporter.write(t, r);
            };
          },
          E = function (e) {
            return function (t) {
              var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return f(
                { transporter: e.transporter, appId: e.appId, indexName: t },
                r.methods
              );
            };
          },
          I = function (e) {
            return function (t, n) {
              var a = t.map(function (e) {
                return r(r({}, e), {}, { params: S(e.params || {}) });
              });
              return e.transporter.read(
                {
                  method: P,
                  path: "1/indexes/*/queries",
                  data: { requests: a },
                  cacheable: !0,
                },
                n
              );
            };
          },
          R = function (e) {
            return function (t, n) {
              return Promise.all(
                t.map(function (t) {
                  var o = t.params,
                    i = o.facetName,
                    s = o.facetQuery,
                    c = a(o, ["facetName", "facetQuery"]);
                  return E(e)(t.indexName, {
                    methods: { searchForFacetValues: F },
                  }).searchForFacetValues(i, s, r(r({}, n), c));
                })
              );
            };
          },
          J = function (e) {
            return function (t, r, n) {
              return e.transporter.read(
                {
                  method: P,
                  path: d("1/answers/%s/prediction", e.indexName),
                  data: { query: t, queryLanguages: r },
                  cacheable: !0,
                },
                n
              );
            };
          },
          D = function (e) {
            return function (t, r) {
              return e.transporter.read(
                {
                  method: P,
                  path: d("1/indexes/%s/query", e.indexName),
                  data: { query: t },
                  cacheable: !0,
                },
                r
              );
            };
          },
          F = function (e) {
            return function (t, r, n) {
              return e.transporter.read(
                {
                  method: P,
                  path: d("1/indexes/%s/facets/%s/query", e.indexName, t),
                  data: { facetQuery: r },
                  cacheable: !0,
                },
                n
              );
            };
          },
          W = 1,
          L = 2,
          U = 3,
          H = function (e) {
            return function (t, n) {
              var a = t.map(function (e) {
                return r(r({}, e), {}, { threshold: e.threshold || 0 });
              });
              return e.transporter.read(
                {
                  method: P,
                  path: "1/indexes/*/recommendations",
                  data: { requests: a },
                  cacheable: !0,
                },
                n
              );
            };
          };
        function Q(e, t, a) {
          var o,
            i = {
              appId: e,
              apiKey: t,
              timeouts: { connect: 1, read: 2, write: 30 },
              requester: {
                send: function (e) {
                  return new Promise(function (t) {
                    var r = new XMLHttpRequest();
                    r.open(e.method, e.url, !0),
                      Object.keys(e.headers).forEach(function (t) {
                        return r.setRequestHeader(t, e.headers[t]);
                      });
                    var n,
                      a = function (e, n) {
                        return setTimeout(function () {
                          r.abort(),
                            t({ status: 0, content: n, isTimedOut: !0 });
                        }, 1e3 * e);
                      },
                      o = a(e.connectTimeout, "Connection timeout");
                    (r.onreadystatechange = function () {
                      r.readyState > r.OPENED &&
                        void 0 === n &&
                        (clearTimeout(o),
                        (n = a(e.responseTimeout, "Socket timeout")));
                    }),
                      (r.onerror = function () {
                        0 === r.status &&
                          (clearTimeout(o),
                          clearTimeout(n),
                          t({
                            content: r.responseText || "Network request failed",
                            status: r.status,
                            isTimedOut: !1,
                          }));
                      }),
                      (r.onload = function () {
                        clearTimeout(o),
                          clearTimeout(n),
                          t({
                            content: r.responseText,
                            status: r.status,
                            isTimedOut: !1,
                          });
                      }),
                      r.send(e.data);
                  });
                },
              },
              logger:
                ((o = U),
                {
                  debug: function (e, t) {
                    return W >= o && n.debug(e, t), Promise.resolve();
                  },
                  info: function (e, t) {
                    return L >= o && n.info(e, t), Promise.resolve();
                  },
                  error: function (e, t) {
                    return n.error(e, t), Promise.resolve();
                  },
                }),
              responsesCache: u(),
              requestsCache: u({ serializable: !1 }),
              hostsCache: c({
                caches: [s({ key: "".concat("4.24.0", "-").concat(e) }), u()],
              }),
              userAgent: N("4.24.0").add({
                segment: "Browser",
                version: "lite",
              }),
              authMode: h.WithinQueryParameters,
            };
          return C(
            r(
              r(r({}, i), a),
              {},
              {
                methods: {
                  search: I,
                  searchForFacetValues: R,
                  multipleQueries: I,
                  multipleSearchForFacetValues: R,
                  customRequest: k,
                  initIndex: function (e) {
                    return function (t) {
                      return E(e)(t, {
                        methods: {
                          search: D,
                          searchForFacetValues: F,
                          findAnswers: J,
                        },
                      });
                    };
                  },
                  getRecommendations: H,
                },
              }
            )
          );
        }
        return (Q.version = "4.24.0"), Q;
      })();
    },
    27945: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => m });
      var n = r(31085),
        a = r(14041),
        o = r(28407),
        i = r(90780),
        s = r(89436),
        c = r(26058),
        u = r.n(c),
        l = r(15323),
        f = r(28512),
        d = r(11171),
        h = r(86090);
      function m() {
        const {
            siteConfig: { themeConfig: e },
          } = (0, f.default)(),
          {
            algolia: { appId: t, apiKey: r, indexName: c, externalUrlRegex: m },
          } = e,
          [p, v] = (0, a.useState)([]),
          g = (0, h.zy)().pathname.split("/").join(" "),
          y = u()(t, r).initIndex(c);
        return (
          (0, a.useEffect)(() => {
            !(async function () {
              const e = await Promise.resolve(
                y.search(g, {
                  distinct: 1,
                  hitsPerPage: 5,
                  facetFilters: [["tags:pandev"]],
                })
              );
              v(e.hits);
            })();
          }, []),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(d.be, { title: "Page Not Found" }),
              (0, n.jsx)(o.A, {
                children: (0, n.jsxs)("main", {
                  children: [
                    (0, n.jsx)("div", {
                      className: "container hero-container",
                      children: (0, n.jsx)("div", {
                        className: "hero-content-container",
                        style: { paddingBottom: "1rem" },
                        children: (0, n.jsx)("div", {
                          className: "container",
                          children: (0, n.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, n.jsx)("div", {
                                className: "col col--4",
                                children: (0, n.jsx)("img", {
                                  src: "/img/404_Page.svg",
                                  alt: "Page not found",
                                }),
                              }),
                              (0, n.jsxs)("div", {
                                className: "col col--8",
                                children: [
                                  (0, n.jsx)("h1", {
                                    className: "hero__title",
                                    children:
                                      "Sorry, we have a broken link or this URL doesn't exist.",
                                  }),
                                  (0, n.jsx)("p", {
                                    className: "hero__subtitle",
                                    children:
                                      "Our team has been notified of this error.",
                                  }),
                                  (0, n.jsxs)("h3", {
                                    className: "padding-vert--md",
                                    children: [
                                      (0, n.jsx)(i.default, {
                                        uppercase: "false",
                                        href: (0, l.A)(
                                          "/#developer-docs-section"
                                        ),
                                        children: "EXPLORE OUR DEVELOPER DOCS",
                                      }),
                                      " ",
                                      "or use our",
                                      " ",
                                      (0, n.jsx)("span", {
                                        className: "dummy-search",
                                        style: { display: "inline-block" },
                                        children: (0, n.jsx)(s.A, {}),
                                      }),
                                      " ",
                                      "to find what you're looking for.",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    p.length > 0 &&
                      (0, n.jsxs)("div", {
                        className: "padding-vert--lg padding--lg",
                        children: [
                          (0, n.jsx)("hr", {}),
                          (0, n.jsx)("div", {
                            className: "row",
                            children: (0, n.jsxs)("div", {
                              className: "col col--12 col--offset-1",
                              children: [
                                (0, n.jsxs)("h2", {
                                  children: [
                                    "We found some pages that might match what you're looking for:",
                                    " ",
                                  ],
                                }),
                                p.map((e) => {
                                  var t, r, a;
                                  return (0, n.jsx)(
                                    "div",
                                    {
                                      className: "row",
                                      children: (0, n.jsx)("div", {
                                        className: "result",
                                        children: (0, n.jsxs)("a", {
                                          href: e.url,
                                          children: [
                                            e.hierarchy.lvl0,
                                            " > ",
                                            null !==
                                              (a =
                                                null !==
                                                  (r =
                                                    null !==
                                                      (t = e.hierarchy.lvl1) &&
                                                    void 0 !== t
                                                      ? t
                                                      : e.hierarchy.lvl2) &&
                                                void 0 !== r
                                                  ? r
                                                  : e.hierarchy.lvl3) &&
                                            void 0 !== a
                                              ? a
                                              : e.hierarchy.lvl4,
                                          ],
                                        }),
                                      }),
                                    },
                                    e.objectID
                                  );
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    (0, n.jsx)("div", {
                      className: "padding-vert--lg padding--lg",
                      children: (0, n.jsx)("div", {
                        className: "row",
                        children: (0, n.jsxs)("div", {
                          className: "col col--12 col--offset-1",
                          children: [
                            (0, n.jsx)("h2", {
                              children:
                                "Still not finding what you're looking for?",
                            }),
                            (0, n.jsxs)("p", {
                              children: [
                                "Visit our",
                                " ",
                                (0, n.jsx)("a", {
                                  href: "https://docs.paloaltonetworks.com",
                                  children: "TechDocs",
                                }),
                                " site for additional API and product documentation.",
                                " ",
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
  },
]);
