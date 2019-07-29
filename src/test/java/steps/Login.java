package steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.chrome.ChromeDriver;

public class Login {

    ChromeDriver driver;

    @Before
    public void setup(){
        System.setProperty("webdriver.chrome.driver", "src/test/java/resources/chromedriver");
        driver = new ChromeDriver();
        driver.manage().window().fullscreen();
    }

    @After
    public void  tearDown(){
        if (driver != null){
            driver.manage().deleteAllCookies();
            driver.quit();
        }
    }

    @Given("^User navigates to stackoverflow website$")
    public void user_navigates_to_stackoverflow_website() throws Throwable {
       driver.get("https://stackoverflow.com/");
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



}
