
Feature: I have created a LoginActivity usin Android Studio. But it looked simple to me. That's why I would like to write WebDriverIO login page test scenario scripts

  Background:
    Given I am on the login view

  Scenario: As a user, I check elements are available on the Login Page
    When element selector or xpath "//android.widget.EditText[@content-desc='input-email']" is available on the page
    When element selector or xpath "//android.widget.EditText[@content-desc='input-password']" is available on the page
    When element selector or xpath "//android.view.ViewGroup[@content-desc='button-LOGIN']/android.view.ViewGroup" is available on the page

  Scenario Outline: As a user, I would like log into the wdio app successfully
    When I login with <username> and <password>
    Then I should see a flash message saying <message> for <testcase>

    Examples:
      | username           | password   | message            | testcase     |
      | minann38@gmail.com | Mehmet123* | You are logged in! | successLogin |


  Scenario Outline: I check e-mail error message, Please enter a valid email address
    When I login with <username> and <password>
    Then I should see a flash message saying <message> for <testcase>

    Examples:
      | username          | password   | message                            | testcase          |
      | minann38gmail.com | Mehmet123* | Please enter a valid email address | invalidMailAdress |


  Scenario Outline: I check password error message, Please enter at least 8 characters
    When I login with <username> and <password>
    Then I should see a flash message saying <message> for <testcase>
    Examples:
      | username           | password | message                            | testcase        |
      | minann38@gmail.com | Mehmet   | Please enter at least 8 characters | invalidPassword |