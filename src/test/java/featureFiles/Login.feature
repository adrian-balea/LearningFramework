Feature: Submit the Contact us page

  Scenario: Login into account with correct credentials

    Given User navigates to contact us page
    And user enters the first name
    And user enters last name
    And user enters email
    And user enters a comment
    When user clicks on the submit button
    Then user is landed on the thank you page