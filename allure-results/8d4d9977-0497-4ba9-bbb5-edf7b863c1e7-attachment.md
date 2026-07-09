# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2EUsingUIAndAPI.spec.ts >> E2E automation scenario
- Location: tests\E2EUsingUIAndAPI.spec.ts:35:5

# Error details

```
ReferenceError: email is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - generic [ref=e28]:
    - generic [ref=e32]:
      - generic [ref=e33]: iphone 13 pro
      - generic [ref=e34]: $ 55000
      - generic [ref=e35]: "Quantity: 1"
      - list [ref=e37]:
        - listitem [ref=e38]: Apple phone
    - generic [ref=e41]:
      - generic [ref=e42]: Payment Method
      - generic [ref=e43]:
        - generic [ref=e44] [cursor=pointer]: Credit Card
        - generic [ref=e45] [cursor=pointer]: Paypal
        - generic [ref=e46] [cursor=pointer]: SEPA
        - generic [ref=e47] [cursor=pointer]: Invoice
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]: Personal Information
          - generic [ref=e52]:
            - generic [ref=e54]:
              - generic [ref=e55]: Credit Card Number
              - textbox [ref=e56]: 4542 9931 9292 2293
            - generic [ref=e57]:
              - generic [ref=e58]:
                - generic [ref=e59]: Expiry Date
                - combobox [ref=e60]:
                  - option "01" [selected]
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                - combobox [ref=e61]:
                  - option "01"
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                  - option "13"
                  - option "14"
                  - option "15"
                  - option "16" [selected]
                  - option "17"
                  - option "18"
                  - option "19"
                  - option "20"
                  - option "21"
                  - option "22"
                  - option "23"
                  - option "24"
                  - option "25"
                  - option "26"
                  - option "27"
                  - option "28"
                  - option "29"
                  - option "30"
                  - option "31"
              - generic [ref=e62]:
                - generic [ref=e63]: CVV Code ?
                - textbox [ref=e64]
            - generic [ref=e66]:
              - generic [ref=e67]: Name on Card
              - textbox [ref=e68]
            - generic [ref=e69]:
              - generic [ref=e70]:
                - generic [ref=e71]: Apply Coupon
                - textbox [ref=e72]
              - button "Apply Coupon" [ref=e75] [cursor=pointer]
        - generic [ref=e76]:
          - generic [ref=e77]: Shipping Information
          - generic [ref=e79]:
            - generic [ref=e80]: testnHNk@gmail.com
            - textbox [ref=e81]: testnHNk@gmail.com
            - textbox "Select Country" [ref=e84]
            - generic [ref=e86] [cursor=pointer]: Place Order
```

# Test source

```ts
  1   | import {test, expect} from '@playwright/test'
  2   | 
  3   | const url = "https://rahulshettyacademy.com/client"
  4   | const loginUrl = "https://rahulshettyacademy.com/api/ecom/auth/login"
  5   | const loginPayload = {userEmail: "testnHNk@gmail.com", userPassword: "Testing@1234"}
  6   | const orderURL = "https://rahulshettyacademy.com/api/ecom/order/create-order"
  7   | const orderPayload = {orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]}
  8   | let token:string
  9   | let country = " Singapore"
  10  | let productName = "iphone 13 pro"
  11  | 
  12  | 
  13  | test.beforeEach("API Testing for login", async ({request})=>{
  14  | 
  15  |     const response = await request.post(loginUrl, {
  16  |         data: loginPayload
  17  |     })
  18  |     const responseBody  = await response.json()
  19  |    // console.log(responseBody);
  20  | 
  21  |     expect(responseBody).toHaveProperty("token")
  22  |     expect( typeof responseBody.token).toBe("string")
  23  | 
  24  |     token = responseBody.token
  25  |     console.log(token);
  26  | 
  27  |     const orderResponse = await request.post(orderURL, {
  28  |         data:orderPayload,
  29  |         headers:{
  30  |             "authorization": token
  31  |         }
  32  |         })
  33  | })
  34  | 
  35  | test("E2E automation scenario", async ({page})=>{
  36  |     await page.addInitScript(function(value:string){
  37  |         window.localStorage.setItem("token", value)
  38  |     }, token)
  39  | 
  40  |     await page.goto(url)
  41  |     // Find the number of products are displaying on the page
  42  | 
  43  |     const products  = page.locator("div.card-body") // 3
  44  | 
  45  |     // count() - Returns the number of element matching with the locator
  46  | 
  47  |     await products.nth(0).waitFor()
  48  |     const countOfProduct = await products.count() // 3 - [0,1,2]
  49  | 
  50  |     // filter() - Filter out the value depending on the criteria
  51  |     await products.filter({hasText:`${productName}`}).locator("button").last().click()
  52  | 
  53  |     // for(let i=0; i<countOfProduct; i++){
  54  |     //     // div.card-body b
  55  |     //     const productText = await products.nth(i).locator("b").textContent()
  56  |     //     if(productText === productName){
  57  |     //         await products.nth(i).locator("button").last().click()
  58  |     //         break
  59  |     //     }
  60  |     // }
  61  | 
  62  |     await expect(page.locator("#toast-container")).toHaveText("Product Added To Cart")
  63  | 
  64  |     await page.locator("[routerlink='/dashboard/cart']").click()
  65  |     await page.getByRole("button", {name:'Checkout'}).click()
> 66  |     await expect(page.locator("div.user__name input").first()).toHaveValue(email)
      |                                                                            ^ ReferenceError: email is not defined
  67  | 
  68  |     await page.locator("div.user__name input").last().pressSequentially("in")
  69  | 
  70  |     const ddresult = page.locator("section.ta-results button")
  71  | 
  72  |     await ddresult.nth(0).waitFor()
  73  | 
  74  |     const countOfddResult = await ddresult.count()
  75  | 
  76  |     await ddresult.filter({hasText:`${country}`}).click()
  77  | 
  78  |     // for(let i =0; i<countOfddResult; i++){
  79  |     //     const countryText = await ddresult.nth(i).textContent()
  80  |     //     if(countryText === country){
  81  |     //         await ddresult.nth(i).click()
  82  |     //         break
  83  |     //     }
  84  |     // }
  85  | 
  86  |     await page.getByText("Place Order").click()
  87  |     await expect(page.locator("h1.hero-primary")).toContainText("Thankyou")
  88  | 
  89  |     const orderText = await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
  90  | 
  91  |     const orderID = orderText!.replaceAll("|"," ").trim()
  92  |     console.log(orderID)
  93  | 
  94  |     await page.locator("[routerlink='/dashboard/myorders']").first().click()
  95  |     await expect(page.locator("table tbody")).toBeVisible()
  96  | 
  97  |     // Table - Combination of rows and columns
  98  |         // thead - Table Heading
  99  |         // tbody - Table body - Which will consists of all the data inside the table
  100 |             // tr - Table row
  101 |                 //td - Table definition - Table Column
  102 | 
  103 | 
  104 |     const rows = page.locator("table tbody tr")
  105 |     const rowCount = await rows.count()
  106 | 
  107 |     for(let i=0; i<rowCount; i++){
  108 |         const orderText = await rows.nth(i).locator("th").textContent()
  109 | 
  110 |         if(orderText === orderID){
  111 |             await rows.nth(i).locator("button").first().click()
  112 |             break
  113 |         }
  114 |     }
  115 | 
  116 |     await expect(page.locator("div.col-text")).toHaveText(orderID!)
  117 | })
  118 | 
  119 | 
```