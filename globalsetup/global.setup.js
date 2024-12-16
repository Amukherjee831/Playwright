
import{test,expect} from "@playwright/test"
import { decrypt } from "../utils/CryptojsUtil"


test("login Setup", async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page.locator("//img[@alt='company-branding']")).toBeVisible()
    //await page.locator("input[placeholder='Username']").fill("Admin")
    //const encrypted_username=Cryptojs.AES.encrypt('Admin','user').tostring()
    //console.log(encrypted_username)
    await page.locator("input[placeholder='Username']").fill(process.env.userid)
    //await page.locator("input[placeholder='Password']").fill("admin123")
    await page.locator("input[placeholder='Password']").fill(decrypt(process.env.password,"0ae2e82f11458a311ee49b2068fdf939"))
    await page.locator("button[type='submit']").click()
    await page.waitForTimeout(3000)
    expect(page.locator("//p[@class='oxd-userdropdown-name']")).toBeVisible()
    await page.context().storageState({path:"./playwright/.auth/auth.json"})
    //await page.waitForTimeout(3000)
})  