import { test, expect } from '@playwright/test';

test('validate dropdown', async ({ page }) => {
await page.goto('https://www.facebook.com/r.php?entry_point=login');
await page.getByLabel('Month').selectOption('Nov.');
//await page.getByTestId("open-registration-form-button").click();
//await page.getByRole('button',{name :'Create a new account'}).click();
//await page.getByRole("button", { name: "Create a new account" }).click();
})