import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';

test.describe('Login flow', () => {
  test('successful login with valid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('tomsmith', 'SuperSecretPassword!');

    await expect(page).toHaveURL(/.*\/secure/);
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
    await expect(login.isLogoutVisible()).resolves.toBeTruthy();
  });

  test('shows error with invalid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('invalid-user', 'bad-password');

    await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
    await expect(page.locator('#flash')).toContainText('Your username is invalid!');
    const flash = await login.getFlashText();
    expect(flash.length).toBeGreaterThan(0);
  });
});
