$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into account",
  "description": "",
  "id": "login-into-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1888810042,
  "status": "passed"
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
  "duration": 9571275389,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_login()"
});
formatter.result({
  "duration": 116832,
  "status": "passed"
});
formatter.match({
  "location": "Login.userClickOnContactUs()"
});
formatter.result({
  "duration": 107893,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enters_a_valid_username()"
});
formatter.result({
  "duration": 48001,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enters_a_valid_password()"
});
formatter.result({
  "duration": 31617,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 105867,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_should_be_taken_to_the_succesful_login_page()"
});
formatter.result({
  "duration": 36016,
  "status": "passed"
});
formatter.after({
  "duration": 142107972,
  "status": "passed"
});
});