class SecurePageForLogin {
  constructor(page, expect) {
    this.page = page
    this.expect = expect
  }
  get flashALertForLoginSucessfully() {
    return this.page.locator('#nav-link-accountList-nav-line-1');
  }
  get flashALertForLoginSucessfullyWithInvalidDetails() {
    return this.page.getByText('Create Account', { exact: true }).or(this.page.getByText('We cannot find an account with that email address')).or(this.page.getByRole('heading', { name: 'Looks like you are new to Amazon' })).or(this.page.getByText('Invalid mobile number')).or(this.page.getByText('Your password is incorrect')).or(this.page.getByText('We cannot find an account with that mobile number'))
  }

  async assertionForInvalidDetails(expectedStringArray) {
    let tempArr = []
    for (let i = 0; i < expectedStringArray.length; i++) {
      try {
        if (await this.expect(await this.flashALertForLoginSucessfullyWithInvalidDetails).toContainText(expectedStringArray[i])) {
          return;
        }
      } catch {
        tempArr.push(expectedStringArray[i])
      }
    }
    if (tempArr.length == expectedStringArray.length) {
      throw new Error('Something Went Wrong during Login for Invalid Details')
    }
  }
}
module.exports = SecurePageForLogin