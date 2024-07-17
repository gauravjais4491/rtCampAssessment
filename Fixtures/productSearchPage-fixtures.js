const base = require('@playwright/test');
const { chromium } = require('@playwright/test');
import ProductSearchPage from '../PageObjects/ProductSearchPage/productSearchPage';
import SecurePageForProductSearch from '../PageObjects/ProductSearchPage/securePageForSearchProduct'
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
    productSearch: async ({ page }, use) => {
        await use(new ProductSearchPage(page))
    },
    securePageForProductSearch: async ({ page }, use) => {
        await use(new SecurePageForProductSearch(page))
    }
})