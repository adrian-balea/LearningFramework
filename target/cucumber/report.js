$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into account",
  "description": "",
  "id": "login-into-account",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login into account with correct credentials",
  "description": "",
  "id": "login-into-account;login-into-account-with-correct-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User navigates to stackoverflow website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click on contact Us",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters a valid username",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters a valid password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user should be taken to the succesful login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_navigates_to_stackoverflow_website()"
});
formatter.result({
  "duration": 3178014691,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_login()"
});
formatter.result({
  "duration": 33978,
  "status": "passed"
});
formatter.match({
  "location": "Login.userClickOnContactUs()"
});
formatter.result({
  "duration": 28174,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enters_a_valid_username()"
});
formatter.result({
  "duration": 46164,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enters_a_valid_password()"
});
formatter.result({
  "duration": 45136,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 145701,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_should_be_taken_to_the_succesful_login_page()"
});
formatter.result({
  "duration": 26808,
  "status": "passed"
});
});