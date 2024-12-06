
const { test, expect } = require('@playwright/test');


//test and expect are packages

test('Home Page',async ({page})=>{

    await page.goto("https://www.demoblaze.com/index.html");
    const pageTilte=page.title;
    console.log("Page title is :",pageTilte);
    await expect(page).toHaveTitle('STORE');
})