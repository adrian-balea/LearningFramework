
Feature: DropDownsChechboxesRadioButtons
  @dropdowns
  Scenario Outline: Navigate to the Dropdown-Checkboxes-RadioButtons page and play with the dropdown menus
    Given User navigates to Dropdown-Checkboxes-RadioButtons page
    When I select "<Programing Language>" from the programming language drop down
    And  I select "<Utility>" from the utilities drop down
    And I select "<ui technology>" from the UI technologies
    Then "<Programing Language>","<Utility>" and "<ui technology>" are displayed in the fields

    Examples:
      |Programing Language  | Utility |ui technology|
      | Python              | TestNG  |JQuery       |
      |   c#                | JUnit   |JavaScript   |

  @checkboxes
    Scenario: Navigate to the Dropdown-Checkboxes-RadioButtons page and select all the checkboxes
      Given User navigates to Dropdown-Checkboxes-RadioButtons page
      When I check all checkboxes
      Then All the checkboxes should be selected