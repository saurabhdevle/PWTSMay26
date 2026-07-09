// Locators and methods related to Sauce Demo Login Page

import { Locator, Page } from "@playwright/test";

export class SauceLoginPage {

    // Locators - Properties
    page: Page
    private username: Locator
    private password: Locator
    private loginBtn: Locator
    private errorMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.username = this.page.locator("[data-test='username']")
        this.password = this.page.locator("[data-test='password']")
        this.loginBtn = this.page.locator("[data-test='login-button']")
        this.errorMessage = this.page.locator("[data-test='error']")
    }

    // Methods

    async navigateToURL(url: string) {
        await this.page.goto(url)
    }

    async login(username: string, password: string) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

    async loginWithCredentials(username: string, password: string) {
        await this.navigateToURL("https://www.saucedemo.com/")
        await this.login(username, password)
    }

    async isErrorMessageDisplayed(): Promise<boolean> {
        return await this.errorMessage.isVisible()
    }

    async getErrorMessage(): Promise<string | null> {
        return await this.errorMessage.textContent()
    }
}
