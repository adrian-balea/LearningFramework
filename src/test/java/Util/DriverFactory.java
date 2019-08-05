package Util;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.util.concurrent.TimeUnit;

public class DriverFactory {
    public ReadFrom readFrom;
    public static WebDriver driver;
    private String osType = getOSType();
    private String browserName = null;

    private String getOSType(){
        return System.getProperty("os.name");
    }


    public WebDriver getDriver() {

        browserName = "chrome";

        try {
            System.out.println(osType + "detected");

            switch (browserName) {

                case "firefox":

                    if (null == driver) {
                        if (osType.contains("Mac")) {
                            System.setProperty("webdriver.gecko.driver", Constant.MAC_GECKO_DRIVER_DIRECTORY);
                        }else {
                            System.setProperty("webdriver.gecko.driver", Constant.WIN_GECKO_DRIVER_DIRECTORY);
                        }
                        DesiredCapabilities capabilities = DesiredCapabilities.firefox();
                        capabilities.setCapability("marionette", true);
                        driver = new FirefoxDriver();
                    }
                    break;

                case "chrome":

                    if (null == driver) {
                        if (osType.contains("Mac")) {
                            System.setProperty("webdriver.chrome.driver", Constant.MAC_CHROME_DRIVER_DIRECTORY);
                        } else
                        {
                            System.setProperty("webdriver.chrome.driver", Constant.WIN_CHROME_DRIVER_DIRECTORY);
                        }
                        driver = new ChromeDriver();
                        driver.manage().window().maximize();
                    }
                    break;

                case "ie":

                    if (null == driver) {
                        DesiredCapabilities capabilities = DesiredCapabilities.internetExplorer();
                        if (osType.contains("Mac")) {
                            System.setProperty("webdriver.ie.driver", Constant.MAC_IE_DRIVER_DIRECTORY);
                        }else
                        {
                            System.setProperty("webdriver.ie.driver", Constant.WIN_IE_DRIVER_DIRECTORY);
                        }
                        capabilities.setCapability("ignoreZoomSetting", true);
                        driver = new InternetExplorerDriver(capabilities);
                        driver.manage().window().maximize();
                    }
                    break;
            }
        } catch (Exception e) {
            System.out.println("Unable to load browser: " + e.getMessage());
        } finally {

            driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
            System.out.println("Finally");
        }
        System.out.println("Return driver");
        return driver;
    }



}
