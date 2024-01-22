import { expect } from "@playwright/test";
import { inventoryLocator } from "../config/locators";
import { BasePage } from "./basePage";

export class InventoryPage extends BasePage {
    constructor(page) {
        super(page);
        this.price = page.locator(inventoryLocator.price);
        this.products = page.locator(inventoryLocator.products);
        this.addToCart = page.locator(inventoryLocator.addToCart);
        this.sortDropdown = page.locator(inventoryLocator.sortDropdown);
        this.title = page.locator(inventoryLocator.title);
    }

    async countProducts(count) {
        const elements = await this.products.count();
        expect(elements).toBe(count);
    }

    async getChepestProduct() {
        const allPrices = await this.price.allInnerTexts();

        const onlyPrice = allPrices.map((element) => {
            const withoutCurrency = element.replace("$", "")
            return parseFloat(withoutCurrency)
        });
        const smallestPrice = Math.min(...onlyPrice); 
        const smallestPriceIndex = onlyPrice.indexOf(smallestPrice);
        return smallestPriceIndex;
    }

    async addTheCheepestProduct() {
        await this.addToCart.nth(await this.getChepestProduct()).click();
    }

    async sortProducts(value) {
        await this.sortDropdown.selectOption({ label: value });
    }

    async getAllProductTitles() {
        const allTitles = await this.title.allInnerTexts();
        return allTitles;
    }

    async expectProductSorting(list) {
        const titles = await this.getAllProductTitles();
        expect(titles).toEqual(list);
    }

    async clickOnProductByTitle(product) {
        const allProducts = await this.getAllProductTitles()
        const productIndex = allProducts.indexOf(product);
        await this.products.nth(productIndex).click();
    }

    async addToProductByTitle(product) {
        const allProducts = await this.getAllProductTitles()
        const productIndex = allProducts.indexOf(product);
        await this.addToCart.nth(productIndex).click();
    }
}