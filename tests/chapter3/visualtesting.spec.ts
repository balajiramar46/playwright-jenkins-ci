import { test, expect } from '@playwright/test';
test('visual testing', async ({ page }) => {
await page.goto('https://www.google.com/');
await expect(page).toHaveScreenshot('fdsf.png');
await page.getByLabel('Search',{exact:true}).first().click();
await page.getByLabel('Search',{exact:true}).first().fill('hiuhikjk'); 
await expect(page).toHaveScreenshot('fdsf.png');   

})  