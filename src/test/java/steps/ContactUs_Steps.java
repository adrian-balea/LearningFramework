package steps;

import Util.DriverFactory;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


import java.io.IOException;

public class ContactUs_Steps extends DriverFactory {


    @Given ("^User navigates to contact us page$")
    public void user_navigates_to_contact_us_page() throws IOException {
        contactUsPage.getContactUsPage();
    }

    @And ("^user enters \"([^\"]*)\" as first name$")
    public void user_enters_the_first_name(String firstName) throws Throwable {
        contactUsPage.enterFirstName(firstName);
    }

    @And ("^user enters \"([^\"]*)\" as last name$")
    public void user_enters_last_name(String lastName) throws Throwable {
        contactUsPage.enterLastName(lastName);
    }

    @And ("^user enters \"([^\"]*)\" as email$")
    public void user_enters_email(String email) throws Throwable {
        contactUsPage.enterEmail(email);
    }

    @And ("^user enters \"([^\"]*)\" comment$")
    public void user_enters_a_comment(String comment) throws Throwable {
        contactUsPage.enterComment(comment);
    }

    @When("^user clicks on the submit button$")
    public void user_clicks_on_the_submit_button() throws Throwable {
        contactUsPage.submitForm();
    }

    @Then("^user is landed on the thank you page$")
    public void user_is_landed_on_the_thank_you_page() throws Throwable {
        contactUsPage.succerssfullConfirmationCheck();
        Thread.sleep(1000);
    }


}
