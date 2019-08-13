$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Submit the Contact us page",
  "description": "",
  "id": "submit-the-contact-us-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login into account with correct credentials",
  "description": "",
  "id": "submit-the-contact-us-page;login-into-account-with-correct-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to contact us page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cfirstName\u003e\" as first name",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003clastName\u003e\" as last name",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cemail\u003e\" as email",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters \"\u003ccomment\u003e\" comment",
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
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "submit-the-contact-us-page;login-into-account-with-correct-credentials;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "comment"
      ],
      "line": 14,
      "id": "submit-the-contact-us-page;login-into-account-with-correct-credentials;;1"
    },
    {
      "cells": [
        "Adrian",
        "Balea",
        "adrian.balea@mailinator.com",
        "Comment for the contact us page"
      ],
      "line": 15,
      "id": "submit-the-contact-us-page;login-into-account-with-correct-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2331987360,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login into account with correct credentials",
  "description": "",
  "id": "submit-the-contact-us-page;login-into-account-with-correct-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to contact us page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"Adrian\" as first name",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters \"Balea\" as last name",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters \"adrian.balea@mailinator.com\" as email",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters \"Comment for the contact us page\" comment",
  "matchedColumns": [
    3
  ],
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
  "duration": 410589618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adrian",
      "offset": 13
    }
  ],
  "location": "ContactUsSteps.user_enters_the_first_name(String)"
});
formatter.result({
  "duration": 270260773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Balea",
      "offset": 13
    }
  ],
  "location": "ContactUsSteps.user_enters_last_name(String)"
});
formatter.result({
  "duration": 165092505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adrian.balea@mailinator.com",
      "offset": 13
    }
  ],
  "location": "ContactUsSteps.user_enters_email(String)"
});
formatter.result({
  "duration": 203235453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Comment for the contact us page",
      "offset": 13
    }
  ],
  "location": "ContactUsSteps.user_enters_a_comment(String)"
});
formatter.result({
  "duration": 192470520,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 568433888,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.user_is_landed_on_the_thank_you_page()"
});
formatter.result({
  "duration": 2078282704,
  "status": "passed"
});
formatter.after({
  "duration": 166197734,
  "status": "passed"
});
});