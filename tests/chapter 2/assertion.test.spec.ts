import { test, expect } from '@playwright/test';

test('assertions', async ({ page }) => {
    await page.goto('https://www.youtube.com/');
    await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeVisible();
    await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEnabled();
    await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEditable();
   
await page.getByPlaceholder('Search',{exact:true}).first().click();
await page.getByPlaceholder('Search',{exact:true}).first().fill('iphone 11');
await page.getByPlaceholder('Search',{exact:true}).first().press('Enter');
await expect(page).toHaveTitle('iphone 11 - YouTube');


})