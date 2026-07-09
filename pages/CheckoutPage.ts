// Locators and methods related to Checkout Page

import { Locator, Page } from "@playwright/test";

export class CheckoutPage {

    // Locators - Properties
    private page: Page
    private firstNameInput: Locator
    private lastNameInput: Locator
    private zipCodeInput: Locator
    private continueBtn: Locator
    private finishBtn: Locator
    private backToProductsBtn: Locator
    private successMessage: Locator
    private orderSummary: Locator

    constructor(page: Page) {
        this.page = page
        this.firstNameInput = this.page.locator("[data-test='firstName']")
        this.lastNameInput = this.page.locator("[data-test='lastName']")
        this.zipCodeInput = this.page.locator("[data-test='postalCode']")
        this.continueBtn = this.page.locator("[data-test='continue']")
        this.finishBtn = this.page.locator("[data-test='finish']")
        this.backToProductsBtn = this.page.locator("[data-test='back-to-products']")
        this.successMessage = this.page.locator("[data-test='complete-header']")
        this.orderSummary = this.page.locator("[data-test='complete-text']")
    }

    // Methods

    async fillCheckoutInformation(firstName: string, lastName: string, zipCode: string): Promise<void> {
        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
        await this.zipCodeInput.fill(zipCode)
    }

    async clickContinue(): Promise<void> {
        await this.continueBtn.click()
    }

    async clickFinish(): Promise<void> {
        await this.finishBtn.click()
    }

    async getSuccessMessage(): Promise<string | null> {
        return await this.successMessage.textContent()
    }

    async isSuccessMessageDisplayed(): Promise<boolean> {
        return await this.successMessage.isVisible()
    }

    async getOrderSummaryText(): Promise<string | null> {
        return await this.orderSummary.textContent()
    }

    async clickBackToProducts(): Promise<void> {
        await this.backToProductsBtn.click()
    }
}
