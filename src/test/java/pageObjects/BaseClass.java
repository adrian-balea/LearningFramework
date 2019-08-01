package pageObjects;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BaseClass {
   public static WebDriver driver;

    public BaseClass() {
        startDriver();
    }

    //@Before
    public void startDriver(){
        System.setProperty("webdriver.chrome.driver", "src/test/java/resources/chromedriver");
        driver = new ChromeDriver();
        driver.manage().window().fullscreen();

    }

    @After
    public void  tearDown(){
        if (driver != null){
            driver.manage().deleteAllCookies();
            driver.close();
            driver.quit();
        }
    }

    public static void navigateToHomepage(){
        driver.get("http://webdriveruniversity.com/");
    }
}
