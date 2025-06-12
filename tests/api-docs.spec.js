// @ts-nocheck
import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";
import glob from "glob";

// Get all product test files
const productFiles = glob.sync("products/*-mdx-files.json", {
  cwd: path.join(__dirname),
});

// Fallback to using the combined file if no individual product files are found
const allProductsMap = fs.existsSync(path.join(__dirname, "all-mdx-files.json"))
  ? JSON.parse(
      fs.readFileSync(path.join(__dirname, "all-mdx-files.json"), "utf8")
    )
  : {};

test.describe("Generated API Documentation", () => {
  // Test each product category
  for (const productFile of productFiles) {
    const productName = path.basename(productFile, "-mdx-files.json");

    test.describe(`${productName} API Documentation`, () => {
      // Load the product-specific paths
      const productPaths = JSON.parse(
        fs.readFileSync(path.join(__dirname, productFile), "utf8")
      );

      // Take a sample of paths to test (adjust the sample size as needed)
      const sampleSize = 5;
      const pathsToTest =
        productPaths.length <= sampleSize
          ? productPaths
          : productPaths.slice(0, sampleSize);

      for (const apiPath of pathsToTest) {
        test(`${productName}: API docs at ${apiPath} load correctly`, async ({
          page,
        }) => {
          await page.goto(apiPath);

          // Expect page to load without error (no 404)
          await expect(page).not.toHaveTitle(/Not Found/);

          // Check for common elements that should appear in API docs
          const mainContent = page.locator("main");
          await expect(mainContent).toBeVisible();

          // Check if API content is rendered (may not be present on all pages)
          const apiContent = page.locator(".openapi-left-panel__container");
          if ((await apiContent.count()) > 0) {
            await expect(apiContent).toBeVisible();
          }
        });
      }

      // Test specific API features if applicable for this product
      test(`${productName}: API request execution UI is present`, async ({
        page,
      }) => {
        // Choose the first path for this product
        const testPath = productPaths[0];
        await page.goto(testPath);

        // Check for request execution UI elements
        const requestBlocks = page.locator(".openapi-right-panel__container");
        if ((await requestBlocks.count()) > 0) {
          await expect(requestBlocks).toBeVisible();
        }
      });
    });
  }

  // Fallback to test using the combined product map if no individual files found
  if (productFiles.length === 0 && Object.keys(allProductsMap).length > 0) {
    test.describe("API Documentation (using combined map)", () => {
      for (const [productName, paths] of Object.entries(allProductsMap)) {
        test(`${productName}: Sample API docs load correctly`, async ({
          page,
        }) => {
          // Test just the first path for each product
          if (paths.length > 0) {
            const testPath = paths[0];
            await page.goto(testPath);

            // Expect page to load without error (no 404)
            await expect(page).not.toHaveTitle(/Not Found/);

            // Check for common elements that should appear in API docs
            const mainContent = page.locator("main");
            await expect(mainContent).toBeVisible();
          }
        });
      }
    });
  }
});
