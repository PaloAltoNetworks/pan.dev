const globby = require("globby");
const yaml = require("js-yaml");
const fs = require("fs");
// Use the following to frontload docs
var docs = [
  "api/prisma-access-config/config-api",
];
// Change these variables to match your doc path
const relativePath = "api/prisma-access-config";
const absolutePath = "/sase/api/prisma-access-config";

const sidebarDictionary = {
  AuthenticationRules: "Identity Services",
  AuthenticationPortals: "Identity Services",
  AuthenticationProfiles: "Identity Services",
  AuthenticationSequences: "Identity Services",
  MFAServers: "Identity Services",
  SAMLServerProfiles: "Identity Services",
  LDAPServerProfiles: "Identity Services",
  RadiusServerProfiles: "Identity Services",
  TACACSServerProfiles: "Identity Services",
  KerberosServerProfiles: "Identity Services",
  LocalUsers: "Identity Services",
  Certificates: "Certificate Management",
  CertificateProfiles: "Certificate Management",
  OCSPResponder: "Certificate Management",
  SCEPProfiles: "Certificate Management",
  TLSServiceProfiles: "Certificate Management",
  TrustedCertificateAuthorities: "Certificate Management",
  LoadConfig: "Configuration Management",
  Jobs: "Configuration Management",
  Snapshots: "Configuration Management",
  ConfigurationManagement: "Configuration Management",
  AddressGroups: "Policy Objects",
  Addresses: "Policy Objects",
  ApplicationFilters: "Policy Objects",
  ApplicationGroups: "Policy Objects",
  ApplicationOverrideRules: "Policy Objects",
  Applications: "Policy Objects",
  AutoTagActions: "Policy Objects",
  DynamicUserGroups: "Policy Objects",
  ExternalDynamicLists: "Policy Objects",
  HIPObjects: "Policy Objects",
  HIPProfiles: "Policy Objects",
  QuarantinedDevices: "Policy Objects",
  Regions: "Policy Objects",
  ServiceGroups: "Policy Objects",
  Services: "Policy Objects",
  Schedules: "Policy Objects",
  Tags: "Policy Objects",
  URLCategories: "Policy Objects",
  URLFilteringCategories: "Policy Objects",
  BandwidthAllocations: "Service Setup",
  IKECryptoProfiles: "Service Setup",
  IKEGateways: "Service Setup",
  IPSecCryptoProfiles: "Service Setup",
  IPSecTunnels: "Service Setup",
  LicenseTypes: "Service Setup",
  Locations: "Service Setup",
  QoSProfiles: "Service Setup",
  QoSPolicyRules: "Service Setup",
  RemoteNetworks: "Service Setup",
  InfrastructureSettings: "Service Setup",
  InternalDNSServers: "Service Setup",  
  ServiceConnections: "Service Setup",  
  TrafficSteering: "Service Setup",  
  AntiSpywareProfiles: "Security Services",
  DecryptionExclusions: "Security Services",
  DecryptionProfiles: "Security Services",
  DecryptionRules: "Security Services",
  DNSSecurityProfiles: "Security Services",
  FileBlockingProfiles: "Security Services",
  HTTPHeaderProfiles: "Security Services",
  ProfileGroups: "Security Services",
  SecurityRules: "Security Services",
  AntiSpywareProfiles: "Security Services",
  AntiSpywareSignatures: "Security Services",
  URLAccessProfiles: "Security Services",
  VulnerabilityProtectionProfiles: "Security Services",
  VulnerabilityProtectionSignatures: "Security Services",
  WildFireAntivirusProfiles: "Security Services",
};

var categoryItems = {
  "Certificate Management": [],
  "Configuration Management": [],
  "Identity Services": [],
  "Policy Objects": [],
  "Service Setup": [],
  "Security Services": [],
};

function genEndpoints() {
  var sidebarCategories = [];
  for (categories in categoryItems) {
    var cat = {
      type: "category",
      label: categories,
      items: [],
    };
    sidebarCategories.push(cat);
  }
  // Absolute path from project root
  specs = globby.sync(["./static/sase/spec/prisma-access-config/*.yaml"], {
    absolute: false,
    objectMode: true,
    deep: 1,
    onlyDirectories: false,
  });
  specs.map((spec) => {
    const specContents = fs.readFileSync(spec.path, "utf8");
    const data = yaml.load(specContents);
    const specSplit = spec.path.split("/");
    const categoryLabel = specSplit[specSplit.length - 1].replace(".yaml", "");
    const parentCategory = sidebarDictionary[categoryLabel];
    const docId = categoryLabel
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();
    const linkId = `${relativePath}/${docId}`;
    const paths = data.paths;
    var category = {
      type: "category",
      label: categoryLabel,
      link: {
        type: "doc",
        id: linkId,
      },
    };
    items = [];
    for ([path, methods] of Object.entries(paths)) {
      for ([method, attributes] of Object.entries(methods)) {
        const operationId = attributes.operationId;
        const linkLabel = attributes.summary;
        const item = {
          type: "link",
          label: linkLabel,
          href: `${absolutePath}/${docId}#operation/${operationId}`,
          customProps: {
            method: method,
          },
        };
        items.push(item);
      }
    }
    category.items = items;
    categoryItems[parentCategory].push(category);
  });
  for (sidebarCat in sidebarCategories) {
    categoryName = sidebarCategories[sidebarCat].label;
    sidebarCategories[sidebarCat].items = categoryItems[categoryName];
  }

  return sidebarCategories;
}
const sidebarCategories = genEndpoints();
const sidebar = docs.concat(sidebarCategories);
module.exports = {
  sidebar: sidebar,
};
