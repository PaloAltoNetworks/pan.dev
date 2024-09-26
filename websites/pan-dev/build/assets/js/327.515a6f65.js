/*! For license information please see 327.515a6f65.js.LICENSE.txt */
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [327],
  {
    26058: function (e, t, n) {
      var r = n(4364);
      e.exports = (function () {
        "use strict";
        function e(e, t, n) {
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
        function t(e, t) {
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
        function n(n) {
          for (var r = 1; r < arguments.length; r++) {
            var a = null != arguments[r] ? arguments[r] : {};
            r % 2
              ? t(Object(a), !0).forEach(function (t) {
                  e(n, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
              : t(Object(a)).forEach(function (e) {
                  Object.defineProperty(
                    n,
                    e,
                    Object.getOwnPropertyDescriptor(a, e)
                  );
                });
          }
          return n;
        }
        function a(e, t) {
          if (null == e) return {};
          var n,
            r,
            a = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                a = {},
                o = Object.keys(e);
              for (r = 0; r < o.length; r++)
                (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
              return a;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]),
                t.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (a[n] = e[n]));
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
                var n = [],
                  r = !0,
                  a = !1,
                  o = void 0;
                try {
                  for (
                    var i, s = e[Symbol.iterator]();
                    !(r = (i = s.next()).done) &&
                    (n.push(i.value), !t || n.length !== t);
                    r = !0
                  );
                } catch (e) {
                  (a = !0), (o = e);
                } finally {
                  try {
                    r || null == s.return || s.return();
                  } finally {
                    if (a) throw o;
                  }
                }
                return n;
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
                for (var t = 0, n = new Array(e.length); t < e.length; t++)
                  n[t] = e[t];
                return n;
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
            n = "algoliasearch-client-js-".concat(e.key),
            r = function () {
              return (
                void 0 === t && (t = e.localStorage || window.localStorage), t
              );
            },
            a = function () {
              return JSON.parse(r().getItem(n) || "{}");
            },
            i = function (e) {
              r().setItem(n, JSON.stringify(e));
            },
            s = function () {
              var t = e.timeToLive ? 1e3 * e.timeToLive : null,
                n = a(),
                r = Object.fromEntries(
                  Object.entries(n).filter(function (e) {
                    return void 0 !== o(e, 2)[1].timestamp;
                  })
                );
              if ((i(r), t)) {
                var s = Object.fromEntries(
                  Object.entries(r).filter(function (e) {
                    var n = o(e, 2)[1],
                      r = new Date().getTime();
                    return !(n.timestamp + t < r);
                  })
                );
                i(s);
              }
            };
          return {
            get: function (e, t) {
              var n =
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
                    r = t[0],
                    a = t[1];
                  return Promise.all([r, a || n.miss(r)]);
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
                  r().setItem(n, JSON.stringify(o)),
                  t
                );
              });
            },
            delete: function (e) {
              return Promise.resolve().then(function () {
                var t = a();
                delete t[JSON.stringify(e)], r().setItem(n, JSON.stringify(t));
              });
            },
            clear: function () {
              return Promise.resolve().then(function () {
                r().removeItem(n);
              });
            },
          };
        }
        function c(e) {
          var t = i(e.caches),
            n = t.shift();
          return void 0 === n
            ? {
                get: function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {
                          miss: function () {
                            return Promise.resolve();
                          },
                        };
                  return t()
                    .then(function (e) {
                      return Promise.all([e, n.miss(e)]);
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
                get: function (e, r) {
                  var a =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {
                          miss: function () {
                            return Promise.resolve();
                          },
                        };
                  return n.get(e, r, a).catch(function () {
                    return c({ caches: t }).get(e, r, a);
                  });
                },
                set: function (e, r) {
                  return n.set(e, r).catch(function () {
                    return c({ caches: t }).set(e, r);
                  });
                },
                delete: function (e) {
                  return n.delete(e).catch(function () {
                    return c({ caches: t }).delete(e);
                  });
                },
                clear: function () {
                  return n.clear().catch(function () {
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
            get: function (n, r) {
              var a =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {
                        miss: function () {
                          return Promise.resolve();
                        },
                      },
                o = JSON.stringify(n);
              if (o in t)
                return Promise.resolve(
                  e.serializable ? JSON.parse(t[o]) : t[o]
                );
              var i = r(),
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
            set: function (n, r) {
              return (
                (t[JSON.stringify(n)] = e.serializable ? JSON.stringify(r) : r),
                Promise.resolve(r)
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
            var n = Math.floor(Math.random() * (t + 1)),
              r = e[t];
            (e[t] = e[n]), (e[n] = r);
          }
          return e;
        }
        function d(e, t) {
          return t
            ? (Object.keys(t).forEach(function (n) {
                e[n] = t[n](e);
              }),
              e)
            : e;
        }
        function m(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          var a = 0;
          return e.replace(/%s/g, function () {
            return encodeURIComponent(n[a++]);
          });
        }
        var f = { WithinQueryParameters: 0, WithinHeaders: 1 };
        function h(e, t) {
          var n = e || {},
            r = n.data || {};
          return (
            Object.keys(n).forEach(function (e) {
              -1 ===
                [
                  "timeout",
                  "headers",
                  "queryParameters",
                  "data",
                  "cacheable",
                ].indexOf(e) && (r[e] = n[e]);
            }),
            {
              data: Object.entries(r).length > 0 ? r : void 0,
              timeout: n.timeout || t,
              headers: n.headers || {},
              queryParameters: n.queryParameters || {},
              cacheable: n.cacheable,
            }
          );
        }
        var p = { Read: 1, Write: 2, Any: 3 },
          b = 1,
          v = 2,
          g = 3;
        function y(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
          return n(n({}, e), {}, { status: t, lastUpdate: Date.now() });
        }
        function x(e) {
          return "string" == typeof e
            ? { protocol: "https", url: e, accept: p.Any }
            : {
                protocol: e.protocol || "https",
                url: e.url,
                accept: e.accept || p.Any,
              };
        }
        var j = "GET",
          S = "POST";
        function C(e, t) {
          return Promise.all(
            t.map(function (t) {
              return e.get(t, function () {
                return Promise.resolve(y(t));
              });
            })
          ).then(function (e) {
            var n = e.filter(function (e) {
                return (function (e) {
                  return e.status === b || Date.now() - e.lastUpdate > 12e4;
                })(e);
              }),
              r = e.filter(function (e) {
                return (function (e) {
                  return e.status === g && Date.now() - e.lastUpdate <= 12e4;
                })(e);
              }),
              a = [].concat(i(n), i(r));
            return {
              getTimeout: function (e, t) {
                return (0 === r.length && 0 === e ? 1 : r.length + 3 + e) * t;
              },
              statelessHosts:
                a.length > 0
                  ? a.map(function (e) {
                      return x(e);
                    })
                  : t,
            };
          });
        }
        function O(e, t, r, a) {
          var o = [],
            s = (function (e, t) {
              if (e.method !== j && (void 0 !== e.data || void 0 !== t.data)) {
                var r = Array.isArray(e.data)
                  ? e.data
                  : n(n({}, e.data), t.data);
                return JSON.stringify(r);
              }
            })(r, a),
            c = (function (e, t) {
              var r = n(n({}, e.headers), t.headers),
                a = {};
              return (
                Object.keys(r).forEach(function (e) {
                  var t = r[e];
                  a[e.toLowerCase()] = t;
                }),
                a
              );
            })(e, a),
            u = r.method,
            l = r.method !== j ? {} : n(n({}, r.data), a.data),
            d = n(
              n(
                n({ "x-algolia-agent": e.userAgent.value }, e.queryParameters),
                l
              ),
              a.queryParameters
            ),
            m = 0,
            f = function t(n, i) {
              var l = n.pop();
              if (void 0 === l)
                throw {
                  name: "RetryError",
                  message:
                    "Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support .",
                  transporterStackTrace: _(o),
                };
              var f = {
                  data: s,
                  headers: c,
                  method: u,
                  url: P(l, r.path, d),
                  connectTimeout: i(m, e.timeouts.connect),
                  responseTimeout: i(m, a.timeout),
                },
                h = function (e) {
                  var t = {
                    request: f,
                    response: e,
                    host: l,
                    triesLeft: n.length,
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
                  onRetry: function (r) {
                    var a = h(r);
                    return (
                      r.isTimedOut && m++,
                      Promise.all([
                        e.logger.info("Retryable failure", k(a)),
                        e.hostsCache.set(l, y(l, r.isTimedOut ? g : v)),
                      ]).then(function () {
                        return t(n, i);
                      })
                    );
                  },
                  onFail: function (e) {
                    throw (
                      (h(e),
                      (function (e, t) {
                        var n = e.content,
                          r = e.status,
                          a = n;
                        try {
                          a = JSON.parse(n).message;
                        } catch (e) {}
                        return (function (e, t, n) {
                          return {
                            name: "ApiError",
                            message: e,
                            status: t,
                            transporterStackTrace: n,
                          };
                        })(a, r, t);
                      })(e, _(o)))
                    );
                  },
                };
              return e.requester.send(f).then(function (e) {
                return (function (e, t) {
                  return (function (e) {
                    var t = e.status;
                    return (
                      e.isTimedOut ||
                      (function (e) {
                        var t = e.isTimedOut,
                          n = e.status;
                        return !t && !~~n;
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
          return C(e.hostsCache, t).then(function (e) {
            return f(i(e.statelessHosts).reverse(), e.getTimeout);
          });
        }
        function T(e) {
          var t = {
            value: "Algolia for JavaScript (".concat(e, ")"),
            add: function (e) {
              var n = "; "
                .concat(e.segment)
                .concat(
                  void 0 !== e.version ? " (".concat(e.version, ")") : ""
                );
              return (
                -1 === t.value.indexOf(n) &&
                  (t.value = "".concat(t.value).concat(n)),
                t
              );
            },
          };
          return t;
        }
        function P(e, t, n) {
          var r = w(n),
            a = ""
              .concat(e.protocol, "://")
              .concat(e.url, "/")
              .concat("/" === t.charAt(0) ? t.substr(1) : t);
          return r.length && (a += "?".concat(r)), a;
        }
        function w(e) {
          return Object.keys(e)
            .map(function (t) {
              return m(
                "%s=%s",
                t,
                ((n = e[t]),
                "[object Object]" === Object.prototype.toString.call(n) ||
                "[object Array]" === Object.prototype.toString.call(n)
                  ? JSON.stringify(e[t])
                  : e[t])
              );
              var n;
            })
            .join("&");
        }
        function _(e) {
          return e.map(function (e) {
            return k(e);
          });
        }
        function k(e) {
          var t = e.request.headers["x-algolia-api-key"]
            ? { "x-algolia-api-key": "*****" }
            : {};
          return n(
            n({}, e),
            {},
            {
              request: n(
                n({}, e.request),
                {},
                { headers: n(n({}, e.request.headers), t) }
              ),
            }
          );
        }
        var A = function (e) {
            var t = e.appId,
              r = (function (e, t, n) {
                var r = {
                  "x-algolia-api-key": n,
                  "x-algolia-application-id": t,
                };
                return {
                  headers: function () {
                    return e === f.WithinHeaders ? r : {};
                  },
                  queryParameters: function () {
                    return e === f.WithinQueryParameters ? r : {};
                  },
                };
              })(
                void 0 !== e.authMode ? e.authMode : f.WithinHeaders,
                t,
                e.apiKey
              ),
              a = (function (e) {
                var t = e.hostsCache,
                  n = e.logger,
                  r = e.requester,
                  a = e.requestsCache,
                  i = e.responsesCache,
                  s = e.timeouts,
                  c = e.userAgent,
                  u = e.hosts,
                  l = e.queryParameters,
                  d = {
                    hostsCache: t,
                    logger: n,
                    requester: r,
                    requestsCache: a,
                    responsesCache: i,
                    timeouts: s,
                    userAgent: c,
                    headers: e.headers,
                    queryParameters: l,
                    hosts: u.map(function (e) {
                      return x(e);
                    }),
                    read: function (e, t) {
                      var n = h(t, d.timeouts.read),
                        r = function () {
                          return O(
                            d,
                            d.hosts.filter(function (e) {
                              return !!(e.accept & p.Read);
                            }),
                            e,
                            n
                          );
                        };
                      if (
                        !0 !==
                        (void 0 !== n.cacheable ? n.cacheable : e.cacheable)
                      )
                        return r();
                      var a = {
                        request: e,
                        mappedRequestOptions: n,
                        transporter: {
                          queryParameters: d.queryParameters,
                          headers: d.headers,
                        },
                      };
                      return d.responsesCache.get(
                        a,
                        function () {
                          return d.requestsCache.get(a, function () {
                            return d.requestsCache
                              .set(a, r())
                              .then(
                                function (e) {
                                  return Promise.all([
                                    d.requestsCache.delete(a),
                                    e,
                                  ]);
                                },
                                function (e) {
                                  return Promise.all([
                                    d.requestsCache.delete(a),
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
                            return d.responsesCache.set(a, e);
                          },
                        }
                      );
                    },
                    write: function (e, t) {
                      return O(
                        d,
                        d.hosts.filter(function (e) {
                          return !!(e.accept & p.Write);
                        }),
                        e,
                        h(t, d.timeouts.write)
                      );
                    },
                  };
                return d;
              })(
                n(
                  n(
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
                    headers: n(
                      n(n({}, r.headers()), {
                        "content-type": "application/x-www-form-urlencoded",
                      }),
                      e.headers
                    ),
                    queryParameters: n(
                      n({}, r.queryParameters()),
                      e.queryParameters
                    ),
                  }
                )
              );
            return d(
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
          N = function (e) {
            return function (t, n) {
              return t.method === j
                ? e.transporter.read(t, n)
                : e.transporter.write(t, n);
            };
          },
          I = function (e) {
            return function (t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return d(
                { transporter: e.transporter, appId: e.appId, indexName: t },
                n.methods
              );
            };
          },
          q = function (e) {
            return function (t, r) {
              var a = t.map(function (e) {
                return n(n({}, e), {}, { params: w(e.params || {}) });
              });
              return e.transporter.read(
                {
                  method: S,
                  path: "1/indexes/*/queries",
                  data: { requests: a },
                  cacheable: !0,
                },
                r
              );
            };
          },
          E = function (e) {
            return function (t, r) {
              return Promise.all(
                t.map(function (t) {
                  var o = t.params,
                    i = o.facetName,
                    s = o.facetQuery,
                    c = a(o, ["facetName", "facetQuery"]);
                  return I(e)(t.indexName, {
                    methods: { searchForFacetValues: L },
                  }).searchForFacetValues(i, s, n(n({}, r), c));
                })
              );
            };
          },
          B = function (e) {
            return function (t, n, r) {
              return e.transporter.read(
                {
                  method: S,
                  path: m("1/answers/%s/prediction", e.indexName),
                  data: { query: t, queryLanguages: n },
                  cacheable: !0,
                },
                r
              );
            };
          },
          M = function (e) {
            return function (t, n) {
              return e.transporter.read(
                {
                  method: S,
                  path: m("1/indexes/%s/query", e.indexName),
                  data: { query: t },
                  cacheable: !0,
                },
                n
              );
            };
          },
          L = function (e) {
            return function (t, n, r) {
              return e.transporter.read(
                {
                  method: S,
                  path: m("1/indexes/%s/facets/%s/query", e.indexName, t),
                  data: { facetQuery: n },
                  cacheable: !0,
                },
                r
              );
            };
          },
          H = 1,
          D = 2,
          R = 3,
          W = function (e) {
            return function (t, r) {
              var a = t.map(function (e) {
                return n(n({}, e), {}, { threshold: e.threshold || 0 });
              });
              return e.transporter.read(
                {
                  method: S,
                  path: "1/indexes/*/recommendations",
                  data: { requests: a },
                  cacheable: !0,
                },
                r
              );
            };
          };
        function F(e, t, a) {
          var o,
            i = {
              appId: e,
              apiKey: t,
              timeouts: { connect: 1, read: 2, write: 30 },
              requester: {
                send: function (e) {
                  return new Promise(function (t) {
                    var n = new XMLHttpRequest();
                    n.open(e.method, e.url, !0),
                      Object.keys(e.headers).forEach(function (t) {
                        return n.setRequestHeader(t, e.headers[t]);
                      });
                    var r,
                      a = function (e, r) {
                        return setTimeout(function () {
                          n.abort(),
                            t({ status: 0, content: r, isTimedOut: !0 });
                        }, 1e3 * e);
                      },
                      o = a(e.connectTimeout, "Connection timeout");
                    (n.onreadystatechange = function () {
                      n.readyState > n.OPENED &&
                        void 0 === r &&
                        (clearTimeout(o),
                        (r = a(e.responseTimeout, "Socket timeout")));
                    }),
                      (n.onerror = function () {
                        0 === n.status &&
                          (clearTimeout(o),
                          clearTimeout(r),
                          t({
                            content: n.responseText || "Network request failed",
                            status: n.status,
                            isTimedOut: !1,
                          }));
                      }),
                      (n.onload = function () {
                        clearTimeout(o),
                          clearTimeout(r),
                          t({
                            content: n.responseText,
                            status: n.status,
                            isTimedOut: !1,
                          });
                      }),
                      n.send(e.data);
                  });
                },
              },
              logger:
                ((o = R),
                {
                  debug: function (e, t) {
                    return H >= o && r.debug(e, t), Promise.resolve();
                  },
                  info: function (e, t) {
                    return D >= o && r.info(e, t), Promise.resolve();
                  },
                  error: function (e, t) {
                    return r.error(e, t), Promise.resolve();
                  },
                }),
              responsesCache: u(),
              requestsCache: u({ serializable: !1 }),
              hostsCache: c({
                caches: [s({ key: "".concat("4.24.0", "-").concat(e) }), u()],
              }),
              userAgent: T("4.24.0").add({
                segment: "Browser",
                version: "lite",
              }),
              authMode: f.WithinQueryParameters,
            };
          return A(
            n(
              n(n({}, i), a),
              {},
              {
                methods: {
                  search: q,
                  searchForFacetValues: E,
                  multipleQueries: q,
                  multipleSearchForFacetValues: E,
                  customRequest: N,
                  initIndex: function (e) {
                    return function (t) {
                      return I(e)(t, {
                        methods: {
                          search: M,
                          searchForFacetValues: L,
                          findAnswers: B,
                        },
                      });
                    };
                  },
                  getRecommendations: W,
                },
              }
            )
          );
        }
        return (F.version = "4.24.0"), F;
      })();
    },
    36166: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => u });
      var r = n(31085),
        a = (n(14041), n(9546)),
        o = n(69120),
        i = n(28637),
        s = n(53466);
      const c = {
        backToTopButton: "backToTopButton_z1FD",
        backToTopButtonShow: "backToTopButtonShow_w1wE",
      };
      function u() {
        const { shown: e, scrollToTop: t } = (0, s.H)({ threshold: 300 });
        return (0, r.jsx)("button", {
          "aria-label": (0, o.T)({
            id: "theme.BackToTopButton.buttonAriaLabel",
            message: "Scroll back to top",
            description: "The ARIA label for the back to top button",
          }),
          className: (0, a.default)(
            "clean-btn",
            i.G.common.backToTopButton,
            c.backToTopButton,
            e && c.backToTopButtonShow
          ),
          type: "button",
          onClick: t,
        });
      }
    },
    9788: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => be });
      var r = n(31085),
        a = n(14041),
        o = n(9546),
        i = n(11171),
        s = n(28637),
        c = n(50089),
        u = n(23552),
        l = n(87910),
        d = n(84582),
        m = n(28407),
        f = n(36166),
        h = n(81755),
        p = n(86090),
        b = n(8391),
        v = n(26412),
        g = n(91539),
        y = n(69120);
      function x(e) {
        return (0, r.jsx)("svg", {
          width: "20",
          height: "20",
          "aria-hidden": "true",
          ...e,
          children: (0, r.jsxs)("g", {
            fill: "#7a7a7a",
            children: [
              (0, r.jsx)("path", {
                d: "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0",
              }),
              (0, r.jsx)("path", {
                d: "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0",
              }),
            ],
          }),
        });
      }
      const j = "collapseSidebarButton_Ftvb",
        S = "collapseSidebarButtonIcon_c4WT";
      function C({ onClick: e }) {
        return (0, r.jsx)("button", {
          type: "button",
          title: (0, y.T)({
            id: "theme.docs.sidebar.collapseButtonTitle",
            message: "Collapse sidebar",
            description:
              "The title attribute for collapse button of doc sidebar",
          }),
          "aria-label": (0, y.T)({
            id: "theme.docs.sidebar.collapseButtonAriaLabel",
            message: "Collapse sidebar",
            description:
              "The title attribute for collapse button of doc sidebar",
          }),
          className: (0, o.default)(
            "button button--secondary button--outline",
            j
          ),
          onClick: e,
          children: (0, r.jsx)(x, { className: S }),
        });
      }
      var O = n(33403),
        T = n(44182),
        P = n(47143),
        w = n(4390),
        _ = n(23640),
        k = n(60915),
        A = n(90780),
        N = n(53537);
      function I({ categoryLabel: e, onClick: t }) {
        return (0, r.jsx)("button", {
          "aria-label": (0, y.T)(
            {
              id: "theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",
              message: "Toggle the collapsible sidebar category '{label}'",
              description:
                "The ARIA label to toggle the collapsible sidebar category",
            },
            { label: e }
          ),
          type: "button",
          className: "clean-btn menu__caret",
          onClick: t,
        });
      }
      function q({
        item: e,
        onItemClick: t,
        activePath: n,
        level: i,
        index: c,
        ...l
      }) {
        const { items: d, label: m, collapsible: f, className: h, href: p } = e,
          {
            docs: {
              sidebar: { autoCollapseCategories: b },
            },
          } = (0, v.p)(),
          g = (function (e) {
            const t = (0, N.default)();
            return (0, a.useMemo)(
              () =>
                e.href ? e.href : !t && e.collapsible ? (0, u._o)(e) : void 0,
              [e, t]
            );
          })(e),
          y = (0, u.w8)(e, n),
          x = (0, k.ys)(p, n),
          { collapsed: j, setCollapsed: S } = (0, _.u)({
            initialState: () => !!f && !y && e.collapsed,
          }),
          { expandedItem: C, setExpandedItem: O } = (0, P.G)(),
          T = (e = !j) => {
            O(e ? null : c), S(e);
          };
        return (
          (function ({ isActive: e, collapsed: t, updateCollapsed: n }) {
            const r = (0, w.ZC)(e);
            (0, a.useEffect)(() => {
              e && !r && t && n(!1);
            }, [e, r, t, n]);
          })({ isActive: y, collapsed: j, updateCollapsed: T }),
          (0, a.useEffect)(() => {
            f && null != C && C !== c && b && S(!0);
          }, [f, C, c, S, b]),
          (0, r.jsxs)("li", {
            className: (0, o.default)(
              s.G.docs.docSidebarItemCategory,
              s.G.docs.docSidebarItemCategoryLevel(i),
              "menu__list-item",
              { "menu__list-item--collapsed": j },
              h
            ),
            children: [
              (0, r.jsxs)("div", {
                className: (0, o.default)("menu__list-item-collapsible", {
                  "menu__list-item-collapsible--active": x,
                }),
                children: [
                  (0, r.jsx)(A.default, {
                    className: (0, o.default)("menu__link", {
                      "menu__link--sublist": f,
                      "menu__link--sublist-caret": !p && f,
                      "menu__link--active": y,
                    }),
                    onClick: f
                      ? (n) => {
                          null == t || t(e),
                            p ? T(!1) : (n.preventDefault(), T());
                        }
                      : () => {
                          null == t || t(e);
                        },
                    "aria-current": x ? "page" : void 0,
                    "aria-expanded": f ? !j : void 0,
                    href: f ? (null != g ? g : "#") : g,
                    ...l,
                    children: m,
                  }),
                  p &&
                    f &&
                    (0, r.jsx)(I, {
                      categoryLabel: m,
                      onClick: (e) => {
                        e.preventDefault(), T();
                      },
                    }),
                ],
              }),
              (0, r.jsx)(_.N, {
                lazy: !0,
                as: "ul",
                className: "menu__list",
                collapsed: j,
                children: (0, r.jsx)(F, {
                  items: d,
                  tabIndex: j ? -1 : 0,
                  onItemClick: t,
                  activePath: n,
                  level: i + 1,
                }),
              }),
            ],
          })
        );
      }
      var E = n(72032),
        B = n(41106);
      const M = "menuExternalLink_xK2O";
      function L({
        item: e,
        onItemClick: t,
        activePath: n,
        level: a,
        index: i,
        ...c
      }) {
        const { href: l, label: d, className: m, autoAddBaseUrl: f } = e,
          h = (0, u.w8)(e, n),
          p = (0, E.A)(l);
        return (0, r.jsx)(
          "li",
          {
            className: (0, o.default)(
              s.G.docs.docSidebarItemLink,
              s.G.docs.docSidebarItemLinkLevel(a),
              "menu__list-item",
              m
            ),
            children: (0, r.jsxs)(A.default, {
              className: (0, o.default)("menu__link", !p && M, {
                "menu__link--active": h,
              }),
              autoAddBaseUrl: f,
              "aria-current": h ? "page" : void 0,
              to: l,
              ...(p && { onClick: t ? () => t(e) : void 0 }),
              ...c,
              children: [d, !p && (0, r.jsx)(B.A, {})],
            }),
          },
          d
        );
      }
      const H = "menuHtmlItem_anEq";
      function D({ item: e, level: t, index: n }) {
        const { value: a, defaultStyle: i, className: c } = e;
        return (0, r.jsx)(
          "li",
          {
            className: (0, o.default)(
              s.G.docs.docSidebarItemLink,
              s.G.docs.docSidebarItemLinkLevel(t),
              i && [H, "menu__list-item"],
              c
            ),
            dangerouslySetInnerHTML: { __html: a },
          },
          n
        );
      }
      function R({ item: e, ...t }) {
        switch (e.type) {
          case "category":
            return (0, r.jsx)(q, { item: e, ...t });
          case "html":
            return (0, r.jsx)(D, { item: e, ...t });
          default:
            return (0, r.jsx)(L, { item: e, ...t });
        }
      }
      function W({ items: e, ...t }) {
        return (0, r.jsx)(P.A, {
          children: e.map((e, n) =>
            (0, r.jsx)(R, { item: e, index: n, ...t }, n)
          ),
        });
      }
      const F = (0, a.memo)(W),
        J = "menu_qiME",
        G = "menuWithAnnouncementBar_hRfJ";
      function z({ path: e, sidebar: t, className: n }) {
        const i = (function () {
          const { isActive: e } = (0, O.Mj)(),
            [t, n] = (0, a.useState)(e);
          return (
            (0, T.Mq)(
              ({ scrollY: t }) => {
                e && n(0 === t);
              },
              [e]
            ),
            e && t
          );
        })();
        return (0, r.jsx)("nav", {
          "aria-label": (0, y.T)({
            id: "theme.docs.sidebar.navAriaLabel",
            message: "Docs sidebar",
            description: "The ARIA label for the sidebar navigation",
          }),
          className: (0, o.default)("menu thin-scrollbar", J, i && G, n),
          children: (0, r.jsx)("ul", {
            className: (0, o.default)(s.G.docs.docSidebarMenu, "menu__list"),
            children: (0, r.jsx)(F, { items: t, activePath: e, level: 1 }),
          }),
        });
      }
      const V = "sidebar_vJCc",
        U = "sidebarWithHideableNavbar_Fo4g",
        Q = "sidebarHidden_vBKa",
        K = "sidebarLogo_nlll";
      function X({ path: e, sidebar: t, onCollapse: n, isHidden: a }) {
        const {
          navbar: { hideOnScroll: i },
          docs: {
            sidebar: { hideable: s },
          },
        } = (0, v.p)();
        return (0, r.jsxs)("div", {
          className: (0, o.default)(V, i && U, a && Q),
          children: [
            i && (0, r.jsx)(g.A, { tabIndex: -1, className: K }),
            (0, r.jsx)(z, { path: e, sidebar: t }),
            s && (0, r.jsx)(C, { onClick: n }),
          ],
        });
      }
      const Y = a.memo(X);
      var Z = n(56006),
        $ = n(37579);
      const ee = ({ sidebar: e, path: t }) => {
        const n = (0, $.M)();
        return (0, r.jsx)("ul", {
          className: (0, o.default)(s.G.docs.docSidebarMenu, "menu__list"),
          children: (0, r.jsx)(F, {
            items: e,
            activePath: t,
            onItemClick: (e) => {
              "category" === e.type && e.href && n.toggle(),
                "link" === e.type && n.toggle();
            },
            level: 1,
          }),
        });
      };
      function te(e) {
        return (0, r.jsx)(Z.GX, { component: ee, props: e });
      }
      const ne = a.memo(te);
      function re(e) {
        const t = (0, b.l)(),
          n = "desktop" === t || "ssr" === t,
          a = "mobile" === t;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            n && (0, r.jsx)(Y, { ...e }),
            a && (0, r.jsx)(ne, { ...e }),
          ],
        });
      }
      const ae = {
        expandButton: "expandButton_qIqc",
        expandButtonIcon: "expandButtonIcon_aOpf",
      };
      function oe({ toggleSidebar: e }) {
        return (0, r.jsx)("div", {
          className: ae.expandButton,
          title: (0, y.T)({
            id: "theme.docs.sidebar.expandButtonTitle",
            message: "Expand sidebar",
            description:
              "The ARIA label and title attribute for expand button of doc sidebar",
          }),
          "aria-label": (0, y.T)({
            id: "theme.docs.sidebar.expandButtonAriaLabel",
            message: "Expand sidebar",
            description:
              "The ARIA label and title attribute for expand button of doc sidebar",
          }),
          tabIndex: 0,
          role: "button",
          onKeyDown: e,
          onClick: e,
          children: (0, r.jsx)(x, { className: ae.expandButtonIcon }),
        });
      }
      const ie = {
        docSidebarContainer: "docSidebarContainer_aIKW",
        docSidebarContainerHidden: "docSidebarContainerHidden_UIq3",
        sidebarViewport: "sidebarViewport_DwR9",
      };
      function se({ children: e }) {
        const t = (0, d.t)();
        var n;
        return (0, r.jsx)(
          a.Fragment,
          { children: e },
          null !== (n = null == t ? void 0 : t.name) && void 0 !== n
            ? n
            : "noSidebar"
        );
      }
      function ce({
        sidebar: e,
        hiddenSidebarContainer: t,
        setHiddenSidebarContainer: n,
      }) {
        const { pathname: i } = (0, p.zy)(),
          [c, u] = (0, a.useState)(!1),
          l = (0, a.useCallback)(() => {
            c && u(!1), !c && (0, h.O)() && u(!0), n((e) => !e);
          }, [n, c]);
        return (0, r.jsx)("aside", {
          className: (0, o.default)(
            s.G.docs.docSidebarContainer,
            ie.docSidebarContainer,
            t && ie.docSidebarContainerHidden
          ),
          onTransitionEnd: (e) => {
            e.currentTarget.classList.contains(ie.docSidebarContainer) &&
              t &&
              u(!0);
          },
          children: (0, r.jsx)(se, {
            children: (0, r.jsxs)("div", {
              className: (0, o.default)(
                ie.sidebarViewport,
                c && ie.sidebarViewportHidden
              ),
              children: [
                (0, r.jsx)(re, {
                  sidebar: e,
                  path: i,
                  onCollapse: l,
                  isHidden: c,
                }),
                c && (0, r.jsx)(oe, { toggleSidebar: l }),
              ],
            }),
          }),
        });
      }
      const ue = {
        docMainContainer: "docMainContainer_fv3b",
        docMainContainerEnhanced: "docMainContainerEnhanced_wOQt",
        docItemWrapperEnhanced: "docItemWrapperEnhanced_DUiu",
      };
      function le({ hiddenSidebarContainer: e, children: t }) {
        const n = (0, d.t)();
        return (0, r.jsx)("main", {
          className: (0, o.default)(
            ue.docMainContainer,
            (e || !n) && ue.docMainContainerEnhanced
          ),
          children: (0, r.jsx)("div", {
            className: (0, o.default)(
              "container padding-top--md padding-bottom--lg",
              ue.docItemWrapper,
              e && ue.docItemWrapperEnhanced
            ),
            children: t,
          }),
        });
      }
      const de = {
        docPage: "docPage_pOTq",
        docsWrapper: "docsWrapper_BqXd",
        "themedComponent--light": "themedComponent--light_HcOG",
      };
      function me({ children: e }) {
        const t = (0, d.t)(),
          [n, o] = (0, a.useState)(!1);
        return (0, r.jsxs)(m.A, {
          wrapperClassName: de.docsWrapper,
          children: [
            (0, r.jsx)(f.A, {}),
            (0, r.jsxs)("div", {
              className: de.docPage,
              children: [
                t &&
                  (0, r.jsx)(ce, {
                    sidebar: t.items,
                    hiddenSidebarContainer: n,
                    setHiddenSidebarContainer: o,
                  }),
                (0, r.jsx)(le, { hiddenSidebarContainer: n, children: e }),
              ],
            }),
          ],
        });
      }
      var fe = n(27945),
        he = n(31225);
      function pe(e) {
        const { versionMetadata: t } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(he.A, {
              version: t.version,
              tag: (0, c.tU)(t.pluginId, t.version),
            }),
            (0, r.jsx)(i.be, {
              children:
                t.noIndex &&
                (0, r.jsx)("meta", {
                  name: "robots",
                  content: "noindex, nofollow",
                }),
            }),
          ],
        });
      }
      function be(e) {
        const { versionMetadata: t } = e,
          n = (0, u.mz)(e);
        if (!n) return (0, r.jsx)(fe.default, {});
        const { docElement: a, sidebarName: c, sidebarItems: m } = n;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(pe, { ...e }),
            (0, r.jsx)(i.e3, {
              className: (0, o.default)(
                s.G.wrapper.docsPages,
                s.G.page.docsDocPage,
                e.versionMetadata.className
              ),
              children: (0, r.jsx)(l.n, {
                version: t,
                children: (0, r.jsx)(d.V, {
                  name: c,
                  items: m,
                  children: (0, r.jsx)(me, { children: a }),
                }),
              }),
            }),
          ],
        });
      }
    },
    47143: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => c, G: () => u });
      var r = n(31085),
        a = n(14041),
        o = n(4390);
      const i = Symbol("EmptyContext"),
        s = a.createContext(i);
      function c({ children: e }) {
        const [t, n] = (0, a.useState)(null),
          o = (0, a.useMemo)(
            () => ({ expandedItem: t, setExpandedItem: n }),
            [t]
          );
        return (0, r.jsx)(s.Provider, { value: o, children: e });
      }
      function u() {
        const e = (0, a.useContext)(s);
        if (e === i) throw new o.dV("DocSidebarItemsExpandedStateProvider");
        return e;
      }
    },
    53466: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => i });
      var r = n(14041),
        a = n(44182),
        o = n(76232);
      function i({ threshold: e }) {
        const [t, n] = (0, r.useState)(!1),
          i = (0, r.useRef)(!1),
          { startScroll: s, cancelScroll: c } = (0, a.gk)();
        return (
          (0, a.Mq)(({ scrollY: t }, r) => {
            const a = null == r ? void 0 : r.scrollY;
            a &&
              (i.current
                ? (i.current = !1)
                : t >= a
                ? (c(), n(!1))
                : t < e
                ? n(!1)
                : t + window.innerHeight <
                    document.documentElement.scrollHeight && n(!0));
          }),
          (0, o.$)((e) => {
            e.location.hash && ((i.current = !0), n(!1));
          }),
          { shown: t, scrollToTop: () => s(0) }
        );
      }
    },
  },
]);
