import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await test.step('navigating to url', async ()=>{
  await page.goto('https://www.amazon.com/');
  });
await test.step('click on your account', async ()=>{
  await page.getByRole('link', { name: 'Your Account' }).click();
    });
    await test.step('click on dubmit', async ()=>{
  await page.getByRole('button', { name: 'Submit' }).first().click();
  
 });
});
