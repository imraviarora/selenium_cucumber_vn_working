$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyAccountLogin.feature");
formatter.feature({
  "line": 1,
  "name": "MyAccount-Login Feature",
  "description": "Description: This fearture will test a login functionality",
  "id": "myaccount-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login with valid username and password",
  "description": "",
  "id": "myaccount-login-feature;login-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter the url\"http://practice.automationtesting.in/\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on My Account Menu",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter registered username and password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User must successfully login to the web page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyAccountLoginStepDefinations.open_browser()"
});
formatter.result({
  "duration": 6026461700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://practice.automationtesting.in/",
      "offset": 14
    }
  ],
  "location": "MyAccountLoginStepDefinations.enter_the_url(String)"
});
formatter.result({
  "duration": 4772935500,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinations.click_on_My_Account_Menu()"
});
formatter.result({
  "duration": 1268287100,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinations.enter_registered_username_and_password()"
});
formatter.result({
  "duration": 1206148000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinations.click_on_login_button()"
});
formatter.result({
  "duration": 97090500,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinations.user_must_successfully_login_to_the_web_page()"
});
formatter.result({
  "duration": 25000,
  "status": "passed"
});
});