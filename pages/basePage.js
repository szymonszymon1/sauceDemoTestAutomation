import { expect } from "@playwright/test";
import { en, fr } from "../config/translations";

export class BasePage {
    constructor(page) {
        this.page = page;
        this.language = process.env.LANGUAGE || 'en';
    }

    async verifyUrl(url) {
        expect(this.page.url()).toContain(url);
    }

    async getTranslation(translationKey) {
        const languageTranslations = this.language === 'fr' ? fr : en;

        const translation = languageTranslations[translationKey];
        
        if (!translation) {
            throw new Error(`No translation available for key ${translationKey} in language ${this.language}`);
        }
        return translation;
    }

    async isElementVisible(selector) {
        await selector.waitFor();
		const isVisible = await selector.isVisible();
		expect(isVisible).toBeTruthy();
	}

    async verifyElementText(selectorString, text) {
        const selector = this.page.locator(selectorString);
        const textValue = await selector.textContent();
        return expect(textValue.trim()).toEqual(text);
    }
}