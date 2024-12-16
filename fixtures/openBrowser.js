import{test as base} from '@playwright/test'
/*let page

test.beforeEach('Run before each test',async({Browser})=>{

    page=await Browser.newPage()
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})

test.afterEach (async({})=>{
    await page.locator('span').filter({ hasText: 'manda user' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
})

export default test*/

//const baseURL="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
export const test = base.extend({
    page: async ({ baseURL, page }, use) => {
      await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      await use(page);
      await page.locator('span').filter({ hasText: 'manda user' }).locator('i').click();
      await page.getByRole('menuitem', { name: 'Logout' }).click();
    },
})
