import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwirght automation by tester');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
//element screeshot
await page.locator('#root-container').screenshot({path:'./screeshots/elemnetss.png'})
//page screenshot
await page.screenshot({path:'./screeshots/pageelemnetss.png'});

//full page ss
await page.screenshot({path:'./screeshots/fullpageelemnetss.png',fullPage:true});
})