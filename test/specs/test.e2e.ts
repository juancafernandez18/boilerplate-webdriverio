import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import AlertPage from '../pageobjects/alert.page.js';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await (await LoginPage.loginBtn).click();
        await LoginPage.login('tomsmith@mail.com', 'SuperSecretPassword!');
        await expect(AlertPage.messageAlert).toHaveText(expect.stringContaining(
            'You are logged in!'));
    });
});
