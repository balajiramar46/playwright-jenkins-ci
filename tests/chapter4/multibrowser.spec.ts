import { test, expect } from '@playwright/test';
test('multiple browser' , async ({ page,browser }) => {
await page.goto('https://www.google.com/');

await page.getByLabel('Search',{exact:true}).first().click();
await page.getByLabel('Search',{exact:true}).first().fill('hiuhikjk'); 
const contexr=await browser.newContext();
const pag2=await contexr.newPage();
await pag2.goto('https://www.google.com/');

await pag2.getByLabel('Search',{exact:true}).first().click();
await pag2.getByLabel('Search',{exact:true}).first().fill('hiuhikjk');

 const newtab=await contexr.newPage();
 await newtab.goto('https://www.google.com/');

await newtab.getByLabel('Search',{exact:true}).first().click();
await newtab.getByLabel('Search',{exact:true}).first().fill('hiuhikjk'); 
})  