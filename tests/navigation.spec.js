import { test, expect } from "@playwright/test";

test("navigation", async ({ page }) => {
  //Navigate to home page
  await page.goto("/");

  //Wait for the venue list to load
  await page.waitForSelector("#venue-container");

  //Click the first venue
  await page.locator("#venue-container > a:nth-child(1)").click();

  //Venue details has heading with "Venue details"
  await expect(page.locator("h1")).toHaveText(/Venue details/);
});
