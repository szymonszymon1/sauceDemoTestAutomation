import { expect } from '@playwright/test';
import { test } from '../testFIxtures/fixture';
import { inventoryLocator } from '../config/locators';
import { standard_user, locked_out_user } from '../config/users';
import { loginUrl, inventoryUrl } from '../config/url';

test('Login to Sauce Demo as standard user', async ({ page, loginPage, inventoryPage }) => {
  await loginPage.openLoginPage();
  await loginPage.login(standard_user.username, standard_user.password);
  await inventoryPage.verifyUrl(inventoryUrl);
  expect(await page.locator(inventoryLocator.header).textContent()).toEqual('Products');
});

test('Login to Sauce Demo as locked user', async ({ loginPage }) => {
  await loginPage.openLoginPage();
  await loginPage.login(locked_out_user.username, locked_out_user.password);
  await loginPage.verifyValidation('Epic sadface: Sorry, this user has been locked out.');
});

test('Try to login to Sauce Demo with not correct password', async ({ loginPage }) => {
  await loginPage.openLoginPage();
  await loginPage.login(standard_user.username, standard_user.passwordFake);
  await loginPage.verifyValidation('Epic sadface: Username and password do not match any user in this service');
});

test('Try to login to Sauce Demo with not correct username', async ({ loginPage }) => {
  await loginPage.openLoginPage();
  await loginPage.login(standard_user.usernameFake, standard_user.password);
  await loginPage.verifyValidation('Epic sadface: Username and password do not match any user in this service');
});

test('Login to Sauce Demo as standard user and logout', async ({ page, loginPage, headerPage, inventoryPage }) => {
  await loginPage.openLoginPage();
  await loginPage.login(standard_user.username, standard_user.password);
  await inventoryPage.verifyUrl(inventoryUrl);
  expect(await page.locator(inventoryLocator.header).textContent()).toEqual('Products');
  await headerPage.logout();
  await loginPage.verifyUrl(loginUrl);
});

