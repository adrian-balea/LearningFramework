package pageObjects;

import org.openqa.selenium.By;

public class Homepage extends BaseClass {

    public String getMasterURL() {
        return masterURL;
    }

    private String masterURL = "https://www.webdriveruniversity.com/";
    private By contactUsLink = By.cssSelector("#contact-us");

    public void clickContactUsLInk() throws InterruptedException {
        Thread.sleep(5000);
        driver.findElement(By.cssSelector("#contact-us")).click();
        //driver.findElement(By.linkText("CONTACT US")).click();
    }



    //public void navigateToHomepage(){
     //   driver.get("http://webdriveruniversity.com/");
   // }
}
