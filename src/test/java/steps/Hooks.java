package steps;

import Util.DriverFactory;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends DriverFactory {

    @Before
    public void setup() {
        driver = getDriver();
    }

    @After
    public void tearDown() {
        try {
            if(driver != null) {
                driver.manage().deleteAllCookies();
                driver.close();
                driver.quit();
                driver = null;
            }
        } catch(Exception e) {
            System.out.println("Method Failed: screenshotOnFailure, Exception: " + e.getMessage());
        }
    }

}