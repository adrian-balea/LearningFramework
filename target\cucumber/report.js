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
  "duration": 4042062347,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Click the first button and close the popup",
  "description": "",
  "id": "click-the-buttons;click-the-first-button-and-close-the-popup",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@OneTest"
    }
  ]
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
  "location": "ClickButtons_Steps.user_navigates_to_click_buttons_page()"
});
formatter.result({
  "duration": 478327206,
  "status": "passed"
});
formatter.match({
  "location": "ClickButtons_Steps.click_on_the_webelement_click_button()"
});
formatter.result({
  "duration": 230001064,
  "status": "passed"
});
formatter.match({
  "location": "ClickButtons_Steps.user_closes_the_popup()"
});
formatter.result({
  "duration": 663507711,
  "status": "passed"
});
formatter.match({
  "location": "ClickButtons_Steps.the_popup_is_closed()"
});
formatter.result({
  "duration": 528337981,
  "status": "passed"
});
formatter.after({
  "duration": 962905354,
  "status": "passed"
});
formatter.before({
  "duration": 3221738846,
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
  "location": "ClickButtons_Steps.user_navigates_to_click_buttons_page()"
});
formatter.result({
  "duration": 379030451,
  "status": "passed"
});
formatter.match({
  "location": "ClickButtons_Steps.clicks_on_the_second_button()"
});
formatter.result({
  "duration": 1150859194,
  "status": "passed"
});
formatter.match({
  "location": "ClickButtons_Steps.user_closes_the_second_popup()"
});
formatter.result({
  "duration": 121968977,
  "status": "passed"
});
formatter.match({
  "location": "ClickButtons_Steps.second_popup_is_closed()"
});
formatter.result({
  "duration": 527047718,
  "status": "passed"
});
formatter.after({
  "duration": 825808601,
  "status": "passed"
});
formatter.before({
  "duration": 3289759290,
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
  "location": "ClickButtons_Steps.user_navigates_to_click_buttons_page()"
});
formatter.result({
  "duration": 334313047,
  "status": "passed"
});
formatter.match({
  "location": "ClickButtons_Steps.clicks_on_the_third_button()"
});
formatter.result({
  "duration": 351169635,
  "status": "passed"
});
formatter.match({
  "location": "ClickButtons_Steps.user_closes_the_third_popup()"
});
formatter.result({
  "duration": 626737116,
  "status": "passed"
});
formatter.match({
  "location": "ClickButtons_Steps.third_popup_is_closed()"
});
formatter.result({
  "duration": 533898154,
  "status": "passed"
});
formatter.after({
  "duration": 804521698,
  "status": "passed"
});
formatter.uri("ContactUsForm.feature");
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
  "duration": 3212000577,
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
  "location": "ContactUs_Steps.user_navigates_to_contact_us_page()"
});
formatter.result({
  "duration": 313337773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adrian",
      "offset": 13
    }
  ],
  "location": "ContactUs_Steps.user_enters_the_first_name(String)"
});
formatter.result({
  "duration": 287099912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Balea",
      "offset": 13
    }
  ],
  "location": "ContactUs_Steps.user_enters_last_name(String)"
});
formatter.result({
  "duration": 142390664,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adrian.balea@mailinator.com",
      "offset": 13
    }
  ],
  "location": "ContactUs_Steps.user_enters_email(String)"
});
formatter.result({
  "duration": 208718481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Comment for the contact us page",
      "offset": 13
    }
  ],
  "location": "ContactUs_Steps.user_enters_a_comment(String)"
});
formatter.result({
  "duration": 230297030,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs_Steps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 414584775,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs_Steps.user_is_landed_on_the_thank_you_page()"
});
formatter.result({
  "duration": 1084500052,
  "status": "passed"
});
formatter.after({
  "duration": 709286381,
  "status": "passed"
});
formatter.uri("DropDownCheckboxRadioButtons.feature");
formatter.feature({
  "line": 2,
  "name": "DropDownsChechboxesRadioButtons",
  "description": "",
  "id": "dropdownschechboxesradiobuttons",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Navigate to the Dropdown-Checkboxes-RadioButtons page and play with the dropdown menus",
  "description": "",
  "id": "dropdownschechboxesradiobuttons;navigate-to-the-dropdown-checkboxes-radiobuttons-page-and-play-with-the-dropdown-menus",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@dropdowns"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to Dropdown-Checkboxes-RadioButtons page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I select \"\u003cPrograming Language\u003e\" from the programming language drop down",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select \"\u003cUtility\u003e\" from the utilities drop down",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select \"\u003cui technology\u003e\" from the UI technologies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "\"\u003cPrograming Language\u003e\",\"\u003cUtility\u003e\" and \"\u003cui technology\u003e\" are displayed in the fields",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "dropdownschechboxesradiobuttons;navigate-to-the-dropdown-checkboxes-radiobuttons-page-and-play-with-the-dropdown-menus;",
  "rows": [
    {
      "cells": [
        "Programing Language",
        "Utility",
        "ui technology"
      ],
      "line": 12,
      "id": "dropdownschechboxesradiobuttons;navigate-to-the-dropdown-checkboxes-radiobuttons-page-and-play-with-the-dropdown-menus;;1"
    },
    {
      "cells": [
        "Python",
        "TestNG",
        "JQuery"
      ],
      "line": 13,
      "id": "dropdownschechboxesradiobuttons;navigate-to-the-dropdown-checkboxes-radiobuttons-page-and-play-with-the-dropdown-menus;;2"
    },
    {
      "cells": [
        "c#",
        "JUnit",
        "JavaScript"
      ],
      "line": 14,
      "id": "dropdownschechboxesradiobuttons;navigate-to-the-dropdown-checkboxes-radiobuttons-page-and-play-with-the-dropdown-menus;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3200009613,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Navigate to the Dropdown-Checkboxes-RadioButtons page and play with the dropdown menus",
  "description": "",
  "id": "dropdownschechboxesradiobuttons;navigate-to-the-dropdown-checkboxes-radiobuttons-page-and-play-with-the-dropdown-menus;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@dropdowns"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to Dropdown-Checkboxes-RadioButtons page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I select \"Python\" from the programming language drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select \"TestNG\" from the utilities drop down",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select \"JQuery\" from the UI technologies",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "\"Python\",\"TestNG\" and \"JQuery\" are displayed in the fields",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DropDownCheckoxesRadioButtons_Steps.user_navigates_to_Dropdown_Checkboxes_RadioButtons_page()"
});
formatter.result({
  "duration": 404654235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Python",
      "offset": 10
    }
  ],
  "location": "DropDownCheckoxesRadioButtons_Steps.i_select_from_the_programming_language_drop_down(String)"
});
formatter.result({
  "duration": 520426278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestNG",
      "offset": 10
    }
  ],
  "location": "DropDownCheckoxesRadioButtons_Steps.i_select_from_the_utilities_drop_down(String)"
});
formatter.result({
  "duration": 331535391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JQuery",
      "offset": 10
    }
  ],
  "location": "DropDownCheckoxesRadioButtons_Steps.i_select_from_the_UI_technologies(String)"
});
formatter.result({
  "duration": 318857440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Python",
      "offset": 1
    },
    {
      "val": "TestNG",
      "offset": 10
    },
    {
      "val": "JQuery",
      "offset": 23
    }
  ],
  "location": "DropDownCheckoxesRadioButtons_Steps.and_are_displayed_in_the_fields(String,String,String)"
});
formatter.result({
  "duration": 22569605,
  "error_message": "org.junit.ComparisonFailure: Checking the utility dropdown  expected:\u003c[testng]\u003e but was:\u003c[value]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat pageObjects.DropDownCheckboxesRadioButtons_Page.verifyDropDownValues(DropDownCheckboxesRadioButtons_Page.java:70)\r\n\tat steps.DropDownCheckoxesRadioButtons_Steps.and_are_displayed_in_the_fields(DropDownCheckoxesRadioButtons_Steps.java:39)\r\n\tat ✽.Then \"Python\",\"TestNG\" and \"JQuery\" are displayed in the fields(DropDownCheckboxRadioButtons.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1227468066,
  "status": "passed"
});
formatter.before({
  "duration": 3180205783,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Navigate to the Dropdown-Checkboxes-RadioButtons page and play with the dropdown menus",
  "description": "",
  "id": "dropdownschechboxesradiobuttons;navigate-to-the-dropdown-checkboxes-radiobuttons-page-and-play-with-the-dropdown-menus;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@dropdowns"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to Dropdown-Checkboxes-RadioButtons page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I select \"c#\" from the programming language drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select \"JUnit\" from the utilities drop down",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select \"JavaScript\" from the UI technologies",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "\"c#\",\"JUnit\" and \"JavaScript\" are displayed in the fields",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DropDownCheckoxesRadioButtons_Steps.user_navigates_to_Dropdown_Checkboxes_RadioButtons_page()"
});
formatter.result({
  "duration": 387980736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "c#",
      "offset": 10
    }
  ],
  "location": "DropDownCheckoxesRadioButtons_Steps.i_select_from_the_programming_language_drop_down(String)"
});
formatter.result({
  "duration": 409467471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JUnit",
      "offset": 10
    }
  ],
  "location": "DropDownCheckoxesRadioButtons_Steps.i_select_from_the_utilities_drop_down(String)"
});
formatter.result({
  "duration": 379632105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JavaScript",
      "offset": 10
    }
  ],
  "location": "DropDownCheckoxesRadioButtons_Steps.i_select_from_the_UI_technologies(String)"
});
formatter.result({
  "duration": 323868347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "c#",
      "offset": 1
    },
    {
      "val": "JUnit",
      "offset": 6
    },
    {
      "val": "JavaScript",
      "offset": 18
    }
  ],
  "location": "DropDownCheckoxesRadioButtons_Steps.and_are_displayed_in_the_fields(String,String,String)"
});
formatter.result({
  "duration": 19174091,
  "error_message": "org.junit.ComparisonFailure: Checking the utility dropdown  expected:\u003c[junit]\u003e but was:\u003c[value]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat pageObjects.DropDownCheckboxesRadioButtons_Page.verifyDropDownValues(DropDownCheckboxesRadioButtons_Page.java:70)\r\n\tat steps.DropDownCheckoxesRadioButtons_Steps.and_are_displayed_in_the_fields(DropDownCheckoxesRadioButtons_Steps.java:39)\r\n\tat ✽.Then \"c#\",\"JUnit\" and \"JavaScript\" are displayed in the fields(DropDownCheckboxRadioButtons.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1921653135,
  "status": "passed"
});
formatter.before({
  "duration": 3183686089,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Navigate to the Dropdown-Checkboxes-RadioButtons page and select all the checkboxes",
  "description": "",
  "id": "dropdownschechboxesradiobuttons;navigate-to-the-dropdown-checkboxes-radiobuttons-page-and-select-all-the-checkboxes",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@checkboxes"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User navigates to Dropdown-Checkboxes-RadioButtons page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I check all checkboxes",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "All the checkboxes should be selected",
  "keyword": "Then "
});
formatter.match({
  "location": "DropDownCheckoxesRadioButtons_Steps.user_navigates_to_Dropdown_Checkboxes_RadioButtons_page()"
});
formatter.result({
  "duration": 369264096,
  "status": "passed"
});
formatter.match({
  "location": "DropDownCheckoxesRadioButtons_Steps.i_check_all_checkboxes()"
});
formatter.result({
  "duration": 547832343,
  "status": "passed"
});
formatter.match({
  "location": "DropDownCheckoxesRadioButtons_Steps.all_the_checkboxes_should_be_selected()"
});
formatter.result({
  "duration": 80278209,
  "status": "passed"
});
formatter.after({
  "duration": 731194921,
  "status": "passed"
});
});