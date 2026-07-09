import { test, expect } from '@playwright/test'
import { SauceLoginPage } from '../pages/SauceLoginPage'
import { ProductsPage } from '../pages/ProductsPage'
import { CartPage } from '../pages/CartPage'
import { CheckoutPage } from '../pages/CheckoutPage'

const BASE_URL = "https://www.saucedemo.com/"
const USERNAME = "standard_user"
const PASSWORD = "secret_sauce"
const PRODUCT_NAME = "Sauce Labs Backpack"

let sauceLoginPage: SauceLoginPage
let productsPage: ProductsPage
let cartPage: CartPage
let checkoutPage: CheckoutPage

test.beforeEach(async ({ page }) => {
    sauceLoginPage = new SauceLoginPage(page)
    productsPage = new ProductsPage(page)
    cartPage = new CartPage(page)
    checkoutPage = new CheckoutPage(page)
})

test("Complete end-to-end checkout flow on Sauce Demo", { tag: ['@smoke', '@ecommerce'] }, async ({ page }) => {
    // Step 1: Open URL and Login
    await test.step("Login to SauceDemo", async () => {
        await sauceLoginPage.navigateToURL(BASE_URL)
        await sauceLoginPage.login(USERNAME, PASSWORD)
        // Wait for products page to load
        await page.waitForURL('**/inventory.html')
    })

    // Step 2: Add Product to Cart
    await test.step("Add Product to Cart", async () => {
        await productsPage.addProductToCartByName(PRODUCT_NAME)
        expect(await productsPage.isCartBadgeVisible()).toBeTruthy()
        expect(await productsPage.getCartItemCount()).toBe(1)
    })

    // Step 3: Open the Cart
    await test.step("Open the Cart", async () => {
        await productsPage.openCart()
        await page.waitForURL('**/cart.html')
        expect(await cartPage.isProductInCart(PRODUCT_NAME)).toBeTruthy()
    })

    // Step 4: Click Checkout Button
    await test.step("Click Checkout Button", async () => {
        await cartPage.clickCheckout()
        await page.waitForURL('**/checkout-step-one.html')
    })

    // Step 5: Fill Checkout Information with Random Data
    await test.step("Fill Checkout Information", async () => {
        const firstName = `First_${Math.random().toString(36).substring(7)}`
        const lastName = `Last_${Math.random().toString(36).substring(7)}`
        const zipCode = Math.floor(Math.random() * 99999).toString().padStart(5, '0')

        await checkoutPage.fillCheckoutInformation(firstName, lastName, zipCode)
    })

    // Step 6: Click Continue Button
    await test.step("Click Continue Button", async () => {
        await checkoutPage.clickContinue()
        await page.waitForURL('**/checkout-step-two.html')
    })

    // Step 7: Click Finish Button
    await test.step("Click Finish Button", async () => {
        await checkoutPage.clickFinish()
        await page.waitForURL('**/checkout-complete.html')
    })

    // Step 8: Verify Success Message
    await test.step("Verify Success Message", async () => {
        expect(await checkoutPage.isSuccessMessageDisplayed()).toBeTruthy()
        const successMessage = await checkoutPage.getSuccessMessage()
        expect(successMessage).toContain("Thank you for your order!")
    })
})

test("Verify product persists in cart after adding", { tag: '@regression' }, async ({ page }) => {
    // Login
    await sauceLoginPage.navigateToURL(BASE_URL)
    await sauceLoginPage.login(USERNAME, PASSWORD)
    await page.waitForURL('**/inventory.html')

    // Add product
    await productsPage.addProductToCartByName(PRODUCT_NAME)

    // Open cart and verify product is there
    await productsPage.openCart()
    expect(await cartPage.isProductInCart(PRODUCT_NAME)).toBeTruthy()
})
