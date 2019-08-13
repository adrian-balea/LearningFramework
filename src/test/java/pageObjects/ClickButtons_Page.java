package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.io.IOException;
import java.sql.SQLOutput;

public class ClickButtons_Page extends BasePage {

    public @FindBy(xpath = "//*[@id='button1']") WebElement button1;
    public @FindBy (xpath="//*[@id='myModalClick']/div/div/div[3]/button") WebElement Popup1Close_button;
    public @FindBy (xpath="//*[@id='main-header']/h1") WebElement pagetitle;
    public @FindBy (xpath="//*[@id='myModalClick']/div/div") WebElement modal1;

    public ClickButtons_Page() throws IOException {
        super();
    }

    public ClickButtons_Page getClickbuttonsPage() throws IOException {
        getDriver().get("http://webdriveruniversity.com/Click-Buttons/index.html");
        return new ClickButtons_Page();
    }

    public ClickButtons_Page clickOnFirstButton() throws IOException, InterruptedException {
        waitAndClickElement(button1);
        return new ClickButtons_Page();
    }

    public ClickButtons_Page closeFirstPopup() throws IOException, InterruptedException {
        waitAndClickElement(Popup1Close_button);
        return new ClickButtons_Page();
    }

    public ClickButtons_Page checkPopup1isClosed() throws IOException, InterruptedException {
        Thread.sleep(500);
        Assert.assertFalse(modal1.isDisplayed());
        return new ClickButtons_Page();
    }


}