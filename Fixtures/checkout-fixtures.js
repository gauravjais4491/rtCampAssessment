const base = require('@playwright/test');
const { chromium, expect } = require('@playwright/test');
import Checkout from '../PageObjects/Checkout/checkout';
import SecurePageForCheckout from '../PageObjects/Checkout/securePageForCheckout';
import ProductSearchPage from '../PageObjects/ProductSearchPage/productSearchPage';
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
        await page.goto('/')
        await use(page)
    },
    checkout: async ({ page, context }, use) => {
        await use(new Checkout(page, context))
    },
    securePageForCheckout: async ({ page, checkout }, use) => {
        await use(new SecurePageForCheckout(page, checkout))
    },
    productSearch: async ({ page }, use) => {
        await use(new ProductSearchPage(page))
    }
})