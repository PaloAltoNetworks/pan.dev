// @ts-nocheck
import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the homepage before each test
    await page.goto("/");
  });

  test("has the correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Develop with Palo Alto Networks/);
  });

  test("has correct meta description", async ({ page }) => {
    const description = await page.getAttribute(
      'meta[name="description"]',
      "content"
    );
    expect(description).toContain(
      "The hub for Palo Alto Networks developer documentation"
    );
  });

  test("hero section is visible and contains key elements", async ({
    page,
  }) => {
    // Test hero section is present
    const heroSection = page.locator(".homepage-main > div").first();
    await expect(heroSection).toBeVisible();

    // Verify main headline exists (actual text would depend on your HeroSectionOne implementation)
    const headline = heroSection.locator(".flipwords-container");
    await expect(headline).toBeVisible();
  });

  test("tabs component is visible on desktop view", async ({ page }) => {
    // Test tabs component is visible on desktop
    // Note: Your code shows this is hidden on mobile with "hidden md:block"
    const tabsComponent = page.locator(".container.hidden.md\\:block");

    // Get viewport size
    const viewportSize = page.viewportSize();

    if (viewportSize && viewportSize.width >= 768) {
      // md breakpoint is typically 768px
      await expect(tabsComponent).toBeVisible();
    } else {
      await expect(tabsComponent).not.toBeVisible();
    }
  });

  test("developer docs section is present with correct title", async ({
    page,
  }) => {
    const devDocsSection = page.locator("#developer-docs-section");
    await expect(devDocsSection).toBeVisible();

    const sectionTitle = devDocsSection.locator("#developer-docs-header");

    console.log(sectionTitle);
    await expect(sectionTitle).toContainText(
      "Developer Docs and API References"
    );
  });

  test("partner tools section is present with correct title", async ({
    page,
  }) => {
    const partnerToolsTitle = page.getByText("Explore our Partner Tools");
    await expect(partnerToolsTitle).toBeVisible();

    // Check if the PartnerTools component is rendering
    const partnerToolsSection = page.locator(".container").filter({
      has: page.getByText("Explore our Partner Tools"),
    });
    await expect(partnerToolsSection).toBeVisible();
  });

  test("blog section is present with correct title", async ({ page }) => {
    const blogSectionTitle = page.getByText("Read our latest Developer Blogs");
    await expect(blogSectionTitle).toBeVisible();

    // Check if Medium component is rendering blog posts
    const mediumSection = page.locator("section").filter({
      has: page.getByText("Read our latest Developer Blogs"),
    });

    // Verify there are blog posts visible
    const blogPosts = mediumSection.locator(".medium-container");
    await expect(blogPosts).toBeVisible();
  });

  test("navigation elements are functional", async ({ page }) => {
    // Test navbar
    const navbar = page.locator("nav.navbar");
    await expect(navbar).toBeVisible();

    // Test logo
    const logo = navbar.locator(".navbar__logo");
    await expect(logo).toBeVisible();

    // Test search button
    const searchButton = page.locator(".DocSearch-Button");
    await expect(searchButton).toBeVisible();

    // Test search button click opens search dialog
    await searchButton.click();
    const searchModal = page.locator(".DocSearch-Modal");
    await expect(searchModal).toBeVisible();

    // Close the search modal
    await page.keyboard.press("Escape");
  });

  test("responsive design - mobile view", async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });

    // Tabs should be hidden on mobile
    const tabsComponent = page.locator(".container.hidden.md\\:block");
    await expect(tabsComponent).not.toBeVisible();

    // Check if mobile menu toggle is present
    const menuToggle = page.locator(".navbar__toggle");
    await expect(menuToggle).toBeVisible();

    // Test mobile menu functionality
    await menuToggle.click();
    const mobileMenu = page.locator(".navbar-sidebar");
    await expect(mobileMenu).toBeVisible();
  });

  test("footer is present with copyright information", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();

    // Check for copyright text
    const copyright = footer.getByText(/Copyright © \d{4} Palo Alto Networks/);
    await expect(copyright).toBeVisible();

    // Check for footer logo
    const footerLogo = footer.locator(
      'img[alt="Palo Alto Networks for developers"]'
    );
    await expect(footerLogo).toBeVisible();
  });
});
