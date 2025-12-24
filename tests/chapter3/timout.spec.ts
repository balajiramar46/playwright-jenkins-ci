import { test, expect } from '@playwright/test';
test('timeout validation', async ({ page }) => {
    test.setTimeout(1*60*1000)

   
await page.goto('https://www.google.com/');

await page.getByLabel('Search',{exact:true}).first().click();
await page.getByLabel('Search',{exact:true}).first().fill('hiuhikjk'); 
await expect(page).toHaveScreenshot('fdsf.png',{timeout:4000});  

//await page.waitForTimeout(60000);
})  