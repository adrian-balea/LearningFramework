package steps;

import pageObjects.BaseClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login extends BaseClass {

    @Given("^User navigates to stackoverflow website$")
    public void user_navigates_to_stackoverflow_website() throws Throwable {
       //driver.get("https://stackoverflow.com/");
       tearDown();

    }

    @And("^user clicks on login$")
    public void user_clicks_on_login() throws Throwable {

    }

    @And("^user enters a valid username$")
    public void user_enters_a_valid_username() throws Throwable {

    }

    @And("^user enters a valid password$")
    public void user_enters_a_valid_password() throws Throwable {

    }

    @When("^user clicks on the login button$")
    public void user_clicks_on_the_login_button() throws Throwable {

    }

    @Then("^user should be taken to the succesful login page$")
    public void user_should_be_taken_to_the_succesful_login_page() throws Throwable {

    }


    @Then("^user click on contact Us$")
    public void userClickOnContactUs() throws InterruptedException {

    }
}
