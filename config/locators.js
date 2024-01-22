export const loginLocator = {
  usernameInput: '//input[@data-test="username"]',
  passwordInput: '//input[@data-test="password"]',
  loginButton: '//input[@id="login-button"]',
  validationInformation: '//*[@data-test="error"]'
};
export const inventoryLocator = {
  header: '//*[@id="inventory_filter_container"]/div',
  products: '//*[@class="inventory_item_name"]',
  addToCart: '//*[@class="btn_primary btn_inventory"]',
  remove: '//*[@class="btn_secondary btn_inventory"]',
  price: '//*[@class="inventory_item_price"]',
  title: '//*[@class="inventory_item_name"]',
  sortDropdown: '//select[@class="product_sort_container"]'
};
export const inventoryItemLocator = {
  productName: '//*[@class="inventory_details_name"]',
  backButton: '//*[@class="inventory_details_back_button"]',
  addToCartButton: '//*[@class="btn_primary btn_inventory"]'
};
export const bannerLocator = {
  cartCounter: '//*[@id="shopping_cart_container"]//span',
  cartBasket: '//*[@data-icon="shopping-cart"]',
  hamburgerIcon: '//*[text()="Open Menu"]',
  logoutButton: '//*[@id="logout_sidebar_link"]',
  banner: '//*[@class="product_label" or @class="subheader"]'
};
export const cartLocator = {
  checkoutButton: '//*[@href="./checkout-step-one.html"]'
};
export const checkoutStepOneLocator = {
  firstNameInput: '//*[@data-test="firstName"]',
  lastNameInput: '//*[@data-test="lastName"]',
  postalCodeInput: '//*[@data-test="postalCode"]',
  continueButton: '//*[@type="submit"]',
};
export const checkoutStepTwoLocator = {
  finishButton: '//*[@href="./checkout-complete.html"]',
};
export const checkoutCompleteLocator = {
  ponyImg: '//*[@src="img/pony-express.png"]',
  headerText: '//*[@class="complete-header"]',
  descriptionText: '//*[@class="complete-text"]',
};