import { test, expect } from '@playwright/test';

test(' soft assertions', async ({ page }) => {
    await page.goto('https://www.youtube.com/');
    await expect.soft(page.getByPlaceholder('Search',{exact:true}).first()).toBeDisabled();
await page.getByPlaceholder('Search',{exact:true}).first().fill('iphone 11');    
})