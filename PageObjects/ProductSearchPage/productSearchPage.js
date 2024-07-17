class ProductSearchPage {
  constructor(page) {
    this.page = page
  }
  get searchInputField() {
    return this.page.getByLabel('Search Amazon.in')
  }
  get logoBtn() {
    return this.page.getByLabel('Amazon.in', { exact: true })
  }
  get searchIconBtn() {
    return this.page.locator('#nav-logo-sprites')
  }
  async addFilter(filterName) {
    return this.page.getByRole('link', { name: filterName, exact: true })
  }
  async productSearch(productName, delayTime) {
    let navigationPromise = this.page.waitForNavigation();
    await this.searchInputField.click()
    await this.searchInputField.pressSequentially(productName, { delay: delayTime })
    await this.page.keyboard.press('Enter');
    await navigationPromise
  }
  async productSearchWithFilters(productName, delayTime, filterNames) {
    await this.productSearch(productName, delayTime)
    for (const filterName of filterNames) {
      const filterElement = await this.addFilter(filterName);
      await filterElement.click();
    }
  }
  async searchProducts(productNames, delayTime) {
    for (const productName of productNames) {
      await this.productSearch(productName, delayTime)
      await this.logoBtn.click()
    }
    await this.searchInputField.click()
  }
  async productSearchWithSearchIcon(productName, delayTime) {
    let navigationPromise = this.page.waitForNavigation();
    await this.searchInputField.click()
    await this.searchInputField.pressSequentially(productName, { delay: delayTime })
    await this.searchIconBtn.click()
    await navigationPromise
  }
}

module.exports = ProductSearchPage