import { banerLocator } from "../config/locators";
import { BasePage } from "./basePage";
import { expect } from "@playwright/test";

export class HeaderPage extends BasePage {
    constructor(page) {
        super(page);
        this.cartCounter = page.locator(banerLocator.cartCounter);
        this.hamburgerIcon = page.locator(banerLocator.hamburgerIcon);
        this.logoutButton = page.locator(banerLocator.logoutButton);
    }

    async checkBasketCounter(value) {
        const counter = await this.cartCounter.textContent();
        expect(parseInt(counter)).toEqual(value);
    }

    async logout() {
        await this.hamburgerIcon.click();
        await this.logoutButton.click();
    }
}