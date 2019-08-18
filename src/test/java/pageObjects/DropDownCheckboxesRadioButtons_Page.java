package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.io.IOException;

public class DropDownCheckboxesRadioButtons_Page extends BasePage {
    public @FindBy (id="dropdowm-menu-1") WebElement dropdown1;
    public @FindBy (id="dropdowm-menu-2") WebElement dropdown2;
    public @FindBy (id="dropdowm-menu-3") WebElement dropdown3;

    public DropDownCheckboxesRadioButtons_Page() throws IOException {
        super();
    }

    public DropDownCheckboxesRadioButtons_Page getDropDownCheckboxesRadioButtonsPage() throws IOException {
        getDriver().get("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");
        return new DropDownCheckboxesRadioButtons_Page();
    }

    public DropDownCheckboxesRadioButtons_Page selectProgramingLanguage (String ProgramingLanguage) throws Exception {
        waitAndClickElement(dropdown1);
        clickOnTextFromDropdownList(dropdown1,ProgramingLanguage);
        return new DropDownCheckboxesRadioButtons_Page();
    }

    public DropDownCheckboxesRadioButtons_Page selectUtility (String Utility) throws Exception {
        waitAndClickElement(dropdown2);
        clickOnTextFromDropdownList(dropdown2,Utility);
        return new DropDownCheckboxesRadioButtons_Page();
    }

    public DropDownCheckboxesRadioButtons_Page selectUiTechnology (String UiTechnology) throws Exception {
        waitAndClickElement(dropdown3);
        clickOnTextFromDropdownList(dropdown3,UiTechnology);
        return new DropDownCheckboxesRadioButtons_Page();
    }

    public DropDownCheckboxesRadioButtons_Page verifyDropDownValues (String ProgramingLanguage, String Utility, String UiTechnology) throws Exception {
        System.out.println("Dropdown 1 values is" + dropdown1.getText());
        System.out.println("Dropdown 2 values is" + dropdown2.getText());
        return new DropDownCheckboxesRadioButtons_Page();
    }
}
