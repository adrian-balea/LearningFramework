package steps;

import Util.DriverFactory;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import sun.jvm.hotspot.runtime.Thread;

public class DropDownCheckoxesRadioButtons_Steps extends DriverFactory {

    @Given("^User navigates to Dropdown-Checkboxes-RadioButtons page$")
    public void user_navigates_to_Dropdown_Checkboxes_RadioButtons_page() throws Throwable {
        dropDownCRB.getDropDownCheckboxesRadioButtonsPage();
    }

    @When("^I select \"([^\"]*)\" from the programming language drop down$")
    public void i_select_from_the_programming_language_drop_down(String ProgramingLanguage) throws Throwable {
        dropDownCRB.selectProgramingLanguage(ProgramingLanguage);
    }

    @When("^I check all checkboxes$")
    public void i_check_all_checkboxes() throws Throwable {
        dropDownCRB.selectAllCheckboxes();
    }

    @And("^I select \"([^\"]*)\" from the utilities drop down$")
    public void i_select_from_the_utilities_drop_down(String Utility) throws Throwable {
        dropDownCRB.selectUtility(Utility);
    }

    @And("^I select \"([^\"]*)\" from the UI technologies$")
    public void i_select_from_the_UI_technologies(String UiTechnology) throws Throwable {
        dropDownCRB.selectUiTechnology(UiTechnology);
    }

    @Then("^\"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\" are displayed in the fields$")
    public void and_are_displayed_in_the_fields(String ProgramingLanguage, String Utility, String UiTechnology) throws Throwable {
        dropDownCRB.verifyDropDownValues(ProgramingLanguage, Utility, UiTechnology);
    }


    @Then("^All the checkboxes should be selected$")
    public void all_the_checkboxes_should_be_selected() throws Throwable {
        dropDownCRB.verifyCheckboxesAreSelected();
    }

}
