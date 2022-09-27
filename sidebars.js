const all_sidebars = [
  "./products/access/access.sidebars",
  "./products/cdss/cdss.sidebars",
  "./products/cloudngfw/cloudngfw.sidebars",
  "./products/dns-security/dns-security.sidebars",
  "./products/expedition/expedition.sidebars",
  "./products/iot/iot.sidebars",
  "./products/panos/panos.sidebars",
  "./products/sase/sase.sidebars",
  "./products/sdwan/sdwan.sidebars",
  "./products/threat-vault/threat-vault.sidebars",
];

function getProductIDs() {
  let filters = null;
  if (process.env.DOCS_PLUGIN_INCLUDE) {
    filters = process.env.DOCS_PLUGIN_INCLUDE.split(",");
  }
  return filters;
}

function sidebarSelector() {
  let sidebar = {};
  let filters = getProductIDs();
  if (filters) {
    filters.forEach((product) => {
      let sidebars_path = "./products/" + product + "/" + product + ".sidebars";
      sidebar = Object.assign(sidebar, require(sidebars_path));
    });
  } else {
    all_sidebars.forEach((product_sidebar) => {
      sidebar = Object.assign(sidebar, require(product_sidebar));
    });
  }
  return sidebar;
}

sidebar = sidebarSelector();
module.exports = sidebar;
