import { test } from '../testFIxtures/fixture';
import { standard_user } from '../config/users';
import { inventoryUrl, inventoryItemUrl } from '../config/url';

test('Add to basket the cheppest product', async ({ page, loginPage, headerPage, inventoryPage }) => {
  await loginPage.openLoginPage();
  await loginPage.login(standard_user.username, standard_user.password);
  await inventoryPage.verifyUrl(inventoryUrl);
  await inventoryPage.addTheCheepestProduct();
  await headerPage.checkBasketCounter(1);
});

test('Sort products with "Name (Z to A)"', async ({ page, loginPage, inventoryPage }) => {
  await loginPage.openLoginPage();
  await loginPage.login(standard_user.username, standard_user.password);
  await inventoryPage.verifyUrl(inventoryUrl);

  await inventoryPage.expectProductSorting([
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light',
    'Sauce Labs Bolt T-Shirt',
    'Sauce Labs Fleece Jacket',
    'Sauce Labs Onesie',
    'Test.allTheThings() T-Shirt (Red)'
  ]);

  await inventoryPage.sortProducts('Name (Z to A)');

  await inventoryPage.expectProductSorting([
    'Test.allTheThings() T-Shirt (Red)',
    'Sauce Labs Onesie',
    'Sauce Labs Fleece Jacket',
    'Sauce Labs Bolt T-Shirt',
    'Sauce Labs Bike Light',
    'Sauce Labs Backpack'
  ]);
});

test('Select specific product and go to details page', async ({ loginPage, inventoryItemPage, inventoryPage, headerPage }) => {
  await loginPage.openLoginPage();
  await loginPage.login(standard_user.username, standard_user.password);
  await inventoryPage.verifyUrl(inventoryUrl);
  await inventoryPage.clickOnProductByTitle('Sauce Labs Bike Light');
  await inventoryItemPage.verifyUrl(inventoryItemUrl);
  await inventoryItemPage.verifyProductName('Sauce Labs Bike Light');
  await inventoryItemPage.addToCart();
  await headerPage.checkBasketCounter(1);
  await inventoryItemPage.goBackToItems();
  await inventoryPage.verifyUrl(inventoryUrl);
  await headerPage.checkBasketCounter(1);
});

