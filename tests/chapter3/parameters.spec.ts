import { test, expect } from '@playwright/test';
const inputdata=['iphone 11','ggggyu'];
for(const val of inputdata){

test(`parameter passing in  testcase ${val}`, async ({ page }) => {
await page.goto('https://www.google.com/');
await page.getByLabel('Search',{exact:true}).first().click();
await page.getByLabel('Search',{exact:true}).first().fill(val);    

})  }