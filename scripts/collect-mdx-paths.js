const fs = require("fs");
const path = require("path");
const glob = require("glob");

/**
 * Collects all MDX files from the products directory, organized by product
 * @returns {Object} Object with product directories as keys and arrays of MDX file paths as values
 */
function collectAllMdxFiles() {
  const productsDir = path.join(__dirname, "../products");
  const testsDir = path.join(__dirname, "../tests");

  // Check if products directory exists
  if (!fs.existsSync(productsDir)) {
    console.error("Products directory not found:", productsDir);
    return {};
  }

  // Ensure tests directory exists
  if (!fs.existsSync(testsDir)) {
    fs.mkdirSync(testsDir, { recursive: true });
  }

  // Create a subdirectory for product-specific test files
  const productTestsDir = path.join(testsDir, "products");
  if (!fs.existsSync(productTestsDir)) {
    fs.mkdirSync(productTestsDir, { recursive: true });
  }

  // Find all MDX files in the products directory (with relative paths)
  const mdxFiles = glob.sync("**/*.mdx", {
    cwd: productsDir,
  });

  // Filter out files with .info or .tag in their filenames
  const filteredFiles = mdxFiles.filter((file) => {
    const filename = path.basename(file);
    return !filename.includes(".info") && !filename.includes(".tag");
  });

  // Group files by product directory (first-level directory)
  const productMap = {};

  filteredFiles.forEach((file) => {
    // Get the file's directory path and filename
    const dirPath = path.dirname(file);
    const filename = path.basename(file);

    // Extract the product directory (first segment of the path)
    const productDir = dirPath.split(path.sep)[0] || "root";

    // Extract the part of the filename before the first dot
    const cleanFilename = filename.split(".")[0];

    // Combine directory path with clean filename
    let formattedPath = path.join(dirPath, cleanFilename);

    // Add leading slash to make it a proper URL path
    formattedPath = "/" + formattedPath;

    // Initialize the product array if it doesn't exist
    if (!productMap[productDir]) {
      productMap[productDir] = [];
    }

    // Add the formatted path to the product's array
    productMap[productDir].push(formattedPath);
  });

  // Count total files across all products
  const totalFiles = Object.values(productMap).reduce(
    (sum, files) => sum + files.length,
    0
  );

  // Write the main results file
  const mainOutputPath = path.join(testsDir, "all-mdx-files.json");
  fs.writeFileSync(mainOutputPath, JSON.stringify(productMap, null, 2));

  // Write individual product files
  Object.entries(productMap).forEach(([product, paths]) => {
    const productOutputPath = path.join(
      productTestsDir,
      `${product}-mdx-files.json`
    );
    fs.writeFileSync(productOutputPath, JSON.stringify(paths, null, 2));
  });

  console.log(
    `Found ${totalFiles} MDX files across ${
      Object.keys(productMap).length
    } product directories`
  );
  console.log(`Main results written to: ${mainOutputPath}`);
  console.log(`Individual product files written to: ${productTestsDir}`);

  return productMap;
}

// Execute if run directly
if (require.main === module) {
  collectAllMdxFiles();
} else {
  module.exports = {
    collectAllMdxFiles,
  };
}
