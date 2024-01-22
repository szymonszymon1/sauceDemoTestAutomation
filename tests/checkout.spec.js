import { test } from '../testFIxtures/fixture';
import { standard_user } from '../config/users';
import { inventoryUrl } from '../config/url';

test.beforeEach('Login setup', async ({ loginPage, inventoryPage }) => {
  await loginPage.openLoginPage();
  await loginPage.login(standard_user.username, standard_user.password);
  await inventoryPage.verifyUrl(inventoryUrl);
});

test.describe('Checkout', () => {

test('Buy specific product @tag_id_1310', async ({ loginPage, inventoryPage, headerPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage }) => {

  await test.step('Add to basket product by title', async () => {
    await inventoryPage.addToProductByTitle(await loginPage.getTranslation("Sauce Labs Bolt T-Shirt"));
    await headerPage.checkBasketCounter(1);
    await headerPage.verifyBanerTextVisible(await loginPage.getTranslation("Products"));
  })

  await test.step('Go to cart basket', async () => {
    await headerPage.goToBasket();
    await headerPage.checkBasketCounter(1);
    await headerPage.verifyBanerTextVisible(await loginPage.getTranslation("Your Cart"));
  })

  await test.step('Go to checkout', async () => {
    await cartPage.clickOnCheckoutButton();
  })

  await test.step('Fill user information', async () => {
    await checkoutStepOnePage.fillUserInformation("Szymon", "MySecondName", "12-325");
    await headerPage.checkBasketCounter(1);
    await headerPage.verifyBanerTextVisible(await loginPage.getTranslation("Checkout: Your Information"));
    await checkoutStepOnePage.clickContinueButton();
  })

  await test.step('Finish order', async () => {
    await headerPage.checkBasketCounter(1);
    await headerPage.verifyBanerTextVisible(await loginPage.getTranslation("Checkout: Overview"));
    await checkoutStepTwoPage.clickFinishButton();
  })

  await test.step('Verify Checkout Complete Page', async () => {
    await checkoutCompletePage.verifyLogoVisible();
    await checkoutCompletePage.verifyHeaderTextVisible(await loginPage.getTranslation("THANK YOU FOR YOUR ORDER"));
    await headerPage.verifyBanerTextVisible(await loginPage.getTranslation("Finish"));
  })
});
});
