import { test, expect } from '@playwright/test';

test('test 1',{tag:['@smoke']}, async ({ page }) => {
await page.goto('https://www.google.com/');

})
test('test 2',{tag:['@regression']}, async ({ page }) => {
await page.goto('https://www.google.com/');

})
