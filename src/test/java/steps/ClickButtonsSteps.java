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

    @And("^click on the webelement click button$")
    public void click_on_the_webelement_click_button() throws Throwable {
        buttonsPage.clickOnFirstButton();
    }


    @When("^user closes the popup$")
    public void user_closes_the_popup() throws Throwable {
        buttonsPage.closeFirstPopup();
    }

    @Then("^the popup1 is closed$")
    public void the_popup_is_closed() throws Throwable {
        buttonsPage.checkPopup1isClosed();
    }


}
