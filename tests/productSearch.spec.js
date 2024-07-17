import { customTest } from "../Fixtures/productSearchPage-fixtures";
import ProductSearchData from '../Data/productSearch.json'
import { expect } from "@playwright/test";

customTest('Validate Search Product', async ({ productSearch, securePageForProductSearch }, testInfo) => {
  await productSearch.productSearch(ProductSearchData.productName, ProductSearchData.delayTime)
  await securePageForProductSearch.assertionForProductSearch(ProductSearchData.expectedTextForProductSearch)
})

customTest('Validate Search Product with Product Not Available', async ({ productSearch, securePageForProductSearch }, testInfo) => {
  await productSearch.productSearch(ProductSearchData.productNotAvailable, ProductSearchData.delayTime)
  await expect(securePageForProductSearch.flashALertForProductNotAvailable).toContainText(ProductSearchData.expectedTextForProductNotAvailable)
})

customTest('Validate Search Product with Filter', async ({ productSearch, securePageForProductSearch }, testInfo) => {
  await productSearch.productSearchWithFilters(ProductSearchData.productName, ProductSearchData.delayTime, ProductSearchData.filterNames)
  await securePageForProductSearch.assertionForAddFilterToSearchProduct(ProductSearchData.filterNames)
})

customTest('Verify that the recent search box is displayed after clicking on the search button.', async ({ productSearch, securePageForProductSearch }, testInfo) => {
  await productSearch.searchProducts(ProductSearchData.productNames, ProductSearchData.delayTime)
  await expect((securePageForProductSearch.suggestionBox).first()).toBeVisible()
})


customTest('Verify Search Functionality on Pressing Search Icon', async ({ productSearch, securePageForProductSearch }, testInfo) => {
  await productSearch.productSearchWithSearchIcon(ProductSearchData.productName, ProductSearchData.delayTime)
  await securePageForProductSearch.assertionForProductSearch(ProductSearchData.expectedTextForProductSearch)
})