import {test, expect} from '@playwright/test'

// Title of the case should be unique in the same file

// page
// browser
// context
// request

test("Title", async function({page}){

})

test("Title1", async ({browser})=>{

    const context = await browser.newContext() // Creates a context of a browser
    const page = await context.newPage()
    // const context1 = await browser.newContext()
    // const page1 = await context1.newPage()

    // await page.waitForTimeout(5000)
    // await page1.waitForTimeout(5000)


     // Creates a context of a browser


    //const page1 = await context.newPage()

})  


// 1. page fixture will identify ONLY a single page on the browser whereas browser
// fixture will understand the complete browser - it may have more than one page as well.

// 2. broswer fixture will no automatically launch the browser whereas the page fixure
// will automatically launhe the browser and create a new page on the browser

