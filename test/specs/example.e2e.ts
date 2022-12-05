import LoginPage from  '../pageobjects/login.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await (await LoginPage.loginBtn).click();
        await LoginPage.login('tomsmith@mail.com', 'SuperSecretPassword!');
    });
});

