const base = require('@playwright/test');
const { chromium, expect } = require('@playwright/test');
import Login from '../PageObjects/Login/login';
import SecurePageForLogin from '../PageObjects/Login/securePageForLogin';
export const customTest = base.test.extend({
    browser: async ({ }, use) => {
        const browser = await chromium.launch()
        await use(browser)
    },
    context: async ({ browser }, use) => {
        const context = await browser.newContext()
        await use(context)
    },
    page: async ({ context }, use) => {
        const page = await context.newPage()
        await context.clearCookies()
        await page.goto('/')
        await use(page)
    },
    login: async ({ page }, use) => {
        await use(new Login(page))
    },
    securePageForLogin: async ({ page }, use) => {
        await use(new SecurePageForLogin(page, expect))
    }
})