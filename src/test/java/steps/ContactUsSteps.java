package steps;

import Util.DriverFactory;
//import pageObjects.BaseClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


import java.io.IOException;

public class ContactUsSteps extends DriverFactory {


    @Given ("^User navigates to contact us page$")
    public void user_navigates_to_contact_us_page() throws IOException {
        contactUsPage.getContactUsPage();
    }

    @And ("^user enters the first name$")
    public void user_enters_the_first_name() throws Throwable {
        contactUsPage.enterFirstName("Adrian");
    }

    @And ("^user enters last name$")
    public void user_enters_last_name() throws Throwable {
        contactUsPage.enterLastName("Balea");

    }

    @And ("^user enters email$")
    public void user_enters_email() throws Throwable {
        contactUsPage.enterEmail("adrian.balea@mailinator.com");
    }

    @And ("^user enters a comment$")
    public void user_enters_a_comment() throws Throwable {
        contactUsPage.enterComment("Comment for the contact us page");
    }

    @When("^user clicks on the submit button$")
    public void user_clicks_on_the_submit_button() throws Throwable {
        contactUsPage.submitForm();

    }

    @Then("^user is landed on the thank you page$")
    public void user_is_landed_on_the_thank_you_page() throws Throwable {
        contactUsPage.succerssfullConfirmationCheck();
        Thread.sleep(2000);
    }


}
