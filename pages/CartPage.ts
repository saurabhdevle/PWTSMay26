// Locators and methods related to Cart Page

import { Locator, Page } from "@playwright/test";

export class CartPage {

    // Locators - Properties
    private page: Page
    private cartItems: Locator
    private checkoutBtn: Locator
    private continueShoppingBtn: Locator
    private cartItemName: Locator

    constructor(page: Page) {
        this.page = page
        this.cartItems = this.page.locator("[data-test='cart-list-item']")
        this.checkoutBtn = this.page.locator("[data-test='checkout']")
        this.continueShoppingBtn = this.page.locator("[data-test='continue-shopping']")
        this.cartItemName = this.page.locator("[data-test='inventory-item-name']")
    }

    // Methods

    async getCartItemCount(): Promise<number> {
        return await this.cartItems.count()
    }

    async getCartItemNames(): Promise<(string | null)[]> {
        const names = []
        const count = await this.cartItemName.count()
        for (let i = 0; i < count; i++) {
            const name = await this.cartItemName.nth(i).textContent()
            names.push(name)
        }
        return names
    }

    async isProductInCart(productName: string): Promise<boolean> {
        const names = await this.getCartItemNames()
        return names.some(name => name?.includes(productName))
    }

    async clickCheckout(): Promise<void> {
        await this.checkoutBtn.click()
    }

    async clickContinueShopping(): Promise<void> {
        await this.continueShoppingBtn.click()
    }
}
