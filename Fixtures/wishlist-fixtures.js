const base = require('@playwright/test');
const { chromium } = require('@playwright/test');
import ProductSearchPage from '../PageObjects/ProductSearchPage/productSearchPage';
import Wishlist from '../PageObjects/Wishlist/wishlist';
import SecurePageForWishlist from '../PageObjects/Wishlist/securePageForWishlist';
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
    wishlist: async ({ page, context }, use) => {
        await use(new Wishlist(page, context))
    },
    securePageForWishlist: async ({ page, wishlist }, use) => {
        await use(new SecurePageForWishlist(page, wishlist))
    },
    productSearch: async ({ page }, use) => {
        await use(new ProductSearchPage(page))
    }
    
})