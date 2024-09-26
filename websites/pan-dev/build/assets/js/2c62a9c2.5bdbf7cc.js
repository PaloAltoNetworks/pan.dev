"use strict";
(self.webpackChunkpan_dev = self.webpackChunkpan_dev || []).push([
  [179],
  {
    76607: (e, r, s) => {
      s.r(r), s.d(r, { default: () => m });
      var t = s(31085),
        a = (s(14041), s(28407));
      const i = {
          title: "Software Firewall Automation HUB",
          description:
            "Palo Alto Networks as Code, deploy, configure, and orchestrate hybrid-cloud security with Terraform",
        },
        l = {
          anchorLink: "#providers-container",
          product: "terraform",
          header: (0, t.jsx)("h1", {
            children:
              "Deploy and manage Software Firewalls with familiar cloud automation tools taking an infrastructure-as-code approach",
          }),
          subheader: (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)("p", {
              children: [
                "Leverage validated ",
                (0, t.jsx)("span", { children: "reference architectures" }),
                " and Terraform modules for easy and successful deployment of your Software Firewalls, or use pre-built ",
                (0, t.jsx)("span", { children: "code modules" }),
                " to easily deploy a software NGFW in custom cloud architectures.",
              ],
            }),
          }),
        },
        o = [
          {
            title: "AWS",
            subtitle: "VM-Series virtual firewalls and Cloud NGFW for AWS",
            link: "/terraform/docs/swfw/aws/vmseries/overview/",
            text: "Deploy and configure VM-Series Virtual Next-Generation Firewalls or Cloud NGFW for AWS as code on the AWS Application Platform using the Terraform examples and modules that help you realize the Palo Alto Networks validated reference architectures.",
          },
          {
            title: "Azure",
            subtitle: "VM-Series virtual firewalls and Cloud NGFW for Azure",
            link: "/terraform/docs/swfw/azure/vmseries/overview/",
            text: "Deploy and configure VM-Series Virtual Next-Generation Firewalls or Cloud NGFW for Azure as code on Microsoft Azure Cloud Computing Services using the Terraform examples and modules that help you realize the Palo Alto Networks validated reference architectures.",
          },
          {
            title: "GCP",
            subtitle: "VM-Series virtual firewalls for Google Cloud",
            link: "/terraform/docs/swfw/gcp/vmseries/overview/",
            text: "Deploy and configure VM-Series Virtual Next-Generation Firewalls as code on the Google Cloud Platform using the Terraform examples and modules that help you realize the Palo Alto Networks validated reference architectures.",
          },
        ],
        n = [
          {
            title: (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("span", {
                  className: "highlight",
                  children: "Deploy",
                }),
                " VM-Series virtual firewalls",
              ],
            }),
            subtitle:
              "Terraform modules to deploy a custom secure architecture",
            links: [
              {
                text: "Modules for AWS",
                url: "/terraform/docs/swfw/aws/vmseries/modules/",
              },
              {
                text: "Modules for Azure",
                url: "/terraform/docs/swfw/azure/vmseries/modules/",
              },
              {
                text: "Modules for GCP",
                url: "/terraform/docs/swfw/gcp/vmseries/modules/",
              },
            ],
          },
          {
            title: (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("span", {
                  className: "highlight",
                  children: "Configure",
                }),
                " VM-Series virtual firewalls",
              ],
            }),
            subtitle: "Leverage Terraform to declare firewall policy",
            links: [
              { text: "Provider for PAN-OS", url: "/terraform/docs/panos/" },
            ],
          },
          {
            title: (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("span", {
                  className: "highlight",
                  children: "Managed",
                }),
                " Cloud Firewalls",
              ],
            }),
            subtitle: "NGFW as a managed service by Palo Alto Networks",
            links: [
              {
                text: "Provider for CloudNGFW for AWS",
                url: "/terraform/docs/cloudngfw/",
              },
            ],
          },
          {
            title: (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("span", {
                  className: "highlight",
                  children: "Learn",
                }),
                " More",
              ],
            }),
            subtitle: "Find out more ways to automate security",
            links: [
              { text: "Palo Alto Networks and Terraform", url: "/terraform/" },
              { text: "Terraform for PAN-OS", url: "/terraform/docs/panos/" },
              { text: "Ansible and Palo Alto Networks", url: "/ansible/" },
              { text: "Ansible for PAN-OS", url: "/ansible/docs/panos/" },
              { text: "APIs and SDKs for PAN-OS", url: "/panos/docs/" },
            ],
          },
        ];
      var c = s(90780);
      const d = function ({ title: e, subtitle: r, text: s, link: a }) {
        const i = e.toLowerCase().replace(" ", "-");
        return (0, t.jsxs)("div", {
          className: "cloud-card",
          children: [
            (0, t.jsxs)("div", {
              className: "cloud-card__inner-header",
              children: [
                (0, t.jsx)("div", {
                  className: "cloud-card__inner-header-logo",
                  children: (0, t.jsx)("img", {
                    src: `/product-logos/${i}-logo.png`,
                    alt: i,
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "cloud-card__inner-header-title",
                  children: [
                    (0, t.jsx)("h1", { children: e }),
                    (0, t.jsx)("h2", { children: r }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "cloud-card__inner-context",
              children: (0, t.jsx)("p", { children: s }),
            }),
            (0, t.jsx)("div", {
              className: "cloud-card__inner-footer",
              children: (0, t.jsxs)(c.default, {
                to: a,
                className: "tab-item__link",
                children: [
                  (0, t.jsx)("span", { children: "Learn More" }),
                  (0, t.jsx)("img", {
                    src: "/img/icons/arrow-forward.svg",
                    alt: "Forward arrow icon",
                  }),
                ],
              }),
            }),
          ],
        });
      };
      const u = function ({ title: e, subtitle: r, links: s }) {
        return (0, t.jsxs)("div", {
          className: "link-list",
          children: [
            (0, t.jsx)("h1", { children: e }),
            (0, t.jsx)("h2", { children: r }),
            (0, t.jsx)("ul", {
              children: s.map(({ text: e, url: r }) =>
                (0, t.jsx)(
                  c.default,
                  { to: r, children: (0, t.jsx)("li", { children: e }) },
                  r
                )
              ),
            }),
          ],
        });
      };
      function h() {
        return (0, t.jsxs)("div", {
          className: "banner-cert-expire",
          children: [
            (0, t.jsxs)("h4", {
              children: [
                (0, t.jsx)("div", {
                  className: "banner-cert-expire__line1",
                  children: "Emergency Update Required",
                }),
                (0, t.jsx)("div", {
                  className: "banner-cert-expire__line2",
                  children: "PAN-OS Root Certificate Expiration",
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "view-advisory-link",
              children: (0, t.jsxs)(c.default, {
                to: "https://live.paloaltonetworks.com/t5/customer-advisories/emergency-update-required-pan-os-root-and-default-certificate/ta-p/564672",
                className: "tab-item__link",
                children: [
                  (0, t.jsx)("span", { children: "View Advisory" }),
                  (0, t.jsx)("img", {
                    src: "/img/icons/arrow-forward.svg",
                    alt: "Forward arrow icon",
                    height: "15",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function m() {
        return (0, t.jsxs)(a.A, {
          description: i.description,
          title: i.title,
          wrapperClassName: "swfw-landing-page",
          children: [
            (0, t.jsx)(h, {}),
            (0, t.jsxs)("div", {
              className: "swfw-landing-page__container",
              children: [
                (0, t.jsx)("section", {
                  className: "product-hero-container swfw swfw-hero-container",
                  children: (0, t.jsxs)("div", {
                    className: "product-hero__inner-content swfw",
                    children: [
                      (0, t.jsx)("div", {
                        className: "product-hero__inner-left swfw",
                        children: (0, t.jsxs)("header", {
                          className: "inner-left__header",
                          children: [l.header, l.subheader],
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "product-hero__inner-right swfw",
                        children: (0, t.jsx)("img", {
                          src: "/swfw/landing-image.png",
                          alt: "SWFW with Terraform",
                          width: 550,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)("section", {
                  className: "clouds-container",
                  children: o.map((e) =>
                    (0, t.jsx)(
                      d,
                      {
                        title: e.title,
                        subtitle: e.subtitle,
                        link: e.link,
                        text: e.text,
                      },
                      e.title
                    )
                  ),
                }),
                (0, t.jsx)("section", {
                  className: "swfw-landing-page__content",
                  children: (0, t.jsx)("div", {
                    className: "container swfw-container",
                    children: n.map((e) =>
                      (0, t.jsx)(
                        u,
                        {
                          title: e.title,
                          subtitle: e.subtitle,
                          links: e.links,
                        },
                        e.title
                      )
                    ),
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
