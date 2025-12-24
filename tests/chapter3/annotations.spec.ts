import { test, expect } from '@playwright/test';
import { describe } from 'node:test';
test.describe('smoke', ()=>{
test('test 1', async ({ page }) => {
await page.goto('https://www.google.com/');

})
});
test.describe('regresion', ()=>{
test('test 2', async ({ page }) => {
await page.goto('https://www.google.com/');

})
});
