$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ClickButtons.feature");
formatter.feature({
  "line": 2,
  "name": "Click the buttons",
  "description": "",
  "id": "click-the-buttons",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Buttons"
    }
  ]
});
formatter.before({
  "duration": 2034331589,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Click the first button and close the popup",
  "description": "",
  "id": "click-the-buttons;click-the-first-button-and-close-the-popup",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User navigates to click buttons page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "clicks on the first button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user closes the first popup",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "check that the first popup is closed",
  "keyword": "Then "
});
formatter.match({
  "location": "ClickButtonsSteps.user_navigates_to_click_buttons_page()"
});
formatter.result({
  "duration": 485464827,
  "status": "passed"
});
formatter.match({
  "location": "ClickButtonsSteps.click_on_the_webelement_click_button()"
});
formatter.result({
  "duration": 149294715,
  "status": "passed"
});
formatter.match({
  "location": "ClickButtonsSteps.user_closes_the_popup()"
});
formatter.result({
  "duration": 628823593,
  "status": "passed"
});
formatter.match({
  "location": "ClickButtonsSteps.the_popup_is_closed()"
});
formatter.result({
  "duration": 534096428,
  "status": "passed"
});
formatter.after({
  "duration": 116771949,
  "status": "passed"
});
formatter.before({
  "duration": 1035599387,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Click the second button and close the popup",
  "description": "",
  "id": "click-the-buttons;click-the-second-button-and-close-the-popup",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User navigates to click buttons page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "clicks on the second button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user closes the second popup",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "check that the second popup is closed",
  "keyword": "Then "
});
formatter.match({
  "location": "ClickButtonsSteps.user_navigates_to_click_buttons_page()"
});
formatter.result({
  "duration": 341461157,
  "status": "passed"
});
formatter.match({
  "location": "ClickButtonsSteps.clicks_on_the_second_button()"
});
formatter.result({
  "duration": 1119988908,
  "status": "passed"
});
formatter.match({
  "location": "ClickButtonsSteps.user_closes_the_second_popup()"
});
formatter.result({
  "duration": 95854254,
  "status": "passed"
});
formatter.match({
  "location": "ClickButtonsSteps.second_popup_is_closed()"
});
formatter.result({
  "duration": 532965034,
  "status": "passed"
});
formatter.after({
  "duration": 110653060,
  "status": "passed"
});
formatter.before({
  "duration": 1116944238,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Click the third button and close the popup",
  "description": "",
  "id": "click-the-buttons;click-the-third-button-and-close-the-popup",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "User navigates to click buttons page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "clicks on the third button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user closes the third popup",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "check that the third popup is closed",
  "keyword": "Then "
});
formatter.match({
  "location": "ClickButtonsSteps.user_navigates_to_click_buttons_page()"
});
formatter.result({
  "duration": 365210411,
  "status": "passed"
});
formatter.match({
  "location": "ClickButtonsSteps.clicks_on_the_third_button()"
});
formatter.result({
  "duration": 229200726,
  "status": "passed"
});
formatter.match({
  "location": "ClickButtonsSteps.user_closes_the_third_popup()"
});
formatter.result({
  "duration": 616328411,
  "status": "passed"
});
formatter.match({
  "location": "ClickButtonsSteps.third_popup_is_closed()"
});
formatter.result({
  "duration": 531662900,
  "status": "passed"
});
formatter.after({
  "duration": 103212280,
  "status": "passed"
});
formatter.uri("SumbitContactUsForm.feature");
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
  "duration": 1078296670,
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
  "duration": 351787464,
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
  "duration": 190894630,
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
  "duration": 111316352,
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
  "duration": 165693502,
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
  "duration": 161720623,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 806880322,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.user_is_landed_on_the_thank_you_page()"
});
formatter.result({
  "duration": 1058656684,
  "status": "passed"
});
formatter.after({
  "duration": 113327607,
  "status": "passed"
});
});