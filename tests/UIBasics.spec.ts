// testfile.spec.ts
// testfile.test.ts

// 1. How do we enter an input inside the textbox
// 2. Validate if the input field have a value "input"
// 3. Click on the element

import {test, expect} from '@playwright/test'

test("Login into application using valid credentials", async function({page}){

    // Goto the url
    // fill the username
    // fill the password
    // click on submit button
    // expect if the dashboard page is visible

    // goto(url:string) - It help us in launching the url on the given browser.
    // url should consists of http/https.

    // fill("string") - Set the value inside the input field
    // click() - click on an element
    // expect()

    await page.goto("https://practicetestautomation.com/practice-test-login/")

    // await page.getByRole('textbox', {name:'Username'})
    await page.getByLabel("Username").fill("student")

    // toHaveValue("value") - Checks if an INPUT field is having the value as "value"

    await expect(page.getByLabel("Username")).toHaveValue("student")

    // pressSequentially("string") - Set the value inside the input field but character by character
    await page.locator("#password").pressSequentially("Password123")

    await page.getByRole('button', {name: 'Submit'}).click()

    // 1. There should be an element which should have a text value as "Logged In Successfully"
    // 2. Logout should be visible on the page

    // toHaveText("string") - Which validate if an element have "string" as text value
    // toContainText("string") - contains text or ot
    await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully")
    await expect(page.locator("h1.post-title")).toContainText("Successfully")

    // toBeVisible() - Check if the element is visible on the page or not
    await expect(page.getByText("Log out", {exact:true})).toBeVisible()

})