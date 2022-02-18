import { ChainablePromiseElement } from 'webdriverio';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class AlertWiew {
    /**
     * define selectors using getter methods
     */
    public get successLogin() {
        return $('//*[@resource-id="android:id/message"]');
    }

    public get invalidMailAdress() {
        return $('//android.widget.TextView[@text="Please enter a valid email address"]');
    }

    public get invalidPassword() {
        return $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
    }
}

export default new AlertWiew();
