package steps;

import Util.DriverFactory;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import pageObjects.ClickButtons_Page;

import java.io.IOException;

public class ClickButtonsSteps extends DriverFactory {

    @Given("^User navigates to click buttons page$")
    public void user_navigates_to_click_buttons_page() throws IOException, InterruptedException {
        buttonsPage.getClickbuttonsPage();

    }

    @And("^clicks on the first button$")
    public void click_on_the_webelement_click_button() throws Throwable {
        buttonsPage.clickOnFirstButton();
    }


    @When("^user closes the first popup$")
    public void user_closes_the_popup() throws Throwable {
        buttonsPage.closeFirstPopup();
    }

    @Then("^the popup1 is closed$")
    public void the_popup_is_closed() throws Throwable {
        buttonsPage.checkPopup1isClosed();
    }

    @And("^clicks on the second button$")
    public void clicks_on_the_second_button() throws Throwable {
        buttonsPage.clickOnSecondButton();
        Thread.sleep(1000);
    }

    @When("^user closes the second button$")
    public void user_closes_the_second_button() throws Throwable {
       buttonsPage.closeSecondPopup();
    }

    @Then("^second popup is closed$")
    public void second_popup_is_closed() throws Throwable {
        buttonsPage.checkPopup2isClosed();
    }


}
