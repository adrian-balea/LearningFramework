$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DropDownCheckboxRadioButtons.feature");
formatter.feature({
  "line": 2,
  "name": "DropDownsChechboxesRadioButtons",
  "description": "",
  "id": "dropdownschechboxesradiobuttons",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2114531884,
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
  "duration": 676946705,
  "status": "passed"
});
formatter.match({
  "location": "DropDownCheckoxesRadioButtons_Steps.i_check_all_checkboxes()"
});
formatter.result({
  "duration": 412940573,
  "status": "passed"
});
formatter.match({
  "location": "DropDownCheckoxesRadioButtons_Steps.all_the_checkboxes_should_be_selected()"
});
formatter.result({
  "duration": 78201805,
  "status": "passed"
});
formatter.after({
  "duration": 125563657,
  "status": "passed"
});
});