/**
 * sub page containing specific selectors and methods for a specific page
 */
import AlertWiew from '../pageobjects/alert.view';
class LoginPage {
    /**
     * define selectors using getter methods
     */
    public get inputUsername() {
        return $('//android.widget.EditText[@content-desc="input-email"]');
    }

    public get inputPassword() {
        return $('//android.widget.EditText[@content-desc="input-password"]');
    }

    public get btnSubmit() {
        return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup');
    }

    public get btnLogin() {
        return $('//android.widget.Button[@content-desc="Login"]/android.widget.TextView');
    }
    public get okButton() {
        return $('//*[@resource-id="android:id/button1"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login(username: string, password: string): Promise<void> {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public async messages(message: string, testcase: string): Promise<void> {

        switch (testcase) {
            case "successLogin": {
                await expect(AlertWiew.successLogin).toBeExisting();
                await expect(AlertWiew.successLogin).toHaveTextContaining(message);
                await this.okButton.click();
                break;
            }
            case "invalidMailAdress": {
                await browser.pause(5000);
                await expect(AlertWiew.invalidMailAdress).toBeExisting();

                await expect(AlertWiew.invalidMailAdress).toHaveTextContaining(message);

                break;
            }
            case "invalidPassword": {
                await expect(AlertWiew.invalidPassword).toBeExisting();
                await expect(AlertWiew.invalidPassword).toHaveTextContaining(message);
                break;
            }

        }

    }
    public async isElementDisplayed(element: string): Promise<void> {

        const elementpath = await $(element)
        elementpath.waitForExist({ timeout: 2000 })
        expect(elementpath).toExist;
        console.log("Element is exist");
    }

}

export default new LoginPage();
