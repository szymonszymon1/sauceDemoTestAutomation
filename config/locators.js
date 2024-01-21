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
export const banerLocator = {
  cartCounter: '//*[@id="shopping_cart_container"]//span',
  hamburgerIcon: '//*[text()="Open Menu"]',
  logoutButton: '//*[@id="logout_sidebar_link"]'
};