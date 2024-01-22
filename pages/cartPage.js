import { BasePage } from "./basePage";
import { cartLocator } from "../config/locators";
import { checkoutStepOneUrl } from "../config/url";

export class CartPage extends BasePage {
    constructor(page) {
        super(page);
        this.checkoutButton = page.locator(cartLocator.checkoutButton);
    }

    async clickOnCheckoutButton() {
        await this.checkoutButton.click();
        await this.verifyUrl(checkoutStepOneUrl);
    }
}