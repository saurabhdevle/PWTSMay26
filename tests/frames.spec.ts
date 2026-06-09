// Frames

/*

Helping us in integrating one html page to another html page. 
By using tag - iframe



<html> - page.goto("https://demo.automationtesting.in/Frames.html")

    <iframe> - const framePage = page.frameLocator()
        <html> 
         .....
        </html>

    <iframe>
    

</html>



*/


import {test, expect} from '@playwright/test'

test.only("Handling frames", async function({page}){
    await page.goto("https://demo.automationtesting.in/Frames.html")

    // frameLocator() - Which helps us in entering inside the iframe to select the elements

    const framePage = await page.frameLocator("#Single iframe")

    await framePage.locator("div.col-xs-6 input").first().fill("Testing")
    await expect(framePage.locator("div.col-xs-6 input").first()).toHaveValue("Testing")

    await page.getByText("Iframe with in an Iframe", {exact:true}).click()

    const outerFrame = page.frameLocator("#Multiple iframe")
    const innerFrame = outerFrame.frameLocator(".iframe-container iframe")

    await innerFrame.locator("input[type='text']").first().fill("Nested Frames")
    await expect(innerFrame.locator("input[type='text']").first()).toHaveValue("Nested Frames")

    await page.getByText("Home", {exact:true}).click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

    // Go back to the previous page - goback()
    await page.goBack()

    await page.getByText("Iframe with in an Iframe", {exact:true}).click()

    await innerFrame.locator("input[type='text']").first().clear()

    await innerFrame.locator("input[type='text']").first().fill("Inner Frames")
    await expect(innerFrame.locator("input[type='text']").first()).toHaveValue("Inner Frames")


})