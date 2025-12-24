import { test, expect } from '@playwright/test';

test('iterting mathcing elements' , async ({ page }) => {
await page.goto('https://github.com/BakkappaN');
const links=await page.$$('.repo');
for(const val of links){
    const text=await val.textContent();
    console.log(`text value:${text}`)
}
for(let index=0;index < links.length; index++){
const texts= await links[index].textContent();

console.log(`text value third loop:${texts}`)
}

const linksss=await page.locator('.repo');
const counts= await linksss.count();
for(let index=0;index < counts ;index++){
    const text= await linksss.nth(index).textContent();
    console.log(`text value new loop:${text}`)
}
})

