$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DropDownCheckboxRadioButtons.feature");
formatter.feature({
  "line": 2,
  "name": "DropDownsChechboxesRadioButtons",
  "description": "",
  "id": "dropdownschechboxesradiobuttons",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2234238716,
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
  "duration": 593983948,
  "status": "passed"
});
formatter.match({
  "location": "DropDownCheckoxesRadioButtons_Steps.i_check_all_checkboxes()"
});
formatter.result({
  "duration": 334778170,
  "status": "passed"
});
formatter.match({
  "location": "DropDownCheckoxesRadioButtons_Steps.all_the_checkboxes_should_be_selected()"
});
formatter.result({
  "duration": 103082131,
  "error_message": "java.lang.AssertionError: Checking checkbox 2\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat pageObjects.DropDownCheckboxesRadioButtons_Page.verifyCheckboxesAreSelected(DropDownCheckboxesRadioButtons_Page.java:83)\n\tat steps.DropDownCheckoxesRadioButtons_Steps.all_the_checkboxes_should_be_selected(DropDownCheckoxesRadioButtons_Steps.java:45)\n\tat ✽.Then All the checkboxes should be selected(DropDownCheckboxRadioButtons.feature:20)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 625100718,
  "status": "passed"
});
});