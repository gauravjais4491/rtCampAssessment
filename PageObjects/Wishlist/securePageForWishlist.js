class SecurePageForWishlist {
  constructor(page, wishlist) {
    this.page = page
    this.newPage = undefined
    this.wishlist = wishlist
  }

  get flashALertForAddToWishlist() {
    return this.newPage.getByRole('link', { name: 'View Your List' })
  }

  async getPage() {
    this.newPage = await this.wishlist.getNewPage()
  }

  get wishlistWithoutLogin() {
    return this.newPage.getByRole('heading', { name: 'Sign in' }).or(this.newPage.getByRole('heading', { name: 'Sign in or create account' }))
  }

  async getNewPageFromWishlist() {
    await this.getPage()
    await this.flashALertForAddToWishlist.isVisible({ timeout: 10000 })
  }


}
module.exports = SecurePageForWishlist