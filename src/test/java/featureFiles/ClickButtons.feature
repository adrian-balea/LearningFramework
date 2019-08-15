@Buttons
Feature: Click the buttons

    Scenario: Click the first button and close the popup
        Given User navigates to click buttons page
        And clicks on the first button
        When user closes the first popup
        Then check that the first popup is closed

    Scenario: Click the second button and close the popup
        Given User navigates to click buttons page
        And clicks on the second button
        When user closes the second popup
        Then check that the second popup is closed

    Scenario: Click the third button and close the popup
        Given User navigates to click buttons page
        And clicks on the third button
        When user closes the third popup
        Then check that the third popup is closed
