const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const base = process.env.BASE_REF || "origin/master";
const head = process.env.HEAD_REF || "HEAD";

function getChangedFiles() {
  try {
    const output = execSync(`git diff --name-only ${base} ${head}`, {
      encoding: "utf8",
    });
    return output.trim().split("\n").filter(Boolean);
  } catch (err) {
    console.error("Failed to get changed files", err);
    return [];
  }
}

function resolveProducts(files) {
  const products = new Set();
  for (const file of files) {
    const match = file.match(/^products\/([^\/]+)/);
    if (match) products.add(match[1]);
  }
  return products;
}

function readSidebars(product) {
  const sidebarFiles = [
    path.join("products", product, "sidebars.ts"),
    path.join("products", product, "sidebars.js"),
  ];
  for (const file of sidebarFiles) {
    if (fs.existsSync(file)) {
      try {
        return fs.readFileSync(file, "utf8");
      } catch (_) {
        return "";
      }
    }
  }
  return "";
}

function addSidebarDeps(product, products) {
  const content = readSidebars(product);
  if (!content) return;
  const regex = /['"`]([a-z-]+)\/docs\//g;
  let match;
  while ((match = regex.exec(content))) {
    const dep = match[1];
    if (!products.has(dep)) {
      products.add(dep);
      addSidebarDeps(dep, products);
    }
  }
}

const changedFiles = getChangedFiles();
const products = resolveProducts(changedFiles);
for (const p of Array.from(products)) {
  addSidebarDeps(p, products);
}

console.log(Array.from(products).join(","));
