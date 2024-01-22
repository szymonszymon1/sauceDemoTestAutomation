import { bannerLocator } from "../config/locators";
import { BasePage } from "./basePage";
import { expect } from "@playwright/test";
import { cartBasketUrl } from "../config/url";

export class HeaderPage extends BasePage {
    constructor(page) {
        super(page);
        this.cartCounter = page.locator(bannerLocator.cartCounter);
        this.hamburgerIcon = page.locator(bannerLocator.hamburgerIcon);
        this.logoutButton = page.locator(bannerLocator.logoutButton);
        this.cartBasket = page.locator(bannerLocator.cartBasket);
        this.baner = page.locator(bannerLocator.banner);
    }

    async checkBasketCounter(value) {
        const counter = await this.cartCounter.textContent();
        expect(parseInt(counter)).toEqual(value);
    }

    async logout() {
        await this.hamburgerIcon.click();
        await this.logoutButton.click();
    }

    async goToBasket() {
        await this.cartBasket.click();
        await this.verifyUrl(cartBasketUrl);
    }

    async verifyBanerTextVisible(text) {
        await expect(this.baner).toHaveText(text);
    }
}