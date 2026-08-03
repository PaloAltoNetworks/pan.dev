/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

function sidebarMenu(label, items) {
  const template = `
<div class="dropdown">
  <button class="button button--block button--sm button--secondary">${label}</button>
  <ul class="dropdown__menu">
    ${items
      .map(
        (item) => `
      <li><a class="dropdown__link" href="${item.baseUrl}">${item.label}</a></li>
    `
      )
      .join("")}
  </ul>
</div>
  `;
  return template;
}

module.exports = sidebarMenu;
