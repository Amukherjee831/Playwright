import { expect,test } from "@playwright/test"

test('LocatingMultipleLinks',async({page})=>{

await page.goto('https://www.demoblaze.com/index.html')    

const links=await page.$$('a')
for(const link of links)
{
    const linktext = await link.textContent()
    console.log(linktext)
}
await expect(page.locator("//div[@id='tbodyid']")).toBeVisible()
const products = await page.$$("//div[@id='tbodyid']//div//h4/a")
for(const product of products)
{
    const ProductName=await product.textContent()
    console.log(ProductName)
}

})