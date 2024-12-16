import { expect} from "@playwright/test"
import {test} from '../fixtures/openBrowser.js'

test('LocatingMultipleLinks',async({page})=>{

    //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='Dashboard']").click()

})