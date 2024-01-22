import { BasePage } from "./basePage";
import { checkoutStepOneLocator } from "../config/locators";
import { checkoutStepTwoUrl } from "../config/url";

export class CheckoutStepOnePage extends BasePage {
    constructor(page) {
        super(page);
        this.firstNameInput = page.locator(checkoutStepOneLocator.firstNameInput);
        this.lastNameInput = page.locator(checkoutStepOneLocator.lastNameInput);
        this.postalCodeInput = page.locator(checkoutStepOneLocator.postalCodeInput);
        this.continueButton = page.locator(checkoutStepOneLocator.continueButton);
    }

    async fillUserInformation(firstName, lastName, postalCode) {
        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
        await this.postalCodeInput.fill(postalCode)
    }

    async clickContinueButton() {
        await this.continueButton.click();
        await this.verifyUrl(checkoutStepTwoUrl);
    }
}