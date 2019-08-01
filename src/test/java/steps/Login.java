package steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageObjects.BaseClass;
import pageObjects.Homepage;

import static org.junit.Assert.assertTrue;

//import pageObjects.BaseClass;

public class Login {

    BaseClass bClass = new BaseClass();
    Homepage homepage = new Homepage();

   // WebDriver driver;

    @Given("^User navigates to stackoverflow website$")
    public void user_navigates_to_stackoverflow_website() throws Throwable {
        bClass.driver.get(homepage.getMasterURL());
        assertTrue("/n **** ERROR - WRONG URL",bClass.driver.getCurrentUrl().equals(homepage.getMasterURL()));
        assertTrue("/n **** ERROR - Heading isn't correct ",bClass.driver.getTitle().contains("WebDriverUniversity"));

        System.out.println("It works!");
        bClass.tearDown();
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
        homepage.clickContactUsLInk();
    }
}
