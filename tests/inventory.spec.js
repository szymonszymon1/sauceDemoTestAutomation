import { test } from '../testFIxtures/fixture';
import { standard_user } from '../config/users';
import { inventoryUrl, inventoryItemUrl } from '../config/url';

test.beforeEach('Login setup', async ({ loginPage, inventoryPage }) => {
  await loginPage.openLoginPage();
  await loginPage.login(standard_user.username, standard_user.password);
  await inventoryPage.verifyUrl(inventoryUrl);
});

test.describe('Inventory', () => {

test('Add to basket the cheppest product', async ({ headerPage, inventoryPage }) => {
  await inventoryPage.addTheCheepestProduct();
  await headerPage.checkBasketCounter(1);
});

test('Sort products with "Name (Z to A)"', async ({ loginPage, inventoryPage }) => {
  await inventoryPage.expectProductSorting([
    await inventoryPage.getTranslation('Sauce Labs Backpack'),
    await inventoryPage.getTranslation('Sauce Labs Bike Light'),
    await inventoryPage.getTranslation('Sauce Labs Bolt T-Shirt'),
    await inventoryPage.getTranslation('Sauce Labs Fleece Jacket'),
    await inventoryPage.getTranslation('Sauce Labs Onesie'),
    await inventoryPage.getTranslation('Test.allTheThings() T-Shirt (Red)')
  ]);

  await inventoryPage.sortProducts(await loginPage.getTranslation('Name (Z to A)'));

  await inventoryPage.expectProductSorting([
    await inventoryPage.getTranslation('Test.allTheThings() T-Shirt (Red)'),
    await inventoryPage.getTranslation('Sauce Labs Onesie'),
    await inventoryPage.getTranslation('Sauce Labs Fleece Jacket'),
    await inventoryPage.getTranslation('Sauce Labs Bolt T-Shirt'),
    await inventoryPage.getTranslation('Sauce Labs Bike Light'),
    await inventoryPage.getTranslation('Sauce Labs Backpack')
  ]);
});

test('Select specific product and go to details page, back to', async ({ loginPage, inventoryItemPage, inventoryPage, headerPage }) => {
  await inventoryPage.clickOnProductByTitle(await inventoryPage.getTranslation('Sauce Labs Bike Light'));
  await inventoryItemPage.verifyUrl(inventoryItemUrl);
  await inventoryItemPage.verifyProductName(await inventoryPage.getTranslation('Sauce Labs Bike Light'));
  await inventoryItemPage.addToCart();
  await headerPage.checkBasketCounter(1);
  await inventoryItemPage.goBackToItems();
  await inventoryPage.verifyUrl(inventoryUrl);
  await headerPage.checkBasketCounter(1);
});
});
