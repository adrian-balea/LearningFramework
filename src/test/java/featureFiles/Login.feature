Feature: Login into account

  Scenario: Login into account with correct credentials

    Given User navigates to stackoverflow website
    And user clicks on login
    Then user click on contact Us
    And user enters a valid username
    And user enters a valid password
    When user clicks on the login button
    Then user should be taken to the succesful login page