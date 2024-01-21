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
        
        if (!languageTranslations) {
            throw new Error(`No translations available for language ${this.language}`);
        }

        const translation = languageTranslations[translationKey];
        
        if (!translation) {
            throw new Error(`No translation available for key ${translationKey} in language ${this.language}`);
        }
        console.warn(translation)

        return translation;
    }
}