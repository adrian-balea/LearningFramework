package steps;

import Util.DriverFactory;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.IOException;

public class ClickButtons_Steps extends DriverFactory {

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

    @And("^clicks on the second button$")
    public void clicks_on_the_second_button() throws Throwable {
        buttonsPage.clickOnSecondButton();
        Thread.sleep(1000);
    }

    @And ("^clicks on the third button$")
    public void clicks_on_the_third_button() throws Throwable {
        buttonsPage.clickOnThirdButton();
    }

    @When("^user closes the second popup$")
    public void user_closes_the_second_popup() throws Throwable {
       buttonsPage.closeSecondPopup();
    }

    @When("^user closes the third popup$")
    public void user_closes_the_third_popup() throws Throwable {
        buttonsPage.closeThirdPopup();
    }
    @Then("^check that the first popup is closed$")
    public void the_popup_is_closed() throws Throwable {
        buttonsPage.checkPopup1isClosed();
    }

    @Then("^check that the second popup is closed$")
    public void second_popup_is_closed() throws Throwable {
        buttonsPage.checkPopup2isClosed();
    }

    @Then("^check that the third popup is closed$")
    public void third_popup_is_closed() throws Throwable {
        buttonsPage.checkPopup3isClosed();
    }


}
