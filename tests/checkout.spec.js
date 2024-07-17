const { customTest } = require("../Fixtures/checkout-fixtures");
import { expect } from '@playwright/test';
import ProductSearchData from '../Data/productSearch.json'
customTest.beforeEach(async ({ productSearch }, testInfo) => {
  await productSearch.productSearch(ProductSearchData.productName, ProductSearchData.delayTime)
})

customTest.describe.configure({ retries: 0 })
customTest('Validate Checkout Without Login', async ({ checkout, securePageForCheckout, context }, testInfo) => {
  await context.clearCookies()
  await checkout.goToProductDetailsPage()
  await checkout.addToCart()
  await checkout.goToCartPage()
  await checkout.performCheckout()
  await securePageForCheckout.getNewPageFromCheckout()
  await expect(securePageForCheckout.checkoutWithoutLogin).toBeVisible()
})

customTest('Validate Checkout With Login', async ({ checkout, securePageForCheckout }, testInfo) => {
  await checkout.goToProductDetailsPage()
  await checkout.addToCart()
  await checkout.goToCartPage()
  await checkout.performCheckout()
  await securePageForCheckout.getNewPageFromCheckout()
  await expect(securePageForCheckout.checkoutWithLogin).toBeVisible()
})
