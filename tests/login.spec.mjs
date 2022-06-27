import { test, expect } from "@playwright/test";

test("Login", async ({ page }) => {
  // Go to http://localhost:3000/login
  await page.goto("http://localhost:3000/login");
  // Click text=CloudPoacher! Login >> button
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://accounts.google.com/o/oauth2/v2/auth/identifier?client_id=436476385874-tq0vct74slfd6k8s3qmb5goi9jteh250.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=Z1zxDU2Weaf_pkpP_M3ea5i5GJ88naYIrF1Fn_JWIQM&code_challenge=m5aAB0jZuHP4aTsoS93UPLH39Qj2CzvsQcgmU5-ZXbQ&code_challenge_method=S256&flowName=GeneralOAuthFlow' }*/),
    page.locator("text=CloudPoacher! Login >> button").click(),
  ]);

  // Click [aria-label="Email atau ponsel"]  works in indonesia...
  await page.locator('[aria-label="Email atau ponsel"]').click();
  // Fill [aria-label="Email atau ponsel"]
  await page
    .locator('[aria-label="Email atau ponsel"]')
    .fill(process.env.PLAYWRIGHT_GOOGLE_USERNAME);
  // Click button:has-text("Berikutnya")  works in indonesia...
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://accounts.google.com/signin/v2/challenge/pwd?client_id=436476385874-tq0vct74slfd6k8s3qmb5goi9jteh250.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=Z1zxDU2Weaf_pkpP_M3ea5i5GJ88naYIrF1Fn_JWIQM&code_challenge=m5aAB0jZuHP4aTsoS93UPLH39Qj2CzvsQcgmU5-ZXbQ&code_challenge_method=S256&flowName=GeneralOAuthFlow&cid=1&navigationDirection=forward&TL=AM3QAYYTpnTuJqiOT6V_k0BnA_vsAkwy0Wqxyyi9MtcRMy70rjQcGRveHShHiE9y' }*/),
    page.locator('button:has-text("Berikutnya")').click(),
  ]);
  // Click [aria-label="Masukkan sandi Anda"]
  await page.locator('[aria-label="Masukkan sandi Anda"]').click();
  // Fill [aria-label="Masukkan sandi Anda"]
  await page
    .locator('[aria-label="Masukkan sandi Anda"]')
    .fill(process.env.PLAYWRIGHT_GOOGLE_PASSWORD);
  // Click button:has-text("Berikutnya")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/dashboard' }*/),
    page.locator('button:has-text("Berikutnya")').click(),
  ]);
  // Click text=CloudPoacher!
  await page.locator("text=CloudPoacher!").click();
});
