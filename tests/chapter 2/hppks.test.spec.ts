import { test, expect } from '@playwright/test';
test.beforeAll(async()=>{
    console.log('befor hook');
})
test.afterAll(async()=>{
    console.log('after hook');
})
test.beforeEach(async()=>{
    console.log('befor each hook');
})
test.afterEach(async()=>{
    console.log('after each hook');
})
test('test 1', async ({ page }) => {
    console.log('btest 1 execution');
    await page.goto('https://www.google.com/');
await page.getByTitle('Search').fill('balaji ramar');
})
test('test 2', async ({ page }) => {
        console.log('btest 2 execution');
    await page.goto('https://www.google.com/');
await page.getByTitle('Search').fill('btiger');
})