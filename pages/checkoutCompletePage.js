import { BasePage } from "./basePage";
import { checkoutCompleteLocator } from "../config/locators";
import { expect } from "@playwright/test";

export class CheckoutCompletePage extends BasePage {
    constructor(page) {
        super(page);
        this.ponyImg = page.locator(checkoutCompleteLocator.ponyImg);
        this.headerText = page.locator(checkoutCompleteLocator.headerText);
        this.descriptionText = page.locator(checkoutCompleteLocator.descriptionText);
    }

    async verifyLogoVisible() {
		return await this.isElementVisible(this.ponyImg);
	}

    async verifyHeaderTextVisible(text) {
        await expect(this.headerText).toHaveText(text);
    }
}