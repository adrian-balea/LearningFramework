$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Submit the Contact us page",
  "description": "",
  "id": "submit-the-contact-us-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1898449340,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login into account with correct credentials",
  "description": "",
  "id": "submit-the-contact-us-page;login-into-account-with-correct-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User navigates to contact us page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters the first name",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters last name",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters email",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters a comment",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user is landed on the thank you page",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsSteps.user_navigates_to_contact_us_page()"
});
formatter.result({
  "duration": 350324424,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.user_enters_the_first_name()"
});
formatter.result({
  "duration": 193407644,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.user_enters_last_name()"
});
formatter.result({
  "duration": 126796256,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.user_enters_email()"
});
formatter.result({
  "duration": 180587200,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.user_enters_a_comment()"
});
formatter.result({
  "duration": 174987152,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 703660928,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.user_is_landed_on_the_thank_you_page()"
});
formatter.result({
  "duration": 2073100652,
  "status": "passed"
});
formatter.after({
  "duration": 113268612,
  "status": "passed"
});
});