import{test,expect} from '@playwright/test'
import{HomePage} from '../pages/HomePage.spec'
const testdata=JSON.parse(JSON.stringify(require("../testdata/data.json")))

test('pomtest', async({page})=>{

    await page.goto(testdata.link)
    const home=new HomePage(page)
    await home.Navigate("Admin")
    await page.waitForTimeout(3000)

})



