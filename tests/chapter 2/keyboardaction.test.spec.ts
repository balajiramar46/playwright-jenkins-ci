

import { test, expect } from '@playwright/test';

test('keyboard actions', async ({ page }) => {
await page.goto('https://www.google.com/');
await page.getByTitle('Search').first().click();
await page.getByTitle('Search').first().fill('balaji ramar');
//wait page.getByTitle('Search').first().press('Enter');
await page.getByTitle('Search').first().click();
await page.getByTitle('Search').first().press('Control+A');
await page.getByTitle('Search').first().press('Delete');
})