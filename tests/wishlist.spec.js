const { customTest } = require("../Fixtures/wishlist-fixtures");
import { expect } from '@playwright/test';
import ProductSearchData from '../Data/productSearch.json'
import WishlistData from '../Data/wishlist.json'


customTest.beforeEach(async ({ productSearch }, testInfo) => {
  await productSearch.productSearch(ProductSearchData.productName, ProductSearchData.delayTime)
})
customTest('Validate Add To Wishlist Without Login', async ({ wishlist, securePageForWishlist, context }, testInfo) => {
  await context.clearCookies()
  await wishlist.goToProductDetailsPage()
  await wishlist.addToWishlist()
  await securePageForWishlist.getNewPageFromWishlist()
  await expect(securePageForWishlist.wishlistWithoutLogin).toBeVisible()
})
customTest('Validate Add To Wishlist With Login', async ({ wishlist, securePageForWishlist }, testInfo) => {
  await wishlist.goToProductDetailsPage()
  await wishlist.addToWishlist()
  await securePageForWishlist.getNewPageFromWishlist()
  await expect(securePageForWishlist.flashALertForAddToWishlist).toHaveText(WishlistData.expectedTextForAddToWishlist)
})