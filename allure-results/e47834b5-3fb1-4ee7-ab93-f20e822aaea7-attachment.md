# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPageTestUsingEnv.spec.ts >> Test login with incorrect credentials
- Location: tests\LoginPageTestUsingEnv.spec.ts:16:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://qa.rahulshettyacademy.com/client
Call log:
  - navigating to "https://qa.rahulshettyacademy.com/client", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]: Check if there is a typo in qa.rahulshettyacademy.com.
    - generic [ref=e9]:
      - paragraph
      - list [ref=e10]:
        - listitem [ref=e11]:
          - text: If spelling is correct,
          - link "try running Windows Network Diagnostics" [ref=e12] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=e13]: DNS_PROBE_FINISHED_NXDOMAIN
  - button "Reload" [ref=e16] [cursor=pointer]
```

# Test source

```ts
  1  | // Locators and methods related to Login Page
  2  | 
  3  | import { Locator, Page } from "@playwright/test";
  4  | 
  5  | export class LoginPage{
  6  | 
  7  |     // Locators  - Properties
  8  | 
  9  |     page: Page
  10 |     private email :Locator 
  11 |     private password: Locator
  12 |     private loginBtn: Locator
  13 |     errorMessage : Locator
  14 |     homePageIdentifer : Locator
  15 | 
  16 |     constructor(page:Page){
  17 |         this.page = page 
  18 |         this.email = this.page.getByPlaceholder("email@example.com") 
  19 |         this.password = this.page.getByPlaceholder("enter your passsword")
  20 |         this.loginBtn = this.page.locator("#login")
  21 |         this.errorMessage = this.page.locator("#toast-container")
  22 |         this.homePageIdentifer = this.page.locator("[routerlink='/dashboard/']")
  23 |     }
  24 | 
  25 |     // Methods
  26 | 
  27 |     async launchURL(url:string){
> 28 |         await this.page.goto(url)
     |                         ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://qa.rahulshettyacademy.com/client
  29 |     }
  30 | 
  31 |     async loginIntoApplication(username:string, passsword: string){
  32 |         await this.email.fill(username)
  33 |         await this.password.fill(passsword)
  34 |         await this.loginBtn.click()
  35 |     }
  36 | 
  37 | }
```