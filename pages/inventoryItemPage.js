import { BasePage } from "./basePage";
import { expect } from "@playwright/test";
import { inventoryItemLocator } from "../config/locators";

export class InventoryItemPage extends BasePage {
    constructor(page) {
        super(page);
        this.productName = page.locator(inventoryItemLocator.productName);
        this.addToCartButton = page.locator(inventoryItemLocator.addToCartButton);
        this.backButton = page.locator(inventoryItemLocator.backButton);
    }

    async verifyProductName(value) {
        const product = await this.productName.textContent();
        expect(product).toEqual(value);
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async goBackToItems() {
        await this.backButton.click();
    }
}