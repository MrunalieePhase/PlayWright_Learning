import { test, expect } from '@playwright/test';

test("isTitle", async ({ page }) => {
  // Step 1: Navigate to the course page
  await page.goto("https://playwright.dev/docs/codegen-intro");

  // Wait until the main content loads (important for dynamic pages)
  await page.waitForLoadState('networkidle');

  // Optional: log the title for debugging
  const title = await page.title();
  console.log("Page title:", title);

  // Verify that the title contains "NPTEL"
  await expect(page).toHaveTitle(/tests/);

  // Step 2 and 3 — add your next actions here
});
