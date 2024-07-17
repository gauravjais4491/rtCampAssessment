class SecurePageForProductSearch {
  constructor(page) {
    this.page = page
  }
  get productName() {
    return this.page.locator('.a-size-base-plus.a-color-base.a-text-normal')
  }
  get flashALertForProductNotAvailable() {
    return this.page.getByText('No results for')
  }

  get addFilter() {
    return this.page.locator('.a-section.a-spacing-none.a-spacing-top-small.s-title-instructions-style').locator('div')
  }

  get suggestionBox() {
    return this.page.locator('.s-suggestion-container')
  }
  async assertionForProductSearch(expectedProductNames) {
    const Itmes = await this.productName.allTextContents();
    const firstTenItems = Itmes.slice(0, 10);
    firstTenItems.forEach((item) => {
      const includesProductName = expectedProductNames.some(item1 => item.toLowerCase().includes(item1));
      if (!includesProductName) {
        console.log(item.toLowerCase());
        throw new Error('Something Went Wrong during in Search Functionality')
      }
    });
  }


  async assertionForAddFilterToSearchProduct(filterNames) {
    const Itmes = await this.addFilter.allTextContents();
    const firstTenItems = Itmes.slice(0, 10);
    firstTenItems.forEach((item) => {
      const includesProductName = filterNames.some(item1 => item.includes(item1));
      if (!includesProductName) {
        console.log(item.toLowerCase());
        throw new Error('Something Went Wrong during in Adding Filters')
      }
    });
  }
}

module.exports = SecurePageForProductSearch