package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class DropDownCheckboxesRadioButtons_Page extends BasePage {
    public @FindBy (id="dropdowm-menu-1") WebElement dropdown1;
    public @FindBy (id="dropdowm-menu-2") WebElement dropdown2;
    public @FindBy (id="dropdowm-menu-3") WebElement dropdown3;
    public @FindBy (xpath="//*[@id='checkboxes']/label[1]/input") WebElement checkbox1;
    public @FindBy (xpath="//*[@id='checkboxes']/label[2]/input") WebElement checkbox2;
    public @FindBy (xpath="//*[@id='checkboxes']/label[3]/input") WebElement checkbox3;
    public @FindBy (xpath="//*[@id='checkboxes']/label[4]/input") WebElement checkbox4;


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

    public DropDownCheckboxesRadioButtons_Page selectAllCheckboxes () throws Exception{
        /** Selects all unchecked checkboxes on the DropDownCheckboxRadioButtons page */

        List<WebElement> checkboxes = Arrays.asList(checkbox1,checkbox2,checkbox3,checkbox4);

        for (WebElement checkbox : checkboxes) {
            if (!(checkbox.isSelected()) ) {
            waitAndClickElement(checkbox);
        }
        }


        return new DropDownCheckboxesRadioButtons_Page();
    }

    public DropDownCheckboxesRadioButtons_Page verifyDropDownValues (String ProgramingLanguage, String Utility, String UiTechnology) throws Exception {

        Assert.assertEquals("Checking the programming language dropdown ",ProgramingLanguage.toLowerCase(),dropdown1.getAttribute("value").toLowerCase());

        Assert.assertEquals("Checking the utility dropdown ",Utility.toLowerCase(),dropdown2.getAttribute("value").toLowerCase());

        Assert.assertEquals("Checking the programming UI technology dropdown ",UiTechnology.toLowerCase(),dropdown3.getAttribute("value").toLowerCase());

        return new DropDownCheckboxesRadioButtons_Page();
    }

    public DropDownCheckboxesRadioButtons_Page verifyCheckboxesAreSelected () throws IOException {

        List<WebElement> checkboxes = Arrays.asList(checkbox1,checkbox2,checkbox3,checkbox4);

        int i = 1;
        for (WebElement checkbox : checkboxes) {
            Assert.assertTrue("Checking checkbox "+i,checkbox.isSelected());
            i++;
        }

        return new DropDownCheckboxesRadioButtons_Page();
    }
}
