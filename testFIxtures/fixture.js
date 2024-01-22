import { test as fixture } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { HeaderPage } from '../pages/headerPage'
import { InventoryPage } from '../pages/inventoryPage'
import { InventoryItemPage } from '../pages/inventoryItemPage'
import { CartPage } from '../pages/cartPage'
import { CheckoutStepOnePage } from '../pages/checkoutStepOnePage'
import { CheckoutStepTwoPage } from '../pages/checkoutStepTwoPage'
import { CheckoutCompletePage } from '../pages/checkoutCompletePage'
 
export const test = fixture.extend({
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page))
	},
	headerPage: async ({ page }, use) => {
		await use(new HeaderPage(page))
	},
	inventoryPage: async ({ page }, use) => {
		await use(new InventoryPage(page))
	},
	inventoryItemPage: async ({ page }, use) => {
		await use(new InventoryItemPage(page))
	},
	cartPage: async ({ page }, use) => {
		await use(new CartPage(page))
	},
	checkoutStepOnePage: async ({ page }, use) => {
		await use(new CheckoutStepOnePage(page))
	},
	checkoutStepTwoPage: async ({ page }, use) => {
		await use(new CheckoutStepTwoPage(page))
	},
	checkoutCompletePage: async ({ page }, use) => {
		await use(new CheckoutCompletePage(page))
	}
})
