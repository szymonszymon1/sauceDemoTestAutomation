import { test } from '../testFIxtures/fixture';
import { standard_user, locked_out_user } from '../config/users';
import { loginUrl, inventoryUrl } from '../config/url';

test.beforeEach('Open page setup', async ({ loginPage }) => {
  await loginPage.openLoginPage();
});

test.describe('Login', () => {

test('Login to Sauce Demo as standard user @tag_id_1110', async ({ loginPage, inventoryPage, headerPage }) => {
  await loginPage.login(standard_user.username, standard_user.password);
  await inventoryPage.verifyUrl(inventoryUrl);
  await headerPage.verifyBanerTextVisible(await loginPage.getTranslation("Products"));
});

test('Login to Sauce Demo as locked user @tag_id_1111', async ({ loginPage }) => {
  await loginPage.login(locked_out_user.username, locked_out_user.password);
  await loginPage.verifyValidation(await loginPage.getTranslation('Epic sadface: Sorry, this user has been locked out.'));
});

test('Try to login to Sauce Demo with not correct password @tag_id_1112', async ({ loginPage }) => {
  await loginPage.login(standard_user.username, standard_user.passwordFake);
  await loginPage.verifyValidation(await loginPage.getTranslation('Epic sadface: Username and password do not match any user in this service'));
});

test('Try to login to Sauce Demo with not correct username @tag_id_1113', async ({ loginPage }) => {
  await loginPage.login(standard_user.usernameFake, standard_user.password);
  await loginPage.verifyValidation(await loginPage.getTranslation('Epic sadface: Username and password do not match any user in this service'));
});

test('Login to Sauce Demo as standard user and logout @tag_id_1114', async ({ loginPage, headerPage, inventoryPage }) => {
  await loginPage.login(standard_user.username, standard_user.password);
  await inventoryPage.verifyUrl(inventoryUrl);
  await headerPage.verifyBanerTextVisible(await loginPage.getTranslation("Products"));
  await headerPage.logout();
  await loginPage.verifyUrl(loginUrl);
});
});
