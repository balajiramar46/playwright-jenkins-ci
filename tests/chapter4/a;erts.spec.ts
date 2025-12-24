import { test, expect } from '@playwright/test';
import { once } from 'events';
test('alert handling' , async ({ page,browser }) => {
await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
page.once('dialog',dialog =>{
    dialog.dismiss();
    console.log(`alert msg is :${dialog.message()}`)
})
await page.getByText('See an example alert', {exact:true}).click();
})

test('prompt handling' , async ({ page,browser }) => {
await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
page.once('dialog',async(dialog) =>{
   await dialog.accept('balaji ramar')
    console.log(`alert msg is :${dialog.message()}`)
})
await page.getByText('See a sample prompt', {exact:true}).click();
})