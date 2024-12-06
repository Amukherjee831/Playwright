const { test, expect } = require("@playwright/test")

test('Builtin Locators',async({page})=>{
 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const logoelement= page.getByAltText('company-branding')
    await expect(logoelement).toBeVisible()

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button',{type:'submit'}).click()
    await page.locator("//p[@class='oxd-userdropdown-name']").toBeVisible
    const name=page.locator("//p[@class='oxd-userdropdown-name']").textContent
    console.log(name);
    //await expect(page.getByText(name)).toBeVisible()    

})

