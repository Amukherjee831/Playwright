const {test,expect} = require('@playwright/test')

//import{test,expect} from '@playwright/test'

test('Locators',async({page})=> {

await page.goto("https://www.demoblaze.com/index.html")
await page.click('id=login2')
await page.fill('#loginusername',"arunava")
await page.fill("input[id='loginpassword']","password")
await page.click("//button[normalize-space()='Log in']")
const logoutlink=page.locator("//button[normalize-space()='Log in']")
expect(logoutlink).toBeVisible
page.close

})

