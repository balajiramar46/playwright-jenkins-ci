import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //await page.goto('https://www.youtube.com/');
  //await page.getByRole('link',{name:'Sign in'}) .click()
  //await page.getByLabel('Homepage',{exact:true}).first().click();
  //await page.getByAltText("View sunnysavita10's full-sized avatar").click();
 // await page.getByTestId("projects").first().click();

 //await page.getByPlaceholder('Search').fill('Miekaan');
 //await page.locator('input[name="search_query"]').fill('Miekaan');//await page.locator('//input[@name="search_query"]').fill('Miekaan');
await page.goto('https://www.google.com/');
await page.getByTitle('Search').fill('balaji ramar');
})