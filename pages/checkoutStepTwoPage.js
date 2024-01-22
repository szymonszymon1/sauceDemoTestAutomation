import { BasePage } from "./basePage";
import { checkoutStepTwoLocator } from "../config/locators";
import { checkoutCompleteUrl } from "../config/url";

export class CheckoutStepTwoPage extends BasePage {
    constructor(page) {
        super(page);
        this.finishButton = page.locator(checkoutStepTwoLocator.finishButton);
    }

    async clickFinishButton() {
        await this.finishButton.click();
        await this.verifyUrl(checkoutCompleteUrl);
    }
}