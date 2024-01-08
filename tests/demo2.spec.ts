import { test, expect, Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.browserstack.com/");
});

test.describe("Demo Test 2", () => {
  test("Verify Forgot Password Error Message", async ({ page }) => {
    await page.waitForSelector("text=Forgot password", { state: "visible" });

    await page.locator("text=Forgot password").first().click();

    await page.waitForSelector("#user_email_forgot");

    await page.locator("#user_email_forgot").type("example1@example.com");

    await page.locator("#user_submit").click();

    const errorMessage = await (await page
      .locator("//input[@id='user_email_forgot']/../div[@class='error-msg']")
      .textContent())!.trim();

    console.log("Example2 Forgot Password Error Message: " + errorMessage);

    expect(errorMessage).toBe("Email not found");
  });
});
