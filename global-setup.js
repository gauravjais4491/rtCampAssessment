import { chromium, expect } from '@playwright/test';
import loginData from './Data/login.json'
import Login from './PageObjects/Login/login.js';
import SecurePageForLogin from './PageObjects/Login/securePageForLogin.js';

const globalSetup = async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const login = new Login(page)
  const securePageForLogin = new SecurePageForLogin(page);
  const title = 'global setup';
  await page.goto('https://www.amazon.in/');
  await login.userLogin(loginData.email, loginData.password, loginData.delayTime)
  await page.waitForTimeout(5000)

  if (!await page.locator('#nav-link-accountList-nav-line-1').isVisible({ timeout: 5000 })) {
    await page.screenshot({ path: 'screenshot.png' })
    console.log(`Capcha Detected in ${title}`);
  }
  else {
    await expect(securePageForLogin.flashALertForLoginSucessfully).toContainText(loginData.userName)
    await page.context().storageState({ path: "./LoginAuthCQ1.json" })
    await browser.close()
  }
};

export default globalSetup;