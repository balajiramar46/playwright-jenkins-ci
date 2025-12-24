//import platywirght module
import { test, expect } from '@playwright/test'
test('my first ts code', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.getByRole('combobox', { name: 'Search' }).fill('pixel 10');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await page.getByRole('link', { name: 'Pixel, the Only Smartphones' }).first().click
    //await expect(page).toHaveTitle('https://store.google.com/in/product/pixel_10?utm_source=sem_bkws&utm_medium=dr&utm_campaign=GS107236&gclsrc=aw.ds&gad_source=1&gad_campaignid=22703846556&gbraid=0AAAAACfFHMPD1FJIA_GQr8tj7gsrgOyFp&gclid=Cj0KCQjw5onGBhDeARIsAFK6QJZbxRCDN7R3Dvc1hEaLQ1cheJ4VnNxkm9_o_fLssNvIt5MqydqztPAaAoQ2EALw_wcB&hl=en-IN')
})