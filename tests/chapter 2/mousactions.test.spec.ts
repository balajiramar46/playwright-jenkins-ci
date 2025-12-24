import { test, expect } from '@playwright/test';

test('muse actions', async ({ page }) => {
await page.goto('https://www.flipkart.com/');
//await page.getByTitle('Search for Products, Brands and More').first().click({button :'right'});
await page.getByTitle('Become a Seller').first().hover();
})