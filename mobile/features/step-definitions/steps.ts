import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.view';
import AlertWiew from '../pageobjects/alert.view';

Given(/^I am on the (\w+) view$/, async (page) => {

    await LoginPage.btnLogin.click();
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {

    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*) for (.*)$/, async (message, testcase) => {

    await LoginPage.messages(message, testcase)
});

When(/^element selector or xpath "(.*)" is available on the page$/, async (element) => {

    LoginPage.isElementDisplayed(element);
});

