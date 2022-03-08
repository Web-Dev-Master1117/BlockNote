import { test, expect, Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
  // TODO: add const for that
  // await page.goto("http://host.docker.internal:3000");
});

test.describe("Basic placeholder functionality", () => {
  test("should show placeholder on load", async ({ page }) => {
    // const editor = await page.waitForSelector("[data-test='editor']");
    await page.locator('[data-test="editor"] div').nth(3).click();

    // TODO: doesn't work. No way to access text of ::before element?
    // expect(await editor.textContent()).toBe(
    //   "Enter text or type '/' for commands"
    // );
    await new Promise((r) => setTimeout(r, 1000));
    expect(await page.screenshot()).toMatchSnapshot("initial-placeholder.png");
  });
});
