Feature: Submit the Contact us page

  Scenario Outline: Login into account with correct credentials

    Given User navigates to contact us page
    And user enters "<firstName>" as first name
    And user enters "<lastName>" as last name
    And user enters "<email>" as email
    And user enters "<comment>" comment
    When user clicks on the submit button
    Then user is landed on the thank you page

    Examples:
      |firstName  | lastName| email                     |comment                        |
      |Adrian     | Balea   |adrian.balea@mailinator.com|Comment for the contact us page|