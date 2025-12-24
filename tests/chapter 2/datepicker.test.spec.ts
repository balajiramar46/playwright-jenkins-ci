import { test, expect } from '@playwright/test';

test('dra and drop', async ({ page }) => {
    await page.goto('https://jqueryui.com/datepicker/');
    const iframe=page.frameLocator('[class="demo-frame"]');
    
    //await iframe.locator('[id="datepicker"]').fill('22/11/1989');
    await iframe.locator('[id="datepicker"]').click();
    await iframe.locator('.ui-datepicker-today').click();
   
}) 