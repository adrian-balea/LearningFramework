@Buttons
Feature: Click the buttons

    Scenario: Click the first button and close the popup
        Given User navigates to click buttons page
        And clicks on the first button
        When user closes the first popup
        Then the popup1 is closed

    Scenario: Click the second button and close the popup
        Given User navigates to click buttons page
        And clicks on the second button
        When user closes the second button
        Then second popup is closed

