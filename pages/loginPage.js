import { loginLocator } from "../config/locators";
import { loginUrl } from "../config/url";
import { expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.usernameInput = page.locator(loginLocator.usernameInput);
        this.passwordInput = page.locator(loginLocator.passwordInput);
        this.loginButton = page.locator(loginLocator.loginButton);
        this.validationInfo = page.locator(loginLocator.validationInformation);
    }
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async openLoginPage() {
        await this.page.goto(loginUrl);
        await this.page.waitForLoadState('domcontentloaded');
    }

    async verifyValidation(text) {
        expect(await this.validationInfo.textContent()).toEqual(text);
    }
}