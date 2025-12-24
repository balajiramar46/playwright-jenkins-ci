import { test, expect } from '@playwright/test';

test('gettext and get attribute value' , async ({ page,browser }) => {
await page.goto('https://github.com/BakkappaN');
const val=await page.locator('[itemprop="name"]').innerText();
const final=val?.trim()
console.log(`name is:${final}`);
expect(final).toBe('Testers Talk');
const repot=await page.getByTestId('repositories').first().getAttribute('data-tab-item')
console.log(`attriube:${repot}`)
})
