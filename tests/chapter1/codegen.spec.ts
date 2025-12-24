import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwirght automation by tester');
  await page.locator('div').filter({ hasText: /^playwright automation testers talk$/ }).first().click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.locator('a').filter({ hasText: 'videosPlay all' }).click();
  await expect(page.getByRole('link', { name: 'Playwright by Testers Talk☑️' })).toBeVisible();
  
});