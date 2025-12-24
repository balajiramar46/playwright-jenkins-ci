import { test, expect } from '@playwright/test';

test('reprot' , async ({ page,browser }) => {
await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
page.once('dialog',dialog =>{
    dialog.dismiss();
    console.log(`alert msg is :${dialog.message()}`)
})
await page.getByText('See an example alert', {exact:true}).click();
})

test('reprotfd' , async ({ page,browser }) => {
await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
page.once('dialog',dialog =>{
    dialog.dismiss();
    console.log(`alert msg is :${dialog.message()}`)
})
await page.getByText('See an example alert', {exact:true}).click();
})
test('reprotfd' , async ({ page,browser }) => {
await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
page.once('dialog',dialog =>{
    dialog.dismiss();
    console.log(`alert msg is :${dialog.message()}`)
})
await page.getByText('See an example alert', {exact:true}).click();
})
test('reprotfd' , async ({ page,browser }) => {
await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
page.once('dialog',dialog =>{
    dialog.dismiss();
    console.log(`alert msg is :${dialog.message()}`)
})
await page.getByText('See an example alert', {exact:true}).click();
})