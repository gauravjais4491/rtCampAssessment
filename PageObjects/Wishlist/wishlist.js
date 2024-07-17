class Wishlist {
  constructor(page, context) {
    this.page = page
    this.context = context
    this.newPage = undefined;
  }

  get productName() {
    return this.page.locator('.a-size-base-plus.a-color-base.a-text-normal')
  }

  get wishlistBtn() {
    return this.newPage.locator('#wishListMainButton')
  }

  async getNewPage() {
    return this.newPage
  }

  async goToProductDetailsPage() {
    const pagePromise = this.context.waitForEvent('page');
    await this.productName.first().click()
    this.newPage = await pagePromise;
    await this.newPage.waitForLoadState('domcontentloaded')
    await this.wishlistBtn.isVisible()
  }

  async addToWishlist() {
    await this.wishlistBtn.click();
  }
}
module.exports = Wishlist