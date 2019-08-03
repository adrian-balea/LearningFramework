package BaseClass;

// Base class to hold all master webDriver functionality

import Util.ReadFrom;
import org.junit.After;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BaseClass {

    public WebDriver driver;
    private String osType = getOSType();
    public final String baseURL = setBaseUrl();

    private String setBaseUrl() {
        return ReadFrom.propertiesFile("defaultSetupProperties","url");
    }

    // Default constructor - will ALWAYS run when baseclass is called
    // Will always open Chrome driver and go to default URL - defined in the properties file
    public BaseClass() {
        chromeDriverOSPathConstructor();
        startWebDriver();
    }

    public void startWebDriver(){
        driver = new ChromeDriver();
        driver.manage().window().fullscreen();
        driver.get(baseURL);
    }

    @After
    public void  tearDown() {
        if (driver != null) {
            driver.manage().deleteAllCookies();
            driver.quit();
        }
    }

    // To find out if Win / Mac so we can assign correct ChromeDriver instance
    private String getOSType(){
        return System.getProperty("os.name");
    }

    private void chromeDriverOSPathConstructor() {
        getOSType();
        if (osType.contains("Mac")) {
            // if Mac calling the mac instance of Chrome.exe (without .exe as Mac)
            System.out.println("Mac OS detected");
            System.setProperty("webdriver.chrome.driver", "src/test/java/resources/chromedriver");
        } else if (osType.contains("Windows")) {
            System.out.println("Windows OS Detected");
            System.setProperty("webdriver.chrome.driver", "src/test/java/resources/Win32/chromedriver.exe");
        }
    }

}
