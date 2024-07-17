const { customTest } = require('../Fixtures/login-fixtures');
import test, { expect } from '@playwright/test';
import loginData from '../Data/login.json';


customTest('Validate Login with valid email and password', async ({ login, securePageForLogin }, testInfo) => {
  await login.userLogin(loginData.email, loginData.password, loginData.delayTime)
  await expect(securePageForLogin.flashALertForLoginSucessfully).toContainText(loginData.userName)
})

customTest('Validate Login with user that does not exist in system', async ({ login, securePageForLogin }, testInfo) => {
  await login.userLoginWithInvalidDetails(loginData.emailNotExist, loginData.delayTime)
  await securePageForLogin.assertionForInvalidDetails(loginData.expectedTextsForInValidDetails)
})
customTest('Validate Login with Valid email and invalid password', async ({ login, securePageForLogin }, testInfo) => {
  await login.userLogin(loginData.email, loginData.invalidPassword, loginData.delayTime)
  await expect(securePageForLogin.flashALertForLoginSucessfullyWithInvalidDetails).toContainText(loginData.expectedTextForValidEmailAndInvalidPassword)
})


customTest('Validate Login with valid phone number and password', async ({ login, securePageForLogin }, testInfo) => {
  await login.userLogin(loginData.phoneNumber, loginData.password, loginData.delayTime)
  await expect(securePageForLogin.flashALertForLoginSucessfully).toContainText(loginData.userName)
})

customTest('Validate Login with phone number less than 10 digits', async ({ login, securePageForLogin }, testInfo) => {
  await login.userLoginWithInvalidDetails(loginData.phoneNumber.slice(0, 7), loginData.delayTime)
  await securePageForLogin.assertionForInvalidDetails(loginData.expectedTextsForInValidDetails)
})

customTest('Validate Login with phone number more than 10 digits', async ({ login, securePageForLogin }, testInfo) => {
  await login.userLoginWithInvalidDetails(loginData.phoneNumber.concat(loginData.phoneNumber.slice(0, 5)), loginData.delayTime)
  await securePageForLogin.assertionForInvalidDetails(loginData.expectedTextsForInValidDetails)
})
