class Checkout {

  constructor(page, context) {
    this.page = page
    this.context = context
    this.newPage = undefined;
  }

  get productName() {
    return this.page.locator('.a-size-base-plus.a-color-base.a-text-normal')
  }
  get cartBtn() {
    return this.newPage.getByRole('link', { name: 'Go to Cart' })
  }
  get checkoutBtn () {
    return this.newPage.getByRole('button', { name: 'Proceed to Buy' })
  }
  get addToCartBtn() {
    return this.newPage.locator('#add-to-cart-button')
  }

  async getNewPage() {
    return this.newPage
  }


  async goToProductDetailsPage() {
    const pagePromise = this.context.waitForEvent('page');
    await this.productName.first().click()
    this.newPage = await pagePromise;
  }
  async addToCart() {
    await this.addToCartBtn.click()
  }
  async goToCartPage () {
    await this.cartBtn.click()
  }
  async performCheckout() {
    await this.checkoutBtn.click()
  }
}

module.exports = Checkout