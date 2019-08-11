package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.io.IOError;
import java.io.IOException;

public class ContactUs_Page extends BasePage {

    public @FindBy(xpath = "//input[@name='first_name']") WebElement textfield_FirstName;
    public @FindBy(xpath = "//input[@name='last_name']") WebElement textfield_LastName;
    public @FindBy(xpath = "//input[@name='email']") WebElement textfield_Email;
    public @FindBy(xpath = "//textarea[@name='message']") WebElement textfield_Comments;
    public @FindBy(xpath = "//input[@value='SUBMIT']") WebElement button_Submit;
    public @FindBy(id = "contact_reply") WebElement text_ThankYouMessage;

    public ContactUs_Page() throws IOException {
        super();
    }

    public ContactUs_Page getContactUsPage() throws IOException {
        getDriver().get("http://webdriveruniversity.com/Contact-Us/contactus.html");
        return new ContactUs_Page();
    }

    public ContactUs_Page enterFirstName (String firstName) throws Exception {
        sendKeysToWebElement(textfield_FirstName, firstName);
        return new ContactUs_Page();
    }

    public ContactUs_Page enterLastName (String lastName) throws Exception {
        sendKeysToWebElement(textfield_LastName, lastName);
        return new ContactUs_Page();
    }

    public ContactUs_Page enterEmail (String Email) throws Exception {
        sendKeysToWebElement(textfield_Email, Email);
        return new ContactUs_Page();
    }

    public ContactUs_Page enterComment (String Comment) throws Exception {
        sendKeysToWebElement(textfield_Comments, Comment);
        return new ContactUs_Page();
    }

    public ContactUs_Page submitForm () throws Exception {
        waitAndClickElement(button_Submit);
        return new ContactUs_Page();
    }

    public ContactUs_Page succerssfullConfirmationCheck() throws IOException {
        WaitUntilWebElementIsVisible(text_ThankYouMessage);
        Assert.assertEquals("Thank You for your Message!",text_ThankYouMessage.getText() );
        return new ContactUs_Page();
    }

}
