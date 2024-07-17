class Login {

  constructor(page) {
    this.page = page
  }
  get signIn() {
    return this.page.getByRole('link', { name: 'Sign in', exact: true })
  }
  get email() {
    return this.page.locator('#ap_email_login').or(this.page.locator('#ap_email'))
  }
  get password() {
    return this.page.getByLabel('Password')
  }
  async userLogin(emailOrPhoneNumber, password, delayTime) {
    await this.signIn.click();
    await this.email.pressSequentially(emailOrPhoneNumber, { delay: delayTime });
    await this.page.keyboard.press('Enter');
    await this.password.pressSequentially(password, { delay: delayTime });
    await this.page.keyboard.press('Enter');
  }

  async userLoginWithInvalidDetails(emailOrPhoneNumber, delayTime) {
    let navigationPromise = this.page.waitForNavigation();
    await this.signIn.click();
    await this.email.pressSequentially(emailOrPhoneNumber, { delay: delayTime });
    await this.page.keyboard.press('Enter');
    await navigationPromise
  }
}


module.exports = Login