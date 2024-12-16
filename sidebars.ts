const utils = require("@docusaurus/utils");

async function generateSidebars() {
  const product_sidebars = await utils.Globby("./products/**/sidebars.ts");

  let sidebar = {};
  const filters = process.env.PRODUCTS_INCLUDE
    ? process.env.PRODUCTS_INCLUDE.split(",")
    : undefined;
  if (filters) {
    filters.forEach((filter) => {
      const sidebars_path = product_sidebars.filter((sidebar) =>
        sidebar.includes(filter)
      )[0];
      if (sidebars_path) {
        sidebar = Object.assign(sidebar, require(sidebars_path));
      }
    });
  } else {
    product_sidebars.forEach((product_sidebar) => {
      sidebar = Object.assign(sidebar, require(product_sidebar));
    });
  }
  return sidebar;
}

const sidebars = async () => {
  try {
    return await generateSidebars();
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = sidebars().then((s) => {
  return s;
});
