import { test as fixture } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { HeaderPage } from '../pages/headerPage'
import { InventoryPage } from '../pages/inventoryPage'
import { InventoryItemPage } from '../pages/inventoryItemPage'
 
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
	}
})
