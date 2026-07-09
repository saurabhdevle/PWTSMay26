// Locators and methods related to Products Page

import { Locator, Page } from "@playwright/test";

export class ProductsPage {

    // Locators - Properties
    private page: Page
    private productNames: Locator
    private addToCartButtons: Locator
    private cartIcon: Locator
    private cartBadge: Locator

    constructor(page: Page) {
        this.page = page
        this.productNames = this.page.locator("[data-test='inventory-item-name']")
        this.addToCartButtons = this.page.locator("[data-test^='add-to-cart']")
        this.cartIcon = this.page.locator("[data-test='shopping-cart-link']")
        this.cartBadge = this.page.locator("[data-test='shopping-cart-badge']")
    }

    // Methods

    async getProductCount(): Promise<number> {
        return await this.productNames.count()
    }

    async getProductNameByIndex(index: number): Promise<string | null> {
        return await this.productNames.nth(index).textContent()
    }

    async addProductToCartByName(productName: string): Promise<void> {
        // Get all product containers
        const products = this.page.locator("[data-test='inventory-item']")
        const count = await products.count()

        for (let i = 0; i < count; i++) {
            const name = await products.nth(i).locator("[data-test='inventory-item-name']").textContent()
            if (name?.trim() === productName.trim()) {
                await products.nth(i).locator("[data-test^='add-to-cart']").click()
                break
            }
        }
    }

    async openCart(): Promise<void> {
        await this.cartIcon.click()
    }

    async getCartItemCount(): Promise<number> {
        try {
            const badgeText = await this.cartBadge.textContent()
            return parseInt(badgeText || "0")
        } catch {
            return 0
        }
    }

    async isCartBadgeVisible(): Promise<boolean> {
        return await this.cartBadge.isVisible()
    }
}
