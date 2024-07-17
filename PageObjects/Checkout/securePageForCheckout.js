class SecurePageForCheckout {
  constructor(page, checkout) {
    this.page = page
    this.newPage = undefined
    this.checkout = checkout
  }
  async getPage() {
    this.newPage = await this.checkout.getNewPage()
  }

  get checkoutWithLogin() {
    return this.newPage.getByRole('heading', { name: 'Select a delivery address' })
  }
  get checkoutWithoutLogin() {
    return this.newPage.getByRole('heading', { name: 'Sign in' }).or(this.newPage.getByRole('heading', { name: 'Sign in or create account' }))
  }
  async getNewPageFromCheckout() {
    await this.getPage()
    await this.checkoutWithLogin.isVisible({ timeout: 10000 })
  }
}

module.exports = SecurePageForCheckout