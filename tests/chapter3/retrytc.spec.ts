import { test, expect } from '@playwright/test';

test('test 1', async ({ page }) => {
await page.goto('https://www.google.com/');
await expect.soft(page.getByPlaceholder('Searchs',{exact:true}).first()).toBeDisabled();
await page.getByPlaceholder('Search',{exact:true}).first().fill('iphone 11');    

})  