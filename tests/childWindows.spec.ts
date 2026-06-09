// Multiple tabs or windows - "popup" event - page.waitForEvent("popup")

// Step by step process to handle multiple tabs/windows using PW:

// 1. Launch the url = page.goto()
// 2. Wait for "popup" event to appear on the page without using "await"  
// - const page1 = page.waitForEvent("popup")
// 3. Identify and click on the element which is responsible for generation of "popup" event on the page.
// 4. We can store the final result of "popup" event in a variable.
// const newPage = await page1
// 5. Perform any action on the new tab/window, we must use "newPage" object
// 6. Come back to the main/original page   and perform any action by using "page" fixture

// promise - pending, success or rejected

import {test, expect, Locator} from '@playwright/test'


test("Handling multiple windows", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")

    const page1 = page.waitForEvent("popup")
    // console.log(page1);
    

    // Click on the element which is responsible for generation of "popup" event on the page
    await page.locator("#Tabbed button").click()
    const newPage = await page1
    // console.log(newPage);

    await page.getByText("Downloads", {exact:true}).click()

    await expect(newPage.locator("h2#bindings")).toContainText("WebDriver Language Bindings")

    // const page2 = page.waitForEvent("popup")
    // // console.log(page1);
    

    // // Click on the element which is responsible for generation of "popup" event on the page
    // await page.locator("#Tabbed button").click()
    // const newPage1 = await page2

    //await page.bringToFront()

    await page.getByText("Home", {exact:true}).click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
    


})

// frame

