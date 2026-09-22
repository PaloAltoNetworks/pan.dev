const generated = require("./api/sidebar");
const items =
  generated.default?.apisidebar ?? generated.apisidebar ?? generated;

// Groups that keep their second level even while they hold a single tag, because
// more tags are known to be coming and the nesting should not appear and vanish
// between releases.
const ALWAYS_NESTED = new Set(["Integrations"]);

// tagGroup mode always emits Group > Tag > operations. Where a group holds a
// single tag that middle level carries no information, so it is dropped and the
// group's own name is kept as the label: the group name is the section title,
// while the tag name is an internal handle that may differ.
function flattenSingleTagGroups(sidebarItems) {
  return sidebarItems.map((item) => {
    if (item?.type !== "category" || item.items?.length !== 1) return item;
    if (item.label && ALWAYS_NESTED.has(item.label)) return item;
    const [child] = item.items;
    if (child?.type !== "category") return item;
    return { ...child, label: item.label };
  });
}

module.exports = {
  sasebrowsermgmt: flattenSingleTagGroups(items),
};
